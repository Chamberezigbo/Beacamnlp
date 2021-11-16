const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./src/db/db');
const resumeRouter = require('./src/router/resume')

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

app.use(resumeRouter)
app.listen(port, () => {
    console.log(`server up and running on port ${port} `);
})