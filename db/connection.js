const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '$trong2Remem',
        database: 'employee_tracker'
    },
    console.log('connected to the employee_tracker database.')
);

module.exports = db;