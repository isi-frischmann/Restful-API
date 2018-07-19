import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // call the created function in the constructor with this
  constructor(private _http: HttpClient) {
    // this.getTask();
    console.log("Service is Running");
  }

  // get all the Tasks
  getTasks() {
    // after get needs to match our routes in the routes.js file
    return this._http.get('/task');

  }

  // delete a Task by ID
  showSpecTask(id: string) {
    return this._http.get('/task/:id');
  }

  getDataByClick(){
    return this._http.get('/task');
  }

  // create a new Task
  newTask(newtask: any) {
    console.log("I'm in your service and create a new task", newtask);
    return this._http.post('/task', newtask);
  }

  // update a Task
  updateTask(task: any) {
    console.log("SERVICE", task)
    return this._http.put('/task/' + task._id, task);
  }

  // delete a Task
  deleteTask(id: string) {
    console.log("helooooooooooooooo delete task");
    return this._http.delete('/task/' + id);
  }
}


