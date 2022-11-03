"use strict";
(self["webpackChunkecommerce_angular_app"] = self["webpackChunkecommerce_angular_app"] || []).push([[415],{

/***/ 7085:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutofillMonitor": () => (/* binding */ AutofillMonitor),
/* harmony export */   "CdkAutofill": () => (/* binding */ CdkAutofill),
/* harmony export */   "CdkTextareaAutosize": () => (/* binding */ CdkTextareaAutosize),
/* harmony export */   "TextFieldModule": () => (/* binding */ TextFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9417);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4094);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Options to pass to the animationstart listener. */


const listenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({ passive: true });
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
class AutofillMonitor {
    constructor(_platform, _ngZone) {
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
    }
    monitor(elementOrRef) {
        if (!this._platform.isBrowser) {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
        }
        const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceElement)(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
            return info.subject;
        }
        const result = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        const cssClass = 'cdk-text-field-autofilled';
        const listener = ((event) => {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' &&
                !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);
                this._ngZone.run(() => result.next({ target: event.target, isAutofilled: true }));
            }
            else if (event.animationName === 'cdk-text-field-autofill-end' &&
                element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);
                this._ngZone.run(() => result.next({ target: event.target, isAutofilled: false }));
            }
        });
        this._ngZone.runOutsideAngular(() => {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
        });
        this._monitoredElements.set(element, {
            subject: result,
            unlisten: () => {
                element.removeEventListener('animationstart', listener, listenerOptions);
            }
        });
        return result;
    }
    stopMonitoring(elementOrRef) {
        const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceElement)(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');
            this._monitoredElements.delete(element);
        }
    }
    ngOnDestroy() {
        this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
    }
}
AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) { return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone)); };
AutofillMonitor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function AutofillMonitor_Factory() { return new AutofillMonitor(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone)); }, token: AutofillMonitor, providedIn: "root" });
AutofillMonitor.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AutofillMonitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone }]; }, null); })();
/** A directive that can be used to monitor the autofill state of an input. */
class CdkAutofill {
    constructor(_elementRef, _autofillMonitor) {
        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /** Emits when the autofill state of the element changes. */
        this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this._autofillMonitor
            .monitor(this._elementRef)
            .subscribe(event => this.cdkAutofill.emit(event));
    }
    ngOnDestroy() {
        this._autofillMonitor.stopMonitoring(this._elementRef);
    }
}
CdkAutofill.ɵfac = function CdkAutofill_Factory(t) { return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](AutofillMonitor)); };
CdkAutofill.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: CdkAutofill, selectors: [["", "cdkAutofill", ""]], outputs: { cdkAutofill: "cdkAutofill" } });
CdkAutofill.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },
    { type: AutofillMonitor }
];
CdkAutofill.propDecorators = {
    cdkAutofill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkAutofill, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
        args: [{
                selector: '[cdkAutofill]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef }, { type: AutofillMonitor }]; }, { cdkAutofill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Directive to automatically resize a textarea to fit its content. */
class CdkTextareaAutosize {
    constructor(_elementRef, _platform, _ngZone, 
    /** @breaking-change 11.0.0 make document required */
    document) {
        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._enabled = true;
        /**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */
        this._previousMinRows = -1;
        this._isViewInited = false;
        /** Handles `focus` and `blur` events. */
        this._handleFocusEvent = (event) => {
            this._hasFocus = event.type === 'focus';
        };
        this._document = document;
        this._textareaElement = this._elementRef.nativeElement;
    }
    /** Minimum amount of rows in the textarea. */
    get minRows() { return this._minRows; }
    set minRows(value) {
        this._minRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(value);
        this._setMinHeight();
    }
    /** Maximum amount of rows in the textarea. */
    get maxRows() { return this._maxRows; }
    set maxRows(value) {
        this._maxRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(value);
        this._setMaxHeight();
    }
    /** Whether autosizing is enabled or not */
    get enabled() { return this._enabled; }
    set enabled(value) {
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
        // Only act if the actual value changed. This specifically helps to not run
        // resizeToFitContent too early (i.e. before ngAfterViewInit)
        if (this._enabled !== value) {
            (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
        }
    }
    get placeholder() { return this._textareaElement.placeholder; }
    set placeholder(value) {
        this._cachedPlaceholderHeight = undefined;
        this._textareaElement.placeholder = value;
        this._cacheTextareaPlaceholderHeight();
    }
    /** Sets the minimum height of the textarea as determined by minRows. */
    _setMinHeight() {
        const minHeight = this.minRows && this._cachedLineHeight ?
            `${this.minRows * this._cachedLineHeight}px` : null;
        if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
        }
    }
    /** Sets the maximum height of the textarea as determined by maxRows. */
    _setMaxHeight() {
        const maxHeight = this.maxRows && this._cachedLineHeight ?
            `${this.maxRows * this._cachedLineHeight}px` : null;
        if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
        }
    }
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();
            this._ngZone.runOutsideAngular(() => {
                const window = this._getWindow();
                (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(window, 'resize')
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(16), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed))
                    .subscribe(() => this.resizeToFitContent(true));
                this._textareaElement.addEventListener('focus', this._handleFocusEvent);
                this._textareaElement.addEventListener('blur', this._handleFocusEvent);
            });
            this._isViewInited = true;
            this.resizeToFitContent(true);
        }
    }
    ngOnDestroy() {
        this._textareaElement.removeEventListener('focus', this._handleFocusEvent);
        this._textareaElement.removeEventListener('blur', this._handleFocusEvent);
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    _cacheTextareaLineHeight() {
        if (this._cachedLineHeight) {
            return;
        }
        // Use a clone element because we have to override some styles.
        let textareaClone = this._textareaElement.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this._textareaElement.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        this._textareaElement.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this._setMinHeight();
        this._setMaxHeight();
    }
    _measureScrollHeight() {
        const element = this._textareaElement;
        const previousMargin = element.style.marginBottom || '';
        const isFirefox = this._platform.FIREFOX;
        const needsMarginFiller = isFirefox && this._hasFocus;
        const measuringClass = isFirefox ?
            'cdk-textarea-autosize-measuring-firefox' :
            'cdk-textarea-autosize-measuring';
        // In some cases the page might move around while we're measuring the `textarea` on Firefox. We
        // work around it by assigning a temporary margin with the same height as the `textarea` so that
        // it occupies the same amount of space. See #23233.
        if (needsMarginFiller) {
            element.style.marginBottom = `${element.clientHeight}px`;
        }
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        element.classList.add(measuringClass);
        // The measuring class includes a 2px padding to workaround an issue with Chrome,
        // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).
        const scrollHeight = element.scrollHeight - 4;
        element.classList.remove(measuringClass);
        if (needsMarginFiller) {
            element.style.marginBottom = previousMargin;
        }
        return scrollHeight;
    }
    _cacheTextareaPlaceholderHeight() {
        if (!this._isViewInited || this._cachedPlaceholderHeight != undefined) {
            return;
        }
        if (!this.placeholder) {
            this._cachedPlaceholderHeight = 0;
            return;
        }
        const value = this._textareaElement.value;
        this._textareaElement.value = this._textareaElement.placeholder;
        this._cachedPlaceholderHeight = this._measureScrollHeight();
        this._textareaElement.value = value;
    }
    ngDoCheck() {
        if (this._platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */
    resizeToFitContent(force = false) {
        // If autosizing is disabled, just skip everything else
        if (!this._enabled) {
            return;
        }
        this._cacheTextareaLineHeight();
        this._cacheTextareaPlaceholderHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this._cachedLineHeight) {
            return;
        }
        const textarea = this._elementRef.nativeElement;
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
        }
        const scrollHeight = this._measureScrollHeight();
        const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        this._ngZone.runOutsideAngular(() => {
            if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
            }
            else {
                setTimeout(() => this._scrollToCaretPosition(textarea));
            }
        });
        this._previousValue = value;
        this._previousMinRows = this._minRows;
    }
    /**
     * Resets the textarea to its original size
     */
    reset() {
        // Do not try to change the textarea, if the initialHeight has not been determined yet
        // This might potentially remove styles when reset() is called before ngAfterViewInit
        if (this._initialHeight !== undefined) {
            this._textareaElement.style.height = this._initialHeight;
        }
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    _noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    /** Access injected document if available or fallback to global document reference */
    _getDocument() {
        return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        const doc = this._getDocument();
        return doc.defaultView || window;
    }
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */
    _scrollToCaretPosition(textarea) {
        const { selectionStart, selectionEnd } = textarea;
        // IE will throw an "Unspecified error" if we try to set the selection range after the
        // element has been removed from the DOM. Assert that the directive hasn't been destroyed
        // between the time we requested the animation frame and when it was executed.
        // Also note that we have to assert that the textarea is focused before we set the
        // selection range. Setting the selection range on a non-focused textarea will cause
        // it to receive focus on IE and Edge.
        if (!this._destroyed.isStopped && this._hasFocus) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
        }
    }
}
CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) { return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8)); };
CdkTextareaAutosize.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: CdkTextareaAutosize, selectors: [["textarea", "cdkTextareaAutosize", ""]], hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"], hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() { return ctx._noopInputHandler(); });
    } }, inputs: { minRows: ["cdkAutosizeMinRows", "minRows"], maxRows: ["cdkAutosizeMaxRows", "maxRows"], enabled: ["cdkTextareaAutosize", "enabled"], placeholder: "placeholder" }, exportAs: ["cdkTextareaAutosize"] });
CdkTextareaAutosize.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT,] }] }
];
CdkTextareaAutosize.propDecorators = {
    minRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['cdkAutosizeMinRows',] }],
    maxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['cdkAutosizeMaxRows',] }],
    enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['cdkTextareaAutosize',] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    _noopInputHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener, args: ['input',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
        args: [{
                selector: 'textarea[cdkTextareaAutosize]',
                exportAs: 'cdkTextareaAutosize',
                host: {
                    'class': 'cdk-textarea-autosize',
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    'rows': '1'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
            }] }]; }, { minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
            args: ['cdkAutosizeMinRows']
        }], maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
            args: ['cdkAutosizeMaxRows']
        }], enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
            args: ['cdkTextareaAutosize']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }], 
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    _noopInputHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
            args: ['input']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class TextFieldModule {
}
TextFieldModule.ɵfac = function TextFieldModule_Factory(t) { return new (t || TextFieldModule)(); };
TextFieldModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TextFieldModule });
TextFieldModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.PlatformModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TextFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
        args: [{
                declarations: [CdkAutofill, CdkTextareaAutosize],
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.PlatformModule],
                exports: [CdkAutofill, CdkTextareaAutosize]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TextFieldModule, { declarations: function () { return [CdkAutofill, CdkTextareaAutosize]; }, imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.PlatformModule]; }, exports: function () { return [CdkAutofill, CdkTextareaAutosize]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 5924:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS": () => (/* binding */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MAT_AUTOCOMPLETE_VALUE_ACCESSOR": () => (/* binding */ MAT_AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   "MatAutocomplete": () => (/* binding */ MatAutocomplete),
/* harmony export */   "MatAutocompleteModule": () => (/* binding */ MatAutocompleteModule),
/* harmony export */   "MatAutocompleteOrigin": () => (/* binding */ MatAutocompleteOrigin),
/* harmony export */   "MatAutocompleteSelectedEvent": () => (/* binding */ MatAutocompleteSelectedEvent),
/* harmony export */   "MatAutocompleteTrigger": () => (/* binding */ MatAutocompleteTrigger),
/* harmony export */   "_MatAutocompleteBase": () => (/* binding */ _MatAutocompleteBase),
/* harmony export */   "_MatAutocompleteOriginBase": () => (/* binding */ _MatAutocompleteOriginBase),
/* harmony export */   "_MatAutocompleteTriggerBase": () => (/* binding */ _MatAutocompleteTriggerBase),
/* harmony export */   "getMatAutocompleteMissingPanelError": () => (/* binding */ getMatAutocompleteMissingPanelError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9877);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 7159);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 7599);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 2027);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/portal */ 912);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 6477);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 9005);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 9349);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 6913);
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */








const _c0 = ["panel"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0._getPanelAriaLabelledby(formFieldId_r1));
} }
const _c1 = ["*"];
let _uniqueAutocompleteIdCounter = 0;
/** Event object that is emitted when an autocomplete option is selected. */
class MatAutocompleteSelectedEvent {
    constructor(
    /** Reference to the autocomplete panel that emitted the event. */
    source, 
    /** Option that was selected. */
    option) {
        this.source = source;
        this.option = option;
    }
}
// Boilerplate for applying mixins to MatAutocomplete.
/** @docs-private */
const _MatAutocompleteMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(class {
});
/** Injection token to be used to override the default options for `mat-autocomplete`. */
const MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-default-options', {
    providedIn: 'root',
    factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,
});
/** @docs-private */
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
    return { autoActiveFirstOption: false };
}
/** Base class with all of the `MatAutocomplete` functionality. */
class _MatAutocompleteBase extends _MatAutocompleteMixinBase {
    constructor(_changeDetectorRef, _elementRef, defaults, platform) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
        /** Whether the autocomplete panel should be visible, depending on option length. */
        this.showPanel = false;
        this._isOpen = false;
        /** Function that maps an option's control value to its display value in the trigger. */
        this.displayWith = null;
        /** Event that is emitted whenever an option from the list is selected. */
        this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event that is emitted when the autocomplete panel is opened. */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event that is emitted when the autocomplete panel is closed. */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits whenever an option is activated using the keyboard. */
        this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._classList = {};
        /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
        this.id = `mat-autocomplete-${_uniqueAutocompleteIdCounter++}`;
        // TODO(crisbeto): the problem that the `inertGroups` option resolves is only present on
        // Safari using VoiceOver. We should occasionally check back to see whether the bug
        // wasn't resolved in VoiceOver, and if it has, we can remove this and the `inertGroups`
        // option altogether.
        this.inertGroups = (platform === null || platform === void 0 ? void 0 : platform.SAFARI) || false;
        this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
    }
    /** Whether the autocomplete panel is open. */
    get isOpen() { return this._isOpen && this.showPanel; }
    /**
     * Whether the first option should be highlighted when the autocomplete panel is opened.
     * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
     */
    get autoActiveFirstOption() { return this._autoActiveFirstOption; }
    set autoActiveFirstOption(value) {
        this._autoActiveFirstOption = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /**
     * Takes classes set on the host mat-autocomplete element and applies them to the panel
     * inside the overlay container to allow for easy styling.
     */
    set classList(value) {
        if (value && value.length) {
            this._classList = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceStringArray)(value).reduce((classList, className) => {
                classList[className] = true;
                return classList;
            }, {});
        }
        else {
            this._classList = {};
        }
        this._setVisibilityClasses(this._classList);
        this._elementRef.nativeElement.className = '';
    }
    ngAfterContentInit() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.ActiveDescendantKeyManager(this.options).withWrap();
        this._activeOptionChanges = this._keyManager.change.subscribe(index => {
            this.optionActivated.emit({ source: this, option: this.options.toArray()[index] || null });
        });
        // Set the initial visibility state.
        this._setVisibility();
    }
    ngOnDestroy() {
        this._activeOptionChanges.unsubscribe();
    }
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     */
    _setScrollTop(scrollTop) {
        if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
        }
    }
    /** Returns the panel's scrollTop. */
    _getScrollTop() {
        return this.panel ? this.panel.nativeElement.scrollTop : 0;
    }
    /** Panel should hide itself when the option list is empty. */
    _setVisibility() {
        this.showPanel = !!this.options.length;
        this._setVisibilityClasses(this._classList);
        this._changeDetectorRef.markForCheck();
    }
    /** Emits the `select` event. */
    _emitSelectEvent(option) {
        const event = new MatAutocompleteSelectedEvent(this, option);
        this.optionSelected.emit(event);
    }
    /** Gets the aria-labelledby for the autocomplete panel. */
    _getPanelAriaLabelledby(labelId) {
        if (this.ariaLabel) {
            return null;
        }
        const labelExpression = labelId ? labelId + ' ' : '';
        return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
    }
    /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */
    _setVisibilityClasses(classList) {
        classList[this._visibleClass] = this.showPanel;
        classList[this._hiddenClass] = !this.showPanel;
    }
}
_MatAutocompleteBase.ɵfac = function _MatAutocompleteBase_Factory(t) { return new (t || _MatAutocompleteBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform)); };
_MatAutocompleteBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatAutocompleteBase, viewQuery: function _MatAutocompleteBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
    } }, inputs: { displayWith: "displayWith", autoActiveFirstOption: "autoActiveFirstOption", classList: ["class", "classList"], ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], panelWidth: "panelWidth" }, outputs: { optionSelected: "optionSelected", opened: "opened", closed: "closed", optionActivated: "optionActivated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatAutocompleteBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
_MatAutocompleteBase.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true },] }],
    panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['panel',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    displayWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    autoActiveFirstOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    panelWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    optionSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    optionActivated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['class',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform }]; }, { displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], optionSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], optionActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], autoActiveFirstOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['class']
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true }]
        }], panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['panel']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], panelWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
class MatAutocomplete extends _MatAutocompleteBase {
    constructor() {
        super(...arguments);
        this._visibleClass = 'mat-autocomplete-visible';
        this._hiddenClass = 'mat-autocomplete-hidden';
    }
}
MatAutocomplete.ɵfac = /*@__PURE__*/ function () { let ɵMatAutocomplete_BaseFactory; return function MatAutocomplete_Factory(t) { return (ɵMatAutocomplete_BaseFactory || (ɵMatAutocomplete_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocomplete)))(t || MatAutocomplete); }; }();
MatAutocomplete.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatAutocomplete, selectors: [["mat-autocomplete"]], contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
    } }, hostAttrs: [1, "mat-autocomplete"], inputs: { disableRipple: "disableRipple" }, exportAs: ["matAutocomplete"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 1, vars: 0, consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]], template: function MatAutocomplete_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 4, "ng-template");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"], encapsulation: 2, changeDetection: 0 });
MatAutocomplete.propDecorators = {
    optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, { descendants: true },] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocomplete, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-autocomplete',
                template: "<ng-template let-formFieldId=\"id\">\n  <div class=\"mat-autocomplete-panel\"\n       role=\"listbox\"\n       [id]=\"id\"\n       [attr.aria-label]=\"ariaLabel || null\"\n       [attr.aria-labelledby]=\"_getPanelAriaLabelledby(formFieldId)\"\n       [ngClass]=\"_classList\"\n       #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                exportAs: 'matAutocomplete',
                inputs: ['disableRipple'],
                host: {
                    'class': 'mat-autocomplete'
                },
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }
                ],
                styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"]
            }]
    }], null, { optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, { descendants: true }]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Base class containing all of the functionality for `MatAutocompleteOrigin`. */
class _MatAutocompleteOriginBase {
    constructor(
    /** Reference to the element on which the directive is applied. */
    elementRef) {
        this.elementRef = elementRef;
    }
}
_MatAutocompleteOriginBase.ɵfac = function _MatAutocompleteOriginBase_Factory(t) { return new (t || _MatAutocompleteOriginBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
_MatAutocompleteOriginBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatAutocompleteOriginBase });
_MatAutocompleteOriginBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteOriginBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */
class MatAutocompleteOrigin extends _MatAutocompleteOriginBase {
}
MatAutocompleteOrigin.ɵfac = /*@__PURE__*/ function () { let ɵMatAutocompleteOrigin_BaseFactory; return function MatAutocompleteOrigin_Factory(t) { return (ɵMatAutocompleteOrigin_BaseFactory || (ɵMatAutocompleteOrigin_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocompleteOrigin)))(t || MatAutocompleteOrigin); }; }();
MatAutocompleteOrigin.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatAutocompleteOrigin, selectors: [["", "matAutocompleteOrigin", ""]], exportAs: ["matAutocompleteOrigin"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matAutocompleteOrigin]',
                exportAs: 'matAutocompleteOrigin'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that determines the scroll handling while the autocomplete panel is open. */
const MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-scroll-strategy');
/** @docs-private */
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay],
    useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY,
};
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 */
const MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatAutocompleteTrigger),
    multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * @docs-private
 */
function getMatAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' +
        'Make sure that the id passed to the `matAutocomplete` is correct and that ' +
        'you\'re attempting to open it after the ngAfterContentInit hook.');
}
/** Base class with all of the `MatAutocompleteTrigger` functionality. */
class _MatAutocompleteTriggerBase {
    constructor(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler, _defaults) {
        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        this._defaults = _defaults;
        this._componentDestroyed = false;
        this._autocompleteDisabled = false;
        /** Whether or not the label state is being overridden. */
        this._manuallyFloatingLabel = false;
        /** Subscription to viewport size changes. */
        this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
        /**
         * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
         * closed autocomplete from being reopened if the user switches to another browser tab and then
         * comes back.
         */
        this._canOpenOnNextFocus = true;
        /** Stream of keyboard events that can close the panel. */
        this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        /**
         * Event handler for when the window is blurred. Needs to be an
         * arrow function in order to preserve the context.
         */
        this._windowBlurHandler = () => {
            // If the user blurred the window while the autocomplete is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            this._canOpenOnNextFocus =
                this._document.activeElement !== this._element.nativeElement || this.panelOpen;
        };
        /** `View -> model callback called when value changes` */
        this._onChange = () => { };
        /** `View -> model callback called when autocomplete has been touched` */
        this._onTouched = () => { };
        /**
         * Position of the autocomplete panel relative to the trigger element. A position of `auto`
         * will render the panel underneath the trigger if there is enough space for it to fit in
         * the viewport, otherwise the panel will be shown above it. If the position is set to
         * `above` or `below`, the panel will always be shown above or below the trigger. no matter
         * whether it fits completely in the viewport.
         */
        this.position = 'auto';
        /**
         * `autocomplete` attribute to be set on the input element.
         * @docs-private
         */
        this.autocompleteAttribute = 'off';
        this._overlayAttached = false;
        /** Stream of autocomplete option selections. */
        this.optionSelections = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.defer)(() => {
            if (this.autocomplete && this.autocomplete.options) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...this.autocomplete.options.map(option => option.onSelectionChange));
            }
            // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.
            return this._zone.onStable
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => this.optionSelections));
        });
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * Whether the autocomplete is disabled. When disabled, the element will
     * act as a regular input and the user won't be able to open the panel.
     */
    get autocompleteDisabled() { return this._autocompleteDisabled; }
    set autocompleteDisabled(value) {
        this._autocompleteDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    ngAfterViewInit() {
        const window = this._getWindow();
        if (typeof window !== 'undefined') {
            this._zone.runOutsideAngular(() => window.addEventListener('blur', this._windowBlurHandler));
        }
    }
    ngOnChanges(changes) {
        if (changes['position'] && this._positionStrategy) {
            this._setStrategyPositions(this._positionStrategy);
            if (this.panelOpen) {
                this._overlayRef.updatePosition();
            }
        }
    }
    ngOnDestroy() {
        const window = this._getWindow();
        if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this._windowBlurHandler);
        }
        this._viewportSubscription.unsubscribe();
        this._componentDestroyed = true;
        this._destroyPanel();
        this._closeKeyEventStream.complete();
    }
    /** Whether or not the autocomplete panel is open. */
    get panelOpen() {
        return this._overlayAttached && this.autocomplete.showPanel;
    }
    /** Opens the autocomplete suggestion panel. */
    openPanel() {
        this._attachOverlay();
        this._floatLabel();
    }
    /** Closes the autocomplete suggestion panel. */
    closePanel() {
        this._resetLabel();
        if (!this._overlayAttached) {
            return;
        }
        if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocomplete.closed.emit();
        }
        this.autocomplete._isOpen = this._overlayAttached = false;
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
            this._closingActionsSubscription.unsubscribe();
        }
        // Note that in some cases this can end up being called after the component is destroyed.
        // Add a check to ensure that we don't try to run change detection on a destroyed view.
        if (!this._componentDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            // This ensures that the label is reset when the
            // user clicks outside.
            this._changeDetectorRef.detectChanges();
        }
    }
    /**
     * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
     * within the viewport.
     */
    updatePosition() {
        if (this._overlayAttached) {
            this._overlayRef.updatePosition();
        }
    }
    /**
     * A stream of actions that should close the autocomplete panel, including
     * when an option is selected, on blur, and when TAB is pressed.
     */
    get panelClosingActions() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ?
            this._overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(() => this._overlayAttached)) :
            (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)()).pipe(
        // Normalize the output so we return a consistent type.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(event => event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionSelectionChange ? event : null));
    }
    /** The currently active option, coerced to MatOption type. */
    get activeOption() {
        if (this.autocomplete && this.autocomplete._keyManager) {
            return this.autocomplete._keyManager.activeItem;
        }
        return null;
    }
    /** Stream of clicks outside of the autocomplete panel. */
    _getOutsideClickStream() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this._document, 'click'), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this._document, 'auxclick'), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this._document, 'touchend'))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(event => {
            // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
            // fall back to check the first element in the path of the click event.
            const clickTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__._getEventTarget)(event);
            const formField = this._formField ? this._formField._elementRef.nativeElement : null;
            const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
            return this._overlayAttached && clickTarget !== this._element.nativeElement &&
                (!formField || !formField.contains(clickTarget)) &&
                (!customOrigin || !customOrigin.contains(clickTarget)) &&
                (!!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget));
        }));
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        Promise.resolve(null).then(() => this._setTriggerValue(value));
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this._element.nativeElement.disabled = isDisabled;
    }
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        // Prevent the default action on all escape key presses. This is here primarily to bring IE
        // in line with other browsers. By default, pressing escape on IE will cause it to revert
        // the input value to the one that it had on focus, however it won't dispatch any events
        // which means that the model value will be out of sync with the view.
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event)) {
            event.preventDefault();
        }
        if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ENTER && this.panelOpen) {
            this.activeOption._selectViaInteraction();
            this._resetActiveItem();
            event.preventDefault();
        }
        else if (this.autocomplete) {
            const prevActiveItem = this.autocomplete._keyManager.activeItem;
            const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.DOWN_ARROW;
            if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.TAB) {
                this.autocomplete._keyManager.onKeydown(event);
            }
            else if (isArrowKey && this._canOpen()) {
                this.openPanel();
            }
            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
            }
        }
    }
    _handleInput(event) {
        let target = event.target;
        let value = target.value;
        // Based on `NumberValueAccessor` from forms.
        if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
        }
        // If the input has a placeholder, IE will fire the `input` event on page load,
        // focus and blur, in addition to when the user actually changed the value. To
        // filter out all of the extra events, we save the value on focus and between
        // `input` events, and we check whether it changed.
        // See: https://connect.microsoft.com/IE/feedback/details/885747/
        if (this._previousValue !== value) {
            this._previousValue = value;
            this._onChange(value);
            if (this._canOpen() && this._document.activeElement === event.target) {
                this.openPanel();
            }
        }
    }
    _handleFocus() {
        if (!this._canOpenOnNextFocus) {
            this._canOpenOnNextFocus = true;
        }
        else if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;
            this._attachOverlay();
            this._floatLabel(true);
        }
    }
    /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @param shouldAnimate Whether the label should be animated when it is floated.
     */
    _floatLabel(shouldAnimate = false) {
        if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
                this._formField._animateAndLockLabel();
            }
            else {
                this._formField.floatLabel = 'always';
            }
            this._manuallyFloatingLabel = true;
        }
    }
    /** If the label has been manually elevated, return it to its normal state. */
    _resetLabel() {
        if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
        }
    }
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */
    _subscribeToClosingActions() {
        const firstStable = this._zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1));
        const optionChanges = this.autocomplete.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(() => this._positionStrategy.reapplyLastPosition()), 
        // Defer emitting to the stream until the next tick, because changing
        // bindings in here will cause "changed after checked" errors.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.delay)(0));
        // When the zone is stable initially, and when the option list changes...
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(firstStable, optionChanges)
            .pipe(
        // create a new stream of panelClosingActions, replacing any previous streams
        // that were created, and flatten it so our stream only emits closing events...
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => {
            const wasOpen = this.panelOpen;
            this._resetActiveItem();
            this.autocomplete._setVisibility();
            if (this.panelOpen) {
                this._overlayRef.updatePosition();
                // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                // event, because we may not have emitted it when the panel was attached. This
                // can happen if the users opens the panel and there are no options, but the
                // options come in slightly later or as a result of the value changing.
                if (wasOpen !== this.panelOpen) {
                    this.autocomplete.opened.emit();
                }
            }
            return this.panelClosingActions;
        }), 
        // when the first closing event occurs...
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1))
            // set the value, close the panel, and complete.
            .subscribe(event => this._setValueAndClose(event));
    }
    /** Destroys the autocomplete suggestion panel. */
    _destroyPanel() {
        if (this._overlayRef) {
            this.closePanel();
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    }
    _setTriggerValue(value) {
        const toDisplay = this.autocomplete && this.autocomplete.displayWith ?
            this.autocomplete.displayWith(value) :
            value;
        // Simply falling back to an empty string if the display value is falsy does not work properly.
        // The display value can also be the number zero and shouldn't fall back to an empty string.
        const inputValue = toDisplay != null ? toDisplay : '';
        // If it's used within a `MatFormField`, we should set it through the property so it can go
        // through change detection.
        if (this._formField) {
            this._formField._control.value = inputValue;
        }
        else {
            this._element.nativeElement.value = inputValue;
        }
        this._previousValue = inputValue;
    }
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    _setValueAndClose(event) {
        if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);
            this._setTriggerValue(event.source.value);
            this._onChange(event.source.value);
            this._element.nativeElement.focus();
            this.autocomplete._emitSelectEvent(event.source);
        }
        this.closePanel();
    }
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    _clearPreviousSelectedOption(skip) {
        this.autocomplete.options.forEach(option => {
            if (option !== skip && option.selected) {
                option.deselect();
            }
        });
    }
    _attachOverlay() {
        var _a;
        if (!this.autocomplete && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatAutocompleteMissingPanelError();
        }
        let overlayRef = this._overlayRef;
        if (!overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__.TemplatePortal(this.autocomplete.template, this._viewContainerRef, { id: (_a = this._formField) === null || _a === void 0 ? void 0 : _a.getLabelId() });
            overlayRef = this._overlay.create(this._getOverlayConfig());
            this._overlayRef = overlayRef;
            // Use the `keydownEvents` in order to take advantage of
            // the overlay event targeting provided by the CDK overlay.
            overlayRef.keydownEvents().subscribe(event => {
                // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event)) ||
                    (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.UP_ARROW && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event, 'altKey'))) {
                    this._resetActiveItem();
                    this._closeKeyEventStream.next();
                    // We need to stop propagation, otherwise the event will eventually
                    // reach the input itself and cause the overlay to be reopened.
                    event.stopPropagation();
                    event.preventDefault();
                }
            });
            this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
                if (this.panelOpen && overlayRef) {
                    overlayRef.updateSize({ width: this._getPanelWidth() });
                }
            });
        }
        else {
            // Update the trigger, panel width and direction, in case anything has changed.
            this._positionStrategy.setOrigin(this._getConnectedElement());
            overlayRef.updateSize({ width: this._getPanelWidth() });
        }
        if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
        }
        const wasOpen = this.panelOpen;
        this.autocomplete._setVisibility();
        this.autocomplete._isOpen = this._overlayAttached = true;
        // We need to do an extra `panelOpen` check in here, because the
        // autocomplete won't be shown if there are no options.
        if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
        }
    }
    _getOverlayConfig() {
        var _a;
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayConfig({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getPanelWidth(),
            direction: this._dir,
            panelClass: (_a = this._defaults) === null || _a === void 0 ? void 0 : _a.overlayPanelClass,
        });
    }
    _getOverlayPosition() {
        const strategy = this._overlay.position()
            .flexibleConnectedTo(this._getConnectedElement())
            .withFlexibleDimensions(false)
            .withPush(false);
        this._setStrategyPositions(strategy);
        this._positionStrategy = strategy;
        return strategy;
    }
    /** Sets the positions on a position strategy based on the directive's input state. */
    _setStrategyPositions(positionStrategy) {
        // Note that we provide horizontal fallback positions, even though by default the dropdown
        // width matches the input, because consumers can override the width. See #18854.
        const belowPositions = [
            { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
            { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }
        ];
        // The overlay edge connected to the trigger should have squared corners, while
        // the opposite end has rounded corners. We apply a CSS class to swap the
        // border-radius based on the overlay position.
        const panelClass = this._aboveClass;
        const abovePositions = [
            { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', panelClass },
            { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', panelClass }
        ];
        let positions;
        if (this.position === 'above') {
            positions = abovePositions;
        }
        else if (this.position === 'below') {
            positions = belowPositions;
        }
        else {
            positions = [...belowPositions, ...abovePositions];
        }
        positionStrategy.withPositions(positions);
    }
    _getConnectedElement() {
        if (this.connectedTo) {
            return this.connectedTo.elementRef;
        }
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
    }
    _getPanelWidth() {
        return this.autocomplete.panelWidth || this._getHostWidth();
    }
    /** Returns the width of the input element, so the panel width can match it. */
    _getHostWidth() {
        return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
    /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     */
    _resetActiveItem() {
        const autocomplete = this.autocomplete;
        if (autocomplete.autoActiveFirstOption) {
            // Note that we go through `setFirstItemActive`, rather than `setActiveItem(0)`, because
            // the former will find the next enabled option, if the first one is disabled.
            autocomplete._keyManager.setFirstItemActive();
        }
        else {
            autocomplete._keyManager.setActiveItem(-1);
        }
    }
    /** Determines whether the panel can be opened. */
    _canOpen() {
        const element = this._element.nativeElement;
        return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        var _a;
        return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
    }
    /** Scrolls to a particular option in the list. */
    _scrollToOption(index) {
        // Given that we are not actually focusing active options, we must manually adjust scroll
        // to reveal options below the fold. First, we find the offset of the option from the top
        // of the panel. If that offset is below the fold, the new scrollTop will be the offset -
        // the panel height + the option height, so the active option will be just visible at the
        // bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
        // will become the offset. If that offset is visible within the panel already, the scrollTop is
        // not adjusted.
        const autocomplete = this.autocomplete;
        const labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__._countGroupLabelsBeforeOption)(index, autocomplete.options, autocomplete.optionGroups);
        if (index === 0 && labelCount === 1) {
            // If we've got one group label before the option and we're at the top option,
            // scroll the list to the top. This is better UX than scrolling the list to the
            // top of the option, because it allows the user to read the top group's label.
            autocomplete._setScrollTop(0);
        }
        else if (autocomplete.panel) {
            const option = autocomplete.options.toArray()[index];
            if (option) {
                const element = option._getHostElement();
                const newScrollPosition = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__._getOptionScrollPosition)(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
                autocomplete._setScrollTop(newScrollPosition);
            }
        }
    }
}
_MatAutocompleteTriggerBase.ɵfac = function _MatAutocompleteTriggerBase_Factory(t) { return new (t || _MatAutocompleteTriggerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, 8)); };
_MatAutocompleteTriggerBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatAutocompleteTriggerBase, inputs: { position: ["matAutocompletePosition", "position"], autocompleteAttribute: ["autocomplete", "autocompleteAttribute"], autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"], autocomplete: ["matAutocomplete", "autocomplete"], connectedTo: ["matAutocompleteConnectedTo", "connectedTo"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
_MatAutocompleteTriggerBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT,] }] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] }
];
_MatAutocompleteTriggerBase.propDecorators = {
    autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocomplete',] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocompletePosition',] }],
    connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocompleteConnectedTo',] }],
    autocompleteAttribute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['autocomplete',] }],
    autocompleteDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocompleteDisabled',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteTriggerBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
            }] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }] }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompletePosition']
        }], autocompleteAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['autocomplete']
        }], autocompleteDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompleteDisabled']
        }], autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocomplete']
        }], connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompleteConnectedTo']
        }] }); })();
