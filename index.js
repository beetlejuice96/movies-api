const express = require('express');
const app = express(); 
const { config } = require('./config/index');
var morgan = require('morgan')
const moviesApi = require('./routes/movies');
const {logErrors,errorHandler, wrapErrors} = require('./utils/middleware/errorHandlers.js');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//TODO: Implementar middleware de autenticacion y autorizacion con passport

//logger with http
app.use(morgan('tiny'));

//middleware de body parser
app.use(express.json());

moviesApi(app);

//catch 404
app.use(notFoundHandler)


// Errors middlewares
//  los middlewares de error tienen que ir al final de las rutas.
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () =>
  console.log(`Listening http localhost : ${config.port}`)
);
