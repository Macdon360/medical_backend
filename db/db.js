var mysql = require("mysql");
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "auth-db1085.hstgr.io",
    user: "u205426057_wifi",
    password: "123abcAB@123",
    database: "u205426057_wifi",
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected to Mysql database");
    connection.release();
});

module.exports = pool;
