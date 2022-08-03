const express = require('express')
const router = express.Router();
const uuid = require('uuid');
const { readAndAppend, writeToFile ,readFromFile, } = require('../utils/fsUtils');


router.use(express.static('public'));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());


module.exports = router;

