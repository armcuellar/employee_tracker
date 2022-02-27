const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '$trong2Remem',
        database: 'employee_tracker'
    },
    console.log('connected to the employee_tracker database.')
);

module.exports = db;