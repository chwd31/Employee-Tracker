# Employee-Tracker

This is a command-line application that allows you to manage employees, roles, and departments in a company. It uses Node.js, Inquirer, and MySQL2.   

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)   

## Installation

To install the app, you need to have Node.js and MySQL installed on your computer. Then, follow these steps:

Clone the repository to your local machine.
Open a terminal in the project directory.
Run npm install to install the dependencies.
Create a MySQL database using the schema and seeds provided in the db folder.
Update the connection settings in app.js to match your MySQL credentials.   

## Usage

To start the app, open a terminal in the project directory and run node index.js. You will be presented with a menu of options to choose from:

View all departments: display a table of all departments in the database.
View all roles: display a table of all roles in the database.
View all employees: display a table of all employees in the database.
Add a department: add a new department to the database.
Add a role: add a new role to the database, specifying the title, salary, and department.
Add an employee: add a new employee to the database, specifying the first name, last name, role, and manager.
Update an employee role: update an employee's role in the database, specifying the employee ID and the new role ID.
Exit: close the app.   

## Features

- View all departments, roles, and employees: users can see a table with all the data in the database.
- Add a department, role, or employee: users can add new data to the database.
- Update an employee's role: users can modify an employee's role in the database.
- Responsive command-line interface: the application is designed to be user-friendly and easy to use through the command line.
- MySQL2 integration: the application uses the MySQL2 library to interact with a MySQL database, allowing for efficient and reliable data storage.
- Modular code structure: the code is organized into separate files and functions for improved readability and maintainability.
- Asynchronous code: the application uses asynchronous functions and promises to prevent blocking and improve performance.
- Error handling: the application includes error handling to prevent crashes and provide helpful error messages to the user. 
- Walkthrough video [Video](https://user-images.githubusercontent.com/118683737/233877038-95593570-6667-4964-9b91-903c104eb2f9.webm)


## Contributing

We welcome contributions from everyone. If you're interested in contributing to this project, please take a look at our guidelines to get started. We appreciate all types of contributions, from bug reports to code contributions, documentation improvements, and more.  Please contact the owner of this repository if you have any questions.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.
