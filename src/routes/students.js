const express = require('express')
const router = express.Router({mergeParams: true});
const studentController = require('../controllers/students')
const authController = require('../controllers/auth')

router.get('/', authController.authenticated, authController.isSelf, studentController.getStudents)

module.exports = router;