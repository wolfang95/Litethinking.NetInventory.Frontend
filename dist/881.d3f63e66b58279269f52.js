"use strict";
(self["webpackChunkecommerce_angular_app"] = self["webpackChunkecommerce_angular_app"] || []).push([[881],{

/***/ 8996:
/*!*******************************************************!*\
  !*** ./src/app/pages/static/static-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticRoutingModule": () => (/* binding */ StaticRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() */ 387).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/welcome/welcome.module */ 5387)).then(m => m.WelcomeModule)
    },
    {
        path: '404',
        loadChildren: () => __webpack_require__.e(/*! import() */ 247).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/not-found/not-found.module */ 6247)).then(m => m.NotFoundModule)
    }
];
class StaticRoutingModule {
}
StaticRoutingModule.ɵfac = function StaticRoutingModule_Factory(t) { return new (t || StaticRoutingModule)(); };
StaticRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StaticRoutingModule });
StaticRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StaticRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 8881:
/*!***********************************************!*\
  !*** ./src/app/pages/static/static.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticModule": () => (/* binding */ StaticModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _static_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-routing.module */ 8996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class StaticModule {
}
StaticModule.ɵfac = function StaticModule_Factory(t) { return new (t || StaticModule)(); };
StaticModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StaticModule });
StaticModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _static_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaticRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StaticModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _static_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaticRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=881.d3f63e66b58279269f52.js.map