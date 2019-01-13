exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {id: 1, first_name: 'Kevin', last_name: 'Parine', grade_level: 4, email: 'test@me.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US'},
        {id: 2, first_name: 'Celia', last_name: 'Marshall', grade_level: 4, email: 'test@celia.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US'},
        {id: 3, first_name: 'Andrew', last_name: 'Lincoln', grade_level: 4, email: 'test@andrew.com', hashed_password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('teachers_id_seq', (SELECT MAX(id) FROM teachers));`
        )
    })
};
