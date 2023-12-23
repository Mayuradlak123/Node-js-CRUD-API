// src/server.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
var requestLogger = require('./middlewares/requestLogger');
var productRoute = require('./routes/lapilproductsRoutes');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(requestLogger)
app.use('/products', productRoute);
app.listen(PORT, function () {
  console.log('Server is running on http://localhost:' + PORT);
});