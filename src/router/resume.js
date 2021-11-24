const express = require('express');
const router = new express.Router();

const Resume = ('../models/resume.js');
require('dotenv').config();

//? this router saves resume to database //

router.post('/resume', async (req, res) => {
    let resume = req.body.resume;
    let newResume = new Resume({ resume });
    try {
        await newResume.save()
        res.status(201).json({success: true, responseMessage:resume})
    } catch (error) {
        return res.status(422)
            .json({
                success: false,
                responseMessage: `failed to register`
        })
    }
})

module.exports = router