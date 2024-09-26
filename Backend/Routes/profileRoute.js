const express = require('express');
const {nameget} = require('../controllers/profileControllers');
const { SiNamebase } = require('react-icons/si');
const router = express.Router();

router.get('/:email',nameget);

module.exports = router;
