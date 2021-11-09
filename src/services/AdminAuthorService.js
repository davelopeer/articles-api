const { AuthorRepository } = require('../repositories/AuthorRepository');

class AuthorArticleService {
  constructor() {
    this.authorRepository = new AuthorRepository();
  }

  async getAuthors() {
    return await this.authorRepository.selectAll();
  }

  async getAuthorById(id) {
    return await this.authorRepository.selectById(id);
  }

  async createAuthor(data) {
    return await this.authorRepository.create(data);
  }

  async updateAuthor(id, data) {
    return await this.authorRepository.update(id, data);
  }

  async deleteAuthor(id) {
    return await this.authorRepository.delete(id);
  }

}

module.exports = AuthorArticleService;