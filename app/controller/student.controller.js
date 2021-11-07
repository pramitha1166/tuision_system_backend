const { saveStudentService, getAllStudents, getStudentById, updateStudentService, deleteStudentService, addFeeToStudentService } = require('../services/student.service')

exports.studentCreateController = async (req, res) => {
    try {
        console.log(req.body)
        const result = await saveStudentService(req.body)
        res.status(200).json(result)
    } catch(err) {
        res.status(400).json({
            error: err
        })
    }
}

exports.studentGetAllController = async (req, res) => {
    try {
        const result = await getAllStudents()
        res.status(200).json(result)
    } catch(err) {
        res.status(400).json({
            error: err
        })
    }
}

exports.getSingleStudent = (req,res) => {
    console.log(req.student)
    return res.status(200).json(req.student)
}

exports.getStudentByIdController = async (req, res, next, id) => {
    try {
        console.log("id",id)
        const result = await getStudentById(id);
        req.student = result
        next();
    } catch(err) {
        res.status(400).json({error: err})
    }
}

exports.updateStudentController = async (req, res) => {
    try {
        const body = req.body;
        const student = req.student;
        const result = await updateStudentService(body, student)
        res.status(200).json(result)

    } catch(err) {
        res.status(400).json({error: err})
    }
}

exports.deleteStudentController = async (req, res) => {
    try {
        const student = req.student
        const result = await deleteStudentService(student)
        res.status(200).json(result)
    } catch(err) {
        res.status(400).json({error: err})
    } 
}

exports.addFeeToStudentController = async (req, res) => {
    try {
        const fee_body = req.body.fee_id;
        const student_id = req.student._id;
        const result = await addFeeToStudentService(fee_body, student_id)
        res.status(200).json(result)    
    } catch(err) {
        res.status(400).json({error: err})
    }
}