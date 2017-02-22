var exp = require('express');
var rout = exp.Router();
var knex = require('../models/todoModel');
/* GET home page. */
rout.get('/', function (req, res, next) {
    selectTodo(res);
});
rout.post('/create', function (req, res, next) {
    knex('todo').insert({
        todo: req.body.title,
        description: req.body.description
    })
        .then(function () {
        selectTodo(res);
    });
    console.log(req.body.title);
    console.log(req.body.description);
});
rout.delete('/delete/:id', function (req, res, next) {
});
var selectTodo = function (res) {
    knex.select("*").from("todo").then(function (rows) {
        res.render('index', { todos: rows });
        res.end();
    });
};
module.exports = rout;
