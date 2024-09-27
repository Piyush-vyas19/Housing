const express = require('express');
const {nameget,updateUser} = require('../controllers/profileControllers');
const { SiNamebase } = require('react-icons/si');
const router = express.Router();

router.get('/:email',nameget);
router.put('/details/:email',updateUser);
module.exports = router;
