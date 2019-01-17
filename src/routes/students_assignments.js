const express = require('express')
const router = express.Router({mergeParams: true});
const studentAssignmentController = require('../controllers/students_assignments')

router.put('/:studentId', studentAssignmentController.updateAssignment)

module.exports = router