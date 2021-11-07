const mongoose = require('mongoose')

const Fee = mongoose.model(
    'Fee',
    new mongoose.Schema({
        amount: {
            type: Number,
            requred: true
        },
        month: {
            type: String
        },
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class',
            required: true
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            required: true
        }
    }, {timestamps: true})
)

module.exports = Fee