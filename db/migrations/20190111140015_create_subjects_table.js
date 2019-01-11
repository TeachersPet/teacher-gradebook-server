
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subjects', table => {
    table.increments();
    table.string('name').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('subjects')

};
