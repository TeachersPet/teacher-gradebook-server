const express = require('express')
const router = express.Router({mergeParams: true});
const studentController = require('../controllers/students')
const authController = require('../controllers/auth')

router.get('/', studentController.getStudents)

router.get('/:studentId', studentController.getOneStudent)


module.exports = router;