const mongoose = require('mongoose');

require('dotenv').config()


const resumeSchema = new mongoose.Schema({
    resume: {
        type: String,
        required: true,
        trim:true
    }

}, {
    timestamps:true
})

const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume