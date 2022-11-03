"use strict";
(self["webpackChunkecommerce_angular_app"] = self["webpackChunkecommerce_angular_app"] || []).push([[159],{

/***/ 2118:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatCard": () => (/* binding */ MatCard),
/* harmony export */   "MatCardActions": () => (/* binding */ MatCardActions),
/* harmony export */   "MatCardAvatar": () => (/* binding */ MatCardAvatar),
/* harmony export */   "MatCardContent": () => (/* binding */ MatCardContent),
/* harmony export */   "MatCardFooter": () => (/* binding */ MatCardFooter),
/* harmony export */   "MatCardHeader": () => (/* binding */ MatCardHeader),
/* harmony export */   "MatCardImage": () => (/* binding */ MatCardImage),
/* harmony export */   "MatCardLgImage": () => (/* binding */ MatCardLgImage),
/* harmony export */   "MatCardMdImage": () => (/* binding */ MatCardMdImage),
/* harmony export */   "MatCardModule": () => (/* binding */ MatCardModule),
/* harmony export */   "MatCardSmImage": () => (/* binding */ MatCardSmImage),
/* harmony export */   "MatCardSubtitle": () => (/* binding */ MatCardSubtitle),
/* harmony export */   "MatCardTitle": () => (/* binding */ MatCardTitle),
/* harmony export */   "MatCardTitleGroup": () => (/* binding */ MatCardTitleGroup),
/* harmony export */   "MatCardXlImage": () => (/* binding */ MatCardXlImage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 2220);




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


const _c0 = ["*", [["mat-card-footer"]]];
const _c1 = ["*", "mat-card-footer"];
const _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
const _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];
class MatCardContent {
}
MatCardContent.ɵfac = function MatCardContent_Factory(t) { return new (t || MatCardContent)(); };
MatCardContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardContent, selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]], hostAttrs: [1, "mat-card-content"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-card-content, [mat-card-content], [matCardContent]',
                host: { 'class': 'mat-card-content' }
            }]
    }], null, null); })();
/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
class MatCardTitle {
}
MatCardTitle.ɵfac = function MatCardTitle_Factory(t) { return new (t || MatCardTitle)(); };
MatCardTitle.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardTitle, selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]], hostAttrs: [1, "mat-card-title"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
                host: {
                    'class': 'mat-card-title'
                }
            }]
    }], null, null); })();
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
class MatCardSubtitle {
}
MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) { return new (t || MatCardSubtitle)(); };
MatCardSubtitle.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardSubtitle, selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]], hostAttrs: [1, "mat-card-subtitle"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
                host: {
                    'class': 'mat-card-subtitle'
                }
            }]
    }], null, null); })();
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
class MatCardActions {
    constructor() {
        /** Position of the actions inside the card. */
        this.align = 'start';
    }
}
MatCardActions.ɵfac = function MatCardActions_Factory(t) { return new (t || MatCardActions)(); };
MatCardActions.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardActions, selectors: [["mat-card-actions"]], hostAttrs: [1, "mat-card-actions"], hostVars: 2, hostBindings: function MatCardActions_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
    } }, inputs: { align: "align" }, exportAs: ["matCardActions"] });
MatCardActions.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-card-actions',
                exportAs: 'matCardActions',
                host: {
                    'class': 'mat-card-actions',
                    '[class.mat-card-actions-align-end]': 'align === "end"'
                }
            }]
    }], function () { return []; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
class MatCardFooter {
}
MatCardFooter.ɵfac = function MatCardFooter_Factory(t) { return new (t || MatCardFooter)(); };
MatCardFooter.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardFooter, selectors: [["mat-card-footer"]], hostAttrs: [1, "mat-card-footer"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-card-footer',
                host: { 'class': 'mat-card-footer' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardImage {
}
MatCardImage.ɵfac = function MatCardImage_Factory(t) { return new (t || MatCardImage)(); };
MatCardImage.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardImage, selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]], hostAttrs: [1, "mat-card-image"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-image], [matCardImage]',
                host: { 'class': 'mat-card-image' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardSmImage {
}
MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) { return new (t || MatCardSmImage)(); };
MatCardSmImage.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardSmImage, selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]], hostAttrs: [1, "mat-card-sm-image"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-sm-image], [matCardImageSmall]',
                host: { 'class': 'mat-card-sm-image' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardMdImage {
}
MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) { return new (t || MatCardMdImage)(); };
MatCardMdImage.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardMdImage, selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]], hostAttrs: [1, "mat-card-md-image"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-md-image], [matCardImageMedium]',
                host: { 'class': 'mat-card-md-image' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardLgImage {
}
MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) { return new (t || MatCardLgImage)(); };
MatCardLgImage.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardLgImage, selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]], hostAttrs: [1, "mat-card-lg-image"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-lg-image], [matCardImageLarge]',
                host: { 'class': 'mat-card-lg-image' }
            }]
    }], null, null); })();
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardXlImage {
}
MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) { return new (t || MatCardXlImage)(); };
MatCardXlImage.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardXlImage, selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], hostAttrs: [1, "mat-card-xl-image"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-xl-image], [matCardImageXLarge]',
                host: { 'class': 'mat-card-xl-image' }
            }]
    }], null, null); })();
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
class MatCardAvatar {
}
MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) { return new (t || MatCardAvatar)(); };
MatCardAvatar.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCardAvatar, selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], hostAttrs: [1, "mat-card-avatar"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mat-card-avatar], [matCardAvatar]',
                host: { 'class': 'mat-card-avatar' }
            }]
    }], null, null); })();
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 */
class MatCard {
    // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
    constructor(_animationMode) {
        this._animationMode = _animationMode;
    }
}
MatCard.ɵfac = function MatCard_Factory(t) { return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8)); };
MatCard.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCard, selectors: [["mat-card"]], hostAttrs: [1, "mat-card", "mat-focus-indicator"], hostVars: 2, hostBindings: function MatCard_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, exportAs: ["matCard"], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MatCard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    } }, styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"], encapsulation: 2, changeDetection: 0 });
MatCard.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-card',
                exportAs: 'matCard',
                template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'mat-card mat-focus-indicator',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
            }] }]; }, null); })();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */
class MatCardHeader {
}
MatCardHeader.ɵfac = function MatCardHeader_Factory(t) { return new (t || MatCardHeader)(); };
MatCardHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCardHeader, selectors: [["mat-card-header"]], hostAttrs: [1, "mat-card-header"], ngContentSelectors: _c3, decls: 4, vars: 0, consts: [[1, "mat-card-header-text"]], template: function MatCardHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-card-header',
                template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: { 'class': 'mat-card-header' }
            }]
    }], null, null); })();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * @docs-private
 */
class MatCardTitleGroup {
}
MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) { return new (t || MatCardTitleGroup)(); };
MatCardTitleGroup.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCardTitleGroup, selectors: [["mat-card-title-group"]], hostAttrs: [1, "mat-card-title-group"], ngContentSelectors: _c5, decls: 4, vars: 0, template: function MatCardTitleGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-card-title-group',
                template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: { 'class': 'mat-card-title-group' }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatCardModule {
}
MatCardModule.ɵfac = function MatCardModule_Factory(t) { return new (t || MatCardModule)(); };
MatCardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatCardModule });
MatCardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
                exports: [
                    MatCard,
                    MatCardHeader,
                    MatCardTitleGroup,
                    MatCardContent,
                    MatCardTitle,
                    MatCardSubtitle,
                    MatCardActions,
                    MatCardFooter,
                    MatCardSmImage,
                    MatCardMdImage,
                    MatCardLgImage,
                    MatCardImage,
                    MatCardXlImage,
                    MatCardAvatar,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
                ],
                declarations: [
                    MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle,
                    MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage,
                    MatCardXlImage, MatCardAvatar,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCardModule, { declarations: function () { return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]; }, exports: function () { return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]; } }); })();

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

/***/ 8021:
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_PAGINATOR_DEFAULT_OPTIONS": () => (/* binding */ MAT_PAGINATOR_DEFAULT_OPTIONS),
/* harmony export */   "MAT_PAGINATOR_INTL_PROVIDER": () => (/* binding */ MAT_PAGINATOR_INTL_PROVIDER),
/* harmony export */   "MAT_PAGINATOR_INTL_PROVIDER_FACTORY": () => (/* binding */ MAT_PAGINATOR_INTL_PROVIDER_FACTORY),
/* harmony export */   "MatPaginator": () => (/* binding */ MatPaginator),
/* harmony export */   "MatPaginatorIntl": () => (/* binding */ MatPaginatorIntl),
/* harmony export */   "MatPaginatorModule": () => (/* binding */ MatPaginatorModule),
/* harmony export */   "PageEvent": () => (/* binding */ PageEvent),
/* harmony export */   "_MatPaginatorBase": () => (/* binding */ _MatPaginatorBase)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5788);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */








