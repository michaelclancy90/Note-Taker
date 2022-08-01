const express = require('express')
const path = require('path');
const router = express.Router();
const app = express();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Fallback route for when a user attempts to visit routes that don't exist
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
