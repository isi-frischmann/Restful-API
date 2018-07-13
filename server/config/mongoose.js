// connection to the DB

const path = require('path');
const fs = require('fs');

// requrie mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TaskSchema');