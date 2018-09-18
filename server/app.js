const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const multer = require('multer');
const cors = require('cors');
const request = require('request');

const passport = require('passport');
const mongoose = require("mongoose");

const methodOverride = require('method-override');

const uploadRoutes = require("./api/routes/upload");

// Middleware
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

// MongoDB connection
mongoose.Promise = global.Promise;

const mongoURI = 'mongodb://localhost:27017/etfw';

const debugDB = mongoose.connect(`${mongoURI}`)
        .then(() => console.log(`Connected on ${mongoURI}`))
        .catch((err) => console.log(`Database error: ${err}`));

// Initialize Cors
app.use(cors());

// Index Route
app.get('/', (req, res) => {
  res.render('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html'));
})

//Error Handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
