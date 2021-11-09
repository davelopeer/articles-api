
const AdminAuthorsService = require('../services/AdminAuthorService');

class AdminAuthorsController {
  async getAuthors(req, res) {
    if (!req.isAdmin) {
      return res.send(401, { 'error': 'Unauthorized' });
    }

    const adminAuthorsService = new AdminAuthorsService();
    const authors = await adminAuthorsService.getAuthors();

    res.json(authors);
  }

  async getAuthorById(req, res) {
    if (!req.isAdmin) {
      return res.send(401, { 'error': 'Unauthorized' });
    }
    const id = req.params.id;

    const adminAuthorsService = new AdminAuthorsService();
    const author = await adminAuthorsService.getAuthorById(id);

    if (author.length === 0) {
      res.status(404).json({ message: 'Author not found' });
    }

    res.json(author);
  }

  async create(req, res) {
    if (!req.isAdmin) {
      return res.send(401, { 'error': 'Unauthorized' });
    }

    const authorData = req.body;
    const adminAuthorsService = new AdminAuthorsService();
    const authors = await adminAuthorsService.createAuthor(authorData);

    res.json(authors);
  }

  async update(req, res) {
    if (!req.isAdmin) {
      return res.send(401, { 'error': 'Unauthorized' });
    }

    const authorData = req.body;
    const authorId = req.params.id;

    const adminAuthorsService = new AdminAuthorsService();
    const author = await adminAuthorsService.updateAuthor(authorId, authorData);

    res.json(author);
  }

  async delete(req, res) {
    if (!req.isAdmin) {
      return res.send(401, { 'error': 'Unauthorized' });
    }

    const authorId = req.params.id;
    const adminAuthorsService = new AdminAuthorsService();
    const author = await adminAuthorsService.deleteAuthor(authorId);

    res.json(author);
  }
}

module.exports = AdminAuthorsController;