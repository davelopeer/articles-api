
exports.up = function(knex) {
  return knex.schema.createTable('article', function(table) {
    table.increments('id').primary();
    table.string('category').notNullable();
    table.string('title').notNullable();
    table.text('summary').notNullable();
    table.text('first_paragraph').notNullable();
    table.text('body').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.integer('author_id').notNullable();
    table
        .foreign('author_id')
        .references('id')
        .inTable('author')
        .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('article');
};
