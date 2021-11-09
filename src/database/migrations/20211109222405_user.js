
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.boolean('is_admin').notNullable().defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
