var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ghldud1715',
    database : 'opentutorials'
});
db.connect();
module.exports = db;