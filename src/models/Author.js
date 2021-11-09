const { Model } = require('objection');
const Article = require('./Article');
const knex = require('../database');

Model.knex(knex);

class Author extends Model {
  static get tableName() {
    return 'author';
  }

  static get relationMappings() {
    return {
      article: {
        relation: Model.HasManyRelation,
        modelClass: Article,
        join: {
          from: 'author.id',
          to: 'article.author_id'
        }
      }
    }
  };

}

module.exports = Author;