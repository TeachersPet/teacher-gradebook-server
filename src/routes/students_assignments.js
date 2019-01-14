const express = require('express')
const router = express.Router({mergeParams: true});
const studentAssignmentController = require('../controllers/students_assignments')
const authController = require('../controllers/auth')

router.put('/:studentId', authController.authenticated, authController.isSelf, studentAssignmentController.updateAssignment)

module.exports = router