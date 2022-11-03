"use strict";
(self["webpackChunkecommerce_angular_app"] = self["webpackChunkecommerce_angular_app"] || []).push([[679],{

/***/ 2213:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_DIALOG_DATA": () => (/* binding */ MAT_DIALOG_DATA),
/* harmony export */   "MAT_DIALOG_DEFAULT_OPTIONS": () => (/* binding */ MAT_DIALOG_DEFAULT_OPTIONS),
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY": () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY),
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER": () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY": () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   "MatDialog": () => (/* binding */ MatDialog),
/* harmony export */   "MatDialogActions": () => (/* binding */ MatDialogActions),
/* harmony export */   "MatDialogClose": () => (/* binding */ MatDialogClose),
/* harmony export */   "MatDialogConfig": () => (/* binding */ MatDialogConfig),
/* harmony export */   "MatDialogContainer": () => (/* binding */ MatDialogContainer),
/* harmony export */   "MatDialogContent": () => (/* binding */ MatDialogContent),
/* harmony export */   "MatDialogModule": () => (/* binding */ MatDialogModule),
/* harmony export */   "MatDialogRef": () => (/* binding */ MatDialogRef),
/* harmony export */   "MatDialogTitle": () => (/* binding */ MatDialogTitle),
/* harmony export */   "_MatDialogBase": () => (/* binding */ _MatDialogBase),
/* harmony export */   "_MatDialogContainerBase": () => (/* binding */ _MatDialogContainerBase),
/* harmony export */   "_closeDialogVia": () => (/* binding */ _closeDialogVia),
/* harmony export */   "matDialogAnimations": () => (/* binding */ matDialogAnimations),
/* harmony export */   "throwMatDialogContentAlreadyAttachedError": () => (/* binding */ throwMatDialogContentAlreadyAttachedError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9877);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 7599);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6477);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 7993);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Configuration for opening a modal dialog with the MatDialog service.
 */






function MatDialogContainer_ng_template_0_Template(rf, ctx) { }
class MatDialogConfig {
    constructor() {
        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Custom class for the overlay pane. */
        this.panelClass = '';
        /** Whether the dialog has a backdrop. */
        this.hasBackdrop = true;
        /** Custom class for the backdrop. */
        this.backdropClass = '';
        /** Whether the user can use escape or clicking on the backdrop to close the modal. */
        this.disableClose = false;
        /** Width of the dialog. */
        this.width = '';
        /** Height of the dialog. */
        this.height = '';
        /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */
        this.maxWidth = '80vw';
        /** Data being injected into the child component. */
        this.data = null;
        /** ID of the element that describes the dialog. */
        this.ariaDescribedBy = null;
        /** ID of the element that labels the dialog. */
        this.ariaLabelledBy = null;
        /** Aria label to assign to the dialog element. */
        this.ariaLabel = null;
        /** Whether the dialog should focus the first focusable element on open. */
        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
        // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by MatDialog.
 * @docs-private
 */
const matDialogAnimations = {
    /** Animation that is applied on the dialog container by default. */
    dialogContainer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('dialogContainer', [
        // Note: The `enter` animation transitions to `transform: none`, because for some reason
        // specifying the transform explicitly, causes IE both to blur the dialog content and
        // decimate the animation performance. Leaving it as `none` solves both issues.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void, exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale(0.7)' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'none' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'none', opacity: 1 }))),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void, * => exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }))),
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
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * @docs-private
 */
function throwMatDialogContentAlreadyAttachedError() {
    throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Base class for the `MatDialogContainer`. The base class does not implement
 * animations as these are left to implementers of the dialog container.
 */
class _MatDialogContainerBase extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.BasePortalOutlet {
    constructor(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, 
    /** The dialog configuration. */
    _config, _focusMonitor) {
        super();
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this._changeDetectorRef = _changeDetectorRef;
        this._config = _config;
        this._focusMonitor = _focusMonitor;
        /** Emits when an animation state changes. */
        this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /** Element that was focused before the dialog was opened. Save this to restore upon close. */
        this._elementFocusedBeforeDialogWasOpened = null;
        /**
         * Type of interaction that led to the dialog being closed. This is used to determine
         * whether the focus style will be applied when returning focus to its original location
         * after the dialog is closed.
         */
        this._closeInteractionType = null;
        /**
         * Attaches a DOM portal to the dialog container.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        this.attachDomPortal = (portal) => {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatDialogContentAlreadyAttachedError();
            }
            return this._portalOutlet.attachDomPortal(portal);
        };
        this._ariaLabelledBy = _config.ariaLabelledBy || null;
        this._document = _document;
    }
    /** Initializes the dialog container with the attached content. */
    _initializeWithAttachedContent() {
        this._setupFocusTrap();
        // Save the previously focused element. This element will be re-focused
        // when the dialog closes.
        this._capturePreviouslyFocusedElement();
        // Move focus onto the dialog immediately in order to prevent the user
        // from accidentally opening multiple dialogs at the same time.
        this._focusDialogContainer();
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatDialogContentAlreadyAttachedError();
        }
        return this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachTemplatePortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatDialogContentAlreadyAttachedError();
        }
        return this._portalOutlet.attachTemplatePortal(portal);
    }
    /** Moves focus back into the dialog if it was moved out. */
    _recaptureFocus() {
        if (!this._containsFocus()) {
            const focusContainer = !this._config.autoFocus || !this._focusTrap.focusInitialElement();
            if (focusContainer) {
                this._elementRef.nativeElement.focus();
            }
        }
    }
    /** Moves the focus inside the focus trap. */
    _trapFocus() {
        // If we were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        if (this._config.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
        else if (!this._containsFocus()) {
            // Otherwise ensure that focus is on the dialog container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the dialog already, because it's possible that the consumer
            // turned off `autoFocus` in order to move focus themselves.
            this._elementRef.nativeElement.focus();
        }
    }
    /** Restores focus to the element that was focused before the dialog opened. */
    _restoreFocus() {
        const previousElement = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this._config.restoreFocus && previousElement &&
            typeof previousElement.focus === 'function') {
            const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__._getFocusedElementPierceShadowDom)();
            const element = this._elementRef.nativeElement;
            // Make sure that focus is still inside the dialog or is on the body (usually because a
            // non-focusable element like the backdrop was clicked) before moving it. It's possible that
            // the consumer moved it themselves before the animation was done, in which case we shouldn't
            // do anything.
            if (!activeElement || activeElement === this._document.body || activeElement === element ||
                element.contains(activeElement)) {
                if (this._focusMonitor) {
                    this._focusMonitor.focusVia(previousElement, this._closeInteractionType);
                    this._closeInteractionType = null;
                }
                else {
                    previousElement.focus();
                }
            }
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    }
    /** Sets up the focus trap. */
    _setupFocusTrap() {
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    }
    /** Captures the element that was focused before the dialog was opened. */
    _capturePreviouslyFocusedElement() {
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__._getFocusedElementPierceShadowDom)();
        }
    }
    /** Focuses the dialog container. */
    _focusDialogContainer() {
        // Note that there is no focus method when rendering on the server.
        if (this._elementRef.nativeElement.focus) {
            this._elementRef.nativeElement.focus();
        }
    }
    /** Returns whether focus is inside the dialog. */
    _containsFocus() {
        const element = this._elementRef.nativeElement;
        const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__._getFocusedElementPierceShadowDom)();
        return element === activeElement || element.contains(activeElement);
    }
}
_MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(t) { return new (t || _MatDialogContainerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor)); };
_MatDialogContainerBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: _MatDialogContainerBase, viewQuery: function _MatDialogContainerBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
_MatDialogContainerBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusTrapFactory },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT,] }] },
    { type: MatDialogConfig },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor }
];
_MatDialogContainerBase.propDecorators = {
    _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogContainerBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusTrapFactory }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
            }] }, { type: MatDialogConfig }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor }]; }, { _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, { static: true }]
        }] }); })();
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * @docs-private
 */
class MatDialogContainer extends _MatDialogContainerBase {
    constructor() {
        super(...arguments);
        /** State of the dialog animation. */
        this._state = 'enter';
    }
    /** Callback, invoked whenever an animation on the host completes. */
    _onAnimationDone({ toState, totalTime }) {
        if (toState === 'enter') {
            this._trapFocus();
            this._animationStateChanged.next({ state: 'opened', totalTime });
        }
        else if (toState === 'exit') {
            this._restoreFocus();
            this._animationStateChanged.next({ state: 'closed', totalTime });
        }
    }
    /** Callback, invoked when an animation on the host starts. */
    _onAnimationStart({ toState, totalTime }) {
        if (toState === 'enter') {
            this._animationStateChanged.next({ state: 'opening', totalTime });
        }
        else if (toState === 'exit' || toState === 'void') {
            this._animationStateChanged.next({ state: 'closing', totalTime });
        }
    }
    /** Starts the dialog exit animation. */
    _startExitAnimation() {
        this._state = 'exit';
        // Mark the container for check so it can react if the
        // view container is using OnPush change detection.
        this._changeDetectorRef.markForCheck();
    }
}
MatDialogContainer.ɵfac = /*@__PURE__*/ function () { let ɵMatDialogContainer_BaseFactory; return function MatDialogContainer_Factory(t) { return (ɵMatDialogContainer_BaseFactory || (ɵMatDialogContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatDialogContainer)))(t || MatDialogContainer); }; }();
MatDialogContainer.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatDialogContainer, selectors: [["mat-dialog-container"]], hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"], hostVars: 6, hostBindings: function MatDialogContainer_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) { return ctx._onAnimationStart($event); })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) { return ctx._onAnimationDone($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatDialogContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet], styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, data: { animation: [matDialogAnimations.dialogContainer] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mat-dialog-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
                // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.Default,
                animations: [matDialogAnimations.dialogContainer],
                host: {
                    'class': 'mat-dialog-container',
                    'tabindex': '-1',
                    'aria-modal': 'true',
                    '[id]': '_id',
                    '[attr.role]': '_config.role',
                    '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
                    '[attr.aria-label]': '_config.ariaLabel',
                    '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
                    '[@dialogContainer]': '_state',
                    '(@dialogContainer.start)': '_onAnimationStart($event)',
                    '(@dialogContainer.done)': '_onAnimationDone($event)'
                },
                styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jelbourn): resizing
// Counter for unique dialog ids.
let uniqueId = 0;
/**
 * Reference to a dialog opened via the MatDialog service.
 */
