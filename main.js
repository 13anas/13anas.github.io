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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_errors_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/errors/error404/error404.component */ "./src/app/core/errors/error404/error404.component.ts");
/* harmony import */ var _core_errors_error500_error500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/errors/error500/error500.component */ "./src/app/core/errors/error500/error500.component.ts");
/* harmony import */ var _sketch_sketch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sketch/sketch.component */ "./src/app/sketch/sketch.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], data: { title: 'Welcome!' } },
    { path: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].routes.sketch, component: _sketch_sketch_component__WEBPACK_IMPORTED_MODULE_6__["SketchComponent"], data: { title: 'Build a construct' } },
    { path: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].routes.error404, component: _core_errors_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"], data: { title: 'Request page not found 404' } },
    { path: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].routes.error500, component: _core_errors_error500_error500_component__WEBPACK_IMPORTED_MODULE_5__["Error500Component"], data: { title: 'Internal Server Error 500' } },
    // otherwise redirect to 404
    { path: '**', redirectTo: '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].routes.error404 }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    onSameUrlNavigation: 'reload',
                    scrollPositionRestoration: 'top',
                    useHash: true
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  min-height: 90vh;\n  /* margin: 8em 3em 1em 3em !important; */\n  margin-top: 3.9em;\n}\n\n.column {\n  margin: 2em 2em;\n}\n\nfooter {\n  margin-top: 4em;\n  background-color: #079ace;\n  height: 15em;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICAvKiBtYXJnaW46IDhlbSAzZW0gMWVtIDNlbSAhaW1wb3J0YW50OyAqL1xuICBtYXJnaW4tdG9wOiAzLjllbTtcbn1cblxuLmNvbHVtbiB7XG4gIG1hcmdpbjogMmVtIDJlbTtcbn1cblxuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogNGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5YWNlO1xuICBoZWlnaHQ6IDE1ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\n\n<header>\n  <main-nav></main-nav>\n</header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<footer>\n  <app-footer></app-footer>\n</footer>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'biorobust';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _sketch_sketch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sketch/sketch.component */ "./src/app/sketch/sketch.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _sketch_sketch_component__WEBPACK_IMPORTED_MODULE_12__["SketchComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"],
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__["NgProgressHttpModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzPopoverModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/core/nav/nav.component.ts");
/* harmony import */ var _errors_error404_error404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors/error404/error404.component */ "./src/app/core/errors/error404/error404.component.ts");
/* harmony import */ var _errors_error500_error500_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors/error500/error500.component */ "./src/app/core/errors/error500/error500.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _errors_error404_error404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"],
                _errors_error500_error500_component__WEBPACK_IMPORTED_MODULE_6__["Error500Component"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            ],
            exports: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            providers: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/errors/error404/error404.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/errors/error404/error404.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#error404{\n  top: 15em !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9lcnJvcnMvZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXJyb3JzL2Vycm9yNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXJyb3I0MDR7XG4gIHRvcDogMTVlbSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/errors/error404/error404.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/errors/error404/error404.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui column grid\">\n\n  <div class=\"ui column\" id=\"error404\">\n\n    <div class=\"ui basic segment\">\n\n      <div class=\"ui items\">\n        <div class=\"item\">\n          <div class=\"image\">\n            <img alt='Error 404' src='assets/img/404.png' title=\"Page not found\"/>\n          </div>\n          <div class=\"content\">\n            <div class=\"header\">\n              <h1 class=\"ui header\">Oops Page Not Found</h1>\n            </div>\n            <div class=\"meta\">\n              <span>Error 404</span>\n            </div>\n            <div class=\"description\">\n              <p>The page you are looking for does not exist or has been moved.</p>\n            </div>\n            <div class=\"extra\">\n              <a href=\"/\" class=\"ui primary button\">Go to Home</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/core/errors/error404/error404.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/errors/error404/error404.component.ts ***!
  \************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/core/errors/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.css */ "./src/app/core/errors/error404/error404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/core/errors/error500/error500.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/errors/error500/error500.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#error500-container{\n  min-height: 100vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9lcnJvcnMvZXJyb3I1MDAvZXJyb3I1MDAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXJyb3JzL2Vycm9yNTAwL2Vycm9yNTAwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXJyb3I1MDAtY29udGFpbmVye1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/errors/error500/error500.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/errors/error500/error500.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui basic segment\" id=\"error500-container\">\n\n  <div class=\"ui two column centered grid\">\n\n    <div class=\"ui column\">\n\n      <div class=\"ui items\">\n        <div class=\"item\">\n          <div class=\"image\">\n            <img alt='Error 500' src='assets/img/404.png' title=\"Internal Server Error\" />\n          </div>\n          <div class=\"content\">\n            <div class=\"header\">\n              <h1 class=\"header\">Internal Server Error</h1>\n            </div>\n            <div class=\"meta\">\n              <span>Error 500</span>\n            </div>\n            <div class=\"description\">\n              <p>Something goes wrong in the server, please contact <strong>anas.gharrab@crg.eu</strong> to get support or try again later.</p>\n            </div>\n            <div class=\"extra\">\n              <a href=\"/\" class=\"ui primary button\">Go to Home</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/core/errors/error500/error500.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/errors/error500/error500.component.ts ***!
  \************************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error500Component = /** @class */ (function () {
    function Error500Component() {
    }
    Error500Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'error500',
            template: __webpack_require__(/*! ./error500.component.html */ "./src/app/core/errors/error500/error500.component.html"),
            styles: [__webpack_require__(/*! ./error500.component.css */ "./src/app/core/errors/error500/error500.component.css")]
        })
    ], Error500Component);
    return Error500Component;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #fff !important;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui vertical footer segment\">\n  <div class=\"ui container\">\n    <div class=\"ui stackable inverted divided equal height stackable grid\">\n      <div class=\"three wide column\">\n        <h4 class=\"ui inverted header\">About</h4>\n        <div class=\"ui inverted link list\">\n          <a class=\"item\" href=\"#root\">Sitemap</a>\n          <a class=\"item\" href=\"#root\">Contact Us</a>\n          <a class=\"item\" href=\"http://serranolab.crg.eu/\" target=\"_blank\">Luis Serrano's Grup</a>\n          <a class=\"item\" href=\"#root\">Gazebo Plans</a>\n        </div>\n      </div>\n      <div class=\"three wide column\">\n        <h4 class=\"ui inverted header\">Services</h4>\n        <div class=\"ui inverted link list\">\n          <a class=\"item\" href=\"#root\">Banana Pre-Order</a>\n          <a class=\"item\" href=\"#root\">DNA FAQ</a>\n          <a class=\"item\" href=\"#root\">How To Access</a>\n          <a class=\"item\" href=\"#root\">Favorite X-Men</a>\n        </div>\n      </div>\n      <div class=\"seven wide column\">\n        <h4 class=\"ui inverted header\">Footer Header</h4>\n        <p>\n          Copyright © 2018 <a href=\"http://www.crg.eu\" target=\"_blank\">Centre for Genomic Regulation</a>. All Right Reserved.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"ui container\">\n  <div class=\"ui two column grid\">\n    <div class=\"row\">\n      <div class=\"column\">\n        <p>Copyright © 2018 Centre for <a href=\"http://www.crg.eu\" target=\"_blank\">Genomic Regulation</a>. All Right Reserved.</p>\n      </div>\n      <div class=\"column\">\n        <p>Access to <a href=\"http://serranolab.crg.eu/\" target=\"_blank\">Luis Serrano's Grup</a> web page</p>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/nav/nav.component.css":
