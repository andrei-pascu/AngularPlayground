/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_content_content_component__ = __webpack_require__(/*! ./modules/content/content.component */ 1);\n// import {oldAngular} from './modules/old-angular/old-angular';\r\n\r\n// import './modules/content/content.component';\r\n\r\n// console.log('app.js loaded')\r\n\r\nvar app = angular.module(\"myApp\", []);\r\n// app= angular.module('myApp', []);\r\n\r\n// oldAngular();\r\nObject(__WEBPACK_IMPORTED_MODULE_0__modules_content_content_component__[\"a\" /* appMainComponent */])();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge29sZEFuZ3VsYXJ9IGZyb20gJy4vbW9kdWxlcy9vbGQtYW5ndWxhci9vbGQtYW5ndWxhcic7XHJcbmltcG9ydCB7YXBwTWFpbkNvbXBvbmVudH0gZnJvbSAnLi9tb2R1bGVzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgJy4vbW9kdWxlcy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50JztcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdhcHAuanMgbG9hZGVkJylcclxuXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcIm15QXBwXCIsIFtdKTtcclxuLy8gYXBwPSBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbXSk7XHJcblxyXG4vLyBvbGRBbmd1bGFyKCk7XHJcbmFwcE1haW5Db21wb25lbnQoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************************!*\
  !*** ./src/modules/content/content.component.js ***!
  \**************************************************/