class MatDialogRef {
    constructor(_overlayRef, _containerInstance, 
    /** Id of the dialog. */
    id = `mat-dialog-${uniqueId++}`) {
        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /** Whether the user is allowed to close the dialog. */
        this.disableClose = this._containerInstance._config.disableClose;
        /** Subject for notifying the user that the dialog has finished opening. */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        /** Subject for notifying the user that the dialog has finished closing. */
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        /** Subject for notifying the user that the dialog has started closing. */
        this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        /** Current state of the dialog. */
        this._state = 0 /* OPEN */;
        // Pass the id along to the container.
        _containerInstance._id = id;
        // Emit when opening animation completes
        _containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event.state === 'opened'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1))
            .subscribe(() => {
            this._afterOpened.next();
            this._afterOpened.complete();
        });
        // Dispose overlay when closing animation is complete
        _containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event.state === 'closed'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(() => {
            clearTimeout(this._closeFallbackTimeout);
            this._finishDialogClose();
        });
        _overlayRef.detachments().subscribe(() => {
            this._beforeClosed.next(this._result);
            this._beforeClosed.complete();
            this._afterClosed.next(this._result);
            this._afterClosed.complete();
            this.componentInstance = null;
            this._overlayRef.dispose();
        });
        _overlayRef.keydownEvents()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ESCAPE && !this.disableClose && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.hasModifierKey)(event);
        }))
            .subscribe(event => {
            event.preventDefault();
            _closeDialogVia(this, 'keyboard');
        });
        _overlayRef.backdropClick().subscribe(() => {
            if (this.disableClose) {
                this._containerInstance._recaptureFocus();
            }
            else {
                _closeDialogVia(this, 'mouse');
            }
        });
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    close(dialogResult) {
        this._result = dialogResult;
        // Transition the backdrop in parallel to the dialog.
        this._containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event.state === 'closing'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1))
            .subscribe(event => {
            this._beforeClosed.next(dialogResult);
            this._beforeClosed.complete();
            this._overlayRef.detachBackdrop();
            // The logic that disposes of the overlay depends on the exit animation completing, however
            // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
            // timeout which will clean everything up if the animation hasn't fired within the specified
            // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
            // vast majority of cases the timeout will have been cleared before it has the chance to fire.
            this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
        });
        this._state = 1 /* CLOSING */;
        this._containerInstance._startExitAnimation();
    }
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */
    afterOpened() {
        return this._afterOpened;
    }
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */
    afterClosed() {
        return this._afterClosed;
    }
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */
    beforeClosed() {
        return this._beforeClosed;
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    backdropClick() {
        return this._overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents() {
        return this._overlayRef.keydownEvents();
    }
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    updatePosition(position) {
        let strategy = this._getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this._overlayRef.updatePosition();
        return this;
    }
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */
    updateSize(width = '', height = '') {
        this._overlayRef.updateSize({ width, height });
        this._overlayRef.updatePosition();
        return this;
    }
    /** Add a CSS class or an array of classes to the overlay pane. */
    addPanelClass(classes) {
        this._overlayRef.addPanelClass(classes);
        return this;
    }
    /** Remove a CSS class or an array of classes from the overlay pane. */
    removePanelClass(classes) {
        this._overlayRef.removePanelClass(classes);
        return this;
    }
    /** Gets the current state of the dialog's lifecycle. */
    getState() {
        return this._state;
    }
    /**
     * Finishes the dialog close by updating the state of the dialog
     * and disposing the overlay.
     */
    _finishDialogClose() {
        this._state = 2 /* CLOSED */;
        this._overlayRef.dispose();
    }
    /** Fetches the position strategy object from the overlay ref. */
    _getPositionStrategy() {
        return this._overlayRef.getConfig().positionStrategy;
    }
}
/**
 * Closes the dialog with the specified interaction type. This is currently not part of
 * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
 * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
 */
// TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.
function _closeDialogVia(ref, interactionType, result) {
    // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
    // For those, we keep the behavior as is and do not deal with the interaction type.
    if (ref._containerInstance !== undefined) {
        ref._containerInstance._closeInteractionType = interactionType;
    }
    return ref.close(result);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to access the data that was passed in to a dialog. */
const MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MatDialogData');
/** Injection token that can be used to specify default dialog options. */
const MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-dialog-default-options');
/** Injection token that determines the scroll handling while the dialog is open. */
const MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-dialog-scroll-strategy');
/** @docs-private */
function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
/** @docs-private */
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
/** @docs-private */
const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_DIALOG_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay],
    useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Base class for dialog services. The base dialog service allows
 * for arbitrary dialog refs and dialog container components.
 */
class _MatDialogBase {
    constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._defaultOptions = _defaultOptions;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._dialogRefConstructor = _dialogRefConstructor;
        this._dialogContainerType = _dialogContainerType;
        this._dialogDataToken = _dialogDataToken;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this._ariaHiddenElements = new Map();
        // TODO (jelbourn): tighten the typing right-hand side of this expression.
        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */
        this.afterAllClosed = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.defer)(() => this.openDialogs.length ?
            this._getAfterAllClosed() :
            this._getAfterAllClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(undefined)));
        this._scrollStrategy = scrollStrategy;
    }
    /** Keeps track of the currently-open dialogs. */
    get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    /** Stream that emits when a dialog has been opened. */
    get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }
    _getAfterAllClosed() {
        const parent = this._parentDialog;
        return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }
    open(componentOrTemplateRef, config) {
        config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());
        if (config.id && this.getDialogById(config.id) &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        const overlayRef = this._createOverlay(config);
        const dialogContainer = this._attachDialogContainer(overlayRef, config);
        const dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        // If this is the first dialog that we're opening, hide all the non-overlay content.
        if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(() => this._removeOpenDialog(dialogRef));
        this.afterOpened.next(dialogRef);
        // Notify the dialog container that the content has been attached.
        dialogContainer._initializeWithAttachedContent();
        return dialogRef;
    }
    /**
     * Closes all of the currently-open dialogs.
     */
    closeAll() {
        this._closeDialogs(this.openDialogs);
    }
    /**
     * Finds an open dialog by its id.
     * @param id ID to use when looking up the dialog.
     */
    getDialogById(id) {
        return this.openDialogs.find(dialog => dialog.id === id);
    }
    ngOnDestroy() {
        // Only close the dialogs at this level on destroy
        // since the parent service may still be active.
        this._closeDialogs(this._openDialogsAtThisLevel);
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
    }
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param config The dialog configuration.
     * @returns A promise resolving to the OverlayRef for the created overlay.
     */
    _createOverlay(config) {
        const overlayConfig = this._getOverlayConfig(config);
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an overlay config from a dialog config.
     * @param dialogConfig The dialog configuration.
     * @returns The overlay configuration.
     */
    _getOverlayConfig(dialogConfig) {
        const state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayConfig({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
        });
        if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
        }
        return state;
    }
    /**
     * Attaches a dialog container to a dialog's already-created overlay.
     * @param overlay Reference to the dialog's underlying overlay.
     * @param config The dialog configuration.
     * @returns A promise resolving to a ComponentRef for the attached container.
     */
    _attachDialogContainer(overlay, config) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create({
            parent: userInjector || this._injector,
            providers: [{ provide: MatDialogConfig, useValue: config }]
        });
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.ComponentPortal(this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
        const containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * Attaches the user-provided component to the already-created dialog container.
     * @param componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param dialogContainer Reference to the wrapping dialog container.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @param config The dialog configuration.
     * @returns A promise resolving to the MatDialogRef that should be returned to the user.
     */
    _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        const dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.TemplatePortal(componentOrTemplateRef, null, { $implicit: config.data, dialogRef }));
        }
        else {
            const injector = this._createInjector(config, dialogRef, dialogContainer);
            const contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    }
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @param config Config object that is used to construct the dialog.
     * @param dialogRef Reference to the dialog.
     * @param dialogContainer Dialog container element that wraps all of the contents.
     * @returns The custom injector that can be used inside the dialog.
     */
    _createInjector(config, dialogRef, dialogContainer) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        // The dialog container should be provided as the dialog container and the dialog's
        // content are created out of the same `ViewContainerRef` and as such, are siblings
        // for injector purposes. To allow the hierarchy that is expected, the dialog
        // container is explicitly provided in the injector.
        const providers = [
            { provide: this._dialogContainerType, useValue: dialogContainer },
            { provide: this._dialogDataToken, useValue: config.data },
            { provide: this._dialogRefConstructor, useValue: dialogRef }
        ];
        if (config.direction && (!userInjector ||
            !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectFlags.Optional))) {
            providers.push({
                provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality,
                useValue: { value: config.direction, change: (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)() }
            });
        }
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create({ parent: userInjector || this._injector, providers });
    }
    /**
     * Removes a dialog from the array of open dialogs.
     * @param dialogRef Dialog to be removed.
     */
    _removeOpenDialog(dialogRef) {
        const index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.
            if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach((previousValue, element) => {
                    if (previousValue) {
                        element.setAttribute('aria-hidden', previousValue);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                });
                this._ariaHiddenElements.clear();
                this._getAfterAllClosed().next();
            }
        }
    }
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     */
    _hideNonDialogContentFromAssistiveTechnology() {
        const overlayContainer = this._overlayContainer.getContainerElement();
        // Ensure that the overlay container is attached to the DOM.
        if (overlayContainer.parentElement) {
            const siblings = overlayContainer.parentElement.children;
            for (let i = siblings.length - 1; i > -1; i--) {
                let sibling = siblings[i];
                if (sibling !== overlayContainer &&
                    sibling.nodeName !== 'SCRIPT' &&
                    sibling.nodeName !== 'STYLE' &&
                    !sibling.hasAttribute('aria-live')) {
                    this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    }
    /** Closes all of the dialogs in an array. */
    _closeDialogs(dialogs) {
        let i = dialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            dialogs[i].close();
        }
    }
}
_MatDialogBase.ɵfac = function _MatDialogBase_Factory(t) { return new (t || _MatDialogBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Type), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Type), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken)); };
_MatDialogBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: _MatDialogBase });
_MatDialogBase.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector },
    { type: undefined },
    { type: undefined },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayContainer },
    { type: undefined },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Type },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Type },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector }, { type: undefined }, { type: undefined }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayContainer }, { type: undefined }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Type }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Type }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken }]; }, null); })();
/**
 * Service to open Material Design modal dialogs.
 */
class MatDialog extends _MatDialogBase {
    constructor(overlay, injector, 
    /**
     * @deprecated `_location` parameter to be removed.
     * @breaking-change 10.0.0
     */
    location, defaultOptions, scrollStrategy, parentDialog, overlayContainer) {
        super(overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA);
    }
}
MatDialog.ɵfac = function MatDialog_Factory(t) { return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayContainer)); };
MatDialog.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MatDialog, factory: MatDialog.ɵfac });
MatDialog.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }] },
    { type: MatDialogConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [MAT_DIALOG_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [MAT_DIALOG_SCROLL_STRATEGY,] }] },
    { type: MatDialog, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.SkipSelf }] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayContainer }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }] }, { type: MatDialogConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [MAT_DIALOG_DEFAULT_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [MAT_DIALOG_SCROLL_STRATEGY]
            }] }, { type: MatDialog, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.SkipSelf
            }] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayContainer }]; }, null); })();
/**
 * Applies default options to the dialog config.
 * @param config Config to be modified.
 * @param defaultOptions Default options provided.
 * @returns The new configuration object.
 */
function _applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
class MatDialogClose {
    constructor(
    /**
     * Reference to the containing dialog.
     * @deprecated `dialogRef` property to become private.
     * @breaking-change 13.0.0
     */
    // The dialog title directive is always used in combination with a `MatDialogRef`.
    // tslint:disable-next-line: lightweight-tokens
    dialogRef, _elementRef, _dialog) {
        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /** Default to "button" to prevents accidental form submits. */
        this.type = 'button';
    }
    ngOnInit() {
        if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
    }
    ngOnChanges(changes) {
        const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    }
    _onButtonClick(event) {
        // Determinate the focus origin using the click event, because using the FocusMonitor will
        // result in incorrect origins. Most of the time, close buttons will be auto focused in the
        // dialog, and therefore clicking the button won't result in a focus change. This means that
        // the FocusMonitor won't detect any origin change, and will always output `program`.
        _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
    }
}
MatDialogClose.ɵfac = function MatDialogClose_Factory(t) { return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog)); };
MatDialogClose.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogClose, selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]], hostVars: 2, hostBindings: function MatDialogClose_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) { return ctx._onButtonClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    } }, inputs: { type: "type", dialogResult: ["mat-dialog-close", "dialogResult"], ariaLabel: ["aria-label", "ariaLabel"], _matDialogClose: ["matDialogClose", "_matDialogClose"] }, exportAs: ["matDialogClose"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
MatDialogClose.ctorParameters = () => [
    { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: MatDialog }
];
MatDialogClose.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['aria-label',] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dialogResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['mat-dialog-close',] }],
    _matDialogClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['matDialogClose',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[mat-dialog-close], [matDialogClose]',
                exportAs: 'matDialogClose',
                host: {
                    '(click)': '_onButtonClick($event)',
                    '[attr.aria-label]': 'ariaLabel || null',
                    '[attr.type]': 'type'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: MatDialog }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], dialogResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['mat-dialog-close']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['aria-label']
        }], _matDialogClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matDialogClose']
        }] }); })();
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
class MatDialogTitle {
    constructor(
    // The dialog title directive is always used in combination with a `MatDialogRef`.
    // tslint:disable-next-line: lightweight-tokens
    _dialogRef, _elementRef, _dialog) {
        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /** Unique id for the dialog title. If none is supplied, it will be auto-generated. */
        this.id = `mat-dialog-title-${dialogElementUid++}`;
    }
    ngOnInit() {
        if (!this._dialogRef) {
            this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
        if (this._dialogRef) {
            Promise.resolve().then(() => {
                const container = this._dialogRef._containerInstance;
                if (container && !container._ariaLabelledBy) {
                    container._ariaLabelledBy = this.id;
                }
            });
        }
    }
}
MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) { return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog)); };
MatDialogTitle.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogTitle, selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]], hostAttrs: [1, "mat-dialog-title"], hostVars: 1, hostBindings: function MatDialogTitle_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
    } }, inputs: { id: "id" }, exportAs: ["matDialogTitle"] });
MatDialogTitle.ctorParameters = () => [
    { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: MatDialog }
];
MatDialogTitle.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[mat-dialog-title], [matDialogTitle]',
                exportAs: 'matDialogTitle',
                host: {
                    'class': 'mat-dialog-title',
                    '[id]': 'id'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: MatDialog }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();
/**
 * Scrollable content container of a dialog.
 */
class MatDialogContent {
}
MatDialogContent.ɵfac = function MatDialogContent_Factory(t) { return new (t || MatDialogContent)(); };
MatDialogContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogContent, selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]], hostAttrs: [1, "mat-dialog-content"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
                host: { 'class': 'mat-dialog-content' }
            }]
    }], null, null); })();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
class MatDialogActions {
}
MatDialogActions.ɵfac = function MatDialogActions_Factory(t) { return new (t || MatDialogActions)(); };
MatDialogActions.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogActions, selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]], hostAttrs: [1, "mat-dialog-actions"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
                host: { 'class': 'mat-dialog-actions' }
            }]
    }], null, null); })();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */
