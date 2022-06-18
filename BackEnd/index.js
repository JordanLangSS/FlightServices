const express = require('express');
const mongoose = require('mongoose');
// use a .env file for the server port in case I want a Dev and client port separate
require('dotenv').config(); // so I don't need the value from the require

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/flights', (req, res) => {
    res.send('GET all flights');
});

app.get('/flights/:id', (req, res) => {
    res.send(`GET flight with id of ${req.params.id} `);
});



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error(err);
        //terminate process if failed to connect to DB
        process.exit(1);
    });

// Will print only after system fails and exits
process.on('exit', () => {
    console.log('Cleanup after exit.')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

// video 26 @ 4:52