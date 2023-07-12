"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/aroma.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/aroma.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/girl-drinking.jpg */ "./src/img/girl-drinking.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/two-hands.jpg */ "./src/img/two-hands.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/late.jpg */ "./src/img/late.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/black-coffee.jpg */ "./src/img/black-coffee.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.aroma {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 0;
    background: #FAF3E1;
}

.aroma .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    max-width: 1290px;
}
.aroma__title {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: #86996C;
    margin-bottom: 1.4em;
    font-size: 14px;
}

.aroma__subtitle {
    color: #D75732;
    font-size: 3.5em;
    font-weight: 100;
    margin-bottom: 0.5em;
}

.aroma__coffeeContainer {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: 646px;
}

.aroma__coffeeName {
    color: #D75732;
    text-decoration: none;
    font-size: 22px;
    overflow: hidden;
}

.aroma__coffeeItem {
    display: flex;
    justify-content: flex-start;
    align-items: end;
    padding: 20px;
    transition: all 0.5s ease-in-out;
    background-size: cover;
    background-position: center;
}

.aroma__coffeeItem:first-child {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    grid-row: 1 / 3;
}

.aroma__coffeeItem:nth-child(2) {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    grid-column: 2 / 4;
}

.aroma__coffeeItem:nth-child(3) {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.aroma__coffeeItem:nth-child(4) {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}


.aroma__coffeeItem:hover {
    cursor: pointer;
}

.aroma__coffeeModal {
    background-color: white;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.8);
    transition: all 0.3s ease-in-out;
}

.aroma__coffeeItem:hover .aroma__coffeeModal {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}`, "",{"version":3,"sources":["webpack://./src/css/aroma.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,qCAAqC;IACrC,yBAAyB;IACzB,cAAc;IACd,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,kCAAkC;IAClC,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,gBAAgB;IAChB,aAAa;IACb,gCAAgC;IAChC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,yDAAiD;IACjD,eAAe;AACnB;;AAEA;IACI,yDAA6C;IAC7C,kBAAkB;AACtB;;AAEA;IACI,yDAAwC;AAC5C;;AAEA;IACI,yDAAgD;AACpD;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,gCAAgC;AACpC;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,mBAAmB;AACvB","sourcesContent":[".aroma {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 120px 0;\n    background: #FAF3E1;\n}\n\n.aroma .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 90%;\n    max-width: 1290px;\n}\n.aroma__title {\n    font-family: 'Montserrat', sans-serif;\n    text-transform: uppercase;\n    color: #86996C;\n    margin-bottom: 1.4em;\n    font-size: 14px;\n}\n\n.aroma__subtitle {\n    color: #D75732;\n    font-size: 3.5em;\n    font-weight: 100;\n    margin-bottom: 0.5em;\n}\n\n.aroma__coffeeContainer {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    width: 100%;\n    height: 646px;\n}\n\n.aroma__coffeeName {\n    color: #D75732;\n    text-decoration: none;\n    font-size: 22px;\n    overflow: hidden;\n}\n\n.aroma__coffeeItem {\n    display: flex;\n    justify-content: flex-start;\n    align-items: end;\n    padding: 20px;\n    transition: all 0.5s ease-in-out;\n    background-size: cover;\n    background-position: center;\n}\n\n.aroma__coffeeItem:first-child {\n    background-image: url(\"../img/girl-drinking.jpg\");\n    grid-row: 1 / 3;\n}\n\n.aroma__coffeeItem:nth-child(2) {\n    background-image: url(\"../img/two-hands.jpg\");\n    grid-column: 2 / 4;\n}\n\n.aroma__coffeeItem:nth-child(3) {\n    background-image: url(\"../img/late.jpg\");\n}\n\n.aroma__coffeeItem:nth-child(4) {\n    background-image: url(\"../img/black-coffee.jpg\");\n}\n\n\n.aroma__coffeeItem:hover {\n    cursor: pointer;\n}\n\n.aroma__coffeeModal {\n    background-color: white;\n    padding: 20px;\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(0.8);\n    transition: all 0.3s ease-in-out;\n}\n\n.aroma__coffeeItem:hover .aroma__coffeeModal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/coffeeCulture.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/coffeeCulture.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/coffeeCulture-background.jpg */ "./src/img/coffeeCulture-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.coffeeCulture {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)),url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    padding: 180px 0;

}

.coffeeCulture__title {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: white;
    margin-bottom: 1.4em;
    font-size: 14px;
}

.coffeeCulture__subtitle {
    color: white;
    font-size: 3.5em;
    font-weight: 100;
    margin-bottom: 0.5em;
    text-align: center;
}

.coffeeCulture__text {
    font-family: 'Montserrat', sans-serif;
    color: #CFC8B8;
}

.coffeeCulture__blinkingCursor {
    animation: blink 0.7s infinite;
}

@keyframes blink {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/coffeeCulture.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB;kFACiF;IACjF,gBAAgB;;AAEpB;;AAEA;IACI,qCAAqC;IACrC,yBAAyB;IACzB,YAAY;IACZ,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,cAAc;AAClB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ","sourcesContent":[".coffeeCulture {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5),\n                       rgba(0, 0, 0, 0.5)),url(\"../img/coffeeCulture-background.jpg\");\n    padding: 180px 0;\n\n}\n\n.coffeeCulture__title {\n    font-family: 'Montserrat', sans-serif;\n    text-transform: uppercase;\n    color: white;\n    margin-bottom: 1.4em;\n    font-size: 14px;\n}\n\n.coffeeCulture__subtitle {\n    color: white;\n    font-size: 3.5em;\n    font-weight: 100;\n    margin-bottom: 0.5em;\n    text-align: center;\n}\n\n.coffeeCulture__text {\n    font-family: 'Montserrat', sans-serif;\n    color: #CFC8B8;\n}\n\n.coffeeCulture__blinkingCursor {\n    animation: blink 0.7s infinite;\n}\n\n@keyframes blink {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/footer.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.footer {
    background-color: #8e897e;
    padding: 40px 0;
}

.footer__link {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', serif;
    color: white;
    text-decoration: none;
    gap: 10px;
    font-size: 20px;
}

.footer__link svg {
    width: 25px;
    fill: white;
}`, "",{"version":3,"sources":["webpack://./src/css/footer.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gCAAgC;IAChC,YAAY;IACZ,qBAAqB;IACrB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,WAAW;AACf","sourcesContent":[".footer {\n    background-color: #8e897e;\n    padding: 40px 0;\n}\n\n.footer__link {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Montserrat', serif;\n    color: white;\n    text-decoration: none;\n    gap: 10px;\n    font-size: 20px;\n}\n\n.footer__link svg {\n    width: 25px;\n    fill: white;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Montserrat:wght@100;200;300;400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Cormorant Garamond', serif;
}

.container {
  margin: 0 25px;
  max-width: 1320px;
}`, "",{"version":3,"sources":["webpack://./src/css/global.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Montserrat:wght@100;200;300;400&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Cormorant Garamond', serif;\n}\n\n.container {\n  margin: 0 25px;\n  max-width: 1320px;\n}"],"sourceRoot":""}]);
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
    position: fixed;
    width: 100%;
    align-items: center;
    padding: 30px 0 10px 0;
    background-color: #00000040;
    backdrop-filter: blur(5px);
    justify-content: space-evenly;
    z-index: 1000;
}

.nav__list {
    display: flex;
    list-style: none;
    align-items: center;
    padding: 20px 0;
    gap: 5vw;
}

.nav__link {
    text-transform: uppercase;
    font-weight: 100;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
}
`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,sBAAsB;IACtB,2BAA2B;IAC3B,0BAA0B;IAC1B,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,gCAAgC;AACpC","sourcesContent":[".header {\n    display: flex;\n    position: fixed;\n    width: 100%;\n    align-items: center;\n    padding: 30px 0 10px 0;\n    background-color: #00000040;\n    backdrop-filter: blur(5px);\n    justify-content: space-evenly;\n    z-index: 1000;\n}\n\n.nav__list {\n    display: flex;\n    list-style: none;\n    align-items: center;\n    padding: 20px 0;\n    gap: 5vw;\n}\n\n.nav__link {\n    text-transform: uppercase;\n    font-weight: 100;\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.2rem;\n    transition: all 0.3s ease-in-out;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home-banner.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home-banner.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/home-background.jpg */ "./src/img/home-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.banner {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.banner__subtitle {
    text-transform: uppercase;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;    
    font-weight: 300;
}

.banner__title {
    font-size: 6rem;
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 100;
}`, "",{"version":3,"sources":["webpack://./src/css/home-banner.css"],"names":[],"mappings":"AAAA;IACI,yDAAmD;IACnD,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,aAAa;IACb,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,qCAAqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,wCAAwC;IACxC,gBAAgB;AACpB","sourcesContent":[".banner {\n    background-image: url(\"../img/home-background.jpg\");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n}\n\n.banner__subtitle {\n    text-transform: uppercase;\n    font-size: 1rem;\n    text-align: center;\n    margin-bottom: 20px;\n    font-family: 'Montserrat', sans-serif;    \n    font-weight: 300;\n}\n\n.banner__title {\n    font-size: 6rem;\n    text-align: center;\n    font-family: 'Cormorant Garamond', serif;\n    font-weight: 100;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/products.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/products.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.products {
    background-color: #FAF3E1;
}
.products .container {
    max-width: 1144px;
    margin: 0 auto;
    padding: 100px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    grid-gap: 2rem;
}

.product-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    padding: 25px;
}

.product-item img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
}

.product-image-container {
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
}
.product-image-container::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.25s ease-in-out;
}

.product-image-container:hover::before {
    opacity: 1;
    transform: scale(1);
}

.product-info-container {
    display: flex;
    justify-content: space-between;
    align-self: center;
    background-color: white;
    padding: 1rem;
    border-radius: 15px;
    width: 100%;
}

.product-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.5rem 0;
}

.product-price {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.5rem 0;
}`, "",{"version":3,"sources":["webpack://./src/css/products.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,2DAA2D;IAC3D,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;IACnB,UAAU;IACV,qBAAqB;IACrB,iCAAiC;AACrC;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB","sourcesContent":[".products {\n    background-color: #FAF3E1;\n}\n.products .container {\n    max-width: 1144px;\n    margin: 0 auto;\n    padding: 100px 0;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));\n    grid-gap: 2rem;\n}\n\n.product-item {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    position: relative;\n    padding: 25px;\n}\n\n.product-item img {\n    border-radius: 15px;\n    width: 100%;\n    height: 100%;\n}\n\n.product-image-container {\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: 15px;\n}\n.product-image-container::before{\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; \n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 15px;\n    opacity: 0;\n    transform: scale(0.8);\n    transition: all 0.25s ease-in-out;\n}\n\n.product-image-container:hover::before {\n    opacity: 1;\n    transform: scale(1);\n}\n\n.product-info-container {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    background-color: white;\n    padding: 1rem;\n    border-radius: 15px;\n    width: 100%;\n}\n\n.product-name {\n    font-size: 1.5rem;\n    font-weight: 600;\n    margin: 0.5rem 0;\n}\n\n.product-price {\n    font-size: 1.2rem;\n    font-weight: 600;\n    margin: 0.5rem 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/scrollToTop.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/scrollToTop.css ***!
  \***********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.scrollBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 2.3em;
    height: 2.3em;
    right: 30px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: #D75732;
    color: white;
    cursor: pointer;
    border-radius: 100%;
    font-size: 18px;
    transition: background-color 0.5s ease;
}

.scrollBtn--active {
    bottom: 30px;
    transition: all 0.3s;
}

.scrollBtn--inactive {
    bottom: -100px;
    transition: bottom 0.5s;
}

.scrollBtn:hover {
    background-color: #E6A347;
}

.scrollBtn svg {
    width: 21px;
    fill: white;
}

`, "",{"version":3,"sources":["webpack://./src/css/scrollToTop.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,aAAa;IACb,WAAW;IACX,WAAW;IACX,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,WAAW;AACf","sourcesContent":[".scrollBtn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    width: 2.3em;\n    height: 2.3em;\n    right: 30px;\n    z-index: 99;\n    border: none;\n    outline: none;\n    background-color: #D75732;\n    color: white;\n    cursor: pointer;\n    border-radius: 100%;\n    font-size: 18px;\n    transition: background-color 0.5s ease;\n}\n\n.scrollBtn--active {\n    bottom: 30px;\n    transition: all 0.3s;\n}\n\n.scrollBtn--inactive {\n    bottom: -100px;\n    transition: bottom 0.5s;\n}\n\n.scrollBtn:hover {\n    background-color: #E6A347;\n}\n\n.scrollBtn svg {\n    width: 21px;\n    fill: white;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/whatWeDo.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/whatWeDo.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/whatWeDo-background.png */ "./src/img/whatWeDo-background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.whatWeDo {
    display: flex;
    justify-content: center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    padding: 120px 0;
}

.whatWeDo__left__img, .whatWeDo__right__img {
    width: 75%;
}

.whatWeDo .container {
    display: flex;
}

.whatWeDo div {
    flex: 1;
}

.whatWeDo__subtitle {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: #86996C;
    margin-bottom: 1.4em;
    font-size: 14px;
}

.whatWeDo__title {
    color: #D75732;
    font-size: 3.5em;
    font-weight: 100;
    margin-bottom: 0.5em;
}

.whatWeDo__right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 70px;
}

.whatWeDo__content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;
}

.whatWeDo__btn {
    color: #D75732;
    font-size: 1.2em;
    font-weight: 100;
    text-decoration: none;
    border: 1px solid #D75732;
    padding: 10px 25px;
    border-radius: 23px;
    transition: all 0.3s ease-in-out;
}

.whatWeDo__btn:hover {
    background-color: #D75732;
    color: #fff;
}

.whatWeDo__right__img {
    align-self: flex-end;
}

.whatWeDo__text {
    font-size: 1.2em;
    font-weight: 100;
    line-height: 1.8em;
    text-align: justify;
}

.whatWeDo__left__img--rotating {
    width: 120px;
    position: relative;
    bottom: 10%;
    right: 10%;

    transform-origin: center center;
    animation: rotating 10s linear infinite;
}

.whatWeDo__left__img--rotating:hover {
   animation-play-state: paused;
}

@keyframes rotating {
    100% {
        transform: rotate(360deg);
    }
}

`, "",{"version":3,"sources":["webpack://./src/css/whatWeDo.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,yDAAuD;IACvD,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,qCAAqC;IACrC,yBAAyB;IACzB,cAAc;IACd,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;IACrB,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,UAAU;;IAEV,+BAA+B;IAC/B,uCAAuC;AAC3C;;AAEA;GACG,4BAA4B;AAC/B;;AAEA;IACI;QACI,yBAAyB;IAC7B;AACJ","sourcesContent":[".whatWeDo {\n    display: flex;\n    justify-content: center;\n    background-image: url(\"../img/whatWeDo-background.png\");\n    padding: 120px 0;\n}\n\n.whatWeDo__left__img, .whatWeDo__right__img {\n    width: 75%;\n}\n\n.whatWeDo .container {\n    display: flex;\n}\n\n.whatWeDo div {\n    flex: 1;\n}\n\n.whatWeDo__subtitle {\n    font-family: 'Montserrat', sans-serif;\n    text-transform: uppercase;\n    color: #86996C;\n    margin-bottom: 1.4em;\n    font-size: 14px;\n}\n\n.whatWeDo__title {\n    color: #D75732;\n    font-size: 3.5em;\n    font-weight: 100;\n    margin-bottom: 0.5em;\n}\n\n.whatWeDo__right {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 70px;\n}\n\n.whatWeDo__content {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 25px;\n}\n\n.whatWeDo__btn {\n    color: #D75732;\n    font-size: 1.2em;\n    font-weight: 100;\n    text-decoration: none;\n    border: 1px solid #D75732;\n    padding: 10px 25px;\n    border-radius: 23px;\n    transition: all 0.3s ease-in-out;\n}\n\n.whatWeDo__btn:hover {\n    background-color: #D75732;\n    color: #fff;\n}\n\n.whatWeDo__right__img {\n    align-self: flex-end;\n}\n\n.whatWeDo__text {\n    font-size: 1.2em;\n    font-weight: 100;\n    line-height: 1.8em;\n    text-align: justify;\n}\n\n.whatWeDo__left__img--rotating {\n    width: 120px;\n    position: relative;\n    bottom: 10%;\n    right: 10%;\n\n    transform-origin: center center;\n    animation: rotating 10s linear infinite;\n}\n\n.whatWeDo__left__img--rotating:hover {\n   animation-play-state: paused;\n}\n\n@keyframes rotating {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/css/aroma.css":
/*!***************************!*\
  !*** ./src/css/aroma.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_aroma_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./aroma.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/aroma.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_aroma_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_aroma_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_aroma_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_aroma_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/coffeeCulture.css":
/*!***********************************!*\
  !*** ./src/css/coffeeCulture.css ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_coffeeCulture_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./coffeeCulture.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/coffeeCulture.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_coffeeCulture_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_coffeeCulture_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_coffeeCulture_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_coffeeCulture_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/footer.css":
/*!****************************!*\
  !*** ./src/css/footer.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/css/home-banner.css":
/*!*********************************!*\
  !*** ./src/css/home-banner.css ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_banner_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home-banner.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home-banner.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_banner_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_banner_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_banner_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_banner_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/products.css":
/*!******************************!*\
  !*** ./src/css/products.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_products_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./products.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/products.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_products_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_products_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_products_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_products_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/scrollToTop.css":
/*!*********************************!*\
  !*** ./src/css/scrollToTop.css ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_scrollToTop_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./scrollToTop.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/scrollToTop.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_scrollToTop_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_scrollToTop_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_scrollToTop_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_scrollToTop_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/whatWeDo.css":
/*!******************************!*\
  !*** ./src/css/whatWeDo.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_whatWeDo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./whatWeDo.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/whatWeDo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_whatWeDo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_whatWeDo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_whatWeDo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_whatWeDo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/scrollToTop.js":
/*!***********************************!*\
  !*** ./src/assets/scrollToTop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _css_scrollToTop_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/scrollToTop.css */ "./src/css/scrollToTop.css");
/* harmony import */ var _img_topRow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/topRow.svg */ "./src/img/topRow.svg");



function scrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.classList.add('scrollBtn', 'scrollBtn--inactive');
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.setAttribute('aria-hidden', 'true');
    scrollBtn.setAttribute('tabindex', '-1');
    scrollBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" color="#fff"><path d="M450-80v-686L242-558l-42-42 280-280 280 280-42 42-208-208v686h-60Z"/></svg>`;
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollBtn.classList.add('scrollBtn--active');
            scrollBtn.classList.remove('scrollBtn--inactive');
            scrollBtn.setAttribute('aria-hidden', 'false');
        } else {
            scrollBtn.classList.add('scrollBtn--inactive');
            scrollBtn.classList.remove('scrollBtn--active');
        }

        scrollBtn.addEventListener("animationend", () => {
            const ariaStatus = scrollBtn.getAttribute('aria-hidden');
            scrollBtn.setAttribute('aria-hidden', !ariaStatus);
        });
    });

    return scrollBtn;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMain: () => (/* binding */ addMain),
/* harmony export */   clearMain: () => (/* binding */ clearMain)
/* harmony export */ });
/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/global.css */ "./src/css/global.css");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_loadPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/loadPage */ "./src/pages/loadPage.js");
/* harmony import */ var _pages_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/products */ "./src/pages/products.js");





