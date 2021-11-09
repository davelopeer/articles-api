const Article = require('../models/Article');

class ArticleRepository {
  constructor() {
    this.article = Article;
  }

  async filterByCategory(category) {
    return await this.article.query()  
        .select(
          'author.name',
          'author.picture',
          'article.category',
          'article.title',
          'article.summary')
        .innerJoin('author', 'author.id', 'article.author_id')
        .where('category', '=', category);
  }

  async selectAll() {
    return await this.article.query()
        .select(
          'author.name',
          'author.picture',
          'article.category',
          'article.title',
          'article.summary',
          'article.first_paragraph')
        .innerJoin('author', 'author.id', 'article.author_id')
  }

  async findByIdWithBody(id) {
    return await this.article.query()
        .select(
          'author.name',
          'author.picture',
          'article.category',
          'article.title',
          'article.summary',
          'article.first_paragraph',
          'article.body')
        .innerJoin('author', 'author.id', 'article.author_id')
        .where('article.id', '=', id);
  }

  async findByIdWithoutBody(id) {
    return await this.article.query()
        .select(
          'author.name',
          'author.picture',
          'article.category',
          'article.title',
          'article.summary',
          'article.first_paragraph')
        .innerJoin('author', 'author.id', 'article.author_id')
        .where('article.id', '=', id);
  }

  async create(data) {
    return await this.article.query().insert(data);
  }

  async update(id, data) {
    return await this.article.query().update(data).where('id', '=', id);
  }

  async delete(id) {
    return await this.article.query().delete().where('id', '=', id);
  }

}

module.exports = { ArticleRepository };