
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teachers', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.integer('grade_level').notNullable();
    table.string('email').notNullable().unique();
    table.text('hashed_password').notNullable();
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('teachers')
};
