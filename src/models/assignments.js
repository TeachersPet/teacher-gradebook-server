const knex = require('../../db/index')

function getAssignments(teacherId, subjectId) {
  return knex('assignments')
    .where({ 'teacher_id': teacherId, 'subject_id': subjectId })
    .where('subject_id', subjectId)
}

function getOneAssignment(teacherId, subjectId, assignmentId) {
  return knex('assignments')
    .where({ 'teacher_id': teacherId, 'subject_id': subjectId, 'id': assignmentId })
}

function createAssignment(teacher_id, subject_id, assignment_name) {
  return knex('assignments')
  .insert({teacher_id, subject_id, assignment_name})
  .returning('*')
  .then(([response]) => {
    return knex('students_assignments').insert([
      {/*student_id: studentId*/ assignment_id: response.id /*grade: grade, comment: comment*/},
      {/*student_id: studentId*/ assignment_id: response.id /*grade: grade, comment: comment*/},
      {/*student_id: studentId*/ assignment_id: response.id /*grade: grade, comment: comment*/}
    ])
    //How to get multiple student ids, grades, and comments?
  })
}

function updateAssignment(req, res, next) {

}

function removeAssignment(req, res, next) {
  
}

module.exports = {
  getAssignments,
  getOneAssignment,
  createAssignment,
  updateAssignment,
  removeAssignment
}