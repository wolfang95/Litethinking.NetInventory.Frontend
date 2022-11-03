"use strict";
(self["webpackChunkecommerce_angular_app"] = self["webpackChunkecommerce_angular_app"] || []).push([[173],{

/***/ 9351:
/*!**********************************************************************!*\
  !*** ./src/app/pages/company/pages/update-product/services/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapperService": () => (/* reexport safe */ _mapper_mapper_service__WEBPACK_IMPORTED_MODULE_0__.MapperService)
/* harmony export */ });
/* harmony import */ var _mapper_mapper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper/mapper.service */ 2428);



/***/ }),

/***/ 2428:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/company/pages/update-product/services/mapper/mapper.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapperService": () => (/* binding */ MapperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class MapperService {
    constructor() { }
    productToForm(product) {
        const productForm = {
            nombre: product.nombre,
            descripcion: product.descripcion,
            photoURL: product.imagen,
            categoria: product.categoriaId,
            marca: product.marcaId,
            precio: product.precio,
            stock: product.stock
        };
        return productForm;
    }
}
MapperService.ɵfac = function MapperService_Factory(t) { return new (t || MapperService)(); };
MapperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapperService, factory: MapperService.ɵfac });


/***/ }),

/***/ 3917:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/company/pages/update-product/update-product-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductRoutingModule": () => (/* binding */ UpdateProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _update_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-product.component */ 1972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _update_product_component__WEBPACK_IMPORTED_MODULE_0__.UpdateProductComponent
    }
];
class UpdateProductRoutingModule {
}
UpdateProductRoutingModule.ɵfac = function UpdateProductRoutingModule_Factory(t) { return new (t || UpdateProductRoutingModule)(); };
UpdateProductRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UpdateProductRoutingModule });
UpdateProductRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UpdateProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1972:
/*!********************************************************************************!*\
  !*** ./src/app/pages/company/pages/update-product/update-product.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductComponent": () => (/* binding */ UpdateProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_store_dictionaries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/store/dictionaries */ 9697);
/* harmony import */ var _store_save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/save */ 6660);
/* harmony import */ var _store_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/form */ 7853);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _app_shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/utils */ 2846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ 9351);
/* harmony import */ var _shared_layouts_user_photo_user_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/layouts/user-photo/user-photo.component */ 5355);
/* harmony import */ var _shared_popups_files_upload_files_upload_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/popups/files-upload/files-upload.directive */ 5825);
/* harmony import */ var _shared_controls_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/controls/form-field/form-field.component */ 7195);
/* harmony import */ var _shared_controls_input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/controls/input/input.component */ 6840);
/* harmony import */ var _shared_controls_select_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/controls/select/select.component */ 8860);
/* harmony import */ var _shared_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/buttons/button/button.component */ 5667);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_indicators_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/indicators/spinner/spinner.component */ 3733);



















