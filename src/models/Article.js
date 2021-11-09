const { Model } = require('objection');
const Author = require('./Author');
const knex = require('../database');

Model.knex(knex);

class Article extends Model {
  static get tableName() {
    return 'article';
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: Author,
        join: {
          from: 'author.id',
          to: 'article.author_id'
        }
      }
    }
  };

}

module.exports = Article;