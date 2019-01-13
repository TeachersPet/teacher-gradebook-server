const express = require('express')
const router = express.Router({mergeParams: true})
const teacherController = require('../controllers/teachers')

router.get('/:teacherId', teacherController.getOne)
router.post('/', teacherController.create)


router.use('/:teacherId/subjects', require('../routes/subjects'))

module.exports = router