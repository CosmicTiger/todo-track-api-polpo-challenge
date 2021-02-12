const express = requrie('express');

const todosRoutes = require('./routes/todo');

const app = express();

app.use('/task', todosRoutes);

app.listen(8080);
