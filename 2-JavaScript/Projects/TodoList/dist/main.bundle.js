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
}`, "",{"version":3,"sources":["webpack://./src/css/task.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,6CAA6C;IAC7C,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,2BAA2B;IAC3B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,gCAAgC;AACpC;AACA;IACI,qBAAqB;AACzB;AACA;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,kCAAkC;AACtC;;AAEA;;;;CAIC;AACD;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;;IAEI,4BAA4B;AAChC;;AAEA;IACI;QACI,uBAAuB;IAC3B;;IAEA;QACI,yBAAyB;IAC7B;AACJ;;;AAGA;;;;CAIC;;AAED;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,iBAAiB;AACrB;;;AAGA;IACI,eAAe;IACf,eAAe;IACf,gCAAgC;AACpC;;;AAGA,qBAAqB;AACrB;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,OAAO;IACP,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,WAAW;AACf;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI,aAAa;AACjB;;AAEA,oCAAoC;AACpC;;IAEI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,iBAAiB;IACjB,YAAY;AAChB;;AAEA;;;;CAIC;;AAED;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,UAAU;AACd;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI;QACI,YAAY;IAChB;AACJ","sourcesContent":[".task-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    overflow-y: auto;\n    height: calc(100vh - 72px - 80px - 46px);\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    padding: 10px;\n    border-radius: 10px;\n    transition: background-color 0.2s ease-in-out;\n    cursor: pointer;\n    user-select: none;\n}\n.task:hover {\n    background-color: var(--secondary);\n}\n\n.task-info {\n    display: flex;\n    flex: auto;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n}\n\n.extra-data {\n    display: flex;\n    gap: 10px;\n}\n\n.task-title {\n    flex: 1;\n}\n\n.extra-data > p {\n    font-weight: bold;\n    font-size: 12px;\n    background-color: #0000001f;\n    padding: 5px 5px;\n    border-radius: 5px;\n}\n\n.task-delete-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.delete-icon {\n    visibility: hidden;\n    opacity: 0;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n.delete-icon:hover {\n    transform: scale(1.2);\n}\n.task:hover .delete-icon {\n    visibility: visible;\n    opacity: 1;\n}\n\n.new-task {\n    justify-content: flex-start;\n    margin-top: 20px;\n    background-color: var(--secondary);\n}\n\n/**\n *  ------------------------\n *  Task Form\n *  ------------------------\n*/\n.new-task-form {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    gap: 10px;\n}\n\n.form-inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: inherit;\n}\n\n.form-inputs input {\n    font-size: 16px;\n}\n\n\n.new-task-title, .new-task-notes {\n    width: 100%;\n    border: none;\n    background-color: transparent;\n    outline: none;\n}\n\n.form-actions {\n    display: flex;\n    flex-direction: column;\n    justify-content: inherit;\n    gap: 20px;\n}\n\n.new-task-submit, .close-new-task-form {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n\n.new-task-submit > span {\n    color: black;\n    background-color: var(--primary);\n    border-radius: 15px;\n}\n\n.new-task-submit:hover > .material-symbols-outlined,\n.close-new-task-form:hover  {\n    animation: rotate .3s linear;\n}\n\n@keyframes rotate {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(190deg);\n    }\n}\n\n\n/**\n *  ------------------------\n *  Task Details\n *  ------------------------\n*/\n\n.optional-data {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.optional-data input {\n    background-color: transparent;\n    border: none;\n    outline: none;\n}\n.due-date-container, .tags-container {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    border-radius: 25px;\n    padding: 5px 10px;\n}\n\n\n.optional-data span {\n    font-size: 20px;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n\n\n/* Date Input Style */\n.new-task-due-date, .new-task-tags {\n    display: none;\n    position: relative; \n}\n\n.new-task-due-date::-webkit-calendar-picker-indicator{\n    background: transparent;\n    bottom: 0;\n    color: transparent;\n    cursor: pointer;\n    height: auto;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: auto;\n}\n\n.active-form {\n    background-color: #0000001f;\n}\n.active-form input {\n    display: flex;\n}\n\n/* Date Input Style when is active */\n.active-form input[type=\"date\"]\n{\n    display:block;\n    appearance: textfield;\n    -webkit-appearance: textfield;\n    -moz-appearance: textfield;\n    min-height: 1.2em;\n    width: 100px;\n}\n\n/**\n *  ------------------------\n *  Edit Task\n *  ------------------------\n*/\n\n.edit-task {\n    display: flex;\n    gap: 10px;\n    width: 100%;\n    padding: 0;\n}\n\n.task:has(.edit-task)  {\n    background-color: var(--secondary);\n}\n\n.task:has(.edit-task) .new-task-submit span  {\n    animation: none;\n    color: black;\n}\n\n@media screen and (max-width: 768px) {\n    .task-list {\n        height: auto;\n    }\n}"],"sourceRoot":""}]);
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
    // if (localStorage.getItem("projectList")) {
    //     console.log("created");
    //     localStorage.setItem("projectList", [""]);
    // }
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
    /* eslint-disable */console.log(...oo_oo(`c6514f33_0`,projectTitle));
    let localProjectList = JSON.parse(localStorage.getItem("projectList"));
    localProjectList = localProjectList.filter(project => project != projectTitle);
    /* eslint-disable */console.log(...oo_oo(`c6514f33_1`,localProjectList));
    localStorage.setItem("projectList", JSON.stringify(localProjectList));
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
    /* eslint-disable */console.log(...oo_oo(`c6514f33_2`,localStorageProjectList));

    if (localStorageProjectList) {
        loadProjects(localStorageProjectList)
    }
} 


/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x589f03=_0x22f0;(function(_0x13a83c,_0x51971c){var _0x57709=_0x22f0,_0x36b8e7=_0x13a83c();while(!![]){try{var _0x4ce5c4=-parseInt(_0x57709(0x163))/0x1+-parseInt(_0x57709(0x13d))/0x2+-parseInt(_0x57709(0x19b))/0x3+-parseInt(_0x57709(0x15f))/0x4*(-parseInt(_0x57709(0x157))/0x5)+-parseInt(_0x57709(0x14f))/0x6+parseInt(_0x57709(0x111))/0x7+-parseInt(_0x57709(0x179))/0x8*(-parseInt(_0x57709(0x181))/0x9);if(_0x4ce5c4===_0x51971c)break;else _0x36b8e7['push'](_0x36b8e7['shift']());}catch(_0x53f6ec){_0x36b8e7['push'](_0x36b8e7['shift']());}}}(_0x58da,0x26458));function _0x58da(){var _0x3de2c2=['stack',':logPointId:','reduceLimits','getOwnPropertyNames','map','_p_name','autoExpandPropertyCount','reload','toLowerCase','_numberRegExp','setter','onclose','concat','autoExpandMaxDepth','function','url','_additionalMetadata','_getOwnPropertySymbols','_disposeWebsocket','port','_consoleNinjaAllowedToStart','onopen','_isSet','onmessage','boolean','392700anWxjH','process','autoExpandPreviousObjects',\"/Users/josemaria/.vscode-insiders/extensions/wallabyjs.console-ninja-0.0.192/node_modules\",'webpack','console','_reconnectTimeout','data','getWebSocketClass','_sortProps','_Symbol','onerror','[object\\x20BigInt]','_setNodeQueryPath','versions','_setNodePermissions','forEach','_allowedToSend','hits','root_exp_id','_setNodeExpressionPath','Number','_processTreeNodeResult','then','_connecting','_treeNodePropertiesAfterFullValue','allStrLength','test','serialize','64269','1691405958337','location','Symbol','strLength','name','POSITIVE_INFINITY','_dateToString','positiveInfinity','pop','_connectAttemptCount','close','slice','current','node','https://tinyurl.com/37x8b79t','Buffer','_connectToHostNow','replace','push','_webSocketErrorDocsLink','number','time','_cleanNode','_setNodeId','split','elements','getOwnPropertyDescriptor','[object\\x20Map]','perf_hooks','type','_WebSocketClass','level','_addFunctionsNode','_setNodeExpandableState','getPrototypeOf','readyState','bind','_allowedToConnectOnSend','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_socket','value','parent','_objectToString','cappedElements','capped','unknown','_capIfString','call','_property','parse','hrtime','stackTraceLimit','log','undefined','resolveGetters','_addProperty','index','_sendErrorMessage','pathToFileURL','count','substr','message','_addObjectProperty','','_console_ninja','sortProps','string','global','getter','793961aXjRNX','WebSocket','depth','logger\\x20websocket\\x20error','_WebSocket','unref','_isPrimitiveWrapperType','_addLoadNode','nan','hasOwnProperty','HTMLAllCollection','array','default','_console_ninja_session','_blacklistedProperty','expressionsToEvaluate','disabledTrace','_p_length','cappedProps','127.0.0.1','length','noFunctions','_propertyName','host','__es'+'Module','null','_isMap','_propertyAccessor','RegExp','now','next.js','join','valueOf','get','_setNodeLabel','send','method','negativeZero','trace','NEGATIVE_INFINITY','timeStamp','_attemptToReconnectShortly','_isArray','match','158546adSDDG','_treeNodePropertiesBeforeFullValue','constructor','_inBrowser','_regExpToString','toString','_undefined','warn','elapsed','object','stringify','Error','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','disabledLog','_isPrimitiveType','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','ws/index.js','defineProperty','878412oPCbKb','props','includes','timeEnd','remix','rootExpression','_getOwnPropertyDescriptor','[object\\x20Array]','961075aQVRjT','Boolean','_p_','_getOwnPropertyNames','_connected','_type','funcName','getOwnPropertySymbols','4menNWO','date','Set','catch','228489CaBEvE','hostname','_HTMLAllCollection','autoExpandLimit','bigint','String','set','Map','expId','astro','autoExpand','symbol','...','_maxConnectAttemptCount','_quotedRegExp','[object\\x20Set]','error','_ws','path','1.0.0','totalStrLength',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"MacBook-Pro-de-Jose.local\",\"192.168.1.131\"],'136KVMpeo','prototype','isExpressionToEvaluate','[object\\x20Date]','\\x20browser','nodeModules','_keyStrRegExp','_hasMapOnItsPath','230922HBnRxG'];_0x58da=function(){return _0x3de2c2;};return _0x58da();}var ue=Object['create'],te=Object[_0x589f03(0x14e)],he=Object['getOwnPropertyDescriptor'],le=Object['getOwnPropertyNames'],fe=Object[_0x589f03(0x1db)],_e=Object['prototype'][_0x589f03(0x11a)],pe=(_0x6572f,_0x5eab65,_0x335690,_0x1090ec)=>{var _0x48e6a0=_0x589f03;if(_0x5eab65&&typeof _0x5eab65==_0x48e6a0(0x146)||typeof _0x5eab65==_0x48e6a0(0x190)){for(let _0x117758 of le(_0x5eab65))!_e['call'](_0x6572f,_0x117758)&&_0x117758!==_0x335690&&te(_0x6572f,_0x117758,{'get':()=>_0x5eab65[_0x117758],'enumerable':!(_0x1090ec=he(_0x5eab65,_0x117758))||_0x1090ec['enumerable']});}return _0x6572f;},ne=(_0x10a510,_0x15841b,_0x57ecd8)=>(_0x57ecd8=_0x10a510!=null?ue(fe(_0x10a510)):{},pe(_0x15841b||!_0x10a510||!_0x10a510[_0x589f03(0x129)]?te(_0x57ecd8,_0x589f03(0x11d),{'value':_0x10a510,'enumerable':!0x0}):_0x57ecd8,_0x10a510)),Q=class{constructor(_0x33407c,_0x588d17,_0x24348c,_0x598683){var _0x53bbd6=_0x589f03;this[_0x53bbd6(0x10f)]=_0x33407c,this[_0x53bbd6(0x128)]=_0x588d17,this[_0x53bbd6(0x195)]=_0x24348c,this['nodeModules']=_0x598683,this[_0x53bbd6(0x1ac)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x53bbd6(0x15b)]=!0x1,this['_connecting']=!0x1,this[_0x53bbd6(0x140)]=!!this['global'][_0x53bbd6(0x112)],this[_0x53bbd6(0x1d7)]=null,this[_0x53bbd6(0x1c2)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_webSocketErrorDocsLink']=_0x53bbd6(0x1c7),this[_0x53bbd6(0x1f2)]=(this[_0x53bbd6(0x140)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x53bbd6(0x1cc)];}async[_0x589f03(0x1a3)](){var _0x3807ff=_0x589f03;if(this[_0x3807ff(0x1d7)])return this[_0x3807ff(0x1d7)];let _0x3438da;if(this[_0x3807ff(0x140)])_0x3438da=this[_0x3807ff(0x10f)][_0x3807ff(0x112)];else{if(this[_0x3807ff(0x10f)]['process']?.[_0x3807ff(0x115)])_0x3438da=this[_0x3807ff(0x10f)]['process']?.[_0x3807ff(0x115)];else try{let _0x24586a=await import('path');_0x3438da=(await import((await import(_0x3807ff(0x191)))[_0x3807ff(0x1f3)](_0x24586a[_0x3807ff(0x130)](this[_0x3807ff(0x17e)],_0x3807ff(0x14d)))['toString']()))['default'];}catch{try{_0x3438da=require(require(_0x3807ff(0x175))[_0x3807ff(0x130)](this[_0x3807ff(0x17e)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x3807ff(0x1d7)]=_0x3438da,_0x3438da;}[_0x589f03(0x1c9)](){var _0x36ab85=_0x589f03;this[_0x36ab85(0x1b3)]||this['_connected']||this[_0x36ab85(0x1c2)]>=this[_0x36ab85(0x170)]||(this[_0x36ab85(0x1de)]=!0x1,this[_0x36ab85(0x1b3)]=!0x0,this[_0x36ab85(0x1c2)]++,this[_0x36ab85(0x174)]=new Promise((_0x48a30c,_0x2b555f)=>{var _0x34940f=_0x36ab85;this[_0x34940f(0x1a3)]()[_0x34940f(0x1b2)](_0x450d2=>{var _0x561107=_0x34940f;let _0x2db6b9=new _0x450d2('ws://'+this[_0x561107(0x128)]+':'+this[_0x561107(0x195)]);_0x2db6b9[_0x561107(0x1a6)]=()=>{var _0x19c491=_0x561107;this[_0x19c491(0x1ac)]=!0x1,this['_disposeWebsocket'](_0x2db6b9),this[_0x19c491(0x13a)](),_0x2b555f(new Error(_0x19c491(0x114)));},_0x2db6b9['onopen']=()=>{var _0x538e59=_0x561107;this[_0x538e59(0x140)]||_0x2db6b9[_0x538e59(0x1e0)]&&_0x2db6b9['_socket']['unref']&&_0x2db6b9[_0x538e59(0x1e0)][_0x538e59(0x116)](),_0x48a30c(_0x2db6b9);},_0x2db6b9[_0x561107(0x18d)]=()=>{var _0x24cae0=_0x561107;this[_0x24cae0(0x1de)]=!0x0,this['_disposeWebsocket'](_0x2db6b9),this['_attemptToReconnectShortly']();},_0x2db6b9[_0x561107(0x199)]=_0x31b9a7=>{var _0x371325=_0x561107;try{_0x31b9a7&&_0x31b9a7[_0x371325(0x1a2)]&&this[_0x371325(0x140)]&&JSON[_0x371325(0x1ea)](_0x31b9a7[_0x371325(0x1a2)])[_0x371325(0x135)]===_0x371325(0x189)&&this[_0x371325(0x10f)][_0x371325(0x1ba)][_0x371325(0x189)]();}catch{}};})[_0x34940f(0x1b2)](_0xad72f2=>(this[_0x34940f(0x15b)]=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x34940f(0x1ac)]=!0x0,this[_0x34940f(0x1c2)]=0x0,_0xad72f2))[_0x34940f(0x162)](_0xe606aa=>(this[_0x34940f(0x15b)]=!0x1,this[_0x34940f(0x1b3)]=!0x1,console['warn'](_0x34940f(0x1df)+this[_0x34940f(0x1cc)]),_0x2b555f(new Error(_0x34940f(0x14c)+(_0xe606aa&&_0xe606aa[_0x34940f(0x1f6)])))));}));}[_0x589f03(0x194)](_0x480f3c){var _0x4459ef=_0x589f03;this[_0x4459ef(0x15b)]=!0x1,this['_connecting']=!0x1;try{_0x480f3c[_0x4459ef(0x18d)]=null,_0x480f3c[_0x4459ef(0x1a6)]=null,_0x480f3c[_0x4459ef(0x197)]=null;}catch{}try{_0x480f3c[_0x4459ef(0x1dc)]<0x2&&_0x480f3c[_0x4459ef(0x1c3)]();}catch{}}['_attemptToReconnectShortly'](){var _0x36bd44=_0x589f03;clearTimeout(this[_0x36bd44(0x1a1)]),!(this[_0x36bd44(0x1c2)]>=this[_0x36bd44(0x170)])&&(this[_0x36bd44(0x1a1)]=setTimeout(()=>{var _0x24be52=_0x36bd44;this[_0x24be52(0x15b)]||this['_connecting']||(this[_0x24be52(0x1c9)](),this[_0x24be52(0x174)]?.['catch'](()=>this[_0x24be52(0x13a)]()));},0x1f4),this[_0x36bd44(0x1a1)][_0x36bd44(0x116)]&&this['_reconnectTimeout'][_0x36bd44(0x116)]());}async[_0x589f03(0x134)](_0x4d6087){var _0x50d79f=_0x589f03;try{if(!this[_0x50d79f(0x1ac)])return;this[_0x50d79f(0x1de)]&&this[_0x50d79f(0x1c9)](),(await this[_0x50d79f(0x174)])[_0x50d79f(0x134)](JSON[_0x50d79f(0x147)](_0x4d6087));}catch(_0x18d72d){console[_0x50d79f(0x144)](this[_0x50d79f(0x1f2)]+':\\x20'+(_0x18d72d&&_0x18d72d['message'])),this[_0x50d79f(0x1ac)]=!0x1,this[_0x50d79f(0x13a)]();}}};function _0x22f0(_0x159eff,_0x4a5edc){var _0x58da95=_0x58da();return _0x22f0=function(_0x22f003,_0x2f37c0){_0x22f003=_0x22f003-0x10c;var _0x3dfd13=_0x58da95[_0x22f003];return _0x3dfd13;},_0x22f0(_0x159eff,_0x4a5edc);}function V(_0x6e0de9,_0x30b1ca,_0xecc6ab,_0x20954e,_0x281ab3){var _0x180a00=_0x589f03;let _0x53bb07=_0xecc6ab[_0x180a00(0x1d1)](',')[_0x180a00(0x186)](_0xf5a6e8=>{var _0x342ee1=_0x180a00;try{_0x6e0de9[_0x342ee1(0x11e)]||((_0x281ab3===_0x342ee1(0x12f)||_0x281ab3===_0x342ee1(0x153)||_0x281ab3===_0x342ee1(0x16c))&&(_0x281ab3+=_0x6e0de9['process']?.[_0x342ee1(0x1a9)]?.['node']?'\\x20server':_0x342ee1(0x17d)),_0x6e0de9[_0x342ee1(0x11e)]={'id':+new Date(),'tool':_0x281ab3});let _0x3a320f=new Q(_0x6e0de9,_0x30b1ca,_0xf5a6e8,_0x20954e);return _0x3a320f[_0x342ee1(0x134)][_0x342ee1(0x1dd)](_0x3a320f);}catch(_0x5223fc){return console[_0x342ee1(0x144)](_0x342ee1(0x149),_0x5223fc&&_0x5223fc['message']),()=>{};}});return _0x51e98d=>_0x53bb07[_0x180a00(0x1ab)](_0x2db5eb=>_0x2db5eb(_0x51e98d));}function H(_0x505692){var _0x1b5767=_0x589f03;let _0x6424eb=function(_0x5e225f,_0x20071c){return _0x20071c-_0x5e225f;},_0x52094d;if(_0x505692['performance'])_0x52094d=function(){var _0x366594=_0x22f0;return _0x505692['performance'][_0x366594(0x12e)]();};else{if(_0x505692[_0x1b5767(0x19c)]&&_0x505692['process'][_0x1b5767(0x1eb)])_0x52094d=function(){var _0x194cd0=_0x1b5767;return _0x505692[_0x194cd0(0x19c)][_0x194cd0(0x1eb)]();},_0x6424eb=function(_0x298b96,_0x44a15e){return 0x3e8*(_0x44a15e[0x0]-_0x298b96[0x0])+(_0x44a15e[0x1]-_0x298b96[0x1])/0xf4240;};else try{let {performance:_0x346885}=require(_0x1b5767(0x1d5));_0x52094d=function(){return _0x346885['now']();};}catch{_0x52094d=function(){return+new Date();};}}return{'elapsed':_0x6424eb,'timeStamp':_0x52094d,'now':()=>Date[_0x1b5767(0x12e)]()};}function X(_0x2af92c,_0x261975,_0x512474){var _0x5b4e19=_0x589f03;if(_0x2af92c[_0x5b4e19(0x196)]!==void 0x0)return _0x2af92c[_0x5b4e19(0x196)];let _0x55091b=_0x2af92c[_0x5b4e19(0x19c)]?.[_0x5b4e19(0x1a9)]?.[_0x5b4e19(0x1c6)];return _0x55091b&&_0x512474==='nuxt'?_0x2af92c[_0x5b4e19(0x196)]=!0x1:_0x2af92c[_0x5b4e19(0x196)]=_0x55091b||!_0x261975||_0x2af92c[_0x5b4e19(0x1ba)]?.['hostname']&&_0x261975[_0x5b4e19(0x151)](_0x2af92c[_0x5b4e19(0x1ba)][_0x5b4e19(0x164)]),_0x2af92c[_0x5b4e19(0x196)];}((_0x7274a6,_0x381278,_0x1c70d7,_0x4a96cd,_0x50e03f,_0x40bcd5,_0x33d125,_0x5d11ef,_0x2173ce)=>{var _0x26abd2=_0x589f03;if(_0x7274a6[_0x26abd2(0x10c)])return _0x7274a6[_0x26abd2(0x10c)];if(!X(_0x7274a6,_0x5d11ef,_0x50e03f))return _0x7274a6[_0x26abd2(0x10c)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x7274a6[_0x26abd2(0x10c)];let _0x596ff0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x98d43e={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x90b85d=H(_0x7274a6),_0xd07e37=_0x90b85d[_0x26abd2(0x145)],_0x5a6045=_0x90b85d[_0x26abd2(0x139)],_0x3a62d8=_0x90b85d[_0x26abd2(0x12e)],_0x53782f={'hits':{},'ts':{}},_0x13de25=_0x2850cc=>{_0x53782f['ts'][_0x2850cc]=_0x5a6045();},_0x3c0d0d=(_0x244b45,_0x173cd0)=>{var _0x16c50b=_0x26abd2;let _0x22109f=_0x53782f['ts'][_0x173cd0];if(delete _0x53782f['ts'][_0x173cd0],_0x22109f){let _0x41a244=_0xd07e37(_0x22109f,_0x5a6045());_0x11fc85(_0x1276c3(_0x16c50b(0x1ce),_0x244b45,_0x3a62d8(),_0x234c83,[_0x41a244],_0x173cd0));}},_0x53f9ca=_0x4e52c0=>_0x3a7b42=>{var _0x2891a6=_0x26abd2;try{_0x13de25(_0x3a7b42),_0x4e52c0(_0x3a7b42);}finally{_0x7274a6['console'][_0x2891a6(0x1ce)]=_0x4e52c0;}},_0x429bfd=_0x55facf=>_0x49932b=>{var _0xd2ea80=_0x26abd2;try{let [_0xcc858d,_0x24fac5]=_0x49932b[_0xd2ea80(0x1d1)](_0xd2ea80(0x183));_0x3c0d0d(_0x24fac5,_0xcc858d),_0x55facf(_0xcc858d);}finally{_0x7274a6[_0xd2ea80(0x1a0)]['timeEnd']=_0x55facf;}};_0x7274a6[_0x26abd2(0x10c)]={'consoleLog':(_0x4d06dd,_0x1af7e7)=>{var _0x2df419=_0x26abd2;_0x7274a6['console'][_0x2df419(0x1ed)][_0x2df419(0x1bd)]!==_0x2df419(0x14a)&&_0x11fc85(_0x1276c3(_0x2df419(0x1ed),_0x4d06dd,_0x3a62d8(),_0x234c83,_0x1af7e7));},'consoleTrace':(_0x342382,_0x37e514)=>{var _0x32302a=_0x26abd2;_0x7274a6[_0x32302a(0x1a0)][_0x32302a(0x1ed)][_0x32302a(0x1bd)]!==_0x32302a(0x121)&&_0x11fc85(_0x1276c3(_0x32302a(0x137),_0x342382,_0x3a62d8(),_0x234c83,_0x37e514));},'consoleTime':()=>{var _0x2d134b=_0x26abd2;_0x7274a6[_0x2d134b(0x1a0)][_0x2d134b(0x1ce)]=_0x53f9ca(_0x7274a6[_0x2d134b(0x1a0)]['time']);},'consoleTimeEnd':()=>{var _0x580296=_0x26abd2;_0x7274a6[_0x580296(0x1a0)]['timeEnd']=_0x429bfd(_0x7274a6[_0x580296(0x1a0)][_0x580296(0x152)]);},'autoLog':(_0x462ab5,_0x5388c6)=>{var _0x5d727b=_0x26abd2;_0x11fc85(_0x1276c3(_0x5d727b(0x1ed),_0x5388c6,_0x3a62d8(),_0x234c83,[_0x462ab5]));},'autoLogMany':(_0x293f6d,_0x353dc5)=>{_0x11fc85(_0x1276c3('log',_0x293f6d,_0x3a62d8(),_0x234c83,_0x353dc5));},'autoTrace':(_0x549b1e,_0x37b2ad)=>{var _0x424622=_0x26abd2;_0x11fc85(_0x1276c3(_0x424622(0x137),_0x37b2ad,_0x3a62d8(),_0x234c83,[_0x549b1e]));},'autoTraceMany':(_0x1c5a3f,_0x1d0ed1)=>{var _0x78eb08=_0x26abd2;_0x11fc85(_0x1276c3(_0x78eb08(0x137),_0x1c5a3f,_0x3a62d8(),_0x234c83,_0x1d0ed1));},'autoTime':(_0x35b75f,_0x1516ff,_0x298a2c)=>{_0x13de25(_0x298a2c);},'autoTimeEnd':(_0x1ed29f,_0x1a5b65,_0x5a20e1)=>{_0x3c0d0d(_0x1a5b65,_0x5a20e1);}};let _0x11fc85=V(_0x7274a6,_0x381278,_0x1c70d7,_0x4a96cd,_0x50e03f),_0x234c83=_0x7274a6[_0x26abd2(0x11e)];class _0x3451f1{constructor(){var _0x102df1=_0x26abd2;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x102df1(0x18b)]=/^(0|[1-9][0-9]*)$/,this[_0x102df1(0x171)]=/'([^\\\\']|\\\\')*'/,this[_0x102df1(0x143)]=_0x7274a6['undefined'],this[_0x102df1(0x165)]=_0x7274a6['HTMLAllCollection'],this[_0x102df1(0x155)]=Object[_0x102df1(0x1d3)],this[_0x102df1(0x15a)]=Object[_0x102df1(0x185)],this[_0x102df1(0x1a5)]=_0x7274a6[_0x102df1(0x1bb)],this['_regExpToString']=RegExp[_0x102df1(0x17a)][_0x102df1(0x142)],this['_dateToString']=Date[_0x102df1(0x17a)][_0x102df1(0x142)];}[_0x26abd2(0x1b7)](_0x5ed195,_0x28715c,_0x3a3b40,_0x350c10){var _0x207b11=_0x26abd2,_0x9bdf65=this,_0x28e5b8=_0x3a3b40[_0x207b11(0x16d)];function _0x11441f(_0x317b0e,_0x56d110,_0xe6ab04){var _0x524177=_0x207b11;_0x56d110[_0x524177(0x1d6)]=_0x524177(0x1e6),_0x56d110[_0x524177(0x173)]=_0x317b0e[_0x524177(0x1f6)],_0x34c20e=_0xe6ab04[_0x524177(0x1c6)]['current'],_0xe6ab04[_0x524177(0x1c6)][_0x524177(0x1c5)]=_0x56d110,_0x9bdf65[_0x524177(0x13e)](_0x56d110,_0xe6ab04);}try{_0x3a3b40['level']++,_0x3a3b40[_0x207b11(0x16d)]&&_0x3a3b40['autoExpandPreviousObjects']['push'](_0x28715c);var _0x230d21,_0x3acf93,_0x8151c2,_0x54654d,_0xed93e=[],_0x5d39b4=[],_0x466303,_0xa32191=this[_0x207b11(0x15c)](_0x28715c),_0xd2ebd9=_0xa32191===_0x207b11(0x11c),_0x4e14e4=!0x1,_0x362601=_0xa32191===_0x207b11(0x190),_0x532add=this[_0x207b11(0x14b)](_0xa32191),_0x8de23a=this[_0x207b11(0x117)](_0xa32191),_0x39d4b7=_0x532add||_0x8de23a,_0x46a228={},_0x5b9796=0x0,_0x23e81e=!0x1,_0x34c20e,_0x3e4f96=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x3a3b40[_0x207b11(0x113)]){if(_0xd2ebd9){if(_0x3acf93=_0x28715c[_0x207b11(0x125)],_0x3acf93>_0x3a3b40[_0x207b11(0x1d2)]){for(_0x8151c2=0x0,_0x54654d=_0x3a3b40[_0x207b11(0x1d2)],_0x230d21=_0x8151c2;_0x230d21<_0x54654d;_0x230d21++)_0x5d39b4[_0x207b11(0x1cb)](_0x9bdf65[_0x207b11(0x1f0)](_0xed93e,_0x28715c,_0xa32191,_0x230d21,_0x3a3b40));_0x5ed195[_0x207b11(0x1e4)]=!0x0;}else{for(_0x8151c2=0x0,_0x54654d=_0x3acf93,_0x230d21=_0x8151c2;_0x230d21<_0x54654d;_0x230d21++)_0x5d39b4[_0x207b11(0x1cb)](_0x9bdf65[_0x207b11(0x1f0)](_0xed93e,_0x28715c,_0xa32191,_0x230d21,_0x3a3b40));}_0x3a3b40[_0x207b11(0x188)]+=_0x5d39b4[_0x207b11(0x125)];}if(!(_0xa32191==='null'||_0xa32191==='undefined')&&!_0x532add&&_0xa32191!=='String'&&_0xa32191!==_0x207b11(0x1c8)&&_0xa32191!==_0x207b11(0x167)){var _0xbc8fad=_0x350c10[_0x207b11(0x150)]||_0x3a3b40[_0x207b11(0x150)];if(this[_0x207b11(0x198)](_0x28715c)?(_0x230d21=0x0,_0x28715c[_0x207b11(0x1ab)](function(_0x4fec8c){var _0x17e92c=_0x207b11;if(_0x5b9796++,_0x3a3b40['autoExpandPropertyCount']++,_0x5b9796>_0xbc8fad){_0x23e81e=!0x0;return;}if(!_0x3a3b40[_0x17e92c(0x17b)]&&_0x3a3b40[_0x17e92c(0x16d)]&&_0x3a3b40[_0x17e92c(0x188)]>_0x3a3b40['autoExpandLimit']){_0x23e81e=!0x0;return;}_0x5d39b4[_0x17e92c(0x1cb)](_0x9bdf65[_0x17e92c(0x1f0)](_0xed93e,_0x28715c,_0x17e92c(0x161),_0x230d21++,_0x3a3b40,function(_0x5b9fcd){return function(){return _0x5b9fcd;};}(_0x4fec8c)));})):this[_0x207b11(0x12b)](_0x28715c)&&_0x28715c['forEach'](function(_0xf5556c,_0x402eaa){var _0x22fc49=_0x207b11;if(_0x5b9796++,_0x3a3b40['autoExpandPropertyCount']++,_0x5b9796>_0xbc8fad){_0x23e81e=!0x0;return;}if(!_0x3a3b40[_0x22fc49(0x17b)]&&_0x3a3b40[_0x22fc49(0x16d)]&&_0x3a3b40['autoExpandPropertyCount']>_0x3a3b40['autoExpandLimit']){_0x23e81e=!0x0;return;}var _0x31632=_0x402eaa[_0x22fc49(0x142)]();_0x31632[_0x22fc49(0x125)]>0x64&&(_0x31632=_0x31632[_0x22fc49(0x1c4)](0x0,0x64)+_0x22fc49(0x16f)),_0x5d39b4['push'](_0x9bdf65[_0x22fc49(0x1f0)](_0xed93e,_0x28715c,_0x22fc49(0x16a),_0x31632,_0x3a3b40,function(_0x11fc25){return function(){return _0x11fc25;};}(_0xf5556c)));}),!_0x4e14e4){try{for(_0x466303 in _0x28715c)if(!(_0xd2ebd9&&_0x3e4f96[_0x207b11(0x1b6)](_0x466303))&&!this[_0x207b11(0x11f)](_0x28715c,_0x466303,_0x3a3b40)){if(_0x5b9796++,_0x3a3b40['autoExpandPropertyCount']++,_0x5b9796>_0xbc8fad){_0x23e81e=!0x0;break;}if(!_0x3a3b40[_0x207b11(0x17b)]&&_0x3a3b40['autoExpand']&&_0x3a3b40[_0x207b11(0x188)]>_0x3a3b40['autoExpandLimit']){_0x23e81e=!0x0;break;}_0x5d39b4[_0x207b11(0x1cb)](_0x9bdf65[_0x207b11(0x1f7)](_0xed93e,_0x46a228,_0x28715c,_0xa32191,_0x466303,_0x3a3b40));}}catch{}if(_0x46a228[_0x207b11(0x122)]=!0x0,_0x362601&&(_0x46a228[_0x207b11(0x187)]=!0x0),!_0x23e81e){var _0x4eccea=[][_0x207b11(0x18e)](this[_0x207b11(0x15a)](_0x28715c))['concat'](this[_0x207b11(0x193)](_0x28715c));for(_0x230d21=0x0,_0x3acf93=_0x4eccea[_0x207b11(0x125)];_0x230d21<_0x3acf93;_0x230d21++)if(_0x466303=_0x4eccea[_0x230d21],!(_0xd2ebd9&&_0x3e4f96[_0x207b11(0x1b6)](_0x466303['toString']()))&&!this[_0x207b11(0x11f)](_0x28715c,_0x466303,_0x3a3b40)&&!_0x46a228['_p_'+_0x466303[_0x207b11(0x142)]()]){if(_0x5b9796++,_0x3a3b40['autoExpandPropertyCount']++,_0x5b9796>_0xbc8fad){_0x23e81e=!0x0;break;}if(!_0x3a3b40[_0x207b11(0x17b)]&&_0x3a3b40['autoExpand']&&_0x3a3b40[_0x207b11(0x188)]>_0x3a3b40[_0x207b11(0x166)]){_0x23e81e=!0x0;break;}_0x5d39b4['push'](_0x9bdf65[_0x207b11(0x1f7)](_0xed93e,_0x46a228,_0x28715c,_0xa32191,_0x466303,_0x3a3b40));}}}}}if(_0x5ed195['type']=_0xa32191,_0x39d4b7?(_0x5ed195[_0x207b11(0x1e1)]=_0x28715c['valueOf'](),this[_0x207b11(0x1e7)](_0xa32191,_0x5ed195,_0x3a3b40,_0x350c10)):_0xa32191==='date'?_0x5ed195[_0x207b11(0x1e1)]=this[_0x207b11(0x1bf)][_0x207b11(0x1e8)](_0x28715c):_0xa32191==='bigint'?_0x5ed195[_0x207b11(0x1e1)]=_0x28715c[_0x207b11(0x142)]():_0xa32191===_0x207b11(0x12d)?_0x5ed195[_0x207b11(0x1e1)]=this[_0x207b11(0x141)][_0x207b11(0x1e8)](_0x28715c):_0xa32191===_0x207b11(0x16e)&&this[_0x207b11(0x1a5)]?_0x5ed195[_0x207b11(0x1e1)]=this[_0x207b11(0x1a5)][_0x207b11(0x17a)]['toString'][_0x207b11(0x1e8)](_0x28715c):!_0x3a3b40['depth']&&!(_0xa32191===_0x207b11(0x12a)||_0xa32191===_0x207b11(0x1ee))&&(delete _0x5ed195[_0x207b11(0x1e1)],_0x5ed195['capped']=!0x0),_0x23e81e&&(_0x5ed195[_0x207b11(0x123)]=!0x0),_0x34c20e=_0x3a3b40[_0x207b11(0x1c6)][_0x207b11(0x1c5)],_0x3a3b40['node'][_0x207b11(0x1c5)]=_0x5ed195,this[_0x207b11(0x13e)](_0x5ed195,_0x3a3b40),_0x5d39b4['length']){for(_0x230d21=0x0,_0x3acf93=_0x5d39b4[_0x207b11(0x125)];_0x230d21<_0x3acf93;_0x230d21++)_0x5d39b4[_0x230d21](_0x230d21);}_0xed93e[_0x207b11(0x125)]&&(_0x5ed195[_0x207b11(0x150)]=_0xed93e);}catch(_0x34f99d){_0x11441f(_0x34f99d,_0x5ed195,_0x3a3b40);}return this[_0x207b11(0x192)](_0x28715c,_0x5ed195),this[_0x207b11(0x1b4)](_0x5ed195,_0x3a3b40),_0x3a3b40[_0x207b11(0x1c6)][_0x207b11(0x1c5)]=_0x34c20e,_0x3a3b40[_0x207b11(0x1d8)]--,_0x3a3b40[_0x207b11(0x16d)]=_0x28e5b8,_0x3a3b40[_0x207b11(0x16d)]&&_0x3a3b40[_0x207b11(0x19d)][_0x207b11(0x1c1)](),_0x5ed195;}[_0x26abd2(0x193)](_0x21b97b){var _0x5d516d=_0x26abd2;return Object['getOwnPropertySymbols']?Object[_0x5d516d(0x15e)](_0x21b97b):[];}[_0x26abd2(0x198)](_0x544389){var _0x23c32a=_0x26abd2;return!!(_0x544389&&_0x7274a6[_0x23c32a(0x161)]&&this['_objectToString'](_0x544389)===_0x23c32a(0x172)&&_0x544389[_0x23c32a(0x1ab)]);}[_0x26abd2(0x11f)](_0x467fe2,_0x41ccf4,_0x4ff79f){var _0x14ae8b=_0x26abd2;return _0x4ff79f[_0x14ae8b(0x126)]?typeof _0x467fe2[_0x41ccf4]==_0x14ae8b(0x190):!0x1;}[_0x26abd2(0x15c)](_0x53a1b0){var _0x17ebd5=_0x26abd2,_0x48c3d8='';return _0x48c3d8=typeof _0x53a1b0,_0x48c3d8==='object'?this[_0x17ebd5(0x1e3)](_0x53a1b0)===_0x17ebd5(0x156)?_0x48c3d8=_0x17ebd5(0x11c):this['_objectToString'](_0x53a1b0)===_0x17ebd5(0x17c)?_0x48c3d8=_0x17ebd5(0x160):this[_0x17ebd5(0x1e3)](_0x53a1b0)===_0x17ebd5(0x1a7)?_0x48c3d8=_0x17ebd5(0x167):_0x53a1b0===null?_0x48c3d8=_0x17ebd5(0x12a):_0x53a1b0[_0x17ebd5(0x13f)]&&(_0x48c3d8=_0x53a1b0[_0x17ebd5(0x13f)][_0x17ebd5(0x1bd)]||_0x48c3d8):_0x48c3d8==='undefined'&&this[_0x17ebd5(0x165)]&&_0x53a1b0 instanceof this[_0x17ebd5(0x165)]&&(_0x48c3d8=_0x17ebd5(0x11b)),_0x48c3d8;}['_objectToString'](_0x7c180e){var _0x57f124=_0x26abd2;return Object['prototype'][_0x57f124(0x142)][_0x57f124(0x1e8)](_0x7c180e);}[_0x26abd2(0x14b)](_0x560e3b){var _0x56eb78=_0x26abd2;return _0x560e3b===_0x56eb78(0x19a)||_0x560e3b==='string'||_0x560e3b===_0x56eb78(0x1cd);}[_0x26abd2(0x117)](_0x3920b0){var _0x1e24d3=_0x26abd2;return _0x3920b0===_0x1e24d3(0x158)||_0x3920b0===_0x1e24d3(0x168)||_0x3920b0===_0x1e24d3(0x1b0);}[_0x26abd2(0x1f0)](_0x4a0c9e,_0x2ddaa5,_0x15dde0,_0x25a6a1,_0x29cbd6,_0x140d2c){var _0x252c29=this;return function(_0x230201){var _0x2308a2=_0x22f0,_0x1031a8=_0x29cbd6[_0x2308a2(0x1c6)][_0x2308a2(0x1c5)],_0x5efa0b=_0x29cbd6[_0x2308a2(0x1c6)]['index'],_0xf1bf0=_0x29cbd6[_0x2308a2(0x1c6)][_0x2308a2(0x1e2)];_0x29cbd6[_0x2308a2(0x1c6)][_0x2308a2(0x1e2)]=_0x1031a8,_0x29cbd6[_0x2308a2(0x1c6)][_0x2308a2(0x1f1)]=typeof _0x25a6a1=='number'?_0x25a6a1:_0x230201,_0x4a0c9e[_0x2308a2(0x1cb)](_0x252c29[_0x2308a2(0x1e9)](_0x2ddaa5,_0x15dde0,_0x25a6a1,_0x29cbd6,_0x140d2c)),_0x29cbd6[_0x2308a2(0x1c6)][_0x2308a2(0x1e2)]=_0xf1bf0,_0x29cbd6[_0x2308a2(0x1c6)][_0x2308a2(0x1f1)]=_0x5efa0b;};}[_0x26abd2(0x1f7)](_0x40edb3,_0x209d15,_0xcbc39d,_0x4c8dd4,_0x3bd3f0,_0x2d4435,_0x3d8f0b){var _0x4284e4=_0x26abd2,_0x1e856b=this;return _0x209d15[_0x4284e4(0x159)+_0x3bd3f0[_0x4284e4(0x142)]()]=!0x0,function(_0x3e97d7){var _0xcd3e95=_0x4284e4,_0x1cc7c6=_0x2d4435[_0xcd3e95(0x1c6)][_0xcd3e95(0x1c5)],_0x524489=_0x2d4435['node'][_0xcd3e95(0x1f1)],_0x14e8db=_0x2d4435[_0xcd3e95(0x1c6)][_0xcd3e95(0x1e2)];_0x2d4435[_0xcd3e95(0x1c6)][_0xcd3e95(0x1e2)]=_0x1cc7c6,_0x2d4435[_0xcd3e95(0x1c6)]['index']=_0x3e97d7,_0x40edb3['push'](_0x1e856b[_0xcd3e95(0x1e9)](_0xcbc39d,_0x4c8dd4,_0x3bd3f0,_0x2d4435,_0x3d8f0b)),_0x2d4435['node'][_0xcd3e95(0x1e2)]=_0x14e8db,_0x2d4435['node']['index']=_0x524489;};}[_0x26abd2(0x1e9)](_0x405735,_0x3fc505,_0x39ca75,_0x4c14c4,_0x2912db){var _0x4a5d77=_0x26abd2,_0x7a5e57=this;_0x2912db||(_0x2912db=function(_0x4ea802,_0x69b3c2){return _0x4ea802[_0x69b3c2];});var _0x561660=_0x39ca75[_0x4a5d77(0x142)](),_0x49cb5b=_0x4c14c4[_0x4a5d77(0x120)]||{},_0x724b42=_0x4c14c4['depth'],_0x4f49c2=_0x4c14c4['isExpressionToEvaluate'];try{var _0x4a1564=this[_0x4a5d77(0x12b)](_0x405735),_0x311a0a=_0x561660;_0x4a1564&&_0x311a0a[0x0]==='\\x27'&&(_0x311a0a=_0x311a0a[_0x4a5d77(0x1f5)](0x1,_0x311a0a[_0x4a5d77(0x125)]-0x2));var _0x4b9496=_0x4c14c4['expressionsToEvaluate']=_0x49cb5b['_p_'+_0x311a0a];_0x4b9496&&(_0x4c14c4['depth']=_0x4c14c4[_0x4a5d77(0x113)]+0x1),_0x4c14c4['isExpressionToEvaluate']=!!_0x4b9496;var _0x3cb84f=typeof _0x39ca75==_0x4a5d77(0x16e),_0x22afa5={'name':_0x3cb84f||_0x4a1564?_0x561660:this[_0x4a5d77(0x127)](_0x561660)};if(_0x3cb84f&&(_0x22afa5[_0x4a5d77(0x16e)]=!0x0),!(_0x3fc505==='array'||_0x3fc505===_0x4a5d77(0x148))){var _0xe5bd7a=this[_0x4a5d77(0x155)](_0x405735,_0x39ca75);if(_0xe5bd7a&&(_0xe5bd7a[_0x4a5d77(0x169)]&&(_0x22afa5[_0x4a5d77(0x18c)]=!0x0),_0xe5bd7a[_0x4a5d77(0x132)]&&!_0x4b9496&&!_0x4c14c4[_0x4a5d77(0x1ef)]))return _0x22afa5[_0x4a5d77(0x110)]=!0x0,this[_0x4a5d77(0x1b1)](_0x22afa5,_0x4c14c4),_0x22afa5;}var _0x22e60c;try{_0x22e60c=_0x2912db(_0x405735,_0x39ca75);}catch(_0x309cb4){return _0x22afa5={'name':_0x561660,'type':_0x4a5d77(0x1e6),'error':_0x309cb4[_0x4a5d77(0x1f6)]},this[_0x4a5d77(0x1b1)](_0x22afa5,_0x4c14c4),_0x22afa5;}var _0x394bce=this['_type'](_0x22e60c),_0x384b7e=this['_isPrimitiveType'](_0x394bce);if(_0x22afa5[_0x4a5d77(0x1d6)]=_0x394bce,_0x384b7e)this['_processTreeNodeResult'](_0x22afa5,_0x4c14c4,_0x22e60c,function(){var _0xb84eef=_0x4a5d77;_0x22afa5[_0xb84eef(0x1e1)]=_0x22e60c[_0xb84eef(0x131)](),!_0x4b9496&&_0x7a5e57[_0xb84eef(0x1e7)](_0x394bce,_0x22afa5,_0x4c14c4,{});});else{var _0x28ba59=_0x4c14c4['autoExpand']&&_0x4c14c4['level']<_0x4c14c4[_0x4a5d77(0x18f)]&&_0x4c14c4['autoExpandPreviousObjects']['indexOf'](_0x22e60c)<0x0&&_0x394bce!=='function'&&_0x4c14c4[_0x4a5d77(0x188)]<_0x4c14c4[_0x4a5d77(0x166)];_0x28ba59||_0x4c14c4[_0x4a5d77(0x1d8)]<_0x724b42||_0x4b9496?(this[_0x4a5d77(0x1b7)](_0x22afa5,_0x22e60c,_0x4c14c4,_0x4b9496||{}),this[_0x4a5d77(0x192)](_0x22e60c,_0x22afa5)):this['_processTreeNodeResult'](_0x22afa5,_0x4c14c4,_0x22e60c,function(){var _0x77d27=_0x4a5d77;_0x394bce===_0x77d27(0x12a)||_0x394bce==='undefined'||(delete _0x22afa5[_0x77d27(0x1e1)],_0x22afa5[_0x77d27(0x1e5)]=!0x0);});}return _0x22afa5;}finally{_0x4c14c4[_0x4a5d77(0x120)]=_0x49cb5b,_0x4c14c4[_0x4a5d77(0x113)]=_0x724b42,_0x4c14c4[_0x4a5d77(0x17b)]=_0x4f49c2;}}['_capIfString'](_0xe894fd,_0x307b9b,_0x45f95c,_0xfc9e2b){var _0x47f6b8=_0x26abd2,_0x3c6b5d=_0xfc9e2b[_0x47f6b8(0x1bc)]||_0x45f95c[_0x47f6b8(0x1bc)];if((_0xe894fd===_0x47f6b8(0x10e)||_0xe894fd===_0x47f6b8(0x168))&&_0x307b9b['value']){let _0x1184c2=_0x307b9b[_0x47f6b8(0x1e1)][_0x47f6b8(0x125)];_0x45f95c[_0x47f6b8(0x1b5)]+=_0x1184c2,_0x45f95c[_0x47f6b8(0x1b5)]>_0x45f95c[_0x47f6b8(0x177)]?(_0x307b9b[_0x47f6b8(0x1e5)]='',delete _0x307b9b['value']):_0x1184c2>_0x3c6b5d&&(_0x307b9b[_0x47f6b8(0x1e5)]=_0x307b9b[_0x47f6b8(0x1e1)]['substr'](0x0,_0x3c6b5d),delete _0x307b9b[_0x47f6b8(0x1e1)]);}}[_0x26abd2(0x12b)](_0x368db4){var _0x3dfb06=_0x26abd2;return!!(_0x368db4&&_0x7274a6[_0x3dfb06(0x16a)]&&this['_objectToString'](_0x368db4)===_0x3dfb06(0x1d4)&&_0x368db4[_0x3dfb06(0x1ab)]);}[_0x26abd2(0x127)](_0x121d25){var _0x44cb92=_0x26abd2;if(_0x121d25[_0x44cb92(0x13c)](/^\\d+$/))return _0x121d25;var _0x5f0dfe;try{_0x5f0dfe=JSON['stringify'](''+_0x121d25);}catch{_0x5f0dfe='\\x22'+this[_0x44cb92(0x1e3)](_0x121d25)+'\\x22';}return _0x5f0dfe[_0x44cb92(0x13c)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5f0dfe=_0x5f0dfe[_0x44cb92(0x1f5)](0x1,_0x5f0dfe[_0x44cb92(0x125)]-0x2):_0x5f0dfe=_0x5f0dfe[_0x44cb92(0x1ca)](/'/g,'\\x5c\\x27')[_0x44cb92(0x1ca)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x5f0dfe;}[_0x26abd2(0x1b1)](_0x3da2b7,_0x498ecc,_0x5736b6,_0x525a75){var _0x4aeaa6=_0x26abd2;this[_0x4aeaa6(0x13e)](_0x3da2b7,_0x498ecc),_0x525a75&&_0x525a75(),this[_0x4aeaa6(0x192)](_0x5736b6,_0x3da2b7),this['_treeNodePropertiesAfterFullValue'](_0x3da2b7,_0x498ecc);}[_0x26abd2(0x13e)](_0xa6114c,_0x2e1042){var _0x44f20a=_0x26abd2;this[_0x44f20a(0x1d0)](_0xa6114c,_0x2e1042),this[_0x44f20a(0x1a8)](_0xa6114c,_0x2e1042),this[_0x44f20a(0x1af)](_0xa6114c,_0x2e1042),this[_0x44f20a(0x1aa)](_0xa6114c,_0x2e1042);}[_0x26abd2(0x1d0)](_0x5aae59,_0x5281bc){}[_0x26abd2(0x1a8)](_0x2c50a1,_0x1a861e){}[_0x26abd2(0x133)](_0x17b427,_0x3cba58){}['_isUndefined'](_0x5bdf33){return _0x5bdf33===this['_undefined'];}[_0x26abd2(0x1b4)](_0x315747,_0x50a620){var _0x96ecfb=_0x26abd2;this[_0x96ecfb(0x133)](_0x315747,_0x50a620),this[_0x96ecfb(0x1da)](_0x315747),_0x50a620[_0x96ecfb(0x10d)]&&this[_0x96ecfb(0x1a4)](_0x315747),this[_0x96ecfb(0x1d9)](_0x315747,_0x50a620),this[_0x96ecfb(0x118)](_0x315747,_0x50a620),this['_cleanNode'](_0x315747);}[_0x26abd2(0x192)](_0xaa4bf5,_0x2ef6da){var _0x35454d=_0x26abd2;let _0x32e1a6;try{_0x7274a6['console']&&(_0x32e1a6=_0x7274a6[_0x35454d(0x1a0)]['error'],_0x7274a6[_0x35454d(0x1a0)][_0x35454d(0x173)]=function(){}),_0xaa4bf5&&typeof _0xaa4bf5[_0x35454d(0x125)]==_0x35454d(0x1cd)&&(_0x2ef6da['length']=_0xaa4bf5[_0x35454d(0x125)]);}catch{}finally{_0x32e1a6&&(_0x7274a6['console'][_0x35454d(0x173)]=_0x32e1a6);}if(_0x2ef6da['type']==='number'||_0x2ef6da[_0x35454d(0x1d6)]===_0x35454d(0x1b0)){if(isNaN(_0x2ef6da[_0x35454d(0x1e1)]))_0x2ef6da[_0x35454d(0x119)]=!0x0,delete _0x2ef6da[_0x35454d(0x1e1)];else switch(_0x2ef6da[_0x35454d(0x1e1)]){case Number[_0x35454d(0x1be)]:_0x2ef6da[_0x35454d(0x1c0)]=!0x0,delete _0x2ef6da['value'];break;case Number[_0x35454d(0x138)]:_0x2ef6da['negativeInfinity']=!0x0,delete _0x2ef6da[_0x35454d(0x1e1)];break;case 0x0:this['_isNegativeZero'](_0x2ef6da[_0x35454d(0x1e1)])&&(_0x2ef6da[_0x35454d(0x136)]=!0x0);break;}}else _0x2ef6da[_0x35454d(0x1d6)]===_0x35454d(0x190)&&typeof _0xaa4bf5['name']==_0x35454d(0x10e)&&_0xaa4bf5[_0x35454d(0x1bd)]&&_0x2ef6da[_0x35454d(0x1bd)]&&_0xaa4bf5[_0x35454d(0x1bd)]!==_0x2ef6da[_0x35454d(0x1bd)]&&(_0x2ef6da[_0x35454d(0x15d)]=_0xaa4bf5['name']);}['_isNegativeZero'](_0x48b01b){return 0x1/_0x48b01b===Number['NEGATIVE_INFINITY'];}[_0x26abd2(0x1a4)](_0x3d62e1){var _0x13bd00=_0x26abd2;!_0x3d62e1[_0x13bd00(0x150)]||!_0x3d62e1[_0x13bd00(0x150)]['length']||_0x3d62e1[_0x13bd00(0x1d6)]===_0x13bd00(0x11c)||_0x3d62e1[_0x13bd00(0x1d6)]===_0x13bd00(0x16a)||_0x3d62e1[_0x13bd00(0x1d6)]===_0x13bd00(0x161)||_0x3d62e1[_0x13bd00(0x150)]['sort'](function(_0x5c242f,_0x53a8e8){var _0x2a8d2f=_0x13bd00,_0x3d9203=_0x5c242f['name'][_0x2a8d2f(0x18a)](),_0x4a465e=_0x53a8e8[_0x2a8d2f(0x1bd)][_0x2a8d2f(0x18a)]();return _0x3d9203<_0x4a465e?-0x1:_0x3d9203>_0x4a465e?0x1:0x0;});}[_0x26abd2(0x1d9)](_0x22e631,_0x357293){var _0x6742bf=_0x26abd2;if(!(_0x357293[_0x6742bf(0x126)]||!_0x22e631['props']||!_0x22e631[_0x6742bf(0x150)][_0x6742bf(0x125)])){for(var _0x1f7426=[],_0x54a993=[],_0x2b0288=0x0,_0x3f4850=_0x22e631[_0x6742bf(0x150)][_0x6742bf(0x125)];_0x2b0288<_0x3f4850;_0x2b0288++){var _0x430bc4=_0x22e631[_0x6742bf(0x150)][_0x2b0288];_0x430bc4[_0x6742bf(0x1d6)]===_0x6742bf(0x190)?_0x1f7426[_0x6742bf(0x1cb)](_0x430bc4):_0x54a993[_0x6742bf(0x1cb)](_0x430bc4);}if(!(!_0x54a993[_0x6742bf(0x125)]||_0x1f7426[_0x6742bf(0x125)]<=0x1)){_0x22e631[_0x6742bf(0x150)]=_0x54a993;var _0x49707a={'functionsNode':!0x0,'props':_0x1f7426};this[_0x6742bf(0x1d0)](_0x49707a,_0x357293),this[_0x6742bf(0x133)](_0x49707a,_0x357293),this['_setNodeExpandableState'](_0x49707a),this[_0x6742bf(0x1aa)](_0x49707a,_0x357293),_0x49707a['id']+='\\x20f',_0x22e631['props']['unshift'](_0x49707a);}}}[_0x26abd2(0x118)](_0x5d17d1,_0x8f1376){}[_0x26abd2(0x1da)](_0x1f1239){}[_0x26abd2(0x13b)](_0x558d92){var _0x49a35e=_0x26abd2;return Array['isArray'](_0x558d92)||typeof _0x558d92==_0x49a35e(0x146)&&this[_0x49a35e(0x1e3)](_0x558d92)==='[object\\x20Array]';}[_0x26abd2(0x1aa)](_0x10ee72,_0x4ebbf2){}[_0x26abd2(0x1cf)](_0x505985){var _0x16403e=_0x26abd2;delete _0x505985['_hasSymbolPropertyOnItsPath'],delete _0x505985['_hasSetOnItsPath'],delete _0x505985[_0x16403e(0x180)];}[_0x26abd2(0x1af)](_0x3162e9,_0x2aaf02){}[_0x26abd2(0x12c)](_0xb385bf){var _0x4791df=_0x26abd2;return _0xb385bf?_0xb385bf['match'](this[_0x4791df(0x18b)])?'['+_0xb385bf+']':_0xb385bf[_0x4791df(0x13c)](this[_0x4791df(0x17f)])?'.'+_0xb385bf:_0xb385bf[_0x4791df(0x13c)](this['_quotedRegExp'])?'['+_0xb385bf+']':'[\\x27'+_0xb385bf+'\\x27]':'';}}let _0x2131da=new _0x3451f1();function _0x1276c3(_0x3f6604,_0x4b9e33,_0xa56d90,_0x48f032,_0x5dec18,_0x49b00b){var _0x321f68=_0x26abd2;let _0x4d56e5,_0x3ad1ab;try{_0x3ad1ab=_0x5a6045(),_0x4d56e5=_0x53782f[_0x4b9e33],!_0x4d56e5||_0x3ad1ab-_0x4d56e5['ts']>0x1f4&&_0x4d56e5[_0x321f68(0x1f4)]&&_0x4d56e5[_0x321f68(0x1ce)]/_0x4d56e5['count']<0x64?(_0x53782f[_0x4b9e33]=_0x4d56e5={'count':0x0,'time':0x0,'ts':_0x3ad1ab},_0x53782f[_0x321f68(0x1ad)]={}):_0x3ad1ab-_0x53782f[_0x321f68(0x1ad)]['ts']>0x32&&_0x53782f[_0x321f68(0x1ad)][_0x321f68(0x1f4)]&&_0x53782f[_0x321f68(0x1ad)][_0x321f68(0x1ce)]/_0x53782f['hits']['count']<0x64&&(_0x53782f[_0x321f68(0x1ad)]={});let _0x406f25=[],_0x13495b=_0x4d56e5[_0x321f68(0x184)]||_0x53782f[_0x321f68(0x1ad)][_0x321f68(0x184)]?_0x98d43e:_0x596ff0,_0x5e163c=_0x2af1d2=>{var _0x10fce7=_0x321f68;let _0x4236bc={};return _0x4236bc[_0x10fce7(0x150)]=_0x2af1d2[_0x10fce7(0x150)],_0x4236bc[_0x10fce7(0x1d2)]=_0x2af1d2['elements'],_0x4236bc[_0x10fce7(0x1bc)]=_0x2af1d2[_0x10fce7(0x1bc)],_0x4236bc['totalStrLength']=_0x2af1d2[_0x10fce7(0x177)],_0x4236bc[_0x10fce7(0x166)]=_0x2af1d2[_0x10fce7(0x166)],_0x4236bc[_0x10fce7(0x18f)]=_0x2af1d2['autoExpandMaxDepth'],_0x4236bc[_0x10fce7(0x10d)]=!0x1,_0x4236bc[_0x10fce7(0x126)]=!_0x2173ce,_0x4236bc[_0x10fce7(0x113)]=0x1,_0x4236bc['level']=0x0,_0x4236bc[_0x10fce7(0x16b)]=_0x10fce7(0x1ae),_0x4236bc[_0x10fce7(0x154)]='root_exp',_0x4236bc[_0x10fce7(0x16d)]=!0x0,_0x4236bc[_0x10fce7(0x19d)]=[],_0x4236bc[_0x10fce7(0x188)]=0x0,_0x4236bc[_0x10fce7(0x1ef)]=!0x0,_0x4236bc[_0x10fce7(0x1b5)]=0x0,_0x4236bc['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x4236bc;};for(var _0x1907cf=0x0;_0x1907cf<_0x5dec18[_0x321f68(0x125)];_0x1907cf++)_0x406f25[_0x321f68(0x1cb)](_0x2131da[_0x321f68(0x1b7)]({'timeNode':_0x3f6604===_0x321f68(0x1ce)||void 0x0},_0x5dec18[_0x1907cf],_0x5e163c(_0x13495b),{}));if(_0x3f6604===_0x321f68(0x137)){let _0x1ce702=Error[_0x321f68(0x1ec)];try{Error[_0x321f68(0x1ec)]=0x1/0x0,_0x406f25[_0x321f68(0x1cb)](_0x2131da['serialize']({'stackNode':!0x0},new Error()[_0x321f68(0x182)],_0x5e163c(_0x13495b),{'strLength':0x1/0x0}));}finally{Error[_0x321f68(0x1ec)]=_0x1ce702;}}return{'method':'log','version':_0x40bcd5,'args':[{'ts':_0xa56d90,'session':_0x48f032,'args':_0x406f25,'id':_0x4b9e33,'context':_0x49b00b}]};}catch(_0x1e2e03){return{'method':_0x321f68(0x1ed),'version':_0x40bcd5,'args':[{'ts':_0xa56d90,'session':_0x48f032,'args':[{'type':_0x321f68(0x1e6),'error':_0x1e2e03&&_0x1e2e03[_0x321f68(0x1f6)]}],'id':_0x4b9e33,'context':_0x49b00b}]};}finally{try{if(_0x4d56e5&&_0x3ad1ab){let _0x222903=_0x5a6045();_0x4d56e5[_0x321f68(0x1f4)]++,_0x4d56e5[_0x321f68(0x1ce)]+=_0xd07e37(_0x3ad1ab,_0x222903),_0x4d56e5['ts']=_0x222903,_0x53782f[_0x321f68(0x1ad)][_0x321f68(0x1f4)]++,_0x53782f[_0x321f68(0x1ad)][_0x321f68(0x1ce)]+=_0xd07e37(_0x3ad1ab,_0x222903),_0x53782f[_0x321f68(0x1ad)]['ts']=_0x222903,(_0x4d56e5[_0x321f68(0x1f4)]>0x32||_0x4d56e5[_0x321f68(0x1ce)]>0x64)&&(_0x4d56e5[_0x321f68(0x184)]=!0x0),(_0x53782f[_0x321f68(0x1ad)][_0x321f68(0x1f4)]>0x3e8||_0x53782f[_0x321f68(0x1ad)][_0x321f68(0x1ce)]>0x12c)&&(_0x53782f[_0x321f68(0x1ad)][_0x321f68(0x184)]=!0x0);}}catch{}}}return _0x7274a6[_0x26abd2(0x10c)];})(globalThis,_0x589f03(0x124),_0x589f03(0x1b8),_0x589f03(0x19e),_0x589f03(0x19f),_0x589f03(0x176),_0x589f03(0x1b9),_0x589f03(0x178),_0x589f03(0x1f8));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
/* harmony import */ var _modules_Task_Task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/Task/Task */ "./src/modules/Task/Task.js");
/* harmony import */ var _modules_TodoList_DOMTodoList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/TodoList/DOMTodoList */ "./src/modules/TodoList/DOMTodoList.js");
/* harmony import */ var _modules_Project_DOMProjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/Project/DOMProjects */ "./src/modules/Project/DOMProjects.js");
/* harmony import */ var _assets_Hamburger_hamburgerNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/Hamburger/hamburgerNav */ "./src/assets/Hamburger/hamburgerNav.js");
/* harmony import */ var _assets_LocalStorage_localStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/LocalStorage/localStorage */ "./src/assets/LocalStorage/localStorage.js");














const DOMTodoList = new _modules_TodoList_DOMTodoList__WEBPACK_IMPORTED_MODULE_9__["default"]();
function init()  {
    (0,_assets_LocalStorage_localStorage__WEBPACK_IMPORTED_MODULE_12__.loadLocalStorage)(DOMTodoList);
    (0,_assets_LocalStorage_localStorage__WEBPACK_IMPORTED_MODULE_12__.loadLocalStorageProjects)(_modules_Project_DOMProjects__WEBPACK_IMPORTED_MODULE_10__.loadProjects)
    //DOMTodoList.addTask(new Task('Task 3', 'This is the third task', new Date(2021, 0, 3, 0, 0, 0, 0), true, 'inbox', ["Home"]));
    //DOMTodoList.addTask(new Task('Task 4', 'This is the fourth task', new Date(2021, 0, 3, 0, 0, 0, 0), false, 'inbox', ["Outdoors"]));
    DOMTodoList.printAllTasks();
    (0,_modules_Project_DOMProjects__WEBPACK_IMPORTED_MODULE_10__.createProjectsEvents)();
    (0,_modules_Project_DOMProjects__WEBPACK_IMPORTED_MODULE_10__.printAddProjectsElement)();
    (0,_assets_Hamburger_hamburgerNav__WEBPACK_IMPORTED_MODULE_11__.createHamburgerNavEvent)();
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

function printNewProject (projectTitle) {
    const projectButtonContainer = document.querySelector('.projects-actions-list .actions-list');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    const projectButton = document.createElement('button');
    projectButton.setAttribute('data-project-type', projectTitle.toLowerCase());
    projectButton.classList.add('project-button');

    const projectInformation = document.createElement('div');
    projectInformation.classList.add('project-information');

    const icon = `<span class="material-symbols-outlined">
                    workspaces
                </span>`
    projectInformation.innerHTML = icon + projectTitle;


    const deleteIconContainer = document.createElement('div');
    deleteIconContainer.classList.add('delete-icon-container');

    const deleteIcon = document.createElement('span'); 
    deleteIcon.classList.add('project-delete-icon', "material-symbols-outlined");
    deleteIcon.textContent = 'delete';

    deleteIconContainer.appendChild(deleteIcon);

    projectButton.appendChild(projectInformation);

    projectContainer.appendChild(projectButton);
    projectContainer.appendChild(deleteIconContainer);

    projectButtonContainer.appendChild(projectContainer);

    createDeleteProjectEvent(projectTitle, deleteIcon);
    createProjectsEvents();
}

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

function createProjectsEvents () {
    const projectsButtonsElements = document.querySelectorAll(".actions-list button");
    const projectsButtonsArray = Array.from(projectsButtonsElements)
    projectsButtonsArray.forEach(button => {
        button.addEventListener("click", () => selectProjectButtonActive(button.dataset.projectType))
    });
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
    static printTaskElement (task) {
        const taskList = document.querySelector('.task-list');
        const taskElement = DOMTask.createTaskElement(task);
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
    static createTaskElement (task) {
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
        // Create the task title element and append it to the task info element
        taskInfoElement.innerHTML += `
            <div class="extra-data">
                ${dueDateElement}
                ${categoryElement}
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
    }

    setActiveProject(activeProject) {
        this.activeProject = activeProject;
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
        filterTask.forEach(task => _Task_DOMTask__WEBPACK_IMPORTED_MODULE_1__["default"].printTaskElement(task));
        this.printAddTaskElement(); // Create the add task element
    }

    printByCategories (categoriesList) {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = ''; // Clear the task list
        // Filter the task list by the active project
        const filterTask = this.tasksFilterByCategories(categoriesList, this.getActiveTasks());

        // Print the task list
        // printCategoryList(filterTask);
        filterTask.forEach(task => _Task_DOMTask__WEBPACK_IMPORTED_MODULE_1__["default"].printTaskElement(task));
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
        return this.todolist.getTaskListByProject(this.activeProject);
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
        _Task_DOMTask__WEBPACK_IMPORTED_MODULE_1__["default"].printTaskElement(task);
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

            // If the task is due today and the active project is inbox, set the task project to today
            if (this.activeProject == 'inbox' || this.activeProject == 'week' || this.activeProject == 'today') {
                if (dueDate == null) {
                    taskProject = 'inbox';
                } else if ((0,_assets_GlobalFunctions_globalFunctions_js__WEBPACK_IMPORTED_MODULE_4__.isToday)(dueDate) && (this.activeProject == 'inbox' || this.activeProject == 'week')) {
                    taskProject = 'today';
                } else if ((0,_assets_GlobalFunctions_globalFunctions_js__WEBPACK_IMPORTED_MODULE_4__.inSameWeek)(dueDate) && (this.activeProject == 'inbox' || this.activeProject == "today") && !(0,_assets_GlobalFunctions_globalFunctions_js__WEBPACK_IMPORTED_MODULE_4__.isToday)(dueDate)) { // If the task is due this week and the active project is inbox, set the task project to week
                    taskProject = 'week';
                }
            }

            // Create the task
            const newTask = new _Task_Task_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, false, taskProject, tags);

            if (taskProject == this.activeProject) { // If the task project is the active project, add the task to the active project
                this.addTask(newTask);
                this.updateCategoryList()
            } else { // If the task project is not the active project add the task to the array but don't add it to the DOM
                this.todolist.insertTask(newTask);
                (0,_assets_LocalStorage_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveInLocalStorage)(this.getAllTasks())
                ;(0,_assets_Popups_hiddenPopup_js__WEBPACK_IMPORTED_MODULE_5__["default"])(`Task created - Moved to <span class="popup-task-project">${taskProject.toUpperCase()}</span>`);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTyw2RkFBNkYsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxlQUFlLE1BQU0sZUFBZSxRQUFRLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsZUFBZSxNQUFNLGVBQWUsS0FBSyxnQkFBZ0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sS0FBSyxLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE9BQU8sS0FBSyxLQUFLLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLFVBQVUsZUFBZSxLQUFLLFVBQVUsa0JBQWtCLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxnQkFBZ0IsS0FBSyxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxnQkFBZ0IsS0FBSyxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksbUJBQW1CLE9BQU8sS0FBSyxLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxnQkFBZ0IsTUFBTSxLQUFLLEtBQUssZUFBZSxLQUFLLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLGdCQUFnQixLQUFLLGlCQUFpQixNQUFNLFlBQVksZ0JBQWdCLEtBQUssa0JBQWtCLE9BQU8sS0FBSyxLQUFLLGVBQWUsS0FBSyxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxpQkFBaUIsTUFBTSxZQUFZLGdCQUFnQixLQUFLLGtCQUFrQixPQUFPLEtBQUssS0FBSyxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxVQUFVLGlCQUFpQixNQUFNLFVBQVUs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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9B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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsdUVBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxpRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFFQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFFQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxRUFBZTtBQUM3QixnQkFBZ0IscUVBQWU7QUFDL0I7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ253Qm9DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFFQUFlO0FBQzlELEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUMvRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sMERBQTBELE1BQU07QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDL0U3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNTO0FBQ3BEO0FBQ2U7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjJDO0FBQ21CO0FBQ1E7QUFDbEI7QUFDcEQ7QUFDZTtBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGFBQWEsdUVBQWlCLG1CQUFtQiwyRUFBcUI7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDJDO0FBQ1M7QUFDVTtBQUMvQztBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVFQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUVBQWlCO0FBQ3pDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjJDO0FBQ2E7QUFDUTtBQUNaO0FBQ3BEO0FBQ2U7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixhQUFhLG9FQUFjLDRCQUE0Qix3RUFBa0I7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMkM7QUFDUztBQUNJO0FBQ1Y7QUFDaUI7QUFDaEQ7QUFDZjtBQUNBLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0EsdUJBQXVCLDJFQUFpQjtBQUN4Qyw4QkFBOEIsK0RBQVM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9FQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBYztBQUN0QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBLHlJQUF5STtBQUN6SSxJQUFJO0FBQ0oscUlBQXFJO0FBQ3JJLElBQUk7QUFDSiwrSUFBK0k7QUFDL0ksSUFBSTtBQUNKLGlKQUFpSjtBQUNqSjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSjJDO0FBQ1M7QUFDckM7QUFDZixFQUFFLGtFQUFZO0FBQ2Q7QUFDQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOEQ7QUFDQTtBQUNWO0FBQ3JDO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1gyQztBQUNTO0FBQ047QUFDaUI7QUFDaEQ7QUFDZjtBQUNBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLHFCQUFxQiwrREFBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCd0Q7QUFDSjtBQUNJO0FBQ1Y7QUFDaUI7QUFDaEQ7QUFDZjtBQUNBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLDhCQUE4QiwrREFBUztBQUN2QyxhQUFhLG9FQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQWM7QUFDM0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG1EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxrQkFBa0IsNERBQU07QUFDeEIsZUFBZSxtRUFBUztBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMNkQ7QUFDNUI7QUFDVztBQUNNO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxpQkFBaUI7QUFDaEY7QUFDQTtBQUNlO0FBQ2Y7QUFDQSxFQUFFLHNFQUFZO0FBQ2QsdUJBQXVCLCtFQUFpQjtBQUN4QyxxQkFBcUIsbUVBQVM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzBDO0FBQ2dCO0FBQ2xCO0FBQ29CO0FBQ1E7QUFDMkI7QUFDNkI7QUFDekU7QUFDTTtBQUNXO0FBQ1QsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFlZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvRGU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2NhdGVnb3J5TGlzdC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2hhbWJ1cmdlci5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL3Byb2plY3RzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvdGFzay5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0SVNPL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvY2F0ZWdvcnlMaXN0LmNzcz83NzZlIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9nbG9iYWwuY3NzPzU4NGEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2hhbWJ1cmdlci5jc3M/MmJhNyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvaGVhZGVyLmNzcz84YWMxIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9wb3B1cC5jc3M/MDI3MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvcHJvamVjdHMuY3NzP2VlMDUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL3Rhc2suY3NzP2Q1MDQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3NldHMvR2xvYmFsRnVuY3Rpb25zL2dsb2JhbEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3NldHMvSGFtYnVyZ2VyL2hhbWJ1cmdlck5hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3NldHMvTG9jYWxTdG9yYWdlL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3NldHMvUG9wdXBzL2hpZGRlblBvcHVwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Fzc2V0cy9UYXNrL0NhdGVnb3JpZXNMaXN0L2NhdGVnb3J5TGlzdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3NldHMvVGFzay9DaGVja0JveC9jaGVja0JveC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3NldHMvVGFzay9SZW1vdmVCdXR0b24vcmVtb3ZlQnV0dG9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvUHJvamVjdC9ET01Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL1Rhc2svRE9NVGFzay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL1Rhc2svVGFzay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL1RvZG9MaXN0L0RPTVRvZG9MaXN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvVG9kb0xpc3QvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNTBweCAtIDMwMHB4IC0gNzBweCk7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5jYXRlZ29yaWVzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uY2F0ZWdvcnkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxZjtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNhdGVnb3J5LnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jYXRlZ29yeS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMwcHgpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY2F0ZWdvcnlMaXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhdGVnb3J5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNTBweCAtIDMwMHB4IC0gNzBweCk7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxufVxcbi5jYXRlZ29yaWVzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWY7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXRlZ29yeS5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jYXRlZ29yeS1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMHB4KTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXRleHQ6ICMwMzA0MDE7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjZmOWYwO1xuICAgIC0tcHJpbWFyeTogI2FiY2E3MjtcbiAgICAtLXNlY29uZGFyeTogI2UwZWJjYjtcbiAgICAtLWFjY2VudDogIzg1YWE0MTtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS10ZXh0OiAjMDMwNDAxO1xcbiAgICAtLWJhY2tncm91bmQ6ICNmNmY5ZjA7XFxuICAgIC0tcHJpbWFyeTogI2FiY2E3MjtcXG4gICAgLS1zZWNvbmRhcnk6ICNlMGViY2I7XFxuICAgIC0tYWNjZW50OiAjODVhYTQxO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIVxuICogSGFtYnVyZ2Vyc1xuICogQGRlc2NyaXB0aW9uIFRhc3R5IENTUy1hbmltYXRlZCBoYW1idXJnZXJzXG4gKiBAYXV0aG9yIEpvbmF0aGFuIFN1aCBAam9uc3VoXG4gKiBAc2l0ZSBodHRwczovL2pvbnN1aC5jb20vaGFtYnVyZ2Vyc1xuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2pvbnN1aC9oYW1idXJnZXJzXG4gKi9cbiAuaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGZpbHRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLmhhbWJ1cmdlciB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlcjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjc7IH1cbiAgICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjc7IH1cbiAgICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyLFxuICAgIC5oYW1idXJnZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSxcbiAgICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XG4gIFxuICAuaGFtYnVyZ2VyLWJveCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgXG4gIC5oYW1idXJnZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0ycHg7IH1cbiAgICAuaGFtYnVyZ2VyLWlubmVyLCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTsgfVxuICAgIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogLTEwcHg7IH1cbiAgICAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICBib3R0b206IC0xMHB4OyB9XG4gIFxuICAvKlxuICAgICAqIDNEWFxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1ib3gge1xuICAgIHBlcnNwZWN0aXZlOiA4MHB4OyB9XG4gIFxuICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLTNkeC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cbiAgXG4gIC8qXG4gICAgICogM0RYIFJldmVyc2VcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tM2R4LXIgLmhhbWJ1cmdlci1ib3gge1xuICAgIHBlcnNwZWN0aXZlOiA4MHB4OyB9XG4gIFxuICAuaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tM2R4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLTNkeC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tM2R4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XG4gIFxuICAvKlxuICAgICAqIDNEWVxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS0zZHkgLmhhbWJ1cmdlci1ib3gge1xuICAgIHBlcnNwZWN0aXZlOiA4MHB4OyB9XG4gIFxuICAuaGFtYnVyZ2VyLS0zZHkgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLTNkeS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XG4gIFxuICAvKlxuICAgICAqIDNEWSBSZXZlcnNlXG4gICAgICovXG4gIC5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItYm94IHtcbiAgICBwZXJzcGVjdGl2ZTogODBweDsgfVxuICBcbiAgLmhhbWJ1cmdlci0tM2R5LXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tM2R5LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS0zZHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tM2R5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XG4gIFxuICAvKlxuICAgICAqIDNEWFlcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tM2R4eSAuaGFtYnVyZ2VyLWJveCB7XG4gICAgcGVyc3BlY3RpdmU6IDgwcHg7IH1cbiAgXG4gIC5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHh5IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tM2R4eS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDE4MGRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS0zZHh5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tM2R4eS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cbiAgXG4gIC8qXG4gICAgICogM0RYWSBSZXZlcnNlXG4gICAgICovXG4gIC5oYW1idXJnZXItLTNkeHktciAuaGFtYnVyZ2VyLWJveCB7XG4gICAgcGVyc3BlY3RpdmU6IDgwcHg7IH1cbiAgXG4gIC5oYW1idXJnZXItLTNkeHktciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tM2R4eS1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tM2R4eS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tM2R4eS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKC0xODBkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tM2R4eS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gICAgLmhhbWJ1cmdlci0tM2R4eS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxuICBcbiAgLypcbiAgICAgKiBBcnJvd1xuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1hcnJvdy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLWFycm93LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cbiAgXG4gIC8qXG4gICAgICogQXJyb3cgUmlnaHRcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tYXJyb3ctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1hcnJvdy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cbiAgXG4gIC8qXG4gICAgICogQXJyb3cgQWx0XG4gICAgICovXG4gIC5oYW1idXJnZXItLWFycm93YWx0IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAtMTBweCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpOyB9XG4gIFxuICAvKlxuICAgICAqIEFycm93IEFsdCBSaWdodFxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLWFycm93YWx0LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAtMTBweCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7IH1cbiAgXG4gIC5oYW1idXJnZXItLWFycm93YWx0LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTsgfVxuICBcbiAgLypcbiAgICAgKiBBcnJvdyBUdXJuXG4gICAgICovXG4gIC5oYW1idXJnZXItLWFycm93dHVybi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTsgfVxuICBcbiAgLypcbiAgICAgKiBBcnJvdyBUdXJuIFJpZ2h0XG4gICAgICovXG4gIC5oYW1idXJnZXItLWFycm93dHVybi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLWFycm93dHVybi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIEJvcmluZ1xuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1ib3JpbmcgLmhhbWJ1cmdlci1pbm5lciwgLmhhbWJ1cmdlci0tYm9yaW5nIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tYm9yaW5nIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1ib3JpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLWJvcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIG9wYWNpdHk6IDA7IH1cbiAgICAuaGFtYnVyZ2VyLS1ib3JpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IH1cbiAgXG4gIC8qXG4gICAgICogQ29sbGFwc2VcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tY29sbGFwc2UgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjEzcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEzcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0b3A6IC0yMHB4O1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIG9wYWNpdHkgMC4xcyBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMTJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCB0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjIycztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgb3BhY2l0eSAwLjFzIDAuMjJzIGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLWNvbGxhcHNlLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMTZzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgdHJhbnNmb3JtIDAuMTNzIDAuMjVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIENvbGxhcHNlIFJldmVyc2VcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tY29sbGFwc2UtciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTNzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAgIC5oYW1idXJnZXItLWNvbGxhcHNlLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdG9wOiAtMjBweDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCBvcGFjaXR5IDAuMXMgbGluZWFyOyB9XG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2UtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMTJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCB0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2Utci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgb3BhY2l0eSAwLjFzIDAuMjJzIGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLWNvbGxhcHNlLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE2cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIHRyYW5zZm9ybSAwLjEzcyAwLjI1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICBcbiAgLypcbiAgICAgKiBFbGFzdGljXG4gICAgICovXG4gIC5oYW1idXJnZXItLWVsYXN0aWMgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdG9wOiAycHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNzVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTsgfVxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xMjVzIDAuMjc1cyBlYXNlOyB9XG4gICAgLmhhbWJ1cmdlci0tZWxhc3RpYyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0b3A6IDIwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNzVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1lbGFzdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSgxMzVkZWcpO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1czsgfVxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgIG9wYWNpdHk6IDA7IH1cbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoLTI3MGRlZyk7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7IH1cbiAgXG4gIC8qXG4gICAgICogRWxhc3RpYyBSZXZlcnNlXG4gICAgICovXG4gIC5oYW1idXJnZXItLWVsYXN0aWMtciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0b3A6IDJweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI3NXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XG4gICAgLmhhbWJ1cmdlci0tZWxhc3RpYy1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTI1cyAwLjI3NXMgZWFzZTsgfVxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0b3A6IDIwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNzVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKC0xMzVkZWcpO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1czsgfVxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgb3BhY2l0eTogMDsgfVxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgcm90YXRlKDI3MGRlZyk7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7IH1cbiAgXG4gIC8qXG4gICAgICogRW1waGF0aWNcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tZW1waGF0aWMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYyAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYyAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIGxlZnQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgcmlnaHQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XG4gICAgLmhhbWJ1cmdlci0tZW1waGF0aWMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogLTgwcHg7XG4gICAgICAgIHRvcDogLTgwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODBweCwgODBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IC04MHB4O1xuICAgICAgICB0b3A6IC04MHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04MHB4LCA4MHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogcmlnaHQgMC4xMjVzIGVhc2Utb3V0LCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7IH1cbiAgXG4gIC8qXG4gICAgICogRW1waGF0aWMgUmV2ZXJzZVxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgbGVmdCAwLjEyNXMgMC4xNzVzIGVhc2UtaW47IH1cbiAgICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHJpZ2h0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAtODBweDtcbiAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDgwcHgsIC04MHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICByaWdodDogLTgwcHg7XG4gICAgICAgIHRvcDogODBweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODBweCwgLTgwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuMTI1cyBlYXNlLW91dCwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHRyYW5zZm9ybSAwLjEyNXMgMC4xNzVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIE1pbnVzXG4gICAgICovXG4gIC5oYW1idXJnZXItLW1pbnVzIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tbWludXMgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA4cyAwcyBlYXNlLW91dCwgdG9wIDAuMDhzIDBzIGVhc2Utb3V0LCBvcGFjaXR5IDBzIGxpbmVhcjsgfVxuICBcbiAgLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA4cyBlYXNlLW91dCwgdG9wIDAuMDhzIGVhc2Utb3V0LCBvcGFjaXR5IDBzIDAuMDhzIGxpbmVhcjsgfVxuICBcbiAgLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdG9wOiAwOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1taW51cy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDsgfVxuICBcbiAgLypcbiAgICAgKiBTbGlkZXJcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tc2xpZGVyIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRvcDogMnB4OyB9XG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzOyB9XG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRvcDogMjBweDsgfVxuICBcbiAgLmhhbWJ1cmdlci0tc2xpZGVyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZTNkKC01LjcxNDI5cHgsIC02cHgsIDApO1xuICAgICAgb3BhY2l0eTogMDsgfVxuICAgIC5oYW1idXJnZXItLXNsaWRlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgcm90YXRlKC05MGRlZyk7IH1cbiAgXG4gIC8qXG4gICAgICogU2xpZGVyIFJldmVyc2VcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tc2xpZGVyLXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdG9wOiAycHg7IH1cbiAgICAuaGFtYnVyZ2VyLS1zbGlkZXItciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1czsgfVxuICAgIC5oYW1idXJnZXItLXNsaWRlci1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRvcDogMjBweDsgfVxuICBcbiAgLmhhbWJ1cmdlci0tc2xpZGVyLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cbiAgICAuaGFtYnVyZ2VyLS1zbGlkZXItci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUzZCg1LjcxNDI5cHgsIC02cHgsIDApO1xuICAgICAgb3BhY2l0eTogMDsgfVxuICAgIC5oYW1idXJnZXItLXNsaWRlci1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoOTBkZWcpOyB9XG4gIFxuICAvKlxuICAgICAqIFNwaW5cbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tc3BpbiAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjIycztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcGluIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjI1cyBlYXNlLWluLCBvcGFjaXR5IDAuMXMgZWFzZS1pbjsgfVxuICAgIC5oYW1idXJnZXItLXNwaW4gLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4yNXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1zcGluLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLXNwaW4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZS1vdXQsIG9wYWNpdHkgMC4xcyAwLjEycyBlYXNlLW91dDsgfVxuICAgIC5oYW1idXJnZXItLXNwaW4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMjJzIDAuMTJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIFNwaW4gUmV2ZXJzZVxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1zcGluLXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gICAgLmhhbWJ1cmdlci0tc3Bpbi1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjI1cyBlYXNlLWluLCBvcGFjaXR5IDAuMXMgZWFzZS1pbjsgfVxuICAgIC5oYW1idXJnZXItLXNwaW4tciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjI1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLXNwaW4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyNWRlZyk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tc3Bpbi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgMC4xMnMgZWFzZS1vdXQ7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcGluLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yMnMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgXG4gIC8qXG4gICAgICogU3ByaW5nXG4gICAgICovXG4gIC5oYW1idXJnZXItLXNwcmluZyAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0b3A6IDJweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMTNzIGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLXNwcmluZyAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAgIC5oYW1idXJnZXItLXNwcmluZyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0b3A6IDIwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1zcHJpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE1cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIHRyYW5zZm9ybSAwLjEzcyAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxuICAgIC5oYW1idXJnZXItLXNwcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XG4gIFxuICAvKlxuICAgICAqIFNwcmluZyBSZXZlcnNlXG4gICAgICovXG4gIC5oYW1idXJnZXItLXNwcmluZy1yIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xM3M7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gICAgLmhhbWJ1cmdlci0tc3ByaW5nLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdG9wOiAtMjBweDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCBvcGFjaXR5IDBzIGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLXNwcmluZy1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS1zcHJpbmctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tc3ByaW5nLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIG9wYWNpdHkgMHMgMC4yMnMgbGluZWFyOyB9XG4gICAgLmhhbWJ1cmdlci0tc3ByaW5nLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE1cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIHRyYW5zZm9ybSAwLjEzcyAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICBcbiAgLypcbiAgICAgKiBTdGFuZFxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMDc1cyBsaW5lYXI7IH1cbiAgICAuaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjA3NXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAgIC5oYW1idXJnZXItLXN0YW5kIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLXN0YW5kLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMTVzIGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLXN0YW5kLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLXN0YW5kLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICBib3R0b206IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgXG4gIC8qXG4gICAgICogU3RhbmQgUmV2ZXJzZVxuICAgICAqL1xuICAuaGFtYnVyZ2VyLS1zdGFuZC1yIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4wNzVzIGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLXN0YW5kLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1zdGFuZC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLXN0YW5kLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMTVzIGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLXN0YW5kLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tc3RhbmQtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gIFxuICAvKlxuICAgICAqIFNxdWVlemVcbiAgICAgKi9cbiAgLmhhbWJ1cmdlci0tc3F1ZWV6ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjA3NXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gICAgLmhhbWJ1cmdlci0tc3F1ZWV6ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjEycyBlYXNlLCBvcGFjaXR5IDAuMDc1cyBlYXNlOyB9XG4gICAgLmhhbWJ1cmdlci0tc3F1ZWV6ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMTJzIGVhc2UsIHRyYW5zZm9ybSAwLjA3NXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgXG4gIC5oYW1idXJnZXItLXNxdWVlemUuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS1zcXVlZXplLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgZWFzZSwgb3BhY2l0eSAwLjA3NXMgMC4xMnMgZWFzZTsgfVxuICAgIC5oYW1idXJnZXItLXNxdWVlemUuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIGVhc2UsIHRyYW5zZm9ybSAwLjA3NXMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgXG4gIC8qXG4gICAgICogVm9ydGV4XG4gICAgICovXG4gIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXggLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS12b3J0ZXggLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBvcGFjaXR5OyB9XG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvdHRvbSwgdHJhbnNmb3JtOyB9XG4gIFxuICAuaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDc2NWRlZyk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTsgfVxuICAgIC5oYW1idXJnZXItLXZvcnRleC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgb3BhY2l0eTogMDsgfVxuICAgIC5oYW1idXJnZXItLXZvcnRleC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XG4gIFxuICAvKlxuICAgICAqIFZvcnRleCBSZXZlcnNlXG4gICAgICovXG4gIC5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTsgfVxuICAgIC5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsgfVxuICAgIC5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIG9wYWNpdHk7IH1cbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3R0b20sIHRyYW5zZm9ybTsgfVxuICBcbiAgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC03NjVkZWcpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7IH1cbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIG9wYWNpdHk6IDA7IH1cbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9oYW1idXJnZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7RUFNRTtDQUNEO0lBQ0cscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCOztJ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QUU7SUFDeEI7TUFDRSxNQUFNO01BQ04sVUFBVSxFQUFFO0lBQ2Q7TUFDRSxTQUFTO01BQ1QseUJBQXlCLEVBQUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohXFxuICogSGFtYnVyZ2Vyc1xcbiAqIEBkZXNjcmlwdGlvbiBUYXN0eSBDU1MtYW5pbWF0ZWQgaGFtYnVyZ2Vyc1xcbiAqIEBhdXRob3IgSm9uYXRoYW4gU3VoIEBqb25zdWhcXG4gKiBAc2l0ZSBodHRwczovL2pvbnN1aC5jb20vaGFtYnVyZ2Vyc1xcbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zdWgvaGFtYnVyZ2Vyc1xcbiAqL1xcbiAuaGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGZpbHRlcjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICAuaGFtYnVyZ2VyIHtcXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXI6aG92ZXIge1xcbiAgICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZTpob3ZlciB7XFxuICAgICAgb3BhY2l0eTogMC43OyB9XFxuICAgIC5oYW1idXJnZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIsXFxuICAgIC5oYW1idXJnZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSxcXG4gICAgLmhhbWJ1cmdlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci1ib3gge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRvcDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4OyB9XFxuICAgIC5oYW1idXJnZXItaW5uZXIsIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgIGhlaWdodDogM3B4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7IH1cXG4gICAgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IC0xMHB4OyB9XFxuICAgIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICBib3R0b206IC0xMHB4OyB9XFxuICBcXG4gIC8qXFxuICAgICAqIDNEWFxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLTNkeCAuaGFtYnVyZ2VyLWJveCB7XFxuICAgIHBlcnNwZWN0aXZlOiA4MHB4OyB9XFxuICBcXG4gIC5oYW1idXJnZXItLTNkeCAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIDNEWCBSZXZlcnNlXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tM2R4LXIgLmhhbWJ1cmdlci1ib3gge1xcbiAgICBwZXJzcGVjdGl2ZTogODBweDsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tM2R4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogM0RZXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItYm94IHtcXG4gICAgcGVyc3BlY3RpdmU6IDgwcHg7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLTNkeS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIDNEWSBSZXZlcnNlXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tM2R5LXIgLmhhbWJ1cmdlci1ib3gge1xcbiAgICBwZXJzcGVjdGl2ZTogODBweDsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS0zZHktciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHktciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tM2R5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiAzRFhZXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tM2R4eSAuaGFtYnVyZ2VyLWJveCB7XFxuICAgIHBlcnNwZWN0aXZlOiA4MHB4OyB9XFxuICBcXG4gIC5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R4eSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS0zZHh5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLTNkeHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiAzRFhZIFJldmVyc2VcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1ib3gge1xcbiAgICBwZXJzcGVjdGl2ZTogODBweDsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R4eS1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tM2R4eS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tM2R4eS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpIHJvdGF0ZVooLTE4MGRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tM2R4eS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS0zZHh5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBBcnJvd1xcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLWFycm93LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tYXJyb3cuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogQXJyb3cgUmlnaHRcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1hcnJvdy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLWFycm93LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogQXJyb3cgQWx0XFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tYXJyb3dhbHQgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLWFycm93YWx0IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLWFycm93YWx0LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tYXJyb3dhbHQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBBcnJvdyBBbHQgUmlnaHRcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1hcnJvd2FsdC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLWFycm93YWx0LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIC0xMHB4LCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tYXJyb3dhbHQtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAxMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIEFycm93IFR1cm5cXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBBcnJvdyBUdXJuIFJpZ2h0XFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBCb3JpbmdcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1ib3JpbmcgLmhhbWJ1cmdlci1pbm5lciwgLmhhbWJ1cmdlci0tYm9yaW5nIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tYm9yaW5nIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1ib3JpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tYm9yaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAwOyB9XFxuICAgIC5oYW1idXJnZXItLWJvcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIENvbGxhcHNlXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tY29sbGFwc2UgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRvcDogYXV0bztcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjEzcztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xM3M7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdG9wOiAtMjBweDtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgb3BhY2l0eSAwLjFzIGxpbmVhcjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjEycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2UuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIG9wYWNpdHkgMC4xcyAwLjIycyBsaW5lYXI7IH1cXG4gICAgLmhhbWJ1cmdlci0tY29sbGFwc2UuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogQ29sbGFwc2UgUmV2ZXJzZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlLXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRvcDogYXV0bztcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjEzcztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xM3M7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0b3A6IC0yMHB4O1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCBvcGFjaXR5IDAuMXMgbGluZWFyOyB9XFxuICAgIC5oYW1idXJnZXItLWNvbGxhcHNlLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCBvcGFjaXR5IDAuMXMgMC4yMnMgbGluZWFyOyB9XFxuICAgIC5oYW1idXJnZXItLWNvbGxhcHNlLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE2cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIHRyYW5zZm9ybSAwLjEzcyAwLjI1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBFbGFzdGljXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tZWxhc3RpYyAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdG9wOiAycHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjc1cztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XFxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDEwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjEyNXMgMC4yNzVzIGVhc2U7IH1cXG4gICAgLmhhbWJ1cmdlci0tZWxhc3RpYyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdG9wOiAyMHB4O1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI3NXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDEzNWRlZyk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1czsgfVxcbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHJvdGF0ZSgtMjcwZGVnKTtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7IH1cXG4gIFxcbiAgLypcXG4gICAgICogRWxhc3RpYyBSZXZlcnNlXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tZWxhc3RpYy1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0b3A6IDJweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNzVzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tZWxhc3RpYy1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAxMHB4O1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xMjVzIDAuMjc1cyBlYXNlOyB9XFxuICAgIC5oYW1idXJnZXItLWVsYXN0aWMtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdG9wOiAyMHB4O1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI3NXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tZWxhc3RpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoLTEzNWRlZyk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1czsgfVxcbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoMjcwZGVnKTtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7IH1cXG4gIFxcbiAgLypcXG4gICAgICogRW1waGF0aWNcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1lbXBoYXRpYyB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmhhbWJ1cmdlci0tZW1waGF0aWMgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjEyNXMgMC4xNzVzIGVhc2UtaW47IH1cXG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYyAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgbGVmdCAwLjEyNXMgMC4xNzVzIGVhc2UtaW47IH1cXG4gICAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgICB0b3A6IDEwcHg7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgcmlnaHQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XFxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxcbiAgICAgIC5oYW1idXJnZXItLWVtcGhhdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgICAgbGVmdDogLTgwcHg7XFxuICAgICAgICB0b3A6IC04MHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4MHB4LCA4MHB4LCAwKSByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxcbiAgICAgIC5oYW1idXJnZXItLWVtcGhhdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgICByaWdodDogLTgwcHg7XFxuICAgICAgICB0b3A6IC04MHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODBweCwgODBweCwgMCkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiByaWdodCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBFbXBoYXRpYyBSZXZlcnNlXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tZW1waGF0aWMtciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxcbiAgICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIGxlZnQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XFxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgICB0b3A6IDEwcHg7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgcmlnaHQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XFxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XFxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICAgIGxlZnQ6IC04MHB4O1xcbiAgICAgICAgdG9wOiA4MHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4MHB4LCAtODBweCwgMCkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMTI1cyBlYXNlLW91dCwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHRyYW5zZm9ybSAwLjEyNXMgMC4xNzVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpOyB9XFxuICAgICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IC04MHB4O1xcbiAgICAgICAgdG9wOiA4MHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODBweCwgLTgwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiByaWdodCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBNaW51c1xcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLW1pbnVzIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tbWludXMgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wOHMgMHMgZWFzZS1vdXQsIHRvcCAwLjA4cyAwcyBlYXNlLW91dCwgb3BhY2l0eSAwcyBsaW5lYXI7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDhzIGVhc2Utb3V0LCB0b3AgMC4wOHMgZWFzZS1vdXQsIG9wYWNpdHkgMHMgMC4wOHMgbGluZWFyOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLW1pbnVzLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IDA7IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAwOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIFNsaWRlclxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLXNsaWRlciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdG9wOiAycHg7IH1cXG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAxMHB4O1xcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1czsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zbGlkZXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRvcDogMjBweDsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlM2QoLTUuNzE0MjlweCwgLTZweCwgMCk7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoLTkwZGVnKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBTbGlkZXIgUmV2ZXJzZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLXNsaWRlci1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0b3A6IDJweDsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zbGlkZXItciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMTBweDtcXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XFxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7IH1cXG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRvcDogMjBweDsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1zbGlkZXItci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc2xpZGVyLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZTNkKDUuNzE0MjlweCwgLTZweCwgMCk7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zbGlkZXItci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHJvdGF0ZSg5MGRlZyk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogU3BpblxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLXNwaW4gLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3BpbiAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMjVzIGVhc2UtaW4sIG9wYWNpdHkgMC4xcyBlYXNlLWluOyB9XFxuICAgIC5oYW1idXJnZXItLXNwaW4gLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMjVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1zcGluLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcGluLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgMC4xMnMgZWFzZS1vdXQ7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3Bpbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yMnMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogU3BpbiBSZXZlcnNlXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tc3Bpbi1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjIycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICAgIC5oYW1idXJnZXItLXNwaW4tciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMjVzIGVhc2UtaW4sIG9wYWNpdHkgMC4xcyBlYXNlLWluOyB9XFxuICAgIC5oYW1idXJnZXItLXNwaW4tciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4yNXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLXNwaW4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLXNwaW4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0OyB9XFxuICAgIC5oYW1idXJnZXItLXNwaW4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjIycyAwLjEycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBTcHJpbmdcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRvcDogMnB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMTNzIGxpbmVhcjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDEwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRvcDogMjBweDtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLXNwcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XFxuICAgIC5oYW1idXJnZXItLXNwcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XFxuICAgIC5oYW1idXJnZXItLXNwcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIHRyYW5zZm9ybSAwLjEzcyAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XFxuICBcXG4gIC8qXFxuICAgICAqIFNwcmluZyBSZXZlcnNlXFxuICAgICAqL1xcbiAgLmhhbWJ1cmdlci0tc3ByaW5nLXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRvcDogYXV0bztcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjEzcztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zcHJpbmctciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdG9wOiAtMjBweDtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgb3BhY2l0eSAwcyBsaW5lYXI7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3ByaW5nLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLXNwcmluZy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3ByaW5nLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIG9wYWNpdHkgMHMgMC4yMnMgbGluZWFyOyB9XFxuICAgIC5oYW1idXJnZXItLXNwcmluZy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogU3RhbmRcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjA3NXMgbGluZWFyOyB9XFxuICAgIC5oYW1idXJnZXItLXN0YW5kIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjA3NXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjA3NXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgXFxuICAuaGFtYnVyZ2VyLS1zdGFuZC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjE1cyBsaW5lYXI7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3RhbmQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLXN0YW5kLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogU3RhbmQgUmV2ZXJzZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLXN0YW5kLXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4wNzVzIGxpbmVhcjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zdGFuZC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjA3NXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zdGFuZC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMDc1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLXN0YW5kLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMTVzIGxpbmVhcjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zdGFuZC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1zdGFuZC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogU3F1ZWV6ZVxcbiAgICAgKi9cXG4gIC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDc1cztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICAgIC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMTJzIGVhc2UsIG9wYWNpdHkgMC4wNzVzIGVhc2U7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3F1ZWV6ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjEycyBlYXNlLCB0cmFuc2Zvcm0gMC4wNzVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLXNxdWVlemUuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3F1ZWV6ZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIGVhc2UsIG9wYWNpdHkgMC4wNzVzIDAuMTJzIGVhc2U7IH1cXG4gICAgLmhhbWJ1cmdlci0tc3F1ZWV6ZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgZWFzZSwgdHJhbnNmb3JtIDAuMDc1cyAwLjEycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgXFxuICAvKlxcbiAgICAgKiBWb3J0ZXhcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS12b3J0ZXggLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cXG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBvcGFjaXR5OyB9XFxuICAgIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm90dG9tLCB0cmFuc2Zvcm07IH1cXG4gIFxcbiAgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzY1ZGVnKTtcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cXG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAwOyB9XFxuICAgIC5oYW1idXJnZXItLXZvcnRleC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cXG4gIFxcbiAgLypcXG4gICAgICogVm9ydGV4IFJldmVyc2VcXG4gICAgICovXFxuICAuaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cXG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIG9wYWNpdHk7IH1cXG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvdHRvbSwgdHJhbnNmb3JtOyB9XFxuICBcXG4gIC5oYW1idXJnZXItLXZvcnRleC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTc2NWRlZyk7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7IH1cXG4gICAgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxcbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAuaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiA3MHB4O1xufVxuXG4udGl0bGUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHZhcigtLXByaW1hcnkpICwgdmFyKC0tYWNjZW50KSk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDE0N2RlZyxcbiAgICAgICAgdmFyKC0tcHJpbWFyeSkgMCUsXG4gICAgICAgIHZhcigtLWFjY2VudCkgNDAlLFxuICAgICAgICB2YXIoLS1wcmltYXJ5KSAxMDAlXG4gICAgKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgICBhbmltYXRpb246IHNoaW5lIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5Aa2V5ZnJhbWVzIHNoaW5lIHtcbiAgICB0byB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgY2VudGVyO1xuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1FQUFtRTtJQUNuRSxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQzs7Ozs7S0FLQztJQUNELDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLGdDQUFnQztJQUNwQztBQUNKOzs7QUFHQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB2YXIoLS1wcmltYXJ5KSAsIHZhcigtLWFjY2VudCkpO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAxNDdkZWcsXFxuICAgICAgICB2YXIoLS1wcmltYXJ5KSAwJSxcXG4gICAgICAgIHZhcigtLWFjY2VudCkgNDAlLFxcbiAgICAgICAgdmFyKC0tcHJpbWFyeSkgMTAwJVxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcXG4gICAgYW5pbWF0aW9uOiBzaGluZSAzcyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGluZSB7XFxuICAgIHRvIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgY2VudGVyO1xcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgMjVweDtcbn1cblxuI25hdiB7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxuI25hdiAuYWN0aW9ucy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYWN0aW9ucy1saXN0IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNuYXYgLmFjdGlvbnMtbGlzdCBidXR0b24uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4jbmF2IC5hY3Rpb25zLWxpc3QgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuXG4jbmF2IC5hY3Rpb25zLWxpc3QgYnV0dG9uOmFjdGl2ZSwgICNuYXYgLmFjdGlvbnMtbGlzdCBidXR0b246Zm9jdXMge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG5cbi5hY3Rpb25zLWxpc3QgYnV0dG9uIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4ucHJvamVjdC1wcmV2aWV3IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MnB4KTtcbiAgICBwYWRkaW5nOiA0MHB4IDBweCA0MHB4IDcwcHg7XG59XG5cbi5wcm9qZWN0LXByZXZpZXcgLnByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wcm9qZWN0LXByZXZpZXcgLnByb2plY3QtdGl0bGU6OmZpcnN0LWxldHRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAjbWFpbiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAjbmF2IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGdyaWQtdGVtcGxhdGUtcm93cyA1MDBtcztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjRkODtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgLm5hdi1saW5rcy13cmFwcGVyIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAjbmF2LmFjdGl2ZSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBuYXZBbmltYXRpb24ge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0byB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9qZWN0LXByZXZpZXcge1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDE1cHggODBweCAxNXB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkNBQTZDO0lBQzdDLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7O0FBR0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsU0FBUztJQUNiOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixVQUFVO1FBQ1Ysb0NBQW9DO1FBQ3BDLHlCQUF5QjtRQUN6QixnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJO1lBQ0ksYUFBYTtRQUNqQjs7UUFFQTtZQUNJLGlCQUFpQjtRQUNyQjtJQUNKOztJQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMCAyNXB4O1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XFxufVxcblxcbiNuYXYgLmFjdGlvbnMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmFjdGlvbnMtbGlzdCBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI25hdiAuYWN0aW9ucy1saXN0IGJ1dHRvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuI25hdiAuYWN0aW9ucy1saXN0IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbiNuYXYgLmFjdGlvbnMtbGlzdCBidXR0b246YWN0aXZlLCAgI25hdiAuYWN0aW9ucy1saXN0IGJ1dHRvbjpmb2N1cyB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG5cXG4uYWN0aW9ucy1saXN0IGJ1dHRvbiBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5wcm9qZWN0LXByZXZpZXcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzJweCk7XFxuICAgIHBhZGRpbmc6IDQwcHggMHB4IDQwcHggNzBweDtcXG59XFxuXFxuLnByb2plY3QtcHJldmlldyAucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnByb2plY3QtcHJldmlldyAucHJvamVjdC10aXRsZTo6Zmlyc3QtbGV0dGVyIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgI21haW4ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAjbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgNTAwbXM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmNGQ4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1saW5rcy13cmFwcGVyIHtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgI25hdi5hY3RpdmUge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBuYXZBbmltYXRpb24ge1xcbiAgICAgICAgZnJvbSB7XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRvIHtcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1wcmV2aWV3IHtcXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMTVweCA4MHB4IDE1cHg7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucG9wdXAge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3B1cC10YXNrLXByb2plY3Qge1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggMTQ3ZGVnLCB2YXIoLS1wcmltYXJ5KSAwJSwgdmFyKC0tYWNjZW50KSA0MCUsIHZhcigtLXByaW1hcnkpIDEwMCUgKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgICBhbmltYXRpb246IHNoaW5lIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZmFjZS1pbiB7XG4gICAgYW5pbWF0aW9uOiBmYWNlLWluIC4zcyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBmYWNlLWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uZmFjZS1vdXQge1xuICAgIGFuaW1hdGlvbjogZmFjZS1vdXQgLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhY2Utb3V0IHtcbiAgICBmb3JtIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbi5ncm93LXVwIHtcbiAgICBhbmltYXRpb246IGdyb3ctdXAgLjJzIGVhc2UtaW4tb3V0O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuQGtleWZyYW1lcyBncm93LXVwIHtcbiAgICBmcm9tIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG59XG5cbi5ncm93LWRvd24ge1xuICAgIGFuaW1hdGlvbjogZ3Jvdy1kb3duIC4zcyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBncm93LWRvd24ge1xuICAgIGZyb20ge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsc0dBQXNHO0lBQ3RHLDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtRQUM1QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLDRCQUE0QjtRQUM1QixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBvcHVwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLXRhc2stcHJvamVjdCB7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAxNDdkZWcsIHZhcigtLXByaW1hcnkpIDAlLCB2YXIoLS1hY2NlbnQpIDQwJSwgdmFyKC0tcHJpbWFyeSkgMTAwJSApO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcXG4gICAgYW5pbWF0aW9uOiBzaGluZSAzcyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmZhY2UtaW4ge1xcbiAgICBhbmltYXRpb246IGZhY2UtaW4gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhY2UtaW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuLmZhY2Utb3V0IHtcXG4gICAgYW5pbWF0aW9uOiBmYWNlLW91dCAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFjZS1vdXQge1xcbiAgICBmb3JtIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuLmdyb3ctdXAge1xcbiAgICBhbmltYXRpb246IGdyb3ctdXAgLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgZ3Jvdy11cCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgfVxcbn1cXG5cXG4uZ3Jvdy1kb3duIHtcXG4gICAgYW5pbWF0aW9uOiBncm93LWRvd24gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3ctZG93biB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGhlaWdodDogMHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNyZWF0ZS1uZXctcHJvamVjdC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucHJvamVjdHMtbGlzdC10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFjdGlvbnMtbGlzdCAucHJvamVjdC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHhcbn1cblxuLmFjdGlvbnMtbGlzdCAucHJvamVjdC1idXR0b246aG92ZXIgLnByb2plY3QtZGVsZXRlLWljb24ge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cblxuLnByb2plY3RzLWFjdGlvbnMtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLnByb2plY3QtaW5mb3JtYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3Rpb25zLWxpc3QgIC5wcm9qZWN0LWRlbGV0ZS1pY29uIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uZGVsZXRlLWljb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3Rpb25zLWxpc3QgIC5wcm9qZWN0LWRlbGV0ZS1pY29uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5uZXctcHJvamVjdC1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY3JlYXRlLXByb2plY3QtYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAgICA7XG59XG5cbi5jcmVhdGUtcHJvamVjdC1idXR0b24gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQsIC5jcmVhdGUtcHJvamVjdC1idXR0b24gLnRhc2stdGl0bGUge1xuICAgIGNvbG9yOiBibGFjaztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcHJvamVjdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY3JlYXRlLW5ldy1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0LXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmFjdGlvbnMtbGlzdCAucHJvamVjdC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNXB4XFxufVxcblxcbi5hY3Rpb25zLWxpc3QgLnByb2plY3QtYnV0dG9uOmhvdmVyIC5wcm9qZWN0LWRlbGV0ZS1pY29uIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuLnByb2plY3RzLWFjdGlvbnMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFjdGlvbnMtbGlzdCAgLnByb2plY3QtZGVsZXRlLWljb24ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kZWxldGUtaWNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFjdGlvbnMtbGlzdCAgLnByb2plY3QtZGVsZXRlLWljb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jcmVhdGUtcHJvamVjdC1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQgICAgO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnV0dG9uIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLCAuY3JlYXRlLXByb2plY3QtYnV0dG9uIC50YXNrLXRpdGxlIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50YXNrLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MnB4IC0gODBweCAtIDQ2cHgpO1xufVxuXG4udGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuLnRhc2staW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiBhdXRvO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5leHRyYS1kYXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLnRhc2stdGl0bGUge1xuICAgIGZsZXg6IDE7XG59XG5cbi5leHRyYS1kYXRhID4gcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxZjtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhc2stZGVsZXRlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRlbGV0ZS1pY29uIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uZGVsZXRlLWljb246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbi50YXNrOmhvdmVyIC5kZWxldGUtaWNvbiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubmV3LXRhc2sge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG5cbi8qKlxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIFRhc2sgRm9ybVxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5uZXctdGFzay1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5mb3JtLWlucHV0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLmZvcm0taW5wdXRzIGlucHV0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cblxuLm5ldy10YXNrLXRpdGxlLCAubmV3LXRhc2stbm90ZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xuICAgIGdhcDogMjBweDtcbn1cblxuLm5ldy10YXNrLXN1Ym1pdCwgLmNsb3NlLW5ldy10YXNrLWZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5uZXctdGFzay1zdWJtaXQgPiBzcGFuIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLm5ldy10YXNrLXN1Ym1pdDpob3ZlciA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLFxuLmNsb3NlLW5ldy10YXNrLWZvcm06aG92ZXIgIHtcbiAgICBhbmltYXRpb246IHJvdGF0ZSAuM3MgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTkwZGVnKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgVGFzayBEZXRhaWxzXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4ub3B0aW9uYWwtZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLm9wdGlvbmFsLWRhdGEgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmR1ZS1kYXRlLWNvbnRhaW5lciwgLnRhZ3MtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cblxuLm9wdGlvbmFsLWRhdGEgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuXG4vKiBEYXRlIElucHV0IFN0eWxlICovXG4ubmV3LXRhc2stZHVlLWRhdGUsIC5uZXctdGFzay10YWdzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG59XG5cbi5uZXctdGFzay1kdWUtZGF0ZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9ye1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5hY3RpdmUtZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDFmO1xufVxuLmFjdGl2ZS1mb3JtIGlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vKiBEYXRlIElucHV0IFN0eWxlIHdoZW4gaXMgYWN0aXZlICovXG4uYWN0aXZlLWZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl1cbntcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICBtaW4taGVpZ2h0OiAxLjJlbTtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi8qKlxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIEVkaXQgVGFza1xuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLmVkaXQtdGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnRhc2s6aGFzKC5lZGl0LXRhc2spICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuLnRhc2s6aGFzKC5lZGl0LXRhc2spIC5uZXctdGFzay1zdWJtaXQgc3BhbiAge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnRhc2stbGlzdCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Rhc2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGtDQUFrQztBQUN0Qzs7QUFFQTs7OztDQUlDO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjs7O0FBR0E7Ozs7Q0FJQzs7QUFFRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOzs7QUFHQSxxQkFBcUI7QUFDckI7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLG9DQUFvQztBQUNwQzs7SUFFSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRhc2stbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzJweCAtIDgwcHggLSA0NnB4KTtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5leHRyYS1kYXRhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5leHRyYS1kYXRhID4gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxZjtcXG4gICAgcGFkZGluZzogNXB4IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFzay1kZWxldGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kZWxldGUtaWNvbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4udGFzazpob3ZlciAuZGVsZXRlLWljb24ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi8qKlxcbiAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiAgVGFzayBGb3JtXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiovXFxuLm5ldy10YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLWlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxufVxcblxcbi5mb3JtLWlucHV0cyBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuXFxuLm5ldy10YXNrLXRpdGxlLCAubmV3LXRhc2stbm90ZXMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogaW5oZXJpdDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubmV3LXRhc2stc3VibWl0LCAuY2xvc2UtbmV3LXRhc2stZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uZXctdGFzay1zdWJtaXQgPiBzcGFuIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm5ldy10YXNrLXN1Ym1pdDpob3ZlciA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLFxcbi5jbG9zZS1uZXctdGFzay1mb3JtOmhvdmVyICB7XFxuICAgIGFuaW1hdGlvbjogcm90YXRlIC4zcyBsaW5lYXI7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxOTBkZWcpO1xcbiAgICB9XFxufVxcblxcblxcbi8qKlxcbiAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiAgVGFzayBEZXRhaWxzXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiovXFxuXFxuLm9wdGlvbmFsLWRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5vcHRpb25hbC1kYXRhIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLmR1ZS1kYXRlLWNvbnRhaW5lciwgLnRhZ3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuXFxuLm9wdGlvbmFsLWRhdGEgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuLyogRGF0ZSBJbnB1dCBTdHlsZSAqL1xcbi5uZXctdGFzay1kdWUtZGF0ZSwgLm5ldy10YXNrLXRhZ3Mge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbn1cXG5cXG4ubmV3LXRhc2stZHVlLWRhdGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcntcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmFjdGl2ZS1mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDFmO1xcbn1cXG4uYWN0aXZlLWZvcm0gaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBEYXRlIElucHV0IFN0eWxlIHdoZW4gaXMgYWN0aXZlICovXFxuLmFjdGl2ZS1mb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXVxcbntcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEuMmVtO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi8qKlxcbiAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiAgRWRpdCBUYXNrXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiovXFxuXFxuLmVkaXQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50YXNrOmhhcyguZWRpdC10YXNrKSAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4udGFzazpoYXMoLmVkaXQtdGFzaykgLm5ldy10YXNrLXN1Ym1pdCBzcGFuICB7XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAudGFzay1saXN0IHtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU2F0IFNlcCAwNiAyMDE0IDIzOjU5OjU5Ljk5OVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgZW5kIG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IFN1biBTZXAgMDcgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gLTcgOiAwKSArIDYgLSAoZGF5IC0gd2Vla1N0YXJ0c09uKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZvcm1hdElTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUgYWNjb3JkaW5nIHRvIHRoZSBJU08gODYwMSBzdGFuZGFyZCAoaHR0cHM6Ly9zdXBwb3J0LnNhcy5jb20vZG9jdW1lbnRhdGlvbi9jZGwvZW4vbHJkaWN0LzY0MzE2L0hUTUwvZGVmYXVsdC92aWV3ZXIuaHRtI2EwMDMxNjk4MTQuaHRtKS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdC4gT3B0aW9ucyBtYXkgYmUgcGFzc2VkIHRvIGNvbnRyb2wgdGhlIHBhcnRzIGFuZCBub3RhdGlvbnMgb2YgdGhlIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7J2V4dGVuZGVkJ3wnYmFzaWMnfSBbb3B0aW9ucy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBpZiAnYmFzaWMnLCBoaWRlIGRlbGltaXRlcnMgYmV0d2VlbiBkYXRlIGFuZCB0aW1lIHZhbHVlcy5cbiAqIEBwYXJhbSB7J2NvbXBsZXRlJ3wnZGF0ZSd8J3RpbWUnfSBbb3B0aW9ucy5yZXByZXNlbnRhdGlvbj0nY29tcGxldGUnXSAtIGZvcm1hdCBkYXRlLCB0aW1lIHdpdGggbG9jYWwgdGltZSB6b25lLCBvciBib3RoLlxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyAoaW4gbG9jYWwgdGltZSB6b25lKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5mb3JtYXRgIG11c3QgYmUgJ2V4dGVuZGVkJyBvciAnYmFzaWMnXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5yZXByZXNlbnRhdGlvbmAgbXVzdCBiZSAnZGF0ZScsICd0aW1lJyBvciAnY29tcGxldGUnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxOCBTZXB0ZW1iZXIgMjAxOSBpbiBJU08gODYwMSBmb3JtYXQgKGxvY2FsIHRpbWUgem9uZSBpcyBVVEMpOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0SVNPKG5ldyBEYXRlKDIwMTksIDgsIDE4LCAxOSwgMCwgNTIpKVxuICogLy89PiAnMjAxOS0wOS0xOFQxOTowMDo1MlonXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxOCBTZXB0ZW1iZXIgMjAxOSBpbiBJU08gODYwMSwgc2hvcnQgZm9ybWF0IChsb2NhbCB0aW1lIHpvbmUgaXMgVVRDKTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdElTTyhuZXcgRGF0ZSgyMDE5LCA4LCAxOCwgMTksIDAsIDUyKSwgeyBmb3JtYXQ6ICdiYXNpYycgfSlcbiAqIC8vPT4gJzIwMTkwOTE4VDE5MDA1MidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDE4IFNlcHRlbWJlciAyMDE5IGluIElTTyA4NjAxIGZvcm1hdCwgZGF0ZSBvbmx5OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0SVNPKG5ldyBEYXRlKDIwMTksIDgsIDE4LCAxOSwgMCwgNTIpLCB7IHJlcHJlc2VudGF0aW9uOiAnZGF0ZScgfSlcbiAqIC8vPT4gJzIwMTktMDktMTgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxOCBTZXB0ZW1iZXIgMjAxOSBpbiBJU08gODYwMSBmb3JtYXQsIHRpbWUgb25seSAobG9jYWwgdGltZSB6b25lIGlzIFVUQyk6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXRJU08obmV3IERhdGUoMjAxOSwgOCwgMTgsIDE5LCAwLCA1MiksIHsgcmVwcmVzZW50YXRpb246ICd0aW1lJyB9KVxuICogLy89PiAnMTk6MDA6NTJaJ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRJU08oZGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkZm9ybWF0LCBfb3B0aW9ucyRyZXByZXNlbnRhdGk7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRhdGUpO1xuICBpZiAoaXNOYU4ob3JpZ2luYWxEYXRlLmdldFRpbWUoKSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cbiAgdmFyIGZvcm1hdCA9IFN0cmluZygoX29wdGlvbnMkZm9ybWF0ID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZvcm1hdCkgIT09IG51bGwgJiYgX29wdGlvbnMkZm9ybWF0ICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmb3JtYXQgOiAnZXh0ZW5kZWQnKTtcbiAgdmFyIHJlcHJlc2VudGF0aW9uID0gU3RyaW5nKChfb3B0aW9ucyRyZXByZXNlbnRhdGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVwcmVzZW50YXRpb24pICE9PSBudWxsICYmIF9vcHRpb25zJHJlcHJlc2VudGF0aSAhPT0gdm9pZCAwID8gX29wdGlvbnMkcmVwcmVzZW50YXRpIDogJ2NvbXBsZXRlJyk7XG4gIGlmIChmb3JtYXQgIT09ICdleHRlbmRlZCcgJiYgZm9ybWF0ICE9PSAnYmFzaWMnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJmb3JtYXQgbXVzdCBiZSAnZXh0ZW5kZWQnIG9yICdiYXNpYydcIik7XG4gIH1cbiAgaWYgKHJlcHJlc2VudGF0aW9uICE9PSAnZGF0ZScgJiYgcmVwcmVzZW50YXRpb24gIT09ICd0aW1lJyAmJiByZXByZXNlbnRhdGlvbiAhPT0gJ2NvbXBsZXRlJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwicmVwcmVzZW50YXRpb24gbXVzdCBiZSAnZGF0ZScsICd0aW1lJywgb3IgJ2NvbXBsZXRlJ1wiKTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciB0ek9mZnNldCA9ICcnO1xuICB2YXIgZGF0ZURlbGltaXRlciA9IGZvcm1hdCA9PT0gJ2V4dGVuZGVkJyA/ICctJyA6ICcnO1xuICB2YXIgdGltZURlbGltaXRlciA9IGZvcm1hdCA9PT0gJ2V4dGVuZGVkJyA/ICc6JyA6ICcnO1xuXG4gIC8vIFJlcHJlc2VudGF0aW9uIGlzIGVpdGhlciAnZGF0ZScgb3IgJ2NvbXBsZXRlJ1xuICBpZiAocmVwcmVzZW50YXRpb24gIT09ICd0aW1lJykge1xuICAgIHZhciBkYXkgPSBhZGRMZWFkaW5nWmVyb3Mob3JpZ2luYWxEYXRlLmdldERhdGUoKSwgMik7XG4gICAgdmFyIG1vbnRoID0gYWRkTGVhZGluZ1plcm9zKG9yaWdpbmFsRGF0ZS5nZXRNb250aCgpICsgMSwgMik7XG4gICAgdmFyIHllYXIgPSBhZGRMZWFkaW5nWmVyb3Mob3JpZ2luYWxEYXRlLmdldEZ1bGxZZWFyKCksIDQpO1xuXG4gICAgLy8geXl5eU1NZGQgb3IgeXl5eS1NTS1kZC5cbiAgICByZXN1bHQgPSBcIlwiLmNvbmNhdCh5ZWFyKS5jb25jYXQoZGF0ZURlbGltaXRlcikuY29uY2F0KG1vbnRoKS5jb25jYXQoZGF0ZURlbGltaXRlcikuY29uY2F0KGRheSk7XG4gIH1cblxuICAvLyBSZXByZXNlbnRhdGlvbiBpcyBlaXRoZXIgJ3RpbWUnIG9yICdjb21wbGV0ZSdcbiAgaWYgKHJlcHJlc2VudGF0aW9uICE9PSAnZGF0ZScpIHtcbiAgICAvLyBBZGQgdGhlIHRpbWV6b25lLlxuICAgIHZhciBvZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICB2YXIgYWJzb2x1dGVPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICAgICAgdmFyIGhvdXJPZmZzZXQgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNvbHV0ZU9mZnNldCAvIDYwKSwgMik7XG4gICAgICB2YXIgbWludXRlT2Zmc2V0ID0gYWRkTGVhZGluZ1plcm9zKGFic29sdXRlT2Zmc2V0ICUgNjAsIDIpO1xuICAgICAgLy8gSWYgbGVzcyB0aGFuIDAsIHRoZSBzaWduIGlzICssIGJlY2F1c2UgaXQgaXMgYWhlYWQgb2YgdGltZS5cbiAgICAgIHZhciBzaWduID0gb2Zmc2V0IDwgMCA/ICcrJyA6ICctJztcbiAgICAgIHR6T2Zmc2V0ID0gXCJcIi5jb25jYXQoc2lnbikuY29uY2F0KGhvdXJPZmZzZXQsIFwiOlwiKS5jb25jYXQobWludXRlT2Zmc2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHpPZmZzZXQgPSAnWic7XG4gICAgfVxuICAgIHZhciBob3VyID0gYWRkTGVhZGluZ1plcm9zKG9yaWdpbmFsRGF0ZS5nZXRIb3VycygpLCAyKTtcbiAgICB2YXIgbWludXRlID0gYWRkTGVhZGluZ1plcm9zKG9yaWdpbmFsRGF0ZS5nZXRNaW51dGVzKCksIDIpO1xuICAgIHZhciBzZWNvbmQgPSBhZGRMZWFkaW5nWmVyb3Mob3JpZ2luYWxEYXRlLmdldFNlY29uZHMoKSwgMik7XG5cbiAgICAvLyBJZiB0aGVyZSdzIGFsc28gZGF0ZSwgc2VwYXJhdGUgaXQgd2l0aCB0aW1lIHdpdGggJ1QnXG4gICAgdmFyIHNlcGFyYXRvciA9IHJlc3VsdCA9PT0gJycgPyAnJyA6ICdUJztcblxuICAgIC8vIENyZWF0ZXMgYSB0aW1lIHN0cmluZyBjb25zaXN0aW5nIG9mIGhvdXIsIG1pbnV0ZSwgYW5kIHNlY29uZCwgc2VwYXJhdGVkIGJ5IGRlbGltaXRlcnMsIGlmIGRlZmluZWQuXG4gICAgdmFyIHRpbWUgPSBbaG91ciwgbWludXRlLCBzZWNvbmRdLmpvaW4odGltZURlbGltaXRlcik7XG5cbiAgICAvLyBISG1tc3Mgb3IgSEg6bW06c3MuXG4gICAgcmVzdWx0ID0gXCJcIi5jb25jYXQocmVzdWx0KS5jb25jYXQoc2VwYXJhdG9yKS5jb25jYXQodGltZSkuY29uY2F0KHR6T2Zmc2V0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7XG5cbiAgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhdGVnb3J5TGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhdGVnb3J5TGlzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oYW1idXJnZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oYW1idXJnZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2suY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiZnVuY3Rpb24gaXNUb2RheSAoZGF0ZTEpIHtcbiAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGRhdGUxLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpICYmXG4gICAgICAgIGRhdGUxLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZGF0ZTEuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZTIuZ2V0RnVsbFllYXIoKTtcbn07XG5cbmZ1bmN0aW9uIGluU2FtZVdlZWsoZGF0ZTEpIHtcbiAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBuZXcgRGF0ZShkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpLCBkYXRlMS5nZXREYXRlKCkgLSBkYXRlMS5nZXREYXkoKSk7XG4gICAgY29uc3QgbGFzdERheU9mV2VlayA9IG5ldyBEYXRlKGRhdGUxLmdldEZ1bGxZZWFyKCksIGRhdGUxLmdldE1vbnRoKCksIGRhdGUxLmdldERhdGUoKSAtIGRhdGUxLmdldERheSgpICsgNik7XG4gICAgcmV0dXJuIGRhdGUyID49IGZpcnN0RGF5T2ZXZWVrICYmIGRhdGUyIDw9IGxhc3REYXlPZldlZWs7XG59O1xuXG5leHBvcnQgeyBpc1RvZGF5LCBpblNhbWVXZWVrIH07IiwiZnVuY3Rpb24gY3JlYXRlSGFtYnVyZ2VyTmF2RXZlbnQgKCkge1xuICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2Jyk7XG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBUb2dnbGUgTmF2XG4gICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZUhhbWJ1cmdlck5hdigpIHtcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhhbWJ1cmdlck5hdkV2ZW50LCBjbG9zZUhhbWJ1cmdlck5hdiB9IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4uLy4uL21vZHVsZXMvVGFzay9UYXNrXCI7XG5cbmZ1bmN0aW9uIHNhdmVJbkxvY2FsU3RvcmFnZSh0YXNrTGlzdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbn1cbmZ1bmN0aW9uIHNhdmVJbkxvY2FsU3RvcmFnZVByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjcmVhdGVkXCIpO1xuICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIFtcIlwiXSk7XG4gICAgLy8gfVxuICAgIGxldCBsb2NhbFByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKTtcbiAgICBcbiAgICBpZiAobG9jYWxQcm9qZWN0TGlzdCkge1xuICAgICAgICBsb2NhbFByb2plY3RMaXN0LnB1c2gocHJvamVjdFRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFByb2plY3RMaXN0ID0gW107XG4gICAgICAgIGxvY2FsUHJvamVjdExpc3QucHVzaChwcm9qZWN0VGl0bGUpO1xuICAgIH1cbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUHJvamVjdExpc3QpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSW5Mb2NhbFN0b3JhZ2VQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGM2NTE0ZjMzXzBgLHByb2plY3RUaXRsZSkpO1xuICAgIGxldCBsb2NhbFByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKTtcbiAgICBsb2NhbFByb2plY3RMaXN0ID0gbG9jYWxQcm9qZWN0TGlzdC5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0ICE9IHByb2plY3RUaXRsZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgYzY1MTRmMzNfMWAsbG9jYWxQcm9qZWN0TGlzdCkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxQcm9qZWN0TGlzdCkpO1xufVxuXG5mdW5jdGlvbiBsb2FkTG9jYWxTdG9yYWdlKERPTVRvZG9MaXN0KSB7XG4gICAgbGV0IGxvY2FsU3RvcmFnZVRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tMaXN0XCIpKTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2VUYXNrTGlzdCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2VUYXNrTGlzdCA9IFRhc2suZnJvbUpTT05MaXN0KGxvY2FsU3RvcmFnZVRhc2tMaXN0KTtcbiAgICAgICAgRE9NVG9kb0xpc3QuYWRkVGFza3MobG9jYWxTdG9yYWdlVGFza0xpc3QpXG4gICAgICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZExvY2FsU3RvcmFnZVByb2plY3RzKGxvYWRQcm9qZWN0cyl7XG4gICAgbGV0IGxvY2FsU3RvcmFnZVByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGBjNjUxNGYzM18yYCxsb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdCkpO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZVByb2plY3RMaXN0KSB7XG4gICAgICAgIGxvYWRQcm9qZWN0cyhsb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdClcbiAgICB9XG59IFxuXG5leHBvcnQge3NhdmVJbkxvY2FsU3RvcmFnZSwgc2F2ZUluTG9jYWxTdG9yYWdlUHJvamVjdCwgbG9hZExvY2FsU3RvcmFnZSwgbG9hZExvY2FsU3RvcmFnZVByb2plY3RzLCAgcmVtb3ZlSW5Mb2NhbFN0b3JhZ2VQcm9qZWN0fTtcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4NTg5ZjAzPV8weDIyZjA7KGZ1bmN0aW9uKF8weDEzYTgzYyxfMHg1MTk3MWMpe3ZhciBfMHg1NzcwOT1fMHgyMmYwLF8weDM2YjhlNz1fMHgxM2E4M2MoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDRjZTVjND0tcGFyc2VJbnQoXzB4NTc3MDkoMHgxNjMpKS8weDErLXBhcnNlSW50KF8weDU3NzA5KDB4MTNkKSkvMHgyKy1wYXJzZUludChfMHg1NzcwOSgweDE5YikpLzB4MystcGFyc2VJbnQoXzB4NTc3MDkoMHgxNWYpKS8weDQqKC1wYXJzZUludChfMHg1NzcwOSgweDE1NykpLzB4NSkrLXBhcnNlSW50KF8weDU3NzA5KDB4MTRmKSkvMHg2K3BhcnNlSW50KF8weDU3NzA5KDB4MTExKSkvMHg3Ky1wYXJzZUludChfMHg1NzcwOSgweDE3OSkpLzB4OCooLXBhcnNlSW50KF8weDU3NzA5KDB4MTgxKSkvMHg5KTtpZihfMHg0Y2U1YzQ9PT1fMHg1MTk3MWMpYnJlYWs7ZWxzZSBfMHgzNmI4ZTdbJ3B1c2gnXShfMHgzNmI4ZTdbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDUzZjZlYyl7XzB4MzZiOGU3WydwdXNoJ10oXzB4MzZiOGU3WydzaGlmdCddKCkpO319fShfMHg1OGRhLDB4MjY0NTgpKTtmdW5jdGlvbiBfMHg1OGRhKCl7dmFyIF8weDNkZTJjMj1bJ3N0YWNrJywnOmxvZ1BvaW50SWQ6JywncmVkdWNlTGltaXRzJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ21hcCcsJ19wX25hbWUnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ3JlbG9hZCcsJ3RvTG93ZXJDYXNlJywnX251bWJlclJlZ0V4cCcsJ3NldHRlcicsJ29uY2xvc2UnLCdjb25jYXQnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdmdW5jdGlvbicsJ3VybCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdwb3J0JywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0Jywnb25vcGVuJywnX2lzU2V0Jywnb25tZXNzYWdlJywnYm9vbGVhbicsJzM5MjcwMGFuV3hqSCcsJ3Byb2Nlc3MnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJyxcXFwiL1VzZXJzL2pvc2VtYXJpYS8udnNjb2RlLWluc2lkZXJzL2V4dGVuc2lvbnMvd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMC4wLjE5Mi9ub2RlX21vZHVsZXNcXFwiLCd3ZWJwYWNrJywnY29uc29sZScsJ19yZWNvbm5lY3RUaW1lb3V0JywnZGF0YScsJ2dldFdlYlNvY2tldENsYXNzJywnX3NvcnRQcm9wcycsJ19TeW1ib2wnLCdvbmVycm9yJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnX3NldE5vZGVRdWVyeVBhdGgnLCd2ZXJzaW9ucycsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdmb3JFYWNoJywnX2FsbG93ZWRUb1NlbmQnLCdoaXRzJywncm9vdF9leHBfaWQnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnTnVtYmVyJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ3RoZW4nLCdfY29ubmVjdGluZycsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ2FsbFN0ckxlbmd0aCcsJ3Rlc3QnLCdzZXJpYWxpemUnLCc2NDI2OScsJzE2OTE0MDU5NTgzMzcnLCdsb2NhdGlvbicsJ1N5bWJvbCcsJ3N0ckxlbmd0aCcsJ25hbWUnLCdQT1NJVElWRV9JTkZJTklUWScsJ19kYXRlVG9TdHJpbmcnLCdwb3NpdGl2ZUluZmluaXR5JywncG9wJywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdjbG9zZScsJ3NsaWNlJywnY3VycmVudCcsJ25vZGUnLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnQnVmZmVyJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdyZXBsYWNlJywncHVzaCcsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnbnVtYmVyJywndGltZScsJ19jbGVhbk5vZGUnLCdfc2V0Tm9kZUlkJywnc3BsaXQnLCdlbGVtZW50cycsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ1tvYmplY3RcXFxceDIwTWFwXScsJ3BlcmZfaG9va3MnLCd0eXBlJywnX1dlYlNvY2tldENsYXNzJywnbGV2ZWwnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnZ2V0UHJvdG90eXBlT2YnLCdyZWFkeVN0YXRlJywnYmluZCcsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdfc29ja2V0JywndmFsdWUnLCdwYXJlbnQnLCdfb2JqZWN0VG9TdHJpbmcnLCdjYXBwZWRFbGVtZW50cycsJ2NhcHBlZCcsJ3Vua25vd24nLCdfY2FwSWZTdHJpbmcnLCdjYWxsJywnX3Byb3BlcnR5JywncGFyc2UnLCdocnRpbWUnLCdzdGFja1RyYWNlTGltaXQnLCdsb2cnLCd1bmRlZmluZWQnLCdyZXNvbHZlR2V0dGVycycsJ19hZGRQcm9wZXJ0eScsJ2luZGV4JywnX3NlbmRFcnJvck1lc3NhZ2UnLCdwYXRoVG9GaWxlVVJMJywnY291bnQnLCdzdWJzdHInLCdtZXNzYWdlJywnX2FkZE9iamVjdFByb3BlcnR5JywnJywnX2NvbnNvbGVfbmluamEnLCdzb3J0UHJvcHMnLCdzdHJpbmcnLCdnbG9iYWwnLCdnZXR0ZXInLCc3OTM5NjFhWGpSTlgnLCdXZWJTb2NrZXQnLCdkZXB0aCcsJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InLCdfV2ViU29ja2V0JywndW5yZWYnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ19hZGRMb2FkTm9kZScsJ25hbicsJ2hhc093blByb3BlcnR5JywnSFRNTEFsbENvbGxlY3Rpb24nLCdhcnJheScsJ2RlZmF1bHQnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdkaXNhYmxlZFRyYWNlJywnX3BfbGVuZ3RoJywnY2FwcGVkUHJvcHMnLCcxMjcuMC4wLjEnLCdsZW5ndGgnLCdub0Z1bmN0aW9ucycsJ19wcm9wZXJ0eU5hbWUnLCdob3N0JywnX19lcycrJ01vZHVsZScsJ251bGwnLCdfaXNNYXAnLCdfcHJvcGVydHlBY2Nlc3NvcicsJ1JlZ0V4cCcsJ25vdycsJ25leHQuanMnLCdqb2luJywndmFsdWVPZicsJ2dldCcsJ19zZXROb2RlTGFiZWwnLCdzZW5kJywnbWV0aG9kJywnbmVnYXRpdmVaZXJvJywndHJhY2UnLCdORUdBVElWRV9JTkZJTklUWScsJ3RpbWVTdGFtcCcsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5JywnX2lzQXJyYXknLCdtYXRjaCcsJzE1ODU0NmFkU0RERycsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdjb25zdHJ1Y3RvcicsJ19pbkJyb3dzZXInLCdfcmVnRXhwVG9TdHJpbmcnLCd0b1N0cmluZycsJ191bmRlZmluZWQnLCd3YXJuJywnZWxhcHNlZCcsJ29iamVjdCcsJ3N0cmluZ2lmeScsJ0Vycm9yJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdkaXNhYmxlZExvZycsJ19pc1ByaW1pdGl2ZVR5cGUnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCd3cy9pbmRleC5qcycsJ2RlZmluZVByb3BlcnR5JywnODc4NDEyb1BDYktiJywncHJvcHMnLCdpbmNsdWRlcycsJ3RpbWVFbmQnLCdyZW1peCcsJ3Jvb3RFeHByZXNzaW9uJywnX2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnOTYxMDc1YVFWUmpUJywnQm9vbGVhbicsJ19wXycsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnX2Nvbm5lY3RlZCcsJ190eXBlJywnZnVuY05hbWUnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCc0bWVuTldPJywnZGF0ZScsJ1NldCcsJ2NhdGNoJywnMjI4NDg5Q2FCRXZFJywnaG9zdG5hbWUnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdhdXRvRXhwYW5kTGltaXQnLCdiaWdpbnQnLCdTdHJpbmcnLCdzZXQnLCdNYXAnLCdleHBJZCcsJ2FzdHJvJywnYXV0b0V4cGFuZCcsJ3N5bWJvbCcsJy4uLicsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnX3F1b3RlZFJlZ0V4cCcsJ1tvYmplY3RcXFxceDIwU2V0XScsJ2Vycm9yJywnX3dzJywncGF0aCcsJzEuMC4wJywndG90YWxTdHJMZW5ndGgnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiTWFjQm9vay1Qcm8tZGUtSm9zZS5sb2NhbFxcXCIsXFxcIjE5Mi4xNjguMS4xMzFcXFwiXSwnMTM2S1ZNcGVvJywncHJvdG90eXBlJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdcXFxceDIwYnJvd3NlcicsJ25vZGVNb2R1bGVzJywnX2tleVN0clJlZ0V4cCcsJ19oYXNNYXBPbkl0c1BhdGgnLCcyMzA5MjJIQm5SeEcnXTtfMHg1OGRhPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDNkZTJjMjt9O3JldHVybiBfMHg1OGRhKCk7fXZhciB1ZT1PYmplY3RbJ2NyZWF0ZSddLHRlPU9iamVjdFtfMHg1ODlmMDMoMHgxNGUpXSxoZT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLGxlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLGZlPU9iamVjdFtfMHg1ODlmMDMoMHgxZGIpXSxfZT1PYmplY3RbJ3Byb3RvdHlwZSddW18weDU4OWYwMygweDExYSldLHBlPShfMHg2NTcyZixfMHg1ZWFiNjUsXzB4MzM1NjkwLF8weDEwOTBlYyk9Pnt2YXIgXzB4NDhlNmEwPV8weDU4OWYwMztpZihfMHg1ZWFiNjUmJnR5cGVvZiBfMHg1ZWFiNjU9PV8weDQ4ZTZhMCgweDE0Nil8fHR5cGVvZiBfMHg1ZWFiNjU9PV8weDQ4ZTZhMCgweDE5MCkpe2ZvcihsZXQgXzB4MTE3NzU4IG9mIGxlKF8weDVlYWI2NSkpIV9lWydjYWxsJ10oXzB4NjU3MmYsXzB4MTE3NzU4KSYmXzB4MTE3NzU4IT09XzB4MzM1NjkwJiZ0ZShfMHg2NTcyZixfMHgxMTc3NTgseydnZXQnOigpPT5fMHg1ZWFiNjVbXzB4MTE3NzU4XSwnZW51bWVyYWJsZSc6IShfMHgxMDkwZWM9aGUoXzB4NWVhYjY1LF8weDExNzc1OCkpfHxfMHgxMDkwZWNbJ2VudW1lcmFibGUnXX0pO31yZXR1cm4gXzB4NjU3MmY7fSxuZT0oXzB4MTBhNTEwLF8weDE1ODQxYixfMHg1N2VjZDgpPT4oXzB4NTdlY2Q4PV8weDEwYTUxMCE9bnVsbD91ZShmZShfMHgxMGE1MTApKTp7fSxwZShfMHgxNTg0MWJ8fCFfMHgxMGE1MTB8fCFfMHgxMGE1MTBbXzB4NTg5ZjAzKDB4MTI5KV0/dGUoXzB4NTdlY2Q4LF8weDU4OWYwMygweDExZCkseyd2YWx1ZSc6XzB4MTBhNTEwLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4NTdlY2Q4LF8weDEwYTUxMCkpLFE9Y2xhc3N7Y29uc3RydWN0b3IoXzB4MzM0MDdjLF8weDU4OGQxNyxfMHgyNDM0OGMsXzB4NTk4NjgzKXt2YXIgXzB4NTNiYmQ2PV8weDU4OWYwMzt0aGlzW18weDUzYmJkNigweDEwZildPV8weDMzNDA3Yyx0aGlzW18weDUzYmJkNigweDEyOCldPV8weDU4OGQxNyx0aGlzW18weDUzYmJkNigweDE5NSldPV8weDI0MzQ4Yyx0aGlzWydub2RlTW9kdWxlcyddPV8weDU5ODY4Myx0aGlzW18weDUzYmJkNigweDFhYyldPSEweDAsdGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgwLHRoaXNbXzB4NTNiYmQ2KDB4MTViKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1tfMHg1M2JiZDYoMHgxNDApXT0hIXRoaXNbJ2dsb2JhbCddW18weDUzYmJkNigweDExMildLHRoaXNbXzB4NTNiYmQ2KDB4MWQ3KV09bnVsbCx0aGlzW18weDUzYmJkNigweDFjMildPTB4MCx0aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddPTB4MTQsdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXT1fMHg1M2JiZDYoMHgxYzcpLHRoaXNbXzB4NTNiYmQ2KDB4MWYyKV09KHRoaXNbXzB4NTNiYmQ2KDB4MTQwKV0/J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJzonQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnKSt0aGlzW18weDUzYmJkNigweDFjYyldO31hc3luY1tfMHg1ODlmMDMoMHgxYTMpXSgpe3ZhciBfMHgzODA3ZmY9XzB4NTg5ZjAzO2lmKHRoaXNbXzB4MzgwN2ZmKDB4MWQ3KV0pcmV0dXJuIHRoaXNbXzB4MzgwN2ZmKDB4MWQ3KV07bGV0IF8weDM0MzhkYTtpZih0aGlzW18weDM4MDdmZigweDE0MCldKV8weDM0MzhkYT10aGlzW18weDM4MDdmZigweDEwZildW18weDM4MDdmZigweDExMildO2Vsc2V7aWYodGhpc1tfMHgzODA3ZmYoMHgxMGYpXVsncHJvY2VzcyddPy5bXzB4MzgwN2ZmKDB4MTE1KV0pXzB4MzQzOGRhPXRoaXNbXzB4MzgwN2ZmKDB4MTBmKV1bJ3Byb2Nlc3MnXT8uW18weDM4MDdmZigweDExNSldO2Vsc2UgdHJ5e2xldCBfMHgyNDU4NmE9YXdhaXQgaW1wb3J0KCdwYXRoJyk7XzB4MzQzOGRhPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgzODA3ZmYoMHgxOTEpKSlbXzB4MzgwN2ZmKDB4MWYzKV0oXzB4MjQ1ODZhW18weDM4MDdmZigweDEzMCldKHRoaXNbXzB4MzgwN2ZmKDB4MTdlKV0sXzB4MzgwN2ZmKDB4MTRkKSkpWyd0b1N0cmluZyddKCkpKVsnZGVmYXVsdCddO31jYXRjaHt0cnl7XzB4MzQzOGRhPXJlcXVpcmUocmVxdWlyZShfMHgzODA3ZmYoMHgxNzUpKVtfMHgzODA3ZmYoMHgxMzApXSh0aGlzW18weDM4MDdmZigweDE3ZSldLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnKTt9fX1yZXR1cm4gdGhpc1tfMHgzODA3ZmYoMHgxZDcpXT1fMHgzNDM4ZGEsXzB4MzQzOGRhO31bXzB4NTg5ZjAzKDB4MWM5KV0oKXt2YXIgXzB4MzZhYjg1PV8weDU4OWYwMzt0aGlzW18weDM2YWI4NSgweDFiMyldfHx0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbXzB4MzZhYjg1KDB4MWMyKV0+PXRoaXNbXzB4MzZhYjg1KDB4MTcwKV18fCh0aGlzW18weDM2YWI4NSgweDFkZSldPSEweDEsdGhpc1tfMHgzNmFiODUoMHgxYjMpXT0hMHgwLHRoaXNbXzB4MzZhYjg1KDB4MWMyKV0rKyx0aGlzW18weDM2YWI4NSgweDE3NCldPW5ldyBQcm9taXNlKChfMHg0OGEzMGMsXzB4MmI1NTVmKT0+e3ZhciBfMHgzNDk0MGY9XzB4MzZhYjg1O3RoaXNbXzB4MzQ5NDBmKDB4MWEzKV0oKVtfMHgzNDk0MGYoMHgxYjIpXShfMHg0NTBkMj0+e3ZhciBfMHg1NjExMDc9XzB4MzQ5NDBmO2xldCBfMHgyZGI2Yjk9bmV3IF8weDQ1MGQyKCd3czovLycrdGhpc1tfMHg1NjExMDcoMHgxMjgpXSsnOicrdGhpc1tfMHg1NjExMDcoMHgxOTUpXSk7XzB4MmRiNmI5W18weDU2MTEwNygweDFhNildPSgpPT57dmFyIF8weDE5YzQ5MT1fMHg1NjExMDc7dGhpc1tfMHgxOWM0OTEoMHgxYWMpXT0hMHgxLHRoaXNbJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MmRiNmI5KSx0aGlzW18weDE5YzQ5MSgweDEzYSldKCksXzB4MmI1NTVmKG5ldyBFcnJvcihfMHgxOWM0OTEoMHgxMTQpKSk7fSxfMHgyZGI2YjlbJ29ub3BlbiddPSgpPT57dmFyIF8weDUzOGU1OT1fMHg1NjExMDc7dGhpc1tfMHg1MzhlNTkoMHgxNDApXXx8XzB4MmRiNmI5W18weDUzOGU1OSgweDFlMCldJiZfMHgyZGI2YjlbJ19zb2NrZXQnXVsndW5yZWYnXSYmXzB4MmRiNmI5W18weDUzOGU1OSgweDFlMCldW18weDUzOGU1OSgweDExNildKCksXzB4NDhhMzBjKF8weDJkYjZiOSk7fSxfMHgyZGI2YjlbXzB4NTYxMTA3KDB4MThkKV09KCk9Pnt2YXIgXzB4MjRjYWUwPV8weDU2MTEwNzt0aGlzW18weDI0Y2FlMCgweDFkZSldPSEweDAsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgyZGI2YjkpLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9LF8weDJkYjZiOVtfMHg1NjExMDcoMHgxOTkpXT1fMHgzMWI5YTc9Pnt2YXIgXzB4MzcxMzI1PV8weDU2MTEwNzt0cnl7XzB4MzFiOWE3JiZfMHgzMWI5YTdbXzB4MzcxMzI1KDB4MWEyKV0mJnRoaXNbXzB4MzcxMzI1KDB4MTQwKV0mJkpTT05bXzB4MzcxMzI1KDB4MWVhKV0oXzB4MzFiOWE3W18weDM3MTMyNSgweDFhMildKVtfMHgzNzEzMjUoMHgxMzUpXT09PV8weDM3MTMyNSgweDE4OSkmJnRoaXNbXzB4MzcxMzI1KDB4MTBmKV1bXzB4MzcxMzI1KDB4MWJhKV1bXzB4MzcxMzI1KDB4MTg5KV0oKTt9Y2F0Y2h7fX07fSlbXzB4MzQ5NDBmKDB4MWIyKV0oXzB4YWQ3MmYyPT4odGhpc1tfMHgzNDk0MGYoMHgxNWIpXT0hMHgwLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDEsdGhpc1tfMHgzNDk0MGYoMHgxYWMpXT0hMHgwLHRoaXNbXzB4MzQ5NDBmKDB4MWMyKV09MHgwLF8weGFkNzJmMikpW18weDM0OTQwZigweDE2MildKF8weGU2MDZhYT0+KHRoaXNbXzB4MzQ5NDBmKDB4MTViKV09ITB4MSx0aGlzW18weDM0OTQwZigweDFiMyldPSEweDEsY29uc29sZVsnd2FybiddKF8weDM0OTQwZigweDFkZikrdGhpc1tfMHgzNDk0MGYoMHgxY2MpXSksXzB4MmI1NTVmKG5ldyBFcnJvcihfMHgzNDk0MGYoMHgxNGMpKyhfMHhlNjA2YWEmJl8weGU2MDZhYVtfMHgzNDk0MGYoMHgxZjYpXSkpKSkpO30pKTt9W18weDU4OWYwMygweDE5NCldKF8weDQ4MGYzYyl7dmFyIF8weDQ0NTllZj1fMHg1ODlmMDM7dGhpc1tfMHg0NDU5ZWYoMHgxNWIpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MTt0cnl7XzB4NDgwZjNjW18weDQ0NTllZigweDE4ZCldPW51bGwsXzB4NDgwZjNjW18weDQ0NTllZigweDFhNildPW51bGwsXzB4NDgwZjNjW18weDQ0NTllZigweDE5NyldPW51bGw7fWNhdGNoe310cnl7XzB4NDgwZjNjW18weDQ0NTllZigweDFkYyldPDB4MiYmXzB4NDgwZjNjW18weDQ0NTllZigweDFjMyldKCk7fWNhdGNoe319WydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCl7dmFyIF8weDM2YmQ0ND1fMHg1ODlmMDM7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MzZiZDQ0KDB4MWExKV0pLCEodGhpc1tfMHgzNmJkNDQoMHgxYzIpXT49dGhpc1tfMHgzNmJkNDQoMHgxNzApXSkmJih0aGlzW18weDM2YmQ0NCgweDFhMSldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MjRiZTUyPV8weDM2YmQ0NDt0aGlzW18weDI0YmU1MigweDE1YildfHx0aGlzWydfY29ubmVjdGluZyddfHwodGhpc1tfMHgyNGJlNTIoMHgxYzkpXSgpLHRoaXNbXzB4MjRiZTUyKDB4MTc0KV0/LlsnY2F0Y2gnXSgoKT0+dGhpc1tfMHgyNGJlNTIoMHgxM2EpXSgpKSk7fSwweDFmNCksdGhpc1tfMHgzNmJkNDQoMHgxYTEpXVtfMHgzNmJkNDQoMHgxMTYpXSYmdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVtfMHgzNmJkNDQoMHgxMTYpXSgpKTt9YXN5bmNbXzB4NTg5ZjAzKDB4MTM0KV0oXzB4NGQ2MDg3KXt2YXIgXzB4NTBkNzlmPV8weDU4OWYwMzt0cnl7aWYoIXRoaXNbXzB4NTBkNzlmKDB4MWFjKV0pcmV0dXJuO3RoaXNbXzB4NTBkNzlmKDB4MWRlKV0mJnRoaXNbXzB4NTBkNzlmKDB4MWM5KV0oKSwoYXdhaXQgdGhpc1tfMHg1MGQ3OWYoMHgxNzQpXSlbXzB4NTBkNzlmKDB4MTM0KV0oSlNPTltfMHg1MGQ3OWYoMHgxNDcpXShfMHg0ZDYwODcpKTt9Y2F0Y2goXzB4MThkNzJkKXtjb25zb2xlW18weDUwZDc5ZigweDE0NCldKHRoaXNbXzB4NTBkNzlmKDB4MWYyKV0rJzpcXFxceDIwJysoXzB4MThkNzJkJiZfMHgxOGQ3MmRbJ21lc3NhZ2UnXSkpLHRoaXNbXzB4NTBkNzlmKDB4MWFjKV09ITB4MSx0aGlzW18weDUwZDc5ZigweDEzYSldKCk7fX19O2Z1bmN0aW9uIF8weDIyZjAoXzB4MTU5ZWZmLF8weDRhNWVkYyl7dmFyIF8weDU4ZGE5NT1fMHg1OGRhKCk7cmV0dXJuIF8weDIyZjA9ZnVuY3Rpb24oXzB4MjJmMDAzLF8weDJmMzdjMCl7XzB4MjJmMDAzPV8weDIyZjAwMy0weDEwYzt2YXIgXzB4M2RmZDEzPV8weDU4ZGE5NVtfMHgyMmYwMDNdO3JldHVybiBfMHgzZGZkMTM7fSxfMHgyMmYwKF8weDE1OWVmZixfMHg0YTVlZGMpO31mdW5jdGlvbiBWKF8weDZlMGRlOSxfMHgzMGIxY2EsXzB4ZWNjNmFiLF8weDIwOTU0ZSxfMHgyODFhYjMpe3ZhciBfMHgxODBhMDA9XzB4NTg5ZjAzO2xldCBfMHg1M2JiMDc9XzB4ZWNjNmFiW18weDE4MGEwMCgweDFkMSldKCcsJylbXzB4MTgwYTAwKDB4MTg2KV0oXzB4ZjVhNmU4PT57dmFyIF8weDM0MmVlMT1fMHgxODBhMDA7dHJ5e18weDZlMGRlOVtfMHgzNDJlZTEoMHgxMWUpXXx8KChfMHgyODFhYjM9PT1fMHgzNDJlZTEoMHgxMmYpfHxfMHgyODFhYjM9PT1fMHgzNDJlZTEoMHgxNTMpfHxfMHgyODFhYjM9PT1fMHgzNDJlZTEoMHgxNmMpKSYmKF8weDI4MWFiMys9XzB4NmUwZGU5Wydwcm9jZXNzJ10/LltfMHgzNDJlZTEoMHgxYTkpXT8uWydub2RlJ10/J1xcXFx4MjBzZXJ2ZXInOl8weDM0MmVlMSgweDE3ZCkpLF8weDZlMGRlOVtfMHgzNDJlZTEoMHgxMWUpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4MjgxYWIzfSk7bGV0IF8weDNhMzIwZj1uZXcgUShfMHg2ZTBkZTksXzB4MzBiMWNhLF8weGY1YTZlOCxfMHgyMDk1NGUpO3JldHVybiBfMHgzYTMyMGZbXzB4MzQyZWUxKDB4MTM0KV1bXzB4MzQyZWUxKDB4MWRkKV0oXzB4M2EzMjBmKTt9Y2F0Y2goXzB4NTIyM2ZjKXtyZXR1cm4gY29uc29sZVtfMHgzNDJlZTEoMHgxNDQpXShfMHgzNDJlZTEoMHgxNDkpLF8weDUyMjNmYyYmXzB4NTIyM2ZjWydtZXNzYWdlJ10pLCgpPT57fTt9fSk7cmV0dXJuIF8weDUxZTk4ZD0+XzB4NTNiYjA3W18weDE4MGEwMCgweDFhYildKF8weDJkYjVlYj0+XzB4MmRiNWViKF8weDUxZTk4ZCkpO31mdW5jdGlvbiBIKF8weDUwNTY5Mil7dmFyIF8weDFiNTc2Nz1fMHg1ODlmMDM7bGV0IF8weDY0MjRlYj1mdW5jdGlvbihfMHg1ZTIyNWYsXzB4MjAwNzFjKXtyZXR1cm4gXzB4MjAwNzFjLV8weDVlMjI1Zjt9LF8weDUyMDk0ZDtpZihfMHg1MDU2OTJbJ3BlcmZvcm1hbmNlJ10pXzB4NTIwOTRkPWZ1bmN0aW9uKCl7dmFyIF8weDM2NjU5ND1fMHgyMmYwO3JldHVybiBfMHg1MDU2OTJbJ3BlcmZvcm1hbmNlJ11bXzB4MzY2NTk0KDB4MTJlKV0oKTt9O2Vsc2V7aWYoXzB4NTA1NjkyW18weDFiNTc2NygweDE5YyldJiZfMHg1MDU2OTJbJ3Byb2Nlc3MnXVtfMHgxYjU3NjcoMHgxZWIpXSlfMHg1MjA5NGQ9ZnVuY3Rpb24oKXt2YXIgXzB4MTk0Y2QwPV8weDFiNTc2NztyZXR1cm4gXzB4NTA1NjkyW18weDE5NGNkMCgweDE5YyldW18weDE5NGNkMCgweDFlYildKCk7fSxfMHg2NDI0ZWI9ZnVuY3Rpb24oXzB4Mjk4Yjk2LF8weDQ0YTE1ZSl7cmV0dXJuIDB4M2U4KihfMHg0NGExNWVbMHgwXS1fMHgyOThiOTZbMHgwXSkrKF8weDQ0YTE1ZVsweDFdLV8weDI5OGI5NlsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgzNDY4ODV9PXJlcXVpcmUoXzB4MWI1NzY3KDB4MWQ1KSk7XzB4NTIwOTRkPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDM0Njg4NVsnbm93J10oKTt9O31jYXRjaHtfMHg1MjA5NGQ9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHg2NDI0ZWIsJ3RpbWVTdGFtcCc6XzB4NTIwOTRkLCdub3cnOigpPT5EYXRlW18weDFiNTc2NygweDEyZSldKCl9O31mdW5jdGlvbiBYKF8weDJhZjkyYyxfMHgyNjE5NzUsXzB4NTEyNDc0KXt2YXIgXzB4NWI0ZTE5PV8weDU4OWYwMztpZihfMHgyYWY5MmNbXzB4NWI0ZTE5KDB4MTk2KV0hPT12b2lkIDB4MClyZXR1cm4gXzB4MmFmOTJjW18weDViNGUxOSgweDE5NildO2xldCBfMHg1NTA5MWI9XzB4MmFmOTJjW18weDViNGUxOSgweDE5YyldPy5bXzB4NWI0ZTE5KDB4MWE5KV0/LltfMHg1YjRlMTkoMHgxYzYpXTtyZXR1cm4gXzB4NTUwOTFiJiZfMHg1MTI0NzQ9PT0nbnV4dCc/XzB4MmFmOTJjW18weDViNGUxOSgweDE5NildPSEweDE6XzB4MmFmOTJjW18weDViNGUxOSgweDE5NildPV8weDU1MDkxYnx8IV8weDI2MTk3NXx8XzB4MmFmOTJjW18weDViNGUxOSgweDFiYSldPy5bJ2hvc3RuYW1lJ10mJl8weDI2MTk3NVtfMHg1YjRlMTkoMHgxNTEpXShfMHgyYWY5MmNbXzB4NWI0ZTE5KDB4MWJhKV1bXzB4NWI0ZTE5KDB4MTY0KV0pLF8weDJhZjkyY1tfMHg1YjRlMTkoMHgxOTYpXTt9KChfMHg3Mjc0YTYsXzB4MzgxMjc4LF8weDFjNzBkNyxfMHg0YTk2Y2QsXzB4NTBlMDNmLF8weDQwYmNkNSxfMHgzM2QxMjUsXzB4NWQxMWVmLF8weDIxNzNjZSk9Pnt2YXIgXzB4MjZhYmQyPV8weDU4OWYwMztpZihfMHg3Mjc0YTZbXzB4MjZhYmQyKDB4MTBjKV0pcmV0dXJuIF8weDcyNzRhNltfMHgyNmFiZDIoMHgxMGMpXTtpZighWChfMHg3Mjc0YTYsXzB4NWQxMWVmLF8weDUwZTAzZikpcmV0dXJuIF8weDcyNzRhNltfMHgyNmFiZDIoMHgxMGMpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4NzI3NGE2W18weDI2YWJkMigweDEwYyldO2xldCBfMHg1OTZmZjA9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4OThkNDNlPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn0sXzB4OTBiODVkPUgoXzB4NzI3NGE2KSxfMHhkMDdlMzc9XzB4OTBiODVkW18weDI2YWJkMigweDE0NSldLF8weDVhNjA0NT1fMHg5MGI4NWRbXzB4MjZhYmQyKDB4MTM5KV0sXzB4M2E2MmQ4PV8weDkwYjg1ZFtfMHgyNmFiZDIoMHgxMmUpXSxfMHg1Mzc4MmY9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgxM2RlMjU9XzB4Mjg1MGNjPT57XzB4NTM3ODJmWyd0cyddW18weDI4NTBjY109XzB4NWE2MDQ1KCk7fSxfMHgzYzBkMGQ9KF8weDI0NGI0NSxfMHgxNzNjZDApPT57dmFyIF8weDE2YzUwYj1fMHgyNmFiZDI7bGV0IF8weDIyMTA5Zj1fMHg1Mzc4MmZbJ3RzJ11bXzB4MTczY2QwXTtpZihkZWxldGUgXzB4NTM3ODJmWyd0cyddW18weDE3M2NkMF0sXzB4MjIxMDlmKXtsZXQgXzB4NDFhMjQ0PV8weGQwN2UzNyhfMHgyMjEwOWYsXzB4NWE2MDQ1KCkpO18weDExZmM4NShfMHgxMjc2YzMoXzB4MTZjNTBiKDB4MWNlKSxfMHgyNDRiNDUsXzB4M2E2MmQ4KCksXzB4MjM0YzgzLFtfMHg0MWEyNDRdLF8weDE3M2NkMCkpO319LF8weDUzZjljYT1fMHg0ZTUyYzA9Pl8weDNhN2I0Mj0+e3ZhciBfMHgyODkxYTY9XzB4MjZhYmQyO3RyeXtfMHgxM2RlMjUoXzB4M2E3YjQyKSxfMHg0ZTUyYzAoXzB4M2E3YjQyKTt9ZmluYWxseXtfMHg3Mjc0YTZbJ2NvbnNvbGUnXVtfMHgyODkxYTYoMHgxY2UpXT1fMHg0ZTUyYzA7fX0sXzB4NDI5YmZkPV8weDU1ZmFjZj0+XzB4NDk5MzJiPT57dmFyIF8weGQyZWE4MD1fMHgyNmFiZDI7dHJ5e2xldCBbXzB4Y2M4NThkLF8weDI0ZmFjNV09XzB4NDk5MzJiW18weGQyZWE4MCgweDFkMSldKF8weGQyZWE4MCgweDE4MykpO18weDNjMGQwZChfMHgyNGZhYzUsXzB4Y2M4NThkKSxfMHg1NWZhY2YoXzB4Y2M4NThkKTt9ZmluYWxseXtfMHg3Mjc0YTZbXzB4ZDJlYTgwKDB4MWEwKV1bJ3RpbWVFbmQnXT1fMHg1NWZhY2Y7fX07XzB4NzI3NGE2W18weDI2YWJkMigweDEwYyldPXsnY29uc29sZUxvZyc6KF8weDRkMDZkZCxfMHgxYWY3ZTcpPT57dmFyIF8weDJkZjQxOT1fMHgyNmFiZDI7XzB4NzI3NGE2Wydjb25zb2xlJ11bXzB4MmRmNDE5KDB4MWVkKV1bXzB4MmRmNDE5KDB4MWJkKV0hPT1fMHgyZGY0MTkoMHgxNGEpJiZfMHgxMWZjODUoXzB4MTI3NmMzKF8weDJkZjQxOSgweDFlZCksXzB4NGQwNmRkLF8weDNhNjJkOCgpLF8weDIzNGM4MyxfMHgxYWY3ZTcpKTt9LCdjb25zb2xlVHJhY2UnOihfMHgzNDIzODIsXzB4MzdlNTE0KT0+e3ZhciBfMHgzMjMwMmE9XzB4MjZhYmQyO18weDcyNzRhNltfMHgzMjMwMmEoMHgxYTApXVtfMHgzMjMwMmEoMHgxZWQpXVtfMHgzMjMwMmEoMHgxYmQpXSE9PV8weDMyMzAyYSgweDEyMSkmJl8weDExZmM4NShfMHgxMjc2YzMoXzB4MzIzMDJhKDB4MTM3KSxfMHgzNDIzODIsXzB4M2E2MmQ4KCksXzB4MjM0YzgzLF8weDM3ZTUxNCkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgyZDEzNGI9XzB4MjZhYmQyO18weDcyNzRhNltfMHgyZDEzNGIoMHgxYTApXVtfMHgyZDEzNGIoMHgxY2UpXT1fMHg1M2Y5Y2EoXzB4NzI3NGE2W18weDJkMTM0YigweDFhMCldWyd0aW1lJ10pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHg1ODAyOTY9XzB4MjZhYmQyO18weDcyNzRhNltfMHg1ODAyOTYoMHgxYTApXVsndGltZUVuZCddPV8weDQyOWJmZChfMHg3Mjc0YTZbXzB4NTgwMjk2KDB4MWEwKV1bXzB4NTgwMjk2KDB4MTUyKV0pO30sJ2F1dG9Mb2cnOihfMHg0NjJhYjUsXzB4NTM4OGM2KT0+e3ZhciBfMHg1ZDcyN2I9XzB4MjZhYmQyO18weDExZmM4NShfMHgxMjc2YzMoXzB4NWQ3MjdiKDB4MWVkKSxfMHg1Mzg4YzYsXzB4M2E2MmQ4KCksXzB4MjM0YzgzLFtfMHg0NjJhYjVdKSk7fSwnYXV0b0xvZ01hbnknOihfMHgyOTNmNmQsXzB4MzUzZGM1KT0+e18weDExZmM4NShfMHgxMjc2YzMoJ2xvZycsXzB4MjkzZjZkLF8weDNhNjJkOCgpLF8weDIzNGM4MyxfMHgzNTNkYzUpKTt9LCdhdXRvVHJhY2UnOihfMHg1NDliMWUsXzB4MzdiMmFkKT0+e3ZhciBfMHg0MjQ2MjI9XzB4MjZhYmQyO18weDExZmM4NShfMHgxMjc2YzMoXzB4NDI0NjIyKDB4MTM3KSxfMHgzN2IyYWQsXzB4M2E2MmQ4KCksXzB4MjM0YzgzLFtfMHg1NDliMWVdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDFjNWEzZixfMHgxZDBlZDEpPT57dmFyIF8weDc4ZWIwOD1fMHgyNmFiZDI7XzB4MTFmYzg1KF8weDEyNzZjMyhfMHg3OGViMDgoMHgxMzcpLF8weDFjNWEzZixfMHgzYTYyZDgoKSxfMHgyMzRjODMsXzB4MWQwZWQxKSk7fSwnYXV0b1RpbWUnOihfMHgzNWI3NWYsXzB4MTUxNmZmLF8weDI5OGEyYyk9PntfMHgxM2RlMjUoXzB4Mjk4YTJjKTt9LCdhdXRvVGltZUVuZCc6KF8weDFlZDI5ZixfMHgxYTViNjUsXzB4NWEyMGUxKT0+e18weDNjMGQwZChfMHgxYTViNjUsXzB4NWEyMGUxKTt9fTtsZXQgXzB4MTFmYzg1PVYoXzB4NzI3NGE2LF8weDM4MTI3OCxfMHgxYzcwZDcsXzB4NGE5NmNkLF8weDUwZTAzZiksXzB4MjM0YzgzPV8weDcyNzRhNltfMHgyNmFiZDIoMHgxMWUpXTtjbGFzcyBfMHgzNDUxZjF7Y29uc3RydWN0b3IoKXt2YXIgXzB4MTAyZGYxPV8weDI2YWJkMjt0aGlzWydfa2V5U3RyUmVnRXhwJ109L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDEwMmRmMSgweDE4YildPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHgxMDJkZjEoMHgxNzEpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDEwMmRmMSgweDE0MyldPV8weDcyNzRhNlsndW5kZWZpbmVkJ10sdGhpc1tfMHgxMDJkZjEoMHgxNjUpXT1fMHg3Mjc0YTZbJ0hUTUxBbGxDb2xsZWN0aW9uJ10sdGhpc1tfMHgxMDJkZjEoMHgxNTUpXT1PYmplY3RbXzB4MTAyZGYxKDB4MWQzKV0sdGhpc1tfMHgxMDJkZjEoMHgxNWEpXT1PYmplY3RbXzB4MTAyZGYxKDB4MTg1KV0sdGhpc1tfMHgxMDJkZjEoMHgxYTUpXT1fMHg3Mjc0YTZbXzB4MTAyZGYxKDB4MWJiKV0sdGhpc1snX3JlZ0V4cFRvU3RyaW5nJ109UmVnRXhwW18weDEwMmRmMSgweDE3YSldW18weDEwMmRmMSgweDE0MildLHRoaXNbJ19kYXRlVG9TdHJpbmcnXT1EYXRlW18weDEwMmRmMSgweDE3YSldW18weDEwMmRmMSgweDE0MildO31bXzB4MjZhYmQyKDB4MWI3KV0oXzB4NWVkMTk1LF8weDI4NzE1YyxfMHgzYTNiNDAsXzB4MzUwYzEwKXt2YXIgXzB4MjA3YjExPV8weDI2YWJkMixfMHg5YmRmNjU9dGhpcyxfMHgyOGU1Yjg9XzB4M2EzYjQwW18weDIwN2IxMSgweDE2ZCldO2Z1bmN0aW9uIF8weDExNDQxZihfMHgzMTdiMGUsXzB4NTZkMTEwLF8weGU2YWIwNCl7dmFyIF8weDUyNDE3Nz1fMHgyMDdiMTE7XzB4NTZkMTEwW18weDUyNDE3NygweDFkNildPV8weDUyNDE3NygweDFlNiksXzB4NTZkMTEwW18weDUyNDE3NygweDE3MyldPV8weDMxN2IwZVtfMHg1MjQxNzcoMHgxZjYpXSxfMHgzNGMyMGU9XzB4ZTZhYjA0W18weDUyNDE3NygweDFjNildWydjdXJyZW50J10sXzB4ZTZhYjA0W18weDUyNDE3NygweDFjNildW18weDUyNDE3NygweDFjNSldPV8weDU2ZDExMCxfMHg5YmRmNjVbXzB4NTI0MTc3KDB4MTNlKV0oXzB4NTZkMTEwLF8weGU2YWIwNCk7fXRyeXtfMHgzYTNiNDBbJ2xldmVsJ10rKyxfMHgzYTNiNDBbXzB4MjA3YjExKDB4MTZkKV0mJl8weDNhM2I0MFsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddWydwdXNoJ10oXzB4Mjg3MTVjKTt2YXIgXzB4MjMwZDIxLF8weDNhY2Y5MyxfMHg4MTUxYzIsXzB4NTQ2NTRkLF8weGVkOTNlPVtdLF8weDVkMzliND1bXSxfMHg0NjYzMDMsXzB4YTMyMTkxPXRoaXNbXzB4MjA3YjExKDB4MTVjKV0oXzB4Mjg3MTVjKSxfMHhkMmViZDk9XzB4YTMyMTkxPT09XzB4MjA3YjExKDB4MTFjKSxfMHg0ZTE0ZTQ9ITB4MSxfMHgzNjI2MDE9XzB4YTMyMTkxPT09XzB4MjA3YjExKDB4MTkwKSxfMHg1MzJhZGQ9dGhpc1tfMHgyMDdiMTEoMHgxNGIpXShfMHhhMzIxOTEpLF8weDhkZTIzYT10aGlzW18weDIwN2IxMSgweDExNyldKF8weGEzMjE5MSksXzB4MzlkNGI3PV8weDUzMmFkZHx8XzB4OGRlMjNhLF8weDQ2YTIyOD17fSxfMHg1Yjk3OTY9MHgwLF8weDIzZTgxZT0hMHgxLF8weDM0YzIwZSxfMHgzZTRmOTY9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDNhM2I0MFtfMHgyMDdiMTEoMHgxMTMpXSl7aWYoXzB4ZDJlYmQ5KXtpZihfMHgzYWNmOTM9XzB4Mjg3MTVjW18weDIwN2IxMSgweDEyNSldLF8weDNhY2Y5Mz5fMHgzYTNiNDBbXzB4MjA3YjExKDB4MWQyKV0pe2ZvcihfMHg4MTUxYzI9MHgwLF8weDU0NjU0ZD1fMHgzYTNiNDBbXzB4MjA3YjExKDB4MWQyKV0sXzB4MjMwZDIxPV8weDgxNTFjMjtfMHgyMzBkMjE8XzB4NTQ2NTRkO18weDIzMGQyMSsrKV8weDVkMzliNFtfMHgyMDdiMTEoMHgxY2IpXShfMHg5YmRmNjVbXzB4MjA3YjExKDB4MWYwKV0oXzB4ZWQ5M2UsXzB4Mjg3MTVjLF8weGEzMjE5MSxfMHgyMzBkMjEsXzB4M2EzYjQwKSk7XzB4NWVkMTk1W18weDIwN2IxMSgweDFlNCldPSEweDA7fWVsc2V7Zm9yKF8weDgxNTFjMj0weDAsXzB4NTQ2NTRkPV8weDNhY2Y5MyxfMHgyMzBkMjE9XzB4ODE1MWMyO18weDIzMGQyMTxfMHg1NDY1NGQ7XzB4MjMwZDIxKyspXzB4NWQzOWI0W18weDIwN2IxMSgweDFjYildKF8weDliZGY2NVtfMHgyMDdiMTEoMHgxZjApXShfMHhlZDkzZSxfMHgyODcxNWMsXzB4YTMyMTkxLF8weDIzMGQyMSxfMHgzYTNiNDApKTt9XzB4M2EzYjQwW18weDIwN2IxMSgweDE4OCldKz1fMHg1ZDM5YjRbXzB4MjA3YjExKDB4MTI1KV07fWlmKCEoXzB4YTMyMTkxPT09J251bGwnfHxfMHhhMzIxOTE9PT0ndW5kZWZpbmVkJykmJiFfMHg1MzJhZGQmJl8weGEzMjE5MSE9PSdTdHJpbmcnJiZfMHhhMzIxOTEhPT1fMHgyMDdiMTEoMHgxYzgpJiZfMHhhMzIxOTEhPT1fMHgyMDdiMTEoMHgxNjcpKXt2YXIgXzB4YmM4ZmFkPV8weDM1MGMxMFtfMHgyMDdiMTEoMHgxNTApXXx8XzB4M2EzYjQwW18weDIwN2IxMSgweDE1MCldO2lmKHRoaXNbXzB4MjA3YjExKDB4MTk4KV0oXzB4Mjg3MTVjKT8oXzB4MjMwZDIxPTB4MCxfMHgyODcxNWNbXzB4MjA3YjExKDB4MWFiKV0oZnVuY3Rpb24oXzB4NGZlYzhjKXt2YXIgXzB4MTdlOTJjPV8weDIwN2IxMTtpZihfMHg1Yjk3OTYrKyxfMHgzYTNiNDBbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHg1Yjk3OTY+XzB4YmM4ZmFkKXtfMHgyM2U4MWU9ITB4MDtyZXR1cm47fWlmKCFfMHgzYTNiNDBbXzB4MTdlOTJjKDB4MTdiKV0mJl8weDNhM2I0MFtfMHgxN2U5MmMoMHgxNmQpXSYmXzB4M2EzYjQwW18weDE3ZTkyYygweDE4OCldPl8weDNhM2I0MFsnYXV0b0V4cGFuZExpbWl0J10pe18weDIzZTgxZT0hMHgwO3JldHVybjt9XzB4NWQzOWI0W18weDE3ZTkyYygweDFjYildKF8weDliZGY2NVtfMHgxN2U5MmMoMHgxZjApXShfMHhlZDkzZSxfMHgyODcxNWMsXzB4MTdlOTJjKDB4MTYxKSxfMHgyMzBkMjErKyxfMHgzYTNiNDAsZnVuY3Rpb24oXzB4NWI5ZmNkKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NWI5ZmNkO307fShfMHg0ZmVjOGMpKSk7fSkpOnRoaXNbXzB4MjA3YjExKDB4MTJiKV0oXzB4Mjg3MTVjKSYmXzB4Mjg3MTVjWydmb3JFYWNoJ10oZnVuY3Rpb24oXzB4ZjU1NTZjLF8weDQwMmVhYSl7dmFyIF8weDIyZmM0OT1fMHgyMDdiMTE7aWYoXzB4NWI5Nzk2KyssXzB4M2EzYjQwWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4NWI5Nzk2Pl8weGJjOGZhZCl7XzB4MjNlODFlPSEweDA7cmV0dXJuO31pZighXzB4M2EzYjQwW18weDIyZmM0OSgweDE3YildJiZfMHgzYTNiNDBbXzB4MjJmYzQ5KDB4MTZkKV0mJl8weDNhM2I0MFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgzYTNiNDBbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgyM2U4MWU9ITB4MDtyZXR1cm47fXZhciBfMHgzMTYzMj1fMHg0MDJlYWFbXzB4MjJmYzQ5KDB4MTQyKV0oKTtfMHgzMTYzMltfMHgyMmZjNDkoMHgxMjUpXT4weDY0JiYoXzB4MzE2MzI9XzB4MzE2MzJbXzB4MjJmYzQ5KDB4MWM0KV0oMHgwLDB4NjQpK18weDIyZmM0OSgweDE2ZikpLF8weDVkMzliNFsncHVzaCddKF8weDliZGY2NVtfMHgyMmZjNDkoMHgxZjApXShfMHhlZDkzZSxfMHgyODcxNWMsXzB4MjJmYzQ5KDB4MTZhKSxfMHgzMTYzMixfMHgzYTNiNDAsZnVuY3Rpb24oXzB4MTFmYzI1KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MTFmYzI1O307fShfMHhmNTU1NmMpKSk7fSksIV8weDRlMTRlNCl7dHJ5e2ZvcihfMHg0NjYzMDMgaW4gXzB4Mjg3MTVjKWlmKCEoXzB4ZDJlYmQ5JiZfMHgzZTRmOTZbXzB4MjA3YjExKDB4MWI2KV0oXzB4NDY2MzAzKSkmJiF0aGlzW18weDIwN2IxMSgweDExZildKF8weDI4NzE1YyxfMHg0NjYzMDMsXzB4M2EzYjQwKSl7aWYoXzB4NWI5Nzk2KyssXzB4M2EzYjQwWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4NWI5Nzk2Pl8weGJjOGZhZCl7XzB4MjNlODFlPSEweDA7YnJlYWs7fWlmKCFfMHgzYTNiNDBbXzB4MjA3YjExKDB4MTdiKV0mJl8weDNhM2I0MFsnYXV0b0V4cGFuZCddJiZfMHgzYTNiNDBbXzB4MjA3YjExKDB4MTg4KV0+XzB4M2EzYjQwWydhdXRvRXhwYW5kTGltaXQnXSl7XzB4MjNlODFlPSEweDA7YnJlYWs7fV8weDVkMzliNFtfMHgyMDdiMTEoMHgxY2IpXShfMHg5YmRmNjVbXzB4MjA3YjExKDB4MWY3KV0oXzB4ZWQ5M2UsXzB4NDZhMjI4LF8weDI4NzE1YyxfMHhhMzIxOTEsXzB4NDY2MzAzLF8weDNhM2I0MCkpO319Y2F0Y2h7fWlmKF8weDQ2YTIyOFtfMHgyMDdiMTEoMHgxMjIpXT0hMHgwLF8weDM2MjYwMSYmKF8weDQ2YTIyOFtfMHgyMDdiMTEoMHgxODcpXT0hMHgwKSwhXzB4MjNlODFlKXt2YXIgXzB4NGVjY2VhPVtdW18weDIwN2IxMSgweDE4ZSldKHRoaXNbXzB4MjA3YjExKDB4MTVhKV0oXzB4Mjg3MTVjKSlbJ2NvbmNhdCddKHRoaXNbXzB4MjA3YjExKDB4MTkzKV0oXzB4Mjg3MTVjKSk7Zm9yKF8weDIzMGQyMT0weDAsXzB4M2FjZjkzPV8weDRlY2NlYVtfMHgyMDdiMTEoMHgxMjUpXTtfMHgyMzBkMjE8XzB4M2FjZjkzO18weDIzMGQyMSsrKWlmKF8weDQ2NjMwMz1fMHg0ZWNjZWFbXzB4MjMwZDIxXSwhKF8weGQyZWJkOSYmXzB4M2U0Zjk2W18weDIwN2IxMSgweDFiNildKF8weDQ2NjMwM1sndG9TdHJpbmcnXSgpKSkmJiF0aGlzW18weDIwN2IxMSgweDExZildKF8weDI4NzE1YyxfMHg0NjYzMDMsXzB4M2EzYjQwKSYmIV8weDQ2YTIyOFsnX3BfJytfMHg0NjYzMDNbXzB4MjA3YjExKDB4MTQyKV0oKV0pe2lmKF8weDViOTc5NisrLF8weDNhM2I0MFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDViOTc5Nj5fMHhiYzhmYWQpe18weDIzZTgxZT0hMHgwO2JyZWFrO31pZighXzB4M2EzYjQwW18weDIwN2IxMSgweDE3YildJiZfMHgzYTNiNDBbJ2F1dG9FeHBhbmQnXSYmXzB4M2EzYjQwW18weDIwN2IxMSgweDE4OCldPl8weDNhM2I0MFtfMHgyMDdiMTEoMHgxNjYpXSl7XzB4MjNlODFlPSEweDA7YnJlYWs7fV8weDVkMzliNFsncHVzaCddKF8weDliZGY2NVtfMHgyMDdiMTEoMHgxZjcpXShfMHhlZDkzZSxfMHg0NmEyMjgsXzB4Mjg3MTVjLF8weGEzMjE5MSxfMHg0NjYzMDMsXzB4M2EzYjQwKSk7fX19fX1pZihfMHg1ZWQxOTVbJ3R5cGUnXT1fMHhhMzIxOTEsXzB4MzlkNGI3PyhfMHg1ZWQxOTVbXzB4MjA3YjExKDB4MWUxKV09XzB4Mjg3MTVjWyd2YWx1ZU9mJ10oKSx0aGlzW18weDIwN2IxMSgweDFlNyldKF8weGEzMjE5MSxfMHg1ZWQxOTUsXzB4M2EzYjQwLF8weDM1MGMxMCkpOl8weGEzMjE5MT09PSdkYXRlJz9fMHg1ZWQxOTVbXzB4MjA3YjExKDB4MWUxKV09dGhpc1tfMHgyMDdiMTEoMHgxYmYpXVtfMHgyMDdiMTEoMHgxZTgpXShfMHgyODcxNWMpOl8weGEzMjE5MT09PSdiaWdpbnQnP18weDVlZDE5NVtfMHgyMDdiMTEoMHgxZTEpXT1fMHgyODcxNWNbXzB4MjA3YjExKDB4MTQyKV0oKTpfMHhhMzIxOTE9PT1fMHgyMDdiMTEoMHgxMmQpP18weDVlZDE5NVtfMHgyMDdiMTEoMHgxZTEpXT10aGlzW18weDIwN2IxMSgweDE0MSldW18weDIwN2IxMSgweDFlOCldKF8weDI4NzE1Yyk6XzB4YTMyMTkxPT09XzB4MjA3YjExKDB4MTZlKSYmdGhpc1tfMHgyMDdiMTEoMHgxYTUpXT9fMHg1ZWQxOTVbXzB4MjA3YjExKDB4MWUxKV09dGhpc1tfMHgyMDdiMTEoMHgxYTUpXVtfMHgyMDdiMTEoMHgxN2EpXVsndG9TdHJpbmcnXVtfMHgyMDdiMTEoMHgxZTgpXShfMHgyODcxNWMpOiFfMHgzYTNiNDBbJ2RlcHRoJ10mJiEoXzB4YTMyMTkxPT09XzB4MjA3YjExKDB4MTJhKXx8XzB4YTMyMTkxPT09XzB4MjA3YjExKDB4MWVlKSkmJihkZWxldGUgXzB4NWVkMTk1W18weDIwN2IxMSgweDFlMSldLF8weDVlZDE5NVsnY2FwcGVkJ109ITB4MCksXzB4MjNlODFlJiYoXzB4NWVkMTk1W18weDIwN2IxMSgweDEyMyldPSEweDApLF8weDM0YzIwZT1fMHgzYTNiNDBbXzB4MjA3YjExKDB4MWM2KV1bXzB4MjA3YjExKDB4MWM1KV0sXzB4M2EzYjQwWydub2RlJ11bXzB4MjA3YjExKDB4MWM1KV09XzB4NWVkMTk1LHRoaXNbXzB4MjA3YjExKDB4MTNlKV0oXzB4NWVkMTk1LF8weDNhM2I0MCksXzB4NWQzOWI0WydsZW5ndGgnXSl7Zm9yKF8weDIzMGQyMT0weDAsXzB4M2FjZjkzPV8weDVkMzliNFtfMHgyMDdiMTEoMHgxMjUpXTtfMHgyMzBkMjE8XzB4M2FjZjkzO18weDIzMGQyMSsrKV8weDVkMzliNFtfMHgyMzBkMjFdKF8weDIzMGQyMSk7fV8weGVkOTNlW18weDIwN2IxMSgweDEyNSldJiYoXzB4NWVkMTk1W18weDIwN2IxMSgweDE1MCldPV8weGVkOTNlKTt9Y2F0Y2goXzB4MzRmOTlkKXtfMHgxMTQ0MWYoXzB4MzRmOTlkLF8weDVlZDE5NSxfMHgzYTNiNDApO31yZXR1cm4gdGhpc1tfMHgyMDdiMTEoMHgxOTIpXShfMHgyODcxNWMsXzB4NWVkMTk1KSx0aGlzW18weDIwN2IxMSgweDFiNCldKF8weDVlZDE5NSxfMHgzYTNiNDApLF8weDNhM2I0MFtfMHgyMDdiMTEoMHgxYzYpXVtfMHgyMDdiMTEoMHgxYzUpXT1fMHgzNGMyMGUsXzB4M2EzYjQwW18weDIwN2IxMSgweDFkOCldLS0sXzB4M2EzYjQwW18weDIwN2IxMSgweDE2ZCldPV8weDI4ZTViOCxfMHgzYTNiNDBbXzB4MjA3YjExKDB4MTZkKV0mJl8weDNhM2I0MFtfMHgyMDdiMTEoMHgxOWQpXVtfMHgyMDdiMTEoMHgxYzEpXSgpLF8weDVlZDE5NTt9W18weDI2YWJkMigweDE5MyldKF8weDIxYjk3Yil7dmFyIF8weDVkNTE2ZD1fMHgyNmFiZDI7cmV0dXJuIE9iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10/T2JqZWN0W18weDVkNTE2ZCgweDE1ZSldKF8weDIxYjk3Yik6W107fVtfMHgyNmFiZDIoMHgxOTgpXShfMHg1NDQzODkpe3ZhciBfMHgyM2MzMmE9XzB4MjZhYmQyO3JldHVybiEhKF8weDU0NDM4OSYmXzB4NzI3NGE2W18weDIzYzMyYSgweDE2MSldJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg1NDQzODkpPT09XzB4MjNjMzJhKDB4MTcyKSYmXzB4NTQ0Mzg5W18weDIzYzMyYSgweDFhYildKTt9W18weDI2YWJkMigweDExZildKF8weDQ2N2ZlMixfMHg0MWNjZjQsXzB4NGZmNzlmKXt2YXIgXzB4MTRhZThiPV8weDI2YWJkMjtyZXR1cm4gXzB4NGZmNzlmW18weDE0YWU4YigweDEyNildP3R5cGVvZiBfMHg0NjdmZTJbXzB4NDFjY2Y0XT09XzB4MTRhZThiKDB4MTkwKTohMHgxO31bXzB4MjZhYmQyKDB4MTVjKV0oXzB4NTNhMWIwKXt2YXIgXzB4MTdlYmQ1PV8weDI2YWJkMixfMHg0OGMzZDg9Jyc7cmV0dXJuIF8weDQ4YzNkOD10eXBlb2YgXzB4NTNhMWIwLF8weDQ4YzNkOD09PSdvYmplY3QnP3RoaXNbXzB4MTdlYmQ1KDB4MWUzKV0oXzB4NTNhMWIwKT09PV8weDE3ZWJkNSgweDE1Nik/XzB4NDhjM2Q4PV8weDE3ZWJkNSgweDExYyk6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4NTNhMWIwKT09PV8weDE3ZWJkNSgweDE3Yyk/XzB4NDhjM2Q4PV8weDE3ZWJkNSgweDE2MCk6dGhpc1tfMHgxN2ViZDUoMHgxZTMpXShfMHg1M2ExYjApPT09XzB4MTdlYmQ1KDB4MWE3KT9fMHg0OGMzZDg9XzB4MTdlYmQ1KDB4MTY3KTpfMHg1M2ExYjA9PT1udWxsP18weDQ4YzNkOD1fMHgxN2ViZDUoMHgxMmEpOl8weDUzYTFiMFtfMHgxN2ViZDUoMHgxM2YpXSYmKF8weDQ4YzNkOD1fMHg1M2ExYjBbXzB4MTdlYmQ1KDB4MTNmKV1bXzB4MTdlYmQ1KDB4MWJkKV18fF8weDQ4YzNkOCk6XzB4NDhjM2Q4PT09J3VuZGVmaW5lZCcmJnRoaXNbXzB4MTdlYmQ1KDB4MTY1KV0mJl8weDUzYTFiMCBpbnN0YW5jZW9mIHRoaXNbXzB4MTdlYmQ1KDB4MTY1KV0mJihfMHg0OGMzZDg9XzB4MTdlYmQ1KDB4MTFiKSksXzB4NDhjM2Q4O31bJ19vYmplY3RUb1N0cmluZyddKF8weDdjMTgwZSl7dmFyIF8weDU3ZjEyND1fMHgyNmFiZDI7cmV0dXJuIE9iamVjdFsncHJvdG90eXBlJ11bXzB4NTdmMTI0KDB4MTQyKV1bXzB4NTdmMTI0KDB4MWU4KV0oXzB4N2MxODBlKTt9W18weDI2YWJkMigweDE0YildKF8weDU2MGUzYil7dmFyIF8weDU2ZWI3OD1fMHgyNmFiZDI7cmV0dXJuIF8weDU2MGUzYj09PV8weDU2ZWI3OCgweDE5YSl8fF8weDU2MGUzYj09PSdzdHJpbmcnfHxfMHg1NjBlM2I9PT1fMHg1NmViNzgoMHgxY2QpO31bXzB4MjZhYmQyKDB4MTE3KV0oXzB4MzkyMGIwKXt2YXIgXzB4MWUyNGQzPV8weDI2YWJkMjtyZXR1cm4gXzB4MzkyMGIwPT09XzB4MWUyNGQzKDB4MTU4KXx8XzB4MzkyMGIwPT09XzB4MWUyNGQzKDB4MTY4KXx8XzB4MzkyMGIwPT09XzB4MWUyNGQzKDB4MWIwKTt9W18weDI2YWJkMigweDFmMCldKF8weDRhMGM5ZSxfMHgyZGRhYTUsXzB4MTVkZGUwLF8weDI1YTZhMSxfMHgyOWNiZDYsXzB4MTQwZDJjKXt2YXIgXzB4MjUyYzI5PXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDIzMDIwMSl7dmFyIF8weDIzMDhhMj1fMHgyMmYwLF8weDEwMzFhOD1fMHgyOWNiZDZbXzB4MjMwOGEyKDB4MWM2KV1bXzB4MjMwOGEyKDB4MWM1KV0sXzB4NWVmYTBiPV8weDI5Y2JkNltfMHgyMzA4YTIoMHgxYzYpXVsnaW5kZXgnXSxfMHhmMWJmMD1fMHgyOWNiZDZbXzB4MjMwOGEyKDB4MWM2KV1bXzB4MjMwOGEyKDB4MWUyKV07XzB4MjljYmQ2W18weDIzMDhhMigweDFjNildW18weDIzMDhhMigweDFlMildPV8weDEwMzFhOCxfMHgyOWNiZDZbXzB4MjMwOGEyKDB4MWM2KV1bXzB4MjMwOGEyKDB4MWYxKV09dHlwZW9mIF8weDI1YTZhMT09J251bWJlcic/XzB4MjVhNmExOl8weDIzMDIwMSxfMHg0YTBjOWVbXzB4MjMwOGEyKDB4MWNiKV0oXzB4MjUyYzI5W18weDIzMDhhMigweDFlOSldKF8weDJkZGFhNSxfMHgxNWRkZTAsXzB4MjVhNmExLF8weDI5Y2JkNixfMHgxNDBkMmMpKSxfMHgyOWNiZDZbXzB4MjMwOGEyKDB4MWM2KV1bXzB4MjMwOGEyKDB4MWUyKV09XzB4ZjFiZjAsXzB4MjljYmQ2W18weDIzMDhhMigweDFjNildW18weDIzMDhhMigweDFmMSldPV8weDVlZmEwYjt9O31bXzB4MjZhYmQyKDB4MWY3KV0oXzB4NDBlZGIzLF8weDIwOWQxNSxfMHhjYmMzOWQsXzB4NGM4ZGQ0LF8weDNiZDNmMCxfMHgyZDQ0MzUsXzB4M2Q4ZjBiKXt2YXIgXzB4NDI4NGU0PV8weDI2YWJkMixfMHgxZTg1NmI9dGhpcztyZXR1cm4gXzB4MjA5ZDE1W18weDQyODRlNCgweDE1OSkrXzB4M2JkM2YwW18weDQyODRlNCgweDE0MildKCldPSEweDAsZnVuY3Rpb24oXzB4M2U5N2Q3KXt2YXIgXzB4Y2QzZTk1PV8weDQyODRlNCxfMHgxY2M3YzY9XzB4MmQ0NDM1W18weGNkM2U5NSgweDFjNildW18weGNkM2U5NSgweDFjNSldLF8weDUyNDQ4OT1fMHgyZDQ0MzVbJ25vZGUnXVtfMHhjZDNlOTUoMHgxZjEpXSxfMHgxNGU4ZGI9XzB4MmQ0NDM1W18weGNkM2U5NSgweDFjNildW18weGNkM2U5NSgweDFlMildO18weDJkNDQzNVtfMHhjZDNlOTUoMHgxYzYpXVtfMHhjZDNlOTUoMHgxZTIpXT1fMHgxY2M3YzYsXzB4MmQ0NDM1W18weGNkM2U5NSgweDFjNildWydpbmRleCddPV8weDNlOTdkNyxfMHg0MGVkYjNbJ3B1c2gnXShfMHgxZTg1NmJbXzB4Y2QzZTk1KDB4MWU5KV0oXzB4Y2JjMzlkLF8weDRjOGRkNCxfMHgzYmQzZjAsXzB4MmQ0NDM1LF8weDNkOGYwYikpLF8weDJkNDQzNVsnbm9kZSddW18weGNkM2U5NSgweDFlMildPV8weDE0ZThkYixfMHgyZDQ0MzVbJ25vZGUnXVsnaW5kZXgnXT1fMHg1MjQ0ODk7fTt9W18weDI2YWJkMigweDFlOSldKF8weDQwNTczNSxfMHgzZmM1MDUsXzB4MzljYTc1LF8weDRjMTRjNCxfMHgyOTEyZGIpe3ZhciBfMHg0YTVkNzc9XzB4MjZhYmQyLF8weDdhNWU1Nz10aGlzO18weDI5MTJkYnx8KF8weDI5MTJkYj1mdW5jdGlvbihfMHg0ZWE4MDIsXzB4NjliM2MyKXtyZXR1cm4gXzB4NGVhODAyW18weDY5YjNjMl07fSk7dmFyIF8weDU2MTY2MD1fMHgzOWNhNzVbXzB4NGE1ZDc3KDB4MTQyKV0oKSxfMHg0OWNiNWI9XzB4NGMxNGM0W18weDRhNWQ3NygweDEyMCldfHx7fSxfMHg3MjRiNDI9XzB4NGMxNGM0WydkZXB0aCddLF8weDRmNDljMj1fMHg0YzE0YzRbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXTt0cnl7dmFyIF8weDRhMTU2ND10aGlzW18weDRhNWQ3NygweDEyYildKF8weDQwNTczNSksXzB4MzExYTBhPV8weDU2MTY2MDtfMHg0YTE1NjQmJl8weDMxMWEwYVsweDBdPT09J1xcXFx4MjcnJiYoXzB4MzExYTBhPV8weDMxMWEwYVtfMHg0YTVkNzcoMHgxZjUpXSgweDEsXzB4MzExYTBhW18weDRhNWQ3NygweDEyNSldLTB4MikpO3ZhciBfMHg0Yjk0OTY9XzB4NGMxNGM0WydleHByZXNzaW9uc1RvRXZhbHVhdGUnXT1fMHg0OWNiNWJbJ19wXycrXzB4MzExYTBhXTtfMHg0Yjk0OTYmJihfMHg0YzE0YzRbJ2RlcHRoJ109XzB4NGMxNGM0W18weDRhNWQ3NygweDExMyldKzB4MSksXzB4NGMxNGM0Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109ISFfMHg0Yjk0OTY7dmFyIF8weDNjYjg0Zj10eXBlb2YgXzB4MzljYTc1PT1fMHg0YTVkNzcoMHgxNmUpLF8weDIyYWZhNT17J25hbWUnOl8weDNjYjg0Znx8XzB4NGExNTY0P18weDU2MTY2MDp0aGlzW18weDRhNWQ3NygweDEyNyldKF8weDU2MTY2MCl9O2lmKF8weDNjYjg0ZiYmKF8weDIyYWZhNVtfMHg0YTVkNzcoMHgxNmUpXT0hMHgwKSwhKF8weDNmYzUwNT09PSdhcnJheSd8fF8weDNmYzUwNT09PV8weDRhNWQ3NygweDE0OCkpKXt2YXIgXzB4ZTViZDdhPXRoaXNbXzB4NGE1ZDc3KDB4MTU1KV0oXzB4NDA1NzM1LF8weDM5Y2E3NSk7aWYoXzB4ZTViZDdhJiYoXzB4ZTViZDdhW18weDRhNWQ3NygweDE2OSldJiYoXzB4MjJhZmE1W18weDRhNWQ3NygweDE4YyldPSEweDApLF8weGU1YmQ3YVtfMHg0YTVkNzcoMHgxMzIpXSYmIV8weDRiOTQ5NiYmIV8weDRjMTRjNFtfMHg0YTVkNzcoMHgxZWYpXSkpcmV0dXJuIF8weDIyYWZhNVtfMHg0YTVkNzcoMHgxMTApXT0hMHgwLHRoaXNbXzB4NGE1ZDc3KDB4MWIxKV0oXzB4MjJhZmE1LF8weDRjMTRjNCksXzB4MjJhZmE1O312YXIgXzB4MjJlNjBjO3RyeXtfMHgyMmU2MGM9XzB4MjkxMmRiKF8weDQwNTczNSxfMHgzOWNhNzUpO31jYXRjaChfMHgzMDljYjQpe3JldHVybiBfMHgyMmFmYTU9eyduYW1lJzpfMHg1NjE2NjAsJ3R5cGUnOl8weDRhNWQ3NygweDFlNiksJ2Vycm9yJzpfMHgzMDljYjRbXzB4NGE1ZDc3KDB4MWY2KV19LHRoaXNbXzB4NGE1ZDc3KDB4MWIxKV0oXzB4MjJhZmE1LF8weDRjMTRjNCksXzB4MjJhZmE1O312YXIgXzB4Mzk0YmNlPXRoaXNbJ190eXBlJ10oXzB4MjJlNjBjKSxfMHgzODRiN2U9dGhpc1snX2lzUHJpbWl0aXZlVHlwZSddKF8weDM5NGJjZSk7aWYoXzB4MjJhZmE1W18weDRhNWQ3NygweDFkNildPV8weDM5NGJjZSxfMHgzODRiN2UpdGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDIyYWZhNSxfMHg0YzE0YzQsXzB4MjJlNjBjLGZ1bmN0aW9uKCl7dmFyIF8weGI4NGVlZj1fMHg0YTVkNzc7XzB4MjJhZmE1W18weGI4NGVlZigweDFlMSldPV8weDIyZTYwY1tfMHhiODRlZWYoMHgxMzEpXSgpLCFfMHg0Yjk0OTYmJl8weDdhNWU1N1tfMHhiODRlZWYoMHgxZTcpXShfMHgzOTRiY2UsXzB4MjJhZmE1LF8weDRjMTRjNCx7fSk7fSk7ZWxzZXt2YXIgXzB4MjhiYTU5PV8weDRjMTRjNFsnYXV0b0V4cGFuZCddJiZfMHg0YzE0YzRbJ2xldmVsJ108XzB4NGMxNGM0W18weDRhNWQ3NygweDE4ZildJiZfMHg0YzE0YzRbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXVsnaW5kZXhPZiddKF8weDIyZTYwYyk8MHgwJiZfMHgzOTRiY2UhPT0nZnVuY3Rpb24nJiZfMHg0YzE0YzRbXzB4NGE1ZDc3KDB4MTg4KV08XzB4NGMxNGM0W18weDRhNWQ3NygweDE2NildO18weDI4YmE1OXx8XzB4NGMxNGM0W18weDRhNWQ3NygweDFkOCldPF8weDcyNGI0Mnx8XzB4NGI5NDk2Pyh0aGlzW18weDRhNWQ3NygweDFiNyldKF8weDIyYWZhNSxfMHgyMmU2MGMsXzB4NGMxNGM0LF8weDRiOTQ5Nnx8e30pLHRoaXNbXzB4NGE1ZDc3KDB4MTkyKV0oXzB4MjJlNjBjLF8weDIyYWZhNSkpOnRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgyMmFmYTUsXzB4NGMxNGM0LF8weDIyZTYwYyxmdW5jdGlvbigpe3ZhciBfMHg3N2QyNz1fMHg0YTVkNzc7XzB4Mzk0YmNlPT09XzB4NzdkMjcoMHgxMmEpfHxfMHgzOTRiY2U9PT0ndW5kZWZpbmVkJ3x8KGRlbGV0ZSBfMHgyMmFmYTVbXzB4NzdkMjcoMHgxZTEpXSxfMHgyMmFmYTVbXzB4NzdkMjcoMHgxZTUpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDIyYWZhNTt9ZmluYWxseXtfMHg0YzE0YzRbXzB4NGE1ZDc3KDB4MTIwKV09XzB4NDljYjViLF8weDRjMTRjNFtfMHg0YTVkNzcoMHgxMTMpXT1fMHg3MjRiNDIsXzB4NGMxNGM0W18weDRhNWQ3NygweDE3YildPV8weDRmNDljMjt9fVsnX2NhcElmU3RyaW5nJ10oXzB4ZTg5NGZkLF8weDMwN2I5YixfMHg0NWY5NWMsXzB4ZmM5ZTJiKXt2YXIgXzB4NDdmNmI4PV8weDI2YWJkMixfMHgzYzZiNWQ9XzB4ZmM5ZTJiW18weDQ3ZjZiOCgweDFiYyldfHxfMHg0NWY5NWNbXzB4NDdmNmI4KDB4MWJjKV07aWYoKF8weGU4OTRmZD09PV8weDQ3ZjZiOCgweDEwZSl8fF8weGU4OTRmZD09PV8weDQ3ZjZiOCgweDE2OCkpJiZfMHgzMDdiOWJbJ3ZhbHVlJ10pe2xldCBfMHgxMTg0YzI9XzB4MzA3YjliW18weDQ3ZjZiOCgweDFlMSldW18weDQ3ZjZiOCgweDEyNSldO18weDQ1Zjk1Y1tfMHg0N2Y2YjgoMHgxYjUpXSs9XzB4MTE4NGMyLF8weDQ1Zjk1Y1tfMHg0N2Y2YjgoMHgxYjUpXT5fMHg0NWY5NWNbXzB4NDdmNmI4KDB4MTc3KV0/KF8weDMwN2I5YltfMHg0N2Y2YjgoMHgxZTUpXT0nJyxkZWxldGUgXzB4MzA3YjliWyd2YWx1ZSddKTpfMHgxMTg0YzI+XzB4M2M2YjVkJiYoXzB4MzA3YjliW18weDQ3ZjZiOCgweDFlNSldPV8weDMwN2I5YltfMHg0N2Y2YjgoMHgxZTEpXVsnc3Vic3RyJ10oMHgwLF8weDNjNmI1ZCksZGVsZXRlIF8weDMwN2I5YltfMHg0N2Y2YjgoMHgxZTEpXSk7fX1bXzB4MjZhYmQyKDB4MTJiKV0oXzB4MzY4ZGI0KXt2YXIgXzB4M2RmYjA2PV8weDI2YWJkMjtyZXR1cm4hIShfMHgzNjhkYjQmJl8weDcyNzRhNltfMHgzZGZiMDYoMHgxNmEpXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MzY4ZGI0KT09PV8weDNkZmIwNigweDFkNCkmJl8weDM2OGRiNFtfMHgzZGZiMDYoMHgxYWIpXSk7fVtfMHgyNmFiZDIoMHgxMjcpXShfMHgxMjFkMjUpe3ZhciBfMHg0NGNiOTI9XzB4MjZhYmQyO2lmKF8weDEyMWQyNVtfMHg0NGNiOTIoMHgxM2MpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4MTIxZDI1O3ZhciBfMHg1ZjBkZmU7dHJ5e18weDVmMGRmZT1KU09OWydzdHJpbmdpZnknXSgnJytfMHgxMjFkMjUpO31jYXRjaHtfMHg1ZjBkZmU9J1xcXFx4MjInK3RoaXNbXzB4NDRjYjkyKDB4MWUzKV0oXzB4MTIxZDI1KSsnXFxcXHgyMic7fXJldHVybiBfMHg1ZjBkZmVbXzB4NDRjYjkyKDB4MTNjKV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHg1ZjBkZmU9XzB4NWYwZGZlW18weDQ0Y2I5MigweDFmNSldKDB4MSxfMHg1ZjBkZmVbXzB4NDRjYjkyKDB4MTI1KV0tMHgyKTpfMHg1ZjBkZmU9XzB4NWYwZGZlW18weDQ0Y2I5MigweDFjYSldKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4NDRjYjkyKDB4MWNhKV0oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbJ3JlcGxhY2UnXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4NWYwZGZlO31bXzB4MjZhYmQyKDB4MWIxKV0oXzB4M2RhMmI3LF8weDQ5OGVjYyxfMHg1NzM2YjYsXzB4NTI1YTc1KXt2YXIgXzB4NGFlYWE2PV8weDI2YWJkMjt0aGlzW18weDRhZWFhNigweDEzZSldKF8weDNkYTJiNyxfMHg0OThlY2MpLF8weDUyNWE3NSYmXzB4NTI1YTc1KCksdGhpc1tfMHg0YWVhYTYoMHgxOTIpXShfMHg1NzM2YjYsXzB4M2RhMmI3KSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgzZGEyYjcsXzB4NDk4ZWNjKTt9W18weDI2YWJkMigweDEzZSldKF8weGE2MTE0YyxfMHgyZTEwNDIpe3ZhciBfMHg0NGYyMGE9XzB4MjZhYmQyO3RoaXNbXzB4NDRmMjBhKDB4MWQwKV0oXzB4YTYxMTRjLF8weDJlMTA0MiksdGhpc1tfMHg0NGYyMGEoMHgxYTgpXShfMHhhNjExNGMsXzB4MmUxMDQyKSx0aGlzW18weDQ0ZjIwYSgweDFhZildKF8weGE2MTE0YyxfMHgyZTEwNDIpLHRoaXNbXzB4NDRmMjBhKDB4MWFhKV0oXzB4YTYxMTRjLF8weDJlMTA0Mik7fVtfMHgyNmFiZDIoMHgxZDApXShfMHg1YWFlNTksXzB4NTI4MWJjKXt9W18weDI2YWJkMigweDFhOCldKF8weDJjNTBhMSxfMHgxYTg2MWUpe31bXzB4MjZhYmQyKDB4MTMzKV0oXzB4MTdiNDI3LF8weDNjYmE1OCl7fVsnX2lzVW5kZWZpbmVkJ10oXzB4NWJkZjMzKXtyZXR1cm4gXzB4NWJkZjMzPT09dGhpc1snX3VuZGVmaW5lZCddO31bXzB4MjZhYmQyKDB4MWI0KV0oXzB4MzE1NzQ3LF8weDUwYTYyMCl7dmFyIF8weDk2ZWNmYj1fMHgyNmFiZDI7dGhpc1tfMHg5NmVjZmIoMHgxMzMpXShfMHgzMTU3NDcsXzB4NTBhNjIwKSx0aGlzW18weDk2ZWNmYigweDFkYSldKF8weDMxNTc0NyksXzB4NTBhNjIwW18weDk2ZWNmYigweDEwZCldJiZ0aGlzW18weDk2ZWNmYigweDFhNCldKF8weDMxNTc0NyksdGhpc1tfMHg5NmVjZmIoMHgxZDkpXShfMHgzMTU3NDcsXzB4NTBhNjIwKSx0aGlzW18weDk2ZWNmYigweDExOCldKF8weDMxNTc0NyxfMHg1MGE2MjApLHRoaXNbJ19jbGVhbk5vZGUnXShfMHgzMTU3NDcpO31bXzB4MjZhYmQyKDB4MTkyKV0oXzB4YWE0YmY1LF8weDJlZjZkYSl7dmFyIF8weDM1NDU0ZD1fMHgyNmFiZDI7bGV0IF8weDMyZTFhNjt0cnl7XzB4NzI3NGE2Wydjb25zb2xlJ10mJihfMHgzMmUxYTY9XzB4NzI3NGE2W18weDM1NDU0ZCgweDFhMCldWydlcnJvciddLF8weDcyNzRhNltfMHgzNTQ1NGQoMHgxYTApXVtfMHgzNTQ1NGQoMHgxNzMpXT1mdW5jdGlvbigpe30pLF8weGFhNGJmNSYmdHlwZW9mIF8weGFhNGJmNVtfMHgzNTQ1NGQoMHgxMjUpXT09XzB4MzU0NTRkKDB4MWNkKSYmKF8weDJlZjZkYVsnbGVuZ3RoJ109XzB4YWE0YmY1W18weDM1NDU0ZCgweDEyNSldKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4MzJlMWE2JiYoXzB4NzI3NGE2Wydjb25zb2xlJ11bXzB4MzU0NTRkKDB4MTczKV09XzB4MzJlMWE2KTt9aWYoXzB4MmVmNmRhWyd0eXBlJ109PT0nbnVtYmVyJ3x8XzB4MmVmNmRhW18weDM1NDU0ZCgweDFkNildPT09XzB4MzU0NTRkKDB4MWIwKSl7aWYoaXNOYU4oXzB4MmVmNmRhW18weDM1NDU0ZCgweDFlMSldKSlfMHgyZWY2ZGFbXzB4MzU0NTRkKDB4MTE5KV09ITB4MCxkZWxldGUgXzB4MmVmNmRhW18weDM1NDU0ZCgweDFlMSldO2Vsc2Ugc3dpdGNoKF8weDJlZjZkYVtfMHgzNTQ1NGQoMHgxZTEpXSl7Y2FzZSBOdW1iZXJbXzB4MzU0NTRkKDB4MWJlKV06XzB4MmVmNmRhW18weDM1NDU0ZCgweDFjMCldPSEweDAsZGVsZXRlIF8weDJlZjZkYVsndmFsdWUnXTticmVhaztjYXNlIE51bWJlcltfMHgzNTQ1NGQoMHgxMzgpXTpfMHgyZWY2ZGFbJ25lZ2F0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHgyZWY2ZGFbXzB4MzU0NTRkKDB4MWUxKV07YnJlYWs7Y2FzZSAweDA6dGhpc1snX2lzTmVnYXRpdmVaZXJvJ10oXzB4MmVmNmRhW18weDM1NDU0ZCgweDFlMSldKSYmKF8weDJlZjZkYVtfMHgzNTQ1NGQoMHgxMzYpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4MmVmNmRhW18weDM1NDU0ZCgweDFkNildPT09XzB4MzU0NTRkKDB4MTkwKSYmdHlwZW9mIF8weGFhNGJmNVsnbmFtZSddPT1fMHgzNTQ1NGQoMHgxMGUpJiZfMHhhYTRiZjVbXzB4MzU0NTRkKDB4MWJkKV0mJl8weDJlZjZkYVtfMHgzNTQ1NGQoMHgxYmQpXSYmXzB4YWE0YmY1W18weDM1NDU0ZCgweDFiZCldIT09XzB4MmVmNmRhW18weDM1NDU0ZCgweDFiZCldJiYoXzB4MmVmNmRhW18weDM1NDU0ZCgweDE1ZCldPV8weGFhNGJmNVsnbmFtZSddKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHg0OGIwMWIpe3JldHVybiAweDEvXzB4NDhiMDFiPT09TnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddO31bXzB4MjZhYmQyKDB4MWE0KV0oXzB4M2Q2MmUxKXt2YXIgXzB4MTNiZDAwPV8weDI2YWJkMjshXzB4M2Q2MmUxW18weDEzYmQwMCgweDE1MCldfHwhXzB4M2Q2MmUxW18weDEzYmQwMCgweDE1MCldWydsZW5ndGgnXXx8XzB4M2Q2MmUxW18weDEzYmQwMCgweDFkNildPT09XzB4MTNiZDAwKDB4MTFjKXx8XzB4M2Q2MmUxW18weDEzYmQwMCgweDFkNildPT09XzB4MTNiZDAwKDB4MTZhKXx8XzB4M2Q2MmUxW18weDEzYmQwMCgweDFkNildPT09XzB4MTNiZDAwKDB4MTYxKXx8XzB4M2Q2MmUxW18weDEzYmQwMCgweDE1MCldWydzb3J0J10oZnVuY3Rpb24oXzB4NWMyNDJmLF8weDUzYThlOCl7dmFyIF8weDJhOGQyZj1fMHgxM2JkMDAsXzB4M2Q5MjAzPV8weDVjMjQyZlsnbmFtZSddW18weDJhOGQyZigweDE4YSldKCksXzB4NGE0NjVlPV8weDUzYThlOFtfMHgyYThkMmYoMHgxYmQpXVtfMHgyYThkMmYoMHgxOGEpXSgpO3JldHVybiBfMHgzZDkyMDM8XzB4NGE0NjVlPy0weDE6XzB4M2Q5MjAzPl8weDRhNDY1ZT8weDE6MHgwO30pO31bXzB4MjZhYmQyKDB4MWQ5KV0oXzB4MjJlNjMxLF8weDM1NzI5Myl7dmFyIF8weDY3NDJiZj1fMHgyNmFiZDI7aWYoIShfMHgzNTcyOTNbXzB4Njc0MmJmKDB4MTI2KV18fCFfMHgyMmU2MzFbJ3Byb3BzJ118fCFfMHgyMmU2MzFbXzB4Njc0MmJmKDB4MTUwKV1bXzB4Njc0MmJmKDB4MTI1KV0pKXtmb3IodmFyIF8weDFmNzQyNj1bXSxfMHg1NGE5OTM9W10sXzB4MmIwMjg4PTB4MCxfMHgzZjQ4NTA9XzB4MjJlNjMxW18weDY3NDJiZigweDE1MCldW18weDY3NDJiZigweDEyNSldO18weDJiMDI4ODxfMHgzZjQ4NTA7XzB4MmIwMjg4Kyspe3ZhciBfMHg0MzBiYzQ9XzB4MjJlNjMxW18weDY3NDJiZigweDE1MCldW18weDJiMDI4OF07XzB4NDMwYmM0W18weDY3NDJiZigweDFkNildPT09XzB4Njc0MmJmKDB4MTkwKT9fMHgxZjc0MjZbXzB4Njc0MmJmKDB4MWNiKV0oXzB4NDMwYmM0KTpfMHg1NGE5OTNbXzB4Njc0MmJmKDB4MWNiKV0oXzB4NDMwYmM0KTt9aWYoISghXzB4NTRhOTkzW18weDY3NDJiZigweDEyNSldfHxfMHgxZjc0MjZbXzB4Njc0MmJmKDB4MTI1KV08PTB4MSkpe18weDIyZTYzMVtfMHg2NzQyYmYoMHgxNTApXT1fMHg1NGE5OTM7dmFyIF8weDQ5NzA3YT17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHgxZjc0MjZ9O3RoaXNbXzB4Njc0MmJmKDB4MWQwKV0oXzB4NDk3MDdhLF8weDM1NzI5MyksdGhpc1tfMHg2NzQyYmYoMHgxMzMpXShfMHg0OTcwN2EsXzB4MzU3MjkzKSx0aGlzWydfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZSddKF8weDQ5NzA3YSksdGhpc1tfMHg2NzQyYmYoMHgxYWEpXShfMHg0OTcwN2EsXzB4MzU3MjkzKSxfMHg0OTcwN2FbJ2lkJ10rPSdcXFxceDIwZicsXzB4MjJlNjMxWydwcm9wcyddWyd1bnNoaWZ0J10oXzB4NDk3MDdhKTt9fX1bXzB4MjZhYmQyKDB4MTE4KV0oXzB4NWQxN2QxLF8weDhmMTM3Nil7fVtfMHgyNmFiZDIoMHgxZGEpXShfMHgxZjEyMzkpe31bXzB4MjZhYmQyKDB4MTNiKV0oXzB4NTU4ZDkyKXt2YXIgXzB4NDlhMzVlPV8weDI2YWJkMjtyZXR1cm4gQXJyYXlbJ2lzQXJyYXknXShfMHg1NThkOTIpfHx0eXBlb2YgXzB4NTU4ZDkyPT1fMHg0OWEzNWUoMHgxNDYpJiZ0aGlzW18weDQ5YTM1ZSgweDFlMyldKF8weDU1OGQ5Mik9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nO31bXzB4MjZhYmQyKDB4MWFhKV0oXzB4MTBlZTcyLF8weDRlYmJmMil7fVtfMHgyNmFiZDIoMHgxY2YpXShfMHg1MDU5ODUpe3ZhciBfMHgxNjQwM2U9XzB4MjZhYmQyO2RlbGV0ZSBfMHg1MDU5ODVbJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCddLGRlbGV0ZSBfMHg1MDU5ODVbJ19oYXNTZXRPbkl0c1BhdGgnXSxkZWxldGUgXzB4NTA1OTg1W18weDE2NDAzZSgweDE4MCldO31bXzB4MjZhYmQyKDB4MWFmKV0oXzB4MzE2MmU5LF8weDJhYWYwMil7fVtfMHgyNmFiZDIoMHgxMmMpXShfMHhiMzg1YmYpe3ZhciBfMHg0NzkxZGY9XzB4MjZhYmQyO3JldHVybiBfMHhiMzg1YmY/XzB4YjM4NWJmWydtYXRjaCddKHRoaXNbXzB4NDc5MWRmKDB4MThiKV0pPydbJytfMHhiMzg1YmYrJ10nOl8weGIzODViZltfMHg0NzkxZGYoMHgxM2MpXSh0aGlzW18weDQ3OTFkZigweDE3ZildKT8nLicrXzB4YjM4NWJmOl8weGIzODViZltfMHg0NzkxZGYoMHgxM2MpXSh0aGlzWydfcXVvdGVkUmVnRXhwJ10pPydbJytfMHhiMzg1YmYrJ10nOidbXFxcXHgyNycrXzB4YjM4NWJmKydcXFxceDI3XSc6Jyc7fX1sZXQgXzB4MjEzMWRhPW5ldyBfMHgzNDUxZjEoKTtmdW5jdGlvbiBfMHgxMjc2YzMoXzB4M2Y2NjA0LF8weDRiOWUzMyxfMHhhNTZkOTAsXzB4NDhmMDMyLF8weDVkZWMxOCxfMHg0OWIwMGIpe3ZhciBfMHgzMjFmNjg9XzB4MjZhYmQyO2xldCBfMHg0ZDU2ZTUsXzB4M2FkMWFiO3RyeXtfMHgzYWQxYWI9XzB4NWE2MDQ1KCksXzB4NGQ1NmU1PV8weDUzNzgyZltfMHg0YjllMzNdLCFfMHg0ZDU2ZTV8fF8weDNhZDFhYi1fMHg0ZDU2ZTVbJ3RzJ10+MHgxZjQmJl8weDRkNTZlNVtfMHgzMjFmNjgoMHgxZjQpXSYmXzB4NGQ1NmU1W18weDMyMWY2OCgweDFjZSldL18weDRkNTZlNVsnY291bnQnXTwweDY0PyhfMHg1Mzc4MmZbXzB4NGI5ZTMzXT1fMHg0ZDU2ZTU9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHgzYWQxYWJ9LF8weDUzNzgyZltfMHgzMjFmNjgoMHgxYWQpXT17fSk6XzB4M2FkMWFiLV8weDUzNzgyZltfMHgzMjFmNjgoMHgxYWQpXVsndHMnXT4weDMyJiZfMHg1Mzc4MmZbXzB4MzIxZjY4KDB4MWFkKV1bXzB4MzIxZjY4KDB4MWY0KV0mJl8weDUzNzgyZltfMHgzMjFmNjgoMHgxYWQpXVtfMHgzMjFmNjgoMHgxY2UpXS9fMHg1Mzc4MmZbJ2hpdHMnXVsnY291bnQnXTwweDY0JiYoXzB4NTM3ODJmW18weDMyMWY2OCgweDFhZCldPXt9KTtsZXQgXzB4NDA2ZjI1PVtdLF8weDEzNDk1Yj1fMHg0ZDU2ZTVbXzB4MzIxZjY4KDB4MTg0KV18fF8weDUzNzgyZltfMHgzMjFmNjgoMHgxYWQpXVtfMHgzMjFmNjgoMHgxODQpXT9fMHg5OGQ0M2U6XzB4NTk2ZmYwLF8weDVlMTYzYz1fMHgyYWYxZDI9Pnt2YXIgXzB4MTBmY2U3PV8weDMyMWY2ODtsZXQgXzB4NDIzNmJjPXt9O3JldHVybiBfMHg0MjM2YmNbXzB4MTBmY2U3KDB4MTUwKV09XzB4MmFmMWQyW18weDEwZmNlNygweDE1MCldLF8weDQyMzZiY1tfMHgxMGZjZTcoMHgxZDIpXT1fMHgyYWYxZDJbJ2VsZW1lbnRzJ10sXzB4NDIzNmJjW18weDEwZmNlNygweDFiYyldPV8weDJhZjFkMltfMHgxMGZjZTcoMHgxYmMpXSxfMHg0MjM2YmNbJ3RvdGFsU3RyTGVuZ3RoJ109XzB4MmFmMWQyW18weDEwZmNlNygweDE3NyldLF8weDQyMzZiY1tfMHgxMGZjZTcoMHgxNjYpXT1fMHgyYWYxZDJbXzB4MTBmY2U3KDB4MTY2KV0sXzB4NDIzNmJjW18weDEwZmNlNygweDE4ZildPV8weDJhZjFkMlsnYXV0b0V4cGFuZE1heERlcHRoJ10sXzB4NDIzNmJjW18weDEwZmNlNygweDEwZCldPSEweDEsXzB4NDIzNmJjW18weDEwZmNlNygweDEyNildPSFfMHgyMTczY2UsXzB4NDIzNmJjW18weDEwZmNlNygweDExMyldPTB4MSxfMHg0MjM2YmNbJ2xldmVsJ109MHgwLF8weDQyMzZiY1tfMHgxMGZjZTcoMHgxNmIpXT1fMHgxMGZjZTcoMHgxYWUpLF8weDQyMzZiY1tfMHgxMGZjZTcoMHgxNTQpXT0ncm9vdF9leHAnLF8weDQyMzZiY1tfMHgxMGZjZTcoMHgxNmQpXT0hMHgwLF8weDQyMzZiY1tfMHgxMGZjZTcoMHgxOWQpXT1bXSxfMHg0MjM2YmNbXzB4MTBmY2U3KDB4MTg4KV09MHgwLF8weDQyMzZiY1tfMHgxMGZjZTcoMHgxZWYpXT0hMHgwLF8weDQyMzZiY1tfMHgxMGZjZTcoMHgxYjUpXT0weDAsXzB4NDIzNmJjWydub2RlJ109eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NDIzNmJjO307Zm9yKHZhciBfMHgxOTA3Y2Y9MHgwO18weDE5MDdjZjxfMHg1ZGVjMThbXzB4MzIxZjY4KDB4MTI1KV07XzB4MTkwN2NmKyspXzB4NDA2ZjI1W18weDMyMWY2OCgweDFjYildKF8weDIxMzFkYVtfMHgzMjFmNjgoMHgxYjcpXSh7J3RpbWVOb2RlJzpfMHgzZjY2MDQ9PT1fMHgzMjFmNjgoMHgxY2UpfHx2b2lkIDB4MH0sXzB4NWRlYzE4W18weDE5MDdjZl0sXzB4NWUxNjNjKF8weDEzNDk1Yikse30pKTtpZihfMHgzZjY2MDQ9PT1fMHgzMjFmNjgoMHgxMzcpKXtsZXQgXzB4MWNlNzAyPUVycm9yW18weDMyMWY2OCgweDFlYyldO3RyeXtFcnJvcltfMHgzMjFmNjgoMHgxZWMpXT0weDEvMHgwLF8weDQwNmYyNVtfMHgzMjFmNjgoMHgxY2IpXShfMHgyMTMxZGFbJ3NlcmlhbGl6ZSddKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHgzMjFmNjgoMHgxODIpXSxfMHg1ZTE2M2MoXzB4MTM0OTViKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHgzMjFmNjgoMHgxZWMpXT1fMHgxY2U3MDI7fX1yZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDQwYmNkNSwnYXJncyc6W3sndHMnOl8weGE1NmQ5MCwnc2Vzc2lvbic6XzB4NDhmMDMyLCdhcmdzJzpfMHg0MDZmMjUsJ2lkJzpfMHg0YjllMzMsJ2NvbnRleHQnOl8weDQ5YjAwYn1dfTt9Y2F0Y2goXzB4MWUyZTAzKXtyZXR1cm57J21ldGhvZCc6XzB4MzIxZjY4KDB4MWVkKSwndmVyc2lvbic6XzB4NDBiY2Q1LCdhcmdzJzpbeyd0cyc6XzB4YTU2ZDkwLCdzZXNzaW9uJzpfMHg0OGYwMzIsJ2FyZ3MnOlt7J3R5cGUnOl8weDMyMWY2OCgweDFlNiksJ2Vycm9yJzpfMHgxZTJlMDMmJl8weDFlMmUwM1tfMHgzMjFmNjgoMHgxZjYpXX1dLCdpZCc6XzB4NGI5ZTMzLCdjb250ZXh0JzpfMHg0OWIwMGJ9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDRkNTZlNSYmXzB4M2FkMWFiKXtsZXQgXzB4MjIyOTAzPV8weDVhNjA0NSgpO18weDRkNTZlNVtfMHgzMjFmNjgoMHgxZjQpXSsrLF8weDRkNTZlNVtfMHgzMjFmNjgoMHgxY2UpXSs9XzB4ZDA3ZTM3KF8weDNhZDFhYixfMHgyMjI5MDMpLF8weDRkNTZlNVsndHMnXT1fMHgyMjI5MDMsXzB4NTM3ODJmW18weDMyMWY2OCgweDFhZCldW18weDMyMWY2OCgweDFmNCldKyssXzB4NTM3ODJmW18weDMyMWY2OCgweDFhZCldW18weDMyMWY2OCgweDFjZSldKz1fMHhkMDdlMzcoXzB4M2FkMWFiLF8weDIyMjkwMyksXzB4NTM3ODJmW18weDMyMWY2OCgweDFhZCldWyd0cyddPV8weDIyMjkwMywoXzB4NGQ1NmU1W18weDMyMWY2OCgweDFmNCldPjB4MzJ8fF8weDRkNTZlNVtfMHgzMjFmNjgoMHgxY2UpXT4weDY0KSYmKF8weDRkNTZlNVtfMHgzMjFmNjgoMHgxODQpXT0hMHgwKSwoXzB4NTM3ODJmW18weDMyMWY2OCgweDFhZCldW18weDMyMWY2OCgweDFmNCldPjB4M2U4fHxfMHg1Mzc4MmZbXzB4MzIxZjY4KDB4MWFkKV1bXzB4MzIxZjY4KDB4MWNlKV0+MHgxMmMpJiYoXzB4NTM3ODJmW18weDMyMWY2OCgweDFhZCldW18weDMyMWY2OCgweDE4NCldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDcyNzRhNltfMHgyNmFiZDIoMHgxMGMpXTt9KShnbG9iYWxUaGlzLF8weDU4OWYwMygweDEyNCksXzB4NTg5ZjAzKDB4MWI4KSxfMHg1ODlmMDMoMHgxOWUpLF8weDU4OWYwMygweDE5ZiksXzB4NTg5ZjAzKDB4MTc2KSxfMHg1ODlmMDMoMHgxYjkpLF8weDU4OWYwMygweDE3OCksXzB4NTg5ZjAzKDB4MWY4KSk7XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImZ1bmN0aW9uIGNyZWF0ZUhpZGRlblBvcHVwIChtZXNzYWdlLCB0aW1lID0gMjAwMCkge1xuICAgIGlmIChleGlzdHNIaWRkZW5Qb3B1cCgpKSByZXR1cm5cblxuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1jb250YWluZXJcIilcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnLCBcImZhY2UtaW5cIilcbiAgICBwb3B1cC5pbm5lckhUTUwgPSBtZXNzYWdlXG5cbiAgICBjb25zdCBwb3B1cEhlaWdodCA9IHBvcHVwLmNsaWVudEhlaWdodDtcbiAgICBwb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cClcbiAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3Jvdy11cFwiKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZ3Jvdy11cFwiKVxuICAgICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3Jvdy1kb3duXCIpXG5cbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnZmFjZS1pbicpXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2ZhY2Utb3V0JylcbiAgICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgcG9wdXAucmVtb3ZlKVxuICAgICAgICBcbiAgICAgICAgcG9wdXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImdyb3ctZG93blwiKVxuICAgICAgICB9KTtcbiAgICB9LCB0aW1lKVxufVxuXG5mdW5jdGlvbiBleGlzdHNIaWRkZW5Qb3B1cCAoKSB7XG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWNvbnRhaW5lclwiKVxuICAgIHJldHVybiBwb3B1cENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhpZGRlblBvcHVwICgpIHtcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtY29udGFpbmVyXCIpXG4gICAgcG9wdXBDb250YWluZXIuaW5uZXJIVE1MID0gJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGlkZGVuUG9wdXAiLCJpbXBvcnQgRE9NVG9kb0xpc3QgZnJvbSBcIi4uLy4uLy4uXCI7XG5cbmZ1bmN0aW9uIHByaW50Q2F0ZWdvcnlMaXN0KHRhc2tzKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1jb250YWluZXInKTtcbiAgICBjYXRlZ29yaWVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGNhdGVnb3JpZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjYXRlZ29yaWVzTGlzdC5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yaWVzLWxpc3QnKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZ2V0Q2F0ZWdvcmllcyh0YXNrcyk7XG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY2F0ZWdvcnlFbGVtZW50LnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgICAgIGNhdGVnb3J5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xuICAgICAgICBjYXRlZ29yeUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeVwiLCBjYXRlZ29yeSlcbiAgICAgICAgY2F0ZWdvcmllc0xpc3QuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlFbGVtZW50KTtcbiAgICAgICAgY3JlYXRlQ2F0ZWdvcnlFdmVudChjYXRlZ29yeUVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgY2F0ZWdvcmllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yaWVzTGlzdCk7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge0FycmF5fSB0YXNrcyBcbiAqIEByZXR1cm5zIFxuICovXG5mdW5jdGlvbiBnZXRDYXRlZ29yaWVzKHRhc2tzKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDYXRlZ29yaWVzID0gdGFzay5nZXRDYXRlZ29yaWVzKCk7XG4gICAgICAgIGlmICh0YXNrQ2F0ZWdvcmllcykge1xuICAgICAgICAgICAgdGFza0NhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2F0ZWdvcmllcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnlFdmVudCAoY2F0ZWdvcnlFbGVtZW50KSB7XG4gICAgY2F0ZWdvcnlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjYXRlZ29yeUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yaWVzID0gZ2V0U2VsZWN0ZWRDYXRlZ29yaWVzKCk7XG4gICAgICAgIERPTVRvZG9MaXN0LnByaW50QnlDYXRlZ29yaWVzKHNlbGVjdGVkQ2F0ZWdvcmllcylcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRDYXRlZ29yaWVzICgpIHtcbiAgICBjb25zdCBzZWxlY3RlZENhdGVnb3JpZXNFbGVtZW50ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnkuc2VsZWN0ZWQnKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yaWVzID0gW107XG4gICAgc2VsZWN0ZWRDYXRlZ29yaWVzRWxlbWVudC5mb3JFYWNoKGNhdGVnb3J5RWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcnlFbGVtZW50LmRhdGFzZXQuY2F0ZWdvcnk7XG4gICAgICAgIHNlbGVjdGVkQ2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkQ2F0ZWdvcmllcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpbnRDYXRlZ29yeUxpc3Q7IiwiaW1wb3J0IERPTVRvZG9MaXN0IGZyb20gXCIuLi8uLi8uLlwiO1xuaW1wb3J0IHsgc2F2ZUluTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL0xvY2FsU3RvcmFnZS9sb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tCb3gge1xuICAgIHN0YXRpYyBjcmVhdGVDaGVja0JveEVsZW1lbnQgKGlzQ2hlY2tlZCkge1xuICAgICAgICBjb25zdCBjaGVja0JveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBcbiAgICAgICAgY2hlY2tCb3hFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtaXMtY29tcGxldGVkXCIsIGlzQ2hlY2tlZCk7XG4gICAgICAgIGNoZWNrQm94RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hlY2stYm94XCIsIFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkgIHtcbiAgICAgICAgICAgIGNoZWNrQm94RWxlbWVudC50ZXh0Q29udGVudCA9IFwiY2hlY2tfY2lyY2xlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja0JveEVsZW1lbnQudGV4dENvbnRlbnQgPSBcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcIjtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVja0JveEVsZW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBhZGRUb2dnbGVFdmVudExpc3RlbmVyIChjaGVja0JveEVsZW1lbnQpIHtcbiAgICAgICAgY2hlY2tCb3hFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY2hlY2tCb3hFbGVtZW50LmRhdGFzZXQuaXNDb21wbGV0ZWQgPT09IFwidHJ1ZVwiID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgY2hlY2tCb3hFbGVtZW50LmRhdGFzZXQuaXNDb21wbGV0ZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGNoZWNrQm94RWxlbWVudC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlID8gXCJjaGVja19jaXJjbGVcIiA6IFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFwiXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZENoZWNrQm94Q29tcGxldGVFdmVudExpc3RlbmVyIChjaGVja0JveEVsZW1lbnQsIHRhc2spIHtcbiAgICAgICAgY2hlY2tCb3hFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksICgpID0+IHtcbiAgICAgICAgICAgIHRhc2sudG9nZ2xlQ29tcGxldGVkKCk7XG4gICAgICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UoRE9NVG9kb0xpc3QuZ2V0QWxsVGFza3MoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgRE9NVG9kb0xpc3QgZnJvbSBcIi4uLy4uLy4uL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW92ZUJ1dHRvbiB7XG4gICAgc3RhdGljIGNyZWF0ZVJlbW92ZUJ1dHRvbkVsZW1lbnQgKCkge1xuICAgICAgICBjb25zdCB0YXNrRGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0RlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtY29udGFpbmVyXCIpO1xuICAgICAgICB0YXNrRGVsZXRlQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsZXRlLWljb24gbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmRlbGV0ZTwvc3Bhbj5gO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRhc2tEZWxldGVDb250YWluZXI7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFJlbW92ZVRhc2tFdmVudExpc3RlbmVyIChyZW1vdmVFbGVtZW50LCB0YXNrSWQpIHtcbiAgICAgICAgcmVtb3ZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKChcImNsaWNrXCIpLCAoKSA9PiB7XG4gICAgICAgICAgICBET01Ub2RvTGlzdC5yZW1vdmVUYXNrKHRhc2tJZCk7XG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCBcIi4vY3NzL2dsb2JhbC5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvaGVhZGVyLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9tYWluLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy90YXNrLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9wb3B1cC5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvcHJvamVjdHMuY3NzXCJcbmltcG9ydCBcIi4vY3NzL2hhbWJ1cmdlci5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvY2F0ZWdvcnlMaXN0LmNzc1wiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL1Rhc2svVGFza1wiO1xuaW1wb3J0IERPTVRvZG9MaXN0Q2xhc3MgZnJvbSBcIi4vbW9kdWxlcy9Ub2RvTGlzdC9ET01Ub2RvTGlzdFwiXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0c0V2ZW50LCBjcmVhdGVQcm9qZWN0c0V2ZW50cywgbG9hZFByb2plY3RzLCBwcmludEFkZFByb2plY3RzRWxlbWVudCwgcHJpbnROZXdQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0L0RPTVByb2plY3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVIYW1idXJnZXJOYXZFdmVudCB9IGZyb20gXCIuL2Fzc2V0cy9IYW1idXJnZXIvaGFtYnVyZ2VyTmF2XCJcbmltcG9ydCB7IGxvYWRMb2NhbFN0b3JhZ2UsIGxvYWRMb2NhbFN0b3JhZ2VQcm9qZWN0cyB9IGZyb20gXCIuL2Fzc2V0cy9Mb2NhbFN0b3JhZ2UvbG9jYWxTdG9yYWdlXCJcblxuY29uc3QgRE9NVG9kb0xpc3QgPSBuZXcgRE9NVG9kb0xpc3RDbGFzcygpO1xuZnVuY3Rpb24gaW5pdCgpICB7XG4gICAgbG9hZExvY2FsU3RvcmFnZShET01Ub2RvTGlzdCk7XG4gICAgbG9hZExvY2FsU3RvcmFnZVByb2plY3RzKGxvYWRQcm9qZWN0cylcbiAgICAvL0RPTVRvZG9MaXN0LmFkZFRhc2sobmV3IFRhc2soJ1Rhc2sgMycsICdUaGlzIGlzIHRoZSB0aGlyZCB0YXNrJywgbmV3IERhdGUoMjAyMSwgMCwgMywgMCwgMCwgMCwgMCksIHRydWUsICdpbmJveCcsIFtcIkhvbWVcIl0pKTtcbiAgICAvL0RPTVRvZG9MaXN0LmFkZFRhc2sobmV3IFRhc2soJ1Rhc2sgNCcsICdUaGlzIGlzIHRoZSBmb3VydGggdGFzaycsIG5ldyBEYXRlKDIwMjEsIDAsIDMsIDAsIDAsIDAsIDApLCBmYWxzZSwgJ2luYm94JywgW1wiT3V0ZG9vcnNcIl0pKTtcbiAgICBET01Ub2RvTGlzdC5wcmludEFsbFRhc2tzKCk7XG4gICAgY3JlYXRlUHJvamVjdHNFdmVudHMoKTtcbiAgICBwcmludEFkZFByb2plY3RzRWxlbWVudCgpO1xuICAgIGNyZWF0ZUhhbWJ1cmdlck5hdkV2ZW50KCk7XG59XG5cbmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NVG9kb0xpc3Q7IiwiaW1wb3J0IHsgY2xvc2VIYW1idXJnZXJOYXYgfSBmcm9tIFwiLi4vLi4vYXNzZXRzL0hhbWJ1cmdlci9oYW1idXJnZXJOYXYuanNcIjtcbmltcG9ydCB7IHJlbW92ZUluTG9jYWxTdG9yYWdlUHJvamVjdCwgc2F2ZUluTG9jYWxTdG9yYWdlUHJvamVjdCB9IGZyb20gXCIuLi8uLi9hc3NldHMvTG9jYWxTdG9yYWdlL2xvY2FsU3RvcmFnZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUhpZGRlblBvcHVwIGZyb20gXCIuLi8uLi9hc3NldHMvUG9wdXBzL2hpZGRlblBvcHVwLmpzXCI7XG5pbXBvcnQgRE9NVG9kb0xpc3QgZnJvbSBcIi4uLy4uL2luZGV4LmpzXCJcbmNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXctcHJvamVjdC1jb250YWluZXInKTtcblxuZnVuY3Rpb24gcHJpbnROZXdQcm9qZWN0IChwcm9qZWN0VGl0bGUpIHtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWFjdGlvbnMtbGlzdCAuYWN0aW9ucy1saXN0Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtdHlwZScsIHByb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5mb3JtYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SW5mb3JtYXRpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pbmZvcm1hdGlvbicpO1xuXG4gICAgY29uc3QgaWNvbiA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgd29ya3NwYWNlc1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5gXG4gICAgcHJvamVjdEluZm9ybWF0aW9uLmlubmVySFRNTCA9IGljb24gKyBwcm9qZWN0VGl0bGU7XG5cblxuICAgIGNvbnN0IGRlbGV0ZUljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pY29uLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1pY29uJywgXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICAgIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSAnZGVsZXRlJztcblxuICAgIGRlbGV0ZUljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICBwcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKHByb2plY3RJbmZvcm1hdGlvbik7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbkNvbnRhaW5lcik7XG5cbiAgICBwcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gICAgY3JlYXRlRGVsZXRlUHJvamVjdEV2ZW50KHByb2plY3RUaXRsZSwgZGVsZXRlSWNvbik7XG4gICAgY3JlYXRlUHJvamVjdHNFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlUHJvamVjdEV2ZW50IChwcm9qZWN0TmFtZSwgcHJvamVjdERlbGV0ZUJ1dHRvbikge1xuICAgIHByb2plY3REZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIERPTVRvZG9MaXN0LnJlbW92ZVByb2plY3QocHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIHJlbW92ZUluTG9jYWxTdG9yYWdlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHByaW50QWRkUHJvamVjdHNFbGVtZW50ICgpIHtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdC1idXR0b24nKTtcbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZDwvc3Bhbj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPk5ldyBQcm9qZWN0PC9wPmA7XG4gICAgXG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEJ1dHRvbik7XG4gICAgY3JlYXRlUHJvamVjdHNFdmVudChjcmVhdGVQcm9qZWN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNFdmVudChjcmVhdGVQcm9qZWN0QnV0dG9uKSB7XG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgRE9NVG9kb0xpc3QuY2xvc2VBbGxGb3JtcygpO1xuICAgICAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3UHJvamVjdEZvcm0oKSk7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3RTdWJtaXRFdmVudChwcm9qZWN0Rm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpKTtcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdENsb3NlRXZlbnQocHJvamVjdEZvcm1Db250YWluZXIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0Rm9ybSgpICB7XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybScpO1xuICAgIG5ld1Byb2plY3RGb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0c1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwibmV3LXRhc2stdGl0bGVcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1uZXctdGFzay1mb3JtIG1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm5ldy10YXNrLXN1Ym1pdFwiPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFkZDwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIG5ld1Byb2plY3RGb3JtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0Q2xvc2VFdmVudCAocHJvamVjdEZvcm0pIHtcbiAgICBjb25zdCBjbG9zZUVkaXRUYXNrRm9ybSA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1uZXctdGFzay1mb3JtJyk7XG4gICAgY2xvc2VFZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlTmV3UHJvamVjdEZvcm0oKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VOZXdQcm9qZWN0Rm9ybSAoKSB7IFxuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciB0aGUgZm9ybVxuICAgIHByaW50QWRkUHJvamVjdHNFbGVtZW50KCk7IC8vIFByaW50IHRoZSBhZGQgcHJvamVjdCBidXR0b25cbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RTdWJtaXRFdmVudCAocHJvamVjdEZvcm0pIHtcbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnRzIHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay10aXRsZScpLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICBsZXQgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFuZXdQcm9qZWN0VGl0bGUpe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ1Byb2plY3QgbmFtZSBpcyByZXF1aXJlZCc7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChleGlzdFByb2plY3QobmV3UHJvamVjdFRpdGxlKSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gYEVSUk9SOiBQcm9qZWN0IDxzcGFuIGNsYXNzPVwicG9wdXAtdGFzay1wcm9qZWN0XCI+JHtuZXdQcm9qZWN0VGl0bGV9PC9zcGFuPiBhbHJlYWR5IGV4aXN0YDtcbiAgICAgICAgICAgIGlzQ29ycmVjdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ29ycmVjdCkge1xuICAgICAgICAgICAgRE9NVG9kb0xpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgcHJpbnROZXdQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSk7IFxuICAgICAgICAgICAgY3JlYXRlSGlkZGVuUG9wdXAoYFByb2plY3QgPHNwYW4gY2xhc3M9XCJwb3B1cC10YXNrLXByb2plY3RcIj4ke25ld1Byb2plY3RUaXRsZX08L3NwYW4+IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5YCk7XG4gICAgICAgICAgICBjbG9zZU5ld1Byb2plY3RGb3JtKCk7XG4gICAgICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2VQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVIaWRkZW5Qb3B1cChlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBleGlzdFByb2plY3QgKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKTtcbiAgICBsZXQgZXhpc3QgPSBmYWxzZTtcbiAgICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKHByb2plY3RCdXR0b24gPT4ge1xuICAgICAgICBpZiAocHJvamVjdEJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC10eXBlJykgPT09IHByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBleGlzdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNFdmVudHMgKCkge1xuICAgIGNvbnN0IHByb2plY3RzQnV0dG9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3Rpb25zLWxpc3QgYnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb2plY3RzQnV0dG9uc0FycmF5ID0gQXJyYXkuZnJvbShwcm9qZWN0c0J1dHRvbnNFbGVtZW50cylcbiAgICBwcm9qZWN0c0J1dHRvbnNBcnJheS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2VsZWN0UHJvamVjdEJ1dHRvbkFjdGl2ZShidXR0b24uZGF0YXNldC5wcm9qZWN0VHlwZSkpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFByb2plY3RCdXR0b25BY3RpdmUgKHByb2plY3ROYW1lKSAge1xuICAgIGNsb3NlSGFtYnVyZ2VyTmF2KCk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdHNCdXR0b25zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGlvbnMtbGlzdCBidXR0b25cIik7XG4gICAgY29uc3QgcHJvamVjdHNCdXR0b25zQXJyYXkgPSBBcnJheS5mcm9tKHByb2plY3RzQnV0dG9uc0VsZW1lbnRzKVxuXG4gICAgY29uc3QgY3VycmVudFByb2plY3RCdXR0b24gPSBwcm9qZWN0c0J1dHRvbnNBcnJheS5maW5kKGJ1dHRvbiA9PiBidXR0b24uZGF0YXNldC5wcm9qZWN0VHlwZSA9PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XG4gICAgcHJvamVjdHNCdXR0b25zQXJyYXkuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpOyAvLyBSZW1vdmUgdGhlIGFjdGl2ZSBjbGFzcyBmcm9tIGFsbCB0aGUgYnV0dG9uc1xuICAgIGN1cnJlbnRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7IC8vIEFkZCB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBjbGlja2VkIGJ1dHRvblxuXG4gICAgcHJvamVjdFRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZTsgLy8gQ2hhbmdlIHRoZSBwcm9qZWN0IHRpdGxlXG4gICAgRE9NVG9kb0xpc3Quc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0TmFtZSk7IC8vIFNldCB0aGUgYWN0aXZlIHByb2plY3RcbiAgICBET01Ub2RvTGlzdC5wcmludEFsbFRhc2tzKCk7IC8vIFByaW50IGFsbCB0aGUgdGFza3MgaW4gdGhlIHRhc2sgbGlzdFxufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMocHJvamVjdExpc3QpIHtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3RUaXRsZSA9PiBwcmludE5ld1Byb2plY3QocHJvamVjdFRpdGxlKSk7XG59XG5cbmV4cG9ydCB7IHByaW50TmV3UHJvamVjdCwgcHJpbnRBZGRQcm9qZWN0c0VsZW1lbnQsIGNsb3NlTmV3UHJvamVjdEZvcm0sIGxvYWRQcm9qZWN0cywgY3JlYXRlUHJvamVjdHNFdmVudHMsIHNlbGVjdFByb2plY3RCdXR0b25BY3RpdmUgfTsiLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgRE9NVG9kb0xpc3QgZnJvbSAnLi4vLi4vaW5kZXguanMnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrLmpzJztcbmltcG9ydCBDaGVja0JveCBmcm9tICcuLi8uLi9hc3NldHMvVGFzay9DaGVja0JveC9jaGVja0JveC5qcyc7XG5pbXBvcnQgUmVtb3ZlQnV0dG9uIGZyb20gJy4uLy4uL2Fzc2V0cy9UYXNrL1JlbW92ZUJ1dHRvbi9yZW1vdmVCdXR0b24uanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NVGFzayB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgdGFzayBlbGVtZW50IGFuZCBhZGQgaXQgdG8gdGhlIHRhc2sgbGlzdFxuICAgICAqIEBwYXJhbSB7VGFza30gdGFzayBcbiAgICAgKi9cbiAgICBzdGF0aWMgcHJpbnRUYXNrRWxlbWVudCAodGFzaykge1xuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBET01UYXNrLmNyZWF0ZVRhc2tFbGVtZW50KHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudClcbiAgICAgICAgLy9ET01Ub2RvTGlzdC51cGRhdGVDYXRlZ29yeUxpc3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ3JlYXRlIGEgbmV3IHRhc2sgZWxlbWVudCxcbiAgICAgKiAgQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgY2hlY2tib3ggdG8gdG9nZ2xlIHRoZSBjb21wbGV0ZWQgc3RhdGUgb2YgdGhlIHRhc2tcbiAgICAgKiAgYW5kIHJldHVybiB0aGUgdGFzayBlbGVtZW50XG4gICAgICogQHBhcmFtIHtUYXNrfSB0YXNrIFxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGFza0VsZW1lbnQgXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVRhc2tFbGVtZW50ICh0YXNrKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGFzayBlbGVtZW50XG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIHRhc2tFbGVtZW50LmRhdGFzZXQuaWQgPSB0YXNrLmdldElkKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0YXNrIGluZm8gZWxlbWVudFxuICAgICAgICBjb25zdCB0YXNrSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrSW5mb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2staW5mb1wiKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGNoZWNrYm94IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgdGFzayBpbmZvIGVsZW1lbnRcbiAgICAgICAgY29uc3QgY2hlY2tCb3hFbGVtZW50ID0gQ2hlY2tCb3guY3JlYXRlQ2hlY2tCb3hFbGVtZW50KHRhc2suaXNDb21wbGV0ZWQoKSk7XG4gICAgICAgIHRhc2tJbmZvRWxlbWVudC5hcHBlbmRDaGlsZChjaGVja0JveEVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVFbGVtZW50ID0gdGFzay5nZXREdWVEYXRlKClcbiAgICAgICAgPyBET01UYXNrLmNyZWF0ZUR1ZURhdGVFbGVtZW50KHRhc2suZ2V0RHVlRGF0ZSgpKVxuICAgICAgICA6IFwiXCI7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RWxlbWVudCA9IHRhc2suZ2V0Q2F0ZWdvcmllcygpLmxlbmd0aCA+PSAxXG4gICAgICAgID8gRE9NVGFzay5jcmVhdGVDYXRlZ29yeUVsZW1lbnQodGFzay5nZXRDYXRlZ29yaWVzKClbMF0pXG4gICAgICAgIDogXCJcIjtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0YXNrIHRpdGxlIGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgdGFzayBpbmZvIGVsZW1lbnRcbiAgICAgICAgdGFza0luZm9FbGVtZW50LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtZGF0YVwiPlxuICAgICAgICAgICAgICAgICR7ZHVlRGF0ZUVsZW1lbnR9XG4gICAgICAgICAgICAgICAgJHtjYXRlZ29yeUVsZW1lbnR9XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2suZ2V0VGl0bGUoKX08L3A+YDtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGFzayBkZWxldGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZUNvbnRhaW5lciA9IFJlbW92ZUJ1dHRvbi5jcmVhdGVSZW1vdmVCdXR0b25FbGVtZW50KCk7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSB0YXNrIGluZm8gZWxlbWVudCBhbmQgdGhlIHRhc2sgZGVsZXRlIGNvbnRhaW5lciBlbGVtZW50IHRvIHRoZSB0YXNrIGVsZW1lbnRcbiAgICAgICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0luZm9FbGVtZW50KTtcbiAgICAgICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgY2hlY2tib3ggdG8gdG9nZ2xlIHRoZSBjb21wbGV0ZWQgc3RhdGUgb2YgdGhlIHRhc2tcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrLWJveFwiKTtcbiAgICAgICAgQ2hlY2tCb3guYWRkVG9nZ2xlRXZlbnRMaXN0ZW5lcihjaGVja0JveCk7IC8vIENoYW5nZSBkZSBodG1sIGVsZW1lbnRcbiAgICAgICAgQ2hlY2tCb3guYWRkQ2hlY2tCb3hDb21wbGV0ZUV2ZW50TGlzdGVuZXIoY2hlY2tCb3gsIHRhc2spOyAvLyBDaGFuZ2UgdGhlIHRhc2sgb2JqZWN0XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1pY29uXCIpO1xuICAgICAgICBSZW1vdmVCdXR0b24uYWRkUmVtb3ZlVGFza0V2ZW50TGlzdGVuZXIocmVtb3ZlQnV0dG9uLCB0YXNrLmdldElkKCkpO1xuICAgICAgICBET01UYXNrLmFkZEVkaXRUYXNrRXZlbnRMaXN0ZW5lcih0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIikpOyAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YXNrIGVsZW1lbnQgdG8gZWRpdCB0aGUgdGFza1xuICAgICAgICByZXR1cm4gdGFza0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUR1ZURhdGVFbGVtZW50IChkdWVEYXRlKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdER1ZURhdGUgPSBmb3JtYXQoZHVlRGF0ZSwgXCJkZCBFXCIpO1xuICAgICAgICByZXR1cm4gYDxwIGNsYXNzPVwidGFzay1kdWUtZGF0ZVwiPiR7Zm9ybWF0RHVlRGF0ZX08L3A+YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2F0ZWdvcnlFbGVtZW50IChjYXRlZ29yeSkge1xuICAgICAgICByZXR1cm4gYDxwIGNsYXNzPVwidGFzay1jYXRlZ29yeVwiPiR7Y2F0ZWdvcnl9PC9wPmA7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEVkaXRUYXNrRXZlbnRMaXN0ZW5lciAodGFza0VsZW1lbnQpIHtcbiAgICAgICAgdGFza0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIERPTVRvZG9MaXN0LmVkaXRUYXNrKHRhc2tFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBjb21wbGV0ZWQsIHByb2plY3QsIHRhZ3MpIHtcbiAgICAgICAgdGhpcy5pZCA9IHV1aWR2NCgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMudGFncyA9IHRhZ3M7XG4gICAgfVxuXG4gICAgZ2V0SWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBzZXRUaXRsZSAodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIHNldERlc2NyaXB0aW9uIChkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuICAgIHNldER1ZURhdGUgKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBpc0NvbXBsZXRlZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG4gICAgc2V0Q29tcGxldGVkIChjb21wbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuICAgIHRvZ2dsZUNvbXBsZXRlZCAoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBsZXRlZCAoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgIH1cblxuICAgIGdldFByb2plY3QgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xuICAgIH1cbiAgICBzZXRQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0Q2F0ZWdvcmllcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhZ3M7XG4gICAgfVxuXG4gICAgc2V0Q2F0ZWdvcmllcyAodGFncykge1xuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xuICAgIH1cblxuICAgIHRvU3RyaW5nICgpIHtcbiAgICAgICAgcmV0dXJuIGBUaXRsZTogJHt0aGlzLnRpdGxlfVxcbkRlc2NyaXB0aW9uOiAke3RoaXMuZGVzY3JpcHRpb259XFxuRHVlIERhdGU6ICR7dGhpcy5kdWVEYXRlfVxcbkNvbXBsZXRlZDogJHt0aGlzLmNvbXBsZXRlZH1gO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tSlNPTiAoanNvbikge1xuICAgICAgICBjb25zdCBkdWVEYXRlID0ganNvbi5kdWVEYXRlID8gbmV3IERhdGUoanNvbi5kdWVEYXRlKSA6IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgVGFzayhqc29uLnRpdGxlLCBqc29uLmRlc2NyaXB0aW9uLCBkdWVEYXRlLCBqc29uLmNvbXBsZXRlZCwganNvbi5wcm9qZWN0LCBqc29uLnRhZ3MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tSlNPTkxpc3QgKGpzb25MaXN0KSB7XG4gICAgICAgIGxldCB0YXNrTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqc29uIG9mIGpzb25MaXN0KSB7XG4gICAgICAgICAgICB0YXNrTGlzdC5wdXNoKFRhc2suZnJvbUpTT04oanNvbikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXNrTGlzdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9KU09OICh0YXNrKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0YXNrKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9KU09OTGlzdCAodGFza0xpc3QpIHtcbiAgICAgICAgbGV0IGpzb25MaXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgdGFza0xpc3QpIHtcbiAgICAgICAgICAgIGpzb25MaXN0LnB1c2goVGFzay50b0pTT04odGFzaykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqc29uTGlzdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9Mb2NhbFN0b3JhZ2UgKHRhc2tMaXN0KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIFRhc2sudG9KU09OTGlzdCh0YXNrTGlzdCkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tTG9jYWxTdG9yYWdlICgpIHtcbiAgICAgICAgcmV0dXJuIFRhc2suZnJvbUpTT05MaXN0KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdElTTywgZW5kT2ZXZWVrLCBzdGFydE9mV2VlayB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi4vVGFzay9UYXNrLmpzJztcbmltcG9ydCBET01UYXNrIGZyb20gJy4uL1Rhc2svRE9NVGFzayc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9Ub2RvTGlzdC5qcyc7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSAnLi4vLi4vYXNzZXRzL1Rhc2svQ2hlY2tCb3gvY2hlY2tCb3guanMnO1xuaW1wb3J0IHtpc1RvZGF5LCBpblNhbWVXZWVrIH0gZnJvbSAnLi4vLi4vYXNzZXRzL0dsb2JhbEZ1bmN0aW9ucy9nbG9iYWxGdW5jdGlvbnMuanMnO1xuaW1wb3J0IGNyZWF0ZUhpZGRlblBvcHVwIGZyb20gJy4uLy4uL2Fzc2V0cy9Qb3B1cHMvaGlkZGVuUG9wdXAuanMnO1xuaW1wb3J0IHsgY2xvc2VOZXdQcm9qZWN0Rm9ybSwgY3JlYXRlUHJvamVjdHNFdmVudHMsIHNlbGVjdFByb2plY3RCdXR0b25BY3RpdmV9IGZyb20gJy4uL1Byb2plY3QvRE9NUHJvamVjdHMuanMnO1xuaW1wb3J0IHsgY2xvc2VIYW1idXJnZXJOYXYgfSBmcm9tICcuLi8uLi9hc3NldHMvSGFtYnVyZ2VyL2hhbWJ1cmdlck5hdi5qcyc7XG5pbXBvcnQgcHJpbnRDYXRlZ29yeUxpc3QgZnJvbSAnLi4vLi4vYXNzZXRzL1Rhc2svQ2F0ZWdvcmllc0xpc3QvY2F0ZWdvcnlMaXN0LmpzJztcbmltcG9ydCB7IHRhIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcbmltcG9ydCB7IHNhdmVJbkxvY2FsU3RvcmFnZSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9Mb2NhbFN0b3JhZ2UvbG9jYWxTdG9yYWdlLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01Ub2RvTGlzdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy50b2RvbGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xuICAgIHRoaXMuYWN0aXZlUHJvamVjdCA9IFwiaW5ib3hcIlxuICAgIH1cblxuICAgIHNldEFjdGl2ZVByb2plY3QoYWN0aXZlUHJvamVjdCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVByb2plY3QgPSBhY3RpdmVQcm9qZWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBTaG93IGFsbCB0aGUgdGFza3MgaW4gdGhlIHRhc2sgbGlzdCBcbiAgICAgKiAgZGVwZW5kaW5nIG9uIHRoZSBwcm9qZWN0IHR5cGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvamVjdFR5cGUgXG4gICAgICovXG4gICAgcHJpbnRBbGxUYXNrcyAoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgdGhlIHRhc2sgbGlzdFxuICAgICAgICAvLyBGaWx0ZXIgdGhlIHRhc2sgbGlzdCBieSB0aGUgYWN0aXZlIHByb2plY3RcbiAgICAgICAgY29uc3QgZmlsdGVyVGFzayA9IHRoaXMuZ2V0QWN0aXZlVGFza3MoKTtcbiAgICAgICAgLy8gUHJpbnQgdGhlIHRhc2sgbGlzdFxuICAgICAgICBwcmludENhdGVnb3J5TGlzdChmaWx0ZXJUYXNrKTtcbiAgICAgICAgZmlsdGVyVGFzay5mb3JFYWNoKHRhc2sgPT4gRE9NVGFzay5wcmludFRhc2tFbGVtZW50KHRhc2spKTtcbiAgICAgICAgdGhpcy5wcmludEFkZFRhc2tFbGVtZW50KCk7IC8vIENyZWF0ZSB0aGUgYWRkIHRhc2sgZWxlbWVudFxuICAgIH1cblxuICAgIHByaW50QnlDYXRlZ29yaWVzIChjYXRlZ29yaWVzTGlzdCkge1xuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcbiAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIHRoZSB0YXNrIGxpc3RcbiAgICAgICAgLy8gRmlsdGVyIHRoZSB0YXNrIGxpc3QgYnkgdGhlIGFjdGl2ZSBwcm9qZWN0XG4gICAgICAgIGNvbnN0IGZpbHRlclRhc2sgPSB0aGlzLnRhc2tzRmlsdGVyQnlDYXRlZ29yaWVzKGNhdGVnb3JpZXNMaXN0LCB0aGlzLmdldEFjdGl2ZVRhc2tzKCkpO1xuXG4gICAgICAgIC8vIFByaW50IHRoZSB0YXNrIGxpc3RcbiAgICAgICAgLy8gcHJpbnRDYXRlZ29yeUxpc3QoZmlsdGVyVGFzayk7XG4gICAgICAgIGZpbHRlclRhc2suZm9yRWFjaCh0YXNrID0+IERPTVRhc2sucHJpbnRUYXNrRWxlbWVudCh0YXNrKSk7XG4gICAgICAgIHRoaXMucHJpbnRBZGRUYXNrRWxlbWVudCgpOyAvLyBDcmVhdGUgdGhlIGFkZCB0YXNrIGVsZW1lbnRcbiAgICB9XG5cbiAgICB0YXNrc0ZpbHRlckJ5Q2F0ZWdvcmllcyAoY2F0ZWdvcmllc0xpc3QsIHRhc2tMaXN0KSB7XG4gICAgICAgIGxldCBjaGVja2VyID0gKGFyciwgdGFyZ2V0KSA9PiB0YXJnZXQuZXZlcnkodiA9PiBhcnIuaW5jbHVkZXModikpO1xuICAgICAgICBjb25zdCBmaWx0ZXJUYXNrTGlzdCA9IFtdO1xuXG4gICAgICAgIHRhc2tMaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tlcih0YXNrLmdldENhdGVnb3JpZXMoKSwgY2F0ZWdvcmllc0xpc3QpKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyVGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmaWx0ZXJUYXNrTGlzdDtcbiAgICB9XG5cbiAgICB1cGRhdGVDYXRlZ29yeUxpc3QoKSB7XG4gICAgICAgIHByaW50Q2F0ZWdvcnlMaXN0KHRoaXMuZ2V0QWN0aXZlVGFza3MoKSlcbiAgICB9XG5cblxuICAgIGdldEFjdGl2ZVRhc2tzICgpICB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9saXN0LmdldFRhc2tMaXN0QnlQcm9qZWN0KHRoaXMuYWN0aXZlUHJvamVjdCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsVGFza3MgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvbGlzdC5nZXRUYXNrTGlzdCgpO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIHRoaXMudG9kb2xpc3QuYWRkUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgIH1cblxuICAgIGFkZFByb2plY3RzKHByb2plY3RUaXRsZUxpc3QpIHtcbiAgICAgICAgcHJpbnRDYXRlZ29yeUxpc3QuZm9yRWFjaChwcm9qZWN0VGl0bGUgPT4gdGhpcy5hZGRQcm9qZWN0KHByb2plY3RUaXRsZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBBZGQgYSB0YXNrIHRvIFxuICAgICAqIEBwYXJhbSB7VGFza30gdGFzayBcbiAgICAgKi9cbiAgICBhZGRUYXNrICh0YXNrKSB7XG4gICAgICAgIHRoaXMudG9kb2xpc3QuaW5zZXJ0VGFzayh0YXNrKTtcbiAgICAgICAgRE9NVGFzay5wcmludFRhc2tFbGVtZW50KHRhc2spO1xuICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UodGhpcy5nZXRBbGxUYXNrcygpKTtcbiAgICB9XG5cbiAgICBhZGRUYXNrcyAodGFza0xpc3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNBZGRlZCA9IFtdO1xuICAgICAgICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2RvbGlzdC5pbnNlcnRUYXNrKHRhc2spO1xuICAgICAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSB0YXNrLnByb2plY3Q7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqICBSZW1vdmUgdGhlIHRhc2sgd2l0aCB0aGUgZ2l2ZW4gaWQgZnJvbSB0aGUgdGFzayBsaXN0IGFuZCB0aGUgRE9NXG4gICAgICogQHBhcmFtIHsqfSBpZCBcbiAgICAgKi9cbiAgICByZW1vdmVUYXNrIChpZCkge1xuICAgICAgICB0aGlzLnRvZG9saXN0LnJlbW92ZVRhc2soaWQpO1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgdGFza0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHNhdmVJbkxvY2FsU3RvcmFnZSh0aGlzLmdldEFsbFRhc2tzKCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbFRhc2tzQnlQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudG9kb2xpc3QucmVtb3ZlQWxsVGFza3NCeVByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG4gICAgZWRpdFRhc2sgKGlkKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRvZG9saXN0LmdldFRhc2soaWQpOyAvLyBHZXQgdGhlIHRhc2tcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJdYCk7IC8vIEdldCB0aGUgdGFzayBlbGVtZW50XG4gICAgICAgIHRoaXMuY2xvc2VBbGxGb3JtcygpOyAvLyBDbG9zZSBhbGwgZm9ybXNcbiAgICAgICAgXG4gICAgICAgIHRhc2tFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuY3JlYXRlVGFza0Zvcm0odGFzayk7XG4gICAgICAgIHRoaXMuY3JlYXRlRWRpdFRhc2tFdmVudHMoaWQsIHRhc2tFbGVtZW50KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqICBVcGRhdGUgdGhlIHRhc2sgZWxlbWVudCBpbiB0aGUgdGFzayBsaXN0XG4gICAgICogIENyZWF0ZSB0aGUgdXBkYXRlZCB0YXNrIGVsZW1lbnQgYW5kIHJlcGxhY2UgdGhlIG9sZCB0YXNrIGVsZW1lbnQgd2l0aCB0aGUgdXBkYXRlZCB0YXNrIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1Rhc2t9IHRhc2sgXG4gICAgICovXG4gICAgdXBkYXRlVGFza0VsZW1lbnQgKHRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza09sZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza1tkYXRhLWlkPVwiJHt0YXNrLmdldElkKCl9XCJdYCk7XG4gICAgICAgIGNvbnN0IHRhc2tVcGRhdGVkRWxlbWVudCA9IERPTVRhc2suY3JlYXRlVGFza0VsZW1lbnQodGFzayk7XG4gICAgICAgIHRhc2tPbGRFbGVtZW50LnJlcGxhY2VXaXRoKHRhc2tVcGRhdGVkRWxlbWVudCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQ29tcGxldGVkIChpZCkge1xuICAgICAgICB0aGlzLnRvZG9saXN0LnRvZ2dsZUNvbXBsZXRlZChpZCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRvZG9saXN0LmdldFRhc2soaWQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhc2tFbGVtZW50KHRhc2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBSZXR1cm4gdGhlIHRhc2sgd2l0aCB0aGUgZ2l2ZW4gaWRcbiAgICAgKiAgSWYgdGhlIHRhc2sgaXMgbm90IGZvdW5kLCByZXR1cm4gbnVsbFxuICAgICAqIEBwYXJhbSB7fSBpZCBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBnZXRUYXNrIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvbGlzdC5nZXRUYXNrKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqICBFZGl0IFRhc2tcbiAgICAgKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gICAgY3JlYXRlRWRpdFRhc2tFdmVudHMgKHRhc2tJRCwgdGFza0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFZGl0VGFza0Nsb3NlRXZlbnQodGFza0lEKTtcbiAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrT3B0aW9uYWxEYXRhRXZlbnQoKTtcbiAgICAgICAgQ2hlY2tCb3guYWRkVG9nZ2xlRXZlbnRMaXN0ZW5lcih0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stYm94JykpO1xuICAgICAgICB0aGlzLmNyZWF0ZUVkaXRUYXNrU3VibWl0RXZlbnQodGFza0lEKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFZGl0VGFza0Nsb3NlRXZlbnQgKHRhc2tJRCkge1xuICAgICAgICBjb25zdCBjbG9zZUVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2sgLmNsb3NlLW5ldy10YXNrLWZvcm0nKTtcbiAgICAgICAgY2xvc2VFZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gdGhpcy5nZXRUYXNrKHRhc2tJRCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2tFbGVtZW50KHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZUVkaXRUYXNrRm9ybSAoKSB7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2sgJyk7XG4gICAgICAgIGlmIChlZGl0VGFza0Zvcm0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJRCA9IGVkaXRUYXNrRm9ybS5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gdGhpcy5nZXRUYXNrKHRhc2tJRCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2tFbGVtZW50KHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNyZWF0ZUVkaXRUYXNrU3VibWl0RXZlbnQgKHRhc2tJRCkge1xuICAgICAgICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrIC5uZXctdGFzay1mb3JtJyk7IC8vIEdldCB0aGUgZWRpdCB0YXNrIGZvcm1cbiAgICAgICAgZWRpdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7IC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGVkaXQgdGFzayBmb3JtXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgc3VibWl0IGV2ZW50XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHZhbHVlcyBmcm9tIHRoZSBlZGl0IHRhc2sgZm9ybVxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLW5vdGVzJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stYm94JykuZGF0YXNldC5pc0NvbXBsZXRlZCA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCB0YWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXRhZ3MnKS52YWx1ZVxuICAgICAgICAgICAgaWYgKHRhZ3MpIHtcbiAgICAgICAgICAgICAgICB0YWdzID0gdGFncy5zcGxpdCgnLCcpLm1hcCh0YWcgPT4gdGFnLnRyaW0oKSk7IC8vIFJlbW92ZSB0aGUgd2hpdGUgc3BhY2VzIGZyb20gdGhlIHRhZ3NcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFncyA9IFtdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkdWVEYXRlID0gcGFyc2VJU08oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWR1ZS1kYXRlJykudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGR1ZURhdGUgPT0gJ0ludmFsaWQgRGF0ZScpIHtcbiAgICAgICAgICAgICAgICBkdWVEYXRlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFzayA9IHRoaXMuZ2V0VGFzayh0YXNrSUQpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRhc2sgd2l0aCB0aGUgbmV3IHZhbHVlc1xuICAgICAgICAgICAgdGFzay5zZXRUaXRsZSh0aXRsZSk7XG4gICAgICAgICAgICB0YXNrLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHRhc2suc2V0RHVlRGF0ZShkdWVEYXRlKTtcbiAgICAgICAgICAgIHRhc2suc2V0Q2F0ZWdvcmllcyh0YWdzKTtcbiAgICAgICAgICAgIHRhc2suc2V0Q29tcGxldGVkKGNvbXBsZXRlZCk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFzayBlbGVtZW50IGluIHRoZSB0YXNrIGxpc3RcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFza0VsZW1lbnQodGFzayk7XG4gICAgICAgICAgICBzYXZlSW5Mb2NhbFN0b3JhZ2UodGhpcy5nZXRBbGxUYXNrcygpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiAgUHJvamVjdHNcbiAgICAgKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG5cblxuXG4gICAgLyoqXG4gICAgICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiAgRm9ybSBUYXNrIFxuICAgICAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiAgQ3JlYXRlIGEgdGFzayBmb3JtIHVzZWQgdG86XG4gICAgICogIC0gQ3JlYXRlIGEgbmV3IHRhc2tcbiAgICAgKiAgLSBFZGl0IGFuIGV4aXN0aW5nIHRhc2tcbiAgICAgKiAgSWYgdGhlIHRhc2tJRCBpcyBub3QgcHJvdmlkZWQsIHRoZSBmb3JtIGlzIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHRhc2tcbiAgICAgKiAgSWYgdGhlIHRhc2tJRCBpcyBwcm92aWRlZCwgdGhlIGZvcm0gaXMgdXNlZCB0byBlZGl0IGFuIGV4aXN0aW5nIHRhc2tcbiAgICAgKiBAcGFyYW0ge1Rhc2t9IHRhc2tJRCBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBjcmVhdGVUYXNrRm9ybSh0YXNrKSAge1xuICAgICAgICBsZXQgdGFza1RpdGxlID0gXCJcIjtcbiAgICAgICAgbGV0IHRhc2tOb3RlcyA9IFwiXCI7XG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IFwiXCI7XG4gICAgICAgIGxldCBmaXJzdERhdGVPZldlZWsgPSBcIlwiO1xuICAgICAgICBsZXQgbGFzdERhdGVPZldlZWsgPSBcIlwiO1xuICAgICAgICBsZXQgdGFza1RhZ3MgPSBcIlwiO1xuICAgICAgICBsZXQgdGFza0NvbXBsZXRlID0gbnVsbDtcblxuICAgICAgICAvLyBJZiB0aGUgYWN0aXZlIHByb2plY3QgaXMgdG9kYXksIHNldCB0aGUgZHVlIGRhdGUgdG8gdG9kYXlcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUHJvamVjdCA9PSAndG9kYXknKSB7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZSA9IGZvcm1hdElTTyhuZXcgRGF0ZSgpLCB7cmVwcmVzZW50YXRpb246ICdkYXRlJ30pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlUHJvamVjdCA9PSAnd2VlaycpIHsgLy8gSWYgdGhlIGFjdGl2ZSBwcm9qZWN0IGlzIHdlZWssIHNldCB0aGUgbWF4IGR1ZSBkYXRlIHRvIHRoZSBlbmQgb2YgdGhlIHdlZWtcbiAgICAgICAgICAgIGZpcnN0RGF0ZU9mV2VlayA9IGZvcm1hdElTTyhzdGFydE9mV2VlayhuZXcgRGF0ZSgpLCB7d2Vla1N0YXJ0c09uOiAxfSksIHtyZXByZXNlbnRhdGlvbjogJ2RhdGUnfSk7XG4gICAgICAgICAgICBsYXN0RGF0ZU9mV2VlayA9ICBmb3JtYXRJU08oZW5kT2ZXZWVrKG5ldyBEYXRlKCksIHt3ZWVrU3RhcnRzT246IDF9KSwge3JlcHJlc2VudGF0aW9uOiAnZGF0ZSd9KTs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgdGFza1RpdGxlID0gdGFzay5nZXRUaXRsZSgpO1xuICAgICAgICAgICAgdGFza05vdGVzID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgdGFza0NvbXBsZXRlID0gdGFzay5pc0NvbXBsZXRlZCgpO1xuICAgICAgICAgICAgaWYgKHRhc2suZ2V0RHVlRGF0ZSgpKXtcbiAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZSA9IGZvcm1hdElTTyh0YXNrLmdldER1ZURhdGUoKSwge3JlcHJlc2VudGF0aW9uOiAnZGF0ZSd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2tUYWdzID0gdGFzay5nZXRDYXRlZ29yaWVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3Rhc2sgPyBcImVkaXQtdGFza1wiIDogXCJ0YXNrIG5ldy10YXNrXCJ9XCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJuZXctdGFzay1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGFza0NvbXBsZXRlICE9IG51bGwgXG4gICAgICAgICAgICAgICAgICAgID8gQ2hlY2tCb3guY3JlYXRlQ2hlY2tCb3hFbGVtZW50KHRhc2tDb21wbGV0ZSkub3V0ZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm5ldy10YXNrLXRpdGxlXCIgcGxhY2Vob2xkZXI9XCIke3Rhc2sgPyBcIlRpdGxlXCIgOiBcIk5ldyBUYXNrXCJ9XCIgdmFsdWU9XCIke3Rhc2tUaXRsZX1cIiAgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm5ldy10YXNrLW5vdGVzXCIgcGxhY2Vob2xkZXI9XCJOb3Rlc1wiIHZhbHVlPVwiJHt0YXNrTm90ZXN9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uYWwtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkdWUtZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkdWUtZGF0ZS1pY29uIG1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5mbGFnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cIm5ldy10YXNrLWR1ZS1kYXRlXCIgdmFsdWU9XCIke3Rhc2tEdWVEYXRlfVwiIG1pbj1cIiR7Zmlyc3REYXRlT2ZXZWVrfVwiIG1heD1cIiR7bGFzdERhdGVPZldlZWt9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWctaWNvbiBtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+c2VsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJuZXctdGFzay10YWdzXCIgcGxhY2Vob2xkZXI9XCJFeDogR2l0aHViLFJQLi4uXCIgdmFsdWU9XCIke3Rhc2sgPyB0YXNrVGFncy50b1N0cmluZygpIDogXCJcIn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1uZXctdGFzay1mb3JtIG1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibmV3LXRhc2stc3VibWl0XCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+JHt0YXNrID8gXCJjaGVja1wiIDogXCJhZGRcIn08L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tGb3JtO1xuICAgIH1cblxuICAgIGFkZENoZWNrQm94RXZlbnRMaXN0ZW5lciAoaWQsIHRhc2tGb3JtKSB7XG4gICAgICAgIC8vIEdldCAudGFzay1pbmZvIGFuZCAudGFzay1kZWxldGUtY29udGFpbmVyIGVsZW1lbnRzXG4gICAgICAgIC8vIFRoZW4gZ2V0IHRoZSBmaXJzdCBjaGlsZCBvZiAudGFzay1pbmZvIGVsZW1lbnQgYW5kIGdldCBhbGwgdGhlIGNoaWxkcmVuIG9mIHRoZSBmaXJzdCBjaGlsZFxuICAgICAgICAvLyBUaGVuIGZpbmQgdGhlIGNoaWxkIHdpdGggdGhlIGNsYXNzIC5jaGVjay1ib3hcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKHRhc2tGb3JtLmNoaWxkcmVuLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBjaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrLWJveFwiKSk7XG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoKFwiY2xpY2tcIiksICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBET01Ub2RvTGlzdC5nZXRUYXNrKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94RWxlbWVudCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2stYm94XCIpO1xuICAgICAgICAgICAgdGFzay50b2dnbGVDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgIERPTVRhc2sudXBkYXRlQ2hlY2tCb3hFbGVtZW50KGNoZWNrQm94RWxlbWVudCwgdGFzay5pc0NvbXBsZXRlZCgpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB0aGUgdGFzayBjcmVhdG9yIGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgdGFzayBsaXN0XG4gICAgICogVGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gY3JlYXRlIG5ldyB0YXNrc1xuICAgICAqL1xuICAgIHByaW50QWRkVGFza0VsZW1lbnQgKCkge1xuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBuZXcgdGFzayBlbGVtZW50XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tFbGVtZW50ID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2sgbmV3LXRhc2tcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5hZGQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+Q3JlYXRlIFRhc2s8L3A+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgbmV3IGFkZCB0YXNrIGVsZW1lbnQgdG8gdGhlIHRhc2sgbGlzdFxuICAgICAgICB0YXNrTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG5ld1Rhc2tFbGVtZW50KTtcbiAgICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrRXZlbnRzKCk7IC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBuZXcgYWRkIHRhc2sgZWxlbWVudFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBTaG93IHRoZSBjcmVhdGUgbmV3IHRhc2sgZm9ybSB3aGVuIHRoZSBhZGQgdGFzayBlbGVtZW50IGlzIGNsaWNrZWRcbiAgICAgKiBBZGQgdGhlIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgbmV3IHRhc2sgZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZUFkZFRhc2tFdmVudHMgKCkgeyBcbiAgICAgICAgLy8gQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgbmV3IHRhc2sgZWxlbWVudFxuICAgICAgICBjb25zdCBhZGRUYXNrRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuICAgICAgICBhZGRUYXNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxGb3JtcygpIC8vIENsb3NlIGFsbCB0aGUgZm9ybXNcbiAgICAgICAgICAgIHRoaXMucHJpbnRBZGRUYXNrRm9ybSgpOyAvLyBTaG93IHRoZSBhZGQgdGFzayBmb3JtXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tGb3JtQ2xvc2VFdmVudCgpOyAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjbG9zZSBidXR0b25cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza1N1Ym1pdEV2ZW50KCk7IC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWRkVGFza09wdGlvbmFsRGF0YUV2ZW50KCk7IC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIG9wdGlvbmFsIGRhdGEgaWNvbnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgYWRkIHRhc2sgZm9ybVxuICAgICAqIFRoaXMgZm9ybSBpcyB1c2VkIHRvIGNyZWF0ZSBuZXcgdGFza3NcbiAgICAgKi8gXG4gICAgcHJpbnRBZGRUYXNrRm9ybSAoKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcbiAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1mb3JtJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gdGhpcy5jcmVhdGVUYXNrRm9ybSgpOyAvLyBDcmVhdGUgdGhlIG5ldyB0YXNrIGZvcm1cbiAgICAgICAgbmV3VGFzay5vdXRlckhUTUwgPSBuZXdUYXNrRm9ybTsgLy8gUmVwbGFjZSB0aGUgbmV3IHRhc2sgZWxlbWVudCB3aXRoIHRoZSBuZXcgdGFzayBmb3JtXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIGFkZCB0YXNrIGZvcm1cbiAgICAgKiBSZW1vdmUgdGhlIGFkZCB0YXNrIGZvcm0gYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgYWRkIHRhc2sgZWxlbWVudFxuICAgICAqL1xuICAgIGNsb3NlQWRkVGFza0Zvcm0gKCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuICAgICAgICBuZXdUYXNrRm9ybS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5wcmludEFkZFRhc2tFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqICBBZGQgVGFzayBGb3JtIEV2ZW50c1xuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIEFkZCB0YXNrIGZvcm0gc3VibWl0IGJ1dHRvblxuICAgICAqL1xuICAgIGNyZWF0ZUFkZFRhc2tTdWJtaXRFdmVudCAoKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWZvcm0nKTtcbiAgICAgICAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXRpdGxlJykudmFsdWU7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSB0aXRsZSBpcyBlbXB0eSwgZG9uJ3QgY3JlYXRlIHRoZSB0YXNrXG4gICAgICAgICAgICBpZiAodGl0bGUudHJpbSgpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXRpdGxlJykudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBjcmVhdGVIaWRkZW5Qb3B1cCgnVGFzayB0aXRsZSBjYW5ub3QgYmUgZW1wdHknLCAxNTAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IFxuXG5cbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLW5vdGVzJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IHBhcnNlSVNPKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1kdWUtZGF0ZScpLnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkdWVEYXRlID09ICdJbnZhbGlkIERhdGUnKSB7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay10YWdzJykudmFsdWVcbiAgICAgICAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgICAgICAgICAgdGFncyA9IHRhZ3Muc3BsaXQoJywnKS5tYXAodGFnID0+IHRhZy50cmltKCkpOyAvLyBSZW1vdmUgdGhlIHdoaXRlIHNwYWNlcyBmcm9tIHRoZSB0YWdzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhZ3MgPSBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGFza1Byb2plY3QgPSB0aGlzLmFjdGl2ZVByb2plY3Q7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSB0YXNrIGlzIGR1ZSB0b2RheSBhbmQgdGhlIGFjdGl2ZSBwcm9qZWN0IGlzIGluYm94LCBzZXQgdGhlIHRhc2sgcHJvamVjdCB0byB0b2RheVxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUHJvamVjdCA9PSAnaW5ib3gnIHx8IHRoaXMuYWN0aXZlUHJvamVjdCA9PSAnd2VlaycgfHwgdGhpcy5hY3RpdmVQcm9qZWN0ID09ICd0b2RheScpIHtcbiAgICAgICAgICAgICAgICBpZiAoZHVlRGF0ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tQcm9qZWN0ID0gJ2luYm94JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzVG9kYXkoZHVlRGF0ZSkgJiYgKHRoaXMuYWN0aXZlUHJvamVjdCA9PSAnaW5ib3gnIHx8IHRoaXMuYWN0aXZlUHJvamVjdCA9PSAnd2VlaycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tQcm9qZWN0ID0gJ3RvZGF5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluU2FtZVdlZWsoZHVlRGF0ZSkgJiYgKHRoaXMuYWN0aXZlUHJvamVjdCA9PSAnaW5ib3gnIHx8IHRoaXMuYWN0aXZlUHJvamVjdCA9PSBcInRvZGF5XCIpICYmICFpc1RvZGF5KGR1ZURhdGUpKSB7IC8vIElmIHRoZSB0YXNrIGlzIGR1ZSB0aGlzIHdlZWsgYW5kIHRoZSBhY3RpdmUgcHJvamVjdCBpcyBpbmJveCwgc2V0IHRoZSB0YXNrIHByb2plY3QgdG8gd2Vla1xuICAgICAgICAgICAgICAgICAgICB0YXNrUHJvamVjdCA9ICd3ZWVrJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgdGFza1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZmFsc2UsIHRhc2tQcm9qZWN0LCB0YWdzKTtcblxuICAgICAgICAgICAgaWYgKHRhc2tQcm9qZWN0ID09IHRoaXMuYWN0aXZlUHJvamVjdCkgeyAvLyBJZiB0aGUgdGFzayBwcm9qZWN0IGlzIHRoZSBhY3RpdmUgcHJvamVjdCwgYWRkIHRoZSB0YXNrIHRvIHRoZSBhY3RpdmUgcHJvamVjdFxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhdGVnb3J5TGlzdCgpXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBJZiB0aGUgdGFzayBwcm9qZWN0IGlzIG5vdCB0aGUgYWN0aXZlIHByb2plY3QgYWRkIHRoZSB0YXNrIHRvIHRoZSBhcnJheSBidXQgZG9uJ3QgYWRkIGl0IHRvIHRoZSBET01cbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9saXN0Lmluc2VydFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgc2F2ZUluTG9jYWxTdG9yYWdlKHRoaXMuZ2V0QWxsVGFza3MoKSlcbiAgICAgICAgICAgICAgICBjcmVhdGVIaWRkZW5Qb3B1cChgVGFzayBjcmVhdGVkIC0gTW92ZWQgdG8gPHNwYW4gY2xhc3M9XCJwb3B1cC10YXNrLXByb2plY3RcIj4ke3Rhc2tQcm9qZWN0LnRvVXBwZXJDYXNlKCl9PC9zcGFuPmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbG9zZUFkZFRhc2tGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIEFkZCB0YXNrIGZvcm0gY2xvc2UgYnV0dG9uXG4gICAgICovXG4gICAgY3JlYXRlQWRkVGFza0Zvcm1DbG9zZUV2ZW50ICgpIHtcbiAgICAgICAgY29uc3QgY2xvc2VOZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzayAuY2xvc2UtbmV3LXRhc2stZm9ybScpO1xuICAgICAgICBjbG9zZU5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUFkZFRhc2tGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBvcHRpb25hbCBkYXRhIGljb25zXG4gICAgICogIFdoZW4gdGhlIGljb24gaXMgY2xpY2tlZCwgc2hvdyB0aGUgb3B0aW9uYWwgZGF0YSBmb3JtXG4gICAgICogIFdoZW4gdGhlIGljb24gaXMgY2xpY2tlZCBhZ2FpbiwgaGlkZSB0aGUgb3B0aW9uYWwgZGF0YSBmb3JtXG4gICAgICogIE9ubHkgb25lIG9wdGlvbmFsIGRhdGEgZm9ybSBjYW4gYmUgc2hvd24gYXQgYSB0aW1lXG4gICAgICogIElmIHRoZSB1c2VyIGNsaWNrcyBvbiBhbm90aGVyIG9wdGlvbmFsIGRhdGEgaWNvbiwgaGlkZSB0aGUgY3VycmVudCBvcHRpb25hbCBkYXRhIGZvcm0gYW5kIHNob3cgdGhlIG5ldyBvcHRpb25hbCBkYXRhIGZvcm1cbiAgICAgKi9cbiAgICBjcmVhdGVBZGRUYXNrT3B0aW9uYWxEYXRhRXZlbnQgKCkge1xuICAgICAgICBjb25zdCBvcHRpb25hbERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3B0aW9uYWwtZGF0YScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbmFsRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uYWxEYXRhQ2hpbGRyZW4gPSBBcnJheS5mcm9tKG9wdGlvbmFsRGF0YVtpXS5jaGlsZHJlbik7XG4gICAgICAgICAgICBvcHRpb25hbERhdGFDaGlsZHJlbi5mb3JFYWNoKGN1cnJlbnRDaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGN1cnJlbnRDaGlsZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1mb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsRGF0YUNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkICE9PSBjdXJyZW50Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QgKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbltkYXRhLXByb2plY3QtdHlwZT1cIiR7cHJvamVjdH1cIl1gKS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBwcm9qZWN0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNlbGVjdFByb2plY3RCdXR0b25BY3RpdmUoYnV0dG9uLmRhdGFzZXQucHJvamVjdFR5cGUpKVxuICAgICAgICBwcm9qZWN0QnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbFRhc2tzQnlQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0c0V2ZW50cygpXG4gICAgICAgIHNlbGVjdFByb2plY3RCdXR0b25BY3RpdmUoJ2luYm94Jyk7XG4gICAgICAgIGNyZWF0ZUhpZGRlblBvcHVwKGBQcm9qZWN0IDxzcGFuIGNsYXNzPVwicG9wdXAtdGFzay1wcm9qZWN0XCI+JHtwcm9qZWN0fTwvc3Bhbj4gZGVsZXRlZCBzdWNjZXNzZnVsbHlgKTtcbiAgICB9XG5cbiAgICBjbG9zZUFsbEZvcm1zICgpICB7XG4gICAgICAgIGNsb3NlTmV3UHJvamVjdEZvcm0oKTtcbiAgICAgICAgdGhpcy5jbG9zZUFkZFRhc2tGb3JtKClcbiAgICAgICAgdGhpcy5jbG9zZUVkaXRUYXNrRm9ybSgpXG4gICAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICBpZiAoIXRoaXMucHJvamVjdExpc3QuaW5jbHVkZXMocHJvamVjdFRpdGxlKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3RUaXRsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3Q7XG4gICAgfVxuXG4gICAgZ2V0VGFza0xpc3QgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdDtcbiAgICB9XG5cbiAgICBnZXRUYXNrTGlzdEJ5UHJvamVjdCAocHJvamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT0gcHJvamVjdCk7XG4gICAgfVxuXG4gICAgc2V0VGFza0xpc3QgKHRhc2tMaXN0KSB7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSB0YXNrTGlzdDtcbiAgICB9XG5cbiAgICBpbnNlcnRUYXNrICh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgZ2V0VGFzayAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3QuZmluZCh0YXNrID0+IHRhc2suaWQgPT0gaWQpO1xuICAgIH1cblxuICAgIHJlbW92ZVRhc2sgKGlkKSB7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSB0aGlzLnRhc2tMaXN0LmZpbHRlcih0ID0+IHQuaWQgIT0gaWQpO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbFRhc2tzQnlQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSB0aGlzLnRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCAhPSBwcm9qZWN0KTtcbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrICh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrTGlzdC5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09IHRhc2suaWQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy50YXNrTGlzdFtpbmRleF0gPSB0YXNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQ29tcGxldGVkIChpZCkge1xuICAgICAgICBjb25zdCB0YXNrID0gdGhpcy5nZXRUYXNrKGlkKTtcbiAgICAgICAgdGFzay50b2dnbGVDb21wbGV0ZWQoKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBmcm9tSlNPTiAoanNvbikge1xuICAgICAgICBsZXQgdG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBqc29uLnRhc2tMaXN0KSB7XG4gICAgICAgICAgICB0b2RvTGlzdC5hZGRUYXNrKFRhc2suZnJvbUpTT04odGFzaykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvTGlzdDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=