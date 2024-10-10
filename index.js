const express = require('express');
const path = require('path');
const db = require('./config/mongoose');
const app = express();

app.use(express.json());  // This is important! It parses incoming JSON requests

app.use('/quiz', require('./routes/quiz'));  // Define your routes after adding the middleware

const port = 8000;

app.listen(port, (err) => {
    if (err) {
        console.log("Server not connected");
    }
    console.log("Server is connected on port " + port);
});
