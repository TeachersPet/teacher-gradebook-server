const studentAssignmentModel = require('../models/students_assignments')

function updateAssignment(req, res, next) {
  studentAssignmentModel.updateAssignment(req.params.assignmentId, req.params.studentId, req.body.grade, req.body.comment)
    .then((data) => {
      if (!data) return next({ status: 400, message: 'Assignment not updated' })
      res.status(201).send(data)
    })
    .catch(next)
}

module.exports = {
  updateAssignment
}