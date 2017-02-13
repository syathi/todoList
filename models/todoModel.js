var kn = require('knex')({
    cliant: 'sqlite3',
    connection: {
        filename: "./todolist.sqlite3"
    }
});
module.exports = kn;
