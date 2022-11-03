"use strict";
(self["webpackChunkecommerce_angular_app"] = self["webpackChunkecommerce_angular_app"] || []).push([[245],{

/***/ 6964:
/*!*********************************************************!*\
  !*** ./src/app/pages/company/product-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRoutingModule": () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: 'new',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(415), __webpack_require__.e(679), __webpack_require__.e(592), __webpack_require__.e(675)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/new-product/new-product.module */ 8675)).then(m => m.NewProductModule)
    },
    {
        path: ':id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(415), __webpack_require__.e(679), __webpack_require__.e(592), __webpack_require__.e(173)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-product/update-product.module */ 4173)).then(m => m.UpdateProductModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];
class ProductRoutingModule {
}
ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); };
ProductRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 9245:
/*!*************************************************!*\
  !*** ./src/app/pages/company/product.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 6964);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 275);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ 2694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);








class ProductModule {
}
ProductModule.ɵfac = function ProductModule_Factory(t) { return new (t || ProductModule)(); };
ProductModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forFeature('product', _store__WEBPACK_IMPORTED_MODULE_1__.reducers),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forFeature(_store__WEBPACK_IMPORTED_MODULE_1__.effects)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 699:
/*!**********************************************************!*\
  !*** ./src/app/pages/company/store/form/form.actions.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Types": () => (/* binding */ Types),
/* harmony export */   "Set": () => (/* binding */ Set),
/* harmony export */   "Update": () => (/* binding */ Update),
/* harmony export */   "Clear": () => (/* binding */ Clear)
/* harmony export */ });
var Types;
(function (Types) {
    Types["SET"] = "[Product] [Form] Set";
    Types["UPDATE"] = "[Product] [Form] Update";
    Types["CLEAR"] = "[Product] [Form] Clear";
})(Types || (Types = {}));
class Set {
    constructor(form) {
        this.form = form;
        this.type = Types.SET;
    }
}
class Update {
    constructor(changes) {
        this.changes = changes;
        this.type = Types.UPDATE;
    }
}
class Clear {
    constructor() {
        this.type = Types.CLEAR;
    }
}


/***/ }),

/***/ 2262:
/*!**********************************************************!*\
  !*** ./src/app/pages/company/store/form/form.reducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _form_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.actions */ 699);

const initialState = {
    nombre: null,
    descripcion: null,
    categoria: null,
    marca: null,
    photoURL: null,
    precio: null,
    stock: null
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _form_actions__WEBPACK_IMPORTED_MODULE_0__.Types.SET: {
            return Object.assign(Object.assign({}, state), action.form);
        }
        case _form_actions__WEBPACK_IMPORTED_MODULE_0__.Types.UPDATE: {
            return Object.assign(Object.assign({}, state), action.changes);
        }
        case _form_actions__WEBPACK_IMPORTED_MODULE_0__.Types.CLEAR: {
            return Object.assign({}, initialState);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ 2694:
/*!**********************************************!*\
  !*** ./src/app/pages/company/store/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "effects": () => (/* binding */ effects),
/* harmony export */   "getProductState": () => (/* binding */ getProductState)
/* harmony export */ });
/* harmony import */ var _save_save_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.effects */ 334);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _save_save_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save/save.reducer */ 7361);
/* harmony import */ var _form_form_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.reducer */ 2262);




const reducers = {
    form: _form_form_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
    list: _save_save_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer
};
const effects = [
    _save_save_effects__WEBPACK_IMPORTED_MODULE_0__.ListEffects
];
const getProductState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createFeatureSelector)('product');


/***/ }),

/***/ 4928:
/*!**********************************************************!*\
  !*** ./src/app/pages/company/store/save/save.actions.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Types": () => (/* binding */ Types),
/* harmony export */   "Create": () => (/* binding */ Create),
/* harmony export */   "CreateSuccess": () => (/* binding */ CreateSuccess),
/* harmony export */   "CreateError": () => (/* binding */ CreateError),
/* harmony export */   "Update": () => (/* binding */ Update),
/* harmony export */   "UpdateSuccess": () => (/* binding */ UpdateSuccess),
/* harmony export */   "UpdateError": () => (/* binding */ UpdateError),
/* harmony export */   "Read": () => (/* binding */ Read),
/* harmony export */   "ReadSuccess": () => (/* binding */ ReadSuccess),
/* harmony export */   "ReadError": () => (/* binding */ ReadError)
/* harmony export */ });
var Types;
(function (Types) {
    Types["CREATE"] = "[Product] Create: Start";
    Types["CREATE_SUCCESS"] = "[Product] Create: Success";
    Types["CREATE_ERROR"] = "[Product] Create: Error";
    Types["UPDATE"] = "[Product] Update: Start";
    Types["UPDATE_SUCCESS"] = "[Product] Update: Success";
    Types["UPDATE_ERROR"] = "[Product] Update: Error";
    Types["READ"] = "[Product] Read: Start";
    Types["READ_SUCCESS"] = "[Product] Read: Success";
    Types["READ_ERROR"] = "[Product] Read: Error";
})(Types || (Types = {}));
class Create {
    constructor(product) {
        this.product = product;
        this.type = Types.CREATE;
    }
}
class CreateSuccess {
    constructor(product) {
        this.product = product;
        this.type = Types.CREATE_SUCCESS;
    }
}
class CreateError {
    constructor(error) {
        this.error = error;
        this.type = Types.CREATE_ERROR;
    }
}
//UPDATE
class Update {
    constructor(id, product) {
        this.id = id;
        this.product = product;
        this.type = Types.UPDATE;
    }
}
class UpdateSuccess {
    constructor(product) {
        this.product = product;
        this.type = Types.UPDATE_SUCCESS;
    }
}
class UpdateError {
    constructor(error) {
        this.error = error;
        this.type = Types.UPDATE_ERROR;
    }
}
//get product por id
class Read {
    constructor(id) {
        this.id = id;
        this.type = Types.READ;
    }
}
class ReadSuccess {
    constructor(product) {
        this.product = product;
        this.type = Types.READ_SUCCESS;
    }
}
class ReadError {
    constructor(error) {
        this.error = error;
        this.type = Types.READ_ERROR;
    }
}