function addNavEvents ()  {
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const contactBtn = document.querySelector('#contact');

    homeBtn.addEventListener('click', _pages_home__WEBPACK_IMPORTED_MODULE_1__["default"]);
    menuBtn.addEventListener('click', _pages_products__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

init();

function init() {
    (0,_pages_loadPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    addNavEvents();
}

function clearMain() {
    const main = document.querySelector('#main');
    main.textContent = '';
}

function addMain(element) {
    const main = document.querySelector('#main');
    main.appendChild(element);
};



/***/ }),

/***/ "./src/modules/Global/banner/globalBanner.js":
/*!***************************************************!*\
  !*** ./src/modules/Global/banner/globalBanner.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBanner)
/* harmony export */ });
/* harmony import */ var _css_home_banner_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/home-banner.css */ "./src/css/home-banner.css");


function createBanner(title, subTitle, bgImage) {
    const banner = document.createElement('section');
    banner.classList.add('banner');
    banner.style.backgroundImage = `url(${bgImage})`;
    banner.style.height = '60vh';

    const bannerText = document.createElement('div');
    bannerText.classList.add('banner__text');

    const bannerSubtitle = document.createElement('h2');
    bannerSubtitle.classList.add('banner__subtitle');
    bannerSubtitle.textContent = subTitle;

    const bannerTitle = document.createElement('h1');
    bannerTitle.classList.add('banner__title');
    bannerTitle.textContent = title;

    bannerText.appendChild(bannerSubtitle);
    bannerText.appendChild(bannerTitle);
    

    banner.appendChild(bannerText);

    return banner; 
}

/***/ }),

/***/ "./src/modules/Global/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/modules/Global/footer/footer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/footer.css */ "./src/css/footer.css");


