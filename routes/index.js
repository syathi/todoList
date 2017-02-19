var exp = require('express');
var rout = exp.Router();
var knex = require('../models/todoModel');
/* GET home page. */
rout.get('/', function (req, res, next) {
    knex.select("*").from("todo").then(function (rows) {
        res.render('index', { todos: rows });
        res.end();
    });
});
rout.post('/create', function () {
});
rout.delete('/delete/:id', function () {
});
module.exports = rout;
