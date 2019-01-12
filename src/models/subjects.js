const knex = require('../../db/index')

function getSubjects() {
  return knex('subjects')
}

function getOneSubject(subjectId) {
  return knex('subjects')
  .where({ 'id' : subjectId })
}

module.exports = {
  getSubjects,
  getOneSubject
}
