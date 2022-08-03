const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, writeToFile ,readFromFile, } = require('../utils/fsUtils');
const fs = require('fs');

router.use(express.static('public'));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());


const userNotesDataFile = './db/db.json';

router.get('/notes', (req, res) => {
    readFromFile(userNotesDataFile).then((data) => res.json(JSON.parse(data)));
});

tt
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title, 
            text, 
            id: uuidv4(),
        };

        readAndAppend(newNote,userNotesDataFile);
        res.json(`New note added successfully`);
    } else {
        res.error(`Cannot add new note`);
    }
});


router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;

    readFromFile(userNotesDataFile)
        .then((data) => JSON.parse(data))
        .then((json) => {

        const newNotes = json.filter((note) => note.id !== noteId);

        writeToFile(userNotesDataFile, newNotes);

        res.json(`Note ${noteId} deleted successfully`);            
    });
});

module.exports = router;
module.exports = router;

