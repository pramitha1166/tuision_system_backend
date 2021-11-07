const mongoose = require('mongoose')
const arrayUniquePlugin = require('mongoose-unique-array');

const class_schema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            unique: true
        }
    ]
})

class_schema.plugin(arrayUniquePlugin)

const Class = mongoose.model(
    "Class",
    class_schema
)

module.exports = Class