var mysql = required("mysql");

var connection = mysql.CreateConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
});

connection.connect(function (err){
    if (err) {
        console.log("Error connecting: " +err.stack)
        return;
    }
    console.log("Connection id: " + connection.threadId);
});

module.exports = connection;