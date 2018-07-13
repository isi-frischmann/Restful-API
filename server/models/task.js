// file for the DB

var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: 
        { type: String, default: "" },
    description: 
        { type: String, default: "" },
    completed: 
        { type: Boolean, default: false },
}, {timestamps: true});

mongoose.model('Task', TaskSchema); //TaskSchema needs to be called in the mongoose.js after .//localhost/<SchemaName>'