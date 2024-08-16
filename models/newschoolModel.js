const mongoose = require('mongoose')

const newschoolSchema = mongoose.Schema(
    {
        DealID: {
            type: Number,
            required: true,
            default:0
        },
        NucleusID: {
            type: String,
            required: [true,"Please Enter School Name"]
            
        },
        SchoolName: {
            type: String,
            required: [true,"Please Enter School Name"]
        },
        District: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        loc_lat: {
            type: String,
            required: [true,"Please Enter Address"]
        },
        loc_long: {
            type: String,
            required: [true,"Please Enter Address"]
        },
        Address: {
            type: String,
            required: [true,"Please Enter Address"]
        },
        SchoolEmail: {
            type: String,
            required: [true,"Please Enter Email"]
        },
        OwnerName: {
            type: String,
            required: [true,"Please Owner Name"]
        },
        OwnerMob: {
            type: String,
            required: [true,"Please Owner Mob"]
        },
        SchoolLogo: {
            type: String,
            required: [true,"Please school Logo"]
        },
    },
    {
        timestamps: true
    }
)


const NewSchool = mongoose.model('NewSchool', newschoolSchema);

module.exports = NewSchool;