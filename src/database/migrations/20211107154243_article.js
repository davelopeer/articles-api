
exports.up = function(knex) {
  return knex.schema.createTable('article', function(table) {
    table.increments('id').primary();
    table.string('category').notNullable();
    table.string('title').notNullable();
    table.text('summary').notNullable();
    table.text('first_paragraph').notNullable();
    table.text('body').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.integer('author_id')
      .references('id')
      .inTable('author')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('article');
};
