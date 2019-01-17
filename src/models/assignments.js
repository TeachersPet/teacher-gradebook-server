const knex = require('../../db/index')

const studentsAssignmentsJoin = () => knex('assignments')
  .join('students_assignments', 'assignments.id', 'students_assignments.assignment_id')
  .join('students', 'students.id', 'students_assignments.student_id')

function getAssignments(teacher_id, subject_id, student_id) {
  if (student_id) {
    return studentsAssignmentsJoin().where({ 'assignments.teacher_id': teacher_id, subject_id, student_id })
  } else {
    return knex('assignments').where({ teacher_id, subject_id })
  }
}

function getOneAssignment(teacher_id, subject_id, assignmentId) {
  return studentsAssignmentsJoin()
    .where({ 'assignments.teacher_id': teacher_id, subject_id, 'assignments.id': assignmentId })
}

function createAssignment(teacher_id, subject_id, assignment_name, date, studentsArray) {
  return knex('assignments')
    .insert({ teacher_id, subject_id, date, assignment_name })
    .returning('*')
    .then(([response]) => {
      //Adding mulitple students, each with their id, grades, and comments
      const studentInserts = studentsArray.map(student => {
        return { student_id: student.id, assignment_id: response.id, grade: (student.grade || 0), comment: (student.comment || null) }
      })
      return knex('students_assignments')
        .insert(studentInserts)
        .returning('*')
    })
}

function updateAssignment(teacher_id, subject_id, assignment_id, assignment_name, date, studentsArray) {
  return knex('assignments')
    .update({ assignment_name, date})
    .where({teacher_id, subject_id, 'id': assignment_id})
    .returning('*')
    .then( () => {
      const promises = studentsArray.map( student => {
        return updateStudent(assignment_id, student.id, student.grade, student.comment)
      })
      return Promise.all(promises)
    })
}

function updateStudent(assignment_id, student_id, grade, comment) {
  return knex('students_assignments')
    .update({ grade, comment })
    .where({ student_id, assignment_id })
    .returning('*')
}

function removeAssignment(assignmentId) {
  return knex('assignments')
    .del()
    .where({ 'assignments.id': assignmentId })
    .returning('*')
}

module.exports = {
  getAssignments,
  getOneAssignment,
  createAssignment,
  updateAssignment,
  removeAssignment
}