
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('userFactsTable', table => {
    table.increments();
    table.string('userId').notNullable();
    table.string('factId').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userFactsTable');
};
