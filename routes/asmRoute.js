const express = require('express')
const CourierDetails = require('../models/AsmModel')
const{getSchoolDetails,
    createSchool,
    getSchoolDetail,
    updateSchool,
    deleteSchool,
    getCoubyField} = require('../controller/asmController')
const router = express.Router();

router.get('/',getSchoolDetails);
router.get('/search', getCoubyField);
router.get('/:id',getSchoolDetail);
router.put('/:id',updateSchool);
router.delete('/:id',deleteSchool);
router.post('/', createSchool);


module.exports = router;
