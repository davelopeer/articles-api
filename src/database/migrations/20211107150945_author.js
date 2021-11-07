
exports.up = function(knex) {
  return knex.schema.createTable('author', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('picture');
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('author');
};