class MatAutocompleteTrigger extends _MatAutocompleteTriggerBase {
    constructor() {
        super(...arguments);
        this._aboveClass = 'mat-autocomplete-panel-above';
    }
}
MatAutocompleteTrigger.ɵfac = /*@__PURE__*/ function () { let ɵMatAutocompleteTrigger_BaseFactory; return function MatAutocompleteTrigger_Factory(t) { return (ɵMatAutocompleteTrigger_BaseFactory || (ɵMatAutocompleteTrigger_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocompleteTrigger)))(t || MatAutocompleteTrigger); }; }();
MatAutocompleteTrigger.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatAutocompleteTrigger, selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]], hostAttrs: [1, "mat-autocomplete-trigger"], hostVars: 7, hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() { return ctx._handleFocus(); })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() { return ctx._onTouched(); })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) { return ctx._handleInput($event); })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
    } }, exportAs: ["matAutocompleteTrigger"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `input[matAutocomplete], textarea[matAutocomplete]`,
                host: {
                    'class': 'mat-autocomplete-trigger',
                    '[attr.autocomplete]': 'autocompleteAttribute',
                    '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
                    '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
                    '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
                    '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
                    '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
                    '[attr.aria-haspopup]': '!autocompleteDisabled',
                    // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
                    // a little earlier. This avoids issues where IE delays the focusing of the input.
                    '(focusin)': '_handleFocus()',
                    '(blur)': '_onTouched()',
                    '(input)': '_handleInput($event)',
                    '(keydown)': '_handleKeydown($event)'
                },
                exportAs: 'matAutocompleteTrigger',
                providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatAutocompleteModule {
}
MatAutocompleteModule.ɵfac = function MatAutocompleteModule_Factory(t) { return new (t || MatAutocompleteModule)(); };
MatAutocompleteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatAutocompleteModule });
MatAutocompleteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule
                ],
                exports: [
                    MatAutocomplete,
                    MatAutocompleteTrigger,
                    MatAutocompleteOrigin,
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
                ],
                declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
                providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatAutocompleteModule, { declarations: function () { return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]; }, exports: function () { return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 2937:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateRange": () => (/* binding */ DateRange),
/* harmony export */   "DefaultMatCalendarRangeStrategy": () => (/* binding */ DefaultMatCalendarRangeStrategy),
/* harmony export */   "MAT_DATEPICKER_SCROLL_STRATEGY": () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY),
/* harmony export */   "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MAT_DATEPICKER_VALIDATORS": () => (/* binding */ MAT_DATEPICKER_VALIDATORS),
/* harmony export */   "MAT_DATEPICKER_VALUE_ACCESSOR": () => (/* binding */ MAT_DATEPICKER_VALUE_ACCESSOR),
/* harmony export */   "MAT_DATE_RANGE_SELECTION_STRATEGY": () => (/* binding */ MAT_DATE_RANGE_SELECTION_STRATEGY),
/* harmony export */   "MAT_RANGE_DATE_SELECTION_MODEL_FACTORY": () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   "MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER": () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   "MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY": () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   "MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER": () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   "MatCalendar": () => (/* binding */ MatCalendar),
/* harmony export */   "MatCalendarBody": () => (/* binding */ MatCalendarBody),
/* harmony export */   "MatCalendarCell": () => (/* binding */ MatCalendarCell),
/* harmony export */   "MatCalendarHeader": () => (/* binding */ MatCalendarHeader),
/* harmony export */   "MatDateRangeInput": () => (/* binding */ MatDateRangeInput),
/* harmony export */   "MatDateRangePicker": () => (/* binding */ MatDateRangePicker),
/* harmony export */   "MatDateSelectionModel": () => (/* binding */ MatDateSelectionModel),
/* harmony export */   "MatDatepicker": () => (/* binding */ MatDatepicker),
/* harmony export */   "MatDatepickerActions": () => (/* binding */ MatDatepickerActions),
/* harmony export */   "MatDatepickerApply": () => (/* binding */ MatDatepickerApply),
/* harmony export */   "MatDatepickerCancel": () => (/* binding */ MatDatepickerCancel),
/* harmony export */   "MatDatepickerContent": () => (/* binding */ MatDatepickerContent),
/* harmony export */   "MatDatepickerInput": () => (/* binding */ MatDatepickerInput),
/* harmony export */   "MatDatepickerInputEvent": () => (/* binding */ MatDatepickerInputEvent),
/* harmony export */   "MatDatepickerIntl": () => (/* binding */ MatDatepickerIntl),
/* harmony export */   "MatDatepickerModule": () => (/* binding */ MatDatepickerModule),
/* harmony export */   "MatDatepickerToggle": () => (/* binding */ MatDatepickerToggle),
/* harmony export */   "MatDatepickerToggleIcon": () => (/* binding */ MatDatepickerToggleIcon),
/* harmony export */   "MatEndDate": () => (/* binding */ MatEndDate),
/* harmony export */   "MatMonthView": () => (/* binding */ MatMonthView),
/* harmony export */   "MatMultiYearView": () => (/* binding */ MatMultiYearView),
/* harmony export */   "MatRangeDateSelectionModel": () => (/* binding */ MatRangeDateSelectionModel),
/* harmony export */   "MatSingleDateSelectionModel": () => (/* binding */ MatSingleDateSelectionModel),
/* harmony export */   "MatStartDate": () => (/* binding */ MatStartDate),
/* harmony export */   "MatYearView": () => (/* binding */ MatYearView),
/* harmony export */   "matDatepickerAnimations": () => (/* binding */ matDatepickerAnimations),
/* harmony export */   "yearsPerPage": () => (/* binding */ yearsPerPage),
/* harmony export */   "yearsPerRow": () => (/* binding */ yearsPerRow),
/* harmony export */   "ɵangular_material_src_material_datepicker_datepicker_a": () => (/* binding */ MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   "ɵangular_material_src_material_datepicker_datepicker_b": () => (/* binding */ MAT_CALENDAR_RANGE_STRATEGY_PROVIDER),
/* harmony export */   "ɵangular_material_src_material_datepicker_datepicker_c": () => (/* binding */ MatDatepickerBase),
/* harmony export */   "ɵangular_material_src_material_datepicker_datepicker_d": () => (/* binding */ MatDatepickerInputBase),
/* harmony export */   "ɵangular_material_src_material_datepicker_datepicker_e": () => (/* binding */ MAT_DATE_RANGE_INPUT_PARENT)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ 912);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 7159);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 7599);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7993);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6477);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 4742);




















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */











const _c0 = ["mat-calendar-body", ""];
function MatCalendarBody_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0.numCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
} }
function MatCalendarBody_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r4._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
} }
function MatCalendarBody_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarBody_tr_1_td_2_Template_td_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8._cellClicked(item_r6, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const colIndex_r7 = ctx.index;
    const rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r5._cellWidth)("padding-top", ctx_r5._cellPadding)("padding-bottom", ctx_r5._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r6.enabled)("mat-calendar-body-active", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7))("mat-calendar-body-range-start", ctx_r5._isRangeStart(item_r6.compareValue))("mat-calendar-body-range-end", ctx_r5._isRangeEnd(item_r6.compareValue))("mat-calendar-body-in-range", ctx_r5._isInRange(item_r6.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r5._isComparisonBridgeStart(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-bridge-end", ctx_r5._isComparisonBridgeEnd(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-start", ctx_r5._isComparisonStart(item_r6.compareValue))("mat-calendar-body-comparison-end", ctx_r5._isComparisonEnd(item_r6.compareValue))("mat-calendar-body-in-comparison-range", ctx_r5._isInComparisonRange(item_r6.compareValue))("mat-calendar-body-preview-start", ctx_r5._isPreviewStart(item_r6.compareValue))("mat-calendar-body-preview-end", ctx_r5._isPreviewEnd(item_r6.compareValue))("mat-calendar-body-in-preview", ctx_r5._isInPreview(item_r6.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r6.cssClasses)("tabindex", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r7)("aria-label", item_r6.ariaLabel)("aria-disabled", !item_r6.enabled || null)("aria-selected", ctx_r5._isSelected(item_r6.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r5._isSelected(item_r6.compareValue))("mat-calendar-body-comparison-identical", ctx_r5._isComparisonIdentical(item_r6.compareValue))("mat-calendar-body-today", ctx_r5.todayValue === item_r6.compareValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.displayValue, " ");
} }
function MatCalendarBody_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCalendarBody_tr_1_td_2_Template, 4, 46, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
} }
function MatMonthView_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "abbr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", day_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", day_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1.narrow);
} }
const _c1 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) { }
function MatCalendar_mat_month_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-month-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_month_view_2_Template_mat_month_view_activeDateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.activeDate = $event; })("_userSelection", function MatCalendar_mat_month_view_2_Template_mat_month_view__userSelection_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6._dateSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd);
} }
function MatCalendar_mat_year_view_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-year-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_activeDateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.activeDate = $event; })("monthSelected", function MatCalendar_mat_year_view_3_Template_mat_year_view_monthSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9._monthSelectedInYearView($event); })("selectedChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10._goToDateInView($event, "month"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate)("dateClass", ctx_r2.dateClass);
} }
function MatCalendar_mat_multi_year_view_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-multi-year-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.activeDate = $event; })("yearSelected", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_yearSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13._yearSelectedInMultiYearView($event); })("selectedChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14._goToDateInView($event, "year"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate)("dateClass", ctx_r3.dateClass);
} }
function MatDatepickerContent_ng_template_2_Template(rf, ctx) { }
const _c2 = ["button"];
function MatDatepickerToggle__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = [[["", "matDatepickerToggleIcon", ""]]];
const _c4 = ["[matDatepickerToggleIcon]"];
const _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
const _c6 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function createMissingDateImplError(provider) {
    return Error(`MatDatepicker: No provider found for ${provider}. You must import one of the following ` +
        `modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a ` +
        `custom implementation.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Datepicker data that requires internationalization. */
class MatDatepickerIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /** A label for the calendar popup (used by screen readers). */
        this.calendarLabel = 'Calendar';
        /** A label for the button used to open the calendar popup (used by screen readers). */
        this.openCalendarLabel = 'Open calendar';
        /** Label for the button used to close the calendar popup. */
        this.closeCalendarLabel = 'Close calendar';
        /** A label for the previous month button (used by screen readers). */
        this.prevMonthLabel = 'Previous month';
        /** A label for the next month button (used by screen readers). */
        this.nextMonthLabel = 'Next month';
        /** A label for the previous year button (used by screen readers). */
        this.prevYearLabel = 'Previous year';
        /** A label for the next year button (used by screen readers). */
        this.nextYearLabel = 'Next year';
        /** A label for the previous multi-year button (used by screen readers). */
        this.prevMultiYearLabel = 'Previous 24 years';
        /** A label for the next multi-year button (used by screen readers). */
        this.nextMultiYearLabel = 'Next 24 years';
        /** A label for the 'switch to month view' button (used by screen readers). */
        this.switchToMonthViewLabel = 'Choose date';
        /** A label for the 'switch to year view' button (used by screen readers). */
        this.switchToMultiYearViewLabel = 'Choose month and year';
    }
    /** Formats a range of years. */
    formatYearRange(start, end) {
        return `${start} \u2013 ${end}`;
    }
}
MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) { return new (t || MatDatepickerIntl)(); };
MatDatepickerIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MatDatepickerIntl_Factory() { return new MatDatepickerIntl(); }, token: MatDatepickerIntl, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
class MatCalendarCell {
    constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
        this.compareValue = compareValue;
        this.rawValue = rawValue;
    }
}
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
class MatCalendarBody {
    constructor(_elementRef, _ngZone) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /** The number of columns in the table. */
        this.numCols = 7;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /** Whether a range is being selected. */
        this.isRange = false;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */
        this.cellAspectRatio = 1;
        /** Start of the preview range. */
        this.previewStart = null;
        /** End of the preview range. */
        this.previewEnd = null;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when the preview has changed as a result of a user action. */
        this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Event handler for when the user enters an element
         * inside the calendar body (e.g. by hovering in or focus).
         */
        this._enterHandler = (event) => {
            if (this._skipNextFocus && event.type === 'focus') {
                this._skipNextFocus = false;
                return;
            }
            // We only need to hit the zone when we're selecting a range.
            if (event.target && this.isRange) {
                const cell = this._getCellFromElement(event.target);
                if (cell) {
                    this._ngZone.run(() => this.previewChange.emit({ value: cell.enabled ? cell : null, event }));
                }
            }
        };
        /**
         * Event handler for when the user's pointer leaves an element
         * inside the calendar body (e.g. by hovering out or blurring).
         */
        this._leaveHandler = (event) => {
            // We only need to hit the zone when we're selecting a range.
            if (this.previewEnd !== null && this.isRange) {
                // Only reset the preview end value when leaving cells. This looks better, because
                // we have a gap between the cells and the rows and we don't want to remove the
                // range just for it to show up again when the user moves a few pixels to the side.
                if (event.target && isTableCell(event.target)) {
                    this._ngZone.run(() => this.previewChange.emit({ value: null, event }));
                }
            }
        };
        _ngZone.runOutsideAngular(() => {
            const element = _elementRef.nativeElement;
            element.addEventListener('mouseenter', this._enterHandler, true);
            element.addEventListener('focus', this._enterHandler, true);
            element.addEventListener('mouseleave', this._leaveHandler, true);
            element.addEventListener('blur', this._leaveHandler, true);
        });
    }
    /** Called when a cell is clicked. */
    _cellClicked(cell, event) {
        if (cell.enabled) {
            this.selectedValueChange.emit({ value: cell.value, event });
        }
    }
    /** Returns whether a cell should be marked as selected. */
    _isSelected(value) {
        return this.startValue === value || this.endValue === value;
    }
    ngOnChanges(changes) {
        const columnChanges = changes['numCols'];
        const { rows, numCols } = this;
        if (changes['rows'] || columnChanges) {
            this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
        }
        if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
            this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
        }
        if (columnChanges || !this._cellWidth) {
            this._cellWidth = `${100 / numCols}%`;
        }
    }
    ngOnDestroy() {
        const element = this._elementRef.nativeElement;
        element.removeEventListener('mouseenter', this._enterHandler, true);
        element.removeEventListener('focus', this._enterHandler, true);
        element.removeEventListener('mouseleave', this._leaveHandler, true);
        element.removeEventListener('blur', this._leaveHandler, true);
    }
    /** Returns whether a cell is active. */
    _isActiveCell(rowIndex, colIndex) {
        let cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(movePreview = true) {
        this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => {
                const activeCell = this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
                if (activeCell) {
                    if (!movePreview) {
                        this._skipNextFocus = true;
                    }
                    activeCell.focus();
                }
            });
        });
    }
    /** Gets whether a value is the start of the main range. */
    _isRangeStart(value) {
        return isStart(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is the end of the main range. */
    _isRangeEnd(value) {
        return isEnd(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is within the currently-selected range. */
    _isInRange(value) {
        return isInRange(value, this.startValue, this.endValue, this.isRange);
    }
    /** Gets whether a value is the start of the comparison range. */
    _isComparisonStart(value) {
        return isStart(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Whether the cell is a start bridge cell between the main and comparison ranges. */
    _isComparisonBridgeStart(value, rowIndex, colIndex) {
        if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
            return false;
        }
        let previousCell = this.rows[rowIndex][colIndex - 1];
        if (!previousCell) {
            const previousRow = this.rows[rowIndex - 1];
            previousCell = previousRow && previousRow[previousRow.length - 1];
        }
        return previousCell && !this._isRangeEnd(previousCell.compareValue);
    }
    /** Whether the cell is an end bridge cell between the main and comparison ranges. */
    _isComparisonBridgeEnd(value, rowIndex, colIndex) {
        if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
            return false;
        }
        let nextCell = this.rows[rowIndex][colIndex + 1];
        if (!nextCell) {
            const nextRow = this.rows[rowIndex + 1];
            nextCell = nextRow && nextRow[0];
        }
        return nextCell && !this._isRangeStart(nextCell.compareValue);
    }
    /** Gets whether a value is the end of the comparison range. */
    _isComparisonEnd(value) {
        return isEnd(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Gets whether a value is within the current comparison range. */
    _isInComparisonRange(value) {
        return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
    }
    /**
     * Gets whether a value is the same as the start and end of the comparison range.
     * For context, the functions that we use to determine whether something is the start/end of
     * a range don't allow for the start and end to be on the same day, because we'd have to use
     * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
     * the regular range, because when it happens, the selected styles take over and still show where
     * the range would've been, however we don't have these selected styles for a comparison range.
     * This function is used to apply a class that serves the same purpose as the one for selected
     * dates, but it only applies in the context of a comparison range.
     */
    _isComparisonIdentical(value) {
        // Note that we don't need to null check the start/end
        // here, because the `value` will always be defined.
        return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
    }
    /** Gets whether a value is the start of the preview range. */
    _isPreviewStart(value) {
        return isStart(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is the end of the preview range. */
    _isPreviewEnd(value) {
        return isEnd(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is inside the preview range. */
    _isInPreview(value) {
        return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
    }
    /** Finds the MatCalendarCell that corresponds to a DOM node. */
    _getCellFromElement(element) {
        let cell;
        if (isTableCell(element)) {
            cell = element;
        }
        else if (isTableCell(element.parentNode)) {
            cell = element.parentNode;
        }
        if (cell) {
            const row = cell.getAttribute('data-mat-row');
            const col = cell.getAttribute('data-mat-col');
            if (row && col) {
                return this.rows[parseInt(row)][parseInt(col)];
            }
        }
        return null;
    }
}
MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) { return new (t || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
MatCalendarBody.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCalendarBody, selectors: [["", "mat-calendar-body", ""]], hostAttrs: [1, "mat-calendar-body"], inputs: { numCols: "numCols", activeCell: "activeCell", isRange: "isRange", cellAspectRatio: "cellAspectRatio", previewStart: "previewStart", previewEnd: "previewEnd", label: "label", rows: "rows", todayValue: "todayValue", startValue: "startValue", endValue: "endValue", labelMinRequiredCells: "labelMinRequiredCells", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedValueChange: "selectedValueChange", previewChange: "previewChange" }, exportAs: ["matCalendarBody"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c0, decls: 2, vars: 2, consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "mat-calendar-body-range-start", "mat-calendar-body-range-end", "mat-calendar-body-in-range", "mat-calendar-body-comparison-bridge-start", "mat-calendar-body-comparison-bridge-end", "mat-calendar-body-comparison-start", "mat-calendar-body-comparison-end", "mat-calendar-body-in-comparison-range", "mat-calendar-body-preview-start", "mat-calendar-body-preview-end", "mat-calendar-body-in-preview", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], [1, "mat-calendar-body-cell-preview"]], template: function MatCalendarBody_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"], encapsulation: 2, changeDetection: 0 });
MatCalendarBody.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
MatCalendarBody.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    todayValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    startValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    endValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelMinRequiredCells: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    numCols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    activeCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cellAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    previewStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    previewEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    previewChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendarBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[mat-calendar-body]',
                template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    This cell is purely decorative, but we can't put `aria-hidden` or `role=\"presentation\"` on it,\n    because it throws off the week days for the rest of the row on NVDA. The aspect ratio of the\n    table cells is maintained by setting the top and bottom padding as a percentage of the width\n    (a variant of the trick described here: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-calendar-body-cell\"\n      [ngClass]=\"item.cssClasses\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [attr.data-mat-row]=\"rowIndex\"\n      [attr.data-mat-col]=\"colIndex\"\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\n      [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\n      [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\n      [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\n      [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\n      [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      [attr.aria-selected]=\"_isSelected(item.compareValue)\"\n      (click)=\"_cellClicked(item, $event)\"\n      [style.width]=\"_cellWidth\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n      <div class=\"mat-calendar-body-cell-content mat-focus-indicator\"\n        [class.mat-calendar-body-selected]=\"_isSelected(item.compareValue)\"\n        [class.mat-calendar-body-comparison-identical]=\"_isComparisonIdentical(item.compareValue)\"\n        [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\n        {{item.displayValue}}\n      </div>\n      <div class=\"mat-calendar-body-cell-preview\"></div>\n  </td>\n</tr>\n",
                host: {
                    'class': 'mat-calendar-body'
                },
                exportAs: 'matCalendarBody',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, { numCols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], activeCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cellAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], previewStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], previewEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], previewChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], todayValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], startValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], endValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], labelMinRequiredCells: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/** Checks whether a node is a table cell element. */
function isTableCell(node) {
    return node.nodeName === 'TD';
}
/** Checks whether a value is the start of a range. */
function isStart(value, start, end) {
    return end !== null && start !== end && value < end && value === start;
}
/** Checks whether a value is the end of a range. */
function isEnd(value, start, end) {
    return start !== null && start !== end && value >= start && value === end;
}
/** Checks whether a value is inside of a range. */
function isInRange(value, start, end, rangeEnabled) {
    return rangeEnabled && start !== null && end !== null && start !== end &&
        value >= start && value <= end;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** A class representing a range of dates. */
class DateRange {
    constructor(
    /** The start date of the range. */
    start, 
    /** The end date of the range. */
    end) {
        this.start = start;
        this.end = end;
    }
}
/**
 * A selection model containing a date selection.
 * @docs-private
 */
class MatDateSelectionModel {
    constructor(
    /** The current selection. */
    selection, _adapter) {
        this.selection = selection;
        this._adapter = _adapter;
        this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /** Emits when the selection has changed. */
        this.selectionChanged = this._selectionChanged;
        this.selection = selection;
    }
    /**
     * Updates the current selection in the model.
     * @param value New selection that should be assigned.
     * @param source Object that triggered the selection change.
     */
    updateSelection(value, source) {
        const oldValue = this.selection;
        this.selection = value;
        this._selectionChanged.next({ selection: value, source, oldValue });
    }
    ngOnDestroy() {
        this._selectionChanged.complete();
    }
    _isValidDateInstance(date) {
        return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
    }
}
MatDateSelectionModel.ɵfac = function MatDateSelectionModel_Factory(t) { return new (t || MatDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter)); };
MatDateSelectionModel.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatDateSelectionModel, factory: MatDateSelectionModel.ɵfac });
MatDateSelectionModel.ctorParameters = () => [
    { type: undefined },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateSelectionModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }]; }, null); })();
/**
 * A selection model that contains a single date.
 * @docs-private
 */
class MatSingleDateSelectionModel extends MatDateSelectionModel {
    constructor(adapter) {
        super(null, adapter);
    }
    /**
     * Adds a date to the current selection. In the case of a single date selection, the added date
     * simply overwrites the previous selection
     */
    add(date) {
        super.updateSelection(date, this);
    }
    /** Checks whether the current selection is valid. */
    isValid() {
        return this.selection != null && this._isValidDateInstance(this.selection);
    }
    /**
     * Checks whether the current selection is complete. In the case of a single date selection, this
     * is true if the current selection is not null.
     */
    isComplete() {
        return this.selection != null;
    }
    /** Clones the selection model. */
    clone() {
        const clone = new MatSingleDateSelectionModel(this._adapter);
        clone.updateSelection(this.selection, this);
        return clone;
    }
}
MatSingleDateSelectionModel.ɵfac = function MatSingleDateSelectionModel_Factory(t) { return new (t || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter)); };
MatSingleDateSelectionModel.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatSingleDateSelectionModel, factory: MatSingleDateSelectionModel.ɵfac });
MatSingleDateSelectionModel.ctorParameters = () => [
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSingleDateSelectionModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }]; }, null); })();
/**
 * A selection model that contains a date range.
 * @docs-private
 */
class MatRangeDateSelectionModel extends MatDateSelectionModel {
    constructor(adapter) {
        super(new DateRange(null, null), adapter);
    }
    /**
     * Adds a date to the current selection. In the case of a date range selection, the added date
     * fills in the next `null` value in the range. If both the start and the end already have a date,
     * the selection is reset so that the given date is the new `start` and the `end` is null.
     */
    add(date) {
        let { start, end } = this.selection;
        if (start == null) {
            start = date;
        }
        else if (end == null) {
            end = date;
        }
        else {
            start = date;
            end = null;
        }
        super.updateSelection(new DateRange(start, end), this);
    }
    /** Checks whether the current selection is valid. */
    isValid() {
        const { start, end } = this.selection;
        // Empty ranges are valid.
        if (start == null && end == null) {
            return true;
        }
        // Complete ranges are only valid if both dates are valid and the start is before the end.
        if (start != null && end != null) {
            return this._isValidDateInstance(start) && this._isValidDateInstance(end) &&
                this._adapter.compareDate(start, end) <= 0;
        }
        // Partial ranges are valid if the start/end is valid.
        return (start == null || this._isValidDateInstance(start)) &&
            (end == null || this._isValidDateInstance(end));
    }
    /**
     * Checks whether the current selection is complete. In the case of a date range selection, this
     * is true if the current selection has a non-null `start` and `end`.
     */
    isComplete() {
        return this.selection.start != null && this.selection.end != null;
    }
    /** Clones the selection model. */
    clone() {
        const clone = new MatRangeDateSelectionModel(this._adapter);
        clone.updateSelection(this.selection, this);
        return clone;
    }
}
MatRangeDateSelectionModel.ɵfac = function MatRangeDateSelectionModel_Factory(t) { return new (t || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter)); };
MatRangeDateSelectionModel.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatRangeDateSelectionModel, factory: MatRangeDateSelectionModel.ɵfac });
MatRangeDateSelectionModel.ctorParameters = () => [
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRangeDateSelectionModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }]; }, null); })();
/** @docs-private */
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
    return parent || new MatSingleDateSelectionModel(adapter);
}
/**
 * Used to provide a single selection model to a component.
 * @docs-private
 */
const MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
    provide: MatDateSelectionModel,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
    useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY,
};
/** @docs-private */
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
    return parent || new MatRangeDateSelectionModel(adapter);
}
/**
 * Used to provide a range selection model to a component.
 * @docs-private
 */
const MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
    provide: MatDateSelectionModel,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
    useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY,
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token used to customize the date range selection behavior. */
const MAT_DATE_RANGE_SELECTION_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_SELECTION_STRATEGY');
/** Provides the default date range selection behavior. */
class DefaultMatCalendarRangeStrategy {
    constructor(_dateAdapter) {
        this._dateAdapter = _dateAdapter;
    }
    selectionFinished(date, currentRange) {
        let { start, end } = currentRange;
        if (start == null) {
            start = date;
        }
        else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
            end = date;
        }
        else {
            start = date;
            end = null;
        }
        return new DateRange(start, end);
    }
    createPreview(activeDate, currentRange) {
        let start = null;
        let end = null;
        if (currentRange.start && !currentRange.end && activeDate) {
            start = currentRange.start;
            end = activeDate;
        }
        return new DateRange(start, end);
    }
}
DefaultMatCalendarRangeStrategy.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(t) { return new (t || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter)); };
DefaultMatCalendarRangeStrategy.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefaultMatCalendarRangeStrategy, factory: DefaultMatCalendarRangeStrategy.ɵfac });
DefaultMatCalendarRangeStrategy.ctorParameters = () => [
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultMatCalendarRangeStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }]; }, null); })();
/** @docs-private */
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
    return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
/** @docs-private */
const MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MAT_DATE_RANGE_SELECTION_STRATEGY], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
    useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
