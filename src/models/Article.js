const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex);

class Article extends Model {
  static get tableName() {
    return 'article';
  }

  static get idColumn() {
    return 'id';
  }
}

module.exports = Article;