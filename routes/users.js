var expr = require('express');
var route = expr.Router();
/* GET users listing. */
route.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
module.exports = route;
