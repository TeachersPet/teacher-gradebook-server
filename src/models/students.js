const knex = require('../../db/index')

function getStudents(teacher_id) {
  return knex('students')
  .where({teacher_id})
}

function getOneStudentAssignments(teacherId, subjectid, studentId) {
  return knex('students')
  .join('students_assignments', 'students.id', 'students_assignments.student_id')
  .join('assignments', 'assignments.id','students_assignments.assignment_id' )
  .select('assignment_id', 'student_id','first_name', 'last_name','students.teacher_id','assignment_name', 'grade', 'comment')
  .where({ 'students.teacher_id': teacherId, 'assignments.subject_id': subjectid, 'students.id' : studentId })
}

module.exports = {
  getStudents,
  getOneStudentAssignments
}