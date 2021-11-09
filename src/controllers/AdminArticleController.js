
const constants = require('../config/constants');
const AdminArticlesService = require('../services/AdminArticleService');


class AdminArticlesController {
  async create(req, res) {
    if (!req.isAdmin) {
      return res.send(constants.HTTP_STATUS.UNAUTHORIZED, { 'error': 'Unauthorized' });
    }

    const articleData = req.body;
    const adminArticlesService = new AdminArticlesService();
    const articles = await adminArticlesService.createArticle(articleData);

    res.json(articles);
  }

  async update(req, res) {
    if (!req.isAdmin) {
      return res.send(constants.HTTP_STATUS.UNAUTHORIZED, { 'error': 'Unauthorized' });
    }

    const articleData = req.body;
    const articleId = req.params.id;

    const adminArticlesService = new AdminArticlesService();
    const article = await adminArticlesService.updateArticle(articleId, articleData);

    res.json(article);
  }

  async delete(req, res) {
    if (!req.isAdmin) {
      return res.send(constants.HTTP_STATUS.UNAUTHORIZED, { 'error': 'Unauthorized' });
    }

    const articleId = req.params.id;
    const adminArticlesService = new AdminArticlesService();
    const article = await adminArticlesService.deleteArticle(articleId);

    res.json(article);
  }
}

module.exports = {
  AdminArticlesController,
}