const express = require('express')
const router = express.Router({mergeParams: true});
const subjectController = require('../controllers/subjects')

router.get('/', subjectController.getSubjects)

router.get('/:subjectId', subjectController.getOneSubject)

module.exports = router;