function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageSizeOption_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pageSizeOption_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
} }
function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7._changePageSize($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx_r3._formFieldAppearance)("color", ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
} }
function MatPaginator_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.pageSize);
} }
function MatPaginator_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatPaginator_div_2_mat_form_field_3_Template, 3, 6, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0._intl.itemsPerPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
} }
function MatPaginator_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.firstPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
} }
function MatPaginator_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.lastPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
} }
class MatPaginatorIntl {
    constructor() {
        /**
         * Stream to emit from when labels are changed. Use this to notify components when the labels have
         * changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /** A label for the page size selector. */
        this.itemsPerPageLabel = 'Items per page:';
        /** A label for the button that increments the current page. */
        this.nextPageLabel = 'Next page';
        /** A label for the button that decrements the current page. */
        this.previousPageLabel = 'Previous page';
        /** A label for the button that moves to the first page. */
        this.firstPageLabel = 'First page';
        /** A label for the button that moves to the last page. */
        this.lastPageLabel = 'Last page';
        /** A label for the range of items within the current page and the length of the whole list. */
        this.getRangeLabel = (page, pageSize, length) => {
            if (length == 0 || pageSize == 0) {
                return `0 of ${length}`;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return `${startIndex + 1} – ${endIndex} of ${length}`;
        };
    }
}
MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) { return new (t || MatPaginatorIntl)(); };
MatPaginatorIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MatPaginatorIntl_Factory() { return new MatPaginatorIntl(); }, token: MatPaginatorIntl, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatorIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
/** @docs-private */
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatPaginatorIntl();
}
/** @docs-private */
const MAT_PAGINATOR_INTL_PROVIDER = {
    // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
    provide: MatPaginatorIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatPaginatorIntl]],
    useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The default page size if there is no page size and there are no provided page size options. */
const DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
class PageEvent {
}
/** Injection token that can be used to provide the default options for the paginator module. */
const MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_PAGINATOR_DEFAULT_OPTIONS');
// Boilerplate for applying mixins to _MatPaginatorBase.
/** @docs-private */
const _MatPaginatorMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinInitialized)(class {
}));
/**
 * Base class with all of the `MatPaginator` functionality.
 * @docs-private
 */
class _MatPaginatorBase extends _MatPaginatorMixinBase {
    constructor(_intl, _changeDetectorRef, defaults) {
        super();
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._pageIndex = 0;
        this._length = 0;
        this._pageSizeOptions = [];
        this._hidePageSize = false;
        this._showFirstLastButtons = false;
        /** Event emitted when the paginator changes the page size or page index. */
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
        if (defaults) {
            const { pageSize, pageSizeOptions, hidePageSize, showFirstLastButtons, } = defaults;
            if (pageSize != null) {
                this._pageSize = pageSize;
            }
            if (pageSizeOptions != null) {
                this._pageSizeOptions = pageSizeOptions;
            }
            if (hidePageSize != null) {
                this._hidePageSize = hidePageSize;
            }
            if (showFirstLastButtons != null) {
                this._showFirstLastButtons = showFirstLastButtons;
            }
        }
    }
    /** The zero-based page index of the displayed list of items. Defaulted to 0. */
    get pageIndex() { return this._pageIndex; }
    set pageIndex(value) {
        this._pageIndex = Math.max((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value), 0);
        this._changeDetectorRef.markForCheck();
    }
    /** The length of the total number of items that are being paginated. Defaulted to 0. */
    get length() { return this._length; }
    set length(value) {
        this._length = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
        this._changeDetectorRef.markForCheck();
    }
    /** Number of items to display on a page. By default set to 50. */
    get pageSize() { return this._pageSize; }
    set pageSize(value) {
        this._pageSize = Math.max((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value), 0);
        this._updateDisplayedPageSizeOptions();
    }
    /** The set of provided page size options to display to the user. */
    get pageSizeOptions() { return this._pageSizeOptions; }
    set pageSizeOptions(value) {
        this._pageSizeOptions = (value || []).map(p => (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(p));
        this._updateDisplayedPageSizeOptions();
    }
    /** Whether to hide the page size selection UI from the user. */
    get hidePageSize() { return this._hidePageSize; }
    set hidePageSize(value) {
        this._hidePageSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /** Whether to show the first/last buttons UI to the user. */
    get showFirstLastButtons() { return this._showFirstLastButtons; }
    set showFirstLastButtons(value) {
        this._showFirstLastButtons = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    ngOnInit() {
        this._initialized = true;
        this._updateDisplayedPageSizeOptions();
        this._markInitialized();
    }
    ngOnDestroy() {
        this._intlChanges.unsubscribe();
    }
    /** Advances to the next page if it exists. */
    nextPage() {
        if (!this.hasNextPage()) {
            return;
        }
        const previousPageIndex = this.pageIndex;
        this.pageIndex++;
        this._emitPageEvent(previousPageIndex);
    }
    /** Move back to the previous page if it exists. */
    previousPage() {
        if (!this.hasPreviousPage()) {
            return;
        }
        const previousPageIndex = this.pageIndex;
        this.pageIndex--;
        this._emitPageEvent(previousPageIndex);
    }
    /** Move to the first page if not already there. */
    firstPage() {
        // hasPreviousPage being false implies at the start
        if (!this.hasPreviousPage()) {
            return;
        }
        const previousPageIndex = this.pageIndex;
        this.pageIndex = 0;
        this._emitPageEvent(previousPageIndex);
    }
    /** Move to the last page if not already there. */
    lastPage() {
        // hasNextPage being false implies at the end
        if (!this.hasNextPage()) {
            return;
        }
        const previousPageIndex = this.pageIndex;
        this.pageIndex = this.getNumberOfPages() - 1;
        this._emitPageEvent(previousPageIndex);
    }
    /** Whether there is a previous page. */
    hasPreviousPage() {
        return this.pageIndex >= 1 && this.pageSize != 0;
    }
    /** Whether there is a next page. */
    hasNextPage() {
        const maxPageIndex = this.getNumberOfPages() - 1;
        return this.pageIndex < maxPageIndex && this.pageSize != 0;
    }
    /** Calculate the number of pages */
    getNumberOfPages() {
        if (!this.pageSize) {
            return 0;
        }
        return Math.ceil(this.length / this.pageSize);
    }
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */
    _changePageSize(pageSize) {
        // Current page needs to be updated to reflect the new page size. Navigate to the page
        // containing the previous page's first item.
        const startIndex = this.pageIndex * this.pageSize;
        const previousPageIndex = this.pageIndex;
        this.pageIndex = Math.floor(startIndex / pageSize) || 0;
        this.pageSize = pageSize;
        this._emitPageEvent(previousPageIndex);
    }
    /** Checks whether the buttons for going forwards should be disabled. */
    _nextButtonsDisabled() {
        return this.disabled || !this.hasNextPage();
    }
    /** Checks whether the buttons for going backwards should be disabled. */
    _previousButtonsDisabled() {
        return this.disabled || !this.hasPreviousPage();
    }
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     */
    _updateDisplayedPageSizeOptions() {
        if (!this._initialized) {
            return;
        }
        // If no page size is provided, use the first page size option or the default page size.
        if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length != 0 ?
                this.pageSizeOptions[0] :
                DEFAULT_PAGE_SIZE;
        }
        this._displayedPageSizeOptions = this.pageSizeOptions.slice();
        if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this._displayedPageSizeOptions.push(this.pageSize);
        }
        // Sort the numbers using a number-specific sort function.
        this._displayedPageSizeOptions.sort((a, b) => a - b);
        this._changeDetectorRef.markForCheck();
    }
    /** Emits an event notifying that a change of the paginator's properties has been triggered. */
    _emitPageEvent(previousPageIndex) {
        this.page.emit({
            previousPageIndex,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length
        });
    }
}
_MatPaginatorBase.ɵfac = function _MatPaginatorBase_Factory(t) { return new (t || _MatPaginatorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined)); };
_MatPaginatorBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatPaginatorBase, inputs: { pageIndex: "pageIndex", length: "length", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", hidePageSize: "hidePageSize", showFirstLastButtons: "showFirstLastButtons", color: "color" }, outputs: { page: "page" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatPaginatorBase.ctorParameters = () => [
    { type: MatPaginatorIntl },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined }
];
_MatPaginatorBase.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    length: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hidePageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    showFirstLastButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatPaginatorBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: MatPaginatorIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined }]; }, { page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hidePageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showFirstLastButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */
class MatPaginator extends _MatPaginatorBase {
    constructor(intl, changeDetectorRef, defaults) {
        super(intl, changeDetectorRef, defaults);
        if (defaults && defaults.formFieldAppearance != null) {
            this._formFieldAppearance = defaults.formFieldAppearance;
        }
    }
}
MatPaginator.ɵfac = function MatPaginator_Factory(t) { return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8)); };
MatPaginator.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatPaginator, selectors: [["mat-paginator"]], hostAttrs: ["role", "group", 1, "mat-paginator"], inputs: { disabled: "disabled" }, exportAs: ["matPaginator"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 14, consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "appearance", "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "appearance", "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]], template: function MatPaginator_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPaginator_div_2_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatPaginator_button_6_Template, 3, 5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() { return ctx.previousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MatPaginator_button_13_Template, 3, 5, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOption], styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}\n"], encapsulation: 2, changeDetection: 0 });
MatPaginator.ctorParameters = () => [
    { type: MatPaginatorIntl },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_PAGINATOR_DEFAULT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-paginator',
                exportAs: 'matPaginator',
                template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [appearance]=\"_formFieldAppearance!\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
                inputs: ['disabled'],
                host: {
                    'class': 'mat-paginator',
                    'role': 'group'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}\n"]
            }]
    }], function () { return [{ type: MatPaginatorIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatPaginatorModule {
}
MatPaginatorModule.ɵfac = function MatPaginatorModule_Factory(t) { return new (t || MatPaginatorModule)(); };
MatPaginatorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatPaginatorModule });
MatPaginatorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_PAGINATOR_INTL_PROVIDER], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule,
                ],
                exports: [MatPaginator],
                declarations: [MatPaginator],
                providers: [MAT_PAGINATOR_INTL_PROVIDER]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPaginatorModule, { declarations: function () { return [MatPaginator]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]; }, exports: function () { return [MatPaginator]; } }); })();

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

