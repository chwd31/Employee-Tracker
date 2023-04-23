USE emptracker_db;

-- 1. Get all departments
SELECT * FROM department;

-- 2. Get all roles
SELECT * FROM role;

-- 3. Get all employees
SELECT * FROM employee;

-- 4. Add a department
INSERT INTO department (name) VALUES ('department_name');

-- 5. Add a role
INSERT INTO role (title, salary, department_id) VALUES (title, salary, department_id);

-- 6. Add an employee
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (first_name, last_name, role_id, manager_id);

-- 7. Update an employee's role
UPDATE employee SET role_id = new_role_id WHERE id = employee_id;


