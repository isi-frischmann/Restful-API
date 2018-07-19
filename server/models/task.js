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


// registers the TaskSchema in the mongoose.model with the name Task
mongoose.model('Task', TaskSchema);
module.exports = TaskSchema;