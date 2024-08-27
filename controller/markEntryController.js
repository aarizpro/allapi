const MarkEntry = require('../models/markEntryModel')
const asyncHandler = require('express-async-handler')

const getCourierDetails = asyncHandler(async(req, res) => {
    try {
        const courierdetails = await MarkEntry.find({});
        res.status(200).json(courierdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const createCourier = asyncHandler(async(req, res) => {
    try {
        const courierdetails = await MarkEntry.create(req.body)
        res.status(200).json(courierdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const getCourierDetail = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const courierdetails = await MarkEntry.findById(id);
        res.status(200).json(courierdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
// const updateCourier = asyncHandler(async(req, res) => {
//     try {
//         const {id} = req.params;
//         const courierdetails = await MarkEntry.findByIdAndUpdate(id, req.body);
//         // we cannot find any product in database
//         if(!courierdetails){
//             res.status(404);
//             throw new Error(`cannot find any product with ID ${id}`);
//         }
//         const updatedCourier = await MarkEntry.findById(id);
//         res.status(200).json(updatedCourier);
        
//     } catch (error) {
//         res.status(500);
//         throw new Error(error.message);
//     }
// });
// const updateCourier = asyncHandler(async (req, res) => {
//     try {
//         const { id } = req.params;
//         const newMarks = req.body.Marks;
//         const courierdetails = await MarkEntry.findById(id);
        
//         if (!courierdetails) {
//             res.status(404);
//             throw new Error(`Cannot find any product with ID ${id}`);
//         }

//         // Add new marks to the existing Marks array
//         courierdetails.Marks.push(newMarks);

//         // Save the updated document
//         const updatedCourier = await courierdetails.save();

//         res.status(200).json(updatedCourier);
        
//     } catch (error) {
//         res.status(500);
//         throw new Error(error.message);
//     }
// });
const updateCourier = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const { StudentSubject, Marks } = req.body;

        // Find the existing document by ID
        const studentDetails = await MarkEntry.findById(id);
        
        if (!studentDetails) {
            res.status(404);
            throw new Error(`Cannot find any student with ID ${id}`);
        }

        // Create a new object for StudentSubject and Marks
        const newMarksEntry = {
            StudentSubject,
            Marks
        };

        // Add the new StudentSubject and Marks to the existing Marks array
        studentDetails.Marks.push(newMarksEntry);

        // Save the updated document
        const updatedStudentDetails = await studentDetails.save();

        res.status(200).json(updatedStudentDetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});



const deleteCourier = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const courierdetails = await MarkEntry.findByIdAndDelete(id);
        if(!courierdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        res.status(200).json(courierdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const getCoubyField = asyncHandler(async (req, res) => {
    const { field, value } = req.query;
    try {
        if (!Array.isArray(field) || !Array.isArray(value)) {
            res.status(400).json({ error: "Fields and values must be arrays" });
            return;
        }
        const query = {};
        field.forEach((f, index) => {
            query[f] = value[index];
        });
        const users = await MarkEntry.find(query);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = {
    getCourierDetails,
    createCourier,
    getCourierDetail,
    updateCourier,
    deleteCourier,
    getCoubyField
}