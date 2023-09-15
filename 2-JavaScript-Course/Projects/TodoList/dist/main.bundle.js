"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/categoryList.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/categoryList.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.category-container {
    margin-bottom: 25px;
    width: calc(100vw - 50px - 300px - 70px);
    overflow-x: auto;
}
.categories-list {
    display: flex;
    gap: 10px;
}

.category {
    cursor: pointer;
    list-style-type: none;
    font-weight: bold;
    font-size: 15px;
    background-color: #0000001f;
    padding: 5px 15px;
    border-radius: 25px;
    transition: background-color 0.2s ease-in-out;
}

.category.selected {
    background-color: var(--secondary);
}

@media screen and (max-width: 768px) {
    .category-container {
        width: calc(100vw - 30px);
    }
}`, "",{"version":3,"sources":["webpack://./src/css/categoryList.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,wCAAwC;IACxC,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,2BAA2B;IAC3B,iBAAiB;IACjB,mBAAmB;IACnB,6CAA6C;AACjD;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI;QACI,yBAAyB;IAC7B;AACJ","sourcesContent":[".category-container {\n    margin-bottom: 25px;\n    width: calc(100vw - 50px - 300px - 70px);\n    overflow-x: auto;\n}\n.categories-list {\n    display: flex;\n    gap: 10px;\n}\n\n.category {\n    cursor: pointer;\n    list-style-type: none;\n    font-weight: bold;\n    font-size: 15px;\n    background-color: #0000001f;\n    padding: 5px 15px;\n    border-radius: 25px;\n    transition: background-color 0.2s ease-in-out;\n}\n\n.category.selected {\n    background-color: var(--secondary);\n}\n\n@media screen and (max-width: 768px) {\n    .category-container {\n        width: calc(100vw - 30px);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/global.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/global.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --text: #030401;
    --background: #f6f9f0;
    --primary: #abca72;
    --secondary: #e0ebcb;
    --accent: #85aa41;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;
    color: var(--text);
    background-color: var(--background);
}`, "",{"version":3,"sources":["webpack://./src/css/global.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,kBAAkB;IAClB,mCAAmC;AACvC","sourcesContent":[":root {\n    --text: #030401;\n    --background: #f6f9f0;\n    --primary: #abca72;\n    --secondary: #e0ebcb;\n    --accent: #85aa41;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.125rem;\n    color: var(--text);\n    background-color: var(--background);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/hamburger.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/hamburger.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
 .hamburger {
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    visibility: hidden;
    }

    @media screen and (max-width: 768px) {
        .hamburger {
            visibility: visible;
        }
    }

    .hamburger:hover {
      opacity: 0.7; }
    .hamburger.is-active:hover {
      opacity: 0.7; }
    .hamburger.is-active .hamburger-inner,
    .hamburger.is-active .hamburger-inner::before,
    .hamburger.is-active .hamburger-inner::after {
      background-color: #000; }
  
  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative; }
  
  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px; }
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
      width: 30px;
      height: 3px;
      background-color: #000;
      border-radius: 4px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease; }
    .hamburger-inner::before, .hamburger-inner::after {
      content: "";
      display: block; }
    .hamburger-inner::before {
      top: -10px; }
    .hamburger-inner::after {
      bottom: -10px; }
  
  /*
     * 3DX
     */
  .hamburger--3dx .hamburger-box {
    perspective: 80px; }
  
  .hamburger--3dx .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
    .hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  
  .hamburger--3dx.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateY(180deg); }
    .hamburger--3dx.is-active .hamburger-inner::before {
      transform: translate3d(0, 10px, 0) rotate(45deg); }
    .hamburger--3dx.is-active .hamburger-inner::after {
      transform: translate3d(0, -10px, 0) rotate(-45deg); }
  
  /*
     * 3DX Reverse
     */
  .hamburger--3dx-r .hamburger-box {
    perspective: 80px; }
  
  .hamburger--3dx-r .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
    .hamburger--3dx-r .hamburger-inner::before, .hamburger--3dx-r .hamburger-inner::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  
  .hamburger--3dx-r.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateY(-180deg); }
    .hamburger--3dx-r.is-active .hamburger-inner::before {
      transform: translate3d(0, 10px, 0) rotate(45deg); }
    .hamburger--3dx-r.is-active .hamburger-inner::after {
      transform: translate3d(0, -10px, 0) rotate(-45deg); }
  
  /*
     * 3DY
     */
  .hamburger--3dy .hamburger-box {
    perspective: 80px; }
  
  .hamburger--3dy .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
    .hamburger--3dy .hamburger-inner::before, .hamburger--3dy .hamburger-inner::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  
  .hamburger--3dy.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateX(-180deg); }
    .hamburger--3dy.is-active .hamburger-inner::before {
      transform: translate3d(0, 10px, 0) rotate(45deg); }
    .hamburger--3dy.is-active .hamburger-inner::after {
      transform: translate3d(0, -10px, 0) rotate(-45deg); }
  
  /*
     * 3DY Reverse
     */
  .hamburger--3dy-r .hamburger-box {
    perspective: 80px; }
  
  .hamburger--3dy-r .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
    .hamburger--3dy-r .hamburger-inner::before, .hamburger--3dy-r .hamburger-inner::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  
  .hamburger--3dy-r.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateX(180deg); }
    .hamburger--3dy-r.is-active .hamburger-inner::before {
      transform: translate3d(0, 10px, 0) rotate(45deg); }
    .hamburger--3dy-r.is-active .hamburger-inner::after {
      transform: translate3d(0, -10px, 0) rotate(-45deg); }
  
  /*
     * 3DXY
     */
  .hamburger--3dxy .hamburger-box {
    perspective: 80px; }
  
  .hamburger--3dxy .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
    .hamburger--3dxy .hamburger-inner::before, .hamburger--3dxy .hamburger-inner::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  
  .hamburger--3dxy.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateX(180deg) rotateY(180deg); }
    .hamburger--3dxy.is-active .hamburger-inner::before {
      transform: translate3d(0, 10px, 0) rotate(45deg); }
    .hamburger--3dxy.is-active .hamburger-inner::after {
      transform: translate3d(0, -10px, 0) rotate(-45deg); }
  
  /*
     * 3DXY Reverse
     */
  .hamburger--3dxy-r .hamburger-box {
    perspective: 80px; }
  
  .hamburger--3dxy-r .hamburger-inner {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
    .hamburger--3dxy-r .hamburger-inner::before, .hamburger--3dxy-r .hamburger-inner::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  
  .hamburger--3dxy-r.is-active .hamburger-inner {
    background-color: transparent !important;
    transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg); }
    .hamburger--3dxy-r.is-active .hamburger-inner::before {
      transform: translate3d(0, 10px, 0) rotate(45deg); }
    .hamburger--3dxy-r.is-active .hamburger-inner::after {
      transform: translate3d(0, -10px, 0) rotate(-45deg); }
  
  /*
     * Arrow
     */
  .hamburger--arrow.is-active .hamburger-inner::before {
    transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }
  
  .hamburger--arrow.is-active .hamburger-inner::after {
    transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }
  
  /*
     * Arrow Right
     */
  .hamburger--arrow-r.is-active .hamburger-inner::before {
    transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }
  
  .hamburger--arrow-r.is-active .hamburger-inner::after {
    transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }
  
  /*
     * Arrow Alt
     */
  .hamburger--arrowalt .hamburger-inner::before {
    transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }
  
  .hamburger--arrowalt .hamburger-inner::after {
    transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }
  
  .hamburger--arrowalt.is-active .hamburger-inner::before {
    top: 0;
    transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);
    transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }
  
  .hamburger--arrowalt.is-active .hamburger-inner::after {
    bottom: 0;
    transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);
    transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }
  
  /*
     * Arrow Alt Right
     */
  .hamburger--arrowalt-r .hamburger-inner::before {
    transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }
  
  .hamburger--arrowalt-r .hamburger-inner::after {
    transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }
  
  .hamburger--arrowalt-r.is-active .hamburger-inner::before {
    top: 0;
    transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);
    transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }
  
  .hamburger--arrowalt-r.is-active .hamburger-inner::after {
    bottom: 0;
    transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);
    transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }
  
  /*
     * Arrow Turn
     */
  .hamburger--arrowturn.is-active .hamburger-inner {
    transform: rotate(-180deg); }
    .hamburger--arrowturn.is-active .hamburger-inner::before {
      transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }
    .hamburger--arrowturn.is-active .hamburger-inner::after {
      transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }
  
  /*
     * Arrow Turn Right
     */
  .hamburger--arrowturn-r.is-active .hamburger-inner {
    transform: rotate(-180deg); }
    .hamburger--arrowturn-r.is-active .hamburger-inner::before {
      transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }
    .hamburger--arrowturn-r.is-active .hamburger-inner::after {
      transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }
  
  /*
     * Boring
     */
  .hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner::before, .hamburger--boring .hamburger-inner::after {
    transition-property: none; }
  
  .hamburger--boring.is-active .hamburger-inner {
    transform: rotate(45deg); }
    .hamburger--boring.is-active .hamburger-inner::before {
      top: 0;
      opacity: 0; }
    .hamburger--boring.is-active .hamburger-inner::after {
      bottom: 0;
      transform: rotate(-90deg); }
  
  /*
     * Collapse
     */
  .hamburger--collapse .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--collapse .hamburger-inner::after {
      top: -20px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }
    .hamburger--collapse .hamburger-inner::before {
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  
  .hamburger--collapse.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
    .hamburger--collapse.is-active .hamburger-inner::after {
      top: 0;
      opacity: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }
    .hamburger--collapse.is-active .hamburger-inner::before {
      top: 0;
      transform: rotate(-90deg);
      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }
  
  /*
     * Collapse Reverse
     */
  .hamburger--collapse-r .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--collapse-r .hamburger-inner::after {
      top: -20px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }
    .hamburger--collapse-r .hamburger-inner::before {
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  
  .hamburger--collapse-r.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
    .hamburger--collapse-r.is-active .hamburger-inner::after {
      top: 0;
      opacity: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }
    .hamburger--collapse-r.is-active .hamburger-inner::before {
      top: 0;
      transform: rotate(90deg);
      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }
  
  /*
     * Elastic
     */
  .hamburger--elastic .hamburger-inner {
    top: 2px;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
    .hamburger--elastic .hamburger-inner::before {
      top: 10px;
      transition: opacity 0.125s 0.275s ease; }
    .hamburger--elastic .hamburger-inner::after {
      top: 20px;
      transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  
  .hamburger--elastic.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(135deg);
    transition-delay: 0.075s; }
    .hamburger--elastic.is-active .hamburger-inner::before {
      transition-delay: 0s;
      opacity: 0; }
    .hamburger--elastic.is-active .hamburger-inner::after {
      transform: translate3d(0, -20px, 0) rotate(-270deg);
      transition-delay: 0.075s; }
  
  /*
     * Elastic Reverse
     */
  .hamburger--elastic-r .hamburger-inner {
    top: 2px;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
    .hamburger--elastic-r .hamburger-inner::before {
      top: 10px;
      transition: opacity 0.125s 0.275s ease; }
    .hamburger--elastic-r .hamburger-inner::after {
      top: 20px;
      transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  
  .hamburger--elastic-r.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(-135deg);
    transition-delay: 0.075s; }
    .hamburger--elastic-r.is-active .hamburger-inner::before {
      transition-delay: 0s;
      opacity: 0; }
    .hamburger--elastic-r.is-active .hamburger-inner::after {
      transform: translate3d(0, -20px, 0) rotate(270deg);
      transition-delay: 0.075s; }
  
  /*
     * Emphatic
     */
  .hamburger--emphatic {
    overflow: hidden; }
    .hamburger--emphatic .hamburger-inner {
      transition: background-color 0.125s 0.175s ease-in; }
      .hamburger--emphatic .hamburger-inner::before {
        left: 0;
        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }
      .hamburger--emphatic .hamburger-inner::after {
        top: 10px;
        right: 0;
        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }
    .hamburger--emphatic.is-active .hamburger-inner {
      transition-delay: 0s;
      transition-timing-function: ease-out;
      background-color: transparent !important; }
      .hamburger--emphatic.is-active .hamburger-inner::before {
        left: -80px;
        top: -80px;
        transform: translate3d(80px, 80px, 0) rotate(45deg);
        transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }
      .hamburger--emphatic.is-active .hamburger-inner::after {
        right: -80px;
        top: -80px;
        transform: translate3d(-80px, 80px, 0) rotate(-45deg);
        transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }
  
  /*
     * Emphatic Reverse
     */
  .hamburger--emphatic-r {
    overflow: hidden; }
    .hamburger--emphatic-r .hamburger-inner {
      transition: background-color 0.125s 0.175s ease-in; }
      .hamburger--emphatic-r .hamburger-inner::before {
        left: 0;
        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }
      .hamburger--emphatic-r .hamburger-inner::after {
        top: 10px;
        right: 0;
        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }
    .hamburger--emphatic-r.is-active .hamburger-inner {
      transition-delay: 0s;
      transition-timing-function: ease-out;
      background-color: transparent !important; }
      .hamburger--emphatic-r.is-active .hamburger-inner::before {
        left: -80px;
        top: 80px;
        transform: translate3d(80px, -80px, 0) rotate(-45deg);
        transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }
      .hamburger--emphatic-r.is-active .hamburger-inner::after {
        right: -80px;
        top: 80px;
        transform: translate3d(-80px, -80px, 0) rotate(45deg);
        transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }
  
  /*
     * Minus
     */
  .hamburger--minus .hamburger-inner::before, .hamburger--minus .hamburger-inner::after {
    transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear; }
  
  .hamburger--minus.is-active .hamburger-inner::before, .hamburger--minus.is-active .hamburger-inner::after {
    opacity: 0;
    transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear; }
  
  .hamburger--minus.is-active .hamburger-inner::before {
    top: 0; }
  
  .hamburger--minus.is-active .hamburger-inner::after {
    bottom: 0; }
  
  /*
     * Slider
     */
  .hamburger--slider .hamburger-inner {
    top: 2px; }
    .hamburger--slider .hamburger-inner::before {
      top: 10px;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.15s; }
    .hamburger--slider .hamburger-inner::after {
      top: 20px; }
  
  .hamburger--slider.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(45deg); }
    .hamburger--slider.is-active .hamburger-inner::before {
      transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
      opacity: 0; }
    .hamburger--slider.is-active .hamburger-inner::after {
      transform: translate3d(0, -20px, 0) rotate(-90deg); }
  
  /*
     * Slider Reverse
     */
  .hamburger--slider-r .hamburger-inner {
    top: 2px; }
    .hamburger--slider-r .hamburger-inner::before {
      top: 10px;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.15s; }
    .hamburger--slider-r .hamburger-inner::after {
      top: 20px; }
  
  .hamburger--slider-r.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(-45deg); }
    .hamburger--slider-r.is-active .hamburger-inner::before {
      transform: rotate(45deg) translate3d(5.71429px, -6px, 0);
      opacity: 0; }
    .hamburger--slider-r.is-active .hamburger-inner::after {
      transform: translate3d(0, -20px, 0) rotate(90deg); }
  
  /*
     * Spin
     */
  .hamburger--spin .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--spin .hamburger-inner::before {
      transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }
    .hamburger--spin .hamburger-inner::after {
      transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  
  .hamburger--spin.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
    .hamburger--spin.is-active .hamburger-inner::before {
      top: 0;
      opacity: 0;
      transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }
    .hamburger--spin.is-active .hamburger-inner::after {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }
  
  /*
     * Spin Reverse
     */
  .hamburger--spin-r .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--spin-r .hamburger-inner::before {
      transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }
    .hamburger--spin-r .hamburger-inner::after {
      transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  
  .hamburger--spin-r.is-active .hamburger-inner {
    transform: rotate(-225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
    .hamburger--spin-r.is-active .hamburger-inner::before {
      top: 0;
      opacity: 0;
      transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }
    .hamburger--spin-r.is-active .hamburger-inner::after {
      bottom: 0;
      transform: rotate(90deg);
      transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }
  
  /*
     * Spring
     */
  .hamburger--spring .hamburger-inner {
    top: 2px;
    transition: background-color 0s 0.13s linear; }
    .hamburger--spring .hamburger-inner::before {
      top: 10px;
      transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--spring .hamburger-inner::after {
      top: 20px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  
  .hamburger--spring.is-active .hamburger-inner {
    transition-delay: 0.22s;
    background-color: transparent !important; }
    .hamburger--spring.is-active .hamburger-inner::before {
      top: 0;
      transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 10px, 0) rotate(45deg); }
    .hamburger--spring.is-active .hamburger-inner::after {
      top: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 10px, 0) rotate(-45deg); }
  
  /*
     * Spring Reverse
     */
  .hamburger--spring-r .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--spring-r .hamburger-inner::after {
      top: -20px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear; }
    .hamburger--spring-r .hamburger-inner::before {
      transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  
  .hamburger--spring-r.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
    .hamburger--spring-r.is-active .hamburger-inner::after {
      top: 0;
      opacity: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear; }
    .hamburger--spring-r.is-active .hamburger-inner::before {
      top: 0;
      transform: rotate(90deg);
      transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1); }
  
  /*
     * Stand
     */
  .hamburger--stand .hamburger-inner {
    transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }
    .hamburger--stand .hamburger-inner::before {
      transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--stand .hamburger-inner::after {
      transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  
  .hamburger--stand.is-active .hamburger-inner {
    transform: rotate(90deg);
    background-color: transparent !important;
    transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }
    .hamburger--stand.is-active .hamburger-inner::before {
      top: 0;
      transform: rotate(-45deg);
      transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }
    .hamburger--stand.is-active .hamburger-inner::after {
      bottom: 0;
      transform: rotate(45deg);
      transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }
  
  /*
     * Stand Reverse
     */
  .hamburger--stand-r .hamburger-inner {
    transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }
    .hamburger--stand-r .hamburger-inner::before {
      transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--stand-r .hamburger-inner::after {
      transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  
  .hamburger--stand-r.is-active .hamburger-inner {
    transform: rotate(-90deg);
    background-color: transparent !important;
    transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }
    .hamburger--stand-r.is-active .hamburger-inner::before {
      top: 0;
      transform: rotate(-45deg);
      transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }
    .hamburger--stand-r.is-active .hamburger-inner::after {
      bottom: 0;
      transform: rotate(45deg);
      transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }
  
  /*
     * Squeeze
     */
  .hamburger--squeeze .hamburger-inner {
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--squeeze .hamburger-inner::before {
      transition: top 0.075s 0.12s ease, opacity 0.075s ease; }
    .hamburger--squeeze .hamburger-inner::after {
      transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  
  .hamburger--squeeze.is-active .hamburger-inner {
    transform: rotate(45deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
    .hamburger--squeeze.is-active .hamburger-inner::before {
      top: 0;
      opacity: 0;
      transition: top 0.075s ease, opacity 0.075s 0.12s ease; }
    .hamburger--squeeze.is-active .hamburger-inner::after {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }
  
  /*
     * Vortex
     */
  .hamburger--vortex .hamburger-inner {
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
    .hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {
      transition-duration: 0s;
      transition-delay: 0.1s;
      transition-timing-function: linear; }
    .hamburger--vortex .hamburger-inner::before {
      transition-property: top, opacity; }
    .hamburger--vortex .hamburger-inner::after {
      transition-property: bottom, transform; }
  
  .hamburger--vortex.is-active .hamburger-inner {
    transform: rotate(765deg);
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
    .hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {
      transition-delay: 0s; }
    .hamburger--vortex.is-active .hamburger-inner::before {
      top: 0;
      opacity: 0; }
    .hamburger--vortex.is-active .hamburger-inner::after {
      bottom: 0;
      transform: rotate(90deg); }
  
  /*
     * Vortex Reverse
     */
  .hamburger--vortex-r .hamburger-inner {
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
    .hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {
      transition-duration: 0s;
      transition-delay: 0.1s;
      transition-timing-function: linear; }
    .hamburger--vortex-r .hamburger-inner::before {
      transition-property: top, opacity; }
    .hamburger--vortex-r .hamburger-inner::after {
      transition-property: bottom, transform; }
  
  .hamburger--vortex-r.is-active .hamburger-inner {
    transform: rotate(-765deg);
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
    .hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {
      transition-delay: 0s; }
    .hamburger--vortex-r.is-active .hamburger-inner::before {
      top: 0;
      opacity: 0; }
    .hamburger--vortex-r.is-active .hamburger-inner::after {
      bottom: 0;
      transform: rotate(-90deg); }`, "",{"version":3,"sources":["webpack://./src/css/hamburger.css"],"names":[],"mappings":"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","sourcesContent":["/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n .hamburger {\n    display: inline-block;\n    cursor: pointer;\n    transition-property: opacity, filter;\n    transition-duration: 0.15s;\n    transition-timing-function: linear;\n    font: inherit;\n    color: inherit;\n    text-transform: none;\n    background-color: transparent;\n    border: 0;\n    margin: 0;\n    overflow: visible;\n    visibility: hidden;\n    }\n\n    @media screen and (max-width: 768px) {\n        .hamburger {\n            visibility: visible;\n        }\n    }\n\n    .hamburger:hover {\n      opacity: 0.7; }\n    .hamburger.is-active:hover {\n      opacity: 0.7; }\n    .hamburger.is-active .hamburger-inner,\n    .hamburger.is-active .hamburger-inner::before,\n    .hamburger.is-active .hamburger-inner::after {\n      background-color: #000; }\n  \n  .hamburger-box {\n    width: 40px;\n    height: 24px;\n    display: inline-block;\n    position: relative; }\n  \n  .hamburger-inner {\n    display: block;\n    top: 50%;\n    margin-top: -2px; }\n    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n      width: 30px;\n      height: 3px;\n      background-color: #000;\n      border-radius: 4px;\n      position: absolute;\n      transition-property: transform;\n      transition-duration: 0.15s;\n      transition-timing-function: ease; }\n    .hamburger-inner::before, .hamburger-inner::after {\n      content: \"\";\n      display: block; }\n    .hamburger-inner::before {\n      top: -10px; }\n    .hamburger-inner::after {\n      bottom: -10px; }\n  \n  /*\n     * 3DX\n     */\n  .hamburger--3dx .hamburger-box {\n    perspective: 80px; }\n  \n  .hamburger--3dx .hamburger-inner {\n    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n    .hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {\n      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  \n  .hamburger--3dx.is-active .hamburger-inner {\n    background-color: transparent !important;\n    transform: rotateY(180deg); }\n    .hamburger--3dx.is-active .hamburger-inner::before {\n      transform: translate3d(0, 10px, 0) rotate(45deg); }\n    .hamburger--3dx.is-active .hamburger-inner::after {\n      transform: translate3d(0, -10px, 0) rotate(-45deg); }\n  \n  /*\n     * 3DX Reverse\n     */\n  .hamburger--3dx-r .hamburger-box {\n    perspective: 80px; }\n  \n  .hamburger--3dx-r .hamburger-inner {\n    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n    .hamburger--3dx-r .hamburger-inner::before, .hamburger--3dx-r .hamburger-inner::after {\n      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  \n  .hamburger--3dx-r.is-active .hamburger-inner {\n    background-color: transparent !important;\n    transform: rotateY(-180deg); }\n    .hamburger--3dx-r.is-active .hamburger-inner::before {\n      transform: translate3d(0, 10px, 0) rotate(45deg); }\n    .hamburger--3dx-r.is-active .hamburger-inner::after {\n      transform: translate3d(0, -10px, 0) rotate(-45deg); }\n  \n  /*\n     * 3DY\n     */\n  .hamburger--3dy .hamburger-box {\n    perspective: 80px; }\n  \n  .hamburger--3dy .hamburger-inner {\n    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n    .hamburger--3dy .hamburger-inner::before, .hamburger--3dy .hamburger-inner::after {\n      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  \n  .hamburger--3dy.is-active .hamburger-inner {\n    background-color: transparent !important;\n    transform: rotateX(-180deg); }\n    .hamburger--3dy.is-active .hamburger-inner::before {\n      transform: translate3d(0, 10px, 0) rotate(45deg); }\n    .hamburger--3dy.is-active .hamburger-inner::after {\n      transform: translate3d(0, -10px, 0) rotate(-45deg); }\n  \n  /*\n     * 3DY Reverse\n     */\n  .hamburger--3dy-r .hamburger-box {\n    perspective: 80px; }\n  \n  .hamburger--3dy-r .hamburger-inner {\n    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n    .hamburger--3dy-r .hamburger-inner::before, .hamburger--3dy-r .hamburger-inner::after {\n      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  \n  .hamburger--3dy-r.is-active .hamburger-inner {\n    background-color: transparent !important;\n    transform: rotateX(180deg); }\n    .hamburger--3dy-r.is-active .hamburger-inner::before {\n      transform: translate3d(0, 10px, 0) rotate(45deg); }\n    .hamburger--3dy-r.is-active .hamburger-inner::after {\n      transform: translate3d(0, -10px, 0) rotate(-45deg); }\n  \n  /*\n     * 3DXY\n     */\n  .hamburger--3dxy .hamburger-box {\n    perspective: 80px; }\n  \n  .hamburger--3dxy .hamburger-inner {\n    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n    .hamburger--3dxy .hamburger-inner::before, .hamburger--3dxy .hamburger-inner::after {\n      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  \n  .hamburger--3dxy.is-active .hamburger-inner {\n    background-color: transparent !important;\n    transform: rotateX(180deg) rotateY(180deg); }\n    .hamburger--3dxy.is-active .hamburger-inner::before {\n      transform: translate3d(0, 10px, 0) rotate(45deg); }\n    .hamburger--3dxy.is-active .hamburger-inner::after {\n      transform: translate3d(0, -10px, 0) rotate(-45deg); }\n  \n  /*\n     * 3DXY Reverse\n     */\n  .hamburger--3dxy-r .hamburger-box {\n    perspective: 80px; }\n  \n  .hamburger--3dxy-r .hamburger-inner {\n    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n    .hamburger--3dxy-r .hamburger-inner::before, .hamburger--3dxy-r .hamburger-inner::after {\n      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  \n  .hamburger--3dxy-r.is-active .hamburger-inner {\n    background-color: transparent !important;\n    transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg); }\n    .hamburger--3dxy-r.is-active .hamburger-inner::before {\n      transform: translate3d(0, 10px, 0) rotate(45deg); }\n    .hamburger--3dxy-r.is-active .hamburger-inner::after {\n      transform: translate3d(0, -10px, 0) rotate(-45deg); }\n  \n  /*\n     * Arrow\n     */\n  .hamburger--arrow.is-active .hamburger-inner::before {\n    transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n  \n  .hamburger--arrow.is-active .hamburger-inner::after {\n    transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n  \n  /*\n     * Arrow Right\n     */\n  .hamburger--arrow-r.is-active .hamburger-inner::before {\n    transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n  \n  .hamburger--arrow-r.is-active .hamburger-inner::after {\n    transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n  \n  /*\n     * Arrow Alt\n     */\n  .hamburger--arrowalt .hamburger-inner::before {\n    transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n  \n  .hamburger--arrowalt .hamburger-inner::after {\n    transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n  \n  .hamburger--arrowalt.is-active .hamburger-inner::before {\n    top: 0;\n    transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);\n    transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n  \n  .hamburger--arrowalt.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n  \n  /*\n     * Arrow Alt Right\n     */\n  .hamburger--arrowalt-r .hamburger-inner::before {\n    transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n  \n  .hamburger--arrowalt-r .hamburger-inner::after {\n    transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n  \n  .hamburger--arrowalt-r.is-active .hamburger-inner::before {\n    top: 0;\n    transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);\n    transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n  \n  .hamburger--arrowalt-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n  \n  /*\n     * Arrow Turn\n     */\n  .hamburger--arrowturn.is-active .hamburger-inner {\n    transform: rotate(-180deg); }\n    .hamburger--arrowturn.is-active .hamburger-inner::before {\n      transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n    .hamburger--arrowturn.is-active .hamburger-inner::after {\n      transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n  \n  /*\n     * Arrow Turn Right\n     */\n  .hamburger--arrowturn-r.is-active .hamburger-inner {\n    transform: rotate(-180deg); }\n    .hamburger--arrowturn-r.is-active .hamburger-inner::before {\n      transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n    .hamburger--arrowturn-r.is-active .hamburger-inner::after {\n      transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n  \n  /*\n     * Boring\n     */\n  .hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner::before, .hamburger--boring .hamburger-inner::after {\n    transition-property: none; }\n  \n  .hamburger--boring.is-active .hamburger-inner {\n    transform: rotate(45deg); }\n    .hamburger--boring.is-active .hamburger-inner::before {\n      top: 0;\n      opacity: 0; }\n    .hamburger--boring.is-active .hamburger-inner::after {\n      bottom: 0;\n      transform: rotate(-90deg); }\n  \n  /*\n     * Collapse\n     */\n  .hamburger--collapse .hamburger-inner {\n    top: auto;\n    bottom: 0;\n    transition-duration: 0.13s;\n    transition-delay: 0.13s;\n    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n    .hamburger--collapse .hamburger-inner::after {\n      top: -20px;\n      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n    .hamburger--collapse .hamburger-inner::before {\n      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  \n  .hamburger--collapse.is-active .hamburger-inner {\n    transform: translate3d(0, -10px, 0) rotate(-45deg);\n    transition-delay: 0.22s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n    .hamburger--collapse.is-active .hamburger-inner::after {\n      top: 0;\n      opacity: 0;\n      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n    .hamburger--collapse.is-active .hamburger-inner::before {\n      top: 0;\n      transform: rotate(-90deg);\n      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  \n  /*\n     * Collapse Reverse\n     */\n  .hamburger--collapse-r .hamburger-inner {\n    top: auto;\n    bottom: 0;\n    transition-duration: 0.13s;\n    transition-delay: 0.13s;\n    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n    .hamburger--collapse-r .hamburger-inner::after {\n      top: -20px;\n      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n    .hamburger--collapse-r .hamburger-inner::before {\n      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  \n  .hamburger--collapse-r.is-active .hamburger-inner {\n    transform: translate3d(0, -10px, 0) rotate(45deg);\n    transition-delay: 0.22s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n    .hamburger--collapse-r.is-active .hamburger-inner::after {\n      top: 0;\n      opacity: 0;\n      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n    .hamburger--collapse-r.is-active .hamburger-inner::before {\n      top: 0;\n      transform: rotate(90deg);\n      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  \n  /*\n     * Elastic\n     */\n  .hamburger--elastic .hamburger-inner {\n    top: 2px;\n    transition-duration: 0.275s;\n    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n    .hamburger--elastic .hamburger-inner::before {\n      top: 10px;\n      transition: opacity 0.125s 0.275s ease; }\n    .hamburger--elastic .hamburger-inner::after {\n      top: 20px;\n      transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n  \n  .hamburger--elastic.is-active .hamburger-inner {\n    transform: translate3d(0, 10px, 0) rotate(135deg);\n    transition-delay: 0.075s; }\n    .hamburger--elastic.is-active .hamburger-inner::before {\n      transition-delay: 0s;\n      opacity: 0; }\n    .hamburger--elastic.is-active .hamburger-inner::after {\n      transform: translate3d(0, -20px, 0) rotate(-270deg);\n      transition-delay: 0.075s; }\n  \n  /*\n     * Elastic Reverse\n     */\n  .hamburger--elastic-r .hamburger-inner {\n    top: 2px;\n    transition-duration: 0.275s;\n    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n    .hamburger--elastic-r .hamburger-inner::before {\n      top: 10px;\n      transition: opacity 0.125s 0.275s ease; }\n    .hamburger--elastic-r .hamburger-inner::after {\n      top: 20px;\n      transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n  \n  .hamburger--elastic-r.is-active .hamburger-inner {\n    transform: translate3d(0, 10px, 0) rotate(-135deg);\n    transition-delay: 0.075s; }\n    .hamburger--elastic-r.is-active .hamburger-inner::before {\n      transition-delay: 0s;\n      opacity: 0; }\n    .hamburger--elastic-r.is-active .hamburger-inner::after {\n      transform: translate3d(0, -20px, 0) rotate(270deg);\n      transition-delay: 0.075s; }\n  \n  /*\n     * Emphatic\n     */\n  .hamburger--emphatic {\n    overflow: hidden; }\n    .hamburger--emphatic .hamburger-inner {\n      transition: background-color 0.125s 0.175s ease-in; }\n      .hamburger--emphatic .hamburger-inner::before {\n        left: 0;\n        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }\n      .hamburger--emphatic .hamburger-inner::after {\n        top: 10px;\n        right: 0;\n        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }\n    .hamburger--emphatic.is-active .hamburger-inner {\n      transition-delay: 0s;\n      transition-timing-function: ease-out;\n      background-color: transparent !important; }\n      .hamburger--emphatic.is-active .hamburger-inner::before {\n        left: -80px;\n        top: -80px;\n        transform: translate3d(80px, 80px, 0) rotate(45deg);\n        transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n      .hamburger--emphatic.is-active .hamburger-inner::after {\n        right: -80px;\n        top: -80px;\n        transform: translate3d(-80px, 80px, 0) rotate(-45deg);\n        transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n  \n  /*\n     * Emphatic Reverse\n     */\n  .hamburger--emphatic-r {\n    overflow: hidden; }\n    .hamburger--emphatic-r .hamburger-inner {\n      transition: background-color 0.125s 0.175s ease-in; }\n      .hamburger--emphatic-r .hamburger-inner::before {\n        left: 0;\n        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }\n      .hamburger--emphatic-r .hamburger-inner::after {\n        top: 10px;\n        right: 0;\n        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }\n    .hamburger--emphatic-r.is-active .hamburger-inner {\n      transition-delay: 0s;\n      transition-timing-function: ease-out;\n      background-color: transparent !important; }\n      .hamburger--emphatic-r.is-active .hamburger-inner::before {\n        left: -80px;\n        top: 80px;\n        transform: translate3d(80px, -80px, 0) rotate(-45deg);\n        transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n      .hamburger--emphatic-r.is-active .hamburger-inner::after {\n        right: -80px;\n        top: 80px;\n        transform: translate3d(-80px, -80px, 0) rotate(45deg);\n        transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n  \n  /*\n     * Minus\n     */\n  .hamburger--minus .hamburger-inner::before, .hamburger--minus .hamburger-inner::after {\n    transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear; }\n  \n  .hamburger--minus.is-active .hamburger-inner::before, .hamburger--minus.is-active .hamburger-inner::after {\n    opacity: 0;\n    transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear; }\n  \n  .hamburger--minus.is-active .hamburger-inner::before {\n    top: 0; }\n  \n  .hamburger--minus.is-active .hamburger-inner::after {\n    bottom: 0; }\n  \n  /*\n     * Slider\n     */\n  .hamburger--slider .hamburger-inner {\n    top: 2px; }\n    .hamburger--slider .hamburger-inner::before {\n      top: 10px;\n      transition-property: transform, opacity;\n      transition-timing-function: ease;\n      transition-duration: 0.15s; }\n    .hamburger--slider .hamburger-inner::after {\n      top: 20px; }\n  \n  .hamburger--slider.is-active .hamburger-inner {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n    .hamburger--slider.is-active .hamburger-inner::before {\n      transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);\n      opacity: 0; }\n    .hamburger--slider.is-active .hamburger-inner::after {\n      transform: translate3d(0, -20px, 0) rotate(-90deg); }\n  \n  /*\n     * Slider Reverse\n     */\n  .hamburger--slider-r .hamburger-inner {\n    top: 2px; }\n    .hamburger--slider-r .hamburger-inner::before {\n      top: 10px;\n      transition-property: transform, opacity;\n      transition-timing-function: ease;\n      transition-duration: 0.15s; }\n    .hamburger--slider-r .hamburger-inner::after {\n      top: 20px; }\n  \n  .hamburger--slider-r.is-active .hamburger-inner {\n    transform: translate3d(0, 10px, 0) rotate(-45deg); }\n    .hamburger--slider-r.is-active .hamburger-inner::before {\n      transform: rotate(45deg) translate3d(5.71429px, -6px, 0);\n      opacity: 0; }\n    .hamburger--slider-r.is-active .hamburger-inner::after {\n      transform: translate3d(0, -20px, 0) rotate(90deg); }\n  \n  /*\n     * Spin\n     */\n  .hamburger--spin .hamburger-inner {\n    transition-duration: 0.22s;\n    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n    .hamburger--spin .hamburger-inner::before {\n      transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n    .hamburger--spin .hamburger-inner::after {\n      transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  \n  .hamburger--spin.is-active .hamburger-inner {\n    transform: rotate(225deg);\n    transition-delay: 0.12s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n    .hamburger--spin.is-active .hamburger-inner::before {\n      top: 0;\n      opacity: 0;\n      transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n    .hamburger--spin.is-active .hamburger-inner::after {\n      bottom: 0;\n      transform: rotate(-90deg);\n      transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  \n  /*\n     * Spin Reverse\n     */\n  .hamburger--spin-r .hamburger-inner {\n    transition-duration: 0.22s;\n    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n    .hamburger--spin-r .hamburger-inner::before {\n      transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n    .hamburger--spin-r .hamburger-inner::after {\n      transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  \n  .hamburger--spin-r.is-active .hamburger-inner {\n    transform: rotate(-225deg);\n    transition-delay: 0.12s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n    .hamburger--spin-r.is-active .hamburger-inner::before {\n      top: 0;\n      opacity: 0;\n      transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n    .hamburger--spin-r.is-active .hamburger-inner::after {\n      bottom: 0;\n      transform: rotate(90deg);\n      transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  \n  /*\n     * Spring\n     */\n  .hamburger--spring .hamburger-inner {\n    top: 2px;\n    transition: background-color 0s 0.13s linear; }\n    .hamburger--spring .hamburger-inner::before {\n      top: 10px;\n      transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n    .hamburger--spring .hamburger-inner::after {\n      top: 20px;\n      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  \n  .hamburger--spring.is-active .hamburger-inner {\n    transition-delay: 0.22s;\n    background-color: transparent !important; }\n    .hamburger--spring.is-active .hamburger-inner::before {\n      top: 0;\n      transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n      transform: translate3d(0, 10px, 0) rotate(45deg); }\n    .hamburger--spring.is-active .hamburger-inner::after {\n      top: 0;\n      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n      transform: translate3d(0, 10px, 0) rotate(-45deg); }\n  \n  /*\n     * Spring Reverse\n     */\n  .hamburger--spring-r .hamburger-inner {\n    top: auto;\n    bottom: 0;\n    transition-duration: 0.13s;\n    transition-delay: 0s;\n    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n    .hamburger--spring-r .hamburger-inner::after {\n      top: -20px;\n      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear; }\n    .hamburger--spring-r .hamburger-inner::before {\n      transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  \n  .hamburger--spring-r.is-active .hamburger-inner {\n    transform: translate3d(0, -10px, 0) rotate(-45deg);\n    transition-delay: 0.22s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n    .hamburger--spring-r.is-active .hamburger-inner::after {\n      top: 0;\n      opacity: 0;\n      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear; }\n    .hamburger--spring-r.is-active .hamburger-inner::before {\n      top: 0;\n      transform: rotate(90deg);\n      transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  \n  /*\n     * Stand\n     */\n  .hamburger--stand .hamburger-inner {\n    transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }\n    .hamburger--stand .hamburger-inner::before {\n      transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n    .hamburger--stand .hamburger-inner::after {\n      transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  \n  .hamburger--stand.is-active .hamburger-inner {\n    transform: rotate(90deg);\n    background-color: transparent !important;\n    transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }\n    .hamburger--stand.is-active .hamburger-inner::before {\n      top: 0;\n      transform: rotate(-45deg);\n      transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n    .hamburger--stand.is-active .hamburger-inner::after {\n      bottom: 0;\n      transform: rotate(45deg);\n      transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  \n  /*\n     * Stand Reverse\n     */\n  .hamburger--stand-r .hamburger-inner {\n    transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }\n    .hamburger--stand-r .hamburger-inner::before {\n      transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n    .hamburger--stand-r .hamburger-inner::after {\n      transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  \n  .hamburger--stand-r.is-active .hamburger-inner {\n    transform: rotate(-90deg);\n    background-color: transparent !important;\n    transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }\n    .hamburger--stand-r.is-active .hamburger-inner::before {\n      top: 0;\n      transform: rotate(-45deg);\n      transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n    .hamburger--stand-r.is-active .hamburger-inner::after {\n      bottom: 0;\n      transform: rotate(45deg);\n      transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  \n  /*\n     * Squeeze\n     */\n  .hamburger--squeeze .hamburger-inner {\n    transition-duration: 0.075s;\n    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n    .hamburger--squeeze .hamburger-inner::before {\n      transition: top 0.075s 0.12s ease, opacity 0.075s ease; }\n    .hamburger--squeeze .hamburger-inner::after {\n      transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  \n  .hamburger--squeeze.is-active .hamburger-inner {\n    transform: rotate(45deg);\n    transition-delay: 0.12s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n    .hamburger--squeeze.is-active .hamburger-inner::before {\n      top: 0;\n      opacity: 0;\n      transition: top 0.075s ease, opacity 0.075s 0.12s ease; }\n    .hamburger--squeeze.is-active .hamburger-inner::after {\n      bottom: 0;\n      transform: rotate(-90deg);\n      transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  \n  /*\n     * Vortex\n     */\n  .hamburger--vortex .hamburger-inner {\n    transition-duration: 0.2s;\n    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n    .hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {\n      transition-duration: 0s;\n      transition-delay: 0.1s;\n      transition-timing-function: linear; }\n    .hamburger--vortex .hamburger-inner::before {\n      transition-property: top, opacity; }\n    .hamburger--vortex .hamburger-inner::after {\n      transition-property: bottom, transform; }\n  \n  .hamburger--vortex.is-active .hamburger-inner {\n    transform: rotate(765deg);\n    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n    .hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {\n      transition-delay: 0s; }\n    .hamburger--vortex.is-active .hamburger-inner::before {\n      top: 0;\n      opacity: 0; }\n    .hamburger--vortex.is-active .hamburger-inner::after {\n      bottom: 0;\n      transform: rotate(90deg); }\n  \n  /*\n     * Vortex Reverse\n     */\n  .hamburger--vortex-r .hamburger-inner {\n    transition-duration: 0.2s;\n    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n    .hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {\n      transition-duration: 0s;\n      transition-delay: 0.1s;\n      transition-timing-function: linear; }\n    .hamburger--vortex-r .hamburger-inner::before {\n      transition-property: top, opacity; }\n    .hamburger--vortex-r .hamburger-inner::after {\n      transition-property: bottom, transform; }\n  \n  .hamburger--vortex-r.is-active .hamburger-inner {\n    transform: rotate(-765deg);\n    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n    .hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {\n      transition-delay: 0s; }\n    .hamburger--vortex-r.is-active .hamburger-inner::before {\n      top: 0;\n      opacity: 0; }\n    .hamburger--vortex-r.is-active .hamburger-inner::after {\n      bottom: 0;\n      transform: rotate(-90deg); }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-bottom: 2px solid var(--secondary);
    padding-top: 15px;
    z-index: 1000;
    background-color: var(--background);
}

.logo {
    width: 70px;
}

.title {
    background: linear-gradient(270deg, var(--primary) , var(--accent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.title {
    margin: 0;
    font-size: 3rem;
    text-align: center;
    background-color: var(--primary);
    background-image: linear-gradient(
        147deg,
        var(--primary) 0%,
        var(--accent) 40%,
        var(--primary) 100%
    );
    background-size: 200% auto;
    animation: shine 3s linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes shine {
    to {
        background-position: 200% center;
    }
}


@media screen and (max-width: 768px) {
    .title {
        font-size: 2rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,yCAAyC;IACzC,iBAAiB;IACjB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mEAAmE;IACnE,qBAAqB;IACrB,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,SAAS;IACT,eAAe;IACf,kBAAkB;IAClB,gCAAgC;IAChC;;;;;KAKC;IACD,0BAA0B;IAC1B,mCAAmC;IACnC,qBAAqB;IACrB,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI;QACI,gCAAgC;IACpC;AACJ;;;AAGA;IACI;QACI,eAAe;IACnB;AACJ","sourcesContent":[".header {\n    display: flex;\n    position: relative;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 15px;\n    border-bottom: 2px solid var(--secondary);\n    padding-top: 15px;\n    z-index: 1000;\n    background-color: var(--background);\n}\n\n.logo {\n    width: 70px;\n}\n\n.title {\n    background: linear-gradient(270deg, var(--primary) , var(--accent));\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n.title {\n    margin: 0;\n    font-size: 3rem;\n    text-align: center;\n    background-color: var(--primary);\n    background-image: linear-gradient(\n        147deg,\n        var(--primary) 0%,\n        var(--accent) 40%,\n        var(--primary) 100%\n    );\n    background-size: 200% auto;\n    animation: shine 3s linear infinite;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n@keyframes shine {\n    to {\n        background-position: 200% center;\n    }\n}\n\n\n@media screen and (max-width: 768px) {\n    .title {\n        font-size: 2rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#main {
    display: flex;
    margin: 0 25px;
}

#nav {
    min-width: 300px;
    padding-top: 25px;
}

#nav .actions-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.actions-list button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    padding: 15px 0;
    font-size: 20px;
    font-weight: 600;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    color: black;
}

#nav .actions-list button.active {
    background-color: var(--secondary);
    color: var(--accent);
}

#nav .actions-list button:hover {
    background-color: var(--secondary);
}

#nav .actions-list button:active,  #nav .actions-list button:focus {
    color: var(--accent);
}


.actions-list button span {
    color: var(--accent);
}

.project-preview {
    width: 100%;
    height: calc(100vh - 72px);
    padding: 40px 0px 40px 70px;
}

.project-preview .project-title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
}

.project-preview .project-title::first-letter {
    text-transform: uppercase;
}

@media screen and (max-width: 768px) {
    #main {
        flex-direction: column;
        margin: 0;
    }

    #nav {
        display: grid;
        grid-template-rows: 0fr;
        padding: 0;
        transition: grid-template-rows 500ms;
        background-color: #ebf4d8;
        transition: all 0.5s ease-in-out;
    }

    .nav-links-wrapper {
        overflow: hidden;
    }

    #nav.active {
        grid-template-rows: 1fr;
        padding: 25px 0;
    }

    @keyframes navAnimation {
        from {
            max-height: 0;
        }

        to {
            max-height: 200px;
        }
    }

    .project-preview {
        padding: 40px 15px 80px 15px;
        height: auto;
    }
}
`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,6CAA6C;IAC7C,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,oBAAoB;AACxB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,oBAAoB;AACxB;;;AAGA;IACI,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,0BAA0B;IAC1B,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI;QACI,sBAAsB;QACtB,SAAS;IACb;;IAEA;QACI,aAAa;QACb,uBAAuB;QACvB,UAAU;QACV,oCAAoC;QACpC,yBAAyB;QACzB,gCAAgC;IACpC;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,uBAAuB;QACvB,eAAe;IACnB;;IAEA;QACI;YACI,aAAa;QACjB;;QAEA;YACI,iBAAiB;QACrB;IACJ;;IAEA;QACI,4BAA4B;QAC5B,YAAY;IAChB;AACJ","sourcesContent":["#main {\n    display: flex;\n    margin: 0 25px;\n}\n\n#nav {\n    min-width: 300px;\n    padding-top: 25px;\n}\n\n#nav .actions-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.actions-list button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    background-color: transparent;\n    border: none;\n    border-radius: 10px;\n    padding: 15px 0;\n    font-size: 20px;\n    font-weight: 600;\n    transition: background-color 0.2s ease-in-out;\n    cursor: pointer;\n    color: black;\n}\n\n#nav .actions-list button.active {\n    background-color: var(--secondary);\n    color: var(--accent);\n}\n\n#nav .actions-list button:hover {\n    background-color: var(--secondary);\n}\n\n#nav .actions-list button:active,  #nav .actions-list button:focus {\n    color: var(--accent);\n}\n\n\n.actions-list button span {\n    color: var(--accent);\n}\n\n.project-preview {\n    width: 100%;\n    height: calc(100vh - 72px);\n    padding: 40px 0px 40px 70px;\n}\n\n.project-preview .project-title {\n    font-size: 40px;\n    font-weight: 600;\n    margin-bottom: 20px;\n}\n\n.project-preview .project-title::first-letter {\n    text-transform: uppercase;\n}\n\n@media screen and (max-width: 768px) {\n    #main {\n        flex-direction: column;\n        margin: 0;\n    }\n\n    #nav {\n        display: grid;\n        grid-template-rows: 0fr;\n        padding: 0;\n        transition: grid-template-rows 500ms;\n        background-color: #ebf4d8;\n        transition: all 0.5s ease-in-out;\n    }\n\n    .nav-links-wrapper {\n        overflow: hidden;\n    }\n\n    #nav.active {\n        grid-template-rows: 1fr;\n        padding: 25px 0;\n    }\n\n    @keyframes navAnimation {\n        from {\n            max-height: 0;\n        }\n\n        to {\n            max-height: 200px;\n        }\n    }\n\n    .project-preview {\n        padding: 40px 15px 80px 15px;\n        height: auto;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/popup.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.popup {
    border-radius: 10px;
    padding: 10px 0;
    background-color: var(--secondary);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-task-project {
    margin: 0 5px;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    background-color: var(--primary);
    background-image: linear-gradient( 147deg, var(--primary) 0%, var(--accent) 40%, var(--primary) 100% );
    background-size: 200% auto;
    animation: shine 3s linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.face-in {
    animation: face-in .3s ease-in-out;
}

@keyframes face-in {
    from {
        transform: translateX(200px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.face-out {
    animation: face-out .3s ease-in-out;
}

@keyframes face-out {
    form {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(200px);
        opacity: 0;
    }
}

.grow-up {
    animation: grow-up .2s ease-in-out;
    height: 60px;
}

@keyframes grow-up {
    from {
        height: 0;
    }
    to {
        height: 60px;
    }
}

.grow-down {
    animation: grow-down .3s ease-in-out;
}

@keyframes grow-down {
    from {
        height: 60px;
    }
    to {
        height: 0px;
    }
}
`, "",{"version":3,"sources":["webpack://./src/css/popup.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,eAAe;IACf,kCAAkC;IAClC,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,gCAAgC;IAChC,sGAAsG;IACtG,0BAA0B;IAC1B,mCAAmC;IACnC,qBAAqB;IACrB,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI;QACI,4BAA4B;QAC5B,UAAU;IACd;IACA;QACI,wBAAwB;QACxB,UAAU;IACd;AACJ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI;QACI,wBAAwB;QACxB,UAAU;IACd;;IAEA;QACI,4BAA4B;QAC5B,UAAU;IACd;AACJ;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI;QACI,SAAS;IACb;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,WAAW;IACf;AACJ","sourcesContent":[".popup {\n    border-radius: 10px;\n    padding: 10px 0;\n    background-color: var(--secondary);\n    z-index: 1000;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.popup-task-project {\n    margin: 0 5px;\n    font-weight: bold;\n    font-size: 1.2rem;\n    text-align: center;\n    background-color: var(--primary);\n    background-image: linear-gradient( 147deg, var(--primary) 0%, var(--accent) 40%, var(--primary) 100% );\n    background-size: 200% auto;\n    animation: shine 3s linear infinite;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n.face-in {\n    animation: face-in .3s ease-in-out;\n}\n\n@keyframes face-in {\n    from {\n        transform: translateX(200px);\n        opacity: 0;\n    }\n    to {\n        transform: translateX(0);\n        opacity: 1;\n    }\n}\n\n.face-out {\n    animation: face-out .3s ease-in-out;\n}\n\n@keyframes face-out {\n    form {\n        transform: translateX(0);\n        opacity: 1;\n    }\n\n    to {\n        transform: translateX(200px);\n        opacity: 0;\n    }\n}\n\n.grow-up {\n    animation: grow-up .2s ease-in-out;\n    height: 60px;\n}\n\n@keyframes grow-up {\n    from {\n        height: 0;\n    }\n    to {\n        height: 60px;\n    }\n}\n\n.grow-down {\n    animation: grow-down .3s ease-in-out;\n}\n\n@keyframes grow-down {\n    from {\n        height: 60px;\n    }\n    to {\n        height: 0px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/projects.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/projects.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.create-new-project-container {
    background-color: var(--secondary);
    padding: 10px;
    border-radius: 10px;
}

.projects-list-title {
    margin-bottom: 20px;
}

.actions-list .project-button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px
}

.actions-list .project-button:hover .project-delete-icon {
    opacity: 1;
}


.projects-actions-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}


.project-container {
    display: flex;
    padding: 0 15px;
    gap: 10px;
}

.project-information {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

.actions-list  .project-delete-icon {
    color: black;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.delete-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.actions-list  .project-delete-icon:hover {
    transform: scale(1.2);
}

.new-project-form {
    display: flex;
    width: 100%;
    align-items: center;
}
.create-project-button {
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 18px;
    background-color: transparent;
    border: none;
    text-align: left    ;
}

.create-project-button .material-symbols-outlined, .create-project-button .task-title {
    color: black;
}`, "",{"version":3,"sources":["webpack://./src/css/projects.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;IAClC,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX;AACJ;;AAEA;IACI,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,eAAe;IACf,6BAA6B;IAC7B,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB","sourcesContent":[".create-new-project-container {\n    background-color: var(--secondary);\n    padding: 10px;\n    border-radius: 10px;\n}\n\n.projects-list-title {\n    margin-bottom: 20px;\n}\n\n.actions-list .project-button {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    padding: 15px\n}\n\n.actions-list .project-button:hover .project-delete-icon {\n    opacity: 1;\n}\n\n\n.projects-actions-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.project-container {\n    display: flex;\n    padding: 0 15px;\n    gap: 10px;\n}\n\n.project-information {\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.actions-list  .project-delete-icon {\n    color: black;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n\n.delete-icon-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.actions-list  .project-delete-icon:hover {\n    transform: scale(1.2);\n}\n\n.new-project-form {\n    display: flex;\n    width: 100%;\n    align-items: center;\n}\n.create-project-button {\n    width: 100%;\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-size: 18px;\n    background-color: transparent;\n    border: none;\n    text-align: left    ;\n}\n\n.create-project-button .material-symbols-outlined, .create-project-button .task-title {\n    color: black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/task.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/task.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.task-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    height: calc(100vh - 72px - 80px - 46px);
}

.task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    user-select: none;
}
.task:hover {
    background-color: var(--secondary);
}

.task-info {
    display: flex;
    flex: auto;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.extra-data {
    display: flex;
    gap: 10px;
}

.task-title {
    flex: 1;
}

.extra-data > p {
    font-weight: bold;
    font-size: 12px;
    background-color: #0000001f;
    padding: 5px 5px;
    border-radius: 5px;
}

p.task-project {
    border-radius: 25px;
    padding: 5px 10px;
    border: 1px solid black;
    background: transparent;
}
p.task-project::first-letter {
    text-transform: uppercase;
}

.task-delete-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.delete-icon {
    visibility: hidden;
    opacity: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
.delete-icon:hover {
    transform: scale(1.2);
}
.task:hover .delete-icon {
    visibility: visible;
    opacity: 1;
}

.new-task {
    justify-content: flex-start;
    margin-top: 20px;
    background-color: var(--secondary);
}

/**
 *  ------------------------
 *  Task Form
 *  ------------------------
*/
.new-task-form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
}

.form-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: inherit;
}

.form-inputs input {
    font-size: 16px;
}


.new-task-title, .new-task-notes {
    width: 100%;
    border: none;
    background-color: transparent;
    outline: none;
}

.form-actions {
    display: flex;
    flex-direction: column;
    justify-content: inherit;
    gap: 20px;
}

.new-task-submit, .close-new-task-form {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.new-task-submit > span {
    color: black;
    background-color: var(--primary);
    border-radius: 15px;
}

.new-task-submit:hover > .material-symbols-outlined,
.close-new-task-form:hover  {
    animation: rotate .3s linear;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(190deg);
    }
}


/**
 *  ------------------------
 *  Task Details
 *  ------------------------
*/

.optional-data {
    display: flex;
    align-items: center;
    gap: 10px;
}

.optional-data input {
    background-color: transparent;
    border: none;
    outline: none;
}
.due-date-container, .tags-container {
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 25px;
    padding: 5px 10px;
}


.optional-data span {
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}


/* Date Input Style */
.new-task-due-date, .new-task-tags {
    display: none;
    position: relative; 
}

.new-task-due-date::-webkit-calendar-picker-indicator{
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
}

.active-form {
    background-color: #0000001f;
}
.active-form input {
    display: flex;
}

/* Date Input Style when is active */
.active-form input[type="date"]
{
    display:block;
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    min-height: 1.2em;
    width: 100px;
}

/**
 *  ------------------------
 *  Edit Task
 *  ------------------------
*/

.edit-task {
    display: flex;
    gap: 10px;
    width: 100%;
    padding: 0;
}

.task:has(.edit-task)  {
    background-color: var(--secondary);
}

.task:has(.edit-task) .new-task-submit span  {
    animation: none;
    color: black;
}

@media screen and (max-width: 768px) {
    .task-list {
        height: auto;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/task.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,6CAA6C;IAC7C,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,2BAA2B;IAC3B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,gCAAgC;AACpC;AACA;IACI,qBAAqB;AACzB;AACA;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,kCAAkC;AACtC;;AAEA;;;;CAIC;AACD;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;;IAEI,4BAA4B;AAChC;;AAEA;IACI;QACI,uBAAuB;IAC3B;;IAEA;QACI,yBAAyB;IAC7B;AACJ;;;AAGA;;;;CAIC;;AAED;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,iBAAiB;AACrB;;;AAGA;IACI,eAAe;IACf,eAAe;IACf,gCAAgC;AACpC;;;AAGA,qBAAqB;AACrB;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,OAAO;IACP,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,WAAW;AACf;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI,aAAa;AACjB;;AAEA,oCAAoC;AACpC;;IAEI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,iBAAiB;IACjB,YAAY;AAChB;;AAEA;;;;CAIC;;AAED;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,UAAU;AACd;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI;QACI,YAAY;IAChB;AACJ","sourcesContent":[".task-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    overflow-y: auto;\n    height: calc(100vh - 72px - 80px - 46px);\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    padding: 10px;\n    border-radius: 10px;\n    transition: background-color 0.2s ease-in-out;\n    cursor: pointer;\n    user-select: none;\n}\n.task:hover {\n    background-color: var(--secondary);\n}\n\n.task-info {\n    display: flex;\n    flex: auto;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n}\n\n.extra-data {\n    display: flex;\n    gap: 10px;\n}\n\n.task-title {\n    flex: 1;\n}\n\n.extra-data > p {\n    font-weight: bold;\n    font-size: 12px;\n    background-color: #0000001f;\n    padding: 5px 5px;\n    border-radius: 5px;\n}\n\np.task-project {\n    border-radius: 25px;\n    padding: 5px 10px;\n    border: 1px solid black;\n    background: transparent;\n}\np.task-project::first-letter {\n    text-transform: uppercase;\n}\n\n.task-delete-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.delete-icon {\n    visibility: hidden;\n    opacity: 0;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n.delete-icon:hover {\n    transform: scale(1.2);\n}\n.task:hover .delete-icon {\n    visibility: visible;\n    opacity: 1;\n}\n\n.new-task {\n    justify-content: flex-start;\n    margin-top: 20px;\n    background-color: var(--secondary);\n}\n\n/**\n *  ------------------------\n *  Task Form\n *  ------------------------\n*/\n.new-task-form {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    gap: 10px;\n}\n\n.form-inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: inherit;\n}\n\n.form-inputs input {\n    font-size: 16px;\n}\n\n\n.new-task-title, .new-task-notes {\n    width: 100%;\n    border: none;\n    background-color: transparent;\n    outline: none;\n}\n\n.form-actions {\n    display: flex;\n    flex-direction: column;\n    justify-content: inherit;\n    gap: 20px;\n}\n\n.new-task-submit, .close-new-task-form {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n\n.new-task-submit > span {\n    color: black;\n    background-color: var(--primary);\n    border-radius: 15px;\n}\n\n.new-task-submit:hover > .material-symbols-outlined,\n.close-new-task-form:hover  {\n    animation: rotate .3s linear;\n}\n\n@keyframes rotate {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(190deg);\n    }\n}\n\n\n/**\n *  ------------------------\n *  Task Details\n *  ------------------------\n*/\n\n.optional-data {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.optional-data input {\n    background-color: transparent;\n    border: none;\n    outline: none;\n}\n.due-date-container, .tags-container {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    border-radius: 25px;\n    padding: 5px 10px;\n}\n\n\n.optional-data span {\n    font-size: 20px;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n\n\n/* Date Input Style */\n.new-task-due-date, .new-task-tags {\n    display: none;\n    position: relative; \n}\n\n.new-task-due-date::-webkit-calendar-picker-indicator{\n    background: transparent;\n    bottom: 0;\n    color: transparent;\n    cursor: pointer;\n    height: auto;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: auto;\n}\n\n.active-form {\n    background-color: #0000001f;\n}\n.active-form input {\n    display: flex;\n}\n\n/* Date Input Style when is active */\n.active-form input[type=\"date\"]\n{\n    display:block;\n    appearance: textfield;\n    -webkit-appearance: textfield;\n    -moz-appearance: textfield;\n    min-height: 1.2em;\n    width: 100px;\n}\n\n/**\n *  ------------------------\n *  Edit Task\n *  ------------------------\n*/\n\n.edit-task {\n    display: flex;\n    gap: 10px;\n    width: 100%;\n    padding: 0;\n}\n\n.task:has(.edit-task)  {\n    background-color: var(--secondary);\n}\n\n.task:has(.edit-task) .new-task-submit span  {\n    animation: none;\n    color: black;\n}\n\n@media screen and (max-width: 768px) {\n    .task-list {\n        height: auto;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatISO/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/formatISO/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatISO)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with local time zone, or both.
 * @returns {String} the formatted date string (in local time zone)
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.representation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */
function formatISO(date, options) {
  var _options$format, _options$representati;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date);
  if (isNaN(originalDate.getTime())) {
    throw new RangeError('Invalid time value');
  }
  var format = String((_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : 'extended');
  var representation = String((_options$representati = options === null || options === void 0 ? void 0 : options.representation) !== null && _options$representati !== void 0 ? _options$representati : 'complete');
  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }
  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }
  var result = '';
  var tzOffset = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : '';

  // Representation is either 'date' or 'complete'
  if (representation !== 'time') {
    var day = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getDate(), 2);
    var month = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getMonth() + 1, 2);
    var year = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getFullYear(), 4);

    // yyyyMMdd or yyyy-MM-dd.
    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  }

  // Representation is either 'time' or 'complete'
  if (representation !== 'date') {
    // Add the timezone.
    var offset = originalDate.getTimezoneOffset();
    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absoluteOffset / 60), 2);
      var minuteOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absoluteOffset % 60, 2);
      // If less than 0, the sign is +, because it is ahead of time.
      var sign = offset < 0 ? '+' : '-';
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = 'Z';
    }
    var hour = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getHours(), 2);
    var minute = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getMinutes(), 2);
    var second = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getSeconds(), 2);

    // If there's also date, separate it with time with 'T'
    var separator = result === '' ? '' : 'T';

    // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
    var time = [hour, minute, second].join(timeDelimiter);

    // HHmmss or HH:mm:ss.
    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }
  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/css/categoryList.css":
/*!**********************************!*\
  !*** ./src/css/categoryList.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_categoryList_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./categoryList.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/categoryList.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_categoryList_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_categoryList_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_categoryList_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_categoryList_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/global.css":
/*!****************************!*\
  !*** ./src/css/global.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/hamburger.css":
/*!*******************************!*\
  !*** ./src/css/hamburger.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hamburger_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./hamburger.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/hamburger.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hamburger_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hamburger_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_hamburger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_hamburger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/header.css":
/*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/popup.css":
/*!***************************!*\
  !*** ./src/css/popup.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/projects.css":
/*!******************************!*\
  !*** ./src/css/projects.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./projects.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/projects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/task.css":
/*!**************************!*\
  !*** ./src/css/task.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./task.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/task.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/assets/GlobalFunctions/globalFunctions.js":
/*!*******************************************************!*\
  !*** ./src/assets/GlobalFunctions/globalFunctions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inSameWeek: () => (/* binding */ inSameWeek),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
function isToday (date1) {
    const date2 = new Date();
    return date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear();
};

function inSameWeek(date1) {
    const date2 = new Date();
    const firstDayOfWeek = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() - date1.getDay());
    const lastDayOfWeek = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() - date1.getDay() + 6);
    return date2 >= firstDayOfWeek && date2 <= lastDayOfWeek;
};



/***/ }),

/***/ "./src/assets/Hamburger/hamburgerNav.js":
/*!**********************************************!*\
  !*** ./src/assets/Hamburger/hamburgerNav.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeHamburgerNav: () => (/* binding */ closeHamburgerNav),
/* harmony export */   createHamburgerNavEvent: () => (/* binding */ createHamburgerNavEvent)
/* harmony export */ });
function createHamburgerNavEvent () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('#nav');
    hamburger.addEventListener('click', () => {
        // Toggle Nav
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('active');
    });
}

function closeHamburgerNav() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('#nav');
    hamburger.classList.remove('is-active');
    nav.classList.remove('active');
}



/***/ }),

/***/ "./src/assets/LocalStorage/localStorage.js":
/*!*************************************************!*\
  !*** ./src/assets/LocalStorage/localStorage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadLocalStorage: () => (/* binding */ loadLocalStorage),
/* harmony export */   loadLocalStorageProjects: () => (/* binding */ loadLocalStorageProjects),
/* harmony export */   removeInLocalStorageProject: () => (/* binding */ removeInLocalStorageProject),
/* harmony export */   saveInLocalStorage: () => (/* binding */ saveInLocalStorage),
/* harmony export */   saveInLocalStorageProject: () => (/* binding */ saveInLocalStorageProject)
/* harmony export */ });
/* harmony import */ var _modules_Task_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/Task/Task */ "./src/modules/Task/Task.js");


