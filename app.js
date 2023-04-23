const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'V!olet08',
  database: 'emptracker_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  start();
});

function start() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewAllDepartments();
          break;

        case 'View all roles':
          viewAllRoles();
          break;

        case 'View all employees':
          viewAllEmployees();
          break;

        case 'Add a department':
          addDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee();
          break;

        case 'Update an employee role':
          updateEmployeeRole();
          break;

        case 'Exit':
          connection.end();
          break;
      }
    });
}

function viewAllDepartments() {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewAllRoles() {
    const sql = `SELECT * FROM role`;
  
    connection.query(sql, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }

  

  function viewAllEmployees() {
    const sql = "SELECT * FROM employee";
  
    connection.query(sql, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }
  
  

function addDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of the department?",
          name: "name",
        },
      ])
      .then((answer) => {
        const query = "INSERT INTO department (name) VALUES (?)";
        connection.query(query, [answer.name], (err, res) => {
          if (err) throw err;
          console.log(`\nAdded ${answer.name} department to the database.\n`);
          start();
        });
      });
  }
  

  function addRole() {
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "Enter the new role's title:"
        },
        {
          name: "salary",
          type: "input",
          message: "Enter the new role's salary:"
        },
        {
          name: "department_id",
          type: "input",
          message: "Enter the ID of the department that this role belongs to:"
        }
      ])
      .then(function(answer) {
        const query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
        connection.query(query, [answer.title, answer.salary, answer.department_id], function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " role inserted!\n");
          start();
        });
      });
  }
  
  
  function addEmployee() {
    inquirer.prompt([
      {
        type: "input",
        message: "Enter the employee's first name:",
        name: "firstName"
      },
      {
        type: "input",
        message: "Enter the employee's last name:",
        name: "lastName"
      },
      {
        type: "input",
        message: "Enter the employee's role ID:",
        name: "roleId"
      },
      {
        type: "input",
        message: "Enter the employee's manager ID (if applicable):",
        name: "managerId"
      }
    ]).then(function(answer) {
      const query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
      connection.query(query, [answer.firstName, answer.lastName, answer.roleId, answer.managerId], function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " employee added!\n");
        start();
      });
    });
  }
  
    function updateEmployeeRole() {
    // Prompt user to select an employee to update
    inquirer.prompt([
      {
        type: "input",
        message: "Enter the employee's ID: ",
        name: "employeeId"
      },
      {
        type: "input",
        message: "Enter the new role ID: ",
        name: "newRoleId"
      }
    ]).then(function(answer) {
      // Update employee's role in the database
      const query = `UPDATE employee SET role_id = ${answer.newRoleId} WHERE id = ${answer.employeeId}`;
      connection.query(query, function(err, res) {
        if (err) throw err;
        console.log("Employee role updated successfully!");
        start();
      });
    });
  }
