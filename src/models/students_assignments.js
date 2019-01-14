const knex = require('../../db/index')
const _ = require('lodash')

function updateAssignment(assignment_id, student_id, grade = null, comment = null) {
  const updates = { grade, comment }
  var toUpdate = _.omitBy(updates, _.isNil);
  return knex('students_assignments')
    .update(toUpdate)
    .where({ student_id, assignment_id })
    .returning('*')
}

module.exports = {
  updateAssignment
}