class MatMonthView {
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rangeStrategy = _rangeStrategy;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** Emits when a new date is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when any date is selected. */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        this._activeDate = this._dateAdapter.today();
    }
    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     */
    get activeDate() { return this._activeDate; }
    set activeDate(value) {
        const oldActiveDate = this._activeDate;
        const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
            this._init();
        }
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setRanges(this._selected);
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null))
            .subscribe(() => this._init());
    }
    ngOnChanges(changes) {
        const comparisonChange = changes['comparisonStart'] || changes['comparisonEnd'];
        if (comparisonChange && !comparisonChange.firstChange) {
            this._setRanges(this.selected);
        }
    }
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new date is selected. */
    _dateSelected(event) {
        const date = event.value;
        const selectedYear = this._dateAdapter.getYear(this.activeDate);
        const selectedMonth = this._dateAdapter.getMonth(this.activeDate);
        const selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
        let rangeStartDate;
        let rangeEndDate;
        if (this._selected instanceof DateRange) {
            rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
            rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
        }
        else {
            rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
        }
        if (rangeStartDate !== date || rangeEndDate !== date) {
            this.selectedChange.emit(selectedDate);
        }
        this._userSelection.emit({ value: selectedDate, event: event.event });
        this._previewStart = this._previewEnd = null;
        this._changeDetectorRef.markForCheck();
    }
    /** Handles keydown events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        const oldActiveDate = this._activeDate;
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate)));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
                this._selectionKeyPressed = true;
                if (this._canSelect(this._activeDate)) {
                    // Prevent unexpected default actions such as form submission.
                    // Note that we only prevent the default action here while the selection happens in
                    // `keyup` below. We can't do the selection here, because it can cause the calendar to
                    // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
                    // because it's too late (see #23305).
                    event.preventDefault();
                }
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE:
                // Abort the current range selection if the user presses escape mid-selection.
                if (this._previewEnd != null && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) {
                    this._previewStart = this._previewEnd = null;
                    this.selectedChange.emit(null);
                    this._userSelection.emit({ value: null, event });
                    event.preventDefault();
                    event.stopPropagation(); // Prevents the overlay from closing.
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Handles keyup events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeyup(event) {
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER) {
            if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
                this._dateSelected({ value: this._dateAdapter.getDate(this._activeDate), event });
            }
            this._selectionKeyPressed = false;
        }
    }
    /** Initializes this month view. */
    _init() {
        this._setRanges(this.selected);
        this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
        this._monthLabel = this._dateFormats.display.monthLabel
            ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel)
            : this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                .toLocaleUpperCase();
        let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._initWeekdays();
        this._createWeekCells();
        this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(movePreview) {
        this._matCalendarBody._focusActiveCell(movePreview);
    }
    /** Called when the user has activated a new cell and the preview needs to be updated. */
    _previewChanged({ event, value: cell }) {
        if (this._rangeStrategy) {
            // We can assume that this will be a range, because preview
            // events aren't fired for single date selections.
            const value = cell ? cell.rawValue : null;
            const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
            this._previewStart = this._getCellCompareValue(previewRange.start);
            this._previewEnd = this._getCellCompareValue(previewRange.end);
            // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
            // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
            // when navigating one month back using the keyboard which will cause this handler
            // to throw a "changed after checked" error when updating the preview state.
            this._changeDetectorRef.detectChanges();
        }
    }
    /** Initializes the weekdays. */
    _initWeekdays() {
        const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
        const narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
        const longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        let weekdays = longWeekdays.map((long, i) => {
            return { long, narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    }
    /** Creates MatCalendarCells for the dates in this month. */
    _createWeekCells() {
        const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
        const dateNames = this._dateAdapter.getDateNames();
        this._weeks = [[]];
        for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            const enabled = this._shouldEnableDate(date);
            const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            const cellClasses = this.dateClass ? this.dateClass(date, 'month') : undefined;
            this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
        }
    }
    /** Date filter for the month */
    _shouldEnableDate(date) {
        return !!date &&
            (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
            (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) &&
            (!this.dateFilter || this.dateFilter(date));
    }
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    _getDateInCurrentMonth(date) {
        return date && this._hasSameMonthAndYear(date, this.activeDate) ?
            this._dateAdapter.getDate(date) : null;
    }
    /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
    _hasSameMonthAndYear(d1, d2) {
        return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
            this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    }
    /** Gets the value that will be used to one cell to another. */
    _getCellCompareValue(date) {
        if (date) {
            // We use the time since the Unix epoch to compare dates in this view, rather than the
            // cell values, because we need to support ranges that span across multiple months/years.
            const year = this._dateAdapter.getYear(date);
            const month = this._dateAdapter.getMonth(date);
            const day = this._dateAdapter.getDate(date);
            return new Date(year, month, day).getTime();
        }
        return null;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the current range based on a model value. */
    _setRanges(selectedValue) {
        if (selectedValue instanceof DateRange) {
            this._rangeStart = this._getCellCompareValue(selectedValue.start);
            this._rangeEnd = this._getCellCompareValue(selectedValue.end);
            this._isRange = true;
        }
        else {
            this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
            this._isRange = false;
        }
        this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
        this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
    }
    /** Gets whether a date can be selected in the month view. */
    _canSelect(date) {
        return !this.dateFilter || this.dateFilter(date);
    }
}
MatMonthView.ɵfac = function MatMonthView_Factory(t) { return new (t || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8)); };
MatMonthView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatMonthView, selectors: [["mat-month-view"]], viewQuery: function MatMonthView_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection", activeDateChange: "activeDateChange" }, exportAs: ["matMonthView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 13, consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", "colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "selectedValueChange", "previewChange", "keyup", "keydown"], ["scope", "col"], [1, "mat-calendar-abbr"]], template: function MatMonthView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatMonthView_th_3_Template, 3, 3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_6_listener($event) { return ctx._dateSelected($event); })("previewChange", function MatMonthView_Template_tbody_previewChange_6_listener($event) { return ctx._previewChanged($event); })("keyup", function MatMonthView_Template_tbody_keyup_6_listener($event) { return ctx._handleCalendarBodyKeyup($event); })("keydown", function MatMonthView_Template_tbody_keydown_6_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._weekdays);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, MatCalendarBody], encapsulation: 2, changeDetection: 0 });
MatMonthView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_RANGE_SELECTION_STRATEGY,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
MatMonthView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatCalendarBody,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMonthView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-month-view',
                template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <!-- For the day-of-the-week column header, we use an `<abbr>` element because VoiceOver\n           ignores the `aria-label`. ChromeVox, however, does not read the full name\n           for the `<abbr>`, so we still set `aria-label` on the header element. -->\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">\n        <abbr class=\"mat-calendar-abbr\" [attr.title]=\"day.long\">{{day.narrow}}</abbr>\n      </th>\n    </tr>\n    <tr><th aria-hidden=\"true\" class=\"mat-calendar-table-header-divider\" colspan=\"7\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [startValue]=\"_rangeStart!\"\n         [endValue]=\"_rangeEnd!\"\n         [comparisonStart]=\"_comparisonRangeStart\"\n         [comparisonEnd]=\"_comparisonRangeEnd\"\n         [previewStart]=\"_previewStart\"\n         [previewEnd]=\"_previewEnd\"\n         [isRange]=\"_isRange\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (previewChange)=\"_previewChanged($event)\"\n         (keyup)=\"_handleCalendarBodyKeyup($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                exportAs: 'matMonthView',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatCalendarBody]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const yearsPerPage = 24;
const yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * @docs-private
 */
class MatMultiYearView {
    constructor(_changeDetectorRef, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** Emits when a new year is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits the selected year. This doesn't imply a change on the selected date */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._activeDate = this._dateAdapter.today();
    }
    /** The date to display in this multi-year view (everything other than the year is ignored). */
    get activeDate() { return this._activeDate; }
    set activeDate(value) {
        let oldActiveDate = this._activeDate;
        const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
            this._init();
        }
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setSelectedYear(value);
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null))
            .subscribe(() => this._init());
    }
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /** Initializes this multi-year view. */
    _init() {
        this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
        // We want a range years such that we maximize the number of
        // enabled dates visible at once. This prevents issues where the minimum year
        // is the last item of a page OR the maximum year is the first item of a page.
        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view.
        const activeYear = this._dateAdapter.getYear(this._activeDate);
        const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
        this._years = [];
        for (let i = 0, row = []; i < yearsPerPage; i++) {
            row.push(minYearOfPage + i);
            if (row.length == yearsPerRow) {
                this._years.push(row.map(year => this._createCellForYear(year)));
                row = [];
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /** Handles when a new year is selected. */
    _yearSelected(event) {
        const year = event.value;
        this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
        let month = this._dateAdapter.getMonth(this.activeDate);
        let daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));
        this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /** Handles keydown events on the calendar body when calendar is in multi-year view. */
    _handleCalendarBodyKeydown(event) {
        const oldActiveDate = this._activeDate;
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
                // Note that we only prevent the default action here while the selection happens in
                // `keyup` below. We can't do the selection here, because it can cause the calendar to
                // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
                // because it's too late (see #23305).
                this._selectionKeyPressed = true;
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Handles keyup events on the calendar body when calendar is in multi-year view. */
    _handleCalendarBodyKeyup(event) {
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER) {
            if (this._selectionKeyPressed) {
                this._yearSelected({ value: this._dateAdapter.getYear(this._activeDate), event });
            }
            this._selectionKeyPressed = false;
        }
    }
    _getActiveCell() {
        return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
    }
    /** Creates an MatCalendarCell for the given year. */
    _createCellForYear(year) {
        const date = this._dateAdapter.createDate(year, 0, 1);
        const yearName = this._dateAdapter.getYearName(date);
        const cellClasses = this.dateClass ? this.dateClass(date, 'multi-year') : undefined;
        return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
    }
    /** Whether the given year is enabled. */
    _shouldEnableYear(year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this._dateAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this._dateAdapter.getYear(this.minDate))) {
            return false;
        }
        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }
        const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
        // If any date in the year is enabled count the year as enabled.
        for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-highlighted year based on a model value. */
    _setSelectedYear(value) {
        this._selectedYear = null;
        if (value instanceof DateRange) {
            const displayValue = value.start || value.end;
            if (displayValue) {
                this._selectedYear = this._dateAdapter.getYear(displayValue);
            }
        }
        else if (value) {
            this._selectedYear = this._dateAdapter.getYear(value);
        }
    }
}
MatMultiYearView.ɵfac = function MatMultiYearView_Factory(t) { return new (t || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8)); };
MatMultiYearView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatMultiYearView, selectors: [["mat-multi-year-view"]], viewQuery: function MatMultiYearView_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", activeDateChange: "activeDateChange" }, exportAs: ["matMultiYearView"], decls: 5, vars: 7, consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keyup", "keydown"]], template: function MatMultiYearView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) { return ctx._yearSelected($event); })("keyup", function MatMultiYearView_Template_tbody_keyup_4_listener($event) { return ctx._handleCalendarBodyKeyup($event); })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
    } }, directives: [MatCalendarBody], encapsulation: 2, changeDetection: 0 });
MatMultiYearView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
MatMultiYearView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatCalendarBody,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMultiYearView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-multi-year-view',
                template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead aria-hidden=\"true\" class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [startValue]=\"_selectedYear!\"\n         [endValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keyup)=\"_handleCalendarBodyKeyup($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                exportAs: 'matMultiYearView',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatCalendarBody]
        }] }); })();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
    const year1 = dateAdapter.getYear(date1);
    const year2 = dateAdapter.getYear(date2);
    const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
    return Math.floor((year1 - startingYear) / yearsPerPage) ===
        Math.floor((year2 - startingYear) / yearsPerPage);
}
/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
    const activeYear = dateAdapter.getYear(activeDate);
    return euclideanModulo((activeYear - getStartingYear(dateAdapter, minDate, maxDate)), yearsPerPage);
}
/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */
function getStartingYear(dateAdapter, minDate, maxDate) {
    let startingYear = 0;
    if (maxDate) {
        const maxYear = dateAdapter.getYear(maxDate);
        startingYear = maxYear - yearsPerPage + 1;
    }
    else if (minDate) {
        startingYear = dateAdapter.getYear(minDate);
    }
    return startingYear;
}
/** Gets remainder that is non-negative, even if first number is negative */
function euclideanModulo(a, b) {
    return (a % b + b) % b;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
class MatYearView {
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** Emits when a new month is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits the selected month. This doesn't imply a change on the selected date */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        this._activeDate = this._dateAdapter.today();
    }
    /** The date to display in this year view (everything other than the year is ignored). */
    get activeDate() { return this._activeDate; }
    set activeDate(value) {
        let oldActiveDate = this._activeDate;
        const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
            this._init();
        }
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setSelectedMonth(value);
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null))
            .subscribe(() => this._init());
    }
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new month is selected. */
    _monthSelected(event) {
        const month = event.value;
        const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
        this.monthSelected.emit(normalizedDate);
        const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
        this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /** Handles keydown events on the calendar body when calendar is in year view. */
    _handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        const oldActiveDate = this._activeDate;
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
                // Note that we only prevent the default action here while the selection happens in
                // `keyup` below. We can't do the selection here, because it can cause the calendar to
                // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
                // because it's too late (see #23305).
                this._selectionKeyPressed = true;
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Handles keyup events on the calendar body when calendar is in year view. */
    _handleCalendarBodyKeyup(event) {
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER) {
            if (this._selectionKeyPressed) {
                this._monthSelected({ value: this._dateAdapter.getMonth(this._activeDate), event });
            }
            this._selectionKeyPressed = false;
        }
    }
    /** Initializes this year view. */
    _init() {
        this._setSelectedMonth(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
        this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
        let monthNames = this._dateAdapter.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(row => row.map(month => this._createCellForMonth(month, monthNames[month])));
        this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
    }
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    _getMonthInCurrentYear(date) {
        return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ?
            this._dateAdapter.getMonth(date) : null;
    }
    /** Creates an MatCalendarCell for the given month. */
    _createCellForMonth(month, monthName) {
        const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
        const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
        const cellClasses = this.dateClass ? this.dateClass(date, 'year') : undefined;
        return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
    }
    /** Whether the given month is enabled. */
    _shouldEnableMonth(month) {
        const activeYear = this._dateAdapter.getYear(this.activeDate);
        if (month === undefined || month === null ||
            this._isYearAndMonthAfterMaxDate(activeYear, month) ||
            this._isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
        }
        if (!this.dateFilter) {
            return true;
        }
        const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
        // If any date in the month is enabled count the month as enabled.
        for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     */
    _isYearAndMonthAfterMaxDate(year, month) {
        if (this.maxDate) {
            const maxYear = this._dateAdapter.getYear(this.maxDate);
            const maxMonth = this._dateAdapter.getMonth(this.maxDate);
            return year > maxYear || (year === maxYear && month > maxMonth);
        }
        return false;
    }
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     */
    _isYearAndMonthBeforeMinDate(year, month) {
        if (this.minDate) {
            const minYear = this._dateAdapter.getYear(this.minDate);
            const minMonth = this._dateAdapter.getMonth(this.minDate);
            return year < minYear || (year === minYear && month < minMonth);
        }
        return false;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-selected month based on a model value. */
    _setSelectedMonth(value) {
        if (value instanceof DateRange) {
            this._selectedMonth = this._getMonthInCurrentYear(value.start) ||
                this._getMonthInCurrentYear(value.end);
        }
        else {
            this._selectedMonth = this._getMonthInCurrentYear(value);
        }
    }
}
MatYearView.ɵfac = function MatYearView_Factory(t) { return new (t || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8)); };
MatYearView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatYearView, selectors: [["mat-year-view"]], viewQuery: function MatYearView_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", monthSelected: "monthSelected", activeDateChange: "activeDateChange" }, exportAs: ["matYearView"], decls: 5, vars: 9, consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keyup", "keydown"]], template: function MatYearView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) { return ctx._monthSelected($event); })("keyup", function MatYearView_Template_tbody_keyup_4_listener($event) { return ctx._handleCalendarBodyKeyup($event); })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
    } }, directives: [MatCalendarBody], encapsulation: 2, changeDetection: 0 });
MatYearView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
MatYearView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatCalendarBody,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatYearView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-year-view',
                template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead aria-hidden=\"true\" class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [startValue]=\"_selectedMonth!\"\n         [endValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (keyup)=\"_handleCalendarBodyKeyup($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                exportAs: 'matYearView',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatCalendarBody]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter used to generate unique IDs. */
let uniqueId = 0;
/** Default header for MatCalendar */
class MatCalendarHeader {
    constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
        this._intl = _intl;
        this.calendar = calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._buttonDescriptionId = `mat-calendar-button-${uniqueId++}`;
        this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
    }
    /** The label for the current calendar view. */
    get periodButtonText() {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter
                .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYearName(this.calendar.activeDate);
        }
        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view, and the last year is
        // just yearsPerPage - 1 away.
        const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
        const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
        const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
        const minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
        const maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
        return this._intl.formatYearRange(minYearName, maxYearName);
    }
    get periodButtonLabel() {
        return this.calendar.currentView == 'month' ?
            this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
    }
    /** The label for the previous button. */
    get prevButtonLabel() {
        return {
            'month': this._intl.prevMonthLabel,
            'year': this._intl.prevYearLabel,
            'multi-year': this._intl.prevMultiYearLabel
        }[this.calendar.currentView];
    }
    /** The label for the next button. */
    get nextButtonLabel() {
        return {
            'month': this._intl.nextMonthLabel,
            'year': this._intl.nextYearLabel,
            'multi-year': this._intl.nextMultiYearLabel
        }[this.calendar.currentView];
    }
    /** Handles user clicks on the period label. */
    currentPeriodClicked() {
        this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
    }
    /** Handles user clicks on the previous button. */
    previousClicked() {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
    }
    /** Handles user clicks on the next button. */
    nextClicked() {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
    }
    /** Whether the previous period button is enabled. */
    previousEnabled() {
        if (!this.calendar.minDate) {
            return true;
        }
        return !this.calendar.minDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
    }
    /** Whether the next period button is enabled. */
    nextEnabled() {
        return !this.calendar.maxDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
    }
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    _isSameView(date1, date2) {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
        }
        // Otherwise we are in 'multi-year' view.
        return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
    }
}
MatCalendarHeader.ɵfac = function MatCalendarHeader_Factory(t) { return new (t || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MatCalendarHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCalendarHeader, selectors: [["mat-calendar-header"]], exportAs: ["matCalendarHeader"], ngContentSelectors: _c1, decls: 11, vars: 10, consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mat-calendar-period-button", 3, "click"], ["viewBox", "0 0 10 5", "focusable", "false", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"]], template: function MatCalendarHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_2_listener() { return ctx.currentPeriodClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polygon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_9_listener() { return ctx.previousClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_10_listener() { return ctx.nextClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._buttonDescriptionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx._buttonDescriptionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.periodButtonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView !== "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.CdkAriaLive], encapsulation: 2, changeDetection: 0 });
MatCalendarHeader.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: MatCalendar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar),] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendarHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-calendar-header',
                template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            [attr.aria-describedby]=\"_buttonDescriptionId\"\n            cdkAriaLive=\"polite\">\n      <span [attr.id]=\"_buttonDescriptionId\">{{periodButtonText}}</span>\n      <svg class=\"mat-calendar-arrow\" [class.mat-calendar-invert]=\"calendar.currentView !== 'month'\"\n           viewBox=\"0 0 10 5\" focusable=\"false\">\n           <polygon points=\"0,0 5,5 10,0\"/>\n      </svg>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n",
                exportAs: 'matCalendarHeader',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MatDatepickerIntl }, { type: MatCalendar, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar)]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, null); })();
/** A calendar that is used as part of the datepicker. */
class MatCalendar {
    constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this._moveFocusOnNextTick = false;
        /** Whether the calendar should be started in month or year view. */
        this.startView = 'month';
        /** Emits when the currently selected date changes. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits when the current view changes.
         */
        this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
        /** Emits when any date is selected. */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        this._intlChanges = _intl.changes.subscribe(() => {
            _changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
    }
    /** A date representing the period (month or year) to start the calendar in. */
    get startAt() { return this._startAt; }
    set startAt(value) {
        this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    get activeDate() { return this._clampedActiveDate; }
    set activeDate(value) {
        this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
        this.stateChanges.next();
        this._changeDetectorRef.markForCheck();
    }
    /** Whether the calendar is in month view. */
    get currentView() { return this._currentView; }
    set currentView(value) {
        const viewChangedResult = this._currentView !== value ? value : null;
        this._currentView = value;
        this._moveFocusOnNextTick = true;
        this._changeDetectorRef.markForCheck();
        if (viewChangedResult) {
            this.viewChanged.emit(viewChangedResult);
        }
    }
    ngAfterContentInit() {
        this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.ComponentPortal(this.headerComponent || MatCalendarHeader);
        this.activeDate = this.startAt || this._dateAdapter.today();
        // Assign to the private property since we don't want to move focus on init.
        this._currentView = this.startView;
    }
    ngAfterViewChecked() {
        if (this._moveFocusOnNextTick) {
            this._moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    }
    ngOnDestroy() {
        this._intlChanges.unsubscribe();
        this.stateChanges.complete();
    }
    ngOnChanges(changes) {
        const change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];
        if (change && !change.firstChange) {
            const view = this._getCurrentViewComponent();
            if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                this._changeDetectorRef.detectChanges();
                view._init();
            }
        }
        this.stateChanges.next();
    }
    /** Focuses the active date. */
    focusActiveCell() {
        this._getCurrentViewComponent()._focusActiveCell(false);
    }
    /** Updates today's date after an update of the active date */
    updateTodaysDate() {
        this._getCurrentViewComponent()._init();
    }
    /** Handles date selection in the month view. */
    _dateSelected(event) {
        const date = event.value;
        if (this.selected instanceof DateRange ||
            (date && !this._dateAdapter.sameDate(date, this.selected))) {
            this.selectedChange.emit(date);
        }
        this._userSelection.emit(event);
    }
    /** Handles year selection in the multiyear view. */
    _yearSelectedInMultiYearView(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /** Handles month selection in the year view. */
    _monthSelectedInYearView(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /** Handles year/month selection in the multi-year/year views. */
    _goToDateInView(date, view) {
        this.activeDate = date;
        this.currentView = view;
    }
    /** Returns the component instance that corresponds to the current calendar view. */
    _getCurrentViewComponent() {
        // The return type is explicitly written as a union to ensure that the Closure compiler does
        // not optimize calls to _init(). Without the explict return type, TypeScript narrows it to
        // only the first component type. See https://github.com/angular/components/issues/22996.
        return this.monthView || this.yearView || this.multiYearView;
    }
}
MatCalendar.ɵfac = function MatCalendar_Factory(t) { return new (t || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MatCalendar.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCalendar, selectors: [["mat-calendar"]], viewQuery: function MatCalendar_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMonthView, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatYearView, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMultiYearView, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
    } }, hostAttrs: [1, "mat-calendar"], inputs: { startView: "startView", startAt: "startAt", selected: "selected", minDate: "minDate", maxDate: "maxDate", headerComponent: "headerComponent", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", monthSelected: "monthSelected", viewChanged: "viewChanged", _userSelection: "_userSelection" }, exportAs: ["matCalendar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 5, consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange"]], template: function MatCalendar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCalendar_mat_month_view_2_Template, 1, 8, "mat-month-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatCalendar_mat_year_view_3_Template, 1, 6, "mat-year-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatCalendar_mat_multi_year_view_4_Template, 1, 6, "mat-multi-year-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.currentView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multi-year");
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.CdkPortalOutlet, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.CdkMonitorFocus, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, MatMonthView, MatYearView, MatMultiYearView], styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}.mat-calendar-abbr{text-decoration:none}\n"], encapsulation: 2, changeDetection: 0 });
MatCalendar.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
MatCalendar.propDecorators = {
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    viewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    monthView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatMonthView,] }],
    yearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatYearView,] }],
    multiYearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatMultiYearView,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-calendar',
                template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      [comparisonStart]=\"comparisonStart\"\n      [comparisonEnd]=\"comparisonEnd\"\n      (_userSelection)=\"_dateSelected($event)\">\n  </mat-month-view>\n\n  <mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </mat-year-view>\n\n  <mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </mat-multi-year-view>\n</div>\n",
                host: {
                    'class': 'mat-calendar'
                },
                exportAs: 'matCalendar',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
                styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}.mat-calendar-abbr{text-decoration:none}\n"]
            }]
    }], function () { return [{ type: MatDatepickerIntl }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], viewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], monthView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatMonthView]
        }], yearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatYearView]
        }], multiYearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatMultiYearView]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material datepicker.
 * @docs-private
 */
const matDatepickerAnimations = {
    /** Transforms the height of the datepicker's calendar. */
    transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('transformPanel', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => enter-dropdown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 0, transform: 'scale(1, 0.8)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 1, transform: 'scale(1, 1)' })
        ]))),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => enter-dialog', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 0, transform: 'scale(0.7)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ transform: 'none', opacity: 1 })
        ]))),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 0 })))
    ]),
    /** Fades in the content of the calendar. */
    fadeInCalendar: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('fadeInCalendar', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 0 })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 1 })),
        // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate a unique ID for each datepicker instance. */
let datepickerUid = 0;
/** Injection token that determines the scroll handling while the calendar is open. */
const MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-datepicker-scroll-strategy');
/** @docs-private */
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_DATEPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay],
    useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY,
};
// Boilerplate for applying mixins to MatDatepickerContent.
/** @docs-private */
const _MatDatepickerContentBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.mixinColor)(class {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
});
/**
 * Component used as the content for the datepicker overlay. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the overlay that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
class MatDatepickerContent extends _MatDatepickerContentBase {
    constructor(elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, intl) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._globalModel = _globalModel;
        this._dateAdapter = _dateAdapter;
        this._rangeSelectionStrategy = _rangeSelectionStrategy;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        /** Emits when an animation has finished. */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /** Portal with projected action buttons. */
        this._actionsPortal = null;
        this._closeButtonText = intl.closeCalendarLabel;
    }
    ngOnInit() {
        // If we have actions, clone the model so that we have the ability to cancel the selection,
        // otherwise update the global model directly. Note that we want to assign this as soon as
        // possible, but `_actionsPortal` isn't available in the constructor so we do it in `ngOnInit`.
        this._model = this._actionsPortal ? this._globalModel.clone() : this._globalModel;
        this._animationState = this.datepicker.touchUi ? 'enter-dialog' : 'enter-dropdown';
    }
    ngAfterViewInit() {
        this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
            this._changeDetectorRef.markForCheck();
        }));
        this._calendar.focusActiveCell();
    }
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        this._animationDone.complete();
    }
    _handleUserSelection(event) {
        const selection = this._model.selection;
        const value = event.value;
        const isRange = selection instanceof DateRange;
        // If we're selecting a range and we have a selection strategy, always pass the value through
        // there. Otherwise don't assign null values to the model, unless we're selecting a range.
        // A null value when picking a range means that the user cancelled the selection (e.g. by
        // pressing escape), whereas when selecting a single value it means that the value didn't
        // change. This isn't very intuitive, but it's here for backwards-compatibility.
        if (isRange && this._rangeSelectionStrategy) {
            const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
            this._model.updateSelection(newSelection, this);
        }
        else if (value && (isRange ||
            !this._dateAdapter.sameDate(value, selection))) {
            this._model.add(value);
        }
        // Delegate closing the overlay to the actions.
        if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
            this.datepicker.close();
        }
    }
    _startExitAnimation() {
        this._animationState = 'void';
        this._changeDetectorRef.markForCheck();
    }
    _getSelected() {
        return this._model.selection;
    }
    /** Applies the current pending selection to the global model. */
    _applyPendingSelection() {
        if (this._model !== this._globalModel) {
            this._globalModel.updateSelection(this._model.selection, this);
        }
    }
}
MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) { return new (t || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl)); };
MatDatepickerContent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDatepickerContent, selectors: [["mat-datepicker-content"]], viewQuery: function MatDatepickerContent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendar, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
    } }, hostAttrs: [1, "mat-datepicker-content"], hostVars: 3, hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler() { return ctx._animationDone.next(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["matDatepickerContent"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 20, consts: [["cdkTrapFocus", "", 1, "mat-datepicker-content-container"], [3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "yearSelected", "monthSelected", "viewChanged", "_userSelection"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "color", "focus", "blur", "click"]], template: function MatDatepickerContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) { return ctx.datepicker._selectYear($event); })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) { return ctx.datepicker._selectMonth($event); })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) { return ctx.datepicker._viewChanged($event); })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) { return ctx._handleUserSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatDatepickerContent_Template_button_focus_3_listener() { return ctx._closeButtonFocused = true; })("blur", function MatDatepickerContent_Template_button_blur_3_listener() { return ctx._closeButtonFocused = false; })("click", function MatDatepickerContent_Template_button_click_3_listener() { return ctx.datepicker.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._actionsPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-visually-hidden", !ctx._closeButtonFocused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color || "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._closeButtonText);
    } }, directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.CdkTrapFocus, MatCalendar, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.CdkPortalOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n"], encapsulation: 2, data: { animation: [
            matDatepickerAnimations.transformPanel,
            matDatepickerAnimations.fadeInCalendar,
        ] }, changeDetection: 0 });
MatDatepickerContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: MatDateSelectionModel },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_RANGE_SELECTION_STRATEGY,] }] },
    { type: MatDatepickerIntl }
];
MatDatepickerContent.propDecorators = {
    _calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatCalendar,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-datepicker-content',
                template: "<div\n  cdkTrapFocus\n  class=\"mat-datepicker-content-container\"\n  [class.mat-datepicker-content-container-with-actions]=\"_actionsPortal\">\n  <mat-calendar\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._getMinDate()\"\n    [maxDate]=\"datepicker._getMaxDate()\"\n    [dateFilter]=\"datepicker._getDateFilter()\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"_getSelected()\"\n    [dateClass]=\"datepicker.dateClass\"\n    [comparisonStart]=\"comparisonStart\"\n    [comparisonEnd]=\"comparisonEnd\"\n    [@fadeInCalendar]=\"'enter'\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (viewChanged)=\"datepicker._viewChanged($event)\"\n    (_userSelection)=\"_handleUserSelection($event)\"></mat-calendar>\n\n  <ng-template [cdkPortalOutlet]=\"_actionsPortal\"></ng-template>\n\n  <!-- Invisible close button for screen reader users. -->\n  <button\n    type=\"button\"\n    mat-raised-button\n    [color]=\"color || 'primary'\"\n    class=\"mat-datepicker-close-button\"\n    [class.cdk-visually-hidden]=\"!_closeButtonFocused\"\n    (focus)=\"_closeButtonFocused = true\"\n    (blur)=\"_closeButtonFocused = false\"\n    (click)=\"datepicker.close()\">{{ _closeButtonText }}</button>\n</div>\n",
                host: {
                    'class': 'mat-datepicker-content',
                    '[@transformPanel]': '_animationState',
                    '(@transformPanel.done)': '_animationDone.next()',
                    '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
                },
                animations: [
                    matDatepickerAnimations.transformPanel,
                    matDatepickerAnimations.fadeInCalendar,
                ],
                exportAs: 'matDatepickerContent',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                inputs: ['color'],
                styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: MatDateSelectionModel }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }] }, { type: MatDatepickerIntl }]; }, { _calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatCalendar]
        }] }); })();
/** Base class for a datepicker. */
class MatDatepickerBase {
    constructor(
    /**
     * @deprecated `_dialog` parameter is no longer being used and it will be removed.
     * @breaking-change 13.0.0
     */
    _dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, 
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 13.0.0
     */
    _document, _model) {
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._model = _model;
        this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** The view that the calendar should start in. */
        this.startView = 'month';
        this._touchUi = false;
        /** Preferred position of the datepicker in the X axis. */
        this.xPosition = 'start';
        /** Preferred position of the datepicker in the Y axis. */
        this.yPosition = 'below';
        this._restoreFocus = true;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits when the current view changes.
         */
        this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
        /** Emits when the datepicker has been opened. */
        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when the datepicker has been closed. */
        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._opened = false;
        /** The id for the datepicker calendar. */
        this.id = `mat-datepicker-${datepickerUid++}`;
        /** The element that was focused before the datepicker was opened. */
        this._focusedElementBeforeOpen = null;
        /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
        this._backdropHarnessClass = `${this.id}-backdrop`;
        /** Emits when the datepicker's state changes. */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._scrollStrategy = scrollStrategy;
    }
    /** The date to open the calendar to initially. */
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
    }
    set startAt(value) {
        this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** Color palette to use on the datepicker's calendar. */
    get color() {
        return this._color ||
            (this.datepickerInput ? this.datepickerInput.getThemePalette() : undefined);
    }
    set color(value) {
        this._color = value;
    }
    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a dropdown and elements have more padding to allow for bigger touch targets.
     */
    get touchUi() { return this._touchUi; }
    set touchUi(value) {
        this._touchUi = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    /** Whether the datepicker pop-up should be disabled. */
    get disabled() {
        return this._disabled === undefined && this.datepickerInput ?
            this.datepickerInput.disabled : !!this._disabled;
    }
    set disabled(value) {
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this.stateChanges.next(undefined);
        }
    }
    /**
     * Whether to restore focus to the previously-focused element when the calendar is closed.
     * Note that automatic focus restoration is an accessibility feature and it is recommended that
     * you provide your own equivalent, if you decide to turn it off.
     */
    get restoreFocus() { return this._restoreFocus; }
    set restoreFocus(value) {
        this._restoreFocus = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    /**
     * Classes to be passed to the date picker panel.
     * Supports string and string array values, similar to `ngClass`.
     */
    get panelClass() { return this._panelClass; }
    set panelClass(value) {
        this._panelClass = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceStringArray)(value);
    }
    /** Whether the calendar is open. */
    get opened() { return this._opened; }
    set opened(value) {
        (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value) ? this.open() : this.close();
    }
    /** The minimum selectable date. */
    _getMinDate() {
        return this.datepickerInput && this.datepickerInput.min;
    }
    /** The maximum selectable date. */
    _getMaxDate() {
        return this.datepickerInput && this.datepickerInput.max;
    }
    _getDateFilter() {
        return this.datepickerInput && this.datepickerInput.dateFilter;
    }
    ngOnChanges(changes) {
        const positionChange = changes['xPosition'] || changes['yPosition'];
        if (positionChange && !positionChange.firstChange && this._overlayRef) {
            const positionStrategy = this._overlayRef.getConfig().positionStrategy;
            if (positionStrategy instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.FlexibleConnectedPositionStrategy) {
                this._setConnectedPositions(positionStrategy);
                if (this.opened) {
                    this._overlayRef.updatePosition();
                }
            }
        }
        this.stateChanges.next(undefined);
    }
    ngOnDestroy() {
        this._destroyOverlay();
        this.close();
        this._inputStateChanges.unsubscribe();
        this.stateChanges.complete();
    }
    /** Selects the given date */
    select(date) {
        this._model.add(date);
    }
    /** Emits the selected year in multiyear view */
    _selectYear(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /** Emits selected month in year view */
    _selectMonth(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /** Emits changed view */
    _viewChanged(view) {
        this.viewChanged.emit(view);
    }
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     * @returns Selection model that the input should hook itself up to.
     */
    registerInput(input) {
        if (this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('A MatDatepicker can only be associated with a single input.');
        }
        this._inputStateChanges.unsubscribe();
        this.datepickerInput = input;
        this._inputStateChanges =
            input.stateChanges.subscribe(() => this.stateChanges.next(undefined));
        return this._model;
    }
    /**
     * Registers a portal containing action buttons with the datepicker.
     * @param portal Portal to be registered.
     */
    registerActions(portal) {
        if (this._actionsPortal && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('A MatDatepicker can only be associated with a single actions row.');
        }
        this._actionsPortal = portal;
    }
    /**
     * Removes a portal containing action buttons from the datepicker.
     * @param portal Portal to be removed.
     */
    removeActions(portal) {
        if (portal === this._actionsPortal) {
            this._actionsPortal = null;
        }
    }
    /** Open the calendar. */
    open() {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Attempted to open an MatDatepicker with no associated input.');
        }
        this._focusedElementBeforeOpen = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__._getFocusedElementPierceShadowDom)();
        this._openOverlay();
        this._opened = true;
        this.openedStream.emit();
    }
    /** Close the calendar. */
    close() {
        if (!this._opened) {
            return;
        }
        if (this._componentRef) {
            const instance = this._componentRef.instance;
            instance._startExitAnimation();
            instance._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => this._destroyOverlay());
        }
        const completeClose = () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this._opened) {
                this._opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
            }
        };
        if (this._restoreFocus && this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    }
    /** Applies the current pending selection on the overlay to the model. */
    _applyPendingSelection() {
        var _a, _b;
        (_b = (_a = this._componentRef) === null || _a === void 0 ? void 0 : _a.instance) === null || _b === void 0 ? void 0 : _b._applyPendingSelection();
    }
    /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
    _forwardContentValues(instance) {
        instance.datepicker = this;
        instance.color = this.color;
        instance._actionsPortal = this._actionsPortal;
    }
    /** Opens the overlay with the calendar. */
    _openOverlay() {
        this._destroyOverlay();
        const isDialog = this.touchUi;
        const labelId = this.datepickerInput.getOverlayLabelId();
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.ComponentPortal(MatDatepickerContent, this._viewContainerRef);
        const overlayRef = this._overlayRef = this._overlay.create(new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayConfig({
            positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
            hasBackdrop: true,
            backdropClass: [
                isDialog ? 'cdk-overlay-dark-backdrop' : 'mat-overlay-transparent-backdrop',
                this._backdropHarnessClass
            ],
            direction: this._dir,
            scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
            panelClass: `mat-datepicker-${isDialog ? 'dialog' : 'popup'}`,
        }));
        const overlayElement = overlayRef.overlayElement;
        overlayElement.setAttribute('role', 'dialog');
        if (labelId) {
            overlayElement.setAttribute('aria-labelledby', labelId);
        }
        if (isDialog) {
            overlayElement.setAttribute('aria-modal', 'true');
        }
        this._getCloseStream(overlayRef).subscribe(event => {
            if (event) {
                event.preventDefault();
            }
            this.close();
        });
        this._componentRef = overlayRef.attach(portal);
        this._forwardContentValues(this._componentRef.instance);
        // Update the position once the calendar has rendered. Only relevant in dropdown mode.
        if (!isDialog) {
            this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => overlayRef.updatePosition());
        }
    }
    /** Destroys the current overlay. */
    _destroyOverlay() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = this._componentRef = null;
        }
    }
    /** Gets a position strategy that will open the calendar as a dropdown. */
    _getDialogStrategy() {
        return this._overlay.position().global().centerHorizontally().centerVertically();
    }
    /** Gets a position strategy that will open the calendar as a dropdown. */
    _getDropdownStrategy() {
        const strategy = this._overlay.position()
            .flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mat-datepicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition();
        return this._setConnectedPositions(strategy);
    }
    /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
    _setConnectedPositions(strategy) {
        const primaryX = this.xPosition === 'end' ? 'end' : 'start';
        const secondaryX = primaryX === 'start' ? 'end' : 'start';
        const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
        const secondaryY = primaryY === 'top' ? 'bottom' : 'top';
        return strategy.withPositions([
            {
                originX: primaryX,
                originY: secondaryY,
                overlayX: primaryX,
                overlayY: primaryY
            },
            {
                originX: primaryX,
                originY: primaryY,
                overlayX: primaryX,
                overlayY: secondaryY
            },
            {
                originX: secondaryX,
                originY: secondaryY,
                overlayX: secondaryX,
                overlayY: primaryY
            },
            {
                originX: secondaryX,
                originY: primaryY,
                overlayX: secondaryX,
                overlayY: secondaryY
            }
        ]);
    }
    /** Gets an observable that will emit when the overlay is supposed to be closed. */
    _getCloseStream(overlayRef) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(event => {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) || (this.datepickerInput &&
                (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW);
        })));
    }
}
MatDatepickerBase.ɵfac = function MatDatepickerBase_Factory(t) { return new (t || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel)); };
MatDatepickerBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerBase, inputs: { startView: "startView", xPosition: "xPosition", yPosition: "yPosition", startAt: "startAt", color: "color", touchUi: "touchUi", disabled: "disabled", restoreFocus: "restoreFocus", panelClass: "panelClass", opened: "opened", calendarHeaderComponent: "calendarHeaderComponent", dateClass: "dateClass" }, outputs: { yearSelected: "yearSelected", monthSelected: "monthSelected", viewChanged: "viewChanged", openedStream: "opened", closedStream: "closed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
MatDatepickerBase.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,] }] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] },
    { type: MatDateSelectionModel }
];
MatDatepickerBase.propDecorators = {
    calendarHeaderComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    touchUi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    xPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    yPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    restoreFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    viewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['opened',] }],
    closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['closed',] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef]
            }] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATEPICKER_SCROLL_STRATEGY]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }, { type: MatDateSelectionModel }]; }, { startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], viewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['opened']
        }], closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['closed']
        }], startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], touchUi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], restoreFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], calendarHeaderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
