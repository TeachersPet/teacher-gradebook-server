const teacherModel = require('../models/teachers')

function getOne(req, res, next){
  teacherModel.getOne(req.params.teacherId)
  .then( ([ data ]) => {
    if(!data) return next({status: 400, message: 'Teacher does not exist'})
    res.send(data)
  })
  .catch(next)
}

function create(req, res, next){
  if(!req.body.first_name || !req.body.last_name || !req.body.grade_level || !req.body.email || !req.body.password) {
    return next({ status: 400, message: 'Could not create account'})
  }
  teacherModel.create(req.body.first_name, req.body.last_name, req.body.grade_level, req.body.email, req.body.password,  )
  .then(function(data){
    return res.status(201).send(data)
  })
  .catch(next)
}


module.exports = {
  getOne,
  create
}