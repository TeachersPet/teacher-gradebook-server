
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('line_items').del()
    .then(() => knex('students_assignments').del())
    .then(() => knex('assignments').del())
    .then(() => knex('subjects').del())
    .then(() => knex('students').del())
    .then(() => knex('teachers').del())
}
