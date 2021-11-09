const Author = require('../models/Author');

class AuthorRepository {
  constructor() {
    this.author = Author;
  }

  async selectAll() {
    return await this.author.query()
        .select(
          'id',
          'name',
          'picture',
        );
  }

  async selectById(id) {
    return await this.author.query().where('id', "=", id)
        .select(
          'name',
          'picture',
        );
  }

  async create(author) {
    return await this.author.query().insert(author);
  }

  async update(id, author) {
    return await this.author.query().update(author).where('id', "=", id);
  }

  async delete(id) {
    return await this.author.query().delete().where('id', "=", id);
  }
}

module.exports = { AuthorRepository };