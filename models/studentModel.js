const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
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
        StudentName: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        StudentGender: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        StudentGrade: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        StudentAddr: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        StudentCity: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        StudentState: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        StudentPincode: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        FatherName: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        FatherMobile: {
            type: Number,
            required: true,
            default:0
        },
        MotherName: {
            type: String,
            required: [true,"Please Enter AA Name"]
        },
        MotherMobile: {
            type: Number,
            required: true,
            default:0
        }
    },
    {
        timestamps: true
    }
)


const StudentDetails = mongoose.model('StudentDetails', studentSchema);

module.exports = StudentDetails;