-- Insert departments
INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Marketing');

-- Insert roles
INSERT INTO role (title, salary, department_id)
VALUES 
    ('Salesperson', 60000, 1),
    ('Sales Manager', 80000, 1),
    ('Software Engineer', 90000, 2),
    ('Senior Software Engineer', 120000, 2),
    ('Marketing Manager', 100000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Doe', 1, 2),
    ('Jane', 'Doe', 2, NULL),
    ('Bob', 'Smith', 3, 4),
    ('Alice', 'Johnson', 4, NULL),
    ('Tom', 'Lee', 5, NULL);