class MatDatepicker extends MatDatepickerBase {
}
MatDatepicker.ɵfac = /*@__PURE__*/ function () { let ɵMatDatepicker_BaseFactory; return function MatDatepicker_Factory(t) { return (ɵMatDatepicker_BaseFactory || (ɵMatDatepicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDatepicker)))(t || MatDatepicker); }; }();
MatDatepicker.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDatepicker, selectors: [["mat-datepicker"]], exportAs: ["matDatepicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER,
            { provide: MatDatepickerBase, useExisting: MatDatepicker },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function MatDatepicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-datepicker',
                template: '',
                exportAs: 'matDatepicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [
                    MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER,
                    { provide: MatDatepickerBase, useExisting: MatDatepicker },
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */
class MatDatepickerInputEvent {
    constructor(
    /** Reference to the datepicker input component that emitted the event. */
    target, 
    /** Reference to the native input element associated with the datepicker input. */
    targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
/** Base class for datepicker inputs. */
class MatDatepickerInputBase {
    constructor(_elementRef, _dateAdapter, _dateFormats) {
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        /** Emits when a `change` event is fired on this `<input>`. */
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when an `input` event is fired on this `<input>`. */
        this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when the internal state has changed */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this._onTouched = () => { };
        this._validatorOnChange = () => { };
        this._cvaOnChange = () => { };
        this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** The form control validator for whether the input parses. */
        this._parseValidator = () => {
            return this._lastValueValid ?
                null : { 'matDatepickerParse': { 'text': this._elementRef.nativeElement.value } };
        };
        /** The form control validator for the date filter. */
        this._filterValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            return !controlValue || this._matchesFilter(controlValue) ?
                null : { 'matDatepickerFilter': true };
        };
        /** The form control validator for the min date. */
        this._minValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const min = this._getMinDate();
            return (!min || !controlValue ||
                this._dateAdapter.compareDate(min, controlValue) <= 0) ?
                null : { 'matDatepickerMin': { 'min': min, 'actual': controlValue } };
        };
        /** The form control validator for the max date. */
        this._maxValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const max = this._getMaxDate();
            return (!max || !controlValue ||
                this._dateAdapter.compareDate(max, controlValue) >= 0) ?
                null : { 'matDatepickerMax': { 'max': max, 'actual': controlValue } };
        };
        /** Whether the last value set on the input was valid. */
        this._lastValueValid = false;
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
            this._assignValueProgrammatically(this.value);
        });
    }
    /** The value of the input. */
    get value() {
        return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
    }
    set value(value) {
        this._assignValueProgrammatically(value);
    }
    /** Whether the datepicker-input is disabled. */
    get disabled() { return !!this._disabled || this._parentDisabled(); }
    set disabled(value) {
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
        const element = this._elementRef.nativeElement;
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this.stateChanges.next(undefined);
        }
        // We need to null check the `blur` method, because it's undefined during SSR.
        // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
        // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
        // element has been inserted.
        if (newValue && this._isInitialized && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
        }
    }
    /** Gets the base validator functions. */
    _getValidators() {
        return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
    }
    /** Registers a date selection model with the input. */
    _registerModel(model) {
        this._model = model;
        this._valueChangesSubscription.unsubscribe();
        if (this._pendingValue) {
            this._assignValue(this._pendingValue);
        }
        this._valueChangesSubscription = this._model.selectionChanged.subscribe(event => {
            if (this._shouldHandleChangeEvent(event)) {
                const value = this._getValueFromModel(event.selection);
                this._lastValueValid = this._isValidValue(value);
                this._cvaOnChange(value);
                this._onTouched();
                this._formatValue(value);
                this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
                this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
            }
        });
    }
    ngAfterViewInit() {
        this._isInitialized = true;
    }
    ngOnChanges(changes) {
        if (dateInputsHaveChanged(changes, this._dateAdapter)) {
            this.stateChanges.next(undefined);
        }
    }
    ngOnDestroy() {
        this._valueChangesSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this.stateChanges.complete();
    }
    /** @docs-private */
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    /** @docs-private */
    validate(c) {
        return this._validator ? this._validator(c) : null;
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this._assignValueProgrammatically(value);
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _onKeydown(event) {
        const isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW;
        if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._openPopup();
            event.preventDefault();
        }
    }
    _onInput(value) {
        const lastValueWasValid = this._lastValueValid;
        let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
        this._lastValueValid = this._isValidValue(date);
        date = this._dateAdapter.getValidDateOrNull(date);
        if (!this._dateAdapter.sameDate(date, this.value)) {
            this._assignValue(date);
            this._cvaOnChange(date);
            this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
        else {
            // Call the CVA change handler for invalid values
            // since this is what marks the control as dirty.
            if (value && !this.value) {
                this._cvaOnChange(date);
            }
            if (lastValueWasValid !== this._lastValueValid) {
                this._validatorOnChange();
            }
        }
    }
    _onChange() {
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
    /** Handles blur events on the input. */
    _onBlur() {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    }
    /** Formats a value and sets it on the input element. */
    _formatValue(value) {
        this._elementRef.nativeElement.value =
            value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
    }
    /** Assigns a value to the model. */
    _assignValue(value) {
        // We may get some incoming values before the model was
        // assigned. Save the value so that we can assign it later.
        if (this._model) {
            this._assignValueToModel(value);
            this._pendingValue = null;
        }
        else {
            this._pendingValue = value;
        }
    }
    /** Whether a value is considered valid. */
    _isValidValue(value) {
        return !value || this._dateAdapter.isValid(value);
    }
    /**
     * Checks whether a parent control is disabled. This is in place so that it can be overridden
     * by inputs extending this one which can be placed inside of a group that can be disabled.
     */
    _parentDisabled() {
        return false;
    }
    /** Programmatically assigns a value to the input. */
    _assignValueProgrammatically(value) {
        value = this._dateAdapter.deserialize(value);
        this._lastValueValid = this._isValidValue(value);
        value = this._dateAdapter.getValidDateOrNull(value);
        this._assignValue(value);
        this._formatValue(value);
    }
    /** Gets whether a value matches the current date filter. */
    _matchesFilter(value) {
        const filter = this._getDateFilter();
        return !filter || filter(value);
    }
}
MatDatepickerInputBase.ɵfac = function MatDatepickerInputBase_Factory(t) { return new (t || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8)); };
MatDatepickerInputBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerInputBase, inputs: { value: "value", disabled: "disabled" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
MatDatepickerInputBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] }
];
MatDatepickerInputBase.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    dateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerInputBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }]; }, { dateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], dateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Checks whether the `SimpleChanges` object from an `ngOnChanges`
 * callback has any changes, accounting for date objects.
 */
function dateInputsHaveChanged(changes, adapter) {
    const keys = Object.keys(changes);
    for (let key of keys) {
        const { previousValue, currentValue } = changes[key];
        if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
            if (!adapter.sameDate(previousValue, currentValue)) {
                return true;
            }
        }
        else {
            return true;
        }
    }
    return false;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
const MAT_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
    multi: true
};
/** @docs-private */
const MAT_DATEPICKER_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
    multi: true
};
/** Directive used to connect an input to a MatDatepicker. */
class MatDatepickerInput extends MatDatepickerInputBase {
    constructor(elementRef, dateAdapter, dateFormats, _formField) {
        super(elementRef, dateAdapter, dateFormats);
        this._formField = _formField;
        this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose(super._getValidators());
    }
    /** The datepicker that this input is associated with. */
    set matDatepicker(datepicker) {
        if (datepicker) {
            this._datepicker = datepicker;
            this._closedSubscription = datepicker.closedStream.subscribe(() => this._onTouched());
            this._registerModel(datepicker.registerInput(this));
        }
    }
    /** The minimum valid date. */
    get min() { return this._min; }
    set min(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._min)) {
            this._min = validValue;
            this._validatorOnChange();
        }
    }
    /** The maximum valid date. */
    get max() { return this._max; }
    set max(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._max)) {
            this._max = validValue;
            this._validatorOnChange();
        }
    }
    /** Function that can be used to filter out dates within the datepicker. */
    get dateFilter() { return this._dateFilter; }
    set dateFilter(value) {
        const wasMatchingValue = this._matchesFilter(this.value);
        this._dateFilter = value;
        if (this._matchesFilter(this.value) !== wasMatchingValue) {
            this._validatorOnChange();
        }
    }
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Gets the ID of an element that should be used a description for the calendar overlay. */
    getOverlayLabelId() {
        if (this._formField) {
            return this._formField.getLabelId();
        }
        return this._elementRef.nativeElement.getAttribute('aria-labelledby');
    }
    /** Returns the palette used by the input's form field, if any. */
    getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    /** Gets the value at which the calendar should start. */
    getStartValue() {
        return this.value;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._closedSubscription.unsubscribe();
    }
    /** Opens the associated datepicker. */
    _openPopup() {
        if (this._datepicker) {
            this._datepicker.open();
        }
    }
    _getValueFromModel(modelValue) {
        return modelValue;
    }
    _assignValueToModel(value) {
        if (this._model) {
            this._model.updateSelection(value, this);
        }
    }
    /** Gets the input's minimum date. */
    _getMinDate() {
        return this._min;
    }
    /** Gets the input's maximum date. */
    _getMaxDate() {
        return this._max;
    }
    /** Gets the input's date filtering function. */
    _getDateFilter() {
        return this._dateFilter;
    }
    _shouldHandleChangeEvent(event) {
        return event.source !== this;
    }
}
MatDatepickerInput.ɵfac = function MatDatepickerInput_Factory(t) { return new (t || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8)); };
MatDatepickerInput.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerInput, selectors: [["input", "matDatepicker", ""]], hostAttrs: [1, "mat-datepicker-input"], hostVars: 6, hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MatDatepickerInput_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MatDatepickerInput_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
    } }, inputs: { matDatepicker: "matDatepicker", min: "min", max: "max", dateFilter: ["matDatepickerFilter", "dateFilter"] }, exportAs: ["matDatepickerInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            MAT_DATEPICKER_VALUE_ACCESSOR,
            MAT_DATEPICKER_VALIDATORS,
            { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR, useExisting: MatDatepickerInput },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatDatepickerInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD,] }] }
];
MatDatepickerInput.propDecorators = {
    matDatepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matDatepickerFilter',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'input[matDatepicker]',
                providers: [
                    MAT_DATEPICKER_VALUE_ACCESSOR,
                    MAT_DATEPICKER_VALIDATORS,
                    { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR, useExisting: MatDatepickerInput },
                ],
                host: {
                    'class': 'mat-datepicker-input',
                    '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
                    '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
                    '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
                    // Used by the test harness to tie this input to its calendar. We can't depend on
                    // `aria-owns` for this, because it's only defined while the calendar is open.
                    '[attr.data-mat-calendar]': '_datepicker ? _datepicker.id : null',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(blur)': '_onBlur()',
                    '(keydown)': '_onKeydown($event)'
                },
                exportAs: 'matDatepickerInput'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD]
            }] }]; }, { matDatepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matDatepickerFilter']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Can be used to override the icon of a `matDatepickerToggle`. */
class MatDatepickerToggleIcon {
}
MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) { return new (t || MatDatepickerToggleIcon)(); };
MatDatepickerToggleIcon.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerToggleIcon, selectors: [["", "matDatepickerToggleIcon", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerToggleIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matDatepickerToggleIcon]'
            }]
    }], null, null); })();
class MatDatepickerToggle {
    constructor(_intl, _changeDetectorRef, defaultTabIndex) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
    }
    /** Whether the toggle button is disabled. */
    get disabled() {
        if (this._disabled === undefined && this.datepicker) {
            return this.datepicker.disabled;
        }
        return !!this._disabled;
    }
    set disabled(value) {
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    ngOnChanges(changes) {
        if (changes['datepicker']) {
            this._watchStateChanges();
        }
    }
    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }
    ngAfterContentInit() {
        this._watchStateChanges();
    }
    _open(event) {
        if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
        }
    }
    _watchStateChanges() {
        const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
        const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ?
            this.datepicker.datepickerInput.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
        const datepickerToggled = this.datepicker ?
            (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.datepicker.openedStream, this.datepicker.closedStream) :
            (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
        this._stateChanges.unsubscribe();
        this._stateChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) { return new (t || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex')); };
MatDatepickerToggle.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDatepickerToggle, selectors: [["mat-datepicker-toggle"]], contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
    } }, viewQuery: function MatDatepickerToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "mat-datepicker-toggle"], hostVars: 8, hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerToggle_click_HostBindingHandler($event) { return ctx._open($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
    } }, inputs: { tabIndex: "tabIndex", disabled: "disabled", datepicker: ["for", "datepicker"], ariaLabel: ["aria-label", "ariaLabel"], disableRipple: "disableRipple" }, exportAs: ["matDatepickerToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]], template: function MatDatepickerToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._customIcon);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}\n"], encapsulation: 2, changeDetection: 0 });
MatDatepickerToggle.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['tabindex',] }] }
];
MatDatepickerToggle.propDecorators = {
    datepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['for',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _customIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatDatepickerToggleIcon,] }],
    _button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['button',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-datepicker-toggle',
                template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"ariaLabel || _intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
                host: {
                    'class': 'mat-datepicker-toggle',
                    '[attr.tabindex]': 'null',
                    '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
                    '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
                    '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
                    // Used by the test harness to tie this toggle to its datepicker.
                    '[attr.data-mat-calendar]': 'datepicker ? datepicker.id : null',
                    // Bind the `click` on the host, rather than the inner `button`, so that we can call
                    // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
                    // it so that the input doesn't get focused automatically by the form field (See #21836).
                    '(click)': '_open($event)'
                },
                exportAs: 'matDatepickerToggle',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}\n"]
            }]
    }], function () { return [{ type: MatDatepickerIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }]; }, { tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['for']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatDatepickerToggleIcon]
        }], _button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['button']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide the date range input wrapper component
 * to the parts without circular dependencies.
 */
const MAT_DATE_RANGE_INPUT_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_INPUT_PARENT');
/**
 * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
 */
class MatDateRangeInputPartBase extends MatDatepickerInputBase {
    constructor(_rangeInput, elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
        super(elementRef, dateAdapter, dateFormats);
        this._rangeInput = _rangeInput;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._injector = _injector;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
    }
    ngOnInit() {
        // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
        // injecting its `NgControl` so that the error state is handled correctly. This introduces a
        // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
        // itself. Usually we can work around it for the CVA, but there's no API to do it for the
        // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
        // everything has been resolved.
        // tslint:disable-next-line:no-bitwise
        const ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControl, null, _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectFlags.Self | _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectFlags.Optional);
        if (ngControl) {
            this.ngControl = ngControl;
        }
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
    }
    /** Gets whether the input is empty. */
    isEmpty() {
        return this._elementRef.nativeElement.value.length === 0;
    }
    /** Gets the placeholder of the input. */
    _getPlaceholder() {
        return this._elementRef.nativeElement.placeholder;
    }
    /** Focuses the input. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    /** Handles `input` events on the input element. */
    _onInput(value) {
        super._onInput(value);
        this._rangeInput._handleChildValueChange();
    }
    /** Opens the datepicker associated with the input. */
    _openPopup() {
        this._rangeInput._openDatepicker();
    }
    /** Gets the minimum date from the range input. */
    _getMinDate() {
        return this._rangeInput.min;
    }
    /** Gets the maximum date from the range input. */
    _getMaxDate() {
        return this._rangeInput.max;
    }
    /** Gets the date filter function from the range input. */
    _getDateFilter() {
        return this._rangeInput.dateFilter;
    }
    _parentDisabled() {
        return this._rangeInput._groupDisabled;
    }
    _shouldHandleChangeEvent({ source }) {
        return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
    }
    _assignValueProgrammatically(value) {
        super._assignValueProgrammatically(value);
        const opposite = (this === this._rangeInput._startInput ? this._rangeInput._endInput :
            this._rangeInput._startInput);
        opposite === null || opposite === void 0 ? void 0 : opposite._validatorOnChange();
    }
}
MatDateRangeInputPartBase.ɵfac = function MatDateRangeInputPartBase_Factory(t) { return new (t || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8)); };
MatDateRangeInputPartBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDateRangeInputPartBase, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatDateRangeInputPartBase.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_RANGE_INPUT_PARENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangeInputPartBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_RANGE_INPUT_PARENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }]; }, null); })();
const _MatDateRangeInputBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.mixinErrorState)(MatDateRangeInputPartBase);
/** Input for entering the start date in a `mat-date-range-input`. */
class MatStartDate extends _MatDateRangeInputBase {
    constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
        // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
        // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
        // constructor once ViewEngine is removed.
        super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
        /** Validator that checks that the start date isn't after the end date. */
        this._startValidator = (control) => {
            const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const end = this._model ? this._model.selection.end : null;
            return (!start || !end ||
                this._dateAdapter.compareDate(start, end) <= 0) ?
                null : { 'matStartDateInvalid': { 'end': end, 'actual': start } };
        };
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._startValidator]);
    }
    ngOnInit() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngOnInit();
    }
    ngDoCheck() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngDoCheck();
    }
    _getValueFromModel(modelValue) {
        return modelValue.start;
    }
    _shouldHandleChangeEvent(change) {
        var _a;
        if (!super._shouldHandleChangeEvent(change)) {
            return false;
        }
        else {
            return !((_a = change.oldValue) === null || _a === void 0 ? void 0 : _a.start) ? !!change.selection.start :
                !change.selection.start ||
                    !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
        }
    }
    _assignValueToModel(value) {
        if (this._model) {
            const range = new DateRange(value, this._model.selection.end);
            this._model.updateSelection(range, this);
        }
    }
    _formatValue(value) {
        super._formatValue(value);
        // Any time the input value is reformatted we need to tell the parent.
        this._rangeInput._handleChildValueChange();
    }
    /** Gets the value that should be used when mirroring the input's size. */
    getMirrorValue() {
        const element = this._elementRef.nativeElement;
        const value = element.value;
        return value.length > 0 ? value : element.placeholder;
    }
}
MatStartDate.ɵfac = function MatStartDate_Factory(t) { return new (t || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8)); };
MatStartDate.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStartDate, selectors: [["input", "matStartDate", ""]], hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"], hostVars: 6, hostBindings: function MatStartDate_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MatStartDate_change_HostBindingHandler() { return ctx._onChange(); })("keydown", function MatStartDate_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("blur", function MatStartDate_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx._rangeInput.id)("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    } }, inputs: { errorStateMatcher: "errorStateMatcher" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR, useExisting: MatStartDate, multi: true },
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS, useExisting: MatStartDate, multi: true }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatStartDate.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_RANGE_INPUT_PARENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStartDate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'input[matStartDate]',
                host: {
                    'class': 'mat-start-date mat-date-range-input-inner',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(keydown)': '_onKeydown($event)',
                    '[attr.id]': '_rangeInput.id',
                    '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
                    '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
                    '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
                    '(blur)': '_onBlur()',
                    'type': 'text'
                },
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR, useExisting: MatStartDate, multi: true },
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS, useExisting: MatStartDate, multi: true }
                ],
                // These need to be specified explicitly, because some tooling doesn't
                // seem to pick them up from the base class. See #20932.
                outputs: ['dateChange', 'dateInput'],
                inputs: ['errorStateMatcher']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_RANGE_INPUT_PARENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }]; }, null); })();
/** Input for entering the end date in a `mat-date-range-input`. */
class MatEndDate extends _MatDateRangeInputBase {
    constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
        // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
        // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
        // constructor once ViewEngine is removed.
        super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
        /** Validator that checks that the end date isn't before the start date. */
        this._endValidator = (control) => {
            const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const start = this._model ? this._model.selection.start : null;
            return (!end || !start ||
                this._dateAdapter.compareDate(end, start) >= 0) ?
                null : { 'matEndDateInvalid': { 'start': start, 'actual': end } };
        };
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._endValidator]);
    }
    ngOnInit() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngOnInit();
    }
    ngDoCheck() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngDoCheck();
    }
    _getValueFromModel(modelValue) {
        return modelValue.end;
    }
    _shouldHandleChangeEvent(change) {
        var _a;
        if (!super._shouldHandleChangeEvent(change)) {
            return false;
        }
        else {
            return !((_a = change.oldValue) === null || _a === void 0 ? void 0 : _a.end) ? !!change.selection.end :
                !change.selection.end ||
                    !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
        }
    }
    _assignValueToModel(value) {
        if (this._model) {
            const range = new DateRange(this._model.selection.start, value);
            this._model.updateSelection(range, this);
        }
    }
    _onKeydown(event) {
        // If the user is pressing backspace on an empty end input, move focus back to the start.
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.BACKSPACE && !this._elementRef.nativeElement.value) {
            this._rangeInput._startInput.focus();
        }
        super._onKeydown(event);
    }
}
MatEndDate.ɵfac = function MatEndDate_Factory(t) { return new (t || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8)); };
MatEndDate.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatEndDate, selectors: [["input", "matEndDate", ""]], hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"], hostVars: 5, hostBindings: function MatEndDate_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MatEndDate_change_HostBindingHandler() { return ctx._onChange(); })("keydown", function MatEndDate_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("blur", function MatEndDate_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    } }, inputs: { errorStateMatcher: "errorStateMatcher" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR, useExisting: MatEndDate, multi: true },
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS, useExisting: MatEndDate, multi: true }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatEndDate.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_RANGE_INPUT_PARENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatEndDate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'input[matEndDate]',
                host: {
                    'class': 'mat-end-date mat-date-range-input-inner',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(keydown)': '_onKeydown($event)',
                    '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
                    '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
                    '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
                    '(blur)': '_onBlur()',
                    'type': 'text'
                },
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR, useExisting: MatEndDate, multi: true },
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS, useExisting: MatEndDate, multi: true }
                ],
                // These need to be specified explicitly, because some tooling doesn't
                // seem to pick them up from the base class. See #20932.
                outputs: ['dateChange', 'dateInput'],
                inputs: ['errorStateMatcher']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_RANGE_INPUT_PARENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextUniqueId = 0;
class MatDateRangeInput {
    constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._formField = _formField;
        this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** Unique ID for the input. */
        this.id = `mat-date-range-input-${nextUniqueId++}`;
        /** Whether the control is focused. */
        this.focused = false;
        /** Name of the form control. */
        this.controlType = 'mat-date-range-input';
        this._groupDisabled = false;
        /** Value for the `aria-describedby` attribute of the inputs. */
        this._ariaDescribedBy = null;
        /** Separator text to be shown between the inputs. */
        this.separator = '–';
        /** Start of the comparison range that should be shown in the calendar. */
        this.comparisonStart = null;
        /** End of the comparison range that should be shown in the calendar. */
        this.comparisonEnd = null;
        /** Emits when the input's state has changed. */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        if (!_dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
        }
        // The datepicker module can be used both with MDC and non-MDC form fields. We have
        // to conditionally add the MDC input class so that the range picker looks correctly.
        if (_formField === null || _formField === void 0 ? void 0 : _formField._elementRef.nativeElement.classList.contains('mat-mdc-form-field')) {
            const classList = _elementRef.nativeElement.classList;
            classList.add('mat-mdc-input-element');
            classList.add('mat-mdc-form-field-control');
        }
        // TODO(crisbeto): remove `as any` after #18206 lands.
        this.ngControl = control;
    }
    /** Current value of the range input. */
    get value() {
        return this._model ? this._model.selection : null;
    }
    /** Whether the control's label should float. */
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * Set the placeholder attribute on `matStartDate` and `matEndDate`.
     * @docs-private
     */
    get placeholder() {
        var _a, _b;
        const start = ((_a = this._startInput) === null || _a === void 0 ? void 0 : _a._getPlaceholder()) || '';
        const end = ((_b = this._endInput) === null || _b === void 0 ? void 0 : _b._getPlaceholder()) || '';
        return (start || end) ? `${start} ${this.separator} ${end}` : '';
    }
    /** The range picker that this input is associated with. */
    get rangePicker() { return this._rangePicker; }
    set rangePicker(rangePicker) {
        if (rangePicker) {
            this._model = rangePicker.registerInput(this);
            this._rangePicker = rangePicker;
            this._closedSubscription.unsubscribe();
            this._closedSubscription = rangePicker.closedStream.subscribe(() => {
                var _a, _b;
                (_a = this._startInput) === null || _a === void 0 ? void 0 : _a._onTouched();
                (_b = this._endInput) === null || _b === void 0 ? void 0 : _b._onTouched();
            });
            this._registerModel(this._model);
        }
    }
    /** Whether the input is required. */
    get required() { return !!this._required; }
    set required(value) {
        this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    /** Function that can be used to filter out dates within the date range picker. */
    get dateFilter() { return this._dateFilter; }
    set dateFilter(value) {
        const start = this._startInput;
        const end = this._endInput;
        const wasMatchingStart = start && start._matchesFilter(start.value);
        const wasMatchingEnd = end && end._matchesFilter(start.value);
        this._dateFilter = value;
        if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
            start._validatorOnChange();
        }
        if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
            end._validatorOnChange();
        }
    }
    /** The minimum valid date. */
    get min() { return this._min; }
    set min(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._min)) {
            this._min = validValue;
            this._revalidate();
        }
    }
    /** The maximum valid date. */
    get max() { return this._max; }
    set max(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._max)) {
            this._max = validValue;
            this._revalidate();
        }
    }
    /** Whether the input is disabled. */
    get disabled() {
        return (this._startInput && this._endInput) ?
            (this._startInput.disabled && this._endInput.disabled) :
            this._groupDisabled;
    }
    set disabled(value) {
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
        if (newValue !== this._groupDisabled) {
            this._groupDisabled = newValue;
            this.stateChanges.next(undefined);
        }
    }
    /** Whether the input is in an error state. */
    get errorState() {
        if (this._startInput && this._endInput) {
            return this._startInput.errorState || this._endInput.errorState;
        }
        return false;
    }
    /** Whether the datepicker input is empty. */
    get empty() {
        const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
        const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
        return startEmpty && endEmpty;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */
    setDescribedByIds(ids) {
        this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */
    onContainerClick() {
        if (!this.focused && !this.disabled) {
            if (!this._model || !this._model.selection.start) {
                this._startInput.focus();
            }
            else {
                this._endInput.focus();
            }
        }
    }
    ngAfterContentInit() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._startInput) {
                throw Error('mat-date-range-input must contain a matStartDate input');
            }
            if (!this._endInput) {
                throw Error('mat-date-range-input must contain a matEndDate input');
            }
        }
        if (this._model) {
            this._registerModel(this._model);
        }
        // We don't need to unsubscribe from this, because we
        // know that the input streams will be completed on destroy.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
            this.stateChanges.next(undefined);
        });
    }
    ngOnChanges(changes) {
        if (dateInputsHaveChanged(changes, this._dateAdapter)) {
            this.stateChanges.next(undefined);
        }
    }
    ngOnDestroy() {
        this._closedSubscription.unsubscribe();
        this.stateChanges.complete();
    }
    /** Gets the date at which the calendar should start. */
    getStartValue() {
        return this.value ? this.value.start : null;
    }
    /** Gets the input's theme palette. */
    getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    /** Gets the element to which the calendar overlay should be attached. */
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Gets the ID of an element that should be used a description for the calendar overlay. */
    getOverlayLabelId() {
        return this._formField ? this._formField.getLabelId() : null;
    }
    /** Gets the value that is used to mirror the state input. */
    _getInputMirrorValue() {
        return this._startInput ? this._startInput.getMirrorValue() : '';
    }
    /** Whether the input placeholders should be hidden. */
    _shouldHidePlaceholders() {
        return this._startInput ? !this._startInput.isEmpty() : false;
    }
    /** Handles the value in one of the child inputs changing. */
    _handleChildValueChange() {
        this.stateChanges.next(undefined);
        this._changeDetectorRef.markForCheck();
    }
    /** Opens the date range picker associated with the input. */
    _openDatepicker() {
        if (this._rangePicker) {
            this._rangePicker.open();
        }
    }
    /** Whether the separate text should be hidden. */
    _shouldHideSeparator() {
        return (!this._formField || (this._formField.getLabelId() &&
            !this._formField._shouldLabelFloat())) && this.empty;
    }
    /** Gets the value for the `aria-labelledby` attribute of the inputs. */
    _getAriaLabelledby() {
        const formField = this._formField;
        return formField && formField._hasFloatingLabel() ? formField._labelId : null;
    }
    /** Updates the focused state of the range input. */
    _updateFocus(origin) {
        this.focused = origin !== null;
        this.stateChanges.next();
    }
    /** Re-runs the validators on the start/end inputs. */
    _revalidate() {
        if (this._startInput) {
            this._startInput._validatorOnChange();
        }
        if (this._endInput) {
            this._endInput._validatorOnChange();
        }
    }
    /** Registers the current date selection model with the start/end inputs. */
    _registerModel(model) {
        if (this._startInput) {
            this._startInput._registerModel(model);
        }
        if (this._endInput) {
            this._endInput._registerModel(model);
        }
    }
}
MatDateRangeInput.ɵfac = function MatDateRangeInput_Factory(t) { return new (t || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8)); };
MatDateRangeInput.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDateRangeInput, selectors: [["mat-date-range-input"]], contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStartDate, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatEndDate, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
    } }, hostAttrs: ["role", "group", 1, "mat-date-range-input"], hostVars: 8, hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", null)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
    } }, inputs: { separator: "separator", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd", rangePicker: "rangePicker", required: "required", dateFilter: "dateFilter", min: "min", max: "max", disabled: "disabled" }, exportAs: ["matDateRangeInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldControl, useExisting: MatDateRangeInput },
            { provide: MAT_DATE_RANGE_INPUT_PARENT, useExisting: MatDateRangeInput },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c6, decls: 9, vars: 4, consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-start-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-end-wrapper"]], template: function MatDateRangeInput_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) { return ctx._updateFocus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._getInputMirrorValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.separator);
    } }, directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.CdkMonitorFocus], styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"], encapsulation: 2, changeDetection: 0 });
MatDateRangeInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD,] }] }
];
MatDateRangeInput.propDecorators = {
    rangePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    separator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _startInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatStartDate,] }],
    _endInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatEndDate,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangeInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-date-range-input',
                template: "<div\n  class=\"mat-date-range-input-container\"\n  cdkMonitorSubtreeFocus\n  (cdkFocusChange)=\"_updateFocus($event)\">\n  <div class=\"mat-date-range-input-start-wrapper\">\n    <ng-content select=\"input[matStartDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue()}}</span>\n  </div>\n\n  <span\n    class=\"mat-date-range-input-separator\"\n    [class.mat-date-range-input-separator-hidden]=\"_shouldHideSeparator()\">{{separator}}</span>\n\n  <div class=\"mat-date-range-input-end-wrapper\">\n    <ng-content select=\"input[matEndDate]\"></ng-content>\n  </div>\n</div>\n\n",
                exportAs: 'matDateRangeInput',
                host: {
                    'class': 'mat-date-range-input',
                    '[class.mat-date-range-input-hide-placeholders]': '_shouldHidePlaceholders()',
                    '[class.mat-date-range-input-required]': 'required',
                    '[attr.id]': 'null',
                    'role': 'group',
                    '[attr.aria-labelledby]': '_getAriaLabelledby()',
                    '[attr.aria-describedby]': '_ariaDescribedBy',
                    // Used by the test harness to tie this input to its calendar. We can't depend on
                    // `aria-owns` for this, because it's only defined while the calendar is open.
                    '[attr.data-mat-calendar]': 'rangePicker ? rangePicker.id : null'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldControl, useExisting: MatDateRangeInput },
                    { provide: MAT_DATE_RANGE_INPUT_PARENT, useExisting: MatDateRangeInput },
                ],
                styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD]
            }] }]; }, { separator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rangePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _startInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatStartDate]
        }], _endInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatEndDate]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
// directive if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the date range picker popup/dialog. */
class MatDateRangePicker extends MatDatepickerBase {
    _forwardContentValues(instance) {
        super._forwardContentValues(instance);
        const input = this.datepickerInput;
        if (input) {
            instance.comparisonStart = input.comparisonStart;
            instance.comparisonEnd = input.comparisonEnd;
        }
    }
}
MatDateRangePicker.ɵfac = /*@__PURE__*/ function () { let ɵMatDateRangePicker_BaseFactory; return function MatDateRangePicker_Factory(t) { return (ɵMatDateRangePicker_BaseFactory || (ɵMatDateRangePicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDateRangePicker)))(t || MatDateRangePicker); }; }();
MatDateRangePicker.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDateRangePicker, selectors: [["mat-date-range-picker"]], exportAs: ["matDateRangePicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER,
            MAT_CALENDAR_RANGE_STRATEGY_PROVIDER,
            { provide: MatDatepickerBase, useExisting: MatDateRangePicker },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function MatDateRangePicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangePicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-date-range-picker',
                template: '',
                exportAs: 'matDateRangePicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [
                    MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER,
                    MAT_CALENDAR_RANGE_STRATEGY_PROVIDER,
                    { provide: MatDatepickerBase, useExisting: MatDateRangePicker },
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that will close the datepicker and assign the current selection to the data model. */
class MatDatepickerApply {
    constructor(_datepicker) {
        this._datepicker = _datepicker;
    }
    _applySelection() {
        this._datepicker._applyPendingSelection();
        this._datepicker.close();
    }
}
MatDatepickerApply.ɵfac = function MatDatepickerApply_Factory(t) { return new (t || MatDatepickerApply)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase)); };
MatDatepickerApply.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerApply, selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]], hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerApply_click_HostBindingHandler() { return ctx._applySelection(); });
    } } });
MatDatepickerApply.ctorParameters = () => [
    { type: MatDatepickerBase }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerApply, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matDatepickerApply], [matDateRangePickerApply]',
                host: { '(click)': '_applySelection()' }
            }]
    }], function () { return [{ type: MatDatepickerBase }]; }, null); })();
/** Button that will close the datepicker and discard the current selection. */
class MatDatepickerCancel {
    constructor(_datepicker) {
        this._datepicker = _datepicker;
    }
}
MatDatepickerCancel.ɵfac = function MatDatepickerCancel_Factory(t) { return new (t || MatDatepickerCancel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase)); };
MatDatepickerCancel.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerCancel, selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]], hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerCancel_click_HostBindingHandler() { return ctx._datepicker.close(); });
    } } });
MatDatepickerCancel.ctorParameters = () => [
    { type: MatDatepickerBase }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerCancel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matDatepickerCancel], [matDateRangePickerCancel]',
                host: { '(click)': '_datepicker.close()' }
            }]
    }], function () { return [{ type: MatDatepickerBase }]; }, null); })();
/**
 * Container that can be used to project a row of action buttons
 * to the bottom of a datepicker or date range picker.
 */
class MatDatepickerActions {
    constructor(_datepicker, _viewContainerRef) {
        this._datepicker = _datepicker;
        this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.TemplatePortal(this._template, this._viewContainerRef);
        this._datepicker.registerActions(this._portal);
    }
    ngOnDestroy() {
        var _a;
        this._datepicker.removeActions(this._portal);
        // Needs to be null checked since we initialize it in `ngAfterViewInit`.
        if (this._portal && this._portal.isAttached) {
            (_a = this._portal) === null || _a === void 0 ? void 0 : _a.detach();
        }
    }
}
MatDatepickerActions.ɵfac = function MatDatepickerActions_Factory(t) { return new (t || MatDatepickerActions)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
MatDatepickerActions.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDatepickerActions, selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]], viewQuery: function MatDatepickerActions_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._template = _t.first);
    } }, ngContentSelectors: _c1, decls: 1, vars: 0, consts: [[1, "mat-datepicker-actions"]], template: function MatDatepickerActions_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
    } }, styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, changeDetection: 0 });
MatDatepickerActions.ctorParameters = () => [
    { type: MatDatepickerBase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }
];
MatDatepickerActions.propDecorators = {
    _template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-datepicker-actions, mat-date-range-picker-actions',
                template: `
    <ng-template>
      <div class="mat-datepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: MatDatepickerBase }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }]; }, { _template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatDatepickerModule {
}
MatDatepickerModule.ɵfac = function MatDatepickerModule_Factory(t) { return new (t || MatDatepickerModule)(); };
MatDatepickerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatDatepickerModule });
MatDatepickerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        MatDatepickerIntl,
        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule,
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.A11yModule,
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule,
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule,
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.A11yModule,
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule,
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule,
                    MatCalendar,
                    MatCalendarBody,
                    MatDatepicker,
                    MatDatepickerContent,
                    MatDatepickerInput,
                    MatDatepickerToggle,
                    MatDatepickerToggleIcon,
                    MatMonthView,
                    MatYearView,
                    MatMultiYearView,
                    MatCalendarHeader,
                    MatDateRangeInput,
                    MatStartDate,
                    MatEndDate,
                    MatDateRangePicker,
                    MatDatepickerActions,
                    MatDatepickerCancel,
                    MatDatepickerApply
                ],
                declarations: [
                    MatCalendar,
                    MatCalendarBody,
                    MatDatepicker,
                    MatDatepickerContent,
                    MatDatepickerInput,
                    MatDatepickerToggle,
                    MatDatepickerToggleIcon,
                    MatMonthView,
                    MatYearView,
                    MatMultiYearView,
                    MatCalendarHeader,
                    MatDateRangeInput,
                    MatStartDate,
                    MatEndDate,
                    MatDateRangePicker,
                    MatDatepickerActions,
                    MatDatepickerCancel,
                    MatDatepickerApply
                ],
                providers: [
                    MatDatepickerIntl,
                    MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
                ],
                entryComponents: [
                    MatDatepickerContent,
                    MatCalendarHeader,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatDatepickerModule, { declarations: function () { return [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.A11yModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 5788:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_ERROR": () => (/* binding */ MAT_ERROR),
/* harmony export */   "MAT_FORM_FIELD": () => (/* binding */ MAT_FORM_FIELD),
/* harmony export */   "MAT_FORM_FIELD_DEFAULT_OPTIONS": () => (/* binding */ MAT_FORM_FIELD_DEFAULT_OPTIONS),
/* harmony export */   "MAT_PREFIX": () => (/* binding */ MAT_PREFIX),
/* harmony export */   "MAT_SUFFIX": () => (/* binding */ MAT_SUFFIX),
/* harmony export */   "MatError": () => (/* binding */ MatError),
/* harmony export */   "MatFormField": () => (/* binding */ MatFormField),
/* harmony export */   "MatFormFieldControl": () => (/* binding */ MatFormFieldControl),
/* harmony export */   "MatFormFieldModule": () => (/* binding */ MatFormFieldModule),
/* harmony export */   "MatHint": () => (/* binding */ MatHint),
/* harmony export */   "MatLabel": () => (/* binding */ MatLabel),
/* harmony export */   "MatPlaceholder": () => (/* binding */ MatPlaceholder),
/* harmony export */   "MatPrefix": () => (/* binding */ MatPrefix),
/* harmony export */   "MatSuffix": () => (/* binding */ MatSuffix),
/* harmony export */   "_MAT_HINT": () => (/* binding */ _MAT_HINT),
/* harmony export */   "getMatFormFieldDuplicatedHintError": () => (/* binding */ getMatFormFieldDuplicatedHintError),
/* harmony export */   "getMatFormFieldMissingControlError": () => (/* binding */ getMatFormFieldMissingControlError),
/* harmony export */   "getMatFormFieldPlaceholderConflictError": () => (/* binding */ getMatFormFieldPlaceholderConflictError),
/* harmony export */   "matFormFieldAnimations": () => (/* binding */ matFormFieldAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/observers */ 851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7159);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7993);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4094);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5116);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






const _c0 = ["underline"];
const _c1 = ["connectionContainer"];
const _c2 = ["inputContainer"];
const _c3 = ["label"];
function MatFormField_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MatFormField_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MatFormField_label_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
} }
function MatFormField_label_9_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
} }
function MatFormField_label_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MatFormField_label_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.updateOutlineGap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
} }
function MatFormField_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MatFormField_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
} }
function MatFormField_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
} }
function MatFormField_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r16._hintLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
} }
function MatFormField_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
} }
const _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
const _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
let nextUniqueId$2 = 0;
/**
 * Injection token that can be used to reference instances of `MatError`. It serves as
 * alternative token to the actual `MatError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatError');
/** Single error message to be shown underneath the form field. */
class MatError {
    constructor(ariaLive, elementRef) {
        this.id = `mat-error-${nextUniqueId$2++}`;
        // If no aria-live value is set add 'polite' as a default. This is preferred over setting
        // role='alert' so that screen readers do not interrupt the current task to read this aloud.
        if (!ariaLive) {
            elementRef.nativeElement.setAttribute('aria-live', 'polite');
        }
    }
}
MatError.ɵfac = function MatError_Factory(t) { return new (t || MatError)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-live'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
MatError.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatError, selectors: [["mat-error"]], hostAttrs: ["aria-atomic", "true", 1, "mat-error"], hostVars: 1, hostBindings: function MatError_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
    } }, inputs: { id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_ERROR, useExisting: MatError }])] });
MatError.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['aria-live',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
MatError.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatError, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-error',
                host: {
                    'class': 'mat-error',
                    '[attr.id]': 'id',
                    'aria-atomic': 'true'
                },
                providers: [{ provide: MAT_ERROR, useExisting: MatError }]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['aria-live']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the MatFormField.
 * @docs-private
 */
const matFormFieldAnimations = {
    /** Animation that transitions the form field's error and hint messages. */
    transitionMessages: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transitionMessages', [
        // TODO(mmalerba): Use angular animations for label animation as well.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 1, transform: 'translateY(0%)' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 0, transform: 'translateY(-5px)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
        ]),
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** An interface which allows a control to work inside of a `MatFormField`. */
class MatFormFieldControl {
}
MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) { return new (t || MatFormFieldControl)(); };
MatFormFieldControl.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFormFieldControl });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
function getMatFormFieldPlaceholderConflictError() {
    return Error('Placeholder attribute and child element were both specified.');
}
/** @docs-private */
function getMatFormFieldDuplicatedHintError(align) {
    return Error(`A hint was already declared for 'align="${align}"'.`);
}
/** @docs-private */
function getMatFormFieldMissingControlError() {
    return Error('mat-form-field must contain a MatFormFieldControl.');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextUniqueId$1 = 0;
/**
 * Injection token that can be used to reference instances of `MatHint`. It serves as
 * alternative token to the actual `MatHint` class which could cause unnecessary
 * retention of the class and its directive metadata.
 *
 * *Note*: This is not part of the public API as the MDC-based form-field will not
 * need a lightweight token for `MatHint` and we want to reduce breaking changes.
 */
const _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatHint');
/** Hint text to be shown underneath the form field control. */
class MatHint {
    constructor() {
        /** Whether to align the hint label at the start or end of the line. */
        this.align = 'start';
        /** Unique ID for the hint. Used for the aria-describedby on the form field control. */
        this.id = `mat-hint-${nextUniqueId$1++}`;
    }
}
MatHint.ɵfac = function MatHint_Factory(t) { return new (t || MatHint)(); };
MatHint.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHint, selectors: [["mat-hint"]], hostAttrs: [1, "mat-hint"], hostVars: 4, hostBindings: function MatHint_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("align", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-form-field-hint-end", ctx.align === "end");
    } }, inputs: { align: "align", id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _MAT_HINT, useExisting: MatHint }])] });
MatHint.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHint, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-hint',
                host: {
                    'class': 'mat-hint',
                    '[class.mat-form-field-hint-end]': 'align === "end"',
                    '[attr.id]': 'id',
                    // Remove align attribute to prevent it from interfering with layout.
                    '[attr.align]': 'null'
                },
                providers: [{ provide: _MAT_HINT, useExisting: MatHint }]
            }]
    }], function () { return []; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The floating label for a `mat-form-field`. */
class MatLabel {
}
MatLabel.ɵfac = function MatLabel_Factory(t) { return new (t || MatLabel)(); };
MatLabel.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatLabel, selectors: [["mat-label"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-label'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * @breaking-change 8.0.0
 */
class MatPlaceholder {
}
MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) { return new (t || MatPlaceholder)(); };
MatPlaceholder.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatPlaceholder, selectors: [["mat-placeholder"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-placeholder'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatPrefix`. It serves as
 * alternative token to the actual `MatPrefix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatPrefix');
/** Prefix to be placed in front of the form field. */
class MatPrefix {
}
MatPrefix.ɵfac = function MatPrefix_Factory(t) { return new (t || MatPrefix)(); };
MatPrefix.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatPrefix, selectors: [["", "matPrefix", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_PREFIX, useExisting: MatPrefix }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPrefix, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matPrefix]',
                providers: [{ provide: MAT_PREFIX, useExisting: MatPrefix }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatSuffix`. It serves as
 * alternative token to the actual `MatSuffix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSuffix');
/** Suffix to be placed at the end of the form field. */
class MatSuffix {
}
MatSuffix.ɵfac = function MatSuffix_Factory(t) { return new (t || MatSuffix)(); };
MatSuffix.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatSuffix, selectors: [["", "matSuffix", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_SUFFIX, useExisting: MatSuffix }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSuffix, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matSuffix]',
                providers: [{ provide: MAT_SUFFIX, useExisting: MatSuffix }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextUniqueId = 0;
const floatingLabelScale = 0.75;
const outlineGapPadding = 5;
/**
 * Boilerplate for applying mixins to MatFormField.
 * @docs-private
 */
const _MatFormFieldBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)(class {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}, 'primary');
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 */
const MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/**
 * Injection token that can be used to inject an instances of `MatFormField`. It serves
 * as alternative token to the actual `MatFormField` class which would cause unnecessary
 * retention of the `MatFormField` class and its component metadata.
 */
const MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatFormField');
/** Container for form controls that applies Material Design styling and behavior. */
class MatFormField extends _MatFormFieldBase {
    constructor(elementRef, _changeDetectorRef, 
    /**
     * @deprecated `_labelOptions` parameter no longer being used. To be removed.
     * @breaking-change 12.0.0
     */
    // Use `ElementRef` here so Angular has something to inject.
    _labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._defaults = _defaults;
        this._platform = _platform;
        this._ngZone = _ngZone;
        /**
         * Whether the outline gap needs to be calculated
         * immediately on the next change detection run.
         */
        this._outlineGapCalculationNeededImmediately = false;
        /** Whether the outline gap needs to be calculated next time the zone has stabilized. */
        this._outlineGapCalculationNeededOnStable = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        /** Override for the logic that disables the label animation in certain cases. */
        this._showAlwaysAnimate = false;
        /** State of the mat-hint and mat-error animations. */
        this._subscriptAnimationState = '';
        this._hintLabel = '';
        // Unique id for the hint label.
        this._hintLabelId = `mat-hint-${nextUniqueId++}`;
        // Unique id for the label element.
        this._labelId = `mat-form-field-label-${nextUniqueId++}`;
        this.floatLabel = this._getDefaultFloatLabelState();
        this._animationsEnabled = _animationMode !== 'NoopAnimations';
        // Set the default through here so we invoke the setter on the first run.
        this.appearance = (_defaults && _defaults.appearance) ? _defaults.appearance : 'legacy';
        this._hideRequiredMarker = (_defaults && _defaults.hideRequiredMarker != null) ?
            _defaults.hideRequiredMarker : false;
    }
    /** The form-field appearance style. */
    get appearance() { return this._appearance; }
    set appearance(value) {
        const oldValue = this._appearance;
        this._appearance = value || (this._defaults && this._defaults.appearance) || 'legacy';
        if (this._appearance === 'outline' && oldValue !== value) {
            this._outlineGapCalculationNeededOnStable = true;
        }
    }
    /** Whether the required marker should be hidden. */
    get hideRequiredMarker() { return this._hideRequiredMarker; }
    set hideRequiredMarker(value) {
        this._hideRequiredMarker = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
    }
    /** Whether the floating label should always float or not. */
    _shouldAlwaysFloat() {
        return this.floatLabel === 'always' && !this._showAlwaysAnimate;
    }
    /** Whether the label can float or not. */
    _canLabelFloat() { return this.floatLabel !== 'never'; }
    /** Text for the form field hint. */
    get hintLabel() { return this._hintLabel; }
    set hintLabel(value) {
        this._hintLabel = value;
        this._processHints();
    }
    /**
     * Whether the label should always float, never float or float as the user types.
     *
     * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
     * way to make the floating label emulate the behavior of a standard input placeholder. However
     * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
     * appearances the `never` option has been disabled in favor of just using the placeholder.
     */
    get floatLabel() {
        return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
    }
    set floatLabel(value) {
        if (value !== this._floatLabel) {
            this._floatLabel = value || this._getDefaultFloatLabelState();
            this._changeDetectorRef.markForCheck();
        }
    }
    get _control() {
        // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
        //  We should clean this up once Ivy is the default renderer.
        return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
    }
    set _control(value) {
        this._explicitFormFieldControl = value;
    }
    /**
     * Gets the id of the label element. If no label is present, returns `null`.
     */
    getLabelId() {
        return this._hasFloatingLabel() ? this._labelId : null;
    }
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     */
    getConnectedOverlayOrigin() {
        return this._connectionContainerRef || this._elementRef;
    }
    ngAfterContentInit() {
        this._validateControlChild();
        const control = this._control;
        if (control.controlType) {
            this._elementRef.nativeElement.classList.add(`mat-form-field-type-${control.controlType}`);
        }
        // Subscribe to changes in the child control state in order to update the form field UI.
        control.stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null)).subscribe(() => {
            this._validatePlaceholders();
            this._syncDescribedByIds();
            this._changeDetectorRef.markForCheck();
        });
        // Run change detection if the value changes.
        if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed))
                .subscribe(() => this._changeDetectorRef.markForCheck());
        }
        // Note that we have to run outside of the `NgZone` explicitly,
        // in order to avoid throwing users into an infinite loop
        // if `zone-patch-rxjs` is included.
        this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
                if (this._outlineGapCalculationNeededOnStable) {
                    this.updateOutlineGap();
                }
            });
        });
        // Run change detection and update the outline if the suffix or prefix changes.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
            this._outlineGapCalculationNeededOnStable = true;
            this._changeDetectorRef.markForCheck();
        });
        // Re-validate when the number of hints changes.
        this._hintChildren.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null)).subscribe(() => {
            this._processHints();
            this._changeDetectorRef.markForCheck();
        });
        // Update the aria-described by when the number of errors changes.
        this._errorChildren.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null)).subscribe(() => {
            this._syncDescribedByIds();
            this._changeDetectorRef.markForCheck();
        });
        if (this._dir) {
            this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
                if (typeof requestAnimationFrame === 'function') {
                    this._ngZone.runOutsideAngular(() => {
                        requestAnimationFrame(() => this.updateOutlineGap());
                    });
                }
                else {
                    this.updateOutlineGap();
                }
            });
        }
    }
    ngAfterContentChecked() {
        this._validateControlChild();
        if (this._outlineGapCalculationNeededImmediately) {
            this.updateOutlineGap();
        }
    }
    ngAfterViewInit() {
        // Avoid animations on load.
        this._subscriptAnimationState = 'enter';
        this._changeDetectorRef.detectChanges();
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Determines whether a class from the NgControl should be forwarded to the host element. */
    _shouldForward(prop) {
        const ngControl = this._control ? this._control.ngControl : null;
        return ngControl && ngControl[prop];
    }
    _hasPlaceholder() {
        return !!(this._control && this._control.placeholder || this._placeholderChild);
    }
    _hasLabel() {
        return !!(this._labelChildNonStatic || this._labelChildStatic);
    }
    _shouldLabelFloat() {
        return this._canLabelFloat() &&
            ((this._control && this._control.shouldLabelFloat) || this._shouldAlwaysFloat());
    }
    _hideControlPlaceholder() {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this.appearance === 'legacy' && !this._hasLabel() ||
            this._hasLabel() && !this._shouldLabelFloat();
    }
    _hasFloatingLabel() {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
    }
    /** Determines whether to display hints or errors. */
    _getDisplayedMessages() {
        return (this._errorChildren && this._errorChildren.length > 0 &&
            this._control.errorState) ? 'error' : 'hint';
    }
    /** Animates the placeholder up and locks it in position. */
    _animateAndLockLabel() {
        if (this._hasFloatingLabel() && this._canLabelFloat()) {
            // If animations are disabled, we shouldn't go in here,
            // because the `transitionend` will never fire.
            if (this._animationsEnabled && this._label) {
                this._showAlwaysAnimate = true;
                (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this._label.nativeElement, 'transitionend').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
                    this._showAlwaysAnimate = false;
                });
            }
            this.floatLabel = 'always';
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     */
    _validatePlaceholders() {
        if (this._control.placeholder && this._placeholderChild &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatFormFieldPlaceholderConflictError();
        }
    }
    /** Does any extra processing that is required when handling the hints. */
    _processHints() {
        this._validateHints();
        this._syncDescribedByIds();
    }
    /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */
    _validateHints() {
        if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            let startHint;
            let endHint;
            this._hintChildren.forEach((hint) => {
                if (hint.align === 'start') {
                    if (startHint || this.hintLabel) {
                        throw getMatFormFieldDuplicatedHintError('start');
                    }
                    startHint = hint;
                }
                else if (hint.align === 'end') {
                    if (endHint) {
                        throw getMatFormFieldDuplicatedHintError('end');
                    }
                    endHint = hint;
                }
            });
        }
    }
    /** Gets the default float label state. */
    _getDefaultFloatLabelState() {
        return (this._defaults && this._defaults.floatLabel) || 'auto';
    }
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     */
    _syncDescribedByIds() {
        if (this._control) {
            let ids = [];
            // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.
            if (this._control.userAriaDescribedBy &&
                typeof this._control.userAriaDescribedBy === 'string') {
                ids.push(...this._control.userAriaDescribedBy.split(' '));
            }
            if (this._getDisplayedMessages() === 'hint') {
                const startHint = this._hintChildren ?
                    this._hintChildren.find(hint => hint.align === 'start') : null;
                const endHint = this._hintChildren ?
                    this._hintChildren.find(hint => hint.align === 'end') : null;
                if (startHint) {
                    ids.push(startHint.id);
                }
                else if (this._hintLabel) {
                    ids.push(this._hintLabelId);
                }
                if (endHint) {
                    ids.push(endHint.id);
                }
            }
            else if (this._errorChildren) {
                ids.push(...this._errorChildren.map(error => error.id));
            }
            this._control.setDescribedByIds(ids);
        }
    }
    /** Throws an error if the form field's control is missing. */
    _validateControlChild() {
        if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatFormFieldMissingControlError();
        }
    }
    /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     */
    updateOutlineGap() {
        const labelEl = this._label ? this._label.nativeElement : null;
        if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length ||
            !labelEl.textContent.trim()) {
            return;
        }
        if (!this._platform.isBrowser) {
            // getBoundingClientRect isn't available on the server.
            return;
        }
        // If the element is not present in the DOM, the outline gap will need to be calculated
        // the next time it is checked and in the DOM.
        if (!this._isAttachedToDOM()) {
            this._outlineGapCalculationNeededImmediately = true;
            return;
        }
        let startWidth = 0;
        let gapWidth = 0;
        const container = this._connectionContainerRef.nativeElement;
        const startEls = container.querySelectorAll('.mat-form-field-outline-start');
        const gapEls = container.querySelectorAll('.mat-form-field-outline-gap');
        if (this._label && this._label.nativeElement.children.length) {
            const containerRect = container.getBoundingClientRect();
            // If the container's width and height are zero, it means that the element is
            // invisible and we can't calculate the outline gap. Mark the element as needing
            // to be checked the next time the zone stabilizes. We can't do this immediately
            // on the next change detection, because even if the element becomes visible,
            // the `ClientRect` won't be reclaculated immediately. We reset the
            // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.
            if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
            }
            const containerStart = this._getStartEnd(containerRect);
            const labelChildren = labelEl.children;
            const labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());
            let labelWidth = 0;
            for (let i = 0; i < labelChildren.length; i++) {
                labelWidth += labelChildren[i].offsetWidth;
            }
            startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
            gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
        }
        for (let i = 0; i < startEls.length; i++) {
            startEls[i].style.width = `${startWidth}px`;
        }
        for (let i = 0; i < gapEls.length; i++) {
            gapEls[i].style.width = `${gapWidth}px`;
        }
        this._outlineGapCalculationNeededOnStable =
            this._outlineGapCalculationNeededImmediately = false;
    }
    /** Gets the start end of the rect considering the current directionality. */
    _getStartEnd(rect) {
        return (this._dir && this._dir.value === 'rtl') ? rect.right : rect.left;
    }
    /** Checks whether the form field is attached to the DOM. */
    _isAttachedToDOM() {
        const element = this._elementRef.nativeElement;
        if (element.getRootNode) {
            const rootNode = element.getRootNode();
            // If the element is inside the DOM the root node will be either the document
            // or the closest shadow root, otherwise it'll be the element itself.
            return rootNode && rootNode !== element;
        }
        // Otherwise fall back to checking if it's in the document. This doesn't account for
        // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.
        return document.documentElement.contains(element);
    }
}
MatFormField.ɵfac = function MatFormField_Factory(t) { return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE, 8)); };
MatFormField.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatFormField, selectors: [["mat-form-field"]], contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatLabel, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatLabel, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
    } }, viewQuery: function MatFormField_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
    } }, hostAttrs: [1, "mat-form-field"], hostVars: 40, hostBindings: function MatFormField_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
    } }, inputs: { color: "color", floatLabel: "floatLabel", appearance: "appearance", hideRequiredMarker: "hideRequiredMarker", hintLabel: "hintLabel" }, exportAs: ["matFormField"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: MAT_FORM_FIELD, useExisting: MatFormField },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c5, decls: 15, vars: 8, consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]], template: function MatFormField_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) { return ctx._control.onContainerClick && ctx._control.onContainerClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "hint");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__.CdkObserveContent], styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"], encapsulation: 2, data: { animation: [matFormFieldAnimations.transitionMessages] }, changeDetection: 0 });
MatFormField.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_FORM_FIELD_DEFAULT_OPTIONS,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE,] }] }
];
MatFormField.propDecorators = {
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hideRequiredMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hintLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    floatLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    underlineRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['underline',] }],
    _connectionContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['connectionContainer', { static: true },] }],
    _inputContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['inputContainer',] }],
    _label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['label',] }],
    _controlNonStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatFormFieldControl,] }],
    _controlStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatFormFieldControl, { static: true },] }],
    _labelChildNonStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatLabel,] }],
    _labelChildStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatLabel, { static: true },] }],
    _placeholderChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatPlaceholder,] }],
    _errorChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MAT_ERROR, { descendants: true },] }],
    _hintChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_MAT_HINT, { descendants: true },] }],
    _prefixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MAT_PREFIX, { descendants: true },] }],
    _suffixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MAT_SUFFIX, { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormField, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-form-field',
                exportAs: 'matFormField',
                template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
                animations: [matFormFieldAnimations.transitionMessages],
                host: {
                    'class': 'mat-form-field',
                    '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
                    '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
                    '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
                    '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
                    '[class.mat-form-field-invalid]': '_control.errorState',
                    '[class.mat-form-field-can-float]': '_canLabelFloat()',
                    '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
                    '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
                    '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
                    '[class.mat-form-field-disabled]': '_control.disabled',
                    '[class.mat-form-field-autofilled]': '_control.autofilled',
                    '[class.mat-focused]': '_control.focused',
                    '[class.ng-untouched]': '_shouldForward("untouched")',
                    '[class.ng-touched]': '_shouldForward("touched")',
                    '[class.ng-pristine]': '_shouldForward("pristine")',
                    '[class.ng-dirty]': '_shouldForward("dirty")',
                    '[class.ng-valid]': '_shouldForward("valid")',
                    '[class.ng-invalid]': '_shouldForward("invalid")',
                    '[class.ng-pending]': '_shouldForward("pending")',
                    '[class._mat-animation-noopable]': '!_animationsEnabled'
                },
                inputs: ['color'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                providers: [
                    { provide: MAT_FORM_FIELD, useExisting: MatFormField },
                ],
                styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
            }] }]; }, { floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hideRequiredMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hintLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], underlineRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['underline']
        }], _connectionContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['connectionContainer', { static: true }]
        }], _inputContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['inputContainer']
        }], _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['label']
        }], _controlNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatFormFieldControl]
        }], _controlStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatFormFieldControl, { static: true }]
        }], _labelChildNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatLabel]
        }], _labelChildStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatLabel, { static: true }]
        }], _placeholderChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatPlaceholder]
        }], _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MAT_ERROR, { descendants: true }]
        }], _hintChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_MAT_HINT, { descendants: true }]
        }], _prefixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MAT_PREFIX, { descendants: true }]
        }], _suffixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MAT_SUFFIX, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatFormFieldModule {
}
MatFormFieldModule.ɵfac = function MatFormFieldModule_Factory(t) { return new (t || MatFormFieldModule)(); };
MatFormFieldModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatFormFieldModule });
MatFormFieldModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__.ObserversModule,
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    MatError,
                    MatFormField,
                    MatHint,
                    MatLabel,
                    MatPlaceholder,
                    MatPrefix,
                    MatSuffix,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__.ObserversModule,
                ],
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
                    MatError,
                    MatFormField,
                    MatHint,
                    MatLabel,
                    MatPlaceholder,
                    MatPrefix,
                    MatSuffix,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatFormFieldModule, { declarations: function () { return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__.ObserversModule]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 4742:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_INPUT_VALUE_ACCESSOR": () => (/* binding */ MAT_INPUT_VALUE_ACCESSOR),
/* harmony export */   "MatInput": () => (/* binding */ MatInput),
/* harmony export */   "MatInputModule": () => (/* binding */ MatInputModule),
/* harmony export */   "MatTextareaAutosize": () => (/* binding */ MatTextareaAutosize),
/* harmony export */   "getMatInputUnsupportedTypeError": () => (/* binding */ getMatInputUnsupportedTypeError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/text-field */ 7085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 931);









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
 * @breaking-change 8.0.0
 */






class MatTextareaAutosize extends _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__.CdkTextareaAutosize {
    get matAutosizeMinRows() { return this.minRows; }
    set matAutosizeMinRows(value) { this.minRows = value; }
    get matAutosizeMaxRows() { return this.maxRows; }
    set matAutosizeMaxRows(value) { this.maxRows = value; }
    get matAutosize() { return this.enabled; }
    set matAutosize(value) { this.enabled = value; }
    get matTextareaAutosize() { return this.enabled; }
    set matTextareaAutosize(value) { this.enabled = value; }
}
MatTextareaAutosize.ɵfac = /*@__PURE__*/ function () { let ɵMatTextareaAutosize_BaseFactory; return function MatTextareaAutosize_Factory(t) { return (ɵMatTextareaAutosize_BaseFactory || (ɵMatTextareaAutosize_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextareaAutosize)))(t || MatTextareaAutosize); }; }();
MatTextareaAutosize.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatTextareaAutosize, selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]], hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"], inputs: { cdkAutosizeMinRows: "cdkAutosizeMinRows", cdkAutosizeMaxRows: "cdkAutosizeMaxRows", matAutosizeMinRows: "matAutosizeMinRows", matAutosizeMaxRows: "matAutosizeMaxRows", matAutosize: ["mat-autosize", "matAutosize"], matTextareaAutosize: "matTextareaAutosize" }, exportAs: ["matTextareaAutosize"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
MatTextareaAutosize.propDecorators = {
    matAutosizeMinRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    matAutosizeMaxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    matAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['mat-autosize',] }],
    matTextareaAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTextareaAutosize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
                exportAs: 'matTextareaAutosize',
                inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
                host: {
                    'class': 'cdk-textarea-autosize mat-autosize',
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    'rows': '1'
                }
            }]
    }], null, { matAutosizeMinRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], matAutosizeMaxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], matAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['mat-autosize']
        }], matTextareaAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
function getMatInputUnsupportedTypeError(type) {
    return Error(`Input type "${type}" isn't supported by matInput.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */
const MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MAT_INPUT_VALUE_ACCESSOR');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
const MAT_INPUT_INVALID_TYPES = [
    'button',
    'checkbox',
    'file',
    'hidden',
    'image',
    'radio',
    'range',
    'reset',
    'submit'
];
let nextUniqueId = 0;
// Boilerplate for applying mixins to MatInput.
/** @docs-private */
const _MatInputBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinErrorState)(class {
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
    /** @docs-private */
    ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
});
/** Directive that allows a native input to work inside a `MatFormField`. */
class MatInput extends _MatInputBase {
    constructor(_elementRef, _platform, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, 
    // TODO: Remove this once the legacy appearance has been removed. We only need
    // to inject the form-field for determining whether the placeholder has been promoted.
    _formField) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._elementRef = _elementRef;
        this._platform = _platform;
        this._autofillMonitor = _autofillMonitor;
        this._formField = _formField;
        this._uid = `mat-input-${nextUniqueId++}`;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.focused = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.controlType = 'mat-input';
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.autofilled = false;
        this._disabled = false;
        this._required = false;
        this._type = 'text';
        this._readonly = false;
        this._neverEmptyInputTypes = [
            'date',
            'datetime',
            'datetime-local',
            'month',
            'time',
            'week'
        ].filter(t => (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.getSupportedInputTypes)().has(t));
        const element = this._elementRef.nativeElement;
        const nodeName = element.nodeName.toLowerCase();
        // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.
        this._inputValueAccessor = inputValueAccessor || element;
        this._previousNativeValue = this.value;
        // Force setter to be called in case id was not specified.
        this.id = this.id;
        // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
        // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
        // exists on iOS, we only bother to install the listener on iOS.
        if (_platform.IOS) {
            ngZone.runOutsideAngular(() => {
                _elementRef.nativeElement.addEventListener('keyup', (event) => {
                    const el = event.target;
                    // Note: We specifically check for 0, rather than `!el.selectionStart`, because the two
                    // indicate different things. If the value is 0, it means that the caret is at the start
                    // of the input, whereas a value of `null` means that the input doesn't support
                    // manipulating the selection range. Inputs that don't support setting the selection range
                    // will throw an error so we want to avoid calling `setSelectionRange` on them. See:
                    // https://html.spec.whatwg.org/multipage/input.html#do-not-apply
                    if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
                        // Note: Just setting `0, 0` doesn't fix the issue. Setting
                        // `1, 1` fixes it for the first time that you type text and
                        // then hold delete. Toggling to `1, 1` and then back to
                        // `0, 0` seems to completely fix it.
                        el.setSelectionRange(1, 1);
                        el.setSelectionRange(0, 0);
                    }
                });
            });
        }
        this._isServer = !this._platform.isBrowser;
        this._isNativeSelect = nodeName === 'select';
        this._isTextarea = nodeName === 'textarea';
        this._isInFormField = !!_formField;
        if (this._isNativeSelect) {
            this.controlType = element.multiple ? 'mat-native-select-multiple' :
                'mat-native-select';
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
        // Browsers may not fire the blur event if the input is disabled too quickly.
        // Reset from here to ensure that the element doesn't become stuck.
        if (this.focused) {
            this.focused = false;
            this.stateChanges.next();
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get id() { return this._id; }
    set id(value) { this._id = value || this._uid; }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get required() { return this._required; }
    set required(value) { this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value); }
    /** Input type of the element. */
    get type() { return this._type; }
    set type(value) {
        this._type = value || 'text';
        this._validateType();
        // When using Angular inputs, developers are no longer able to set the properties on the native
        // input element. To ensure that bindings for `type` work, we need to sync the setter
        // with the native property. Textarea elements don't support the type property or attribute.
        if (!this._isTextarea && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.getSupportedInputTypes)().has(this._type)) {
            this._elementRef.nativeElement.type = this._type;
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get value() { return this._inputValueAccessor.value; }
    set value(value) {
        if (value !== this.value) {
            this._inputValueAccessor.value = value;
            this.stateChanges.next();
        }
    }
    /** Whether the element is readonly. */
    get readonly() { return this._readonly; }
    set readonly(value) { this._readonly = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value); }
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(event => {
                this.autofilled = event.isAutofilled;
                this.stateChanges.next();
            });
        }
    }
    ngOnChanges() {
        this.stateChanges.next();
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
        // We need to dirty-check the native element's value, because there are some cases where
        // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
        // updating the value using `emitEvent: false`).
        this._dirtyCheckNativeValue();
        // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
        // present or not depends on a query which is prone to "changed after checked" errors.
        this._dirtyCheckPlaceholder();
    }
    /** Focuses the input. */
    focus(options) {
        this._elementRef.nativeElement.focus(options);
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete
    _focusChanged(isFocused) {
        if (isFocused !== this.focused) {
            this.focused = isFocused;
            this.stateChanges.next();
        }
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _onInput() {
        // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    }
    /** Does some manual dirty checking on the native input `placeholder` attribute. */
    _dirtyCheckPlaceholder() {
        var _a, _b;
        // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
        // screen readers will read it out twice: once from the label and once from the attribute.
        // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
        // the only one that supports promoting the placeholder to a label.
        const placeholder = ((_b = (_a = this._formField) === null || _a === void 0 ? void 0 : _a._hideControlPlaceholder) === null || _b === void 0 ? void 0 : _b.call(_a)) ? null : this.placeholder;
        if (placeholder !== this._previousPlaceholder) {
            const element = this._elementRef.nativeElement;
            this._previousPlaceholder = placeholder;
            placeholder ?
                element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
        }
    }
    /** Does some manual dirty checking on the native input `value` property. */
    _dirtyCheckNativeValue() {
        const newValue = this._elementRef.nativeElement.value;
        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
        }
    }
    /** Make sure the input is a supported type. */
    _validateType() {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatInputUnsupportedTypeError(this._type);
        }
    }
    /** Checks whether the input type is one of the types that are never empty. */
    _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    }
    /** Checks whether the input is invalid based on the native validation. */
    _isBadInput() {
        // The `validity` property won't be present on platform-server.
        let validity = this._elementRef.nativeElement.validity;
        return validity && validity.badInput;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get empty() {
        return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() &&
            !this.autofilled;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
        if (this._isNativeSelect) {
            // For a single-selection `<select>`, the label should float when the selected option has
            // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
            // overlapping the label with the options.
            const selectElement = this._elementRef.nativeElement;
            const firstOption = selectElement.options[0];
            // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
            // -1 if the `value` is set to something, that isn't in the list of options, at a later point.
            return this.focused || selectElement.multiple || !this.empty ||
                !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
        }
        else {
            return this.focused || !this.empty;
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
        if (ids.length) {
            this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
        }
        else {
            this._elementRef.nativeElement.removeAttribute('aria-describedby');
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick() {
        // Do not re-focus the input element if the element is already focused. Otherwise it can happen
        // that someone clicks on a time input and the cursor resets to the "hours" field while the
        // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
        if (!this.focused) {
            this.focus();
        }
    }
}
MatInput.ɵfac = function MatInput_Factory(t) { return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__.AutofillMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MAT_FORM_FIELD, 8)); };
MatInput.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatInput, selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]], hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"], hostVars: 9, hostBindings: function MatInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() { return ctx._focusChanged(true); })("blur", function MatInput_blur_HostBindingHandler() { return ctx._focusChanged(false); })("input", function MatInput_input_HostBindingHandler() { return ctx._onInput(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
    } }, inputs: { id: "id", disabled: "disabled", required: "required", type: "type", value: "value", readonly: "readonly", placeholder: "placeholder", errorStateMatcher: "errorStateMatcher", userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"] }, exportAs: ["matInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldControl, useExisting: MatInput }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
MatInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.ErrorStateMatcher },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [MAT_INPUT_VALUE_ACCESSOR,] }] },
    { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__.AutofillMonitor },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MAT_FORM_FIELD,] }] }
];
MatInput.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    userAriaDescribedBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['aria-describedby',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    _focusChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener, args: ['focus', ['true'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener, args: ['blur', ['false'],] }],
    _onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener, args: ['input',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
                exportAs: 'matInput',
                host: {
                    /**
                     * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
                     */
                    'class': 'mat-input-element mat-form-field-autofill-control',
                    '[class.mat-input-server]': '_isServer',
                    // Native input properties that are overwritten by Angular inputs need to be synced with
                    // the native input element. Otherwise property bindings for those don't work.
                    '[attr.id]': 'id',
                    // At the time of writing, we have a lot of customer tests that look up the input based on its
                    // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
                    // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
                    '[attr.data-placeholder]': 'placeholder',
                    '[disabled]': 'disabled',
                    '[required]': 'required',
                    '[attr.readonly]': 'readonly && !_isNativeSelect || null',
                    // Only mark the input as invalid for assistive technology if it has a value since the
                    // state usually overlaps with `aria-required` when the input is empty and can be redundant.
                    '[attr.aria-invalid]': '(empty && required) ? null : errorState',
                    '[attr.aria-required]': 'required'
                },
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldControl, useExisting: MatInput }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControl, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.ErrorStateMatcher }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [MAT_INPUT_VALUE_ACCESSOR]
            }] }, { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__.AutofillMonitor }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MAT_FORM_FIELD]
            }] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete
    _focusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['focus', ['true']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['blur', ['false']]
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['input']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], userAriaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['aria-describedby']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatInputModule {
}
MatInputModule.ɵfac = function MatInputModule_Factory(t) { return new (t || MatInputModule)(); };
MatInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatInputModule });
MatInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.ErrorStateMatcher], imports: [[
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__.TextFieldModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
        ], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__.TextFieldModule,
        // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                declarations: [MatInput, MatTextareaAutosize],
                imports: [
                    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__.TextFieldModule,
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
                ],
                exports: [
                    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__.TextFieldModule,
                    // We re-export the `MatFormFieldModule` since `MatInput` will almost always
                    // be used together with `MatFormField`.
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
                    MatInput,
                    MatTextareaAutosize,
                ],
                providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.ErrorStateMatcher]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatInputModule, { declarations: function () { return [MatInput, MatTextareaAutosize]; }, imports: function () { return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__.TextFieldModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]; }, exports: function () { return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__.TextFieldModule,
        // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, MatInput, MatTextareaAutosize]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 181:
/*!**********************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS": () => (/* binding */ MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS),
/* harmony export */   "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MatProgressSpinner": () => (/* binding */ MatProgressSpinner),
/* harmony export */   "MatProgressSpinnerModule": () => (/* binding */ MatProgressSpinnerModule),
/* harmony export */   "MatSpinner": () => (/* binding */ MatSpinner)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base reference size of the spinner.
 * @docs-private
 */




function MatProgressSpinner__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._getCircleRadius());
} }
function MatProgressSpinner__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
} }
function MatSpinner__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._getCircleRadius());
} }
function MatSpinner__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
} }
const _c0 = ".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";
const BASE_SIZE = 100;
/**
 * Base reference stroke width of the spinner.
 * @docs-private
 */
const BASE_STROKE_WIDTH = 10;
// Boilerplate for applying mixins to MatProgressSpinner.
/** @docs-private */
const _MatProgressSpinnerBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinColor)(class {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}, 'primary');
/** Injection token to be used to override the default options for `mat-progress-spinner`. */
const MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-progress-spinner-default-options', {
    providedIn: 'root',
    factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY,
});
/** @docs-private */
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
    return { diameter: BASE_SIZE };
}
// .0001 percentage difference is necessary in order to avoid unwanted animation frames
// for example because the animation duration is 4 seconds, .1% accounts to 4ms
// which are enough to see the flicker described in
// https://github.com/angular/components/issues/8984
const INDETERMINATE_ANIMATION_TEMPLATE = `
 @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {
    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }
    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }
    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }
    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }

    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }
    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }
    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }
    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }

    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }
    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }
    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }
    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }

    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }
    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }
    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }
    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }
  }
`;
/**
 * `<mat-progress-spinner>` component.
 */
class MatProgressSpinner extends _MatProgressSpinnerBase {
    constructor(elementRef, platform, _document, animationMode, defaults) {
        super(elementRef);
        this._document = _document;
        this._diameter = BASE_SIZE;
        this._value = 0;
        this._fallbackAnimation = false;
        /** Mode of the progress circle */
        this.mode = 'determinate';
        const trackedDiameters = MatProgressSpinner._diameters;
        this._spinnerAnimationLabel = this._getSpinnerAnimationLabel();
        // The base size is already inserted via the component's structural styles. We still
        // need to track it so we don't end up adding the same styles again.
        if (!trackedDiameters.has(_document.head)) {
            trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
        }
        this._fallbackAnimation = platform.EDGE || platform.TRIDENT;
        this._noopAnimations = animationMode === 'NoopAnimations' &&
            (!!defaults && !defaults._forceAnimations);
        if (defaults) {
            if (defaults.diameter) {
                this.diameter = defaults.diameter;
            }
            if (defaults.strokeWidth) {
                this.strokeWidth = defaults.strokeWidth;
            }
        }
    }
    /** The diameter of the progress spinner (will set width and height of svg). */
    get diameter() { return this._diameter; }
    set diameter(size) {
        this._diameter = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(size);
        this._spinnerAnimationLabel = this._getSpinnerAnimationLabel();
        // If this is set before `ngOnInit`, the style root may not have been resolved yet.
        if (!this._fallbackAnimation && this._styleRoot) {
            this._attachStyleNode();
        }
    }
    /** Stroke width of the progress spinner. */
    get strokeWidth() {
        return this._strokeWidth || this.diameter / 10;
    }
    set strokeWidth(value) {
        this._strokeWidth = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(value);
    }
    /** Value of the progress circle. */
    get value() {
        return this.mode === 'determinate' ? this._value : 0;
    }
    set value(newValue) {
        this._value = Math.max(0, Math.min(100, (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(newValue)));
    }
    ngOnInit() {
        const element = this._elementRef.nativeElement;
        // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
        // Angular seems to create the element outside the shadow root and then moves it inside, if the
        // node is inside an `ngIf` and a ShadowDom-encapsulated component.
        this._styleRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__._getShadowRoot)(element) || this._document.head;
        this._attachStyleNode();
        // On IE and Edge, we can't animate the `stroke-dashoffset`
        // reliably so we fall back to a non-spec animation.
        const animationClass = `mat-progress-spinner-indeterminate${this._fallbackAnimation ? '-fallback' : ''}-animation`;
        element.classList.add(animationClass);
    }
    /** The radius of the spinner, adjusted for stroke width. */
    _getCircleRadius() {
        return (this.diameter - BASE_STROKE_WIDTH) / 2;
    }
    /** The view box of the spinner's svg element. */
    _getViewBox() {
        const viewBox = this._getCircleRadius() * 2 + this.strokeWidth;
        return `0 0 ${viewBox} ${viewBox}`;
    }
    /** The stroke circumference of the svg circle. */
    _getStrokeCircumference() {
        return 2 * Math.PI * this._getCircleRadius();
    }
    /** The dash offset of the svg circle. */
    _getStrokeDashOffset() {
        if (this.mode === 'determinate') {
            return this._getStrokeCircumference() * (100 - this._value) / 100;
        }
        // In fallback mode set the circle to 80% and rotate it with CSS.
        if (this._fallbackAnimation && this.mode === 'indeterminate') {
            return this._getStrokeCircumference() * 0.2;
        }
        return null;
    }
    /** Stroke width of the circle in percent. */
    _getCircleStrokeWidth() {
        return this.strokeWidth / this.diameter * 100;
    }
    /** Dynamically generates a style tag containing the correct animation for this diameter. */
    _attachStyleNode() {
        const styleRoot = this._styleRoot;
        const currentDiameter = this._diameter;
        const diameters = MatProgressSpinner._diameters;
        let diametersForElement = diameters.get(styleRoot);
        if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
            const styleTag = this._document.createElement('style');
            styleTag.setAttribute('mat-spinner-animation', this._spinnerAnimationLabel);
            styleTag.textContent = this._getAnimationText();
            styleRoot.appendChild(styleTag);
            if (!diametersForElement) {
                diametersForElement = new Set();
                diameters.set(styleRoot, diametersForElement);
            }
            diametersForElement.add(currentDiameter);
        }
    }
    /** Generates animation styles adjusted for the spinner's diameter. */
    _getAnimationText() {
        const strokeCircumference = this._getStrokeCircumference();
        return INDETERMINATE_ANIMATION_TEMPLATE
            // Animation should begin at 5% and end at 80%
            .replace(/START_VALUE/g, `${0.95 * strokeCircumference}`)
            .replace(/END_VALUE/g, `${0.2 * strokeCircumference}`)
            .replace(/DIAMETER/g, `${this._spinnerAnimationLabel}`);
    }
    /** Returns the circle diameter formatted for use with the animation-name CSS property. */
    _getSpinnerAnimationLabel() {
        // The string of a float point number will include a period ‘.’ character,
        // which is not valid for a CSS animation-name.
        return this.diameter.toString().replace('.', '_');
    }
}
MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) { return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS)); };
MatProgressSpinner.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatProgressSpinner, selectors: [["mat-progress-spinner"]], hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-progress-spinner"], hostVars: 10, hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
    } }, inputs: { color: "color", mode: "mode", diameter: "diameter", strokeWidth: "strokeWidth", value: "value" }, exportAs: ["matProgressSpinner"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 8, consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", "aria-hidden", "true", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]], template: function MatProgressSpinner_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatProgressSpinner__svg_circle_1_Template, 1, 9, "circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatProgressSpinner__svg_circle_2_Template, 1, 7, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase], styles: [_c0], encapsulation: 2, changeDetection: 0 });
/**
 * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
 * We need to keep track of which elements the diameters were attached to, because for
 * elements in the Shadow DOM the style tags are attached to the shadow root, rather
 * than the document head.
 */
MatProgressSpinner._diameters = new WeakMap();
MatProgressSpinner.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] }] }
];
MatProgressSpinner.propDecorators = {
    diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-progress-spinner',
                exportAs: 'matProgressSpinner',
                host: {
                    'role': 'progressbar',
                    'class': 'mat-progress-spinner',
                    // set tab index to -1 so screen readers will read the aria-label
                    // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
                    'tabindex': '-1',
                    '[class._mat-animation-noopable]': `_noopAnimations`,
                    '[style.width.px]': 'diameter',
                    '[style.height.px]': 'diameter',
                    '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
                    '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
                    '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
                    '[attr.mode]': 'mode'
                },
                inputs: ['color'],
                template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\"\n  aria-hidden=\"true\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n</svg>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                styles: [".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], diameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], strokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * `<mat-spinner>` component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate `<mat-progress-spinner>` instance.
 */
class MatSpinner extends MatProgressSpinner {
    constructor(elementRef, platform, document, animationMode, defaults) {
        super(elementRef, platform, document, animationMode, defaults);
        this.mode = 'indeterminate';
    }
}
MatSpinner.ɵfac = function MatSpinner_Factory(t) { return new (t || MatSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS)); };
MatSpinner.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatSpinner, selectors: [["mat-spinner"]], hostAttrs: ["role", "progressbar", "mode", "indeterminate", 1, "mat-spinner", "mat-progress-spinner"], hostVars: 6, hostBindings: function MatSpinner_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
    } }, inputs: { color: "color" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 8, consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", "aria-hidden", "true", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]], template: function MatSpinner_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSpinner__svg_circle_1_Template, 1, 9, "circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSpinner__svg_circle_2_Template, 1, 7, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase], styles: [_c0], encapsulation: 2, changeDetection: 0 });
MatSpinner.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-spinner',
                host: {
                    'role': 'progressbar',
                    'mode': 'indeterminate',
                    'class': 'mat-spinner mat-progress-spinner',
                    '[class._mat-animation-noopable]': `_noopAnimations`,
                    '[style.width.px]': 'diameter',
                    '[style.height.px]': 'diameter'
                },
                inputs: ['color'],
                template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\"\n  aria-hidden=\"true\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n</svg>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                styles: [".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatProgressSpinnerModule {
}
MatProgressSpinnerModule.ɵfac = function MatProgressSpinnerModule_Factory(t) { return new (t || MatProgressSpinnerModule)(); };
MatProgressSpinnerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatProgressSpinnerModule });
MatProgressSpinnerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
                exports: [
                    MatProgressSpinner,
                    MatSpinner,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule
                ],
                declarations: [
                    MatProgressSpinner,
                    MatSpinner
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressSpinnerModule, { declarations: function () { return [MatProgressSpinner, MatSpinner]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]; }, exports: function () { return [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 7007:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SELECT_CONFIG": () => (/* binding */ MAT_SELECT_CONFIG),
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY": () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY),
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY_PROVIDER": () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY": () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   "MAT_SELECT_TRIGGER": () => (/* binding */ MAT_SELECT_TRIGGER),
/* harmony export */   "MatSelect": () => (/* binding */ MatSelect),
/* harmony export */   "MatSelectChange": () => (/* binding */ MatSelectChange),
/* harmony export */   "MatSelectModule": () => (/* binding */ MatSelectModule),
/* harmony export */   "MatSelectTrigger": () => (/* binding */ MatSelectTrigger),
/* harmony export */   "_MatSelectBase": () => (/* binding */ _MatSelectBase),
/* harmony export */   "matSelectAnimations": () => (/* binding */ matSelectAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 2604);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9877);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 7159);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7993);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6477);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9005);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 2249);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 4094);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 7175);
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */










const _c0 = ["trigger"];
const _c1 = ["panel"];
function MatSelect_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.placeholder);
} }
function MatSelect_span_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.triggerValue);
} }
function MatSelect_span_5_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
} }
function MatSelect_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
} }
function MatSelect_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8._panelDoneAnimatingStream.next($event.toState); })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10._handleKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transformPanelWrap", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
} }
const _c2 = [[["mat-select-trigger"]], "*"];
const _c3 = ["mat-select-trigger", "*"];
const matSelectAnimations = {
    /**
     * This animation ensures the select's overlay panel animation (transformPanel) is called when
     * closing the select.
     * This is needed due to https://github.com/angular/angular/issues/23302
     */
    transformPanelWrap: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transformPanelWrap', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.query)('@transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animateChild)()], { optional: true }))
    ]),
    /**
     * This animation transforms the select's overlay panel on and off the page.
     *
     * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
     * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
     * side to ensure the option text correctly overlaps the trigger text.
     *
     * When the panel is removed from the DOM, it simply fades out linearly.
     */
    transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transformPanel', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
            transform: 'scaleY(0.8)',
            minWidth: '100%',
            opacity: 0
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('showing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
            opacity: 1,
            minWidth: 'calc(100% + 32px)',
            transform: 'scaleY(1)'
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('showing-multiple', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
            opacity: 1,
            minWidth: 'calc(100% + 64px)',
            transform: 'scaleY(1)'
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)')),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('100ms 25ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({ opacity: 0 })))
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */
function getMatSelectDynamicMultipleError() {
    return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */
function getMatSelectNonArrayValueError() {
    return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */
function getMatSelectNonFunctionValueError() {
    return Error('`compareWith` must be a function.');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextUniqueId = 0;
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */
/** The max height of the select's overlay panel. */
const SELECT_PANEL_MAX_HEIGHT = 256;
/** The panel's padding on the x-axis. */
const SELECT_PANEL_PADDING_X = 16;
/** The panel's x axis padding if it is indented (e.g. there is an option group). */
const SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/** The height of the select items in `em` units. */
const SELECT_ITEM_HEIGHT_EM = 3;
// TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.
/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 */
const SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */
const SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */
const MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-select-scroll-strategy');
/** @docs-private */
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** Injection token that can be used to provide the default options the select module. */
const MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SELECT_CONFIG');
/** @docs-private */
const MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_SELECT_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay],
    useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/** Change event object that is emitted when the select value has changed. */
class MatSelectChange {
    constructor(
    /** Reference to the select that emitted the change event. */
    source, 
    /** Current value of the select that emitted the event. */
    value) {
        this.source = source;
        this.value = value;
    }
}
// Boilerplate for applying mixins to MatSelect.
/** @docs-private */
const _MatSelectMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinErrorState)(class {
    constructor(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}))));
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSelectTrigger');
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
class MatSelectTrigger {
}
MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) { return new (t || MatSelectTrigger)(); };
MatSelectTrigger.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatSelectTrigger, selectors: [["mat-select-trigger"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_SELECT_TRIGGER, useExisting: MatSelectTrigger }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelectTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-select-trigger',
                providers: [{ provide: MAT_SELECT_TRIGGER, useExisting: MatSelectTrigger }]
            }]
    }], null, null); })();
