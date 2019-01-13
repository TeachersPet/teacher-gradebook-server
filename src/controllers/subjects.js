const subjectModel = require('../models/subjects')

function getSubjects(req, res, next) {
  subjectModel.getSubjects()
    .then( (data) => {
      if(!data) return next({status: 400, message: 'Data does not exist'})
      res.send(data)
    })
    .catch(next)
}

function getOneSubject(req, res, next) {
  subjectModel.getOneSubject(req.params.subjectId)
    .then( ([ data ]) => {
      if(!data) return next({status: 400, message: 'Subject does not exist'})
      res.send(data)
    })
    .catch(next)
}

module.exports = {
  getSubjects,
  getOneSubject
}