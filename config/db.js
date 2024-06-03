const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: `127.0.0.1`,
    user: `ragnarok`,
    password: `ragnarok`,
    database: `ragnarok`
});

module.exports = connection