const exp = require('express');
const rout = exp.Router();
const knex = require('../models/todoModel');


/* GET home page. */
rout.get('/', function(req, res, next) {
	selectTodo(res);
});

rout.post('/create', (req, res, next) => {
    knex('todo').insert({
    		todo       : req.body.title,
    		description: req.body.description
    	})
    .then(() => {
    	selectTodo(res);
    });
	console.log(req.body.title);
	console.log(req.body.description);
});

rout.delete('/delete/:id', (req, res, next) => {

});

const selectTodo: any = (res: any) => {
	knex.select("*").from("todo").then( (rows) => {
		res.render('index', {todos: rows});
		res.end();
  	});
}
module.exports = rout;
