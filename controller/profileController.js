const ProfileDetails = require('../models/profileModel')
const asyncHandler = require('express-async-handler')

const getCustDetails = asyncHandler(async(req, res) => {
    try {
        const custdetails = await ProfileDetails.find({});
        res.status(200).json(custdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const createCust = asyncHandler(async(req, res) => {
    try {
        const custdetails = await ProfileDetails.create(req.body)
        res.status(200).json(custdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const getCustDetail = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const custdetails = await ProfileDetails.findById(id);
        res.status(200).json(custdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const updateCust = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const custdetails = await ProfileDetails.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!custdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedCust = await ProfileDetails.findById(id);
        res.status(200).json(updatedCust);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const deleteCust = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const custdetails = await ProfileDetails.findByIdAndDelete(id);
        if(!custdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        res.status(200).json(custdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getCustDetails,
    createCust,
    getCustDetail,
    updateCust,
    deleteCust
}