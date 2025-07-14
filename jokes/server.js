const express = require('express');
const app = express();
const jokeRoutes = require('./routes/jokes.routes');
app.use(jokeRoutes)