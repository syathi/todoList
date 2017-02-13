var exp = require('express');
var rout = exp.Router();
/* GET home page. */
rout.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
module.exports = rout;
