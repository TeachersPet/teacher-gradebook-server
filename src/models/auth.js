const bcrypt = require('bcrypt')
const teachers = require('./teachers')
// const knex = require('../../db/index')


const login = (email, password) => {
  let user
  return teachers.getTeacherByEmail(email)
    .then(data => {
      if (!data) throw { status: 400, message: 'Bad Request!' }
      user = data
      return bcrypt.compare(password, data.hashed_password)
    })
    .then(status => {
      if (!status) throw { status: 401, message: 'Unauthorized' }
      delete user.password
      return user
    })
}

// const isVendorOnInvoice = (invoiceId) => {
//   return knex('accounts_invoices')
//   .where({'accounts_invoices.invoice_id': invoiceId})
// }

module.exports = { login }