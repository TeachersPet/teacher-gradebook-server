
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subjects').del()
    .then(function () {
      // Inserts seed entries
      return knex('subject').insert([
        {id: 1, subject_name: 'Reading'},
        {id: 2, subject_name: 'Writing'},
        {id: 3, subject_name: 'Math'},
        {id: 4, subject_name: 'Science'},
        {id: 5, subject_name: 'Social Studies'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('invoices_id_seq', (SELECT MAX(id) FROM invoices));`
        )
    })
};
