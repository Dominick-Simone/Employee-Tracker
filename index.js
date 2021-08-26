const inquirer = require("inquirer")
require("console.table")
const connection = require("./connection")
const menuQuestion = {
    name: "menu",
    type: "list",
    message: "What would you like to do?",
    choices: ["View all departments", "View all roles", "View all employees", "Add a department","Update a role", "I'm Done"]
}
const addDepartmentQuestions = [
    {
    name: "department",
    type: "input",
    message: "What is the name of the department?",
    },
]

function viewDepartments() { 
    connection.query("SELECT * FROM departments", (err, results) => {
        if (err) {
            console.log(err)
        }
        console.table(results)
        mainMenu()
    });
}
function viewRoles() {
    connection.query("SELECT * FROM role", (err, results) => {
        if (err) {
            console.log(err)
        }
        console.table(results)
        mainMenu()
    });
}
function viewEmployees() {
    connection.query("SELECT * FROM employee", (err, results) => {
        if (err) {
            console.log(err)
        }
        console.table(results)
        mainMenu()
    });
}
async function addDepartment() {
    await inquirer
        .prompt(addDepartmentQuestions)
        .then((response) => {
            connection.query(`INSERT INTO departments(name) VALUES (?)`, response.department, (err, results) => {
            if (err) {
                console.log(err)
            }
            console.table(results)
            
        });
    })
    mainMenu()
}
function updateRole() {
    connection.query("SELECT * FROM employee", (err, results) => {
        const newQuestions = results.map(obj => {
            return {name: obj.first_name, value: obj.id}
        })
        const newQuestion = {
            name: "menu",
            type: "list",
            message: "Who would you like to update?",
            choices: newQuestions
        }
        inquirer
            .prompt(newQuestion)
            .then((response) => {
                console.log(response)
            })

    })
}
function mainMenu() {
inquirer 
    .prompt(menuQuestion)
    .then((response) => {
        if (response.menu === "View all departments") {
            viewDepartments()
        } else if (response.menu === "View all roles") {
            viewRoles()
        } else if (response.menu === "View all employees") {
            viewEmployees()
        } else if (response.menu === "Add a department") {
            addDepartment()
        } else if (response.menu === "Update a role") {
            updateRole()
        } else if (response.menu === "I'm Done") {
            return;
        }
    })
}
mainMenu()