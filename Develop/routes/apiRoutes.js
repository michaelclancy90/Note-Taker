const express = require('express')
const path = require('path');
const router = express.Router();
const fs = require("fs");
let data = require('../db/db.json');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



module.exports = router;