function getClosestDialog(element, openDialogs) {
    let parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find(dialog => dialog.id === parent.id) : null;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatDialogModule {
}
MatDialogModule.ɵfac = function MatDialogModule_Factory(t) { return new (t || MatDialogModule)(); };
MatDialogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatDialogModule });
MatDialogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        MatDialog,
        MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
    ], imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule,
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.PortalModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule,
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule,
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.PortalModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule,
                ],
                exports: [
                    MatDialogContainer,
                    MatDialogClose,
                    MatDialogTitle,
                    MatDialogContent,
                    MatDialogActions,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule,
                ],
                declarations: [
                    MatDialogContainer,
                    MatDialogClose,
                    MatDialogTitle,
                    MatDialogActions,
                    MatDialogContent,
                ],
                providers: [
                    MatDialog,
                    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                ],
                entryComponents: [MatDialogContainer]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, { declarations: function () { return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.PortalModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule]; }, exports: function () { return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule]; } }); })();

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

/***/ 950:
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCropperComponent": () => (/* binding */ ImageCropperComponent),
/* harmony export */   "ImageCropperModule": () => (/* binding */ ImageCropperModule),
/* harmony export */   "base64ToFile": () => (/* binding */ base64ToFile),
/* harmony export */   "resizeCanvas": () => (/* binding */ resizeCanvas),
/* harmony export */   "ɵa": () => (/* binding */ CropService),
/* harmony export */   "ɵb": () => (/* binding */ CropperPositionService),
/* harmony export */   "ɵc": () => (/* binding */ LoadImageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);





/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/move-start.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */




