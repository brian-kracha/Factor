
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('dinosaurFacts', table => {
    table.increments;
    table.string('fact').notNullable().defaultsTo();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dinosaurFacts');
};
