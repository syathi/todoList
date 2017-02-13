var exp = require('express');
var rout = exp.Router();
var knex = require('../models/todoModel');
/* GET home page. */
rout.get('/', function (req, res, next) {
    res.render('index');
    var todos = knex.select().from('todo').timeout(1000);
    console.log(todos);
});
rout.post('/create', function () {
});
rout.delete('/delete/:id', function () {
});
module.exports = rout;
