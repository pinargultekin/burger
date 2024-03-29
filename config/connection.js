var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "burgers_db"
// });

connection.connect(function (err){
    if (err) {
        console.log("Error connecting: " +err.stack)
        return;
    }
    console.log("Connection id: " + connection.threadId);
});

module.exports = connection;