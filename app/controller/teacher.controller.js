const { saveTeacherService } = require('../services/teacher.service')

exports.saveTeacherController = async (req, res) => {
    try {
        const reuslt = await saveTeacherService(req.body)
        res.status(200).json(reuslt)       
    } catch(err) {
        res.status(400).json({error: err})
    }
}