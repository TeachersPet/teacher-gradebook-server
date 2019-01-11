
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assignments').del()
    .then(function () {
      // Inserts seed entries
      return knex('assignments').insert([
        {id: 1, teacher_id: 1, subject_id: 3, assignment_name: 'Division Quiz 3' },
        {id: 2, teacher_id: 1, subject_id: 1, assignment_name: 'Reading Benchmark 2.3' },
        {id: 3, teacher_id: 1, subject_id: 2, assignment_name: 'What I Want for Christmas' },
        {id: 4, teacher_id: 1, subject_id: 4, assignment_name: 'Planets Quiz' },
        {id: 5, teacher_id: 1, subject_id: 5, assignment_name: 'Three Branches of Government Test' },

      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('invoices_id_seq', (SELECT MAX(id) FROM invoices));`
        )
    })
};
