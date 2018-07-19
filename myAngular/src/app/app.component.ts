import { HttpService } from './http.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent implements OnInit //0
export class AppComponent implements OnInit {
  title = "Restful User CRUD";
  tasks = [];
  specTask = null;
  newTask: any;
  editTask = null;
  showTask = false;
  selectedTask = null;

  constructor(private _httpService: HttpService) {
    console.log("Component is Running");
  }

  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit() {
    this.newTask = {title: "", description: "", completed: false};    
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(res => {
      console.log("Got our tasks---", res)
      this.tasks = res['task'];
    });
  }

  // shows all the tasks when you click on a button
  onButtonClick() {
    const observable = this._httpService.getTasks();
    observable.subscribe(res =>{
      this.getTasksFromService();
      console.log("YEIHA 1");
    });
    console.log("Button is clicked---------------------------------");
  }

  // show specific task
  onButShowCompl(task): void {
    console.log("Is it showing?", task);
    this.specTask = task; //That's the button for showing a specific Task
    this.selectedTask = task; //That's the functionallity to show a specific Task as a nested component
    console.log(this.specTask);
    }
  
// delete a task
  onDelete(id){
    console.log("Delete button pushed, ");
    let tempObservable = this._httpService.deleteTask(id);
    tempObservable.subscribe((res) => {
      console.log("Data deleted", res);
    });
  }

  // for the button click to edit a task
  onEdit(task){
    this.editTask = task;
  }

  // update task
  updateTask(task){
    console.log("I'm trying to edit you - Edit button clicked");
    let updateObservable = this._httpService.updateTask(task);
    updateObservable.subscribe((updatedTask) => {
      console.log("Your task is updated", updatedTask);
    })
    this.getTasksFromService();
  }

  // create a new task
  onSubmit(){
    console.log("lets create a new one in your components.ts");
    let newObservable = this._httpService.newTask(this.newTask);
    newObservable.subscribe((res) => {
      console.log("Create new task in your components.ts ---------- ", );
    })
    this.newTask = { title: "", description: "", completed: false};
  }
}
