const express = require('express')

const router = express.Router()

const { studentCreateController, studentGetAllController, getStudentByIdController, getSingleStudent, updateStudentController, deleteStudentController, addFeeToStudentController } = require('../controller/student.controller')

router.post("/student", studentCreateController)
router.get("/students", studentGetAllController)
router.get("/student/:studentId", getSingleStudent)
router.put("/student/:studentId", updateStudentController)
router.delete("/student/:studentId", deleteStudentController)
router.post("/student/add/fee/:studentId", addFeeToStudentController)

router.param("studentId", getStudentByIdController)


module.exports = router