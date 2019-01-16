const studentModel = require('../models/students')

function getStudents(req, res, next) {
  studentModel.getStudents(req.params.teacherId)
    .then( (data) => {
      res.send(data)
    })
    .catch(next)
}

function getOneStudent(req, res, next) {
  studentModel.getOneStudent(req.params.teacherId, req.params.studentId)
  .then( ([ data ]) => {
    res.send(data)
  })
  .catch(next)
}

module.exports = {
  getStudents,
  getOneStudent
}