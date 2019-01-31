require("dotenv").load();
var mysql = require("mysql");
//console.log(connection);
exports.handler = (event, context, callback) => {
var connection = mysql.createConnection({
  host: process.env.RDS_ENDPOINT,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE
});
  connection.query("SELECT Marker, COUNT(Marker) as total_marker FROM Experiences GROUP BY Marker ORDER BY total_marker", function(error, results, fields) {
    if (error) {
      console.log(error);
      connection.destroy();
      throw error;
    } else {
      // connected!
      console.log(JSON.stringify(results));
      callback(error, results);
      connection.end(function(err) {
        callback(err, results);
      });
    }
  });
};


