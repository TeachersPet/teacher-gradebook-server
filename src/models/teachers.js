const knex = require('../../db/index')
const bcrypt = require('bcrypt')

function getOne(teacherId){
  return (
    knex('teachers')
    .where({ 'id': teacherId})
  )
}

function getTeacherByEmail(email){
  return (
    knex('teachers')
    .where({ 'email': email })
    .first()
  )
}

function create(first_name, last_name, grade_level, email, password){
  return getTeacherByEmail(email)
  .then( (data) => {
    if(data) throw { status: 400, message:'User already exists'}

    return bcrypt.hash(password, 10)
  })
  .then( (password) => {
    return (
      knex('teachers')
      .insert({ first_name, last_name, grade_level, email, hashed_password: password,  })
      .returning('*')
    )
  })
  .then(function([ data ]){
    delete data.hashed_password
    return data
  })
}

module.exports = {
  getOne,
  getTeacherByEmail,
  create
}