/*!********************************************!*\
  !*** ./src/app/core/nav/nav.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui.inverted.stackable.fixed.menu {\n  background: #079ace !important;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.ui.container>.ui.large.secondary.inverted.pointing.menu {\n  width: 100% !important;\n}\n\n.ui.secondary.inverted.pointing.menu {\n  border-color: transparent !important;\n}\n\n.item>.icon {\n  margin-left: 0.8em !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsaUZBQWlGO0FBQ25GOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29yZS9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuaW52ZXJ0ZWQuc3RhY2thYmxlLmZpeGVkLm1lbnUge1xuICBiYWNrZ3JvdW5kOiAjMDc5YWNlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLnVpLmNvbnRhaW5lcj4udWkubGFyZ2Uuc2Vjb25kYXJ5LmludmVydGVkLnBvaW50aW5nLm1lbnUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4udWkuc2Vjb25kYXJ5LmludmVydGVkLnBvaW50aW5nLm1lbnUge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtPi5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDAuOGVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/nav/nav.component.html":
/*!*********************************************!*\
  !*** ./src/app/core/nav/nav.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"ui inverted stackable fixed menu\">\n\n  <div class=\"left menu\">\n    <a class=\"item\" routerLink=\"/\">\n      <crg-logo></crg-logo>\n    </a>\n  </div>\n\n  <div class=\"ui container\">\n    <div class=\"ui large secondary inverted pointing menu\">\n      <a class=\"item\" routerLink=\"/\" routerLinkActive=\"active\">\n        Home\n      </a>\n      <a class=\"item\" routerLink=\"/contact\" routerLinkActive=\"active\">\n        Contact\n      </a>\n      <a class=\"item\" [routerLink]=\"'/about'\" routerLinkActive=\"active\">\n        About\n      </a>\n    </div>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/core/nav/nav.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/core/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/core/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page Contents-->\n<div class=\"ui inverted vertical masthead center aligned segment\" style=\"background: #079ace !important;\">\n  <div class=\"ui text container\">\n    <h1 class=\"ui inverted header\">Sequence Optimizator</h1>\n    <h2 class=\"ui inverted header\">Select a specie to start.</h2>\n    <form class=\"ui form\">\n      <div class=\"field\">\n        <select class=\"ui dropdown\" name=\"specie\" [(ngModel)]=\"specie\">\n          <option value=\"myco_pneumoniae\">Mycoplasma pneumoniae</option>\n          <option value=\"e_coli\">Escherichia coli</option>\n        </select>\n      </div>\n\n      <div class=\"field\">\n        <button type=\"button\" class=\"ui secondary right labeled icon button\" name=\"button\" [routerLink]=\"['/sketch', specie]\">\n          Proceed <i class=\"right chevron icon\"></i>\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"ui vertical stripe segment\">\n  <div class=\"ui middle aligned stackable grid container\">\n    <div class=\"row\">\n      <div class=\"eight wide column\">\n        <h3 class=\"ui header\">We Help Companies and Companions</h3>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </p>\n        <h3 class=\"ui header\">We Make Bananas That Can Dance</h3>\n        <p>\n          Yes that's right, you thought it was the stuff of dreams, but\n          even bananas can be bioengineered.\n        </p>\n      </div>\n      <div class=\"six wide right floated column\">\n        <img class=\"ui large bordered rounded image\" style=\"border: none !important\" src=\"assets/img/crg_logo.png\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"center aligned column\">\n        <a class=\"ui huge button\">Check Them Out</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"ui vertical stripe quote segment\">\n  <div class=\"ui equal width stackable internally celled grid\">\n    <div class=\"center aligned row\">\n      <div class=\"column\">\n        <h3>\"What a Company\"</h3>\n        <p>That is what they all say about us</p>\n      </div>\n      <div class=\"column\">\n        <h3>\"I shouldn't have gone with their competitor.\"</h3>\n        <p>\n          <img class=\"ui avatar image\" src=\"./static/images/avatar/nan.jpg\" />\n          <b>Nan</b> Chief Fun Officer Acme Toys\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"ui vertical stripe segment\">\n  <div class=\"ui text container\">\n    <h3 class=\"ui header\">Breaking The Grid, Grabs Your Attention</h3>\n    <p>\n      Instead of focusing on content creation and hard work, we have\n      learned how to master the art of doing nothing by providing massive\n      amounts of whitespace and generic content that can seem massive,\n      monolithic and worth your attention.\n    </p>\n    <a class=\"ui large button\">Read More</a>\n    <h4 class=\"ui horizontal header divider\">\n      <a href=\"#root\"> Case Studies</a>\n    </h4>\n    <h3 class=\"ui header\">Did We Tell You About Our Bananas?</h3>\n    <p>\n      Yes I know you probably disregarded the earlier boasts as\n      non-sequitur filler content, but its really true. It took years of\n      gene splicing and combinatory DNA research, but our bananas can\n      really dance.\n    </p>\n    <a class=\"ui large button\">I'm Still Quite Interested</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masthead.segment {\n  min-height: 600px;\n  padding: 1em 0; }\n\n.masthead h2 {\n  font-size: 1.7em;\n  font-weight: normal; }\n\n.masthead .logo.item img {\n  margin-right: 1em; }\n\n.masthead .ui.menu .ui.button {\n  margin-left: 0.5em; }\n\n.masthead h1.ui.header {\n  margin-top: 2em;\n  margin-bottom: 0;\n  font-size: 4em;\n  font-weight: normal; }\n\n.ui.vertical.stripe {\n  padding: 8em 0; }\n\n.ui.vertical.stripe h3 {\n    font-size: 2em; }\n\n.ui.vertical.stripe .button + h3,\n  .ui.vertical.stripe p + h3 {\n    margin-top: 3em; }\n\n.ui.vertical.stripe .floated.image {\n    clear: both; }\n\n.ui.vertical.stripe p {\n    font-size: 1.33em; }\n\n.ui.vertical.stripe .horizontal.divider {\n    margin: 3em 0; }\n\n.quote.stripe.segment {\n  padding: 0; }\n\n.quote.stripe.segment .grid .column {\n    padding-top: 5em;\n    padding-bottom: 5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZ2hhcnJhYi9Qcm9qZWN0cy9CaW9Sb29ib3N0L2Zyb250ZW5kL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHaEI7RUFFSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSHZCO0VBT0ksaUJBQWlCLEVBQUE7O0FBUHJCO0VBV0ksa0JBQWtCLEVBQUE7O0FBWHRCO0VBZUksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsY0FBYyxFQUFBOztBQURoQjtJQUlJLGNBQWMsRUFBQTs7QUFKbEI7O0lBU0ksZUFBZSxFQUFBOztBQVRuQjtJQWFJLFdBQVcsRUFBQTs7QUFiZjtJQWlCSSxpQkFBaUIsRUFBQTs7QUFqQnJCO0lBcUJJLGFBQWEsRUFBQTs7QUFJakI7RUFDRSxVQUFVLEVBQUE7O0FBRFo7SUFJSSxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUZW1wbGF0ZVxuLm1hc3RoZWFkLnNlZ21lbnQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgcGFkZGluZzogMWVtIDA7XG59XG5cbi5tYXN0aGVhZCB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAubG9nby5pdGVtIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cblxuICAudWkubWVudSAudWkuYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIH1cblxuICBoMS51aS5oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn1cblxuLnVpLnZlcnRpY2FsLnN0cmlwZSB7XG4gIHBhZGRpbmc6IDhlbSAwO1xuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuXG4gIC5idXR0b24raDMsXG4gIHAraDMge1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgfVxuXG4gIC5mbG9hdGVkLmltYWdlIHtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4zM2VtO1xuICB9XG5cbiAgLmhvcml6b250YWwuZGl2aWRlciB7XG4gICAgbWFyZ2luOiAzZW0gMDtcbiAgfVxufVxuXG4ucXVvdGUuc3RyaXBlLnNlZ21lbnQge1xuICBwYWRkaW5nOiAwO1xuXG4gIC5ncmlkIC5jb2x1bW4ge1xuICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDVlbTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.specie = 'myco_pneumoniae';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/crg-svg-logo/crg-svg-logo.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/crg-svg-logo/crg-svg-logo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"80px\" height=\"30px\" viewBox=\"0 0 233.859 249\" enable-background=\"new 0 0 233.859 249\" xml:space=\"preserve\">\n  <g>\n    <defs>\n      <path id=\"SVGID_1_\" fill=\"#fff\" d=\"M69.288,30.263l5.166,14.801c0,0,17.649-6.171,28.626,0.329c18.69,11.065,16.199,36.772,8.999,57.179\n\t\t\tc-12.88,36.513-20.569,62.456-14.438,88.827c3.357,14.443,17.744,20.817,23.201,22.969c7,2.758,21.982,2.146,21.982,2.146\n\t\t\tl-0.467,5.294l23.449-14.625l-18.047-14.643l-0.952,6.639c0,0-8.556,0.278-13.748-0.517c-9.921-1.519-20.23-10.971-20.143-31.148\n\t\t\tc0.07-16.181,3.101-28.352,12.069-53.901c8.65-24.642,15.261-54.592-2.246-75.861c-7.804-9.481-18.818-12.177-28.822-12.177\n\t\t\tC80.724,25.574,69.288,30.263,69.288,30.263\" />\n    </defs>\n    <use xlink:href=\"#SVGID_1_\" overflow=\"visible\" />\n    <clipPath id=\"SVGID_2_\">\n      <use xlink:href=\"#SVGID_1_\" overflow=\"visible\" />\n    </clipPath>\n    <rect x=\"69.288\" y=\"25.574\" fill=\"#fff\" clip-path=\"url(#SVGID_2_)\" width=\"96.518\" height=\"196.232\" />\n  </g>\n  <g>\n    <defs>\n      <path id=\"SVGID_3_\" fill=\"#fff\" d=\"M13.275,36.839l6.202,2.104c0,0-5.089,16.38-3.508,28.37c1.066,8.083,3.27,22.375,16.53,36.859\n\t\t\tc16.773,18.321,53.762,29.197,100.099,37.118c19.113,3.266,39.638,9.176,52.722,20.821c9.847,8.356,15.816,18.463,16.91,31.858\n\t\t\tc1.318,16.107-9.439,26.235-9.439,26.235l14.76,14.586c0,0,26.309-30.163,10.609-62.277\n\t\t\tc-17.459-35.714-51.729-46.853-90.976-53.464c-35.957-6.058-66.015-16.998-76.196-26.969c-9.826-9.623-15.426-21.082-14.018-33.31\n\t\t\tc0.81-7.029,3.916-13.341,3.916-13.341l7.857,2.383l-11.059-29.88L13.275,36.839z\" />\n    </defs>\n    <use xlink:href=\"#SVGID_3_\" overflow=\"visible\" />\n    <clipPath id=\"SVGID_4_\">\n      <use xlink:href=\"#SVGID_3_\" overflow=\"visible\" />\n    </clipPath>\n    <rect x=\"13.275\" y=\"17.933\" fill=\"#fff\" clip-path=\"url(#SVGID_4_)\" width=\"220.584\" height=\"216.858\" />\n  </g>\n  <g>\n    <defs>\n      <rect id=\"SVGID_5_\" fill=\"#fff\" x=\"-193\" y=\"-172\" width=\"842\" height=\"595\" />\n    </defs>\n    <clipPath id=\"SVGID_6_\">\n      <use xlink:href=\"#SVGID_5_\" overflow=\"visible\" />\n    </clipPath>\n  </g>\n</svg>\n"

/***/ }),

