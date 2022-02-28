const cTable = require('console.table');
const inquirer = require('inquirer');
const db = require('../db/connection');
const questions = require('./question');

const showDepartment = () => {
    db.promise()
        .query(`SELECT * FROM department`)
        .then(([rows, fields]) => {
            const table = cTable.getTable(rows);
            console.log();
            console.log(table);
        });
}
const showRole = () => {
    db.promise()
        .query(`SELECT * FROM role`)
        .then(([rows, fields]) => {
            const table = cTable.getTable(rows);
            console.log();
            console.log(table);
        });
}
const showEmployee = () => {
    db.promise()
        .query(`SELECT * FROM employee`)
        .then(([rows, fields]) => {
            const table = cTable.getTable(rows);
            console.log();
            console.log(table);
        });
}
const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department',
                message: 'What department do you want to add?',
                validate: departmentInput => {
                    if (departmentInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter a department");
                        return false;
                    }
                }
            },
        ])
        .then((answer) => {
            console.log(answer);
            const sql = `INSERT INTO department (name) VALUES (?)`;
            const params = answer.department;
            db.promise()
                .query(sql, params)
                .then((results) => {
                    console.log("successfully added department");
                    db.end();
                })
                .catch(err => {
                    console.log(err);
                });
        });

}
const addRole = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'roleTitle',
                message: 'Add the role title : ',
                validate: roleInput => {
                    if (roleInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter a role title");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'roleSalary',
                message: 'What is the salary?',
                validate: salaryInput => {
                    if (salaryInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter salary");
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'roleDepartment',
                message: 'What department does the role belong to?',
                choices: db.query('select * from role'),
                validate: roleInput => {
                    if (roleInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter a department");
                        return false;
                    }
                }
            },
        ])
        .then((answer) => {
            console.log(answer);
            const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
            const params = [answer.roleTitle, answer.roleSalary, answer.roleDepartment];
            db.promise()
                .query(sql, params)
                .then((results) => {
                    console.log("successfully added role");
                    db.end();
                })
                .catch(err => {
                    console.log(err);
                });
        });

}
const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeFirst',
                message: 'What is employees first name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter a name");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeLast',
                message: 'What is employees last name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter a name");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'What is employees role?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter an ID");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'manager',
                message: 'What is employees manager ID?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter a ID");
                        return false;
                    }
                }
            },
        ])
        .then((answer) => {
            console.log(answer);
            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
            const params = a[nswer.employeeFirst, answer.employeeLast, answer.roleId, answer.manager];
            db.promise()
                .query(sql, params)
                .then((results) => {
                    console.log("successfully added department");
                    db.end();
                })
                .catch(err => {
                    console.log(err);
                });
        });

}
module.exports = { showDepartment, showRole, showEmployee, addDepartment, addRole, addEmployee };