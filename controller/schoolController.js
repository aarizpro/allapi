const SchoolDetails = require('../models/schoolModel')
const asyncHandler = require('express-async-handler')

const getSchoolDetails = asyncHandler(async(req, res) => {
    try {
        const schooldetails = await SchoolDetails.find({});
        res.status(200).json(schooldetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const createSchool = asyncHandler(async(req, res) => {
    try {
        const schooldetails = await SchoolDetails.create(req.body)
        res.status(200).json(schooldetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const getSchoolDetail = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const schooldetails = await SchoolDetails.findById(id);
        res.status(200).json(schooldetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const updateSchool = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const schooldetails = await SchoolDetails.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!schooldetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedSchool = await SchoolDetails.findById(id);
        res.status(200).json(updatedSchool);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const deleteSchool = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const schooldetails = await SchoolDetails.findByIdAndDelete(id);
        if(!schooldetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        res.status(200).json(schooldetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
// const getCoubyField = asyncHandler(async (req, res) => {
//     const { field, value } = req.query;
//     try {
//         const query = {};
//         query[field] = value;

//         const users = await SchoolDetails.find(query);
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

const getCoubyField = asyncHandler(async (req, res) => {
    const { field, value } = req.query;

    try {
        // Ensure both field and value are arrays
        if (!Array.isArray(field) || !Array.isArray(value)) {
            res.status(400).json({ error: "Fields and values must be arrays" });
            return;
        }

        // Build query object dynamically
        const query = {};
        field.forEach((f, index) => {
            query[f] = value[index];
        });

        // Fetch records that match the query
        const users = await SchoolDetails.find(query);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = {
    getSchoolDetails,
    createSchool,
    getSchoolDetail,
    updateSchool,
    deleteSchool,
    getCoubyField
}