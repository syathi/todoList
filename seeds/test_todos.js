
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todo').insert({todo: "todo1", description: 'todo desc1'}),
        knex('todo').insert({todo: "todo2", description: 'todo desc2'}),
        knex('todo').insert({todo: "todo3", description: 'todo desc3'})
      ]);
    });
};
