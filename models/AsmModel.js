const mongoose = require('mongoose')

const asmSchema = mongoose.Schema(
    {
        Grade: {
            type: String,
            required: [true,"Enter Courier Details"]
            
        },
        Subject: {
            type: String,
            required: [true,"Please Enter Site Details"]
            
        },
        AsmType: {
            type: String,
            required: [true,"Please Enter Courier Image Link"]
        },
        AsmLink: {
            type: String,
            required: [true,"Please Enter Courier Image Link"]
        },
        AnsLink: {
            type: String,
            required: [true,"Please Enter Courier Image Link"]
        },
        Marks: {
            type: Number,
            required: true,
            default:0
        }
    },
    {
        timestamps: true
    }
)


const AsmDetails = mongoose.model('AsmDetails', asmSchema);

module.exports = AsmDetails;
