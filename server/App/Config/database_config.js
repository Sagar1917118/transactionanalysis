const mysql = require('mysql');
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql@sagar@1917118',
  database: 'transaction_analysis'
});
// connect to the MySQL database
module.exports={connection};