function UpdateProductComponent_app_spinner_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-spinner");
} }
const _c0 = function () { return []; };
class UpdateProductComponent {
    constructor(store, fb, router, mapperService, cdr) {
        this.store = store;
        this.fb = fb;
        this.router = router;
        this.mapperService = mapperService;
        this.cdr = cdr;
        this.regexErrors = _app_shared_utils__WEBPACK_IMPORTED_MODULE_3__.regexErrors;
    }
    ngOnInit() {
        this.loading$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.select)(_store_save__WEBPACK_IMPORTED_MODULE_1__.getLoading));
        this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.select)(_app_store_dictionaries__WEBPACK_IMPORTED_MODULE_0__.getDictionaries))
            .subscribe((data) => {
            if (data) {
                this.categories = data.categories.controlItems;
                this.marca = data.marca.controlItems;
                this.controls = {
                    categoria: {
                        items: this.categories,
                        changed: () => { }
                    },
                    marca: {
                        items: this.marca,
                        changed: () => { }
                    },
                };
            }
        });
        this.form = this.fb.group({
            nombre: [null, {
                    updateOn: 'blur', validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required
                    ]
                }],
            descripcion: [null, {
                    updateOn: 'blur', validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required
                    ]
                }],
            stock: [null, {
                    updateOn: 'blur', validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__.regex.number)
                    ]
                }],
            precio: [null, {
                    updateOn: 'blur', validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__.regex.number)
                    ]
                }],
            photoURL: [null],
            categoria: null,
            marca: null
        });
        this.controls = {
            categoria: {
                items: this.categories,
                changed: () => { }
            },
            marca: {
                items: this.marca,
                changed: () => { }
            },
        };
        this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.select)(_store_form__WEBPACK_IMPORTED_MODULE_2__.getFormState))
            .subscribe(productForm => {
            if (productForm.nombre) {
                const value = productForm;
                this.form.patchValue(value);
                this.form.updateValueAndValidity();
                this.cdr.detectChanges();
            }
        });
        // leer la data del producto que esta en formato ProductResponse -> Store Redux
        // Vuelve a setearlo al Store Redux ---> ProductForm
        this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.select)(_store_save__WEBPACK_IMPORTED_MODULE_1__.getProduct))
            .subscribe(product => {
            if (product) {
                const form = this.mapperService.productToForm(product);
                this.store.dispatch(new _store_form__WEBPACK_IMPORTED_MODULE_2__.Set(form));
            }
        });
        this.router.params.subscribe((param) => {
            const id = param.id;
            this.store.dispatch(new _store_save__WEBPACK_IMPORTED_MODULE_1__.Read(id));
        });
    }
    onSubmit() {
        if (this.form.valid) {
            this.loading$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.select)(_store_save__WEBPACK_IMPORTED_MODULE_1__.getLoading));
            this.router.params.subscribe((param) => {
                const value = this.form.value;
                const product = {
                    id: param.id,
                    nombre: value.nombre,
                    descripcion: value.descripcion,
                    categoriaId: value.categoria,
                    marcaId: value.marca,
                    precio: value.precio,
                    stock: value.stock,
                    imagen: value.photoURL
                };
                const id = param.id;
                this.store.dispatch(new _store_save__WEBPACK_IMPORTED_MODULE_1__.Update(id, product));
            });
        }
        else {
            (0,_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__.markFormGroupTouched)(this.form);
        }
    }
    onFilesChanged(url) {
        if (url) {
            this.form.controls.photoURL.setValue(url);
        }
    }
}
UpdateProductComponent.ɵfac = function UpdateProductComponent_Factory(t) { return new (t || UpdateProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__.MapperService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef)); };
UpdateProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: UpdateProductComponent, selectors: [["app-update-product"]], decls: 28, vars: 29, consts: [[1, "app-page"], [1, "app-page__header"], ["autocomplete", "off", 3, "formGroup", "submit"], [1, "app-page__content"], [1, "personal__photo"], [1, "photo"], [1, "photo__img", 3, "photoURL"], ["appFilesUpload", "", 1, "app-a", 3, "changed"], ["label", "Nombre", 3, "required", "control", "isInline"], ["formControlName", "nombre"], ["label", "Descripcion", 3, "required", "control", "isInline"], ["formControlName", "descripcion"], ["label", "Stock", 3, "required", "control", "isInline", "patternError"], ["formControlName", "stock"], ["label", "Precio", 3, "required", "control", "isInline", "patternError"], ["formControlName", "precio"], ["label", "Categoria", 3, "required", "control", "isInline"], ["formControlName", "categoria", 3, "items"], ["label", "Marca", 3, "required", "control", "isInline"], ["formControlName", "marca", 3, "items"], [1, "app-page__footer"], ["type", "submit"], [4, "ngIf"]], template: function UpdateProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Editar Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("submit", function UpdateProductComponent_Template_form_submit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "app-user-photo", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("changed", function UpdateProductComponent_Template_div_changed_9_listener($event) { return ctx.onFilesChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Subir Imagen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "app-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "app-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "app-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "app-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "app-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "app-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "app-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "app-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "app-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "app-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "app-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, UpdateProductComponent_app_spinner_26_Template, 1, 0, "app-spinner", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("photoURL", ctx.form.controls.photoURL.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("required", true)("control", ctx.form.controls.nombre)("isInline", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("required", true)("control", ctx.form.controls.descripcion)("isInline", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("required", true)("control", ctx.form.controls.stock)("isInline", false)("patternError", ctx.regexErrors.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("required", true)("control", ctx.form.controls.precio)("isInline", false)("patternError", ctx.regexErrors.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("required", true)("control", ctx.form.controls.categoria)("isInline", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.controls.categoria.items ? ctx.controls.categoria.items : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("required", true)("control", ctx.form.controls.marca)("isInline", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.controls.marca.items ? ctx.controls.marca.items : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 25, ctx.loading$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _shared_layouts_user_photo_user_photo_component__WEBPACK_IMPORTED_MODULE_5__.UserPhotoComponent, _shared_popups_files_upload_files_upload_directive__WEBPACK_IMPORTED_MODULE_6__.FilesUploadDirective, _shared_controls_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_7__.FormFieldComponent, _shared_controls_input_input_component__WEBPACK_IMPORTED_MODULE_8__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _shared_controls_select_select_component__WEBPACK_IMPORTED_MODULE_9__.SelectComponent, _shared_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_10__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_indicators_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__.SpinnerComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe], styles: [".personal__photo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.photo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  align-content: center;\n  padding-bottom: 20px;\n  flex-direction: column;\n  border-radius: 0%;\n  width: 150px;\n  height: 150px;\n  background: white;\n}\n\n.photo__img[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.app-a[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBR0U7RUFDRSxtQkFBQTtBQURKOztBQUtBO0VBQ0UsU0FBQTtBQUZGIiwiZmlsZSI6InVwZGF0ZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbmFsIHtcclxuICAmX19waG90byB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ucGhvdG8ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFwcC1hIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 4173:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/company/pages/update-product/update-product.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductModule": () => (/* binding */ UpdateProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _update_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-product-routing.module */ 3917);
/* harmony import */ var _update_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product.component */ 1972);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/controls */ 7150);
/* harmony import */ var _app_shared_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/buttons */ 2341);
/* harmony import */ var _app_shared_indicators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/indicators */ 9299);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ 1679);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ 9351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);











