
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dinosaurFacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('dinosaurFacts').insert([
        { fact: 'I am the smartest man alive'},
        { fact: 'Except not really'},
      ]);
    });
};
