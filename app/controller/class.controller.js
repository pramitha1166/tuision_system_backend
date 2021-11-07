const { saveClassService, updateStudentService, getAllClassService, getClassById, addStudentToClassService } = require('../services/class.service')
const { getStudentById } = require('../services/student.service')
const { getTeacherById } = require('../services/teacher.service')

exports.saveClassController = async (req, res) => {
    try {
        const item = req.body
        const teacher = await getTeacherById(item.teacher)
        item.teacher = teacher
        const result = await saveClassService(item)
        res.status(201).json(result)
    } catch(err) {
        res.status(400).json({error: err})
    }
}

exports.getAllClassController = async (req, res) => {
    try {
        const result = await getAllClassService()
        res.staus(200).json(result)
    } catch(err) {
        res.status(400).json({error: err})
    }
}

exports.getClassByIdController = async (req,res,next,id) => {
    try {
        const result = await getClassById(id)
        req.class_item = result
        next()
    } catch(err) {
        res.status(400).json({error: err})
    }
}

exports.getSingleClassController = (req,res) => {
    return res.status(200).json(req.class_item)
}

exports.updateClassController = async (req,res) => {
    try {
        const result = await updateStudentService(req.class_item, req.body)
        res.staus(200).json(result)
    } catch(err) {
        res.status(400).json({error: err})
    }
}

exports.addStudentToClassController = async (req,res) => {
    try {
        const student = await getStudentById(req.body.student)
        if(student!== null) {
            return res.status(400).json({error: "This user already exists in this class"})
        }else {
            const result = await addStudentToClassService(student, req.class_item._id)
            res.status(200).json(result)
        }
        
    } catch (err) {
        res.status(400).json({error: err})
    }
}


