const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: `192.168.2.10`,
    user: `ragnarok`,
    password: `ragnarok`,
    database: `ragnarok`
});

module.exports = connection