/***/ }),

/***/ 334:
/*!**********************************************************!*\
  !*** ./src/app/pages/company/store/save/save.effects.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListEffects": () => (/* binding */ ListEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 275);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 7599);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9005);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6913);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9349);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4864);
/* harmony import */ var _save_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save.actions */ 4928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);









class ListEffects {
    constructor(action, httpClient, router) {
        this.action = action;
        this.httpClient = httpClient;
        this.router = router;
        this.create = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.action.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_save_actions__WEBPACK_IMPORTED_MODULE_1__.Types.CREATE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((action) => action.product), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((request) => this.httpClient.post(`${_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/Producto`, request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)((product) => {
            this.router.navigate(['/shop']);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((product) => new _save_actions__WEBPACK_IMPORTED_MODULE_1__.CreateSuccess(product)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _save_actions__WEBPACK_IMPORTED_MODULE_1__.CreateError(err.message)))))));
        this.update = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.action.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_save_actions__WEBPACK_IMPORTED_MODULE_1__.Types.UPDATE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((action) => this.httpClient.put(`${_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/Producto/${action.id}`, action.product)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((product) => new _save_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateSuccess(product)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _save_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateError(err.message)))))));
        this.read = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.action.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_save_actions__WEBPACK_IMPORTED_MODULE_1__.Types.READ), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((action) => action.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((id) => this.httpClient.get(`${_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/Producto/${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((product) => new _save_actions__WEBPACK_IMPORTED_MODULE_1__.ReadSuccess(product)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _save_actions__WEBPACK_IMPORTED_MODULE_1__.ReadError(err.message)))))));
    }
}
ListEffects.ɵfac = function ListEffects_Factory(t) { return new (t || ListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router)); };
ListEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: ListEffects, factory: ListEffects.ɵfac });


/***/ }),

/***/ 7361:
/*!**********************************************************!*\
  !*** ./src/app/pages/company/store/save/save.reducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _save_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save.actions */ 4928);

const initialState = {
    product: null,
    loading: null,
    error: null
};
function reducer(state = initialState, action) {
    switch (action.type) {
        //CREATE
        case _save_actions__WEBPACK_IMPORTED_MODULE_0__.Types.CREATE: {
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        }
        case _save_actions__WEBPACK_IMPORTED_MODULE_0__.Types.CREATE_SUCCESS: {
            return Object.assign(Object.assign({}, state), { loading: false, error: null, product: action.product });
        }
        case _save_actions__WEBPACK_IMPORTED_MODULE_0__.Types.CREATE_ERROR: {
            return Object.assign(Object.assign({}, state), { loading: false, error: action.error, product: null });
        }
        //UPDATE
        case _save_actions__WEBPACK_IMPORTED_MODULE_0__.Types.UPDATE: {
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        }
        case _save_actions__WEBPACK_IMPORTED_MODULE_0__.Types.UPDATE_SUCCESS: {
            return Object.assign(Object.assign({}, state), { loading: false, error: null, product: action.product });
        }
        case _save_actions__WEBPACK_IMPORTED_MODULE_0__.Types.UPDATE_ERROR: {
            return Object.assign(Object.assign({}, state), { loading: false, error: action.error, product: null });
        }
        //READ
        case _save_actions__WEBPACK_IMPORTED_MODULE_0__.Types.READ: {
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        }
        case _save_actions__WEBPACK_IMPORTED_MODULE_0__.Types.READ_SUCCESS: {
            return Object.assign(Object.assign({}, state), { loading: false, error: null, product: action.product });
        }
        case _save_actions__WEBPACK_IMPORTED_MODULE_0__.Types.READ_ERROR: {
            return Object.assign(Object.assign({}, state), { loading: false, error: action.error, product: null });
        }
        default: {
            return state;
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=245.2c7a45eb44284d7aea25.js.map