const _c0 = ["wrapper"];
const _c1 = ["sourceImage"];
function ImageCropperComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.imageLoadedInView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.startMove($event, ctx_r7.moveTypes.Resize, "topleft"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.startMove($event, ctx_r9.moveTypes.Resize, "topleft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.startMove($event, ctx_r10.moveTypes.Resize, "topright"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.startMove($event, ctx_r11.moveTypes.Resize, "topright"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.startMove($event, ctx_r12.moveTypes.Resize, "bottomright"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.startMove($event, ctx_r13.moveTypes.Resize, "bottomright"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.startMove($event, ctx_r14.moveTypes.Resize, "bottomleft"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.startMove($event, ctx_r15.moveTypes.Resize, "bottomleft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.startMove($event, ctx_r16.moveTypes.Resize, "top"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.startMove($event, ctx_r17.moveTypes.Resize, "top"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.startMove($event, ctx_r18.moveTypes.Resize, "right"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.startMove($event, ctx_r19.moveTypes.Resize, "right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.startMove($event, ctx_r20.moveTypes.Resize, "bottom"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.startMove($event, ctx_r21.moveTypes.Resize, "bottom"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.startMove($event, ctx_r22.moveTypes.Resize, "left"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.startMove($event, ctx_r23.moveTypes.Resize, "left"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ImageCropperComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.keyboardAccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.startMove($event, ctx_r26.moveTypes.Move); })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.startMove($event, ctx_r27.moveTypes.Move); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.cropper.y1, "px")("left", ctx_r2.cropper.x1, "px")("width", ctx_r2.cropper.x2 - ctx_r2.cropper.x1, "px")("height", ctx_r2.cropper.y2 - ctx_r2.cropper.y1, "px")("margin-left", ctx_r2.alignImage === "center" ? ctx_r2.marginLeft : null)("visibility", ctx_r2.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rounded", ctx_r2.roundCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.hideResizeSquares);
} }
function MoveStart() { }
if (false) {}
/** @enum {string} */
const MoveTypes = {
    Move: "move",
    Resize: "resize",
    Pinch: "pinch",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/resize.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
/**
 * @param {?} canvas
 * @param {?} width
 * @param {?} height
 * @return {?}
 */
function resizeCanvas(canvas, width, height) {
    /** @type {?} */
    const width_source = canvas.width;
    /** @type {?} */
    const height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);
    /** @type {?} */
    const ratio_w = width_source / width;
    /** @type {?} */
    const ratio_h = height_source / height;
    /** @type {?} */
    const ratio_w_half = Math.ceil(ratio_w / 2);
    /** @type {?} */
    const ratio_h_half = Math.ceil(ratio_h / 2);
    /** @type {?} */
    const ctx = canvas.getContext('2d');
    if (ctx) {
        /** @type {?} */
        const img = ctx.getImageData(0, 0, width_source, height_source);
        /** @type {?} */
        const img2 = ctx.createImageData(width, height);
        /** @type {?} */
        const data = img.data;
        /** @type {?} */
        const data2 = img2.data;
        for (let j = 0; j < height; j++) {
            for (let i = 0; i < width; i++) {
                /** @type {?} */
                const x2 = (i + j * width) * 4;
                /** @type {?} */
                const center_y = j * ratio_h;
                /** @type {?} */
                let weight = 0;
                /** @type {?} */
                let weights = 0;
                /** @type {?} */
                let weights_alpha = 0;
                /** @type {?} */
                let gx_r = 0;
                /** @type {?} */
                let gx_g = 0;
                /** @type {?} */
                let gx_b = 0;
                /** @type {?} */
                let gx_a = 0;
                /** @type {?} */
                const xx_start = Math.floor(i * ratio_w);
                /** @type {?} */
                const yy_start = Math.floor(j * ratio_h);
                /** @type {?} */
                let xx_stop = Math.ceil((i + 1) * ratio_w);
                /** @type {?} */
                let yy_stop = Math.ceil((j + 1) * ratio_h);
                xx_stop = Math.min(xx_stop, width_source);
                yy_stop = Math.min(yy_stop, height_source);
                for (let yy = yy_start; yy < yy_stop; yy++) {
                    /** @type {?} */
                    const dy = Math.abs(center_y - yy) / ratio_h_half;
                    /** @type {?} */
                    const center_x = i * ratio_w;
                    /** @type {?} */
                    const w0 = dy * dy;
                    for (let xx = xx_start; xx < xx_stop; xx++) {
                        /** @type {?} */
                        const dx = Math.abs(center_x - xx) / ratio_w_half;
                        /** @type {?} */
                        const w = Math.sqrt(w0 + dx * dx);
                        if (w >= 1) {
                            //pixel too far
                            continue;
                        }
                        //hermite filter
                        weight = 2 * w * w * w - 3 * w * w + 1;
                        /** @type {?} */
                        const pos_x = 4 * (xx + yy * width_source);
                        //alpha
                        gx_a += weight * data[pos_x + 3];
                        weights_alpha += weight;
                        //colors
                        if (data[pos_x + 3] < 255)
                            weight = weight * data[pos_x + 3] / 250;
                        gx_r += weight * data[pos_x];
                        gx_g += weight * data[pos_x + 1];
                        gx_b += weight * data[pos_x + 2];
                        weights += weight;
                    }
                }
                data2[x2] = gx_r / weights;
                data2[x2 + 1] = gx_g / weights;
                data2[x2 + 2] = gx_b / weights;
                data2[x2 + 3] = gx_a / weights_alpha;
            }
        }
        canvas.width = width;
        canvas.height = height;
        //draw
        ctx.putImageData(img2, 0, 0);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/crop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CropService {
    /**
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    crop(sourceImage, loadedImage, cropper, settings) {
        /** @type {?} */
        const imagePosition = this.getImagePosition(sourceImage, loadedImage, cropper, settings);
        /** @type {?} */
        const width = imagePosition.x2 - imagePosition.x1;
        /** @type {?} */
        const height = imagePosition.y2 - imagePosition.y1;
        /** @type {?} */
        const cropCanvas = (/** @type {?} */ (document.createElement('canvas')));
        cropCanvas.width = width;
        cropCanvas.height = height;
        /** @type {?} */
        const ctx = cropCanvas.getContext('2d');
        if (!ctx) {
            return;
        }
        if (settings.backgroundColor != null) {
            ctx.fillStyle = settings.backgroundColor;
            ctx.fillRect(0, 0, width, height);
        }
        /** @type {?} */
        const scaleX = (settings.transform.scale || 1) * (settings.transform.flipH ? -1 : 1);
        /** @type {?} */
        const scaleY = (settings.transform.scale || 1) * (settings.transform.flipV ? -1 : 1);
        /** @type {?} */
        const transformedImage = loadedImage.transformed;
        ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2, transformedImage.size.height / 2);
        ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
        ctx.rotate((settings.transform.rotate || 0) * Math.PI / 180);
        ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
        /** @type {?} */
        const output = {
            width, height,
            imagePosition,
            cropperPosition: Object.assign({}, cropper)
        };
        if (settings.containWithinAspectRatio) {
            output.offsetImagePosition = this.getOffsetImagePosition(sourceImage, loadedImage, cropper, settings);
        }
        /** @type {?} */
        const resizeRatio = this.getResizeRatio(width, height, settings);
        if (resizeRatio !== 1) {
            output.width = Math.round(width * resizeRatio);
            output.height = settings.maintainAspectRatio
                ? Math.round(output.width / settings.aspectRatio)
                : Math.round(height * resizeRatio);
            resizeCanvas(cropCanvas, output.width, output.height);
        }
        output.base64 = cropCanvas.toDataURL('image/' + settings.format, this.getQuality(settings));
        return output;
    }
    /**
     * @private
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    getImagePosition(sourceImage, loadedImage, cropper, settings) {
        /** @type {?} */
        const sourceImageElement = sourceImage.nativeElement;
        /** @type {?} */
        const ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
        /** @type {?} */
        const out = {
            x1: Math.round(cropper.x1 * ratio),
            y1: Math.round(cropper.y1 * ratio),
            x2: Math.round(cropper.x2 * ratio),
            y2: Math.round(cropper.y2 * ratio)
        };
        if (!settings.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
            out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
        }
        return out;
    }
    /**
     * @private
     * @param {?} sourceImage
     * @param {?} loadedImage
     * @param {?} cropper
     * @param {?} settings
     * @return {?}
     */
    getOffsetImagePosition(sourceImage, loadedImage, cropper, settings) {
        /** @type {?} */
        const canvasRotation = settings.canvasRotation + loadedImage.exifTransform.rotate;
        /** @type {?} */
        const sourceImageElement = sourceImage.nativeElement;
        /** @type {?} */
        const ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
        /** @type {?} */
        let offsetX;
        /** @type {?} */
        let offsetY;
        if (canvasRotation % 2) {
            offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.height) / 2;
            offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.width) / 2;
        }
        else {
            offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.width) / 2;
            offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.height) / 2;
        }
        /** @type {?} */
        const out = {
            x1: Math.round(cropper.x1 * ratio) - offsetX,
            y1: Math.round(cropper.y1 * ratio) - offsetY,
            x2: Math.round(cropper.x2 * ratio) - offsetX,
            y2: Math.round(cropper.y2 * ratio) - offsetY
        };
        if (!settings.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
            out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
        }
        return out;
    }
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} settings
     * @return {?}
     */
    getResizeRatio(width, height, settings) {
        /** @type {?} */
        const ratioWidth = settings.resizeToWidth / width;
        /** @type {?} */
        const ratioHeight = settings.resizeToHeight / height;
        /** @type {?} */
        const ratios = new Array();
        if (settings.resizeToWidth > 0) {
            ratios.push(ratioWidth);
        }
        if (settings.resizeToHeight > 0) {
            ratios.push(ratioHeight);
        }
        /** @type {?} */
        const result = ratios.length === 0 ? 1 : Math.min(...ratios);
        if (result > 1 && !settings.onlyScaleDown) {
            return result;
        }
        return Math.min(result, 1);
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    getQuality(settings) {
        return Math.min(1, Math.max(0, settings.imageQuality / 100));
    }
}
CropService.ɵfac = function CropService_Factory(t) { return new (t || CropService)(); };
/** @nocollapse */ CropService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function CropService_Factory() { return new CropService(); }, token: CropService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/cropper.settings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CropperSettings {
    constructor() {
        // From options
        this.format = 'png';
        this.maintainAspectRatio = true;
        this.transform = {};
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.resizeToHeight = 0;
        this.cropperMinWidth = 0;
        this.cropperMinHeight = 0;
        this.cropperMaxHeight = 0;
        this.cropperMaxWidth = 0;
        this.cropperStaticWidth = 0;
        this.cropperStaticHeight = 0;
        this.canvasRotation = 0;
        this.initialStepSize = 3;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.backgroundColor = undefined;
        this.containWithinAspectRatio = false;
        this.hideResizeSquares = false;
        this.alignImage = 'center';
        // Internal
        this.cropperScaledMinWidth = 20;
        this.cropperScaledMinHeight = 20;
        this.cropperScaledMaxWidth = 20;
        this.cropperScaledMaxHeight = 20;
        this.stepSize = this.initialStepSize;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        Object.keys(options)
            .filter((/**
         * @param {?} k
         * @return {?}
         */
        (k) => k in this))
            .forEach((/**
         * @param {?} k
         * @return {?}
         */
        (k) => this[k] = options[k]));
        this.validateOptions();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    setOptionsFromChanges(changes) {
        Object.keys(changes)
            .filter((/**
         * @param {?} k
         * @return {?}
         */
        (k) => k in this))
            .forEach((/**
         * @param {?} k
         * @return {?}
         */
        (k) => this[k] = changes[k].currentValue));
        this.validateOptions();
    }
    /**
     * @private
     * @return {?}
     */
    validateOptions() {
        if (this.maintainAspectRatio && !this.aspectRatio) {
            throw new Error('`aspectRatio` should > 0 when `maintainAspectRatio` is enabled');
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/exif.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
/** @type {?} */
const testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
    'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
    'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
    'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
    'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
    'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
/**
 * @return {?}
 */
function supportsAutomaticRotation() {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    (resolve) => {
        /** @type {?} */
        const img = new Image();
        img.onload = (/**
         * @return {?}
         */
        () => {
            // Check if browser supports automatic image orientation:
            /** @type {?} */
            const supported = img.width === 1 && img.height === 2;
            resolve(supported);
        });
        img.src = testAutoOrientationImageURL;
    }));
}
/**
 * @param {?} exifRotationOrBase64Image
 * @return {?}
 */
function getTransformationsFromExifData(exifRotationOrBase64Image) {
    if (typeof exifRotationOrBase64Image === 'string') {
        exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
    }
    switch (exifRotationOrBase64Image) {
        case 2:
            return { rotate: 0, flip: true };
        case 3:
            return { rotate: 2, flip: false };
        case 4:
            return { rotate: 2, flip: true };
        case 5:
            return { rotate: 1, flip: true };
        case 6:
            return { rotate: 1, flip: false };
        case 7:
            return { rotate: 3, flip: true };
        case 8:
            return { rotate: 3, flip: false };
        default:
            return { rotate: 0, flip: false };
    }
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function getExifRotation(imageBase64) {
    /** @type {?} */
    const view = new DataView(base64ToArrayBuffer(imageBase64));
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    /** @type {?} */
    const length = view.byteLength;
    /** @type {?} */
    let offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        /** @type {?} */
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            /** @type {?} */
            const little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            /** @type {?} */
            const tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    /** @type {?} */
    const binaryString = atob(imageBase64);
    /** @type {?} */
    const len = binaryString.length;
    /** @type {?} */
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/load-image.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LoadImageBase64() { }
if (false) {}
class LoadImageService {
    constructor() {
        this.autoRotateSupported = supportsAutomaticRotation();
    }
    /**
     * @param {?} file
     * @param {?} cropperSettings
     * @return {?}
     */
    loadImageFile(file, cropperSettings) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const fileReader = new FileReader();
            fileReader.onload = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.loadImage(event.target.result, file.type, cropperSettings)
                    .then(resolve)
                    .catch(reject);
            });
            fileReader.readAsDataURL(file);
        }));
    }
    /**
     * @private
     * @param {?} imageBase64
     * @param {?} imageType
     * @param {?} cropperSettings
     * @return {?}
     */
    loadImage(imageBase64, imageType, cropperSettings) {
        if (!this.isValidImageType(imageType)) {
            return Promise.reject(new Error('Invalid image type'));
        }
        return this.loadBase64Image(imageBase64, cropperSettings);
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    isValidImageType(type) {
        return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(type);
    }
    /**
     * @param {?} url
     * @param {?} cropperSettings
     * @return {?}
     */
    loadImageFromURL(url, cropperSettings) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const img = new Image();
            img.onerror = (/**
             * @return {?}
             */
            () => reject);
            img.onload = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const canvas = document.createElement('canvas');
                /** @type {?} */
                const context = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);
                this.loadBase64Image(canvas.toDataURL(), cropperSettings).then(resolve);
            });
            img.crossOrigin = 'anonymous';
            img.src = url;
        }));
    }
    /**
     * @param {?} imageBase64
     * @param {?} cropperSettings
     * @return {?}
     */
    loadBase64Image(imageBase64, cropperSettings) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const originalImage = new Image();
            originalImage.onload = (/**
             * @return {?}
             */
            () => resolve({
                originalImage,
                originalBase64: imageBase64
            }));
            originalImage.onerror = reject;
            originalImage.src = imageBase64;
        })).then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.transformImageBase64(res, cropperSettings)));
    }
    /**
     * @private
     * @param {?} res
     * @param {?} cropperSettings
     * @return {?}
     */
    transformImageBase64(res, cropperSettings) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            /** @type {?} */
            const autoRotate = yield this.autoRotateSupported;
            /** @type {?} */
            const exifTransform = yield getTransformationsFromExifData(autoRotate ? -1 : res.originalBase64);
            if (!res.originalImage || !res.originalImage.complete) {
                return Promise.reject(new Error('No image loaded'));
            }
            /** @type {?} */
            const loadedImage = {
                original: {
                    base64: res.originalBase64,
                    image: res.originalImage,
                    size: {
                        width: res.originalImage.naturalWidth,
                        height: res.originalImage.naturalHeight
                    }
                },
                exifTransform
            };
            return this.transformLoadedImage(loadedImage, cropperSettings);
        });
    }
    /**
     * @param {?} loadedImage
     * @param {?} cropperSettings
     * @return {?}
     */
    transformLoadedImage(loadedImage, cropperSettings) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            /** @type {?} */
            const canvasRotation = cropperSettings.canvasRotation + loadedImage.exifTransform.rotate;
            /** @type {?} */
            const originalSize = {
                width: loadedImage.original.image.naturalWidth,
                height: loadedImage.original.image.naturalHeight
            };
            if (canvasRotation === 0 && !loadedImage.exifTransform.flip && !cropperSettings.containWithinAspectRatio) {
                return {
                    original: {
                        base64: loadedImage.original.base64,
                        image: loadedImage.original.image,
                        size: Object.assign({}, originalSize)
                    },
                    transformed: {
                        base64: loadedImage.original.base64,
                        image: loadedImage.original.image,
                        size: Object.assign({}, originalSize)
                    },
                    exifTransform: loadedImage.exifTransform
                };
            }
            /** @type {?} */
            const transformedSize = this.getTransformedSize(originalSize, loadedImage.exifTransform, cropperSettings);
            /** @type {?} */
            const canvas = document.createElement('canvas');
            canvas.width = transformedSize.width;
            canvas.height = transformedSize.height;
            /** @type {?} */
            const ctx = canvas.getContext('2d');
            ctx.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
            ctx.rotate(Math.PI * (canvasRotation / 2));
            ctx.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
            /** @type {?} */
            const transformedBase64 = canvas.toDataURL();
            /** @type {?} */
            const transformedImage = yield this.loadImageFromBase64(transformedBase64);
            return {
                original: {
                    base64: loadedImage.original.base64,
                    image: loadedImage.original.image,
                    size: Object.assign({}, originalSize)
                },
                transformed: {
                    base64: transformedBase64,
                    image: transformedImage,
                    size: {
                        width: transformedImage.width,
                        height: transformedImage.height
                    }
                },
                exifTransform: loadedImage.exifTransform
            };
        });
    }
    /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    loadImageFromBase64(imageBase64) {
        return new Promise(((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const image = new Image();
            image.onload = (/**
             * @return {?}
             */
            () => resolve(image));
            image.onerror = reject;
            image.src = imageBase64;
        })));
    }
    /**
     * @private
     * @param {?} originalSize
     * @param {?} exifTransform
     * @param {?} cropperSettings
     * @return {?}
     */
    getTransformedSize(originalSize, exifTransform, cropperSettings) {
        /** @type {?} */
        const canvasRotation = cropperSettings.canvasRotation + exifTransform.rotate;
        if (cropperSettings.containWithinAspectRatio) {
            if (canvasRotation % 2) {
                /** @type {?} */
                const minWidthToContain = originalSize.width * cropperSettings.aspectRatio;
                /** @type {?} */
                const minHeightToContain = originalSize.height / cropperSettings.aspectRatio;
                return {
                    width: Math.max(originalSize.height, minWidthToContain),
                    height: Math.max(originalSize.width, minHeightToContain)
                };
            }
            else {
                /** @type {?} */
                const minWidthToContain = originalSize.height * cropperSettings.aspectRatio;
                /** @type {?} */
                const minHeightToContain = originalSize.width / cropperSettings.aspectRatio;
                return {
                    width: Math.max(originalSize.width, minWidthToContain),
                    height: Math.max(originalSize.height, minHeightToContain)
                };
            }
        }
        if (canvasRotation % 2) {
            return {
                height: originalSize.width,
                width: originalSize.height
            };
        }
        return {
            width: originalSize.width,
            height: originalSize.height
        };
    }
}
LoadImageService.ɵfac = function LoadImageService_Factory(t) { return new (t || LoadImageService)(); };
/** @nocollapse */ LoadImageService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LoadImageService_Factory() { return new LoadImageService(); }, token: LoadImageService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/cropper-position.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CropperPositionService {
    /**
     * @param {?} sourceImage
     * @param {?} cropperPosition
     * @param {?} settings
     * @return {?}
     */
    resetCropperPosition(sourceImage, cropperPosition, settings) {
        if (!(sourceImage === null || sourceImage === void 0 ? void 0 : sourceImage.nativeElement)) {
            return;
        }
        /** @type {?} */
        const sourceImageElement = sourceImage.nativeElement;
        if (settings.cropperStaticHeight && settings.cropperStaticWidth) {
            cropperPosition.x1 = 0;
            cropperPosition.x2 = sourceImageElement.offsetWidth > settings.cropperStaticWidth ?
                settings.cropperStaticWidth : sourceImageElement.offsetWidth;
            cropperPosition.y1 = 0;
            cropperPosition.y2 = sourceImageElement.offsetHeight > settings.cropperStaticHeight ?
                settings.cropperStaticHeight : sourceImageElement.offsetHeight;
        }
        else {
            /** @type {?} */
            const cropperWidth = Math.min(settings.cropperScaledMaxWidth, sourceImageElement.offsetWidth);
            /** @type {?} */
            const cropperHeight = Math.min(settings.cropperScaledMaxHeight, sourceImageElement.offsetHeight);
            if (!settings.maintainAspectRatio) {
                cropperPosition.x1 = 0;
                cropperPosition.x2 = cropperWidth;
                cropperPosition.y1 = 0;
                cropperPosition.y2 = cropperHeight;
            }
            else if (cropperWidth / settings.aspectRatio < cropperHeight) {
                cropperPosition.x1 = 0;
                cropperPosition.x2 = cropperWidth;
                /** @type {?} */
                const cropperHeightWithAspectRatio = cropperWidth / settings.aspectRatio;
                cropperPosition.y1 = (sourceImageElement.offsetHeight - cropperHeightWithAspectRatio) / 2;
                cropperPosition.y2 = cropperPosition.y1 + cropperHeightWithAspectRatio;
            }
            else {
                cropperPosition.y1 = 0;
                cropperPosition.y2 = cropperHeight;
                /** @type {?} */
                const cropperWidthWithAspectRatio = cropperHeight * settings.aspectRatio;
                cropperPosition.x1 = (sourceImageElement.offsetWidth - cropperWidthWithAspectRatio) / 2;
                cropperPosition.x2 = cropperPosition.x1 + cropperWidthWithAspectRatio;
            }
        }
    }
    /**
     * @param {?} event
     * @param {?} moveStart
     * @param {?} cropperPosition
     * @return {?}
     */
    move(event, moveStart, cropperPosition) {
        /** @type {?} */
        const diffX = this.getClientX(event) - moveStart.clientX;
        /** @type {?} */
        const diffY = this.getClientY(event) - moveStart.clientY;
        cropperPosition.x1 = moveStart.x1 + diffX;
        cropperPosition.y1 = moveStart.y1 + diffY;
        cropperPosition.x2 = moveStart.x2 + diffX;
        cropperPosition.y2 = moveStart.y2 + diffY;
    }
    /**
     * @param {?} event
     * @param {?} moveStart
     * @param {?} cropperPosition
     * @param {?} maxSize
     * @param {?} settings
     * @return {?}
     */
    resize(event, moveStart, cropperPosition, maxSize, settings) {
        /** @type {?} */
        const moveX = this.getClientX(event) - moveStart.clientX;
        /** @type {?} */
        const moveY = this.getClientY(event) - moveStart.clientY;
        switch (moveStart.position) {
            case 'left':
                cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                break;
            case 'topleft':
                cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                break;
            case 'top':
                cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                break;
            case 'topright':
                cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
                break;
            case 'right':
                cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                break;
            case 'bottomright':
                cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
                cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                break;
            case 'bottom':
                cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                break;
            case 'bottomleft':
                cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
                cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
                break;
            case 'center':
                /** @type {?} */
                const scale = event.scale;
                /** @type {?} */
                const newWidth = Math.min(Math.max(settings.cropperScaledMinWidth, (Math.abs(moveStart.x2 - moveStart.x1)) * scale), settings.cropperScaledMaxWidth);
                /** @type {?} */
                const newHeight = Math.min(Math.max(settings.cropperScaledMinHeight, (Math.abs(moveStart.y2 - moveStart.y1)) * scale), settings.cropperScaledMaxHeight);
                cropperPosition.x1 = moveStart.clientX - newWidth / 2;
                cropperPosition.x2 = moveStart.clientX + newWidth / 2;
                cropperPosition.y1 = moveStart.clientY - newHeight / 2;
                cropperPosition.y2 = moveStart.clientY + newHeight / 2;
                if (cropperPosition.x1 < 0) {
                    cropperPosition.x2 -= cropperPosition.x1;
                    cropperPosition.x1 = 0;
                }
                else if (cropperPosition.x2 > maxSize.width) {
                    cropperPosition.x1 -= (cropperPosition.x2 - maxSize.width);
                    cropperPosition.x2 = maxSize.width;
                }
                if (cropperPosition.y1 < 0) {
                    cropperPosition.y2 -= cropperPosition.y1;
                    cropperPosition.y1 = 0;
                }
                else if (cropperPosition.y2 > maxSize.height) {
                    cropperPosition.y1 -= (cropperPosition.y2 - maxSize.height);
                    cropperPosition.y2 = maxSize.height;
                }
                break;
        }
        if (settings.maintainAspectRatio) {
            this.checkAspectRatio(moveStart.position, cropperPosition, maxSize, settings);
        }
    }
    /**
     * @param {?} position
     * @param {?} cropperPosition
     * @param {?} maxSize
     * @param {?} settings
     * @return {?}
     */
    checkAspectRatio(position, cropperPosition, maxSize, settings) {
        /** @type {?} */
        let overflowX = 0;
        /** @type {?} */
        let overflowY = 0;
        switch (position) {
            case 'top':
                cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'bottom':
                cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : (overflowX / settings.aspectRatio);
                }
                break;
            case 'topleft':
                cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(0 - cropperPosition.x1, 0);
                overflowY = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x1 += (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'topright':
                cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y1 += (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'right':
            case 'bottomright':
                cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
                overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x2 -= (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'left':
            case 'bottomleft':
                cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                overflowX = Math.max(0 - cropperPosition.x1, 0);
                overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    cropperPosition.x1 += (overflowY * settings.aspectRatio) > overflowX ? (overflowY * settings.aspectRatio) : overflowX;
                    cropperPosition.y2 -= (overflowY * settings.aspectRatio) > overflowX ? overflowY : overflowX / settings.aspectRatio;
                }
                break;
            case 'center':
                cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
                cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
                /** @type {?} */
                const overflowX1 = Math.max(0 - cropperPosition.x1, 0);
                /** @type {?} */
                const overflowX2 = Math.max(cropperPosition.x2 - maxSize.width, 0);
                /** @type {?} */
                const overflowY1 = Math.max(cropperPosition.y2 - maxSize.height, 0);
                /** @type {?} */
                const overflowY2 = Math.max(0 - cropperPosition.y1, 0);
                if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
                    cropperPosition.x1 += (overflowY1 * settings.aspectRatio) > overflowX1 ? (overflowY1 * settings.aspectRatio) : overflowX1;
                    cropperPosition.x2 -= (overflowY2 * settings.aspectRatio) > overflowX2 ? (overflowY2 * settings.aspectRatio) : overflowX2;
                    cropperPosition.y1 += (overflowY2 * settings.aspectRatio) > overflowX2 ? overflowY2 : overflowX2 / settings.aspectRatio;
                    cropperPosition.y2 -= (overflowY1 * settings.aspectRatio) > overflowX1 ? overflowY1 : overflowX1 / settings.aspectRatio;
                }
                break;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getClientX(event) {
        return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getClientY(event) {
        return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
    }
}
CropperPositionService.ɵfac = function CropperPositionService_Factory(t) { return new (t || CropperPositionService)(); };
/** @nocollapse */ CropperPositionService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function CropperPositionService_Factory() { return new CropperPositionService(); }, token: CropperPositionService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropperPositionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/keyboard.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} key
 * @return {?}
 */
function getPositionForKey(key) {
    switch (key) {
        case 'ArrowUp':
            return 'top';
        case 'ArrowRight':
            return 'right';
        case 'ArrowDown':
            return 'bottom';
        case 'ArrowLeft':
        default:
            return 'left';
    }
}
/**
 * @param {?} key
 * @return {?}
 */
function getInvertedPositionForKey(key) {
    switch (key) {
        case 'ArrowUp':
            return 'bottom';
        case 'ArrowRight':
            return 'left';
        case 'ArrowDown':
            return 'top';
        case 'ArrowLeft':
        default:
            return 'right';
    }
}
/**
 * @param {?} key
 * @param {?} stepSize
 * @return {?}
 */
function getEventForKey(key, stepSize) {
    switch (key) {
        case 'ArrowUp':
            return { clientX: 0, clientY: stepSize * -1 };
        case 'ArrowRight':
            return { clientX: stepSize, clientY: 0 };
        case 'ArrowDown':
            return { clientX: 0, clientY: stepSize };
        case 'ArrowLeft':
        default:
            return { clientX: stepSize * -1, clientY: 0 };
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/image-cropper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageCropperComponent {
    /**
     * @param {?} cropService
     * @param {?} cropperPositionService
     * @param {?} loadImageService
     * @param {?} sanitizer
     * @param {?} cd
     */
    constructor(cropService, cropperPositionService, loadImageService, sanitizer, cd) {
        this.cropService = cropService;
        this.cropperPositionService = cropperPositionService;
        this.loadImageService = loadImageService;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.Hammer = typeof window !== 'undefined'
            ? (/** @type {?} */ (((/** @type {?} */ (window))).Hammer))
            : null;
        this.settings = new CropperSettings();
        this.setImageMaxSizeRetries = 0;
        this.marginLeft = '0px';
        this.moveTypes = MoveTypes;
        this.imageVisible = false;
        this.format = this.settings.format;
        this.transform = {};
        this.maintainAspectRatio = this.settings.maintainAspectRatio;
        this.aspectRatio = this.settings.aspectRatio;
        this.resizeToWidth = this.settings.resizeToWidth;
        this.resizeToHeight = this.settings.resizeToHeight;
        this.cropperMinWidth = this.settings.cropperMinWidth;
        this.cropperMinHeight = this.settings.cropperMinHeight;
        this.cropperMaxHeight = this.settings.cropperMaxHeight;
        this.cropperMaxWidth = this.settings.cropperMaxWidth;
        this.cropperStaticWidth = this.settings.cropperStaticWidth;
        this.cropperStaticHeight = this.settings.cropperStaticHeight;
        this.canvasRotation = this.settings.canvasRotation;
        this.initialStepSize = this.settings.initialStepSize;
        this.roundCropper = this.settings.roundCropper;
        this.onlyScaleDown = this.settings.onlyScaleDown;
        this.imageQuality = this.settings.imageQuality;
        this.autoCrop = this.settings.autoCrop;
        this.backgroundColor = this.settings.backgroundColor;
        this.containWithinAspectRatio = this.settings.containWithinAspectRatio;
        this.hideResizeSquares = this.settings.hideResizeSquares;
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
        };
        this.alignImage = this.settings.alignImage;
        this.disabled = false;
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.reset();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.onChangesUpdateSettings(changes);
        this.onChangesInputImage(changes);
        if (this.loadedImage && this.loadedImage.original.image.complete
            && (changes.containWithinAspectRatio || changes.canvasRotation)) {
            this.loadImageService
                .transformLoadedImage(this.loadedImage, this.settings)
                .then((/**
             * @param {?} res
             * @return {?}
             */
            (res) => this.setLoadedImage(res)))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            (err) => this.loadImageError(err)));
        }
        if (changes.cropper || changes.maintainAspectRatio || changes.aspectRatio) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.setCropperScaledMaxSize();
            if (this.maintainAspectRatio && (changes.maintainAspectRatio || changes.aspectRatio)) {
                this.resetCropperPosition();
            }
            else if (changes.cropper) {
                this.checkCropperPosition(false);
                this.doAutoCrop();
            }
            this.cd.markForCheck();
        }
        if (changes.transform) {
            this.transform = this.transform || {};
            this.setCssTransform();
            this.doAutoCrop();
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    onChangesUpdateSettings(changes) {
        this.settings.setOptionsFromChanges(changes);
        if (this.settings.cropperStaticHeight && this.settings.cropperStaticWidth) {
            this.settings.setOptions({
                hideResizeSquares: true,
                cropperMinWidth: this.settings.cropperStaticWidth,
                cropperMinHeight: this.settings.cropperStaticHeight,
                cropperMaxHeight: this.settings.cropperStaticHeight,
                cropperMaxWidth: this.settings.cropperStaticWidth,
                maintainAspectRatio: false
            });
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    onChangesInputImage(changes) {
        if (changes.imageChangedEvent || changes.imageURL || changes.imageBase64 || changes.imageFile) {
            this.reset();
        }
        if (changes.imageChangedEvent && this.isValidImageChangedEvent()) {
            this.loadImageFile(this.imageChangedEvent.target.files[0]);
        }
        if (changes.imageURL && this.imageURL) {
            this.loadImageFromURL(this.imageURL);
        }
        if (changes.imageBase64 && this.imageBase64) {
            this.loadBase64Image(this.imageBase64);
        }
        if (changes.imageFile && this.imageFile) {
            this.loadImageFile(this.imageFile);
        }
    }
    /**
     * @private
     * @return {?}
     */
    isValidImageChangedEvent() {
        return this.imageChangedEvent
            && this.imageChangedEvent.target
            && this.imageChangedEvent.target.files
            && this.imageChangedEvent.target.files.length > 0;
    }
    /**
     * @private
     * @return {?}
     */
    setCssTransform() {
        this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' +
            'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' +
            'rotate(' + (this.transform.rotate || 0) + 'deg)');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.settings.stepSize = this.initialStepSize;
        this.activatePinchGesture();
    }
    /**
     * @private
     * @return {?}
     */
    reset() {
        this.imageVisible = false;
        this.loadedImage = null;
        this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
            + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
            + 'AAarVyFEAAAAASUVORK5CYII=';
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.cropper.x1 = -100;
        this.cropper.y1 = -100;
        this.cropper.x2 = 10000;
        this.cropper.y2 = 10000;
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    loadImageFile(file) {
        this.loadImageService
            .loadImageFile(file, this.settings)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.setLoadedImage(res)))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => this.loadImageError(err)));
    }
    /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    loadBase64Image(imageBase64) {
        this.loadImageService
            .loadBase64Image(imageBase64, this.settings)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.setLoadedImage(res)))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => this.loadImageError(err)));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    loadImageFromURL(url) {
        this.loadImageService
            .loadImageFromURL(url, this.settings)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.setLoadedImage(res)))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => this.loadImageError(err)));
    }
    /**
     * @private
     * @param {?} loadedImage
     * @return {?}
     */
    setLoadedImage(loadedImage) {
        this.loadedImage = loadedImage;
        this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.base64);
        this.cd.markForCheck();
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    loadImageError(error) {
        console.error(error);
        this.loadImageFailed.emit();
    }
    /**
     * @return {?}
     */
    imageLoadedInView() {
        if (this.loadedImage != null) {
            this.imageLoaded.emit(this.loadedImage);
            this.setImageMaxSizeRetries = 0;
            setTimeout((/**
             * @return {?}
             */
            () => this.checkImageMaxSizeRecursively()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkImageMaxSizeRecursively() {
        if (this.setImageMaxSizeRetries > 40) {
            this.loadImageFailed.emit();
        }
        else if (this.sourceImageLoaded()) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.setCropperScaledMaxSize();
            this.resetCropperPosition();
            this.cropperReady.emit(Object.assign({}, this.maxSize));
            this.cd.markForCheck();
        }
        else {
            this.setImageMaxSizeRetries++;
            setTimeout((/**
             * @return {?}
             */
            () => this.checkImageMaxSizeRecursively()), 50);
        }
    }
    /**
     * @private
     * @return {?}
     */
    sourceImageLoaded() {
        return this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0;
    }
    /**
     * @return {?}
     */
    onResize() {
        if (!this.loadedImage) {
            return;
        }
        this.resizeCropperPosition();
        this.setMaxSize();
        this.setCropperScaledMinSize();
        this.setCropperScaledMaxSize();
    }
    /**
     * @private
     * @return {?}
     */
    activatePinchGesture() {
        if (this.Hammer) {
            /** @type {?} */
            const hammer = new this.Hammer(this.wrapper.nativeElement);
            hammer.get('pinch').set({ enable: true });
            hammer.on('pinchmove', this.onPinch.bind(this));
            hammer.on('pinchend', this.pinchStop.bind(this));
            hammer.on('pinchstart', this.startPinch.bind(this));
        }
        else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
            console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
        }
    }
    /**
     * @private
     * @return {?}
     */
    resizeCropperPosition() {
        /** @type {?} */
        const sourceImageElement = this.sourceImage.nativeElement;
        if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
        }
    }
    /**
     * @return {?}
     */
    resetCropperPosition() {
        this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings);
        this.doAutoCrop();
        this.imageVisible = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyboardAccess(event) {
        this.changeKeyboardStepSize(event);
        this.keyboardMoveCropper(event);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    changeKeyboardStepSize(event) {
        if (event.key >= '1' && event.key <= '9') {
            this.settings.stepSize = +event.key;
            return;
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    keyboardMoveCropper(event) {
        /** @type {?} */
        const keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
        if (!(keyboardWhiteList.includes(event.key))) {
            return;
        }
        /** @type {?} */
        const moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
        /** @type {?} */
        const position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
        /** @type {?} */
        const moveEvent = getEventForKey(event.key, this.settings.stepSize);
        event.preventDefault();
        event.stopPropagation();
        this.startMove({ clientX: 0, clientY: 0 }, moveType, position);
        this.moveImg(moveEvent);
        this.moveStop();
    }
    /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    startMove(event, moveType, position = null) {
        if (this.moveStart && this.moveStart.active && this.moveStart.type === MoveTypes.Pinch) {
            return;
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.moveStart = Object.assign({ active: true, type: moveType, position, clientX: this.cropperPositionService.getClientX(event), clientY: this.cropperPositionService.getClientY(event) }, this.cropper);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    startPinch(event) {
        if (!this.safeImgDataUrl) {
            return;
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.moveStart = Object.assign({ active: true, type: MoveTypes.Pinch, position: 'center', clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2, clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2 }, this.cropper);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    moveImg(event) {
        if (this.moveStart.active) {
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (this.moveStart.type === MoveTypes.Move) {
                this.cropperPositionService.move(event, this.moveStart, this.cropper);
                this.checkCropperPosition(true);
            }
            else if (this.moveStart.type === MoveTypes.Resize) {
                if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
                    this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
                }
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPinch(event) {
        if (this.moveStart.active) {
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (this.moveStart.type === MoveTypes.Pinch) {
                this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    }
    /**
     * @private
     * @return {?}
     */
    setMaxSize() {
        if (this.sourceImage) {
            /** @type {?} */
            const sourceImageElement = this.sourceImage.nativeElement;
            this.maxSize.width = sourceImageElement.offsetWidth;
            this.maxSize.height = sourceImageElement.offsetHeight;
            this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
        }
    }
    /**
     * @private
     * @return {?}
     */
    setCropperScaledMinSize() {
        if (this.loadedImage && this.loadedImage.transformed && this.loadedImage.transformed.image) {
            this.setCropperScaledMinWidth();
            this.setCropperScaledMinHeight();
        }
        else {
            this.settings.cropperScaledMinWidth = 20;
            this.settings.cropperScaledMinHeight = 20;
        }
    }
    /**
     * @private
     * @return {?}
     */
    setCropperScaledMinWidth() {
        this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0
            ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width)
            : 20;
    }
    /**
     * @private
     * @return {?}
     */
    setCropperScaledMinHeight() {
        if (this.maintainAspectRatio) {
            this.settings.cropperScaledMinHeight = Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio);
        }
        else if (this.cropperMinHeight > 0) {
            this.settings.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height);
        }
        else {
            this.settings.cropperScaledMinHeight = 20;
        }
    }
    /**
     * @private
     * @return {?}
     */
    setCropperScaledMaxSize() {
        if (this.loadedImage && this.loadedImage.transformed && this.loadedImage.transformed.image) {
            /** @type {?} */
            const ratio = this.loadedImage.transformed.size.width / this.maxSize.width;
            this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / ratio : this.maxSize.width;
            this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / ratio : this.maxSize.height;
            if (this.maintainAspectRatio) {
                if (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio) {
                    this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio;
                }
                else if (this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio) {
                    this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio;
                }
            }
        }
        else {
            this.settings.cropperScaledMaxWidth = this.maxSize.width;
            this.settings.cropperScaledMaxHeight = this.maxSize.height;
        }
    }
    /**
     * @private
     * @param {?=} maintainSize
     * @return {?}
     */
    checkCropperPosition(maintainSize = false) {
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    }
    /**
     * @return {?}
     */
    moveStop() {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    }
    /**
     * @return {?}
     */
    pinchStop() {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    }
    /**
     * @private
     * @return {?}
     */
    doAutoCrop() {
        if (this.autoCrop) {
            this.crop();
        }
    }
    /**
     * @return {?}
     */
    crop() {
        if (this.sourceImage && this.sourceImage.nativeElement && this.loadedImage.transformed.image != null) {
            this.startCropImage.emit();
            /** @type {?} */
            const output = this.cropService.crop(this.sourceImage, this.loadedImage, this.cropper, this.settings);
            if (output != null) {
                this.imageCropped.emit(output);
            }
            return output;
        }
        return null;
    }
}
ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) { return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CropService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CropperPositionService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LoadImageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
ImageCropperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageCropperComponent, selectors: [["image-cropper"]], viewQuery: function ImageCropperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
    } }, hostVars: 4, hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) { return ctx.moveImg($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) { return ctx.moveImg($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() { return ctx.moveStop(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function ImageCropperComponent_touchend_HostBindingHandler() { return ctx.moveStop(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx.alignImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
    } }, inputs: { format: "format", transform: "transform", maintainAspectRatio: "maintainAspectRatio", aspectRatio: "aspectRatio", resizeToWidth: "resizeToWidth", resizeToHeight: "resizeToHeight", cropperMinWidth: "cropperMinWidth", cropperMinHeight: "cropperMinHeight", cropperMaxHeight: "cropperMaxHeight", cropperMaxWidth: "cropperMaxWidth", cropperStaticWidth: "cropperStaticWidth", cropperStaticHeight: "cropperStaticHeight", canvasRotation: "canvasRotation", initialStepSize: "initialStepSize", roundCropper: "roundCropper", onlyScaleDown: "onlyScaleDown", imageQuality: "imageQuality", autoCrop: "autoCrop", backgroundColor: "backgroundColor", containWithinAspectRatio: "containWithinAspectRatio", hideResizeSquares: "hideResizeSquares", cropper: "cropper", alignImage: "alignImage", disabled: "disabled", imageChangedEvent: "imageChangedEvent", imageURL: "imageURL", imageBase64: "imageBase64", imageFile: "imageFile" }, outputs: { imageCropped: "imageCropped", startCropImage: "startCropImage", imageLoaded: "imageLoaded", cropperReady: "cropperReady", loadImageFailed: "loadImageFailed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 10, consts: [["wrapper", ""], ["class", "source-image", 3, "src", "visibility", "transform", "load", 4, "ngIf"], [1, "overlay"], ["class", "cropper", "tabindex", "0", 3, "rounded", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "source-image", 3, "src", "load"], ["sourceImage", ""], ["tabindex", "0", 1, "cropper", 3, "keydown"], [1, "move", 3, "mousedown", "touchstart"], [4, "ngIf"], [1, "resize", "topleft", 3, "mousedown", "touchstart"], [1, "square"], [1, "resize", "top"], [1, "resize", "topright", 3, "mousedown", "touchstart"], [1, "resize", "right"], [1, "resize", "bottomright", 3, "mousedown", "touchstart"], [1, "resize", "bottom"], [1, "resize", "bottomleft", 3, "mousedown", "touchstart"], [1, "resize", "left"], [1, "resize-bar", "top", 3, "mousedown", "touchstart"], [1, "resize-bar", "right", 3, "mousedown", "touchstart"], [1, "resize-bar", "bottom", 3, "mousedown", "touchstart"], [1, "resize-bar", "left", 3, "mousedown", "touchstart"]], template: function ImageCropperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_img_2_Template, 2, 5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageCropperComponent_div_4_Template, 3, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:focus   .move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
/** @nocollapse */
ImageCropperComponent.ctorParameters = () => [
    { type: CropService },
    { type: CropperPositionService },
    { type: LoadImageService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
ImageCropperComponent.propDecorators = {
    wrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['wrapper', { static: true },] }],
    sourceImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['sourceImage', { static: false },] }],
    imageChangedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    imageURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    imageBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    imageFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maintainAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    aspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    resizeToWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    resizeToHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cropperMinWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cropperMinHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cropperMaxHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cropperMaxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cropperStaticWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cropperStaticHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    canvasRotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    initialStepSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    roundCropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onlyScaleDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    imageQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    autoCrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    containWithinAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hideResizeSquares: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    alignImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.text-align',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    imageCropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    startCropImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    cropperReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    loadImageFailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['window:resize',] }],
    moveImg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['document:mousemove', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['document:touchmove', ['$event'],] }],
    moveStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['document:mouseup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['document:touchend',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'image-cropper',
                template: "<div [style.background]=\"imageVisible && backgroundColor\"\n     #wrapper\n>\n    <img\n      #sourceImage\n      class=\"source-image\"\n      *ngIf=\"safeImgDataUrl\"\n      [src]=\"safeImgDataUrl\"\n      [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n      [style.transform]=\"safeTransformStyle\"\n      (load)=\"imageLoadedInView()\"\n    />\n    <div\n        class=\"overlay\"\n        [style.width.px]=\"maxSize.width\"\n        [style.height.px]=\"maxSize.height\"\n        [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n    ></div>\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         (keydown)=\"keyboardAccess($event)\"\n         tabindex=\"0\"\n    >\n        <div\n            (mousedown)=\"startMove($event, moveTypes.Move)\"\n            (touchstart)=\"startMove($event, moveTypes.Move)\"\n            class=\"move\">\n        </div>\n        <ng-container *ngIf=\"!hideResizeSquares\">\n            <span class=\"resize topleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize top\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize topright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize right\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottom\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize left\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize-bar top\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\n            </span>\n            <span class=\"resize-bar right\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\n            </span>\n            <span class=\"resize-bar bottom\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\n            </span>\n            <span class=\"resize-bar left\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\n            </span>\n        </ng-container>\n    </div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.source-image{max-width:100%;max-height:100%;transform-origin:center}:host .overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper:focus .move{border-color:#1e90ff;border-width:2px}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}:host .cropper.rounded .move{border-radius:100%}:host.disabled .cropper .move,:host.disabled .cropper .resize,:host.disabled .cropper .resize-bar{display:none}"]
            }]
    }], function () { return [{ type: CropService }, { type: CropperPositionService }, { type: LoadImageService }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], transform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maintainAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], aspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], resizeToWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], resizeToHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cropperMinWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cropperMinHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cropperMaxHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cropperMaxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cropperStaticWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cropperStaticHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], canvasRotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], initialStepSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], roundCropper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], onlyScaleDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], imageQuality: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], autoCrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], containWithinAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hideResizeSquares: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cropper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], alignImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.text-align']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.disabled']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], imageCropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], startCropImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], imageLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], cropperReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], loadImageFailed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * @return {?}
     */
    onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:resize']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    moveImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:mousemove', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:touchmove', ['$event']]
        }], 
    /**
     * @return {?}
     */
    moveStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:mouseup']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:touchend']
        }], wrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['wrapper', { static: true }]
        }], sourceImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['sourceImage', { static: false }]
        }], imageChangedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], imageURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], imageBase64: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], imageFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/image-cropper.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageCropperModule {
}
ImageCropperModule.ɵfac = function ImageCropperModule_Factory(t) { return new (t || ImageCropperModule)(); };
ImageCropperModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImageCropperModule });
ImageCropperModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
                ],
                declarations: [
                    ImageCropperComponent
                ],
                exports: [
                    ImageCropperComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageCropperModule, { declarations: function () { return [ImageCropperComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]; }, exports: function () { return [ImageCropperComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/blob.utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} base64Image
 * @return {?}
 */
function base64ToFile(base64Image) {
    /** @type {?} */
    const split = base64Image.split(',');
    /** @type {?} */
    const type = split[0].replace('data:', '').replace(';base64', '');
    /** @type {?} */
    const byteString = atob(split[1]);
    /** @type {?} */
    const ab = new ArrayBuffer(byteString.length);
    /** @type {?} */
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type });
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-image-cropper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 9553:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastValueFrom": () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 6426);

function lastValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function (resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function (value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function () {
                if (_hasValue) {
                    resolve(_value);
                }
                else if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
                }
            },
        });
    });
}


