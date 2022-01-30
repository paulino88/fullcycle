var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'pass123',
  database: 'nodedb'
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Base de dados conectada com sucesso!');
});

module.exports = conn;