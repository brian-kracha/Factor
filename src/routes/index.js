const knex = require('../../knex')
const MessagingResponse = require('twilio').twiml.MessagingResponse;

module.exports = [
  {
    method: 'GET',
    path: '/healthcheck',
    handler: () => {
      return knex('dinosaurFacts')
        .select('*')
        .then(fact => {
          const response = new MessagingResponse();

          response.message(fact)
          response.redirect('https://demo.twilio.com/welcome/sms/');
          console.log(response.toString());

        return fact
      })
    },
  },
];
