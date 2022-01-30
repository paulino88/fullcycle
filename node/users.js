var express = require('express');
var router = express.Router();
var con = require('./database.js');

router.get('/', function (req, res, next) {

    var sql = "CREATE TABLE if NOT EXISTS people (id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255),sobrenome VARCHAR(255), endereco VARCHAR(255))";
    con.query(sql, function (error, result) {
        if (error) throw error;
            console.log("Tabela Criada com sucesso!");
        });
    
    var sql = "INSERT INTO people (nome, sobrenome, endereco) VALUES ?";
    var values = [
        ['John', 'Constantine', 'Highway 71'],
        ['Peter', 'Jordan', 'Lowstreet 4'],
        ['Amy', 'AnyRouse', 'Apple st 652'],
        ['Hannah', 'Montana', 'Mountain 21'],
        ['Michael', 'Jackson', 'Valley 345'],
        ['Sandy', 'Junior', 'Ocean blvd 2'],
        ['Betty', 'A feia', 'Green Grass 1'],
        ['Richard', 'Willson', 'Sky st 331'],
        ['Susan', 'Boiool', 'One way 98'],
        ['Ricky', 'Martin', 'Yellow Garden 2'],
        ['Ben', '10', 'Park Lane 38'],
        ['William', 'Sh', 'Central st 954'],
        ['Chuck', 'Boneco', 'Main Road 989'],
        ['Viola', 'Ruim', 'Sideway 1633']
    ];

    con.query(sql, [values], function (error, result) {
        if (error) throw error;
        console.log("Total de registros inserido: " + result.affectedRows);
    });        

    con.query('SELECT * FROM people', function (err, rows) {
        if (err) {
            req.flash('error', err);
            res.render('list', { page_title: "Users - Node.js", data: '' });
        } else {
            res.render('list', { page_title: "Users - Node.js", data: rows });
        }

    });

});

module.exports = router;