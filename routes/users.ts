var expr = require('express');
let route = expr.Router();

/* GET users listing. */
route.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = route;