/***/ 298:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_TOOLTIP_DEFAULT_OPTIONS": () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS),
/* harmony export */   "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_TOOLTIP_SCROLL_STRATEGY": () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY),
/* harmony export */   "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MatTooltip": () => (/* binding */ MatTooltip),
/* harmony export */   "MatTooltipModule": () => (/* binding */ MatTooltipModule),
/* harmony export */   "SCROLL_THROTTLE_MS": () => (/* binding */ SCROLL_THROTTLE_MS),
/* harmony export */   "TOOLTIP_PANEL_CLASS": () => (/* binding */ TOOLTIP_PANEL_CLASS),
/* harmony export */   "TooltipComponent": () => (/* binding */ TooltipComponent),
/* harmony export */   "_MatTooltipBase": () => (/* binding */ _MatTooltipBase),
/* harmony export */   "_TooltipComponentBase": () => (/* binding */ _TooltipComponentBase),
/* harmony export */   "getMatTooltipInvalidPositionError": () => (/* binding */ getMatTooltipInvalidPositionError),
/* harmony export */   "matTooltipAnimations": () => (/* binding */ matTooltipAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ 657);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 84);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 6145);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ 912);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4094);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5116);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7175);
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by MatTooltip.
 * @docs-private
 */








const matTooltipAnimations = {
    /** Animation that transitions a tooltip in and out. */
    tooltipState: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('state', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('initial, void, hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale(0)' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1)' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale(0)', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0.5, transform: 'scale(0.99)', offset: 0.5 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1)', offset: 1 })
        ]))),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }))),
    ])
};

/** Time in ms to throttle repositioning after scroll events. */
const SCROLL_THROTTLE_MS = 20;
/**
 * CSS class that will be attached to the overlay panel.
 * @deprecated
 * @breaking-change 13.0.0 remove this variable
 */
const TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
const PANEL_CLASS = 'tooltip-panel';
/** Options used to bind passive event listeners. */
const passiveListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.normalizePassiveListenerOptions)({ passive: true });
/**
 * Time between the user putting the pointer on a tooltip
 * trigger and the long press event being fired.
 */