/** Base class with all of the `MatSelect` functionality. */
class _MatSelectBase extends _MatSelectMixinBase {
    constructor(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
        var _a, _b, _c;
        super(elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._viewportRuler = _viewportRuler;
        this._changeDetectorRef = _changeDetectorRef;
        this._ngZone = _ngZone;
        this._dir = _dir;
        this._parentFormField = _parentFormField;
        this._liveAnnouncer = _liveAnnouncer;
        this._defaultOptions = _defaultOptions;
        /** Whether or not the overlay panel is open. */
        this._panelOpen = false;
        /** Comparison function to specify which option is displayed. Defaults to object equality. */
        this._compareWith = (o1, o2) => o1 === o2;
        /** Unique id for this input. */
        this._uid = `mat-select-${nextUniqueId++}`;
        /** Current `ariar-labelledby` value for the select trigger. */
        this._triggerAriaLabelledBy = null;
        /** Emits whenever the component is destroyed. */
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        /** `View -> model callback called when value changes` */
        this._onChange = () => { };
        /** `View -> model callback called when select has been touched` */
        this._onTouched = () => { };
        /** ID for the DOM node containing the select's value. */
        this._valueId = `mat-select-value-${nextUniqueId++}`;
        /** Emits when the panel element is finished transforming in. */
        this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this._overlayPanelClass = ((_a = this._defaultOptions) === null || _a === void 0 ? void 0 : _a.overlayPanelClass) || '';
        this._focused = false;
        /** A name for this control that can be used by `mat-form-field`. */
        this.controlType = 'mat-select';
        this._required = false;
        this._multiple = false;
        this._disableOptionCentering = (_c = (_b = this._defaultOptions) === null || _b === void 0 ? void 0 : _b.disableOptionCentering) !== null && _c !== void 0 ? _c : false;
        /** Aria label of the select. */
        this.ariaLabel = '';
        /** Combined stream of all of the child options' change events. */
        this.optionSelectionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(() => {
            const options = this.options;
            if (options) {
                return options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(options), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...options.map(option => option.onSelectionChange))));
            }
            return this._ngZone.onStable
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.optionSelectionChanges));
        });
        /** Event emitted when the select panel has been toggled. */
        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event emitted when the select has been opened. */
        this._openedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(o => o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => { }));
        /** Event emitted when the select has been closed. */
        this._closedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(o => !o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => { }));
        /** Event emitted when the selected value has been changed by the user. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        if (this.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
        // Note that we only want to set this when the defaults pass it in, otherwise it should
        // stay as `undefined` so that it falls back to the default in the key manager.
        if ((_defaultOptions === null || _defaultOptions === void 0 ? void 0 : _defaultOptions.typeaheadDebounceInterval) != null) {
            this._typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
        }
        this._scrollStrategyFactory = scrollStrategyFactory;
        this._scrollStrategy = this._scrollStrategyFactory();
        this.tabIndex = parseInt(tabIndex) || 0;
        // Force setter to be called in case id was not specified.
        this.id = this.id;
    }
    /** Whether the select is focused. */
    get focused() {
        return this._focused || this._panelOpen;
    }
    /** Placeholder to be shown if no value has been selected. */
    get placeholder() { return this._placeholder; }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /** Whether the component is required. */
    get required() { return this._required; }
    set required(value) {
        this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__.coerceBooleanProperty)(value);
        this.stateChanges.next();
    }
    /** Whether the user should be allowed to select multiple options. */
    get multiple() { return this._multiple; }
    set multiple(value) {
        if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatSelectDynamicMultipleError();
        }
        this._multiple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__.coerceBooleanProperty)(value);
    }
    /** Whether to center the active option over the trigger. */
    get disableOptionCentering() { return this._disableOptionCentering; }
    set disableOptionCentering(value) {
        this._disableOptionCentering = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__.coerceBooleanProperty)(value);
    }
    /**
     * Function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */
    get compareWith() { return this._compareWith; }
    set compareWith(fn) {
        if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatSelectNonFunctionValueError();
        }
        this._compareWith = fn;
        if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
        }
    }
    /** Value of the select control. */
    get value() { return this._value; }
    set value(newValue) {
        // Always re-assign an array, because it might have been mutated.
        if (newValue !== this._value || (this._multiple && Array.isArray(newValue))) {
            if (this.options) {
                this._setSelectionByValue(newValue);
            }
            this._value = newValue;
        }
    }
    /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */
    get typeaheadDebounceInterval() { return this._typeaheadDebounceInterval; }
    set typeaheadDebounceInterval(value) {
        this._typeaheadDebounceInterval = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__.coerceNumberProperty)(value);
    }
    /** Unique id of the element. */
    get id() { return this._id; }
    set id(value) {
        this._id = value || this._uid;
        this.stateChanges.next();
    }
    ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(this.multiple);
        this.stateChanges.next();
        // We need `distinctUntilChanged` here, because some browsers will
        // fire the animation end event twice for the same animation. See:
        // https://github.com/angular/angular/issues/24084
        this._panelDoneAnimatingStream
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy))
            .subscribe(() => this._panelDoneAnimating(this.panelOpen));
    }
    ngAfterContentInit() {
        this._initKeyManager();
        this._selectionModel.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(event => {
            event.added.forEach(option => option.select());
            event.removed.forEach(option => option.deselect());
        });
        this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(() => {
            this._resetOptions();
            this._initializeSelection();
        });
    }
    ngDoCheck() {
        const newAriaLabelledby = this._getTriggerAriaLabelledby();
        // We have to manage setting the `aria-labelledby` ourselves, because part of its value
        // is computed as a result of a content query which can cause this binding to trigger a
        // "changed after checked" error.
        if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
            const element = this._elementRef.nativeElement;
            this._triggerAriaLabelledBy = newAriaLabelledby;
            if (newAriaLabelledby) {
                element.setAttribute('aria-labelledby', newAriaLabelledby);
            }
            else {
                element.removeAttribute('aria-labelledby');
            }
        }
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    ngOnChanges(changes) {
        // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
        // the parent form field know to run change detection when the disabled state changes.
        if (changes['disabled']) {
            this.stateChanges.next();
        }
        if (changes['typeaheadDebounceInterval'] && this._keyManager) {
            this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
        }
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
    }
    /** Toggles the overlay panel open or closed. */
    toggle() {
        this.panelOpen ? this.close() : this.open();
    }
    /** Opens the overlay panel. */
    open() {
        if (this._canOpen()) {
            this._panelOpen = true;
            this._keyManager.withHorizontalOrientation(null);
            this._highlightCorrectOption();
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Closes the overlay panel and focuses the host element. */
    close() {
        if (this._panelOpen) {
            this._panelOpen = false;
            this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
            this._changeDetectorRef.markForCheck();
            this._onTouched();
        }
    }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /** Whether or not the overlay panel is open. */
    get panelOpen() {
        return this._panelOpen;
    }
    /** The currently selected option. */
    get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The value displayed in the trigger. */
    get triggerValue() {
        if (this.empty) {
            return '';
        }
        if (this._multiple) {
            const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);
            if (this._isRtl()) {
                selectedOptions.reverse();
            }
            // TODO(crisbeto): delimiter should be configurable for proper localization.
            return selectedOptions.join(', ');
        }
        return this._selectionModel.selected[0].viewValue;
    }
    /** Whether the element is in RTL mode. */
    _isRtl() {
        return this._dir ? this._dir.value === 'rtl' : false;
    }
    /** Handles all keydown events on the select. */
    _handleKeydown(event) {
        if (!this.disabled) {
            this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
    }
    /** Handles keyboard events while the select is closed. */
    _handleClosedKeydown(event) {
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.UP_ARROW ||
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.RIGHT_ARROW;
        const isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE;
        const manager = this._keyManager;
        // Open the select on ALT + arrow key to match the native <select>
        if (!manager.isTyping() && (isOpenKey && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.hasModifierKey)(event)) ||
            ((this.multiple || event.altKey) && isArrowKey)) {
            event.preventDefault(); // prevents the page from scrolling down when pressing space
            this.open();
        }
        else if (!this.multiple) {
            const previouslySelectedOption = this.selected;
            manager.onKeydown(event);
            const selectedOption = this.selected;
            // Since the value has changed, we need to announce it ourselves.
            if (selectedOption && previouslySelectedOption !== selectedOption) {
                // We set a duration on the live announcement, because we want the live element to be
                // cleared after a while so that users can't navigate to it using the arrow keys.
                this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
            }
        }
    }
    /** Handles keyboard events when the selected is open. */
    _handleOpenKeydown(event) {
        const manager = this._keyManager;
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.UP_ARROW;
        const isTyping = manager.isTyping();
        if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.close();
            // Don't do anything in this case if the user is typing,
            // because the typing sequence can include the space key.
        }
        else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE) && manager.activeItem &&
            !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.hasModifierKey)(event)) {
            event.preventDefault();
            manager.activeItem._selectViaInteraction();
        }
        else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.A && event.ctrlKey) {
            event.preventDefault();
            const hasDeselectedOptions = this.options.some(opt => !opt.disabled && !opt.selected);
            this.options.forEach(option => {
                if (!option.disabled) {
                    hasDeselectedOptions ? option.select() : option.deselect();
                }
            });
        }
        else {
            const previouslyFocusedIndex = manager.activeItemIndex;
            manager.onKeydown(event);
            if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem &&
                manager.activeItemIndex !== previouslyFocusedIndex) {
                manager.activeItem._selectViaInteraction();
            }
        }
    }
    _onFocus() {
        if (!this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    }
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    _onBlur() {
        this._focused = false;
        if (!this.disabled && !this.panelOpen) {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }
    }
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */
    _onAttached() {
        this._overlayDir.positionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
            this._changeDetectorRef.detectChanges();
            this._positioningSettled();
        });
    }
    /** Returns the theme to be used on the panel. */
    _getPanelTheme() {
        return this._parentFormField ? `mat-${this._parentFormField.color}` : '';
    }
    /** Whether the select has a value. */
    get empty() {
        return !this._selectionModel || this._selectionModel.isEmpty();
    }
    _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(() => {
            this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value);
            this.stateChanges.next();
        });
    }
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    _setSelectionByValue(value) {
        this._selectionModel.selected.forEach(option => option.setInactiveStyles());
        this._selectionModel.clear();
        if (this.multiple && value) {
            if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getMatSelectNonArrayValueError();
            }
            value.forEach((currentValue) => this._selectValue(currentValue));
            this._sortValues();
        }
        else {
            const correspondingOption = this._selectValue(value);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.
            if (correspondingOption) {
                this._keyManager.updateActiveItem(correspondingOption);
            }
            else if (!this.panelOpen) {
                // Otherwise reset the highlighted option. Note that we only want to do this while
                // closed, because doing it while open can shift the user's focus unnecessarily.
                this._keyManager.updateActiveItem(-1);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */
    _selectValue(value) {
        const correspondingOption = this.options.find((option) => {
            // Skip options that are already in the model. This allows us to handle cases
            // where the same primitive value is selected multiple times.
            if (this._selectionModel.isSelected(option)) {
                return false;
            }
            try {
                // Treat null as a special reset value.
                return option.value != null && this._compareWith(option.value, value);
            }
            catch (error) {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    // Notify developers of errors in their comparator.
                    console.warn(error);
                }
                return false;
            }
        });
        if (correspondingOption) {
            this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
    }
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */
    _initKeyManager() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.ActiveDescendantKeyManager(this.options)
            .withTypeAhead(this._typeaheadDebounceInterval)
            .withVerticalOrientation()
            .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr')
            .withHomeAndEnd()
            .withAllowedModifierKeys(['shiftKey']);
        this._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(() => {
            if (this.panelOpen) {
                // Select the active item when tabbing away. This is consistent with how the native
                // select behaves. Note that we only want to do this in single selection mode.
                if (!this.multiple && this._keyManager.activeItem) {
                    this._keyManager.activeItem._selectViaInteraction();
                }
                // Restore focus to the trigger before closing. Ensures that the focus
                // position won't be lost if the user got focus into the overlay.
                this.focus();
                this.close();
            }
        });
        this._keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(() => {
            if (this._panelOpen && this.panel) {
                this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
            }
            else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
                this._keyManager.activeItem._selectViaInteraction();
            }
        });
    }
    /** Drops current option subscriptions and IDs and resets from scratch. */
    _resetOptions() {
        const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(changedOrDestroyed)).subscribe(event => {
            this._onSelect(event.source, event.isUserInput);
            if (event.isUserInput && !this.multiple && this._panelOpen) {
                this.close();
                this.focus();
            }
        });
        // Listen to changes in the internal state of the options and react accordingly.
        // Handles cases like the labels of the selected options changing.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...this.options.map(option => option._stateChanges))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(changedOrDestroyed))
            .subscribe(() => {
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
    }
    /** Invoked when an option is clicked. */
    _onSelect(option, isUserInput) {
        const wasSelected = this._selectionModel.isSelected(option);
        if (option.value == null && !this._multiple) {
            option.deselect();
            this._selectionModel.clear();
            if (this.value != null) {
                this._propagateChanges(option.value);
            }
        }
        else {
            if (wasSelected !== option.selected) {
                option.selected ? this._selectionModel.select(option) :
                    this._selectionModel.deselect(option);
            }
            if (isUserInput) {
                this._keyManager.setActiveItem(option);
            }
            if (this.multiple) {
                this._sortValues();
                if (isUserInput) {
                    // In case the user selected the option with their mouse, we
                    // want to restore focus back to the trigger, in order to
                    // prevent the select keyboard controls from clashing with
                    // the ones from `mat-option`.
                    this.focus();
                }
            }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
        }
        this.stateChanges.next();
    }
    /** Sorts the selected values in the selected based on their order in the panel. */
    _sortValues() {
        if (this.multiple) {
            const options = this.options.toArray();
            this._selectionModel.sort((a, b) => {
                return this.sortComparator ? this.sortComparator(a, b, options) :
                    options.indexOf(a) - options.indexOf(b);
            });
            this.stateChanges.next();
        }
    }
    /** Emits change event to set the model value. */
    _propagateChanges(fallbackValue) {
        let valueToEmit = null;
        if (this.multiple) {
            valueToEmit = this.selected.map(option => option.value);
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this.selectionChange.emit(this._getChangeEvent(valueToEmit));
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     */
    _highlightCorrectOption() {
        if (this._keyManager) {
            if (this.empty) {
                this._keyManager.setFirstItemActive();
            }
            else {
                this._keyManager.setActiveItem(this._selectionModel.selected[0]);
            }
        }
    }
    /** Whether the panel is allowed to open. */
    _canOpen() {
        var _a;
        return !this._panelOpen && !this.disabled && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    /** Focuses the select element. */
    focus(options) {
        this._elementRef.nativeElement.focus(options);
    }
    /** Gets the aria-labelledby for the select panel. */
    _getPanelAriaLabelledby() {
        var _a;
        if (this.ariaLabel) {
            return null;
        }
        const labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
        const labelExpression = (labelId ? labelId + ' ' : '');
        return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
    }
    /** Determines the `aria-activedescendant` to be set on the host. */
    _getAriaActiveDescendant() {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
            return this._keyManager.activeItem.id;
        }
        return null;
    }
    /** Gets the aria-labelledby of the select component trigger. */
    _getTriggerAriaLabelledby() {
        var _a;
        if (this.ariaLabel) {
            return null;
        }
        const labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
        let value = (labelId ? labelId + ' ' : '') + this._valueId;
        if (this.ariaLabelledby) {
            value += ' ' + this.ariaLabelledby;
        }
        return value;
    }
    /** Called when the overlay panel is done animating. */
    _panelDoneAnimating(isOpen) {
        this.openedChange.emit(isOpen);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
        this._ariaDescribedby = ids.join(' ');
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick() {
        this.focus();
        this.open();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
        return this._panelOpen || !this.empty || (this._focused && !!this._placeholder);
    }
}
_MatSelectBase.ɵfac = function _MatSelectBase_Factory(t) { return new (t || _MatSelectBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MAT_FORM_FIELD, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8)); };
_MatSelectBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatSelectBase, viewQuery: function _MatSelectBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._overlayDir = _t.first);
    } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"], id: "id", placeholder: "placeholder", required: "required", multiple: "multiple", disableOptionCentering: "disableOptionCentering", compareWith: "compareWith", value: "value", typeaheadDebounceInterval: "typeaheadDebounceInterval", panelClass: "panelClass", ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], errorStateMatcher: "errorStateMatcher", sortComparator: "sortComparator" }, outputs: { openedChange: "openedChange", _openedStream: "opened", _closedStream: "closed", selectionChange: "selectionChange", valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
_MatSelectBase.ctorParameters = () => [
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.ViewportRuler },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MAT_FORM_FIELD,] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_SELECT_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.LiveAnnouncer },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_SELECT_CONFIG,] }] }
];
_MatSelectBase.propDecorators = {
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['trigger',] }],
    panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['panel',] }],
    _overlayDir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay,] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disableOptionCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    typeaheadDebounceInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sortComparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    openedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['opened',] }],
    _closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['closed',] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSelectBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.ViewportRuler }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MAT_FORM_FIELD]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControl, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_SELECT_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.LiveAnnouncer }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_SELECT_CONFIG]
            }] }]; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], openedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['opened']
        }], _closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['closed']
        }], selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disableOptionCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], typeaheadDebounceInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['trigger']
        }], panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['panel']
        }], _overlayDir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay]
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sortComparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
class MatSelect extends _MatSelectBase {
    constructor() {
        super(...arguments);
        /** The scroll position of the overlay panel, calculated to center the selected option. */
        this._scrollTop = 0;
        /** The cached font-size of the trigger element. */
        this._triggerFontSize = 0;
        /** The value of the select panel's transform-origin property. */
        this._transformOrigin = 'top';
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        this._offsetY = 0;
        this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
    }
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */
    _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
        const itemHeight = this._getItemHeight();
        const optionOffsetFromScrollTop = itemHeight * selectedIndex;
        const halfOptionHeight = itemHeight / 2;
        // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.
        const optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    }
    ngOnInit() {
        super.ngOnInit();
        this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(() => {
            if (this.panelOpen) {
                this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
                this._changeDetectorRef.markForCheck();
            }
        });
    }
    open() {
        if (super._canOpen()) {
            super.open();
            this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
            // Note: The computed font-size will be a string pixel value (e.g. "16px").
            // `parseInt` ignores the trailing 'px' and converts this to a number.
            this._triggerFontSize =
                parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
            this._calculateOverlayPosition();
            // Set the font size on the panel element once it exists.
            this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
                if (this._triggerFontSize && this._overlayDir.overlayRef &&
                    this._overlayDir.overlayRef.overlayElement) {
                    this._overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`;
                }
            });
        }
    }
    /** Scrolls the active option into view. */
    _scrollOptionIntoView(index) {
        const labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__._countGroupLabelsBeforeOption)(index, this.options, this.optionGroups);
        const itemHeight = this._getItemHeight();
        if (index === 0 && labelCount === 1) {
            // If we've got one group label before the option and we're at the top option,
            // scroll the list to the top. This is better UX than scrolling the list to the
            // top of the option, because it allows the user to read the top group's label.
            this.panel.nativeElement.scrollTop = 0;
        }
        else {
            this.panel.nativeElement.scrollTop = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__._getOptionScrollPosition)((index + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
        }
    }
    _positioningSettled() {
        this._calculateOverlayOffsetX();
        this.panel.nativeElement.scrollTop = this._scrollTop;
    }
    _panelDoneAnimating(isOpen) {
        if (this.panelOpen) {
            this._scrollTop = 0;
        }
        else {
            this._overlayDir.offsetX = 0;
            this._changeDetectorRef.markForCheck();
        }
        super._panelDoneAnimating(isOpen);
    }
    _getChangeEvent(value) {
        return new MatSelectChange(this, value);
    }
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     */
    _calculateOverlayOffsetX() {
        const overlayRect = this._overlayDir.overlayRef.overlayElement.getBoundingClientRect();
        const viewportSize = this._viewportRuler.getViewportSize();
        const isRtl = this._isRtl();
        const paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X :
            SELECT_PANEL_PADDING_X * 2;
        let offsetX;
        // Adjust the offset, depending on the option padding.
        if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
        }
        else if (this.disableOptionCentering) {
            offsetX = SELECT_PANEL_PADDING_X;
        }
        else {
            let selected = this._selectionModel.selected[0] || this.options.first;
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
        }
        // Invert the offset in LTR.
        if (!isRtl) {
            offsetX *= -1;
        }
        // Determine how much the select overflows on each side.
        const leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
        const rightOverflow = overlayRect.right + offsetX - viewportSize.width
            + (isRtl ? 0 : paddingWidth);
        // If the element overflows on either side, reduce the offset to allow it to fit.
        if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        // Set the offset directly in order to avoid having to go through change detection and
        // potentially triggering "changed after it was checked" errors. Round the value to avoid
        // blurry content in some browsers.
        this._overlayDir.offsetX = Math.round(offsetX);
        this._overlayDir.overlayRef.updatePosition();
    }
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */
    _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
        const itemHeight = this._getItemHeight();
        const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        const maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
        let optionOffsetFromPanelTop;
        // Disable offset if requested by user by returning 0 as value to offset
        if (this.disableOptionCentering) {
            return 0;
        }
        if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
        }
        else if (this._scrollTop === maxScroll) {
            const firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
            const selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            // The first item is partially out of the viewport. Therefore we need to calculate what
            // portion of it is shown in the viewport and account for it in our offset.
            let partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight;
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
        }
        // The final offset is the option's offset from the top, adjusted for the height difference,
        // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
        // The value is rounded to prevent some browsers from blurring the content.
        return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
    }
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */
    _checkOverlayWithinViewport(maxScroll) {
        const itemHeight = this._getItemHeight();
        const viewportSize = this._viewportRuler.getViewportSize();
        const topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        const bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        const panelHeightTop = Math.abs(this._offsetY);
        const totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        const panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;
        if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this._transformOrigin = this._getOriginBasedOnOption();
        }
    }
    /** Adjusts the overlay panel up to fit in the viewport. */
    _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        const distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.
        if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = `50% bottom 0px`;
        }
    }
    /** Adjusts the overlay panel down to fit in the viewport. */
    _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        const distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = `50% top 0px`;
            return;
        }
    }
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */
    _calculateOverlayPosition() {
        const itemHeight = this._getItemHeight();
        const items = this._getItemCount();
        const panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        const scrollContainerHeight = items * itemHeight;
        // The farthest the panel can be scrolled before it hits the bottom
        const maxScroll = scrollContainerHeight - panelHeight;
        // If no value is selected we open the popup to the first item.
        let selectedOptionOffset;
        if (this.empty) {
            selectedOptionOffset = 0;
        }
        else {
            selectedOptionOffset =
                Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]), 0);
        }
        selectedOptionOffset += (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__._countGroupLabelsBeforeOption)(selectedOptionOffset, this.options, this.optionGroups);
        // We must maintain a scroll buffer so the selected option will be scrolled to the
        // center of the overlay panel rather than the top.
        const scrollBuffer = panelHeight / 2;
        this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
        this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
        this._checkOverlayWithinViewport(maxScroll);
    }
    /** Sets the transform origin point based on the selected option. */
    _getOriginBasedOnOption() {
        const itemHeight = this._getItemHeight();
        const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        const originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
        return `50% ${originY}px 0px`;
    }
    /** Calculates the height of the select's options. */
    _getItemHeight() {
        return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
    }
    /** Calculates the amount of items in the select. This includes options and group labels. */
    _getItemCount() {
        return this.options.length + this.optionGroups.length;
    }
}
MatSelect.ɵfac = /*@__PURE__*/ function () { let ɵMatSelect_BaseFactory; return function MatSelect_Factory(t) { return (ɵMatSelect_BaseFactory || (ɵMatSelect_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSelect)))(t || MatSelect); }; }();
MatSelect.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatSelect, selectors: [["mat-select"]], contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOption, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTGROUP, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
    } }, hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"], hostVars: 20, hostBindings: function MatSelect_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("focus", function MatSelect_focus_HostBindingHandler() { return ctx._onFocus(); })("blur", function MatSelect_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matSelect"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldControl, useExisting: MatSelect },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTION_PARENT_COMPONENT, useExisting: MatSelect }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c3, decls: 9, vars: 12, consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder mat-select-min-line", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder", "mat-select-min-line"], [1, "mat-select-value-text", 3, "ngSwitch"], ["class", "mat-select-min-line", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-min-line"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]], template: function MatSelect_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 14, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() { return ctx.close(); })("attach", function MatSelect_Template_ng_template_attach_8_listener() { return ctx._onAttached(); })("detach", function MatSelect_Template_ng_template_detach_8_listener() { return ctx.close(); });
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-owns", ctx.panelOpen ? ctx.id + "-panel" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx._valueId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
    } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkOverlayOrigin, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass], styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;opacity:0}\n"], encapsulation: 2, data: { animation: [
            matSelectAnimations.transformPanelWrap,
            matSelectAnimations.transformPanel
        ] }, changeDetection: 0 });
MatSelect.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOption, { descendants: true },] }],
    optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTGROUP, { descendants: true },] }],
    customTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MAT_SELECT_TRIGGER,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-select',
                exportAs: 'matSelect',
                template: "<!--\n Note that the select trigger element specifies `aria-owns` pointing to the listbox overlay.\n While aria-owns is not required for the ARIA 1.2 `role=\"combobox\"` interaction pattern,\n it fixes an issue with VoiceOver when the select appears inside of an `aria-model=\"true\"`\n element (e.g. a dialog). Without this `aria-owns`, the `aria-modal` on a dialog prevents\n VoiceOver from \"seeing\" the select's listbox overlay for aria-activedescendant.\n Using `aria-owns` re-parents the select overlay so that it works again.\n See https://github.com/angular/components/issues/20694\n-->\n<div cdk-overlay-origin\n     [attr.aria-owns]=\"panelOpen ? id + '-panel' : null\"\n     class=\"mat-select-trigger\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\" [attr.id]=\"_valueId\">\n    <span class=\"mat-select-placeholder mat-select-min-line\" *ngSwitchCase=\"true\">{{placeholder}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span class=\"mat-select-min-line\" *ngSwitchDefault>{{triggerValue}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayPanelClass]=\"_overlayPanelClass\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width!\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      role=\"listbox\"\n      tabindex=\"-1\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [attr.id]=\"id + '-panel'\"\n      [attr.aria-multiselectable]=\"multiple\"\n      [attr.aria-label]=\"ariaLabel || null\"\n      [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
                inputs: ['disabled', 'disableRipple', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: {
                    'role': 'combobox',
                    'aria-autocomplete': 'none',
                    // TODO(crisbeto): the value for aria-haspopup should be `listbox`, but currently it's difficult
                    // to sync into Google, because of an outdated automated a11y check which flags it as an invalid
                    // value. At some point we should try to switch it back to being `listbox`.
                    'aria-haspopup': 'true',
                    'class': 'mat-select',
                    '[attr.id]': 'id',
                    '[attr.tabindex]': 'tabIndex',
                    '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
                    '[attr.aria-expanded]': 'panelOpen',
                    '[attr.aria-label]': 'ariaLabel || null',
                    '[attr.aria-required]': 'required.toString()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
                    '[class.mat-select-disabled]': 'disabled',
                    '[class.mat-select-invalid]': 'errorState',
                    '[class.mat-select-required]': 'required',
                    '[class.mat-select-empty]': 'empty',
                    '[class.mat-select-multiple]': 'multiple',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': '_onFocus()',
                    '(blur)': '_onBlur()'
                },
                animations: [
                    matSelectAnimations.transformPanelWrap,
                    matSelectAnimations.transformPanel
                ],
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldControl, useExisting: MatSelect },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTION_PARENT_COMPONENT, useExisting: MatSelect }
                ],
                styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;opacity:0}\n"]
            }]
    }], null, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOption, { descendants: true }]
        }], optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTGROUP, { descendants: true }]
        }], customTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MAT_SELECT_TRIGGER]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatSelectModule {
}
MatSelectModule.ɵfac = function MatSelectModule_Factory(t) { return new (t || MatSelectModule)(); };
MatSelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatSelectModule });
MatSelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.CdkScrollableModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.CdkScrollableModule,
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
                    MatSelect,
                    MatSelectTrigger,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule
                ],
                declarations: [MatSelect, MatSelectTrigger],
                providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSelectModule, { declarations: function () { return [MatSelect, MatSelectTrigger]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__.CdkScrollableModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 1467:
/*!************************************************************************!*\
  !*** ./src/app/shared/controls/autocomplete/autocomplete.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComponent": () => (/* binding */ AutocompleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7993);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6477);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9005);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4094);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2249);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/highlight.pipe */ 2210);










function AutocompleteComponent_mat_option_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", option_r3.icon.cssClass);
} }
function AutocompleteComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AutocompleteComponent_mat_option_5_div_2_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", option_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 3, option_r3.label, _r0.value), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class AutocompleteComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.propagateChange = () => { };
        this.propagateTouched = () => { };
    }
    ngOnInit() {
        this.options$ = this.formControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(value => typeof value === 'string' || typeof value === 'object'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => typeof value === 'string' ? value : value.label), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(label => label ? this.filter(label) : this.items.slice()));
        this.formControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)()).subscribe(item => {
            const value = typeof item === 'object' ? item.value : '';
            this.propagateChange(value);
            this.changed.emit(value);
        });
    }
    ngOnDestroy() {
        this.destroy.next('');
        this.destroy.complete();
    }
    filter(value) {
        const filterValue = value.toLowerCase();
        return this.items.filter(items => items.label.toLowerCase().includes(filterValue));
    }
    writeValue(value) {
        const selectedOption = this.items.find(item => item.value === value);
        this.formControl.setValue(selectedOption);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
    }
    displayFn(item) {
        return item ? item.label : '';
    }
    onBlur() {
        this.propagateTouched();
    }
}
AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(); };
AutocompleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["app-autocomplete"]], inputs: { items: "items", placeholder: "placeholder" }, outputs: { changed: "changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => AutocompleteComponent),
                multi: true
            }
        ])], decls: 7, vars: 7, consts: [[1, "autocomplete"], ["type", "text", 1, "app-input", 3, "placeholder", "formControl", "matAutocomplete", "blur"], ["search", ""], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "option"], ["class", "option__icon", 4, "ngIf"], [1, "option__label", 3, "innerHtml"], [1, "option__icon"], [3, "ngClass"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function AutocompleteComponent_Template_input_blur_1_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-autocomplete", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AutocompleteComponent_mat_option_5_Template, 5, 6, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholder || "Ingrese una busqueda")("formControl", ctx.formControl)("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, ctx.options$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_0__.HighlightPipe], styles: [".autocomplete[_ngcontent-%COMP%] {\n  position: relative;\n}\n.autocomplete__options[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.option__icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n}\n.form-field_error[_nghost-%COMP%]   input[_ngcontent-%COMP%], .form-field_error   [_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #B00020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FBREY7QUFHRTtFQUNFLGtCQUFBO0FBREo7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZGO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUZKO0FBUUU7RUFDRSx5QkFBQTtBQUxKIiwiZmlsZSI6ImF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvY29sb3JzXCI7XG5cbi5hdXRvY29tcGxldGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJl9fb3B0aW9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG5cbi5vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICZfX2ljb257XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG59XG5cbjpob3N0LWNvbnRleHQoLmZvcm0tZmllbGRfZXJyb3Ipe1xuICBpbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGVycm9yO1xuICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 8377:
/*!*********************************************************************!*\
  !*** ./src/app/shared/controls/autocomplete/autocomplete.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteModule": () => (/* binding */ AutocompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete.component */ 1467);
/* harmony import */ var _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/highlight.pipe */ 2210);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class AutocompleteModule {
}
AutocompleteModule.ɵfac = function AutocompleteModule_Factory(t) { return new (t || AutocompleteModule)(); };
AutocompleteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AutocompleteModule });
AutocompleteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AutocompleteModule, { declarations: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.AutocompleteComponent,
        _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_1__.HighlightPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule], exports: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.AutocompleteComponent] }); })();


/***/ }),

/***/ 2210:
/*!**********************************************************************!*\
  !*** ./src/app/shared/controls/autocomplete/pipes/highlight.pipe.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightPipe": () => (/* binding */ HighlightPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HighlightPipe {
    transform(value, search) {
        const re = new RegExp(search, 'gi');
        return value.replace(re, match => '<b>' + match + '</b>');
    }
}
HighlightPipe.ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
HighlightPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "highlight", type: HighlightPipe, pure: true });


/***/ }),

/***/ 8643:
/*!********************************************************************!*\
  !*** ./src/app/shared/controls/checkboxes/checkboxes.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxesComponent": () => (/* binding */ CheckboxesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);




function CheckboxesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxesComponent_div_1_Template_input_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onChanged(item_r1.value, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checkbox_disabled", ctx_r0.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.value)("checked", ctx_r0.isChecked(item_r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r0.isDisabled ? true : null);
} }
class CheckboxesComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.propagateChange = () => { };
    }
    ngOnInit() {
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onChanged(value, checked) {
        const { target } = checked;
        const resultado = target.checked;
        const selected = this.getSelected(value, resultado);
        this.value = selected;
        this.propagateChange(selected);
        this.changed.emit(selected);
    }
    getSelected(value, checked) {
        const selected = this.value ? [...this.value] : [];
        if (checked) {
            if (!selected.includes(value)) {
                selected.push(value);
            }
        }
        else {
            const index = selected.indexOf(value);
            selected.splice(index, 1);
        }
        return selected.length ? selected : [];
    }
    isChecked(value) {
        return this.value && this.value.includes(value);
    }
}
CheckboxesComponent.ɵfac = function CheckboxesComponent_Factory(t) { return new (t || CheckboxesComponent)(); };
CheckboxesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxesComponent, selectors: [["app-checkboxes"]], inputs: { items: "items" }, outputs: { changed: "changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CheckboxesComponent),
                multi: true
            }
        ])], decls: 2, vars: 1, consts: [[1, "checkboxes"], [4, "ngFor", "ngForOf"], [1, "checkbox"], ["type", "checkbox", 1, "checkbox__input", 3, "value", "checked", "change"], [1, "checkbox__checkmark"]], template: function CheckboxesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckboxesComponent_div_1_Template, 5, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".checkbox[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  text-indent: 30px;\n  margin: 8px 0;\n  padding: 0 20px 0 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.checkbox__input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkbox__input[_ngcontent-%COMP%]:checked    ~ .checkbox__checkmark[_ngcontent-%COMP%] {\n  background-color: #0277bd;\n}\n.checkbox__input[_ngcontent-%COMP%]:checked    ~ .checkbox__checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n  left: 7px;\n  top: 3px;\n  width: 4px;\n  height: 8px;\n  border: solid #fff;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n.checkbox__checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 4px;\n  background-color: #eee;\n}\n.checkbox__checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.checkbox_disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.checkbox[_ngcontent-%COMP%]:hover   .checkbox__checkmark[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n.checkbox[_ngcontent-%COMP%]:hover   .checkbox__input[_ngcontent-%COMP%]:checked    ~ .checkbox__checkmark[_ngcontent-%COMP%] {\n  background-color: #004c8c;\n}\n.form-field_error[_nghost-%COMP%]   .checkbox__checkmark[_ngcontent-%COMP%], .form-field_error   [_nghost-%COMP%]   .checkbox__checkmark[_ngcontent-%COMP%] {\n  border: 1px solid #B00020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94ZXMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7QUFGRjtBQUlFO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBRkw7QUFLTTtFQUNFLHlCQ25CRTtBRGdCVjtBQUtRO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFIVjtBQVdFO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVROO0FBV007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBVFI7QUFhRTtFQUNFLDBCQUFBO0FBWEo7QUFnQkk7RUFDRSxzQkFBQTtBQWROO0FBaUJJO0VBQ0UseUJDL0RTO0FEZ0RmO0FBc0JFO0VBQ0UseUJBQUE7QUFuQkoiLCJmaWxlIjoiY2hlY2tib3hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvY29sb3JzXCI7XG5cbi5jaGVja2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtaW5kZW50OiAzMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDpub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICZfX2lucHV0e1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIG9wYWNpdHk6IDA7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgaGVpZ2h0OiAwO1xuICAgICB3aWR0aDogMDtcblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAmfi5jaGVja2JveF9fY2hlY2ttYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbGVmdDogN3B4O1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAjZmZmO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxuXG4gICZfX2NoZWNrbWFyayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OjA7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gIH1cblxuICAmX2Rpc2FibGVkIHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuMzgpO1xuXG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAuY2hlY2tib3hfX2NoZWNrbWFyayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIH1cblxuICAgIC5jaGVja2JveF9faW5wdXQ6Y2hlY2tlZCB+IC5jaGVja2JveF9fY2hlY2ttYXJrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcmsgO1xuICAgIH1cblxuICB9XG59XG5cbjpob3N0LWNvbnRleHQoLmZvcm0tZmllbGRfZXJyb3IpIHtcbiAgLmNoZWNrYm94X19jaGVja21hcmsge1xuICAgIGJvcmRlciA6IDFweCBzb2xpZCAkZXJyb3I7XG4gIH1cbn1cbiIsIiRiYXNlOiAjZmFmYWZhO1xuJGJhc2UtZGFyazogI2UwZTBlMDtcbiRiYXNlLWxpZ2h0OiAjZmZmZmZmO1xuJG9uLWJhc2U6ICMwMDAwMDA7XG5cbiRwcmltYXJ5OiAjMDI3N2JkO1xuJHByaW1hcnktZGFyazogIzAwNGM4YztcbiRwcmltYXJ5LWxpZ2h0OiAjNThhNWYwO1xuJG9uLXByaW1hcnk6ICNmZmZmZmY7XG5cbiRzZWNvbmRhcnk6ICNmNDQzMzY7XG4kc2Vjb25kYXJ5LWRhcms6ICNiOTAwMDc7XG4kc2Vjb25kYXJ5LWxpZ2h0OiAjZmY3OTVkO1xuJG9uLXNlY29uZGFyeTogI2ZmZmZmZjtcblxuJGVycm9yOiAjQjAwMDIwO1xuJG9uLWVycm9yOiAjZmZmZmZmO1xuXG4kc3VjY2VzczogIzk5YWEwMDtcbiRvbi1zdWNjZXNzOiAjZmZmZmZmO1xuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 9044:
/*!*****************************************************************!*\
  !*** ./src/app/shared/controls/checkboxes/checkboxes.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxesModule": () => (/* binding */ CheckboxesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _checkboxes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkboxes.component */ 8643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class CheckboxesModule {
}
CheckboxesModule.ɵfac = function CheckboxesModule_Factory(t) { return new (t || CheckboxesModule)(); };
CheckboxesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CheckboxesModule });
CheckboxesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CheckboxesModule, { declarations: [_checkboxes_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_checkboxes_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxesComponent] }); })();


/***/ }),

/***/ 374:
/*!****************************************************!*\
  !*** ./src/app/shared/controls/controls.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlsModule": () => (/* binding */ ControlsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _input_input_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input/input.module */ 6995);
/* harmony import */ var _form_field_form_field_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-field/form-field.module */ 7075);
/* harmony import */ var _password_password_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password/password.module */ 1255);
/* harmony import */ var _select_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select/select.module */ 1487);
/* harmony import */ var _checkboxes_checkboxes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkboxes/checkboxes.module */ 9044);
/* harmony import */ var _radios_radios_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radios/radios.module */ 2532);
/* harmony import */ var _date_date_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date/date.module */ 9605);
/* harmony import */ var _date_range_date_range_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-range/date-range.module */ 3316);
/* harmony import */ var _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./autocomplete/autocomplete.module */ 8377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);











