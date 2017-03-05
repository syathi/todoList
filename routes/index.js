var exp = require('express');
var rout = exp.Router();
var knex = require('../models/todoModel');
/* GET home page. */
rout.get('/', function (req, res, next) {
    selectTodo(res);
});
rout.post('/create', function (req, res, next) {
    knex("todo").insert({
        todo: req.body.title,
        description: req.body.description
    })
        .then(function () {
        selectTodo(res);
    });
    console.log(req.body.title);
    console.log(req.body.description);
});
//HACK:this is not RESTful. chenge to delete method later.
rout.post('/delete/:id', function (req, res, next) {
    //knex('todo').where()
    knex("todo").select("*").from("todo").where("id", req.params.id).del()
        .then(function (num) {
        if (num <= 0)
            console.log("may be you couldn't delete data");
        selectTodo(res);
    });
});
//redirect to top page (finally change SPA ,so probubly i will delete it )
var selectTodo = function (res) {
    knex.select("*").from("todo").then(function (rows) {
        res.render('index', { todos: rows });
        res.end();
    });
};
module.exports = rout;
