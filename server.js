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
const newschool = require('./routes/newschoolRoute')
const profileschool = require('./routes/profileSchoolRoute')
const asmfinder = require('./routes/asmRoute')
const markEntry = require('./routes/markEntryRoute')

var cors = require('cors')

const app = express();

const PORT = 80;
const MONGO_URL = 'mongodb+srv://aarizpro2801:root123@cluster0.zsg212x.mongodb.net/?retryWrites=true&w=majority';

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
app.use('/api/newschool',newschool);
app.use('/api/profileschool',profileschool);
app.use('/api/asmfinder',asmfinder);
app.use('/api/markentry',markEntry);

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