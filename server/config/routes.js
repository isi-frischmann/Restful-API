// Routes file

// The routes are connected with the functionallity - which are located in the controllers tasks.js file
var tasks = require('../controllers/tasks.js');

module.exports = function(app){

    // index
    app.get('/task', function(req, res){
        tasks.index(req, res);
    })

    // show Task by ID
    app.get('/task/:id', function(req, res){
        tasks.showById(req, res);
    })

    // create a new task
    app.post('/task', function(req, res){
        console.log("creating routes");
        tasks.create(req, res);
    })
    
    // update a task
    app.put('/task/:id', function(req, res){
        tasks.update(req, res);
    })

    // delete task by id
    app.delete('/task/:id' , function(req, res){
        console.log("I'm in your routing DELETE-----------------")
        tasks.delete(req, res);
    })
}