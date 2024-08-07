const UserDetails = require('../models/userdetailsModel')
const asyncHandler = require('express-async-handler')

const getUserDetails = asyncHandler(async(req, res) => {
    try {
        const userdetails = await UserDetails.find({});
        res.status(200).json(userdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const createUser = asyncHandler(async(req, res) => {
    try {
        const userdetails = await UserDetails.create(req.body)
        res.status(200).json(userdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const getUserDetail = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const userdetails = await UserDetails.findById(id);
        res.status(200).json(userdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const updateUser = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const userdetails = await UserDetails.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!userdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedUser = await UserDetails.findById(id);
        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const deleteUser = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const userdetails = await UserDetails.findByIdAndDelete(id);
        if(!userdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        res.status(200).json(userdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})


module.exports = {
    getUserDetails,
    createUser,
    getUserDetail,
    updateUser,
    deleteUser
 
}