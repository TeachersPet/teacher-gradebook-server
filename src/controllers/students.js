const studentModel = require('../models/students')

function getStudents(req, res, next) {
  studentModel.getStudents(req.params.teacherId)
    .then( (data) => {
      if(data.length === 0) return next({status: 400, message: 'Data does not exist'})
      res.send(data)
    })
    .catch(next)
}

module.exports = {
  getStudents
}