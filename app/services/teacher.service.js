const { Teacher } = require('../model/index')

exports.saveTeacherService = (teacher_item) => {
    return new Promise((resolve, reject) => {
        const teacher = new Teacher(teacher_item)
        teacher.save((err, item) => {
            if(err) {
                reject(err)
            }else {
                resolve(item)
            }
        })
    })
}

exports.getTeacherById = (id) => {
    return new Promise((resolve, reject) => {
        Teacher.findById(id, (err, item) => {
            if(err) {
                reject(err)
            }else {
                resolve(item)
            }
        })
    })
}