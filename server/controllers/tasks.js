// The whole funcionallaty happens here

// import the model:
var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {

    index: function (req, res) {
        Task.find({}, function (err, allTasks) {
            if (err) {
                console.log("An error accured - index page", err);
                res.json({ message: "Error", error: err });
            }
            else {
                res.json({ message: "These are the tasks", task: allTasks });
            }
        });
    },

    showById: function (req, res) {
        console.log(req.params.id)
        Task.findOne({ _id: req.params.id }, function (err, specTask) {
            if (err) {
                console.log("No Task exist");
                res.json({ message: "Error", error: err });
            }
            else {
                res.json({ message: "That's the special Task", task: specTask });
            }
        });
    },

    create: function (req, res) {
        var newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            completed: false
        })
        newTask.save(function (err) {
            if (err) {
                console.log("I'm not able to create a new Task");
                res.json({ message: "Error", error: err });
            }
            else {
                console.log(newTask);
                res.json({ message: "New Task created" });
            }
        });
    },

    // update a task
    update: function (req, res) {
        console.log("I'm going to update");
        Task.findOneAndUpdate({ _id: req.params.id}, {$set: 
            {title: req.body.title, 
            description: req.body.description, 
            completed: req.body.completed }}, function(err){
            // updatedTask.save(function (err, updatedTask){
                if (err) {
                    console.log("Updating wasn't working my dear.");
                    res.json({message: "Error", error: err});
                }
                else{
                    console.log("You're task is updated");
                    res.json({message: "Updated"})
                }
            });
            
    },

    delete: function (req, res) {
        Task.findOneAndRemove({ _id: req.params.id }, function(err, task){
            if(err){
                console.log("Could not delete the task");
                res.json({message: "Not deleted"});
            }
            else{
                console.log("Successfully deleted");
                res.json();
            }
        });
    }

}