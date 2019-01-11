
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.integer('teacher_id').references('teachers.id').onDelete('CASCADE').notNullable();
    // table.integer('parent_id').references('parents.id').onDelete('CASCADE').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
