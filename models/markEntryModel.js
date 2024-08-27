const mongoose = require('mongoose');

const markEntrySchema = mongoose.Schema({
    StudentName: {
        type: String,
        required: [true, "Enter Student Name"]
    },
    StudentGrade: {
        type: String,
        required: [true, "Please Enter Student Grade"]
    },
    StudentMasterID: {
        type: String,
        required: [true, "Please Enter Student Master ID"]
    },
    StudentSubject: {
        type: String,
        required: [true, "Please Enter Student Subject"]
    },
    AsmType: {
        type: String,
        required: [true, "Please Enter Student Subject"]
    },
    RequiredMarks: {
        type: String,
        required: [true, "Please Enter Student Subject"]
    },
    ReceivedMarks: {
        type: String,
        required: [true, "Please Enter Student Subject"]
    },
}, {
    timestamps: true
});

// Create the model from the schema
const MarkEntry = mongoose.model('MarkEntry', markEntrySchema);

module.exports = MarkEntry;
