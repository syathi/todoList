const exp = require('express');
const rout = exp.Router();
const knex = require('../models/todoModel');


/* GET home page. */
rout.get('/', function(req, res, next) {
	knex.select("*").from("todo").then( (rows) => {
		res.render('index', {todos: rows});
		res.end();
  	});
});

rout.post('/create', () => {

});

rout.delete('/delete/:id', () => {

});
module.exports = rout;
