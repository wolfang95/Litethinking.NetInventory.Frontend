"use strict";
(self["webpackChunkecommerce_angular_app"] = self["webpackChunkecommerce_angular_app"] || []).push([[788],{

/***/ 6072:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/pages/login/login-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 555:
/*!***********************************************************!*\
  !*** ./src/app/pages/auth/pages/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/utils */ 2846);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _app_store_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/store/user */ 7957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_controls_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/controls/form-field/form-field.component */ 7195);
/* harmony import */ var _shared_controls_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/controls/input/input.component */ 6840);
/* harmony import */ var _shared_controls_password_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/controls/password/password.component */ 497);
/* harmony import */ var _shared_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/buttons/button/button.component */ 5667);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_indicators_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/indicators/spinner/spinner.component */ 3733);













function LoginComponent_app_spinner_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-spinner");
} }
class LoginComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.regexErrors = _app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.regexErrors;
    }
    ngOnInit() {
        this.loading$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_app_store_user__WEBPACK_IMPORTED_MODULE_1__.getLoading));
        this.form = this.fb.group({
            email: [null, {
                    updateOn: 'blur', validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(128),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.regex.email)
                    ]
                }],
            password: [null, {
                    updateOn: 'blur', validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(30),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.regex.password)
                    ]
                }],
        });
    }
    onSubmit() {
        if (this.form.valid) {
            const value = this.form.value;
            const userLoginRequest = {
                email: value.email,
                password: value.password,
            };
            this.store.dispatch(new _app_store_user__WEBPACK_IMPORTED_MODULE_1__.SignInEmail(userLoginRequest));
        }
        else {
            (0,_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.markFormGroupTouched)(this.form);
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 12, consts: [[1, "app-page"], [1, "app-page__header"], ["novalidate", "", "autocomplete", "off", 3, "formGroup", "submit", "keyup.enter"], [1, "app-page__content"], ["label", "E-Mail", 3, "required", "control", "isInline", "patternError"], ["formControlName", "email"], ["label", "Password", 3, "required", "control", "isInline", "patternError"], ["formControlName", "password"], [1, "app-page__footer"], ["type", "submit"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_4_listener() { return ctx.onSubmit(); })("keyup.enter", function LoginComponent_Template_form_keyup_enter_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "app-password", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "app-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, LoginComponent_app_spinner_13_Template, 1, 0, "app-spinner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.form.controls.email)("isInline", false)("patternError", ctx.regexErrors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.form.controls.password)("isInline", false)("patternError", ctx.regexErrors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 10, ctx.loading$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_controls_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__.FormFieldComponent, _shared_controls_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_controls_password_password_component__WEBPACK_IMPORTED_MODULE_4__.PasswordComponent, _shared_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_indicators_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".app-page[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtcGFnZSB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 4788:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/pages/login/login.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 6072);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 555);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/controls */ 7150);
/* harmony import */ var _app_shared_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/buttons */ 2341);
/* harmony import */ var _app_shared_indicators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/indicators */ 9299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.FormFieldModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.InputModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.PasswordModule,
            _app_shared_buttons__WEBPACK_IMPORTED_MODULE_3__.ButtonModule,
            _app_shared_indicators__WEBPACK_IMPORTED_MODULE_4__.SpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.FormFieldModule,
        _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.InputModule,
        _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.PasswordModule,
        _app_shared_buttons__WEBPACK_IMPORTED_MODULE_3__.ButtonModule,
        _app_shared_indicators__WEBPACK_IMPORTED_MODULE_4__.SpinnerModule] }); })();


/***/ }),

/***/ 5522:
/*!**************************************!*\
  !*** ./src/app/shared/utils/data.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractDocumentChangeActionData": () => (/* binding */ extractDocumentChangeActionData)
/* harmony export */ });
const extractDocumentChangeActionData = (x, addId = true) => {
    const data = x.payload.doc.data();
    if (addId) {
        data.id = x.payload.doc.id;
    }
    return data;
};


/***/ }),

/***/ 2103:
/*!**************************************!*\
  !*** ./src/app/shared/utils/form.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markFormGroupTouched": () => (/* binding */ markFormGroupTouched),
/* harmony export */   "mapControls": () => (/* binding */ mapControls)
/* harmony export */ });
const markFormGroupTouched = (formGroup) => {
    Object.values(formGroup.controls).forEach((control) => {
        control.markAsTouched();
        if (control.controls) {
            markFormGroupTouched(control);
        }
    });
};
const mapControls = (controls) => {
    Object.keys(controls).forEach((key) => {
        if (controls[key].map) {
            controls[key].map();
        }
    });
};


/***/ }),

/***/ 2846:
/*!***************************************!*\
  !*** ./src/app/shared/utils/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "regex": () => (/* reexport safe */ _regex__WEBPACK_IMPORTED_MODULE_0__.regex),
/* harmony export */   "regexErrors": () => (/* reexport safe */ _regex__WEBPACK_IMPORTED_MODULE_0__.regexErrors),
/* harmony export */   "mapControls": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_1__.mapControls),
/* harmony export */   "markFormGroupTouched": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_1__.markFormGroupTouched),
/* harmony export */   "extractDocumentChangeActionData": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_2__.extractDocumentChangeActionData)
/* harmony export */ });
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex */ 5167);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ 2103);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ 5522);





/***/ }),

/***/ 5167:
/*!***************************************!*\
  !*** ./src/app/shared/utils/regex.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "regex": () => (/* binding */ regex),
/* harmony export */   "regexErrors": () => (/* binding */ regexErrors)
/* harmony export */ });
/* tslint:disable:max-line-length */
const regex = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/,
    number: /^\d+$/,
};
const regexErrors = {
    email: 'El email es incorrecto',
    password: 'El password debe contener una letra mayuscula, minuscula, un numero y un caracter especial',
    number: 'Solo puede ingresar numeros'
};


/***/ })

}]);
//# sourceMappingURL=788.4f87f73d81e2fcfc4417.js.map