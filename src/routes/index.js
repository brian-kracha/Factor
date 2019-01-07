const knex = require('../../knex');

module.exports = [
  {
    method: 'GET',
    path: '/healthcheck',
    handler: () => {
      return knex('dinosaurFacts')
        .select('*')
        .then(fact => {
          return fact;
        });
    },
  },
];
