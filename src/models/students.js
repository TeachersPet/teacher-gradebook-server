const knex = require('../../db/index')

function getStudents(teacher_id) {
  return knex('students')
  .where({teacher_id})
}

module.exports = {
  getStudents
}