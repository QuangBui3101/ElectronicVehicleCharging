(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-bar></app-top-bar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/iot-gateway/iot-gateway.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/iot-gateway/iot-gateway.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <br />\n  <label>Current time:&nbsp;</label>\n  <label>\n    {{ this.hour | number: \"2.0-0\" }}:{{ this.minute | number: \"2.0-0\" }}\n  </label>\n  <label *ngIf=\"showSecond\">:{{ this.second | number: \"2.0-0\" }}</label>\n  <button (click)=\"onClick()\">Toggle Second</button><br />\n  <input\n    type=\"checkbox\"\n    id=\"changeTime\"\n    [(ngModel)]=\"changeCurrentTime\"\n    (click)=\"getTime()\"\n  />\n  <label for=\"changeTime\">Set Current Time</label>\n  <br />\n  <div *ngIf=\"changeCurrentTime\">\n    <label>Time:&nbsp;</label>\n    <input\n      type=\"text\"\n      pattern=\"([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}\"\n      [(ngModel)]=\"time\"\n    />\n    <br />\n    <button (click)=\"changeTime()\">Change time</button>\n    <p>Status: {{ this.status }}</p>\n  </div>\n  <input\n    type=\"checkbox\"\n    id=\"scheduleCharge\"\n    [(ngModel)]=\"changeSchedule\"\n    (click)=\"getSchedule()\"\n  />\n\n  <label for=\"scheduleCharge\">Set Schedule</label>\n  <br />\n  <div *ngIf=\"changeSchedule\">\n    <label>Start:&nbsp;</label>\n    <input\n      type=\"text\"\n      pattern=\"([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}\"\n      [(ngModel)]=\"startTime\"\n    />\n    <br />\n    <label>Stop:&nbsp;</label>\n    <input\n      type=\"text\"\n      pattern=\"([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}\"\n      [(ngModel)]=\"stopTime\"\n    />\n    <br />\n    <button (click)=\"setSchedule()\">Set schedule</button>\n    <p>Status: {{ this.setScheduleStatus }}</p>\n  </div>\n  <label for=\"ToggleSchedule\">Use schedule charging&nbsp;</label>\n  <label class=\"switch\">\n    <input\n      type=\"checkbox\"\n      id=\"ToggleSchedule\"\n      [checked]=\"useStartStopChargeTime\"\n      (change)=\"toggleUseSchedule()\"\n    />\n    <span class=\"slider round\"></span>\n  </label>\n  <br />\n  <!-- <input\n    type=\"checkbox\"\n    id=\"SetChargePower\"\n    [(ngModel)]=\"setChargerPower\"\n    (click)=\"getChargePower()\"\n  />\n  <label for=\"SetChargePower\">Set Charge Power</label>\n  <div *ngIf=\"setChargerPower\">\n    <input\n      type=\"range\"\n      name=\"points\"\n      min=\"0\"\n      max=\"100\"\n      [(ngModel)]=\"this.chargePower\"\n    /><label>{{ this.chargePower }}</label>\n    <button (click)=\"setChargePower()\">Apply Charge Power</button>\n  </div> -->\n  <br />\n  <label for=\"ToggleCharger\"\n    >{{\n      this.chargeState ? \"Turn off charger\" : \"Turn on charger\"\n    }}&nbsp;</label\n  >\n  <label class=\"switch\">\n    <input\n      type=\"checkbox\"\n      id=\"ToggleCharger\"\n      [checked]=\"chargeState\"\n      (change)=\"toggleCharger()\"\n      [attr.disabled]=\"this.disableChargerState ? '' : null\"\n    />\n    <span class=\"slider round\"></span> </label\n  ><br /><br />\n  <label\n    >Battery percentage: {{ this.batteryPercentage | number: \"1.2-2\" }}%</label\n  ><br />\n  <label\n    >Power Consumption of Charger:\n    {{\n      (this.chargeState ? this.chargerPowerConsumption : 0) | number: \"1.2-2\"\n    }}</label\n  ><br />\n  <label\n    >Total Power Consumption:\n    {{ this.powerConsumption | number: \"1.2-2\" }}</label\n  ><br /><br />\n  <label for=\"ToggleCharger\"\n    >{{\n      this.washingMachineState\n        ? \"Turn off washing machine\"\n        : \"Turn on washing machine\"\n    }}&nbsp;</label\n  >\n  <label class=\"switch\">\n    <input\n      type=\"checkbox\"\n      id=\"ToggleCharger\"\n      [checked]=\"washingMachineState\"\n      (change)=\"toggleWashingMachine()\"\n    />\n    <span class=\"slider round\"></span> </label\n  ><br />\n  <button (click)=\"emptyBattery()\">Empty Battery</button><br />\n  <button (click)=\"onReload()\">Reload Page</button>\n\n  <!-- <button (click)=\"\">Toggle Charger</button><br /> -->\n  <!-- <button (click)=\"getData()\">Get Data</button> -->\n  <!-- <pre>{{ this.dataString }}</pre> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-bar/top-bar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-bar/top-bar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"['/']\">\n  <h1>IoT Gateway - Electronic Vehicle Charging</h1>\n</a>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

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
        this.title = 'AngularClient';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_iot_gateway_iot_gateway_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/iot-gateway/iot-gateway.component */ "./src/app/components/iot-gateway/iot-gateway.component.ts");
/* harmony import */ var _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/top-bar/top-bar.component */ "./src/app/components/top-bar/top-bar.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"],
                _components_iot_gateway_iot_gateway_component__WEBPACK_IMPORTED_MODULE_2__["IotGatewayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: '', component: _components_iot_gateway_iot_gateway_component__WEBPACK_IMPORTED_MODULE_2__["IotGatewayComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/iot-gateway/iot-gateway.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/iot-gateway/iot-gateway.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/components/iot-gateway/iot-gateway.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/iot-gateway/iot-gateway.component.ts ***!
  \*****************************************************************/
/*! exports provided: IotGatewayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotGatewayComponent", function() { return IotGatewayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_battery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/battery.service */ "./src/app/services/battery.service.ts");
/* harmony import */ var _services_charger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/charger.service */ "./src/app/services/charger.service.ts");
/* harmony import */ var _services_iotgateway_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/iotgateway.service */ "./src/app/services/iotgateway.service.ts");
/* harmony import */ var _services_clock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/clock.service */ "./src/app/services/clock.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var IotGatewayComponent = /** @class */ (function () {
    function IotGatewayComponent(clockService, iotgatewayService, chargerService, batteryService) {
        this.clockService = clockService;
        this.iotgatewayService = iotgatewayService;
        this.chargerService = chargerService;
        this.batteryService = batteryService;
        this.showSecond = false;
        this.useStartStopChargeTime = false;
        this.changeCurrentTime = false;
        this.changeSchedule = false;
        this.setChargerPower = false;
        this.chargeState = false;
    }
    IotGatewayComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getData();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () { return _this.iotgatewayService.getData(); }))
            .subscribe(function (res) {
            _this.data = res;
            _this.clock = _this.data.Time;
            _this.useStartStopChargeTime = _this.data.Time.UseStartStopTime === 'true';
            _this.clock = _this.data.Time;
            _this.calculateTime(_this.clock.CurrentTime);
            _this.charger = _this.data.Charger;
            _this.chargeState = _this.charger.ChargerIsOn === 'true';
            _this.disableChargerState = false;
            _this.chargerPowerConsumption = _this.charger.ChargePowerPercentage / 100 * _this.charger.ChargeCurrent * _this.charger.ChargeVoltage;
            _this.batteryMaxCapacity = _this.data.Battery.BatteryMaxCapacity;
            _this.batteryPercentage = _this.data.Battery.BatteryPercentage;
            _this.powerConsumption = _this.data.PowerConsumption.CurrentPowerConsumption;
            _this.washingMachineState = _this.data.appliances.appliances.IsOn === 'true';
        });
        // interval(1000)
        //   .pipe(startWith(0), switchMap(() => this.clockService.getTime()))
        //   .subscribe(res => {
        //     this.clock = res;
        //     this.calculateTime(this.clock.CurrentTime);
        //   });
        // this.chargeState = false;
    };
    IotGatewayComponent.prototype.onClick = function () {
        if (this.showSecond) {
            this.showSecond = false;
        }
        else {
            this.showSecond = true;
        }
    };
    IotGatewayComponent.prototype.calculateTime = function (time) {
        this.second = time % 60;
        this.minute = Math.floor(time / 60) % 60;
        this.hour = Math.floor(time / 3600) % 60;
    };
    IotGatewayComponent.prototype.changeTime = function () {
        var _this = this;
        if (this.time) {
            var timeArray = this.time.split(':');
            this.clock.CurrentTime = +timeArray[0] * 3600 + +timeArray[1] * 60;
            this.clockService.setTime(this.clock).subscribe(function (res) { return _this.status = res.status; });
        }
    };
    IotGatewayComponent.prototype.getTime = function () {
        this.time = this.DisplaySecondAsTime(this.clock.CurrentTime);
    };
    IotGatewayComponent.prototype.toggleUseSchedule = function () {
        var _this = this;
        this.useStartStopChargeTime = !this.useStartStopChargeTime;
        this.clock.UseStartStopTime = this.useStartStopChargeTime;
        this.clockService.toggleSchedule(this.clock).subscribe(function (res) { return _this.setScheduleStatus = res.status; });
    };
    IotGatewayComponent.prototype.setSchedule = function () {
        var _this = this;
        var startTimeArray = this.startTime.split(':');
        var stopTimeArray = this.stopTime.split(':');
        this.clock.StartChargeTime = +startTimeArray[0] * 3600 + +startTimeArray[1] * 60;
        this.clock.StopChargeTime = +stopTimeArray[0] * 3600 + +stopTimeArray[1] * 60;
        if (this.clock.StartChargeTime > this.clock.StopChargeTime) {
            this.setScheduleStatus = 'Start time must be smaller than stop time';
            return;
        }
        this.clockService.setSchedule(this.clock).subscribe(function (res) { return _this.setScheduleStatus = res.status; });
    };
    IotGatewayComponent.prototype.getSchedule = function () {
        if (this.clock.StartChargeTime < 0) {
            this.startTime = this.DisplaySecondAsTime(0);
        }
        else {
            this.startTime = this.DisplaySecondAsTime(this.clock.StartChargeTime);
        }
        if (this.clock.StopChargeTime < 0) {
            this.stopTime = this.DisplaySecondAsTime(0);
        }
        else {
            this.stopTime = this.DisplaySecondAsTime(this.clock.StopChargeTime);
        }
    };
    IotGatewayComponent.prototype.getData = function () {
        var _this = this;
        this.iotgatewayService.getData().subscribe(function (res) {
            _this.data = res;
            _this.clock = _this.data.Time;
            _this.useStartStopChargeTime = _this.data.Time.UseStartStopTime === 'true';
            _this.clock = _this.data.Time;
            _this.chargeState = _this.data.Charger.ChargerIsOn === 'true';
            _this.charger = _this.data.Charger;
        });
    };
    IotGatewayComponent.prototype.getChargePower = function () {
        this.chargePower = this.charger.ChargePowerPercentage;
    };
    IotGatewayComponent.prototype.setChargePower = function () {
        this.charger.ChargePowerPercentage = this.chargePower;
        this.chargerService.setPowerPercentage(this.charger).subscribe();
    };
    IotGatewayComponent.prototype.toggleCharger = function () {
        this.chargeState = !this.chargeState;
        this.charger.ChargerIsOn = this.chargeState;
        this.chargerService.toggleCharger(this.charger).subscribe();
        this.disableChargerState = true;
    };
    IotGatewayComponent.prototype.toggleWashingMachine = function () {
        this.washingMachineState = !this.washingMachineState;
        this.iotgatewayService.toggleWashingMachine().subscribe();
    };
    IotGatewayComponent.prototype.emptyBattery = function () {
        this.iotgatewayService.emptyBattery().subscribe();
    };
    IotGatewayComponent.prototype.DisplaySecondAsTime = function (time) {
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;
        var hour = Math.floor(time / 3600) % 60;
        return (hour < 10 ? "0" + hour : "" + hour) + ":" + (minute < 10 ? "0" + minute : "" + minute);
    };
    IotGatewayComponent.prototype.onReload = function () {
        window.location.reload();
    };
    IotGatewayComponent.ctorParameters = function () { return [
        { type: _services_clock_service__WEBPACK_IMPORTED_MODULE_4__["ClockService"] },
        { type: _services_iotgateway_service__WEBPACK_IMPORTED_MODULE_3__["IotgatewayService"] },
        { type: _services_charger_service__WEBPACK_IMPORTED_MODULE_2__["ChargerService"] },
        { type: _services_battery_service__WEBPACK_IMPORTED_MODULE_1__["BatteryService"] }
    ]; };
    IotGatewayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-iot-gateway',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./iot-gateway.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/iot-gateway/iot-gateway.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./iot-gateway.component.css */ "./src/app/components/iot-gateway/iot-gateway.component.css")).default]
        })
    ], IotGatewayComponent);
    return IotGatewayComponent;
}());



