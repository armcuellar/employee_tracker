var inquirer = require('inquirer');
const db = require('../db/connection');
const { showDepartment, showRole, showEmployee, addDepartment, addRole, addEmployee } = require('./role')

// start server after DB connection
// db.connect(err => {
//     if (err) throw err;
//     console.log('Database connected.');
// });

const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit']
            },
        ]);
    if (answers.options === 'view all departments') {
        showDepartment();
        return questions();
    }
    else if (answers.options === 'view all roles') {
        showRole();
        return questions();
    }
    else if (answers.options === 'view all employees') {
        showEmployee();
        return questions();
    }
    else if (answers.options === 'add a department') {
        addDepartment();
        // return questions();
    }
    else if (answers.options === 'add a role') {
        addRole();

    }
    else if (answers.options === 'add an employee') {
        addEmployee();

    }
    else if (answers.options === 'update an employee role') {
        updateRole();
    }
    else {
        console.log("Good Bye");
        db.end();
        return;
    }
    questions();
    
}
module.exports = questions;