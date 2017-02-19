const exp = require('express');
const rout = exp.Router();
const knex = require('../models/todoModel');


/* GET home page. */
rout.get('/', function(req, res, next) {
	res.render('index');
	knex.select("*").from("todo").then( (rows) => {
  		  console.log(rows);
  	});
  	res.end();
});

rout.post('/create', () => {

});

rout.delete('/delete/:id', () => {

});
module.exports = rout;
