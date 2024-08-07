const Booking = require('../models/bookingModel')
const asyncHandler = require('express-async-handler')

const getBookingDetails = asyncHandler(async(req, res) => {
    try {
        const courierdetails = await Booking.find({});
        res.status(200).json(courierdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const createBooking = asyncHandler(async(req, res) => {
    try {
        const courierdetails = await Booking.create(req.body)
        res.status(200).json(courierdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const getBookingDetail = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const courierdetails = await Booking.findById(id);
        res.status(200).json(courierdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const updateBooking = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const courierdetails = await Booking.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!courierdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedCourier = await Booking.findById(id);
        res.status(200).json(updatedCourier);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const deleteBooking = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const courierdetails = await Booking.findByIdAndDelete(id);
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

module.exports = {
    getBookingDetails,
    createBooking,
    getBookingDetail,
    updateBooking,
    deleteBooking
}