/***/ }),

/***/ "./src/app/components/top-bar/top-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/top-bar/top-bar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/components/top-bar/top-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/top-bar/top-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopBarComponent = /** @class */ (function () {
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-bar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-bar/top-bar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-bar.component.css */ "./src/app/components/top-bar/top-bar.component.css")).default]
        })
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/app/services/battery.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/battery.service.ts ***!
  \*********************************************/
/*! exports provided: BatteryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryService", function() { return BatteryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var BatteryService = /** @class */ (function () {
    function BatteryService(httpClient) {
        this.httpClient = httpClient;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/xml').set('Accept', 'application/xml');
        this.parser = new xml2js__WEBPACK_IMPORTED_MODULE_4__["Parser"]({
            valueProcessors: [xml2js__WEBPACK_IMPORTED_MODULE_4__["processors"].parseNumbers],
            explicitArray: false,
            explicitRoot: false
        });
        this.builder = new xml2js__WEBPACK_IMPORTED_MODULE_4__["Builder"]({ explicitRoot: true, headless: true });
    }
    BatteryService.prototype.getStatus = function () {
        var _this = this;
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'battery', { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    BatteryService.prototype.parseObjectFromXml = function (xmlString) {
        var object;
        this.parser.parseString(xmlString, function (err, result) {
            object = result;
        });
        return object;
    };
    BatteryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BatteryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        })
    ], BatteryService);
    return BatteryService;
}());



