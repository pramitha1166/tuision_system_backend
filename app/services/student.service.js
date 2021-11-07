const { Student } = require('../model/index')

exports.saveStudentService = (student_item) => {
    return new Promise((resolve, reject) => {
        const student = new Student(student_item)
        student.save((err, student) => {
            if(err) {
                reject(err)
            }else {
                resolve(student)
            }
        })
    })
}

exports.getAllStudents = () => {
    return new Promise((resolve, reject) => {
        Student.find()
            .exec((err, students) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(students)
                }
            })
    })
}

exports.getStudentById = (id) => {
    return new Promise((resolve, reject) => {
        Student.findById(id, (err, student) => {
            if(err) {
                reject(err)
            }else {
                resolve(student)
            }
        })
    })
}

exports.updateStudentService = (body, student) => {
    return new Promise((resolve, reject) => {
        student.basic_details = body.basic_details
        const update_data = new Student(student)
        update_data.save((err, student) => {
            if(err) {
                reject(err)
            }else {
                resolve(student)
            }
        })
    })
}

exports.deleteStudentService = (student) => {
    return new Promise((resolve, reject) => {
        student.remove((err, student) => {
            if(err) {
                reject(err)
            }else {
                resolve(student)
            }
        })
    })
}

exports.addFeeToStudentService = (fee_item, id) => {
    return new Promise((resolve, reject) => {
        Student.findOneAndUpdate(
            {_id: id},
            {$push: {fees: fee_item}},
            (err, fee) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(fee)
                }
            }
        )
    })
}