/***/ "./src/app/shared/crg-svg-logo/crg-svg-logo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/crg-svg-logo/crg-svg-logo.component.ts ***!
  \***************************************************************/
/*! exports provided: CrgSvgLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrgSvgLogoComponent", function() { return CrgSvgLogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CrgSvgLogoComponent = /** @class */ (function () {
    function CrgSvgLogoComponent() {
    }
    CrgSvgLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'crg-logo',
            template: __webpack_require__(/*! ./crg-svg-logo.component.html */ "./src/app/shared/crg-svg-logo/crg-svg-logo.component.html")
        })
    ], CrgSvgLogoComponent);
    return CrgSvgLogoComponent;
}());



/***/ }),

/***/ "./src/app/shared/errors-list/errors-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/errors-list/errors-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-messages {\n  color: #f85f5f !important;\n  font-weight: 700;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Vycm9ycy1saXN0L2Vycm9ycy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Vycm9ycy1saXN0L2Vycm9ycy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZXMge1xuICBjb2xvcjogI2Y4NWY1ZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/errors-list/errors-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/errors-list/errors-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-margin\">\n  <ul class=\"error-messages\" *ngIf=\"errorList\">\n    <li *ngFor=\"let error of errorList\">\n      {{ error }}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/errors-list/errors-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/errors-list/errors-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ErrorsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsListComponent", function() { return ErrorsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorsListComponent = /** @class */ (function () {
    function ErrorsListComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ErrorsListComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = Object.keys(errorList.errors || {})
                .map(function (key) { return errorList.errors[key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorsListComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ErrorsListComponent.prototype, "errors", null);
    ErrorsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'errors-list',
            template: __webpack_require__(/*! ./errors-list.component.html */ "./src/app/shared/errors-list/errors-list.component.html"),
            styles: [__webpack_require__(/*! ./errors-list.component.css */ "./src/app/shared/errors-list/errors-list.component.css")]
        })
    ], ErrorsListComponent);
    return ErrorsListComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _crg_svg_logo_crg_svg_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crg-svg-logo/crg-svg-logo.component */ "./src/app/shared/crg-svg-logo/crg-svg-logo.component.ts");