function saveInLocalStorage(taskList) {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}
function saveInLocalStorageProject(projectTitle) {
    let localProjectList = JSON.parse(localStorage.getItem("projectList"));
    
    if (localProjectList) {
        localProjectList.push(projectTitle);
    } else {
        localProjectList = [];
        localProjectList.push(projectTitle);
    }
    
    localStorage.setItem("projectList", JSON.stringify(localProjectList));
}

function removeInLocalStorageProject(projectTitle) {
    let localProjectList = JSON.parse(localStorage.getItem("projectList"));
    localProjectList = localProjectList.filter(project => project != projectTitle);
    localStorage.setItem("projectList", JSON.stringify(localProjectList));

    let localTaskList = JSON.parse(localStorage.getItem("taskList"));
    localTaskList = localTaskList.filter(task => task.project != projectTitle);
    localStorage.setItem("taskList", JSON.stringify(localTaskList));
}

function loadLocalStorage(DOMTodoList) {
    let localStorageTaskList = JSON.parse(localStorage.getItem("taskList"));

    if (localStorageTaskList) {
        localStorageTaskList = _modules_Task_Task__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSONList(localStorageTaskList);
        DOMTodoList.addTasks(localStorageTaskList)
        
    }
}

function loadLocalStorageProjects(loadProjects){
    let localStorageProjectList = JSON.parse(localStorage.getItem("projectList"));

    if (localStorageProjectList) {
        loadProjects(localStorageProjectList)
    }
} 



