const cTable = require('console.table');
const db = require('./db/connection');


// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
});

db.promise()
    .query(`SELECT * FROM role;`)
    .then(([rows, fields]) => {
        const table = cTable.getTable(rows);
        console.log(table);
    })
    .then(() => db.end());
