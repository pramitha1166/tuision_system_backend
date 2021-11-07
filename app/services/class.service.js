const { Class } = require('../model/index')

exports.saveClassService = (class_item) => {
    return new Promise((resolve, reject) => {
        const saving_class_item = new Class(class_item)
        saving_class_item.save((err, item) => {
            if(err) {
                reject(err)
            }else {
                resolve(item)
            }
        })
    })
}

exports.getAllClassService = () => {
    return new Promise((resolve, reject) => {
        Class.find()
            .exec((err, items) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(items)
                }
            })
    })
}

exports.getClassById = (id) => {
    return new Promise((resolve, reject) => {
        Class.findById(id, (err, item) => {
            if(err) {
                reject(err)
            }else {
                resolve(item)
            }
        })
    })
}

exports.updateStudentService = (class_item, body) => {
    return new Promise((resolve, reject) => {
        class_item.subject = body.subject
        class_item.grade = body.grade
        class_item.teacher = body.teacher

        class_item.save((err, item) => {
            if(err) {
                reject(err)
            }else {
                resolve(item)
            }
        })
    })
}

exports.addStudentToClassService = (student_item, id) => {
    return new Promise((resolve, reject) => {
        Class.findOneAndUpdate(
            { _id: id },
            { $push: {students: student_item} },
            (err, item) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(item)
                }
            }
        )
    })
}

