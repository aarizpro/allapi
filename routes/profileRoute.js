const express = require('express')
const ProfileDetails = require('../models/profileModel')
const{getCustDetails,createCust,getCustDetail,updateCust,deleteCust} = require('../controller/profileController')
const router = express.Router();

router.get('/',getCustDetails);
router.get('/:id',getCustDetail);
router.put('/:id',updateCust);
router.delete('/:id',deleteCust);
router.post('/', createCust);
module.exports = router;