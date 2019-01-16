const knex = require('../../db/index')

function getStudents(teacher_id) {
  return knex('students')
  .where({teacher_id})
}

function getOneStudent(teacher_id, id) {
  return knex('students')
  .where({id, teacher_id})
}

module.exports = {
  getStudents,
  getOneStudent
}