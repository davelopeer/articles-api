const Knex = require('knex');
const config = require('../config');

const knex = Knex({
  client: 'pg',
  connection: {
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName
  }
});

module.exports = knex;