/***/ }),

/***/ "./src/app/services/charger.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/charger.service.ts ***!
  \*********************************************/
/*! exports provided: ChargerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargerService", function() { return ChargerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ChargerService = /** @class */ (function () {
    function ChargerService(httpClient) {
        this.httpClient = httpClient;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/xml').set('Accept', 'application/xml');
        this.parser = new xml2js__WEBPACK_IMPORTED_MODULE_4__["Parser"]({
            valueProcessors: [xml2js__WEBPACK_IMPORTED_MODULE_4__["processors"].parseNumbers],
            explicitArray: false,
            explicitRoot: false
        });
        this.builder = new xml2js__WEBPACK_IMPORTED_MODULE_4__["Builder"]({ explicitRoot: true, headless: true });
    }
    ChargerService.prototype.setPowerPercentage = function (charger) {
        var _this = this;
        var xmlCharger = this.builder.buildObject(charger);
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'charger/powerpercentage', xmlCharger, { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    ChargerService.prototype.toggleCharger = function (charger) {
        var _this = this;
        var xmlCharger = this.builder.buildObject(charger);
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'charger', xmlCharger, { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    ChargerService.prototype.getStatus = function () {
        var _this = this;
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'charger/status', { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    ChargerService.prototype.parseObjectFromXml = function (xmlString) {
        var object;
        this.parser.parseString(xmlString, function (err, result) {
            object = result;
        });
        return object;
    };
    ChargerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ChargerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        })
    ], ChargerService);
    return ChargerService;
}());



/***/ }),

