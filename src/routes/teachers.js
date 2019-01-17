const express = require('express')
const router = express.Router({mergeParams: true})
const teacherController = require('../controllers/teachers')
const authController = require('../controllers/auth')

router.get('/:teacherId', teacherController.getOne)
router.post('/', teacherController.create)


router.use('/:teacherId/subjects', authController.authenticated, authController.isSelf, require('../routes/subjects'))

router.use('/:teacherId/students', authController.authenticated, authController.isSelf, require('../routes/students') )


module.exports = router