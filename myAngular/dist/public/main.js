(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n\n      <h1>hjkjhgThese are your Tasks:</h1>\n\n      <!-- {{tasks.completed}} -->\n      <!-- if you want to show all tasks by clicking the button -->\n      <button (click)=\"onButtonClick()\">Click to show all Tasks!</button>\n\n      <div *ngFor=\"let task of tasks\">Title: {{task.title}}\n\n        <button (click)=\"onButShowCompl(task)\">Show</button>\n        <button (click)=\"onDelete(task._id)\">Delete Task</button>\n        <button (click)=\"onEdit(task)\">Edit Task</button>\n\n        <button (click)=\"onButShowCompl(task)\">Show Description</button>\n\n      </div>\n\n      <!-- show a specific task when you click on it -->\n      <div>\n        <p *ngIf=\"specTask\"> Title: {{specTask.title}} <br>\n          Description: {{specTask.description}} <br>\n          Completed: {{specTask.completed}}</p>\n        <!-- {{specTask}} -->\n      </div>\n\n      <div *ngIf=\"tasks.length > 0\" >\n      <h3>Create a new Task</h3>\n\n      <form (submit)=\"onSubmit()\">\n         <!-- <p>{{ newTask | json }}</p> -->\n\n         <input type=\"text\" name=\"newTask.title\" [(ngModel)]=\"newTask.title\">\n         <input type=\"text\" name=\"newTask.description\" [(ngModel)]=\"newTask.description\">\n         <input type=\"text\" name=\"newTask.completed\" [(ngModel)]=\"newTask.completed\">\n         <input type=\"submit\" value=\"Create Task\">\n         <!-- <button (click)=\"onSubmit()\">Create a new Task</button> -->\n       </form>\n      </div>\n\n<!-- edit a task -->\n    <div *ngIf=\"editTask\" class=\"update\">\n          <h3>Edit {{editTask.title }}</h3>\n    \n          <!-- {{editTask | json}} -->\n          <form (submit)=\"updateTask(editTask)\">\n    \n             <input type=\"text\" name=\"editTask.title\" placeholder={{editTask.title}} [(ngModel)]=\"editTask.title\">\n             <input type=\"text\" name=\"editTask.description\" placeholder={{editTask.description}} [(ngModel)]=\"editTask.description\">\n             <input type=\"text\" name=\"editTask.completed\" placeholder={{editTask.completed}} [(ngModel)]=\"editTask.completed\">\n             <input type=\"submit\" value=\"Update Task\">\n           </form>\n    </div>\n  \n    <app-task *ngIf=\"selectedTask\" [task]=\"selectedTask\"></app-task>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = "Restful User CRUD";
        this.tasks = [];
        this.specTask = null;
        this.showTask = false;
        this.selectedTask = null;
        console.log("Component is Running");
    }
    // ngOnInit will run when the component is initialized, after the constructor method.
    AppComponent.prototype.ngOnInit = function () {
        this.newTask = { title: "", description: "", completed: false };
        this.editTask = { title: "", description: "", completed: false };
    };
    AppComponent.prototype.getTasksFromService = function () {
        var _this = this;
        var observable = this._httpService.getTasks();
        observable.subscribe(function (res) {
            console.log("Got our tasks---", res);
            _this.tasks = res['task'];
        });
    };
    // shows all the tasks when you click on a button
    AppComponent.prototype.onButtonClick = function () {
        var _this = this;
        var observable = this._httpService.getTasks();
        observable.subscribe(function (res) {
            _this.getTasksFromService();
            console.log("YEIHA 1");
        });
        console.log("Button is clicked---------------------------------");
    };
    // show specific task
    AppComponent.prototype.onButShowCompl = function (task) {
        console.log("Is it showing?", task);
        this.specTask = task; //That's the button for showing a specific Task
        this.selectedTask = task; //That's the functionallity to show a specific Task as a nested component
        console.log(this.specTask);
    };
    // delete a task
    AppComponent.prototype.onDelete = function (id) {
        console.log("Delete button pushed, ");
        var tempObservable = this._httpService.deleteTask(id);
        tempObservable.subscribe(function (res) {
            console.log("Data deleted", res);
        });
    };
    // for the button click to edit a task
    AppComponent.prototype.onEdit = function (task) {
        this.editTask = task;
    };
    // update task
    AppComponent.prototype.updateTask = function (task) {
        console.log("I'm trying to edit you - Edit button clicked");
        var updateObservable = this._httpService.updateTask(task);
        updateObservable.subscribe(function (updatedTask) {
            console.log("Your task is updated", updatedTask);
        });
        this.getTasksFromService();
    };
    // create a new task
    AppComponent.prototype.onSubmit = function () {
        console.log("lets create a new one in your components.ts");
        var newObservable = this._httpService.newTask(this.newTask);
        newObservable.subscribe(function (res) {
            console.log("Create new task in your components.ts ---------- ");
        });
        this.newTask = { title: "", description: "", completed: false };
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        // export class AppComponent implements OnInit //0
        ,
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    // call the created function in the constructor with this
    function HttpService(_http) {
        this._http = _http;
        // this.getTask();
        console.log("Service is Running");
    }
    // get all the Tasks
    HttpService.prototype.getTasks = function () {
        // after get needs to match our routes in the routes.js file
        return this._http.get('/task');
    };
    // delete a Task by ID
    HttpService.prototype.showSpecTask = function (id) {
        return this._http.get('/task/:id');
    };
    HttpService.prototype.getDataByClick = function () {
        return this._http.get('/task');
    };
    // create a new Task
    HttpService.prototype.newTask = function (newtask) {
        console.log("I'm in your service and create a new task", newtask);
        return this._http.post('/task', newtask);
    };
    // update a Task
    HttpService.prototype.updateTask = function (task) {
        console.log("SERVICE", task);
        return this._http.put('/task/' + task._id, task);
    };
    // delete a Task
    HttpService.prototype.deleteTask = function (id) {
        console.log("helooooooooooooooo delete task");
        return this._http.delete('/task/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  task works!\n</p> -->\n\n<h3>Title: {{ task.title }}</h3><br>\n<h3>Description: {{ task.description }}</h3>\n\n<!-- {{ task | json }} -->"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "task", void 0);
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isabell/codingDojo/MEAN/restfulTaskAPI/myAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map