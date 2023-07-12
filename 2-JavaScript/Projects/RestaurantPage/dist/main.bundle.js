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
}

@media screen and (max-width: 768px) {
    .aroma__coffeeContainer {
        height: auto;
    }

    .aroma__coffeeItem:first-child, .aroma__coffeeItem:nth-child(2){
        grid-row: auto;    
        grid-column: auto;
    }

    .aroma__coffeeContainer {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 300px);
    }
    
    .aroma__coffeeModal {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
    }

}`, "",{"version":3,"sources":["webpack://./src/css/aroma.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,qCAAqC;IACrC,yBAAyB;IACzB,cAAc;IACd,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,kCAAkC;IAClC,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,gBAAgB;IAChB,aAAa;IACb,gCAAgC;IAChC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,yDAAiD;IACjD,eAAe;AACnB;;AAEA;IACI,yDAA6C;IAC7C,kBAAkB;AACtB;;AAEA;IACI,yDAAwC;AAC5C;;AAEA;IACI,yDAAgD;AACpD;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,gCAAgC;AACpC;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI;QACI,YAAY;IAChB;;IAEA;QACI,cAAc;QACd,iBAAiB;IACrB;;IAEA;QACI,0BAA0B;QAC1B,oCAAoC;IACxC;;IAEA;QACI,UAAU;QACV,mBAAmB;QACnB,mBAAmB;IACvB;;AAEJ","sourcesContent":[".aroma {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 120px 0;\n    background: #FAF3E1;\n}\n\n.aroma .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 90%;\n    max-width: 1290px;\n}\n.aroma__title {\n    font-family: 'Montserrat', sans-serif;\n    text-transform: uppercase;\n    color: #86996C;\n    margin-bottom: 1.4em;\n    font-size: 14px;\n}\n\n.aroma__subtitle {\n    color: #D75732;\n    font-size: 3.5em;\n    font-weight: 100;\n    margin-bottom: 0.5em;\n}\n\n.aroma__coffeeContainer {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    width: 100%;\n    height: 646px;\n}\n\n.aroma__coffeeName {\n    color: #D75732;\n    text-decoration: none;\n    font-size: 22px;\n    overflow: hidden;\n}\n\n.aroma__coffeeItem {\n    display: flex;\n    justify-content: flex-start;\n    align-items: end;\n    padding: 20px;\n    transition: all 0.5s ease-in-out;\n    background-size: cover;\n    background-position: center;\n}\n\n.aroma__coffeeItem:first-child {\n    background-image: url(\"../img/girl-drinking.jpg\");\n    grid-row: 1 / 3;\n}\n\n.aroma__coffeeItem:nth-child(2) {\n    background-image: url(\"../img/two-hands.jpg\");\n    grid-column: 2 / 4;\n}\n\n.aroma__coffeeItem:nth-child(3) {\n    background-image: url(\"../img/late.jpg\");\n}\n\n.aroma__coffeeItem:nth-child(4) {\n    background-image: url(\"../img/black-coffee.jpg\");\n}\n\n\n.aroma__coffeeItem:hover {\n    cursor: pointer;\n}\n\n.aroma__coffeeModal {\n    background-color: white;\n    padding: 20px;\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(0.8);\n    transition: all 0.3s ease-in-out;\n}\n\n.aroma__coffeeItem:hover .aroma__coffeeModal {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1);\n}\n\n@media screen and (max-width: 768px) {\n    .aroma__coffeeContainer {\n        height: auto;\n    }\n\n    .aroma__coffeeItem:first-child, .aroma__coffeeItem:nth-child(2){\n        grid-row: auto;    \n        grid-column: auto;\n    }\n\n    .aroma__coffeeContainer {\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(4, 300px);\n    }\n    \n    .aroma__coffeeModal {\n        opacity: 1;\n        visibility: visible;\n        transform: scale(1);\n    }\n\n}"],"sourceRoot":""}]);
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
}

@media screen and (max-width: 768px) {
    .coffeeCulture__subtitle {
        font-size: 10vw;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/coffeeCulture.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB;kFACiF;IACjF,gBAAgB;;AAEpB;;AAEA;IACI,qCAAqC;IACrC,yBAAyB;IACzB,YAAY;IACZ,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;IACrC,cAAc;AAClB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ","sourcesContent":[".coffeeCulture {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5),\n                       rgba(0, 0, 0, 0.5)),url(\"../img/coffeeCulture-background.jpg\");\n    padding: 180px 0;\n\n}\n\n.coffeeCulture__title {\n    font-family: 'Montserrat', sans-serif;\n    text-transform: uppercase;\n    color: white;\n    margin-bottom: 1.4em;\n    font-size: 14px;\n}\n\n.coffeeCulture__subtitle {\n    color: white;\n    font-size: 3.5em;\n    font-weight: 100;\n    margin-bottom: 0.5em;\n    text-align: center;\n}\n\n.coffeeCulture__text {\n    font-family: 'Montserrat', sans-serif;\n    color: #CFC8B8;\n}\n\n.coffeeCulture__blinkingCursor {\n    animation: blink 0.7s infinite;\n}\n\n@keyframes blink {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .coffeeCulture__subtitle {\n        font-size: 10vw;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/contact.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/contact.css ***!
  \*******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.contact {
    background-color: #FAF3E1;
}

.contact .container {
    display: flex;
    margin: 0 auto;
    padding: 100px 25px;
}

.contact .container > div {
    flex: 1;
}

.info-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.title {
    font-weight: 100;
    font-size: 27px;
    color: #D75732;
}

.address, .email {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #442916;
}

.phone {
    color: #D75732;
    font-size: 22px;
    text-decoration: none;

}

/* FORM STYLE*/
.form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.input-wrapper {
    width: 48%;
}

.input-wrapper-textArea {
    width: 100%;
}

.input-wrapper > input, .input-wrapper-textArea > textarea {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #F4D4BF;
    padding: 12px;
    font-family: 'Montserrat';
    font-size: 16px;
    background: transparent;
    transition: all 0.3s ease-in-out;
    color: #D75732;

}


.input-wrapper > input:hover, .input-wrapper-textArea > textarea:hover {
    border-bottom: 1px solid #D75732;
}

.input-wrapper > input::placeholder, .input-wrapper-textArea > textarea::placeholder {
    transition: all 0.3s ease-in-out;
}

.input-wrapper > input:focus, .input-wrapper-textArea > textarea:focus {
    border-bottom: 1px solid #D75732;
    color: #D75732;
}

.input-wrapper > input:focus::placeholder, .input-wrapper-textArea > textarea:focus::placeholder {
    color: #D75732;
}

.input-wrapper > input::placeholder, .input-wrapper-textArea > textarea::placeholder {
    color: #444340;
}

.input-wrapper > input:hover::placeholder, .input-wrapper-textArea > textarea:hover::placeholder {
    color: #D75732;
}

/*When the field has content */
.input-wrapper > input:valid{
    border-bottom: 1px solid #D75732;
}

button.submit {
    background-color: #E6A347;
    color: white;
    font-family: 'Montserrat';
    padding: 18px;
    border-radius: 40px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

button.submit:hover {
    background-color: #D75732;
}

@media screen and (max-width: 768px) {
    .contact .container {
        flex-direction: column;
        gap: 50px;
    }

    .input-wrapper {
        width: 100%;
    }

    .form {

        justify-content: center;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/contact.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,qCAAqC;IACrC,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,qBAAqB;;AAEzB;;AAEA,cAAc;AACd;IACI,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,gCAAgC;IAChC,aAAa;IACb,yBAAyB;IACzB,eAAe;IACf,uBAAuB;IACvB,gCAAgC;IAChC,cAAc;;AAElB;;;AAGA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;IAChC,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA,8BAA8B;AAC9B;IACI,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI;QACI,sBAAsB;QACtB,SAAS;IACb;;IAEA;QACI,WAAW;IACf;;IAEA;;QAEI,uBAAuB;IAC3B;AACJ","sourcesContent":[".contact {\n    background-color: #FAF3E1;\n}\n\n.contact .container {\n    display: flex;\n    margin: 0 auto;\n    padding: 100px 25px;\n}\n\n.contact .container > div {\n    flex: 1;\n}\n\n.info-container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n.title {\n    font-weight: 100;\n    font-size: 27px;\n    color: #D75732;\n}\n\n.address, .email {\n    text-decoration: none;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 14px;\n    color: #442916;\n}\n\n.phone {\n    color: #D75732;\n    font-size: 22px;\n    text-decoration: none;\n\n}\n\n/* FORM STYLE*/\n.form {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n\n.input-wrapper {\n    width: 48%;\n}\n\n.input-wrapper-textArea {\n    width: 100%;\n}\n\n.input-wrapper > input, .input-wrapper-textArea > textarea {\n    width: 100%;\n    outline: none;\n    border: none;\n    border-bottom: 1px solid #F4D4BF;\n    padding: 12px;\n    font-family: 'Montserrat';\n    font-size: 16px;\n    background: transparent;\n    transition: all 0.3s ease-in-out;\n    color: #D75732;\n\n}\n\n\n.input-wrapper > input:hover, .input-wrapper-textArea > textarea:hover {\n    border-bottom: 1px solid #D75732;\n}\n\n.input-wrapper > input::placeholder, .input-wrapper-textArea > textarea::placeholder {\n    transition: all 0.3s ease-in-out;\n}\n\n.input-wrapper > input:focus, .input-wrapper-textArea > textarea:focus {\n    border-bottom: 1px solid #D75732;\n    color: #D75732;\n}\n\n.input-wrapper > input:focus::placeholder, .input-wrapper-textArea > textarea:focus::placeholder {\n    color: #D75732;\n}\n\n.input-wrapper > input::placeholder, .input-wrapper-textArea > textarea::placeholder {\n    color: #444340;\n}\n\n.input-wrapper > input:hover::placeholder, .input-wrapper-textArea > textarea:hover::placeholder {\n    color: #D75732;\n}\n\n/*When the field has content */\n.input-wrapper > input:valid{\n    border-bottom: 1px solid #D75732;\n}\n\nbutton.submit {\n    background-color: #E6A347;\n    color: white;\n    font-family: 'Montserrat';\n    padding: 18px;\n    border-radius: 40px;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n}\n\nbutton.submit:hover {\n    background-color: #D75732;\n}\n\n@media screen and (max-width: 768px) {\n    .contact .container {\n        flex-direction: column;\n        gap: 50px;\n    }\n\n    .input-wrapper {\n        width: 100%;\n    }\n\n    .form {\n\n        justify-content: center;\n    }\n}"],"sourceRoot":""}]);
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
    flex-wrap: wrap;
    position: fixed;
    width: 100%;
    align-items: center;
    padding: 30px 0 10px 0;
    background-color: #00000040;
    backdrop-filter: blur(5px);
    justify-content: space-evenly;
    z-index: 100;
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

@media screen and (max-width: 768px) {
    .banner__title {
        font-size: 15vw;
    }
}
`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,sBAAsB;IACtB,2BAA2B;IAC3B,0BAA0B;IAC1B,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,gCAAgC;AACpC;;AAEA;IACI;QACI,eAAe;IACnB;AACJ","sourcesContent":[".header {\n    display: flex;\n    flex-wrap: wrap;\n    position: fixed;\n    width: 100%;\n    align-items: center;\n    padding: 30px 0 10px 0;\n    background-color: #00000040;\n    backdrop-filter: blur(5px);\n    justify-content: space-evenly;\n    z-index: 100;\n}\n\n.nav__list {\n    display: flex;\n    list-style: none;\n    align-items: center;\n    padding: 20px 0;\n    gap: 5vw;\n}\n\n.nav__link {\n    text-transform: uppercase;\n    font-weight: 100;\n    text-decoration: none;\n    color: #fff;\n    font-size: 1.2rem;\n    transition: all 0.3s ease-in-out;\n}\n\n@media screen and (max-width: 768px) {\n    .banner__title {\n        font-size: 15vw;\n    }\n}\n"],"sourceRoot":""}]);
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
    color: #D75732;
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
}`, "",{"version":3,"sources":["webpack://./src/css/products.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,2DAA2D;IAC3D,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;IACnB,UAAU;IACV,qBAAqB;IACrB,iCAAiC;AACrC;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,cAAc;IACd,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB","sourcesContent":[".products {\n    background-color: #FAF3E1;\n}\n.products .container {\n    max-width: 1144px;\n    margin: 0 auto;\n    padding: 100px 0;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));\n    grid-gap: 2rem;\n}\n\n.product-item {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    position: relative;\n    padding: 25px;\n}\n\n.product-item img {\n    border-radius: 15px;\n    width: 100%;\n    height: 100%;\n}\n\n.product-image-container {\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    border-radius: 15px;\n}\n.product-image-container::before{\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; \n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 15px;\n    opacity: 0;\n    transform: scale(0.8);\n    transition: all 0.25s ease-in-out;\n}\n\n.product-image-container:hover::before {\n    opacity: 1;\n    transform: scale(1);\n}\n\n.product-info-container {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    color: #D75732;\n    background-color: white;\n    padding: 1rem;\n    border-radius: 15px;\n    width: 100%;\n}\n\n.product-name {\n    font-size: 1.5rem;\n    font-weight: 600;\n    margin: 0.5rem 0;\n}\n\n.product-price {\n    font-size: 1.2rem;\n    font-weight: 600;\n    margin: 0.5rem 0;\n}"],"sourceRoot":""}]);
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

@media screen and (max-width: 768px) {
    .whatWeDo .container {
        flex-direction: column;
    }
   .whatWeDo__title {
    font-size: 10vw;
   }

   .whatWeDo__left, .whatWeDo__right {
        display: flex;
        flex-direction: column;
   }

   .whatWeDo__left__img, .whatWeDo__right__img {
        align-self: center;
   }

   .whatWeDo__left__img--rotating {
    right: 0;
   }
}

`, "",{"version":3,"sources":["webpack://./src/css/whatWeDo.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,yDAAuD;IACvD,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,qCAAqC;IACrC,yBAAyB;IACzB,cAAc;IACd,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;IACrB,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,UAAU;;IAEV,+BAA+B;IAC/B,uCAAuC;AAC3C;;AAEA;GACG,4BAA4B;AAC/B;;AAEA;IACI;QACI,yBAAyB;IAC7B;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;GACD;IACC,eAAe;GAChB;;GAEA;QACK,aAAa;QACb,sBAAsB;GAC3B;;GAEA;QACK,kBAAkB;GACvB;;GAEA;IACC,QAAQ;GACT;AACH","sourcesContent":[".whatWeDo {\n    display: flex;\n    justify-content: center;\n    background-image: url(\"../img/whatWeDo-background.png\");\n    padding: 120px 0;\n}\n\n.whatWeDo__left__img, .whatWeDo__right__img {\n    width: 75%;\n}\n\n.whatWeDo .container {\n    display: flex;\n}\n\n.whatWeDo div {\n    flex: 1;\n}\n\n.whatWeDo__subtitle {\n    font-family: 'Montserrat', sans-serif;\n    text-transform: uppercase;\n    color: #86996C;\n    margin-bottom: 1.4em;\n    font-size: 14px;\n}\n\n.whatWeDo__title {\n    color: #D75732;\n    font-size: 3.5em;\n    font-weight: 100;\n    margin-bottom: 0.5em;\n}\n\n.whatWeDo__right {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 70px;\n}\n\n.whatWeDo__content {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 25px;\n}\n\n.whatWeDo__btn {\n    color: #D75732;\n    font-size: 1.2em;\n    font-weight: 100;\n    text-decoration: none;\n    border: 1px solid #D75732;\n    padding: 10px 25px;\n    border-radius: 23px;\n    transition: all 0.3s ease-in-out;\n}\n\n.whatWeDo__btn:hover {\n    background-color: #D75732;\n    color: #fff;\n}\n\n.whatWeDo__right__img {\n    align-self: flex-end;\n}\n\n.whatWeDo__text {\n    font-size: 1.2em;\n    font-weight: 100;\n    line-height: 1.8em;\n    text-align: justify;\n}\n\n.whatWeDo__left__img--rotating {\n    width: 120px;\n    position: relative;\n    bottom: 10%;\n    right: 10%;\n\n    transform-origin: center center;\n    animation: rotating 10s linear infinite;\n}\n\n.whatWeDo__left__img--rotating:hover {\n   animation-play-state: paused;\n}\n\n@keyframes rotating {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .whatWeDo .container {\n        flex-direction: column;\n    }\n   .whatWeDo__title {\n    font-size: 10vw;\n   }\n\n   .whatWeDo__left, .whatWeDo__right {\n        display: flex;\n        flex-direction: column;\n   }\n\n   .whatWeDo__left__img, .whatWeDo__right__img {\n        align-self: center;\n   }\n\n   .whatWeDo__left__img--rotating {\n    right: 0;\n   }\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/css/contact.css":
/*!*****************************!*\
  !*** ./src/css/contact.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_loadPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/loadPage */ "./src/pages/loadPage.js");
/* harmony import */ var _pages_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/products */ "./src/pages/products.js");






function addNavEvents ()  {
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const contactBtn = document.querySelector('#contact');

    homeBtn.addEventListener('click', _pages_home__WEBPACK_IMPORTED_MODULE_2__["default"]);
    menuBtn.addEventListener('click', _pages_products__WEBPACK_IMPORTED_MODULE_4__["default"]);
    contactBtn.addEventListener('click', _pages_contact__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

init();

function init() {
    (0,_pages_loadPage__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

/***/ "./src/modules/Global/scrollToTop/scrollToTop.js":
/*!*******************************************************!*\
  !*** ./src/modules/Global/scrollToTop/scrollToTop.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _css_scrollToTop_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/scrollToTop.css */ "./src/css/scrollToTop.css");
/* harmony import */ var _img_icons_topRow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/icons/topRow.svg */ "./src/img/icons/topRow.svg");



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
/* harmony export */   "default": () => (/* binding */ createHomeBanner)
/* harmony export */ });
/* harmony import */ var _css_home_banner_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/home-banner.css */ "./src/css/home-banner.css");



