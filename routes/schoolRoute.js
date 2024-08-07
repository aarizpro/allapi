const express = require('express')
const SchoolDetails = require('../models/schoolModel')
const{getSchoolDetails,createSchool,getSchoolDetail,updateSchool,deleteSchool} = require('../controller/schoolController')
const router = express.Router();

router.get('/',getSchoolDetails);
router.get('/:id',getSchoolDetail);
router.put('/:id',updateSchool);
router.delete('/:id',deleteSchool);
router.post('/', createSchool);
module.exports = router;