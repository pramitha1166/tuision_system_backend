const mongoose = require('mongoose')

const Teacher = mongoose.model(
    'Teacher',
    new mongoose.Schema({
        basic_details: {
            fname: {
                type: String,
                required: true
            },
            lname: {
                type: String
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
        school: {
            name: {
                type: String
            }
        },
        education: {
            primary_education: {
                type: String
            },
            heigher_education: {
                institute: {
                    type: String
                },
                degree: {
                    type: String
                }
            }
        },
        nic: {
            type: String,
            required: true
        },
        image: {
            type: String
        }
    }, {timestamps: true})
)

module.exports = Teacher