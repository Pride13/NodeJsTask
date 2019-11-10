const mysql12 = require('mysql2');

const pool = mysql12.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'userreg'
});

module.exports = pool;
