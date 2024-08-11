require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userdetails = require('./routes/userdetailsRoute')
const schooldetails = require('./routes/schoolRoute')
const courierdetails = require('./routes/courierRoute')
const custdetails = require('./routes/customerRoute')
const booking = require('./routes/bookingRoute')
const autoawb = require('./routes/autoawbRoute')
const profile = require('./routes/profileRoute')
const teacher = require('./routes/teacherRoute')
const student = require('./routes/studentRoute')
var cors = require('cors')

const app = express();

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/userdetails',userdetails);
app.use('/api/school',schooldetails);
app.use('/api/courier',courierdetails);
app.use('/api/customer',custdetails);
app.use('/api/booking',booking);
app.use('/api/autoawb',autoawb);
app.use('/api/profile',profile);
app.use('/api/teacher',teacher);
app.use('/api/student',student);
mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})