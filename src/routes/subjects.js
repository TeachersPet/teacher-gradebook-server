const express = require('express')
const router = express.Router({mergeParams: true});
const subjectController = require('../controllers/subjects')

router.get('/', subjectController.getSubjects)

router.get('/:subjectId', subjectController.getOneSubject)

router.use('/:subjectId/assignments', require('../routes/assignments'))

router.use('/:subjectId/students', require('../routes/students') )


module.exports = router;