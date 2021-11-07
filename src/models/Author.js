const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex);

class Author extends Model {
  static get tableName() {
    return 'author';
  }

  static get idColumn() {
    return 'id';
  }
}

module.exports = Author;