class ControlsModule {
}
ControlsModule.ɵfac = function ControlsModule_Factory(t) { return new (t || ControlsModule)(); };
ControlsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ControlsModule });
ControlsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _input_input_module__WEBPACK_IMPORTED_MODULE_0__.InputModule,
            _form_field_form_field_module__WEBPACK_IMPORTED_MODULE_1__.FormFieldModule,
            _password_password_module__WEBPACK_IMPORTED_MODULE_2__.PasswordModule,
            _select_select_module__WEBPACK_IMPORTED_MODULE_3__.SelectModule,
            _checkboxes_checkboxes_module__WEBPACK_IMPORTED_MODULE_4__.CheckboxesModule,
            _radios_radios_module__WEBPACK_IMPORTED_MODULE_5__.RadiosModule,
            _date_date_module__WEBPACK_IMPORTED_MODULE_6__.DateModule,
            _date_range_date_range_module__WEBPACK_IMPORTED_MODULE_7__.DateRangeModule,
            _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__.AutocompleteModule
        ], _input_input_module__WEBPACK_IMPORTED_MODULE_0__.InputModule,
        _form_field_form_field_module__WEBPACK_IMPORTED_MODULE_1__.FormFieldModule,
        _password_password_module__WEBPACK_IMPORTED_MODULE_2__.PasswordModule,
        _select_select_module__WEBPACK_IMPORTED_MODULE_3__.SelectModule,
        _checkboxes_checkboxes_module__WEBPACK_IMPORTED_MODULE_4__.CheckboxesModule,
        _radios_radios_module__WEBPACK_IMPORTED_MODULE_5__.RadiosModule,
        _date_date_module__WEBPACK_IMPORTED_MODULE_6__.DateModule,
        _date_range_date_range_module__WEBPACK_IMPORTED_MODULE_7__.DateRangeModule,
        _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__.AutocompleteModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ControlsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _input_input_module__WEBPACK_IMPORTED_MODULE_0__.InputModule,
        _form_field_form_field_module__WEBPACK_IMPORTED_MODULE_1__.FormFieldModule,
        _password_password_module__WEBPACK_IMPORTED_MODULE_2__.PasswordModule,
        _select_select_module__WEBPACK_IMPORTED_MODULE_3__.SelectModule,
        _checkboxes_checkboxes_module__WEBPACK_IMPORTED_MODULE_4__.CheckboxesModule,
        _radios_radios_module__WEBPACK_IMPORTED_MODULE_5__.RadiosModule,
        _date_date_module__WEBPACK_IMPORTED_MODULE_6__.DateModule,
        _date_range_date_range_module__WEBPACK_IMPORTED_MODULE_7__.DateRangeModule,
        _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__.AutocompleteModule], exports: [_input_input_module__WEBPACK_IMPORTED_MODULE_0__.InputModule,
        _form_field_form_field_module__WEBPACK_IMPORTED_MODULE_1__.FormFieldModule,
        _password_password_module__WEBPACK_IMPORTED_MODULE_2__.PasswordModule,
        _select_select_module__WEBPACK_IMPORTED_MODULE_3__.SelectModule,
        _checkboxes_checkboxes_module__WEBPACK_IMPORTED_MODULE_4__.CheckboxesModule,
        _radios_radios_module__WEBPACK_IMPORTED_MODULE_5__.RadiosModule,
        _date_date_module__WEBPACK_IMPORTED_MODULE_6__.DateModule,
        _date_range_date_range_module__WEBPACK_IMPORTED_MODULE_7__.DateRangeModule,
        _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__.AutocompleteModule] }); })();


/***/ }),

/***/ 2111:
/*!********************************************************************!*\
  !*** ./src/app/shared/controls/date-range/date-range.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateRangeComponent": () => (/* binding */ DateRangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _date_date_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date/date.component */ 2046);





class DateRangeComponent {
    constructor(fb) {
        this.fb = fb;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.propagateChange = () => { };
        this.propagateTouched = () => { };
    }
    ngOnInit() {
        this.form = this.fb.group({
            from: [null],
            to: [null]
        });
    }
    // date: [null, {
    //   updateOn: 'change', validators: [
    //     Validators.required
    //   ]
    // }],
    get min() {
        const from = this.form.controls.from.value;
        return from ? new Date(from) : new Date();
    }
    get max() {
        const to = this.form.controls.to.value;
        return to ? new Date(to) : new Date();
    }
    writeValue(value) {
        this.form.patchValue(value || {});
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.form.disable();
        }
        else {
            this.form.enable();
        }
    }
    onChanged() {
        const value = Object.assign({}, this.form.value);
        this.propagateChange(value);
        this.changed.emit(value);
    }
    onClosed() {
        this.propagateTouched();
    }
}
DateRangeComponent.ɵfac = function DateRangeComponent_Factory(t) { return new (t || DateRangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
DateRangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DateRangeComponent, selectors: [["app-date-range"]], inputs: { placeholder: "placeholder" }, outputs: { changed: "changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => DateRangeComponent),
                multi: true
            }
        ])], decls: 7, vars: 5, consts: [[1, "date-range"], ["novalidate", "", "autocomplete", "off", 3, "formGroup"], [1, "date-range__items"], ["formControlName", "from", 3, "placeholder", "max", "closed", "changed"], [1, "date-range__dash"], ["formControlName", "to", 3, "placeholder", "min", "closed", "changed"]], template: function DateRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-date", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function DateRangeComponent_Template_app_date_closed_3_listener() { return ctx.onClosed(); })("changed", function DateRangeComponent_Template_app_date_changed_3_listener() { return ctx.onChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-date", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function DateRangeComponent_Template_app_date_closed_6_listener() { return ctx.onClosed(); })("changed", function DateRangeComponent_Template_app_date_changed_6_listener() { return ctx.onChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", (ctx.placeholder == null ? null : ctx.placeholder.from) || "Desde")("max", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", (ctx.placeholder == null ? null : ctx.placeholder.to) || "Hasta")("min", ctx.min);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _date_date_component__WEBPACK_IMPORTED_MODULE_0__.DateComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".date-range__items[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.date-range__dash[_ngcontent-%COMP%] {\n  display: block;\n  padding-right: 12px;\n}\n.form-field_error[_nghost-%COMP%]   .input[_ngcontent-%COMP%], .form-field_error   [_nghost-%COMP%]   .input[_ngcontent-%COMP%] {\n  border: 1px solid #B00020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtcmFuZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFISjtBQVFFO0VBQ0UseUJBQUE7QUFMSiIsImZpbGUiOiJkYXRlLXJhbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9jb2xvcnNcIjtcblxuLmRhdGUtcmFuZ2Uge1xuICAmX19pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICZfX2Rhc2gge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIH1cbn1cblxuOmhvc3QtY29udGV4dCguZm9ybS1maWVsZF9lcnJvcikge1xuICAuaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRlcnJvclxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 3316:
/*!*****************************************************************!*\
  !*** ./src/app/shared/controls/date-range/date-range.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateRangeModule": () => (/* binding */ DateRangeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _date_range_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-range.component */ 2111);
/* harmony import */ var _date_date_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date/date.module */ 9605);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class DateRangeModule {
}
DateRangeModule.ɵfac = function DateRangeModule_Factory(t) { return new (t || DateRangeModule)(); };
DateRangeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DateRangeModule });
DateRangeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _date_date_module__WEBPACK_IMPORTED_MODULE_1__.DateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DateRangeModule, { declarations: [_date_range_component__WEBPACK_IMPORTED_MODULE_0__.DateRangeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _date_date_module__WEBPACK_IMPORTED_MODULE_1__.DateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule], exports: [_date_range_component__WEBPACK_IMPORTED_MODULE_0__.DateRangeComponent] }); })();


/***/ }),

/***/ 2046:
/*!********************************************************!*\
  !*** ./src/app/shared/controls/date/date.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateComponent": () => (/* binding */ DateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);




class DateComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.propagateChange = () => { };
        this.propagateTouched = () => { };
    }
    get inputValue() {
        return this.value ? new Date(this.value) : null;
    }
    ngOnInit() {
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onChanged(event) {
        const value = event.value ? event.value.getTime() : new Date().getTime();
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }
    onClosed() {
        this.propagateTouched();
        this.closed.emit();
    }
}
DateComponent.ɵfac = function DateComponent_Factory(t) { return new (t || DateComponent)(); };
DateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateComponent, selectors: [["app-date"]], inputs: { placeholder: "placeholder", min: "min", max: "max" }, outputs: { changed: "changed", closed: "closed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => DateComponent),
                multi: true
            }
        ])], decls: 5, vars: 7, consts: [[1, "date"], ["type", "text", "readonly", "", 1, "app-input", 3, "matDatepicker", "value", "min", "max", "placeholder", "dateChange", "click"], ["matSuffix", "", "disabled", "isDisabled", 3, "for"], [3, "closed"], ["picker", ""]], template: function DateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function DateComponent_Template_input_dateChange_1_listener($event) { return ctx.onChanged($event); })("click", function DateComponent_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-datepicker", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DateComponent_Template_mat_datepicker_closed_3_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder || "Seleccione una fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("value", ctx.inputValue)("min", ctx.min)("max", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isDisabled ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
    } }, directives: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDatepicker], styles: [".date[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.form-field_error[_nghost-%COMP%]   input[_ngcontent-%COMP%], .form-field_error   [_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #B00020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBQTtBQURGOztBQUtFO0VBQ0UseUJBQUE7QUFGSiIsImZpbGUiOiJkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9jb2xvcnNcIjtcblxuLmRhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuOmhvc3QtY29udGV4dCguZm9ybS1maWVsZF9lcnJvcikge1xuICBpbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGVycm9yXG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9605:
/*!*****************************************************!*\
  !*** ./src/app/shared/controls/date/date.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateModule": () => (/* binding */ DateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _date_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.component */ 2046);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class DateModule {
}
DateModule.ɵfac = function DateModule_Factory(t) { return new (t || DateModule)(); };
DateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DateModule });
DateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DateModule, { declarations: [_date_component__WEBPACK_IMPORTED_MODULE_0__.DateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule], exports: [_date_component__WEBPACK_IMPORTED_MODULE_0__.DateComponent] }); })();


/***/ }),

/***/ 7195:
/*!********************************************************************!*\
  !*** ./src/app/shared/controls/form-field/form-field.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFieldComponent": () => (/* binding */ FormFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function FormFieldComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFieldComponent_ng_container_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Minimo ", ctx_r2.control.errors ? ctx_r2.control.errors[ctx_r2.errorKey].min : 0, "");
} }
function FormFieldComponent_ng_container_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Maximo ", ctx_r3.control.errors ? ctx_r3.control.errors[ctx_r3.errorKey].max : 100000, "");
} }
function FormFieldComponent_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este caja de texto es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFieldComponent_ng_container_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este caja de texto es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFieldComponent_ng_container_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("cantidad de caracteres minima ", ctx_r6.control.errors ? ctx_r6.control.errors[ctx_r6.errorKey].requiredLength : 0, "");
} }
function FormFieldComponent_ng_container_7_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("cantidad de caracteres maxima ", ctx_r7.control.errors ? ctx_r7.control.errors[ctx_r7.errorKey].requiredLength : 0, "");
} }
function FormFieldComponent_ng_container_7_span_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.patternError);
} }
function FormFieldComponent_ng_container_7_span_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La expresion regular no tiene coincidencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFieldComponent_ng_container_7_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormFieldComponent_ng_container_7_span_7_span_1_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormFieldComponent_ng_container_7_span_7_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.patternError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.patternError);
} }
function FormFieldComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormFieldComponent_ng_container_7_span_1_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormFieldComponent_ng_container_7_span_2_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormFieldComponent_ng_container_7_span_3_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormFieldComponent_ng_container_7_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormFieldComponent_ng_container_7_span_5_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormFieldComponent_ng_container_7_span_6_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormFieldComponent_ng_container_7_span_7_Template, 3, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.errorKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "max");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "requiredtrue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "minlength");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "maxlength");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "pattern");
} }
const _c0 = ["*"];
class FormFieldComponent {
    constructor() {
        this.isInline = true;
    }
    ngOnInit() {
    }
    hasError() {
        return this.control && this.control.invalid && this.control.touched;
    }
    get errorKey() {
        return this.control && this.control.errors && Object.keys(this.control.errors)[0];
    }
}
FormFieldComponent.ɵfac = function FormFieldComponent_Factory(t) { return new (t || FormFieldComponent)(); };
FormFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFieldComponent, selectors: [["app-form-field"]], inputs: { label: "label", required: "required", isInline: "isInline", control: "control", patternError: "patternError" }, ngContentSelectors: _c0, decls: 8, vars: 7, consts: [[1, "form-field"], [1, "form-field__label"], ["class", "form-field__req", 4, "ngIf"], [1, "form-field__control"], [1, "form-field__error"], [3, "ngSwitch", 4, "ngIf"], [1, "form-field__req"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngIf"]], template: function FormFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormFieldComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormFieldComponent_ng_container_7_Template, 8, 8, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-field_error", ctx.hasError())("form-field_inline", ctx.isInline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control && ctx.errorKey);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase], styles: [".form-field[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n.form-field__label[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0 6px 0;\n}\n.form-field__control[_ngcontent-%COMP%] {\n  display: block;\n}\n.form-field__error[_ngcontent-%COMP%] {\n  opacity: 0;\n  font-size: 12px;\n  color: #B00020;\n  padding: 4px 0;\n  min-height: 22px;\n}\n.form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.form-field_error[_ngcontent-%COMP%]   .form-field__error[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.form-field_inline[_ngcontent-%COMP%] {\n  display: flex;\n}\n.form-field_inline[_ngcontent-%COMP%]    > .form-field__label[_ngcontent-%COMP%] {\n  padding: 10px 12px 10px 0;\n  width: 30%;\n}\n.form-field_inline[_ngcontent-%COMP%]    > .form-field__control[_ngcontent-%COMP%] {\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0FBRko7QUFLRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0NGSTtFREdKLGNBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxjQUFBO0FBSko7QUFRSTtFQUNFLFVBQUE7QUFOTjtBQVVFO0VBQ0UsYUFBQTtBQVJKO0FBVUk7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUFSTjtBQVdJO0VBQ0UsVUFBQTtBQVROIiwiZmlsZSI6ImZvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvY29sb3JzJztcblxuLmZvcm0tZmllbGQge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuXG4gICZfX2xhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAwIDZweCAwO1xuICB9XG5cbiAgJl9fY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmX19lcnJvciB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICRlcnJvcjtcbiAgICBwYWRkaW5nOiA0cHggMDtcbiAgICBtaW4taGVpZ2h0OiAyMnB4O1xuICB9XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmX2Vycm9yIHtcbiAgICAuZm9ybS1maWVsZF9fZXJyb3Ige1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAmX2lubGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgID4uZm9ybS1maWVsZF9fbGFiZWwge1xuICAgICAgcGFkZGluZzogMTBweCAxMnB4IDEwcHggMDtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuXG4gICAgPi5mb3JtLWZpZWxkX19jb250cm9sIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICB9XG5cbn1cbiIsIiRiYXNlOiAjZmFmYWZhO1xuJGJhc2UtZGFyazogI2UwZTBlMDtcbiRiYXNlLWxpZ2h0OiAjZmZmZmZmO1xuJG9uLWJhc2U6ICMwMDAwMDA7XG5cbiRwcmltYXJ5OiAjMDI3N2JkO1xuJHByaW1hcnktZGFyazogIzAwNGM4YztcbiRwcmltYXJ5LWxpZ2h0OiAjNThhNWYwO1xuJG9uLXByaW1hcnk6ICNmZmZmZmY7XG5cbiRzZWNvbmRhcnk6ICNmNDQzMzY7XG4kc2Vjb25kYXJ5LWRhcms6ICNiOTAwMDc7XG4kc2Vjb25kYXJ5LWxpZ2h0OiAjZmY3OTVkO1xuJG9uLXNlY29uZGFyeTogI2ZmZmZmZjtcblxuJGVycm9yOiAjQjAwMDIwO1xuJG9uLWVycm9yOiAjZmZmZmZmO1xuXG4kc3VjY2VzczogIzk5YWEwMDtcbiRvbi1zdWNjZXNzOiAjZmZmZmZmO1xuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 7075:
/*!*****************************************************************!*\
  !*** ./src/app/shared/controls/form-field/form-field.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFieldModule": () => (/* binding */ FormFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _form_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-field.component */ 7195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class FormFieldModule {
}
FormFieldModule.ɵfac = function FormFieldModule_Factory(t) { return new (t || FormFieldModule)(); };
FormFieldModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FormFieldModule });
FormFieldModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormFieldModule, { declarations: [_form_field_component__WEBPACK_IMPORTED_MODULE_0__.FormFieldComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_form_field_component__WEBPACK_IMPORTED_MODULE_0__.FormFieldComponent] }); })();


/***/ }),

/***/ 7150:
/*!******************************************!*\
  !*** ./src/app/shared/controls/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlsModule": () => (/* reexport safe */ _controls_module__WEBPACK_IMPORTED_MODULE_0__.ControlsModule),
/* harmony export */   "InputModule": () => (/* reexport safe */ _input_input_module__WEBPACK_IMPORTED_MODULE_1__.InputModule),
/* harmony export */   "FormFieldModule": () => (/* reexport safe */ _form_field_form_field_module__WEBPACK_IMPORTED_MODULE_2__.FormFieldModule),
/* harmony export */   "PasswordModule": () => (/* reexport safe */ _password_password_module__WEBPACK_IMPORTED_MODULE_3__.PasswordModule),
/* harmony export */   "SelectModule": () => (/* reexport safe */ _select_select_module__WEBPACK_IMPORTED_MODULE_4__.SelectModule),
/* harmony export */   "CheckboxesModule": () => (/* reexport safe */ _checkboxes_checkboxes_module__WEBPACK_IMPORTED_MODULE_5__.CheckboxesModule),
/* harmony export */   "RadiosModule": () => (/* reexport safe */ _radios_radios_module__WEBPACK_IMPORTED_MODULE_6__.RadiosModule),
/* harmony export */   "DateModule": () => (/* reexport safe */ _date_date_module__WEBPACK_IMPORTED_MODULE_7__.DateModule),
/* harmony export */   "DateRangeModule": () => (/* reexport safe */ _date_range_date_range_module__WEBPACK_IMPORTED_MODULE_8__.DateRangeModule),
/* harmony export */   "AutocompleteModule": () => (/* reexport safe */ _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__.AutocompleteModule)
/* harmony export */ });
/* harmony import */ var _controls_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls.module */ 374);
/* harmony import */ var _input_input_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/input.module */ 6995);
/* harmony import */ var _form_field_form_field_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-field/form-field.module */ 7075);
/* harmony import */ var _password_password_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password/password.module */ 1255);
/* harmony import */ var _select_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select/select.module */ 1487);
/* harmony import */ var _checkboxes_checkboxes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkboxes/checkboxes.module */ 9044);
/* harmony import */ var _radios_radios_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radios/radios.module */ 2532);
/* harmony import */ var _date_date_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date/date.module */ 9605);
/* harmony import */ var _date_range_date_range_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date-range/date-range.module */ 3316);
/* harmony import */ var _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./autocomplete/autocomplete.module */ 8377);












/***/ }),

/***/ 6840:
/*!**********************************************************!*\
  !*** ./src/app/shared/controls/input/input.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);



class InputComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.value = '';
        this.isDisabled = false;
        this.propagateChange = () => { };
        this.propagateTouched = () => { };
    }
    ngOnInit() { }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onKeyup(event) {
        const { target } = event;
        this.value = target.value;
        this.propagateChange(this.value);
        this.changed.emit(this.value);
    }
    onBlur() {
        this.propagateTouched();
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { placeholder: "placeholder" }, outputs: { changed: "changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => InputComponent),
                multi: true,
            },
        ])], decls: 1, vars: 3, consts: [["type", "text", 1, "app-input", 3, "value", "placeholder", "keyup", "blur"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InputComponent_Template_input_keyup_0_listener($event) { return ctx.onKeyup($event); })("blur", function InputComponent_Template_input_blur_0_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("placeholder", ctx.placeholder || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isDisabled ? true : null);
    } }, styles: [".form-field_error[_nghost-%COMP%]   input[_ngcontent-%COMP%], .form-field_error   [_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #B00020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UseUJBQUE7QUFGSiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvY29sb3JzXCI7XG5cbjpob3N0LWNvbnRleHQoLmZvcm0tZmllbGRfZXJyb3IpIHtcbiAgaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRlcnJvclxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6995:
/*!*******************************************************!*\
  !*** ./src/app/shared/controls/input/input.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputModule": () => (/* binding */ InputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.component */ 6840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class InputModule {
}
InputModule.ɵfac = function InputModule_Factory(t) { return new (t || InputModule)(); };
InputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InputModule });
InputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InputModule, { declarations: [_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent] }); })();


/***/ }),

/***/ 497:
/*!****************************************************************!*\
  !*** ./src/app/shared/controls/password/password.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordComponent": () => (/* binding */ PasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);



class PasswordComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.propagateChange = () => { };
        this.propagateTouched = () => { };
        this.passwordType = 'password';
    }
    ngOnInit() {
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onKeyup(event) {
        const { target } = event;
        this.value = target.value;
        this.propagateChange(this.value);
        this.changed.emit(this.value);
    }
    onBlur() {
        this.propagateTouched();
    }
    togglePassword() {
        this.passwordType = this.passwordType == 'password' ? 'text' : 'password';
    }
}
PasswordComponent.ɵfac = function PasswordComponent_Factory(t) { return new (t || PasswordComponent)(); };
PasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordComponent, selectors: [["app-password"]], inputs: { placeholder: "placeholder" }, outputs: { changed: "changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => PasswordComponent),
                multi: true
            }
        ])], decls: 5, vars: 5, consts: [[1, "password"], ["type", "text", 1, "app-input", 3, "value", "placeholder", "keyup", "blur"], [1, "password__actions", 3, "click"]], template: function PasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PasswordComponent_Template_input_keyup_1_listener($event) { return ctx.onKeyup($event); })("blur", function PasswordComponent_Template_input_blur_1_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordComponent_Template_div_click_2_listener() { return ctx.togglePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("placeholder", ctx.placeholder || "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isDisabled ? true : null)("type", ctx.passwordType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.passwordType == "password" ? "Show" : "Hide");
    } }, styles: [".password[_ngcontent-%COMP%] {\n  display: flex;\n}\n.password__actions[_ngcontent-%COMP%] {\n  min-width: 50px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.form-field_error[_nghost-%COMP%]   input[_ngcontent-%COMP%], .form-field_error   [_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #B00020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQUFGO0FBRUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBS0U7RUFDRSx5QkFBQTtBQUZKIiwiZmlsZSI6InBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9jb2xvcnNcIjtcbi5wYXNzd29yZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgJl9fYWN0aW9ucyB7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbjpob3N0LWNvbnRleHQoLmZvcm0tZmllbGRfZXJyb3IpIHtcbiAgaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRlcnJvclxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 1255:
/*!*************************************************************!*\
  !*** ./src/app/shared/controls/password/password.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordModule": () => (/* binding */ PasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.component */ 497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class PasswordModule {
}
PasswordModule.ɵfac = function PasswordModule_Factory(t) { return new (t || PasswordModule)(); };
PasswordModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PasswordModule });
PasswordModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PasswordModule, { declarations: [_password_component__WEBPACK_IMPORTED_MODULE_0__.PasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_password_component__WEBPACK_IMPORTED_MODULE_0__.PasswordComponent] }); })();


/***/ }),

/***/ 4997:
/*!************************************************************!*\
  !*** ./src/app/shared/controls/radios/radios.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadiosComponent": () => (/* binding */ RadiosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);




function RadiosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RadiosComponent_div_1_Template_input_change_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onChanged(item_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("radio_disabled", ctx_r0.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.value)("checked", ctx_r0.isChecked(item_r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r0.isDisabled ? true : null);
} }
class RadiosComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.propagateChange = () => { };
    }
    ngOnInit() {
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) { }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onChanged(value) {
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }
    isChecked(value) {
        return this.value === value;
    }
}
RadiosComponent.ɵfac = function RadiosComponent_Factory(t) { return new (t || RadiosComponent)(); };
RadiosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RadiosComponent, selectors: [["app-radios"]], inputs: { items: "items" }, outputs: { changed: "changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RadiosComponent),
                multi: true
            }
        ])], decls: 2, vars: 1, consts: [[1, "radios"], [4, "ngFor", "ngForOf"], [1, "radio"], ["type", "radio", 1, "radio__input", 3, "value", "checked", "change"], [1, "radio__checkmark"]], template: function RadiosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RadiosComponent_div_1_Template, 5, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".radio[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  text-indent: 30px;\n  margin: 8px 0;\n  padding: 0 20px 0 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.radio__input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.radio__input[_ngcontent-%COMP%]:checked    ~ .radio__checkmark[_ngcontent-%COMP%] {\n  background-color: #0277bd;\n}\n.radio__input[_ngcontent-%COMP%]:checked    ~ .radio__checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n  background: #fff;\n  left: 6px;\n  top: 6px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.radio__checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  background-color: #eee;\n}\n.radio__checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.radio_disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.radio[_ngcontent-%COMP%]:hover   .radio__checkmark[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n.radio[_ngcontent-%COMP%]:hover   .radio__input[_ngcontent-%COMP%]:checked    ~ .radio__checkmark[_ngcontent-%COMP%] {\n  background-color: #004c8c;\n}\n.form-field_error[_nghost-%COMP%]   .radio__checkmark[_ngcontent-%COMP%], .form-field_error   [_nghost-%COMP%]   .radio__checkmark[_ngcontent-%COMP%] {\n  border: 1px solid #B00020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtBQUZGO0FBSUU7RUFDRyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFGTDtBQUtNO0VBQ0UseUJDbkJFO0FEZ0JWO0FBS1E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFIVjtBQVdFO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVROO0FBV007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBVFI7QUFhRTtFQUNFLDBCQUFBO0FBWEo7QUFnQkk7RUFDRSxzQkFBQTtBQWROO0FBaUJJO0VBQ0UseUJDOURTO0FEK0NmO0FBc0JFO0VBQ0UseUJBQUE7QUFuQkoiLCJmaWxlIjoicmFkaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9jb2xvcnNcIjtcblxuLnJhZGlvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1pbmRlbnQ6IDMwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0Om5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgJl9faW5wdXR7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgb3BhY2l0eTogMDtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICBoZWlnaHQ6IDA7XG4gICAgIHdpZHRoOiAwO1xuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgICZ+LnJhZGlvX19jaGVja21hcmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGxlZnQ6IDZweDtcbiAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gIH1cblxuICAmX19jaGVja21hcmsge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDowO1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICB9XG5cbiAgJl9kaXNhYmxlZCB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjM4KTtcblxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLnJhZGlvX19jaGVja21hcmsge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICB9XG5cbiAgICAucmFkaW9fX2lucHV0OmNoZWNrZWQgfiAucmFkaW9fX2NoZWNrbWFyayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kYXJrIDtcbiAgICB9XG5cbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5mb3JtLWZpZWxkX2Vycm9yKSB7XG4gIC5yYWRpb19fY2hlY2ttYXJrIHtcbiAgICBib3JkZXIgOiAxcHggc29saWQgJGVycm9yO1xuICB9XG59XG4iLCIkYmFzZTogI2ZhZmFmYTtcbiRiYXNlLWRhcms6ICNlMGUwZTA7XG4kYmFzZS1saWdodDogI2ZmZmZmZjtcbiRvbi1iYXNlOiAjMDAwMDAwO1xuXG4kcHJpbWFyeTogIzAyNzdiZDtcbiRwcmltYXJ5LWRhcms6ICMwMDRjOGM7XG4kcHJpbWFyeS1saWdodDogIzU4YTVmMDtcbiRvbi1wcmltYXJ5OiAjZmZmZmZmO1xuXG4kc2Vjb25kYXJ5OiAjZjQ0MzM2O1xuJHNlY29uZGFyeS1kYXJrOiAjYjkwMDA3O1xuJHNlY29uZGFyeS1saWdodDogI2ZmNzk1ZDtcbiRvbi1zZWNvbmRhcnk6ICNmZmZmZmY7XG5cbiRlcnJvcjogI0IwMDAyMDtcbiRvbi1lcnJvcjogI2ZmZmZmZjtcblxuJHN1Y2Nlc3M6ICM5OWFhMDA7XG4kb24tc3VjY2VzczogI2ZmZmZmZjtcblxuXG4iXX0= */"] });


/***/ }),

/***/ 2532:
/*!*********************************************************!*\
  !*** ./src/app/shared/controls/radios/radios.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadiosModule": () => (/* binding */ RadiosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _radios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radios.component */ 4997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class RadiosModule {
}
RadiosModule.ɵfac = function RadiosModule_Factory(t) { return new (t || RadiosModule)(); };
RadiosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RadiosModule });
RadiosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RadiosModule, { declarations: [_radios_component__WEBPACK_IMPORTED_MODULE_0__.RadiosComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_radios_component__WEBPACK_IMPORTED_MODULE_0__.RadiosComponent] }); })();


/***/ }),

/***/ 8860:
/*!************************************************************!*\
  !*** ./src/app/shared/controls/select/select.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 2220);






function SelectComponent_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
} }
class SelectComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.propagateChange = () => { };
        this.propagateTouched = () => { };
    }
    ngOnInit() {
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onChanged(event) {
        const value = event.value ? event.value : null;
        this.value = value;
        this.propagateChange(value);
        this.changed.emit(value);
    }
    onBlur() {
        this.propagateTouched();
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], inputs: { items: "items", placeholder: "placeholder" }, outputs: { changed: "changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SelectComponent),
                multi: true
            }
        ])], decls: 3, vars: 5, consts: [[1, "select", "app-input"], [3, "value", "disabled", "selectionChange", "blur"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SelectComponent_Template_mat_select_selectionChange_1_listener($event) { return ctx.onChanged($event); })("blur", function SelectComponent_Template_mat_select_blur_1_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectComponent_mat_option_2_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("select_disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_material_select__WEBPACK_IMPORTED_MODULE_2__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption], styles: [".select[_ngcontent-%COMP%] {\n  line-height: 36px;\n  padding: 0 15px 0 15px;\n}\n.select_disabled[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(0, 0, 0, 0.15);\n}\n.form-field_error[_nghost-%COMP%]   .select[_ngcontent-%COMP%], .form-field_error   [_nghost-%COMP%]   .select[_ngcontent-%COMP%] {\n  border: 1px solid #B00020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUdFO0VBQ0UsK0JBQUE7RUFDQSxxQ0FBQTtBQURKO0FBTUU7RUFDRSx5QkFBQTtBQUhKIiwiZmlsZSI6InNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvY29sb3JzXCI7XG5cbi5zZWxlY3Qge1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcblxuICAmX2Rpc2FibGVke1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjA1KTtcbiAgICBib3JkZXI6IDFweCAgc29saWQgcmdiYSgwLDAsMCwuMTUpO1xuICB9XG59XG5cbjpob3N0LWNvbnRleHQoLmZvcm0tZmllbGRfZXJyb3IpIHtcbiAgLnNlbGVjdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZXJyb3JcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 1487:
/*!*********************************************************!*\
  !*** ./src/app/shared/controls/select/select.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectModule": () => (/* binding */ SelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.component */ 8860);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class SelectModule {
}
SelectModule.ɵfac = function SelectModule_Factory(t) { return new (t || SelectModule)(); };
SelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SelectModule });
SelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SelectModule, { declarations: [_select_component__WEBPACK_IMPORTED_MODULE_0__.SelectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelectModule], exports: [_select_component__WEBPACK_IMPORTED_MODULE_0__.SelectComponent] }); })();


/***/ }),

/***/ 9299:
/*!********************************************!*\
  !*** ./src/app/shared/indicators/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorsModule": () => (/* reexport safe */ _indicators_module__WEBPACK_IMPORTED_MODULE_0__.IndicatorsModule),
/* harmony export */   "SpinnerModule": () => (/* reexport safe */ _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_1__.SpinnerModule)
/* harmony export */ });
/* harmony import */ var _indicators_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicators.module */ 529);
/* harmony import */ var _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner/spinner.module */ 8719);




/***/ }),

/***/ 529:
/*!********************************************************!*\
  !*** ./src/app/shared/indicators/indicators.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorsModule": () => (/* binding */ IndicatorsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner/spinner.module */ 8719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class IndicatorsModule {
}
IndicatorsModule.ɵfac = function IndicatorsModule_Factory(t) { return new (t || IndicatorsModule)(); };
IndicatorsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IndicatorsModule });
IndicatorsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_0__.SpinnerModule
        ], _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_0__.SpinnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IndicatorsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _spinner_spinner_module__WEBPACK_IMPORTED_MODULE_0__.SpinnerModule], exports: [_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_0__.SpinnerModule] }); })();


/***/ }),

/***/ 3733:
/*!****************************************************************!*\
  !*** ./src/app/shared/indicators/spinner/spinner.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);


class SpinnerComponent {
    constructor() {
        this.color = 'primary';
        this.mode = 'indeterminate';
    }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 3, vars: 2, consts: [[1, "wrapper"], [1, "spinner"], [3, "color", "mode"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("mode", ctx.mode);
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatProgressSpinner], styles: [".wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n  background: rgba(255, 255, 255, 0.65);\n  border-radius: 8px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  left: calc(50% - 50px);\n  top: calc(50% - 50px);\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xuICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8719:
/*!*************************************************************!*\
  !*** ./src/app/shared/indicators/spinner/spinner.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerModule": () => (/* binding */ SpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component */ 3733);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class SpinnerModule {
}
SpinnerModule.ɵfac = function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); };
SpinnerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SpinnerModule });
SpinnerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpinnerModule, { declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule], exports: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=415.d0fc9a0c53a7af892cba.js.map