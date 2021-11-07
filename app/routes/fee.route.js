const express = require('express')

const router = express.Router()

const { saveFeeController } = require('../controller/fee.controller')
const { getClassByIdController } = require('../controller/class.controller')
const { getStudentByIdController } = require('../controller/student.controller')

router.post("/fee/:classId/:studentId", saveFeeController)

router.param("classId", getClassByIdController)
router.param("studentId", getStudentByIdController)

module.exports = router