const LONGPRESS_DELAY = 500;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */
function getMatTooltipInvalidPositionError(position) {
    return Error(`Tooltip position "${position}" is invalid.`);
}
/** Injection token that determines the scroll handling while a tooltip is visible. */
const MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-tooltip-scroll-strategy');
/** @docs-private */
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition({ scrollThrottle: SCROLL_THROTTLE_MS });
}
/** @docs-private */
const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_TOOLTIP_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay],
    useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
};
/** Injection token to be used to override the default options for `matTooltip`. */
const MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-tooltip-default-options', {
    providedIn: 'root',
    factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
    return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500,
    };
}
class _MatTooltipBase {
    constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, _document) {
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._ariaDescriber = _ariaDescriber;
        this._focusMonitor = _focusMonitor;
        this._dir = _dir;
        this._defaultOptions = _defaultOptions;
        this._position = 'below';
        this._disabled = false;
        this._viewInitialized = false;
        this._pointerExitEventsInitialized = false;
        this._viewportMargin = 8;
        this._cssClassPrefix = 'mat';
        /** The default delay in ms before showing the tooltip after show is called */
        this.showDelay = this._defaultOptions.showDelay;
        /** The default delay in ms before hiding the tooltip after hide is called */
        this.hideDelay = this._defaultOptions.hideDelay;
        /**
         * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
         * uses a long press gesture to show and hide, however it can conflict with the native browser
         * gestures. To work around the conflict, Angular Material disables native gestures on the
         * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
         * elements). The different values for this option configure the touch event handling as follows:
         * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
         *   browser gestures on particular elements. In particular, it allows text selection on inputs
         *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
         * - `on` - Enables touch gestures for all elements and disables native
         *   browser gestures with no exceptions.
         * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
         *   showing on touch devices.
         */
        this.touchGestures = 'auto';
        this._message = '';
        /** Manually-bound passive event listeners. */
        this._passiveListeners = [];
        /** Emits when the component is destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        /**
         * Handles the keydown events on the host element.
         * Needs to be an arrow function so that we can use it in addEventListener.
         */
        this._handleKeydown = (event) => {
            if (this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.hasModifierKey)(event)) {
                event.preventDefault();
                event.stopPropagation();
                this._ngZone.run(() => this.hide(0));
            }
        };
        this._scrollStrategy = scrollStrategy;
        this._document = _document;
        if (_defaultOptions) {
            if (_defaultOptions.position) {
                this.position = _defaultOptions.position;
            }
            if (_defaultOptions.touchGestures) {
                this.touchGestures = _defaultOptions.touchGestures;
            }
        }
        _dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
            if (this._overlayRef) {
                this._updatePosition(this._overlayRef);
            }
        });
        _ngZone.runOutsideAngular(() => {
            _elementRef.nativeElement.addEventListener('keydown', this._handleKeydown);
        });
    }
    /** Allows the user to define the position of the tooltip relative to the parent element */
    get position() { return this._position; }
    set position(value) {
        var _a;
        if (value !== this._position) {
            this._position = value;
            if (this._overlayRef) {
                this._updatePosition(this._overlayRef);
                (_a = this._tooltipInstance) === null || _a === void 0 ? void 0 : _a.show(0);
                this._overlayRef.updatePosition();
            }
        }
    }
    /** Disables the display of the tooltip. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__.coerceBooleanProperty)(value);
        // If tooltip is disabled, hide immediately.
        if (this._disabled) {
            this.hide(0);
        }
        else {
            this._setupPointerEnterEventsIfNeeded();
        }
    }
    /** The message to be displayed in the tooltip */
    get message() { return this._message; }
    set message(value) {
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message, 'tooltip');
        // If the message is not a string (e.g. number), convert it to a string and trim it.
        // Must convert with `String(value)`, not `${value}`, otherwise Closure Compiler optimises
        // away the string-conversion: https://github.com/angular/components/issues/20684
        this._message = value != null ? String(value).trim() : '';
        if (!this._message && this._isTooltipVisible()) {
            this.hide(0);
        }
        else {
            this._setupPointerEnterEventsIfNeeded();
            this._updateTooltipMessage();
            this._ngZone.runOutsideAngular(() => {
                // The `AriaDescriber` has some functionality that avoids adding a description if it's the
                // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
                // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
                // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
                Promise.resolve().then(() => {
                    this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, 'tooltip');
                });
            });
        }
    }
    /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
    get tooltipClass() { return this._tooltipClass; }
    set tooltipClass(value) {
        this._tooltipClass = value;
        if (this._tooltipInstance) {
            this._setTooltipClass(this._tooltipClass);
        }
    }
    ngAfterViewInit() {
        // This needs to happen after view init so the initial values for all inputs have been set.
        this._viewInitialized = true;
        this._setupPointerEnterEventsIfNeeded();
        this._focusMonitor.monitor(this._elementRef)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed))
            .subscribe(origin => {
            // Note that the focus monitor runs outside the Angular zone.
            if (!origin) {
                this._ngZone.run(() => this.hide(0));
            }
            else if (origin === 'keyboard') {
                this._ngZone.run(() => this.show());
            }
        });
    }
    /**
     * Dispose the tooltip when destroyed.
     */
    ngOnDestroy() {
        const nativeElement = this._elementRef.nativeElement;
        clearTimeout(this._touchstartTimeout);
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._tooltipInstance = null;
        }
        // Clean up the event listeners set in the constructor
        nativeElement.removeEventListener('keydown', this._handleKeydown);
        this._passiveListeners.forEach(([event, listener]) => {
            nativeElement.removeEventListener(event, listener, passiveListenerOptions);
        });
        this._passiveListeners.length = 0;
        this._destroyed.next();
        this._destroyed.complete();
        this._ariaDescriber.removeDescription(nativeElement, this.message, 'tooltip');
        this._focusMonitor.stopMonitoring(nativeElement);
    }
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
    show(delay = this.showDelay) {
        if (this.disabled || !this.message || (this._isTooltipVisible() &&
            !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId)) {
            return;
        }
        const overlayRef = this._createOverlay();
        this._detach();
        this._portal = this._portal ||
            new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.ComponentPortal(this._tooltipComponent, this._viewContainerRef);
        this._tooltipInstance = overlayRef.attach(this._portal).instance;
        this._tooltipInstance.afterHidden()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed))
            .subscribe(() => this._detach());
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage();
        this._tooltipInstance.show(delay);
    }
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
    hide(delay = this.hideDelay) {
        if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
        }
    }
    /** Shows/hides the tooltip */
    toggle() {
        this._isTooltipVisible() ? this.hide() : this.show();
    }
    /** Returns true if the tooltip is currently visible to the user */
    _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }
    /** Create the overlay config and position strategy */
    _createOverlay() {
        if (this._overlayRef) {
            return this._overlayRef;
        }
        const scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);
        // Create connected position strategy that listens for scroll events to reposition.
        const strategy = this._overlay.position()
            .flexibleConnectedTo(this._elementRef)
            .withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`)
            .withFlexibleDimensions(false)
            .withViewportMargin(this._viewportMargin)
            .withScrollableContainers(scrollableAncestors);
        strategy.positionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(change => {
            this._updateCurrentPositionClass(change.connectionPair);
            if (this._tooltipInstance) {
                if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
                    // After position changes occur and the overlay is clipped by
                    // a parent scrollable then close the tooltip.
                    this._ngZone.run(() => this.hide(0));
                }
            }
        });
        this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: `${this._cssClassPrefix}-${PANEL_CLASS}`,
            scrollStrategy: this._scrollStrategy()
        });
        this._updatePosition(this._overlayRef);
        this._overlayRef.detachments()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed))
            .subscribe(() => this._detach());
        this._overlayRef.outsidePointerEvents()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed))
            .subscribe(() => { var _a; return (_a = this._tooltipInstance) === null || _a === void 0 ? void 0 : _a._handleBodyInteraction(); });
        return this._overlayRef;
    }
    /** Detaches the currently-attached tooltip. */
    _detach() {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
        this._tooltipInstance = null;
    }
    /** Updates the position of the current tooltip. */
    _updatePosition(overlayRef) {
        const position = overlayRef.getConfig().positionStrategy;
        const origin = this._getOrigin();
        const overlay = this._getOverlayPosition();
        position.withPositions([
            this._addOffset(Object.assign(Object.assign({}, origin.main), overlay.main)),
            this._addOffset(Object.assign(Object.assign({}, origin.fallback), overlay.fallback))
        ]);
    }
    /** Adds the configured offset to a position. Used as a hook for child classes. */
    _addOffset(position) {
        return position;
    }
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */
    _getOrigin() {
        const isLtr = !this._dir || this._dir.value == 'ltr';
        const position = this.position;
        let originPosition;
        if (position == 'above' || position == 'below') {
            originPosition = { originX: 'center', originY: position == 'above' ? 'top' : 'bottom' };
        }
        else if (position == 'before' ||
            (position == 'left' && isLtr) ||
            (position == 'right' && !isLtr)) {
            originPosition = { originX: 'start', originY: 'center' };
        }
        else if (position == 'after' ||
            (position == 'right' && isLtr) ||
            (position == 'left' && !isLtr)) {
            originPosition = { originX: 'end', originY: 'center' };
        }
        else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(originPosition.originX, originPosition.originY);
        return {
            main: originPosition,
            fallback: { originX: x, originY: y }
        };
    }
    /** Returns the overlay position and a fallback position based on the user's preference */
    _getOverlayPosition() {
        const isLtr = !this._dir || this._dir.value == 'ltr';
        const position = this.position;
        let overlayPosition;
        if (position == 'above') {
            overlayPosition = { overlayX: 'center', overlayY: 'bottom' };
        }
        else if (position == 'below') {
            overlayPosition = { overlayX: 'center', overlayY: 'top' };
        }
        else if (position == 'before' ||
            (position == 'left' && isLtr) ||
            (position == 'right' && !isLtr)) {
            overlayPosition = { overlayX: 'end', overlayY: 'center' };
        }
        else if (position == 'after' ||
            (position == 'right' && isLtr) ||
            (position == 'left' && !isLtr)) {
            overlayPosition = { overlayX: 'start', overlayY: 'center' };
        }
        else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
        return {
            main: overlayPosition,
            fallback: { overlayX: x, overlayY: y }
        };
    }
    /** Updates the tooltip message and repositions the overlay according to the new message length */
    _updateTooltipMessage() {
        // Must wait for the message to be painted to the tooltip so that the overlay can properly
        // calculate the correct positioning based on the size of the text.
        if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;
            this._tooltipInstance._markForCheck();
            this._ngZone.onMicrotaskEmpty.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
                if (this._tooltipInstance) {
                    this._overlayRef.updatePosition();
                }
            });
        }
    }
    /** Updates the tooltip class */
    _setTooltipClass(tooltipClass) {
        if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;
            this._tooltipInstance._markForCheck();
        }
    }
    /** Inverts an overlay position. */
    _invertPosition(x, y) {
        if (this.position === 'above' || this.position === 'below') {
            if (y === 'top') {
                y = 'bottom';
            }
            else if (y === 'bottom') {
                y = 'top';
            }
        }
        else {
            if (x === 'end') {
                x = 'start';
            }
            else if (x === 'start') {
                x = 'end';
            }
        }
        return { x, y };
    }
    /** Updates the class on the overlay panel based on the current position of the tooltip. */
    _updateCurrentPositionClass(connectionPair) {
        const { overlayY, originX, originY } = connectionPair;
        let newPosition;
        // If the overlay is in the middle along the Y axis,
        // it means that it's either before or after.
        if (overlayY === 'center') {
            // Note that since this information is used for styling, we want to
            // resolve `start` and `end` to their real values, otherwise consumers
            // would have to remember to do it themselves on each consumption.
            if (this._dir && this._dir.value === 'rtl') {
                newPosition = originX === 'end' ? 'left' : 'right';
            }
            else {
                newPosition = originX === 'start' ? 'left' : 'right';
            }
        }
        else {
            newPosition = overlayY === 'bottom' && originY === 'top' ? 'above' : 'below';
        }
        if (newPosition !== this._currentPosition) {
            const overlayRef = this._overlayRef;
            if (overlayRef) {
                const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
                overlayRef.removePanelClass(classPrefix + this._currentPosition);
                overlayRef.addPanelClass(classPrefix + newPosition);
            }
            this._currentPosition = newPosition;
        }
    }
    /** Binds the pointer events to the tooltip trigger. */
    _setupPointerEnterEventsIfNeeded() {
        // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
        if (this._disabled || !this.message || !this._viewInitialized ||
            this._passiveListeners.length) {
            return;
        }
        // The mouse events shouldn't be bound on mobile devices, because they can prevent the
        // first tap from firing its click event or can cause the tooltip to open for clicks.
        if (this._platformSupportsMouseEvents()) {
            this._passiveListeners
                .push(['mouseenter', () => {
                    this._setupPointerExitEventsIfNeeded();
                    this.show();
                }]);
        }
        else if (this.touchGestures !== 'off') {
            this._disableNativeGesturesIfNecessary();
            this._passiveListeners
                .push(['touchstart', () => {
                    // Note that it's important that we don't `preventDefault` here,
                    // because it can prevent click events from firing on the element.
                    this._setupPointerExitEventsIfNeeded();
                    clearTimeout(this._touchstartTimeout);
                    this._touchstartTimeout = setTimeout(() => this.show(), LONGPRESS_DELAY);
                }]);
        }
        this._addListeners(this._passiveListeners);
    }
    _setupPointerExitEventsIfNeeded() {
        if (this._pointerExitEventsInitialized) {
            return;
        }
        this._pointerExitEventsInitialized = true;
        const exitListeners = [];
        if (this._platformSupportsMouseEvents()) {
            exitListeners.push(['mouseleave', () => this.hide()], ['wheel', event => this._wheelListener(event)]);
        }
        else if (this.touchGestures !== 'off') {
            this._disableNativeGesturesIfNecessary();
            const touchendListener = () => {
                clearTimeout(this._touchstartTimeout);
                this.hide(this._defaultOptions.touchendHideDelay);
            };
            exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
        }
        this._addListeners(exitListeners);
        this._passiveListeners.push(...exitListeners);
    }
    _addListeners(listeners) {
        listeners.forEach(([event, listener]) => {
            this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
        });
    }
    _platformSupportsMouseEvents() {
        return !this._platform.IOS && !this._platform.ANDROID;
    }
    /** Listener for the `wheel` event on the element. */
    _wheelListener(event) {
        if (this._isTooltipVisible()) {
            const elementUnderPointer = this._document.elementFromPoint(event.clientX, event.clientY);
            const element = this._elementRef.nativeElement;
            // On non-touch devices we depend on the `mouseleave` event to close the tooltip, but it
            // won't fire if the user scrolls away using the wheel without moving their cursor. We
            // work around it by finding the element under the user's cursor and closing the tooltip
            // if it's not the trigger.
            if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
                this.hide();
            }
        }
    }
    /** Disables the native browser gestures, based on how the tooltip has been configured. */
    _disableNativeGesturesIfNecessary() {
        const gestures = this.touchGestures;
        if (gestures !== 'off') {
            const element = this._elementRef.nativeElement;
            const style = element.style;
            // If gestures are set to `auto`, we don't disable text selection on inputs and
            // textareas, because it prevents the user from typing into them on iOS Safari.
            if (gestures === 'on' || (element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA')) {
                style.userSelect = style.msUserSelect = style.webkitUserSelect =
                    style.MozUserSelect = 'none';
            }
            // If we have `auto` gestures and the element uses native HTML dragging,
            // we don't set `-webkit-user-drag` because it prevents the native behavior.
            if (gestures === 'on' || !element.draggable) {
                style.webkitUserDrag = 'none';
            }
            style.touchAction = 'none';
            style.webkitTapHighlightColor = 'transparent';
        }
    }
}
_MatTooltipBase.ɵfac = function _MatTooltipBase_Factory(t) { return new (t || _MatTooltipBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT)); };
_MatTooltipBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: _MatTooltipBase, inputs: { showDelay: ["matTooltipShowDelay", "showDelay"], hideDelay: ["matTooltipHideDelay", "hideDelay"], touchGestures: ["matTooltipTouchGestures", "touchGestures"], position: ["matTooltipPosition", "position"], disabled: ["matTooltipDisabled", "disabled"], message: ["matTooltip", "message"], tooltipClass: ["matTooltipClass", "tooltipClass"] } });
_MatTooltipBase.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor },
    { type: undefined },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality },
    { type: undefined },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT,] }] }
];
_MatTooltipBase.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['matTooltipPosition',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['matTooltipDisabled',] }],
    showDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['matTooltipShowDelay',] }],
    hideDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['matTooltipHideDelay',] }],
    touchGestures: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['matTooltipTouchGestures',] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['matTooltip',] }],
    tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['matTooltipClass',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTooltipBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor }, { type: undefined }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality }, { type: undefined }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT]
            }] }]; }, { showDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipShowDelay']
        }], hideDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipHideDelay']
        }], touchGestures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipTouchGestures']
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipPosition']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipDisabled']
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltip']
        }], tooltipClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipClass']
        }] }); })();
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */
class MatTooltip extends _MatTooltipBase {
    constructor(overlay, elementRef, scrollDispatcher, viewContainerRef, ngZone, platform, ariaDescriber, focusMonitor, scrollStrategy, dir, defaultOptions, _document) {
        super(overlay, elementRef, scrollDispatcher, viewContainerRef, ngZone, platform, ariaDescriber, focusMonitor, scrollStrategy, dir, defaultOptions, _document);
        this._tooltipComponent = TooltipComponent;
    }
}
MatTooltip.ɵfac = function MatTooltip_Factory(t) { return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT)); };
MatTooltip.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatTooltip, selectors: [["", "matTooltip", ""]], hostAttrs: [1, "mat-tooltip-trigger"], exportAs: ["matTooltip"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
MatTooltip.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [MAT_TOOLTIP_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [MAT_TOOLTIP_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatTooltip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[matTooltip]',
                exportAs: 'matTooltip',
                host: {
                    'class': 'mat-tooltip-trigger'
                }
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [MAT_TOOLTIP_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT]
            }] }]; }, null); })();
class _TooltipComponentBase {
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        /** Property watched by the animation framework to show or hide the tooltip */
        this._visibility = 'initial';
        /** Whether interactions on the page should close the tooltip */
        this._closeOnInteraction = false;
        /** Subject for notifying that the tooltip has been hidden from the view */
        this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param delay Amount of milliseconds to the delay showing the tooltip.
     */
    show(delay) {
        // Cancel the delayed hide if it is scheduled
        clearTimeout(this._hideTimeoutId);
        // Body interactions should cancel the tooltip if there is a delay in showing.
        this._closeOnInteraction = true;
        this._showTimeoutId = setTimeout(() => {
            this._visibility = 'visible';
            this._showTimeoutId = undefined;
            this._onShow();
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            this._markForCheck();
        }, delay);
    }
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */
    hide(delay) {
        // Cancel the delayed show if it is scheduled
        clearTimeout(this._showTimeoutId);
        this._hideTimeoutId = setTimeout(() => {
            this._visibility = 'hidden';
            this._hideTimeoutId = undefined;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            this._markForCheck();
        }, delay);
    }
    /** Returns an observable that notifies when the tooltip has been hidden from view. */
    afterHidden() {
        return this._onHide;
    }
    /** Whether the tooltip is being displayed. */
    isVisible() {
        return this._visibility === 'visible';
    }
    ngOnDestroy() {
        clearTimeout(this._showTimeoutId);
        clearTimeout(this._hideTimeoutId);
        this._onHide.complete();
    }
    _animationStart() {
        this._closeOnInteraction = false;
    }
    _animationDone(event) {
        const toState = event.toState;
        if (toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
        }
        if (toState === 'visible' || toState === 'hidden') {
            this._closeOnInteraction = true;
        }
    }
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     */
    _handleBodyInteraction() {
        if (this._closeOnInteraction) {
            this.hide(0);
        }
    }
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */
    _markForCheck() {
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Callback for when the timeout in this.show() gets completed.
     * This method is only needed by the mdc-tooltip, and so it is only implemented
     * in the mdc-tooltip, not here.
     */
    _onShow() { }
}
_TooltipComponentBase.ɵfac = function _TooltipComponentBase_Factory(t) { return new (t || _TooltipComponentBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
_TooltipComponentBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: _TooltipComponentBase });
_TooltipComponentBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_TooltipComponentBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }]; }, null); })();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */
class TooltipComponent extends _TooltipComponentBase {
    constructor(changeDetectorRef, _breakpointObserver) {
        super(changeDetectorRef);
        this._breakpointObserver = _breakpointObserver;
        /** Stream that emits whether the user has a handset-sized display.  */
        this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.Breakpoints.Handset);
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver)); };
TooltipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["mat-tooltip-component"]], hostAttrs: ["aria-hidden", "true"], hostVars: 2, hostBindings: function TooltipComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 7, consts: [[1, "mat-tooltip", 3, "ngClass"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() { return ctx._animationStart(); })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) { return ctx._animationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-tooltip-handset", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"], encapsulation: 2, data: { animation: [matTooltipAnimations.tooltipState] }, changeDetection: 0 });
TooltipComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'mat-tooltip-component',
                template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
                animations: [matTooltipAnimations.tooltipState],
                host: {
                    // Forces the element to have a layout in IE and Edge. This fixes issues where the element
                    // won't be rendered if the animations are disabled or there is no web animations polyfill.
                    '[style.zoom]': '_visibility === "visible" ? 1 : null',
                    'aria-hidden': 'true'
                },
                styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatTooltipModule {
}
MatTooltipModule.ɵfac = function MatTooltipModule_Factory(t) { return new (t || MatTooltipModule)(); };
MatTooltipModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatTooltipModule });
MatTooltipModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule,
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkScrollableModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatTooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule,
                ],
                exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkScrollableModule],
                declarations: [MatTooltip, TooltipComponent],
                entryComponents: [TooltipComponent],
                providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatTooltipModule, { declarations: function () { return [MatTooltip, TooltipComponent]; }, imports: function () { return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule]; }, exports: function () { return [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkScrollableModule]; } }); })();

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

/***/ 5486:
/*!******************************************************************!*\
  !*** ./src/app/pages/shop/components/filter/filter.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4094);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _store_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/list */ 5881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_controls_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/controls/form-field/form-field.component */ 7195);
/* harmony import */ var _shared_controls_select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/controls/select/select.component */ 8860);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);











function FilterComponent_mat_list_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.label);
} }
function FilterComponent_mat_list_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.label);
} }
const _c0 = function () { return []; };
class FilterComponent {
    constructor(store, fb) {
        this.store = store;
        this.fb = fb;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        var _a, _b;
        this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy)).pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_store_list__WEBPACK_IMPORTED_MODULE_0__.getPaginationRequest))
            .subscribe((data) => {
            this.paginatorParams = data;
        });
        this.categories = (_a = this.dictionaries) === null || _a === void 0 ? void 0 : _a.categories.controlItems;
        this.marca = (_b = this.dictionaries) === null || _b === void 0 ? void 0 : _b.marca.controlItems;
        this.items = [
            { value: 'nombreAsc', label: 'Nombre' },
            { value: 'precioAsc', label: 'Precio' },
            { value: 'descripcionAsc', label: 'Descripcion' },
        ];
        this.form = this.fb.group({
            sort: [null, {
                    updateOn: 'change', validators: []
                }],
            categoria: null,
            marca: null
        });
        this.controls = {
            sort: {
                items: this.items,
                changed: () => {
                    this.paginatorParams = this.paginatorParams.delete('sort');
                    this.paginatorParams = this.paginatorParams.set('sort', this.form.value.sort);
                    this.store.dispatch(new _store_list__WEBPACK_IMPORTED_MODULE_0__.Read(this.paginatorParams, this.paginatorParams.toString()));
                }
            },
        };
    }
    onCategoriaSelectionChange(ob) {
        var _a;
        this.paginatorParams = this.paginatorParams.delete('categoria');
        this.paginatorParams = this.paginatorParams.set('categoria', (_a = this.form.get('categoria')) === null || _a === void 0 ? void 0 : _a.value);
        this.store.dispatch(new _store_list__WEBPACK_IMPORTED_MODULE_0__.Read(this.paginatorParams, this.paginatorParams.toString()));
    }
    onMarcaSelectionChange(ob) {
        var _a;
        this.paginatorParams = this.paginatorParams.delete('marca');
        this.paginatorParams = this.paginatorParams.set('marca', (_a = this.form.get('marca')) === null || _a === void 0 ? void 0 : _a.value);
        this.store.dispatch(new _store_list__WEBPACK_IMPORTED_MODULE_0__.Read(this.paginatorParams, this.paginatorParams.toString()));
    }
    ngOnDestroy() {
        this.destroy.next(null);
        this.destroy.complete();
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder)); };
FilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], inputs: { dictionaries: "dictionaries" }, decls: 14, vars: 9, consts: [["novalidate", "", "autocomplete", "off", 3, "formGroup"], [1, "filter"], ["label", "Ordenar por:", 3, "control", "isInline"], ["formControlName", "sort", 3, "items", "changed"], ["formControlName", "marca", 3, "multiple", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "categoria", 3, "multiple", "selectionChange"], [3, "value"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changed", function FilterComponent_Template_app_select_changed_3_listener() { return ctx.controls.sort.changed ? ctx.controls.sort.changed() : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Seleccione Marca");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-selection-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function FilterComponent_Template_mat_selection_list_selectionChange_7_listener($event) { return ctx.onMarcaSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FilterComponent_mat_list_option_8_Template, 2, 2, "mat-list-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Seleccione Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-selection-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function FilterComponent_Template_mat_selection_list_selectionChange_12_listener($event) { return ctx.onCategoriaSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, FilterComponent_mat_list_option_13_Template, 2, 2, "mat-list-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.form.controls.sort)("isInline", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.controls.sort.items ? ctx.controls.sort.items : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.marca);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _shared_controls_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__.FormFieldComponent, _shared_controls_select_select_component__WEBPACK_IMPORTED_MODULE_2__.SelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListOption], styles: [".filter[_ngcontent-%COMP%] {\n  padding: 32px;\n  background: #fafafa;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxtaXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ0tFLGFBQUE7RUFDQSxtQkNSSztFRFNMLGtCQUFBO0VBTkEsd0NBQUE7RURDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVGIiwiZmlsZSI6ImZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvbWl4aW5zXCI7XHJcblxyXG4uZmlsdGVyIHtcclxuICBAaW5jbHVkZSBjYXJkO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcblxuQG1peGluIHNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbkBtaXhpbiBjYXJke1xuICBwYWRkaW5nOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiAkYmFzZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBAaW5jbHVkZSBzaGFkb3c7XG59XG4iLCIkYmFzZTogI2ZhZmFmYTtcbiRiYXNlLWRhcms6ICNlMGUwZTA7XG4kYmFzZS1saWdodDogI2ZmZmZmZjtcbiRvbi1iYXNlOiAjMDAwMDAwO1xuXG4kcHJpbWFyeTogIzAyNzdiZDtcbiRwcmltYXJ5LWRhcms6ICMwMDRjOGM7XG4kcHJpbWFyeS1saWdodDogIzU4YTVmMDtcbiRvbi1wcmltYXJ5OiAjZmZmZmZmO1xuXG4kc2Vjb25kYXJ5OiAjZjQ0MzM2O1xuJHNlY29uZGFyeS1kYXJrOiAjYjkwMDA3O1xuJHNlY29uZGFyeS1saWdodDogI2ZmNzk1ZDtcbiRvbi1zZWNvbmRhcnk6ICNmZmZmZmY7XG5cbiRlcnJvcjogI0IwMDAyMDtcbiRvbi1lcnJvcjogI2ZmZmZmZjtcblxuJHN1Y2Nlc3M6ICM5OWFhMDA7XG4kb24tc3VjY2VzczogI2ZmZmZmZjtcblxuXG4iXX0= */"] });


/***/ }),

/***/ 7701:
/*!************************************************************************!*\
  !*** ./src/app/pages/shop/components/paginator/paginator.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatorComponent": () => (/* binding */ PaginatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _store_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/list */ 5881);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);








class PaginatorComponent {
    constructor(store) {
        this.store = store;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.pageCount = 0;
        this.pageSize = 10;
        this.pageCombo = [1, 2, 5, 10];
        this.sort = "nombreAsc";
    }
    ngOnInit() {
        this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy)).pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_list__WEBPACK_IMPORTED_MODULE_0__.getPaginationRequest))
            .subscribe((data) => {
            this.paginatorParams = data;
        });
        this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy)).pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_list__WEBPACK_IMPORTED_MODULE_0__.getShop))
            .subscribe((data) => {
            this.pageSize = data.pageSize;
            this.pageCount = data.count;
            if (this.matPaginator) {
                this.matPaginator.pageIndex = data.pageIndex - 1;
            }
        });
    }
    eventoPaginator(event) {
        this.paginatorParams = this.paginatorParams.delete('pageIndex');
        this.paginatorParams = this.paginatorParams.delete('pageSize');
        this.paginatorParams = this.paginatorParams.set('pageIndex', event.pageIndex + 1);
        this.paginatorParams = this.paginatorParams.set('pageSize', event.pageSize);
        this.store.dispatch(new _store_list__WEBPACK_IMPORTED_MODULE_0__.Read(this.paginatorParams, this.paginatorParams.toString()));
    }
    ngOnDestroy() {
        this.destroy.next(null);
        this.destroy.complete();
    }
}
PaginatorComponent.ɵfac = function PaginatorComponent_Factory(t) { return new (t || PaginatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
PaginatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PaginatorComponent, selectors: [["app-paginator"]], viewQuery: function PaginatorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.matPaginator = _t.first);
    } }, inputs: { pagination: "pagination" }, decls: 2, vars: 3, consts: [[3, "pageSize", "pageSizeOptions", "length", "page"], ["matPaginator", ""]], template: function PaginatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-paginator", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function PaginatorComponent_Template_mat_paginator_page_0_listener($event) { return ctx.eventoPaginator($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageCombo)("length", ctx.pageCount);
    } }, directives: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2871:
/*!********************************************************************!*\
  !*** ./src/app/pages/shop/components/product/product.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 2, vars: 0, template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5205:
/*!**********************************************************************!*\
  !*** ./src/app/pages/shop/components/products/products.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);





function ProductsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.categoriaNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r1.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", product_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", product_r1.id, "");
} }
class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], inputs: { products: "products" }, decls: 2, vars: 1, consts: [[1, "cards"], ["class", "cards__item", 4, "ngFor", "ngForOf"], [1, "cards__item"], [1, "mat-class"], ["mat-card-image", "", 3, "src", "alt"], ["mat-button", "", 3, "routerLink"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_li_1_Template, 14, 6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: [".cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.cards__item[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1rem;\n}\n.mat-class[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 400px;\n  height: 73%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDRTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBQ047QUFHQTtFQUNJLGdCQUFBO0FBQUo7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBRiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46MCA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgJl9faXRlbXtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY2xhc3Mge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxubWF0LWNhcmQgaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA3MyU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2073:
/*!******************************************************************!*\
  !*** ./src/app/pages/shop/components/search/search.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 931);
/* harmony import */ var _store_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/list */ 5881);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_controls_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/controls/form-field/form-field.component */ 7195);
/* harmony import */ var _shared_controls_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/controls/input/input.component */ 6840);
/* harmony import */ var _shared_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/buttons/button/button.component */ 5667);










class SearchComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy)).pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_store_list__WEBPACK_IMPORTED_MODULE_0__.getPaginationRequest))
            .subscribe((data) => {
            this.paginatorParams = data;
        });
        this.form = this.fb.group({
            search: [null, {
                    updateOn: 'change', validators: []
                }]
        });
    }
    onSubmit() {
        const value = this.form.value;
        this.paginatorParams = this.paginatorParams.delete('search');
        this.paginatorParams = this.paginatorParams.delete('pageIndex');
        this.paginatorParams = this.paginatorParams.set('pageIndex', 1);
        if (value.search !== null && value.search.trim() !== '') {
            this.paginatorParams = this.paginatorParams.set('search', value.search.trim());
        }
        this.store.dispatch(new _store_list__WEBPACK_IMPORTED_MODULE_0__.Read(this.paginatorParams, this.paginatorParams.toString()));
    }
    ngOnDestroy() {
        this.destroy.next(null);
        this.destroy.complete();
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 7, vars: 3, consts: [["autocomplete", "off", 3, "formGroup", "submit", "keyup.enter"], [1, "form__textfield"], ["label", "", 3, "control", "isInline"], ["formControlName", "search"], [1, "form__actions"], ["type", "submit"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function SearchComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); })("keyup.enter", function SearchComponent_Template_form_keyup_enter_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.form.controls.search)("isInline", false);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _shared_controls_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__.FormFieldComponent, _shared_controls_input_input_component__WEBPACK_IMPORTED_MODULE_2__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_buttons_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent], styles: [".form[_ngcontent-%COMP%] {\n  display: flex;\n}\n.form__textfield[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.form__actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7QUFBRjtBQUVFO0VBQ0Usb0JBQUE7QUFBSjtBQUdFO0VBQ0Usb0JBQUE7QUFESiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICZfX3RleHRmaWVsZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB9XHJcblxyXG4gICZfX2FjdGlvbnMge1xyXG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7700:
/*!***************************************************!*\
  !*** ./src/app/pages/shop/shop-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopRoutingModule": () => (/* binding */ ShopRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.component */ 9708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _shop_component__WEBPACK_IMPORTED_MODULE_0__.ShopComponent
    }
];
class ShopRoutingModule {
}
ShopRoutingModule.ɵfac = function ShopRoutingModule_Factory(t) { return new (t || ShopRoutingModule)(); };
ShopRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ShopRoutingModule });
ShopRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShopRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9708:
/*!**********************************************!*\
  !*** ./src/app/pages/shop/shop.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopComponent": () => (/* binding */ ShopComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _store_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/list */ 5881);
/* harmony import */ var _app_store_dictionaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/store/dictionaries */ 9697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search/search.component */ 2073);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filter/filter.component */ 5486);
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paginator/paginator.component */ 7701);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/products.component */ 5205);
/* harmony import */ var _shared_indicators_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/indicators/spinner/spinner.component */ 3733);












function ShopComponent_app_filter_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-filter", 9);
} if (rf & 2) {
    const dictionaries_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dictionaries", dictionaries_r4);
} }
function ShopComponent_app_paginator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-paginator", 10);
} if (rf & 2) {
    const pagination_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pagination", pagination_r5);
} }
function ShopComponent_app_products_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-products", 11);
} if (rf & 2) {
    const pagination_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("products", pagination_r6.data);
} }
function ShopComponent_app_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-spinner");
} }
class ShopComponent {
    constructor(store, storeRoot) {
        this.store = store;
        this.storeRoot = storeRoot;
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams();
    }
    ngOnInit() {
        this.loading$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(_store_list__WEBPACK_IMPORTED_MODULE_0__.getLoading));
        this.pagination$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(_store_list__WEBPACK_IMPORTED_MODULE_0__.getShop));
        this.dictionaries$ = this.storeRoot.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(_app_store_dictionaries__WEBPACK_IMPORTED_MODULE_1__.getDictionaries));
        this.params = this.params.set('pageIndex', 1);
        this.params = this.params.set('pageSize', 10);
        this.store.dispatch(new _store_list__WEBPACK_IMPORTED_MODULE_0__.Read(this.params, this.params.toString()));
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store)); };
ShopComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], decls: 14, vars: 12, consts: [[1, "container"], [1, "filter"], [3, "dictionaries", 4, "ngIf"], [1, "pagination"], [3, "pagination", 4, "ngIf"], [1, "buscador"], [1, "productos"], [3, "products", 4, "ngIf"], [4, "ngIf"], [3, "dictionaries"], [3, "pagination"], [3, "products"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ShopComponent_app_filter_2_Template, 1, 1, "app-filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ShopComponent_app_paginator_5_Template, 1, 1, "app-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ShopComponent_app_products_10_Template, 1, 1, "app-products", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ShopComponent_app_spinner_12_Template, 1, 0, "app-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, ctx.dictionaries$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 6, ctx.pagination$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 8, ctx.pagination$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 10, ctx.loading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__.FilterComponent, _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__.ProductsComponent, _shared_indicators_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 5px;\n  justify-content: stretch;\n  align-content: stretch;\n  grid-template-columns: 300px 1fr 1fr;\n  grid-template-rows: 60px 1fr;\n  grid-template-areas: \"filter pagination buscador\" \"filter productos productos\";\n}\n\n.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n\n.filter[_ngcontent-%COMP%] {\n  grid-area: filter;\n}\n\n.buscador[_ngcontent-%COMP%] {\n  grid-area: buscador;\n  justify-self: end;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  grid-area: pagination;\n  justify-self: start;\n}\n\n.productos[_ngcontent-%COMP%] {\n  grid-area: productos;\n}\n\n@media screen and (max-width: 500px) {\n  .container[_ngcontent-%COMP%] {\n    grid-gap: 5px;\n    display: grid;\n    justify-content: stretch;\n    align-content: stretch;\n    grid-template-columns: 1fr;\n    grid-template-rows: 60px 60px 1fr;\n    grid-template-areas: \"buscador\" \"pagination\" \"productos\";\n  }\n\n  .filter[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEVBQUE7QUFDRjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBS0E7RUFDRSxtQkFBQTtFQUVBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUVBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxvQkFBQTtBQUpGOztBQVFBO0VBQ0k7SUFDRSxhQUFBO0lBQ0EsYUFBQTtJQUNBLHdCQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtJQUNBLGlDQUFBO0lBQ0Esd0RBQUE7RUFMSjs7RUFVRTtJQUNFLGFBQUE7RUFQSjtBQUNGIiwiZmlsZSI6InNob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImZpbHRlciBwYWdpbmF0aW9uIGJ1c2NhZG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBcImZpbHRlciBwcm9kdWN0b3MgcHJvZHVjdG9zXCI7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyID4gZGl2IHtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIGdyaWQtYXJlYTogZmlsdGVyO1xyXG4gIC8vIGJhY2tncm91bmQ6ICNCNkQ3QTg7XHJcbn1cclxuXHJcbi5idXNjYWRvciB7XHJcbiAgZ3JpZC1hcmVhOiBidXNjYWRvcjtcclxuICAvLyBiYWNrZ3JvdW5kOiAjRDlEMkU5O1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbntcclxuICBncmlkLWFyZWE6IHBhZ2luYXRpb247XHJcbiAgLy8gYmFja2dyb3VuZDogI0QwRTBFMztcclxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG4ucHJvZHVjdG9zIHtcclxuICBncmlkLWFyZWE6IHByb2R1Y3RvcztcclxuICAvLyBiYWNrZ3JvdW5kOiAjRkZGMkNDO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGdyaWQtZ2FwOiA1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICAgICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCA2MHB4IDFmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJidXNjYWRvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFnaW5hdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdG9zXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlcntcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1159:
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopModule": () => (/* binding */ ShopModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop-routing.module */ 7700);
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.component */ 9708);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter/filter.component */ 5486);
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paginator/paginator.component */ 7701);
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product/product.component */ 2871);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/products.component */ 5205);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ 2073);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ 275);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ 8206);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _app_shared_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/buttons */ 2341);
/* harmony import */ var _app_shared_indicators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/indicators */ 9299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _app_shared_controls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/controls */ 7150);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);























class ShopModule {
}
ShopModule.ɵfac = function ShopModule_Factory(t) { return new (t || ShopModule)(); };
ShopModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ShopModule });
ShopModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopRoutingModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreModule.forFeature('shop', _store__WEBPACK_IMPORTED_MODULE_7__.reducers),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.EffectsModule.forFeature(_store__WEBPACK_IMPORTED_MODULE_7__.effects),
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_10__.FormFieldModule,
            _app_shared_buttons__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
            _app_shared_indicators__WEBPACK_IMPORTED_MODULE_9__.SpinnerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_10__.SelectModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
            _app_shared_controls__WEBPACK_IMPORTED_MODULE_10__.InputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ShopModule, { declarations: [_shop_component__WEBPACK_IMPORTED_MODULE_1__.ShopComponent,
        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__.FilterComponent,
        _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__.PaginatorComponent,
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__.ProductComponent,
        _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__.ProductsComponent,
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__.SearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopRoutingModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.EffectsFeatureModule, _app_shared_controls__WEBPACK_IMPORTED_MODULE_10__.FormFieldModule,
        _app_shared_buttons__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
        _app_shared_indicators__WEBPACK_IMPORTED_MODULE_9__.SpinnerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
        _app_shared_controls__WEBPACK_IMPORTED_MODULE_10__.SelectModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
        _app_shared_controls__WEBPACK_IMPORTED_MODULE_10__.InputModule] }); })();


/***/ }),

/***/ 8206:
/*!*******************************************!*\
  !*** ./src/app/pages/shop/store/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "effects": () => (/* binding */ effects),
/* harmony export */   "getShopState": () => (/* binding */ getShopState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _list_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list.reducer */ 5075);
/* harmony import */ var _list_list_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.effects */ 4889);



const reducers = {
    list: _list_list_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer
};
const effects = [
    _list_list_effects__WEBPACK_IMPORTED_MODULE_1__.ListEffects
];
const getShopState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('shop');


/***/ }),

/***/ 5881:
/*!************************************************!*\
  !*** ./src/app/pages/shop/store/list/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Read": () => (/* reexport safe */ _list_actions__WEBPACK_IMPORTED_MODULE_0__.Read),
/* harmony export */   "ReadError": () => (/* reexport safe */ _list_actions__WEBPACK_IMPORTED_MODULE_0__.ReadError),
/* harmony export */   "ReadSuccess": () => (/* reexport safe */ _list_actions__WEBPACK_IMPORTED_MODULE_0__.ReadSuccess),
/* harmony export */   "Types": () => (/* reexport safe */ _list_actions__WEBPACK_IMPORTED_MODULE_0__.Types),
/* harmony export */   "ListEffects": () => (/* reexport safe */ _list_effects__WEBPACK_IMPORTED_MODULE_1__.ListEffects),
/* harmony export */   "initialState": () => (/* reexport safe */ _list_reducer__WEBPACK_IMPORTED_MODULE_2__.initialState),
/* harmony export */   "reducer": () => (/* reexport safe */ _list_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   "getListState": () => (/* reexport safe */ _list_selectors__WEBPACK_IMPORTED_MODULE_3__.getListState),
/* harmony export */   "getLoading": () => (/* reexport safe */ _list_selectors__WEBPACK_IMPORTED_MODULE_3__.getLoading),
/* harmony export */   "getPaginationRequest": () => (/* reexport safe */ _list_selectors__WEBPACK_IMPORTED_MODULE_3__.getPaginationRequest),
/* harmony export */   "getShop": () => (/* reexport safe */ _list_selectors__WEBPACK_IMPORTED_MODULE_3__.getShop)
/* harmony export */ });
/* harmony import */ var _list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.actions */ 9869);
/* harmony import */ var _list_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.effects */ 4889);
/* harmony import */ var _list_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.reducer */ 5075);
/* harmony import */ var _list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.selectors */ 1532);
/* harmony import */ var _list_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list.models */ 93);







/***/ }),

/***/ 9869:
/*!*******************************************************!*\
  !*** ./src/app/pages/shop/store/list/list.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Types": () => (/* binding */ Types),
/* harmony export */   "Read": () => (/* binding */ Read),
/* harmony export */   "ReadSuccess": () => (/* binding */ ReadSuccess),
/* harmony export */   "ReadError": () => (/* binding */ ReadError)
/* harmony export */ });
var Types;
(function (Types) {
    Types["READ"] = "[Producto] Read: Start";
    Types["READ_SUCCESS"] = "[Producto] Read: Success";
    Types["READ_ERROR"] = "[Producto] Read: Error";
})(Types || (Types = {}));
class Read {
    constructor(paginationRequest, paramsUrl) {
        this.paginationRequest = paginationRequest;
        this.paramsUrl = paramsUrl;
        this.type = Types.READ;
    }
}
class ReadSuccess {
    constructor(pagination) {
        this.pagination = pagination;
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

/***/ 4889:
/*!*******************************************************!*\
  !*** ./src/app/pages/shop/store/list/list.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListEffects": () => (/* binding */ ListEffects)
/* harmony export */ });
/* harmony import */ var _list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.actions */ 9869);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 275);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7599);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9005);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6913);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4864);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3882);








class ListEffects {
    constructor(actions, httpClient) {
        this.actions = actions;
        this.httpClient = httpClient;
        this.read = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_list_actions__WEBPACK_IMPORTED_MODULE_0__.Types.READ), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((action) => action.paramsUrl), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((request) => this.httpClient.get(`${_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url}/api/Producto?${request}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((pagination) => new _list_actions__WEBPACK_IMPORTED_MODULE_0__.ReadSuccess(pagination)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new _list_actions__WEBPACK_IMPORTED_MODULE_0__.ReadError(err.message)))))));
    }
}
ListEffects.ɵfac = function ListEffects_Factory(t) { return new (t || ListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient)); };
ListEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: ListEffects, factory: ListEffects.ɵfac });


