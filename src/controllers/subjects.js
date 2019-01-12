const models = require('../models/subjects')

function getSubjects(res, next) {
  models.getSubjects()
    .then( (data) => {
      res.send({ data })
    })
    .catch(next)

}

function getOneSubject(req, res, next) {
  models.getOneSubject(req.params.subjectId)
    .then( (data) => {
      res.send( { data })
    })
    .catch(next)

}

module.exports = {
  getSubjects,
  getOneSubject
}