exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students_assignments').del()
    .then(function () {
      // Inserts seed entries
      return knex('students_assignments').insert([
        { id: 1, student_id: 1, assignment_id: 1, grade: 1, comment: 'Needs improvement' },
        { id: 2, student_id: 2, assignment_id: 1, grade: 2 },
        { id: 3, student_id: 3, assignment_id: 1, grade: 4, comment: 'Cheating?' },
        { id: 4, student_id: 4, assignment_id: 1, grade: 3, comment: 'Shows improvement!' },
        { id: 5, student_id: 5, assignment_id: 1, grade: 1, comment: 'Unfocused during assignment' },
        { id: 6, student_id: 6, assignment_id: 1, grade: 1, comment: 'Good effort!' },
        { id: 7, student_id: 7, assignment_id: 1, grade: 4, comment: 'Perfect!' },
        { id: 8, student_id: 8, assignment_id: 1, grade: 4, comment: 'Also, perfect!' },
        { id: 9, student_id: 9, assignment_id: 1, grade: 3, comment: 'Good start' },
        { id: 10, student_id: 10, assignment_id: 1, grade: 2, comment: 'Getting there' },
        { id: 11, student_id: 11, assignment_id: 1, grade: 4, comment: 'Nice work!' },
        { id: 12, student_id: 12, assignment_id: 1, grade: 1, comment: 'Uh oh' },
        { id: 13, student_id: 13, assignment_id: 1, grade: 3 },
        { id: 14, student_id: 1, assignment_id: 2, grade: 1, comment: 'Needs improvement' },
        { id: 15, student_id: 2, assignment_id: 2, grade: 2 },
        { id: 16, student_id: 3, assignment_id: 2, grade: 4, comment: 'Cheating?' },
        { id: 17, student_id: 4, assignment_id: 2, grade: 3, comment: 'Shows improvement!' },
        { id: 18, student_id: 5, assignment_id: 2, grade: 1, comment: 'Unfocused during assignment' },
        { id: 19, student_id: 6, assignment_id: 2, grade: 1, comment: 'Good effort!' },
        { id: 20, student_id: 7, assignment_id: 2, grade: 4, comment: 'Perfect!' },
        { id: 21, student_id: 8, assignment_id: 2, grade: 4, comment: 'Also, perfect!' },
        { id: 22, student_id: 9, assignment_id: 2, grade: 3, comment: 'Good start' },
        { id: 23, student_id: 10, assignment_id: 2, grade: 2, comment: 'Getting there' },
        { id: 24, student_id: 11, assignment_id: 2, grade: 4, comment: 'Nice work!' },
        { id: 25, student_id: 12, assignment_id: 2, grade: 1, comment: 'Uh oh' },
        { id: 26, student_id: 13, assignment_id: 2, grade: 3 },
        { id: 27, student_id: 1, assignment_id: 5, grade: 1, comment: 'Needs improvement' },
        { id: 28, student_id: 2, assignment_id: 5, grade: 2 },
        { id: 29, student_id: 3, assignment_id: 5, grade: 4, comment: 'Cheating?' },
        { id: 30, student_id: 4, assignment_id: 5, grade: 3, comment: 'Shows improvement!' },
        { id: 31, student_id: 5, assignment_id: 5, grade: 1, comment: 'Unfocused during assignment' },
        { id: 32, student_id: 6, assignment_id: 5, grade: 1, comment: 'Good effort!' },
        { id: 33, student_id: 7, assignment_id: 5, grade: 4, comment: 'Perfect!' },
        { id: 34, student_id: 8, assignment_id: 5, grade: 4, comment: 'Also, perfect!' },
        { id: 35, student_id: 9, assignment_id: 5, grade: 3, comment: 'Good start' },
        { id: 36, student_id: 10, assignment_id: 5, grade: 2, comment: 'Getting there' },
        { id: 37, student_id: 11, assignment_id: 5, grade: 4, comment: 'Nice work!' },
        { id: 38, student_id: 12, assignment_id: 5, grade: 1, comment: 'Uh oh' },
        { id: 39, student_id: 13, assignment_id: 5, grade: 3 }
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('students_assignments_id_seq', (SELECT MAX(id) FROM students_assignments));`
      )
    })
};
