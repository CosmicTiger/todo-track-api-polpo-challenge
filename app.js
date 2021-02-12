const express = require('express');
const bodyParser = require('body-parser');

const todosRoutes = require('./routes/task');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form></form>
app.use(bodyParser.json()); // application/json

app.use('/app', todosRoutes);

app.listen(8080);