/*! exports provided: appMainComponent */
/*! exports used: appMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return appMainComponent; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_template__ = __webpack_require__(/*! ./content.template */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_template_form_template_component__ = __webpack_require__(/*! ./form-template/form-template.component */ 3);\n\r\n\r\n\r\n\r\nfunction appMainComponent() {\r\n    // console.log('content.component.js loaded')\r\n    var app = angular.module('myApp');\r\n\r\n    Object(__WEBPACK_IMPORTED_MODULE_1__form_template_form_template_component__[\"a\" /* formTemplate */])()\r\n    app.component('appMainComponent', {\r\n        template: __WEBPACK_IMPORTED_MODULE_0__content_template__[\"a\" /* template */]\r\n    })\r\n}\r\n\r\n\r\n// export const theComponent = {\r\n//   controller: ComponentController,\r\n//   template,\r\n//   bindings\r\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuanM/OGYyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RlbXBsYXRlfSBmcm9tICcuL2NvbnRlbnQudGVtcGxhdGUnO1xyXG5pbXBvcnQge2Zvcm1UZW1wbGF0ZX0gZnJvbSAnLi9mb3JtLXRlbXBsYXRlL2Zvcm0tdGVtcGxhdGUuY29tcG9uZW50JztcclxuXHJcblxyXG5mdW5jdGlvbiBhcHBNYWluQ29tcG9uZW50KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NvbnRlbnQuY29tcG9uZW50LmpzIGxvYWRlZCcpXHJcbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJyk7XHJcblxyXG4gICAgZm9ybVRlbXBsYXRlKClcclxuICAgIGFwcC5jb21wb25lbnQoJ2FwcE1haW5Db21wb25lbnQnLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQge2FwcE1haW5Db21wb25lbnR9O1xyXG4vLyBleHBvcnQgY29uc3QgdGhlQ29tcG9uZW50ID0ge1xyXG4vLyAgIGNvbnRyb2xsZXI6IENvbXBvbmVudENvbnRyb2xsZXIsXHJcbi8vICAgdGVtcGxhdGUsXHJcbi8vICAgYmluZGluZ3NcclxuLy8gfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./src/modules/content/content.template.js ***!
  \*************************************************/
/*! exports provided: template */
/*! exports used: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const template = `    \r\n    <div class=\"content\">\r\n    <h1 class=\"page-title\">Forms Playground V2</h1>\r\n        <my-custom-form class=\"form-container\"></my-custom-form>\r\n    </div>\r\n    </div>\r\n    `\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = template;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRlbnQvY29udGVudC50ZW1wbGF0ZS5qcz80MWZlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGAgICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGgxIGNsYXNzPVwicGFnZS10aXRsZVwiPkZvcm1zIFBsYXlncm91bmQgVjI8L2gxPlxyXG4gICAgICAgIDxteS1jdXN0b20tZm9ybSBjbGFzcz1cImZvcm0tY29udGFpbmVyXCI+PC9teS1jdXN0b20tZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9jb250ZW50L2NvbnRlbnQudGVtcGxhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************************************************!*\
  !*** ./src/modules/content/form-template/form-template.component.js ***!
  \**********************************************************************/
/*! exports provided: formTemplate */
/*! exports used: formTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return formTemplate; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__name_input_name_input_component__ = __webpack_require__(/*! ./name-input/name-input.component */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_input_email_input_component__ = __webpack_require__(/*! ./email-input/email-input.component */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_input_my_input_component__ = __webpack_require__(/*! ./my-input/my-input.component */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__length_input_length_input_component__ = __webpack_require__(/*! ./length-input/length-input.component */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__submit_submit_component__ = __webpack_require__(/*! ./submit/submit.component */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_completion_form_completion_component__ = __webpack_require__(/*! ./form-completion/form-completion.component */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_input_test__ = __webpack_require__(/*! ./email-input/test */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_input_test___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__email_input_test__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction formTemplate() {\r\n    // console.log('form-template.component.js loaded')\r\n    //angular.module('myApp') Refferencing <- outside the function block \r\n    //causes it to be called before angular.module('myApp', []) == crash\r\n    var app = angular.module('myApp');\r\n\r\n    Object(__WEBPACK_IMPORTED_MODULE_0__name_input_name_input_component__[\"a\" /* nameInput */])();\r\n    Object(__WEBPACK_IMPORTED_MODULE_1__email_input_email_input_component__[\"a\" /* emailInput */])();\r\n    Object(__WEBPACK_IMPORTED_MODULE_2__my_input_my_input_component__[\"a\" /* myInput */])();\r\n    Object(__WEBPACK_IMPORTED_MODULE_3__length_input_length_input_component__[\"a\" /* lengthInput */])();\r\n    Object(__WEBPACK_IMPORTED_MODULE_4__submit_submit_component__[\"a\" /* submit */])();\r\n    Object(__WEBPACK_IMPORTED_MODULE_5__form_completion_form_completion_component__[\"a\" /* formCompletion */])();\r\n// angular.module('myApp').component('componentName', {\r\n//     template: 'sapdkapdpa'\r\n// })\r\n\r\n\r\n    //Cant get the value directly because my-custom-input is a div\r\n    //There must be some kind of attribute to pass data\r\n    let myCustomFormTemplate = `\r\n        <form  class=\"form-play\" name=\"aForm\" ng-submit=\"submitMockup()\">\r\n            <my-custom-input-1 passing=\"$ctrl.passing\"></my-custom-input-1>\r\n            <my-custom-input-2></my-custom-input-2>\r\n            <my-custom-input-3></my-custom-input-3>\r\n            <my-custom-input-4></my-custom-input-4>\r\n            <my-custom-input-submit></my-custom-input-submit>\r\n            <component-name></component-name>\r\n        </form>\r\n        <form-completion passing=\"$ctrl.passing\" class=\"progress-bar\"></form-completion>\r\n        <h1 style=\"position: absolute; top: 0;\">State->{{$ctrl.state}}</h1>\r\n        `\r\n\r\n\r\n\r\n\r\n    app.component('myCustomForm', {\r\n        template: myCustomFormTemplate,\r\n        controller: function() {\r\n            this.passing = 'Ssss';\r\n            this.state = [0,0,0,0]\r\n\r\n            this.getValidityState = function(index, data) {\r\n                this.state[index] = data;\r\n                console.log(this.state)\r\n\r\n                //PLACEHOLDER_FOR(valid input states)\r\n                this.passing = {'transform': `translateY(${(this.state.filter(data => data > 0).length)*25}%)`};\r\n                console.log(this.passing)\r\n            }\r\n        },\r\n        controllerAs: '$ctrl',\r\n        bindings: {\r\n            // dataTest: '<'\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9mb3JtLXRlbXBsYXRlLmNvbXBvbmVudC5qcz8wNDYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bmFtZUlucHV0fSBmcm9tICcuL25hbWUtaW5wdXQvbmFtZS1pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQge2VtYWlsSW5wdXR9IGZyb20gJy4vZW1haWwtaW5wdXQvZW1haWwtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtteUlucHV0fSBmcm9tICcuL215LWlucHV0L215LWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7bGVuZ3RoSW5wdXR9IGZyb20gJy4vbGVuZ3RoLWlucHV0L2xlbmd0aC1pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQge3N1Ym1pdH0gZnJvbSAnLi9zdWJtaXQvc3VibWl0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Zm9ybUNvbXBsZXRpb259IGZyb20gJy4vZm9ybS1jb21wbGV0aW9uL2Zvcm0tY29tcGxldGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgICAnLi9lbWFpbC1pbnB1dC90ZXN0JztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9ybVRlbXBsYXRlKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2Zvcm0tdGVtcGxhdGUuY29tcG9uZW50LmpzIGxvYWRlZCcpXHJcbiAgICAvL2FuZ3VsYXIubW9kdWxlKCdteUFwcCcpIFJlZmZlcmVuY2luZyA8LSBvdXRzaWRlIHRoZSBmdW5jdGlvbiBibG9jayBcclxuICAgIC8vY2F1c2VzIGl0IHRvIGJlIGNhbGxlZCBiZWZvcmUgYW5ndWxhci5tb2R1bGUoJ215QXBwJywgW10pID09IGNyYXNoXHJcbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJyk7XHJcblxyXG4gICAgbmFtZUlucHV0KCk7XHJcbiAgICBlbWFpbElucHV0KCk7XHJcbiAgICBteUlucHV0KCk7XHJcbiAgICBsZW5ndGhJbnB1dCgpO1xyXG4gICAgc3VibWl0KCk7XHJcbiAgICBmb3JtQ29tcGxldGlvbigpO1xyXG4vLyBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnKS5jb21wb25lbnQoJ2NvbXBvbmVudE5hbWUnLCB7XHJcbi8vICAgICB0ZW1wbGF0ZTogJ3NhcGRrYXBkcGEnXHJcbi8vIH0pXHJcblxyXG5cclxuICAgIC8vQ2FudCBnZXQgdGhlIHZhbHVlIGRpcmVjdGx5IGJlY2F1c2UgbXktY3VzdG9tLWlucHV0IGlzIGEgZGl2XHJcbiAgICAvL1RoZXJlIG11c3QgYmUgc29tZSBraW5kIG9mIGF0dHJpYnV0ZSB0byBwYXNzIGRhdGFcclxuICAgIGxldCBteUN1c3RvbUZvcm1UZW1wbGF0ZSA9IGBcclxuICAgICAgICA8Zm9ybSAgY2xhc3M9XCJmb3JtLXBsYXlcIiBuYW1lPVwiYUZvcm1cIiBuZy1zdWJtaXQ9XCJzdWJtaXRNb2NrdXAoKVwiPlxyXG4gICAgICAgICAgICA8bXktY3VzdG9tLWlucHV0LTEgcGFzc2luZz1cIiRjdHJsLnBhc3NpbmdcIj48L215LWN1c3RvbS1pbnB1dC0xPlxyXG4gICAgICAgICAgICA8bXktY3VzdG9tLWlucHV0LTI+PC9teS1jdXN0b20taW5wdXQtMj5cclxuICAgICAgICAgICAgPG15LWN1c3RvbS1pbnB1dC0zPjwvbXktY3VzdG9tLWlucHV0LTM+XHJcbiAgICAgICAgICAgIDxteS1jdXN0b20taW5wdXQtND48L215LWN1c3RvbS1pbnB1dC00PlxyXG4gICAgICAgICAgICA8bXktY3VzdG9tLWlucHV0LXN1Ym1pdD48L215LWN1c3RvbS1pbnB1dC1zdWJtaXQ+XHJcbiAgICAgICAgICAgIDxjb21wb25lbnQtbmFtZT48L2NvbXBvbmVudC1uYW1lPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Zm9ybS1jb21wbGV0aW9uIHBhc3Npbmc9XCIkY3RybC5wYXNzaW5nXCIgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIj48L2Zvcm0tY29tcGxldGlvbj5cclxuICAgICAgICA8aDEgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDtcIj5TdGF0ZS0+e3skY3RybC5zdGF0ZX19PC9oMT5cclxuICAgICAgICBgXHJcblxyXG5cclxuXHJcblxyXG4gICAgYXBwLmNvbXBvbmVudCgnbXlDdXN0b21Gb3JtJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiBteUN1c3RvbUZvcm1UZW1wbGF0ZSxcclxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXNzaW5nID0gJ1Nzc3MnO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gWzAsMCwwLDBdXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFZhbGlkaXR5U3RhdGUgPSBmdW5jdGlvbihpbmRleCwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtpbmRleF0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL1BMQUNFSE9MREVSX0ZPUih2YWxpZCBpbnB1dCBzdGF0ZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3NpbmcgPSB7J3RyYW5zZm9ybSc6IGB0cmFuc2xhdGVZKCR7KHRoaXMuc3RhdGUuZmlsdGVyKGRhdGEgPT4gZGF0YSA+IDApLmxlbmd0aCkqMjV9JSlgfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFzc2luZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnJGN0cmwnLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIC8vIGRhdGFUZXN0OiAnPCdcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQge2Zvcm1UZW1wbGF0ZX07XHJcblxyXG5cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvY29udGVudC9mb3JtLXRlbXBsYXRlL2Zvcm0tdGVtcGxhdGUuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************************************************************!*\
  !*** ./src/modules/content/form-template/name-input/name-input.component.js ***!
  \******************************************************************************/
/*! exports provided: nameInput */
/*! exports used: nameInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return nameInput; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__name_input_template__ = __webpack_require__(/*! ./name-input.template */ 5);\n\r\n\r\nclass Ctrl {\r\n    getFormState($event) {\r\n        //INFO:\r\n        //prints only if it's valid\r\n        //dependencyCtrl == 'this' of parent\r\n        \r\n\r\n        //FAILED: [Child->Parent]\r\n        // var $ctrl = this;\r\n        // $ctrl.save = function(data) {\r\n        //     $ctrl.childCallback({'keyName':data})\r\n        //     // console.log($ctrl.childCallback)\r\n        // }\r\n        // // console.log($ctrl.save())\r\n\r\n        // function omega(x) {\r\n        //     alert('_' + x)\r\n        // }\r\n        \r\n        console.log(this)\r\n        var data = this.name\r\n        \r\n        this.dependencyCtrl.getValidityState(0, data.length)\r\n        // this.dependencyCtrl.getValidityState(0, data)\r\n    }\r\n}\r\n\r\nfunction nameInput() {\r\n    var app = angular.module('myApp');\r\n    //QUESTIONS:\r\n    //How to check valid state\r\n    //How to emit data to parent\r\n    //How to emit valid state to form component\r\n    app.component('myCustomInput1', {\r\n        template: __WEBPACK_IMPORTED_MODULE_0__name_input_template__[\"a\" /* template */],\r\n        //Binds data to Ctrl\r\n        bindings: {\r\n            // value: '<',\r\n            // onChange: '&',\r\n            // omega: '&',\r\n            // dataTest: '='\r\n            passing: '='\r\n        },\r\n        controller: Ctrl,\r\n        controllerAs: '$ctrl',\r\n        require: {\r\n                          //'parentComponentName'\r\n          dependencyCtrl: '^myCustomForm'\r\n        }\r\n    })\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9uYW1lLWlucHV0L25hbWUtaW5wdXQuY29tcG9uZW50LmpzPzc0NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0ZW1wbGF0ZX0gZnJvbSAnLi9uYW1lLWlucHV0LnRlbXBsYXRlJztcclxuXHJcbmNsYXNzIEN0cmwge1xyXG4gICAgZ2V0Rm9ybVN0YXRlKCRldmVudCkge1xyXG4gICAgICAgIC8vSU5GTzpcclxuICAgICAgICAvL3ByaW50cyBvbmx5IGlmIGl0J3MgdmFsaWRcclxuICAgICAgICAvL2RlcGVuZGVuY3lDdHJsID09ICd0aGlzJyBvZiBwYXJlbnRcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy9GQUlMRUQ6IFtDaGlsZC0+UGFyZW50XVxyXG4gICAgICAgIC8vIHZhciAkY3RybCA9IHRoaXM7XHJcbiAgICAgICAgLy8gJGN0cmwuc2F2ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAvLyAgICAgJGN0cmwuY2hpbGRDYWxsYmFjayh7J2tleU5hbWUnOmRhdGF9KVxyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygkY3RybC5jaGlsZENhbGxiYWNrKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygkY3RybC5zYXZlKCkpXHJcblxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIG9tZWdhKHgpIHtcclxuICAgICAgICAvLyAgICAgYWxlcnQoJ18nICsgeClcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMubmFtZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jeUN0cmwuZ2V0VmFsaWRpdHlTdGF0ZSgwLCBkYXRhLmxlbmd0aClcclxuICAgICAgICAvLyB0aGlzLmRlcGVuZGVuY3lDdHJsLmdldFZhbGlkaXR5U3RhdGUoMCwgZGF0YSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmFtZUlucHV0KCkge1xyXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdteUFwcCcpO1xyXG4gICAgLy9RVUVTVElPTlM6XHJcbiAgICAvL0hvdyB0byBjaGVjayB2YWxpZCBzdGF0ZVxyXG4gICAgLy9Ib3cgdG8gZW1pdCBkYXRhIHRvIHBhcmVudFxyXG4gICAgLy9Ib3cgdG8gZW1pdCB2YWxpZCBzdGF0ZSB0byBmb3JtIGNvbXBvbmVudFxyXG4gICAgYXBwLmNvbXBvbmVudCgnbXlDdXN0b21JbnB1dDEnLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgIC8vQmluZHMgZGF0YSB0byBDdHJsXHJcbiAgICAgICAgYmluZGluZ3M6IHtcclxuICAgICAgICAgICAgLy8gdmFsdWU6ICc8JyxcclxuICAgICAgICAgICAgLy8gb25DaGFuZ2U6ICcmJyxcclxuICAgICAgICAgICAgLy8gb21lZ2E6ICcmJyxcclxuICAgICAgICAgICAgLy8gZGF0YVRlc3Q6ICc9J1xyXG4gICAgICAgICAgICBwYXNzaW5nOiAnPSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IEN0cmwsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnJGN0cmwnLFxyXG4gICAgICAgIHJlcXVpcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLydwYXJlbnRDb21wb25lbnROYW1lJ1xyXG4gICAgICAgICAgZGVwZW5kZW5jeUN0cmw6ICdebXlDdXN0b21Gb3JtJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7bmFtZUlucHV0fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9uYW1lLWlucHV0L25hbWUtaW5wdXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************************************************************!*\
  !*** ./src/modules/content/form-template/name-input/name-input.template.js ***!
  \*****************************************************************************/
/*! exports provided: template */
/*! exports used: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const template = `\r\n    <div class=\"form-block form-play-name\">\r\n    <span class=\"explanation\">Checks if input contains only letters</span>  \r\n    <div>\r\n        <span ng-show=\"!aForm.name.$valid && aForm.name.$dirty\" class=\"input-err\">Must contain just letters</span>\r\n        <span ng-hide=\"!aForm.name.$valid && aForm.name.$dirty\" class=\"\">Valid String: {{$ctrl.name | uppercase}}</span>\r\n        <span ng-show=\"$ctrl.name\">show</span>\r\n    </div>\r\n    {{$ctrl.passing}}\r\n    <input  \r\n        ng-model=\"$ctrl.name\" \r\n        required\r\n        type=\"text\"\r\n        ng-pattern=\"/^[a-zA-Z]+$/\"  \r\n        ng-change=\"$ctrl.getFormState();\"\r\n        name=\"name\" \r\n        data = \"$ctrl.data\"\r\n    />       \r\n    </div>\r\n    `\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = template;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9uYW1lLWlucHV0L25hbWUtaW5wdXQudGVtcGxhdGUuanM/MTNmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdGVtcGxhdGUgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ibG9jayBmb3JtLXBsYXktbmFtZVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJleHBsYW5hdGlvblwiPkNoZWNrcyBpZiBpbnB1dCBjb250YWlucyBvbmx5IGxldHRlcnM8L3NwYW4+ICBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gbmctc2hvdz1cIiFhRm9ybS5uYW1lLiR2YWxpZCAmJiBhRm9ybS5uYW1lLiRkaXJ0eVwiIGNsYXNzPVwiaW5wdXQtZXJyXCI+TXVzdCBjb250YWluIGp1c3QgbGV0dGVyczwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBuZy1oaWRlPVwiIWFGb3JtLm5hbWUuJHZhbGlkICYmIGFGb3JtLm5hbWUuJGRpcnR5XCIgY2xhc3M9XCJcIj5WYWxpZCBTdHJpbmc6IHt7JGN0cmwubmFtZSB8IHVwcGVyY2FzZX19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIG5nLXNob3c9XCIkY3RybC5uYW1lXCI+c2hvdzwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAge3skY3RybC5wYXNzaW5nfX1cclxuICAgIDxpbnB1dCAgXHJcbiAgICAgICAgbmctbW9kZWw9XCIkY3RybC5uYW1lXCIgXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmctcGF0dGVybj1cIi9eW2EtekEtWl0rJC9cIiAgXHJcbiAgICAgICAgbmctY2hhbmdlPVwiJGN0cmwuZ2V0Rm9ybVN0YXRlKCk7XCJcclxuICAgICAgICBuYW1lPVwibmFtZVwiIFxyXG4gICAgICAgIGRhdGEgPSBcIiRjdHJsLmRhdGFcIlxyXG4gICAgLz4gICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIGBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9uYW1lLWlucHV0L25hbWUtaW5wdXQudGVtcGxhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************************************************!*\
  !*** ./src/modules/content/form-template/email-input/email-input.component.js ***!
  \********************************************************************************/
/*! exports provided: emailInput */
/*! exports used: emailInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return emailInput; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__email_input_template__ = __webpack_require__(/*! ./email-input.template */ 7);\n\r\n\r\nclass Ctrl {\r\n    nameValidation($event) {\r\n        var value = this.email\r\n        console.log(value)\r\n        this.onChange({\r\n            $value: value\r\n        })\r\n        //FAILED:\r\n        // console.log($ctrl.email.$valid)\r\n\r\n        var data = this.email\r\n        this.dependencyCtrl.getValidityState(1, data.length)\r\n        // this.dependencyCtrl.getValidityState(1, data)\r\n    }\r\n}\r\n\r\nfunction emailInput() {\r\n    angular.module('myApp').component('myCustomInput2', {\r\n        template: __WEBPACK_IMPORTED_MODULE_0__email_input_template__[\"a\" /* template */],\r\n        bindings: {\r\n            value: '<',\r\n            onChange: '&'\r\n        },\r\n        controller: Ctrl,\r\n        controllerAs: '$ctrl',\r\n        require: {\r\n                          //'parentComponentName'\r\n          dependencyCtrl: '^myCustomForm'\r\n        }\r\n    })\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9lbWFpbC1pbnB1dC9lbWFpbC1pbnB1dC5jb21wb25lbnQuanM/NjBjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RlbXBsYXRlfSBmcm9tICcuL2VtYWlsLWlucHV0LnRlbXBsYXRlJztcclxuXHJcbmNsYXNzIEN0cmwge1xyXG4gICAgbmFtZVZhbGlkYXRpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5lbWFpbFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAkdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL0ZBSUxFRDpcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkY3RybC5lbWFpbC4kdmFsaWQpXHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5lbWFpbFxyXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jeUN0cmwuZ2V0VmFsaWRpdHlTdGF0ZSgxLCBkYXRhLmxlbmd0aClcclxuICAgICAgICAvLyB0aGlzLmRlcGVuZGVuY3lDdHJsLmdldFZhbGlkaXR5U3RhdGUoMSwgZGF0YSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW1haWxJbnB1dCgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKCdteUFwcCcpLmNvbXBvbmVudCgnbXlDdXN0b21JbnB1dDInLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnPCcsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAnJidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IEN0cmwsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnJGN0cmwnLFxyXG4gICAgICAgIHJlcXVpcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLydwYXJlbnRDb21wb25lbnROYW1lJ1xyXG4gICAgICAgICAgZGVwZW5kZW5jeUN0cmw6ICdebXlDdXN0b21Gb3JtJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7ZW1haWxJbnB1dH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvZW1haWwtaW5wdXQvZW1haWwtaW5wdXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*******************************************************************************!*\
  !*** ./src/modules/content/form-template/email-input/email-input.template.js ***!
  \*******************************************************************************/
/*! exports provided: template */
/*! exports used: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const template = `\r\n    <div class=\"form-block form-play-email\">\r\n        <span class=\"explanation\">Typical email validation: </span>  \r\n        <span ng-show=\"aForm.email.$invalid && aForm.email.$dirty\" class=\"input-err\">Invalid Email</span> \r\n        <input \r\n            ng-model=\"$ctrl.email\" \r\n            required \r\n            type=\"email\" \r\n            value=\"$ctrl.value\"\r\n            ng-change=\"$ctrl.nameValidation();\"  \r\n            name=\"email\"  \r\n        />  \r\n    </div>\r\n    `\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = template;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9lbWFpbC1pbnB1dC9lbWFpbC1pbnB1dC50ZW1wbGF0ZS5qcz9hN2JmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJsb2NrIGZvcm0tcGxheS1lbWFpbFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXhwbGFuYXRpb25cIj5UeXBpY2FsIGVtYWlsIHZhbGlkYXRpb246IDwvc3Bhbj4gIFxyXG4gICAgICAgIDxzcGFuIG5nLXNob3c9XCJhRm9ybS5lbWFpbC4kaW52YWxpZCAmJiBhRm9ybS5lbWFpbC4kZGlydHlcIiBjbGFzcz1cImlucHV0LWVyclwiPkludmFsaWQgRW1haWw8L3NwYW4+IFxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgbmctbW9kZWw9XCIkY3RybC5lbWFpbFwiIFxyXG4gICAgICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgIHZhbHVlPVwiJGN0cmwudmFsdWVcIlxyXG4gICAgICAgICAgICBuZy1jaGFuZ2U9XCIkY3RybC5uYW1lVmFsaWRhdGlvbigpO1wiICBcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgIFxyXG4gICAgICAgIC8+ICBcclxuICAgIDwvZGl2PlxyXG4gICAgYFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvY29udGVudC9mb3JtLXRlbXBsYXRlL2VtYWlsLWlucHV0L2VtYWlsLWlucHV0LnRlbXBsYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**************************************************************************!*\
  !*** ./src/modules/content/form-template/my-input/my-input.component.js ***!
  \**************************************************************************/
/*! exports provided: myInput */
/*! exports used: myInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return myInput; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_input_template__ = __webpack_require__(/*! ./my-input.template */ 9);\n\r\n\r\nclass Ctrl {\r\n    getFormState($event) {\r\n        // console.log(this)\r\n        var data = this.myInput\r\n        \r\n        this.dependencyCtrl.getValidityState(2, data.length)\r\n        // this.dependencyCtrl.getValidityState(2, data)\r\n    }\r\n}\r\n\r\nfunction myInput() {\r\n    var app = angular.module('myApp');\r\n    app.component('myCustomInput3', {\r\n        template: __WEBPACK_IMPORTED_MODULE_0__my_input_template__[\"a\" /* template */],\r\n        bindings: {\r\n            onChange: '&'\r\n        },\r\n        controller: Ctrl,\r\n        controllerAs: '$ctrl',\r\n        require: {\r\n                          //'parentComponentName'\r\n          dependencyCtrl: '^myCustomForm'\r\n        }\r\n    })\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9teS1pbnB1dC9teS1pbnB1dC5jb21wb25lbnQuanM/MjgyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RlbXBsYXRlfSBmcm9tICcuL215LWlucHV0LnRlbXBsYXRlJztcclxuXHJcbmNsYXNzIEN0cmwge1xyXG4gICAgZ2V0Rm9ybVN0YXRlKCRldmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLm15SW5wdXRcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRlcGVuZGVuY3lDdHJsLmdldFZhbGlkaXR5U3RhdGUoMiwgZGF0YS5sZW5ndGgpXHJcbiAgICAgICAgLy8gdGhpcy5kZXBlbmRlbmN5Q3RybC5nZXRWYWxpZGl0eVN0YXRlKDIsIGRhdGEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG15SW5wdXQoKSB7XHJcbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJyk7XHJcbiAgICBhcHAuY29tcG9uZW50KCdteUN1c3RvbUlucHV0MycsIHtcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgYmluZGluZ3M6IHtcclxuICAgICAgICAgICAgb25DaGFuZ2U6ICcmJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJvbGxlcjogQ3RybCxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICckY3RybCcsXHJcbiAgICAgICAgcmVxdWlyZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vJ3BhcmVudENvbXBvbmVudE5hbWUnXHJcbiAgICAgICAgICBkZXBlbmRlbmN5Q3RybDogJ15teUN1c3RvbUZvcm0nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IHtteUlucHV0fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9teS1pbnB1dC9teS1pbnB1dC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************!*\
  !*** ./src/modules/content/form-template/my-input/my-input.template.js ***!
  \*************************************************************************/
/*! exports provided: template */
/*! exports used: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const template = `                 \r\n    <div class=\"form-block form-play-email\">\r\n    <p class=\"explanation\">Check if string has \"@\"</p>\r\n    <div class=\"status-wrapper\">\r\n        <p class=\"input-err custom-valid {{aForm.myInput.$valid ? 'invalid' : 'valid'}}\"></p>\r\n    </div> \r\n    <input\r\n        ng-model=\"$ctrl.myInput\"\r\n        required \r\n        type=\"text\"\r\n        ng-change=\"$ctrl.getFormState();\" \r\n        name=\"myInput\"   \r\n    />\r\n    </div>\r\n    `\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = template;\n\r\n    //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9teS1pbnB1dC9teS1pbnB1dC50ZW1wbGF0ZS5qcz9lZDk4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGAgICAgICAgICAgICAgICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tYmxvY2sgZm9ybS1wbGF5LWVtYWlsXCI+XHJcbiAgICA8cCBjbGFzcz1cImV4cGxhbmF0aW9uXCI+Q2hlY2sgaWYgc3RyaW5nIGhhcyBcIkBcIjwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtd3JhcHBlclwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaW5wdXQtZXJyIGN1c3RvbS12YWxpZCB7e2FGb3JtLm15SW5wdXQuJHZhbGlkID8gJ2ludmFsaWQnIDogJ3ZhbGlkJ319XCI+PC9wPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGlucHV0XHJcbiAgICAgICAgbmctbW9kZWw9XCIkY3RybC5teUlucHV0XCJcclxuICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmctY2hhbmdlPVwiJGN0cmwuZ2V0Rm9ybVN0YXRlKCk7XCIgXHJcbiAgICAgICAgbmFtZT1cIm15SW5wdXRcIiAgIFxyXG4gICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvbXktaW5wdXQvbXktaW5wdXQudGVtcGxhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**********************************************************************************!*\
  !*** ./src/modules/content/form-template/length-input/length-input.component.js ***!
  \**********************************************************************************/
/*! exports provided: lengthInput */
/*! exports used: lengthInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return lengthInput; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length_input_template__ = __webpack_require__(/*! ./length-input.template */ 11);\n\r\n\r\nclass Ctrl {\r\n    catchLength($event) {\r\n        // console.log(this.checklength)\r\n        var data = this.checklength\r\n        \r\n        this.dependencyCtrl.getValidityState(3, data.length)\r\n        // this.dependencyCtrl.getValidityState(3, data)\r\n    }\r\n}\r\n\r\nfunction lengthInput() {\r\n    // console.log('length-input.component.js loaded')\r\n    var app = angular.module('myApp');\r\n\r\n    app.component('myCustomInput4', {\r\n        template: __WEBPACK_IMPORTED_MODULE_0__length_input_template__[\"a\" /* template */],\r\n        bindings: {\r\n            onChange: '&'\r\n        },\r\n        controller: Ctrl,\r\n        controllerAs: '$ctrl',\r\n        require: {\r\n                          //'parentComponentName'\r\n          dependencyCtrl: '^myCustomForm'\r\n        }\r\n    })\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvbGVuZ3RoLWlucHV0L2xlbmd0aC1pbnB1dC5jb21wb25lbnQuanM/ODhmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RlbXBsYXRlfSBmcm9tICcuL2xlbmd0aC1pbnB1dC50ZW1wbGF0ZSc7XHJcblxyXG5jbGFzcyBDdHJsIHtcclxuICAgIGNhdGNoTGVuZ3RoKCRldmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tsZW5ndGgpXHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNoZWNrbGVuZ3RoXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kZXBlbmRlbmN5Q3RybC5nZXRWYWxpZGl0eVN0YXRlKDMsIGRhdGEubGVuZ3RoKVxyXG4gICAgICAgIC8vIHRoaXMuZGVwZW5kZW5jeUN0cmwuZ2V0VmFsaWRpdHlTdGF0ZSgzLCBkYXRhKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsZW5ndGhJbnB1dCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdsZW5ndGgtaW5wdXQuY29tcG9uZW50LmpzIGxvYWRlZCcpXHJcbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJyk7XHJcblxyXG4gICAgYXBwLmNvbXBvbmVudCgnbXlDdXN0b21JbnB1dDQnLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAnJidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IEN0cmwsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnJGN0cmwnLFxyXG4gICAgICAgIHJlcXVpcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLydwYXJlbnRDb21wb25lbnROYW1lJ1xyXG4gICAgICAgICAgZGVwZW5kZW5jeUN0cmw6ICdebXlDdXN0b21Gb3JtJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7bGVuZ3RoSW5wdXR9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvY29udGVudC9mb3JtLXRlbXBsYXRlL2xlbmd0aC1pbnB1dC9sZW5ndGgtaW5wdXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*********************************************************************************!*\
  !*** ./src/modules/content/form-template/length-input/length-input.template.js ***!
  \*********************************************************************************/
/*! exports provided: template */
/*! exports used: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const template = `             \r\n    <div class=\"form-block form-play-checklength\">\r\n    <p class=\"explanation\">Checks if input the input's length is 10: {{$ctrl.checklength.length}}</p>\r\n    <div class=\"status-wrapper\">\r\n        <p ng-style=\"checklengthLength\" class=\"checklength-length\"></p>\r\n    </div> \r\n    <input \r\n        ng-model=\"$ctrl.checklength\" \r\n        required \r\n        type=\"text\" \r\n        ng-change=\"$ctrl.catchLength();\" \r\n        name=\"$ctrl.name\" \r\n    />\r\n    </div>\r\n    `\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = template;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvbGVuZ3RoLWlucHV0L2xlbmd0aC1pbnB1dC50ZW1wbGF0ZS5qcz8xMmU3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGAgICAgICAgICAgICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ibG9jayBmb3JtLXBsYXktY2hlY2tsZW5ndGhcIj5cclxuICAgIDxwIGNsYXNzPVwiZXhwbGFuYXRpb25cIj5DaGVja3MgaWYgaW5wdXQgdGhlIGlucHV0J3MgbGVuZ3RoIGlzIDEwOiB7eyRjdHJsLmNoZWNrbGVuZ3RoLmxlbmd0aH19PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cInN0YXR1cy13cmFwcGVyXCI+XHJcbiAgICAgICAgPHAgbmctc3R5bGU9XCJjaGVja2xlbmd0aExlbmd0aFwiIGNsYXNzPVwiY2hlY2tsZW5ndGgtbGVuZ3RoXCI+PC9wPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGlucHV0IFxyXG4gICAgICAgIG5nLW1vZGVsPVwiJGN0cmwuY2hlY2tsZW5ndGhcIiBcclxuICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgIG5nLWNoYW5nZT1cIiRjdHJsLmNhdGNoTGVuZ3RoKCk7XCIgXHJcbiAgICAgICAgbmFtZT1cIiRjdHJsLm5hbWVcIiBcclxuICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9sZW5ndGgtaW5wdXQvbGVuZ3RoLWlucHV0LnRlbXBsYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************************!*\
  !*** ./src/modules/content/form-template/submit/submit.component.js ***!
  \**********************************************************************/
/*! exports provided: submit */
/*! exports used: submit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return submit; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__submit_template__ = __webpack_require__(/*! ./submit.template */ 13);\n\r\n\r\nfunction submit() {\r\n    var app = angular.module('myApp');\r\n    \r\n    let myCustomInputSubmitTemplate = `\r\n        <div class=\"form-submit-wrapper\">\r\n            <input ng-disabled=\"aForm.$invalid\" type=\"submit\" id=\"submit\" value=\"Submit\" />\r\n        </div>\r\n        `\r\n    app.component('myCustomInputSubmit', {\r\n        template: myCustomInputSubmitTemplate\r\n    })\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvc3VibWl0L3N1Ym1pdC5jb21wb25lbnQuanM/NWJjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RlbXBsYXRlfSBmcm9tICcuL3N1Ym1pdC50ZW1wbGF0ZSc7XHJcblxyXG5mdW5jdGlvbiBzdWJtaXQoKSB7XHJcbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJyk7XHJcbiAgICBcclxuICAgIGxldCBteUN1c3RvbUlucHV0U3VibWl0VGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tc3VibWl0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0IG5nLWRpc2FibGVkPVwiYUZvcm0uJGludmFsaWRcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgYXBwLmNvbXBvbmVudCgnbXlDdXN0b21JbnB1dFN1Ym1pdCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZTogbXlDdXN0b21JbnB1dFN1Ym1pdFRlbXBsYXRlXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQge3N1Ym1pdH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvc3VibWl0L3N1Ym1pdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*********************************************************************!*\
  !*** ./src/modules/content/form-template/submit/submit.template.js ***!
  \*********************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const template = `\r\n    <div class=\"form-submit-wrapper\">\r\n        <input ng-disabled=\"aForm.$invalid\" type=\"submit\" id=\"submit\" value=\"Submit\" />\r\n    </div>\r\n    `\n/* unused harmony export template */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvc3VibWl0L3N1Ym1pdC50ZW1wbGF0ZS5qcz8wYzQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLXN1Ym1pdC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGlucHV0IG5nLWRpc2FibGVkPVwiYUZvcm0uJGludmFsaWRcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9zdWJtaXQvc3VibWl0LnRlbXBsYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!****************************************************************************************!*\
  !*** ./src/modules/content/form-template/form-completion/form-completion.component.js ***!
  \****************************************************************************************/
/*! exports provided: formCompletion */
/*! exports used: formCompletion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return formCompletion; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_completion_template__ = __webpack_require__(/*! ./form-completion.template */ 15);\n\r\n\r\nclass Ctrl {\r\n    myTest() {\r\n        console.log(this)\r\n    }\r\n}\r\n\r\nfunction formCompletion() {\r\n    var app = angular.module('myApp');\r\n    app.component('formCompletion', {\r\n        template: __WEBPACK_IMPORTED_MODULE_0__form_completion_template__[\"a\" /* template */],\r\n        bindings: {\r\n            passing: '='\r\n        },\r\n        controller: Ctrl,\r\n        controllerAs: '$ctrl',\r\n        require: {\r\n                          //'parentComponentName'\r\n          dependencyCtrl: '^myCustomForm'\r\n        }\r\n    })\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvZm9ybS1jb21wbGV0aW9uL2Zvcm0tY29tcGxldGlvbi5jb21wb25lbnQuanM/YzI0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RlbXBsYXRlfSBmcm9tICcuL2Zvcm0tY29tcGxldGlvbi50ZW1wbGF0ZSc7XHJcblxyXG5jbGFzcyBDdHJsIHtcclxuICAgIG15VGVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtQ29tcGxldGlvbigpIHtcclxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnKTtcclxuICAgIGFwcC5jb21wb25lbnQoJ2Zvcm1Db21wbGV0aW9uJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICAgICBwYXNzaW5nOiAnPSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IEN0cmwsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnJGN0cmwnLFxyXG4gICAgICAgIHJlcXVpcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLydwYXJlbnRDb21wb25lbnROYW1lJ1xyXG4gICAgICAgICAgZGVwZW5kZW5jeUN0cmw6ICdebXlDdXN0b21Gb3JtJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7Zm9ybUNvbXBsZXRpb259O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvY29udGVudC9mb3JtLXRlbXBsYXRlL2Zvcm0tY29tcGxldGlvbi9mb3JtLWNvbXBsZXRpb24uY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!***************************************************************************************!*\
  !*** ./src/modules/content/form-template/form-completion/form-completion.template.js ***!
  \***************************************************************************************/
/*! exports provided: template */
/*! exports used: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const template = `\r\n    <div class=\"progress\"  ng-click=\"$ctrl.myTest()\" ng-style=\"$ctrl.passing\">{{$ctrl.passing}}</div>\r\n    `\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = template;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvZm9ybS1jb21wbGV0aW9uL2Zvcm0tY29tcGxldGlvbi50ZW1wbGF0ZS5qcz8zMmVjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiICBuZy1jbGljaz1cIiRjdHJsLm15VGVzdCgpXCIgbmctc3R5bGU9XCIkY3RybC5wYXNzaW5nXCI+e3skY3RybC5wYXNzaW5nfX08L2Rpdj5cclxuICAgIGBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NvbnRlbnQvZm9ybS10ZW1wbGF0ZS9mb3JtLWNvbXBsZXRpb24vZm9ybS1jb21wbGV0aW9uLnRlbXBsYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***************************************************************!*\
  !*** ./src/modules/content/form-template/email-input/test.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("\r\n// console.log('Im imported')\r\n// angular.module('myApp', [])\r\n// var app = angular.module('myApp')\r\n// angular.module('myApp').component('componentName', {\r\n//     template: 'sapdkapdpa'\r\n// })\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvZW1haWwtaW5wdXQvdGVzdC5qcz9iYjU5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBjb25zb2xlLmxvZygnSW0gaW1wb3J0ZWQnKVxyXG4vLyBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbXSlcclxuLy8gdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdteUFwcCcpXHJcbi8vIGFuZ3VsYXIubW9kdWxlKCdteUFwcCcpLmNvbXBvbmVudCgnY29tcG9uZW50TmFtZScsIHtcclxuLy8gICAgIHRlbXBsYXRlOiAnc2FwZGthcGRwYSdcclxuLy8gfSlcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9jb250ZW50L2Zvcm0tdGVtcGxhdGUvZW1haWwtaW5wdXQvdGVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ })
/******/ ]);