const assignmentModel = require('../models/assignments')

function getAssignments(req, res, next) {
  assignmentModel.getAssignments(req.params.teacherId, req.params.subjectId)
    .then((data) => {
      if (!data) return next({ status: 400, message: 'Data does not exist' })
      res.send(data)
    })
    .catch(next)
}

function getOneAssignment(req, res, next) {
  assignmentModel.getOneAssignment(req.params.teacherId, req.params.subjectId, req.params.assignmentId)
    .then(( data ) => {
      if (!data) return next({ status: 400, message: 'Assignment does not exist' })
      res.send(data)
    })
    .catch(next)

}

function createAssignment(req, res, next) {
  // req.body.students should be an array of objects, each object contanining a student id, grade, and comment
  assignmentModel.create(req.params.teacherId, req.params.subjectId, req.params.assignment_name, req.body.students)
    .then(([ data ]) => {
      if (!data) return next({ status: 400, message: 'Assignment not created' })
      res.status(201).send(data)
    })
    .catch(next)
}

function updateAssignment(req, res, next) {
  assignmentModel.updateAssignment(req.params.teacherId, req.params.subjectId, req.params.assignmentId, req.body.assignment_name, req.body.student_id, req.body.grade, req.body.comment)
    .then(([ data ]) => {
      if (!data) return next({ status: 400, message: 'Assignment not updated' })
      res.status(201).send(data)
    })
    .catch(next)

}

function removeAssignment(req, res, next) {
  assignmentModel.removeAssignment(req.params.teacherId, req.params.subjectId, req.params.assignmentId)
    .then(([ data ]) => {
      if (!data) return next({ status: 400, message: 'Assignment not deleted' })
      res.send(data)
    })
    .catch(next)
}

module.exports = {
  getAssignments,
  getOneAssignment,
  createAssignment,
  updateAssignment,
  removeAssignment
}