/***/ }),

/***/ "./src/assets/Popups/hiddenPopup.js":
/*!******************************************!*\
  !*** ./src/assets/Popups/hiddenPopup.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHiddenPopup (message, time = 2000) {
    if (existsHiddenPopup()) return

    const popupContainer = document.querySelector(".popup-container")
    const popup = document.createElement('div')
    popup.classList.add('popup', "face-in")
    popup.innerHTML = message

    const popupHeight = popup.clientHeight;
    popupContainer.appendChild(popup)
    popupContainer.classList.add("grow-up")
    setTimeout(() => {
        popupContainer.classList.remove("grow-up")
        popupContainer.classList.add("grow-down")

        popup.classList.remove('face-in')
        popup.classList.add('face-out')
        popup.addEventListener('animationend', popup.remove)
        
        popupContainer.addEventListener('animationend', () => {
            popupContainer.classList.remove("grow-down")
        });
    }, time)
}

function existsHiddenPopup () {
    const popupContainer = document.querySelector(".popup-container")
    return popupContainer.children.length > 0
}

function removeHiddenPopup () {
    const popupContainer = document.querySelector(".popup-container")
    popupContainer.innerHTML = ''
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHiddenPopup);

/***/ }),

/***/ "./src/assets/Task/CategoriesList/categoryList.js":
/*!********************************************************!*\
  !*** ./src/assets/Task/CategoriesList/categoryList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.. */ "./src/index.js");


function printCategoryList(tasks) {
    const categoriesContainer = document.querySelector('.category-container');
    categoriesContainer.innerHTML = '';
    const categoriesList = document.createElement('ul');
    categoriesList.classList.add('categories-list');
    const categories = getCategories(tasks);
    categories.forEach(category => {
        const categoryElement = document.createElement('li');
        categoryElement.textContent = category;
        categoryElement.classList.add('category');
        categoryElement.setAttribute("data-category", category)
        categoriesList.appendChild(categoryElement);
        createCategoryEvent(categoryElement);
    });

    categoriesContainer.appendChild(categoriesList);
}

/**
 * 
 * @param {Array} tasks 
 * @returns 
 */
function getCategories(tasks) {
    const categories = [];
    tasks.forEach(task => {
        const taskCategories = task.getCategories();
        if (taskCategories) {
            taskCategories.forEach(category => {
                if (!categories.includes(category)) {
                    categories.push(category);
                }
            });
        }
    });

    return categories;
}

function createCategoryEvent (categoryElement) {
    categoryElement.addEventListener('click', () => {
        categoryElement.classList.toggle('selected');
        const selectedCategories = getSelectedCategories();
        ___WEBPACK_IMPORTED_MODULE_0__["default"].printByCategories(selectedCategories)
    });
}

function getSelectedCategories () {
    const selectedCategoriesElement = Array.from(document.querySelectorAll('.category.selected'));
    const selectedCategories = [];
    selectedCategoriesElement.forEach(categoryElement => {
        const category = categoryElement.dataset.category;
        selectedCategories.push(category);
    })

    return selectedCategories;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printCategoryList);

/***/ }),

/***/ "./src/assets/Task/CheckBox/checkBox.js":
/*!**********************************************!*\
  !*** ./src/assets/Task/CheckBox/checkBox.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckBox)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.. */ "./src/index.js");
/* harmony import */ var _LocalStorage_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LocalStorage/localStorage */ "./src/assets/LocalStorage/localStorage.js");



class CheckBox {
    static createCheckBoxElement (isChecked) {
        const checkBoxElement = document.createElement("span");
    
        checkBoxElement.setAttribute("data-is-completed", isChecked);
        checkBoxElement.classList.add("check-box", "material-symbols-outlined");
        if (isChecked)  {
            checkBoxElement.textContent = "check_circle";
        } else {
            checkBoxElement.textContent = "radio_button_unchecked";

        }
        return checkBoxElement;
    }
    
    static addToggleEventListener (checkBoxElement) {
        checkBoxElement.addEventListener(("click"), () => {
            const newValue = checkBoxElement.dataset.isCompleted === "true" ? false : true;
            checkBoxElement.dataset.isCompleted = newValue;
            checkBoxElement.textContent = newValue ? "check_circle" : "radio_button_unchecked"
        })
    }

    static addCheckBoxCompleteEventListener (checkBoxElement, task) {
        checkBoxElement.addEventListener(("click"), () => {
            task.toggleCompleted();
            (0,_LocalStorage_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveInLocalStorage)(___WEBPACK_IMPORTED_MODULE_0__["default"].getAllTasks());
        });
    }
}




/***/ }),

/***/ "./src/assets/Task/RemoveButton/removeButton.js":
/*!******************************************************!*\
  !*** ./src/assets/Task/RemoveButton/removeButton.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoveButton)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../index.js */ "./src/index.js");


class RemoveButton {
    static createRemoveButtonElement () {
        const taskDeleteContainer = document.createElement("div");
        taskDeleteContainer.classList.add("task-delete-container");
        taskDeleteContainer.innerHTML = `
            <span class="delete-icon material-symbols-outlined">delete</span>`;
        
        return taskDeleteContainer;
    }

    static addRemoveTaskEventListener (removeElement, taskId) {
        removeElement.addEventListener(("click"), () => {
            _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(taskId);
        })
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/global.css */ "./src/css/global.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/header.css */ "./src/css/header.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_task_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/task.css */ "./src/css/task.css");
/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/popup.css */ "./src/css/popup.css");
/* harmony import */ var _css_projects_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/projects.css */ "./src/css/projects.css");
/* harmony import */ var _css_hamburger_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/hamburger.css */ "./src/css/hamburger.css");
/* harmony import */ var _css_categoryList_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/categoryList.css */ "./src/css/categoryList.css");
/* harmony import */ var _modules_TodoList_DOMTodoList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/TodoList/DOMTodoList */ "./src/modules/TodoList/DOMTodoList.js");
/* harmony import */ var _modules_Project_DOMProjects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/Project/DOMProjects */ "./src/modules/Project/DOMProjects.js");
/* harmony import */ var _assets_Hamburger_hamburgerNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/Hamburger/hamburgerNav */ "./src/assets/Hamburger/hamburgerNav.js");
/* harmony import */ var _assets_LocalStorage_localStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/LocalStorage/localStorage */ "./src/assets/LocalStorage/localStorage.js");













const DOMTodoList = new _modules_TodoList_DOMTodoList__WEBPACK_IMPORTED_MODULE_8__["default"]();
function init()  {
    (0,_assets_LocalStorage_localStorage__WEBPACK_IMPORTED_MODULE_11__.loadLocalStorage)(DOMTodoList);
    (0,_assets_LocalStorage_localStorage__WEBPACK_IMPORTED_MODULE_11__.loadLocalStorageProjects)(_modules_Project_DOMProjects__WEBPACK_IMPORTED_MODULE_9__.loadProjects)
    DOMTodoList.printAllTasks();
    (0,_modules_Project_DOMProjects__WEBPACK_IMPORTED_MODULE_9__.createProjectsEvents)();
    (0,_modules_Project_DOMProjects__WEBPACK_IMPORTED_MODULE_9__.printAddProjectsElement)();
    (0,_assets_Hamburger_hamburgerNav__WEBPACK_IMPORTED_MODULE_10__.createHamburgerNavEvent)();
}

init();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMTodoList);

/***/ }),

/***/ "./src/modules/Project/DOMProjects.js":
/*!********************************************!*\
  !*** ./src/modules/Project/DOMProjects.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeNewProjectForm: () => (/* binding */ closeNewProjectForm),
/* harmony export */   createProjectsEvents: () => (/* binding */ createProjectsEvents),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   printAddProjectsElement: () => (/* binding */ printAddProjectsElement),
/* harmony export */   printNewProject: () => (/* binding */ printNewProject),
/* harmony export */   selectProjectButtonActive: () => (/* binding */ selectProjectButtonActive)
/* harmony export */ });
/* harmony import */ var _assets_Hamburger_hamburgerNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/Hamburger/hamburgerNav.js */ "./src/assets/Hamburger/hamburgerNav.js");
/* harmony import */ var _assets_LocalStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/LocalStorage/localStorage.js */ "./src/assets/LocalStorage/localStorage.js");
/* harmony import */ var _assets_Popups_hiddenPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/Popups/hiddenPopup.js */ "./src/assets/Popups/hiddenPopup.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");




const projectFormContainer = document.querySelector('.create-new-project-container');

/**
 *  Insert the project buttons in the DOM
 *  
 * @param {String} projectTitle 
 */
function printNewProject (projectTitle) {
    // Get the project buttons container
    const projectButtonContainer = document.querySelector('.projects-actions-list .actions-list');

    // Create the project button Container
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container'); // Add the class to the project container

    const projectButton = document.createElement('button'); // Create the project button
    projectButton.classList.add('project-button'); // Add the class to the project button
    projectButton.setAttribute('data-project-type', projectTitle.toLowerCase()); // Add the project title as data attribute

    const projectInformation = document.createElement('div'); // Create the project information container
    projectInformation.classList.add('project-information'); // Add the class to the project information container

    // Create the project icon
    const icon = `<span class="material-symbols-outlined">
                    workspaces
                </span>`

    // Insert the project title and icon in the project information container
    projectInformation.innerHTML = icon + projectTitle;


    const deleteIconContainer = document.createElement('div'); // Create the delete icon container
    deleteIconContainer.classList.add('delete-icon-container'); // Add the class to the delete icon container

    const deleteIcon = document.createElement('span');  // Create the delete icon
    deleteIcon.classList.add('project-delete-icon', "material-symbols-outlined"); // Add the class to the delete icon
    deleteIcon.textContent = 'delete'; // Add the text to the delete icon

    deleteIconContainer.appendChild(deleteIcon); // Insert the delete icon in the delete icon container

    projectButton.appendChild(projectInformation); // Insert the project information container in the project button

    projectContainer.appendChild(projectButton); // Insert the project button in the project container
    projectContainer.appendChild(deleteIconContainer); // Insert the delete icon container in the project container

    projectButtonContainer.appendChild(projectContainer); // Insert to the DOM the project container

    createDeleteProjectEvent(projectTitle, deleteIcon); // Create the delete project event
    createProjectsEvents(); // Create the project events
}

/**
 *  Add the active class to the selected project button
 *  Remove the active class from the other project buttons
 *  Print the tasks of the selected project
 */
function createProjectsEvents () {
    const projectsButtonsElements = document.querySelectorAll(".actions-list button"); // Get all the project buttons has NodeList
    const projectsButtonsArray = Array.from(projectsButtonsElements) // Convert the NodeList to Array
    // Add the click event to all the project buttons
    projectsButtonsArray.forEach(button => {
        button.addEventListener("click", () => selectProjectButtonActive(button.dataset.projectType))
    });
}

/**
 *  Create the delete project event
 *  Remove the project from the DOM and from the local storage
 *  Remove all the related tasks from the DOM and from the local storage
 * @param {String} projectName 
 * @param {HTMLSpanElement} projectDeleteButton 
 */
function createDeleteProjectEvent (projectName, projectDeleteButton) {
    projectDeleteButton.addEventListener('click', () => {
        _index_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeProject(projectName.toLowerCase());
        (0,_assets_LocalStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.removeInLocalStorageProject)(projectName);
    });
}

function printAddProjectsElement () {
    const createProjectButton = document.createElement('button');
    createProjectButton.classList.add('create-project-button');
    createProjectButton.innerHTML = `
            <span class="material-symbols-outlined">add</span>
            <p class="task-title">New Project</p>`;
    
    projectFormContainer.appendChild(createProjectButton);
    createProjectsEvent(createProjectButton);
}

function createProjectsEvent(createProjectButton) {
    createProjectButton.addEventListener('click', () => {
        _index_js__WEBPACK_IMPORTED_MODULE_3__["default"].closeAllForms();
        projectFormContainer.innerHTML = '';
        projectFormContainer.appendChild(createNewProjectForm());
        createNewProjectSubmitEvent(projectFormContainer.querySelector('.new-project-form'));
        createNewProjectCloseEvent(projectFormContainer);
    });
}

function createNewProjectForm()  {
    const newProjectForm = document.createElement('form');
    newProjectForm.classList.add('new-project-form');
    newProjectForm.innerHTML = `
            <div class="form-inputs">
                <input type="text" class="new-task-title" placeholder="Project Name" required>
            </div>
            <div class="form-actions">
                <span class="close-new-task-form material-symbols-outlined">close</span>
                <button type="submit" class="new-task-submit"><span class="material-symbols-outlined">add</span></button>
            </div>`;
    return newProjectForm;
}

function createNewProjectCloseEvent (projectForm) {
    const closeEditTaskForm = projectForm.querySelector('.close-new-task-form');
    closeEditTaskForm.addEventListener('click', () => {
        closeNewProjectForm();
    });
}

function closeNewProjectForm () { 
    projectFormContainer.innerHTML = ''; // Clear the form
    printAddProjectsElement(); // Print the add project button
}



function createNewProjectSubmitEvent (projectForm) {
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents the page from reloading
        const newProjectTitle = projectForm.querySelector('.new-task-title').value.trim();
        let errorMessage = '';
        let isCorrect = true;
        if (!newProjectTitle){
            errorMessage = 'Project name is required';
            isCorrect = false;
        } else if (existProject(newProjectTitle)) {
            errorMessage = `ERROR: Project <span class="popup-task-project">${newProjectTitle}</span> already exist`;
            isCorrect = false;
        }

        if (isCorrect) {
            _index_js__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(newProjectTitle);
            printNewProject(newProjectTitle); 
            (0,_assets_Popups_hiddenPopup_js__WEBPACK_IMPORTED_MODULE_2__["default"])(`Project <span class="popup-task-project">${newProjectTitle}</span> created successfully`);
            closeNewProjectForm();
            (0,_assets_LocalStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveInLocalStorageProject)(newProjectTitle);
        } else {
            (0,_assets_Popups_hiddenPopup_js__WEBPACK_IMPORTED_MODULE_2__["default"])(errorMessage);
        }
        
    });
}

function existProject (projectName) {
    const projectButtons = document.querySelectorAll('.project-button');
    let exist = false;
    projectButtons.forEach(projectButton => {
        if (projectButton.getAttribute('data-project-type') === projectName.toLowerCase()) {
            exist = true;
        }
    });
    return exist;
}

function selectProjectButtonActive (projectName)  {
    (0,_assets_Hamburger_hamburgerNav_js__WEBPACK_IMPORTED_MODULE_0__.closeHamburgerNav)();
    
    const projectsButtonsElements = document.querySelectorAll(".actions-list button");
    const projectsButtonsArray = Array.from(projectsButtonsElements)

    const currentProjectButton = projectsButtonsArray.find(button => button.dataset.projectType == projectName);
    const projectTitleElement = document.querySelector('.project-title');
    projectsButtonsArray.forEach(button => button.classList.remove("active")); // Remove the active class from all the buttons
    currentProjectButton.classList.add("active"); // Add the active class to the clicked button

    projectTitleElement.innerHTML = projectName; // Change the project title
    _index_js__WEBPACK_IMPORTED_MODULE_3__["default"].setActiveProject(projectName); // Set the active project
    _index_js__WEBPACK_IMPORTED_MODULE_3__["default"].printAllTasks(); // Print all the tasks in the task list
}

function loadProjects(projectList) {
    projectList.forEach(projectTitle => printNewProject(projectTitle));
}



/***/ }),

/***/ "./src/modules/Task/DOMTask.js":
/*!*************************************!*\
  !*** ./src/modules/Task/DOMTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMTask)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ "./src/modules/Task/Task.js");
/* harmony import */ var _assets_Task_CheckBox_checkBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/Task/CheckBox/checkBox.js */ "./src/assets/Task/CheckBox/checkBox.js");
/* harmony import */ var _assets_Task_RemoveButton_removeButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/Task/RemoveButton/removeButton.js */ "./src/assets/Task/RemoveButton/removeButton.js");





class DOMTask {

    /**
     * Create a new task element and add it to the task list
     * @param {Task} task 
     */
    static printTaskElement (task, showProject = false) {
        const taskList = document.querySelector('.task-list');
        const taskElement = DOMTask.createTaskElement(task, showProject);
        taskList.appendChild(taskElement)
        //DOMTodoList.updateCategoryList();
    }

    /**
     *  Create a new task element,
     *  Add the event listener to the checkbox to toggle the completed state of the task
     *  and return the task element
     * @param {Task} task 
     * @returns {HTMLElement} taskElement 
     */
    static createTaskElement (task, showProject = false) {
        // Create the task element
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.dataset.id = task.getId();

        // Create the task info element
        const taskInfoElement = document.createElement("div");
        taskInfoElement.classList.add("task-info");

        // Create the checkbox element and append it to the task info element
        const checkBoxElement = _assets_Task_CheckBox_checkBox_js__WEBPACK_IMPORTED_MODULE_2__["default"].createCheckBoxElement(task.isCompleted());
        taskInfoElement.appendChild(checkBoxElement);

        const dueDateElement = task.getDueDate()
        ? DOMTask.createDueDateElement(task.getDueDate())
        : "";
        const categoryElement = task.getCategories().length >= 1
        ? DOMTask.createCategoryElement(task.getCategories()[0])
        : "";
        const projectElement = showProject 
        ? DOMTask.createProjectElement(task.getProject())
        : "";
        // Create the task title element and append it to the task info element
        taskInfoElement.innerHTML += `
            <div class="extra-data">
                ${dueDateElement}
                ${categoryElement}
                ${projectElement}
            </div> 
            <p class="task-title">${task.getTitle()}</p>`;
        
        // Create the task delete container element
        const taskDeleteContainer = _assets_Task_RemoveButton_removeButton_js__WEBPACK_IMPORTED_MODULE_3__["default"].createRemoveButtonElement();

        // Append the task info element and the task delete container element to the task element
        taskElement.appendChild(taskInfoElement);
        taskElement.appendChild(taskDeleteContainer);

        // Add the event listener to the checkbox to toggle the completed state of the task
        const checkBox = taskElement.querySelector(".check-box");
        _assets_Task_CheckBox_checkBox_js__WEBPACK_IMPORTED_MODULE_2__["default"].addToggleEventListener(checkBox); // Change de html element
        _assets_Task_CheckBox_checkBox_js__WEBPACK_IMPORTED_MODULE_2__["default"].addCheckBoxCompleteEventListener(checkBox, task); // Change the task object
        
        const removeButton = taskElement.querySelector(".delete-icon");
        _assets_Task_RemoveButton_removeButton_js__WEBPACK_IMPORTED_MODULE_3__["default"].addRemoveTaskEventListener(removeButton, task.getId());
        DOMTask.addEditTaskEventListener(taskElement.querySelector(".task-title")); // Add the event listener to the task element to edit the task
        return taskElement;
    }

    static createDueDateElement (dueDate) {
        const formatDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(dueDate, "dd E");
        return `<p class="task-due-date">${formatDueDate}</p>`;
    }

    static createCategoryElement (category) {
        return `<p class="task-category">${category}</p>`;
    }

    static createProjectElement (project) {
        return `<p class="task-project">${project}</p>`;
    }
    static addEditTaskEventListener (taskElement) {
        taskElement.addEventListener("dblclick", () => {
            _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(taskElement.parentElement.parentElement.dataset.id);
        });
    }
}

/***/ }),

/***/ "./src/modules/Task/Task.js":
/*!**********************************!*\
  !*** ./src/modules/Task/Task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Task {
    constructor (title, description, dueDate, completed, project, tags) {
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
        this.project = project;
        this.tags = tags;
    }

    getId () {
        return this.id;
    }

    getTitle () {
        return this.title;
    }
    setTitle (title) {
        this.title = title;
    }

    getDescription () {
        return this.description;
    }
    setDescription (description) {
        this.description = description;
    }

    getDueDate () {
        return this.dueDate;
    }
    setDueDate (dueDate) {
        this.dueDate = dueDate;
    }

    isCompleted () {
        return this.completed;
    }
    setCompleted (completed) {
        this.completed = completed;
    }
    toggleCompleted () {
        this.completed = !this.completed;
    }

    toggleCompleted () {
        this.completed = !this.completed;
    }

    getProject () {
        return this.project;
    }
    setProject (project) {
        this.project = project;
    }

    getCategories () {
        return this.tags;
    }

    setCategories (tags) {
        this.tags = tags;
    }

    toString () {
        return `Title: ${this.title}\nDescription: ${this.description}\nDue Date: ${this.dueDate}\nCompleted: ${this.completed}`;
    }

    static fromJSON (json) {
        const dueDate = json.dueDate ? new Date(json.dueDate) : null;
        return new Task(json.title, json.description, dueDate, json.completed, json.project, json.tags);
    }

    static fromJSONList (jsonList) {
        let taskList = [];
        for (let json of jsonList) {
            taskList.push(Task.fromJSON(json));
        }
        return taskList;
    }

    static toJSON (task) {
        return JSON.stringify(task);
    }

    static toJSONList (taskList) {
        let jsonList = [];
        for (let task of taskList) {
            jsonList.push(Task.toJSON(task));
        }
        return jsonList;
    }

    static toLocalStorage (taskList) {
        localStorage.setItem('taskList', Task.toJSONList(taskList));
    }

    static fromLocalStorage () {
        return Task.fromJSONList(JSON.parse(localStorage.getItem('taskList')));
    }
}

/***/ }),

/***/ "./src/modules/TodoList/DOMTodoList.js":
/*!*********************************************!*\
  !*** ./src/modules/TodoList/DOMTodoList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMTodoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _Task_Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Task/Task.js */ "./src/modules/Task/Task.js");
/* harmony import */ var _Task_DOMTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Task/DOMTask */ "./src/modules/Task/DOMTask.js");
/* harmony import */ var _TodoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList.js */ "./src/modules/TodoList/TodoList.js");
/* harmony import */ var _assets_Task_CheckBox_checkBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/Task/CheckBox/checkBox.js */ "./src/assets/Task/CheckBox/checkBox.js");
/* harmony import */ var _assets_GlobalFunctions_globalFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/GlobalFunctions/globalFunctions.js */ "./src/assets/GlobalFunctions/globalFunctions.js");
/* harmony import */ var _assets_Popups_hiddenPopup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/Popups/hiddenPopup.js */ "./src/assets/Popups/hiddenPopup.js");
/* harmony import */ var _Project_DOMProjects_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Project/DOMProjects.js */ "./src/modules/Project/DOMProjects.js");
/* harmony import */ var _assets_Hamburger_hamburgerNav_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/Hamburger/hamburgerNav.js */ "./src/assets/Hamburger/hamburgerNav.js");
/* harmony import */ var _assets_Task_CategoriesList_categoryList_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/Task/CategoriesList/categoryList.js */ "./src/assets/Task/CategoriesList/categoryList.js");
/* harmony import */ var _assets_LocalStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/LocalStorage/localStorage.js */ "./src/assets/LocalStorage/localStorage.js");