/***/ }),

/***/ 1679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonModule": () => (/* reexport safe */ _buttons__WEBPACK_IMPORTED_MODULE_0__.ButtonModule),
/* harmony export */   "ButtonsModule": () => (/* reexport safe */ _buttons__WEBPACK_IMPORTED_MODULE_0__.ButtonsModule),
/* harmony export */   "AutocompleteModule": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.AutocompleteModule),
/* harmony export */   "CheckboxesModule": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.CheckboxesModule),
/* harmony export */   "ControlsModule": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.ControlsModule),
/* harmony export */   "DateModule": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.DateModule),
/* harmony export */   "DateRangeModule": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.DateRangeModule),
/* harmony export */   "FormFieldModule": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.FormFieldModule),
/* harmony export */   "InputModule": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.InputModule),
/* harmony export */   "PasswordModule": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.PasswordModule),
/* harmony export */   "RadiosModule": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.RadiosModule),
/* harmony export */   "SelectModule": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_1__.SelectModule),
/* harmony export */   "FilesUploadModule": () => (/* reexport safe */ _popups__WEBPACK_IMPORTED_MODULE_2__.FilesUploadModule),
/* harmony export */   "PopupsModule": () => (/* reexport safe */ _popups__WEBPACK_IMPORTED_MODULE_2__.PopupsModule),
/* harmony export */   "LayoutsModule": () => (/* reexport safe */ _layouts__WEBPACK_IMPORTED_MODULE_3__.LayoutsModule),
/* harmony export */   "UserPhotoModule": () => (/* reexport safe */ _layouts__WEBPACK_IMPORTED_MODULE_3__.UserPhotoModule),
/* harmony export */   "IndicatorsModule": () => (/* reexport safe */ _indicators__WEBPACK_IMPORTED_MODULE_4__.IndicatorsModule),
/* harmony export */   "SpinnerModule": () => (/* reexport safe */ _indicators__WEBPACK_IMPORTED_MODULE_4__.SpinnerModule),
/* harmony export */   "extractDocumentChangeActionData": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.extractDocumentChangeActionData),
/* harmony export */   "mapControls": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.mapControls),
/* harmony export */   "markFormGroupTouched": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.markFormGroupTouched),
/* harmony export */   "regex": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.regex),
/* harmony export */   "regexErrors": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.regexErrors)
/* harmony export */ });
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ 2341);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ 7150);
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popups */ 9439);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts */ 4532);
/* harmony import */ var _indicators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indicators */ 9299);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ 2846);








