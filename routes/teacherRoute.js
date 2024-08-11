const express = require('express')
const TeacherDetails = require('../models/teacherModel')
const{getSchoolDetails,createSchool,getSchoolDetail,updateSchool,deleteSchool,getCoubyField} = require('../controller/teacherController')
const router = express.Router();

router.get('/',getSchoolDetails);
router.get('/search', getCoubyField);
router.get('/:id',getSchoolDetail);
router.put('/:id',updateSchool);
router.delete('/:id',deleteSchool);
router.post('/', createSchool);
module.exports = router;