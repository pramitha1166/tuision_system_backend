const mongoose = require('mongoose')

const Student = mongoose.model(
    "Student",
    new mongoose.Schema({
        basic_details: {
            fname: {
                type: String,
                required: true
            },
            lname: {
                type: String,
            },
            address: {
                address: {
                    type: String,
                    required: true
                },
                city: {
                    type: String
                },
                state: {
                    type: String
                }
            }
        },
        parent_details: {
            name: {
                type: String
            },
            nic: {
                type: String
            }
        },
        school: {
            type: String
        },
        date_of_birth: {
            type: Date,
            required: true   
        },
        email: {
            type: String
        },
        fees: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Fee"
        }]
    })
)

module.exports = Student