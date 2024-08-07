require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userdetails = require('./routes/userdetailsRoute')
const schooldetails = require('./routes/schoolRoute')

var cors = require('cors')

const app = express();

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/userdetails',userdetails);
app.use('/api/school',schooldetails);
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Harish')
})


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