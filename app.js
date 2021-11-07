const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const CORS = require('cors')
const body_parser = require('body-parser')
require('dotenv').config()
const app = express()

const student_api = require('./app/routes/student.route')
const class_api = require('./app/routes/class.route')
const teacher_api = require('./app/routes/teacher.route')
const fee_api = require('./app/routes/fee.route')

const PORT = process.env.PORT || 5003

mongoose.connect(process.env.DB, (err) => {
    if(err) {
        console.log(err)
    }else {
        console.log("DB connected")
    }
})

//middlewares
app.use(morgan('dev'))
app.use(CORS())
app.use(body_parser())

//routes
app.use('/api/students', student_api)
app.use('/api/classes', class_api)
app.use('/api/teacher', teacher_api)
app.use('/api/fee', fee_api)

app.listen(PORT, (err) => {
    if(err) {
        console.log(err)
    }else {
        console.log("App listining on PORT: ", PORT)
    }
})