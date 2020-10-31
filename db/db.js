const mysql = require('mysql');

var mySqlConnection = mysql.createPool({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "bd86227f11c666b565478",
    password: "7a22f0e8c666uu79",
    database: "db",
});

module.exports = mySqlConnection;
