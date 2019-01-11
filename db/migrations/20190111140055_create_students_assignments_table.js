
exports.up = function(knex, Promise) {
  return knex.schema('students_assignments', table => {
    table.increments();
    table.integer('student_id').references('students.id').onDelete('CASCADE').notNullable();
    table.integer('assignment_id').references('assignments.id').onDelete('CASCADE').notNullable();
    table.integer('grade').notNullable();
    table.text('comment');
  })
};

exports.down = function(knex, Promise) {
  
};
