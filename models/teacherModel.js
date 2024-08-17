const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema(
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
        TeacherName: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        MobileNo: {
            type: Number,
            required: true,
            default:0
        },
        TeacherEmail: {
            type: String,
            required: [true,"Please Enter AA Name"]
        },
        TeacherRole: {
            type: String,
            required: [true,"Please Enter AA Name"]
        },
        Grade: {
            type: String,
            required: [true,"Please Enter AA Name"]
        },
        Subject: {
            type: String,
            required: [true,"Please Enter AA Name"]
        }
    },
    {
        timestamps: true
    }
)


const TeacherDetails = mongoose.model('TeacherDetails', teacherSchema);

module.exports = TeacherDetails;