class DOMTodoList {

    constructor () {
    this.todolist = new _TodoList_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.activeProject = "inbox"
    this.showProjectInTask = false;
    }

    setActiveProject(activeProject) {
        this.activeProject = activeProject;
        if (activeProject === "today" || activeProject === "week") {
            this.showProjectInTask = true;
        } else {
            this.showProjectInTask = false;
        }
    }

    /**
     *  Show all the tasks in the task list 
     *  depending on the project type
     * @param {String} projectType 
     */
    printAllTasks () {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = ''; // Clear the task list
        // Filter the task list by the active project
        const filterTask = this.getActiveTasks();
        // Print the task list
        (0,_assets_Task_CategoriesList_categoryList_js__WEBPACK_IMPORTED_MODULE_8__["default"])(filterTask);
        filterTask.forEach(task => _Task_DOMTask__WEBPACK_IMPORTED_MODULE_1__["default"].printTaskElement(task, this.showProjectInTask));
        this.printAddTaskElement(); // Create the add task element
    }

    printByCategories (categoriesList) {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = ''; // Clear the task list
        // Filter the task list by the active project
        const filterTask = this.tasksFilterByCategories(categoriesList, this.getActiveTasks());

        // Print the task list
        // printCategoryList(filterTask);
        filterTask.forEach(task => _Task_DOMTask__WEBPACK_IMPORTED_MODULE_1__["default"].printTaskElement(task, this.showProjectInTask));
        this.printAddTaskElement(); // Create the add task element
    }

    tasksFilterByCategories (categoriesList, taskList) {
        let checker = (arr, target) => target.every(v => arr.includes(v));
        const filterTaskList = [];

        taskList.forEach(task => {
            if (checker(task.getCategories(), categoriesList)) {
                filterTaskList.push(task);
            }
        })
        
        return filterTaskList;
    }

    updateCategoryList() {
        (0,_assets_Task_CategoriesList_categoryList_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this.getActiveTasks())
    }


    getActiveTasks ()  {
        let currentTaskList = [];
        if (this.activeProject == "today") {
            currentTaskList = this.todolist.getTodayTaskList();
        } else if (this.activeProject == "week") {
            currentTaskList = this.todolist.getWeekTaskList();
        } else {
            currentTaskList = this.todolist.getTaskListByProject(this.activeProject);
        }

        return currentTaskList;
    }

    getAllTasks () {
        return this.todolist.getTaskList();
    }

    addProject(projectTitle) {
        this.todolist.addProject(projectTitle);
    }

    addProjects(projectTitleList) {
        _assets_Task_CategoriesList_categoryList_js__WEBPACK_IMPORTED_MODULE_8__["default"].forEach(projectTitle => this.addProject(projectTitle));
    }

    /**
     *  Add a task to 
     * @param {Task} task 
     */
    addTask (task) {
        this.todolist.insertTask(task);
        _Task_DOMTask__WEBPACK_IMPORTED_MODULE_1__["default"].printTaskElement(task, this.showProjectInTask);
        (0,_assets_LocalStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveInLocalStorage)(this.getAllTasks());
    }

    addTasks (taskList) {
        const projectsAdded = [];
        taskList.forEach(task => {
            this.todolist.insertTask(task);
            const taskProject = task.project;
        })
    }



    /**
     *  Remove the task with the given id from the task list and the DOM
     * @param {*} id 
     */
    removeTask (id) {
        this.todolist.removeTask(id);
        const taskElement = document.querySelector(`[data-id="${id}"]`);
        taskElement.remove();
        (0,_assets_LocalStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveInLocalStorage)(this.getAllTasks());
        this.updateCategoryList();
    }

    removeAllTasksByProject (project) {
        this.todolist.removeAllTasksByProject(project);
    }

    editTask (id) {
        const task = this.todolist.getTask(id); // Get the task
        const taskElement = document.querySelector(`[data-id="${id}"]`); // Get the task element
        this.closeAllForms(); // Close all forms
        
        taskElement.innerHTML = this.createTaskForm(task);
        this.createEditTaskEvents(id, taskElement);
    }


    /**
     *  Update the task element in the task list
     *  Create the updated task element and replace the old task element with the updated task element
     * @param {Task} task 
     */
    updateTaskElement (task) {
        const taskOldElement = document.querySelector(`.task[data-id="${task.getId()}"]`);
        const taskUpdatedElement = _Task_DOMTask__WEBPACK_IMPORTED_MODULE_1__["default"].createTaskElement(task);
        taskOldElement.replaceWith(taskUpdatedElement);
    }

    toggleCompleted (id) {
        this.todolist.toggleCompleted(id);
        const task = this.todolist.getTask(id);
        this.updateTaskElement(task);
    }

    /**
     *  Return the task with the given id
     *  If the task is not found, return null
     * @param {} id 
     * @returns 
     */
    getTask (id) {
        return this.todolist.getTask(id);
    }

    /**
     *  ----------------------
     *  Edit Task
     *  ----------------------
     */

    createEditTaskEvents (taskID, taskElement) {
        this.createEditTaskCloseEvent(taskID);
        this.createAddTaskOptionalDataEvent();
        _assets_Task_CheckBox_checkBox_js__WEBPACK_IMPORTED_MODULE_3__["default"].addToggleEventListener(taskElement.querySelector('.check-box'));
        this.createEditTaskSubmitEvent(taskID);
    }

    createEditTaskCloseEvent (taskID) {
        const closeEditTaskForm = document.querySelector('.edit-task .close-new-task-form');
        closeEditTaskForm.addEventListener('click', () => {
            const task = this.getTask(taskID);
            this.updateTaskElement(task);
        });
    }

    closeEditTaskForm () {
        const editTaskForm = document.querySelector('.edit-task ');
        if (editTaskForm) {
            const taskID = editTaskForm.parentElement.dataset.id;
            const task = this.getTask(taskID);
            this.updateTaskElement(task);
        }
        
    }

    createEditTaskSubmitEvent (taskID) {
        const editTaskForm = document.querySelector('.edit-task .new-task-form'); // Get the edit task form
        editTaskForm.addEventListener('submit', (e) => { // Add the event listener to the edit task form
            e.preventDefault(); // Prevent the default submit event
            // Get the values from the edit task form
            const title = document.querySelector('.new-task-title').value;
            const description = document.querySelector('.new-task-notes').value;
            const completed = document.querySelector('.check-box').dataset.isCompleted == 'true' ? true : false;

            let tags = document.querySelector('.new-task-tags').value
            if (tags) {
                tags = tags.split(',').map(tag => tag.trim()); // Remove the white spaces from the tags
            } else {
                tags = []
            }

            let dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(document.querySelector('.new-task-due-date').value);
            if (dueDate == 'Invalid Date') {
                dueDate = null;
            }
            
            const task = this.getTask(taskID);

            // Update the task with the new values
            task.setTitle(title);
            task.setDescription(description);
            task.setDueDate(dueDate);
            task.setCategories(tags);
            task.setCompleted(completed);

            // Update the task element in the task list
            this.updateTaskElement(task);
            this.updateCategoryList();
            (0,_assets_LocalStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveInLocalStorage)(this.getAllTasks());
        });
    }

    /**
     *  ----------------------
     *  Projects
     *  ----------------------
     */




    /**
     *  ----------------------
     *  Form Task 
     *  ----------------------
     */

    /**
     *  Create a task form used to:
     *  - Create a new task
     *  - Edit an existing task
     *  If the taskID is not provided, the form is used to create a new task
     *  If the taskID is provided, the form is used to edit an existing task
     * @param {Task} taskID 
     * @returns 
     */
    createTaskForm(task)  {
        let taskTitle = "";
        let taskNotes = "";
        let taskDueDate = "";
        let firstDateOfWeek = "";
        let lastDateOfWeek = "";
        let taskTags = "";
        let taskComplete = null;

        // If the active project is today, set the due date to today
        if (this.activeProject == 'today') {
            taskDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(), {representation: 'date'});
        } else if (this.activeProject == 'week') { // If the active project is week, set the max due date to the end of the week
            firstDateOfWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(), {weekStartsOn: 1}), {representation: 'date'});
            lastDateOfWeek =  (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(), {weekStartsOn: 1}), {representation: 'date'});;
        }

        if (task) {
            taskTitle = task.getTitle();
            taskNotes = task.getDescription();
            taskComplete = task.isCompleted();
            if (task.getDueDate()){
                taskDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(task.getDueDate(), {representation: 'date'});
            }
            taskTags = task.getCategories();
        }

        const newTaskForm = `
            <div class="${task ? "edit-task" : "task new-task"}">
                <form class="new-task-form">
                    ${taskComplete != null 
                    ? _assets_Task_CheckBox_checkBox_js__WEBPACK_IMPORTED_MODULE_3__["default"].createCheckBoxElement(taskComplete).outerHTML
                    : ""}
                    <div class="form-inputs">
                        <input type="text" class="new-task-title" placeholder="${task ? "Title" : "New Task"}" value="${taskTitle}"  required>
                        <input type="text" class="new-task-notes" placeholder="Notes" value="${taskNotes}">
                        <div class="optional-data">
                            <div class="due-date-container">
                                <span class="due-date-icon material-symbols-outlined">flag</span>
                                <input type="date" class="new-task-due-date" value="${taskDueDate}" min="${firstDateOfWeek}" max="${lastDateOfWeek}">
                            </div>
                            <div class="tags-container">
                            <span class="tag-icon material-symbols-outlined">sell</span>
                                <input type="text" class="new-task-tags" placeholder="Ex: Github,RP..." value="${task ? taskTags.toString() : ""}">
                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <span class="close-new-task-form material-symbols-outlined">close</span>
                        <button type="submit" class="new-task-submit"><span class="material-symbols-outlined">${task ? "check" : "add"}</span></button>
                    </div>
                </form>
            </div>`;

        return newTaskForm;
    }

    addCheckBoxEventListener (id, taskForm) {
        // Get .task-info and .task-delete-container elements
        // Then get the first child of .task-info element and get all the children of the first child
        // Then find the child with the class .check-box
        const children = Array.from(taskForm.children.children[0]);
        const checkBox = children.find(child => child.classList.contains("check-box"));
        checkBox.addEventListener(("click"), () => {
            const task = DOMTodoList.getTask(id);
            const checkBoxElement = taskElement.querySelector(".check-box");
            task.toggleCompleted();
            _Task_DOMTask__WEBPACK_IMPORTED_MODULE_1__["default"].updateCheckBoxElement(checkBoxElement, task.isCompleted())
        })
    }

    /**
     * Create the task creator element and add it to the task list
     * This element is used to create new tasks
     */
    printAddTaskElement () {
        const taskList = document.querySelector('.task-list');
        // Create the new task element
        const newTaskElement = `
            <div class="task new-task">
                <span class="material-symbols-outlined">add</span>
                <p class="task-title">Create Task</p>
            </div>`;

        // Add the new add task element to the task list
        taskList.insertAdjacentHTML('beforeend', newTaskElement);
        this.createAddTaskEvents(); // Add the event listeners to the new add task element
    }

    /**
     *  Show the create new task form when the add task element is clicked
     * Add the event listeners to the new task element
     */
    createAddTaskEvents () { 
        // Add the event listener to the new task element
        const addTaskElement = document.querySelector('.new-task');
        addTaskElement.addEventListener('click', () => {
            this.closeAllForms() // Close all the forms
            this.printAddTaskForm(); // Show the add task form
            this.createAddTaskFormCloseEvent(); // Add the event listener to the close button
            this.createAddTaskSubmitEvent(); // Add the event listener to the submit button
            this.createAddTaskOptionalDataEvent(); // Add the event listener to the optional data icons
        });
    }

    /**
     * Show the add task form
     * This form is used to create new tasks
     */ 
    printAddTaskForm () {
        const newTask = document.querySelector('.new-task');
        newTask.classList.add('new-task-form');
        const newTaskForm = this.createTaskForm(); // Create the new task form
        newTask.outerHTML = newTaskForm; // Replace the new task element with the new task form
    }

    /**
     * Close the add task form
     * Remove the add task form and replace it with the add task element
     */
    closeAddTaskForm () {
        const newTaskForm = document.querySelector('.new-task');
        newTaskForm.remove();
        this.printAddTaskElement();
    }

    /**
     * ----------------------
     *  Add Task Form Events
     * ----------------------
     */

    /**
     * Add the event listener to the Add task form submit button
     */
    createAddTaskSubmitEvent () {
        const newTaskForm = document.querySelector('.new-task-form');
        newTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.querySelector('.new-task-title').value;

            // If the title is empty, don't create the task
            if (title.trim() == '') {
                document.querySelector('.new-task-title').value = '';
                (0,_assets_Popups_hiddenPopup_js__WEBPACK_IMPORTED_MODULE_5__["default"])('Task title cannot be empty', 1500);
                return;
            } 


            const description = document.querySelector('.new-task-notes').value;
            let dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(document.querySelector('.new-task-due-date').value);
            if (dueDate == 'Invalid Date') {
                dueDate = null;
            }
            let tags = document.querySelector('.new-task-tags').value
            if (tags) {
                tags = tags.split(',').map(tag => tag.trim()); // Remove the white spaces from the tags
            } else {
                tags = []
            }
            
            let taskProject = this.activeProject;
            if (taskProject == 'today' || taskProject == 'week') {
                taskProject = 'inbox';
            }

            // Create the task
            const newTask = new _Task_Task_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, false, taskProject, tags);

            if (this.activeProject == 'today' && !(0,_assets_GlobalFunctions_globalFunctions_js__WEBPACK_IMPORTED_MODULE_4__.isToday)(newTask.dueDate)) {
                this.todolist.insertTask(newTask);
                (0,_assets_Popups_hiddenPopup_js__WEBPACK_IMPORTED_MODULE_5__["default"])('Task added to inbox', 1500);
            } else if (this.activeProject == 'week' && !(0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(newTask.dueDate, new Date())) {
                this.todolist.insertTask(newTask);
                (0,_assets_Popups_hiddenPopup_js__WEBPACK_IMPORTED_MODULE_5__["default"])('Task added to inbox', 1500);
            } else {
                this.addTask(newTask);
            }

            
            this.updateCategoryList()
            this.closeAddTaskForm();
        });
    }

    /**
     * Add the event listener to the Add task form close button
     */
    createAddTaskFormCloseEvent () {
        const closeNewTaskForm = document.querySelector('.new-task .close-new-task-form');
        closeNewTaskForm.addEventListener('click', () => {
            this.closeAddTaskForm();
        });
    }

    /**
     *  Add the event listener to the optional data icons
     *  When the icon is clicked, show the optional data form
     *  When the icon is clicked again, hide the optional data form
     *  Only one optional data form can be shown at a time
     *  If the user clicks on another optional data icon, hide the current optional data form and show the new optional data form
     */
    createAddTaskOptionalDataEvent () {
        const optionalData = document.querySelectorAll('.optional-data');
        for (let i = 0; i < optionalData.length; i++) {
            const optionalDataChildren = Array.from(optionalData[i].children);
            optionalDataChildren.forEach(currentChild => {
                const icon = currentChild.querySelector('span');
                icon.addEventListener('click', () => {
                    currentChild.classList.toggle('active-form');
                    optionalDataChildren.forEach(child => {
                        if (child !== currentChild) {
                            child.classList.remove('active-form');
                        }
                    });
                });
            });
        }
        
    }

    removeProject (project) {
        const projectButton = document.querySelector(`button[data-project-type="${project}"]`).parentElement;
        projectButton.removeEventListener("click", () => this.selectProjectButtonActive(button.dataset.projectType))
        projectButton.remove();
        this.removeAllTasksByProject(project);
        (0,_Project_DOMProjects_js__WEBPACK_IMPORTED_MODULE_6__.createProjectsEvents)()
        ;(0,_Project_DOMProjects_js__WEBPACK_IMPORTED_MODULE_6__.selectProjectButtonActive)('inbox');
        (0,_assets_Popups_hiddenPopup_js__WEBPACK_IMPORTED_MODULE_5__["default"])(`Project <span class="popup-task-project">${project}</span> deleted successfully`);
    }

    closeAllForms ()  {
        (0,_Project_DOMProjects_js__WEBPACK_IMPORTED_MODULE_6__.closeNewProjectForm)();
        this.closeAddTaskForm()
        this.closeEditTaskForm()
    }
}



/***/ }),