/* harmony import */ var _errors_list_errors_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors-list/errors-list.component */ "./src/app/shared/errors-list/errors-list.component.ts");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _crg_svg_logo_crg_svg_logo_component__WEBPACK_IMPORTED_MODULE_4__["CrgSvgLogoComponent"],
                _errors_list_errors_list_component__WEBPACK_IMPORTED_MODULE_5__["ErrorsListComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _errors_list_errors_list_component__WEBPACK_IMPORTED_MODULE_5__["ErrorsListComponent"],
                _crg_svg_logo_crg_svg_logo_component__WEBPACK_IMPORTED_MODULE_4__["CrgSvgLogoComponent"],
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/sketch/base.ts":
/*!********************************!*\
  !*** ./src/app/sketch/base.ts ***!
  \********************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
var Base = /** @class */ (function () {
    function Base(base) {
        this.base = base;
    }
    return Base;
}());



/***/ }),

/***/ "./src/app/sketch/sketch.component.html":
/*!**********************************************!*\
  !*** ./src/app/sketch/sketch.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\" style=\"padding: 4em\">\n\n  <div class=\"sixteen wide column center aligned\">\n    <img class=\"ui small bordered rounded centered image\" style=\"border: none !important\" src=\"assets/img/plasmid-edit.png\" />\n    <h2 class=\"ui header\">Construct skecther</h2>\n    <h3 class=\"ui header\" style=\"font-weight: normal;\">Sketch as many constructs as you want. Click into an element to display more options.</h3>\n  </div>\n\n  <div class=\"ui-width-1-1\" style=\"padding: 0.6em; border: 1px #e2e8f0 solid;\">\n\n\n    <button type=\"button\" class=\"ui basic button\" (click)=\"new()\">\n      New construct <i class=\"plus icon\"></i>\n    </button>\n    <label for=\"file_upload\" class=\"ui right floated basic button\">\n      <i class=\"upload icon\"></i> Upload file\n    </label>\n    <input style=\"display: none\" id=\"file_upload\" type=\"file\" (change)=\"processFile($event)\">\n\n  </div>\n\n  <div class=\"sixteen wide column\" style=\"box-shadow: inset 0 4px 7px 0 rgba(0,0,0,.06)!important; height: 100vh; border: 1px #e2e8f0 solid; overflow-y: scroll\">\n\n    <div class=\"sixteen wide column\" *ngFor=\"let m of modules; let i = index\">\n\n      <div class=\"construct-canvas\">\n\n        <div class=\"sixteen wide column\">\n          <div class=\"ui fluid transparent large input\">\n            <input type=\"text\" placeholder=\"(Name this construct)\" [(ngModel)]=\"m.label\">\n          </div>\n        </div>\n\n        <div class=\"actions\">\n\n          <div class=\"ui icon basic compact buttons\">\n            <button type=\"button\" class=\"ui button dropdown-trigger\" title=\"Add element\" (click)=\"open(i)\">\n              <i class=\"plus icon dropdown-trigger\"></i>\n            </button>\n            <button type=\"button\" class=\"ui button\" title=\"Move down\" (click)=\"moveDown(i)\">\n              <i class=\"down arrow icon\"></i>\n            </button>\n            <button type=\"button\" class=\"ui button\" title=\"Move up\" (click)=\"moveUp(i)\">\n              <i class=\"up arrow icon\"></i>\n            </button>\n            <button type=\"button\" class=\"ui button\" title=\"Duplicate\" (click)=\"duplicate(i)\">\n              <i class=\"copy icon\"></i>\n            </button>\n            <button type=\"button\" class=\"ui button\" title=\"Delete\" (click)=\"remove(i)\">\n              <i class=\"trash red icon\"></i>\n            </button>\n          </div>\n\n          <div class=\"ui segment elem-picker\" id=\"dropdown-picker{{i}}\">\n            <div class=\"hov-elem\">\n              {{elemHovered}}\n            </div>\n            <div class=\"new-elem\" *ngFor=\"let ge of genetic_elem\" [style.background]=\"'url('+ge.image+')'\" (mouseover)=\"elemHovered=ge.name\" (mouseout)=\"elemHovered=null\" (click)=\"newElem(i, ge)\">\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"strand\">\n          <div class=\" element\" *ngFor=\"let mg of m.elements; let x = index\">\n            <div class=\"elem-actions\">\n              <div class=\"ui icon basic compact buttons\">\n                <button type=\"button\" class=\"ui button\" name=\"button\" (click)=\"mg.flipped = !mg.flipped\">\n                  <i class=\"sync link icon\"></i>\n                </button>\n                <button type=\"button\" class=\"ui button\" name=\"button\" (click)=\"removeElem(i, mg)\">\n                  <i class=\"trash red link icon\"></i>\n                </button>\n              </div>\n            </div>\n            <div class=\"elem-label\" [ngClass]=\"{'show': mg.label}\">\n              <div class=\"ui fluid transparent large input\">\n                <input type=\"text\" name=\"label\" placeholder=\"(label)\" [(ngModel)]=\"mg.label\">\n              </div>\n            </div>\n            <div class=\"elem-image\" [style.background]=\"'url('+mg.image+')'\" (click)=\"openModal(mg)\" [@rotate]=\"mg.flipped ? 'flipped' : 'default'\">\n            </div>\n            <div class=\"tooltip-name\">\n              {{mg.name}}\n            </div>\n            <div class=\"index\">\n              {{x + 1}}\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<!-- Sidebar -->\n<div class=\"w3-sidebar w3-bar-block w3-animate-left\" id=\"mySidebar\">\n  <form class=\"ui form ui-margin\" name='seqForm' #seqForm=\"ngForm\" *ngIf=\"elem\">\n\n    <div class=\"field\">\n      <i class=\"x link large icon\" (click)=\"w3_close()\"></i>\n    </div>\n\n    <div class=\"field\">\n      <img src=\"{{elem.image}}\" class=\"ui medium circular centered image\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"\">Type</label>\n      <input type=\"text\" readonly [(ngModel)]=\"elem.name\" name=\"name\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"\">Label</label>\n      <input type=\"text\" name=\"label\" [(ngModel)]=\"elem.label\">\n    </div>\n\n    <div class=\"field\">\n      <label for=\"\">Sequence</label>\n\n      <span class=\"info ui-margin\">\n        Equivalent sequence will be displayed below original sequence. You can change base by clicking on and typing new one. Diferent bases will be displayed in color.\n      </span>\n\n      <textarea name=\"seq\" rows=\"8\" cols=\"80\" [(ngModel)]=\"elem.seq\"></textarea>\n    </div>\n\n    <div class=\"field\">\n      <button type=\"button\" class=\"ui primary button right floated\" [disabled]=\"!elem.seq\" (click)=\"generateSeq(elem.seq)\">Generate</button>\n    </div>\n\n    <div class=\"field seq-editor\" *ngIf=\"seq\">\n\n      <div class=\"ui grid\">\n\n        <div class=\"ten wide column\">\n          <p> <strong>Bases:</strong> {{elem.seq.length}}</p>\n        </div>\n        <div class=\"six wide column\">\n          <select class=\"ui dropdown\" name=\"action\" [(ngModel)]=\"action\">\n            <option value=\"fix\" selected>Fix</option>\n            <option value=\"remove\">Remove</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"ui grid\">\n\n        <div class=\"sixteen wide column\">\n          <div class=\"seq\" [ngClass]=\"{'fixed': s.fix, 'removed': s.remove}\" *ngFor=\"let s of seq; let y = index\" (click)=\"doAction(s)\">\n            {{s.base | uppercase}}\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </form>\n</div>\n\n<!-- Overlay-->\n<div class=\"w3-overlay w3-animate-opacity\" (click)=\"w3_close()\" style=\"cursor:pointer\" id=\"myOverlay\"></div>\n"

/***/ }),

