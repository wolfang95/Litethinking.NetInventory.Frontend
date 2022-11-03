"use strict";
(self["webpackChunkecommerce_angular_app"] = self["webpackChunkecommerce_angular_app"] || []).push([[387],{

/***/ 1100:
/*!**********************************************************************!*\
  !*** ./src/app/pages/static/pages/welcome/welcome-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeRoutingModule": () => (/* binding */ WelcomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component */ 4230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent
    }
];
class WelcomeRoutingModule {
}
WelcomeRoutingModule.ɵfac = function WelcomeRoutingModule_Factory(t) { return new (t || WelcomeRoutingModule)(); };
WelcomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WelcomeRoutingModule });
WelcomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WelcomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4230:
/*!*****************************************************************!*\
  !*** ./src/app/pages/static/pages/welcome/welcome.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


class WelcomeComponent {
    //products!: any[];
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        // this.http.get(`${environment.url}/api/Producto?pageIndex=1&pageSize=5`).subscribe((response: any) => {
        //   this.products = response.data;
        // }, error => {
        //   console.log(error);
        // })
        // this.http.get(`${environment.url}/api/Producto?pageIndex=1&pageSize=10`).subscribe({
        //   next: (response:any) => {
        //     this.products = response.data;
        //   },
        //   error: (err:any) => {
        //     console.log(err);
        //   },
        //   complete: () => {
        //     console.log('completado');
        //   }
        // })
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
WelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 9, vars: 0, consts: [[1, "app-page"], [1, "app-page__header"], [1, "app-page__content"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bienvenido a nuestro portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Esta aplicacion esta construida con angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Puede ser integrado con cualquier backend como Firebase, NET Core, Java, Python, Node, PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5387:
/*!**************************************************************!*\
  !*** ./src/app/pages/static/pages/welcome/welcome.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeModule": () => (/* binding */ WelcomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 1100);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component */ 4230);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class WelcomeModule {
}
WelcomeModule.ɵfac = function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); };
WelcomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WelcomeModule });
WelcomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomeRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__.WelcomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomeRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule] }); })();


/***/ })

}]);
//# sourceMappingURL=387.177787da2f760c5c05b3.js.map