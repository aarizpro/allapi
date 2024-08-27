const express = require('express')
const MarkEntry = require('../models/markEntryModel')
const{getCourierDetails,createCourier,getCourierDetail,updateCourier,deleteCourier,getCoubyField} = require('../controller/markEntryController')
const router = express.Router();

router.get('/',getCourierDetails);
router.get('/search', getCoubyField);
router.get('/:id',getCourierDetail);
router.put('/:id',updateCourier);
router.delete('/:id',deleteCourier);
router.post('/', createCourier);


module.exports = router;
