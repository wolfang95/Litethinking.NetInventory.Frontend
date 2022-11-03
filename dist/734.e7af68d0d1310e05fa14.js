"use strict";
(self["webpackChunkecommerce_angular_app"] = self["webpackChunkecommerce_angular_app"] || []).push([[734],{

/***/ 8642:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/pages/registration/registration-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationRoutingModule": () => (/* binding */ RegistrationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.component */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _registration_component__WEBPACK_IMPORTED_MODULE_0__.RegistrationComponent
    }
];
class RegistrationRoutingModule {
}
RegistrationRoutingModule.ɵfac = function RegistrationRoutingModule_Factory(t) { return new (t || RegistrationRoutingModule)(); };
RegistrationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegistrationRoutingModule });
RegistrationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegistrationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5868:
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/pages/registration/registration.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
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













function RegistrationComponent_app_spinner_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-spinner");
} }
class RegistrationComponent {
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
            username: [null, {
                    updateOn: 'blur', validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required
                    ]
                }],
            nombre: [null, {
                    updateOn: 'blur', validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required
                    ]
                }],
            apellido: [null, {
                    updateOn: 'blur', validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required
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
            passwordRepeat: [null, {
                    updateOn: 'blur', validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(30),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.regex.password)
                    ]
                }],
        }, { validator: this.repeatPasswordValidator });
    }
    repeatPasswordValidator(group) {
        const password = group.get('password');
        const passwordRepeat = group.get('passwordRepeat');
        return (passwordRepeat === null || passwordRepeat === void 0 ? void 0 : passwordRepeat.value) && (password === null || password === void 0 ? void 0 : password.value) !== passwordRepeat.value
            ? { repeat: true }
            : null;
    }
    onSubmit() {
        if (this.form.valid) {
            const value = this.form.value;
            const userCreateRequest = {
                email: value.email,
                password: value.password,
                nombre: value.nombre,
                apellido: value.apellido,
                username: value.username
            };
            this.store.dispatch(new _app_store_user__WEBPACK_IMPORTED_MODULE_1__.SignUpEmail(userCreateRequest));
        }
        else {
            (0,_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.markFormGroupTouched)(this.form);
        }
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
RegistrationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 25, vars: 27, consts: [[1, "app-page"], [1, "app-page__header"], ["novalidate", "", "autocomplete", "off", 3, "formGroup", "submit", "keyup.enter"], [1, "app-page__content"], ["label", "E-Mail", 3, "required", "control", "isInline", "patternError"], ["formControlName", "email"], ["label", "Username", 3, "required", "control", "isInline"], ["formControlName", "username"], ["label", "Nombre", 3, "required", "control", "isInline"], ["formControlName", "nombre"], ["label", "Apellido", 3, "required", "control", "isInline"], ["formControlName", "apellido"], ["label", "Password", 3, "required", "control", "isInline", "patternError"], ["formControlName", "password"], ["label", "Repite Password", 3, "required", "control", "isInline", "patternError"], ["formControlName", "passwordRepeat"], [1, "error"], [1, "app-page__footer"], ["type", "submit"], [4, "ngIf"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Registro de Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function RegistrationComponent_Template_form_submit_4_listener() { return ctx.onSubmit(); })("keyup.enter", function RegistrationComponent_Template_form_keyup_enter_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "app-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "app-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-password", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "app-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-password", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " El password no concuerda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "app-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, RegistrationComponent_app_spinner_23_Template, 1, 0, "app-spinner", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.form.controls.email)("isInline", false)("patternError", ctx.regexErrors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.form.controls.username)("isInline", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.form.controls.nombre)("isInline", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.form.controls.apellido)("isInline", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.form.controls.password)("isInline", false)("patternError", ctx.regexErrors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("required", true)("control", ctx.form.controls.passwordRepeat)("isInline", false)("patternError", ctx.regexErrors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("error_active", ctx.form.hasError("repeat"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 25, ctx.loading$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_controls_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__.FormFieldComponent, _shared_controls_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_controls_password_password_component__WEBPACK_IMPORTED_MODULE_4__.PasswordComponent, _shared_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_indicators_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".app-page[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n.error[_ngcontent-%COMP%] {\n  opacity: 0;\n  font-size: 12px;\n  color: #B00020;\n  padding: 4px 0 16px 0;\n}\n\n.error_active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNDTU07RURMTixxQkFBQTtBQURGOztBQUdFO0VBQ0UsVUFBQTtBQURKIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvY29sb3JzXCI7XHJcblxyXG4uYXBwLXBhZ2Uge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICRlcnJvcjtcclxuICBwYWRkaW5nOiA0cHggMCAxNnB4IDA7XHJcblxyXG4gICZfYWN0aXZle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG59XHJcbiIsIiRiYXNlOiAjZmFmYWZhO1xuJGJhc2UtZGFyazogI2UwZTBlMDtcbiRiYXNlLWxpZ2h0OiAjZmZmZmZmO1xuJG9uLWJhc2U6ICMwMDAwMDA7XG5cbiRwcmltYXJ5OiAjMDI3N2JkO1xuJHByaW1hcnktZGFyazogIzAwNGM4YztcbiRwcmltYXJ5LWxpZ2h0OiAjNThhNWYwO1xuJG9uLXByaW1hcnk6ICNmZmZmZmY7XG5cbiRzZWNvbmRhcnk6ICNmNDQzMzY7XG4kc2Vjb25kYXJ5LWRhcms6ICNiOTAwMDc7XG4kc2Vjb25kYXJ5LWxpZ2h0OiAjZmY3OTVkO1xuJG9uLXNlY29uZGFyeTogI2ZmZmZmZjtcblxuJGVycm9yOiAjQjAwMDIwO1xuJG9uLWVycm9yOiAjZmZmZmZmO1xuXG4kc3VjY2VzczogIzk5YWEwMDtcbiRvbi1zdWNjZXNzOiAjZmZmZmZmO1xuXG5cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 8734:
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/pages/registration/registration.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationModule": () => (/* binding */ RegistrationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-routing.module */ 8642);
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.component */ 5868);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/controls */ 7150);
/* harmony import */ var _app_shared_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/buttons */ 2341);
/* harmony import */ var _app_shared_indicators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/indicators */ 9299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class RegistrationModule {
}
RegistrationModule.ɵfac = function RegistrationModule_Factory(t) { return new (t || RegistrationModule)(); };
RegistrationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RegistrationModule });
RegistrationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.FormFieldModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.InputModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.PasswordModule,
            _app_shared_buttons__WEBPACK_IMPORTED_MODULE_3__.ButtonModule,
            _app_shared_indicators__WEBPACK_IMPORTED_MODULE_4__.SpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RegistrationModule, { declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_1__.RegistrationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationRoutingModule,
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
//# sourceMappingURL=734.e7af68d0d1310e05fa14.js.map