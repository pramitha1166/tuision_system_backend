const express = require('express')

const router = express.Router()

const { saveTeacherController } = require('../controller/teacher.controller')

router.post('/teacher', saveTeacherController)

module.exports = router