/***/ }),

/***/ 4532:
/*!*****************************************!*\
  !*** ./src/app/shared/layouts/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* reexport safe */ _layouts_module__WEBPACK_IMPORTED_MODULE_0__.LayoutsModule),
/* harmony export */   "UserPhotoModule": () => (/* reexport safe */ _user_photo_user_photo_module__WEBPACK_IMPORTED_MODULE_1__.UserPhotoModule)
/* harmony export */ });
/* harmony import */ var _layouts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts.module */ 6087);
/* harmony import */ var _user_photo_user_photo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-photo/user-photo.module */ 264);




/***/ }),

/***/ 6087:
/*!**************************************************!*\
  !*** ./src/app/shared/layouts/layouts.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _user_photo_user_photo_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-photo/user-photo.module */ 264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class LayoutsModule {
}
LayoutsModule.ɵfac = function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); };
LayoutsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _user_photo_user_photo_module__WEBPACK_IMPORTED_MODULE_0__.UserPhotoModule
        ], _user_photo_user_photo_module__WEBPACK_IMPORTED_MODULE_0__.UserPhotoModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _user_photo_user_photo_module__WEBPACK_IMPORTED_MODULE_0__.UserPhotoModule], exports: [_user_photo_user_photo_module__WEBPACK_IMPORTED_MODULE_0__.UserPhotoModule] }); })();


