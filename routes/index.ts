const exp = require('express');
const rout = exp.Router();
const knex = require('../models/todoModel');


/* GET home page. */
rout.get('/', function(req, res, next) {
  res.render('index');
  const todos: any = knex.select().from('todo').timeout(1000);
  console.log(todos);
});

rout.post('/create', () => {

});

rout.delete('/delete/:id', () => {

});
module.exports = rout;
