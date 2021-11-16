const express = require('express');
const router = new express.Router();

const Resume = ('../models/resume.js');
require('dotenv').config();

//? this router saves resume to database //

router.post('/resume', async (req, res) => {
    let { resume } = req.body
    let newResume = new Resume({
        resume
    })
    console.log(newResume)
    // try {
    //     await newResume.save();
    //     res.status(201).send(newResume);
    // } catch (error) {
    //     res.status(400).send(error);
    // }
})

module.exports = router