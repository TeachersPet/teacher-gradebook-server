const studentModel = require('../models/students')

function getStudents(req, res, next) {
  studentModel.getStudents(req.params.teacherId)
    .then( (data) => {
      if(!data) return next({status: 400, message: 'Data does not exist'})
      res.send(data)
    })
    .catch(next)
}

function getOneStudentAssignments(req, res, next) {
  studentModel.getOneStudentAssignments(req.params.teacherId, req.params.subjectId, req.params.studentId)
    .then( ( data ) => {
      if(!data) return next({status: 400, message: 'Student does not exist'})
      res.send(data)
    })
    .catch(next)
}

module.exports = {
  getStudents,
  getOneStudentAssignments
}