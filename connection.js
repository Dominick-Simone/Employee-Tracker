const mysql = require("mysql2")
require('dotenv').config()

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "company_db",
    password: "RootR00t!"
})

module.exports = connection;