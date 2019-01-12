const express = require('express')
const router = express.Router({ mergeParams: true });

router.get('/', ctrl.getSubjects)

router.get('/:subjectId', ctrl.getOneSubject)

module.exports = router;