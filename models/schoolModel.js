const mongoose = require('mongoose')

const schoolSchema = mongoose.Schema(
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
        Cycle: {
            type: String,
            required: [true,"Please Enter Cycle"]
        },
        CsmEmail: {
            type: String,
            required: [true,"Please Enter Csm Email"]
        },
        AAEmail: {
            type: String,
            required: [true,"Please Enter AA Name"]
        },
        AY2324Billing: {
            type: Number,
            required: true,
            default:0
        },
        AY2324Collection: {
            type: Number,
            required: true,
            default:0
        },
        AY2324Outstanding: {
            type: Number,
            required: true,
            default:0
        },
        AY2425Billing: {
            type: Number,
            required: true,
            default:0
        },
        AY2425Collection: {
            type: Number,
            required: true,
            default:0
        },
        AY2425Outstanding: {
            type: Number,
            required: true,
            default:0
        },
    },
    {
        timestamps: true
    }
)


const SchoolDetails = mongoose.model('SchoolDetails', schoolSchema);

module.exports = SchoolDetails;