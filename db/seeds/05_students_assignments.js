exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students_assignments').del()
    .then(function () {
      // Inserts seed entries
      return knex('students_assignments').insert([
        {id: 1, student_id: 1, assignment_id: 1, grade: 1, comment: 'Needs improvement' },
        {id: 2, student_id: 2, assignment_id: 1, grade: 2},
        {id: 3, student_id: 3, assignment_id: 1, grade: 4, comment: 'Cheating?' },
        {id: 4, student_id: 4, assignment_id: 1, grade: 3, comment: 'Shows improvement!' },
        {id: 5, student_id: 5, assignment_id: 1, grade: 1, comment: 'Unfocused during assignment' },
        {id: 6, student_id: 6, assignment_id: 1, grade: 1, comment: 'Good effort!' },
        {id: 7, student_id: 7, assignment_id: 1, grade: 4, comment: 'Perfect!' },
        {id: 8, student_id: 8, assignment_id: 1, grade: 4, comment: 'Also, perfect!' },
        {id: 9, student_id: 9, assignment_id: 1, grade: 3, comment: 'Good start' },
        {id: 10, student_id: 10, assignment_id: 1, grade: 2, comment: 'Getting there' },
        {id: 11, student_id: 11, assignment_id: 1, grade: 4, comment: 'Nice work!' },
        {id: 12, student_id: 12, assignment_id: 1, grade: 1, comment: 'Uh oh' },
        {id: 13, student_id: 13, assignment_id: 1, grade: 3}

      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('invoices_id_seq', (SELECT MAX(id) FROM invoices));`
        )
    })
};
