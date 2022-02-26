const cTable = require('console.table');

// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    // starts express.js server on port 3001
    app.listen(PORT, () => {
        console.log('Server running on port ${PORT}');
    });
});
