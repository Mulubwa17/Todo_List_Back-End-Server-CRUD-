const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const todoRoute = require('./todoRoute')



const app = express();

const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(logger("dev"));

mongoose
  .connect('mongodb://127.0.0.1:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log('Connected to the Database successfully');
  });


  app.use('/api/v1', todoRoute);



  app.listen(PORT, () => {
    console.log('Server is listening on Port:', PORT)
  })

module.exports = app;