/***/ }),

/***/ 5355:
/*!*******************************************************************!*\
  !*** ./src/app/shared/layouts/user-photo/user-photo.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPhotoComponent": () => (/* binding */ UserPhotoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 1570);


class UserPhotoComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
    }
    get safePhotoURL() {
        return this.photoURL ? this.sanitizer.bypassSecurityTrustStyle(`url(${this.photoURL})`) : null;
    }
}
UserPhotoComponent.ɵfac = function UserPhotoComponent_Factory(t) { return new (t || UserPhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer)); };
UserPhotoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPhotoComponent, selectors: [["app-user-photo"]], inputs: { photoURL: "photoURL" }, decls: 1, vars: 2, consts: [[1, "photo"]], template: function UserPhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.safePhotoURL);
    } }, styles: [".photo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #f44336;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGhvdG8uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkNJUTtFREhSLHNCQUFBO0FBREoiLCJmaWxlIjoidXNlci1waG90by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9jb2xvcnMnO1xuXG4ucGhvdG8ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSIsIiRiYXNlOiAjZmFmYWZhO1xuJGJhc2UtZGFyazogI2UwZTBlMDtcbiRiYXNlLWxpZ2h0OiAjZmZmZmZmO1xuJG9uLWJhc2U6ICMwMDAwMDA7XG5cbiRwcmltYXJ5OiAjMDI3N2JkO1xuJHByaW1hcnktZGFyazogIzAwNGM4YztcbiRwcmltYXJ5LWxpZ2h0OiAjNThhNWYwO1xuJG9uLXByaW1hcnk6ICNmZmZmZmY7XG5cbiRzZWNvbmRhcnk6ICNmNDQzMzY7XG4kc2Vjb25kYXJ5LWRhcms6ICNiOTAwMDc7XG4kc2Vjb25kYXJ5LWxpZ2h0OiAjZmY3OTVkO1xuJG9uLXNlY29uZGFyeTogI2ZmZmZmZjtcblxuJGVycm9yOiAjQjAwMDIwO1xuJG9uLWVycm9yOiAjZmZmZmZmO1xuXG4kc3VjY2VzczogIzk5YWEwMDtcbiRvbi1zdWNjZXNzOiAjZmZmZmZmO1xuXG5cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 264:
/*!****************************************************************!*\
  !*** ./src/app/shared/layouts/user-photo/user-photo.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPhotoModule": () => (/* binding */ UserPhotoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _user_photo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-photo.component */ 5355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class UserPhotoModule {
}
UserPhotoModule.ɵfac = function UserPhotoModule_Factory(t) { return new (t || UserPhotoModule)(); };
UserPhotoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserPhotoModule });
UserPhotoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserPhotoModule, { declarations: [_user_photo_component__WEBPACK_IMPORTED_MODULE_0__.UserPhotoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_user_photo_component__WEBPACK_IMPORTED_MODULE_0__.UserPhotoComponent] }); })();


/***/ }),

/***/ 4498:
/*!************************************************************************************!*\
  !*** ./src/app/shared/popups/files-upload/components/cropper/cropper.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropperComponent": () => (/* binding */ CropperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ 3931);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-image-cropper */ 950);




class CropperComponent {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    onCrop() {
        const file = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.dataURLtoFile)(this.croppedImage, this.imageFile);
        this.changed.emit(file);
    }
}
CropperComponent.ɵfac = function CropperComponent_Factory(t) { return new (t || CropperComponent)(); };
CropperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CropperComponent, selectors: [["app-cropper"]], inputs: { imageFile: "imageFile" }, outputs: { changed: "changed" }, decls: 6, vars: 3, consts: [[1, "cropper"], [1, "cropper__content"], ["format", "png", 3, "imageFile", "maintainAspectRatio", "aspectRatio", "imageCropped"], [1, "cropper__actions"], [1, "app-button", 3, "click"]], template: function CropperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "image-cropper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCropped", function CropperComponent_Template_image_cropper_imageCropped_2_listener($event) { return ctx.imageCropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CropperComponent_Template_button_click_4_listener() { return ctx.onCrop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Crop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageFile", ctx.imageFile)("maintainAspectRatio", true)("aspectRatio", 1 / 1);
    } }, directives: [ngx_image_cropper__WEBPACK_IMPORTED_MODULE_2__.ImageCropperComponent], styles: [".cropper__content[_ngcontent-%COMP%] {\n  height: 260px;\n}\n.cropper__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.button[_ngcontent-%COMP%] {\n  color: #0277bd;\n}\n.button[_ngcontent-%COMP%]:hover {\n  color: #004c8c;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyb3BwZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0UsYUFBQTtBQUhOO0FBT0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFMTjtBQVVBO0VBQ0UsY0NaUTtBREtWO0FBUUU7RUFDSSxjQ2JTO0VEY1QsZUFBQTtBQU5OIiwiZmlsZSI6ImNyb3BwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvY29sb3JzJztcblxuLmNyb3BwZXIge1xuXG4gICAgJl9fY29udGVudCB7XG4gICAgICBoZWlnaHQ6IDI2MHB4O1xuXG4gICAgfVxuXG4gICAgJl9fYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG59XG5cbi5idXR0b24ge1xuICBjb2xvciA6ICRwcmltYXJ5O1xuICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1kYXJrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iLCIkYmFzZTogI2ZhZmFmYTtcbiRiYXNlLWRhcms6ICNlMGUwZTA7XG4kYmFzZS1saWdodDogI2ZmZmZmZjtcbiRvbi1iYXNlOiAjMDAwMDAwO1xuXG4kcHJpbWFyeTogIzAyNzdiZDtcbiRwcmltYXJ5LWRhcms6ICMwMDRjOGM7XG4kcHJpbWFyeS1saWdodDogIzU4YTVmMDtcbiRvbi1wcmltYXJ5OiAjZmZmZmZmO1xuXG4kc2Vjb25kYXJ5OiAjZjQ0MzM2O1xuJHNlY29uZGFyeS1kYXJrOiAjYjkwMDA3O1xuJHNlY29uZGFyeS1saWdodDogI2ZmNzk1ZDtcbiRvbi1zZWNvbmRhcnk6ICNmZmZmZmY7XG5cbiRlcnJvcjogI0IwMDAyMDtcbiRvbi1lcnJvcjogI2ZmZmZmZjtcblxuJHN1Y2Nlc3M6ICM5OWFhMDA7XG4kb24tc3VjY2VzczogI2ZmZmZmZjtcblxuXG4iXX0= */"] });


/***/ }),

/***/ 133:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/popups/files-upload/components/upload/upload.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadComponent": () => (/* binding */ UploadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9553);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4094);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7465);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/storage */ 4416);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _pipes_file_size_file_size_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/file-size/file-size.pipe */ 6083);


// import firebase from 'firebase/app';
// import { FirebaseStorage } from 'firebase/storage/dist/storage';






function UploadComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
} }
function UploadComponent_div_4_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Descargar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.downloadURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UploadComponent_div_4_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_4_ng_template_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.task.pause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Pausa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_4_ng_template_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.task.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadComponent_div_4_ng_template_9_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.task.resume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Continuar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const snapshot_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !((snapshot_r1 == null ? null : snapshot_r1.state) === "running"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !((snapshot_r1 == null ? null : snapshot_r1.state) === "running"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !((snapshot_r1 == null ? null : snapshot_r1.state) === "paused"));
} }
function UploadComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UploadComponent_div_4_div_6_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UploadComponent_div_4_ng_template_7_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UploadComponent_div_4_ng_template_9_Template, 6, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const snapshot_r1 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, snapshot_r1.bytesTransferred), " of ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, snapshot_r1.totalBytes), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.downloadURL)("ngIfThen", _r3)("ngIfElse", _r5);
} }
class UploadComponent {
    constructor(storage) {
        this.storage = storage;
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.startUpload();
    }
    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
    startUpload() {
        const path = `${this.file.type.split('/')[0]}/${Date.now()}_${this.file.name}`;
        //   jpg/243214232_migato.jpg
        const storageRef = this.storage.ref(path);
        this.task = this.storage.upload(path, this.file);
        this.percentage$ = this.task.percentageChanges();
        //this.snapshot$ = this.task.snapshotChanges() as Observable<firebase.storage.UploadTaskSnapshot>;
        this.snapshot$ = this.task.snapshotChanges();
        this.snapshot$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const storageRefObservable$ = storageRef.getDownloadURL();
            this.downloadURL = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)(storageRefObservable$);
            this.completed.next(this.downloadURL);
        }))).subscribe();
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_7__.AngularFireStorage)); };
UploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], inputs: { file: "file" }, outputs: { completed: "completed" }, decls: 6, vars: 7, consts: [[1, "upload"], ["max", "100", 1, "upload__progress", 3, "value"], ["class", "upload__info", 4, "ngIf"], [1, "upload__info"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["completed", ""], ["inProgress", ""], ["target", "_blank", "rel", "noopener", 1, "app-a", 3, "href"], [1, "button", 3, "disabled", "click"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UploadComponent_div_4_Template, 11, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.file.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx.percentage$) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, ctx.snapshot$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _pipes_file_size_file_size_pipe__WEBPACK_IMPORTED_MODULE_0__.FileSizePipe], styles: [".upload[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.05);\n  margin-top: 12px;\n}\n.upload__progress[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.upload__progress[_ngcontent-%COMP%]::-webkit-progress-value {\n  -webkit-transition: width 0.1s ease;\n  transition: width 0.1s ease;\n}\n.upload__info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 2px 4px;\n}\n.app-a[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtBQURKO0FBRUk7RUFDRSxtQ0FBQTtFQUFBLDJCQUFBO0FBQU47QUFJRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUZKO0FBT0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFKRjtBQU9BO0VBQ0UsZUFBQTtBQUpGIiwiZmlsZSI6InVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9jb2xvcnMnO1xuXG4udXBsb2FkIHtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuXG4gICZfX3Byb2dyZXNzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgZWFzZTtcbiAgICB9XG4gIH1cblxuICAmX19pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMnB4IDRweDtcbn1cblxuLmFwcC1hIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuIl19 */"] });


/***/ }),

/***/ 5420:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/popups/files-upload/directives/drop-zone/drop-zone.directive.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropZoneDirective": () => (/* binding */ DropZoneDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class DropZoneDirective {
    constructor() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onDrop($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    }
    onDragOver($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    }
    onDragLeave($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    }
}
DropZoneDirective.ɵfac = function DropZoneDirective_Factory(t) { return new (t || DropZoneDirective)(); };
DropZoneDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropZoneDirective, selectors: [["", "appDropZone", ""]], hostBindings: function DropZoneDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function DropZoneDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function DropZoneDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DropZoneDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); });
    } }, outputs: { dropped: "dropped", hovered: "hovered" } });


/***/ }),

/***/ 3184:
/*!**********************************************************************!*\
  !*** ./src/app/shared/popups/files-upload/files-upload.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesUploadComponent": () => (/* binding */ FilesUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _directives_drop_zone_drop_zone_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/drop-zone/drop-zone.directive */ 5420);
/* harmony import */ var _components_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cropper/cropper.component */ 4498);
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/upload/upload.component */ 133);







