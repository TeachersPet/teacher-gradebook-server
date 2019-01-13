const knex = require('../../db/index')

function getAssignments(teacher_id, subject_id) {
  return knex('assignments')
    .join('students_assignments', 'assignments.id', 'students_assignments.assignment_id')
    .join('students', 'students.id', 'students_assignments.student_id')
    .select('assignment_name', 'student_id', 'first_name', 'last_name','grade', 'comment')
    .where({ 'assignments.teacher_id': teacher_id, subject_id })
}

function getOneAssignment(teacher_id, subject_id, assignmentId) {
  return knex('assignments')
    .join('students_assignments', 'assignments.id', 'students_assignments.assignment_id')
    .join('students', 'students.id', 'students_assignments.student_id')
    .select('assignment_name', 'student_id', 'first_name', 'last_name','grade', 'comment')
    .where({ 'assignments.teacher_id': teacher_id, subject_id, 'assignments.id': assignmentId })
}

function createAssignment(teacher_id, subject_id, assignment_name /*students, grades, comments*/) {
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

function updateAssignment(teacher_id, subject_id, assignment_id, assignment_name, student_id = null, grade = null, comment = null) {
  return knex('assignments')
  .update({ assignment_name })
  .where({teacher_id, subject_id, 'assignments.id': assignment_id})
  .returning('*')
  .then( (response) => {
    if (student_id && (grade || comment) ) {
      return knex('students_assignments')
      .update({ grade, comment })
      .where({student_id, assignment_id})
      .returning('*')
    }
    return response
  })
}

function removeAssignment(assignmentId) {
  return knex('assignments')
  .del()
  .where({'assignments.id': assignmentId})
  .returning('*')
}

module.exports = {
  getAssignments,
  getOneAssignment,
  createAssignment,
  updateAssignment,
  removeAssignment
}