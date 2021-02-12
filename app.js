const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const todosRoutes = require('./routes/task');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form></form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // the domains can be specified like: 'codepen.io, etc.io'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/app', todosRoutes);

mongoose
    .connect(
        'mongodb+srv://admin:bAHk0yLcYyJMrscs@cluster0.5kcrz.mongodb.net/Cluster0?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(result => {
        console.log("Successfully connected with Database Cluster");
        app.listen(8080);
    })
    .catch(err => console.log(err));