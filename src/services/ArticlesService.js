const { ArticleRepository } = require('../repositories/ArticleRepository');

class ArticlesService {
  constructor() {
    this.articleRepository = new ArticleRepository();
  }

  async getAllArticles(category) {
    if (category) {
      return await this.articleRepository.filterByCategory(category);
    }
    return await this.articleRepository.selectAll();
  }

  async getArticleById(id) {
    // TO DO: Validate if user is authenticated
    
    return await this.articleRepository.findByIdWithoutBody(id);
  }

  async getArticleByCategory(category) {
    return await Article.query().where('category', '=', category);
  }
}

module.exports = ArticlesService;