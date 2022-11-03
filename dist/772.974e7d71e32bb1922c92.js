"use strict";
(self["webpackChunkecommerce_angular_app"] = self["webpackChunkecommerce_angular_app"] || []).push([[772],{

/***/ 5739:
/*!************************************************************************!*\
  !*** ./src/app/pages/demo/pages/controles/controles-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlesRoutingModule": () => (/* binding */ ControlesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _controles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controles.component */ 9705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _controles_component__WEBPACK_IMPORTED_MODULE_0__.ControlesComponent
    }
];
class ControlesRoutingModule {
}
ControlesRoutingModule.ɵfac = function ControlesRoutingModule_Factory(t) { return new (t || ControlesRoutingModule)(); };
ControlesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ControlesRoutingModule });
ControlesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ControlesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9705:
/*!*******************************************************************!*\
  !*** ./src/app/pages/demo/pages/controles/controles.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlesComponent": () => (/* binding */ ControlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ControlesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ControlesComponent.ɵfac = function ControlesComponent_Factory(t) { return new (t || ControlesComponent)(); };
ControlesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlesComponent, selectors: [["app-controles"]], decls: 45, vars: 0, consts: [[1, "app-a"], [1, "app-button"], ["type", "text", 1, "app-input"], [1, "shadow"], [1, "card"]], template: function ControlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "h1 Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "h2 Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "h3 Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "h4 Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "h5 Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "h6 Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Este es un curso de programacion de Angular, enfocado en la creacion de un Ecommerce\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Boton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "const parameter=100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Mixins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Shadow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Shadow mixin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "card mixin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  padding: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 32px;\n  background: #fafafa;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xlcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ0NFLHdDQUFBO0VEQ0EsYUFBQTtBQURGOztBQUlBO0VDQUUsYUFBQTtFQUNBLG1CQ1JLO0VEU0wsa0JBQUE7RUFOQSx3Q0FBQTtBRE9GIiwiZmlsZSI6ImNvbnRyb2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvbWl4aW5zXCI7XG5cbi5zaGFkb3cge1xuICBAaW5jbHVkZSBzaGFkb3c7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jYXJkIHtcbiAgQGluY2x1ZGUgY2FyZDtcbn1cbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQG1peGluIHNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbkBtaXhpbiBjYXJke1xuICBwYWRkaW5nOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiAkYmFzZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBAaW5jbHVkZSBzaGFkb3c7XG59XG4iLCIkYmFzZTogI2ZhZmFmYTtcbiRiYXNlLWRhcms6ICNlMGUwZTA7XG4kYmFzZS1saWdodDogI2ZmZmZmZjtcbiRvbi1iYXNlOiAjMDAwMDAwO1xuXG4kcHJpbWFyeTogIzAyNzdiZDtcbiRwcmltYXJ5LWRhcms6ICMwMDRjOGM7XG4kcHJpbWFyeS1saWdodDogIzU4YTVmMDtcbiRvbi1wcmltYXJ5OiAjZmZmZmZmO1xuXG4kc2Vjb25kYXJ5OiAjZjQ0MzM2O1xuJHNlY29uZGFyeS1kYXJrOiAjYjkwMDA3O1xuJHNlY29uZGFyeS1saWdodDogI2ZmNzk1ZDtcbiRvbi1zZWNvbmRhcnk6ICNmZmZmZmY7XG5cbiRlcnJvcjogI0IwMDAyMDtcbiRvbi1lcnJvcjogI2ZmZmZmZjtcblxuJHN1Y2Nlc3M6ICM5OWFhMDA7XG4kb24tc3VjY2VzczogI2ZmZmZmZjtcblxuXG4iXX0= */"] });


/***/ }),

/***/ 9772:
/*!****************************************************************!*\
  !*** ./src/app/pages/demo/pages/controles/controles.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlesModule": () => (/* binding */ ControlesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _controles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controles-routing.module */ 5739);
/* harmony import */ var _controles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controles.component */ 9705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class ControlesModule {
}
ControlesModule.ɵfac = function ControlesModule_Factory(t) { return new (t || ControlesModule)(); };
ControlesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ControlesModule });
ControlesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _controles_routing_module__WEBPACK_IMPORTED_MODULE_0__.ControlesRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ControlesModule, { declarations: [_controles_component__WEBPACK_IMPORTED_MODULE_1__.ControlesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _controles_routing_module__WEBPACK_IMPORTED_MODULE_0__.ControlesRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=772.974e7d71e32bb1922c92.js.map