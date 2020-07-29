// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xvhm4kyf00naq4dj",
  password: "f7ygdywmj8femi05",
  database: "i37f01es94k84bin"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
