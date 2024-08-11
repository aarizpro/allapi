const AutoAwb = require('../models/autoawbModel')
const asyncHandler = require('express-async-handler')

const getBookingDetails = asyncHandler(async(req, res) => {
    try {
        const courierdetails = await AutoAwb.find({});
        res.status(200).json(courierdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const createBooking = asyncHandler(async(req, res) => {
    try {
        const courierdetails = await AutoAwb.create(req.body)
        res.status(200).json(courierdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const getBookingDetail = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const courierdetails = await AutoAwb.findById(id);
        res.status(200).json(courierdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const updateBooking = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const courierdetails = await AutoAwb.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!courierdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedCourier = await AutoAwb.findById(id);
        res.status(200).json(updatedCourier);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const deleteBooking = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const courierdetails = await AutoAwb.findByIdAndDelete(id);
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
        const query = {};
        query[field] = value;

        const users = await AutoAwb.find(query);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = {
    getBookingDetails,
    createBooking,
    getBookingDetail,
    updateBooking,
    deleteBooking,
    getCoubyField
}