/***/ "./src/app/sketch/sketch.component.scss":
/*!**********************************************!*\
  !*** ./src/app/sketch/sketch.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".construct-canvas {\n  width: 100%;\n  min-height: 15em;\n  border-top: none;\n  position: relative;\n  padding: 1em; }\n  .construct-canvas .actions {\n    position: absolute;\n    right: 1em;\n    top: 1em; }\n  .construct-canvas .actions .elem-picker {\n      visibility: hidden;\n      position: absolute;\n      padding: 1em;\n      left: -25em;\n      z-index: +10; }\n  .construct-canvas .actions .elem-picker .new-elem {\n        display: inline-block;\n        width: 5em;\n        height: 4em;\n        margin: 0.2em;\n        border: 0.3px solid #eee;\n        box-shadow: 1px 1px 1px #eee;\n        background-size: auto 100% !important;\n        background-repeat: no-repeat !important;\n        background-position: 50% 100% !important;\n        cursor: pointer; }\n  .construct-canvas .actions .elem-picker .hov-elem {\n        height: 1.5em;\n        text-align: center;\n        color: grey; }\n  .construct-canvas .strand {\n    width: 100%;\n    margin-top: 5em;\n    border-left: 1px solid #ccc;\n    border-bottom: 2px dashed #ccc;\n    padding-left: 1em; }\n  .construct-canvas .strand .element {\n      display: inline-block;\n      width: 7.6%;\n      position: relative;\n      margin-bottom: 1em;\n      align-items: center; }\n  .construct-canvas .strand .element:not(:first-child) {\n        border-left: 2px dashed #ccc; }\n  .construct-canvas .strand .element .index {\n        width: 100%;\n        text-align: center;\n        font-weight: 700;\n        text-align: center;\n        margin-bottom: 10px;\n        color: #ddd;\n        height: 10px; }\n  .construct-canvas .strand .element .elem-label {\n        visibility: hidden;\n        padding: 1em;\n        width: 100%;\n        font-size: 0.77em; }\n  .construct-canvas .strand .element .elem-label input {\n          color: #888888;\n          text-align: center; }\n  .construct-canvas .strand .element .elem-actions {\n        visibility: hidden;\n        text-align: center;\n        z-index: +2; }\n  .construct-canvas .strand .element .elem-name {\n        visibility: hidden;\n        width: 100%;\n        text-align: center; }\n  .construct-canvas .strand .element div.elem-image {\n        cursor: pointer;\n        font-size: 1em !important;\n        left: 0;\n        width: 100% !important;\n        line-height: 0.8em !important;\n        height: 5em !important;\n        background-size: auto 100% !important;\n        background-repeat: no-repeat !important;\n        background-position: 50% 100% !important;\n        z-index: 3; }\n  .construct-canvas .strand .element .tooltip-name {\n        position: absolute;\n        width: 100%;\n        line-height: 36px;\n        color: #fff;\n        text-align: center;\n        padding: 1.5px 0;\n        font-size: 10px;\n        border-radius: 6px;\n        position: absolute;\n        z-index: +10;\n        opacity: 0;\n        background: rgba(0, 0, 0, 0.72);\n        border-radius: 3px;\n        transition: opacity 0.5s; }\n  .construct-canvas .strand .element .tooltip-name::after {\n          content: \" \";\n          position: absolute;\n          bottom: 100%;\n          left: 50%;\n          margin-left: -5px;\n          border-width: 5px;\n          border-style: solid;\n          border-color: transparent transparent rgba(0, 0, 0, 0.72) transparent; }\n  .construct-canvas .strand .element:hover > .tooltip-name {\n        visibility: visible;\n        opacity: 1; }\n  .construct-canvas .strand:hover > .element > .elem-actions,\n    .construct-canvas .strand:hover > .element > .elem-label,\n    .construct-canvas .strand:hover > .element > .elem-name {\n      visibility: visible; }\n  .seq-editor {\n  padding: 0 1em; }\n  .seq-editor .seq {\n    display: inline-block;\n    padding: 0.4em;\n    margin: 0.1em;\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.7);\n    border-radius: 10%;\n    border: 1px solid transparent; }\n  .seq-editor .seq:hover {\n      border: 1px solid #0a84ff; }\n  .seq-editor .seq.fixed {\n      background-color: #f8b85f !important;\n      color: #fff !important;\n      border: 1px solid #ccc; }\n  .seq-editor .seq.removed {\n      background-color: #f85f5f !important;\n      color: #fff !important;\n      border: 1px solid #ccc; }\n  .show {\n  visibility: visible !important; }\n  .w3-animate-opacity {\n  -webkit-animation: opac 0.8s;\n          animation: opac 0.8s; }\n  .w3-overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2; }\n  .w3-animate-left {\n  position: relative;\n  -webkit-animation: animateleft 0.4s;\n          animation: animateleft 0.4s; }\n  .w3-sidebar {\n  height: 100%;\n  width: 750px;\n  padding: 3em;\n  display: none;\n  background-color: #fff;\n  position: fixed !important;\n  right: 0;\n  top: 0;\n  z-index: 100;\n  overflow: auto; }\n  .w3-sidebar .field {\n    margin: 3em 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZ2hhcnJhYi9Qcm9qZWN0cy9CaW9Sb29ib3N0L2Zyb250ZW5kL3NyYy9hcHAvc2tldGNoL3NrZXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFMZDtJQVFJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUSxFQUFBO0VBVlo7TUFhTSxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixXQUFXO01BQ1gsWUFBWSxFQUFBO0VBakJsQjtRQW9CUSxxQkFBcUI7UUFDckIsVUFBVTtRQUNWLFdBQVc7UUFDWCxhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixxQ0FBcUM7UUFDckMsdUNBQXVDO1FBQ3ZDLHdDQUF3QztRQUN4QyxlQUFlLEVBQUE7RUE3QnZCO1FBaUNRLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsV0FBVyxFQUFBO0VBbkNuQjtJQXlDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsaUJBQWlCLEVBQUE7RUE3Q3JCO01BZ0RNLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixtQkFBbUIsRUFBQTtFQXBEekI7UUF1RFEsNEJBQTRCLEVBQUE7RUF2RHBDO1FBMkRRLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFlBQVksRUFBQTtFQWpFcEI7UUFxRVEsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixXQUFXO1FBQ1gsaUJBQWlCLEVBQUE7RUF4RXpCO1VBMkVVLGNBQXlCO1VBQ3pCLGtCQUFrQixFQUFBO0VBNUU1QjtRQWlGUSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFdBQVcsRUFBQTtFQW5GbkI7UUF1RlEsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxrQkFBa0IsRUFBQTtFQXpGMUI7UUE2RlEsZUFBZTtRQUNmLHlCQUF3QjtRQUN4QixPQUFPO1FBQ1Asc0JBQXFCO1FBQ3JCLDZCQUE0QjtRQUM1QixzQkFBcUI7UUFDckIscUNBQXFDO1FBQ3JDLHVDQUF1QztRQUN2Qyx3Q0FBd0M7UUFDeEMsVUFBVSxFQUFBO0VBdEdsQjtRQTBHUSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osVUFBVTtRQUNWLCtCQUEyQjtRQUMzQixrQkFBa0I7UUFDbEIsd0JBQXdCLEVBQUE7RUF2SGhDO1VBMEhVLFlBQVk7VUFDWixrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLFNBQVM7VUFDVCxpQkFBaUI7VUFDakIsaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixxRUFBaUUsRUFBQTtFQWpJM0U7UUFzSVEsbUJBQW1CO1FBQ25CLFVBQVUsRUFBQTtFQXZJbEI7OztNQThJTSxtQkFBbUIsRUFBQTtFQUt6QjtFQUNFLGNBQWMsRUFBQTtFQURoQjtJQUlJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLDZCQUE2QixFQUFBO0VBVmpDO01BYU0seUJBQXlCLEVBQUE7RUFiL0I7TUFpQk0sb0NBQW9DO01BQ3BDLHNCQUFzQjtNQUN0QixzQkFBc0IsRUFBQTtFQW5CNUI7TUF1Qk0sb0NBQW9DO01BQ3BDLHNCQUFzQjtNQUN0QixzQkFBc0IsRUFBQTtFQUs1QjtFQUNFLDhCQUE4QixFQUFBO0VBSWhDO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBO0VBR3RCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FBaUM7RUFDakMsVUFBVSxFQUFBO0VBR1o7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBO0VBRzdCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwwQkFBeUI7RUFDekIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osY0FBYyxFQUFBO0VBVmhCO0lBYUksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2tldGNoL3NrZXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25zdHJ1Y3QtY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE1ZW07XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMWVtO1xuXG4gIC5hY3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDFlbTtcbiAgICB0b3A6IDFlbTtcblxuICAgIC5lbGVtLXBpY2tlciB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICBsZWZ0OiAtMjVlbTtcbiAgICAgIHotaW5kZXg6ICsxMDtcblxuICAgICAgLm5ldy1lbGVtIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogNWVtO1xuICAgICAgICBoZWlnaHQ6IDRlbTtcbiAgICAgICAgbWFyZ2luOiAwLjJlbTtcbiAgICAgICAgYm9yZGVyOiAwLjNweCBzb2xpZCAjZWVlO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjZWVlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhvdi1lbGVtIHtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3RyYW5kIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgI2NjYztcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcblxuICAgIC5lbGVtZW50IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA3LjYlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggZGFzaGVkICNjY2M7XG4gICAgICB9XG5cbiAgICAgIC5pbmRleCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgY29sb3I6ICNkZGQ7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmVsZW0tbGFiZWwge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43N2VtO1xuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBjb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZWxlbS1hY3Rpb25zIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHotaW5kZXg6ICsyO1xuICAgICAgfVxuXG4gICAgICAuZWxlbS1uYW1lIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBkaXYuZWxlbS1pbWFnZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxZW0haW1wb3J0YW50O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjhlbSFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNWVtIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgfVxuXG4gICAgICAudG9vbHRpcC1uYW1lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEuNXB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6ICsxMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNzIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwwLDAsLjcyKSB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmhvdmVyID4gLnRvb2x0aXAtbmFtZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciA+IC5lbGVtZW50ID4gLmVsZW0tYWN0aW9ucyxcbiAgICAmOmhvdmVyID4gLmVsZW1lbnQgPiAuZWxlbS1sYWJlbCxcbiAgICAmOmhvdmVyID4gLmVsZW1lbnQgPiAuZWxlbS1uYW1lIHtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICB9XG59XG5cbi5zZXEtZWRpdG9yIHtcbiAgcGFkZGluZzogMCAxZW07XG5cbiAgLnNlcSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNGVtO1xuICAgIG1hcmdpbjogMC4xZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTg0ZmY7XG4gICAgfVxuXG4gICAgJi5maXhlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhiODVmICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICB9XG5cbiAgICAmLnJlbW92ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NWY1ZiAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgfVxuICB9XG59XG5cbi5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLy8gU2lkZWJhclxuXG4udzMtYW5pbWF0ZS1vcGFjaXR5IHtcbiAgYW5pbWF0aW9uOiBvcGFjIDAuOHM7XG59XG5cbi53My1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgei1pbmRleDogMjtcbn1cblxuLnczLWFuaW1hdGUtbGVmdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlbGVmdCAwLjRzO1xufVxuXG4udzMtc2lkZWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDc1MHB4O1xuICBwYWRkaW5nOiAzZW07XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZCFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgLmZpZWxkIHtcbiAgICBtYXJnaW46IDNlbSAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/sketch/sketch.component.ts":
/*!********************************************!*\
  !*** ./src/app/sketch/sketch.component.ts ***!
  \********************************************/
