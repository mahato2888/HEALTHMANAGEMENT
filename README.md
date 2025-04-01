# Health Management System

This project is a simple **Health Management System** that includes a backend API built with **PHP** and a frontend built using **React.js**. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on user data, including fields like **name**, **email**, **password**, and **date of birth (DOB)**.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Testing the API](#testing-the-api)
- [Version Control](#version-control)
- [License](#license)

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: PHP (RESTful API), MySQL (Database)
- **Database**: MySQL (health_db)
- **Version Control**: Git, GitHub

## Setup Instructions

Follow these steps to set up the project on your local machine:

### Prerequisites

- **XAMPP** (for PHP and MySQL)
- **Node.js** (for React development)
- **npm** (Node Package Manager)

### 1. Clone the Repository
First, clone the repository to your local machine:
```sh
git clone https://github.com/your-username/health-management.git
cd health-management


Backend Setup
The backend consists of a PHP RESTful API that connects to a MySQL database.

1. Start XAMPP
Make sure you have XAMPP installed. Open XAMPP Control Panel and start:

Apache (for PHP)

MySQL (for Database)

2. Create the Database
In phpMyAdmin, create a new database:

Database Name: health_db

Create the table users with the following columns:

id (INT, Primary Key, Auto Increment)

name (VARCHAR)

email (VARCHAR)

password (VARCHAR)

dob (DATE)

3. Configure Database Connection
Ensure that db.php in the backend folder is configured to connect to your MySQL database:

php
Copy
Edit
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "health_db";
4. Start the PHP API
The api.php file is where the API is defined. You can test it by visiting http://localhost/health_management/api.php in your browser or Postman.

Frontend Setup
The frontend is a React.js application.

1. Install Dependencies
Go to the frontend directory and install required dependencies using npm:

sh
Copy
Edit
cd frontend
npm install
2. Run the React App
After installing the dependencies, start the React development server:

sh
Copy
Edit
npm start
This will run the React app on http://localhost:3000.

Testing the API
You can test the API with Postman or a browser:

GET: Fetch all users (GET request to http://localhost/health_management/api.php)

POST: Add a new user (POST request with JSON body to http://localhost/health_management/api.php)

PUT: Update a user (PUT request with JSON body to http://localhost/health_management/api.php)

DELETE: Remove a user (DELETE request with JSON body to http://localhost/health_management/api.php)

Example POST request body:
json
Copy
Edit
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "securepassword",
    "dob": "1995-05-12"
}
Version Control
Throughout the development of this project, Git was used for version control. The project is hosted on GitHub, and commits, branches, and pull requests are used for proper collaboration and version tracking.

Common Git Commands
Clone the repository:
git clone https://github.com/your-username/health-management.git

Create a branch:
git checkout -b new-feature-branch

Commit changes:
git commit -m "Added new feature"

Push changes to GitHub:
git push origin new-feature-branch

License
This project is open-source and available under the MIT License.

Additional Information
For further information on React, PHP, or MySQL, refer to the official documentation:

React Documentation

PHP Documentation

MySQL Documentation