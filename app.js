const express = require('express');
const bodyParser = require('body-parser');

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

app.listen(8080);