/***/ "./src/app/services/clock.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/clock.service.ts ***!
  \*******************************************/
/*! exports provided: ClockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockService", function() { return ClockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ClockService = /** @class */ (function () {
    function ClockService(httpClient) {
        this.httpClient = httpClient;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/xml').set('Accept', 'application/xml');
        this.parser = new xml2js__WEBPACK_IMPORTED_MODULE_4__["Parser"]({
            valueProcessors: [xml2js__WEBPACK_IMPORTED_MODULE_4__["processors"].parseNumbers],
            explicitArray: false,
            explicitRoot: false
        });
        this.builder = new xml2js__WEBPACK_IMPORTED_MODULE_4__["Builder"]({ explicitRoot: true, headless: true });
    }
    ClockService.prototype.getTime = function () {
        var _this = this;
        return this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'clock', { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    ClockService.prototype.parseObjectFromXml = function (xmlString) {
        var object;
        this.parser.parseString(xmlString, function (err, result) {
            object = result;
        });
        return object;
    };
    ClockService.prototype.setTime = function (clock) {
        var _this = this;
        var xmlClock = this.builder.buildObject(clock);
        return this.httpClient
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'clock', xmlClock, { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    ClockService.prototype.toggleSchedule = function (clock) {
        var _this = this;
        var xmlClock = this.builder.buildObject(clock);
        return this.httpClient
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'clock/useschedule', xmlClock, { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    ClockService.prototype.setSchedule = function (clock) {
        var _this = this;
        var xmlClock = this.builder.buildObject(clock);
        return this.httpClient
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'clock/chargeschedule', xmlClock, { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    ClockService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ClockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], ClockService);
    return ClockService;
}());



/***/ }),

/***/ "./src/app/services/iotgateway.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/iotgateway.service.ts ***!
  \************************************************/
/*! exports provided: IotgatewayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotgatewayService", function() { return IotgatewayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var IotgatewayService = /** @class */ (function () {
    function IotgatewayService(httpClient) {
        this.httpClient = httpClient;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/xml').set('Accept', 'application/xml');
        this.parser = new xml2js__WEBPACK_IMPORTED_MODULE_4__["Parser"]({
            valueProcessors: [xml2js__WEBPACK_IMPORTED_MODULE_4__["processors"].parseNumbers],
            explicitArray: false,
            explicitRoot: false
        });
        this.builder = new xml2js__WEBPACK_IMPORTED_MODULE_4__["Builder"]({ explicitRoot: true, headless: true });
    }
    IotgatewayService.prototype.getData = function () {
        var _this = this;
        return this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'data', { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    IotgatewayService.prototype.toggleWashingMachine = function () {
        var _this = this;
        return this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'appliance?appliance=washingmachine', { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    IotgatewayService.prototype.emptyBattery = function () {
        var _this = this;
        return this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'emptyBattery', { headers: this.header, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return _this.parseObjectFromXml(result); }));
    };
    IotgatewayService.prototype.parseObjectFromXml = function (xmlString) {
        var object;
        this.parser.parseString(xmlString, function (err, result) {
            object = result;
        });
        return object;
    };
    IotgatewayService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    IotgatewayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], IotgatewayService);
    return IotgatewayService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    url: 'http://localhost:5000/'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\JavaSpring\iotsolution\iotgateway\src\main\AngularClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);