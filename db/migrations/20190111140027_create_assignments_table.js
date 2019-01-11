
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assignments', (table) => {
    table.increments();
    table.string('assignment_name').notNullable();
    table.integer('teacher_id').references('teachers.id').onDelete('CASCADE').notNullable();
    table.integer('subject_id').references('subjects.id').onDelete('CASCADE').notNullable();
    // table.integer('standard_id').references('standards.id').onDelete('CASCADE').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('assignments')
};
