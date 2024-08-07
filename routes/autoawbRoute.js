const express = require('express')
const AutoAwb = require('../models/autoawbModel')
const{getBookingDetails,createBooking,getBookingDetail,updateBooking,deleteBooking} = require('../controller/autoawbController')
const router = express.Router();

router.get('/',getBookingDetails);
router.get('/:id',getBookingDetail);
router.put('/:id',updateBooking);
router.delete('/:id',deleteBooking);
router.post('/', createBooking);
module.exports = router;