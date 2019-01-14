const express = require('express')
const router = express.Router({mergeParams: true});
const studentAssignmentController = require('../controllers/students_assignments')
const authController = require('../controllers/auth')

router.put('/:studentId', studentAssignmentController.updateAssignment)

module.exports = router