const express = require('express')
const router = express.Router({ mergeParams: true });
const assignmentController = require('../controllers/assignments')
const authController = require('../controllers/auth')

router.get('/', authController.authenticated, authController.isSelf, assignmentController.getAssignments)

router.get('/:assignmentId', authController.authenticated, authController.isSelf, assignmentController.getOneAssignment)

router.post('/', authController.authenticated, authController.isSelf, assignmentController.createAssignment)

router.delete('/:assignmentId', authController.authenticated, authController.isSelf, assignmentController.removeAssignment)

router.use('/:assignmentId/students', require('../routes/students_assignments'))

module.exports = router;
