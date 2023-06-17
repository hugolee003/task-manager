// reqiuire modules 
// const { configDotenv } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT  = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI; 
 
const app = express();
app.use(express.json());

// connect to mongodb
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Successfully connected to database`)
    })
    .catch((error) => {
        console.log('Error connecting to database', error)
    });
 
// middleware
const taskRouter = require('./routes/tasks');

app.use('/tasks', taskRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// listen for requests
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})