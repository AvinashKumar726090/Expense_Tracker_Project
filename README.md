
# Full Stack Expense Tracker Project

Welcome to Expense Tracker! This project aims to provide a simple yet effective solution for tracking your expenses. Whether you're managing personal finances or keeping track of expenses for a business, Expense Tracker has got you covered.


## Features

- Expense Logging: Easily log your expenses with details such as date, category, amount, and description.
- Category Management: Customize your expense categories to suit your specific needs. Whether it's groceries, entertainment, or travel, you can create categories that reflect your spending habits.
- Budget Setting: Set monthly budgets for each expense category to help you stay on track with your spending goals.
- Expense Analytics: Gain insights into your spending habits with detailed analytics and visualizations. Track your expenses over time, identify spending patterns, and make informed decisions to improve your financial management.
- Multi-platform Support: Expense Tracker is accessible on multiple platforms, including web browsers, mobile devices, and desktop applications, ensuring that you can manage your expenses wherever you are.
### Premium User Features:
 - Download Report: Premium users can download detailed expense reports in various formats for further analysis.
  - Leaderboard: Compete with other premium users and track your spending performance compared to others.
  - Expense History: Premium users can view their expense history and easily identify the dates where they have spent the most.


## Tech Stack

**Front-End :** 
- HTML: Markup language for structuring web pages.
- CSS: Styling language for enhancing the visual presentation of web pages.
- Bootstrap: Front-end framework for building responsive and mobile-first websites.
**Back-End :**
- Node.js: JavaScript runtime environment for server-side development.
- Express.js: Web application framework for Node.js for building APIs and web applications.

**Database :**
- MySQL: Relational database management system for storing expense data and user information.

**REST API :**
- Expense Tracker exposes RESTful APIs to interact with the application, enabling seamless integration with various client platforms.

**AWS (Amazon Web Services) :**
-  Expense Tracker leverages AWS for hosting, storage, and other cloud-based services, ensuring scalability, reliability, and security.




## Installation

Install my-project with npm

```bash
  git clone https://github.com/AvinashKumar726090/Expense_Tracker_Project.git
  cd expense-tracker
  npm install
```
## Database Setup: Set up your MySQL database and configure the connection details in the application.
```bash 
CREATE DATABASE expense_tracker;

```
## Environment Variables: Configure environment variables for database connection, AWS credentials, and other sensitive information.
```bash
.env
```

## Run the Application: Start the Node.js server.
```bash
npm start
```

    
## License
- Expense Tracker is licensed under the [MIT](https://opensource.org/license/mit) License. You are free to use, modify, and distribute the software in accordance with the terms of the license.




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
- PORT 

`PORT` 

- database

`WEBSITE` = http://localhost:3000

`DATABASE_NAME`

`DATABASE_USERNAME`

`DATABASE_PASSWORD`

`DATABASE_DIALECT`

`DATABASE_HOST`

- Payment Gateway API (razorpay api key id)
`RAZORPAY_KEY_ID`
`RAZORPAY_KEY_SECRET` 



- AWS 
`BUCKET_NAME`
`AWS_ACCESS_KEY_ID`
`AWS_SECRET_ACCESS_KEY`

- jwt 
`SECRET_KEY`
 
 - Email SMTP API

`SIB_API_KEY`










## Screenshots
### Dashboard: 

![App Screenshot](https://private-user-images.githubusercontent.com/132739967/328989312-9b0c5b2b-9501-4e43-8a19-e4e585188f41.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUxOTExODAsIm5iZiI6MTcxNTE5MDg4MCwicGF0aCI6Ii8xMzI3Mzk5NjcvMzI4OTg5MzEyLTliMGM1YjJiLTk1MDEtNGU0My04YTE5LWU0ZTU4NTE4OGY0MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUwOFQxNzU0NDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lNjcyMjQxZTVlNWNhM2EzN2QyZGRjMzk5MWVkZWNmOWU0NWNiNGE5NjIxNTlkYzgzMzQ5MzhiY2UwYWMzZWE1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.sHfop3F4CjxbE0CAeaQFd0bYG78Zf9N4Sy7OtigZ5Hs)

### Login/Signup:
![App Screenshot](https://private-user-images.githubusercontent.com/132739967/328989347-fb29377c-7df0-4af9-9dff-729ed800dc1c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUxOTE1OTksIm5iZiI6MTcxNTE5MTI5OSwicGF0aCI6Ii8xMzI3Mzk5NjcvMzI4OTg5MzQ3LWZiMjkzNzdjLTdkZjAtNGFmOS05ZGZmLTcyOWVkODAwZGMxYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUwOFQxODAxMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMDFmZDI4MWRlMjY0NmViZjgyZjUwOGRmMjQyNDRiOTJlYmMzNmE3OTMxNWJmZjRhNzU0YjM0MjdhMDUzN2ViJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.7TU3TNVLAOWoPPnRuYxtV9WUIsazBBrWF_1CH_sPcAQ)

### After Login Dashboard:
![App Screenshot](https://private-user-images.githubusercontent.com/132739967/328989365-9c4de4f1-f0ea-469a-b6d5-b951d1e11d99.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUxOTE1OTksIm5iZiI6MTcxNTE5MTI5OSwicGF0aCI6Ii8xMzI3Mzk5NjcvMzI4OTg5MzY1LTljNGRlNGYxLWYwZWEtNDY5YS1iNmQ1LWI5NTFkMWUxMWQ5OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUwOFQxODAxMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYWNkODVkMjIxZjk2ZmIxNWJlYjg5YjNlZTJlNGYwM2JjNTdlNDFlMmZiY2I0MTYxMWIxODQ3Y2ZkYzU5MTIzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.sSz3zFk00E39f4BfzK3g2IvI3uEDMUNlP_0hF24_F54)

### Payment: 
![App Screenshot](https://private-user-images.githubusercontent.com/132739967/328989381-c690c551-c709-43ce-814d-bd67b9da459a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUxOTE1OTksIm5iZiI6MTcxNTE5MTI5OSwicGF0aCI6Ii8xMzI3Mzk5NjcvMzI4OTg5MzgxLWM2OTBjNTUxLWM3MDktNDNjZS04MTRkLWJkNjdiOWRhNDU5YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUwOFQxODAxMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mZjYwNzlkOWQ5NzljNTAyMDg5ZDRmYjIzNWEyMjdiZTc0YWI3MmRhYmU4ZDhmYjc5NWZmN2ZlMDUzMTZkYjA1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.vdaavY7B5UcRvHfvG_3Pcv2lS98COrJlOB_u8LezGhg)




### Forgot Password Dashboard:
![App Screenshot](https://private-user-images.githubusercontent.com/132739967/328989438-86b56e13-7879-4c99-a619-bd15b5215df2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUxOTE1OTksIm5iZiI6MTcxNTE5MTI5OSwicGF0aCI6Ii8xMzI3Mzk5NjcvMzI4OTg5NDM4LTg2YjU2ZTEzLTc4NzktNGM5OS1hNjE5LWJkMTViNTIxNWRmMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUwOFQxODAxMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ZDVlNTNhMzdmNTQwNjczZGJiNzI1YmJlNjEyNDkyOGRmMTE0MDFlMGZmODc1NTA3M2MyYzEyOTllODRlYzgyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.XjVVP8JtGCunMM1sSqE3Qe0Eac9NcGpyeSAFuMN_YvU)

## Authors

- [Avinash Kumar](https://github.com/AvinashKumar726090)


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/avinash-kumar-2547721a6/)



## Contributing

Contributions are always welcome! See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


