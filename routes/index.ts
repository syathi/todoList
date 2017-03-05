const exp = require('express');
const rout = exp.Router();
const knex = require('../models/todoModel');


/* GET home page. */
rout.get('/', function(req, res, next) {
	selectTodo(res);
});

rout.post('/create', (req, res, next) => {
    knex("todo").insert({
    		todo       : req.body.title,
    		description: req.body.description
    	})
    .then(() => {
    	selectTodo(res);
    });
	console.log(req.body.title);
	console.log(req.body.description);
});

//HACK:this is not RESTful. chenge to delete method later.
rout.post('/delete/:id', (req, res, next) => {
	//knex('todo').where()
	knex("todo").select("*").from("todo").where("id", req.params.id).del()
	.then( (num) => {
			if(num <= 0)console.log("may be you couldn't delete data");
			selectTodo(res);
		});
});

//redirect to top page (finally change SPA ,so probubly i will delete it )
const selectTodo: (res: any) => void = (res: any): void => {
	knex.select("*").from("todo").then( (rows) => {
		res.render('index', {todos: rows});
		res.end();
  	});
}
module.exports = rout;
