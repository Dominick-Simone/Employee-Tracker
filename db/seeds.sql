USE company_db;
INSERT INTO departments (name)
VALUES  ("Management"),
        ("Grocery"),
        ("Bakery");
INSERT INTO role (title, salary, department_id)
VALUES  ("Store Manager", 100000, 1),
        ("Assistant Manager", 70000, 1),
        ("Grocery Worker", 40000, 2),
        ("Bakery Worker", 40000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Jimerson", 1, NULL),
        ("James", "Jameson", 2, 1),
        ("Jimmy", "Johnson", 3, 2),
        ("Jonathon", "Johnson", 4, 2);