function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerLink = document.createElement('a');
    footerLink.classList.add('footer__link');
    footerLink.setAttribute('href', 'https://github.com/jmcamposdev');
    footerLink.setAttribute('target', '_blank');
    footerLink.setAttribute('rel', 'noopener noreferrer');
    footerLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg><span>jmcamposdev</span>`;

    footer.appendChild(footerLink);

    return footer;
}

/***/ }),

/***/ "./src/modules/Global/header/header.js":
/*!*********************************************!*\
  !*** ./src/modules/Global/header/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/header.css */ "./src/css/header.css");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/logo.png */ "./src/img/logo.png");


const navItems = [
  {
    name: 'Home',
    link: '#'
  },
  {
    name: 'Menu',
    link: '#'
  },
  {
    name: 'Contact',
    link: '#'
  }
];

function createHeader() {
  const header = document.createElement('header')
  header.classList.add('header')

  // Logo
  const logo = document.createElement('div')
  logo.classList.add('logo')
  logo.innerHTML = `<img src="${_img_logo_png__WEBPACK_IMPORTED_MODULE_1__}" alt="logo">`

  // Nav
  const nav = document.createElement('nav')
  nav.classList.add('nav')

  const navList = document.createElement('ul')
  navList.classList.add('nav__list')
  // Add nav items
  navItems.forEach(item => {
    const navItem = document.createElement('li')
    navItem.classList.add('nav__item')
    const navLink = document.createElement('a')
    navLink.classList.add('nav__link')
    navLink.setAttribute('href', item.link)
    navLink.setAttribute('id', item.name.toLowerCase())
    navLink.textContent = item.name

    navItem.appendChild(navLink)
    navList.appendChild(navItem)
  })
  // Add nav list to nav
  nav.appendChild(navList)
  // Add nav and logo to header
  header.appendChild(logo)
  header.appendChild(nav)

  return header
}

/***/ }),

/***/ "./src/modules/Home/aroma/aroma.js":
/*!*****************************************!*\
  !*** ./src/modules/Home/aroma/aroma.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAroma)
/* harmony export */ });
/* harmony import */ var _css_aroma_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/aroma.css */ "./src/css/aroma.css");


const titleContent = "Aroma";
const subTitleContent = "Our Coffee";

const coffeeItems = [
    {
        name: "Iced caramel macchiato",
        type: "Coffee",
        link: "#"
    },
    {
        name: "Creamy hazelnut mocha",
        type: "Coffee",
        link: "#"
    },
    {
        name: "Sweet vanilla latte",
        type: "Coffee",
        link: "#"
    },
    {
        name: "Irish cream coffee",
        type: "Coffee",
        link: "#"
    },
]

function createAroma()  {
    const aroma = document.createElement('section');
    aroma.classList.add('aroma');

    const aromaContainer = document.createElement('div');
    aromaContainer.classList.add('container');

    const title = document.createElement('h2');
    title.classList.add('aroma__title');
    title.textContent = titleContent;

    const subTitle = document.createElement('h3');
    subTitle.classList.add('aroma__subtitle');
    subTitle.textContent = subTitleContent;

    const coffeeContainer = document.createElement('div');
    coffeeContainer.classList.add('aroma__coffeeContainer');

    coffeeItems.forEach(item => {
        const coffeeItem = document.createElement('div');
        coffeeItem.classList.add('aroma__coffeeItem');

        const coffeeModal = document.createElement('div');
        coffeeModal.classList.add('aroma__coffeeModal');

        const coffeeName = document.createElement('a');
        coffeeName.classList.add('aroma__coffeeName');
        coffeeName.textContent = item.name;
        coffeeName.setAttribute('href', item.link);

        const coffeeType = document.createElement('p');
        coffeeType.classList.add('aroma__coffeeType');
        coffeeType.textContent = item.type;

        coffeeModal.appendChild(coffeeName);
        coffeeModal.appendChild(coffeeType);

        coffeeItem.appendChild(coffeeModal);

        coffeeContainer.appendChild(coffeeItem);
    });

    aromaContainer.appendChild(title);
    aromaContainer.appendChild(subTitle);
    aromaContainer.appendChild(coffeeContainer);

    aroma.appendChild(aromaContainer);

    return aroma;
};

/***/ }),

/***/ "./src/modules/Home/banner/banner.js":
/*!*******************************************!*\
  !*** ./src/modules/Home/banner/banner.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBanner)
/* harmony export */ });
/* harmony import */ var _css_home_banner_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/home-banner.css */ "./src/css/home-banner.css");



const subTitle = "Welcome to our Coffeeshop"
const title = "Where Coffee Meets Hospitality"
function createBanner() {
    const banner = document.createElement('section');
    banner.classList.add('banner');


    const bannerText = document.createElement('div');
    bannerText.classList.add('banner__text');

    const bannerSubtitle = document.createElement('h2');
    bannerSubtitle.classList.add('banner__subtitle');
    bannerSubtitle.textContent = subTitle;

    const bannerTitle = document.createElement('h1');
    bannerTitle.classList.add('banner__title');
    bannerTitle.textContent = title;

    bannerText.appendChild(bannerSubtitle);
    bannerText.appendChild(bannerTitle);
    

    banner.appendChild(bannerText);

    return banner; 
}

/***/ }),

/***/ "./src/modules/Home/coffeeCulture/coffeeCulture.js":
/*!*********************************************************!*\
  !*** ./src/modules/Home/coffeeCulture/coffeeCulture.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateLetters: () => (/* binding */ animateLetters),
/* harmony export */   createCoffeeCulture: () => (/* binding */ createCoffeeCulture)
/* harmony export */ });
/* harmony import */ var _css_coffeeCulture_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/coffeeCulture.css */ "./src/css/coffeeCulture.css");



const titleContent = "Coffee Culture";
const subTitleContent = "Crafting the perfect cup of coffee: <br> meticulous "
const lettersContent = ["roasting", "brewing", "serving", "enjoying", "pouring"]
const textContent = "Improve your life with coffee";

function createCoffeeCulture() {
    const coffeeCulture = document.createElement('section');
    coffeeCulture.classList.add('coffeeCulture');

    const title = document.createElement('h2');
    title.classList.add('coffeeCulture__title');
    title.textContent = titleContent;

    const subTitle = document.createElement('h3');
    subTitle.classList.add('coffeeCulture__subtitle');
    subTitle.innerHTML = subTitleContent;

    const letters = document.createElement('span');
    letters.classList.add('coffeeCulture__letters');
    letters.textContent = lettersContent[0];

    const blinkingCursor = document.createElement('span');
    blinkingCursor.classList.add('coffeeCulture__blinkingCursor');
    blinkingCursor.textContent = "_";

    const text = document.createElement('p');
    text.classList.add('coffeeCulture__text');
    text.textContent = textContent;

    coffeeCulture.appendChild(title);
    coffeeCulture.appendChild(subTitle);
    subTitle.appendChild(letters);
    subTitle.appendChild(blinkingCursor);
    coffeeCulture.appendChild(text);
    
    return coffeeCulture;
}

function animateLetters() {
    const letters = document.querySelector(".coffeeCulture__letters");
    let i = 1;
    setInterval(() => {
        const words = lettersContent[i].split(""); // Split each word into an array of letters
        
        // Remove each letter with a delay
        for (let j = 0; j < letters.textContent.length; j++) { 
            setTimeout(() => {
                    letters.textContent = letters.textContent.slice(0, -1);
            }, 75 * (words.length - j));
        }

        i == lettersContent.length - 1 ? i = 0 : i++; // Reset i to 0 if it reaches the end of the array

        // Write the next word after removing the previous one
        setTimeout(() => { 
            words.forEach((letter, index) => { // Write each letter with a delay
                setTimeout(() => {
                    letters.textContent += letter;
                }, 100 * index);
            });
        }, 1500);

        
    }, (200 * lettersContent.length + 1500) + 300); // Wait for the previous word to be written before starting the next one
}





/***/ }),

/***/ "./src/modules/Home/whatWeDo/whatWeDo.js":
/*!***********************************************!*\
  !*** ./src/modules/Home/whatWeDo/whatWeDo.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createwhatWeDo)
/* harmony export */ });
/* harmony import */ var _css_whatWeDo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/whatWeDo.css */ "./src/css/whatWeDo.css");
/* harmony import */ var _img_left_person_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/left-person.jpg */ "./src/img/left-person.jpg");
/* harmony import */ var _img_right_person_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/right-person.jpg */ "./src/img/right-person.jpg");
/* harmony import */ var _img_rotated_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/rotated-img.png */ "./src/img/rotated-img.png");





const whatWeDoSubtitleText = "What we do";
const whatWeDoTitleText = "Coffee culture at its finest: elevating your coffee game";
const textParagraph = "Discover the essence of our coffee shop in California, where coffee comes alive with a story of motivation and achievement. From humble beginnings to becoming a haven for dreamers and coffee lovers, our journey is full of exciting moments. Join us and be inspired."
const linkText = "About us";
const linkUrl = "#";

function createwhatWeDo() {
    const whatWeDo = document.createElement('section');
    whatWeDo.classList.add('whatWeDo');

    const container = document.createElement('div');
    container.classList.add('container');

    // Left container
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('whatWeDo__left');

    // Left container Subtitle
    const whatWeDoSubtitle = document.createElement('h3');
    whatWeDoSubtitle.classList.add('whatWeDo__subtitle');
    whatWeDoSubtitle.textContent = whatWeDoSubtitleText;

    // Left container Title
    const whatWeDoTitle = document.createElement('h2');
    whatWeDoTitle.classList.add('whatWeDo__title');
    whatWeDoTitle.textContent = whatWeDoTitleText;

    // Left container Image
    const leftImg = document.createElement('img');
    leftImg.classList.add('whatWeDo__left__img');
    leftImg.setAttribute('src', _img_left_person_jpg__WEBPACK_IMPORTED_MODULE_1__);

    const rotatingImg = document.createElement('img');
    rotatingImg.classList.add('whatWeDo__left__img--rotating');
    rotatingImg.setAttribute('src', _img_rotated_img_png__WEBPACK_IMPORTED_MODULE_3__);

    // Right container
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('whatWeDo__right');

    // Right container Image
    const rightImg = document.createElement('img');
    rightImg.classList.add('whatWeDo__right__img');
    rightImg.setAttribute('src', _img_right_person_jpg__WEBPACK_IMPORTED_MODULE_2__);

    // Right container Content
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('whatWeDo__content');

    // Right container Content Text
    const whatWeDoText = document.createElement('p');
    whatWeDoText.classList.add('whatWeDo__text');
    whatWeDoText.textContent = textParagraph;

    // Right container Content Link
    const whatWeDoLink = document.createElement('a');
    whatWeDoLink.classList.add('whatWeDo__btn');
    whatWeDoLink.textContent = "About us";
    whatWeDoLink.setAttribute('href', linkUrl);

    // Append
    whatWeDo.appendChild(container);

    container.appendChild(leftContainer);
    container.appendChild(rightContainer);

    leftContainer.appendChild(whatWeDoSubtitle);
    leftContainer.appendChild(whatWeDoTitle);
    leftContainer.appendChild(leftImg);
    leftContainer.appendChild(rotatingImg);

    contentContainer.appendChild(whatWeDoText);
    contentContainer.appendChild(whatWeDoLink);

    rightContainer.appendChild(rightImg);
    rightContainer.appendChild(contentContainer);
    

    return whatWeDo;
}


/***/ }),

/***/ "./src/modules/Products/Product/productItem.js":
/*!*****************************************************!*\
  !*** ./src/modules/Products/Product/productItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProductItem)
/* harmony export */ });
function createProductItem(name, price, image) {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const productImageContainer = document.createElement("div");
    productImageContainer.classList.add("product-image-container");

    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.src = image;
    productImage.alt = name;

    const productInfoContainer = document.createElement("div");
    productInfoContainer.classList.add("product-info-container");

    const productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.textContent = name;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = price;


    productImageContainer.appendChild(productImage);

    productInfoContainer.appendChild(productName);
    productInfoContainer.appendChild(productPrice);

    productItem.appendChild(productImageContainer);
    productItem.appendChild(productInfoContainer);

    return productItem;
}

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_Home_banner_banner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Home/banner/banner.js */ "./src/modules/Home/banner/banner.js");
/* harmony import */ var _modules_Home_whatWeDo_whatWeDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Home/whatWeDo/whatWeDo.js */ "./src/modules/Home/whatWeDo/whatWeDo.js");
/* harmony import */ var _modules_Home_coffeeCulture_coffeeCulture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Home/coffeeCulture/coffeeCulture.js */ "./src/modules/Home/coffeeCulture/coffeeCulture.js");
/* harmony import */ var _modules_Home_aroma_aroma_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/Home/aroma/aroma.js */ "./src/modules/Home/aroma/aroma.js");





function createHome() {
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild((0,_modules_Home_banner_banner_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    main.appendChild((0,_modules_Home_whatWeDo_whatWeDo_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    main.appendChild((0,_modules_Home_coffeeCulture_coffeeCulture_js__WEBPACK_IMPORTED_MODULE_2__.createCoffeeCulture)());
    (0,_modules_Home_coffeeCulture_coffeeCulture_js__WEBPACK_IMPORTED_MODULE_2__.animateLetters)();
    main.appendChild((0,_modules_Home_aroma_aroma_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/pages/loadPage.js":
/*!*******************************!*\
  !*** ./src/pages/loadPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _assets_scrollToTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/scrollToTop */ "./src/assets/scrollToTop.js");
/* harmony import */ var _modules_Global_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Global/footer/footer */ "./src/modules/Global/footer/footer.js");
/* harmony import */ var _modules_Global_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Global/header/header */ "./src/modules/Global/header/header.js");




function loadPage() {
    const root = document.querySelector('#root');

    root.appendChild((0,_modules_Global_header_header__WEBPACK_IMPORTED_MODULE_2__["default"])()); // Header that is static for all pages
    
    // Main that will change depending on the page the user is on
    const main = document.createElement('main'); 
    main.setAttribute('id', 'main');
    main.appendChild((0,_assets_scrollToTop__WEBPACK_IMPORTED_MODULE_0__["default"])()); // Scroll to top button that will be hidden until the user scrolls down
    root.appendChild(main);

    root.appendChild((0,_modules_Global_footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"])()); // Footer that is static for all pages
}

/***/ }),

/***/ "./src/pages/products.js":
/*!*******************************!*\
  !*** ./src/pages/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProductsPage)
/* harmony export */ });
/* harmony import */ var _css_products_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/products.css */ "./src/css/products.css");
/* harmony import */ var _img_products_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/products-background.jpg */ "./src/img/products-background.jpg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _modules_Global_banner_globalBanner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/Global/banner/globalBanner.js */ "./src/modules/Global/banner/globalBanner.js");
/* harmony import */ var _modules_Products_Product_productItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/Products/Product/productItem */ "./src/modules/Products/Product/productItem.js");
/* harmony import */ var _img_products_espresso_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/products/espresso.jpg */ "./src/img/products/espresso.jpg");
/* harmony import */ var _img_products_latte_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/products/latte.jpg */ "./src/img/products/latte.jpg");
/* harmony import */ var _img_products_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/products/cappuccino.jpg */ "./src/img/products/cappuccino.jpg");
/* harmony import */ var _img_products_mocha_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/products/mocha.jpg */ "./src/img/products/mocha.jpg");
/* harmony import */ var _img_products_americano_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/products/americano.jpg */ "./src/img/products/americano.jpg");
/* harmony import */ var _img_products_macchiato_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/products/macchiato.webp */ "./src/img/products/macchiato.webp");
/* harmony import */ var _img_products_cortado_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/products/cortado.webp */ "./src/img/products/cortado.webp");
/* harmony import */ var _img_products_frappe_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/products/frappe.jpg */ "./src/img/products/frappe.jpg");






// Products images









const products = [
    {
        name: "Espresso",
        price: "$2.50",
        image: _img_products_espresso_jpg__WEBPACK_IMPORTED_MODULE_5__
    },
    {
        name: "Latte",
        price: "$3.50",
        image: _img_products_latte_jpg__WEBPACK_IMPORTED_MODULE_6__,
    },
    {
        name: "Cappuccino",
        price: "$3.00",
        image: _img_products_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_7__,
    },
    {
        name: "Mocha",
        price: "$4.00",
        image: _img_products_mocha_jpg__WEBPACK_IMPORTED_MODULE_8__,
    },
    {
        name: "Americano",
        price: "$2.75",
        image: _img_products_americano_jpg__WEBPACK_IMPORTED_MODULE_9__,
    },
    {
        name: "Macchiato",
        price: "$3.25",
        image: _img_products_macchiato_webp__WEBPACK_IMPORTED_MODULE_10__
        ,
    },
    {
        name: "Cortado",
        price: "$3.25",
        image: _img_products_cortado_webp__WEBPACK_IMPORTED_MODULE_11__,
    },
    {
        name: "Frappé",
        price: "$4.50",
        image: _img_products_frappe_jpg__WEBPACK_IMPORTED_MODULE_12__,
    },
]

function createProductsPage() {
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.clearMain)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.addMain)((0,_modules_Global_banner_globalBanner_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Products", "The best quality for you", _img_products_background_jpg__WEBPACK_IMPORTED_MODULE_1__));
    const productsContainer = document.createElement("section");
    productsContainer.classList.add("products");

    const productsContent = document.createElement("div");
    productsContent.classList.add("container");

    productsContainer.appendChild(productsContent);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.addMain)(productsContainer);

    products.forEach(product => {
        addProduct((0,_modules_Products_Product_productItem__WEBPACK_IMPORTED_MODULE_4__["default"])(product.name, product.price, product.image));
    });
}

function addProduct(product) {
    const productsContainer = document.querySelector(".products .container");
    productsContainer.appendChild(product);
}

/***/ }),

/***/ "./src/img/black-coffee.jpg":
/*!**********************************!*\
  !*** ./src/img/black-coffee.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "384ec31aa7ceafa2562a.jpg";

/***/ }),

/***/ "./src/img/coffeeCulture-background.jpg":
/*!**********************************************!*\
  !*** ./src/img/coffeeCulture-background.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9602b3dc5ccd0d8297d4.jpg";

/***/ }),

/***/ "./src/img/girl-drinking.jpg":
/*!***********************************!*\
  !*** ./src/img/girl-drinking.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c5a88833a70597915ca.jpg";

/***/ }),

/***/ "./src/img/home-background.jpg":
/*!*************************************!*\
  !*** ./src/img/home-background.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3d55e13d8f7e2a6ed06.jpg";

/***/ }),

/***/ "./src/img/late.jpg":
/*!**************************!*\
  !*** ./src/img/late.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d954da261e05f829e8e4.jpg";

/***/ }),

/***/ "./src/img/left-person.jpg":
/*!*********************************!*\
  !*** ./src/img/left-person.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d9cabc0a2520985dc83.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89fc489f308f0372296f.png";

/***/ }),

/***/ "./src/img/products-background.jpg":
/*!*****************************************!*\
  !*** ./src/img/products-background.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73a097413e616c9ea545.jpg";

/***/ }),

/***/ "./src/img/products/americano.jpg":
/*!****************************************!*\
  !*** ./src/img/products/americano.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae15363d0d904e6cbdb2.jpg";

/***/ }),

/***/ "./src/img/products/cappuccino.jpg":
/*!*****************************************!*\
  !*** ./src/img/products/cappuccino.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94b356e4362a3038ca1e.jpg";

/***/ }),

/***/ "./src/img/products/cortado.webp":
/*!***************************************!*\
  !*** ./src/img/products/cortado.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fab7394c79be554a787a.webp";

/***/ }),

/***/ "./src/img/products/espresso.jpg":
/*!***************************************!*\
  !*** ./src/img/products/espresso.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9e17da8eb847d4cbb1e.jpg";

/***/ }),

/***/ "./src/img/products/frappe.jpg":
/*!*************************************!*\
  !*** ./src/img/products/frappe.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be1ad171eeab95f9ca79.jpg";

/***/ }),

/***/ "./src/img/products/latte.jpg":
/*!************************************!*\
  !*** ./src/img/products/latte.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b9df6793385aa83f11e.jpg";

/***/ }),

/***/ "./src/img/products/macchiato.webp":
/*!*****************************************!*\
  !*** ./src/img/products/macchiato.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c1027314a3cf0b44e07.webp";

/***/ }),

/***/ "./src/img/products/mocha.jpg":
/*!************************************!*\
  !*** ./src/img/products/mocha.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a4a30c941496822d709.jpg";

/***/ }),

/***/ "./src/img/right-person.jpg":
/*!**********************************!*\
  !*** ./src/img/right-person.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0985c8670926740b799.jpg";

/***/ }),

/***/ "./src/img/rotated-img.png":
/*!*********************************!*\
  !*** ./src/img/rotated-img.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b15f69e447a1289b0cb.png";

/***/ }),

/***/ "./src/img/topRow.svg":
/*!****************************!*\
  !*** ./src/img/topRow.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7848643750097e98e989.svg";

/***/ }),

/***/ "./src/img/two-hands.jpg":
/*!*******************************!*\
  !*** ./src/img/two-hands.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "369f1e3b1f605a512a2a.jpg";

/***/ }),

/***/ "./src/img/whatWeDo-background.png":
/*!*****************************************!*\
  !*** ./src/img/whatWeDo-background.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0b9874164ba093f4770.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tzs7QUFFWDtBQUNBLG1CQUFtQixpRkFBaUI7QUFDcEMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2Fyb21hLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvY29mZmVlQ3VsdHVyZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2hvbWUtYmFubmVyLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvcHJvZHVjdHMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9zY3JvbGxUb1RvcC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL3doYXRXZURvLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2Fyb21hLmNzcz9mOTQ2Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9jb2ZmZWVDdWx0dXJlLmNzcz9hMGUxIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9mb290ZXIuY3NzP2FiOGMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2dsb2JhbC5jc3M/NTg0YSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvaGVhZGVyLmNzcz84YWMxIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9ob21lLWJhbm5lci5jc3M/M2YzZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvcHJvZHVjdHMuY3NzP2QzNDkiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL3Njcm9sbFRvVG9wLmNzcz8yNTAwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy93aGF0V2VEby5jc3M/MzA2ZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Fzc2V0cy9zY3JvbGxUb1RvcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL0dsb2JhbC9iYW5uZXIvZ2xvYmFsQmFubmVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvR2xvYmFsL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9HbG9iYWwvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL0hvbWUvYXJvbWEvYXJvbWEuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9Ib21lL2Jhbm5lci9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9Ib21lL2NvZmZlZUN1bHR1cmUvY29mZmVlQ3VsdHVyZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL0hvbWUvd2hhdFdlRG8vd2hhdFdlRG8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9Qcm9kdWN0cy9Qcm9kdWN0L3Byb2R1Y3RJdGVtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZXMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZXMvcHJvZHVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9naXJsLWRyaW5raW5nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy90d28taGFuZHMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2xhdGUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2JsYWNrLWNvZmZlZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hcm9tYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTIwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjRkFGM0UxO1xufVxuXG4uYXJvbWEgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDEyOTBweDtcbn1cbi5hcm9tYV9fdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzg2OTk2QztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hcm9tYV9fc3VidGl0bGUge1xuICAgIGNvbG9yOiAjRDc1NzMyO1xuICAgIGZvbnQtc2l6ZTogMy41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLmFyb21hX19jb2ZmZWVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjQ2cHg7XG59XG5cbi5hcm9tYV9fY29mZmVlTmFtZSB7XG4gICAgY29sb3I6ICNENzU3MzI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYXJvbWFfX2NvZmZlZUl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmFyb21hX19jb2ZmZWVJdGVtOmZpcnN0LWNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xufVxuXG4uYXJvbWFfX2NvZmZlZUl0ZW06bnRoLWNoaWxkKDIpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xufVxuXG4uYXJvbWFfX2NvZmZlZUl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi5hcm9tYV9fY29mZmVlSXRlbTpudGgtY2hpbGQoNCkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuXG4uYXJvbWFfX2NvZmZlZUl0ZW06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFyb21hX19jb2ZmZWVNb2RhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5hcm9tYV9fY29mZmVlSXRlbTpob3ZlciAuYXJvbWFfX2NvZmZlZU1vZGFsIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYXJvbWEuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlEQUFpRDtJQUNqRCxlQUFlO0FBQ25COztBQUVBO0lBQ0kseURBQTZDO0lBQzdDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlEQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHlEQUFnRDtBQUNwRDs7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXJvbWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTIwcHggMDtcXG4gICAgYmFja2dyb3VuZDogI0ZBRjNFMTtcXG59XFxuXFxuLmFyb21hIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiAxMjkwcHg7XFxufVxcbi5hcm9tYV9fdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogIzg2OTk2QztcXG4gICAgbWFyZ2luLWJvdHRvbTogMS40ZW07XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmFyb21hX19zdWJ0aXRsZSB7XFxuICAgIGNvbG9yOiAjRDc1NzMyO1xcbiAgICBmb250LXNpemU6IDMuNWVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLmFyb21hX19jb2ZmZWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NDZweDtcXG59XFxuXFxuLmFyb21hX19jb2ZmZWVOYW1lIHtcXG4gICAgY29sb3I6ICNENzU3MzI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYXJvbWFfX2NvZmZlZUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5hcm9tYV9fY29mZmVlSXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2dpcmwtZHJpbmtpbmcuanBnXFxcIik7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuLmFyb21hX19jb2ZmZWVJdGVtOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL3R3by1oYW5kcy5qcGdcXFwiKTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbn1cXG5cXG4uYXJvbWFfX2NvZmZlZUl0ZW06bnRoLWNoaWxkKDMpIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvbGF0ZS5qcGdcXFwiKTtcXG59XFxuXFxuLmFyb21hX19jb2ZmZWVJdGVtOm50aC1jaGlsZCg0KSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2JsYWNrLWNvZmZlZS5qcGdcXFwiKTtcXG59XFxuXFxuXFxuLmFyb21hX19jb2ZmZWVJdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXJvbWFfX2NvZmZlZU1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFyb21hX19jb2ZmZWVJdGVtOmhvdmVyIC5hcm9tYV9fY29mZmVlTW9kYWwge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9jb2ZmZWVDdWx0dXJlLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29mZmVlQ3VsdHVyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSxcbiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjUpKSx1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgcGFkZGluZzogMTgwcHggMDtcblxufVxuXG4uY29mZmVlQ3VsdHVyZV9fdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS40ZW07XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29mZmVlQ3VsdHVyZV9fc3VidGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29mZmVlQ3VsdHVyZV9fdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI0NGQzhCODtcbn1cblxuLmNvZmZlZUN1bHR1cmVfX2JsaW5raW5nQ3Vyc29yIHtcbiAgICBhbmltYXRpb246IGJsaW5rIDAuN3MgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jb2ZmZWVDdWx0dXJlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQjtrRkFDaUY7SUFDakYsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvZmZlZUN1bHR1cmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSxcXG4gICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSksdXJsKFxcXCIuLi9pbWcvY29mZmVlQ3VsdHVyZS1iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgICBwYWRkaW5nOiAxODBweCAwO1xcblxcbn1cXG5cXG4uY29mZmVlQ3VsdHVyZV9fdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNGVtO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jb2ZmZWVDdWx0dXJlX19zdWJ0aXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvZmZlZUN1bHR1cmVfX3RleHQge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogI0NGQzhCODtcXG59XFxuXFxuLmNvZmZlZUN1bHR1cmVfX2JsaW5raW5nQ3Vyc29yIHtcXG4gICAgYW5pbWF0aW9uOiBibGluayAwLjdzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU4OTdlO1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbn1cblxuLmZvb3Rlcl9fbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvb3Rlcl9fbGluayBzdmcge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGZpbGw6IHdoaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZTg5N2U7XFxuICAgIHBhZGRpbmc6IDQwcHggMDtcXG59XFxuXFxuLmZvb3Rlcl9fbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyX19saW5rIHN2ZyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kJmZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCAyNXB4O1xuICBtYXgtd2lkdGg6IDEzMjBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kJmZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCAyNXB4O1xcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDAgMTBweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA0MDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubmF2X19saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgZ2FwOiA1dnc7XG59XG5cbi5uYXZfX2xpbmsge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMzBweCAwIDEwcHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDQwO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi5uYXZfX2xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGdhcDogNXZ3O1xcbn1cXG5cXG4ubmF2X19saW5rIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9ob21lLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYmFubmVyX19zdWJ0aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgICAgXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJhbm5lcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lLWJhbm5lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5REFBbUQ7SUFDbkQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJhbm5lciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2hvbWUtYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYmFubmVyX19zdWJ0aXRsZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmJhbm5lcl9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvZHVjdHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUYzRTE7XG59XG4ucHJvZHVjdHMgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMTQ0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMTAwcHggMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjdyZW0sIDFmcikpO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xufVxuXG4ucHJvZHVjdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ucHJvZHVjdC1pdGVtIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyOjpiZWZvcmV7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9kdWN0LWltYWdlLWNvbnRhaW5lcjpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wcm9kdWN0LWluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2R1Y3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvZHVjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGM0UxO1xcbn1cXG4ucHJvZHVjdHMgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTE0NHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTAwcHggMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyN3JlbSwgMWZyKSk7XFxuICAgIGdyaWQtZ2FwOiAycmVtO1xcbn1cXG5cXG4ucHJvZHVjdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5wcm9kdWN0LWl0ZW0gaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG4ucHJvZHVjdC1pbWFnZS1jb250YWluZXI6OmJlZm9yZXtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyOmhvdmVyOjpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucHJvZHVjdC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9kdWN0LW5hbWUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuLnByb2R1Y3QtcHJpY2Uge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2Nyb2xsQnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyLjNlbTtcbiAgICBoZWlnaHQ6IDIuM2VtO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENzU3MzI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcbn1cblxuLnNjcm9sbEJ0bi0tYWN0aXZlIHtcbiAgICBib3R0b206IDMwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5zY3JvbGxCdG4tLWluYWN0aXZlIHtcbiAgICBib3R0b206IC0xMDBweDtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC41cztcbn1cblxuLnNjcm9sbEJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2QTM0Nztcbn1cblxuLnNjcm9sbEJ0biBzdmcge1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2Nyb2xsVG9Ub3AuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zY3JvbGxCdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMi4zZW07XFxuICAgIGhlaWdodDogMi4zZW07XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDc1NzMyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcXG59XFxuXFxuLnNjcm9sbEJ0bi0tYWN0aXZlIHtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnNjcm9sbEJ0bi0taW5hY3RpdmUge1xcbiAgICBib3R0b206IC0xMDBweDtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuNXM7XFxufVxcblxcbi5zY3JvbGxCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZBMzQ3O1xcbn1cXG5cXG4uc2Nyb2xsQnRuIHN2ZyB7XFxuICAgIHdpZHRoOiAyMXB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvd2hhdFdlRG8tYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53aGF0V2VEbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgcGFkZGluZzogMTIwcHggMDtcbn1cblxuLndoYXRXZURvX19sZWZ0X19pbWcsIC53aGF0V2VEb19fcmlnaHRfX2ltZyB7XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuLndoYXRXZURvIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi53aGF0V2VEbyBkaXYge1xuICAgIGZsZXg6IDE7XG59XG5cbi53aGF0V2VEb19fc3VidGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzg2OTk2QztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi53aGF0V2VEb19fdGl0bGUge1xuICAgIGNvbG9yOiAjRDc1NzMyO1xuICAgIGZvbnQtc2l6ZTogMy41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLndoYXRXZURvX19yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNzBweDtcbn1cblxuLndoYXRXZURvX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGdhcDogMjVweDtcbn1cblxuLndoYXRXZURvX19idG4ge1xuICAgIGNvbG9yOiAjRDc1NzMyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q3NTczMjtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLndoYXRXZURvX19idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENzU3MzI7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi53aGF0V2VEb19fcmlnaHRfX2ltZyB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi53aGF0V2VEb19fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ud2hhdFdlRG9fX2xlZnRfX2ltZy0tcm90YXRpbmcge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxMCU7XG4gICAgcmlnaHQ6IDEwJTtcblxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgYW5pbWF0aW9uOiByb3RhdGluZyAxMHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ud2hhdFdlRG9fX2xlZnRfX2ltZy0tcm90YXRpbmc6aG92ZXIge1xuICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGluZyB7XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvd2hhdFdlRG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5REFBdUQ7SUFDdkQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTs7SUFFViwrQkFBK0I7SUFDL0IsdUNBQXVDO0FBQzNDOztBQUVBO0dBQ0csNEJBQTRCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2hhdFdlRG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvd2hhdFdlRG8tYmFja2dyb3VuZC5wbmdcXFwiKTtcXG4gICAgcGFkZGluZzogMTIwcHggMDtcXG59XFxuXFxuLndoYXRXZURvX19sZWZ0X19pbWcsIC53aGF0V2VEb19fcmlnaHRfX2ltZyB7XFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcbi53aGF0V2VEbyAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLndoYXRXZURvIGRpdiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi53aGF0V2VEb19fc3VidGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogIzg2OTk2QztcXG4gICAgbWFyZ2luLWJvdHRvbTogMS40ZW07XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLndoYXRXZURvX190aXRsZSB7XFxuICAgIGNvbG9yOiAjRDc1NzMyO1xcbiAgICBmb250LXNpemU6IDMuNWVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLndoYXRXZURvX19yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4ud2hhdFdlRG9fX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLndoYXRXZURvX19idG4ge1xcbiAgICBjb2xvcjogI0Q3NTczMjtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDc1NzMyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ud2hhdFdlRG9fX2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENzU3MzI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ud2hhdFdlRG9fX3JpZ2h0X19pbWcge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLndoYXRXZURvX190ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4ud2hhdFdlRG9fX2xlZnRfX2ltZy0tcm90YXRpbmcge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAxMCU7XFxuICAgIHJpZ2h0OiAxMCU7XFxuXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgIGFuaW1hdGlvbjogcm90YXRpbmcgMTBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLndoYXRXZURvX19sZWZ0X19pbWctLXJvdGF0aW5nOmhvdmVyIHtcXG4gICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0aW5nIHtcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcm9tYS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fyb21hLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2ZmZWVDdWx0dXJlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29mZmVlQ3VsdHVyZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS1iYW5uZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLWJhbm5lci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZHVjdHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9kdWN0cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2Nyb2xsVG9Ub3AuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY3JvbGxUb1RvcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2hhdFdlRG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aGF0V2VEby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vY3NzL3Njcm9sbFRvVG9wLmNzcyc7XG5pbXBvcnQgdG9wUm93U3ZnIGZyb20gJy4uL2ltZy90b3BSb3cuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2Nyb2xsQnRuLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbEJ0bicsICdzY3JvbGxCdG4tLWluYWN0aXZlJyk7XG4gICAgc2Nyb2xsQnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdTY3JvbGwgdG8gdG9wJyk7XG4gICAgc2Nyb2xsQnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIHNjcm9sbEJ0bi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgc2Nyb2xsQnRuLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiIHdpZHRoPVwiNDhcIiBjb2xvcj1cIiNmZmZcIj48cGF0aCBkPVwiTTQ1MC04MHYtNjg2TDI0Mi01NThsLTQyLTQyIDI4MC0yODAgMjgwIDI4MC00MiA0Mi0yMDgtMjA4djY4NmgtNjBaXCIvPjwvc3ZnPmA7XG4gICAgc2Nyb2xsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwKSB7XG4gICAgICAgICAgICBzY3JvbGxCdG4uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIHNjcm9sbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxCdG4tLWluYWN0aXZlJyk7XG4gICAgICAgICAgICBzY3JvbGxCdG4uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Nyb2xsQnRuLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbEJ0bi0taW5hY3RpdmUnKTtcbiAgICAgICAgICAgIHNjcm9sbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxCdG4tLWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJpYVN0YXR1cyA9IHNjcm9sbEJ0bi5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICBzY3JvbGxCdG4uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICFhcmlhU3RhdHVzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2Nyb2xsQnRuO1xufSIsImltcG9ydCAnLi9jc3MvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9wYWdlcy9sb2FkUGFnZSc7XG5pbXBvcnQgY3JlYXRlUHJvZHVjdHNQYWdlIGZyb20gJy4vcGFnZXMvcHJvZHVjdHMnO1xuXG5mdW5jdGlvbiBhZGROYXZFdmVudHMgKCkgIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcblxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVIb21lKTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvZHVjdHNQYWdlKTtcbn1cblxuaW5pdCgpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGxvYWRQYWdlKCk7XG4gICAgY3JlYXRlSG9tZSgpO1xuICAgIGFkZE5hdkV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBjbGVhck1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5mdW5jdGlvbiBhZGRNYWluKGVsZW1lbnQpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHtjbGVhck1haW4sIGFkZE1haW59OyIsImltcG9ydCAnLi4vLi4vLi4vY3NzL2hvbWUtYmFubmVyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJhbm5lcih0aXRsZSwgc3ViVGl0bGUsIGJnSW1hZ2UpIHtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpO1xuICAgIGJhbm5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmdJbWFnZX0pYDtcbiAgICBiYW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzYwdmgnO1xuXG4gICAgY29uc3QgYmFubmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhbm5lclRleHQuY2xhc3NMaXN0LmFkZCgnYmFubmVyX190ZXh0Jyk7XG5cbiAgICBjb25zdCBiYW5uZXJTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYmFubmVyU3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnYmFubmVyX19zdWJ0aXRsZScpO1xuICAgIGJhbm5lclN1YnRpdGxlLnRleHRDb250ZW50ID0gc3ViVGl0bGU7XG5cbiAgICBjb25zdCBiYW5uZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgYmFubmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnYmFubmVyX190aXRsZScpO1xuICAgIGJhbm5lclRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lclN1YnRpdGxlKTtcbiAgICBiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGJhbm5lclRpdGxlKTtcbiAgICBcblxuICAgIGJhbm5lci5hcHBlbmRDaGlsZChiYW5uZXJUZXh0KTtcblxuICAgIHJldHVybiBiYW5uZXI7IFxufSIsImltcG9ydCAnLi4vLi4vLi4vY3NzL2Zvb3Rlci5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBmb290ZXJMaW5rLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fbGluaycpO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9qbWNhbXBvc2RldicpO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG4gICAgZm9vdGVyTGluay5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpb25pY29uXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZD1cIk0yNTYgMzJDMTMyLjMgMzIgMzIgMTM0LjkgMzIgMjYxLjdjMCAxMDEuNSA2NC4yIDE4Ny41IDE1My4yIDIxNy45YTE3LjU2IDE3LjU2IDAgMDAzLjguNGM4LjMgMCAxMS41LTYuMSAxMS41LTExLjQgMC01LjUtLjItMTkuOS0uMy0zOS4xYTEwMi40IDEwMi40IDAgMDEtMjIuNiAyLjdjLTQzLjEgMC01Mi45LTMzLjUtNTIuOS0zMy41LTEwLjItMjYuNS0yNC45LTMzLjYtMjQuOS0zMy42LTE5LjUtMTMuNy0uMS0xNC4xIDEuNC0xNC4xaC4xYzIyLjUgMiAzNC4zIDIzLjggMzQuMyAyMy44IDExLjIgMTkuNiAyNi4yIDI1LjEgMzkuNiAyNS4xYTYzIDYzIDAgMDAyNS42LTZjMi0xNC44IDcuOC0yNC45IDE0LjItMzAuNy00OS43LTUuOC0xMDItMjUuNS0xMDItMTEzLjUgMC0yNS4xIDguNy00NS42IDIzLTYxLjYtMi4zLTUuOC0xMC0yOS4yIDIuMi02MC44YTE4LjY0IDE4LjY0IDAgMDE1LS41YzguMSAwIDI2LjQgMy4xIDU2LjYgMjQuMWEyMDguMjEgMjA4LjIxIDAgMDExMTIuMiAwYzMwLjItMjEgNDguNS0yNC4xIDU2LjYtMjQuMWExOC42NCAxOC42NCAwIDAxNSAuNWMxMi4yIDMxLjYgNC41IDU1IDIuMiA2MC44IDE0LjMgMTYuMSAyMyAzNi42IDIzIDYxLjYgMCA4OC4yLTUyLjQgMTA3LjYtMTAyLjMgMTEzLjMgOCA3LjEgMTUuMiAyMS4xIDE1LjIgNDIuNSAwIDMwLjctLjMgNTUuNS0uMyA2MyAwIDUuNCAzLjEgMTEuNSAxMS40IDExLjVhMTkuMzUgMTkuMzUgMCAwMDQtLjRDNDE1LjkgNDQ5LjIgNDgwIDM2My4xIDQ4MCAyNjEuNyA0ODAgMTM0LjkgMzc5LjcgMzIgMjU2IDMyelwiLz48L3N2Zz48c3Bhbj5qbWNhbXBvc2Rldjwvc3Bhbj5gO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn0iLCJpbXBvcnQgJy4uLy4uLy4uL2Nzcy9oZWFkZXIuY3NzJztcbmltcG9ydCBsb2dvSW1nIGZyb20gJy4uLy4uLy4uL2ltZy9sb2dvLnBuZyc7XG5jb25zdCBuYXZJdGVtcyA9IFtcbiAge1xuICAgIG5hbWU6ICdIb21lJyxcbiAgICBsaW5rOiAnIydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNZW51JyxcbiAgICBsaW5rOiAnIydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDb250YWN0JyxcbiAgICBsaW5rOiAnIydcbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcblxuICAvLyBMb2dvXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuICBsb2dvLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7bG9nb0ltZ31cIiBhbHQ9XCJsb2dvXCI+YFxuXG4gIC8vIE5hdlxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdl9fbGlzdCcpXG4gIC8vIEFkZCBuYXYgaXRlbXNcbiAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2X19pdGVtJylcbiAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbmF2TGluay5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmsnKVxuICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaXRlbS5saW5rKVxuICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgIG5hdkxpbmsudGV4dENvbnRlbnQgPSBpdGVtLm5hbWVcblxuICAgIG5hdkl0ZW0uYXBwZW5kQ2hpbGQobmF2TGluaylcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG5hdkl0ZW0pXG4gIH0pXG4gIC8vIEFkZCBuYXYgbGlzdCB0byBuYXZcbiAgbmF2LmFwcGVuZENoaWxkKG5hdkxpc3QpXG4gIC8vIEFkZCBuYXYgYW5kIGxvZ28gdG8gaGVhZGVyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKVxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KVxuXG4gIHJldHVybiBoZWFkZXJcbn0iLCJpbXBvcnQgJy4uLy4uLy4uL2Nzcy9hcm9tYS5jc3MnO1xuXG5jb25zdCB0aXRsZUNvbnRlbnQgPSBcIkFyb21hXCI7XG5jb25zdCBzdWJUaXRsZUNvbnRlbnQgPSBcIk91ciBDb2ZmZWVcIjtcblxuY29uc3QgY29mZmVlSXRlbXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIkljZWQgY2FyYW1lbCBtYWNjaGlhdG9cIixcbiAgICAgICAgdHlwZTogXCJDb2ZmZWVcIixcbiAgICAgICAgbGluazogXCIjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDcmVhbXkgaGF6ZWxudXQgbW9jaGFcIixcbiAgICAgICAgdHlwZTogXCJDb2ZmZWVcIixcbiAgICAgICAgbGluazogXCIjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJTd2VldCB2YW5pbGxhIGxhdHRlXCIsXG4gICAgICAgIHR5cGU6IFwiQ29mZmVlXCIsXG4gICAgICAgIGxpbms6IFwiI1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiSXJpc2ggY3JlYW0gY29mZmVlXCIsXG4gICAgICAgIHR5cGU6IFwiQ29mZmVlXCIsXG4gICAgICAgIGxpbms6IFwiI1wiXG4gICAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXJvbWEoKSAge1xuICAgIGNvbnN0IGFyb21hID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGFyb21hLmNsYXNzTGlzdC5hZGQoJ2Fyb21hJyk7XG5cbiAgICBjb25zdCBhcm9tYUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFyb21hQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Fyb21hX190aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVDb250ZW50O1xuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Fyb21hX19zdWJ0aXRsZScpO1xuICAgIHN1YlRpdGxlLnRleHRDb250ZW50ID0gc3ViVGl0bGVDb250ZW50O1xuXG4gICAgY29uc3QgY29mZmVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29mZmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fyb21hX19jb2ZmZWVDb250YWluZXInKTtcblxuICAgIGNvZmZlZUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGNvZmZlZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29mZmVlSXRlbS5jbGFzc0xpc3QuYWRkKCdhcm9tYV9fY29mZmVlSXRlbScpO1xuXG4gICAgICAgIGNvbnN0IGNvZmZlZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvZmZlZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Fyb21hX19jb2ZmZWVNb2RhbCcpO1xuXG4gICAgICAgIGNvbnN0IGNvZmZlZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvZmZlZU5hbWUuY2xhc3NMaXN0LmFkZCgnYXJvbWFfX2NvZmZlZU5hbWUnKTtcbiAgICAgICAgY29mZmVlTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgY29mZmVlTmFtZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpdGVtLmxpbmspO1xuXG4gICAgICAgIGNvbnN0IGNvZmZlZVR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvZmZlZVR5cGUuY2xhc3NMaXN0LmFkZCgnYXJvbWFfX2NvZmZlZVR5cGUnKTtcbiAgICAgICAgY29mZmVlVHlwZS50ZXh0Q29udGVudCA9IGl0ZW0udHlwZTtcblxuICAgICAgICBjb2ZmZWVNb2RhbC5hcHBlbmRDaGlsZChjb2ZmZWVOYW1lKTtcbiAgICAgICAgY29mZmVlTW9kYWwuYXBwZW5kQ2hpbGQoY29mZmVlVHlwZSk7XG5cbiAgICAgICAgY29mZmVlSXRlbS5hcHBlbmRDaGlsZChjb2ZmZWVNb2RhbCk7XG5cbiAgICAgICAgY29mZmVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgYXJvbWFDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGFyb21hQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcbiAgICBhcm9tYUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2ZmZWVDb250YWluZXIpO1xuXG4gICAgYXJvbWEuYXBwZW5kQ2hpbGQoYXJvbWFDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGFyb21hO1xufTsiLCJpbXBvcnQgJy4uLy4uLy4uL2Nzcy9ob21lLWJhbm5lci5jc3MnO1xuXG5cbmNvbnN0IHN1YlRpdGxlID0gXCJXZWxjb21lIHRvIG91ciBDb2ZmZWVzaG9wXCJcbmNvbnN0IHRpdGxlID0gXCJXaGVyZSBDb2ZmZWUgTWVldHMgSG9zcGl0YWxpdHlcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmFubmVyKCkge1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG5cblxuICAgIGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcl9fdGV4dCcpO1xuXG4gICAgY29uc3QgYmFubmVyU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGJhbm5lclN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcl9fc3VidGl0bGUnKTtcbiAgICBiYW5uZXJTdWJ0aXRsZS50ZXh0Q29udGVudCA9IHN1YlRpdGxlO1xuXG4gICAgY29uc3QgYmFubmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGJhbm5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcl9fdGl0bGUnKTtcbiAgICBiYW5uZXJUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgYmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJTdWJ0aXRsZSk7XG4gICAgYmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJUaXRsZSk7XG4gICAgXG5cbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVyVGV4dCk7XG5cbiAgICByZXR1cm4gYmFubmVyOyBcbn0iLCJpbXBvcnQgJy4uLy4uLy4uL2Nzcy9jb2ZmZWVDdWx0dXJlLmNzcyc7XG5cblxuY29uc3QgdGl0bGVDb250ZW50ID0gXCJDb2ZmZWUgQ3VsdHVyZVwiO1xuY29uc3Qgc3ViVGl0bGVDb250ZW50ID0gXCJDcmFmdGluZyB0aGUgcGVyZmVjdCBjdXAgb2YgY29mZmVlOiA8YnI+IG1ldGljdWxvdXMgXCJcbmNvbnN0IGxldHRlcnNDb250ZW50ID0gW1wicm9hc3RpbmdcIiwgXCJicmV3aW5nXCIsIFwic2VydmluZ1wiLCBcImVuam95aW5nXCIsIFwicG91cmluZ1wiXVxuY29uc3QgdGV4dENvbnRlbnQgPSBcIkltcHJvdmUgeW91ciBsaWZlIHdpdGggY29mZmVlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvZmZlZUN1bHR1cmUoKSB7XG4gICAgY29uc3QgY29mZmVlQ3VsdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb2ZmZWVDdWx0dXJlLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZUN1bHR1cmUnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjb2ZmZWVDdWx0dXJlX190aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVDb250ZW50O1xuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZUN1bHR1cmVfX3N1YnRpdGxlJyk7XG4gICAgc3ViVGl0bGUuaW5uZXJIVE1MID0gc3ViVGl0bGVDb250ZW50O1xuXG4gICAgY29uc3QgbGV0dGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsZXR0ZXJzLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZUN1bHR1cmVfX2xldHRlcnMnKTtcbiAgICBsZXR0ZXJzLnRleHRDb250ZW50ID0gbGV0dGVyc0NvbnRlbnRbMF07XG5cbiAgICBjb25zdCBibGlua2luZ0N1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBibGlua2luZ0N1cnNvci5jbGFzc0xpc3QuYWRkKCdjb2ZmZWVDdWx0dXJlX19ibGlua2luZ0N1cnNvcicpO1xuICAgIGJsaW5raW5nQ3Vyc29yLnRleHRDb250ZW50ID0gXCJfXCI7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnY29mZmVlQ3VsdHVyZV9fdGV4dCcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxuICAgIGNvZmZlZUN1bHR1cmUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvZmZlZUN1bHR1cmUuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuICAgIHN1YlRpdGxlLmFwcGVuZENoaWxkKGxldHRlcnMpO1xuICAgIHN1YlRpdGxlLmFwcGVuZENoaWxkKGJsaW5raW5nQ3Vyc29yKTtcbiAgICBjb2ZmZWVDdWx0dXJlLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIFxuICAgIHJldHVybiBjb2ZmZWVDdWx0dXJlO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlTGV0dGVycygpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2ZmZWVDdWx0dXJlX19sZXR0ZXJzXCIpO1xuICAgIGxldCBpID0gMTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdvcmRzID0gbGV0dGVyc0NvbnRlbnRbaV0uc3BsaXQoXCJcIik7IC8vIFNwbGl0IGVhY2ggd29yZCBpbnRvIGFuIGFycmF5IG9mIGxldHRlcnNcbiAgICAgICAgXG4gICAgICAgIC8vIFJlbW92ZSBlYWNoIGxldHRlciB3aXRoIGEgZGVsYXlcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZXR0ZXJzLnRleHRDb250ZW50Lmxlbmd0aDsgaisrKSB7IFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlcnMudGV4dENvbnRlbnQgPSBsZXR0ZXJzLnRleHRDb250ZW50LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIH0sIDc1ICogKHdvcmRzLmxlbmd0aCAtIGopKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPT0gbGV0dGVyc0NvbnRlbnQubGVuZ3RoIC0gMSA/IGkgPSAwIDogaSsrOyAvLyBSZXNldCBpIHRvIDAgaWYgaXQgcmVhY2hlcyB0aGUgZW5kIG9mIHRoZSBhcnJheVxuXG4gICAgICAgIC8vIFdyaXRlIHRoZSBuZXh0IHdvcmQgYWZ0ZXIgcmVtb3ZpbmcgdGhlIHByZXZpb3VzIG9uZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgICAgICB3b3Jkcy5mb3JFYWNoKChsZXR0ZXIsIGluZGV4KSA9PiB7IC8vIFdyaXRlIGVhY2ggbGV0dGVyIHdpdGggYSBkZWxheVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJzLnRleHRDb250ZW50ICs9IGxldHRlcjtcbiAgICAgICAgICAgICAgICB9LCAxMDAgKiBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTUwMCk7XG5cbiAgICAgICAgXG4gICAgfSwgKDIwMCAqIGxldHRlcnNDb250ZW50Lmxlbmd0aCArIDE1MDApICsgMzAwKTsgLy8gV2FpdCBmb3IgdGhlIHByZXZpb3VzIHdvcmQgdG8gYmUgd3JpdHRlbiBiZWZvcmUgc3RhcnRpbmcgdGhlIG5leHQgb25lXG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNvZmZlZUN1bHR1cmUsIGFuaW1hdGVMZXR0ZXJzIH07XG5cbiIsImltcG9ydCAnLi4vLi4vLi4vY3NzL3doYXRXZURvLmNzcyc7XG5pbXBvcnQgbGVmdEltZ1VybCBmcm9tICcuLi8uLi8uLi9pbWcvbGVmdC1wZXJzb24uanBnJztcbmltcG9ydCByaWdodEltZ1VybCBmcm9tICcuLi8uLi8uLi9pbWcvcmlnaHQtcGVyc29uLmpwZyc7XG5pbXBvcnQgcm90YXRpbmdJbWdVcmwgZnJvbSAnLi4vLi4vLi4vaW1nL3JvdGF0ZWQtaW1nLnBuZyc7XG5cbmNvbnN0IHdoYXRXZURvU3VidGl0bGVUZXh0ID0gXCJXaGF0IHdlIGRvXCI7XG5jb25zdCB3aGF0V2VEb1RpdGxlVGV4dCA9IFwiQ29mZmVlIGN1bHR1cmUgYXQgaXRzIGZpbmVzdDogZWxldmF0aW5nIHlvdXIgY29mZmVlIGdhbWVcIjtcbmNvbnN0IHRleHRQYXJhZ3JhcGggPSBcIkRpc2NvdmVyIHRoZSBlc3NlbmNlIG9mIG91ciBjb2ZmZWUgc2hvcCBpbiBDYWxpZm9ybmlhLCB3aGVyZSBjb2ZmZWUgY29tZXMgYWxpdmUgd2l0aCBhIHN0b3J5IG9mIG1vdGl2YXRpb24gYW5kIGFjaGlldmVtZW50LiBGcm9tIGh1bWJsZSBiZWdpbm5pbmdzIHRvIGJlY29taW5nIGEgaGF2ZW4gZm9yIGRyZWFtZXJzIGFuZCBjb2ZmZWUgbG92ZXJzLCBvdXIgam91cm5leSBpcyBmdWxsIG9mIGV4Y2l0aW5nIG1vbWVudHMuIEpvaW4gdXMgYW5kIGJlIGluc3BpcmVkLlwiXG5jb25zdCBsaW5rVGV4dCA9IFwiQWJvdXQgdXNcIjtcbmNvbnN0IGxpbmtVcmwgPSBcIiNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRld2hhdFdlRG8oKSB7XG4gICAgY29uc3Qgd2hhdFdlRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgd2hhdFdlRG8uY2xhc3NMaXN0LmFkZCgnd2hhdFdlRG8nKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIC8vIExlZnQgY29udGFpbmVyXG4gICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2hhdFdlRG9fX2xlZnQnKTtcblxuICAgIC8vIExlZnQgY29udGFpbmVyIFN1YnRpdGxlXG4gICAgY29uc3Qgd2hhdFdlRG9TdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgd2hhdFdlRG9TdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCd3aGF0V2VEb19fc3VidGl0bGUnKTtcbiAgICB3aGF0V2VEb1N1YnRpdGxlLnRleHRDb250ZW50ID0gd2hhdFdlRG9TdWJ0aXRsZVRleHQ7XG5cbiAgICAvLyBMZWZ0IGNvbnRhaW5lciBUaXRsZVxuICAgIGNvbnN0IHdoYXRXZURvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHdoYXRXZURvVGl0bGUuY2xhc3NMaXN0LmFkZCgnd2hhdFdlRG9fX3RpdGxlJyk7XG4gICAgd2hhdFdlRG9UaXRsZS50ZXh0Q29udGVudCA9IHdoYXRXZURvVGl0bGVUZXh0O1xuXG4gICAgLy8gTGVmdCBjb250YWluZXIgSW1hZ2VcbiAgICBjb25zdCBsZWZ0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGVmdEltZy5jbGFzc0xpc3QuYWRkKCd3aGF0V2VEb19fbGVmdF9faW1nJyk7XG4gICAgbGVmdEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxlZnRJbWdVcmwpO1xuXG4gICAgY29uc3Qgcm90YXRpbmdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICByb3RhdGluZ0ltZy5jbGFzc0xpc3QuYWRkKCd3aGF0V2VEb19fbGVmdF9faW1nLS1yb3RhdGluZycpO1xuICAgIHJvdGF0aW5nSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcm90YXRpbmdJbWdVcmwpO1xuXG4gICAgLy8gUmlnaHQgY29udGFpbmVyXG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aGF0V2VEb19fcmlnaHQnKTtcblxuICAgIC8vIFJpZ2h0IGNvbnRhaW5lciBJbWFnZVxuICAgIGNvbnN0IHJpZ2h0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcmlnaHRJbWcuY2xhc3NMaXN0LmFkZCgnd2hhdFdlRG9fX3JpZ2h0X19pbWcnKTtcbiAgICByaWdodEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHJpZ2h0SW1nVXJsKTtcblxuICAgIC8vIFJpZ2h0IGNvbnRhaW5lciBDb250ZW50XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2hhdFdlRG9fX2NvbnRlbnQnKTtcblxuICAgIC8vIFJpZ2h0IGNvbnRhaW5lciBDb250ZW50IFRleHRcbiAgICBjb25zdCB3aGF0V2VEb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2hhdFdlRG9UZXh0LmNsYXNzTGlzdC5hZGQoJ3doYXRXZURvX190ZXh0Jyk7XG4gICAgd2hhdFdlRG9UZXh0LnRleHRDb250ZW50ID0gdGV4dFBhcmFncmFwaDtcblxuICAgIC8vIFJpZ2h0IGNvbnRhaW5lciBDb250ZW50IExpbmtcbiAgICBjb25zdCB3aGF0V2VEb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgd2hhdFdlRG9MaW5rLmNsYXNzTGlzdC5hZGQoJ3doYXRXZURvX19idG4nKTtcbiAgICB3aGF0V2VEb0xpbmsudGV4dENvbnRlbnQgPSBcIkFib3V0IHVzXCI7XG4gICAgd2hhdFdlRG9MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmtVcmwpO1xuXG4gICAgLy8gQXBwZW5kXG4gICAgd2hhdFdlRG8uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpO1xuXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aGF0V2VEb1N1YnRpdGxlKTtcbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdoYXRXZURvVGl0bGUpO1xuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEltZyk7XG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGluZ0ltZyk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHdoYXRXZURvVGV4dCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aGF0V2VEb0xpbmspO1xuXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRJbWcpO1xuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICAgIFxuXG4gICAgcmV0dXJuIHdoYXRXZURvO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEl0ZW0obmFtZSwgcHJpY2UsIGltYWdlKSB7XG4gICAgY29uc3QgcHJvZHVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2R1Y3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9kdWN0LWl0ZW1cIik7XG5cbiAgICBjb25zdCBwcm9kdWN0SW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2R1Y3RJbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdC1pbWFnZS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2R1Y3RJbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdC1pbWFnZVwiKTtcbiAgICBwcm9kdWN0SW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgcHJvZHVjdEltYWdlLmFsdCA9IG5hbWU7XG5cbiAgICBjb25zdCBwcm9kdWN0SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvZHVjdEluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2R1Y3QtaW5mby1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9kdWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdC1uYW1lXCIpO1xuICAgIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2R1Y3RQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdC1wcmljZVwiKTtcbiAgICBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuXG4gICAgcHJvZHVjdEltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZSk7XG5cbiAgICBwcm9kdWN0SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0TmFtZSk7XG4gICAgcHJvZHVjdEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlKTtcblxuICAgIHByb2R1Y3RJdGVtLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZUNvbnRhaW5lcik7XG4gICAgcHJvZHVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvZHVjdEluZm9Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RJdGVtO1xufSIsImltcG9ydCBjcmVhdGVCYW5uZXIgZnJvbSAnLi4vbW9kdWxlcy9Ib21lL2Jhbm5lci9iYW5uZXIuanMnO1xuaW1wb3J0IGNyZWF0ZVdoYXRXZURvIGZyb20gJy4uL21vZHVsZXMvSG9tZS93aGF0V2VEby93aGF0V2VEby5qcyc7XG5pbXBvcnQge2NyZWF0ZUNvZmZlZUN1bHR1cmUsIGFuaW1hdGVMZXR0ZXJzfSBmcm9tICcuLi9tb2R1bGVzL0hvbWUvY29mZmVlQ3VsdHVyZS9jb2ZmZWVDdWx0dXJlLmpzJztcbmltcG9ydCBjcmVhdGVBcm9tYSBmcm9tICcuLi9tb2R1bGVzL0hvbWUvYXJvbWEvYXJvbWEuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUJhbm5lcigpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVdoYXRXZURvKCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29mZmVlQ3VsdHVyZSgpKTtcbiAgICBhbmltYXRlTGV0dGVycygpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQXJvbWEoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7IiwiaW1wb3J0IHNjcm9sbFRvVG9wIGZyb20gXCIuLi9hc3NldHMvc2Nyb2xsVG9Ub3BcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4uL21vZHVsZXMvR2xvYmFsL2Zvb3Rlci9mb290ZXJcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4uL21vZHVsZXMvR2xvYmFsL2hlYWRlci9oZWFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG5cbiAgICByb290LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTsgLy8gSGVhZGVyIHRoYXQgaXMgc3RhdGljIGZvciBhbGwgcGFnZXNcbiAgICBcbiAgICAvLyBNYWluIHRoYXQgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZSBwYWdlIHRoZSB1c2VyIGlzIG9uXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTsgXG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNjcm9sbFRvVG9wKCkpOyAvLyBTY3JvbGwgdG8gdG9wIGJ1dHRvbiB0aGF0IHdpbGwgYmUgaGlkZGVuIHVudGlsIHRoZSB1c2VyIHNjcm9sbHMgZG93blxuICAgIHJvb3QuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICByb290LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTsgLy8gRm9vdGVyIHRoYXQgaXMgc3RhdGljIGZvciBhbGwgcGFnZXNcbn0iLCJpbXBvcnQgXCIuLi9jc3MvcHJvZHVjdHMuY3NzXCI7XG5pbXBvcnQgYmdJbWFnZSBmcm9tIFwiLi4vaW1nL3Byb2R1Y3RzLWJhY2tncm91bmQuanBnXCI7XG5pbXBvcnQgeyBhZGRNYWluLCBjbGVhck1haW4gfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcbmltcG9ydCBjcmVhdGVCYW5uZXIgZnJvbSBcIi4uL21vZHVsZXMvR2xvYmFsL2Jhbm5lci9nbG9iYWxCYW5uZXIuanNcIjtcbmltcG9ydCBjcmVhdGVQcm9kdWN0SXRlbSBmcm9tIFwiLi4vbW9kdWxlcy9Qcm9kdWN0cy9Qcm9kdWN0L3Byb2R1Y3RJdGVtXCI7XG5cbi8vIFByb2R1Y3RzIGltYWdlc1xuaW1wb3J0IGVzcHJlc3NvIGZyb20gXCIuLi9pbWcvcHJvZHVjdHMvZXNwcmVzc28uanBnXCI7XG5pbXBvcnQgbGF0dGUgZnJvbSBcIi4uL2ltZy9wcm9kdWN0cy9sYXR0ZS5qcGdcIjtcbmltcG9ydCBjYXBwdWNjaW5vIGZyb20gXCIuLi9pbWcvcHJvZHVjdHMvY2FwcHVjY2luby5qcGdcIjtcbmltcG9ydCBtb2NoYSBmcm9tIFwiLi4vaW1nL3Byb2R1Y3RzL21vY2hhLmpwZ1wiO1xuaW1wb3J0IGFtZXJpY2FubyBmcm9tIFwiLi4vaW1nL3Byb2R1Y3RzL2FtZXJpY2Fuby5qcGdcIjtcbmltcG9ydCBtYWNjaGlhdG8gZnJvbSBcIi4uL2ltZy9wcm9kdWN0cy9tYWNjaGlhdG8ud2VicFwiO1xuaW1wb3J0IGNvcnRhZG8gZnJvbSBcIi4uL2ltZy9wcm9kdWN0cy9jb3J0YWRvLndlYnBcIjtcbmltcG9ydCBmcmFwcGUgZnJvbSBcIi4uL2ltZy9wcm9kdWN0cy9mcmFwcGUuanBnXCI7XG5cbmNvbnN0IHByb2R1Y3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJFc3ByZXNzb1wiLFxuICAgICAgICBwcmljZTogXCIkMi41MFwiLFxuICAgICAgICBpbWFnZTogZXNwcmVzc29cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJMYXR0ZVwiLFxuICAgICAgICBwcmljZTogXCIkMy41MFwiLFxuICAgICAgICBpbWFnZTogbGF0dGUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2FwcHVjY2lub1wiLFxuICAgICAgICBwcmljZTogXCIkMy4wMFwiLFxuICAgICAgICBpbWFnZTogY2FwcHVjY2lubyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJNb2NoYVwiLFxuICAgICAgICBwcmljZTogXCIkNC4wMFwiLFxuICAgICAgICBpbWFnZTogbW9jaGEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQW1lcmljYW5vXCIsXG4gICAgICAgIHByaWNlOiBcIiQyLjc1XCIsXG4gICAgICAgIGltYWdlOiBhbWVyaWNhbm8sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTWFjY2hpYXRvXCIsXG4gICAgICAgIHByaWNlOiBcIiQzLjI1XCIsXG4gICAgICAgIGltYWdlOiBtYWNjaGlhdG9cbiAgICAgICAgLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNvcnRhZG9cIixcbiAgICAgICAgcHJpY2U6IFwiJDMuMjVcIixcbiAgICAgICAgaW1hZ2U6IGNvcnRhZG8sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRnJhcHDDqVwiLFxuICAgICAgICBwcmljZTogXCIkNC41MFwiLFxuICAgICAgICBpbWFnZTogZnJhcHBlLFxuICAgIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RzUGFnZSgpIHtcbiAgICBjbGVhck1haW4oKTtcbiAgICBhZGRNYWluKGNyZWF0ZUJhbm5lcihcIlByb2R1Y3RzXCIsIFwiVGhlIGJlc3QgcXVhbGl0eSBmb3IgeW91XCIsIGJnSW1hZ2UpKTtcbiAgICBjb25zdCBwcm9kdWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHByb2R1Y3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9kdWN0c1wiKTtcblxuICAgIGNvbnN0IHByb2R1Y3RzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvZHVjdHNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgICBwcm9kdWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0c0NvbnRlbnQpO1xuICAgIGFkZE1haW4ocHJvZHVjdHNDb250YWluZXIpO1xuXG4gICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgYWRkUHJvZHVjdChjcmVhdGVQcm9kdWN0SXRlbShwcm9kdWN0Lm5hbWUsIHByb2R1Y3QucHJpY2UsIHByb2R1Y3QuaW1hZ2UpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvZHVjdChwcm9kdWN0KSB7XG4gICAgY29uc3QgcHJvZHVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RzIC5jb250YWluZXJcIik7XG4gICAgcHJvZHVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9