const subTitle = "Welcome to our Coffeeshop"
const title = "Where Coffee Meets Hospitality"
function createHomeBanner() {
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

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/contact.css */ "./src/css/contact.css");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _img_products_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/products-background.jpg */ "./src/img/products-background.jpg");
/* harmony import */ var _modules_Global_banner_globalBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/Global/banner/globalBanner */ "./src/modules/Global/banner/globalBanner.js");







function createContactPage() {
    (0,___WEBPACK_IMPORTED_MODULE_1__.clearMain)();
    (0,___WEBPACK_IMPORTED_MODULE_1__.addMain)((0,_modules_Global_banner_globalBanner__WEBPACK_IMPORTED_MODULE_3__["default"])("Contact", "Growth resides in getting to know the different opinions", _img_products_background_jpg__WEBPACK_IMPORTED_MODULE_2__));
    (0,___WEBPACK_IMPORTED_MODULE_1__.addMain)(createContactSection());
}

function createContactSection() {
    const contactSection = document.createElement('section');
    contactSection.classList.add('contact');

    const contactContent = document.createElement('div');
    contactContent.classList.add('container');

    contactSection.appendChild(contactContent);
    contactContent.appendChild(createInfo());
    contactContent.appendChild(createForm());

    return contactSection;
}

function createInfo() {
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "Contact details";

    const address = document.createElement('p');
    address.classList.add('address');
    address.innerHTML = "785 15h Street, Office 478 <br> Berlin, De 81566";

    const email = document.createElement('a');
    email.classList.add('email');
    email.setAttribute('href', 'mailto:info@email.com"');
    email.textContent = "info@email.com";

    const phone = document.createElement('a');
    phone.classList.add('phone');
    phone.setAttribute('href', 'tel:+49123456789');
    phone.textContent = "+49 123 456 789";

    infoContainer.appendChild(title);
    infoContainer.appendChild(address);
    infoContainer.appendChild(email);
    infoContainer.appendChild(phone);

    return infoContainer;
}

function createForm() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const form = document.createElement('form');
    form.classList.add('form');

    const name = createInput('name', 'text', 'Name');
    const email = createInput('email', 'email', 'Email');
    const phone = createInput('phone', 'number', 'Phone');
    const subject = createInput('subject', 'text', 'Subject');
    const message = createTextArea('message', 'Message');

    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.setAttribute('type', 'submit');
    submit.textContent = "Get in Touch";

    form.appendChild(createInputWrapper('input-wrapper', name));
    form.appendChild(createInputWrapper('input-wrapper', email));
    form.appendChild(createInputWrapper('input-wrapper', phone));
    form.appendChild(createInputWrapper('input-wrapper', subject));
    form.appendChild(createInputWrapper('input-wrapper-textArea', message));

    form.appendChild(submit);

    formContainer.appendChild(form);

    return formContainer;
}

function createInputWrapper(className, input) {
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add(className);
    inputWrapper.classList.add(`${input.id}-container`);
    inputWrapper.appendChild(input);

    return inputWrapper;
}

function createTextArea(name, placeholder) {
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.id = `${name}-container`;
    textarea.setAttribute('name', name);
    textarea.setAttribute('placeholder', placeholder);

    return textarea;
}

function createInput(name, type, placeholder) {
    const input = document.createElement('input');
    input.classList.add('input');
    input.id = name;
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('required', '');

    return input;
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.js */ "./src/index.js");






function createHome() {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_4__.clearMain)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_4__.addMain)((0,_modules_Home_banner_banner_js__WEBPACK_IMPORTED_MODULE_0__["default"])()); // Add banner
    (0,_index_js__WEBPACK_IMPORTED_MODULE_4__.addMain)((0,_modules_Home_whatWeDo_whatWeDo_js__WEBPACK_IMPORTED_MODULE_1__["default"])()); // Add what we do section

    (0,_index_js__WEBPACK_IMPORTED_MODULE_4__.addMain)((0,_modules_Home_coffeeCulture_coffeeCulture_js__WEBPACK_IMPORTED_MODULE_2__.createCoffeeCulture)()); // Add coffee culture section
    (0,_modules_Home_coffeeCulture_coffeeCulture_js__WEBPACK_IMPORTED_MODULE_2__.animateLetters)(); // Animate letters for coffee culture section

    (0,_index_js__WEBPACK_IMPORTED_MODULE_4__.addMain)((0,_modules_Home_aroma_aroma_js__WEBPACK_IMPORTED_MODULE_3__["default"])()); // Add aroma section
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
/* harmony import */ var _modules_Global_scrollToTop_scrollToTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Global/scrollToTop/scrollToTop */ "./src/modules/Global/scrollToTop/scrollToTop.js");
/* harmony import */ var _modules_Global_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Global/footer/footer */ "./src/modules/Global/footer/footer.js");
/* harmony import */ var _modules_Global_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Global/header/header */ "./src/modules/Global/header/header.js");




function loadPage() {
    const root = document.querySelector('#root');

    root.appendChild((0,_modules_Global_header_header__WEBPACK_IMPORTED_MODULE_2__["default"])()); // Header that is static for all pages

    root.appendChild((0,_modules_Global_scrollToTop_scrollToTop__WEBPACK_IMPORTED_MODULE_0__["default"])()); // Scroll to top button that will be hidden until the user scrolls down
    
    // Main that will change depending on the page the user is on
    const main = document.createElement('main'); 
    main.setAttribute('id', 'main');
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
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.addMain)(createProductContainer());
    products.forEach(product => {
        addProduct((0,_modules_Products_Product_productItem__WEBPACK_IMPORTED_MODULE_4__["default"])(product.name, product.price, product.image));
    });
}

function addProduct(product) {
    const productsContainer = document.querySelector(".products .container");
    productsContainer.appendChild(product);
}

