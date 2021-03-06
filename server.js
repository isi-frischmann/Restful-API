const path = require('path');

console.log(' 1 Your server file run');

// server
const port = 8000;

// express
var express = require('express');
const app = express();

// connection to the Angular files
app.use(express.static(__dirname + '/myAngular/dist/public'));

// bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// require mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taskAPI');

// DB connection
require('./server/config/mongoose.js');

// model file
require('./server/models/task.js');

// routes
require('./server/config/routes.js')(app);

const server = app.listen(port);