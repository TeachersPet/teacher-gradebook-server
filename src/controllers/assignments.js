const assignmentModel = require('../models/assignments')

function getAssignments(req, res, next) {
  assignmentModel.getAssignments(req.params.teacherId, req.params.subjectId)
  .then( (data) => {
    if(!data) return next({status: 400, message: 'Data does not exist'})
    res.send(data)
  })
  .catch(next)
}

function getOneAssignment(req, res, next) {
  assignmentModel.getOneAssignment(req.params.teacherId, req.params.subjectId, req.params.assignmentId)
  .then( (data) => {
    if(!data) return next({status: 400, message: 'Assignment does not exist'})
    res.send(data)
  })
  .catch(next)

}

function createAssignment(req, res, next) {

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