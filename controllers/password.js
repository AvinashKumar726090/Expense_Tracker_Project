const User = require('../models/users');
const ForgotPasswords = require('../models/forgotpasswords');
const bcrypt = require('bcrypt');
const Sib = require('sib-api-v3-sdk');
const client = Sib.ApiClient.instance;
client.authentications['api-key'].apiKey = process.env.SIB_API_KEY;
const tranEmailApi = new Sib.TransactionalEmailsApi();

exports.resetpasswordform = async (request, response, next) => {
    try {
        let id = request.params.id;
        const passwordreset = await ForgotPasswords.findByPk(id);
        if (passwordreset && passwordreset.isactive) {
            passwordreset.isactive = false;
            await passwordreset.save();
            response.sendFile('resetpassword.html', { root: 'views' });
        } else {
            return response.status(401).json({ message: "Link has expired" });
        }
    } catch (error) {
        console.error("Error in resetpasswordform:", error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.requestresetpassword = async (request, response, next) => {
    try {
        const { email } = request.body;
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            const resetresponse = await user.createForgotpassword({});
            const { id } = resetresponse;
            const resetLink = `${process.env.WEBSITE}/password/reset/${id}`;
            const mailresponse = await tranEmailApi.sendTransacEmail({
                sender: { email: 'avinash726090.iimt@gmail.com', name: 'From Avinash Kumar Pvt.Ltd' },
                to: [{ email: email }],
                subject: "Reset Your password",
                htmlContent: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Password Reset</title>
                    </head>
                    <body>
                        <h1>Reset Your Password</h1>
                        <p>Click the button below to reset your password:</p>
                        <button><a href="${resetLink}">Reset Password</a></button>
                    </body>
                    </html>`
            });
            response.status(200).json({ message: 'Password reset email sent' });
        } else {
            response.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error("Error in requestresetpassword:", error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.resetpassword = async (request, response, next) => {
    try {
        const { resetid, newpassword } = request.body;
        const passwordreset = await ForgotPasswords.findByPk(resetid);
        if (passwordreset) {
            const currentTime = new Date();
            const createdAtTime = new Date(passwordreset.createdAt);
            const timeDifference = currentTime - createdAtTime;
            const timeLimit = 5 * 60 * 1000; // 5 minutes in milliseconds
            if (timeDifference <= timeLimit) {
                const hashedPassword = await bcrypt.hash(newpassword, 10);
                await User.update({ password: hashedPassword }, { where: { id: passwordreset.UserId } });
                response.status(200).json({ message: "Password reset successful." });
            } else {
                response.status(403).json({ message: "Link has expired" });
            }
        } else {
            response.status(404).json({ message: "Invalid reset ID" });
        }
    } catch (error) {
        console.error("Error in resetpassword:", error);
        response.status(500).json({ message: "Internal server error" });
    }
};
