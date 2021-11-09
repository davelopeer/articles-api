const { ArticleRepository } = require('../repositories/ArticleRepository');

class AdminArticleService {
  constructor() {
    this.articleRepository = new ArticleRepository();
  }

  async createArticle(data) {
    return await this.articleRepository.create(data);
  }

  async updateArticle(id, data) {
    return await this.articleRepository.update(id, data);
  }

  async deleteArticle(id) {
    return await this.articleRepository.delete(id);
  }

}

module.exports = AdminArticleService;