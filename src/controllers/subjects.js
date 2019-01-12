const subjectModel = require('../models/subjects')

function getSubjects(req, res, next) {
  subjectModel.getSubjects()
    .then( (data) => {
      res.send(data)
    })
    .catch(next)

}

function getOneSubject(req, res, next) {
  subjectModel.getOneSubject(req.params.subjectId)
    .then( ([ data ]) => {
      res.send(data)
    })
    .catch(next)

}

module.exports = {
  getSubjects,
  getOneSubject
}