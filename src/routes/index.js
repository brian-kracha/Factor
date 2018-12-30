const Hapi = require('hapi');
module.exports= [
  {
    method:'GET',
    path:'/healthcheck',
    handler: () => {
      return "booty got me goin like whoa"
    }
  },
]