/*! exports provided: SketchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchComponent", function() { return SketchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./src/app/sketch/base.ts");




var SketchComponent = /** @class */ (function () {
    function SketchComponent() {
        var _this = this;
        this.modules = [];
        this.genetic_elem = [
            {
                "id": 1,
                "name": "Start Codon",
                "image": "../assets/img/elems/ATG.svg",
            },
            {
                "id": 2,
                "name": "Backbone",
                "image": "../assets/img/elems/backbone.svg",
            },
            {
                "id": 3,
                "name": "CDS",
                "image": "../assets/img/elems/CDS.svg",
            },
            {
                "id": 4,
                "name": "DNA Binding Element",
                "image": "../assets/img/elems/DNA-binding.svg",
            },
            {
                "id": 5,
                "name": "Expression Cassette",
                "image": "../assets/img/elems/expression-cassette.svg",
            },
            {
                "id": 6,
                "name": "etc",
                "image": "../assets/img/elems/etc.svg",
            },
            {
                "id": 7,
                "name": "Five Prime Overhang",
                "image": "../assets/img/elems/five-prime-overhang.svg",
            },
            {
                "id": 8,
                "name": "Homology Arm",
                "image": "../assets/img/elems/homology-arm.svg",
            },
            {
                "id": 9,
                "name": "Insulator",
                "image": "../assets/img/elems/insulator.svg",
            },
            {
                "id": 10,
                "name": "IRES",
                "image": "../assets/img/elems/IRES.svg",
            },
            {
                "id": 11,
                "name": "ITR",
                "image": "../assets/img/elems/ITR.svg",
            },
            {
                "id": 12,
                "name": "LTR",
                "image": "../assets/img/elems/LTR.svg",
            },
            {
                "id": 13,
                "name": "none",
                "image": "../assets/img/elems/none.svg",
            },
            {
                "id": 14,
                "name": "Origin Of Replication",
                "image": "../assets/img/elems/origin-of-replication.svg",
            },
            {
                "id": 15,
                "name": "P2A",
                "image": "../assets/img/elems/P2A.svg",
            },
            {
                "id": 16,
                "name": "Part Linker",
                "image": "../assets/img/elems/part-linker.svg",
            },
            {
                "id": 17,
                "name": "Peptide Linker",
                "image": "../assets/img/elems/peptide-linker.svg",
            },
            {
                "id": 18,
                "name": "Promoter",
                "image": "../assets/img/elems/promoter.svg",
            },
            {
                "id": 19,
                "name": "Protein Tag",
                "image": "../assets/img/elems/protein-tag.svg",
            },
            {
                "id": 20,
                "name": "Recombinase Recognition Sequence",
                "image": "../assets/img/elems/recombinase-recognition-seq.svg",
            },
            {
                "id": 21,
                "name": "Restriction enzyme recognition site",
                "image": "../assets/img/elems/restriction-enzyme-recognition-site.svg",
            },
            {
                "id": 22,
                "name": "Ribosome entry site",
                "image": "../assets/img/elems/ribosome-entry-site.svg",
            },
            {
                "id": 23,
                "name": "RNA stability sequence",
                "image": "../assets/img/elems/RNA-stability-sequence.svg",
            },
            {
                "id": 24,
                "name": "Terminator",
                "image": "../assets/img/elems/terminator.svg",
            },
            {
                "id": 25,
                "name": "Three prime overhang",
                "image": "../assets/img/elems/three-prime-overhang.svg",
            },
            {
                "id": 26,
                "name": "user defined",
                "image": "../assets/img/elems/user-defined.svg",
            },
            {
                "id": 27,
                "name": "UTR",
                "image": "../assets/img/elems/UTR.svg",
            }
        ];
        this.elemHovered = null;
        this.elem = null;
        this.isLoading = false;
        this.action = 'fix';
        document.addEventListener('click', function (event) { return _this.clickOut(event); });
    }
    SketchComponent.prototype.ngOnInit = function () {
        this.new();
    };
    SketchComponent.prototype.new = function () {
        this.modules.push({
            id: 1,
            label: '',
            elements: Object.assign([], this.genetic_elem)
            // [Object.assign({}, this.genetic_elem.find(x => x.name === 'user defined'))]
        });
    };
    SketchComponent.prototype.clickOut = function (event) {
        if (!event.target.matches('.dropdown-trigger')) {
            var dropdowns = document.getElementsByClassName("elem-picker");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                if (dropdowns[i].classList.contains('show'))
                    dropdowns[i].classList.remove('show');
            }
        }
    };
    SketchComponent.prototype.open = function (n) {
        document.getElementById("dropdown-picker" + n).classList.toggle("show");
    };
    SketchComponent.prototype.remove = function (i) {
        if (this.modules.length > 1)
            this.modules.splice(i, 1);
    };
    SketchComponent.prototype.duplicate = function (i) {
        var newConstructs = this.modules.slice();
        var newConstruct = Object.assign({}, JSON.parse(JSON.stringify(newConstructs[i])));
        newConstruct.label += " (duplication)";
        newConstructs.splice(i + 1, 0, newConstruct);
        this.modules = newConstructs;
    };
    SketchComponent.prototype.moveDown = function (i) {
        if (i != this.modules.length - 1)
            this.moveUp(i + 1);
    };
    SketchComponent.prototype.moveUp = function (i) {
        var up = Math.max(0, i - 1);
        var construct = this.modules[i];
        this.modules[i] = this.modules[up];
        this.modules[up] = construct;
    };
    SketchComponent.prototype.openModal = function (x) {
        this.elem = x || null;
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    };
    SketchComponent.prototype.w3_close = function () {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    };
    SketchComponent.prototype.newElem = function (i, x) {
        this.modules[i].elements.push(Object.assign({}, x));
    };
    SketchComponent.prototype.removeElem = function (i, x) {
        var index = this.modules[i].elements.indexOf(x);
        if (index !== -1)
            this.modules[i].elements.splice(index, 1);
    };
    SketchComponent.prototype.processFile = function (event) {
        if (event.target.files.length > 0) {
            this.isLoading = true;
        }
        this.isLoading = false;
    };
    SketchComponent.prototype.generateSeq = function (seq) {
        this.seq = seq.replace(/\s/g, "").split('').map(function (b) { return new _base__WEBPACK_IMPORTED_MODULE_3__["Base"](b); });
    };
    SketchComponent.prototype.doAction = function (b) {
        if (this.action) {
            switch (this.action.toLowerCase()) {
                case 'fix':
                    b.fix = !b.fix;
                    break;
                case 'remove':
                    b.remove = !b.remove;
                    break;
            }
        }
    };
    SketchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sketch',
            template: __webpack_require__(/*! ./sketch.component.html */ "./src/app/sketch/sketch.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('rotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('flipped', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(180deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('flipped => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('default => flipped', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in'))
                ]),
            ],
            styles: [__webpack_require__(/*! ./sketch.component.scss */ "./src/app/sketch/sketch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SketchComponent);
    return SketchComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    routes: {
        sketch: 'sketch/:specie',
        home: 'home',
        error404: '404',
        error500: '500'
    },
    endpoints: {
        api: 'http://127.0.0.1:8000/v1',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/agharrab/Projects/BioRoobost/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map