function FilesUploadComponent_ng_container_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Seleccione un archivo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesUploadComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("hovered", function FilesUploadComponent_ng_container_5_Template_div_hovered_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.toggleHover($event); })("dropped", function FilesUploadComponent_ng_container_5_Template_div_dropped_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.onDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Deja tus archivos aqui");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FilesUploadComponent_ng_container_5_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.onDropFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "seleccionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FilesUploadComponent_ng_container_5_div_9_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("dropzone__hovered", ctx_r0.isHovering);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", ctx_r0.data.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isError);
} }
function FilesUploadComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-cropper", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changed", function FilesUploadComponent_ng_container_6_Template_app_cropper_changed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onCrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageFile", ctx_r1.imageFile);
} }
function FilesUploadComponent_ng_container_7_app_upload_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-upload", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("completed", function FilesUploadComponent_ng_container_7_app_upload_1_Template_app_upload_completed_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r13.onUploadComplete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("file", file_r12);
} }
function FilesUploadComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FilesUploadComponent_ng_container_7_app_upload_1_Template, 1, 1, "app-upload", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.files);
} }
function FilesUploadComponent_div_8_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesUploadComponent_div_8_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesUploadComponent_div_8_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesUploadComponent_div_8_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r19.onComplete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Completado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FilesUploadComponent_div_8_button_1_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FilesUploadComponent_div_8_button_2_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.filesURLs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.filesURLs.length);
} }
class FilesUploadComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.files = [];
        this.filesURLs = [];
    }
    ngOnInit() {
    }
    toggleHover(event) {
        this.isHovering = event;
    }
    onDrop(files) {
        this.dropGeneral(files);
    }
    onDropFile(event) {
        this.dropGeneral(event.target.files);
    }
    dropGeneral(files) {
        var _a;
        this.isError = false;
        if (this.data.crop && files.length > 1) {
            this.isError = true;
            return;
        }
        if (this.data.crop && files.length === 1 && ((_a = files.item(0)) === null || _a === void 0 ? void 0 : _a.type.split('/')[0]) === 'image') {
            this.imageFile = files.item(0);
            return;
        }
        for (let i = 0; i < files.length; i++) {
            this.files.push(files.item(i));
        }
        console.log(files);
    }
    onUploadComplete(url) {
        this.filesURLs.push(url);
    }
    onComplete() {
        const res = this.data.multiple ? this.filesURLs : this.filesURLs[0];
        this.dialogRef.close(res);
    }
    onClose() {
        this.dialogRef.close();
    }
    onCrop(file) {
        this.imageFile = null;
        this.files.push(file);
    }
}
FilesUploadComponent.ɵfac = function FilesUploadComponent_Factory(t) { return new (t || FilesUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
FilesUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FilesUploadComponent, selectors: [["app-files-upload"]], decls: 9, vars: 4, consts: [[1, "files-upload"], [1, "files-upload__header"], [1, "files-upload__content"], [4, "ngIf"], ["class", "files-upload__footer", 4, "ngIf"], ["appDropZone", "", 1, "dropzone", 3, "hovered", "dropped"], [1, "dropzone__label"], [1, "dropzone__file"], [1, "file"], ["type", "file", 1, "file__input", 3, "multiple", "change"], [1, "file__label"], ["class", "error", 4, "ngIf"], [1, "error"], [3, "imageFile", "changed"], [3, "file", "completed", 4, "ngFor", "ngForOf"], [3, "file", "completed"], [1, "files-upload__footer"], ["class", "app-button", 3, "click", 4, "ngIf"], [1, "app-button", 3, "click"]], template: function FilesUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Files uploading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FilesUploadComponent_ng_container_5_Template, 10, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FilesUploadComponent_ng_container_6_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FilesUploadComponent_ng_container_7_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FilesUploadComponent_div_8_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.files.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.imageFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.imageFile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _directives_drop_zone_drop_zone_directive__WEBPACK_IMPORTED_MODULE_0__.DropZoneDirective, _components_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_1__.CropperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_2__.UploadComponent], styles: [".files-upload[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.files-upload__header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.files-upload__content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.files-upload__footer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: row-reverse;\n  margin-top: 12px;\n}\n.dropzone[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border: 2px dashed #58a5f0;\n  border-radius: 4px;\n  padding: 20px;\n}\n.dropzone__hovered[_ngcontent-%COMP%] {\n  border: 2px solid #0277bd;\n}\n.dropzone__hovered[_ngcontent-%COMP%]   .dropzone__label[_ngcontent-%COMP%], .dropzone__hovered[_ngcontent-%COMP%]   .dropzone__file[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.file__input[_ngcontent-%COMP%] {\n  display: none;\n}\n.file__label[_ngcontent-%COMP%] {\n  color: #0277bd;\n}\n.file__label[_ngcontent-%COMP%]:hover {\n  color: #004c8c;\n  cursor: pointer;\n}\n.error[_ngcontent-%COMP%] {\n  color: #B00020;\n  text-align: center;\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVzLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFLRTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFMRjtBQU9FO0VBQ0UseUJBQUE7QUFMSjtBQU1JO0VBQ0UsWUFBQTtBQUpOO0FBVUU7RUFDRSxhQUFBO0FBUEo7QUFVRTtFQUNFLGNDekNNO0FEaUNWO0FBU0k7RUFDRSxjQzFDUztFRDJDVCxlQUFBO0FBUE47QUFZQTtFQUNFLGNDeENNO0VEeUNOLGtCQUFBO0VBQ0EsYUFBQTtBQVRGIiwiZmlsZSI6ImZpbGVzLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9jb2xvcnMnO1xuXG4uZmlsZXMtdXBsb2FkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICZfX2hlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzoxO1xuICB9XG5cbiAgJl9fZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG59XG5cbi5kcm9wem9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDJweCBkYXNoZWQgJHByaW1hcnktbGlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMjBweDtcblxuICAmX19ob3ZlcmVkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeTtcbiAgICAuZHJvcHpvbmVfX2xhYmVsLCAuZHJvcHpvbmVfX2ZpbGUge1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgIH1cbiAgfVxufVxuXG4uZmlsZSB7XG4gICZfX2lucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJl9fbGFiZWwge1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1kYXJrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogJGVycm9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG59XG4iLCIkYmFzZTogI2ZhZmFmYTtcbiRiYXNlLWRhcms6ICNlMGUwZTA7XG4kYmFzZS1saWdodDogI2ZmZmZmZjtcbiRvbi1iYXNlOiAjMDAwMDAwO1xuXG4kcHJpbWFyeTogIzAyNzdiZDtcbiRwcmltYXJ5LWRhcms6ICMwMDRjOGM7XG4kcHJpbWFyeS1saWdodDogIzU4YTVmMDtcbiRvbi1wcmltYXJ5OiAjZmZmZmZmO1xuXG4kc2Vjb25kYXJ5OiAjZjQ0MzM2O1xuJHNlY29uZGFyeS1kYXJrOiAjYjkwMDA3O1xuJHNlY29uZGFyeS1saWdodDogI2ZmNzk1ZDtcbiRvbi1zZWNvbmRhcnk6ICNmZmZmZmY7XG5cbiRlcnJvcjogI0IwMDAyMDtcbiRvbi1lcnJvcjogI2ZmZmZmZjtcblxuJHN1Y2Nlc3M6ICM5OWFhMDA7XG4kb24tc3VjY2VzczogI2ZmZmZmZjtcblxuXG4iXX0= */"] });


/***/ }),

/***/ 5825:
/*!**********************************************************************!*\
  !*** ./src/app/shared/popups/files-upload/files-upload.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesUploadDirective": () => (/* binding */ FilesUploadDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _files_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files-upload.component */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2213);




class FilesUploadDirective {
    constructor(dialog) {
        this.dialog = dialog;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    onClick() {
        this.openDialog();
    }
    openDialog() {
        const dialogRef = this.dialog.open(_files_upload_component__WEBPACK_IMPORTED_MODULE_0__.FilesUploadComponent, {
            width: '550px',
            height: '500px',
            data: {
                multiple: this.multiple,
                crop: this.crop
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.changed.emit(result || null);
        });
    }
}
FilesUploadDirective.ɵfac = function FilesUploadDirective_Factory(t) { return new (t || FilesUploadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog)); };
FilesUploadDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FilesUploadDirective, selectors: [["", "appFilesUpload", ""]], hostBindings: function FilesUploadDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilesUploadDirective_click_HostBindingHandler() { return ctx.onClick(ctx.event); });
    } }, inputs: { multiple: "multiple", crop: "crop" }, outputs: { changed: "changed" } });


/***/ }),

/***/ 3686:
/*!*******************************************************************!*\
  !*** ./src/app/shared/popups/files-upload/files-upload.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesUploadModule": () => (/* binding */ FilesUploadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _files_upload_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files-upload.directive */ 5825);
/* harmony import */ var _files_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files-upload.component */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-image-cropper */ 950);
/* harmony import */ var _directives_drop_zone_drop_zone_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/drop-zone/drop-zone.directive */ 5420);
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/upload/upload.component */ 133);
/* harmony import */ var _pipes_file_size_file_size_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/file-size/file-size.pipe */ 6083);
/* harmony import */ var _components_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cropper/cropper.component */ 4498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);










class FilesUploadModule {
}
FilesUploadModule.ɵfac = function FilesUploadModule_Factory(t) { return new (t || FilesUploadModule)(); };
FilesUploadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FilesUploadModule });
FilesUploadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__.ImageCropperModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FilesUploadModule, { declarations: [_files_upload_directive__WEBPACK_IMPORTED_MODULE_0__.FilesUploadDirective,
        _files_upload_component__WEBPACK_IMPORTED_MODULE_1__.FilesUploadComponent,
        _directives_drop_zone_drop_zone_directive__WEBPACK_IMPORTED_MODULE_2__.DropZoneDirective,
        _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__.UploadComponent,
        _pipes_file_size_file_size_pipe__WEBPACK_IMPORTED_MODULE_4__.FileSizePipe,
        _components_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_5__.CropperComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__.ImageCropperModule], exports: [_files_upload_directive__WEBPACK_IMPORTED_MODULE_0__.FilesUploadDirective] }); })();


/***/ }),

/***/ 6083:
/*!******************************************************************************!*\
  !*** ./src/app/shared/popups/files-upload/pipes/file-size/file-size.pipe.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileSizePipe": () => (/* binding */ FileSizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
class FileSizePipe {
    transform(sizeInBytes, longForm) {
        const units = longForm
            ? FILE_SIZE_UNITS_LONG
            : FILE_SIZE_UNITS;
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power);
        const formattedSize = Math.round(size * 100) / 100;
        const unit = units[power];
        return size ? `${formattedSize} ${unit}` : '0';
    }
}
FileSizePipe.ɵfac = function FileSizePipe_Factory(t) { return new (t || FileSizePipe)(); };
FileSizePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fileSize", type: FileSizePipe, pure: true });


/***/ }),

/***/ 2815:
/*!**********************************************************!*\
  !*** ./src/app/shared/popups/files-upload/utils/file.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataURLtoFile": () => (/* binding */ dataURLtoFile)
/* harmony export */ });
const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
};


/***/ }),

/***/ 3931:
/*!***********************************************************!*\
  !*** ./src/app/shared/popups/files-upload/utils/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataURLtoFile": () => (/* reexport safe */ _file__WEBPACK_IMPORTED_MODULE_0__.dataURLtoFile)
/* harmony export */ });
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file */ 2815);



/***/ }),

/***/ 9439:
/*!****************************************!*\
  !*** ./src/app/shared/popups/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupsModule": () => (/* reexport safe */ _popups_module__WEBPACK_IMPORTED_MODULE_0__.PopupsModule),
/* harmony export */   "FilesUploadModule": () => (/* reexport safe */ _files_upload_files_upload_module__WEBPACK_IMPORTED_MODULE_1__.FilesUploadModule)
/* harmony export */ });
/* harmony import */ var _popups_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popups.module */ 6614);
/* harmony import */ var _files_upload_files_upload_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files-upload/files-upload.module */ 3686);




/***/ }),

/***/ 6614:
/*!************************************************!*\
  !*** ./src/app/shared/popups/popups.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupsModule": () => (/* binding */ PopupsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _files_upload_files_upload_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files-upload/files-upload.module */ 3686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class PopupsModule {
}
PopupsModule.ɵfac = function PopupsModule_Factory(t) { return new (t || PopupsModule)(); };
PopupsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PopupsModule });
PopupsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _files_upload_files_upload_module__WEBPACK_IMPORTED_MODULE_0__.FilesUploadModule
        ], _files_upload_files_upload_module__WEBPACK_IMPORTED_MODULE_0__.FilesUploadModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopupsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _files_upload_files_upload_module__WEBPACK_IMPORTED_MODULE_0__.FilesUploadModule], exports: [_files_upload_files_upload_module__WEBPACK_IMPORTED_MODULE_0__.FilesUploadModule] }); })();


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


/***/ }),

/***/ 1710:
/*!************************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/node_modules/tslib/tslib.es6.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=679.9d330d324bd7c9c04049.js.map