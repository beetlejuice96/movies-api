const express = require('express');
const app = express(); 
const { config } = require('./config/index');

const moviesApi = require('./routes/movies');
const {logErrors,errorHandler} = require('./utils/middleware/errorHandlers.js');
//middleware de body parser
app.use(express.json());

moviesApi(app);
//  los middlewares de error tienen que ir al final de las rutas.
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () =>
  console.log(`Listening http localhost : ${config.port}`)
);