class UpdateProductModule {
}
UpdateProductModule.ɵfac = function UpdateProductModule_Factory(t) { return new (t || UpdateProductModule)(); };
UpdateProductModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: UpdateProductModule });
UpdateProductModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _services__WEBPACK_IMPORTED_MODULE_6__.MapperService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _update_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateProductRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.FormFieldModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.InputModule,
            _app_shared_buttons__WEBPACK_IMPORTED_MODULE_3__.ButtonModule,
            _app_shared_indicators__WEBPACK_IMPORTED_MODULE_4__.SpinnerModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_5__.PopupsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_5__.UserPhotoModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.SelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](UpdateProductModule, { declarations: [_update_product_component__WEBPACK_IMPORTED_MODULE_1__.UpdateProductComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _update_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateProductRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.FormFieldModule,
        _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.InputModule,
        _app_shared_buttons__WEBPACK_IMPORTED_MODULE_3__.ButtonModule,
        _app_shared_indicators__WEBPACK_IMPORTED_MODULE_4__.SpinnerModule,
        _app_shared__WEBPACK_IMPORTED_MODULE_5__.PopupsModule,
        _app_shared__WEBPACK_IMPORTED_MODULE_5__.UserPhotoModule,
        _app_shared_controls__WEBPACK_IMPORTED_MODULE_2__.SelectModule] }); })();


/***/ }),

/***/ 3321:
/*!*********************************************************!*\
  !*** ./src/app/pages/company/store/form/form.models.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4854:
/*!************************************************************!*\
  !*** ./src/app/pages/company/store/form/form.selectors.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormState": () => (/* binding */ getFormState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ 2694);


const getFormState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_index__WEBPACK_IMPORTED_MODULE_0__.getProductState, (state) => state.form);


/***/ }),

/***/ 7853:
/*!***************************************************!*\
  !*** ./src/app/pages/company/store/form/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clear": () => (/* reexport safe */ _form_actions__WEBPACK_IMPORTED_MODULE_0__.Clear),
/* harmony export */   "Set": () => (/* reexport safe */ _form_actions__WEBPACK_IMPORTED_MODULE_0__.Set),
/* harmony export */   "Types": () => (/* reexport safe */ _form_actions__WEBPACK_IMPORTED_MODULE_0__.Types),
/* harmony export */   "Update": () => (/* reexport safe */ _form_actions__WEBPACK_IMPORTED_MODULE_0__.Update),
/* harmony export */   "reducer": () => (/* reexport safe */ _form_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   "getFormState": () => (/* reexport safe */ _form_selectors__WEBPACK_IMPORTED_MODULE_2__.getFormState)
/* harmony export */ });
/* harmony import */ var _form_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.actions */ 699);
/* harmony import */ var _form_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.reducer */ 2262);
/* harmony import */ var _form_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.selectors */ 4854);
/* harmony import */ var _form_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.models */ 3321);






/***/ })

}]);
//# sourceMappingURL=173.bcf27a4b632757ae55bd.js.map