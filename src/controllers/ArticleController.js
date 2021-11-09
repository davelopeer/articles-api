const ArticlesService = require('../services/ArticlesService');

class ArticlesController {
  async getArticles(req, res) {
    const category = req.query.category;

    const articlesService = new ArticlesService();
    const articles = await articlesService.getArticles(category);

    res.json(articles);
  }

  async getArticleById(req, res) {
    const id = req.params.id;

    const articlesService = new ArticlesService();
    const article = await articlesService.getArticleById(id);
    if (article.length === 0) {
      res.status(404).json({ message: 'Article not found' });
    }

    res.json(article);
  }
}

module.exports = ArticlesController;