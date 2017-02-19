var exp = require('express');
var rout = exp.Router();
var knex = require('../models/todoModel');
/* GET home page. */
rout.get('/', function (req, res, next) {
    res.render('index');
    knex.select("*").from("todo").then(function (rows) {
        console.log(rows);
    });
    res.end();
});
rout.post('/create', function () {
});
rout.delete('/delete/:id', function () {
});
module.exports = rout;
