const express = require('express')
const UserDetails = require('../models/userdetailsModel')
const{getUserDetails,createUser,getUserDetail,updateUser,deleteUser} = require('../controller/userdetailsController')
const router = express.Router();

router.get('/',getUserDetails);
router.post('/', createUser);
router.get('/:id', getUserDetail);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
module.exports = router;