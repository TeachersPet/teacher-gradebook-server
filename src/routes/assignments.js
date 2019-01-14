const express = require('express')
const router = express.Router({ mergeParams: true });
const assignmentController = require('../controllers/assignments')

router.get('/', assignmentController.getAssignments)

router.get('/:assignmentId', assignmentController.getOneAssignment)

router.post('/', assignmentController.createAssignment)

router.delete('/:assignmentId', assignmentController.removeAssignment)

router.use('/:assignmentId/students', require('../routes/students_assignments'))

module.exports = router;