function createProductContainer() {
    const productContainer = document.createElement("div");
    productContainer.classList.add("products");

    const productsContent = document.createElement("div");
    productsContent.classList.add("container");

    productContainer.appendChild(productsContent);

    return productContainer;
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

/***/ "./src/img/icons/topRow.svg":
/*!**********************************!*\
  !*** ./src/img/icons/topRow.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7848643750097e98e989.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDRIQUEyQztBQUN2Riw0Q0FBNEMsb0hBQXVDO0FBQ25GLDRDQUE0QywwR0FBa0M7QUFDOUUsNENBQTRDLDBIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsT0FBTyxvRkFBb0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxpQ0FBaUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkJBQTZCLHVCQUF1QiwwQkFBMEIsR0FBRyx1QkFBdUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkJBQTZCLGlCQUFpQix3QkFBd0IsR0FBRyxpQkFBaUIsNENBQTRDLGdDQUFnQyxxQkFBcUIsMkJBQTJCLHNCQUFzQixHQUFHLHNCQUFzQixxQkFBcUIsdUJBQXVCLHVCQUF1QiwyQkFBMkIsR0FBRyw2QkFBNkIsb0JBQW9CLHlDQUF5Qyx5Q0FBeUMsa0JBQWtCLG9CQUFvQixHQUFHLHdCQUF3QixxQkFBcUIsNEJBQTRCLHNCQUFzQix1QkFBdUIsR0FBRyx3QkFBd0Isb0JBQW9CLGtDQUFrQyx1QkFBdUIsb0JBQW9CLHVDQUF1Qyw2QkFBNkIsa0NBQWtDLEdBQUcsb0NBQW9DLDBEQUEwRCxzQkFBc0IsR0FBRyxxQ0FBcUMsc0RBQXNELHlCQUF5QixHQUFHLHFDQUFxQyxpREFBaUQsR0FBRyxxQ0FBcUMseURBQXlELEdBQUcsZ0NBQWdDLHNCQUFzQixHQUFHLHlCQUF5Qiw4QkFBOEIsb0JBQW9CLGlCQUFpQix5QkFBeUIsNEJBQTRCLHVDQUF1QyxHQUFHLGtEQUFrRCxpQkFBaUIsMEJBQTBCLDBCQUEwQixHQUFHLDBDQUEwQywrQkFBK0IsdUJBQXVCLE9BQU8sd0VBQXdFLDZCQUE2Qiw0QkFBNEIsT0FBTyxpQ0FBaUMscUNBQXFDLCtDQUErQyxPQUFPLGlDQUFpQyxxQkFBcUIsOEJBQThCLDhCQUE4QixPQUFPLEtBQUssbUJBQW1CO0FBQ2o2RztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSXZDO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtKQUFzRDtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsbUNBQW1DO0FBQ3BGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0seUNBQXlDLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixxSkFBcUosdUJBQXVCLEtBQUssMkJBQTJCLDRDQUE0QyxnQ0FBZ0MsbUJBQW1CLDJCQUEyQixzQkFBc0IsR0FBRyw4QkFBOEIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsMkJBQTJCLHlCQUF5QixHQUFHLDBCQUEwQiw0Q0FBNEMscUJBQXFCLEdBQUcsb0NBQW9DLHFDQUFxQyxHQUFHLHNCQUFzQixVQUFVLHFCQUFxQixPQUFPLFdBQVcscUJBQXFCLE9BQU8sWUFBWSxxQkFBcUIsT0FBTyxHQUFHLDBDQUEwQyxnQ0FBZ0MsMEJBQTBCLE9BQU8sR0FBRyxtQkFBbUI7QUFDbGlEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLG1DQUFtQyxnQ0FBZ0MsR0FBRyx5QkFBeUIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsR0FBRywrQkFBK0IsY0FBYyxHQUFHLHFCQUFxQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLFVBQVUsdUJBQXVCLHNCQUFzQixxQkFBcUIsR0FBRyxzQkFBc0IsNEJBQTRCLDRDQUE0QyxzQkFBc0IscUJBQXFCLEdBQUcsWUFBWSxxQkFBcUIsc0JBQXNCLDRCQUE0QixLQUFLLDRCQUE0QixvQkFBb0Isc0JBQXNCLGdCQUFnQixHQUFHLG9CQUFvQixpQkFBaUIsR0FBRyw2QkFBNkIsa0JBQWtCLEdBQUcsZ0VBQWdFLGtCQUFrQixvQkFBb0IsbUJBQW1CLHVDQUF1QyxvQkFBb0IsZ0NBQWdDLHNCQUFzQiw4QkFBOEIsdUNBQXVDLHFCQUFxQixLQUFLLDhFQUE4RSx1Q0FBdUMsR0FBRywwRkFBMEYsdUNBQXVDLEdBQUcsNEVBQTRFLHVDQUF1QyxxQkFBcUIsR0FBRyxzR0FBc0cscUJBQXFCLEdBQUcsMEZBQTBGLHFCQUFxQixHQUFHLHNHQUFzRyxxQkFBcUIsR0FBRyxrRUFBa0UsdUNBQXVDLEdBQUcsbUJBQW1CLGdDQUFnQyxtQkFBbUIsZ0NBQWdDLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHNCQUFzQix1Q0FBdUMsR0FBRyx5QkFBeUIsZ0NBQWdDLEdBQUcsMENBQTBDLDJCQUEyQixpQ0FBaUMsb0JBQW9CLE9BQU8sd0JBQXdCLHNCQUFzQixPQUFPLGVBQWUsb0NBQW9DLE9BQU8sR0FBRyxtQkFBbUI7QUFDaDhHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SXZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsa0NBQWtDLGdDQUFnQyxzQkFBc0IsR0FBRyxtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsdUNBQXVDLG1CQUFtQiw0QkFBNEIsZ0JBQWdCLHNCQUFzQixHQUFHLHVCQUF1QixrQkFBa0Isa0JBQWtCLEdBQUcsbUJBQW1CO0FBQ3RvQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZJQUE2SSxJQUFJLElBQUksa0JBQWtCO0FBQ3ZLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLDhIQUE4SCxJQUFJLElBQUksbUJBQW1CLE9BQU8sY0FBYyxlQUFlLDJCQUEyQiw2Q0FBNkMsR0FBRyxnQkFBZ0IsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQjtBQUNuZ0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxRixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxrQ0FBa0Msb0JBQW9CLHNCQUFzQixzQkFBc0Isa0JBQWtCLDBCQUEwQiw2QkFBNkIsa0NBQWtDLGlDQUFpQyxvQ0FBb0MsbUJBQW1CLEdBQUcsZ0JBQWdCLG9CQUFvQix1QkFBdUIsMEJBQTBCLHNCQUFzQixlQUFlLEdBQUcsZ0JBQWdCLGdDQUFnQyx1QkFBdUIsNEJBQTRCLGtCQUFrQix3QkFBd0IsdUNBQXVDLEdBQUcsMENBQTBDLHNCQUFzQiwwQkFBMEIsT0FBTyxHQUFHLHFCQUFxQjtBQUM5bEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUN2QztBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxnSUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBGQUEwRixZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLG1DQUFtQyw0REFBNEQsNkJBQTZCLGtDQUFrQyxtQ0FBbUMsb0JBQW9CLGtCQUFrQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsa0JBQWtCLEdBQUcsdUJBQXVCLGdDQUFnQyxzQkFBc0IseUJBQXlCLDBCQUEwQixnREFBZ0QsdUJBQXVCLEdBQUcsb0JBQW9CLHNCQUFzQix5QkFBeUIsK0NBQStDLHVCQUF1QixHQUFHLG1CQUFtQjtBQUNwa0M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLHFDQUFxQyxnQ0FBZ0MsR0FBRyx3QkFBd0Isd0JBQXdCLHFCQUFxQix1QkFBdUIsb0JBQW9CLGtFQUFrRSxxQkFBcUIsR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IseUJBQXlCLG9CQUFvQixHQUFHLHVCQUF1QiwwQkFBMEIsa0JBQWtCLG1CQUFtQixHQUFHLDhCQUE4QixvQkFBb0IseUJBQXlCLHVCQUF1QiwwQkFBMEIsR0FBRyxtQ0FBbUMsb0JBQW9CLHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG9CQUFvQiwyQ0FBMkMsMEJBQTBCLGlCQUFpQiw0QkFBNEIsd0NBQXdDLEdBQUcsNENBQTRDLGlCQUFpQiwwQkFBMEIsR0FBRyw2QkFBNkIsb0JBQW9CLHFDQUFxQyx5QkFBeUIscUJBQXFCLDhCQUE4QixvQkFBb0IsMEJBQTBCLGtCQUFrQixHQUFHLG1CQUFtQix3QkFBd0IsdUJBQXVCLHVCQUF1QixHQUFHLG9CQUFvQix3QkFBd0IsdUJBQXVCLHVCQUF1QixHQUFHLG1CQUFtQjtBQUNub0U7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTywwRkFBMEYsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxxQ0FBcUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLG1CQUFtQixvQkFBb0Isa0JBQWtCLGtCQUFrQixtQkFBbUIsb0JBQW9CLGdDQUFnQyxtQkFBbUIsc0JBQXNCLDBCQUEwQixzQkFBc0IsNkNBQTZDLEdBQUcsd0JBQXdCLG1CQUFtQiwyQkFBMkIsR0FBRywwQkFBMEIscUJBQXFCLDhCQUE4QixHQUFHLHNCQUFzQixnQ0FBZ0MsR0FBRyxvQkFBb0Isa0JBQWtCLGtCQUFrQixHQUFHLHVCQUF1QjtBQUNqbEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0N2QztBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx3SUFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyx1RkFBdUYsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZ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WSx5Q0FBeUMseURBQU87QUFDeEUsSUFBSSxrREFBTztBQUNYO0FBQ0EsbUJBQW1CLGlGQUFpQjtBQUNwQyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9hcm9tYS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2NvZmZlZUN1bHR1cmUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9jb250YWN0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvaG9tZS1iYW5uZXIuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9wcm9kdWN0cy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL3Njcm9sbFRvVG9wLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3Mvd2hhdFdlRG8uY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvYXJvbWEuY3NzP2Y5NDYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2NvZmZlZUN1bHR1cmUuY3NzP2EwZTEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2NvbnRhY3QuY3NzP2QxZDgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2Zvb3Rlci5jc3M/YWI4YyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MvZ2xvYmFsLmNzcz81ODRhIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9oZWFkZXIuY3NzPzhhYzEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL2hvbWUtYmFubmVyLmNzcz8zZjNmIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy9wcm9kdWN0cy5jc3M/ZDM0OSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3Mvc2Nyb2xsVG9Ub3AuY3NzPzI1MDAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzL3doYXRXZURvLmNzcz8zMDZkIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9HbG9iYWwvYmFubmVyL2dsb2JhbEJhbm5lci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL0dsb2JhbC9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvR2xvYmFsL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9HbG9iYWwvc2Nyb2xsVG9Ub3Avc2Nyb2xsVG9Ub3AuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9Ib21lL2Fyb21hL2Fyb21hLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvSG9tZS9iYW5uZXIvYmFubmVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvSG9tZS9jb2ZmZWVDdWx0dXJlL2NvZmZlZUN1bHR1cmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9Ib21lL3doYXRXZURvL3doYXRXZURvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvUHJvZHVjdHMvUHJvZHVjdC9wcm9kdWN0SXRlbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZXMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZXMvcHJvZHVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9naXJsLWRyaW5raW5nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy90d28taGFuZHMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2xhdGUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2JsYWNrLWNvZmZlZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hcm9tYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTIwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjRkFGM0UxO1xufVxuXG4uYXJvbWEgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDEyOTBweDtcbn1cbi5hcm9tYV9fdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzg2OTk2QztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hcm9tYV9fc3VidGl0bGUge1xuICAgIGNvbG9yOiAjRDc1NzMyO1xuICAgIGZvbnQtc2l6ZTogMy41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLmFyb21hX19jb2ZmZWVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjQ2cHg7XG59XG5cbi5hcm9tYV9fY29mZmVlTmFtZSB7XG4gICAgY29sb3I6ICNENzU3MzI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYXJvbWFfX2NvZmZlZUl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmFyb21hX19jb2ZmZWVJdGVtOmZpcnN0LWNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xufVxuXG4uYXJvbWFfX2NvZmZlZUl0ZW06bnRoLWNoaWxkKDIpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xufVxuXG4uYXJvbWFfX2NvZmZlZUl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi5hcm9tYV9fY29mZmVlSXRlbTpudGgtY2hpbGQoNCkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuXG4uYXJvbWFfX2NvZmZlZUl0ZW06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFyb21hX19jb2ZmZWVNb2RhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5hcm9tYV9fY29mZmVlSXRlbTpob3ZlciAuYXJvbWFfX2NvZmZlZU1vZGFsIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuYXJvbWFfX2NvZmZlZUNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAuYXJvbWFfX2NvZmZlZUl0ZW06Zmlyc3QtY2hpbGQsIC5hcm9tYV9fY29mZmVlSXRlbTpudGgtY2hpbGQoMil7XG4gICAgICAgIGdyaWQtcm93OiBhdXRvOyAgICBcbiAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG87XG4gICAgfVxuXG4gICAgLmFyb21hX19jb2ZmZWVDb250YWluZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzAwcHgpO1xuICAgIH1cbiAgICBcbiAgICAuYXJvbWFfX2NvZmZlZU1vZGFsIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYXJvbWEuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlEQUFpRDtJQUNqRCxlQUFlO0FBQ25COztBQUVBO0lBQ0kseURBQTZDO0lBQzdDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlEQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHlEQUFnRDtBQUNwRDs7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSwwQkFBMEI7UUFDMUIsb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFyb21hIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEyMHB4IDA7XFxuICAgIGJhY2tncm91bmQ6ICNGQUYzRTE7XFxufVxcblxcbi5hcm9tYSAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogMTI5MHB4O1xcbn1cXG4uYXJvbWFfX3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICM4Njk5NkM7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNGVtO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5hcm9tYV9fc3VidGl0bGUge1xcbiAgICBjb2xvcjogI0Q3NTczMjtcXG4gICAgZm9udC1zaXplOiAzLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5hcm9tYV9fY29mZmVlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjQ2cHg7XFxufVxcblxcbi5hcm9tYV9fY29mZmVlTmFtZSB7XFxuICAgIGNvbG9yOiAjRDc1NzMyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmFyb21hX19jb2ZmZWVJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uYXJvbWFfX2NvZmZlZUl0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9naXJsLWRyaW5raW5nLmpwZ1xcXCIpO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxufVxcblxcbi5hcm9tYV9fY29mZmVlSXRlbTpudGgtY2hpbGQoMikge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy90d28taGFuZHMuanBnXFxcIik7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG59XFxuXFxuLmFyb21hX19jb2ZmZWVJdGVtOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2xhdGUuanBnXFxcIik7XFxufVxcblxcbi5hcm9tYV9fY29mZmVlSXRlbTpudGgtY2hpbGQoNCkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9ibGFjay1jb2ZmZWUuanBnXFxcIik7XFxufVxcblxcblxcbi5hcm9tYV9fY29mZmVlSXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFyb21hX19jb2ZmZWVNb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hcm9tYV9fY29mZmVlSXRlbTpob3ZlciAuYXJvbWFfX2NvZmZlZU1vZGFsIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLmFyb21hX19jb2ZmZWVDb250YWluZXIge1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5hcm9tYV9fY29mZmVlSXRlbTpmaXJzdC1jaGlsZCwgLmFyb21hX19jb2ZmZWVJdGVtOm50aC1jaGlsZCgyKXtcXG4gICAgICAgIGdyaWQtcm93OiBhdXRvOyAgICBcXG4gICAgICAgIGdyaWQtY29sdW1uOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5hcm9tYV9fY29mZmVlQ29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzAwcHgpO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYXJvbWFfX2NvZmZlZU1vZGFsIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9jb2ZmZWVDdWx0dXJlLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29mZmVlQ3VsdHVyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSxcbiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjUpKSx1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgcGFkZGluZzogMTgwcHggMDtcblxufVxuXG4uY29mZmVlQ3VsdHVyZV9fdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS40ZW07XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29mZmVlQ3VsdHVyZV9fc3VidGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29mZmVlQ3VsdHVyZV9fdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI0NGQzhCODtcbn1cblxuLmNvZmZlZUN1bHR1cmVfX2JsaW5raW5nQ3Vyc29yIHtcbiAgICBhbmltYXRpb246IGJsaW5rIDAuN3MgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb2ZmZWVDdWx0dXJlX19zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTB2dztcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NvZmZlZUN1bHR1cmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CO2tGQUNpRjtJQUNqRixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb2ZmZWVDdWx0dXJlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNSkpLHVybChcXFwiLi4vaW1nL2NvZmZlZUN1bHR1cmUtYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gICAgcGFkZGluZzogMTgwcHggMDtcXG5cXG59XFxuXFxuLmNvZmZlZUN1bHR1cmVfX3RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY29mZmVlQ3VsdHVyZV9fc3VidGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMy41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb2ZmZWVDdWx0dXJlX190ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNDRkM4Qjg7XFxufVxcblxcbi5jb2ZmZWVDdWx0dXJlX19ibGlua2luZ0N1cnNvciB7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMC43cyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jb2ZmZWVDdWx0dXJlX19zdWJ0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEwdnc7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGFjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjNFMTtcbn1cblxuLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMDBweCAyNXB4O1xufVxuXG4uY29udGFjdCAuY29udGFpbmVyID4gZGl2IHtcbiAgICBmbGV4OiAxO1xufVxuXG4uaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG4udGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIGNvbG9yOiAjRDc1NzMyO1xufVxuXG4uYWRkcmVzcywgLmVtYWlsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM0NDI5MTY7XG59XG5cbi5waG9uZSB7XG4gICAgY29sb3I6ICNENzU3MzI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuXG4vKiBGT1JNIFNUWUxFKi9cbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5pbnB1dC13cmFwcGVyIHtcbiAgICB3aWR0aDogNDglO1xufVxuXG4uaW5wdXQtd3JhcHBlci10ZXh0QXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnB1dC13cmFwcGVyID4gaW5wdXQsIC5pbnB1dC13cmFwcGVyLXRleHRBcmVhID4gdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjRENEJGO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6ICNENzU3MzI7XG5cbn1cblxuXG4uaW5wdXQtd3JhcHBlciA+IGlucHV0OmhvdmVyLCAuaW5wdXQtd3JhcHBlci10ZXh0QXJlYSA+IHRleHRhcmVhOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q3NTczMjtcbn1cblxuLmlucHV0LXdyYXBwZXIgPiBpbnB1dDo6cGxhY2Vob2xkZXIsIC5pbnB1dC13cmFwcGVyLXRleHRBcmVhID4gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmlucHV0LXdyYXBwZXIgPiBpbnB1dDpmb2N1cywgLmlucHV0LXdyYXBwZXItdGV4dEFyZWEgPiB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNENzU3MzI7XG4gICAgY29sb3I6ICNENzU3MzI7XG59XG5cbi5pbnB1dC13cmFwcGVyID4gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyLCAuaW5wdXQtd3JhcHBlci10ZXh0QXJlYSA+IHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNENzU3MzI7XG59XG5cbi5pbnB1dC13cmFwcGVyID4gaW5wdXQ6OnBsYWNlaG9sZGVyLCAuaW5wdXQtd3JhcHBlci10ZXh0QXJlYSA+IHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM0NDQzNDA7XG59XG5cbi5pbnB1dC13cmFwcGVyID4gaW5wdXQ6aG92ZXI6OnBsYWNlaG9sZGVyLCAuaW5wdXQtd3JhcHBlci10ZXh0QXJlYSA+IHRleHRhcmVhOmhvdmVyOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNENzU3MzI7XG59XG5cbi8qV2hlbiB0aGUgZmllbGQgaGFzIGNvbnRlbnQgKi9cbi5pbnB1dC13cmFwcGVyID4gaW5wdXQ6dmFsaWR7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNENzU3MzI7XG59XG5cbmJ1dHRvbi5zdWJtaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkEzNDc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbi5zdWJtaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENzU3MzI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNTBweDtcbiAgICB9XG5cbiAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5mb3JtIHtcblxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NvbnRhY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCOztBQUV6Qjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLGNBQWM7O0FBRWxCOzs7QUFHQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLDhCQUE4QjtBQUM5QjtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7O1FBRUksdUJBQXVCO0lBQzNCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGM0UxO1xcbn1cXG5cXG4uY29udGFjdCAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxufVxcblxcbi5jb250YWN0IC5jb250YWluZXIgPiBkaXYge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uaW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgY29sb3I6ICNENzU3MzI7XFxufVxcblxcbi5hZGRyZXNzLCAuZW1haWwge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICM0NDI5MTY7XFxufVxcblxcbi5waG9uZSB7XFxuICAgIGNvbG9yOiAjRDc1NzMyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG59XFxuXFxuLyogRk9STSBTVFlMRSovXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXIge1xcbiAgICB3aWR0aDogNDglO1xcbn1cXG5cXG4uaW5wdXQtd3JhcHBlci10ZXh0QXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQtd3JhcHBlciA+IGlucHV0LCAuaW5wdXQtd3JhcHBlci10ZXh0QXJlYSA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNEQ0QkY7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBjb2xvcjogI0Q3NTczMjtcXG5cXG59XFxuXFxuXFxuLmlucHV0LXdyYXBwZXIgPiBpbnB1dDpob3ZlciwgLmlucHV0LXdyYXBwZXItdGV4dEFyZWEgPiB0ZXh0YXJlYTpob3ZlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDc1NzMyO1xcbn1cXG5cXG4uaW5wdXQtd3JhcHBlciA+IGlucHV0OjpwbGFjZWhvbGRlciwgLmlucHV0LXdyYXBwZXItdGV4dEFyZWEgPiB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXIgPiBpbnB1dDpmb2N1cywgLmlucHV0LXdyYXBwZXItdGV4dEFyZWEgPiB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDc1NzMyO1xcbiAgICBjb2xvcjogI0Q3NTczMjtcXG59XFxuXFxuLmlucHV0LXdyYXBwZXIgPiBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsIC5pbnB1dC13cmFwcGVyLXRleHRBcmVhID4gdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNENzU3MzI7XFxufVxcblxcbi5pbnB1dC13cmFwcGVyID4gaW5wdXQ6OnBsYWNlaG9sZGVyLCAuaW5wdXQtd3JhcHBlci10ZXh0QXJlYSA+IHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjNDQ0MzQwO1xcbn1cXG5cXG4uaW5wdXQtd3JhcHBlciA+IGlucHV0OmhvdmVyOjpwbGFjZWhvbGRlciwgLmlucHV0LXdyYXBwZXItdGV4dEFyZWEgPiB0ZXh0YXJlYTpob3Zlcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI0Q3NTczMjtcXG59XFxuXFxuLypXaGVuIHRoZSBmaWVsZCBoYXMgY29udGVudCAqL1xcbi5pbnB1dC13cmFwcGVyID4gaW5wdXQ6dmFsaWR7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDc1NzMyO1xcbn1cXG5cXG5idXR0b24uc3VibWl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2QTM0NztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJ1dHRvbi5zdWJtaXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDc1NzMyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuY29udGFjdCAuY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0LXdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLmZvcm0ge1xcblxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU4OTdlO1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbn1cblxuLmZvb3Rlcl9fbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvb3Rlcl9fbGluayBzdmcge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGZpbGw6IHdoaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZTg5N2U7XFxuICAgIHBhZGRpbmc6IDQwcHggMDtcXG59XFxuXFxuLmZvb3Rlcl9fbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyX19saW5rIHN2ZyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kJmZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCAyNXB4O1xuICBtYXgtd2lkdGg6IDEzMjBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kJmZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCAyNXB4O1xcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweCAwIDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNDA7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4ubmF2X19saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgZ2FwOiA1dnc7XG59XG5cbi5uYXZfX2xpbmsge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmJhbm5lcl9fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE1dnc7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMzBweCAwIDEwcHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDQwO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLm5hdl9fbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgZ2FwOiA1dnc7XFxufVxcblxcbi5uYXZfX2xpbmsge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5iYW5uZXJfX3RpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTV2dztcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9ob21lLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYmFubmVyX19zdWJ0aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgICAgXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJhbm5lcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lLWJhbm5lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5REFBbUQ7SUFDbkQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJhbm5lciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2hvbWUtYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYmFubmVyX19zdWJ0aXRsZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmJhbm5lcl9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvZHVjdHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUYzRTE7XG59XG4ucHJvZHVjdHMgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMTQ0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMTAwcHggMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjdyZW0sIDFmcikpO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xufVxuXG4ucHJvZHVjdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ucHJvZHVjdC1pdGVtIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyOjpiZWZvcmV7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9kdWN0LWltYWdlLWNvbnRhaW5lcjpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wcm9kdWN0LWluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgY29sb3I6ICNENzU3MzI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2R1Y3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2R1Y3RzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjNFMTtcXG59XFxuLnByb2R1Y3RzIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDExNDRweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjdyZW0sIDFmcikpO1xcbiAgICBncmlkLWdhcDogMnJlbTtcXG59XFxuXFxuLnByb2R1Y3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4ucHJvZHVjdC1pdGVtIGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9kdWN0LWltYWdlLWNvbnRhaW5lcjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnByb2R1Y3QtaW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNENzU3MzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2R1Y3QtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG4ucHJvZHVjdC1wcmljZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zY3JvbGxCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDIuM2VtO1xuICAgIGhlaWdodDogMi4zZW07XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgei1pbmRleDogOTk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q3NTczMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xufVxuXG4uc2Nyb2xsQnRuLS1hY3RpdmUge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnNjcm9sbEJ0bi0taW5hY3RpdmUge1xuICAgIGJvdHRvbTogLTEwMHB4O1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjVzO1xufVxuXG4uc2Nyb2xsQnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZBMzQ3O1xufVxuXG4uc2Nyb2xsQnRuIHN2ZyB7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgZmlsbDogd2hpdGU7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zY3JvbGxUb1RvcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNjcm9sbEJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAyLjNlbTtcXG4gICAgaGVpZ2h0OiAyLjNlbTtcXG4gICAgcmlnaHQ6IDMwcHg7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENzU3MzI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xcbn1cXG5cXG4uc2Nyb2xsQnRuLS1hY3RpdmUge1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4uc2Nyb2xsQnRuLS1pbmFjdGl2ZSB7XFxuICAgIGJvdHRvbTogLTEwMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC41cztcXG59XFxuXFxuLnNjcm9sbEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkEzNDc7XFxufVxcblxcbi5zY3JvbGxCdG4gc3ZnIHtcXG4gICAgd2lkdGg6IDIxcHg7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy93aGF0V2VEby1iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndoYXRXZURvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBwYWRkaW5nOiAxMjBweCAwO1xufVxuXG4ud2hhdFdlRG9fX2xlZnRfX2ltZywgLndoYXRXZURvX19yaWdodF9faW1nIHtcbiAgICB3aWR0aDogNzUlO1xufVxuXG4ud2hhdFdlRG8gLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLndoYXRXZURvIGRpdiB7XG4gICAgZmxleDogMTtcbn1cblxuLndoYXRXZURvX19zdWJ0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjODY5OTZDO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNGVtO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLndoYXRXZURvX190aXRsZSB7XG4gICAgY29sb3I6ICNENzU3MzI7XG4gICAgZm9udC1zaXplOiAzLjVlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4ud2hhdFdlRG9fX3JpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA3MHB4O1xufVxuXG4ud2hhdFdlRG9fX2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4ud2hhdFdlRG9fX2J0biB7XG4gICAgY29sb3I6ICNENzU3MzI7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDc1NzMyO1xuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ud2hhdFdlRG9fX2J0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q3NTczMjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLndoYXRXZURvX19yaWdodF9faW1nIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLndoYXRXZURvX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi53aGF0V2VEb19fbGVmdF9faW1nLS1yb3RhdGluZyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDEwJTtcbiAgICByaWdodDogMTAlO1xuXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICBhbmltYXRpb246IHJvdGF0aW5nIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi53aGF0V2VEb19fbGVmdF9faW1nLS1yb3RhdGluZzpob3ZlciB7XG4gICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLndoYXRXZURvIC5jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgIC53aGF0V2VEb19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTB2dztcbiAgIH1cblxuICAgLndoYXRXZURvX19sZWZ0LCAud2hhdFdlRG9fX3JpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIH1cblxuICAgLndoYXRXZURvX19sZWZ0X19pbWcsIC53aGF0V2VEb19fcmlnaHRfX2ltZyB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgIH1cblxuICAgLndoYXRXZURvX19sZWZ0X19pbWctLXJvdGF0aW5nIHtcbiAgICByaWdodDogMDtcbiAgIH1cbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3doYXRXZURvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIseURBQXVEO0lBQ3ZELGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7O0lBRVYsK0JBQStCO0lBQy9CLHVDQUF1QztBQUMzQzs7QUFFQTtHQUNHLDRCQUE0QjtBQUMvQjs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtHQUNEO0lBQ0MsZUFBZTtHQUNoQjs7R0FFQTtRQUNLLGFBQWE7UUFDYixzQkFBc0I7R0FDM0I7O0dBRUE7UUFDSyxrQkFBa0I7R0FDdkI7O0dBRUE7SUFDQyxRQUFRO0dBQ1Q7QUFDSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2hhdFdlRG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvd2hhdFdlRG8tYmFja2dyb3VuZC5wbmdcXFwiKTtcXG4gICAgcGFkZGluZzogMTIwcHggMDtcXG59XFxuXFxuLndoYXRXZURvX19sZWZ0X19pbWcsIC53aGF0V2VEb19fcmlnaHRfX2ltZyB7XFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcbi53aGF0V2VEbyAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLndoYXRXZURvIGRpdiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi53aGF0V2VEb19fc3VidGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogIzg2OTk2QztcXG4gICAgbWFyZ2luLWJvdHRvbTogMS40ZW07XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLndoYXRXZURvX190aXRsZSB7XFxuICAgIGNvbG9yOiAjRDc1NzMyO1xcbiAgICBmb250LXNpemU6IDMuNWVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLndoYXRXZURvX19yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA3MHB4O1xcbn1cXG5cXG4ud2hhdFdlRG9fX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLndoYXRXZURvX19idG4ge1xcbiAgICBjb2xvcjogI0Q3NTczMjtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDc1NzMyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ud2hhdFdlRG9fX2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENzU3MzI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ud2hhdFdlRG9fX3JpZ2h0X19pbWcge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLndoYXRXZURvX190ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4ud2hhdFdlRG9fX2xlZnRfX2ltZy0tcm90YXRpbmcge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAxMCU7XFxuICAgIHJpZ2h0OiAxMCU7XFxuXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgIGFuaW1hdGlvbjogcm90YXRpbmcgMTBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLndoYXRXZURvX19sZWZ0X19pbWctLXJvdGF0aW5nOmhvdmVyIHtcXG4gICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0aW5nIHtcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC53aGF0V2VEbyAuY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAud2hhdFdlRG9fX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxMHZ3O1xcbiAgIH1cXG5cXG4gICAud2hhdFdlRG9fX2xlZnQsIC53aGF0V2VEb19fcmlnaHQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgfVxcblxcbiAgIC53aGF0V2VEb19fbGVmdF9faW1nLCAud2hhdFdlRG9fX3JpZ2h0X19pbWcge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgIH1cXG5cXG4gICAud2hhdFdlRG9fX2xlZnRfX2ltZy0tcm90YXRpbmcge1xcbiAgICByaWdodDogMDtcXG4gICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcm9tYS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fyb21hLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2ZmZWVDdWx0dXJlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29mZmVlQ3VsdHVyZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUtYmFubmVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS1iYW5uZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2R1Y3RzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZHVjdHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njcm9sbFRvVG9wLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2Nyb2xsVG9Ub3AuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3doYXRXZURvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2hhdFdlRG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vY3NzL2dsb2JhbC5jc3MnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RQYWdlIGZyb20gJy4vcGFnZXMvY29udGFjdCc7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9wYWdlcy9sb2FkUGFnZSc7XG5pbXBvcnQgY3JlYXRlUHJvZHVjdHNQYWdlIGZyb20gJy4vcGFnZXMvcHJvZHVjdHMnO1xuXG5mdW5jdGlvbiBhZGROYXZFdmVudHMgKCkgIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcblxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVIb21lKTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvZHVjdHNQYWdlKTtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlQ29udGFjdFBhZ2UpO1xufVxuXG5pbml0KCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbG9hZFBhZ2UoKTtcbiAgICBjcmVhdGVIb21lKCk7XG4gICAgYWRkTmF2RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmZ1bmN0aW9uIGFkZE1haW4oZWxlbWVudCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59O1xuXG5leHBvcnQge2NsZWFyTWFpbiwgYWRkTWFpbn07IiwiaW1wb3J0ICcuLi8uLi8uLi9jc3MvaG9tZS1iYW5uZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmFubmVyKHRpdGxlLCBzdWJUaXRsZSwgYmdJbWFnZSkge1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG4gICAgYmFubmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiZ0ltYWdlfSlgO1xuICAgIGJhbm5lci5zdHlsZS5oZWlnaHQgPSAnNjB2aCc7XG5cbiAgICBjb25zdCBiYW5uZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFubmVyVGV4dC5jbGFzc0xpc3QuYWRkKCdiYW5uZXJfX3RleHQnKTtcblxuICAgIGNvbnN0IGJhbm5lclN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBiYW5uZXJTdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdiYW5uZXJfX3N1YnRpdGxlJyk7XG4gICAgYmFubmVyU3VidGl0bGUudGV4dENvbnRlbnQgPSBzdWJUaXRsZTtcblxuICAgIGNvbnN0IGJhbm5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBiYW5uZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdiYW5uZXJfX3RpdGxlJyk7XG4gICAgYmFubmVyVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGJhbm5lclRleHQuYXBwZW5kQ2hpbGQoYmFubmVyU3VidGl0bGUpO1xuICAgIGJhbm5lclRleHQuYXBwZW5kQ2hpbGQoYmFubmVyVGl0bGUpO1xuICAgIFxuXG4gICAgYmFubmVyLmFwcGVuZENoaWxkKGJhbm5lclRleHQpO1xuXG4gICAgcmV0dXJuIGJhbm5lcjsgXG59IiwiaW1wb3J0ICcuLi8uLi8uLi9jc3MvZm9vdGVyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZvb3RlckxpbmsuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX19saW5rJyk7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2ptY2FtcG9zZGV2Jyk7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcbiAgICBmb290ZXJMaW5rLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImlvbmljb25cIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTI1NiAzMkMxMzIuMyAzMiAzMiAxMzQuOSAzMiAyNjEuN2MwIDEwMS41IDY0LjIgMTg3LjUgMTUzLjIgMjE3LjlhMTcuNTYgMTcuNTYgMCAwMDMuOC40YzguMyAwIDExLjUtNi4xIDExLjUtMTEuNCAwLTUuNS0uMi0xOS45LS4zLTM5LjFhMTAyLjQgMTAyLjQgMCAwMS0yMi42IDIuN2MtNDMuMSAwLTUyLjktMzMuNS01Mi45LTMzLjUtMTAuMi0yNi41LTI0LjktMzMuNi0yNC45LTMzLjYtMTkuNS0xMy43LS4xLTE0LjEgMS40LTE0LjFoLjFjMjIuNSAyIDM0LjMgMjMuOCAzNC4zIDIzLjggMTEuMiAxOS42IDI2LjIgMjUuMSAzOS42IDI1LjFhNjMgNjMgMCAwMDI1LjYtNmMyLTE0LjggNy44LTI0LjkgMTQuMi0zMC43LTQ5LjctNS44LTEwMi0yNS41LTEwMi0xMTMuNSAwLTI1LjEgOC43LTQ1LjYgMjMtNjEuNi0yLjMtNS44LTEwLTI5LjIgMi4yLTYwLjhhMTguNjQgMTguNjQgMCAwMTUtLjVjOC4xIDAgMjYuNCAzLjEgNTYuNiAyNC4xYTIwOC4yMSAyMDguMjEgMCAwMTExMi4yIDBjMzAuMi0yMSA0OC41LTI0LjEgNTYuNi0yNC4xYTE4LjY0IDE4LjY0IDAgMDE1IC41YzEyLjIgMzEuNiA0LjUgNTUgMi4yIDYwLjggMTQuMyAxNi4xIDIzIDM2LjYgMjMgNjEuNiAwIDg4LjItNTIuNCAxMDcuNi0xMDIuMyAxMTMuMyA4IDcuMSAxNS4yIDIxLjEgMTUuMiA0Mi41IDAgMzAuNy0uMyA1NS41LS4zIDYzIDAgNS40IDMuMSAxMS41IDExLjQgMTEuNWExOS4zNSAxOS4zNSAwIDAwNC0uNEM0MTUuOSA0NDkuMiA0ODAgMzYzLjEgNDgwIDI2MS43IDQ4MCAxMzQuOSAzNzkuNyAzMiAyNTYgMzJ6XCIvPjwvc3ZnPjxzcGFuPmptY2FtcG9zZGV2PC9zcGFuPmA7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufSIsImltcG9ydCAnLi4vLi4vLi4vY3NzL2hlYWRlci5jc3MnO1xuaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi4vLi4vLi4vaW1nL2xvZ28ucG5nJztcbmNvbnN0IG5hdkl0ZW1zID0gW1xuICB7XG4gICAgbmFtZTogJ0hvbWUnLFxuICAgIGxpbms6ICcjJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ01lbnUnLFxuICAgIGxpbms6ICcjJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ0NvbnRhY3QnLFxuICAgIGxpbms6ICcjJ1xuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuXG4gIC8vIExvZ29cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG4gIGxvZ28uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtsb2dvSW1nfVwiIGFsdD1cImxvZ29cIj5gXG5cbiAgLy8gTmF2XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2X19saXN0JylcbiAgLy8gQWRkIG5hdiBpdGVtc1xuICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCduYXZfX2l0ZW0nKVxuICAgIGNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBuYXZMaW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluaycpXG4gICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpdGVtLmxpbmspXG4gICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgbmF2TGluay50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZVxuXG4gICAgbmF2SXRlbS5hcHBlbmRDaGlsZChuYXZMaW5rKVxuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2SXRlbSlcbiAgfSlcbiAgLy8gQWRkIG5hdiBsaXN0IHRvIG5hdlxuICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlzdClcbiAgLy8gQWRkIG5hdiBhbmQgbG9nbyB0byBoZWFkZXJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpXG5cbiAgcmV0dXJuIGhlYWRlclxufSIsImltcG9ydCAnLi4vLi4vLi4vY3NzL3Njcm9sbFRvVG9wLmNzcyc7XG5pbXBvcnQgdG9wUm93U3ZnIGZyb20gJy4uLy4uLy4uL2ltZy9pY29ucy90b3BSb3cuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2Nyb2xsQnRuLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbEJ0bicsICdzY3JvbGxCdG4tLWluYWN0aXZlJyk7XG4gICAgc2Nyb2xsQnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdTY3JvbGwgdG8gdG9wJyk7XG4gICAgc2Nyb2xsQnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIHNjcm9sbEJ0bi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgc2Nyb2xsQnRuLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiIHdpZHRoPVwiNDhcIiBjb2xvcj1cIiNmZmZcIj48cGF0aCBkPVwiTTQ1MC04MHYtNjg2TDI0Mi01NThsLTQyLTQyIDI4MC0yODAgMjgwIDI4MC00MiA0Mi0yMDgtMjA4djY4NmgtNjBaXCIvPjwvc3ZnPmA7XG4gICAgc2Nyb2xsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwKSB7XG4gICAgICAgICAgICBzY3JvbGxCdG4uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsQnRuLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIHNjcm9sbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxCdG4tLWluYWN0aXZlJyk7XG4gICAgICAgICAgICBzY3JvbGxCdG4uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Nyb2xsQnRuLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbEJ0bi0taW5hY3RpdmUnKTtcbiAgICAgICAgICAgIHNjcm9sbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxCdG4tLWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJpYVN0YXR1cyA9IHNjcm9sbEJ0bi5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICBzY3JvbGxCdG4uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICFhcmlhU3RhdHVzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2Nyb2xsQnRuO1xufSIsImltcG9ydCAnLi4vLi4vLi4vY3NzL2Fyb21hLmNzcyc7XG5cbmNvbnN0IHRpdGxlQ29udGVudCA9IFwiQXJvbWFcIjtcbmNvbnN0IHN1YlRpdGxlQ29udGVudCA9IFwiT3VyIENvZmZlZVwiO1xuXG5jb25zdCBjb2ZmZWVJdGVtcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiSWNlZCBjYXJhbWVsIG1hY2NoaWF0b1wiLFxuICAgICAgICB0eXBlOiBcIkNvZmZlZVwiLFxuICAgICAgICBsaW5rOiBcIiNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNyZWFteSBoYXplbG51dCBtb2NoYVwiLFxuICAgICAgICB0eXBlOiBcIkNvZmZlZVwiLFxuICAgICAgICBsaW5rOiBcIiNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlN3ZWV0IHZhbmlsbGEgbGF0dGVcIixcbiAgICAgICAgdHlwZTogXCJDb2ZmZWVcIixcbiAgICAgICAgbGluazogXCIjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJJcmlzaCBjcmVhbSBjb2ZmZWVcIixcbiAgICAgICAgdHlwZTogXCJDb2ZmZWVcIixcbiAgICAgICAgbGluazogXCIjXCJcbiAgICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBcm9tYSgpICB7XG4gICAgY29uc3QgYXJvbWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgYXJvbWEuY2xhc3NMaXN0LmFkZCgnYXJvbWEnKTtcblxuICAgIGNvbnN0IGFyb21hQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJvbWFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnYXJvbWFfX3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZUNvbnRlbnQ7XG5cbiAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc3ViVGl0bGUuY2xhc3NMaXN0LmFkZCgnYXJvbWFfX3N1YnRpdGxlJyk7XG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBzdWJUaXRsZUNvbnRlbnQ7XG5cbiAgICBjb25zdCBjb2ZmZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2ZmZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXJvbWFfX2NvZmZlZUNvbnRhaW5lcicpO1xuXG4gICAgY29mZmVlSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgY29mZmVlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb2ZmZWVJdGVtLmNsYXNzTGlzdC5hZGQoJ2Fyb21hX19jb2ZmZWVJdGVtJyk7XG5cbiAgICAgICAgY29uc3QgY29mZmVlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29mZmVlTW9kYWwuY2xhc3NMaXN0LmFkZCgnYXJvbWFfX2NvZmZlZU1vZGFsJyk7XG5cbiAgICAgICAgY29uc3QgY29mZmVlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgY29mZmVlTmFtZS5jbGFzc0xpc3QuYWRkKCdhcm9tYV9fY29mZmVlTmFtZScpO1xuICAgICAgICBjb2ZmZWVOYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICBjb2ZmZWVOYW1lLnNldEF0dHJpYnV0ZSgnaHJlZicsIGl0ZW0ubGluayk7XG5cbiAgICAgICAgY29uc3QgY29mZmVlVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29mZmVlVHlwZS5jbGFzc0xpc3QuYWRkKCdhcm9tYV9fY29mZmVlVHlwZScpO1xuICAgICAgICBjb2ZmZWVUeXBlLnRleHRDb250ZW50ID0gaXRlbS50eXBlO1xuXG4gICAgICAgIGNvZmZlZU1vZGFsLmFwcGVuZENoaWxkKGNvZmZlZU5hbWUpO1xuICAgICAgICBjb2ZmZWVNb2RhbC5hcHBlbmRDaGlsZChjb2ZmZWVUeXBlKTtcblxuICAgICAgICBjb2ZmZWVJdGVtLmFwcGVuZENoaWxkKGNvZmZlZU1vZGFsKTtcblxuICAgICAgICBjb2ZmZWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29mZmVlSXRlbSk7XG4gICAgfSk7XG5cbiAgICBhcm9tYUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgYXJvbWFDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuICAgIGFyb21hQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZUNvbnRhaW5lcik7XG5cbiAgICBhcm9tYS5hcHBlbmRDaGlsZChhcm9tYUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gYXJvbWE7XG59OyIsImltcG9ydCAnLi4vLi4vLi4vY3NzL2hvbWUtYmFubmVyLmNzcyc7XG5cblxuY29uc3Qgc3ViVGl0bGUgPSBcIldlbGNvbWUgdG8gb3VyIENvZmZlZXNob3BcIlxuY29uc3QgdGl0bGUgPSBcIldoZXJlIENvZmZlZSBNZWV0cyBIb3NwaXRhbGl0eVwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lQmFubmVyKCkge1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG5cblxuICAgIGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcl9fdGV4dCcpO1xuXG4gICAgY29uc3QgYmFubmVyU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGJhbm5lclN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcl9fc3VidGl0bGUnKTtcbiAgICBiYW5uZXJTdWJ0aXRsZS50ZXh0Q29udGVudCA9IHN1YlRpdGxlO1xuXG4gICAgY29uc3QgYmFubmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGJhbm5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcl9fdGl0bGUnKTtcbiAgICBiYW5uZXJUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgYmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJTdWJ0aXRsZSk7XG4gICAgYmFubmVyVGV4dC5hcHBlbmRDaGlsZChiYW5uZXJUaXRsZSk7XG4gICAgXG5cbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVyVGV4dCk7XG5cbiAgICByZXR1cm4gYmFubmVyOyBcbn0iLCJpbXBvcnQgJy4uLy4uLy4uL2Nzcy9jb2ZmZWVDdWx0dXJlLmNzcyc7XG5cblxuY29uc3QgdGl0bGVDb250ZW50ID0gXCJDb2ZmZWUgQ3VsdHVyZVwiO1xuY29uc3Qgc3ViVGl0bGVDb250ZW50ID0gXCJDcmFmdGluZyB0aGUgcGVyZmVjdCBjdXAgb2YgY29mZmVlOiA8YnI+IG1ldGljdWxvdXMgXCJcbmNvbnN0IGxldHRlcnNDb250ZW50ID0gW1wicm9hc3RpbmdcIiwgXCJicmV3aW5nXCIsIFwic2VydmluZ1wiLCBcImVuam95aW5nXCIsIFwicG91cmluZ1wiXVxuY29uc3QgdGV4dENvbnRlbnQgPSBcIkltcHJvdmUgeW91ciBsaWZlIHdpdGggY29mZmVlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvZmZlZUN1bHR1cmUoKSB7XG4gICAgY29uc3QgY29mZmVlQ3VsdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb2ZmZWVDdWx0dXJlLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZUN1bHR1cmUnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjb2ZmZWVDdWx0dXJlX190aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVDb250ZW50O1xuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHN1YlRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZUN1bHR1cmVfX3N1YnRpdGxlJyk7XG4gICAgc3ViVGl0bGUuaW5uZXJIVE1MID0gc3ViVGl0bGVDb250ZW50O1xuXG4gICAgY29uc3QgbGV0dGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsZXR0ZXJzLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZUN1bHR1cmVfX2xldHRlcnMnKTtcbiAgICBsZXR0ZXJzLnRleHRDb250ZW50ID0gbGV0dGVyc0NvbnRlbnRbMF07XG5cbiAgICBjb25zdCBibGlua2luZ0N1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBibGlua2luZ0N1cnNvci5jbGFzc0xpc3QuYWRkKCdjb2ZmZWVDdWx0dXJlX19ibGlua2luZ0N1cnNvcicpO1xuICAgIGJsaW5raW5nQ3Vyc29yLnRleHRDb250ZW50ID0gXCJfXCI7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnY29mZmVlQ3VsdHVyZV9fdGV4dCcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxuICAgIGNvZmZlZUN1bHR1cmUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvZmZlZUN1bHR1cmUuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuICAgIHN1YlRpdGxlLmFwcGVuZENoaWxkKGxldHRlcnMpO1xuICAgIHN1YlRpdGxlLmFwcGVuZENoaWxkKGJsaW5raW5nQ3Vyc29yKTtcbiAgICBjb2ZmZWVDdWx0dXJlLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIFxuICAgIHJldHVybiBjb2ZmZWVDdWx0dXJlO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlTGV0dGVycygpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2ZmZWVDdWx0dXJlX19sZXR0ZXJzXCIpO1xuICAgIGxldCBpID0gMTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdvcmRzID0gbGV0dGVyc0NvbnRlbnRbaV0uc3BsaXQoXCJcIik7IC8vIFNwbGl0IGVhY2ggd29yZCBpbnRvIGFuIGFycmF5IG9mIGxldHRlcnNcbiAgICAgICAgXG4gICAgICAgIC8vIFJlbW92ZSBlYWNoIGxldHRlciB3aXRoIGEgZGVsYXlcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZXR0ZXJzLnRleHRDb250ZW50Lmxlbmd0aDsgaisrKSB7IFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlcnMudGV4dENvbnRlbnQgPSBsZXR0ZXJzLnRleHRDb250ZW50LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIH0sIDc1ICogKHdvcmRzLmxlbmd0aCAtIGopKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgPT0gbGV0dGVyc0NvbnRlbnQubGVuZ3RoIC0gMSA/IGkgPSAwIDogaSsrOyAvLyBSZXNldCBpIHRvIDAgaWYgaXQgcmVhY2hlcyB0aGUgZW5kIG9mIHRoZSBhcnJheVxuXG4gICAgICAgIC8vIFdyaXRlIHRoZSBuZXh0IHdvcmQgYWZ0ZXIgcmVtb3ZpbmcgdGhlIHByZXZpb3VzIG9uZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgICAgICB3b3Jkcy5mb3JFYWNoKChsZXR0ZXIsIGluZGV4KSA9PiB7IC8vIFdyaXRlIGVhY2ggbGV0dGVyIHdpdGggYSBkZWxheVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJzLnRleHRDb250ZW50ICs9IGxldHRlcjtcbiAgICAgICAgICAgICAgICB9LCAxMDAgKiBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTUwMCk7XG5cbiAgICAgICAgXG4gICAgfSwgKDIwMCAqIGxldHRlcnNDb250ZW50Lmxlbmd0aCArIDE1MDApICsgMzAwKTsgLy8gV2FpdCBmb3IgdGhlIHByZXZpb3VzIHdvcmQgdG8gYmUgd3JpdHRlbiBiZWZvcmUgc3RhcnRpbmcgdGhlIG5leHQgb25lXG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNvZmZlZUN1bHR1cmUsIGFuaW1hdGVMZXR0ZXJzIH07XG5cbiIsImltcG9ydCAnLi4vLi4vLi4vY3NzL3doYXRXZURvLmNzcyc7XG5pbXBvcnQgbGVmdEltZ1VybCBmcm9tICcuLi8uLi8uLi9pbWcvbGVmdC1wZXJzb24uanBnJztcbmltcG9ydCByaWdodEltZ1VybCBmcm9tICcuLi8uLi8uLi9pbWcvcmlnaHQtcGVyc29uLmpwZyc7XG5pbXBvcnQgcm90YXRpbmdJbWdVcmwgZnJvbSAnLi4vLi4vLi4vaW1nL3JvdGF0ZWQtaW1nLnBuZyc7XG5cbmNvbnN0IHdoYXRXZURvU3VidGl0bGVUZXh0ID0gXCJXaGF0IHdlIGRvXCI7XG5jb25zdCB3aGF0V2VEb1RpdGxlVGV4dCA9IFwiQ29mZmVlIGN1bHR1cmUgYXQgaXRzIGZpbmVzdDogZWxldmF0aW5nIHlvdXIgY29mZmVlIGdhbWVcIjtcbmNvbnN0IHRleHRQYXJhZ3JhcGggPSBcIkRpc2NvdmVyIHRoZSBlc3NlbmNlIG9mIG91ciBjb2ZmZWUgc2hvcCBpbiBDYWxpZm9ybmlhLCB3aGVyZSBjb2ZmZWUgY29tZXMgYWxpdmUgd2l0aCBhIHN0b3J5IG9mIG1vdGl2YXRpb24gYW5kIGFjaGlldmVtZW50LiBGcm9tIGh1bWJsZSBiZWdpbm5pbmdzIHRvIGJlY29taW5nIGEgaGF2ZW4gZm9yIGRyZWFtZXJzIGFuZCBjb2ZmZWUgbG92ZXJzLCBvdXIgam91cm5leSBpcyBmdWxsIG9mIGV4Y2l0aW5nIG1vbWVudHMuIEpvaW4gdXMgYW5kIGJlIGluc3BpcmVkLlwiXG5jb25zdCBsaW5rVGV4dCA9IFwiQWJvdXQgdXNcIjtcbmNvbnN0IGxpbmtVcmwgPSBcIiNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRld2hhdFdlRG8oKSB7XG4gICAgY29uc3Qgd2hhdFdlRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgd2hhdFdlRG8uY2xhc3NMaXN0LmFkZCgnd2hhdFdlRG8nKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIC8vIExlZnQgY29udGFpbmVyXG4gICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2hhdFdlRG9fX2xlZnQnKTtcblxuICAgIC8vIExlZnQgY29udGFpbmVyIFN1YnRpdGxlXG4gICAgY29uc3Qgd2hhdFdlRG9TdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgd2hhdFdlRG9TdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCd3aGF0V2VEb19fc3VidGl0bGUnKTtcbiAgICB3aGF0V2VEb1N1YnRpdGxlLnRleHRDb250ZW50ID0gd2hhdFdlRG9TdWJ0aXRsZVRleHQ7XG5cbiAgICAvLyBMZWZ0IGNvbnRhaW5lciBUaXRsZVxuICAgIGNvbnN0IHdoYXRXZURvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHdoYXRXZURvVGl0bGUuY2xhc3NMaXN0LmFkZCgnd2hhdFdlRG9fX3RpdGxlJyk7XG4gICAgd2hhdFdlRG9UaXRsZS50ZXh0Q29udGVudCA9IHdoYXRXZURvVGl0bGVUZXh0O1xuXG4gICAgLy8gTGVmdCBjb250YWluZXIgSW1hZ2VcbiAgICBjb25zdCBsZWZ0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGVmdEltZy5jbGFzc0xpc3QuYWRkKCd3aGF0V2VEb19fbGVmdF9faW1nJyk7XG4gICAgbGVmdEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxlZnRJbWdVcmwpO1xuXG4gICAgY29uc3Qgcm90YXRpbmdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICByb3RhdGluZ0ltZy5jbGFzc0xpc3QuYWRkKCd3aGF0V2VEb19fbGVmdF9faW1nLS1yb3RhdGluZycpO1xuICAgIHJvdGF0aW5nSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcm90YXRpbmdJbWdVcmwpO1xuXG4gICAgLy8gUmlnaHQgY29udGFpbmVyXG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aGF0V2VEb19fcmlnaHQnKTtcblxuICAgIC8vIFJpZ2h0IGNvbnRhaW5lciBJbWFnZVxuICAgIGNvbnN0IHJpZ2h0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcmlnaHRJbWcuY2xhc3NMaXN0LmFkZCgnd2hhdFdlRG9fX3JpZ2h0X19pbWcnKTtcbiAgICByaWdodEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHJpZ2h0SW1nVXJsKTtcblxuICAgIC8vIFJpZ2h0IGNvbnRhaW5lciBDb250ZW50XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2hhdFdlRG9fX2NvbnRlbnQnKTtcblxuICAgIC8vIFJpZ2h0IGNvbnRhaW5lciBDb250ZW50IFRleHRcbiAgICBjb25zdCB3aGF0V2VEb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2hhdFdlRG9UZXh0LmNsYXNzTGlzdC5hZGQoJ3doYXRXZURvX190ZXh0Jyk7XG4gICAgd2hhdFdlRG9UZXh0LnRleHRDb250ZW50ID0gdGV4dFBhcmFncmFwaDtcblxuICAgIC8vIFJpZ2h0IGNvbnRhaW5lciBDb250ZW50IExpbmtcbiAgICBjb25zdCB3aGF0V2VEb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgd2hhdFdlRG9MaW5rLmNsYXNzTGlzdC5hZGQoJ3doYXRXZURvX19idG4nKTtcbiAgICB3aGF0V2VEb0xpbmsudGV4dENvbnRlbnQgPSBcIkFib3V0IHVzXCI7XG4gICAgd2hhdFdlRG9MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmtVcmwpO1xuXG4gICAgLy8gQXBwZW5kXG4gICAgd2hhdFdlRG8uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpO1xuXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aGF0V2VEb1N1YnRpdGxlKTtcbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdoYXRXZURvVGl0bGUpO1xuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEltZyk7XG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGluZ0ltZyk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHdoYXRXZURvVGV4dCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aGF0V2VEb0xpbmspO1xuXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRJbWcpO1xuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICAgIFxuXG4gICAgcmV0dXJuIHdoYXRXZURvO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEl0ZW0obmFtZSwgcHJpY2UsIGltYWdlKSB7XG4gICAgY29uc3QgcHJvZHVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2R1Y3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9kdWN0LWl0ZW1cIik7XG5cbiAgICBjb25zdCBwcm9kdWN0SW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2R1Y3RJbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdC1pbWFnZS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2R1Y3RJbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdC1pbWFnZVwiKTtcbiAgICBwcm9kdWN0SW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgcHJvZHVjdEltYWdlLmFsdCA9IG5hbWU7XG5cbiAgICBjb25zdCBwcm9kdWN0SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvZHVjdEluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2R1Y3QtaW5mby1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9kdWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdC1uYW1lXCIpO1xuICAgIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2R1Y3RQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdC1wcmljZVwiKTtcbiAgICBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuXG4gICAgcHJvZHVjdEltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZSk7XG5cbiAgICBwcm9kdWN0SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0TmFtZSk7XG4gICAgcHJvZHVjdEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlKTtcblxuICAgIHByb2R1Y3RJdGVtLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZUNvbnRhaW5lcik7XG4gICAgcHJvZHVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvZHVjdEluZm9Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RJdGVtO1xufSIsImltcG9ydCBcIi4uL2Nzcy9jb250YWN0LmNzc1wiO1xuXG5pbXBvcnQgeyBhZGRNYWluLCBjbGVhck1haW4gfSBmcm9tIFwiLi5cIjtcbmltcG9ydCBiZ0ltYWdlIGZyb20gXCIuLi9pbWcvcHJvZHVjdHMtYmFja2dyb3VuZC5qcGdcIjtcbmltcG9ydCBjcmVhdGVCYW5uZXIgZnJvbSBcIi4uL21vZHVsZXMvR2xvYmFsL2Jhbm5lci9nbG9iYWxCYW5uZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcbiAgICBjbGVhck1haW4oKTtcbiAgICBhZGRNYWluKGNyZWF0ZUJhbm5lcihcIkNvbnRhY3RcIiwgXCJHcm93dGggcmVzaWRlcyBpbiBnZXR0aW5nIHRvIGtub3cgdGhlIGRpZmZlcmVudCBvcGluaW9uc1wiLCBiZ0ltYWdlKSk7XG4gICAgYWRkTWFpbihjcmVhdGVDb250YWN0U2VjdGlvbigpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KTtcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKCkpO1xuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvcm0oKSk7XG5cbiAgICByZXR1cm4gY29udGFjdFNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oKSB7XG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mby1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IGRldGFpbHNcIjtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSBcIjc4NSAxNWggU3RyZWV0LCBPZmZpY2UgNDc4IDxicj4gQmVybGluLCBEZSA4MTU2NlwiO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnZW1haWwnKTtcbiAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnbWFpbHRvOmluZm9AZW1haWwuY29tXCInKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IFwiaW5mb0BlbWFpbC5jb21cIjtcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoJ3Bob25lJyk7XG4gICAgcGhvbmUuc2V0QXR0cmlidXRlKCdocmVmJywgJ3RlbDorNDkxMjM0NTY3ODknKTtcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9IFwiKzQ5IDEyMyA0NTYgNzg5XCI7XG5cbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gICAgcmV0dXJuIGluZm9Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG5cbiAgICBjb25zdCBuYW1lID0gY3JlYXRlSW5wdXQoJ25hbWUnLCAndGV4dCcsICdOYW1lJyk7XG4gICAgY29uc3QgZW1haWwgPSBjcmVhdGVJbnB1dCgnZW1haWwnLCAnZW1haWwnLCAnRW1haWwnKTtcbiAgICBjb25zdCBwaG9uZSA9IGNyZWF0ZUlucHV0KCdwaG9uZScsICdudW1iZXInLCAnUGhvbmUnKTtcbiAgICBjb25zdCBzdWJqZWN0ID0gY3JlYXRlSW5wdXQoJ3N1YmplY3QnLCAndGV4dCcsICdTdWJqZWN0Jyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZVRleHRBcmVhKCdtZXNzYWdlJywgJ01lc3NhZ2UnKTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdzdWJtaXQnKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiR2V0IGluIFRvdWNoXCI7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0V3JhcHBlcignaW5wdXQtd3JhcHBlcicsIG5hbWUpKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0V3JhcHBlcignaW5wdXQtd3JhcHBlcicsIGVtYWlsKSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dFdyYXBwZXIoJ2lucHV0LXdyYXBwZXInLCBwaG9uZSkpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXRXcmFwcGVyKCdpbnB1dC13cmFwcGVyJywgc3ViamVjdCkpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXRXcmFwcGVyKCdpbnB1dC13cmFwcGVyLXRleHRBcmVhJywgbWVzc2FnZSkpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dFdyYXBwZXIoY2xhc3NOYW1lLCBpbnB1dCkge1xuICAgIGNvbnN0IGlucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0V3JhcHBlci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgaW5wdXRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoYCR7aW5wdXQuaWR9LWNvbnRhaW5lcmApO1xuICAgIGlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4gaW5wdXRXcmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYShuYW1lLCBwbGFjZWhvbGRlcikge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYScpO1xuICAgIHRleHRhcmVhLmlkID0gYCR7bmFtZX0tY29udGFpbmVyYDtcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuXG4gICAgcmV0dXJuIHRleHRhcmVhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dChuYW1lLCB0eXBlLCBwbGFjZWhvbGRlcikge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgIGlucHV0LmlkID0gbmFtZTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICByZXR1cm4gaW5wdXQ7XG59IiwiaW1wb3J0IGNyZWF0ZUhvbWVCYW5uZXIgZnJvbSAnLi4vbW9kdWxlcy9Ib21lL2Jhbm5lci9iYW5uZXIuanMnO1xuaW1wb3J0IGNyZWF0ZVdoYXRXZURvIGZyb20gJy4uL21vZHVsZXMvSG9tZS93aGF0V2VEby93aGF0V2VEby5qcyc7XG5pbXBvcnQge2NyZWF0ZUNvZmZlZUN1bHR1cmUsIGFuaW1hdGVMZXR0ZXJzfSBmcm9tICcuLi9tb2R1bGVzL0hvbWUvY29mZmVlQ3VsdHVyZS9jb2ZmZWVDdWx0dXJlLmpzJztcbmltcG9ydCBjcmVhdGVBcm9tYSBmcm9tICcuLi9tb2R1bGVzL0hvbWUvYXJvbWEvYXJvbWEuanMnO1xuaW1wb3J0IHtjbGVhck1haW4sIGFkZE1haW59IGZyb20gJy4uL2luZGV4LmpzJztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjbGVhck1haW4oKTtcbiAgICBhZGRNYWluKGNyZWF0ZUhvbWVCYW5uZXIoKSk7IC8vIEFkZCBiYW5uZXJcbiAgICBhZGRNYWluKGNyZWF0ZVdoYXRXZURvKCkpOyAvLyBBZGQgd2hhdCB3ZSBkbyBzZWN0aW9uXG5cbiAgICBhZGRNYWluKGNyZWF0ZUNvZmZlZUN1bHR1cmUoKSk7IC8vIEFkZCBjb2ZmZWUgY3VsdHVyZSBzZWN0aW9uXG4gICAgYW5pbWF0ZUxldHRlcnMoKTsgLy8gQW5pbWF0ZSBsZXR0ZXJzIGZvciBjb2ZmZWUgY3VsdHVyZSBzZWN0aW9uXG5cbiAgICBhZGRNYWluKGNyZWF0ZUFyb21hKCkpOyAvLyBBZGQgYXJvbWEgc2VjdGlvblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lOyIsImltcG9ydCBzY3JvbGxUb1RvcCBmcm9tIFwiLi4vbW9kdWxlcy9HbG9iYWwvc2Nyb2xsVG9Ub3Avc2Nyb2xsVG9Ub3BcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4uL21vZHVsZXMvR2xvYmFsL2Zvb3Rlci9mb290ZXJcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4uL21vZHVsZXMvR2xvYmFsL2hlYWRlci9oZWFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG5cbiAgICByb290LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTsgLy8gSGVhZGVyIHRoYXQgaXMgc3RhdGljIGZvciBhbGwgcGFnZXNcblxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoc2Nyb2xsVG9Ub3AoKSk7IC8vIFNjcm9sbCB0byB0b3AgYnV0dG9uIHRoYXQgd2lsbCBiZSBoaWRkZW4gdW50aWwgdGhlIHVzZXIgc2Nyb2xscyBkb3duXG4gICAgXG4gICAgLy8gTWFpbiB0aGF0IHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGUgcGFnZSB0aGUgdXNlciBpcyBvblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7IFxuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpOyAvLyBGb290ZXIgdGhhdCBpcyBzdGF0aWMgZm9yIGFsbCBwYWdlc1xufSIsImltcG9ydCBcIi4uL2Nzcy9wcm9kdWN0cy5jc3NcIjtcbmltcG9ydCBiZ0ltYWdlIGZyb20gXCIuLi9pbWcvcHJvZHVjdHMtYmFja2dyb3VuZC5qcGdcIjtcbmltcG9ydCB7IGFkZE1haW4sIGNsZWFyTWFpbiB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuaW1wb3J0IGNyZWF0ZUJhbm5lciBmcm9tIFwiLi4vbW9kdWxlcy9HbG9iYWwvYmFubmVyL2dsb2JhbEJhbm5lci5qc1wiO1xuaW1wb3J0IGNyZWF0ZVByb2R1Y3RJdGVtIGZyb20gXCIuLi9tb2R1bGVzL1Byb2R1Y3RzL1Byb2R1Y3QvcHJvZHVjdEl0ZW1cIjtcblxuLy8gUHJvZHVjdHMgaW1hZ2VzXG5pbXBvcnQgZXNwcmVzc28gZnJvbSBcIi4uL2ltZy9wcm9kdWN0cy9lc3ByZXNzby5qcGdcIjtcbmltcG9ydCBsYXR0ZSBmcm9tIFwiLi4vaW1nL3Byb2R1Y3RzL2xhdHRlLmpwZ1wiO1xuaW1wb3J0IGNhcHB1Y2Npbm8gZnJvbSBcIi4uL2ltZy9wcm9kdWN0cy9jYXBwdWNjaW5vLmpwZ1wiO1xuaW1wb3J0IG1vY2hhIGZyb20gXCIuLi9pbWcvcHJvZHVjdHMvbW9jaGEuanBnXCI7XG5pbXBvcnQgYW1lcmljYW5vIGZyb20gXCIuLi9pbWcvcHJvZHVjdHMvYW1lcmljYW5vLmpwZ1wiO1xuaW1wb3J0IG1hY2NoaWF0byBmcm9tIFwiLi4vaW1nL3Byb2R1Y3RzL21hY2NoaWF0by53ZWJwXCI7XG5pbXBvcnQgY29ydGFkbyBmcm9tIFwiLi4vaW1nL3Byb2R1Y3RzL2NvcnRhZG8ud2VicFwiO1xuaW1wb3J0IGZyYXBwZSBmcm9tIFwiLi4vaW1nL3Byb2R1Y3RzL2ZyYXBwZS5qcGdcIjtcblxuY29uc3QgcHJvZHVjdHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIkVzcHJlc3NvXCIsXG4gICAgICAgIHByaWNlOiBcIiQyLjUwXCIsXG4gICAgICAgIGltYWdlOiBlc3ByZXNzb1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkxhdHRlXCIsXG4gICAgICAgIHByaWNlOiBcIiQzLjUwXCIsXG4gICAgICAgIGltYWdlOiBsYXR0ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDYXBwdWNjaW5vXCIsXG4gICAgICAgIHByaWNlOiBcIiQzLjAwXCIsXG4gICAgICAgIGltYWdlOiBjYXBwdWNjaW5vLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIk1vY2hhXCIsXG4gICAgICAgIHByaWNlOiBcIiQ0LjAwXCIsXG4gICAgICAgIGltYWdlOiBtb2NoYSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJBbWVyaWNhbm9cIixcbiAgICAgICAgcHJpY2U6IFwiJDIuNzVcIixcbiAgICAgICAgaW1hZ2U6IGFtZXJpY2FubyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJNYWNjaGlhdG9cIixcbiAgICAgICAgcHJpY2U6IFwiJDMuMjVcIixcbiAgICAgICAgaW1hZ2U6IG1hY2NoaWF0b1xuICAgICAgICAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ29ydGFkb1wiLFxuICAgICAgICBwcmljZTogXCIkMy4yNVwiLFxuICAgICAgICBpbWFnZTogY29ydGFkbyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJGcmFwcMOpXCIsXG4gICAgICAgIHByaWNlOiBcIiQ0LjUwXCIsXG4gICAgICAgIGltYWdlOiBmcmFwcGUsXG4gICAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdHNQYWdlKCkge1xuICAgIGNsZWFyTWFpbigpO1xuICAgIGFkZE1haW4oY3JlYXRlQmFubmVyKFwiUHJvZHVjdHNcIiwgXCJUaGUgYmVzdCBxdWFsaXR5IGZvciB5b3VcIiwgYmdJbWFnZSkpO1xuICAgIGFkZE1haW4oY3JlYXRlUHJvZHVjdENvbnRhaW5lcigpKTtcbiAgICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICBhZGRQcm9kdWN0KGNyZWF0ZVByb2R1Y3RJdGVtKHByb2R1Y3QubmFtZSwgcHJvZHVjdC5wcmljZSwgcHJvZHVjdC5pbWFnZSkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9kdWN0KHByb2R1Y3QpIHtcbiAgICBjb25zdCBwcm9kdWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdHMgLmNvbnRhaW5lclwiKTtcbiAgICBwcm9kdWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9kdWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9kdWN0c1wiKTtcblxuICAgIGNvbnN0IHByb2R1Y3RzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvZHVjdHNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RzQ29udGVudCk7XG5cbiAgICByZXR1cm4gcHJvZHVjdENvbnRhaW5lcjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=