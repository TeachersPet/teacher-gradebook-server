const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.get('/login', authController.authenticated, authController.status)
router.post('/login', authController.login)

module.exports = router