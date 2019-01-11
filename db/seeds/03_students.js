
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, first_name: 'Katrina', last_name: 'Agustin', teacher_id: 1},
        {id: 2, first_name: 'Sarah', last_name: 'Lee', teacher_id: 1},
        {id: 3, first_name: 'Toby', last_name: 'Peterson', teacher_id: 1},
        {id: 4, first_name: 'Tristan', last_name: 'Porter', teacher_id: 1},
        {id: 5, first_name: 'Nolan', last_name: 'Hellyer', teacher_id: 1},
        {id: 6, first_name: 'Jamie', last_name: 'Kinkead', teacher_id: 1},
        {id: 7, first_name: 'Joey', last_name: 'Gaitan', teacher_id: 1},
        {id: 8, first_name: 'Chris', last_name: 'Ihler', teacher_id: 1},
        {id: 9, first_name: 'Matthew', last_name: 'Camacho', teacher_id: 1},
        {id: 10, first_name: 'Dylan', last_name: 'Kite', teacher_id: 1},
        {id: 11, first_name: 'Michael', last_name: 'Spraggins', teacher_id: 1},
        {id: 12, first_name: 'Chris', last_name: 'Kistner', teacher_id: 1},
        {id: 13, first_name: 'Brendan', last_name: 'Woodell', teacher_id: 1}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('students_id_seq', (SELECT MAX(id) FROM students));`
        )
    })
};