/***/ }),

/***/ 93:
/*!******************************************************!*\
  !*** ./src/app/pages/shop/store/list/list.models.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5075:
/*!*******************************************************!*\
  !*** ./src/app/pages/shop/store/list/list.reducer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.actions */ 9869);

const initialState = {
    pagination: null,
    requestPagination: null,
    loading: null,
    error: null
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _list_actions__WEBPACK_IMPORTED_MODULE_0__.Types.READ: {
            return Object.assign(Object.assign({}, state), { loading: true, error: null, requestPagination: action.paginationRequest });
        }
        case _list_actions__WEBPACK_IMPORTED_MODULE_0__.Types.READ_SUCCESS: {
            return Object.assign(Object.assign({}, state), { loading: false, error: null, pagination: action.pagination });
        }
        case _list_actions__WEBPACK_IMPORTED_MODULE_0__.Types.READ_ERROR: {
            return Object.assign(Object.assign({}, state), { loading: false, error: action.error });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ 1532:
/*!*********************************************************!*\
  !*** ./src/app/pages/shop/store/list/list.selectors.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getListState": () => (/* binding */ getListState),
/* harmony export */   "getShop": () => (/* binding */ getShop),
/* harmony export */   "getPaginationRequest": () => (/* binding */ getPaginationRequest),
/* harmony export */   "getLoading": () => (/* binding */ getLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ 8206);


const getListState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_index__WEBPACK_IMPORTED_MODULE_0__.getShopState, (state) => state.list);
const getShop = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getListState, (state) => state.pagination);
const getPaginationRequest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getListState, (state) => state.requestPagination);
const getLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getListState, (state) => state.loading);


/***/ })

}]);
//# sourceMappingURL=159.038273f8bf507dadb126.js.map