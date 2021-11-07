const express = require('express')

const router = express.Router()

const { getClassByIdController, getAllClassController, saveClassController, updateClassController, getSingleClassController, addStudentToClassController } = require('../controller/class.controller')

router.post('/class', saveClassController)
router.get('/classes', getAllClassController)
router.get('class/:classId', getSingleClassController)
router.put('/class/:classId', updateClassController)
router.post('/add/student/:classId', addStudentToClassController)
router.param('classId', getClassByIdController)

module.exports = router