/***/ "./src/modules/TodoList/TodoList.js":
/*!******************************************!*\
  !*** ./src/modules/TodoList/TodoList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");


class TodoList {
    constructor () {
        this.taskList = [];
        this.projectList = [];
    }

    addProject(projectTitle) {
        if (!this.projectList.includes(projectTitle)) {
            this.projectList.push(projectTitle);
        }
    }

    getProjectList() {
        return this.projectList;
    }

    getTaskList () {
        return this.taskList;
    }

    getTaskListByProject (project) {
        return this.taskList.filter(task => task.project == project);
    }

    getTodayTaskList () {
        return this.taskList.filter(task => {
            const taskDate = task.dueDate;
            if (taskDate) {
                return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(taskDate);
            }
        });
    }

    getWeekTaskList () {
        return this.taskList.filter(task => {
            const taskDate = task.dueDate;
            if (taskDate) {
                return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate);
            }
        });
    }

    setTaskList (taskList) {
        this.taskList = taskList;
    }

    insertTask (task) {
        this.taskList.push(task);
    }
    getTask (id) {
        return this.taskList.find(task => task.id == id);
    }

    removeTask (id) {
        this.taskList = this.taskList.filter(t => t.id != id);
    }

    removeAllTasksByProject (project) {
        this.taskList = this.taskList.filter(task => task.project != project);
    }

    updateTask (task) {
        const index = this.taskList.findIndex(task => task.id == task.id);
        if (index > -1) {
            this.taskList[index] = task;
        }
    }

    toggleCompleted (id) {
        const task = this.getTask(id);
        task.toggleCompleted();
    }


    static fromJSON (json) {
        let todoList = new TodoList();
        for (let task of json.taskList) {
            todoList.addTask(Task.fromJSON(task));
        }
        return todoList;
    }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTyw2RkFBNkYsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxlQUFlLE1BQU0sZUFBZSxRQUFRLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsZUFBZSxNQUFNLGVBQWUsS0FBSyxnQkFBZ0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sS0FBSyxLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE9BQU8sS0FBSyxLQUFLLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLFVBQVUsZUFBZSxLQUFLLFVBQVUsa0JBQWtCLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxnQkFBZ0IsS0FBSyxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxnQkFBZ0IsS0FBSyxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksbUJBQW1CLE9BQU8sS0FBSyxLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxnQkFBZ0IsTUFBTSxLQUFLLEtBQUssZUFBZSxLQUFLLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLGdCQUFnQixLQUFLLGlCQUFpQixNQUFNLFlBQVksZ0JBQWdCLEtBQUssa0JBQWtCLE9BQU8sS0FBSyxLQUFLLGVBQWUsS0FBSyxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxpQkFBaUIsTUFBTSxZQUFZLGdCQUFnQixLQUFLLGtCQUFrQixPQUFPLEtBQUssS0FBSyxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxVQUFVLGlCQUFpQixNQUFNLFVBQVUs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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtRkFBbUYsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxL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QTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsMkVBQWlCOztBQUV2QztBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsdUVBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxpRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFFQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFFQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxRUFBZTtBQUM3QixnQkFBZ0IscUVBQWU7QUFDL0I7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ253Qm9DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFFQUFlO0FBQzlELEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUMvRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sMERBQTBELE1BQU07QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDL0U3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNTO0FBQ3BEO0FBQ2U7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjJDO0FBQ21CO0FBQ1E7QUFDbEI7QUFDcEQ7QUFDZTtBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGFBQWEsdUVBQWlCLG1CQUFtQiwyRUFBcUI7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDJDO0FBQ1M7QUFDVTtBQUMvQztBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVFQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUVBQWlCO0FBQ3pDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjJDO0FBQ2E7QUFDUTtBQUNaO0FBQ3BEO0FBQ2U7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixhQUFhLG9FQUFjLDRCQUE0Qix3RUFBa0I7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMkM7QUFDUztBQUNJO0FBQ1Y7QUFDaUI7QUFDaEQ7QUFDZjtBQUNBLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0EsdUJBQXVCLDJFQUFpQjtBQUN4Qyw4QkFBOEIsK0RBQVM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9FQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBYztBQUN0QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBLHlJQUF5STtBQUN6SSxJQUFJO0FBQ0oscUlBQXFJO0FBQ3JJLElBQUk7QUFDSiwrSUFBK0k7QUFDL0ksSUFBSTtBQUNKLGlKQUFpSjtBQUNqSjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSjJDO0FBQ1M7QUFDckM7QUFDZixFQUFFLGtFQUFZO0FBQ2Q7QUFDQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOEQ7QUFDQTtBQUNWO0FBQ3JDO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1gyQztBQUNTO0FBQ047QUFDaUI7QUFDaEQ7QUFDZjtBQUNBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLHFCQUFxQiwrREFBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCd0Q7QUFDSjtBQUNJO0FBQ1Y7QUFDaUI7QUFDaEQ7QUFDZjtBQUNBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLDhCQUE4QiwrREFBUztBQUN2QyxhQUFhLG9FQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQWM7QUFDM0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG1EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxrQkFBa0IsNERBQU07QUFDeEIsZUFBZSxtRUFBUztBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMNkQ7QUFDNUI7QUFDVztBQUNNO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxpQkFBaUI7QUFDaEY7QUFDQTtBQUNlO0FBQ2Y7QUFDQSxFQUFFLHNFQUFZO0FBQ2QsdUJBQXVCLCtFQUFpQjtBQUN4QyxxQkFBcUIsbUVBQVM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzBDO0FBQ2dCO0FBQ2xCO0FBQ29CO0FBQ1E7QUFDMkI7QUFDNkI7QUFDekU7QUFDTTtBQUNXO0FBQ1QsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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akIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtGQUFrRixRQUFRO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQW9CO0FBQzVCLFFBQVEsbUZBQXlCO0FBQ2pDLFFBQVEseUVBQWlCLDZDQUE2QyxRQUFRO0FBQzlFOztBQUVBO0FBQ0EsUUFBUSw0RUFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZmK0M7O0FBRWhDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvREFBTztBQUM5QjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvREFBVTtBQUNqQztBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25GZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvY2F0ZWdvcnlMaXN0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvaGFtYnVyZ2VyLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvcHJvamVjdHMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy90YXNrLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXRJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2NhdGVnb3J5TGlzdC5jc3M/Nzc2ZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvZ2xvYmFsLmNzcz81ODRhIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9oYW1idXJnZXIuY3NzPzJiYTciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2hlYWRlci5jc3M/OGFjMSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvbWFpbi5jc3M/MmM5ZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvcG9wdXAuY3NzPzAyNzMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL3Byb2plY3RzLmNzcz9lZTA1Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy90YXNrLmNzcz9kNTA0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXNzZXRzL0dsb2JhbEZ1bmN0aW9ucy9nbG9iYWxGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXNzZXRzL0hhbWJ1cmdlci9oYW1idXJnZXJOYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXNzZXRzL0xvY2FsU3RvcmFnZS9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXNzZXRzL1BvcHVwcy9oaWRkZW5Qb3B1cC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3NldHMvVGFzay9DYXRlZ29yaWVzTGlzdC9jYXRlZ29yeUxpc3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXNzZXRzL1Rhc2svQ2hlY2tCb3gvY2hlY2tCb3guanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXNzZXRzL1Rhc2svUmVtb3ZlQnV0dG9uL3JlbW92ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL1Byb2plY3QvRE9NUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9UYXNrL0RPTVRhc2suanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9UYXNrL1Rhc2suanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9Ub2RvTGlzdC9ET01Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL1RvZG9MaXN0L1RvZG9MaXN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNhdGVnb3J5LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDUwcHggLSAzMDBweCAtIDcwcHgpO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG59XG4uY2F0ZWdvcmllcy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLmNhdGVnb3J5IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWY7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXRlZ29yeS5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMHB4KTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NhdGVnb3J5TGlzdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXRlZ29yeS1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDUwcHggLSAzMDBweCAtIDcwcHgpO1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG4uY2F0ZWdvcmllcy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDFmO1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2F0ZWdvcnkuc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuY2F0ZWdvcnktY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzBweCk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS10ZXh0OiAjMDMwNDAxO1xuICAgIC0tYmFja2dyb3VuZDogI2Y2ZjlmMDtcbiAgICAtLXByaW1hcnk6ICNhYmNhNzI7XG4gICAgLS1zZWNvbmRhcnk6ICNlMGViY2I7XG4gICAgLS1hY2NlbnQ6ICM4NWFhNDE7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1DQUFtQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdGV4dDogIzAzMDQwMTtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjZmOWYwO1xcbiAgICAtLXByaW1hcnk6ICNhYmNhNzI7XFxuICAgIC0tc2Vjb25kYXJ5OiAjZTBlYmNiO1xcbiAgICAtLWFjY2VudDogIzg1YWE0MTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiFcbiAqIEhhbWJ1cmdlcnNcbiAqIEBkZXNjcmlwdGlvbiBUYXN0eSBDU1MtYW5pbWF0ZWQgaGFtYnVyZ2Vyc1xuICogQGF1dGhvciBKb25hdGhhbiBTdWggQGpvbnN1aFxuICogQHNpdGUgaHR0cHM6Ly9qb25zdWguY29tL2hhbWJ1cmdlcnNcbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zdWgvaGFtYnVyZ2Vyc1xuICovXG4gLmhhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBmaWx0ZXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5oYW1idXJnZXIge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5oYW1idXJnZXI6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC43OyB9XG4gICAgLmhhbWJ1cmdlci5pcy1hY3RpdmU6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC43OyB9XG4gICAgLmhhbWJ1cmdlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcixcbiAgICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXG4gICAgLmhhbWJ1cmdlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxuICBcbiAgLmhhbWJ1cmdlci1ib3gge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIFxuICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMnB4OyB9XG4gICAgLmhhbWJ1cmdlci1pbm5lciwgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7IH1cbiAgICAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IC0xMHB4OyB9XG4gICAgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAtMTBweDsgfVxuICBcbiAgLypcbiAgICAgKiAzRFhcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tM2R4IC5oYW1idXJnZXItYm94IHtcbiAgICBwZXJzcGVjdGl2ZTogODBweDsgfVxuICBcbiAgLmhhbWJ1cmdlci0tM2R4IC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XG4gIFxuICAvKlxuICAgICAqIDNEWCBSZXZlcnNlXG4gICAgICovXG4gIC5oYW1idXJnZXItLTNkeC1yIC5oYW1idXJnZXItYm94IHtcbiAgICBwZXJzcGVjdGl2ZTogODBweDsgfVxuICBcbiAgLmhhbWJ1cmdlci0tM2R4LXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tM2R4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS0zZHgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxuICBcbiAgLypcbiAgICAgKiAzRFlcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItYm94IHtcbiAgICBwZXJzcGVjdGl2ZTogODBweDsgfVxuICBcbiAgLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHkgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHkgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS0zZHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tM2R5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tM2R5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxuICBcbiAgLypcbiAgICAgKiAzRFkgUmV2ZXJzZVxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS0zZHktciAuaGFtYnVyZ2VyLWJveCB7XG4gICAgcGVyc3BlY3RpdmU6IDgwcHg7IH1cbiAgXG4gIC5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHktciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tM2R5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxuICBcbiAgLypcbiAgICAgKiAzRFhZXG4gICAgICovXG4gIC5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1ib3gge1xuICAgIHBlcnNwZWN0aXZlOiA4MHB4OyB9XG4gIFxuICAuaGFtYnVyZ2VyLS0zZHh5IC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHh5IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tM2R4eSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLTNkeHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tM2R4eS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XG4gIFxuICAvKlxuICAgICAqIDNEWFkgUmV2ZXJzZVxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1ib3gge1xuICAgIHBlcnNwZWN0aXZlOiA4MHB4OyB9XG4gIFxuICAuaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeHktciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeHktciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLTNkeHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDE4MGRlZykgcm90YXRlWigtMTgwZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cbiAgXG4gIC8qXG4gICAgICogQXJyb3dcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tYXJyb3cuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1hcnJvdy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIEFycm93IFJpZ2h0XG4gICAgICovXG4gIC5oYW1idXJnZXItLWFycm93LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tYXJyb3ctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIEFycm93IEFsdFxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tYXJyb3dhbHQgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tYXJyb3dhbHQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tYXJyb3dhbHQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTsgfVxuICBcbiAgLypcbiAgICAgKiBBcnJvdyBBbHQgUmlnaHRcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tYXJyb3dhbHQtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tYXJyb3dhbHQtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgLTEwcHgsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAxMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7IH1cbiAgXG4gIC8qXG4gICAgICogQXJyb3cgVHVyblxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLWFycm93dHVybi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cbiAgXG4gIC8qXG4gICAgICogQXJyb3cgVHVybiBSaWdodFxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgMCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLWFycm93dHVybi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxuICBcbiAgLypcbiAgICAgKiBCb3JpbmdcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tYm9yaW5nIC5oYW1idXJnZXItaW5uZXIsIC5oYW1idXJnZXItLWJvcmluZyAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLWJvcmluZyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tYm9yaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS1ib3JpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICBvcGFjaXR5OiAwOyB9XG4gICAgLmhhbWJ1cmdlci0tYm9yaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICBib3R0b206IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XG4gIFxuICAvKlxuICAgICAqIENvbGxhcHNlXG4gICAgICovXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xM3M7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2UgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdG9wOiAtMjBweDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCBvcGFjaXR5IDAuMXMgbGluZWFyOyB9XG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2UgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjEycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2UuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIG9wYWNpdHkgMC4xcyAwLjIycyBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE2cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIHRyYW5zZm9ybSAwLjEzcyAwLjI1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICBcbiAgLypcbiAgICAgKiBDb2xsYXBzZSBSZXZlcnNlXG4gICAgICovXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlLXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjEzcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEzcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRvcDogLTIwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgb3BhY2l0eSAwLjFzIGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLWNvbGxhcHNlLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjEycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLWNvbGxhcHNlLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIG9wYWNpdHkgMC4xcyAwLjIycyBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgXG4gIC8qXG4gICAgICogRWxhc3RpY1xuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1lbGFzdGljIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRvcDogMnB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjc1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTI1cyAwLjI3NXMgZWFzZTsgfVxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdG9wOiAyMHB4O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjc1cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoMTM1ZGVnKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7IH1cbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICBvcGFjaXR5OiAwOyB9XG4gICAgLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgcm90YXRlKC0yNzBkZWcpO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNzVzOyB9XG4gIFxuICAvKlxuICAgICAqIEVsYXN0aWMgUmV2ZXJzZVxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdG9wOiAycHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNzVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTsgfVxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjEyNXMgMC4yNzVzIGVhc2U7IH1cbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdG9wOiAyMHB4O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjc1cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tZWxhc3RpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7IH1cbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgIG9wYWNpdHk6IDA7IH1cbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNzVzOyB9XG4gIFxuICAvKlxuICAgICAqIEVtcGhhdGljXG4gICAgICovXG4gIC5oYW1idXJnZXItLWVtcGhhdGljIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLmhhbWJ1cmdlci0tZW1waGF0aWMgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTI1cyBjdWJpYy1iZXppZXIoMC42LCAwLjA0LCAwLjk4LCAwLjMzNSksIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCBsZWZ0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHJpZ2h0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IC04MHB4O1xuICAgICAgICB0b3A6IC04MHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDgwcHgsIDgwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4xMjVzIGVhc2Utb3V0LCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7IH1cbiAgICAgIC5oYW1idXJnZXItLWVtcGhhdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICAgIHJpZ2h0OiAtODBweDtcbiAgICAgICAgdG9wOiAtODBweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODBweCwgODBweCwgMCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuMTI1cyBlYXNlLW91dCwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHRyYW5zZm9ybSAwLjEyNXMgMC4xNzVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIEVtcGhhdGljIFJldmVyc2VcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tZW1waGF0aWMtciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIGxlZnQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTI1cyBjdWJpYy1iZXppZXIoMC42LCAwLjA0LCAwLjk4LCAwLjMzNSksIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCByaWdodCAwLjEyNXMgMC4xNzVzIGVhc2UtaW47IH1cbiAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogLTgwcHg7XG4gICAgICAgIHRvcDogODBweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4MHB4LCAtODBweCwgMCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4xMjVzIGVhc2Utb3V0LCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7IH1cbiAgICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IC04MHB4O1xuICAgICAgICB0b3A6IDgwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTgwcHgsIC04MHB4LCAwKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB0cmFuc2l0aW9uOiByaWdodCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxuICBcbiAgLypcbiAgICAgKiBNaW51c1xuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1taW51cyAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLW1pbnVzIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wOHMgMHMgZWFzZS1vdXQsIHRvcCAwLjA4cyAwcyBlYXNlLW91dCwgb3BhY2l0eSAwcyBsaW5lYXI7IH1cbiAgXG4gIC5oYW1idXJnZXItLW1pbnVzLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLW1pbnVzLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wOHMgZWFzZS1vdXQsIHRvcCAwLjA4cyBlYXNlLW91dCwgb3BhY2l0eSAwcyAwLjA4cyBsaW5lYXI7IH1cbiAgXG4gIC5oYW1idXJnZXItLW1pbnVzLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRvcDogMDsgfVxuICBcbiAgLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICBib3R0b206IDA7IH1cbiAgXG4gIC8qXG4gICAgICogU2xpZGVyXG4gICAgICovXG4gIC5oYW1idXJnZXItLXNsaWRlciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0b3A6IDJweDsgfVxuICAgIC5oYW1idXJnZXItLXNsaWRlciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1czsgfVxuICAgIC5oYW1idXJnZXItLXNsaWRlciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0b3A6IDIwcHg7IH1cbiAgXG4gIC5oYW1idXJnZXItLXNsaWRlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUzZCgtNS43MTQyOXB4LCAtNnB4LCAwKTtcbiAgICAgIG9wYWNpdHk6IDA7IH1cbiAgICAuaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHJvdGF0ZSgtOTBkZWcpOyB9XG4gIFxuICAvKlxuICAgICAqIFNsaWRlciBSZXZlcnNlXG4gICAgICovXG4gIC5oYW1idXJnZXItLXNsaWRlci1yIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRvcDogMnB4OyB9XG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7IH1cbiAgICAuaGFtYnVyZ2VyLS1zbGlkZXItciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0b3A6IDIwcHg7IH1cbiAgXG4gIC5oYW1idXJnZXItLXNsaWRlci1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlM2QoNS43MTQyOXB4LCAtNnB4LCAwKTtcbiAgICAgIG9wYWNpdHk6IDA7IH1cbiAgICAuaGFtYnVyZ2VyLS1zbGlkZXItci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgcm90YXRlKDkwZGVnKTsgfVxuICBcbiAgLypcbiAgICAgKiBTcGluXG4gICAgICovXG4gIC5oYW1idXJnZXItLXNwaW4gLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gICAgLmhhbWJ1cmdlci0tc3BpbiAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4yNXMgZWFzZS1pbiwgb3BhY2l0eSAwLjFzIGVhc2UtaW47IH1cbiAgICAuaGFtYnVyZ2VyLS1zcGluIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMjVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tc3Bpbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcGluLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgMC4xMnMgZWFzZS1vdXQ7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcGluLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICBib3R0b206IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjIycyAwLjEycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICBcbiAgLypcbiAgICAgKiBTcGluIFJldmVyc2VcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tc3Bpbi1yIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAgIC5oYW1idXJnZXItLXNwaW4tciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4yNXMgZWFzZS1pbiwgb3BhY2l0eSAwLjFzIGVhc2UtaW47IH1cbiAgICAuaGFtYnVyZ2VyLS1zcGluLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4yNXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1zcGluLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLXNwaW4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0OyB9XG4gICAgLmhhbWJ1cmdlci0tc3Bpbi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICBib3R0b206IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMjJzIDAuMTJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIFNwcmluZ1xuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdG9wOiAycHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwcyAwLjEzcyBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCB0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdG9wOiAyMHB4O1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tc3ByaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjIycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgLmhhbWJ1cmdlci0tc3ByaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgdHJhbnNmb3JtIDAuMTNzIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxuICBcbiAgLypcbiAgICAgKiBTcHJpbmcgUmV2ZXJzZVxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1zcHJpbmctciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTNzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAgIC5oYW1idXJnZXItLXNwcmluZy1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRvcDogLTIwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgb3BhY2l0eSAwcyBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmctciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tc3ByaW5nLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLXNwcmluZy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCBvcGFjaXR5IDBzIDAuMjJzIGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLXNwcmluZy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgXG4gIC8qXG4gICAgICogU3RhbmRcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tc3RhbmQgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjA3NXMgbGluZWFyOyB9XG4gICAgLmhhbWJ1cmdlci0tc3RhbmQgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMDc1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1zdGFuZC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjE1cyBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS1zdGFuZC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1zdGFuZC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIFN0YW5kIFJldmVyc2VcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tc3RhbmQtciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMDc1cyBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS1zdGFuZC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMDc1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gICAgLmhhbWJ1cmdlci0tc3RhbmQtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMDc1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1zdGFuZC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjE1cyBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS1zdGFuZC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLXN0YW5kLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICBcbiAgLypcbiAgICAgKiBTcXVlZXplXG4gICAgICovXG4gIC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wNzVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAgIC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xMnMgZWFzZSwgb3BhY2l0eSAwLjA3NXMgZWFzZTsgfVxuICAgIC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjEycyBlYXNlLCB0cmFuc2Zvcm0gMC4wNzVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1zcXVlZXplLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tc3F1ZWV6ZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIGVhc2UsIG9wYWNpdHkgMC4wNzVzIDAuMTJzIGVhc2U7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcXVlZXplLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICBib3R0b206IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyBlYXNlLCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIFZvcnRleFxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS12b3J0ZXggLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXggLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgb3BhY2l0eTsgfVxuICAgIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3R0b20sIHRyYW5zZm9ybTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3NjVkZWcpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuICAgIC5oYW1idXJnZXItLXZvcnRleC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIG9wYWNpdHk6IDA7IH1cbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuICBcbiAgLypcbiAgICAgKiBWb3J0ZXggUmV2ZXJzZVxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBvcGFjaXR5OyB9XG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm90dG9tLCB0cmFuc2Zvcm07IH1cbiAgXG4gIC5oYW1idXJnZXItLXZvcnRleC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNzY1ZGVnKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICBvcGFjaXR5OiAwOyB9XG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGFtYnVyZ2VyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7O0VBTUU7Q0FDRDtJQUNHLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQjs7SUFFQTtRQUNJO1lBQ0ksbUJBQW1CO1FBQ3ZCO0lBQ0o7O0lBRUE7TUFDRSxZQUFZLEVBQUU7SUFDaEI7TUFDRSxZQUFZLEVBQUU7SUFDaEI7OztNQUdFLHNCQUFzQixFQUFFOztFQUU1QjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFFOztFQUV0QjtJQUNFLGNBQWM7SUFDZCxRQUFRO0lBQ1IsZ0JBQWdCLEVBQUU7SUFDbEI7TUFDRSxXQUFXO01BQ1gsV0FBVztNQUNYLHNCQUFz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LGtFQUFrRSxFQUFFO0lBQ3BFO01BQ0Usc0RBQXNELEVBQUU7SUFDMUQ7TUFDRSw2RkFBNkYsRUFBRTs7RUFFbkc7SUFDRSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLCtEQUErRCxFQUFFO0lBQ2pFO01BQ0UsTUFBTTtNQUNOLFVBQVU7TUFDVixzREFBc0QsRUFBRTtJQUMxRDtNQUNFLFNBQVM7TUFDVCx5QkFBeUI7TUFDekIsMEZBQTBGLEVBQUU7O0VBRWhHOztNQUVJO0VBQ0o7SUFDRSx5QkFBeUI7SUFDekIsMERBQTBELEVBQUU7SUFDNUQ7TUFDRSx1QkFBdUI7TUFDdkIsc0JBQXNCO01BQ3RCLGtDQUFrQyxFQUFFO0lBQ3RDO01BQ0UsaUNBQWlDLEVBQUU7SUFDckM7TUFDRSxzQ0FBc0MsRUFBRTs7RUFFNUM7SUFDRSx5QkFBeUI7SUFDekIsMERBQTBELEVBQUU7SUFDNUQ7TUFDRSxvQkFBb0IsRUFBRTtJQUN4QjtNQUNFLE1BQU07TUFDTixVQUFVLEVBQUU7SUFDZDtNQUNFLFNBQVM7TUFDVCx3QkFBd0IsRUFBRTs7RUFFOUI7O01BRUk7RUFDSjtJQUNFLHlCQUF5QjtJQUN6QiwwREFBMEQsRUFBRTtJQUM1RDtNQUNFLHVCQUF1QjtNQUN2QixzQkFBc0I7TUFDdEIsa0NBQWtDLEVBQUU7SUFDdEM7TUFDRSxpQ0FBaUMsRUFBRTtJQUNyQztNQUNFLHNDQUFzQyxFQUFFOztFQUU1QztJQUNFLDBCQUEwQjtJQUMxQiwwREFBMEQsRUFBRTtJQUM1RDtNQUNFLG9CQUFvQixFQUFFO0lBQ3hCO01BQ0UsTUFBTTtNQUNOLFVBQVUsRUFBRTtJQUNkO01BQ0UsU0FBUztNQUNULHlCQUF5QixFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIVxcbiAqIEhhbWJ1cmdlcnNcXG4gKiBAZGVzY3JpcHRpb24gVGFzdHkgQ1NTLWFuaW1hdGVkIGhhbWJ1cmdlcnNcXG4gKiBAYXV0aG9yIEpvbmF0aGFuIFN1aCBAam9uc3VoXFxuICogQHNpdGUgaHR0cHM6Ly9qb25zdWguY29tL2hhbWJ1cmdlcnNcXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vam9uc3VoL2hhbWJ1cmdlcnNcXG4gKi9cXG4gLmhhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBmaWx0ZXI7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgLmhhbWJ1cmdlciB7XFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyOmhvdmVyIHtcXG4gICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gICAgLmhhbWJ1cmdlci5pcy1hY3RpdmU6aG92ZXIge1xcbiAgICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyLFxcbiAgICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXFxuICAgIC5oYW1idXJnZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XFxuICBcXG4gIC5oYW1idXJnZXItYm94IHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogLTJweDsgfVxcbiAgICAuaGFtYnVyZ2VyLWlubmVyLCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB3aWR0aDogMzBweDtcXG4gICAgICBoZWlnaHQ6IDNweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlOyB9XFxuICAgIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAgIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAtMTBweDsgfVxcbiAgICAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgYm90dG9tOiAtMTBweDsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiAzRFhcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1ib3gge1xcbiAgICBwZXJzcGVjdGl2ZTogODBweDsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R4IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tM2R4IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tM2R4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiAzRFggUmV2ZXJzZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLTNkeC1yIC5oYW1idXJnZXItYm94IHtcXG4gICAgcGVyc3BlY3RpdmU6IDgwcHg7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tM2R4LXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLTNkeC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIDNEWVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLTNkeSAuaGFtYnVyZ2VyLWJveCB7XFxuICAgIHBlcnNwZWN0aXZlOiA4MHB4OyB9XFxuICBcXG4gIC5oYW1idXJnZXItLTNkeSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHkgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHkgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS0zZHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiAzRFkgUmV2ZXJzZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItYm94IHtcXG4gICAgcGVyc3BlY3RpdmU6IDgwcHg7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tM2R5LXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R5LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHktciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLTNkeS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogM0RYWVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1ib3gge1xcbiAgICBwZXJzcGVjdGl2ZTogODBweDsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS0zZHh5IC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHh5IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tM2R4eS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHh5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHh5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogM0RYWSBSZXZlcnNlXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tM2R4eS1yIC5oYW1idXJnZXItYm94IHtcXG4gICAgcGVyc3BlY3RpdmU6IDgwcHg7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tM2R4eS1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeHktciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeHktciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLTNkeHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKC0xODBkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R4eS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogQXJyb3dcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1hcnJvdy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLWFycm93LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIEFycm93IFJpZ2h0XFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tYXJyb3ctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1hcnJvdy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIEFycm93IEFsdFxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLWFycm93YWx0IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLWFycm93YWx0LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7IH1cXG4gIFxcbiAgLypcXG4gICAgICogQXJyb3cgQWx0IFJpZ2h0XFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tYXJyb3dhbHQtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tYXJyb3dhbHQtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAtMTBweCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLWFycm93YWx0LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMTBweCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBBcnJvdyBUdXJuXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAwLCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogQXJyb3cgVHVybiBSaWdodFxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLWFycm93dHVybi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLWFycm93dHVybi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogQm9yaW5nXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tYm9yaW5nIC5oYW1idXJnZXItaW5uZXIsIC5oYW1idXJnZXItLWJvcmluZyAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLWJvcmluZyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tYm9yaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLWJvcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAuaGFtYnVyZ2VyLS1ib3JpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBDb2xsYXBzZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xM3M7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTNzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2UgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTIwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIG9wYWNpdHkgMC4xcyBsaW5lYXI7IH1cXG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2UgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjIycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLWNvbGxhcHNlLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCBvcGFjaXR5IDAuMXMgMC4yMnMgbGluZWFyOyB9XFxuICAgIC5oYW1idXJnZXItLWNvbGxhcHNlLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMTZzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgdHJhbnNmb3JtIDAuMTNzIDAuMjVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIENvbGxhcHNlIFJldmVyc2VcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xM3M7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTNzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2UtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdG9wOiAtMjBweDtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgb3BhY2l0eSAwLjFzIGxpbmVhcjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMTJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCB0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tY29sbGFwc2Utci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2Utci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgb3BhY2l0eSAwLjFzIDAuMjJzIGxpbmVhcjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogRWxhc3RpY1xcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLWVsYXN0aWMgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRvcDogMnB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI3NXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAxMHB4O1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xMjVzIDAuMjc1cyBlYXNlOyB9XFxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRvcDogMjBweDtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNzVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLWVsYXN0aWMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSgxMzVkZWcpO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7IH1cXG4gICAgLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXG4gICAgICBvcGFjaXR5OiAwOyB9XFxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoLTI3MGRlZyk7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNzVzOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIEVsYXN0aWMgUmV2ZXJzZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLWVsYXN0aWMtciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdG9wOiAycHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjc1cztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XFxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMTBweDtcXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTI1cyAwLjI3NXMgZWFzZTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRvcDogMjBweDtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNzVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLWVsYXN0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKC0xMzVkZWcpO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7IH1cXG4gICAgLmhhbWJ1cmdlci0tZWxhc3RpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgLmhhbWJ1cmdlci0tZWxhc3RpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgcm90YXRlKDI3MGRlZyk7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNzVzOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIEVtcGhhdGljXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tZW1waGF0aWMge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XFxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIGxlZnQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XFxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxMHB4O1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHJpZ2h0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cXG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICAgIGxlZnQ6IC04MHB4O1xcbiAgICAgICAgdG9wOiAtODBweDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODBweCwgODBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4xMjVzIGVhc2Utb3V0LCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7IH1cXG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IC04MHB4O1xcbiAgICAgICAgdG9wOiAtODBweDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTgwcHgsIDgwcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogcmlnaHQgMC4xMjVzIGVhc2Utb3V0LCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogRW1waGF0aWMgUmV2ZXJzZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLWVtcGhhdGljLXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjEyNXMgMC4xNzVzIGVhc2UtaW47IH1cXG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTI1cyBjdWJpYy1iZXppZXIoMC42LCAwLjA0LCAwLjk4LCAwLjMzNSksIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCBsZWZ0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxcbiAgICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxMHB4O1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHJpZ2h0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxcbiAgICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgICBsZWZ0OiAtODBweDtcXG4gICAgICAgIHRvcDogODBweDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODBweCwgLTgwcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxcbiAgICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICAgIHJpZ2h0OiAtODBweDtcXG4gICAgICAgIHRvcDogODBweDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTgwcHgsIC04MHB4LCAwKSByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogcmlnaHQgMC4xMjVzIGVhc2Utb3V0LCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogTWludXNcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1taW51cyAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLW1pbnVzIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDhzIDBzIGVhc2Utb3V0LCB0b3AgMC4wOHMgMHMgZWFzZS1vdXQsIG9wYWNpdHkgMHMgbGluZWFyOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLW1pbnVzLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLW1pbnVzLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA4cyBlYXNlLW91dCwgdG9wIDAuMDhzIGVhc2Utb3V0LCBvcGFjaXR5IDBzIDAuMDhzIGxpbmVhcjsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1taW51cy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdG9wOiAwOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLW1pbnVzLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIGJvdHRvbTogMDsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBTbGlkZXJcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1zbGlkZXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRvcDogMnB4OyB9XFxuICAgIC5oYW1idXJnZXItLXNsaWRlciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMTBweDtcXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XFxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7IH1cXG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0b3A6IDIwcHg7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tc2xpZGVyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLXNsaWRlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZTNkKC01LjcxNDI5cHgsIC02cHgsIDApO1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgcm90YXRlKC05MGRlZyk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogU2xpZGVyIFJldmVyc2VcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1zbGlkZXItciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdG9wOiAycHg7IH1cXG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDEwcHg7XFxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzOyB9XFxuICAgIC5oYW1idXJnZXItLXNsaWRlci1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0b3A6IDIwcHg7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tc2xpZGVyLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLXNsaWRlci1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUzZCg1LjcxNDI5cHgsIC02cHgsIDApO1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoOTBkZWcpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIFNwaW5cXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1zcGluIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjIycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICAgIC5oYW1idXJnZXItLXNwaW4gLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjI1cyBlYXNlLWluLCBvcGFjaXR5IDAuMXMgZWFzZS1pbjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcGluIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjI1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tc3Bpbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3Bpbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0OyB9XFxuICAgIC5oYW1idXJnZXItLXNwaW4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMjJzIDAuMTJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIFNwaW4gUmV2ZXJzZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLXNwaW4tciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcGluLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjI1cyBlYXNlLWluLCBvcGFjaXR5IDAuMXMgZWFzZS1pbjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcGluLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMjVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1zcGluLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcGluLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZS1vdXQsIG9wYWNpdHkgMC4xcyAwLjEycyBlYXNlLW91dDsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcGluLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yMnMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogU3ByaW5nXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tc3ByaW5nIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0b3A6IDJweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwcyAwLjEzcyBsaW5lYXI7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3ByaW5nIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAxMHB4O1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCB0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3ByaW5nIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0b3A6IDIwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1zcHJpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjIycztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMTVzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgdHJhbnNmb3JtIDAuMTNzIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBTcHJpbmcgUmV2ZXJzZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLXNwcmluZy1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xM3M7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3ByaW5nLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRvcDogLTIwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIG9wYWNpdHkgMHMgbGluZWFyOyB9XFxuICAgIC5oYW1idXJnZXItLXNwcmluZy1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1zcHJpbmctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjIycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLXNwcmluZy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCBvcGFjaXR5IDBzIDAuMjJzIGxpbmVhcjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMTVzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgdHJhbnNmb3JtIDAuMTNzIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIFN0YW5kXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tc3RhbmQgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4wNzVzIGxpbmVhcjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3RhbmQgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tc3RhbmQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xNXMgbGluZWFyOyB9XFxuICAgIC5oYW1idXJnZXItLXN0YW5kLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zdGFuZC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIFN0YW5kIFJldmVyc2VcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1zdGFuZC1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMDc1cyBsaW5lYXI7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3RhbmQtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3RhbmQtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjA3NXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1zdGFuZC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjE1cyBsaW5lYXI7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3RhbmQtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3RhbmQtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIFNxdWVlemVcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1zcXVlZXplIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjA3NXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcXVlZXplIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjEycyBlYXNlLCBvcGFjaXR5IDAuMDc1cyBlYXNlOyB9XFxuICAgIC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4xMnMgZWFzZSwgdHJhbnNmb3JtIDAuMDc1cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1zcXVlZXplLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLXNxdWVlemUuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyBlYXNlLCBvcGFjaXR5IDAuMDc1cyAwLjEycyBlYXNlOyB9XFxuICAgIC5oYW1idXJnZXItLXNxdWVlemUuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIGVhc2UsIHRyYW5zZm9ybSAwLjA3NXMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogVm9ydGV4XFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOyB9XFxuICAgIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgb3BhY2l0eTsgfVxcbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXggLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvdHRvbSwgdHJhbnNmb3JtOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLXZvcnRleC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDc2NWRlZyk7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLXZvcnRleC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XFxuICAgIC5oYW1idXJnZXItLXZvcnRleC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIFZvcnRleCBSZXZlcnNlXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOyB9XFxuICAgIC5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBvcGFjaXR5OyB9XFxuICAgIC5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3R0b20sIHRyYW5zZm9ybTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC03NjVkZWcpO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLXZvcnRleC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLXZvcnRleC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cXG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogNzBweDtcbn1cblxuLnRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB2YXIoLS1wcmltYXJ5KSAsIHZhcigtLWFjY2VudCkpO1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxNDdkZWcsXG4gICAgICAgIHZhcigtLXByaW1hcnkpIDAlLFxuICAgICAgICB2YXIoLS1hY2NlbnQpIDQwJSxcbiAgICAgICAgdmFyKC0tcHJpbWFyeSkgMTAwJVxuICAgICk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gICAgYW5pbWF0aW9uOiBzaGluZSAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQGtleWZyYW1lcyBzaGluZSB7XG4gICAgdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIGNlbnRlcjtcbiAgICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtRUFBbUU7SUFDbkUscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEM7Ozs7O0tBS0M7SUFDRCwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7UUFDSSxnQ0FBZ0M7SUFDcEM7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogNzBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgdmFyKC0tcHJpbWFyeSkgLCB2YXIoLS1hY2NlbnQpKTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMTQ3ZGVnLFxcbiAgICAgICAgdmFyKC0tcHJpbWFyeSkgMCUsXFxuICAgICAgICB2YXIoLS1hY2NlbnQpIDQwJSxcXG4gICAgICAgIHZhcigtLXByaW1hcnkpIDEwMCVcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XFxuICAgIGFuaW1hdGlvbjogc2hpbmUgM3MgbGluZWFyIGluZmluaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hpbmUge1xcbiAgICB0byB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAudGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI21haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIDI1cHg7XG59XG5cbiNuYXYge1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbiNuYXYgLmFjdGlvbnMtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmFjdGlvbnMtbGlzdCBidXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jbmF2IC5hY3Rpb25zLWxpc3QgYnV0dG9uLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuI25hdiAuYWN0aW9ucy1saXN0IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuI25hdiAuYWN0aW9ucy1saXN0IGJ1dHRvbjphY3RpdmUsICAjbmF2IC5hY3Rpb25zLWxpc3QgYnV0dG9uOmZvY3VzIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuXG4uYWN0aW9ucy1saXN0IGJ1dHRvbiBzcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLnByb2plY3QtcHJldmlldyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzJweCk7XG4gICAgcGFkZGluZzogNDBweCAwcHggNDBweCA3MHB4O1xufVxuXG4ucHJvamVjdC1wcmV2aWV3IC5wcm9qZWN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvamVjdC1wcmV2aWV3IC5wcm9qZWN0LXRpdGxlOjpmaXJzdC1sZXR0ZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgI21haW4ge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgI25hdiB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgNTAwbXM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmY0ZDg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgIC5uYXYtbGlua3Mtd3JhcHBlciB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgI25hdi5hY3RpdmUge1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgbmF2QW5pbWF0aW9uIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdG8ge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvamVjdC1wcmV2aWV3IHtcbiAgICAgICAgcGFkZGluZzogNDBweCAxNXB4IDgwcHggMTVweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7OztBQUdBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLG9DQUFvQztRQUNwQyx5QkFBeUI7UUFDekIsZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSTtZQUNJLGFBQWE7UUFDakI7O1FBRUE7WUFDSSxpQkFBaUI7UUFDckI7SUFDSjs7SUFFQTtRQUNJLDRCQUE0QjtRQUM1QixZQUFZO0lBQ2hCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDAgMjVweDtcXG59XFxuXFxuI25hdiB7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcbn1cXG5cXG4jbmF2IC5hY3Rpb25zLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hY3Rpb25zLWxpc3QgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNuYXYgLmFjdGlvbnMtbGlzdCBidXR0b24uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbiNuYXYgLmFjdGlvbnMtbGlzdCBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4jbmF2IC5hY3Rpb25zLWxpc3QgYnV0dG9uOmFjdGl2ZSwgICNuYXYgLmFjdGlvbnMtbGlzdCBidXR0b246Zm9jdXMge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuXFxuLmFjdGlvbnMtbGlzdCBidXR0b24gc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4ucHJvamVjdC1wcmV2aWV3IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcycHgpO1xcbiAgICBwYWRkaW5nOiA0MHB4IDBweCA0MHB4IDcwcHg7XFxufVxcblxcbi5wcm9qZWN0LXByZXZpZXcgLnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LXByZXZpZXcgLnByb2plY3QtdGl0bGU6OmZpcnN0LWxldHRlciB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICNtYWluIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgI25hdiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1yb3dzIDUwMG1zO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjRkODtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbGlua3Mtd3JhcHBlciB7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgICNuYXYuYWN0aXZlIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgbmF2QW5pbWF0aW9uIHtcXG4gICAgICAgIGZyb20ge1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtcHJldmlldyB7XFxuICAgICAgICBwYWRkaW5nOiA0MHB4IDE1cHggODBweCAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnBvcHVwIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9wdXAtdGFzay1wcm9qZWN0IHtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIDE0N2RlZywgdmFyKC0tcHJpbWFyeSkgMCUsIHZhcigtLWFjY2VudCkgNDAlLCB2YXIoLS1wcmltYXJ5KSAxMDAlICk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gICAgYW5pbWF0aW9uOiBzaGluZSAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZhY2UtaW4ge1xuICAgIGFuaW1hdGlvbjogZmFjZS1pbiAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFjZS1pbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmZhY2Utb3V0IHtcbiAgICBhbmltYXRpb246IGZhY2Utb3V0IC4zcyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBmYWNlLW91dCB7XG4gICAgZm9ybSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG4uZ3Jvdy11cCB7XG4gICAgYW5pbWF0aW9uOiBncm93LXVwIC4ycyBlYXNlLWluLW91dDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbkBrZXlmcmFtZXMgZ3Jvdy11cCB7XG4gICAgZnJvbSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxufVxuXG4uZ3Jvdy1kb3duIHtcbiAgICBhbmltYXRpb246IGdyb3ctZG93biAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZ3Jvdy1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGhlaWdodDogMHB4O1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHNHQUFzRztJQUN0RywwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7UUFDNUIsVUFBVTtJQUNkO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSw0QkFBNEI7UUFDNUIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC10YXNrLXByb2plY3Qge1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggMTQ3ZGVnLCB2YXIoLS1wcmltYXJ5KSAwJSwgdmFyKC0tYWNjZW50KSA0MCUsIHZhcigtLXByaW1hcnkpIDEwMCUgKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XFxuICAgIGFuaW1hdGlvbjogc2hpbmUgM3MgbGluZWFyIGluZmluaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5mYWNlLWluIHtcXG4gICAgYW5pbWF0aW9uOiBmYWNlLWluIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWNlLWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5mYWNlLW91dCB7XFxuICAgIGFuaW1hdGlvbjogZmFjZS1vdXQgLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhY2Utb3V0IHtcXG4gICAgZm9ybSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbi5ncm93LXVwIHtcXG4gICAgYW5pbWF0aW9uOiBncm93LXVwIC4ycyBlYXNlLWluLW91dDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3ctdXAge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIH1cXG59XFxuXFxuLmdyb3ctZG93biB7XFxuICAgIGFuaW1hdGlvbjogZ3Jvdy1kb3duIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBncm93LWRvd24ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBoZWlnaHQ6IDBweDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jcmVhdGUtbmV3LXByb2plY3QtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2plY3RzLWxpc3QtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hY3Rpb25zLWxpc3QgLnByb2plY3QtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4XG59XG5cbi5hY3Rpb25zLWxpc3QgLnByb2plY3QtYnV0dG9uOmhvdmVyIC5wcm9qZWN0LWRlbGV0ZS1pY29uIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5cbi5wcm9qZWN0cy1hY3Rpb25zLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5wcm9qZWN0LWluZm9ybWF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aW9ucy1saXN0ICAucHJvamVjdC1kZWxldGUtaWNvbiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmRlbGV0ZS1pY29uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aW9ucy1saXN0ICAucHJvamVjdC1kZWxldGUtaWNvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ubmV3LXByb2plY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQgICAgO1xufVxuXG4uY3JlYXRlLXByb2plY3QtYnV0dG9uIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLCAuY3JlYXRlLXByb2plY3QtYnV0dG9uIC50YXNrLXRpdGxlIHtcbiAgICBjb2xvcjogYmxhY2s7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2plY3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNyZWF0ZS1uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdC10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hY3Rpb25zLWxpc3QgLnByb2plY3QtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTVweFxcbn1cXG5cXG4uYWN0aW9ucy1saXN0IC5wcm9qZWN0LWJ1dHRvbjpob3ZlciAucHJvamVjdC1kZWxldGUtaWNvbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi5wcm9qZWN0cy1hY3Rpb25zLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hY3Rpb25zLWxpc3QgIC5wcm9qZWN0LWRlbGV0ZS1pY29uIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZGVsZXRlLWljb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hY3Rpb25zLWxpc3QgIC5wcm9qZWN0LWRlbGV0ZS1pY29uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY3JlYXRlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICAgIDtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCwgLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbiAudGFzay10aXRsZSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGFzay1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzJweCAtIDgwcHggLSA0NnB4KTtcbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG5cbi50YXNrLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uZXh0cmEtZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uZXh0cmEtZGF0YSA+IHAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWY7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbnAudGFzay1wcm9qZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxucC50YXNrLXByb2plY3Q6OmZpcnN0LWxldHRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRhc2stZGVsZXRlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRlbGV0ZS1pY29uIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uZGVsZXRlLWljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbi50YXNrOmhvdmVyIC5kZWxldGUtaWNvbiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubmV3LXRhc2sge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG5cbi8qKlxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIFRhc2sgRm9ybVxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5uZXctdGFzay1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5mb3JtLWlucHV0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLmZvcm0taW5wdXRzIGlucHV0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cblxuLm5ldy10YXNrLXRpdGxlLCAubmV3LXRhc2stbm90ZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xuICAgIGdhcDogMjBweDtcbn1cblxuLm5ldy10YXNrLXN1Ym1pdCwgLmNsb3NlLW5ldy10YXNrLWZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5uZXctdGFzay1zdWJtaXQgPiBzcGFuIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLm5ldy10YXNrLXN1Ym1pdDpob3ZlciA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLFxuLmNsb3NlLW5ldy10YXNrLWZvcm06aG92ZXIgIHtcbiAgICBhbmltYXRpb246IHJvdGF0ZSAuM3MgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTkwZGVnKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgVGFzayBEZXRhaWxzXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4ub3B0aW9uYWwtZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLm9wdGlvbmFsLWRhdGEgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmR1ZS1kYXRlLWNvbnRhaW5lciwgLnRhZ3MtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cblxuLm9wdGlvbmFsLWRhdGEgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuXG4vKiBEYXRlIElucHV0IFN0eWxlICovXG4ubmV3LXRhc2stZHVlLWRhdGUsIC5uZXctdGFzay10YWdzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG59XG5cbi5uZXctdGFzay1kdWUtZGF0ZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9ye1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5hY3RpdmUtZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDFmO1xufVxuLmFjdGl2ZS1mb3JtIGlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vKiBEYXRlIElucHV0IFN0eWxlIHdoZW4gaXMgYWN0aXZlICovXG4uYWN0aXZlLWZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl1cbntcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICBtaW4taGVpZ2h0OiAxLjJlbTtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi8qKlxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIEVkaXQgVGFza1xuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLmVkaXQtdGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnRhc2s6aGFzKC5lZGl0LXRhc2spICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuLnRhc2s6aGFzKC5lZGl0LXRhc2spIC5uZXctdGFzay1zdWJtaXQgc3BhbiAge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnRhc2stbGlzdCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Rhc2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7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ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MnB4IC0gODBweCAtIDQ2cHgpO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmV4dHJhLWRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmV4dHJhLWRhdGEgPiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDFmO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbnAudGFzay1wcm9qZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxucC50YXNrLXByb2plY3Q6OmZpcnN0LWxldHRlciB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZGVsZXRlLWljb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi50YXNrOmhvdmVyIC5kZWxldGUtaWNvbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5uZXctdGFzayB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLyoqXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqICBUYXNrIEZvcm1cXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuKi9cXG4ubmV3LXRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0taW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG59XFxuXFxuLmZvcm0taW5wdXRzIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5cXG4ubmV3LXRhc2stdGl0bGUsIC5uZXctdGFzay1ub3RlcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZm9ybS1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5uZXctdGFzay1zdWJtaXQsIC5jbG9zZS1uZXctdGFzay1mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5ldy10YXNrLXN1Ym1pdCA+IHNwYW4ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubmV3LXRhc2stc3VibWl0OmhvdmVyID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQsXFxuLmNsb3NlLW5ldy10YXNrLWZvcm06aG92ZXIgIHtcXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgLjNzIGxpbmVhcjtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE5MGRlZyk7XFxuICAgIH1cXG59XFxuXFxuXFxuLyoqXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqICBUYXNrIERldGFpbHNcXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuKi9cXG5cXG4ub3B0aW9uYWwtZGF0YSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm9wdGlvbmFsLWRhdGEgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZHVlLWRhdGUtY29udGFpbmVyLCAudGFncy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG5cXG4ub3B0aW9uYWwtZGF0YSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5cXG4vKiBEYXRlIElucHV0IFN0eWxlICovXFxuLm5ldy10YXNrLWR1ZS1kYXRlLCAubmV3LXRhc2stdGFncyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxufVxcblxcbi5uZXctdGFzay1kdWUtZGF0ZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9ye1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uYWN0aXZlLWZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWY7XFxufVxcbi5hY3RpdmUtZm9ybSBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIERhdGUgSW5wdXQgU3R5bGUgd2hlbiBpcyBhY3RpdmUgKi9cXG4uYWN0aXZlLWZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdXFxue1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gICAgbWluLWhlaWdodDogMS4yZW07XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLyoqXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqICBFZGl0IFRhc2tcXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuKi9cXG5cXG4uZWRpdC10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRhc2s6aGFzKC5lZGl0LXRhc2spICB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi50YXNrOmhhcyguZWRpdC10YXNrKSAubmV3LXRhc2stc3VibWl0IHNwYW4gIHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC50YXNrLWxpc3Qge1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG4gIHZhciBkYXRlVGltZUZvcm1hdDtcbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTYXQgU2VwIDA2IDIwMTQgMjM6NTk6NTkuOTk5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBlbmQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyAtNyA6IDApICsgNiAtIChkYXkgLSB3ZWVrU3RhcnRzT24pO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZm9ybWF0SVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZSBhY2NvcmRpbmcgdG8gdGhlIElTTyA4NjAxIHN0YW5kYXJkIChodHRwczovL3N1cHBvcnQuc2FzLmNvbS9kb2N1bWVudGF0aW9uL2NkbC9lbi9scmRpY3QvNjQzMTYvSFRNTC9kZWZhdWx0L3ZpZXdlci5odG0jYTAwMzE2OTgxNC5odG0pLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0LiBPcHRpb25zIG1heSBiZSBwYXNzZWQgdG8gY29udHJvbCB0aGUgcGFydHMgYW5kIG5vdGF0aW9ucyBvZiB0aGUgZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHsnZXh0ZW5kZWQnfCdiYXNpYyd9IFtvcHRpb25zLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGlmICdiYXNpYycsIGhpZGUgZGVsaW1pdGVycyBiZXR3ZWVuIGRhdGUgYW5kIHRpbWUgdmFsdWVzLlxuICogQHBhcmFtIHsnY29tcGxldGUnfCdkYXRlJ3wndGltZSd9IFtvcHRpb25zLnJlcHJlc2VudGF0aW9uPSdjb21wbGV0ZSddIC0gZm9ybWF0IGRhdGUsIHRpbWUgd2l0aCBsb2NhbCB0aW1lIHpvbmUsIG9yIGJvdGguXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIChpbiBsb2NhbCB0aW1lIHpvbmUpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZvcm1hdGAgbXVzdCBiZSAnZXh0ZW5kZWQnIG9yICdiYXNpYydcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnJlcHJlc2VudGF0aW9uYCBtdXN0IGJlICdkYXRlJywgJ3RpbWUnIG9yICdjb21wbGV0ZSdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDE4IFNlcHRlbWJlciAyMDE5IGluIElTTyA4NjAxIGZvcm1hdCAobG9jYWwgdGltZSB6b25lIGlzIFVUQyk6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXRJU08obmV3IERhdGUoMjAxOSwgOCwgMTgsIDE5LCAwLCA1MikpXG4gKiAvLz0+ICcyMDE5LTA5LTE4VDE5OjAwOjUyWidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDE4IFNlcHRlbWJlciAyMDE5IGluIElTTyA4NjAxLCBzaG9ydCBmb3JtYXQgKGxvY2FsIHRpbWUgem9uZSBpcyBVVEMpOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0SVNPKG5ldyBEYXRlKDIwMTksIDgsIDE4LCAxOSwgMCwgNTIpLCB7IGZvcm1hdDogJ2Jhc2ljJyB9KVxuICogLy89PiAnMjAxOTA5MThUMTkwMDUyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEgZm9ybWF0LCBkYXRlIG9ubHk6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXRJU08obmV3IERhdGUoMjAxOSwgOCwgMTgsIDE5LCAwLCA1MiksIHsgcmVwcmVzZW50YXRpb246ICdkYXRlJyB9KVxuICogLy89PiAnMjAxOS0wOS0xOCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDE4IFNlcHRlbWJlciAyMDE5IGluIElTTyA4NjAxIGZvcm1hdCwgdGltZSBvbmx5IChsb2NhbCB0aW1lIHpvbmUgaXMgVVRDKTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdElTTyhuZXcgRGF0ZSgyMDE5LCA4LCAxOCwgMTksIDAsIDUyKSwgeyByZXByZXNlbnRhdGlvbjogJ3RpbWUnIH0pXG4gKiAvLz0+ICcxOTowMDo1MlonXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdElTTyhkYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRmb3JtYXQsIF9vcHRpb25zJHJlcHJlc2VudGF0aTtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGlmIChpc05hTihvcmlnaW5hbERhdGUuZ2V0VGltZSgpKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuICB2YXIgZm9ybWF0ID0gU3RyaW5nKChfb3B0aW9ucyRmb3JtYXQgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZm9ybWF0KSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmb3JtYXQgIT09IHZvaWQgMCA/IF9vcHRpb25zJGZvcm1hdCA6ICdleHRlbmRlZCcpO1xuICB2YXIgcmVwcmVzZW50YXRpb24gPSBTdHJpbmcoKF9vcHRpb25zJHJlcHJlc2VudGF0aSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZXByZXNlbnRhdGlvbikgIT09IG51bGwgJiYgX29wdGlvbnMkcmVwcmVzZW50YXRpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRyZXByZXNlbnRhdGkgOiAnY29tcGxldGUnKTtcbiAgaWYgKGZvcm1hdCAhPT0gJ2V4dGVuZGVkJyAmJiBmb3JtYXQgIT09ICdiYXNpYycpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcImZvcm1hdCBtdXN0IGJlICdleHRlbmRlZCcgb3IgJ2Jhc2ljJ1wiKTtcbiAgfVxuICBpZiAocmVwcmVzZW50YXRpb24gIT09ICdkYXRlJyAmJiByZXByZXNlbnRhdGlvbiAhPT0gJ3RpbWUnICYmIHJlcHJlc2VudGF0aW9uICE9PSAnY29tcGxldGUnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJyZXByZXNlbnRhdGlvbiBtdXN0IGJlICdkYXRlJywgJ3RpbWUnLCBvciAnY29tcGxldGUnXCIpO1xuICB9XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIHR6T2Zmc2V0ID0gJyc7XG4gIHZhciBkYXRlRGVsaW1pdGVyID0gZm9ybWF0ID09PSAnZXh0ZW5kZWQnID8gJy0nIDogJyc7XG4gIHZhciB0aW1lRGVsaW1pdGVyID0gZm9ybWF0ID09PSAnZXh0ZW5kZWQnID8gJzonIDogJyc7XG5cbiAgLy8gUmVwcmVzZW50YXRpb24gaXMgZWl0aGVyICdkYXRlJyBvciAnY29tcGxldGUnXG4gIGlmIChyZXByZXNlbnRhdGlvbiAhPT0gJ3RpbWUnKSB7XG4gICAgdmFyIGRheSA9IGFkZExlYWRpbmdaZXJvcyhvcmlnaW5hbERhdGUuZ2V0RGF0ZSgpLCAyKTtcbiAgICB2YXIgbW9udGggPSBhZGRMZWFkaW5nWmVyb3Mob3JpZ2luYWxEYXRlLmdldE1vbnRoKCkgKyAxLCAyKTtcbiAgICB2YXIgeWVhciA9IGFkZExlYWRpbmdaZXJvcyhvcmlnaW5hbERhdGUuZ2V0RnVsbFllYXIoKSwgNCk7XG5cbiAgICAvLyB5eXl5TU1kZCBvciB5eXl5LU1NLWRkLlxuICAgIHJlc3VsdCA9IFwiXCIuY29uY2F0KHllYXIpLmNvbmNhdChkYXRlRGVsaW1pdGVyKS5jb25jYXQobW9udGgpLmNvbmNhdChkYXRlRGVsaW1pdGVyKS5jb25jYXQoZGF5KTtcbiAgfVxuXG4gIC8vIFJlcHJlc2VudGF0aW9uIGlzIGVpdGhlciAndGltZScgb3IgJ2NvbXBsZXRlJ1xuICBpZiAocmVwcmVzZW50YXRpb24gIT09ICdkYXRlJykge1xuICAgIC8vIEFkZCB0aGUgdGltZXpvbmUuXG4gICAgdmFyIG9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgIHZhciBhYnNvbHV0ZU9mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gICAgICB2YXIgaG91ck9mZnNldCA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic29sdXRlT2Zmc2V0IC8gNjApLCAyKTtcbiAgICAgIHZhciBtaW51dGVPZmZzZXQgPSBhZGRMZWFkaW5nWmVyb3MoYWJzb2x1dGVPZmZzZXQgJSA2MCwgMik7XG4gICAgICAvLyBJZiBsZXNzIHRoYW4gMCwgdGhlIHNpZ24gaXMgKywgYmVjYXVzZSBpdCBpcyBhaGVhZCBvZiB0aW1lLlxuICAgICAgdmFyIHNpZ24gPSBvZmZzZXQgPCAwID8gJysnIDogJy0nO1xuICAgICAgdHpPZmZzZXQgPSBcIlwiLmNvbmNhdChzaWduKS5jb25jYXQoaG91ck9mZnNldCwgXCI6XCIpLmNvbmNhdChtaW51dGVPZmZzZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ek9mZnNldCA9ICdaJztcbiAgICB9XG4gICAgdmFyIGhvdXIgPSBhZGRMZWFkaW5nWmVyb3Mob3JpZ2luYWxEYXRlLmdldEhvdXJzKCksIDIpO1xuICAgIHZhciBtaW51dGUgPSBhZGRMZWFkaW5nWmVyb3Mob3JpZ2luYWxEYXRlLmdldE1pbnV0ZXMoKSwgMik7XG4gICAgdmFyIHNlY29uZCA9IGFkZExlYWRpbmdaZXJvcyhvcmlnaW5hbERhdGUuZ2V0U2Vjb25kcygpLCAyKTtcblxuICAgIC8vIElmIHRoZXJlJ3MgYWxzbyBkYXRlLCBzZXBhcmF0ZSBpdCB3aXRoIHRpbWUgd2l0aCAnVCdcbiAgICB2YXIgc2VwYXJhdG9yID0gcmVzdWx0ID09PSAnJyA/ICcnIDogJ1QnO1xuXG4gICAgLy8gQ3JlYXRlcyBhIHRpbWUgc3RyaW5nIGNvbnNpc3Rpbmcgb2YgaG91ciwgbWludXRlLCBhbmQgc2Vjb25kLCBzZXBhcmF0ZWQgYnkgZGVsaW1pdGVycywgaWYgZGVmaW5lZC5cbiAgICB2YXIgdGltZSA9IFtob3VyLCBtaW51dGUsIHNlY29uZF0uam9pbih0aW1lRGVsaW1pdGVyKTtcblxuICAgIC8vIEhIbW1zcyBvciBISDptbTpzcy5cbiAgICByZXN1bHQgPSBcIlwiLmNvbmNhdChyZXN1bHQpLmNvbmNhdChzZXBhcmF0b3IpLmNvbmNhdCh0aW1lKS5jb25jYXQodHpPZmZzZXQpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpO1xuICAgIC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZztcblxuICAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsO1xuXG4gIC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXRlZ29yeUxpc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXRlZ29yeUxpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGFtYnVyZ2VyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGFtYnVyZ2VyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFzay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImZ1bmN0aW9uIGlzVG9kYXkgKGRhdGUxKSB7XG4gICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBkYXRlMS5nZXREYXRlKCkgPT09IGRhdGUyLmdldERhdGUoKSAmJlxuICAgICAgICBkYXRlMS5nZXRNb250aCgpID09PSBkYXRlMi5nZXRNb250aCgpICYmXG4gICAgICAgIGRhdGUxLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCk7XG59O1xuXG5mdW5jdGlvbiBpblNhbWVXZWVrKGRhdGUxKSB7XG4gICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gbmV3IERhdGUoZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSwgZGF0ZTEuZ2V0RGF0ZSgpIC0gZGF0ZTEuZ2V0RGF5KCkpO1xuICAgIGNvbnN0IGxhc3REYXlPZldlZWsgPSBuZXcgRGF0ZShkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpLCBkYXRlMS5nZXREYXRlKCkgLSBkYXRlMS5nZXREYXkoKSArIDYpO1xuICAgIHJldHVybiBkYXRlMiA+PSBmaXJzdERheU9mV2VlayAmJiBkYXRlMiA8PSBsYXN0RGF5T2ZXZWVrO1xufTtcblxuZXhwb3J0IHsgaXNUb2RheSwgaW5TYW1lV2VlayB9OyIsImZ1bmN0aW9uIGNyZWF0ZUhhbWJ1cmdlck5hdkV2ZW50ICgpIHtcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gVG9nZ2xlIE5hdlxuICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VIYW1idXJnZXJOYXYoKSB7XG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYnKTtcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIYW1idXJnZXJOYXZFdmVudCwgY2xvc2VIYW1idXJnZXJOYXYgfSIsImltcG9ydCBUYXNrIGZyb20gXCIuLi8uLi9tb2R1bGVzL1Rhc2svVGFza1wiO1xuXG5mdW5jdGlvbiBzYXZlSW5Mb2NhbFN0b3JhZ2UodGFza0xpc3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG59XG5mdW5jdGlvbiBzYXZlSW5Mb2NhbFN0b3JhZ2VQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgIGxldCBsb2NhbFByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKTtcbiAgICBcbiAgICBpZiAobG9jYWxQcm9qZWN0TGlzdCkge1xuICAgICAgICBsb2NhbFByb2plY3RMaXN0LnB1c2gocHJvamVjdFRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFByb2plY3RMaXN0ID0gW107XG4gICAgICAgIGxvY2FsUHJvamVjdExpc3QucHVzaChwcm9qZWN0VGl0bGUpO1xuICAgIH1cbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUHJvamVjdExpc3QpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSW5Mb2NhbFN0b3JhZ2VQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgIGxldCBsb2NhbFByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKTtcbiAgICBsb2NhbFByb2plY3RMaXN0ID0gbG9jYWxQcm9qZWN0TGlzdC5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0ICE9IHByb2plY3RUaXRsZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShsb2NhbFByb2plY3RMaXN0KSk7XG5cbiAgICBsZXQgbG9jYWxUYXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrTGlzdFwiKSk7XG4gICAgbG9jYWxUYXNrTGlzdCA9IGxvY2FsVGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ICE9IHByb2plY3RUaXRsZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeShsb2NhbFRhc2tMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRMb2NhbFN0b3JhZ2UoRE9NVG9kb0xpc3QpIHtcbiAgICBsZXQgbG9jYWxTdG9yYWdlVGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza0xpc3RcIikpO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZVRhc2tMaXN0KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZVRhc2tMaXN0ID0gVGFzay5mcm9tSlNPTkxpc3QobG9jYWxTdG9yYWdlVGFza0xpc3QpO1xuICAgICAgICBET01Ub2RvTGlzdC5hZGRUYXNrcyhsb2NhbFN0b3JhZ2VUYXNrTGlzdClcbiAgICAgICAgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTG9jYWxTdG9yYWdlUHJvamVjdHMobG9hZFByb2plY3RzKXtcbiAgICBsZXQgbG9jYWxTdG9yYWdlUHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZVByb2plY3RMaXN0KSB7XG4gICAgICAgIGxvYWRQcm9qZWN0cyhsb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdClcbiAgICB9XG59IFxuXG5leHBvcnQge3NhdmVJbkxvY2FsU3RvcmFnZSwgc2F2ZUluTG9jYWxTdG9yYWdlUHJvamVjdCwgbG9hZExvY2FsU3RvcmFnZSwgbG9hZExvY2FsU3RvcmFnZVByb2plY3RzLCAgcmVtb3ZlSW5Mb2NhbFN0b3JhZ2VQcm9qZWN0fTsiLCJmdW5jdGlvbiBjcmVhdGVIaWRkZW5Qb3B1cCAobWVzc2FnZSwgdGltZSA9IDIwMDApIHtcbiAgICBpZiAoZXhpc3RzSGlkZGVuUG9wdXAoKSkgcmV0dXJuXG5cbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGFpbmVyXCIpXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJywgXCJmYWNlLWluXCIpXG4gICAgcG9wdXAuaW5uZXJIVE1MID0gbWVzc2FnZVxuXG4gICAgY29uc3QgcG9wdXBIZWlnaHQgPSBwb3B1cC5jbGllbnRIZWlnaHQ7XG4gICAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXApXG4gICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyb3ctdXBcIilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImdyb3ctdXBcIilcbiAgICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyb3ctZG93blwiKVxuXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhY2UtaW4nKVxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdmYWNlLW91dCcpXG4gICAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHBvcHVwLnJlbW92ZSlcbiAgICAgICAgXG4gICAgICAgIHBvcHVwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJncm93LWRvd25cIilcbiAgICAgICAgfSk7XG4gICAgfSwgdGltZSlcbn1cblxuZnVuY3Rpb24gZXhpc3RzSGlkZGVuUG9wdXAgKCkge1xuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jb250YWluZXJcIilcbiAgICByZXR1cm4gcG9wdXBDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMFxufVxuXG5mdW5jdGlvbiByZW1vdmVIaWRkZW5Qb3B1cCAoKSB7XG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWNvbnRhaW5lclwiKVxuICAgIHBvcHVwQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhpZGRlblBvcHVwIiwiaW1wb3J0IERPTVRvZG9MaXN0IGZyb20gXCIuLi8uLi8uLlwiO1xuXG5mdW5jdGlvbiBwcmludENhdGVnb3J5TGlzdCh0YXNrcykge1xuICAgIGNvbnN0IGNhdGVnb3JpZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY29udGFpbmVyJyk7XG4gICAgY2F0ZWdvcmllc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBjYXRlZ29yaWVzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY2F0ZWdvcmllc0xpc3QuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcmllcy1saXN0Jyk7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGdldENhdGVnb3JpZXModGFza3MpO1xuICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNhdGVnb3J5RWxlbWVudC50ZXh0Q29udGVudCA9IGNhdGVnb3J5O1xuICAgICAgICBjYXRlZ29yeUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcbiAgICAgICAgY2F0ZWdvcnlFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIiwgY2F0ZWdvcnkpXG4gICAgICAgIGNhdGVnb3JpZXNMaXN0LmFwcGVuZENoaWxkKGNhdGVnb3J5RWxlbWVudCk7XG4gICAgICAgIGNyZWF0ZUNhdGVnb3J5RXZlbnQoY2F0ZWdvcnlFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIGNhdGVnb3JpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllc0xpc3QpO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtBcnJheX0gdGFza3MgXG4gKiBAcmV0dXJucyBcbiAqL1xuZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcyh0YXNrcykge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXTtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrQ2F0ZWdvcmllcyA9IHRhc2suZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICBpZiAodGFza0NhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIHRhc2tDYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNhdGVnb3JpZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5RXZlbnQgKGNhdGVnb3J5RWxlbWVudCkge1xuICAgIGNhdGVnb3J5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2F0ZWdvcnlFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcmllcyA9IGdldFNlbGVjdGVkQ2F0ZWdvcmllcygpO1xuICAgICAgICBET01Ub2RvTGlzdC5wcmludEJ5Q2F0ZWdvcmllcyhzZWxlY3RlZENhdGVnb3JpZXMpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFNlbGVjdGVkQ2F0ZWdvcmllcyAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yaWVzRWxlbWVudCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LnNlbGVjdGVkJykpO1xuICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcmllcyA9IFtdO1xuICAgIHNlbGVjdGVkQ2F0ZWdvcmllc0VsZW1lbnQuZm9yRWFjaChjYXRlZ29yeUVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3J5RWxlbWVudC5kYXRhc2V0LmNhdGVnb3J5O1xuICAgICAgICBzZWxlY3RlZENhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG4gICAgfSlcblxuICAgIHJldHVybiBzZWxlY3RlZENhdGVnb3JpZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaW50Q2F0ZWdvcnlMaXN0OyIsImltcG9ydCBET01Ub2RvTGlzdCBmcm9tIFwiLi4vLi4vLi5cIjtcbmltcG9ydCB7IHNhdmVJbkxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9Mb2NhbFN0b3JhZ2UvbG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrQm94IHtcbiAgICBzdGF0aWMgY3JlYXRlQ2hlY2tCb3hFbGVtZW50IChpc0NoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgY2hlY2tCb3hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgXG4gICAgICAgIGNoZWNrQm94RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlzLWNvbXBsZXRlZFwiLCBpc0NoZWNrZWQpO1xuICAgICAgICBjaGVja0JveEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoZWNrLWJveFwiLCBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gICAgICAgIGlmIChpc0NoZWNrZWQpICB7XG4gICAgICAgICAgICBjaGVja0JveEVsZW1lbnQudGV4dENvbnRlbnQgPSBcImNoZWNrX2NpcmNsZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tCb3hFbGVtZW50LnRleHRDb250ZW50ID0gXCJyYWRpb19idXR0b25fdW5jaGVja2VkXCI7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2tCb3hFbGVtZW50O1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgYWRkVG9nZ2xlRXZlbnRMaXN0ZW5lciAoY2hlY2tCb3hFbGVtZW50KSB7XG4gICAgICAgIGNoZWNrQm94RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGNoZWNrQm94RWxlbWVudC5kYXRhc2V0LmlzQ29tcGxldGVkID09PSBcInRydWVcIiA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIGNoZWNrQm94RWxlbWVudC5kYXRhc2V0LmlzQ29tcGxldGVkID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBjaGVja0JveEVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdWYWx1ZSA/IFwiY2hlY2tfY2lyY2xlXCIgOiBcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcIlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRDaGVja0JveENvbXBsZXRlRXZlbnRMaXN0ZW5lciAoY2hlY2tCb3hFbGVtZW50LCB0YXNrKSB7XG4gICAgICAgIGNoZWNrQm94RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrLnRvZ2dsZUNvbXBsZXRlZCgpO1xuICAgICAgICAgICAgc2F2ZUluTG9jYWxTdG9yYWdlKERPTVRvZG9MaXN0LmdldEFsbFRhc2tzKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IERPTVRvZG9MaXN0IGZyb20gXCIuLi8uLi8uLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdmVCdXR0b24ge1xuICAgIHN0YXRpYyBjcmVhdGVSZW1vdmVCdXR0b25FbGVtZW50ICgpIHtcbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGFza0RlbGV0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlbGV0ZS1pY29uIG1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5kZWxldGU8L3NwYW4+YDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0YXNrRGVsZXRlQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRSZW1vdmVUYXNrRXZlbnRMaXN0ZW5lciAocmVtb3ZlRWxlbWVudCwgdGFza0lkKSB7XG4gICAgICAgIHJlbW92ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigoXCJjbGlja1wiKSwgKCkgPT4ge1xuICAgICAgICAgICAgRE9NVG9kb0xpc3QucmVtb3ZlVGFzayh0YXNrSWQpO1xuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgXCIuL2Nzcy9nbG9iYWwuY3NzXCJcbmltcG9ydCBcIi4vY3NzL2hlYWRlci5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvbWFpbi5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvdGFzay5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvcG9wdXAuY3NzXCJcbmltcG9ydCBcIi4vY3NzL3Byb2plY3RzLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9oYW1idXJnZXIuY3NzXCJcbmltcG9ydCBcIi4vY3NzL2NhdGVnb3J5TGlzdC5jc3NcIlxuaW1wb3J0IERPTVRvZG9MaXN0Q2xhc3MgZnJvbSBcIi4vbW9kdWxlcy9Ub2RvTGlzdC9ET01Ub2RvTGlzdFwiXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0c0V2ZW50cywgbG9hZFByb2plY3RzLCBwcmludEFkZFByb2plY3RzRWxlbWVudH0gZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0L0RPTVByb2plY3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVIYW1idXJnZXJOYXZFdmVudCB9IGZyb20gXCIuL2Fzc2V0cy9IYW1idXJnZXIvaGFtYnVyZ2VyTmF2XCJcbmltcG9ydCB7IGxvYWRMb2NhbFN0b3JhZ2UsIGxvYWRMb2NhbFN0b3JhZ2VQcm9qZWN0cyB9IGZyb20gXCIuL2Fzc2V0cy9Mb2NhbFN0b3JhZ2UvbG9jYWxTdG9yYWdlXCJcblxuY29uc3QgRE9NVG9kb0xpc3QgPSBuZXcgRE9NVG9kb0xpc3RDbGFzcygpO1xuZnVuY3Rpb24gaW5pdCgpICB7XG4gICAgbG9hZExvY2FsU3RvcmFnZShET01Ub2RvTGlzdCk7XG4gICAgbG9hZExvY2FsU3RvcmFnZVByb2plY3RzKGxvYWRQcm9qZWN0cylcbiAgICBET01Ub2RvTGlzdC5wcmludEFsbFRhc2tzKCk7XG4gICAgY3JlYXRlUHJvamVjdHNFdmVudHMoKTtcbiAgICBwcmludEFkZFByb2plY3RzRWxlbWVudCgpO1xuICAgIGNyZWF0ZUhhbWJ1cmdlck5hdkV2ZW50KCk7XG59XG5cbmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NVG9kb0xpc3Q7IiwiaW1wb3J0IHsgY2xvc2VIYW1idXJnZXJOYXYgfSBmcm9tIFwiLi4vLi4vYXNzZXRzL0hhbWJ1cmdlci9oYW1idXJnZXJOYXYuanNcIjtcbmltcG9ydCB7IHJlbW92ZUluTG9jYWxTdG9yYWdlUHJvamVjdCwgc2F2ZUluTG9jYWxTdG9yYWdlUHJvamVjdCB9IGZyb20gXCIuLi8uLi9hc3NldHMvTG9jYWxTdG9yYWdlL2xvY2FsU3RvcmFnZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUhpZGRlblBvcHVwIGZyb20gXCIuLi8uLi9hc3NldHMvUG9wdXBzL2hpZGRlblBvcHVwLmpzXCI7XG5pbXBvcnQgRE9NVG9kb0xpc3QgZnJvbSBcIi4uLy4uL2luZGV4LmpzXCJcbmNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXctcHJvamVjdC1jb250YWluZXInKTtcblxuLyoqXG4gKiAgSW5zZXJ0IHRoZSBwcm9qZWN0IGJ1dHRvbnMgaW4gdGhlIERPTVxuICogIFxuICogQHBhcmFtIHtTdHJpbmd9IHByb2plY3RUaXRsZSBcbiAqL1xuZnVuY3Rpb24gcHJpbnROZXdQcm9qZWN0IChwcm9qZWN0VGl0bGUpIHtcbiAgICAvLyBHZXQgdGhlIHByb2plY3QgYnV0dG9ucyBjb250YWluZXJcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFjdGlvbnMtbGlzdCAuYWN0aW9ucy1saXN0Jyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHByb2plY3QgYnV0dG9uIENvbnRhaW5lclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7IC8vIEFkZCB0aGUgY2xhc3MgdG8gdGhlIHByb2plY3QgY29udGFpbmVyXG5cbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vIENyZWF0ZSB0aGUgcHJvamVjdCBidXR0b25cbiAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7IC8vIEFkZCB0aGUgY2xhc3MgdG8gdGhlIHByb2plY3QgYnV0dG9uXG4gICAgcHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC10eXBlJywgcHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKCkpOyAvLyBBZGQgdGhlIHByb2plY3QgdGl0bGUgYXMgZGF0YSBhdHRyaWJ1dGVcblxuICAgIGNvbnN0IHByb2plY3RJbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBDcmVhdGUgdGhlIHByb2plY3QgaW5mb3JtYXRpb24gY29udGFpbmVyXG4gICAgcHJvamVjdEluZm9ybWF0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5mb3JtYXRpb24nKTsgLy8gQWRkIHRoZSBjbGFzcyB0byB0aGUgcHJvamVjdCBpbmZvcm1hdGlvbiBjb250YWluZXJcblxuICAgIC8vIENyZWF0ZSB0aGUgcHJvamVjdCBpY29uXG4gICAgY29uc3QgaWNvbiA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgd29ya3NwYWNlc1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5gXG5cbiAgICAvLyBJbnNlcnQgdGhlIHByb2plY3QgdGl0bGUgYW5kIGljb24gaW4gdGhlIHByb2plY3QgaW5mb3JtYXRpb24gY29udGFpbmVyXG4gICAgcHJvamVjdEluZm9ybWF0aW9uLmlubmVySFRNTCA9IGljb24gKyBwcm9qZWN0VGl0bGU7XG5cblxuICAgIGNvbnN0IGRlbGV0ZUljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gQ3JlYXRlIHRoZSBkZWxldGUgaWNvbiBjb250YWluZXJcbiAgICBkZWxldGVJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pY29uLWNvbnRhaW5lcicpOyAvLyBBZGQgdGhlIGNsYXNzIHRvIHRoZSBkZWxldGUgaWNvbiBjb250YWluZXJcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7ICAvLyBDcmVhdGUgdGhlIGRlbGV0ZSBpY29uXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1pY29uJywgXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpOyAvLyBBZGQgdGhlIGNsYXNzIHRvIHRoZSBkZWxldGUgaWNvblxuICAgIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSAnZGVsZXRlJzsgLy8gQWRkIHRoZSB0ZXh0IHRvIHRoZSBkZWxldGUgaWNvblxuXG4gICAgZGVsZXRlSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVJY29uKTsgLy8gSW5zZXJ0IHRoZSBkZWxldGUgaWNvbiBpbiB0aGUgZGVsZXRlIGljb24gY29udGFpbmVyXG5cbiAgICBwcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKHByb2plY3RJbmZvcm1hdGlvbik7IC8vIEluc2VydCB0aGUgcHJvamVjdCBpbmZvcm1hdGlvbiBjb250YWluZXIgaW4gdGhlIHByb2plY3QgYnV0dG9uXG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pOyAvLyBJbnNlcnQgdGhlIHByb2plY3QgYnV0dG9uIGluIHRoZSBwcm9qZWN0IGNvbnRhaW5lclxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbkNvbnRhaW5lcik7IC8vIEluc2VydCB0aGUgZGVsZXRlIGljb24gY29udGFpbmVyIGluIHRoZSBwcm9qZWN0IGNvbnRhaW5lclxuXG4gICAgcHJvamVjdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTsgLy8gSW5zZXJ0IHRvIHRoZSBET00gdGhlIHByb2plY3QgY29udGFpbmVyXG5cbiAgICBjcmVhdGVEZWxldGVQcm9qZWN0RXZlbnQocHJvamVjdFRpdGxlLCBkZWxldGVJY29uKTsgLy8gQ3JlYXRlIHRoZSBkZWxldGUgcHJvamVjdCBldmVudFxuICAgIGNyZWF0ZVByb2plY3RzRXZlbnRzKCk7IC8vIENyZWF0ZSB0aGUgcHJvamVjdCBldmVudHNcbn1cblxuLyoqXG4gKiAgQWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIHNlbGVjdGVkIHByb2plY3QgYnV0dG9uXG4gKiAgUmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3MgZnJvbSB0aGUgb3RoZXIgcHJvamVjdCBidXR0b25zXG4gKiAgUHJpbnQgdGhlIHRhc2tzIG9mIHRoZSBzZWxlY3RlZCBwcm9qZWN0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzRXZlbnRzICgpIHtcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvbnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aW9ucy1saXN0IGJ1dHRvblwiKTsgLy8gR2V0IGFsbCB0aGUgcHJvamVjdCBidXR0b25zIGhhcyBOb2RlTGlzdFxuICAgIGNvbnN0IHByb2plY3RzQnV0dG9uc0FycmF5ID0gQXJyYXkuZnJvbShwcm9qZWN0c0J1dHRvbnNFbGVtZW50cykgLy8gQ29udmVydCB0aGUgTm9kZUxpc3QgdG8gQXJyYXlcbiAgICAvLyBBZGQgdGhlIGNsaWNrIGV2ZW50IHRvIGFsbCB0aGUgcHJvamVjdCBidXR0b25zXG4gICAgcHJvamVjdHNCdXR0b25zQXJyYXkuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNlbGVjdFByb2plY3RCdXR0b25BY3RpdmUoYnV0dG9uLmRhdGFzZXQucHJvamVjdFR5cGUpKVxuICAgIH0pO1xufVxuXG4vKipcbiAqICBDcmVhdGUgdGhlIGRlbGV0ZSBwcm9qZWN0IGV2ZW50XG4gKiAgUmVtb3ZlIHRoZSBwcm9qZWN0IGZyb20gdGhlIERPTSBhbmQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuICogIFJlbW92ZSBhbGwgdGhlIHJlbGF0ZWQgdGFza3MgZnJvbSB0aGUgRE9NIGFuZCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvamVjdE5hbWUgXG4gKiBAcGFyYW0ge0hUTUxTcGFuRWxlbWVudH0gcHJvamVjdERlbGV0ZUJ1dHRvbiBcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGVsZXRlUHJvamVjdEV2ZW50IChwcm9qZWN0TmFtZSwgcHJvamVjdERlbGV0ZUJ1dHRvbikge1xuICAgIHByb2plY3REZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIERPTVRvZG9MaXN0LnJlbW92ZVByb2plY3QocHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIHJlbW92ZUluTG9jYWxTdG9yYWdlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHByaW50QWRkUHJvamVjdHNFbGVtZW50ICgpIHtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdC1idXR0b24nKTtcbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPk5ldyBQcm9qZWN0PC9wPmA7XG4gICAgXG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEJ1dHRvbik7XG4gICAgY3JlYXRlUHJvamVjdHNFdmVudChjcmVhdGVQcm9qZWN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNFdmVudChjcmVhdGVQcm9qZWN0QnV0dG9uKSB7XG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgRE9NVG9kb0xpc3QuY2xvc2VBbGxGb3JtcygpO1xuICAgICAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3UHJvamVjdEZvcm0oKSk7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3RTdWJtaXRFdmVudChwcm9qZWN0Rm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpKTtcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdENsb3NlRXZlbnQocHJvamVjdEZvcm1Db250YWluZXIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0Rm9ybSgpICB7XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybScpO1xuICAgIG5ld1Byb2plY3RGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0c1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwibmV3LXRhc2stdGl0bGVcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1uZXctdGFzay1mb3JtIG1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm5ldy10YXNrLXN1Ym1pdFwiPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZDwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIG5ld1Byb2plY3RGb3JtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0Q2xvc2VFdmVudCAocHJvamVjdEZvcm0pIHtcbiAgICBjb25zdCBjbG9zZUVkaXRUYXNrRm9ybSA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1uZXctdGFzay1mb3JtJyk7XG4gICAgY2xvc2VFZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTmV3UHJvamVjdEZvcm0oKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VOZXdQcm9qZWN0Rm9ybSAoKSB7IFxuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciB0aGUgZm9ybVxuICAgIHByaW50QWRkUHJvamVjdHNFbGVtZW50KCk7IC8vIFByaW50IHRoZSBhZGQgcHJvamVjdCBidXR0b25cbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RTdWJtaXRFdmVudCAocHJvamVjdEZvcm0pIHtcbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnRzIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay10aXRsZScpLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICBsZXQgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFuZXdQcm9qZWN0VGl0bGUpe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ1Byb2plY3QgbmFtZSBpcyByZXF1aXJlZCc7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChleGlzdFByb2plY3QobmV3UHJvamVjdFRpdGxlKSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gYEVSUk9SOiBQcm9qZWN0IDxzcGFuIGNsYXNzPVwicG9wdXAtdGFzay1wcm9qZWN0XCI+JHtuZXdQcm9qZWN0VGl0bGV9PC9zcGFuPiBhbHJlYWR5IGV4aXN0YDtcbiAgICAgICAgICAgIGlzQ29ycmVjdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ29ycmVjdCkge1xuICAgICAgICAgICAgRE9NVG9kb0xpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgcHJpbnROZXdQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSk7IFxuICAgICAgICAgICAgY3JlYXRlSGlkZGVuUG9wdXAoYFByb2plY3QgPHNwYW4gY2xhc3M9XCJwb3B1cC10YXNrLXByb2plY3RcIj4ke25ld1Byb2plY3RUaXRsZX08L3NwYW4+IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5YCk7XG4gICAgICAgICAgICBjbG9zZU5ld1Byb2plY3RGb3JtKCk7XG4gICAgICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2VQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVIaWRkZW5Qb3B1cChlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBleGlzdFByb2plY3QgKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKTtcbiAgICBsZXQgZXhpc3QgPSBmYWxzZTtcbiAgICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKHByb2plY3RCdXR0b24gPT4ge1xuICAgICAgICBpZiAocHJvamVjdEJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC10eXBlJykgPT09IHByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBleGlzdDtcbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdEJ1dHRvbkFjdGl2ZSAocHJvamVjdE5hbWUpICB7XG4gICAgY2xvc2VIYW1idXJnZXJOYXYoKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvbnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aW9ucy1saXN0IGJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvbnNBcnJheSA9IEFycmF5LmZyb20ocHJvamVjdHNCdXR0b25zRWxlbWVudHMpXG5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEJ1dHRvbiA9IHByb2plY3RzQnV0dG9uc0FycmF5LmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5kYXRhc2V0LnByb2plY3RUeXBlID09IHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcbiAgICBwcm9qZWN0c0J1dHRvbnNBcnJheS5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7IC8vIFJlbW92ZSB0aGUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIHRoZSBidXR0b25zXG4gICAgY3VycmVudFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgLy8gQWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGNsaWNrZWQgYnV0dG9uXG5cbiAgICBwcm9qZWN0VGl0bGVFbGVtZW50LmlubmVySFRNTCA9IHByb2plY3ROYW1lOyAvLyBDaGFuZ2UgdGhlIHByb2plY3QgdGl0bGVcbiAgICBET01Ub2RvTGlzdC5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3ROYW1lKTsgLy8gU2V0IHRoZSBhY3RpdmUgcHJvamVjdFxuICAgIERPTVRvZG9MaXN0LnByaW50QWxsVGFza3MoKTsgLy8gUHJpbnQgYWxsIHRoZSB0YXNrcyBpbiB0aGUgdGFzayBsaXN0XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cyhwcm9qZWN0TGlzdCkge1xuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdFRpdGxlID0+IHByaW50TmV3UHJvamVjdChwcm9qZWN0VGl0bGUpKTtcbn1cblxuZXhwb3J0IHsgcHJpbnROZXdQcm9qZWN0LCBwcmludEFkZFByb2plY3RzRWxlbWVudCwgY2xvc2VOZXdQcm9qZWN0Rm9ybSwgbG9hZFByb2plY3RzLCBjcmVhdGVQcm9qZWN0c0V2ZW50cywgc2VsZWN0UHJvamVjdEJ1dHRvbkFjdGl2ZSB9OyIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBET01Ub2RvTGlzdCBmcm9tICcuLi8uLi9pbmRleC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2suanMnO1xuaW1wb3J0IENoZWNrQm94IGZyb20gJy4uLy4uL2Fzc2V0cy9UYXNrL0NoZWNrQm94L2NoZWNrQm94LmpzJztcbmltcG9ydCBSZW1vdmVCdXR0b24gZnJvbSAnLi4vLi4vYXNzZXRzL1Rhc2svUmVtb3ZlQnV0dG9uL3JlbW92ZUJ1dHRvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01UYXNrIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB0YXNrIGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgdGFzayBsaXN0XG4gICAgICogQHBhcmFtIHtUYXNrfSB0YXNrIFxuICAgICAqL1xuICAgIHN0YXRpYyBwcmludFRhc2tFbGVtZW50ICh0YXNrLCBzaG93UHJvamVjdCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IERPTVRhc2suY3JlYXRlVGFza0VsZW1lbnQodGFzaywgc2hvd1Byb2plY3QpO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudClcbiAgICAgICAgLy9ET01Ub2RvTGlzdC51cGRhdGVDYXRlZ29yeUxpc3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ3JlYXRlIGEgbmV3IHRhc2sgZWxlbWVudCxcbiAgICAgKiAgQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgY2hlY2tib3ggdG8gdG9nZ2xlIHRoZSBjb21wbGV0ZWQgc3RhdGUgb2YgdGhlIHRhc2tcbiAgICAgKiAgYW5kIHJldHVybiB0aGUgdGFzayBlbGVtZW50XG4gICAgICogQHBhcmFtIHtUYXNrfSB0YXNrIFxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGFza0VsZW1lbnQgXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVRhc2tFbGVtZW50ICh0YXNrLCBzaG93UHJvamVjdCA9IGZhbHNlKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGFzayBlbGVtZW50XG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIHRhc2tFbGVtZW50LmRhdGFzZXQuaWQgPSB0YXNrLmdldElkKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0YXNrIGluZm8gZWxlbWVudFxuICAgICAgICBjb25zdCB0YXNrSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrSW5mb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2staW5mb1wiKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGNoZWNrYm94IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgdGFzayBpbmZvIGVsZW1lbnRcbiAgICAgICAgY29uc3QgY2hlY2tCb3hFbGVtZW50ID0gQ2hlY2tCb3guY3JlYXRlQ2hlY2tCb3hFbGVtZW50KHRhc2suaXNDb21wbGV0ZWQoKSk7XG4gICAgICAgIHRhc2tJbmZvRWxlbWVudC5hcHBlbmRDaGlsZChjaGVja0JveEVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVFbGVtZW50ID0gdGFzay5nZXREdWVEYXRlKClcbiAgICAgICAgPyBET01UYXNrLmNyZWF0ZUR1ZURhdGVFbGVtZW50KHRhc2suZ2V0RHVlRGF0ZSgpKVxuICAgICAgICA6IFwiXCI7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RWxlbWVudCA9IHRhc2suZ2V0Q2F0ZWdvcmllcygpLmxlbmd0aCA+PSAxXG4gICAgICAgID8gRE9NVGFzay5jcmVhdGVDYXRlZ29yeUVsZW1lbnQodGFzay5nZXRDYXRlZ29yaWVzKClbMF0pXG4gICAgICAgIDogXCJcIjtcbiAgICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBzaG93UHJvamVjdCBcbiAgICAgICAgPyBET01UYXNrLmNyZWF0ZVByb2plY3RFbGVtZW50KHRhc2suZ2V0UHJvamVjdCgpKVxuICAgICAgICA6IFwiXCI7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGFzayB0aXRsZSBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHRhc2sgaW5mbyBlbGVtZW50XG4gICAgICAgIHRhc2tJbmZvRWxlbWVudC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAke2R1ZURhdGVFbGVtZW50fVxuICAgICAgICAgICAgICAgICR7Y2F0ZWdvcnlFbGVtZW50fVxuICAgICAgICAgICAgICAgICR7cHJvamVjdEVsZW1lbnR9XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2suZ2V0VGl0bGUoKX08L3A+YDtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGFzayBkZWxldGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZUNvbnRhaW5lciA9IFJlbW92ZUJ1dHRvbi5jcmVhdGVSZW1vdmVCdXR0b25FbGVtZW50KCk7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSB0YXNrIGluZm8gZWxlbWVudCBhbmQgdGhlIHRhc2sgZGVsZXRlIGNvbnRhaW5lciBlbGVtZW50IHRvIHRoZSB0YXNrIGVsZW1lbnRcbiAgICAgICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0luZm9FbGVtZW50KTtcbiAgICAgICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgY2hlY2tib3ggdG8gdG9nZ2xlIHRoZSBjb21wbGV0ZWQgc3RhdGUgb2YgdGhlIHRhc2tcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrLWJveFwiKTtcbiAgICAgICAgQ2hlY2tCb3guYWRkVG9nZ2xlRXZlbnRMaXN0ZW5lcihjaGVja0JveCk7IC8vIENoYW5nZSBkZSBodG1sIGVsZW1lbnRcbiAgICAgICAgQ2hlY2tCb3guYWRkQ2hlY2tCb3hDb21wbGV0ZUV2ZW50TGlzdGVuZXIoY2hlY2tCb3gsIHRhc2spOyAvLyBDaGFuZ2UgdGhlIHRhc2sgb2JqZWN0XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1pY29uXCIpO1xuICAgICAgICBSZW1vdmVCdXR0b24uYWRkUmVtb3ZlVGFza0V2ZW50TGlzdGVuZXIocmVtb3ZlQnV0dG9uLCB0YXNrLmdldElkKCkpO1xuICAgICAgICBET01UYXNrLmFkZEVkaXRUYXNrRXZlbnRMaXN0ZW5lcih0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIikpOyAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YXNrIGVsZW1lbnQgdG8gZWRpdCB0aGUgdGFza1xuICAgICAgICByZXR1cm4gdGFza0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUR1ZURhdGVFbGVtZW50IChkdWVEYXRlKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdER1ZURhdGUgPSBmb3JtYXQoZHVlRGF0ZSwgXCJkZCBFXCIpO1xuICAgICAgICByZXR1cm4gYDxwIGNsYXNzPVwidGFzay1kdWUtZGF0ZVwiPiR7Zm9ybWF0RHVlRGF0ZX08L3A+YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2F0ZWdvcnlFbGVtZW50IChjYXRlZ29yeSkge1xuICAgICAgICByZXR1cm4gYDxwIGNsYXNzPVwidGFzay1jYXRlZ29yeVwiPiR7Y2F0ZWdvcnl9PC9wPmA7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVByb2plY3RFbGVtZW50IChwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiBgPHAgY2xhc3M9XCJ0YXNrLXByb2plY3RcIj4ke3Byb2plY3R9PC9wPmA7XG4gICAgfVxuICAgIHN0YXRpYyBhZGRFZGl0VGFza0V2ZW50TGlzdGVuZXIgKHRhc2tFbGVtZW50KSB7XG4gICAgICAgIHRhc2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBET01Ub2RvTGlzdC5lZGl0VGFzayh0YXNrRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgY29tcGxldGVkLCBwcm9qZWN0LCB0YWdzKSB7XG4gICAgICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xuICAgIH1cblxuICAgIGdldElkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgc2V0VGl0bGUgKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBzZXREZXNjcmlwdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cbiAgICBzZXREdWVEYXRlIChkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuXG4gICAgaXNDb21wbGV0ZWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XG4gICAgfVxuICAgIHNldENvbXBsZXRlZCAoY29tcGxldGVkKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cbiAgICB0b2dnbGVDb21wbGV0ZWQgKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICB0b2dnbGVDb21wbGV0ZWQgKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgICB9XG4gICAgc2V0UHJvamVjdCAocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIGdldENhdGVnb3JpZXMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YWdzO1xuICAgIH1cblxuICAgIHNldENhdGVnb3JpZXMgKHRhZ3MpIHtcbiAgICAgICAgdGhpcy50YWdzID0gdGFncztcbiAgICB9XG5cbiAgICB0b1N0cmluZyAoKSB7XG4gICAgICAgIHJldHVybiBgVGl0bGU6ICR7dGhpcy50aXRsZX1cXG5EZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufVxcbkR1ZSBEYXRlOiAke3RoaXMuZHVlRGF0ZX1cXG5Db21wbGV0ZWQ6ICR7dGhpcy5jb21wbGV0ZWR9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUpTT04gKGpzb24pIHtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGpzb24uZHVlRGF0ZSA/IG5ldyBEYXRlKGpzb24uZHVlRGF0ZSkgOiBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IFRhc2soanNvbi50aXRsZSwganNvbi5kZXNjcmlwdGlvbiwgZHVlRGF0ZSwganNvbi5jb21wbGV0ZWQsIGpzb24ucHJvamVjdCwganNvbi50YWdzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUpTT05MaXN0IChqc29uTGlzdCkge1xuICAgICAgICBsZXQgdGFza0xpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQganNvbiBvZiBqc29uTGlzdCkge1xuICAgICAgICAgICAgdGFza0xpc3QucHVzaChUYXNrLmZyb21KU09OKGpzb24pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFza0xpc3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvSlNPTiAodGFzaykge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGFzayk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvSlNPTkxpc3QgKHRhc2tMaXN0KSB7XG4gICAgICAgIGxldCBqc29uTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tMaXN0KSB7XG4gICAgICAgICAgICBqc29uTGlzdC5wdXNoKFRhc2sudG9KU09OKHRhc2spKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ganNvbkxpc3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvTG9jYWxTdG9yYWdlICh0YXNrTGlzdCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBUYXNrLnRvSlNPTkxpc3QodGFza0xpc3QpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUxvY2FsU3RvcmFnZSAoKSB7XG4gICAgICAgIHJldHVybiBUYXNrLmZyb21KU09OTGlzdChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKSk7XG4gICAgfVxufSIsImltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXRJU08sIGVuZE9mV2Vlaywgc3RhcnRPZldlZWssIGlzU2FtZVdlZWssIGlzVGhpc1dlZWsgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBUYXNrIGZyb20gJy4uL1Rhc2svVGFzay5qcyc7XG5pbXBvcnQgRE9NVGFzayBmcm9tICcuLi9UYXNrL0RPTVRhc2snO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vVG9kb0xpc3QuanMnO1xuaW1wb3J0IENoZWNrQm94IGZyb20gJy4uLy4uL2Fzc2V0cy9UYXNrL0NoZWNrQm94L2NoZWNrQm94LmpzJztcbmltcG9ydCB7aXNUb2RheSwgaW5TYW1lV2VlayB9IGZyb20gJy4uLy4uL2Fzc2V0cy9HbG9iYWxGdW5jdGlvbnMvZ2xvYmFsRnVuY3Rpb25zLmpzJztcbmltcG9ydCBjcmVhdGVIaWRkZW5Qb3B1cCBmcm9tICcuLi8uLi9hc3NldHMvUG9wdXBzL2hpZGRlblBvcHVwLmpzJztcbmltcG9ydCB7IGNsb3NlTmV3UHJvamVjdEZvcm0sIGNyZWF0ZVByb2plY3RzRXZlbnRzLCBzZWxlY3RQcm9qZWN0QnV0dG9uQWN0aXZlfSBmcm9tICcuLi9Qcm9qZWN0L0RPTVByb2plY3RzLmpzJztcbmltcG9ydCB7IGNsb3NlSGFtYnVyZ2VyTmF2IH0gZnJvbSAnLi4vLi4vYXNzZXRzL0hhbWJ1cmdlci9oYW1idXJnZXJOYXYuanMnO1xuaW1wb3J0IHByaW50Q2F0ZWdvcnlMaXN0IGZyb20gJy4uLy4uL2Fzc2V0cy9UYXNrL0NhdGVnb3JpZXNMaXN0L2NhdGVnb3J5TGlzdC5qcyc7XG5pbXBvcnQgeyB0YSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5pbXBvcnQgeyBzYXZlSW5Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi8uLi9hc3NldHMvTG9jYWxTdG9yYWdlL2xvY2FsU3RvcmFnZS5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NVG9kb0xpc3Qge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMudG9kb2xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcbiAgICB0aGlzLmFjdGl2ZVByb2plY3QgPSBcImluYm94XCJcbiAgICB0aGlzLnNob3dQcm9qZWN0SW5UYXNrID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlUHJvamVjdChhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdCA9IGFjdGl2ZVByb2plY3Q7XG4gICAgICAgIGlmIChhY3RpdmVQcm9qZWN0ID09PSBcInRvZGF5XCIgfHwgYWN0aXZlUHJvamVjdCA9PT0gXCJ3ZWVrXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2plY3RJblRhc2sgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvamVjdEluVGFzayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFNob3cgYWxsIHRoZSB0YXNrcyBpbiB0aGUgdGFzayBsaXN0IFxuICAgICAqICBkZXBlbmRpbmcgb24gdGhlIHByb2plY3QgdHlwZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9qZWN0VHlwZSBcbiAgICAgKi9cbiAgICBwcmludEFsbFRhc2tzICgpIHtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciB0aGUgdGFzayBsaXN0XG4gICAgICAgIC8vIEZpbHRlciB0aGUgdGFzayBsaXN0IGJ5IHRoZSBhY3RpdmUgcHJvamVjdFxuICAgICAgICBjb25zdCBmaWx0ZXJUYXNrID0gdGhpcy5nZXRBY3RpdmVUYXNrcygpO1xuICAgICAgICAvLyBQcmludCB0aGUgdGFzayBsaXN0XG4gICAgICAgIHByaW50Q2F0ZWdvcnlMaXN0KGZpbHRlclRhc2spO1xuICAgICAgICBmaWx0ZXJUYXNrLmZvckVhY2godGFzayA9PiBET01UYXNrLnByaW50VGFza0VsZW1lbnQodGFzaywgdGhpcy5zaG93UHJvamVjdEluVGFzaykpO1xuICAgICAgICB0aGlzLnByaW50QWRkVGFza0VsZW1lbnQoKTsgLy8gQ3JlYXRlIHRoZSBhZGQgdGFzayBlbGVtZW50XG4gICAgfVxuXG4gICAgcHJpbnRCeUNhdGVnb3JpZXMgKGNhdGVnb3JpZXNMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgdGhlIHRhc2sgbGlzdFxuICAgICAgICAvLyBGaWx0ZXIgdGhlIHRhc2sgbGlzdCBieSB0aGUgYWN0aXZlIHByb2plY3RcbiAgICAgICAgY29uc3QgZmlsdGVyVGFzayA9IHRoaXMudGFza3NGaWx0ZXJCeUNhdGVnb3JpZXMoY2F0ZWdvcmllc0xpc3QsIHRoaXMuZ2V0QWN0aXZlVGFza3MoKSk7XG5cbiAgICAgICAgLy8gUHJpbnQgdGhlIHRhc2sgbGlzdFxuICAgICAgICAvLyBwcmludENhdGVnb3J5TGlzdChmaWx0ZXJUYXNrKTtcbiAgICAgICAgZmlsdGVyVGFzay5mb3JFYWNoKHRhc2sgPT4gRE9NVGFzay5wcmludFRhc2tFbGVtZW50KHRhc2ssIHRoaXMuc2hvd1Byb2plY3RJblRhc2spKTtcbiAgICAgICAgdGhpcy5wcmludEFkZFRhc2tFbGVtZW50KCk7IC8vIENyZWF0ZSB0aGUgYWRkIHRhc2sgZWxlbWVudFxuICAgIH1cblxuICAgIHRhc2tzRmlsdGVyQnlDYXRlZ29yaWVzIChjYXRlZ29yaWVzTGlzdCwgdGFza0xpc3QpIHtcbiAgICAgICAgbGV0IGNoZWNrZXIgPSAoYXJyLCB0YXJnZXQpID0+IHRhcmdldC5ldmVyeSh2ID0+IGFyci5pbmNsdWRlcyh2KSk7XG4gICAgICAgIGNvbnN0IGZpbHRlclRhc2tMaXN0ID0gW107XG5cbiAgICAgICAgdGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmIChjaGVja2VyKHRhc2suZ2V0Q2F0ZWdvcmllcygpLCBjYXRlZ29yaWVzTGlzdCkpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJUYXNrTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZpbHRlclRhc2tMaXN0O1xuICAgIH1cblxuICAgIHVwZGF0ZUNhdGVnb3J5TGlzdCgpIHtcbiAgICAgICAgcHJpbnRDYXRlZ29yeUxpc3QodGhpcy5nZXRBY3RpdmVUYXNrcygpKVxuICAgIH1cblxuXG4gICAgZ2V0QWN0aXZlVGFza3MgKCkgIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrTGlzdCA9IFtdO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9qZWN0ID09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgY3VycmVudFRhc2tMaXN0ID0gdGhpcy50b2RvbGlzdC5nZXRUb2RheVRhc2tMaXN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVQcm9qZWN0ID09IFwid2Vla1wiKSB7XG4gICAgICAgICAgICBjdXJyZW50VGFza0xpc3QgPSB0aGlzLnRvZG9saXN0LmdldFdlZWtUYXNrTGlzdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFRhc2tMaXN0ID0gdGhpcy50b2RvbGlzdC5nZXRUYXNrTGlzdEJ5UHJvamVjdCh0aGlzLmFjdGl2ZVByb2plY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUYXNrTGlzdDtcbiAgICB9XG5cbiAgICBnZXRBbGxUYXNrcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9saXN0LmdldFRhc2tMaXN0KCk7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgdGhpcy50b2RvbGlzdC5hZGRQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdHMocHJvamVjdFRpdGxlTGlzdCkge1xuICAgICAgICBwcmludENhdGVnb3J5TGlzdC5mb3JFYWNoKHByb2plY3RUaXRsZSA9PiB0aGlzLmFkZFByb2plY3QocHJvamVjdFRpdGxlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEFkZCBhIHRhc2sgdG8gXG4gICAgICogQHBhcmFtIHtUYXNrfSB0YXNrIFxuICAgICAqL1xuICAgIGFkZFRhc2sgKHRhc2spIHtcbiAgICAgICAgdGhpcy50b2RvbGlzdC5pbnNlcnRUYXNrKHRhc2spO1xuICAgICAgICBET01UYXNrLnByaW50VGFza0VsZW1lbnQodGFzaywgdGhpcy5zaG93UHJvamVjdEluVGFzayk7XG4gICAgICAgIHNhdmVJbkxvY2FsU3RvcmFnZSh0aGlzLmdldEFsbFRhc2tzKCkpO1xuICAgIH1cblxuICAgIGFkZFRhc2tzICh0YXNrTGlzdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0FkZGVkID0gW107XG4gICAgICAgIHRhc2tMaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZG9saXN0Lmluc2VydFRhc2sodGFzayk7XG4gICAgICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IHRhc2sucHJvamVjdDtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogIFJlbW92ZSB0aGUgdGFzayB3aXRoIHRoZSBnaXZlbiBpZCBmcm9tIHRoZSB0YXNrIGxpc3QgYW5kIHRoZSBET01cbiAgICAgKiBAcGFyYW0geyp9IGlkIFxuICAgICAqL1xuICAgIHJlbW92ZVRhc2sgKGlkKSB7XG4gICAgICAgIHRoaXMudG9kb2xpc3QucmVtb3ZlVGFzayhpZCk7XG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xuICAgICAgICB0YXNrRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgc2F2ZUluTG9jYWxTdG9yYWdlKHRoaXMuZ2V0QWxsVGFza3MoKSk7XG4gICAgICAgIHRoaXMudXBkYXRlQ2F0ZWdvcnlMaXN0KCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsVGFza3NCeVByb2plY3QgKHByb2plY3QpIHtcbiAgICAgICAgdGhpcy50b2RvbGlzdC5yZW1vdmVBbGxUYXNrc0J5UHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBlZGl0VGFzayAoaWQpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHRoaXMudG9kb2xpc3QuZ2V0VGFzayhpZCk7IC8vIEdldCB0aGUgdGFza1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cIl1gKTsgLy8gR2V0IHRoZSB0YXNrIGVsZW1lbnRcbiAgICAgICAgdGhpcy5jbG9zZUFsbEZvcm1zKCk7IC8vIENsb3NlIGFsbCBmb3Jtc1xuICAgICAgICBcbiAgICAgICAgdGFza0VsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5jcmVhdGVUYXNrRm9ybSh0YXNrKTtcbiAgICAgICAgdGhpcy5jcmVhdGVFZGl0VGFza0V2ZW50cyhpZCwgdGFza0VsZW1lbnQpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogIFVwZGF0ZSB0aGUgdGFzayBlbGVtZW50IGluIHRoZSB0YXNrIGxpc3RcbiAgICAgKiAgQ3JlYXRlIHRoZSB1cGRhdGVkIHRhc2sgZWxlbWVudCBhbmQgcmVwbGFjZSB0aGUgb2xkIHRhc2sgZWxlbWVudCB3aXRoIHRoZSB1cGRhdGVkIHRhc2sgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7VGFza30gdGFzayBcbiAgICAgKi9cbiAgICB1cGRhdGVUYXNrRWxlbWVudCAodGFzaykge1xuICAgICAgICBjb25zdCB0YXNrT2xkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrW2RhdGEtaWQ9XCIke3Rhc2suZ2V0SWQoKX1cIl1gKTtcbiAgICAgICAgY29uc3QgdGFza1VwZGF0ZWRFbGVtZW50ID0gRE9NVGFzay5jcmVhdGVUYXNrRWxlbWVudCh0YXNrKTtcbiAgICAgICAgdGFza09sZEVsZW1lbnQucmVwbGFjZVdpdGgodGFza1VwZGF0ZWRFbGVtZW50KTtcbiAgICB9XG5cbiAgICB0b2dnbGVDb21wbGV0ZWQgKGlkKSB7XG4gICAgICAgIHRoaXMudG9kb2xpc3QudG9nZ2xlQ29tcGxldGVkKGlkKTtcbiAgICAgICAgY29uc3QgdGFzayA9IHRoaXMudG9kb2xpc3QuZ2V0VGFzayhpZCk7XG4gICAgICAgIHRoaXMudXBkYXRlVGFza0VsZW1lbnQodGFzayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFJldHVybiB0aGUgdGFzayB3aXRoIHRoZSBnaXZlbiBpZFxuICAgICAqICBJZiB0aGUgdGFzayBpcyBub3QgZm91bmQsIHJldHVybiBudWxsXG4gICAgICogQHBhcmFtIHt9IGlkIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGdldFRhc2sgKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9saXN0LmdldFRhc2soaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogIEVkaXQgVGFza1xuICAgICAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgICBjcmVhdGVFZGl0VGFza0V2ZW50cyAodGFza0lELCB0YXNrRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUVkaXRUYXNrQ2xvc2VFdmVudCh0YXNrSUQpO1xuICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tPcHRpb25hbERhdGFFdmVudCgpO1xuICAgICAgICBDaGVja0JveC5hZGRUb2dnbGVFdmVudExpc3RlbmVyKHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1ib3gnKSk7XG4gICAgICAgIHRoaXMuY3JlYXRlRWRpdFRhc2tTdWJtaXRFdmVudCh0YXNrSUQpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVkaXRUYXNrQ2xvc2VFdmVudCAodGFza0lEKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlRWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzayAuY2xvc2UtbmV3LXRhc2stZm9ybScpO1xuICAgICAgICBjbG9zZUVkaXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLmdldFRhc2sodGFza0lEKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFza0VsZW1lbnQodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlRWRpdFRhc2tGb3JtICgpIHtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzayAnKTtcbiAgICAgICAgaWYgKGVkaXRUYXNrRm9ybSkge1xuICAgICAgICAgICAgY29uc3QgdGFza0lEID0gZWRpdFRhc2tGb3JtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLmdldFRhc2sodGFza0lEKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFza0VsZW1lbnQodGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY3JlYXRlRWRpdFRhc2tTdWJtaXRFdmVudCAodGFza0lEKSB7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2sgLm5ldy10YXNrLWZvcm0nKTsgLy8gR2V0IHRoZSBlZGl0IHRhc2sgZm9ybVxuICAgICAgICBlZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHsgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgZWRpdCB0YXNrIGZvcm1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBzdWJtaXQgZXZlbnRcbiAgICAgICAgICAgIC8vIEdldCB0aGUgdmFsdWVzIGZyb20gdGhlIGVkaXQgdGFzayBmb3JtXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay10aXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stbm90ZXMnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1ib3gnKS5kYXRhc2V0LmlzQ29tcGxldGVkID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgICAgbGV0IHRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stdGFncycpLnZhbHVlXG4gICAgICAgICAgICBpZiAodGFncykge1xuICAgICAgICAgICAgICAgIHRhZ3MgPSB0YWdzLnNwbGl0KCcsJykubWFwKHRhZyA9PiB0YWcudHJpbSgpKTsgLy8gUmVtb3ZlIHRoZSB3aGl0ZSBzcGFjZXMgZnJvbSB0aGUgdGFnc1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YWdzID0gW11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBwYXJzZUlTTyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stZHVlLWRhdGUnKS52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZHVlRGF0ZSA9PSAnSW52YWxpZCBEYXRlJykge1xuICAgICAgICAgICAgICAgIGR1ZURhdGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gdGhpcy5nZXRUYXNrKHRhc2tJRCk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFzayB3aXRoIHRoZSBuZXcgdmFsdWVzXG4gICAgICAgICAgICB0YXNrLnNldFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdGFzay5zZXREdWVEYXRlKGR1ZURhdGUpO1xuICAgICAgICAgICAgdGFzay5zZXRDYXRlZ29yaWVzKHRhZ3MpO1xuICAgICAgICAgICAgdGFzay5zZXRDb21wbGV0ZWQoY29tcGxldGVkKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB0YXNrIGVsZW1lbnQgaW4gdGhlIHRhc2sgbGlzdFxuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrRWxlbWVudCh0YXNrKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2F0ZWdvcnlMaXN0KCk7XG4gICAgICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UodGhpcy5nZXRBbGxUYXNrcygpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiAgUHJvamVjdHNcbiAgICAgKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG5cblxuXG4gICAgLyoqXG4gICAgICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiAgRm9ybSBUYXNrIFxuICAgICAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiAgQ3JlYXRlIGEgdGFzayBmb3JtIHVzZWQgdG86XG4gICAgICogIC0gQ3JlYXRlIGEgbmV3IHRhc2tcbiAgICAgKiAgLSBFZGl0IGFuIGV4aXN0aW5nIHRhc2tcbiAgICAgKiAgSWYgdGhlIHRhc2tJRCBpcyBub3QgcHJvdmlkZWQsIHRoZSBmb3JtIGlzIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHRhc2tcbiAgICAgKiAgSWYgdGhlIHRhc2tJRCBpcyBwcm92aWRlZCwgdGhlIGZvcm0gaXMgdXNlZCB0byBlZGl0IGFuIGV4aXN0aW5nIHRhc2tcbiAgICAgKiBAcGFyYW0ge1Rhc2t9IHRhc2tJRCBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBjcmVhdGVUYXNrRm9ybSh0YXNrKSAge1xuICAgICAgICBsZXQgdGFza1RpdGxlID0gXCJcIjtcbiAgICAgICAgbGV0IHRhc2tOb3RlcyA9IFwiXCI7XG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IFwiXCI7XG4gICAgICAgIGxldCBmaXJzdERhdGVPZldlZWsgPSBcIlwiO1xuICAgICAgICBsZXQgbGFzdERhdGVPZldlZWsgPSBcIlwiO1xuICAgICAgICBsZXQgdGFza1RhZ3MgPSBcIlwiO1xuICAgICAgICBsZXQgdGFza0NvbXBsZXRlID0gbnVsbDtcblxuICAgICAgICAvLyBJZiB0aGUgYWN0aXZlIHByb2plY3QgaXMgdG9kYXksIHNldCB0aGUgZHVlIGRhdGUgdG8gdG9kYXlcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUHJvamVjdCA9PSAndG9kYXknKSB7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZSA9IGZvcm1hdElTTyhuZXcgRGF0ZSgpLCB7cmVwcmVzZW50YXRpb246ICdkYXRlJ30pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlUHJvamVjdCA9PSAnd2VlaycpIHsgLy8gSWYgdGhlIGFjdGl2ZSBwcm9qZWN0IGlzIHdlZWssIHNldCB0aGUgbWF4IGR1ZSBkYXRlIHRvIHRoZSBlbmQgb2YgdGhlIHdlZWtcbiAgICAgICAgICAgIGZpcnN0RGF0ZU9mV2VlayA9IGZvcm1hdElTTyhzdGFydE9mV2VlayhuZXcgRGF0ZSgpLCB7d2Vla1N0YXJ0c09uOiAxfSksIHtyZXByZXNlbnRhdGlvbjogJ2RhdGUnfSk7XG4gICAgICAgICAgICBsYXN0RGF0ZU9mV2VlayA9ICBmb3JtYXRJU08oZW5kT2ZXZWVrKG5ldyBEYXRlKCksIHt3ZWVrU3RhcnRzT246IDF9KSwge3JlcHJlc2VudGF0aW9uOiAnZGF0ZSd9KTs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgdGFza1RpdGxlID0gdGFzay5nZXRUaXRsZSgpO1xuICAgICAgICAgICAgdGFza05vdGVzID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgdGFza0NvbXBsZXRlID0gdGFzay5pc0NvbXBsZXRlZCgpO1xuICAgICAgICAgICAgaWYgKHRhc2suZ2V0RHVlRGF0ZSgpKXtcbiAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZSA9IGZvcm1hdElTTyh0YXNrLmdldER1ZURhdGUoKSwge3JlcHJlc2VudGF0aW9uOiAnZGF0ZSd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2tUYWdzID0gdGFzay5nZXRDYXRlZ29yaWVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3Rhc2sgPyBcImVkaXQtdGFza1wiIDogXCJ0YXNrIG5ldy10YXNrXCJ9XCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJuZXctdGFzay1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGFza0NvbXBsZXRlICE9IG51bGwgXG4gICAgICAgICAgICAgICAgICAgID8gQ2hlY2tCb3guY3JlYXRlQ2hlY2tCb3hFbGVtZW50KHRhc2tDb21wbGV0ZSkub3V0ZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm5ldy10YXNrLXRpdGxlXCIgcGxhY2Vob2xkZXI9XCIke3Rhc2sgPyBcIlRpdGxlXCIgOiBcIk5ldyBUYXNrXCJ9XCIgdmFsdWU9XCIke3Rhc2tUaXRsZX1cIiAgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm5ldy10YXNrLW5vdGVzXCIgcGxhY2Vob2xkZXI9XCJOb3Rlc1wiIHZhbHVlPVwiJHt0YXNrTm90ZXN9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uYWwtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkdWUtZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkdWUtZGF0ZS1pY29uIG1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cIm5ldy10YXNrLWR1ZS1kYXRlXCIgdmFsdWU9XCIke3Rhc2tEdWVEYXRlfVwiIG1pbj1cIiR7Zmlyc3REYXRlT2ZXZWVrfVwiIG1heD1cIiR7bGFzdERhdGVPZldlZWt9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWctaWNvbiBtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+c2VsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJuZXctdGFzay10YWdzXCIgcGxhY2Vob2xkZXI9XCJFeDogR2l0aHViLFJQLi4uXCIgdmFsdWU9XCIke3Rhc2sgPyB0YXNrVGFncy50b1N0cmluZygpIDogXCJcIn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1uZXctdGFzay1mb3JtIG1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibmV3LXRhc2stc3VibWl0XCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+JHt0YXNrID8gXCJjaGVja1wiIDogXCJhZGRcIn08L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tGb3JtO1xuICAgIH1cblxuICAgIGFkZENoZWNrQm94RXZlbnRMaXN0ZW5lciAoaWQsIHRhc2tGb3JtKSB7XG4gICAgICAgIC8vIEdldCAudGFzay1pbmZvIGFuZCAudGFzay1kZWxldGUtY29udGFpbmVyIGVsZW1lbnRzXG4gICAgICAgIC8vIFRoZW4gZ2V0IHRoZSBmaXJzdCBjaGlsZCBvZiAudGFzay1pbmZvIGVsZW1lbnQgYW5kIGdldCBhbGwgdGhlIGNoaWxkcmVuIG9mIHRoZSBmaXJzdCBjaGlsZFxuICAgICAgICAvLyBUaGVuIGZpbmQgdGhlIGNoaWxkIHdpdGggdGhlIGNsYXNzIC5jaGVjay1ib3hcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKHRhc2tGb3JtLmNoaWxkcmVuLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBjaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrLWJveFwiKSk7XG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBET01Ub2RvTGlzdC5nZXRUYXNrKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94RWxlbWVudCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2stYm94XCIpO1xuICAgICAgICAgICAgdGFzay50b2dnbGVDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgIERPTVRhc2sudXBkYXRlQ2hlY2tCb3hFbGVtZW50KGNoZWNrQm94RWxlbWVudCwgdGFzay5pc0NvbXBsZXRlZCgpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB0aGUgdGFzayBjcmVhdG9yIGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgdGFzayBsaXN0XG4gICAgICogVGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gY3JlYXRlIG5ldyB0YXNrc1xuICAgICAqL1xuICAgIHByaW50QWRkVGFza0VsZW1lbnQgKCkge1xuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBuZXcgdGFzayBlbGVtZW50XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tFbGVtZW50ID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2sgbmV3LXRhc2tcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+Q3JlYXRlIFRhc2s8L3A+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgbmV3IGFkZCB0YXNrIGVsZW1lbnQgdG8gdGhlIHRhc2sgbGlzdFxuICAgICAgICB0YXNrTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG5ld1Rhc2tFbGVtZW50KTtcbiAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrRXZlbnRzKCk7IC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBuZXcgYWRkIHRhc2sgZWxlbWVudFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBTaG93IHRoZSBjcmVhdGUgbmV3IHRhc2sgZm9ybSB3aGVuIHRoZSBhZGQgdGFzayBlbGVtZW50IGlzIGNsaWNrZWRcbiAgICAgKiBBZGQgdGhlIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgbmV3IHRhc2sgZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZUFkZFRhc2tFdmVudHMgKCkgeyBcbiAgICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgbmV3IHRhc2sgZWxlbWVudFxuICAgICAgICBjb25zdCBhZGRUYXNrRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuICAgICAgICBhZGRUYXNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxGb3JtcygpIC8vIENsb3NlIGFsbCB0aGUgZm9ybXNcbiAgICAgICAgICAgIHRoaXMucHJpbnRBZGRUYXNrRm9ybSgpOyAvLyBTaG93IHRoZSBhZGQgdGFzayBmb3JtXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tGb3JtQ2xvc2VFdmVudCgpOyAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjbG9zZSBidXR0b25cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza1N1Ym1pdEV2ZW50KCk7IC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza09wdGlvbmFsRGF0YUV2ZW50KCk7IC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIG9wdGlvbmFsIGRhdGEgaWNvbnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgYWRkIHRhc2sgZm9ybVxuICAgICAqIFRoaXMgZm9ybSBpcyB1c2VkIHRvIGNyZWF0ZSBuZXcgdGFza3NcbiAgICAgKi8gXG4gICAgcHJpbnRBZGRUYXNrRm9ybSAoKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcbiAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gdGhpcy5jcmVhdGVUYXNrRm9ybSgpOyAvLyBDcmVhdGUgdGhlIG5ldyB0YXNrIGZvcm1cbiAgICAgICAgbmV3VGFzay5vdXRlckhUTUwgPSBuZXdUYXNrRm9ybTsgLy8gUmVwbGFjZSB0aGUgbmV3IHRhc2sgZWxlbWVudCB3aXRoIHRoZSBuZXcgdGFzayBmb3JtXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIGFkZCB0YXNrIGZvcm1cbiAgICAgKiBSZW1vdmUgdGhlIGFkZCB0YXNrIGZvcm0gYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgYWRkIHRhc2sgZWxlbWVudFxuICAgICAqL1xuICAgIGNsb3NlQWRkVGFza0Zvcm0gKCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuICAgICAgICBuZXdUYXNrRm9ybS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5wcmludEFkZFRhc2tFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqICBBZGQgVGFzayBGb3JtIEV2ZW50c1xuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIEFkZCB0YXNrIGZvcm0gc3VibWl0IGJ1dHRvblxuICAgICAqL1xuICAgIGNyZWF0ZUFkZFRhc2tTdWJtaXRFdmVudCAoKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWZvcm0nKTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXRpdGxlJykudmFsdWU7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSB0aXRsZSBpcyBlbXB0eSwgZG9uJ3QgY3JlYXRlIHRoZSB0YXNrXG4gICAgICAgICAgICBpZiAodGl0bGUudHJpbSgpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXRpdGxlJykudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBjcmVhdGVIaWRkZW5Qb3B1cCgnVGFzayB0aXRsZSBjYW5ub3QgYmUgZW1wdHknLCAxNTAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IFxuXG5cbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLW5vdGVzJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IHBhcnNlSVNPKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1kdWUtZGF0ZScpLnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkdWVEYXRlID09ICdJbnZhbGlkIERhdGUnKSB7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay10YWdzJykudmFsdWVcbiAgICAgICAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgICAgICAgICAgdGFncyA9IHRhZ3Muc3BsaXQoJywnKS5tYXAodGFnID0+IHRhZy50cmltKCkpOyAvLyBSZW1vdmUgdGhlIHdoaXRlIHNwYWNlcyBmcm9tIHRoZSB0YWdzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhZ3MgPSBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGFza1Byb2plY3QgPSB0aGlzLmFjdGl2ZVByb2plY3Q7XG4gICAgICAgICAgICBpZiAodGFza1Byb2plY3QgPT0gJ3RvZGF5JyB8fCB0YXNrUHJvamVjdCA9PSAnd2VlaycpIHtcbiAgICAgICAgICAgICAgICB0YXNrUHJvamVjdCA9ICdpbmJveCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgdGFza1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZmFsc2UsIHRhc2tQcm9qZWN0LCB0YWdzKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUHJvamVjdCA9PSAndG9kYXknICYmICFpc1RvZGF5KG5ld1Rhc2suZHVlRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9saXN0Lmluc2VydFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgY3JlYXRlSGlkZGVuUG9wdXAoJ1Rhc2sgYWRkZWQgdG8gaW5ib3gnLCAxNTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVQcm9qZWN0ID09ICd3ZWVrJyAmJiAhaXNTYW1lV2VlayhuZXdUYXNrLmR1ZURhdGUsIG5ldyBEYXRlKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RvbGlzdC5pbnNlcnRUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUhpZGRlblBvcHVwKCdUYXNrIGFkZGVkIHRvIGluYm94JywgMTUwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhdGVnb3J5TGlzdCgpXG4gICAgICAgICAgICB0aGlzLmNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgQWRkIHRhc2sgZm9ybSBjbG9zZSBidXR0b25cbiAgICAgKi9cbiAgICBjcmVhdGVBZGRUYXNrRm9ybUNsb3NlRXZlbnQgKCkge1xuICAgICAgICBjb25zdCBjbG9zZU5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrIC5jbG9zZS1uZXctdGFzay1mb3JtJyk7XG4gICAgICAgIGNsb3NlTmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIG9wdGlvbmFsIGRhdGEgaWNvbnNcbiAgICAgKiAgV2hlbiB0aGUgaWNvbiBpcyBjbGlja2VkLCBzaG93IHRoZSBvcHRpb25hbCBkYXRhIGZvcm1cbiAgICAgKiAgV2hlbiB0aGUgaWNvbiBpcyBjbGlja2VkIGFnYWluLCBoaWRlIHRoZSBvcHRpb25hbCBkYXRhIGZvcm1cbiAgICAgKiAgT25seSBvbmUgb3B0aW9uYWwgZGF0YSBmb3JtIGNhbiBiZSBzaG93biBhdCBhIHRpbWVcbiAgICAgKiAgSWYgdGhlIHVzZXIgY2xpY2tzIG9uIGFub3RoZXIgb3B0aW9uYWwgZGF0YSBpY29uLCBoaWRlIHRoZSBjdXJyZW50IG9wdGlvbmFsIGRhdGEgZm9ybSBhbmQgc2hvdyB0aGUgbmV3IG9wdGlvbmFsIGRhdGEgZm9ybVxuICAgICAqL1xuICAgIGNyZWF0ZUFkZFRhc2tPcHRpb25hbERhdGFFdmVudCAoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb25hbC1kYXRhJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uYWxEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25hbERhdGFDaGlsZHJlbiA9IEFycmF5LmZyb20ob3B0aW9uYWxEYXRhW2ldLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIG9wdGlvbmFsRGF0YUNoaWxkcmVuLmZvckVhY2goY3VycmVudENoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gY3VycmVudENoaWxkLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLWZvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxEYXRhQ2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgIT09IGN1cnJlbnRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1mb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdCAocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW2RhdGEtcHJvamVjdC10eXBlPVwiJHtwcm9qZWN0fVwiXWApLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHByb2plY3RCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2VsZWN0UHJvamVjdEJ1dHRvbkFjdGl2ZShidXR0b24uZGF0YXNldC5wcm9qZWN0VHlwZSkpXG4gICAgICAgIHByb2plY3RCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsVGFza3NCeVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGNyZWF0ZVByb2plY3RzRXZlbnRzKClcbiAgICAgICAgc2VsZWN0UHJvamVjdEJ1dHRvbkFjdGl2ZSgnaW5ib3gnKTtcbiAgICAgICAgY3JlYXRlSGlkZGVuUG9wdXAoYFByb2plY3QgPHNwYW4gY2xhc3M9XCJwb3B1cC10YXNrLXByb2plY3RcIj4ke3Byb2plY3R9PC9zcGFuPiBkZWxldGVkIHN1Y2Nlc3NmdWxseWApO1xuICAgIH1cblxuICAgIGNsb3NlQWxsRm9ybXMgKCkgIHtcbiAgICAgICAgY2xvc2VOZXdQcm9qZWN0Rm9ybSgpO1xuICAgICAgICB0aGlzLmNsb3NlQWRkVGFza0Zvcm0oKVxuICAgICAgICB0aGlzLmNsb3NlRWRpdFRhc2tGb3JtKClcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGlzVGhpc1dlZWssIGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gW107XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RMaXN0LmluY2x1ZGVzKHByb2plY3RUaXRsZSkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0VGl0bGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RMaXN0O1xuICAgIH1cblxuICAgIGdldFRhc2tMaXN0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0VGFza0xpc3RCeVByb2plY3QgKHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09IHByb2plY3QpO1xuICAgIH1cblxuICAgIGdldFRvZGF5VGFza0xpc3QgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdC5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIGlmICh0YXNrRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1RvZGF5KHRhc2tEYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0V2Vla1Rhc2tMaXN0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3QuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgICAgICBpZiAodGFza0RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNUaGlzV2Vlayh0YXNrRGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRhc2tMaXN0ICh0YXNrTGlzdCkge1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gdGFza0xpc3Q7XG4gICAgfVxuXG4gICAgaW5zZXJ0VGFzayAodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxuICAgIGdldFRhc2sgKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0LmZpbmQodGFzayA9PiB0YXNrLmlkID09IGlkKTtcbiAgICB9XG5cbiAgICByZW1vdmVUYXNrIChpZCkge1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gdGhpcy50YXNrTGlzdC5maWx0ZXIodCA9PiB0LmlkICE9IGlkKTtcbiAgICB9XG5cbiAgICByZW1vdmVBbGxUYXNrc0J5UHJvamVjdCAocHJvamVjdCkge1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gdGhpcy50YXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgIT0gcHJvamVjdCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGFzayAodGFzaykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudGFza0xpc3QuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PSB0YXNrLmlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudGFza0xpc3RbaW5kZXhdID0gdGFzaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBsZXRlZCAoaWQpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHRoaXMuZ2V0VGFzayhpZCk7XG4gICAgICAgIHRhc2sudG9nZ2xlQ29tcGxldGVkKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZnJvbUpTT04gKGpzb24pIHtcbiAgICAgICAgbGV0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YganNvbi50YXNrTGlzdCkge1xuICAgICAgICAgICAgdG9kb0xpc3QuYWRkVGFzayhUYXNrLmZyb21KU09OKHRhc2spKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kb0xpc3Q7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9