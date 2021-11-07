const Knex = require('knex');

const knex = Knex({
  client: 'pg',
  connection: {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "postgres"
  }
});

module.exports = knex;