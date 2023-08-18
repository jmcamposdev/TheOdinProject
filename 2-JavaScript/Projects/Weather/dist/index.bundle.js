(self["webpackChunkweather"] = self["webpackChunkweather"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/global.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/global.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;
}

body {
  background: rgb(236,242,255);
  background: linear-gradient(160deg, rgba(236,242,255,1) 0%, rgba(255,255,255,1) 100%);
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: stretch;
}
`, "",{"version":3,"sources":["webpack://./src/css/global.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uCAAuC;EACvC,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;EAC5B,qFAAqF;AACvF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,oBAAoB;AACtB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;600;700&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Noto Sans JP\", sans-serif;\n  font-weight: 400;\n}\n\nbody {\n  background: rgb(236,242,255);\n  background: linear-gradient(160deg, rgba(236,242,255,1) 0%, rgba(255,255,255,1) 100%);\n}\n\n#root {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  align-items: stretch;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  align-items: center;
  padding: 10px 15px 0px 15px;
}

.header__city__container {
  flex: 1;
}

.header__city__name {
  display: flex;
  flex-direction: column;
}
.header__city__name__date {
  color: #a8b1dd;
  font-weight: 400;
  font-size: 14px;
}

.header__city__name__city {
  color: #494173;
}

.header__city__tmpToggle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__city__tmpToggle__text {
  font-weight: 700;
  font-size: 19px;
}
.switch {
  transform: rotate(270deg);
}

/* ---------------------------------------------
    Switch Style
   --------------------------------------------- */

.switch,
.switch input,
.switch .slider {
  user-select: none;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #494173;
}

input:focus + .slider {
  box-shadow: 0 0 1px #494173;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;;AAEA;;kDAEkD;;AAElD;;;EAGE,iBAAiB;AACnB;AACA,2CAA2C;AAC3C;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA,oBAAoB;AACpB;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":[".header {\n  display: flex;\n  align-items: center;\n  padding: 10px 15px 0px 15px;\n}\n\n.header__city__container {\n  flex: 1;\n}\n\n.header__city__name {\n  display: flex;\n  flex-direction: column;\n}\n.header__city__name__date {\n  color: #a8b1dd;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.header__city__name__city {\n  color: #494173;\n}\n\n.header__city__tmpToggle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__city__tmpToggle__text {\n  font-weight: 700;\n  font-size: 19px;\n}\n.switch {\n  transform: rotate(270deg);\n}\n\n/* ---------------------------------------------\n    Switch Style\n   --------------------------------------------- */\n\n.switch,\n.switch input,\n.switch .slider {\n  user-select: none;\n}\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #494173;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #494173;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/hourlySlider.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/hourlySlider.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.weather__data__hourly {
  flex: 1;
  background-color: #5A1BEE;
  padding: 25px 25px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.current__day {
  color: #E1EAFD;
  font-size: 14px;
}

/* Hourly Slider */
.weather__data__hourly__slider {
  display: flex;
  gap: 25px;
  overflow-x: auto;
  padding: 25px 0;
  width: calc(100vw - 50px);
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.weather__data__hourly__slider__element {
  background-color: #642FF3;
  padding: 20px 15px;
  border-radius: 25px;
}

.weather__data__hourly__slider__element__image {
  width: 100%;
}

.weather__data__hourly__slider__element > p {
  color: white;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/css/hourlySlider.css"],"names":[],"mappings":"AAAA;EACE,OAAO;EACP,yBAAyB;EACzB,kBAAkB;EAClB,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,6BAA6B;EAC7B,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":[".weather__data__hourly {\n  flex: 1;\n  background-color: #5A1BEE;\n  padding: 25px 25px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.current__day {\n  color: #E1EAFD;\n  font-size: 14px;\n}\n\n/* Hourly Slider */\n.weather__data__hourly__slider {\n  display: flex;\n  gap: 25px;\n  overflow-x: auto;\n  padding: 25px 0;\n  width: calc(100vw - 50px);\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n}\n\n.weather__data__hourly__slider__element {\n  background-color: #642FF3;\n  padding: 20px 15px;\n  border-radius: 25px;\n}\n\n.weather__data__hourly__slider__element__image {\n  width: 100%;\n}\n\n.weather__data__hourly__slider__element > p {\n  color: white;\n  text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/loading.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/loading.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: rgb(236,242,255);
  background: linear-gradient(160deg, rgba(236,242,255,1) 0%, rgba(255,255,255,1) 100%);
  visibility: hidden;
  opacity: 0;
}

.loading.loading--active {
  visibility: visible;
  opacity: 1;
  transition: opacity .5s ease-in-out;
}`, "",{"version":3,"sources":["webpack://./src/css/loading.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,4BAA4B;EAC5B,qFAAqF;EACrF,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,mCAAmC;AACrC","sourcesContent":[".loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  background: rgb(236,242,255);\n  background: linear-gradient(160deg, rgba(236,242,255,1) 0%, rgba(255,255,255,1) 100%);\n  visibility: hidden;\n  opacity: 0;\n}\n\n.loading.loading--active {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity .5s ease-in-out;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/search.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/search.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.weather__search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
  background-color: #5A1BEE;
}
.search__form {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F8F7FF;
  padding: 15px 25px;
  border-radius: 30px;
}
.search__form__input, .search__form__button {
  background-color: transparent;
  border: none;
  outline: none;
}

.search-icon {
  width: 20px;
  height: 20px;
}


.search__error {
  color: #FF0000;
  font-size: 14px;
  margin-top: 10px;
  opacity: 1;
  transition: opacity 0.2s; 
}

.search__error--inactive {
  opacity: 0;
}`, "",{"version":3,"sources":["webpack://./src/css/search.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,oBAAoB;EACpB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,UAAU;AACZ","sourcesContent":[".weather__search {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 25px;\n  background-color: #5A1BEE;\n}\n.search__form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #F8F7FF;\n  padding: 15px 25px;\n  border-radius: 30px;\n}\n.search__form__input, .search__form__button {\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n\n.search-icon {\n  width: 20px;\n  height: 20px;\n}\n\n\n.search__error {\n  color: #FF0000;\n  font-size: 14px;\n  margin-top: 10px;\n  opacity: 1;\n  transition: opacity 0.2s; \n}\n\n.search__error--inactive {\n  opacity: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slider.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slider.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.weather__data {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.weather__slider {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
}

.weather__slider__information {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.weather__slider__information__img {
  width: 100%;
}

.weather__selected__arrow {
  fill: #a8b1dd;
}



.weather__data__information {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 25px 15px;
}
.weather__data__information:first-child {
  border-right: 1px solid #A8B1DD !important;
  background-color: red;
}
.weather__info {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.weather__info h3 {
  font-weight: 400;
  font-size: 12px;
  color: #A8B1DD;
}
.weather__info > p {
  font-size: 30px;
  color: #494173;
}

.weather__info__unit {
  font-size: 12px;
  font-weight: 700;
}`, "",{"version":3,"sources":["webpack://./src/css/slider.css"],"names":[],"mappings":"AAAA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;;;AAIA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,0CAA0C;EAC1C,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;AACA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB","sourcesContent":[".weather__data {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.weather__slider {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 15px;\n}\n\n.weather__slider__information {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.weather__slider__information__img {\n  width: 100%;\n}\n\n.weather__selected__arrow {\n  fill: #a8b1dd;\n}\n\n\n\n.weather__data__information {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 25px 15px;\n}\n.weather__data__information:first-child {\n  border-right: 1px solid #A8B1DD !important;\n  background-color: red;\n}\n.weather__info {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.weather__info h3 {\n  font-weight: 400;\n  font-size: 12px;\n  color: #A8B1DD;\n}\n.weather__info > p {\n  font-size: 30px;\n  color: #494173;\n}\n\n.weather__info__unit {\n  font-size: 12px;\n  font-weight: 700;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/css/global.css":
/*!****************************!*\
  !*** ./src/css/global.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/css/hourlySlider.css":
/*!**********************************!*\
  !*** ./src/css/hourlySlider.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hourlySlider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./hourlySlider.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/hourlySlider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hourlySlider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hourlySlider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_hourlySlider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_hourlySlider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/loading.css":
/*!*****************************!*\
  !*** ./src/css/loading.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./loading.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/loading.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/search.css":
/*!****************************!*\
  !*** ./src/css/search.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./search.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/search.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/slider.css":
/*!****************************!*\
  !*** ./src/css/slider.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./slider.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/assets/apiCalls/apiCalls.js":
/*!*****************************************!*\
  !*** ./src/assets/apiCalls/apiCalls.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _utils_setLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setLoading */ "./src/assets/utils/setLoading.js");

/**
 * Return the weather for the given location
 * Use the weatherapi.com API
 * @see https://www.weatherapi.com/docs/
 * @see https://www.weatherapi.com/api-explorer.aspx
 * @param {string} location
 * return {object} weather
 */
async function getWeatherData(location) {
  (0,_utils_setLoading__WEBPACK_IMPORTED_MODULE_0__["default"])(true);
  /* eslint max-len: ["error", { "ignoreUrls": true }] */
  const response = await
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${"098a63f78d284c26b39202357230908"}&q=${location}&days=3&aqi=yes&alerts=no`, {mode: 'cors'})
      .catch((error) => {
        return error;
      });

  const data = await response.json();
  (0,_utils_setLoading__WEBPACK_IMPORTED_MODULE_0__["default"])(false);
  return data;
}


/***/ }),

/***/ "./src/assets/utils/setLoading.js":
/*!****************************************!*\
  !*** ./src/assets/utils/setLoading.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setLoading)
/* harmony export */ });
/**
 * Shows or hides the loading spinner
 * @param {Boolean} isLoading
 */
function setLoading(isLoading) {
  const loading = document.querySelector('.loading');
  loading.classList.toggle('loading--active', isLoading);
}



/***/ }),

/***/ "./src/assets/utils/utilities.js":
/*!***************************************!*\
  !*** ./src/assets/utils/utilities.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDay: () => (/* binding */ getDay)
/* harmony export */ });
/**
 * Return the day of the week for the given date.
 * E.g. Monday, Tuesday, etc.
 * @param {Date} date
 * @return {string}
 */
function getDay(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}




/***/ }),

/***/ "./src/assets/weatherApp/fahrenheitCheck/fahrenheitCheck.js":
/*!******************************************************************!*\
  !*** ./src/assets/weatherApp/fahrenheitCheck/fahrenheitCheck.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weatherApp */ "./src/assets/weatherApp/weatherApp.js");


/**
 * Adds event listeners to the fahrenheit checkbox
 */
function createFahrenheitEventListeners() {
  const fahrenheitButton = document.querySelector('.fahrenheit__checkbox');
  fahrenheitButton.addEventListener('click', () => {
    (0,_weatherApp__WEBPACK_IMPORTED_MODULE_0__.setFahrenheit)(!_weatherApp__WEBPACK_IMPORTED_MODULE_0__.usingFahrenheit);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFahrenheitEventListeners);


/***/ }),

/***/ "./src/assets/weatherApp/headerData.js":
/*!*********************************************!*\
  !*** ./src/assets/weatherApp/headerData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utilities */ "./src/assets/utils/utilities.js");


/**
 * Print in the Header the Date and the City
 * @param {string} city - City Name
 * @param {Date} date - Date
 */
function printHeaderData(city, date) {
  // Getting DOM Elements
  const nameCityElement = document.querySelector('.header__city__name__city');
  const textDayElement =
  document.querySelector('.header__city__name__date__textDay');
  const numberDayElement =
  document.querySelector('.header__city__name__date__numberDay');
  const monthElement =
  document.querySelector('.header__city__name__date__textMonth');
  // Setting the content
  nameCityElement.textContent = city; // City Name
  textDayElement.textContent = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.getDay)(date); // Day of the Week
  numberDayElement.textContent = date.getDate(); // Day of the Month
  monthElement.textContent = date.toLocaleString('en-us', {month: 'long'}); // Month
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printHeaderData);


/***/ }),

/***/ "./src/assets/weatherApp/hourlySlider/hourlySlider.js":
/*!************************************************************!*\
  !*** ./src/assets/weatherApp/hourlySlider/hourlySlider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utilities */ "./src/assets/utils/utilities.js");
/* harmony import */ var _weatherApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weatherApp */ "./src/assets/weatherApp/weatherApp.js");



/**
 * Print the hourly slider from the hourly list
 * passed as parameter
 * @param {Array} day
 */
function printHourlySlider(day) {
  // Main container of the slider
  const hourlySliderElement = document.querySelector('.weather__data__hourly__slider');
  hourlySliderElement.innerHTML = ''; // Clear the slider
  const dayTextElement = document.querySelector('.current__day');
  const currentDate = new Date().setHours(0, 0, 0, 0);
  const dayDate = new Date(day.date).setHours(0, 0, 0, 0);
  let currentHourIndex; // Index of the current hour in the hourly list

  if (currentDate === dayDate) { // If the day is today
    // The current hour is the correct hour index to start
    currentHourIndex = new Date().getHours();
  } else { // If the day is not today start from the first hour
    currentHourIndex = 0;
  }

  dayTextElement.textContent = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.getDay)(new Date(day.date));
  const filteredHourlyList = day.hour.slice(currentHourIndex);
  filteredHourlyList.forEach((hourly) => {
    hourlySliderElement.appendChild(createHourlyElement(hourly));
  });
}

/**
 * Create HTML element for the hourly slider
 * @param {Object} hourlyData
 * @return {HTMLElement}
 */
function createHourlyElement(hourlyData) {
  const hourlyElement = document.createElement('div');
  hourlyElement.classList.add('weather__data__hourly__slider__element');

  const hourlyImage = document.createElement('img');
  hourlyImage.classList.add('weather__data__hourly__slider__element__image');
  hourlyImage.src = __webpack_require__(/*! ../weatherSlider/img/sunny.png */ "./src/assets/weatherApp/weatherSlider/img/sunny.png");

  const hourlyHour = document.createElement('p');
  hourlyHour.classList.add('weather__data__hourly__slider__element__hour');
  hourlyHour.textContent = new Date(hourlyData.time).getHours() + ':00';

  const hourlyTemperature = document.createElement('p');
  hourlyTemperature.classList.add('weather__data__hourly__slider__element__temperature');
  const hourlyTemperatureValue = document.createElement('span');
  hourlyTemperatureValue.classList.add('weather__data__hourly__slider__element__temperature__value');
  hourlyTemperatureValue.textContent = Math.round(_weatherApp__WEBPACK_IMPORTED_MODULE_1__.usingFahrenheit ? hourlyData.temp_f : hourlyData.temp_c);
  const hourlyTemperatureUnit = document.createElement('span');
  hourlyTemperatureUnit.classList
      .add('weather__data__hourly__slider__element__temperature__unit', 'weather__info__unit', 'weather__temp__unit');
  hourlyTemperatureUnit.textContent = '°C';

  hourlyTemperature.appendChild(hourlyTemperatureValue);
  hourlyTemperature.appendChild(hourlyTemperatureUnit);

  hourlyElement.appendChild(hourlyImage);
  hourlyElement.appendChild(hourlyHour);
  hourlyElement.appendChild(hourlyTemperature);

  return hourlyElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printHourlySlider);


/***/ }),

/***/ "./src/assets/weatherApp/searchBox/searchBox.js":
/*!******************************************************!*\
  !*** ./src/assets/weatherApp/searchBox/searchBox.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apiCalls/apiCalls */ "./src/assets/apiCalls/apiCalls.js");
/* harmony import */ var _weatherApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weatherApp */ "./src/assets/weatherApp/weatherApp.js");




/**
 * Create the Search Box Submit Event
 * @return {void}
 */
function createSearchEvent() {
  const searchForm = document.querySelector('.search__form');
  const searchInput = document.querySelector('.search__form__input');

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    const searchQuery = searchInput.value; // Get the search query
    const weatherData = await (0,_apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_0__["default"])(searchQuery); // Get the weather data
    searchInput.value = ''; // Clear the search input

    // If there is an error, display it and return
    if (weatherData.error) {
      const error = document.querySelector('.search__error');
      error.textContent = 'City not found';
      error.classList.remove('search__error--inactive');

      setTimeout(() => {
        error.classList.add('search__error--inactive');
      }, 1000);
      return;
    }

    // If there is no error, print the weather app
    (0,_weatherApp__WEBPACK_IMPORTED_MODULE_1__.setLastWeatherData)(weatherData);
    (0,_weatherApp__WEBPACK_IMPORTED_MODULE_1__.updateWeatherApp)();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSearchEvent);


/***/ }),

/***/ "./src/assets/weatherApp/weatherApp.js":
/*!*********************************************!*\
  !*** ./src/assets/weatherApp/weatherApp.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentDayIndex: () => (/* binding */ currentDayIndex),
/* harmony export */   lastWeatherData: () => (/* binding */ lastWeatherData),
/* harmony export */   printWeatherApp: () => (/* binding */ printWeatherApp),
/* harmony export */   setCurrentDayIndex: () => (/* binding */ setCurrentDayIndex),
/* harmony export */   setFahrenheit: () => (/* binding */ setFahrenheit),
/* harmony export */   setLastWeatherData: () => (/* binding */ setLastWeatherData),
/* harmony export */   updateWeatherApp: () => (/* binding */ updateWeatherApp),
/* harmony export */   usingFahrenheit: () => (/* binding */ usingFahrenheit)
/* harmony export */ });
/* harmony import */ var _apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apiCalls/apiCalls */ "./src/assets/apiCalls/apiCalls.js");
/* harmony import */ var _headerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerData */ "./src/assets/weatherApp/headerData.js");
/* harmony import */ var _hourlySlider_hourlySlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hourlySlider/hourlySlider */ "./src/assets/weatherApp/hourlySlider/hourlySlider.js");
/* harmony import */ var _weatherSlider_weatherSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherSlider/weatherSlider */ "./src/assets/weatherApp/weatherSlider/weatherSlider.js");





const location = 'Málaga';
let lastWeatherData;
let usingFahrenheit = false;
let currentDayIndex = 0;
/**
 * Print all the weather app
 * Slides the weather app in and out
 */
async function printWeatherApp() {
  const weatherData = await (0,_apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_0__["default"])(location); // Get weather data
  if (weatherData.error) { // If there is an error, print it and return
    /* eslint-disable */console.log(...oo_oo(`7e39d15a_0`,weatherData.error));
    return;
  }
  lastWeatherData = weatherData; // Save the last weather data
  updateWeatherApp(); // Update the weather app
}

/**
 * Update the all the weather app
 * Header data, weather slider and hourly slider
 * @param {Object} weatherData
 */
function updateWeatherApp() {
  const currentDayData = lastWeatherData.forecast.forecastday[currentDayIndex]; // Get current day
  const currentCityName = lastWeatherData.location.name; // Get current city name
  const currentDate = new Date(currentDayData.date); // Get current date
  (0,_headerData__WEBPACK_IMPORTED_MODULE_1__["default"])(currentCityName, currentDate); // Print header data
  (0,_weatherSlider_weatherSlider__WEBPACK_IMPORTED_MODULE_3__["default"])(currentDayData.day); // Print weather slider
  (0,_hourlySlider_hourlySlider__WEBPACK_IMPORTED_MODULE_2__["default"])(currentDayData); // Print hourly slider
  updateUnits(usingFahrenheit ? 'F' : '°C'); // Update units
};

/**
 * Update the last weather data with the new one
 * @param {Object} weatherData
 */
function setLastWeatherData(weatherData) {
  lastWeatherData = weatherData;
}

/**
 * Change the temperature units of the all the weather app
 * @param {boolean} boolean
 */
function setFahrenheit(boolean) {
  usingFahrenheit = boolean;
  updateWeatherApp(lastWeatherData);
}

/**
 * Set the current day index
 * @param {Number} index
 */
function setCurrentDayIndex(index) {
  currentDayIndex = index;
}

/**
 * Update all the units of the weather app
 * @param {String} units
 */
function updateUnits(units = '°C') {
  const unitsElements = document.querySelectorAll('.weather__temp__unit');
  unitsElements.forEach((element) => {
    element.innerHTML = units;
  });
}


/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x578d(_0x4e6c1a,_0x582af6){var _0x314cba=_0x314c();return _0x578d=function(_0x578d11,_0x105e51){_0x578d11=_0x578d11-0x1a2;var _0x3b38bc=_0x314cba[_0x578d11];return _0x3b38bc;},_0x578d(_0x4e6c1a,_0x582af6);}function _0x314c(){var _0x2e9d21=['host','_connected','_connectToHostNow','split',\"/Users/josemaria/.vscode-insiders/extensions/wallabyjs.console-ninja-0.0.199/node_modules\",'_keyStrRegExp','array','trace','_attemptToReconnectShortly','negativeZero','_p_name','1965922rYzVKH','_propertyName','_setNodeExpressionPath','resolveGetters','root_exp_id','autoExpandMaxDepth','[object\\x20Date]','replace','totalStrLength','reduceLimits','_WebSocketClass','now','...','match','depth','_propertyAccessor','onmessage','onopen','17808NPPqTh','_additionalMetadata','_consoleNinjaAllowedToStart','POSITIVE_INFINITY','type','index','stackTraceLimit','_getOwnPropertyNames','[object\\x20Array]','getWebSocketClass','method','_objectToString','forEach','date','catch','127.0.0.1','_quotedRegExp','_setNodePermissions','level','data','unref','_reconnectTimeout','capped','remix','enumerable','hits','create','elapsed','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nodeModules','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','toString','4414Xbesdi','10izQufv','perf_hooks','error','set','defineProperty','number','RegExp','expressionsToEvaluate','length','_connecting','872150RZZLha','__es'+'Module','_webSocketErrorDocsLink','logger\\x20websocket\\x20error','_disposeWebsocket','getOwnPropertyNames','negativeInfinity','null','parse','expId','reload','_addObjectProperty','_undefined','serialize','boolean','object','hostname','_console_ninja','Boolean','concat','_treeNodePropertiesAfterFullValue','symbol','_dateToString','string','name','getOwnPropertyDescriptor','','noFunctions','then','count','autoExpandPropertyCount','_processTreeNodeResult','24cIOBYG','ws/index.js','isArray','2153129WuUNjX','props','send','sortProps','elements','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','slice','_socket','_connectAttemptCount','_property','onclose','_allowedToConnectOnSend','disabledLog','_isPrimitiveType','allStrLength','_getOwnPropertyDescriptor','message','log','\\x20server','getter','global','Number','cappedElements','_addProperty','autoExpandPreviousObjects','_addLoadNode','performance','hasOwnProperty','readyState','_cleanNode','unknown','NEGATIVE_INFINITY','value','indexOf','pathToFileURL','_blacklistedProperty','_Symbol','_setNodeLabel','hrtime','join','Buffer','_HTMLAllCollection','positiveInfinity','_capIfString','_treeNodePropertiesBeforeFullValue','_setNodeId','stringify','path','nuxt','map','_WebSocket','undefined','_isSet','Map','autoExpandLimit','_setNodeQueryPath','_getOwnPropertySymbols','_isArray','bigint','_isPrimitiveWrapperType','console',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"MacBook-Pro-de-Jose.local\",\"192.168.1.131\"],'constructor','toLowerCase','getOwnPropertySymbols','strLength','versions','isExpressionToEvaluate','_ws','64269','_console_ninja_session','_allowedToSend','pop','push','1692363691417','332ypOonG','4851762UyJTiI','_inBrowser','stack','[object\\x20BigInt]','[object\\x20Set]','autoExpand','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','timeEnd','_sortProps','call','nan','_isMap','node','Error','onerror','8809317ypYazq','get','Set','WebSocket','warn','_numberRegExp','valueOf','265TFuYhk','prototype','Symbol','root_exp','\\x20browser','_regExpToString','time','_maxConnectAttemptCount','substr','parent','current','String','default','_sendErrorMessage','funcName','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','process','_p_','_type','port','close','_p_length','location','function','ws://','_isUndefined','test','timeStamp'];_0x314c=function(){return _0x2e9d21;};return _0x314c();}var _0x3ba83d=_0x578d;(function(_0x1086fb,_0x1317d1){var _0x41a152=_0x578d,_0x1de80b=_0x1086fb();while(!![]){try{var _0x15aa31=parseInt(_0x41a152(0x1c7))/0x1*(-parseInt(_0x41a152(0x220))/0x2)+parseInt(_0x41a152(0x200))/0x3*(parseInt(_0x41a152(0x1b0))/0x4)+-parseInt(_0x41a152(0x22b))/0x5+-parseInt(_0x41a152(0x1b1))/0x6+-parseInt(_0x41a152(0x1ee))/0x7*(-parseInt(_0x41a152(0x24b))/0x8)+parseInt(_0x41a152(0x1c0))/0x9+-parseInt(_0x41a152(0x221))/0xa*(parseInt(_0x41a152(0x24e))/0xb);if(_0x15aa31===_0x1317d1)break;else _0x1de80b['push'](_0x1de80b['shift']());}catch(_0x3ecc84){_0x1de80b['push'](_0x1de80b['shift']());}}}(_0x314c,0x865f4));var ue=Object[_0x3ba83d(0x21a)],te=Object[_0x3ba83d(0x225)],he=Object[_0x3ba83d(0x244)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object[_0x3ba83d(0x1c8)][_0x3ba83d(0x269)],pe=(_0x5e0a2c,_0x75a218,_0x138e52,_0x3df4cb)=>{var _0x6f3f5c=_0x3ba83d;if(_0x75a218&&typeof _0x75a218==_0x6f3f5c(0x23a)||typeof _0x75a218==_0x6f3f5c(0x1de)){for(let _0x1acd38 of le(_0x75a218))!_e[_0x6f3f5c(0x1ba)](_0x5e0a2c,_0x1acd38)&&_0x1acd38!==_0x138e52&&te(_0x5e0a2c,_0x1acd38,{'get':()=>_0x75a218[_0x1acd38],'enumerable':!(_0x3df4cb=he(_0x75a218,_0x1acd38))||_0x3df4cb[_0x6f3f5c(0x218)]});}return _0x5e0a2c;},ne=(_0x5b7c89,_0x16cc59,_0x327e06)=>(_0x327e06=_0x5b7c89!=null?ue(fe(_0x5b7c89)):{},pe(_0x16cc59||!_0x5b7c89||!_0x5b7c89[_0x3ba83d(0x22c)]?te(_0x327e06,_0x3ba83d(0x1d3),{'value':_0x5b7c89,'enumerable':!0x0}):_0x327e06,_0x5b7c89)),Q=class{constructor(_0x105d2b,_0x20676b,_0x405712,_0x2c564c){var _0x48e70d=_0x3ba83d;this[_0x48e70d(0x262)]=_0x105d2b,this[_0x48e70d(0x1e3)]=_0x20676b,this[_0x48e70d(0x1da)]=_0x405712,this['nodeModules']=_0x2c564c,this[_0x48e70d(0x1ac)]=!0x0,this[_0x48e70d(0x259)]=!0x0,this[_0x48e70d(0x1e4)]=!0x1,this['_connecting']=!0x1,this[_0x48e70d(0x1b2)]=!!this[_0x48e70d(0x262)][_0x48e70d(0x1c3)],this['_WebSocketClass']=null,this[_0x48e70d(0x256)]=0x0,this[_0x48e70d(0x1ce)]=0x14,this[_0x48e70d(0x22d)]='https://tinyurl.com/37x8b79t',this[_0x48e70d(0x1d4)]=(this[_0x48e70d(0x1b2)]?_0x48e70d(0x1d6):_0x48e70d(0x1b7))+this['_webSocketErrorDocsLink'];}async[_0x3ba83d(0x209)](){var _0x586738=_0x3ba83d;if(this[_0x586738(0x1f8)])return this[_0x586738(0x1f8)];let _0x9085ab;if(this[_0x586738(0x1b2)])_0x9085ab=this[_0x586738(0x262)]['WebSocket'];else{if(this[_0x586738(0x262)][_0x586738(0x1d7)]?.['_WebSocket'])_0x9085ab=this[_0x586738(0x262)][_0x586738(0x1d7)]?.[_0x586738(0x280)];else try{let _0x5b33ba=await import(_0x586738(0x27d));_0x9085ab=(await import((await import('url'))[_0x586738(0x270)](_0x5b33ba['join'](this[_0x586738(0x21d)],_0x586738(0x24c)))[_0x586738(0x21f)]()))[_0x586738(0x1d3)];}catch{try{_0x9085ab=require(require(_0x586738(0x27d))[_0x586738(0x275)](this[_0x586738(0x21d)],'ws'));}catch{throw new Error(_0x586738(0x21c));}}}return this[_0x586738(0x1f8)]=_0x9085ab,_0x9085ab;}['_connectToHostNow'](){var _0x2bfa4b=_0x3ba83d;this[_0x2bfa4b(0x22a)]||this[_0x2bfa4b(0x1e4)]||this[_0x2bfa4b(0x256)]>=this[_0x2bfa4b(0x1ce)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this[_0x2bfa4b(0x256)]++,this['_ws']=new Promise((_0x44af24,_0x2619a0)=>{var _0x37bb19=_0x2bfa4b;this[_0x37bb19(0x209)]()[_0x37bb19(0x247)](_0x6e3122=>{var _0x263a07=_0x37bb19;let _0x17a95c=new _0x6e3122(_0x263a07(0x1df)+this[_0x263a07(0x1e3)]+':'+this[_0x263a07(0x1da)]);_0x17a95c[_0x263a07(0x1bf)]=()=>{var _0x1bc41e=_0x263a07;this[_0x1bc41e(0x1ac)]=!0x1,this['_disposeWebsocket'](_0x17a95c),this[_0x1bc41e(0x1eb)](),_0x2619a0(new Error(_0x1bc41e(0x22e)));},_0x17a95c[_0x263a07(0x1ff)]=()=>{var _0x56034b=_0x263a07;this['_inBrowser']||_0x17a95c[_0x56034b(0x255)]&&_0x17a95c[_0x56034b(0x255)]['unref']&&_0x17a95c[_0x56034b(0x255)]['unref'](),_0x44af24(_0x17a95c);},_0x17a95c[_0x263a07(0x258)]=()=>{var _0xba4898=_0x263a07;this[_0xba4898(0x259)]=!0x0,this[_0xba4898(0x22f)](_0x17a95c),this[_0xba4898(0x1eb)]();},_0x17a95c[_0x263a07(0x1fe)]=_0x4432d7=>{var _0xcf0a94=_0x263a07;try{_0x4432d7&&_0x4432d7[_0xcf0a94(0x213)]&&this['_inBrowser']&&JSON[_0xcf0a94(0x233)](_0x4432d7[_0xcf0a94(0x213)])[_0xcf0a94(0x20a)]===_0xcf0a94(0x235)&&this[_0xcf0a94(0x262)][_0xcf0a94(0x1dd)]['reload']();}catch{}};})[_0x37bb19(0x247)](_0x334fab=>(this[_0x37bb19(0x1e4)]=!0x0,this[_0x37bb19(0x22a)]=!0x1,this[_0x37bb19(0x259)]=!0x1,this[_0x37bb19(0x1ac)]=!0x0,this[_0x37bb19(0x256)]=0x0,_0x334fab))[_0x37bb19(0x20e)](_0x329315=>(this[_0x37bb19(0x1e4)]=!0x1,this['_connecting']=!0x1,console[_0x37bb19(0x1c4)](_0x37bb19(0x21e)+this[_0x37bb19(0x22d)]),_0x2619a0(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x329315&&_0x329315['message'])))));}));}['_disposeWebsocket'](_0x196180){var _0xef30c7=_0x3ba83d;this[_0xef30c7(0x1e4)]=!0x1,this['_connecting']=!0x1;try{_0x196180['onclose']=null,_0x196180['onerror']=null,_0x196180[_0xef30c7(0x1ff)]=null;}catch{}try{_0x196180[_0xef30c7(0x26a)]<0x2&&_0x196180[_0xef30c7(0x1db)]();}catch{}}[_0x3ba83d(0x1eb)](){var _0x6a7157=_0x3ba83d;clearTimeout(this[_0x6a7157(0x215)]),!(this['_connectAttemptCount']>=this[_0x6a7157(0x1ce)])&&(this[_0x6a7157(0x215)]=setTimeout(()=>{var _0x4ae5fd=_0x6a7157;this['_connected']||this[_0x4ae5fd(0x22a)]||(this[_0x4ae5fd(0x1e5)](),this[_0x4ae5fd(0x1a9)]?.['catch'](()=>this[_0x4ae5fd(0x1eb)]()));},0x1f4),this['_reconnectTimeout'][_0x6a7157(0x214)]&&this['_reconnectTimeout'][_0x6a7157(0x214)]());}async['send'](_0x423266){var _0x315a78=_0x3ba83d;try{if(!this[_0x315a78(0x1ac)])return;this['_allowedToConnectOnSend']&&this['_connectToHostNow'](),(await this[_0x315a78(0x1a9)])['send'](JSON[_0x315a78(0x27c)](_0x423266));}catch(_0x3bb1d2){console[_0x315a78(0x1c4)](this[_0x315a78(0x1d4)]+':\\x20'+(_0x3bb1d2&&_0x3bb1d2['message'])),this[_0x315a78(0x1ac)]=!0x1,this[_0x315a78(0x1eb)]();}}};function V(_0x14c01b,_0x192755,_0x4a4b6d,_0x30f2f1,_0x38ab2d){var _0x3b8dc7=_0x3ba83d;let _0x4e5f37=_0x4a4b6d['split'](',')[_0x3b8dc7(0x27f)](_0x4a8d52=>{var _0x3840c2=_0x3b8dc7;try{_0x14c01b[_0x3840c2(0x1ab)]||((_0x38ab2d==='next.js'||_0x38ab2d===_0x3840c2(0x217)||_0x38ab2d==='astro')&&(_0x38ab2d+=_0x14c01b['process']?.[_0x3840c2(0x1a7)]?.['node']?_0x3840c2(0x260):_0x3840c2(0x1cb)),_0x14c01b[_0x3840c2(0x1ab)]={'id':+new Date(),'tool':_0x38ab2d});let _0x2ecd1c=new Q(_0x14c01b,_0x192755,_0x4a8d52,_0x30f2f1);return _0x2ecd1c[_0x3840c2(0x250)]['bind'](_0x2ecd1c);}catch(_0x580284){return console[_0x3840c2(0x1c4)](_0x3840c2(0x253),_0x580284&&_0x580284[_0x3840c2(0x25e)]),()=>{};}});return _0x1c11ef=>_0x4e5f37[_0x3b8dc7(0x20c)](_0x163a22=>_0x163a22(_0x1c11ef));}function H(_0x557474){var _0x403b8f=_0x3ba83d;let _0x4e42c5=function(_0x1e02f9,_0xc09b4a){return _0xc09b4a-_0x1e02f9;},_0x4e68e0;if(_0x557474[_0x403b8f(0x268)])_0x4e68e0=function(){var _0x2eaec0=_0x403b8f;return _0x557474['performance'][_0x2eaec0(0x1f9)]();};else{if(_0x557474['process']&&_0x557474[_0x403b8f(0x1d7)][_0x403b8f(0x274)])_0x4e68e0=function(){var _0x2f7152=_0x403b8f;return _0x557474[_0x2f7152(0x1d7)][_0x2f7152(0x274)]();},_0x4e42c5=function(_0xf29124,_0x32fc4b){return 0x3e8*(_0x32fc4b[0x0]-_0xf29124[0x0])+(_0x32fc4b[0x1]-_0xf29124[0x1])/0xf4240;};else try{let {performance:_0x2bb63c}=require(_0x403b8f(0x222));_0x4e68e0=function(){return _0x2bb63c['now']();};}catch{_0x4e68e0=function(){return+new Date();};}}return{'elapsed':_0x4e42c5,'timeStamp':_0x4e68e0,'now':()=>Date[_0x403b8f(0x1f9)]()};}function X(_0x4ee268,_0x1f6bcd,_0x26b09b){var _0x2d4d28=_0x3ba83d;if(_0x4ee268['_consoleNinjaAllowedToStart']!==void 0x0)return _0x4ee268['_consoleNinjaAllowedToStart'];let _0x2aad90=_0x4ee268['process']?.[_0x2d4d28(0x1a7)]?.[_0x2d4d28(0x1bd)];return _0x2aad90&&_0x26b09b===_0x2d4d28(0x27e)?_0x4ee268[_0x2d4d28(0x202)]=!0x1:_0x4ee268['_consoleNinjaAllowedToStart']=_0x2aad90||!_0x1f6bcd||_0x4ee268[_0x2d4d28(0x1dd)]?.[_0x2d4d28(0x23b)]&&_0x1f6bcd['includes'](_0x4ee268[_0x2d4d28(0x1dd)][_0x2d4d28(0x23b)]),_0x4ee268[_0x2d4d28(0x202)];}((_0x289f54,_0x29789e,_0x2f548f,_0x2fbd9e,_0x21dd5e,_0x592253,_0x3f52fd,_0x41dd6d,_0x1189ff)=>{var _0x312442=_0x3ba83d;if(_0x289f54[_0x312442(0x23c)])return _0x289f54[_0x312442(0x23c)];if(!X(_0x289f54,_0x41dd6d,_0x21dd5e))return _0x289f54['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x289f54[_0x312442(0x23c)];let _0xdf602={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x544250={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0xcd6f41=H(_0x289f54),_0x5961dd=_0xcd6f41[_0x312442(0x21b)],_0x32c2bf=_0xcd6f41[_0x312442(0x1e2)],_0x3fc0e4=_0xcd6f41[_0x312442(0x1f9)],_0x21d36a={'hits':{},'ts':{}},_0x47415f=_0xe98645=>{_0x21d36a['ts'][_0xe98645]=_0x32c2bf();},_0x294520=(_0x168879,_0x369685)=>{let _0x447058=_0x21d36a['ts'][_0x369685];if(delete _0x21d36a['ts'][_0x369685],_0x447058){let _0x28c8d6=_0x5961dd(_0x447058,_0x32c2bf());_0x1152c0(_0x30f5ce('time',_0x168879,_0x3fc0e4(),_0x12ecc2,[_0x28c8d6],_0x369685));}},_0x7b6e0e=_0x218364=>_0x513ac5=>{var _0x116fa5=_0x312442;try{_0x47415f(_0x513ac5),_0x218364(_0x513ac5);}finally{_0x289f54[_0x116fa5(0x28a)][_0x116fa5(0x1cd)]=_0x218364;}},_0x3c8ef5=_0x3cd42a=>_0x476c4b=>{var _0x524406=_0x312442;try{let [_0x1f3f5c,_0xaeebdd]=_0x476c4b[_0x524406(0x1e6)](':logPointId:');_0x294520(_0xaeebdd,_0x1f3f5c),_0x3cd42a(_0x1f3f5c);}finally{_0x289f54['console'][_0x524406(0x1b8)]=_0x3cd42a;}};_0x289f54[_0x312442(0x23c)]={'consoleLog':(_0x5e664b,_0x38aebf)=>{var _0xe063e7=_0x312442;_0x289f54[_0xe063e7(0x28a)][_0xe063e7(0x25f)][_0xe063e7(0x243)]!==_0xe063e7(0x25a)&&_0x1152c0(_0x30f5ce(_0xe063e7(0x25f),_0x5e664b,_0x3fc0e4(),_0x12ecc2,_0x38aebf));},'consoleTrace':(_0x5c312f,_0x43296b)=>{var _0x7bd5b=_0x312442;_0x289f54[_0x7bd5b(0x28a)][_0x7bd5b(0x25f)][_0x7bd5b(0x243)]!=='disabledTrace'&&_0x1152c0(_0x30f5ce(_0x7bd5b(0x1ea),_0x5c312f,_0x3fc0e4(),_0x12ecc2,_0x43296b));},'consoleTime':()=>{var _0x40a9bf=_0x312442;_0x289f54[_0x40a9bf(0x28a)][_0x40a9bf(0x1cd)]=_0x7b6e0e(_0x289f54['console'][_0x40a9bf(0x1cd)]);},'consoleTimeEnd':()=>{var _0x2723c5=_0x312442;_0x289f54[_0x2723c5(0x28a)][_0x2723c5(0x1b8)]=_0x3c8ef5(_0x289f54[_0x2723c5(0x28a)][_0x2723c5(0x1b8)]);},'autoLog':(_0x8ea6f,_0x1c22e6)=>{var _0x3d5a9b=_0x312442;_0x1152c0(_0x30f5ce(_0x3d5a9b(0x25f),_0x1c22e6,_0x3fc0e4(),_0x12ecc2,[_0x8ea6f]));},'autoLogMany':(_0x2eb901,_0x353773)=>{var _0x4f73ec=_0x312442;_0x1152c0(_0x30f5ce(_0x4f73ec(0x25f),_0x2eb901,_0x3fc0e4(),_0x12ecc2,_0x353773));},'autoTrace':(_0x426610,_0x2d8dbb)=>{var _0x5ddbad=_0x312442;_0x1152c0(_0x30f5ce(_0x5ddbad(0x1ea),_0x2d8dbb,_0x3fc0e4(),_0x12ecc2,[_0x426610]));},'autoTraceMany':(_0x425e00,_0x239ffe)=>{_0x1152c0(_0x30f5ce('trace',_0x425e00,_0x3fc0e4(),_0x12ecc2,_0x239ffe));},'autoTime':(_0x54f445,_0x3865a3,_0x336fe5)=>{_0x47415f(_0x336fe5);},'autoTimeEnd':(_0x25ab2c,_0x2f1951,_0x1705ec)=>{_0x294520(_0x2f1951,_0x1705ec);}};let _0x1152c0=V(_0x289f54,_0x29789e,_0x2f548f,_0x2fbd9e,_0x21dd5e),_0x12ecc2=_0x289f54['_console_ninja_session'];class _0x1d1f90{constructor(){var _0x11adf9=_0x312442;this[_0x11adf9(0x1e8)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x11adf9(0x1c5)]=/^(0|[1-9][0-9]*)$/,this[_0x11adf9(0x210)]=/'([^\\\\']|\\\\')*'/,this[_0x11adf9(0x237)]=_0x289f54[_0x11adf9(0x281)],this[_0x11adf9(0x277)]=_0x289f54['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x11adf9(0x244)],this[_0x11adf9(0x207)]=Object[_0x11adf9(0x230)],this['_Symbol']=_0x289f54[_0x11adf9(0x1c9)],this[_0x11adf9(0x1cc)]=RegExp[_0x11adf9(0x1c8)][_0x11adf9(0x21f)],this[_0x11adf9(0x241)]=Date['prototype'][_0x11adf9(0x21f)];}[_0x312442(0x238)](_0x4d0e15,_0x5389a6,_0x257208,_0x52c0b3){var _0x2f3f66=_0x312442,_0x1ac22e=this,_0x59abc6=_0x257208[_0x2f3f66(0x1b6)];function _0x3de612(_0x1a97aa,_0x1697d6,_0x2a7731){var _0xd123b=_0x2f3f66;_0x1697d6['type']=_0xd123b(0x26c),_0x1697d6[_0xd123b(0x223)]=_0x1a97aa[_0xd123b(0x25e)],_0x170616=_0x2a7731['node'][_0xd123b(0x1d1)],_0x2a7731[_0xd123b(0x1bd)][_0xd123b(0x1d1)]=_0x1697d6,_0x1ac22e['_treeNodePropertiesBeforeFullValue'](_0x1697d6,_0x2a7731);}try{_0x257208[_0x2f3f66(0x212)]++,_0x257208[_0x2f3f66(0x1b6)]&&_0x257208[_0x2f3f66(0x266)]['push'](_0x5389a6);var _0x42be5e,_0x284614,_0x33a2a3,_0x11f419,_0x262728=[],_0x5b8cd7=[],_0x4815d4,_0x928c76=this[_0x2f3f66(0x1d9)](_0x5389a6),_0x2d4b7d=_0x928c76===_0x2f3f66(0x1e9),_0x3b09ba=!0x1,_0x4dd58d=_0x928c76===_0x2f3f66(0x1de),_0x5f228a=this[_0x2f3f66(0x25b)](_0x928c76),_0x3b467a=this[_0x2f3f66(0x289)](_0x928c76),_0x2bc2e1=_0x5f228a||_0x3b467a,_0x76cbd1={},_0x287cc4=0x0,_0x5cd77c=!0x1,_0x170616,_0x8ff245=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x257208['depth']){if(_0x2d4b7d){if(_0x284614=_0x5389a6['length'],_0x284614>_0x257208['elements']){for(_0x33a2a3=0x0,_0x11f419=_0x257208[_0x2f3f66(0x252)],_0x42be5e=_0x33a2a3;_0x42be5e<_0x11f419;_0x42be5e++)_0x5b8cd7[_0x2f3f66(0x1ae)](_0x1ac22e[_0x2f3f66(0x265)](_0x262728,_0x5389a6,_0x928c76,_0x42be5e,_0x257208));_0x4d0e15[_0x2f3f66(0x264)]=!0x0;}else{for(_0x33a2a3=0x0,_0x11f419=_0x284614,_0x42be5e=_0x33a2a3;_0x42be5e<_0x11f419;_0x42be5e++)_0x5b8cd7[_0x2f3f66(0x1ae)](_0x1ac22e[_0x2f3f66(0x265)](_0x262728,_0x5389a6,_0x928c76,_0x42be5e,_0x257208));}_0x257208[_0x2f3f66(0x249)]+=_0x5b8cd7[_0x2f3f66(0x229)];}if(!(_0x928c76===_0x2f3f66(0x232)||_0x928c76===_0x2f3f66(0x281))&&!_0x5f228a&&_0x928c76!==_0x2f3f66(0x1d2)&&_0x928c76!==_0x2f3f66(0x276)&&_0x928c76!==_0x2f3f66(0x288)){var _0x6f82dd=_0x52c0b3[_0x2f3f66(0x24f)]||_0x257208[_0x2f3f66(0x24f)];if(this[_0x2f3f66(0x282)](_0x5389a6)?(_0x42be5e=0x0,_0x5389a6[_0x2f3f66(0x20c)](function(_0x4e4d1d){var _0x762fa0=_0x2f3f66;if(_0x287cc4++,_0x257208[_0x762fa0(0x249)]++,_0x287cc4>_0x6f82dd){_0x5cd77c=!0x0;return;}if(!_0x257208[_0x762fa0(0x1a8)]&&_0x257208[_0x762fa0(0x1b6)]&&_0x257208[_0x762fa0(0x249)]>_0x257208[_0x762fa0(0x284)]){_0x5cd77c=!0x0;return;}_0x5b8cd7['push'](_0x1ac22e[_0x762fa0(0x265)](_0x262728,_0x5389a6,_0x762fa0(0x1c2),_0x42be5e++,_0x257208,function(_0x287a20){return function(){return _0x287a20;};}(_0x4e4d1d)));})):this[_0x2f3f66(0x1bc)](_0x5389a6)&&_0x5389a6['forEach'](function(_0x5752ec,_0x522e09){var _0x3c0031=_0x2f3f66;if(_0x287cc4++,_0x257208[_0x3c0031(0x249)]++,_0x287cc4>_0x6f82dd){_0x5cd77c=!0x0;return;}if(!_0x257208[_0x3c0031(0x1a8)]&&_0x257208[_0x3c0031(0x1b6)]&&_0x257208[_0x3c0031(0x249)]>_0x257208[_0x3c0031(0x284)]){_0x5cd77c=!0x0;return;}var _0x45fa40=_0x522e09[_0x3c0031(0x21f)]();_0x45fa40[_0x3c0031(0x229)]>0x64&&(_0x45fa40=_0x45fa40[_0x3c0031(0x254)](0x0,0x64)+_0x3c0031(0x1fa)),_0x5b8cd7[_0x3c0031(0x1ae)](_0x1ac22e[_0x3c0031(0x265)](_0x262728,_0x5389a6,_0x3c0031(0x283),_0x45fa40,_0x257208,function(_0x4b62d4){return function(){return _0x4b62d4;};}(_0x5752ec)));}),!_0x3b09ba){try{for(_0x4815d4 in _0x5389a6)if(!(_0x2d4b7d&&_0x8ff245[_0x2f3f66(0x1e1)](_0x4815d4))&&!this[_0x2f3f66(0x271)](_0x5389a6,_0x4815d4,_0x257208)){if(_0x287cc4++,_0x257208[_0x2f3f66(0x249)]++,_0x287cc4>_0x6f82dd){_0x5cd77c=!0x0;break;}if(!_0x257208[_0x2f3f66(0x1a8)]&&_0x257208['autoExpand']&&_0x257208[_0x2f3f66(0x249)]>_0x257208[_0x2f3f66(0x284)]){_0x5cd77c=!0x0;break;}_0x5b8cd7['push'](_0x1ac22e[_0x2f3f66(0x236)](_0x262728,_0x76cbd1,_0x5389a6,_0x928c76,_0x4815d4,_0x257208));}}catch{}if(_0x76cbd1[_0x2f3f66(0x1dc)]=!0x0,_0x4dd58d&&(_0x76cbd1[_0x2f3f66(0x1ed)]=!0x0),!_0x5cd77c){var _0x20015d=[][_0x2f3f66(0x23e)](this[_0x2f3f66(0x207)](_0x5389a6))[_0x2f3f66(0x23e)](this[_0x2f3f66(0x286)](_0x5389a6));for(_0x42be5e=0x0,_0x284614=_0x20015d[_0x2f3f66(0x229)];_0x42be5e<_0x284614;_0x42be5e++)if(_0x4815d4=_0x20015d[_0x42be5e],!(_0x2d4b7d&&_0x8ff245[_0x2f3f66(0x1e1)](_0x4815d4[_0x2f3f66(0x21f)]()))&&!this[_0x2f3f66(0x271)](_0x5389a6,_0x4815d4,_0x257208)&&!_0x76cbd1[_0x2f3f66(0x1d8)+_0x4815d4[_0x2f3f66(0x21f)]()]){if(_0x287cc4++,_0x257208[_0x2f3f66(0x249)]++,_0x287cc4>_0x6f82dd){_0x5cd77c=!0x0;break;}if(!_0x257208[_0x2f3f66(0x1a8)]&&_0x257208[_0x2f3f66(0x1b6)]&&_0x257208['autoExpandPropertyCount']>_0x257208['autoExpandLimit']){_0x5cd77c=!0x0;break;}_0x5b8cd7[_0x2f3f66(0x1ae)](_0x1ac22e['_addObjectProperty'](_0x262728,_0x76cbd1,_0x5389a6,_0x928c76,_0x4815d4,_0x257208));}}}}}if(_0x4d0e15[_0x2f3f66(0x204)]=_0x928c76,_0x2bc2e1?(_0x4d0e15[_0x2f3f66(0x26e)]=_0x5389a6[_0x2f3f66(0x1c6)](),this['_capIfString'](_0x928c76,_0x4d0e15,_0x257208,_0x52c0b3)):_0x928c76==='date'?_0x4d0e15[_0x2f3f66(0x26e)]=this['_dateToString'][_0x2f3f66(0x1ba)](_0x5389a6):_0x928c76===_0x2f3f66(0x288)?_0x4d0e15['value']=_0x5389a6[_0x2f3f66(0x21f)]():_0x928c76===_0x2f3f66(0x227)?_0x4d0e15[_0x2f3f66(0x26e)]=this[_0x2f3f66(0x1cc)][_0x2f3f66(0x1ba)](_0x5389a6):_0x928c76==='symbol'&&this[_0x2f3f66(0x272)]?_0x4d0e15['value']=this[_0x2f3f66(0x272)][_0x2f3f66(0x1c8)][_0x2f3f66(0x21f)]['call'](_0x5389a6):!_0x257208['depth']&&!(_0x928c76==='null'||_0x928c76===_0x2f3f66(0x281))&&(delete _0x4d0e15[_0x2f3f66(0x26e)],_0x4d0e15[_0x2f3f66(0x216)]=!0x0),_0x5cd77c&&(_0x4d0e15['cappedProps']=!0x0),_0x170616=_0x257208[_0x2f3f66(0x1bd)][_0x2f3f66(0x1d1)],_0x257208[_0x2f3f66(0x1bd)][_0x2f3f66(0x1d1)]=_0x4d0e15,this[_0x2f3f66(0x27a)](_0x4d0e15,_0x257208),_0x5b8cd7[_0x2f3f66(0x229)]){for(_0x42be5e=0x0,_0x284614=_0x5b8cd7[_0x2f3f66(0x229)];_0x42be5e<_0x284614;_0x42be5e++)_0x5b8cd7[_0x42be5e](_0x42be5e);}_0x262728['length']&&(_0x4d0e15[_0x2f3f66(0x24f)]=_0x262728);}catch(_0x290d34){_0x3de612(_0x290d34,_0x4d0e15,_0x257208);}return this['_additionalMetadata'](_0x5389a6,_0x4d0e15),this[_0x2f3f66(0x23f)](_0x4d0e15,_0x257208),_0x257208[_0x2f3f66(0x1bd)][_0x2f3f66(0x1d1)]=_0x170616,_0x257208[_0x2f3f66(0x212)]--,_0x257208['autoExpand']=_0x59abc6,_0x257208[_0x2f3f66(0x1b6)]&&_0x257208[_0x2f3f66(0x266)][_0x2f3f66(0x1ad)](),_0x4d0e15;}[_0x312442(0x286)](_0x2defce){var _0x26368f=_0x312442;return Object[_0x26368f(0x1a5)]?Object[_0x26368f(0x1a5)](_0x2defce):[];}[_0x312442(0x282)](_0x538ed4){var _0x363e47=_0x312442;return!!(_0x538ed4&&_0x289f54['Set']&&this[_0x363e47(0x20b)](_0x538ed4)===_0x363e47(0x1b5)&&_0x538ed4[_0x363e47(0x20c)]);}[_0x312442(0x271)](_0x4bb3cf,_0x576149,_0x1f822b){var _0x5247c8=_0x312442;return _0x1f822b[_0x5247c8(0x246)]?typeof _0x4bb3cf[_0x576149]==_0x5247c8(0x1de):!0x1;}[_0x312442(0x1d9)](_0x54a3ed){var _0x133383=_0x312442,_0x3d6dc3='';return _0x3d6dc3=typeof _0x54a3ed,_0x3d6dc3===_0x133383(0x23a)?this['_objectToString'](_0x54a3ed)==='[object\\x20Array]'?_0x3d6dc3='array':this[_0x133383(0x20b)](_0x54a3ed)===_0x133383(0x1f4)?_0x3d6dc3=_0x133383(0x20d):this[_0x133383(0x20b)](_0x54a3ed)===_0x133383(0x1b4)?_0x3d6dc3=_0x133383(0x288):_0x54a3ed===null?_0x3d6dc3=_0x133383(0x232):_0x54a3ed[_0x133383(0x1a3)]&&(_0x3d6dc3=_0x54a3ed[_0x133383(0x1a3)][_0x133383(0x243)]||_0x3d6dc3):_0x3d6dc3===_0x133383(0x281)&&this[_0x133383(0x277)]&&_0x54a3ed instanceof this[_0x133383(0x277)]&&(_0x3d6dc3='HTMLAllCollection'),_0x3d6dc3;}[_0x312442(0x20b)](_0x3f9962){var _0x230913=_0x312442;return Object[_0x230913(0x1c8)][_0x230913(0x21f)][_0x230913(0x1ba)](_0x3f9962);}[_0x312442(0x25b)](_0x5d7847){var _0x357c83=_0x312442;return _0x5d7847===_0x357c83(0x239)||_0x5d7847==='string'||_0x5d7847===_0x357c83(0x226);}[_0x312442(0x289)](_0x126c23){var _0x5bc3da=_0x312442;return _0x126c23===_0x5bc3da(0x23d)||_0x126c23===_0x5bc3da(0x1d2)||_0x126c23===_0x5bc3da(0x263);}['_addProperty'](_0xc726db,_0x9055f1,_0x48e167,_0x525d7c,_0x2a2d6d,_0x260b43){var _0x4440e7=this;return function(_0x26da21){var _0x166261=_0x578d,_0x2fca76=_0x2a2d6d[_0x166261(0x1bd)][_0x166261(0x1d1)],_0x47e39e=_0x2a2d6d[_0x166261(0x1bd)][_0x166261(0x205)],_0x35d83e=_0x2a2d6d[_0x166261(0x1bd)][_0x166261(0x1d0)];_0x2a2d6d[_0x166261(0x1bd)]['parent']=_0x2fca76,_0x2a2d6d[_0x166261(0x1bd)][_0x166261(0x205)]=typeof _0x525d7c==_0x166261(0x226)?_0x525d7c:_0x26da21,_0xc726db['push'](_0x4440e7[_0x166261(0x257)](_0x9055f1,_0x48e167,_0x525d7c,_0x2a2d6d,_0x260b43)),_0x2a2d6d[_0x166261(0x1bd)][_0x166261(0x1d0)]=_0x35d83e,_0x2a2d6d[_0x166261(0x1bd)]['index']=_0x47e39e;};}[_0x312442(0x236)](_0x4dde0b,_0x3cfaa4,_0x5bba70,_0x1e29d3,_0x2e93de,_0x594736,_0x3651f8){var _0x1b9bbd=_0x312442,_0x5754a5=this;return _0x3cfaa4[_0x1b9bbd(0x1d8)+_0x2e93de[_0x1b9bbd(0x21f)]()]=!0x0,function(_0x1ead38){var _0x417bb1=_0x1b9bbd,_0xdd7dc9=_0x594736['node'][_0x417bb1(0x1d1)],_0x2930d9=_0x594736[_0x417bb1(0x1bd)][_0x417bb1(0x205)],_0x27afad=_0x594736[_0x417bb1(0x1bd)][_0x417bb1(0x1d0)];_0x594736[_0x417bb1(0x1bd)][_0x417bb1(0x1d0)]=_0xdd7dc9,_0x594736[_0x417bb1(0x1bd)][_0x417bb1(0x205)]=_0x1ead38,_0x4dde0b[_0x417bb1(0x1ae)](_0x5754a5[_0x417bb1(0x257)](_0x5bba70,_0x1e29d3,_0x2e93de,_0x594736,_0x3651f8)),_0x594736[_0x417bb1(0x1bd)]['parent']=_0x27afad,_0x594736['node'][_0x417bb1(0x205)]=_0x2930d9;};}['_property'](_0x558a48,_0x3ff37d,_0x8c7d12,_0x5573c9,_0x1347c3){var _0x3e6fe4=_0x312442,_0x4736fb=this;_0x1347c3||(_0x1347c3=function(_0x1bf36d,_0x23f973){return _0x1bf36d[_0x23f973];});var _0x4c0e53=_0x8c7d12[_0x3e6fe4(0x21f)](),_0x28a1a6=_0x5573c9[_0x3e6fe4(0x228)]||{},_0x1af6ca=_0x5573c9[_0x3e6fe4(0x1fc)],_0x433cc4=_0x5573c9[_0x3e6fe4(0x1a8)];try{var _0x5e5eb8=this['_isMap'](_0x558a48),_0x224925=_0x4c0e53;_0x5e5eb8&&_0x224925[0x0]==='\\x27'&&(_0x224925=_0x224925[_0x3e6fe4(0x1cf)](0x1,_0x224925[_0x3e6fe4(0x229)]-0x2));var _0x3749ac=_0x5573c9['expressionsToEvaluate']=_0x28a1a6['_p_'+_0x224925];_0x3749ac&&(_0x5573c9[_0x3e6fe4(0x1fc)]=_0x5573c9[_0x3e6fe4(0x1fc)]+0x1),_0x5573c9[_0x3e6fe4(0x1a8)]=!!_0x3749ac;var _0x1f2227=typeof _0x8c7d12==_0x3e6fe4(0x240),_0x328d23={'name':_0x1f2227||_0x5e5eb8?_0x4c0e53:this[_0x3e6fe4(0x1ef)](_0x4c0e53)};if(_0x1f2227&&(_0x328d23['symbol']=!0x0),!(_0x3ff37d===_0x3e6fe4(0x1e9)||_0x3ff37d===_0x3e6fe4(0x1be))){var _0x279e70=this[_0x3e6fe4(0x25d)](_0x558a48,_0x8c7d12);if(_0x279e70&&(_0x279e70[_0x3e6fe4(0x224)]&&(_0x328d23['setter']=!0x0),_0x279e70[_0x3e6fe4(0x1c1)]&&!_0x3749ac&&!_0x5573c9[_0x3e6fe4(0x1f1)]))return _0x328d23[_0x3e6fe4(0x261)]=!0x0,this[_0x3e6fe4(0x24a)](_0x328d23,_0x5573c9),_0x328d23;}var _0xf686d0;try{_0xf686d0=_0x1347c3(_0x558a48,_0x8c7d12);}catch(_0x258f00){return _0x328d23={'name':_0x4c0e53,'type':_0x3e6fe4(0x26c),'error':_0x258f00[_0x3e6fe4(0x25e)]},this[_0x3e6fe4(0x24a)](_0x328d23,_0x5573c9),_0x328d23;}var _0x117616=this['_type'](_0xf686d0),_0x5977d8=this[_0x3e6fe4(0x25b)](_0x117616);if(_0x328d23[_0x3e6fe4(0x204)]=_0x117616,_0x5977d8)this[_0x3e6fe4(0x24a)](_0x328d23,_0x5573c9,_0xf686d0,function(){var _0x322f68=_0x3e6fe4;_0x328d23['value']=_0xf686d0['valueOf'](),!_0x3749ac&&_0x4736fb[_0x322f68(0x279)](_0x117616,_0x328d23,_0x5573c9,{});});else{var _0x45ecd4=_0x5573c9[_0x3e6fe4(0x1b6)]&&_0x5573c9['level']<_0x5573c9[_0x3e6fe4(0x1f3)]&&_0x5573c9['autoExpandPreviousObjects'][_0x3e6fe4(0x26f)](_0xf686d0)<0x0&&_0x117616!==_0x3e6fe4(0x1de)&&_0x5573c9[_0x3e6fe4(0x249)]<_0x5573c9[_0x3e6fe4(0x284)];_0x45ecd4||_0x5573c9[_0x3e6fe4(0x212)]<_0x1af6ca||_0x3749ac?(this[_0x3e6fe4(0x238)](_0x328d23,_0xf686d0,_0x5573c9,_0x3749ac||{}),this[_0x3e6fe4(0x201)](_0xf686d0,_0x328d23)):this[_0x3e6fe4(0x24a)](_0x328d23,_0x5573c9,_0xf686d0,function(){var _0x2bcb77=_0x3e6fe4;_0x117616==='null'||_0x117616===_0x2bcb77(0x281)||(delete _0x328d23[_0x2bcb77(0x26e)],_0x328d23[_0x2bcb77(0x216)]=!0x0);});}return _0x328d23;}finally{_0x5573c9[_0x3e6fe4(0x228)]=_0x28a1a6,_0x5573c9[_0x3e6fe4(0x1fc)]=_0x1af6ca,_0x5573c9['isExpressionToEvaluate']=_0x433cc4;}}[_0x312442(0x279)](_0x2c6f83,_0x44a500,_0xbfbae3,_0x253117){var _0x5b7148=_0x312442,_0x343096=_0x253117[_0x5b7148(0x1a6)]||_0xbfbae3['strLength'];if((_0x2c6f83===_0x5b7148(0x242)||_0x2c6f83==='String')&&_0x44a500[_0x5b7148(0x26e)]){let _0x4c83df=_0x44a500[_0x5b7148(0x26e)][_0x5b7148(0x229)];_0xbfbae3[_0x5b7148(0x25c)]+=_0x4c83df,_0xbfbae3[_0x5b7148(0x25c)]>_0xbfbae3[_0x5b7148(0x1f6)]?(_0x44a500[_0x5b7148(0x216)]='',delete _0x44a500['value']):_0x4c83df>_0x343096&&(_0x44a500[_0x5b7148(0x216)]=_0x44a500[_0x5b7148(0x26e)][_0x5b7148(0x1cf)](0x0,_0x343096),delete _0x44a500[_0x5b7148(0x26e)]);}}[_0x312442(0x1bc)](_0xc88439){var _0x31bf6a=_0x312442;return!!(_0xc88439&&_0x289f54['Map']&&this[_0x31bf6a(0x20b)](_0xc88439)==='[object\\x20Map]'&&_0xc88439[_0x31bf6a(0x20c)]);}[_0x312442(0x1ef)](_0x594cba){var _0x11561a=_0x312442;if(_0x594cba['match'](/^\\d+$/))return _0x594cba;var _0x4fa23d;try{_0x4fa23d=JSON[_0x11561a(0x27c)](''+_0x594cba);}catch{_0x4fa23d='\\x22'+this[_0x11561a(0x20b)](_0x594cba)+'\\x22';}return _0x4fa23d[_0x11561a(0x1fb)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x4fa23d=_0x4fa23d['substr'](0x1,_0x4fa23d[_0x11561a(0x229)]-0x2):_0x4fa23d=_0x4fa23d[_0x11561a(0x1f5)](/'/g,'\\x5c\\x27')[_0x11561a(0x1f5)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x4fa23d;}[_0x312442(0x24a)](_0x3faa2e,_0x4a5593,_0x1b0e78,_0x24e995){var _0x2d5288=_0x312442;this[_0x2d5288(0x27a)](_0x3faa2e,_0x4a5593),_0x24e995&&_0x24e995(),this[_0x2d5288(0x201)](_0x1b0e78,_0x3faa2e),this[_0x2d5288(0x23f)](_0x3faa2e,_0x4a5593);}[_0x312442(0x27a)](_0x1bcbdb,_0x1b73c1){var _0xc18741=_0x312442;this[_0xc18741(0x27b)](_0x1bcbdb,_0x1b73c1),this[_0xc18741(0x285)](_0x1bcbdb,_0x1b73c1),this[_0xc18741(0x1f0)](_0x1bcbdb,_0x1b73c1),this[_0xc18741(0x211)](_0x1bcbdb,_0x1b73c1);}['_setNodeId'](_0xddab67,_0x2358fb){}['_setNodeQueryPath'](_0x50ac21,_0x46bf6c){}[_0x312442(0x273)](_0x4b6c5c,_0x26477a){}[_0x312442(0x1e0)](_0x1bd1dc){var _0x39d919=_0x312442;return _0x1bd1dc===this[_0x39d919(0x237)];}['_treeNodePropertiesAfterFullValue'](_0x2e3b9d,_0x3f705d){var _0x9e7f60=_0x312442;this['_setNodeLabel'](_0x2e3b9d,_0x3f705d),this['_setNodeExpandableState'](_0x2e3b9d),_0x3f705d['sortProps']&&this[_0x9e7f60(0x1b9)](_0x2e3b9d),this['_addFunctionsNode'](_0x2e3b9d,_0x3f705d),this['_addLoadNode'](_0x2e3b9d,_0x3f705d),this['_cleanNode'](_0x2e3b9d);}[_0x312442(0x201)](_0x2466b8,_0x5337f1){var _0x1c5fc0=_0x312442;let _0x38a472;try{_0x289f54[_0x1c5fc0(0x28a)]&&(_0x38a472=_0x289f54[_0x1c5fc0(0x28a)]['error'],_0x289f54['console'][_0x1c5fc0(0x223)]=function(){}),_0x2466b8&&typeof _0x2466b8[_0x1c5fc0(0x229)]==_0x1c5fc0(0x226)&&(_0x5337f1[_0x1c5fc0(0x229)]=_0x2466b8[_0x1c5fc0(0x229)]);}catch{}finally{_0x38a472&&(_0x289f54[_0x1c5fc0(0x28a)][_0x1c5fc0(0x223)]=_0x38a472);}if(_0x5337f1[_0x1c5fc0(0x204)]===_0x1c5fc0(0x226)||_0x5337f1['type']===_0x1c5fc0(0x263)){if(isNaN(_0x5337f1[_0x1c5fc0(0x26e)]))_0x5337f1[_0x1c5fc0(0x1bb)]=!0x0,delete _0x5337f1[_0x1c5fc0(0x26e)];else switch(_0x5337f1[_0x1c5fc0(0x26e)]){case Number[_0x1c5fc0(0x203)]:_0x5337f1[_0x1c5fc0(0x278)]=!0x0,delete _0x5337f1[_0x1c5fc0(0x26e)];break;case Number[_0x1c5fc0(0x26d)]:_0x5337f1[_0x1c5fc0(0x231)]=!0x0,delete _0x5337f1['value'];break;case 0x0:this['_isNegativeZero'](_0x5337f1[_0x1c5fc0(0x26e)])&&(_0x5337f1[_0x1c5fc0(0x1ec)]=!0x0);break;}}else _0x5337f1[_0x1c5fc0(0x204)]===_0x1c5fc0(0x1de)&&typeof _0x2466b8[_0x1c5fc0(0x243)]==_0x1c5fc0(0x242)&&_0x2466b8[_0x1c5fc0(0x243)]&&_0x5337f1[_0x1c5fc0(0x243)]&&_0x2466b8[_0x1c5fc0(0x243)]!==_0x5337f1[_0x1c5fc0(0x243)]&&(_0x5337f1[_0x1c5fc0(0x1d5)]=_0x2466b8['name']);}['_isNegativeZero'](_0x4c6aff){return 0x1/_0x4c6aff===Number['NEGATIVE_INFINITY'];}[_0x312442(0x1b9)](_0x497cb3){var _0xf7acd2=_0x312442;!_0x497cb3['props']||!_0x497cb3[_0xf7acd2(0x24f)]['length']||_0x497cb3[_0xf7acd2(0x204)]===_0xf7acd2(0x1e9)||_0x497cb3[_0xf7acd2(0x204)]===_0xf7acd2(0x283)||_0x497cb3[_0xf7acd2(0x204)]===_0xf7acd2(0x1c2)||_0x497cb3[_0xf7acd2(0x24f)]['sort'](function(_0x544e1d,_0x181b19){var _0x4faefa=_0xf7acd2,_0x5b0d23=_0x544e1d[_0x4faefa(0x243)]['toLowerCase'](),_0x541ae8=_0x181b19[_0x4faefa(0x243)][_0x4faefa(0x1a4)]();return _0x5b0d23<_0x541ae8?-0x1:_0x5b0d23>_0x541ae8?0x1:0x0;});}['_addFunctionsNode'](_0x28d738,_0x103619){var _0x33c5da=_0x312442;if(!(_0x103619['noFunctions']||!_0x28d738['props']||!_0x28d738[_0x33c5da(0x24f)]['length'])){for(var _0x2a270a=[],_0x4e33fa=[],_0x2c6d7e=0x0,_0x14df7c=_0x28d738[_0x33c5da(0x24f)][_0x33c5da(0x229)];_0x2c6d7e<_0x14df7c;_0x2c6d7e++){var _0x10f3d1=_0x28d738[_0x33c5da(0x24f)][_0x2c6d7e];_0x10f3d1['type']==='function'?_0x2a270a[_0x33c5da(0x1ae)](_0x10f3d1):_0x4e33fa['push'](_0x10f3d1);}if(!(!_0x4e33fa['length']||_0x2a270a[_0x33c5da(0x229)]<=0x1)){_0x28d738[_0x33c5da(0x24f)]=_0x4e33fa;var _0x5ca4bf={'functionsNode':!0x0,'props':_0x2a270a};this[_0x33c5da(0x27b)](_0x5ca4bf,_0x103619),this[_0x33c5da(0x273)](_0x5ca4bf,_0x103619),this['_setNodeExpandableState'](_0x5ca4bf),this[_0x33c5da(0x211)](_0x5ca4bf,_0x103619),_0x5ca4bf['id']+='\\x20f',_0x28d738[_0x33c5da(0x24f)]['unshift'](_0x5ca4bf);}}}[_0x312442(0x267)](_0x557253,_0x20b969){}['_setNodeExpandableState'](_0x4cbf1f){}[_0x312442(0x287)](_0x7120b7){var _0x10aef3=_0x312442;return Array[_0x10aef3(0x24d)](_0x7120b7)||typeof _0x7120b7==_0x10aef3(0x23a)&&this['_objectToString'](_0x7120b7)===_0x10aef3(0x208);}['_setNodePermissions'](_0x4a77cc,_0x4953e7){}[_0x312442(0x26b)](_0x3af415){delete _0x3af415['_hasSymbolPropertyOnItsPath'],delete _0x3af415['_hasSetOnItsPath'],delete _0x3af415['_hasMapOnItsPath'];}['_setNodeExpressionPath'](_0x107946,_0x27dfee){}[_0x312442(0x1fd)](_0x47b20f){var _0x42749f=_0x312442;return _0x47b20f?_0x47b20f[_0x42749f(0x1fb)](this[_0x42749f(0x1c5)])?'['+_0x47b20f+']':_0x47b20f[_0x42749f(0x1fb)](this[_0x42749f(0x1e8)])?'.'+_0x47b20f:_0x47b20f[_0x42749f(0x1fb)](this[_0x42749f(0x210)])?'['+_0x47b20f+']':'[\\x27'+_0x47b20f+'\\x27]':'';}}let _0x2c77a6=new _0x1d1f90();function _0x30f5ce(_0x4a8d2c,_0x127609,_0x5584c5,_0x3d8b57,_0x5c20d7,_0x363023){var _0x510a6b=_0x312442;let _0x3acdaf,_0x3e21a3;try{_0x3e21a3=_0x32c2bf(),_0x3acdaf=_0x21d36a[_0x127609],!_0x3acdaf||_0x3e21a3-_0x3acdaf['ts']>0x1f4&&_0x3acdaf['count']&&_0x3acdaf[_0x510a6b(0x1cd)]/_0x3acdaf[_0x510a6b(0x248)]<0x64?(_0x21d36a[_0x127609]=_0x3acdaf={'count':0x0,'time':0x0,'ts':_0x3e21a3},_0x21d36a[_0x510a6b(0x219)]={}):_0x3e21a3-_0x21d36a[_0x510a6b(0x219)]['ts']>0x32&&_0x21d36a[_0x510a6b(0x219)]['count']&&_0x21d36a['hits'][_0x510a6b(0x1cd)]/_0x21d36a[_0x510a6b(0x219)][_0x510a6b(0x248)]<0x64&&(_0x21d36a[_0x510a6b(0x219)]={});let _0x214d37=[],_0x1a52d7=_0x3acdaf[_0x510a6b(0x1f7)]||_0x21d36a[_0x510a6b(0x219)][_0x510a6b(0x1f7)]?_0x544250:_0xdf602,_0x96c8e6=_0x48b509=>{var _0x3a9d11=_0x510a6b;let _0x341499={};return _0x341499[_0x3a9d11(0x24f)]=_0x48b509[_0x3a9d11(0x24f)],_0x341499[_0x3a9d11(0x252)]=_0x48b509[_0x3a9d11(0x252)],_0x341499[_0x3a9d11(0x1a6)]=_0x48b509['strLength'],_0x341499['totalStrLength']=_0x48b509[_0x3a9d11(0x1f6)],_0x341499[_0x3a9d11(0x284)]=_0x48b509[_0x3a9d11(0x284)],_0x341499[_0x3a9d11(0x1f3)]=_0x48b509[_0x3a9d11(0x1f3)],_0x341499[_0x3a9d11(0x251)]=!0x1,_0x341499[_0x3a9d11(0x246)]=!_0x1189ff,_0x341499[_0x3a9d11(0x1fc)]=0x1,_0x341499['level']=0x0,_0x341499[_0x3a9d11(0x234)]=_0x3a9d11(0x1f2),_0x341499['rootExpression']=_0x3a9d11(0x1ca),_0x341499[_0x3a9d11(0x1b6)]=!0x0,_0x341499[_0x3a9d11(0x266)]=[],_0x341499[_0x3a9d11(0x249)]=0x0,_0x341499[_0x3a9d11(0x1f1)]=!0x0,_0x341499['allStrLength']=0x0,_0x341499[_0x3a9d11(0x1bd)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x341499;};for(var _0x439851=0x0;_0x439851<_0x5c20d7['length'];_0x439851++)_0x214d37['push'](_0x2c77a6['serialize']({'timeNode':_0x4a8d2c==='time'||void 0x0},_0x5c20d7[_0x439851],_0x96c8e6(_0x1a52d7),{}));if(_0x4a8d2c===_0x510a6b(0x1ea)){let _0x47db2c=Error[_0x510a6b(0x206)];try{Error[_0x510a6b(0x206)]=0x1/0x0,_0x214d37[_0x510a6b(0x1ae)](_0x2c77a6[_0x510a6b(0x238)]({'stackNode':!0x0},new Error()[_0x510a6b(0x1b3)],_0x96c8e6(_0x1a52d7),{'strLength':0x1/0x0}));}finally{Error[_0x510a6b(0x206)]=_0x47db2c;}}return{'method':_0x510a6b(0x25f),'version':_0x592253,'args':[{'ts':_0x5584c5,'session':_0x3d8b57,'args':_0x214d37,'id':_0x127609,'context':_0x363023}]};}catch(_0x3f61c9){return{'method':'log','version':_0x592253,'args':[{'ts':_0x5584c5,'session':_0x3d8b57,'args':[{'type':_0x510a6b(0x26c),'error':_0x3f61c9&&_0x3f61c9[_0x510a6b(0x25e)]}],'id':_0x127609,'context':_0x363023}]};}finally{try{if(_0x3acdaf&&_0x3e21a3){let _0x2a7f65=_0x32c2bf();_0x3acdaf[_0x510a6b(0x248)]++,_0x3acdaf[_0x510a6b(0x1cd)]+=_0x5961dd(_0x3e21a3,_0x2a7f65),_0x3acdaf['ts']=_0x2a7f65,_0x21d36a['hits'][_0x510a6b(0x248)]++,_0x21d36a[_0x510a6b(0x219)][_0x510a6b(0x1cd)]+=_0x5961dd(_0x3e21a3,_0x2a7f65),_0x21d36a[_0x510a6b(0x219)]['ts']=_0x2a7f65,(_0x3acdaf['count']>0x32||_0x3acdaf[_0x510a6b(0x1cd)]>0x64)&&(_0x3acdaf['reduceLimits']=!0x0),(_0x21d36a[_0x510a6b(0x219)]['count']>0x3e8||_0x21d36a[_0x510a6b(0x219)][_0x510a6b(0x1cd)]>0x12c)&&(_0x21d36a['hits'][_0x510a6b(0x1f7)]=!0x0);}}catch{}}}return _0x289f54['_console_ninja'];})(globalThis,_0x3ba83d(0x20f),_0x3ba83d(0x1aa),_0x3ba83d(0x1e7),'webpack','1.0.0',_0x3ba83d(0x1af),_0x3ba83d(0x1a2),_0x3ba83d(0x245));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/sliderArrows.js":
/*!*************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/sliderArrows.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNextArrowEvent: () => (/* binding */ createNextArrowEvent),
/* harmony export */   createPrevArrowEvent: () => (/* binding */ createPrevArrowEvent)
/* harmony export */ });
/* harmony import */ var _weatherApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weatherApp */ "./src/assets/weatherApp/weatherApp.js");


/**
 * Add the event listener to the next arrow
 * Pass to the next day if is the last go to the first
 */
function createNextArrowEvent() {
  const nextArrow = document.querySelector('.next__arrow');
  nextArrow.addEventListener('click', () => {
    const weatherDataForeCast = _weatherApp__WEBPACK_IMPORTED_MODULE_0__.lastWeatherData.forecast.forecastday;
    const nextDayIndex = _weatherApp__WEBPACK_IMPORTED_MODULE_0__.currentDayIndex + 1 >= weatherDataForeCast.length ? 0 : _weatherApp__WEBPACK_IMPORTED_MODULE_0__.currentDayIndex + 1;
    (0,_weatherApp__WEBPACK_IMPORTED_MODULE_0__.setCurrentDayIndex)(nextDayIndex);
    (0,_weatherApp__WEBPACK_IMPORTED_MODULE_0__.updateWeatherApp)();
  });
}

/**
 * Add the event listener to the prev arrow
 * Pass to the next day if is the last go to the first
 */
function createPrevArrowEvent() {
  const nextArrow = document.querySelector('.prev__arrow');
  nextArrow.addEventListener('click', () => {
    const weatherDataForeCast = _weatherApp__WEBPACK_IMPORTED_MODULE_0__.lastWeatherData.forecast.forecastday;
    const nextDayIndex = _weatherApp__WEBPACK_IMPORTED_MODULE_0__.currentDayIndex - 1 < 0 ? weatherDataForeCast.length-1 : _weatherApp__WEBPACK_IMPORTED_MODULE_0__.currentDayIndex - 1;
    (0,_weatherApp__WEBPACK_IMPORTED_MODULE_0__.setCurrentDayIndex)(nextDayIndex);
    (0,_weatherApp__WEBPACK_IMPORTED_MODULE_0__.updateWeatherApp)();
  });
}




/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/weatherSlider.js":
/*!**************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/weatherSlider.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weatherApp */ "./src/assets/weatherApp/weatherApp.js");

// const weatherIcon = [
//   {
//     code: 1000,
//     day: 'Sunny',
//     night: 'Clear',
//     icon: 113,
//   },
//   {
//     code: 1003,
//     day: 'Partly cloudy',
//     night: 'Partly cloudy',
//     icon: 116,
//   },
//   {
//     code: 1006,
//     day: 'Cloudy',
//     night: 'Cloudy',
//     icon: 119,
//   },
//   {
//     code: 1009,
//     day: 'Overcast',
//     night: 'Overcast',
//     icon: 122,
//   },
//   {
//     code: 1030,
//     day: 'Mist',
//     night: 'Mist',
//     icon: 143,
//   },
//   {
//     code: 1063,
//     day: 'Patchy rain possible',
//     night: 'Patchy rain possible',
//     icon: 176,
//   },
//   {
//     code: 1066,
//     day: 'Patchy snow possible',
//     night: 'Patchy snow possible',
//     icon: 179,
//   },
//   {
//     code: 1069,
//     day: 'Patchy sleet possible',
//     night: 'Patchy sleet possible',
//     icon: 182,
//   },
//   {
//     code: 1072,
//     day: 'Patchy freezing drizzle possible',
//     night: 'Patchy freezing drizzle possible',
//     icon: 185,
//   },
//   {
//     code: 1087,
//     day: 'Thundery outbreaks possible',
//     night: 'Thundery outbreaks possible',
//     icon: 200,
//   },
//   {
//     code: 1114,
//     day: 'Blowing snow',
//     night: 'Blowing snow',
//     icon: 227,
//   },
//   {
//     code: 1117,
//     day: 'Blizzard',
//     night: 'Blizzard',
//     icon: 230,
//   },
//   {
//     code: 1135,
//     day: 'Fog',
//     night: 'Fog',
//     icon: 248,
//   },
//   {
//     code: 1147,
//     day: 'Freezing fog',
//     night: 'Freezing fog',
//     icon: 260,
//   },
//   {
//     code: 1150,
//     day: 'Patchy light drizzle',
//     night: 'Patchy light drizzle',
//     icon: 263,
//   },
//   {
//     code: 1153,
//     day: 'Light drizzle',
//     night: 'Light drizzle',
//     icon: 266,
//   },
//   {
//     code: 1168,
//     day: 'Freezing drizzle',
//     night: 'Freezing drizzle',
//     icon: 281,
//   },
//   {
//     code: 1171,
//     day: 'Heavy freezing drizzle',
//     night: 'Heavy freezing drizzle',
//     icon: 284,
//   },
//   {
//     code: 1180,
//     day: 'Patchy light rain',
//     night: 'Patchy light rain',
//     icon: 293,
//   },
//   {
//     code: 1183,
//     day: 'Light rain',
//     night: 'Light rain',
//     icon: 296,
//   },
//   {
//     code: 1186,
//     day: 'Moderate rain at times',
//     night: 'Moderate rain at times',
//     icon: 299,
//   },
//   {
//     code: 1189,
//     day: 'Moderate rain',
//     night: 'Moderate rain',
//     icon: 302,
//   },
//   {
//     code: 1192,
//     day: 'Heavy rain at times',
//     night: 'Heavy rain at times',
//     icon: 305,
//   },
//   {
//     code: 1195,
//     day: 'Heavy rain',
//     night: 'Heavy rain',
//     icon: 308,
//   },
//   {
//     code: 1198,
//     day: 'Light freezing rain',
//     night: 'Light freezing rain',
//     icon: 311,
//   },
//   {
//     code: 1201,
//     day: 'Moderate or heavy freezing rain',
//     night: 'Moderate or heavy freezing rain',
//     icon: 314,
//   },
//   {
//     code: 1204,
//     day: 'Light sleet',
//     night: 'Light sleet',
//     icon: 317,
//   },
//   {
//     code: 1207,
//     day: 'Moderate or heavy sleet',
//     night: 'Moderate or heavy sleet',
//     icon: 320,
//   },
//   {
//     code: 1210,
//     day: 'Patchy light snow',
//     night: 'Patchy light snow',
//     icon: 323,
//   },
//   {
//     code: 1213,
//     day: 'Light snow',
//     night: 'Light snow',
//     icon: 326,
//   },
//   {
//     code: 1216,
//     day: 'Patchy moderate snow',
//     night: 'Patchy moderate snow',
//     icon: 329,
//   },
//   {
//     code: 1219,
//     day: 'Moderate snow',
//     night: 'Moderate snow',
//     icon: 332,
//   },
//   {
//     code: 1222,
//     day: 'Patchy heavy snow',
//     night: 'Patchy heavy snow',
//     icon: 335,
//   },
//   {
//     code: 1225,
//     day: 'Heavy snow',
//     night: 'Heavy snow',
//     icon: 338,
//   },
//   {
//     code: 1237,
//     day: 'Ice pellets',
//     night: 'Ice pellets',
//     icon: 350,
//   },
//   {
//     code: 1240,
//     day: 'Light rain shower',
//     night: 'Light rain shower',
//     icon: 353,
//   },
//   {
//     code: 1243,
//     day: 'Moderate or heavy rain shower',
//     night: 'Moderate or heavy rain shower',
//     icon: 356,
//   },
//   {
//     code: 1246,
//     day: 'Torrential rain shower',
//     night: 'Torrential rain shower',
//     icon: 359,
//   },
//   {
//     code: 1249,
//     day: 'Light sleet showers',
//     night: 'Light sleet showers',
//     icon: 362,
//   },
//   {
//     code: 1252,
//     day: 'Moderate or heavy sleet showers',
//     night: 'Moderate or heavy sleet showers',
//     icon: 365,
//   },
//   {
//     code: 1255,
//     day: 'Light snow showers',
//     night: 'Light snow showers',
//     icon: 368,
//   },
//   {
//     code: 1258,
//     day: 'Moderate or heavy snow showers',
//     night: 'Moderate or heavy snow showers',
//     icon: 371,
//   },
//   {
//     code: 1261,
//     day: 'Light showers of ice pellets',
//     night: 'Light showers of ice pellets',
//     icon: 374,
//   },
//   {
//     code: 1264,
//     day: 'Moderate or heavy showers of ice pellets',
//     night: 'Moderate or heavy showers of ice pellets',
//     icon: 377,
//   },
//   {
//     code: 1273,
//     day: 'Patchy light rain with thunder',
//     night: 'Patchy light rain with thunder',
//     icon: 386,
//   },
//   {
//     code: 1276,
//     day: 'Moderate or heavy rain with thunder',
//     night: 'Moderate or heavy rain with thunder',
//     icon: 389,
//   },
//   {
//     code: 1279,
//     day: 'Patchy light snow with thunder',
//     night: 'Patchy light snow with thunder',
//     icon: 392,
//   },
//   {
//     code: 1282,
//     day: 'Moderate or heavy snow with thunder',
//     night: 'Moderate or heavy snow with thunder',
//     icon: 395,
//   },
// ];

/**
 * Print the weather slider
 * You can scroll through all the slides of the days
 * @param {Object} day
 */
function printWeatherSlider(day) {
  const weatherIconDay = document.querySelector('.weather__slider__information__img');
  const weatherTitleDay = document.querySelector('.weather__slider__information__title');
  const windValueDay = document.querySelector('.wind__value__data');
  const tempValueDay = document.querySelector('.temp__data__value');
  const humidityValueDay = document.querySelector('.humidity__data__value');

  // weatherIconDay.src = require(`../assets/images/weather-icons/${weatherIcon[listDays[0].weather.code].icon}.png`);
  weatherIconDay.src = __webpack_require__("./src/assets/weatherApp/weatherSlider sync recursive ^.*$")(`${getWeatherIcon(day.condition.code)}`); // TODO: change the icon
  weatherTitleDay.innerHTML = day.condition.text;
  windValueDay.textContent = day.avgvis_km;
  tempValueDay.textContent = _weatherApp__WEBPACK_IMPORTED_MODULE_0__.usingFahrenheit ? Math.round(day.avgtemp_f) : Math.round(day.avgtemp_c);
  humidityValueDay.textContent = day.avghumidity;
}

/**
 * Convert the code of the weather to the icon
 * @param {Number} code
 * @return {String} icon
 */
function getWeatherIcon(code) {
  const mainPath = './img/';
  let iconName = '';

  if (code == 1000) {
    iconName = 'sunny.png';
  } else if (code == 1003) {
    iconName = 'partly-cloudy-day.png';
  } else if (code == 1006) {
    iconName = 'cloudy.png';
  } else if (code == 1009) {
    iconName = 'overcast.png';
  } else if (code == 1030 || code == 1135 || code == 1147) { // All the mist codes
    iconName = 'mist.png';
  } else if (code == 1063 ||
    code == 1072 ||
    code == 1150 ||
    code == 1153 ||
    code == 1180 ||
    code == 1183 ||
    code == 1186 ||
    code == 1189 ||
    code == 1192 ||
    code == 1195 ||
    code == 1240 ||
    code == 1243 ||
    code == 1246) { // All the rain codes
    iconName = 'rain.png';
  } else if (code == 1066 ||
    code == 1210 ||
    code == 1213 ||
    code == 1216 ||
    code == 1219 ||
    code == 1222 ||
    code == 1225 ||
    code == 1237 ||
    code == 1255 ||
    code == 1258 ||
    code == 1261 ||
    code == 1264) { // All the snow codes
    iconName = 'snow.png';
  } else if (code == 1069 ||
    code == 1114 ||
    code == 1168 ||
    code == 1171 ||
    code == 1198 ||
    code == 1201 ||
    code == 1204 ||
    code == 1207 ||
    code == 1249 ||
    code == 1252) { // All the sleet codes
    iconName = 'sleet.png';
  } else if (code == 1087 ||
    code == 1273 ||
    code == 1276 ||
    code == 1279 ||
    code == 1282) { // All the thunderstorm codes
    iconName = 'thunderstorm.png';
  } else if (code == 1117) { // All the wind codes
    iconName = 'wind.png';
  }

  return mainPath + iconName;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printWeatherSlider);


/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider sync recursive ^.*$":
/*!********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/ sync ^.*$ ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./img/cloudy.png": "./src/assets/weatherApp/weatherSlider/img/cloudy.png",
	"./img/mist.png": "./src/assets/weatherApp/weatherSlider/img/mist.png",
	"./img/overcast.png": "./src/assets/weatherApp/weatherSlider/img/overcast.png",
	"./img/partly-cloudy-day.png": "./src/assets/weatherApp/weatherSlider/img/partly-cloudy-day.png",
	"./img/rain.png": "./src/assets/weatherApp/weatherSlider/img/rain.png",
	"./img/sleet.png": "./src/assets/weatherApp/weatherSlider/img/sleet.png",
	"./img/snow.png": "./src/assets/weatherApp/weatherSlider/img/snow.png",
	"./img/sunny.png": "./src/assets/weatherApp/weatherSlider/img/sunny.png",
	"./img/thunderstorm.png": "./src/assets/weatherApp/weatherSlider/img/thunderstorm.png",
	"./img/wind.png": "./src/assets/weatherApp/weatherSlider/img/wind.png",
	"./sliderArrows": "./src/assets/weatherApp/weatherSlider/sliderArrows.js",
	"./sliderArrows.js": "./src/assets/weatherApp/weatherSlider/sliderArrows.js",
	"./weatherSlider": "./src/assets/weatherApp/weatherSlider/weatherSlider.js",
	"./weatherSlider.js": "./src/assets/weatherApp/weatherSlider/weatherSlider.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/weatherApp/weatherSlider sync recursive ^.*$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/global.css */ "./src/css/global.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/header.css */ "./src/css/header.css");
/* harmony import */ var _css_loading_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/loading.css */ "./src/css/loading.css");
/* harmony import */ var _css_slider_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/slider.css */ "./src/css/slider.css");
/* harmony import */ var _css_hourlySlider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/hourlySlider.css */ "./src/css/hourlySlider.css");
/* harmony import */ var _css_search_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/search.css */ "./src/css/search.css");
/* harmony import */ var _assets_weatherApp_weatherApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/weatherApp/weatherApp */ "./src/assets/weatherApp/weatherApp.js");
/* harmony import */ var _img_loading_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/loading.svg */ "./src/img/loading.svg");
/* harmony import */ var _assets_weatherApp_searchBox_searchBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/weatherApp/searchBox/searchBox */ "./src/assets/weatherApp/searchBox/searchBox.js");
/* harmony import */ var _assets_weatherApp_fahrenheitCheck_fahrenheitCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/weatherApp/fahrenheitCheck/fahrenheitCheck */ "./src/assets/weatherApp/fahrenheitCheck/fahrenheitCheck.js");
/* harmony import */ var _assets_weatherApp_weatherSlider_sliderArrows__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/weatherApp/weatherSlider/sliderArrows */ "./src/assets/weatherApp/weatherSlider/sliderArrows.js");













/**
 * @description This is the main function of the application
 * @return {void}
 */
async function init() {
  setLoadingImg();
  (0,_assets_weatherApp_weatherApp__WEBPACK_IMPORTED_MODULE_6__.printWeatherApp)();
  (0,_assets_weatherApp_searchBox_searchBox__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_assets_weatherApp_fahrenheitCheck_fahrenheitCheck__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_assets_weatherApp_weatherSlider_sliderArrows__WEBPACK_IMPORTED_MODULE_10__.createNextArrowEvent)();
  (0,_assets_weatherApp_weatherSlider_sliderArrows__WEBPACK_IMPORTED_MODULE_10__.createPrevArrowEvent)();
}

/**
 * Add the loading image to the DOM
 */
function setLoadingImg() {
  const loadingContainer = document.querySelector('.loading');
  const loadingImg = document.createElement('img');
  loadingImg.src = _img_loading_svg__WEBPACK_IMPORTED_MODULE_7__;
  loadingImg.alt = 'Loading...';
  loadingContainer.appendChild(loadingImg);
}

init(); // Calling the main function


/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/cloudy.png":
/*!************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/cloudy.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4d7f0984deb69cdcc507.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/mist.png":
/*!**********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/mist.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2dde8fde40633e95f6b1.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/overcast.png":
/*!**************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/overcast.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fb7edc2b3add55a6fd54.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/partly-cloudy-day.png":
/*!***********************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/partly-cloudy-day.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4041ab7ca22dedc294ea.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/rain.png":
/*!**********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/rain.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dfefc3aef7def265b28a.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/sleet.png":
/*!***********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/sleet.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3724db0fa8c8771a4ea1.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/snow.png":
/*!**********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/snow.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2ede0c5402850166b24f.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/sunny.png":
/*!***********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/sunny.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "67be78f859ee6384a6ca.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/thunderstorm.png":
/*!******************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/thunderstorm.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c557b5d54830aecffce3.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/wind.png":
/*!**********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/wind.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ee8be689f57ecc68a9e8.png";

/***/ }),

/***/ "./src/img/loading.svg":
/*!*****************************!*\
  !*** ./src/img/loading.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "34d2cb87cdc6f223301c.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvRUFBb0UsMkNBQTJDO0FBQy9HLHVCQUF1QixpRkFBUSxDQUFDLEVBQUUsbUNBQW1DLENBQUMsQ0FBQyxFQUFFO0FBQ3pFO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQWU7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSx5REFBeUQ7QUFDN0Q7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLElBQUkseUJBQXlCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7QUM5WGxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkMwQjtBQUNBO0FBQ0M7QUFDRDtBQUNNO0FBQ047QUFDcUM7QUFDcEI7QUFDNkI7QUFDeUI7QUFDUzs7O0FBRzFHO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4RUFBZTtBQUNqQixFQUFFLGtGQUFpQjtBQUNuQixFQUFFLDhGQUE4QjtBQUNoQyxFQUFFLG9HQUFvQjtBQUN0QixFQUFFLG9HQUFvQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVU7QUFDN0I7QUFDQTtBQUNBOztBQUVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9nbG9iYWwuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvaG91cmx5U2xpZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9sb2FkaW5nLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9zZWFyY2guY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL3NsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2dsb2JhbC5jc3M/NTg0YSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9oZWFkZXIuY3NzPzhhYzEiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvaG91cmx5U2xpZGVyLmNzcz9lNmUzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2xvYWRpbmcuY3NzP2I2YzciLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3Mvc2VhcmNoLmNzcz80NDY5Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL3NsaWRlci5jc3M/MDQ5YSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL2FwaUNhbGxzL2FwaUNhbGxzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3V0aWxzL3NldExvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvdXRpbHMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvZmFocmVuaGVpdENoZWNrL2ZhaHJlbmhlaXRDaGVjay5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL2hlYWRlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC9ob3VybHlTbGlkZXIvaG91cmx5U2xpZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvc2VhcmNoQm94L3NlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJBcHAuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyU2xpZGVyL3NsaWRlckFycm93cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvd2VhdGhlclNsaWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvIHN5bmMgXi4qJCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0pQOndnaHRAMTAwOzQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEpQXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LDI0MiwyNTUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xufVxuXG4jcm9vdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixxRkFBcUY7QUFDdkY7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0pQOndnaHRAMTAwOzQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2FucyBKUFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xcbn1cXG5cXG4jcm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAwcHggMTVweDtcbn1cblxuLmhlYWRlcl9fY2l0eV9fY29udGFpbmVyIHtcbiAgZmxleDogMTtcbn1cblxuLmhlYWRlcl9fY2l0eV9fbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGVhZGVyX19jaXR5X19uYW1lX19kYXRlIHtcbiAgY29sb3I6ICNhOGIxZGQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhlYWRlcl9fY2l0eV9fbmFtZV9fY2l0eSB7XG4gIGNvbG9yOiAjNDk0MTczO1xufVxuXG4uaGVhZGVyX19jaXR5X190bXBUb2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZV9fdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cbi5zd2l0Y2gge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBTd2l0Y2ggU3R5bGVcbiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uc3dpdGNoLFxuLnN3aXRjaCBpbnB1dCxcbi5zd2l0Y2ggLnNsaWRlciB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0MTczO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICM0OTQxNzM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7a0RBRWtEOztBQUVsRDs7O0VBR0UsaUJBQWlCO0FBQ25CO0FBQ0EsMkNBQTJDO0FBQzNDO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBLGVBQWU7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAwcHggMTVweDtcXG59XFxuXFxuLmhlYWRlcl9fY2l0eV9fY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5oZWFkZXJfX2NpdHlfX25hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGUge1xcbiAgY29sb3I6ICNhOGIxZGQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uaGVhZGVyX19jaXR5X19uYW1lX19jaXR5IHtcXG4gIGNvbG9yOiAjNDk0MTczO1xcbn1cXG5cXG4uaGVhZGVyX19jaXR5X190bXBUb2dnbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlcl9fY2l0eV9fdG1wVG9nZ2xlX190ZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE5cHg7XFxufVxcbi5zd2l0Y2gge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAgIFN3aXRjaCBTdHlsZVxcbiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5zd2l0Y2gsXFxuLnN3aXRjaCBpbnB1dCxcXG4uc3dpdGNoIC5zbGlkZXIge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgd2lkdGg6IDI2cHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDE3MztcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzQ5NDE3MztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndlYXRoZXJfX2RhdGFfX2hvdXJseSB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QTFCRUU7XG4gIHBhZGRpbmc6IDI1cHggMjVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XG59XG5cbi5jdXJyZW50X19kYXkge1xuICBjb2xvcjogI0UxRUFGRDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiBIb3VybHkgU2xpZGVyICovXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI1cHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA1MHB4KTtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0MkZGMztcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudCA+IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaG91cmx5U2xpZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndlYXRoZXJfX2RhdGFfX2hvdXJseSB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBMUJFRTtcXG4gIHBhZGRpbmc6IDI1cHggMjVweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcXG59XFxuXFxuLmN1cnJlbnRfX2RheSB7XFxuICBjb2xvcjogI0UxRUFGRDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLyogSG91cmx5IFNsaWRlciAqL1xcbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNXB4O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHBhZGRpbmc6IDI1cHggMDtcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNTBweCk7XFxuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDJGRjM7XFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnQgPiBwIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogcmdiKDIzNiwyNDIsMjU1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgcmdiYSgyMzYsMjQyLDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubG9hZGluZy5sb2FkaW5nLS1hY3RpdmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbG9hZGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixxRkFBcUY7RUFDckYsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUNBQW1DO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2FkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LDI0MiwyNTUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgcmdiYSgyMzYsMjQyLDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5sb2FkaW5nLmxvYWRpbmctLWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53ZWF0aGVyX19zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QTFCRUU7XG59XG4uc2VhcmNoX19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY3RkY7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5zZWFyY2hfX2Zvcm1fX2lucHV0LCAuc2VhcmNoX19mb3JtX19idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5cbi5zZWFyY2hfX2Vycm9yIHtcbiAgY29sb3I6ICNGRjAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzOyBcbn1cblxuLnNlYXJjaF9fZXJyb3ItLWluYWN0aXZlIHtcbiAgb3BhY2l0eTogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2VhcmNoLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndlYXRoZXJfX3NlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBMUJFRTtcXG59XFxuLnNlYXJjaF9fZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjdGRjtcXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcbi5zZWFyY2hfX2Zvcm1fX2lucHV0LCAuc2VhcmNoX19mb3JtX19idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi5zZWFyY2hfX2Vycm9yIHtcXG4gIGNvbG9yOiAjRkYwMDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7IFxcbn1cXG5cXG4uc2VhcmNoX19lcnJvci0taW5hY3RpdmUge1xcbiAgb3BhY2l0eTogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud2VhdGhlcl9fZGF0YSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ud2VhdGhlcl9fc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLndlYXRoZXJfX3NsaWRlcl9faW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi53ZWF0aGVyX19zbGlkZXJfX2luZm9ybWF0aW9uX19pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlYXRoZXJfX3NlbGVjdGVkX19hcnJvdyB7XG4gIGZpbGw6ICNhOGIxZGQ7XG59XG5cblxuXG4ud2VhdGhlcl9fZGF0YV9faW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweCAxNXB4O1xufVxuLndlYXRoZXJfX2RhdGFfX2luZm9ybWF0aW9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0E4QjFERCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4ud2VhdGhlcl9faW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLndlYXRoZXJfX2luZm8gaDMge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjQThCMUREO1xufVxuLndlYXRoZXJfX2luZm8gPiBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzQ5NDE3Mztcbn1cblxuLndlYXRoZXJfX2luZm9fX3VuaXQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3NsaWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53ZWF0aGVyX19kYXRhIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLndlYXRoZXJfX3NsaWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG5cXG4ud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLndlYXRoZXJfX3NsaWRlcl9faW5mb3JtYXRpb25fX2ltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndlYXRoZXJfX3NlbGVjdGVkX19hcnJvdyB7XFxuICBmaWxsOiAjYThiMWRkO1xcbn1cXG5cXG5cXG5cXG4ud2VhdGhlcl9fZGF0YV9faW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI1cHggMTVweDtcXG59XFxuLndlYXRoZXJfX2RhdGFfX2luZm9ybWF0aW9uOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNBOEIxREQgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLndlYXRoZXJfX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ud2VhdGhlcl9faW5mbyBoMyB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICNBOEIxREQ7XFxufVxcbi53ZWF0aGVyX19pbmZvID4gcCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogIzQ5NDE3MztcXG59XFxuXFxuLndlYXRoZXJfX2luZm9fX3VuaXQge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvdXJseVNsaWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvdXJseVNsaWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYWRpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHNldExvYWRpbmcgZnJvbSAnLi4vdXRpbHMvc2V0TG9hZGluZyc7XG4vKipcbiAqIFJldHVybiB0aGUgd2VhdGhlciBmb3IgdGhlIGdpdmVuIGxvY2F0aW9uXG4gKiBVc2UgdGhlIHdlYXRoZXJhcGkuY29tIEFQSVxuICogQHNlZSBodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9kb2NzL1xuICogQHNlZSBodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9hcGktZXhwbG9yZXIuYXNweFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uXG4gKiByZXR1cm4ge29iamVjdH0gd2VhdGhlclxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICBzZXRMb2FkaW5nKHRydWUpO1xuICAvKiBlc2xpbnQgbWF4LWxlbjogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVVybHNcIjogdHJ1ZSB9XSAqL1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0XG4gIGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJfSZxPSR7bG9jYXRpb259JmRheXM9MyZhcWk9eWVzJmFsZXJ0cz1ub2AsIHttb2RlOiAnY29ycyd9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvKipcbiAqIFNob3dzIG9yIGhpZGVzIHRoZSBsb2FkaW5nIHNwaW5uZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNMb2FkaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldExvYWRpbmcoaXNMb2FkaW5nKSB7XG4gIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xuICBsb2FkaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmctLWFjdGl2ZScsIGlzTG9hZGluZyk7XG59XG5cbiIsIi8qKlxuICogUmV0dXJuIHRoZSBkYXkgb2YgdGhlIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogRS5nLiBNb25kYXksIFR1ZXNkYXksIGV0Yy5cbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXREYXkoZGF0ZSkge1xuICBjb25zdCBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICByZXR1cm4gZGF5c1tkYXRlLmdldERheSgpXTtcbn1cblxuZXhwb3J0IHtnZXREYXl9O1xuIiwiaW1wb3J0IHt1c2luZ0ZhaHJlbmhlaXQsIHNldEZhaHJlbmhlaXR9IGZyb20gJy4uL3dlYXRoZXJBcHAnO1xuXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBmYWhyZW5oZWl0IGNoZWNrYm94XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZhaHJlbmhlaXRFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgZmFocmVuaGVpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0X19jaGVja2JveCcpO1xuICBmYWhyZW5oZWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEZhaHJlbmhlaXQoIXVzaW5nRmFocmVuaGVpdCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGYWhyZW5oZWl0RXZlbnRMaXN0ZW5lcnM7XG4iLCJpbXBvcnQge2dldERheX0gZnJvbSAnLi4vdXRpbHMvdXRpbGl0aWVzJztcblxuLyoqXG4gKiBQcmludCBpbiB0aGUgSGVhZGVyIHRoZSBEYXRlIGFuZCB0aGUgQ2l0eVxuICogQHBhcmFtIHtzdHJpbmd9IGNpdHkgLSBDaXR5IE5hbWVcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIERhdGVcbiAqL1xuZnVuY3Rpb24gcHJpbnRIZWFkZXJEYXRhKGNpdHksIGRhdGUpIHtcbiAgLy8gR2V0dGluZyBET00gRWxlbWVudHNcbiAgY29uc3QgbmFtZUNpdHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2l0eV9fbmFtZV9fY2l0eScpO1xuICBjb25zdCB0ZXh0RGF5RWxlbWVudCA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGVfX3RleHREYXknKTtcbiAgY29uc3QgbnVtYmVyRGF5RWxlbWVudCA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGVfX251bWJlckRheScpO1xuICBjb25zdCBtb250aEVsZW1lbnQgPVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jaXR5X19uYW1lX19kYXRlX190ZXh0TW9udGgnKTtcbiAgLy8gU2V0dGluZyB0aGUgY29udGVudFxuICBuYW1lQ2l0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBjaXR5OyAvLyBDaXR5IE5hbWVcbiAgdGV4dERheUVsZW1lbnQudGV4dENvbnRlbnQgPSBnZXREYXkoZGF0ZSk7IC8vIERheSBvZiB0aGUgV2Vla1xuICBudW1iZXJEYXlFbGVtZW50LnRleHRDb250ZW50ID0gZGF0ZS5nZXREYXRlKCk7IC8vIERheSBvZiB0aGUgTW9udGhcbiAgbW9udGhFbGVtZW50LnRleHRDb250ZW50ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7bW9udGg6ICdsb25nJ30pOyAvLyBNb250aFxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmludEhlYWRlckRhdGE7XG4iLCJpbXBvcnQge2dldERheX0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbGl0aWVzJztcbmltcG9ydCB7dXNpbmdGYWhyZW5oZWl0fSBmcm9tICcuLi93ZWF0aGVyQXBwJztcblxuLyoqXG4gKiBQcmludCB0aGUgaG91cmx5IHNsaWRlciBmcm9tIHRoZSBob3VybHkgbGlzdFxuICogcGFzc2VkIGFzIHBhcmFtZXRlclxuICogQHBhcmFtIHtBcnJheX0gZGF5XG4gKi9cbmZ1bmN0aW9uIHByaW50SG91cmx5U2xpZGVyKGRheSkge1xuICAvLyBNYWluIGNvbnRhaW5lciBvZiB0aGUgc2xpZGVyXG4gIGNvbnN0IGhvdXJseVNsaWRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXInKTtcbiAgaG91cmx5U2xpZGVyRWxlbWVudC5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgdGhlIHNsaWRlclxuICBjb25zdCBkYXlUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50X19kYXknKTtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBkYXlEYXRlID0gbmV3IERhdGUoZGF5LmRhdGUpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBsZXQgY3VycmVudEhvdXJJbmRleDsgLy8gSW5kZXggb2YgdGhlIGN1cnJlbnQgaG91ciBpbiB0aGUgaG91cmx5IGxpc3RcblxuICBpZiAoY3VycmVudERhdGUgPT09IGRheURhdGUpIHsgLy8gSWYgdGhlIGRheSBpcyB0b2RheVxuICAgIC8vIFRoZSBjdXJyZW50IGhvdXIgaXMgdGhlIGNvcnJlY3QgaG91ciBpbmRleCB0byBzdGFydFxuICAgIGN1cnJlbnRIb3VySW5kZXggPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gIH0gZWxzZSB7IC8vIElmIHRoZSBkYXkgaXMgbm90IHRvZGF5IHN0YXJ0IGZyb20gdGhlIGZpcnN0IGhvdXJcbiAgICBjdXJyZW50SG91ckluZGV4ID0gMDtcbiAgfVxuXG4gIGRheVRleHRFbGVtZW50LnRleHRDb250ZW50ID0gZ2V0RGF5KG5ldyBEYXRlKGRheS5kYXRlKSk7XG4gIGNvbnN0IGZpbHRlcmVkSG91cmx5TGlzdCA9IGRheS5ob3VyLnNsaWNlKGN1cnJlbnRIb3VySW5kZXgpO1xuICBmaWx0ZXJlZEhvdXJseUxpc3QuZm9yRWFjaCgoaG91cmx5KSA9PiB7XG4gICAgaG91cmx5U2xpZGVyRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIb3VybHlFbGVtZW50KGhvdXJseSkpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgSFRNTCBlbGVtZW50IGZvciB0aGUgaG91cmx5IHNsaWRlclxuICogQHBhcmFtIHtPYmplY3R9IGhvdXJseURhdGFcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlFbGVtZW50KGhvdXJseURhdGEpIHtcbiAgY29uc3QgaG91cmx5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VybHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50Jyk7XG5cbiAgY29uc3QgaG91cmx5SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaG91cmx5SW1hZ2UuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX2ltYWdlJyk7XG4gIGhvdXJseUltYWdlLnNyYyA9IHJlcXVpcmUoYC4uL3dlYXRoZXJTbGlkZXIvaW1nL3N1bm55LnBuZ2ApO1xuXG4gIGNvbnN0IGhvdXJseUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvdXJseUhvdXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX2hvdXInKTtcbiAgaG91cmx5SG91ci50ZXh0Q29udGVudCA9IG5ldyBEYXRlKGhvdXJseURhdGEudGltZSkuZ2V0SG91cnMoKSArICc6MDAnO1xuXG4gIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob3VybHlUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9fdGVtcGVyYXR1cmUnKTtcbiAgY29uc3QgaG91cmx5VGVtcGVyYXR1cmVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaG91cmx5VGVtcGVyYXR1cmVWYWx1ZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9fdGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gIGhvdXJseVRlbXBlcmF0dXJlVmFsdWUudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHVzaW5nRmFocmVuaGVpdCA/IGhvdXJseURhdGEudGVtcF9mIDogaG91cmx5RGF0YS50ZW1wX2MpO1xuICBjb25zdCBob3VybHlUZW1wZXJhdHVyZVVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhvdXJseVRlbXBlcmF0dXJlVW5pdC5jbGFzc0xpc3RcbiAgICAgIC5hZGQoJ3dlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50X190ZW1wZXJhdHVyZV9fdW5pdCcsICd3ZWF0aGVyX19pbmZvX191bml0JywgJ3dlYXRoZXJfX3RlbXBfX3VuaXQnKTtcbiAgaG91cmx5VGVtcGVyYXR1cmVVbml0LnRleHRDb250ZW50ID0gJ8KwQyc7XG5cbiAgaG91cmx5VGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcGVyYXR1cmVWYWx1ZSk7XG4gIGhvdXJseVRlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGhvdXJseVRlbXBlcmF0dXJlVW5pdCk7XG5cbiAgaG91cmx5RWxlbWVudC5hcHBlbmRDaGlsZChob3VybHlJbWFnZSk7XG4gIGhvdXJseUVsZW1lbnQuYXBwZW5kQ2hpbGQoaG91cmx5SG91cik7XG4gIGhvdXJseUVsZW1lbnQuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcGVyYXR1cmUpO1xuXG4gIHJldHVybiBob3VybHlFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmludEhvdXJseVNsaWRlcjtcbiIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuLi8uLi9hcGlDYWxscy9hcGlDYWxscyc7XG5cbmltcG9ydCB7c2V0TGFzdFdlYXRoZXJEYXRhLCB1cGRhdGVXZWF0aGVyQXBwfSBmcm9tICcuLi93ZWF0aGVyQXBwJztcblxuLyoqXG4gKiBDcmVhdGUgdGhlIFNlYXJjaCBCb3ggU3VibWl0IEV2ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hFdmVudCgpIHtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2Zvcm0nKTtcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19mb3JtX19pbnB1dCcpO1xuXG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nXG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTsgLy8gR2V0IHRoZSBzZWFyY2ggcXVlcnlcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKHNlYXJjaFF1ZXJ5KTsgLy8gR2V0IHRoZSB3ZWF0aGVyIGRhdGFcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnOyAvLyBDbGVhciB0aGUgc2VhcmNoIGlucHV0XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciwgZGlzcGxheSBpdCBhbmQgcmV0dXJuXG4gICAgaWYgKHdlYXRoZXJEYXRhLmVycm9yKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2Vycm9yJyk7XG4gICAgICBlcnJvci50ZXh0Q29udGVudCA9ICdDaXR5IG5vdCBmb3VuZCc7XG4gICAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hfX2Vycm9yLS1pbmFjdGl2ZScpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnc2VhcmNoX19lcnJvci0taW5hY3RpdmUnKTtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIG5vIGVycm9yLCBwcmludCB0aGUgd2VhdGhlciBhcHBcbiAgICBzZXRMYXN0V2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xuICAgIHVwZGF0ZVdlYXRoZXJBcHAoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlYXJjaEV2ZW50O1xuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4uL2FwaUNhbGxzL2FwaUNhbGxzJztcbmltcG9ydCBwcmludEhlYWRlckRhdGEgZnJvbSAnLi9oZWFkZXJEYXRhJztcbmltcG9ydCBwcmludEhvdXJseVNsaWRlciBmcm9tICcuL2hvdXJseVNsaWRlci9ob3VybHlTbGlkZXInO1xuaW1wb3J0IHByaW50V2VhdGhlclNsaWRlciBmcm9tICcuL3dlYXRoZXJTbGlkZXIvd2VhdGhlclNsaWRlcic7XG5cbmNvbnN0IGxvY2F0aW9uID0gJ03DoWxhZ2EnO1xubGV0IGxhc3RXZWF0aGVyRGF0YTtcbmxldCB1c2luZ0ZhaHJlbmhlaXQgPSBmYWxzZTtcbmxldCBjdXJyZW50RGF5SW5kZXggPSAwO1xuLyoqXG4gKiBQcmludCBhbGwgdGhlIHdlYXRoZXIgYXBwXG4gKiBTbGlkZXMgdGhlIHdlYXRoZXIgYXBwIGluIGFuZCBvdXRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcHJpbnRXZWF0aGVyQXBwKCkge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTsgLy8gR2V0IHdlYXRoZXIgZGF0YVxuICBpZiAod2VhdGhlckRhdGEuZXJyb3IpIHsgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIHByaW50IGl0IGFuZCByZXR1cm5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGA3ZTM5ZDE1YV8wYCx3ZWF0aGVyRGF0YS5lcnJvcikpO1xuICAgIHJldHVybjtcbiAgfVxuICBsYXN0V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YTsgLy8gU2F2ZSB0aGUgbGFzdCB3ZWF0aGVyIGRhdGFcbiAgdXBkYXRlV2VhdGhlckFwcCgpOyAvLyBVcGRhdGUgdGhlIHdlYXRoZXIgYXBwXG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBhbGwgdGhlIHdlYXRoZXIgYXBwXG4gKiBIZWFkZXIgZGF0YSwgd2VhdGhlciBzbGlkZXIgYW5kIGhvdXJseSBzbGlkZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSB3ZWF0aGVyRGF0YVxuICovXG5mdW5jdGlvbiB1cGRhdGVXZWF0aGVyQXBwKCkge1xuICBjb25zdCBjdXJyZW50RGF5RGF0YSA9IGxhc3RXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtjdXJyZW50RGF5SW5kZXhdOyAvLyBHZXQgY3VycmVudCBkYXlcbiAgY29uc3QgY3VycmVudENpdHlOYW1lID0gbGFzdFdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7IC8vIEdldCBjdXJyZW50IGNpdHkgbmFtZVxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXlEYXRhLmRhdGUpOyAvLyBHZXQgY3VycmVudCBkYXRlXG4gIHByaW50SGVhZGVyRGF0YShjdXJyZW50Q2l0eU5hbWUsIGN1cnJlbnREYXRlKTsgLy8gUHJpbnQgaGVhZGVyIGRhdGFcbiAgcHJpbnRXZWF0aGVyU2xpZGVyKGN1cnJlbnREYXlEYXRhLmRheSk7IC8vIFByaW50IHdlYXRoZXIgc2xpZGVyXG4gIHByaW50SG91cmx5U2xpZGVyKGN1cnJlbnREYXlEYXRhKTsgLy8gUHJpbnQgaG91cmx5IHNsaWRlclxuICB1cGRhdGVVbml0cyh1c2luZ0ZhaHJlbmhlaXQgPyAnRicgOiAnwrBDJyk7IC8vIFVwZGF0ZSB1bml0c1xufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIGxhc3Qgd2VhdGhlciBkYXRhIHdpdGggdGhlIG5ldyBvbmVcbiAqIEBwYXJhbSB7T2JqZWN0fSB3ZWF0aGVyRGF0YVxuICovXG5mdW5jdGlvbiBzZXRMYXN0V2VhdGhlckRhdGEod2VhdGhlckRhdGEpIHtcbiAgbGFzdFdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGE7XG59XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB0ZW1wZXJhdHVyZSB1bml0cyBvZiB0aGUgYWxsIHRoZSB3ZWF0aGVyIGFwcFxuICogQHBhcmFtIHtib29sZWFufSBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIHNldEZhaHJlbmhlaXQoYm9vbGVhbikge1xuICB1c2luZ0ZhaHJlbmhlaXQgPSBib29sZWFuO1xuICB1cGRhdGVXZWF0aGVyQXBwKGxhc3RXZWF0aGVyRGF0YSk7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IGRheSBpbmRleFxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKi9cbmZ1bmN0aW9uIHNldEN1cnJlbnREYXlJbmRleChpbmRleCkge1xuICBjdXJyZW50RGF5SW5kZXggPSBpbmRleDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYWxsIHRoZSB1bml0cyBvZiB0aGUgd2VhdGhlciBhcHBcbiAqIEBwYXJhbSB7U3RyaW5nfSB1bml0c1xuICovXG5mdW5jdGlvbiB1cGRhdGVVbml0cyh1bml0cyA9ICfCsEMnKSB7XG4gIGNvbnN0IHVuaXRzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlcl9fdGVtcF9fdW5pdCcpO1xuICB1bml0c0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHVuaXRzO1xuICB9KTtcbn1cblxuZXhwb3J0IHtwcmludFdlYXRoZXJBcHAsXG4gIHVwZGF0ZVdlYXRoZXJBcHAsXG4gIHNldExhc3RXZWF0aGVyRGF0YSxcbiAgbGFzdFdlYXRoZXJEYXRhLFxuICB1c2luZ0ZhaHJlbmhlaXQsXG4gIHNldEZhaHJlbmhlaXQsXG4gIGN1cnJlbnREYXlJbmRleCxcbiAgc2V0Q3VycmVudERheUluZGV4LFxufTtcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBfMHg1NzhkKF8weDRlNmMxYSxfMHg1ODJhZjYpe3ZhciBfMHgzMTRjYmE9XzB4MzE0YygpO3JldHVybiBfMHg1NzhkPWZ1bmN0aW9uKF8weDU3OGQxMSxfMHgxMDVlNTEpe18weDU3OGQxMT1fMHg1NzhkMTEtMHgxYTI7dmFyIF8weDNiMzhiYz1fMHgzMTRjYmFbXzB4NTc4ZDExXTtyZXR1cm4gXzB4M2IzOGJjO30sXzB4NTc4ZChfMHg0ZTZjMWEsXzB4NTgyYWY2KTt9ZnVuY3Rpb24gXzB4MzE0Yygpe3ZhciBfMHgyZTlkMjE9Wydob3N0JywnX2Nvbm5lY3RlZCcsJ19jb25uZWN0VG9Ib3N0Tm93Jywnc3BsaXQnLFxcXCIvVXNlcnMvam9zZW1hcmlhLy52c2NvZGUtaW5zaWRlcnMvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0wLjAuMTk5L25vZGVfbW9kdWxlc1xcXCIsJ19rZXlTdHJSZWdFeHAnLCdhcnJheScsJ3RyYWNlJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCduZWdhdGl2ZVplcm8nLCdfcF9uYW1lJywnMTk2NTkyMnJZelZLSCcsJ19wcm9wZXJ0eU5hbWUnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywncmVzb2x2ZUdldHRlcnMnLCdyb290X2V4cF9pZCcsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdyZXBsYWNlJywndG90YWxTdHJMZW5ndGgnLCdyZWR1Y2VMaW1pdHMnLCdfV2ViU29ja2V0Q2xhc3MnLCdub3cnLCcuLi4nLCdtYXRjaCcsJ2RlcHRoJywnX3Byb3BlcnR5QWNjZXNzb3InLCdvbm1lc3NhZ2UnLCdvbm9wZW4nLCcxNzgwOE5QUHFUaCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdQT1NJVElWRV9JTkZJTklUWScsJ3R5cGUnLCdpbmRleCcsJ3N0YWNrVHJhY2VMaW1pdCcsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdnZXRXZWJTb2NrZXRDbGFzcycsJ21ldGhvZCcsJ19vYmplY3RUb1N0cmluZycsJ2ZvckVhY2gnLCdkYXRlJywnY2F0Y2gnLCcxMjcuMC4wLjEnLCdfcXVvdGVkUmVnRXhwJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ2xldmVsJywnZGF0YScsJ3VucmVmJywnX3JlY29ubmVjdFRpbWVvdXQnLCdjYXBwZWQnLCdyZW1peCcsJ2VudW1lcmFibGUnLCdoaXRzJywnY3JlYXRlJywnZWxhcHNlZCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ25vZGVNb2R1bGVzJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCd0b1N0cmluZycsJzQ0MTRYYmVzZGknLCcxMGl6UXVmdicsJ3BlcmZfaG9va3MnLCdlcnJvcicsJ3NldCcsJ2RlZmluZVByb3BlcnR5JywnbnVtYmVyJywnUmVnRXhwJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnbGVuZ3RoJywnX2Nvbm5lY3RpbmcnLCc4NzIxNTBSWlpMaGEnLCdfX2VzJysnTW9kdWxlJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnbmVnYXRpdmVJbmZpbml0eScsJ251bGwnLCdwYXJzZScsJ2V4cElkJywncmVsb2FkJywnX2FkZE9iamVjdFByb3BlcnR5JywnX3VuZGVmaW5lZCcsJ3NlcmlhbGl6ZScsJ2Jvb2xlYW4nLCdvYmplY3QnLCdob3N0bmFtZScsJ19jb25zb2xlX25pbmphJywnQm9vbGVhbicsJ2NvbmNhdCcsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ3N5bWJvbCcsJ19kYXRlVG9TdHJpbmcnLCdzdHJpbmcnLCduYW1lJywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnJywnbm9GdW5jdGlvbnMnLCd0aGVuJywnY291bnQnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCcyNGNJT0JZRycsJ3dzL2luZGV4LmpzJywnaXNBcnJheScsJzIxNTMxMjlXdVVOalgnLCdwcm9wcycsJ3NlbmQnLCdzb3J0UHJvcHMnLCdlbGVtZW50cycsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0Jywnc2xpY2UnLCdfc29ja2V0JywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdfcHJvcGVydHknLCdvbmNsb3NlJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdkaXNhYmxlZExvZycsJ19pc1ByaW1pdGl2ZVR5cGUnLCdhbGxTdHJMZW5ndGgnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnbWVzc2FnZScsJ2xvZycsJ1xcXFx4MjBzZXJ2ZXInLCdnZXR0ZXInLCdnbG9iYWwnLCdOdW1iZXInLCdjYXBwZWRFbGVtZW50cycsJ19hZGRQcm9wZXJ0eScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdfYWRkTG9hZE5vZGUnLCdwZXJmb3JtYW5jZScsJ2hhc093blByb3BlcnR5JywncmVhZHlTdGF0ZScsJ19jbGVhbk5vZGUnLCd1bmtub3duJywnTkVHQVRJVkVfSU5GSU5JVFknLCd2YWx1ZScsJ2luZGV4T2YnLCdwYXRoVG9GaWxlVVJMJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdfU3ltYm9sJywnX3NldE5vZGVMYWJlbCcsJ2hydGltZScsJ2pvaW4nLCdCdWZmZXInLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdwb3NpdGl2ZUluZmluaXR5JywnX2NhcElmU3RyaW5nJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19zZXROb2RlSWQnLCdzdHJpbmdpZnknLCdwYXRoJywnbnV4dCcsJ21hcCcsJ19XZWJTb2NrZXQnLCd1bmRlZmluZWQnLCdfaXNTZXQnLCdNYXAnLCdhdXRvRXhwYW5kTGltaXQnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfaXNBcnJheScsJ2JpZ2ludCcsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnY29uc29sZScsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJNYWNCb29rLVByby1kZS1Kb3NlLmxvY2FsXFxcIixcXFwiMTkyLjE2OC4xLjEzMVxcXCJdLCdjb25zdHJ1Y3RvcicsJ3RvTG93ZXJDYXNlJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnc3RyTGVuZ3RoJywndmVyc2lvbnMnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnX3dzJywnNjQyNjknLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnX2FsbG93ZWRUb1NlbmQnLCdwb3AnLCdwdXNoJywnMTY5MjM2MzY5MTQxNycsJzMzMnlwT29uRycsJzQ4NTE3NjJVeUpUaUknLCdfaW5Ccm93c2VyJywnc3RhY2snLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdhdXRvRXhwYW5kJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCd0aW1lRW5kJywnX3NvcnRQcm9wcycsJ2NhbGwnLCduYW4nLCdfaXNNYXAnLCdub2RlJywnRXJyb3InLCdvbmVycm9yJywnODgwOTMxN3lwWWF6cScsJ2dldCcsJ1NldCcsJ1dlYlNvY2tldCcsJ3dhcm4nLCdfbnVtYmVyUmVnRXhwJywndmFsdWVPZicsJzI2NVRGdVloaycsJ3Byb3RvdHlwZScsJ1N5bWJvbCcsJ3Jvb3RfZXhwJywnXFxcXHgyMGJyb3dzZXInLCdfcmVnRXhwVG9TdHJpbmcnLCd0aW1lJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdzdWJzdHInLCdwYXJlbnQnLCdjdXJyZW50JywnU3RyaW5nJywnZGVmYXVsdCcsJ19zZW5kRXJyb3JNZXNzYWdlJywnZnVuY05hbWUnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ3Byb2Nlc3MnLCdfcF8nLCdfdHlwZScsJ3BvcnQnLCdjbG9zZScsJ19wX2xlbmd0aCcsJ2xvY2F0aW9uJywnZnVuY3Rpb24nLCd3czovLycsJ19pc1VuZGVmaW5lZCcsJ3Rlc3QnLCd0aW1lU3RhbXAnXTtfMHgzMTRjPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDJlOWQyMTt9O3JldHVybiBfMHgzMTRjKCk7fXZhciBfMHgzYmE4M2Q9XzB4NTc4ZDsoZnVuY3Rpb24oXzB4MTA4NmZiLF8weDEzMTdkMSl7dmFyIF8weDQxYTE1Mj1fMHg1NzhkLF8weDFkZTgwYj1fMHgxMDg2ZmIoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDE1YWEzMT1wYXJzZUludChfMHg0MWExNTIoMHgxYzcpKS8weDEqKC1wYXJzZUludChfMHg0MWExNTIoMHgyMjApKS8weDIpK3BhcnNlSW50KF8weDQxYTE1MigweDIwMCkpLzB4MyoocGFyc2VJbnQoXzB4NDFhMTUyKDB4MWIwKSkvMHg0KSstcGFyc2VJbnQoXzB4NDFhMTUyKDB4MjJiKSkvMHg1Ky1wYXJzZUludChfMHg0MWExNTIoMHgxYjEpKS8weDYrLXBhcnNlSW50KF8weDQxYTE1MigweDFlZSkpLzB4NyooLXBhcnNlSW50KF8weDQxYTE1MigweDI0YikpLzB4OCkrcGFyc2VJbnQoXzB4NDFhMTUyKDB4MWMwKSkvMHg5Ky1wYXJzZUludChfMHg0MWExNTIoMHgyMjEpKS8weGEqKHBhcnNlSW50KF8weDQxYTE1MigweDI0ZSkpLzB4Yik7aWYoXzB4MTVhYTMxPT09XzB4MTMxN2QxKWJyZWFrO2Vsc2UgXzB4MWRlODBiWydwdXNoJ10oXzB4MWRlODBiWydzaGlmdCddKCkpO31jYXRjaChfMHgzZWNjODQpe18weDFkZTgwYlsncHVzaCddKF8weDFkZTgwYlsnc2hpZnQnXSgpKTt9fX0oXzB4MzE0YywweDg2NWY0KSk7dmFyIHVlPU9iamVjdFtfMHgzYmE4M2QoMHgyMWEpXSx0ZT1PYmplY3RbXzB4M2JhODNkKDB4MjI1KV0saGU9T2JqZWN0W18weDNiYTgzZCgweDI0NCldLGxlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLGZlPU9iamVjdFsnZ2V0UHJvdG90eXBlT2YnXSxfZT1PYmplY3RbXzB4M2JhODNkKDB4MWM4KV1bXzB4M2JhODNkKDB4MjY5KV0scGU9KF8weDVlMGEyYyxfMHg3NWEyMTgsXzB4MTM4ZTUyLF8weDNkZjRjYik9Pnt2YXIgXzB4NmYzZjVjPV8weDNiYTgzZDtpZihfMHg3NWEyMTgmJnR5cGVvZiBfMHg3NWEyMTg9PV8weDZmM2Y1YygweDIzYSl8fHR5cGVvZiBfMHg3NWEyMTg9PV8weDZmM2Y1YygweDFkZSkpe2ZvcihsZXQgXzB4MWFjZDM4IG9mIGxlKF8weDc1YTIxOCkpIV9lW18weDZmM2Y1YygweDFiYSldKF8weDVlMGEyYyxfMHgxYWNkMzgpJiZfMHgxYWNkMzghPT1fMHgxMzhlNTImJnRlKF8weDVlMGEyYyxfMHgxYWNkMzgseydnZXQnOigpPT5fMHg3NWEyMThbXzB4MWFjZDM4XSwnZW51bWVyYWJsZSc6IShfMHgzZGY0Y2I9aGUoXzB4NzVhMjE4LF8weDFhY2QzOCkpfHxfMHgzZGY0Y2JbXzB4NmYzZjVjKDB4MjE4KV19KTt9cmV0dXJuIF8weDVlMGEyYzt9LG5lPShfMHg1YjdjODksXzB4MTZjYzU5LF8weDMyN2UwNik9PihfMHgzMjdlMDY9XzB4NWI3Yzg5IT1udWxsP3VlKGZlKF8weDViN2M4OSkpOnt9LHBlKF8weDE2Y2M1OXx8IV8weDViN2M4OXx8IV8weDViN2M4OVtfMHgzYmE4M2QoMHgyMmMpXT90ZShfMHgzMjdlMDYsXzB4M2JhODNkKDB4MWQzKSx7J3ZhbHVlJzpfMHg1YjdjODksJ2VudW1lcmFibGUnOiEweDB9KTpfMHgzMjdlMDYsXzB4NWI3Yzg5KSksUT1jbGFzc3tjb25zdHJ1Y3RvcihfMHgxMDVkMmIsXzB4MjA2NzZiLF8weDQwNTcxMixfMHgyYzU2NGMpe3ZhciBfMHg0OGU3MGQ9XzB4M2JhODNkO3RoaXNbXzB4NDhlNzBkKDB4MjYyKV09XzB4MTA1ZDJiLHRoaXNbXzB4NDhlNzBkKDB4MWUzKV09XzB4MjA2NzZiLHRoaXNbXzB4NDhlNzBkKDB4MWRhKV09XzB4NDA1NzEyLHRoaXNbJ25vZGVNb2R1bGVzJ109XzB4MmM1NjRjLHRoaXNbXzB4NDhlNzBkKDB4MWFjKV09ITB4MCx0aGlzW18weDQ4ZTcwZCgweDI1OSldPSEweDAsdGhpc1tfMHg0OGU3MGQoMHgxZTQpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzW18weDQ4ZTcwZCgweDFiMildPSEhdGhpc1tfMHg0OGU3MGQoMHgyNjIpXVtfMHg0OGU3MGQoMHgxYzMpXSx0aGlzWydfV2ViU29ja2V0Q2xhc3MnXT1udWxsLHRoaXNbXzB4NDhlNzBkKDB4MjU2KV09MHgwLHRoaXNbXzB4NDhlNzBkKDB4MWNlKV09MHgxNCx0aGlzW18weDQ4ZTcwZCgweDIyZCldPSdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0Jyx0aGlzW18weDQ4ZTcwZCgweDFkNCldPSh0aGlzW18weDQ4ZTcwZCgweDFiMildP18weDQ4ZTcwZCgweDFkNik6XzB4NDhlNzBkKDB4MWI3KSkrdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXTt9YXN5bmNbXzB4M2JhODNkKDB4MjA5KV0oKXt2YXIgXzB4NTg2NzM4PV8weDNiYTgzZDtpZih0aGlzW18weDU4NjczOCgweDFmOCldKXJldHVybiB0aGlzW18weDU4NjczOCgweDFmOCldO2xldCBfMHg5MDg1YWI7aWYodGhpc1tfMHg1ODY3MzgoMHgxYjIpXSlfMHg5MDg1YWI9dGhpc1tfMHg1ODY3MzgoMHgyNjIpXVsnV2ViU29ja2V0J107ZWxzZXtpZih0aGlzW18weDU4NjczOCgweDI2MildW18weDU4NjczOCgweDFkNyldPy5bJ19XZWJTb2NrZXQnXSlfMHg5MDg1YWI9dGhpc1tfMHg1ODY3MzgoMHgyNjIpXVtfMHg1ODY3MzgoMHgxZDcpXT8uW18weDU4NjczOCgweDI4MCldO2Vsc2UgdHJ5e2xldCBfMHg1YjMzYmE9YXdhaXQgaW1wb3J0KF8weDU4NjczOCgweDI3ZCkpO18weDkwODVhYj0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoJ3VybCcpKVtfMHg1ODY3MzgoMHgyNzApXShfMHg1YjMzYmFbJ2pvaW4nXSh0aGlzW18weDU4NjczOCgweDIxZCldLF8weDU4NjczOCgweDI0YykpKVtfMHg1ODY3MzgoMHgyMWYpXSgpKSlbXzB4NTg2NzM4KDB4MWQzKV07fWNhdGNoe3RyeXtfMHg5MDg1YWI9cmVxdWlyZShyZXF1aXJlKF8weDU4NjczOCgweDI3ZCkpW18weDU4NjczOCgweDI3NSldKHRoaXNbXzB4NTg2NzM4KDB4MjFkKV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4NTg2NzM4KDB4MjFjKSk7fX19cmV0dXJuIHRoaXNbXzB4NTg2NzM4KDB4MWY4KV09XzB4OTA4NWFiLF8weDkwODVhYjt9WydfY29ubmVjdFRvSG9zdE5vdyddKCl7dmFyIF8weDJiZmE0Yj1fMHgzYmE4M2Q7dGhpc1tfMHgyYmZhNGIoMHgyMmEpXXx8dGhpc1tfMHgyYmZhNGIoMHgxZTQpXXx8dGhpc1tfMHgyYmZhNGIoMHgyNTYpXT49dGhpc1tfMHgyYmZhNGIoMHgxY2UpXXx8KHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDAsdGhpc1tfMHgyYmZhNGIoMHgyNTYpXSsrLHRoaXNbJ193cyddPW5ldyBQcm9taXNlKChfMHg0NGFmMjQsXzB4MjYxOWEwKT0+e3ZhciBfMHgzN2JiMTk9XzB4MmJmYTRiO3RoaXNbXzB4MzdiYjE5KDB4MjA5KV0oKVtfMHgzN2JiMTkoMHgyNDcpXShfMHg2ZTMxMjI9Pnt2YXIgXzB4MjYzYTA3PV8weDM3YmIxOTtsZXQgXzB4MTdhOTVjPW5ldyBfMHg2ZTMxMjIoXzB4MjYzYTA3KDB4MWRmKSt0aGlzW18weDI2M2EwNygweDFlMyldKyc6Jyt0aGlzW18weDI2M2EwNygweDFkYSldKTtfMHgxN2E5NWNbXzB4MjYzYTA3KDB4MWJmKV09KCk9Pnt2YXIgXzB4MWJjNDFlPV8weDI2M2EwNzt0aGlzW18weDFiYzQxZSgweDFhYyldPSEweDEsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgxN2E5NWMpLHRoaXNbXzB4MWJjNDFlKDB4MWViKV0oKSxfMHgyNjE5YTAobmV3IEVycm9yKF8weDFiYzQxZSgweDIyZSkpKTt9LF8weDE3YTk1Y1tfMHgyNjNhMDcoMHgxZmYpXT0oKT0+e3ZhciBfMHg1NjAzNGI9XzB4MjYzYTA3O3RoaXNbJ19pbkJyb3dzZXInXXx8XzB4MTdhOTVjW18weDU2MDM0YigweDI1NSldJiZfMHgxN2E5NWNbXzB4NTYwMzRiKDB4MjU1KV1bJ3VucmVmJ10mJl8weDE3YTk1Y1tfMHg1NjAzNGIoMHgyNTUpXVsndW5yZWYnXSgpLF8weDQ0YWYyNChfMHgxN2E5NWMpO30sXzB4MTdhOTVjW18weDI2M2EwNygweDI1OCldPSgpPT57dmFyIF8weGJhNDg5OD1fMHgyNjNhMDc7dGhpc1tfMHhiYTQ4OTgoMHgyNTkpXT0hMHgwLHRoaXNbXzB4YmE0ODk4KDB4MjJmKV0oXzB4MTdhOTVjKSx0aGlzW18weGJhNDg5OCgweDFlYildKCk7fSxfMHgxN2E5NWNbXzB4MjYzYTA3KDB4MWZlKV09XzB4NDQzMmQ3PT57dmFyIF8weGNmMGE5ND1fMHgyNjNhMDc7dHJ5e18weDQ0MzJkNyYmXzB4NDQzMmQ3W18weGNmMGE5NCgweDIxMyldJiZ0aGlzWydfaW5Ccm93c2VyJ10mJkpTT05bXzB4Y2YwYTk0KDB4MjMzKV0oXzB4NDQzMmQ3W18weGNmMGE5NCgweDIxMyldKVtfMHhjZjBhOTQoMHgyMGEpXT09PV8weGNmMGE5NCgweDIzNSkmJnRoaXNbXzB4Y2YwYTk0KDB4MjYyKV1bXzB4Y2YwYTk0KDB4MWRkKV1bJ3JlbG9hZCddKCk7fWNhdGNoe319O30pW18weDM3YmIxOSgweDI0NyldKF8weDMzNGZhYj0+KHRoaXNbXzB4MzdiYjE5KDB4MWU0KV09ITB4MCx0aGlzW18weDM3YmIxOSgweDIyYSldPSEweDEsdGhpc1tfMHgzN2JiMTkoMHgyNTkpXT0hMHgxLHRoaXNbXzB4MzdiYjE5KDB4MWFjKV09ITB4MCx0aGlzW18weDM3YmIxOSgweDI1NildPTB4MCxfMHgzMzRmYWIpKVtfMHgzN2JiMTkoMHgyMGUpXShfMHgzMjkzMTU9Pih0aGlzW18weDM3YmIxOSgweDFlNCldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLGNvbnNvbGVbXzB4MzdiYjE5KDB4MWM0KV0oXzB4MzdiYjE5KDB4MjFlKSt0aGlzW18weDM3YmIxOSgweDIyZCldKSxfMHgyNjE5YTAobmV3IEVycm9yKCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnKyhfMHgzMjkzMTUmJl8weDMyOTMxNVsnbWVzc2FnZSddKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MTk2MTgwKXt2YXIgXzB4ZWYzMGM3PV8weDNiYTgzZDt0aGlzW18weGVmMzBjNygweDFlNCldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxO3RyeXtfMHgxOTYxODBbJ29uY2xvc2UnXT1udWxsLF8weDE5NjE4MFsnb25lcnJvciddPW51bGwsXzB4MTk2MTgwW18weGVmMzBjNygweDFmZildPW51bGw7fWNhdGNoe310cnl7XzB4MTk2MTgwW18weGVmMzBjNygweDI2YSldPDB4MiYmXzB4MTk2MTgwW18weGVmMzBjNygweDFkYildKCk7fWNhdGNoe319W18weDNiYTgzZCgweDFlYildKCl7dmFyIF8weDZhNzE1Nz1fMHgzYmE4M2Q7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4NmE3MTU3KDB4MjE1KV0pLCEodGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1tfMHg2YTcxNTcoMHgxY2UpXSkmJih0aGlzW18weDZhNzE1NygweDIxNSldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4NGFlNWZkPV8weDZhNzE1Nzt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbXzB4NGFlNWZkKDB4MjJhKV18fCh0aGlzW18weDRhZTVmZCgweDFlNSldKCksdGhpc1tfMHg0YWU1ZmQoMHgxYTkpXT8uWydjYXRjaCddKCgpPT50aGlzW18weDRhZTVmZCgweDFlYildKCkpKTt9LDB4MWY0KSx0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weDZhNzE1NygweDIxNCldJiZ0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weDZhNzE1NygweDIxNCldKCkpO31hc3luY1snc2VuZCddKF8weDQyMzI2Nil7dmFyIF8weDMxNWE3OD1fMHgzYmE4M2Q7dHJ5e2lmKCF0aGlzW18weDMxNWE3OCgweDFhYyldKXJldHVybjt0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddJiZ0aGlzWydfY29ubmVjdFRvSG9zdE5vdyddKCksKGF3YWl0IHRoaXNbXzB4MzE1YTc4KDB4MWE5KV0pWydzZW5kJ10oSlNPTltfMHgzMTVhNzgoMHgyN2MpXShfMHg0MjMyNjYpKTt9Y2F0Y2goXzB4M2JiMWQyKXtjb25zb2xlW18weDMxNWE3OCgweDFjNCldKHRoaXNbXzB4MzE1YTc4KDB4MWQ0KV0rJzpcXFxceDIwJysoXzB4M2JiMWQyJiZfMHgzYmIxZDJbJ21lc3NhZ2UnXSkpLHRoaXNbXzB4MzE1YTc4KDB4MWFjKV09ITB4MSx0aGlzW18weDMxNWE3OCgweDFlYildKCk7fX19O2Z1bmN0aW9uIFYoXzB4MTRjMDFiLF8weDE5Mjc1NSxfMHg0YTRiNmQsXzB4MzBmMmYxLF8weDM4YWIyZCl7dmFyIF8weDNiOGRjNz1fMHgzYmE4M2Q7bGV0IF8weDRlNWYzNz1fMHg0YTRiNmRbJ3NwbGl0J10oJywnKVtfMHgzYjhkYzcoMHgyN2YpXShfMHg0YThkNTI9Pnt2YXIgXzB4Mzg0MGMyPV8weDNiOGRjNzt0cnl7XzB4MTRjMDFiW18weDM4NDBjMigweDFhYildfHwoKF8weDM4YWIyZD09PSduZXh0LmpzJ3x8XzB4MzhhYjJkPT09XzB4Mzg0MGMyKDB4MjE3KXx8XzB4MzhhYjJkPT09J2FzdHJvJykmJihfMHgzOGFiMmQrPV8weDE0YzAxYlsncHJvY2VzcyddPy5bXzB4Mzg0MGMyKDB4MWE3KV0/Llsnbm9kZSddP18weDM4NDBjMigweDI2MCk6XzB4Mzg0MGMyKDB4MWNiKSksXzB4MTRjMDFiW18weDM4NDBjMigweDFhYildPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHgzOGFiMmR9KTtsZXQgXzB4MmVjZDFjPW5ldyBRKF8weDE0YzAxYixfMHgxOTI3NTUsXzB4NGE4ZDUyLF8weDMwZjJmMSk7cmV0dXJuIF8weDJlY2QxY1tfMHgzODQwYzIoMHgyNTApXVsnYmluZCddKF8weDJlY2QxYyk7fWNhdGNoKF8weDU4MDI4NCl7cmV0dXJuIGNvbnNvbGVbXzB4Mzg0MGMyKDB4MWM0KV0oXzB4Mzg0MGMyKDB4MjUzKSxfMHg1ODAyODQmJl8weDU4MDI4NFtfMHgzODQwYzIoMHgyNWUpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4MWMxMWVmPT5fMHg0ZTVmMzdbXzB4M2I4ZGM3KDB4MjBjKV0oXzB4MTYzYTIyPT5fMHgxNjNhMjIoXzB4MWMxMWVmKSk7fWZ1bmN0aW9uIEgoXzB4NTU3NDc0KXt2YXIgXzB4NDAzYjhmPV8weDNiYTgzZDtsZXQgXzB4NGU0MmM1PWZ1bmN0aW9uKF8weDFlMDJmOSxfMHhjMDliNGEpe3JldHVybiBfMHhjMDliNGEtXzB4MWUwMmY5O30sXzB4NGU2OGUwO2lmKF8weDU1NzQ3NFtfMHg0MDNiOGYoMHgyNjgpXSlfMHg0ZTY4ZTA9ZnVuY3Rpb24oKXt2YXIgXzB4MmVhZWMwPV8weDQwM2I4ZjtyZXR1cm4gXzB4NTU3NDc0WydwZXJmb3JtYW5jZSddW18weDJlYWVjMCgweDFmOSldKCk7fTtlbHNle2lmKF8weDU1NzQ3NFsncHJvY2VzcyddJiZfMHg1NTc0NzRbXzB4NDAzYjhmKDB4MWQ3KV1bXzB4NDAzYjhmKDB4Mjc0KV0pXzB4NGU2OGUwPWZ1bmN0aW9uKCl7dmFyIF8weDJmNzE1Mj1fMHg0MDNiOGY7cmV0dXJuIF8weDU1NzQ3NFtfMHgyZjcxNTIoMHgxZDcpXVtfMHgyZjcxNTIoMHgyNzQpXSgpO30sXzB4NGU0MmM1PWZ1bmN0aW9uKF8weGYyOTEyNCxfMHgzMmZjNGIpe3JldHVybiAweDNlOCooXzB4MzJmYzRiWzB4MF0tXzB4ZjI5MTI0WzB4MF0pKyhfMHgzMmZjNGJbMHgxXS1fMHhmMjkxMjRbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4MmJiNjNjfT1yZXF1aXJlKF8weDQwM2I4ZigweDIyMikpO18weDRlNjhlMD1mdW5jdGlvbigpe3JldHVybiBfMHgyYmI2M2NbJ25vdyddKCk7fTt9Y2F0Y2h7XzB4NGU2OGUwPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4NGU0MmM1LCd0aW1lU3RhbXAnOl8weDRlNjhlMCwnbm93JzooKT0+RGF0ZVtfMHg0MDNiOGYoMHgxZjkpXSgpfTt9ZnVuY3Rpb24gWChfMHg0ZWUyNjgsXzB4MWY2YmNkLF8weDI2YjA5Yil7dmFyIF8weDJkNGQyOD1fMHgzYmE4M2Q7aWYoXzB4NGVlMjY4WydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXSE9PXZvaWQgMHgwKXJldHVybiBfMHg0ZWUyNjhbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddO2xldCBfMHgyYWFkOTA9XzB4NGVlMjY4Wydwcm9jZXNzJ10/LltfMHgyZDRkMjgoMHgxYTcpXT8uW18weDJkNGQyOCgweDFiZCldO3JldHVybiBfMHgyYWFkOTAmJl8weDI2YjA5Yj09PV8weDJkNGQyOCgweDI3ZSk/XzB4NGVlMjY4W18weDJkNGQyOCgweDIwMildPSEweDE6XzB4NGVlMjY4WydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXT1fMHgyYWFkOTB8fCFfMHgxZjZiY2R8fF8weDRlZTI2OFtfMHgyZDRkMjgoMHgxZGQpXT8uW18weDJkNGQyOCgweDIzYildJiZfMHgxZjZiY2RbJ2luY2x1ZGVzJ10oXzB4NGVlMjY4W18weDJkNGQyOCgweDFkZCldW18weDJkNGQyOCgweDIzYildKSxfMHg0ZWUyNjhbXzB4MmQ0ZDI4KDB4MjAyKV07fSgoXzB4Mjg5ZjU0LF8weDI5Nzg5ZSxfMHgyZjU0OGYsXzB4MmZiZDllLF8weDIxZGQ1ZSxfMHg1OTIyNTMsXzB4M2Y1MmZkLF8weDQxZGQ2ZCxfMHgxMTg5ZmYpPT57dmFyIF8weDMxMjQ0Mj1fMHgzYmE4M2Q7aWYoXzB4Mjg5ZjU0W18weDMxMjQ0MigweDIzYyldKXJldHVybiBfMHgyODlmNTRbXzB4MzEyNDQyKDB4MjNjKV07aWYoIVgoXzB4Mjg5ZjU0LF8weDQxZGQ2ZCxfMHgyMWRkNWUpKXJldHVybiBfMHgyODlmNTRbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDI4OWY1NFtfMHgzMTI0NDIoMHgyM2MpXTtsZXQgXzB4ZGY2MDI9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4NTQ0MjUwPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn0sXzB4Y2Q2ZjQxPUgoXzB4Mjg5ZjU0KSxfMHg1OTYxZGQ9XzB4Y2Q2ZjQxW18weDMxMjQ0MigweDIxYildLF8weDMyYzJiZj1fMHhjZDZmNDFbXzB4MzEyNDQyKDB4MWUyKV0sXzB4M2ZjMGU0PV8weGNkNmY0MVtfMHgzMTI0NDIoMHgxZjkpXSxfMHgyMWQzNmE9eydoaXRzJzp7fSwndHMnOnt9fSxfMHg0NzQxNWY9XzB4ZTk4NjQ1PT57XzB4MjFkMzZhWyd0cyddW18weGU5ODY0NV09XzB4MzJjMmJmKCk7fSxfMHgyOTQ1MjA9KF8weDE2ODg3OSxfMHgzNjk2ODUpPT57bGV0IF8weDQ0NzA1OD1fMHgyMWQzNmFbJ3RzJ11bXzB4MzY5Njg1XTtpZihkZWxldGUgXzB4MjFkMzZhWyd0cyddW18weDM2OTY4NV0sXzB4NDQ3MDU4KXtsZXQgXzB4MjhjOGQ2PV8weDU5NjFkZChfMHg0NDcwNTgsXzB4MzJjMmJmKCkpO18weDExNTJjMChfMHgzMGY1Y2UoJ3RpbWUnLF8weDE2ODg3OSxfMHgzZmMwZTQoKSxfMHgxMmVjYzIsW18weDI4YzhkNl0sXzB4MzY5Njg1KSk7fX0sXzB4N2I2ZTBlPV8weDIxODM2ND0+XzB4NTEzYWM1PT57dmFyIF8weDExNmZhNT1fMHgzMTI0NDI7dHJ5e18weDQ3NDE1ZihfMHg1MTNhYzUpLF8weDIxODM2NChfMHg1MTNhYzUpO31maW5hbGx5e18weDI4OWY1NFtfMHgxMTZmYTUoMHgyOGEpXVtfMHgxMTZmYTUoMHgxY2QpXT1fMHgyMTgzNjQ7fX0sXzB4M2M4ZWY1PV8weDNjZDQyYT0+XzB4NDc2YzRiPT57dmFyIF8weDUyNDQwNj1fMHgzMTI0NDI7dHJ5e2xldCBbXzB4MWYzZjVjLF8weGFlZWJkZF09XzB4NDc2YzRiW18weDUyNDQwNigweDFlNildKCc6bG9nUG9pbnRJZDonKTtfMHgyOTQ1MjAoXzB4YWVlYmRkLF8weDFmM2Y1YyksXzB4M2NkNDJhKF8weDFmM2Y1Yyk7fWZpbmFsbHl7XzB4Mjg5ZjU0Wydjb25zb2xlJ11bXzB4NTI0NDA2KDB4MWI4KV09XzB4M2NkNDJhO319O18weDI4OWY1NFtfMHgzMTI0NDIoMHgyM2MpXT17J2NvbnNvbGVMb2cnOihfMHg1ZTY2NGIsXzB4MzhhZWJmKT0+e3ZhciBfMHhlMDYzZTc9XzB4MzEyNDQyO18weDI4OWY1NFtfMHhlMDYzZTcoMHgyOGEpXVtfMHhlMDYzZTcoMHgyNWYpXVtfMHhlMDYzZTcoMHgyNDMpXSE9PV8weGUwNjNlNygweDI1YSkmJl8weDExNTJjMChfMHgzMGY1Y2UoXzB4ZTA2M2U3KDB4MjVmKSxfMHg1ZTY2NGIsXzB4M2ZjMGU0KCksXzB4MTJlY2MyLF8weDM4YWViZikpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDVjMzEyZixfMHg0MzI5NmIpPT57dmFyIF8weDdiZDViPV8weDMxMjQ0MjtfMHgyODlmNTRbXzB4N2JkNWIoMHgyOGEpXVtfMHg3YmQ1YigweDI1ZildW18weDdiZDViKDB4MjQzKV0hPT0nZGlzYWJsZWRUcmFjZScmJl8weDExNTJjMChfMHgzMGY1Y2UoXzB4N2JkNWIoMHgxZWEpLF8weDVjMzEyZixfMHgzZmMwZTQoKSxfMHgxMmVjYzIsXzB4NDMyOTZiKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDQwYTliZj1fMHgzMTI0NDI7XzB4Mjg5ZjU0W18weDQwYTliZigweDI4YSldW18weDQwYTliZigweDFjZCldPV8weDdiNmUwZShfMHgyODlmNTRbJ2NvbnNvbGUnXVtfMHg0MGE5YmYoMHgxY2QpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDI3MjNjNT1fMHgzMTI0NDI7XzB4Mjg5ZjU0W18weDI3MjNjNSgweDI4YSldW18weDI3MjNjNSgweDFiOCldPV8weDNjOGVmNShfMHgyODlmNTRbXzB4MjcyM2M1KDB4MjhhKV1bXzB4MjcyM2M1KDB4MWI4KV0pO30sJ2F1dG9Mb2cnOihfMHg4ZWE2ZixfMHgxYzIyZTYpPT57dmFyIF8weDNkNWE5Yj1fMHgzMTI0NDI7XzB4MTE1MmMwKF8weDMwZjVjZShfMHgzZDVhOWIoMHgyNWYpLF8weDFjMjJlNixfMHgzZmMwZTQoKSxfMHgxMmVjYzIsW18weDhlYTZmXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4MmViOTAxLF8weDM1Mzc3Myk9Pnt2YXIgXzB4NGY3M2VjPV8weDMxMjQ0MjtfMHgxMTUyYzAoXzB4MzBmNWNlKF8weDRmNzNlYygweDI1ZiksXzB4MmViOTAxLF8weDNmYzBlNCgpLF8weDEyZWNjMixfMHgzNTM3NzMpKTt9LCdhdXRvVHJhY2UnOihfMHg0MjY2MTAsXzB4MmQ4ZGJiKT0+e3ZhciBfMHg1ZGRiYWQ9XzB4MzEyNDQyO18weDExNTJjMChfMHgzMGY1Y2UoXzB4NWRkYmFkKDB4MWVhKSxfMHgyZDhkYmIsXzB4M2ZjMGU0KCksXzB4MTJlY2MyLFtfMHg0MjY2MTBdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDQyNWUwMCxfMHgyMzlmZmUpPT57XzB4MTE1MmMwKF8weDMwZjVjZSgndHJhY2UnLF8weDQyNWUwMCxfMHgzZmMwZTQoKSxfMHgxMmVjYzIsXzB4MjM5ZmZlKSk7fSwnYXV0b1RpbWUnOihfMHg1NGY0NDUsXzB4Mzg2NWEzLF8weDMzNmZlNSk9PntfMHg0NzQxNWYoXzB4MzM2ZmU1KTt9LCdhdXRvVGltZUVuZCc6KF8weDI1YWIyYyxfMHgyZjE5NTEsXzB4MTcwNWVjKT0+e18weDI5NDUyMChfMHgyZjE5NTEsXzB4MTcwNWVjKTt9fTtsZXQgXzB4MTE1MmMwPVYoXzB4Mjg5ZjU0LF8weDI5Nzg5ZSxfMHgyZjU0OGYsXzB4MmZiZDllLF8weDIxZGQ1ZSksXzB4MTJlY2MyPV8weDI4OWY1NFsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddO2NsYXNzIF8weDFkMWY5MHtjb25zdHJ1Y3Rvcigpe3ZhciBfMHgxMWFkZjk9XzB4MzEyNDQyO3RoaXNbXzB4MTFhZGY5KDB4MWU4KV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDExYWRmOSgweDFjNSldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHgxMWFkZjkoMHgyMTApXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDExYWRmOSgweDIzNyldPV8weDI4OWY1NFtfMHgxMWFkZjkoMHgyODEpXSx0aGlzW18weDExYWRmOSgweDI3NyldPV8weDI4OWY1NFsnSFRNTEFsbENvbGxlY3Rpb24nXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0W18weDExYWRmOSgweDI0NCldLHRoaXNbXzB4MTFhZGY5KDB4MjA3KV09T2JqZWN0W18weDExYWRmOSgweDIzMCldLHRoaXNbJ19TeW1ib2wnXT1fMHgyODlmNTRbXzB4MTFhZGY5KDB4MWM5KV0sdGhpc1tfMHgxMWFkZjkoMHgxY2MpXT1SZWdFeHBbXzB4MTFhZGY5KDB4MWM4KV1bXzB4MTFhZGY5KDB4MjFmKV0sdGhpc1tfMHgxMWFkZjkoMHgyNDEpXT1EYXRlWydwcm90b3R5cGUnXVtfMHgxMWFkZjkoMHgyMWYpXTt9W18weDMxMjQ0MigweDIzOCldKF8weDRkMGUxNSxfMHg1Mzg5YTYsXzB4MjU3MjA4LF8weDUyYzBiMyl7dmFyIF8weDJmM2Y2Nj1fMHgzMTI0NDIsXzB4MWFjMjJlPXRoaXMsXzB4NTlhYmM2PV8weDI1NzIwOFtfMHgyZjNmNjYoMHgxYjYpXTtmdW5jdGlvbiBfMHgzZGU2MTIoXzB4MWE5N2FhLF8weDE2OTdkNixfMHgyYTc3MzEpe3ZhciBfMHhkMTIzYj1fMHgyZjNmNjY7XzB4MTY5N2Q2Wyd0eXBlJ109XzB4ZDEyM2IoMHgyNmMpLF8weDE2OTdkNltfMHhkMTIzYigweDIyMyldPV8weDFhOTdhYVtfMHhkMTIzYigweDI1ZSldLF8weDE3MDYxNj1fMHgyYTc3MzFbJ25vZGUnXVtfMHhkMTIzYigweDFkMSldLF8weDJhNzczMVtfMHhkMTIzYigweDFiZCldW18weGQxMjNiKDB4MWQxKV09XzB4MTY5N2Q2LF8weDFhYzIyZVsnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDE2OTdkNixfMHgyYTc3MzEpO310cnl7XzB4MjU3MjA4W18weDJmM2Y2NigweDIxMildKyssXzB4MjU3MjA4W18weDJmM2Y2NigweDFiNildJiZfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MjY2KV1bJ3B1c2gnXShfMHg1Mzg5YTYpO3ZhciBfMHg0MmJlNWUsXzB4Mjg0NjE0LF8weDMzYTJhMyxfMHgxMWY0MTksXzB4MjYyNzI4PVtdLF8weDViOGNkNz1bXSxfMHg0ODE1ZDQsXzB4OTI4Yzc2PXRoaXNbXzB4MmYzZjY2KDB4MWQ5KV0oXzB4NTM4OWE2KSxfMHgyZDRiN2Q9XzB4OTI4Yzc2PT09XzB4MmYzZjY2KDB4MWU5KSxfMHgzYjA5YmE9ITB4MSxfMHg0ZGQ1OGQ9XzB4OTI4Yzc2PT09XzB4MmYzZjY2KDB4MWRlKSxfMHg1ZjIyOGE9dGhpc1tfMHgyZjNmNjYoMHgyNWIpXShfMHg5MjhjNzYpLF8weDNiNDY3YT10aGlzW18weDJmM2Y2NigweDI4OSldKF8weDkyOGM3NiksXzB4MmJjMmUxPV8weDVmMjI4YXx8XzB4M2I0NjdhLF8weDc2Y2JkMT17fSxfMHgyODdjYzQ9MHgwLF8weDVjZDc3Yz0hMHgxLF8weDE3MDYxNixfMHg4ZmYyNDU9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDI1NzIwOFsnZGVwdGgnXSl7aWYoXzB4MmQ0YjdkKXtpZihfMHgyODQ2MTQ9XzB4NTM4OWE2WydsZW5ndGgnXSxfMHgyODQ2MTQ+XzB4MjU3MjA4WydlbGVtZW50cyddKXtmb3IoXzB4MzNhMmEzPTB4MCxfMHgxMWY0MTk9XzB4MjU3MjA4W18weDJmM2Y2NigweDI1MildLF8weDQyYmU1ZT1fMHgzM2EyYTM7XzB4NDJiZTVlPF8weDExZjQxOTtfMHg0MmJlNWUrKylfMHg1YjhjZDdbXzB4MmYzZjY2KDB4MWFlKV0oXzB4MWFjMjJlW18weDJmM2Y2NigweDI2NSldKF8weDI2MjcyOCxfMHg1Mzg5YTYsXzB4OTI4Yzc2LF8weDQyYmU1ZSxfMHgyNTcyMDgpKTtfMHg0ZDBlMTVbXzB4MmYzZjY2KDB4MjY0KV09ITB4MDt9ZWxzZXtmb3IoXzB4MzNhMmEzPTB4MCxfMHgxMWY0MTk9XzB4Mjg0NjE0LF8weDQyYmU1ZT1fMHgzM2EyYTM7XzB4NDJiZTVlPF8weDExZjQxOTtfMHg0MmJlNWUrKylfMHg1YjhjZDdbXzB4MmYzZjY2KDB4MWFlKV0oXzB4MWFjMjJlW18weDJmM2Y2NigweDI2NSldKF8weDI2MjcyOCxfMHg1Mzg5YTYsXzB4OTI4Yzc2LF8weDQyYmU1ZSxfMHgyNTcyMDgpKTt9XzB4MjU3MjA4W18weDJmM2Y2NigweDI0OSldKz1fMHg1YjhjZDdbXzB4MmYzZjY2KDB4MjI5KV07fWlmKCEoXzB4OTI4Yzc2PT09XzB4MmYzZjY2KDB4MjMyKXx8XzB4OTI4Yzc2PT09XzB4MmYzZjY2KDB4MjgxKSkmJiFfMHg1ZjIyOGEmJl8weDkyOGM3NiE9PV8weDJmM2Y2NigweDFkMikmJl8weDkyOGM3NiE9PV8weDJmM2Y2NigweDI3NikmJl8weDkyOGM3NiE9PV8weDJmM2Y2NigweDI4OCkpe3ZhciBfMHg2ZjgyZGQ9XzB4NTJjMGIzW18weDJmM2Y2NigweDI0ZildfHxfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MjRmKV07aWYodGhpc1tfMHgyZjNmNjYoMHgyODIpXShfMHg1Mzg5YTYpPyhfMHg0MmJlNWU9MHgwLF8weDUzODlhNltfMHgyZjNmNjYoMHgyMGMpXShmdW5jdGlvbihfMHg0ZTRkMWQpe3ZhciBfMHg3NjJmYTA9XzB4MmYzZjY2O2lmKF8weDI4N2NjNCsrLF8weDI1NzIwOFtfMHg3NjJmYTAoMHgyNDkpXSsrLF8weDI4N2NjND5fMHg2ZjgyZGQpe18weDVjZDc3Yz0hMHgwO3JldHVybjt9aWYoIV8weDI1NzIwOFtfMHg3NjJmYTAoMHgxYTgpXSYmXzB4MjU3MjA4W18weDc2MmZhMCgweDFiNildJiZfMHgyNTcyMDhbXzB4NzYyZmEwKDB4MjQ5KV0+XzB4MjU3MjA4W18weDc2MmZhMCgweDI4NCldKXtfMHg1Y2Q3N2M9ITB4MDtyZXR1cm47fV8weDViOGNkN1sncHVzaCddKF8weDFhYzIyZVtfMHg3NjJmYTAoMHgyNjUpXShfMHgyNjI3MjgsXzB4NTM4OWE2LF8weDc2MmZhMCgweDFjMiksXzB4NDJiZTVlKyssXzB4MjU3MjA4LGZ1bmN0aW9uKF8weDI4N2EyMCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDI4N2EyMDt9O30oXzB4NGU0ZDFkKSkpO30pKTp0aGlzW18weDJmM2Y2NigweDFiYyldKF8weDUzODlhNikmJl8weDUzODlhNlsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDU3NTJlYyxfMHg1MjJlMDkpe3ZhciBfMHgzYzAwMzE9XzB4MmYzZjY2O2lmKF8weDI4N2NjNCsrLF8weDI1NzIwOFtfMHgzYzAwMzEoMHgyNDkpXSsrLF8weDI4N2NjND5fMHg2ZjgyZGQpe18weDVjZDc3Yz0hMHgwO3JldHVybjt9aWYoIV8weDI1NzIwOFtfMHgzYzAwMzEoMHgxYTgpXSYmXzB4MjU3MjA4W18weDNjMDAzMSgweDFiNildJiZfMHgyNTcyMDhbXzB4M2MwMDMxKDB4MjQ5KV0+XzB4MjU3MjA4W18weDNjMDAzMSgweDI4NCldKXtfMHg1Y2Q3N2M9ITB4MDtyZXR1cm47fXZhciBfMHg0NWZhNDA9XzB4NTIyZTA5W18weDNjMDAzMSgweDIxZildKCk7XzB4NDVmYTQwW18weDNjMDAzMSgweDIyOSldPjB4NjQmJihfMHg0NWZhNDA9XzB4NDVmYTQwW18weDNjMDAzMSgweDI1NCldKDB4MCwweDY0KStfMHgzYzAwMzEoMHgxZmEpKSxfMHg1YjhjZDdbXzB4M2MwMDMxKDB4MWFlKV0oXzB4MWFjMjJlW18weDNjMDAzMSgweDI2NSldKF8weDI2MjcyOCxfMHg1Mzg5YTYsXzB4M2MwMDMxKDB4MjgzKSxfMHg0NWZhNDAsXzB4MjU3MjA4LGZ1bmN0aW9uKF8weDRiNjJkNCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDRiNjJkNDt9O30oXzB4NTc1MmVjKSkpO30pLCFfMHgzYjA5YmEpe3RyeXtmb3IoXzB4NDgxNWQ0IGluIF8weDUzODlhNilpZighKF8weDJkNGI3ZCYmXzB4OGZmMjQ1W18weDJmM2Y2NigweDFlMSldKF8weDQ4MTVkNCkpJiYhdGhpc1tfMHgyZjNmNjYoMHgyNzEpXShfMHg1Mzg5YTYsXzB4NDgxNWQ0LF8weDI1NzIwOCkpe2lmKF8weDI4N2NjNCsrLF8weDI1NzIwOFtfMHgyZjNmNjYoMHgyNDkpXSsrLF8weDI4N2NjND5fMHg2ZjgyZGQpe18weDVjZDc3Yz0hMHgwO2JyZWFrO31pZighXzB4MjU3MjA4W18weDJmM2Y2NigweDFhOCldJiZfMHgyNTcyMDhbJ2F1dG9FeHBhbmQnXSYmXzB4MjU3MjA4W18weDJmM2Y2NigweDI0OSldPl8weDI1NzIwOFtfMHgyZjNmNjYoMHgyODQpXSl7XzB4NWNkNzdjPSEweDA7YnJlYWs7fV8weDViOGNkN1sncHVzaCddKF8weDFhYzIyZVtfMHgyZjNmNjYoMHgyMzYpXShfMHgyNjI3MjgsXzB4NzZjYmQxLF8weDUzODlhNixfMHg5MjhjNzYsXzB4NDgxNWQ0LF8weDI1NzIwOCkpO319Y2F0Y2h7fWlmKF8weDc2Y2JkMVtfMHgyZjNmNjYoMHgxZGMpXT0hMHgwLF8weDRkZDU4ZCYmKF8weDc2Y2JkMVtfMHgyZjNmNjYoMHgxZWQpXT0hMHgwKSwhXzB4NWNkNzdjKXt2YXIgXzB4MjAwMTVkPVtdW18weDJmM2Y2NigweDIzZSldKHRoaXNbXzB4MmYzZjY2KDB4MjA3KV0oXzB4NTM4OWE2KSlbXzB4MmYzZjY2KDB4MjNlKV0odGhpc1tfMHgyZjNmNjYoMHgyODYpXShfMHg1Mzg5YTYpKTtmb3IoXzB4NDJiZTVlPTB4MCxfMHgyODQ2MTQ9XzB4MjAwMTVkW18weDJmM2Y2NigweDIyOSldO18weDQyYmU1ZTxfMHgyODQ2MTQ7XzB4NDJiZTVlKyspaWYoXzB4NDgxNWQ0PV8weDIwMDE1ZFtfMHg0MmJlNWVdLCEoXzB4MmQ0YjdkJiZfMHg4ZmYyNDVbXzB4MmYzZjY2KDB4MWUxKV0oXzB4NDgxNWQ0W18weDJmM2Y2NigweDIxZildKCkpKSYmIXRoaXNbXzB4MmYzZjY2KDB4MjcxKV0oXzB4NTM4OWE2LF8weDQ4MTVkNCxfMHgyNTcyMDgpJiYhXzB4NzZjYmQxW18weDJmM2Y2NigweDFkOCkrXzB4NDgxNWQ0W18weDJmM2Y2NigweDIxZildKCldKXtpZihfMHgyODdjYzQrKyxfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MjQ5KV0rKyxfMHgyODdjYzQ+XzB4NmY4MmRkKXtfMHg1Y2Q3N2M9ITB4MDticmVhazt9aWYoIV8weDI1NzIwOFtfMHgyZjNmNjYoMHgxYTgpXSYmXzB4MjU3MjA4W18weDJmM2Y2NigweDFiNildJiZfMHgyNTcyMDhbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MjU3MjA4WydhdXRvRXhwYW5kTGltaXQnXSl7XzB4NWNkNzdjPSEweDA7YnJlYWs7fV8weDViOGNkN1tfMHgyZjNmNjYoMHgxYWUpXShfMHgxYWMyMmVbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDI2MjcyOCxfMHg3NmNiZDEsXzB4NTM4OWE2LF8weDkyOGM3NixfMHg0ODE1ZDQsXzB4MjU3MjA4KSk7fX19fX1pZihfMHg0ZDBlMTVbXzB4MmYzZjY2KDB4MjA0KV09XzB4OTI4Yzc2LF8weDJiYzJlMT8oXzB4NGQwZTE1W18weDJmM2Y2NigweDI2ZSldPV8weDUzODlhNltfMHgyZjNmNjYoMHgxYzYpXSgpLHRoaXNbJ19jYXBJZlN0cmluZyddKF8weDkyOGM3NixfMHg0ZDBlMTUsXzB4MjU3MjA4LF8weDUyYzBiMykpOl8weDkyOGM3Nj09PSdkYXRlJz9fMHg0ZDBlMTVbXzB4MmYzZjY2KDB4MjZlKV09dGhpc1snX2RhdGVUb1N0cmluZyddW18weDJmM2Y2NigweDFiYSldKF8weDUzODlhNik6XzB4OTI4Yzc2PT09XzB4MmYzZjY2KDB4Mjg4KT9fMHg0ZDBlMTVbJ3ZhbHVlJ109XzB4NTM4OWE2W18weDJmM2Y2NigweDIxZildKCk6XzB4OTI4Yzc2PT09XzB4MmYzZjY2KDB4MjI3KT9fMHg0ZDBlMTVbXzB4MmYzZjY2KDB4MjZlKV09dGhpc1tfMHgyZjNmNjYoMHgxY2MpXVtfMHgyZjNmNjYoMHgxYmEpXShfMHg1Mzg5YTYpOl8weDkyOGM3Nj09PSdzeW1ib2wnJiZ0aGlzW18weDJmM2Y2NigweDI3MildP18weDRkMGUxNVsndmFsdWUnXT10aGlzW18weDJmM2Y2NigweDI3MildW18weDJmM2Y2NigweDFjOCldW18weDJmM2Y2NigweDIxZildWydjYWxsJ10oXzB4NTM4OWE2KTohXzB4MjU3MjA4WydkZXB0aCddJiYhKF8weDkyOGM3Nj09PSdudWxsJ3x8XzB4OTI4Yzc2PT09XzB4MmYzZjY2KDB4MjgxKSkmJihkZWxldGUgXzB4NGQwZTE1W18weDJmM2Y2NigweDI2ZSldLF8weDRkMGUxNVtfMHgyZjNmNjYoMHgyMTYpXT0hMHgwKSxfMHg1Y2Q3N2MmJihfMHg0ZDBlMTVbJ2NhcHBlZFByb3BzJ109ITB4MCksXzB4MTcwNjE2PV8weDI1NzIwOFtfMHgyZjNmNjYoMHgxYmQpXVtfMHgyZjNmNjYoMHgxZDEpXSxfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MWJkKV1bXzB4MmYzZjY2KDB4MWQxKV09XzB4NGQwZTE1LHRoaXNbXzB4MmYzZjY2KDB4MjdhKV0oXzB4NGQwZTE1LF8weDI1NzIwOCksXzB4NWI4Y2Q3W18weDJmM2Y2NigweDIyOSldKXtmb3IoXzB4NDJiZTVlPTB4MCxfMHgyODQ2MTQ9XzB4NWI4Y2Q3W18weDJmM2Y2NigweDIyOSldO18weDQyYmU1ZTxfMHgyODQ2MTQ7XzB4NDJiZTVlKyspXzB4NWI4Y2Q3W18weDQyYmU1ZV0oXzB4NDJiZTVlKTt9XzB4MjYyNzI4WydsZW5ndGgnXSYmKF8weDRkMGUxNVtfMHgyZjNmNjYoMHgyNGYpXT1fMHgyNjI3MjgpO31jYXRjaChfMHgyOTBkMzQpe18weDNkZTYxMihfMHgyOTBkMzQsXzB4NGQwZTE1LF8weDI1NzIwOCk7fXJldHVybiB0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NTM4OWE2LF8weDRkMGUxNSksdGhpc1tfMHgyZjNmNjYoMHgyM2YpXShfMHg0ZDBlMTUsXzB4MjU3MjA4KSxfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MWJkKV1bXzB4MmYzZjY2KDB4MWQxKV09XzB4MTcwNjE2LF8weDI1NzIwOFtfMHgyZjNmNjYoMHgyMTIpXS0tLF8weDI1NzIwOFsnYXV0b0V4cGFuZCddPV8weDU5YWJjNixfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MWI2KV0mJl8weDI1NzIwOFtfMHgyZjNmNjYoMHgyNjYpXVtfMHgyZjNmNjYoMHgxYWQpXSgpLF8weDRkMGUxNTt9W18weDMxMjQ0MigweDI4NildKF8weDJkZWZjZSl7dmFyIF8weDI2MzY4Zj1fMHgzMTI0NDI7cmV0dXJuIE9iamVjdFtfMHgyNjM2OGYoMHgxYTUpXT9PYmplY3RbXzB4MjYzNjhmKDB4MWE1KV0oXzB4MmRlZmNlKTpbXTt9W18weDMxMjQ0MigweDI4MildKF8weDUzOGVkNCl7dmFyIF8weDM2M2U0Nz1fMHgzMTI0NDI7cmV0dXJuISEoXzB4NTM4ZWQ0JiZfMHgyODlmNTRbJ1NldCddJiZ0aGlzW18weDM2M2U0NygweDIwYildKF8weDUzOGVkNCk9PT1fMHgzNjNlNDcoMHgxYjUpJiZfMHg1MzhlZDRbXzB4MzYzZTQ3KDB4MjBjKV0pO31bXzB4MzEyNDQyKDB4MjcxKV0oXzB4NGJiM2NmLF8weDU3NjE0OSxfMHgxZjgyMmIpe3ZhciBfMHg1MjQ3Yzg9XzB4MzEyNDQyO3JldHVybiBfMHgxZjgyMmJbXzB4NTI0N2M4KDB4MjQ2KV0/dHlwZW9mIF8weDRiYjNjZltfMHg1NzYxNDldPT1fMHg1MjQ3YzgoMHgxZGUpOiEweDE7fVtfMHgzMTI0NDIoMHgxZDkpXShfMHg1NGEzZWQpe3ZhciBfMHgxMzMzODM9XzB4MzEyNDQyLF8weDNkNmRjMz0nJztyZXR1cm4gXzB4M2Q2ZGMzPXR5cGVvZiBfMHg1NGEzZWQsXzB4M2Q2ZGMzPT09XzB4MTMzMzgzKDB4MjNhKT90aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg1NGEzZWQpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJz9fMHgzZDZkYzM9J2FycmF5Jzp0aGlzW18weDEzMzM4MygweDIwYildKF8weDU0YTNlZCk9PT1fMHgxMzMzODMoMHgxZjQpP18weDNkNmRjMz1fMHgxMzMzODMoMHgyMGQpOnRoaXNbXzB4MTMzMzgzKDB4MjBiKV0oXzB4NTRhM2VkKT09PV8weDEzMzM4MygweDFiNCk/XzB4M2Q2ZGMzPV8weDEzMzM4MygweDI4OCk6XzB4NTRhM2VkPT09bnVsbD9fMHgzZDZkYzM9XzB4MTMzMzgzKDB4MjMyKTpfMHg1NGEzZWRbXzB4MTMzMzgzKDB4MWEzKV0mJihfMHgzZDZkYzM9XzB4NTRhM2VkW18weDEzMzM4MygweDFhMyldW18weDEzMzM4MygweDI0MyldfHxfMHgzZDZkYzMpOl8weDNkNmRjMz09PV8weDEzMzM4MygweDI4MSkmJnRoaXNbXzB4MTMzMzgzKDB4Mjc3KV0mJl8weDU0YTNlZCBpbnN0YW5jZW9mIHRoaXNbXzB4MTMzMzgzKDB4Mjc3KV0mJihfMHgzZDZkYzM9J0hUTUxBbGxDb2xsZWN0aW9uJyksXzB4M2Q2ZGMzO31bXzB4MzEyNDQyKDB4MjBiKV0oXzB4M2Y5OTYyKXt2YXIgXzB4MjMwOTEzPV8weDMxMjQ0MjtyZXR1cm4gT2JqZWN0W18weDIzMDkxMygweDFjOCldW18weDIzMDkxMygweDIxZildW18weDIzMDkxMygweDFiYSldKF8weDNmOTk2Mik7fVtfMHgzMTI0NDIoMHgyNWIpXShfMHg1ZDc4NDcpe3ZhciBfMHgzNTdjODM9XzB4MzEyNDQyO3JldHVybiBfMHg1ZDc4NDc9PT1fMHgzNTdjODMoMHgyMzkpfHxfMHg1ZDc4NDc9PT0nc3RyaW5nJ3x8XzB4NWQ3ODQ3PT09XzB4MzU3YzgzKDB4MjI2KTt9W18weDMxMjQ0MigweDI4OSldKF8weDEyNmMyMyl7dmFyIF8weDViYzNkYT1fMHgzMTI0NDI7cmV0dXJuIF8weDEyNmMyMz09PV8weDViYzNkYSgweDIzZCl8fF8weDEyNmMyMz09PV8weDViYzNkYSgweDFkMil8fF8weDEyNmMyMz09PV8weDViYzNkYSgweDI2Myk7fVsnX2FkZFByb3BlcnR5J10oXzB4YzcyNmRiLF8weDkwNTVmMSxfMHg0OGUxNjcsXzB4NTI1ZDdjLF8weDJhMmQ2ZCxfMHgyNjBiNDMpe3ZhciBfMHg0NDQwZTc9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4MjZkYTIxKXt2YXIgXzB4MTY2MjYxPV8weDU3OGQsXzB4MmZjYTc2PV8weDJhMmQ2ZFtfMHgxNjYyNjEoMHgxYmQpXVtfMHgxNjYyNjEoMHgxZDEpXSxfMHg0N2UzOWU9XzB4MmEyZDZkW18weDE2NjI2MSgweDFiZCldW18weDE2NjI2MSgweDIwNSldLF8weDM1ZDgzZT1fMHgyYTJkNmRbXzB4MTY2MjYxKDB4MWJkKV1bXzB4MTY2MjYxKDB4MWQwKV07XzB4MmEyZDZkW18weDE2NjI2MSgweDFiZCldWydwYXJlbnQnXT1fMHgyZmNhNzYsXzB4MmEyZDZkW18weDE2NjI2MSgweDFiZCldW18weDE2NjI2MSgweDIwNSldPXR5cGVvZiBfMHg1MjVkN2M9PV8weDE2NjI2MSgweDIyNik/XzB4NTI1ZDdjOl8weDI2ZGEyMSxfMHhjNzI2ZGJbJ3B1c2gnXShfMHg0NDQwZTdbXzB4MTY2MjYxKDB4MjU3KV0oXzB4OTA1NWYxLF8weDQ4ZTE2NyxfMHg1MjVkN2MsXzB4MmEyZDZkLF8weDI2MGI0MykpLF8weDJhMmQ2ZFtfMHgxNjYyNjEoMHgxYmQpXVtfMHgxNjYyNjEoMHgxZDApXT1fMHgzNWQ4M2UsXzB4MmEyZDZkW18weDE2NjI2MSgweDFiZCldWydpbmRleCddPV8weDQ3ZTM5ZTt9O31bXzB4MzEyNDQyKDB4MjM2KV0oXzB4NGRkZTBiLF8weDNjZmFhNCxfMHg1YmJhNzAsXzB4MWUyOWQzLF8weDJlOTNkZSxfMHg1OTQ3MzYsXzB4MzY1MWY4KXt2YXIgXzB4MWI5YmJkPV8weDMxMjQ0MixfMHg1NzU0YTU9dGhpcztyZXR1cm4gXzB4M2NmYWE0W18weDFiOWJiZCgweDFkOCkrXzB4MmU5M2RlW18weDFiOWJiZCgweDIxZildKCldPSEweDAsZnVuY3Rpb24oXzB4MWVhZDM4KXt2YXIgXzB4NDE3YmIxPV8weDFiOWJiZCxfMHhkZDdkYzk9XzB4NTk0NzM2Wydub2RlJ11bXzB4NDE3YmIxKDB4MWQxKV0sXzB4MjkzMGQ5PV8weDU5NDczNltfMHg0MTdiYjEoMHgxYmQpXVtfMHg0MTdiYjEoMHgyMDUpXSxfMHgyN2FmYWQ9XzB4NTk0NzM2W18weDQxN2JiMSgweDFiZCldW18weDQxN2JiMSgweDFkMCldO18weDU5NDczNltfMHg0MTdiYjEoMHgxYmQpXVtfMHg0MTdiYjEoMHgxZDApXT1fMHhkZDdkYzksXzB4NTk0NzM2W18weDQxN2JiMSgweDFiZCldW18weDQxN2JiMSgweDIwNSldPV8weDFlYWQzOCxfMHg0ZGRlMGJbXzB4NDE3YmIxKDB4MWFlKV0oXzB4NTc1NGE1W18weDQxN2JiMSgweDI1NyldKF8weDViYmE3MCxfMHgxZTI5ZDMsXzB4MmU5M2RlLF8weDU5NDczNixfMHgzNjUxZjgpKSxfMHg1OTQ3MzZbXzB4NDE3YmIxKDB4MWJkKV1bJ3BhcmVudCddPV8weDI3YWZhZCxfMHg1OTQ3MzZbJ25vZGUnXVtfMHg0MTdiYjEoMHgyMDUpXT1fMHgyOTMwZDk7fTt9WydfcHJvcGVydHknXShfMHg1NThhNDgsXzB4M2ZmMzdkLF8weDhjN2QxMixfMHg1NTczYzksXzB4MTM0N2MzKXt2YXIgXzB4M2U2ZmU0PV8weDMxMjQ0MixfMHg0NzM2ZmI9dGhpcztfMHgxMzQ3YzN8fChfMHgxMzQ3YzM9ZnVuY3Rpb24oXzB4MWJmMzZkLF8weDIzZjk3Myl7cmV0dXJuIF8weDFiZjM2ZFtfMHgyM2Y5NzNdO30pO3ZhciBfMHg0YzBlNTM9XzB4OGM3ZDEyW18weDNlNmZlNCgweDIxZildKCksXzB4MjhhMWE2PV8weDU1NzNjOVtfMHgzZTZmZTQoMHgyMjgpXXx8e30sXzB4MWFmNmNhPV8weDU1NzNjOVtfMHgzZTZmZTQoMHgxZmMpXSxfMHg0MzNjYzQ9XzB4NTU3M2M5W18weDNlNmZlNCgweDFhOCldO3RyeXt2YXIgXzB4NWU1ZWI4PXRoaXNbJ19pc01hcCddKF8weDU1OGE0OCksXzB4MjI0OTI1PV8weDRjMGU1MztfMHg1ZTVlYjgmJl8weDIyNDkyNVsweDBdPT09J1xcXFx4MjcnJiYoXzB4MjI0OTI1PV8weDIyNDkyNVtfMHgzZTZmZTQoMHgxY2YpXSgweDEsXzB4MjI0OTI1W18weDNlNmZlNCgweDIyOSldLTB4MikpO3ZhciBfMHgzNzQ5YWM9XzB4NTU3M2M5WydleHByZXNzaW9uc1RvRXZhbHVhdGUnXT1fMHgyOGExYTZbJ19wXycrXzB4MjI0OTI1XTtfMHgzNzQ5YWMmJihfMHg1NTczYzlbXzB4M2U2ZmU0KDB4MWZjKV09XzB4NTU3M2M5W18weDNlNmZlNCgweDFmYyldKzB4MSksXzB4NTU3M2M5W18weDNlNmZlNCgweDFhOCldPSEhXzB4Mzc0OWFjO3ZhciBfMHgxZjIyMjc9dHlwZW9mIF8weDhjN2QxMj09XzB4M2U2ZmU0KDB4MjQwKSxfMHgzMjhkMjM9eyduYW1lJzpfMHgxZjIyMjd8fF8weDVlNWViOD9fMHg0YzBlNTM6dGhpc1tfMHgzZTZmZTQoMHgxZWYpXShfMHg0YzBlNTMpfTtpZihfMHgxZjIyMjcmJihfMHgzMjhkMjNbJ3N5bWJvbCddPSEweDApLCEoXzB4M2ZmMzdkPT09XzB4M2U2ZmU0KDB4MWU5KXx8XzB4M2ZmMzdkPT09XzB4M2U2ZmU0KDB4MWJlKSkpe3ZhciBfMHgyNzllNzA9dGhpc1tfMHgzZTZmZTQoMHgyNWQpXShfMHg1NThhNDgsXzB4OGM3ZDEyKTtpZihfMHgyNzllNzAmJihfMHgyNzllNzBbXzB4M2U2ZmU0KDB4MjI0KV0mJihfMHgzMjhkMjNbJ3NldHRlciddPSEweDApLF8weDI3OWU3MFtfMHgzZTZmZTQoMHgxYzEpXSYmIV8weDM3NDlhYyYmIV8weDU1NzNjOVtfMHgzZTZmZTQoMHgxZjEpXSkpcmV0dXJuIF8weDMyOGQyM1tfMHgzZTZmZTQoMHgyNjEpXT0hMHgwLHRoaXNbXzB4M2U2ZmU0KDB4MjRhKV0oXzB4MzI4ZDIzLF8weDU1NzNjOSksXzB4MzI4ZDIzO312YXIgXzB4ZjY4NmQwO3RyeXtfMHhmNjg2ZDA9XzB4MTM0N2MzKF8weDU1OGE0OCxfMHg4YzdkMTIpO31jYXRjaChfMHgyNThmMDApe3JldHVybiBfMHgzMjhkMjM9eyduYW1lJzpfMHg0YzBlNTMsJ3R5cGUnOl8weDNlNmZlNCgweDI2YyksJ2Vycm9yJzpfMHgyNThmMDBbXzB4M2U2ZmU0KDB4MjVlKV19LHRoaXNbXzB4M2U2ZmU0KDB4MjRhKV0oXzB4MzI4ZDIzLF8weDU1NzNjOSksXzB4MzI4ZDIzO312YXIgXzB4MTE3NjE2PXRoaXNbJ190eXBlJ10oXzB4ZjY4NmQwKSxfMHg1OTc3ZDg9dGhpc1tfMHgzZTZmZTQoMHgyNWIpXShfMHgxMTc2MTYpO2lmKF8weDMyOGQyM1tfMHgzZTZmZTQoMHgyMDQpXT1fMHgxMTc2MTYsXzB4NTk3N2Q4KXRoaXNbXzB4M2U2ZmU0KDB4MjRhKV0oXzB4MzI4ZDIzLF8weDU1NzNjOSxfMHhmNjg2ZDAsZnVuY3Rpb24oKXt2YXIgXzB4MzIyZjY4PV8weDNlNmZlNDtfMHgzMjhkMjNbJ3ZhbHVlJ109XzB4ZjY4NmQwWyd2YWx1ZU9mJ10oKSwhXzB4Mzc0OWFjJiZfMHg0NzM2ZmJbXzB4MzIyZjY4KDB4Mjc5KV0oXzB4MTE3NjE2LF8weDMyOGQyMyxfMHg1NTczYzkse30pO30pO2Vsc2V7dmFyIF8weDQ1ZWNkND1fMHg1NTczYzlbXzB4M2U2ZmU0KDB4MWI2KV0mJl8weDU1NzNjOVsnbGV2ZWwnXTxfMHg1NTczYzlbXzB4M2U2ZmU0KDB4MWYzKV0mJl8weDU1NzNjOVsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddW18weDNlNmZlNCgweDI2ZildKF8weGY2ODZkMCk8MHgwJiZfMHgxMTc2MTYhPT1fMHgzZTZmZTQoMHgxZGUpJiZfMHg1NTczYzlbXzB4M2U2ZmU0KDB4MjQ5KV08XzB4NTU3M2M5W18weDNlNmZlNCgweDI4NCldO18weDQ1ZWNkNHx8XzB4NTU3M2M5W18weDNlNmZlNCgweDIxMildPF8weDFhZjZjYXx8XzB4Mzc0OWFjPyh0aGlzW18weDNlNmZlNCgweDIzOCldKF8weDMyOGQyMyxfMHhmNjg2ZDAsXzB4NTU3M2M5LF8weDM3NDlhY3x8e30pLHRoaXNbXzB4M2U2ZmU0KDB4MjAxKV0oXzB4ZjY4NmQwLF8weDMyOGQyMykpOnRoaXNbXzB4M2U2ZmU0KDB4MjRhKV0oXzB4MzI4ZDIzLF8weDU1NzNjOSxfMHhmNjg2ZDAsZnVuY3Rpb24oKXt2YXIgXzB4MmJjYjc3PV8weDNlNmZlNDtfMHgxMTc2MTY9PT0nbnVsbCd8fF8weDExNzYxNj09PV8weDJiY2I3NygweDI4MSl8fChkZWxldGUgXzB4MzI4ZDIzW18weDJiY2I3NygweDI2ZSldLF8weDMyOGQyM1tfMHgyYmNiNzcoMHgyMTYpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDMyOGQyMzt9ZmluYWxseXtfMHg1NTczYzlbXzB4M2U2ZmU0KDB4MjI4KV09XzB4MjhhMWE2LF8weDU1NzNjOVtfMHgzZTZmZTQoMHgxZmMpXT1fMHgxYWY2Y2EsXzB4NTU3M2M5Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109XzB4NDMzY2M0O319W18weDMxMjQ0MigweDI3OSldKF8weDJjNmY4MyxfMHg0NGE1MDAsXzB4YmZiYWUzLF8weDI1MzExNyl7dmFyIF8weDViNzE0OD1fMHgzMTI0NDIsXzB4MzQzMDk2PV8weDI1MzExN1tfMHg1YjcxNDgoMHgxYTYpXXx8XzB4YmZiYWUzWydzdHJMZW5ndGgnXTtpZigoXzB4MmM2ZjgzPT09XzB4NWI3MTQ4KDB4MjQyKXx8XzB4MmM2ZjgzPT09J1N0cmluZycpJiZfMHg0NGE1MDBbXzB4NWI3MTQ4KDB4MjZlKV0pe2xldCBfMHg0YzgzZGY9XzB4NDRhNTAwW18weDViNzE0OCgweDI2ZSldW18weDViNzE0OCgweDIyOSldO18weGJmYmFlM1tfMHg1YjcxNDgoMHgyNWMpXSs9XzB4NGM4M2RmLF8weGJmYmFlM1tfMHg1YjcxNDgoMHgyNWMpXT5fMHhiZmJhZTNbXzB4NWI3MTQ4KDB4MWY2KV0/KF8weDQ0YTUwMFtfMHg1YjcxNDgoMHgyMTYpXT0nJyxkZWxldGUgXzB4NDRhNTAwWyd2YWx1ZSddKTpfMHg0YzgzZGY+XzB4MzQzMDk2JiYoXzB4NDRhNTAwW18weDViNzE0OCgweDIxNildPV8weDQ0YTUwMFtfMHg1YjcxNDgoMHgyNmUpXVtfMHg1YjcxNDgoMHgxY2YpXSgweDAsXzB4MzQzMDk2KSxkZWxldGUgXzB4NDRhNTAwW18weDViNzE0OCgweDI2ZSldKTt9fVtfMHgzMTI0NDIoMHgxYmMpXShfMHhjODg0Mzkpe3ZhciBfMHgzMWJmNmE9XzB4MzEyNDQyO3JldHVybiEhKF8weGM4ODQzOSYmXzB4Mjg5ZjU0WydNYXAnXSYmdGhpc1tfMHgzMWJmNmEoMHgyMGIpXShfMHhjODg0MzkpPT09J1tvYmplY3RcXFxceDIwTWFwXScmJl8weGM4ODQzOVtfMHgzMWJmNmEoMHgyMGMpXSk7fVtfMHgzMTI0NDIoMHgxZWYpXShfMHg1OTRjYmEpe3ZhciBfMHgxMTU2MWE9XzB4MzEyNDQyO2lmKF8weDU5NGNiYVsnbWF0Y2gnXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NTk0Y2JhO3ZhciBfMHg0ZmEyM2Q7dHJ5e18weDRmYTIzZD1KU09OW18weDExNTYxYSgweDI3YyldKCcnK18weDU5NGNiYSk7fWNhdGNoe18weDRmYTIzZD0nXFxcXHgyMicrdGhpc1tfMHgxMTU2MWEoMHgyMGIpXShfMHg1OTRjYmEpKydcXFxceDIyJzt9cmV0dXJuIF8weDRmYTIzZFtfMHgxMTU2MWEoMHgxZmIpXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDRmYTIzZD1fMHg0ZmEyM2RbJ3N1YnN0ciddKDB4MSxfMHg0ZmEyM2RbXzB4MTE1NjFhKDB4MjI5KV0tMHgyKTpfMHg0ZmEyM2Q9XzB4NGZhMjNkW18weDExNTYxYSgweDFmNSldKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4MTE1NjFhKDB4MWY1KV0oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbJ3JlcGxhY2UnXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4NGZhMjNkO31bXzB4MzEyNDQyKDB4MjRhKV0oXzB4M2ZhYTJlLF8weDRhNTU5MyxfMHgxYjBlNzgsXzB4MjRlOTk1KXt2YXIgXzB4MmQ1Mjg4PV8weDMxMjQ0Mjt0aGlzW18weDJkNTI4OCgweDI3YSldKF8weDNmYWEyZSxfMHg0YTU1OTMpLF8weDI0ZTk5NSYmXzB4MjRlOTk1KCksdGhpc1tfMHgyZDUyODgoMHgyMDEpXShfMHgxYjBlNzgsXzB4M2ZhYTJlKSx0aGlzW18weDJkNTI4OCgweDIzZildKF8weDNmYWEyZSxfMHg0YTU1OTMpO31bXzB4MzEyNDQyKDB4MjdhKV0oXzB4MWJjYmRiLF8weDFiNzNjMSl7dmFyIF8weGMxODc0MT1fMHgzMTI0NDI7dGhpc1tfMHhjMTg3NDEoMHgyN2IpXShfMHgxYmNiZGIsXzB4MWI3M2MxKSx0aGlzW18weGMxODc0MSgweDI4NSldKF8weDFiY2JkYixfMHgxYjczYzEpLHRoaXNbXzB4YzE4NzQxKDB4MWYwKV0oXzB4MWJjYmRiLF8weDFiNzNjMSksdGhpc1tfMHhjMTg3NDEoMHgyMTEpXShfMHgxYmNiZGIsXzB4MWI3M2MxKTt9Wydfc2V0Tm9kZUlkJ10oXzB4ZGRhYjY3LF8weDIzNThmYil7fVsnX3NldE5vZGVRdWVyeVBhdGgnXShfMHg1MGFjMjEsXzB4NDZiZjZjKXt9W18weDMxMjQ0MigweDI3MyldKF8weDRiNmM1YyxfMHgyNjQ3N2Epe31bXzB4MzEyNDQyKDB4MWUwKV0oXzB4MWJkMWRjKXt2YXIgXzB4MzlkOTE5PV8weDMxMjQ0MjtyZXR1cm4gXzB4MWJkMWRjPT09dGhpc1tfMHgzOWQ5MTkoMHgyMzcpXTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgyZTNiOWQsXzB4M2Y3MDVkKXt2YXIgXzB4OWU3ZjYwPV8weDMxMjQ0Mjt0aGlzWydfc2V0Tm9kZUxhYmVsJ10oXzB4MmUzYjlkLF8weDNmNzA1ZCksdGhpc1snX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHgyZTNiOWQpLF8weDNmNzA1ZFsnc29ydFByb3BzJ10mJnRoaXNbXzB4OWU3ZjYwKDB4MWI5KV0oXzB4MmUzYjlkKSx0aGlzWydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDJlM2I5ZCxfMHgzZjcwNWQpLHRoaXNbJ19hZGRMb2FkTm9kZSddKF8weDJlM2I5ZCxfMHgzZjcwNWQpLHRoaXNbJ19jbGVhbk5vZGUnXShfMHgyZTNiOWQpO31bXzB4MzEyNDQyKDB4MjAxKV0oXzB4MjQ2NmI4LF8weDUzMzdmMSl7dmFyIF8weDFjNWZjMD1fMHgzMTI0NDI7bGV0IF8weDM4YTQ3Mjt0cnl7XzB4Mjg5ZjU0W18weDFjNWZjMCgweDI4YSldJiYoXzB4MzhhNDcyPV8weDI4OWY1NFtfMHgxYzVmYzAoMHgyOGEpXVsnZXJyb3InXSxfMHgyODlmNTRbJ2NvbnNvbGUnXVtfMHgxYzVmYzAoMHgyMjMpXT1mdW5jdGlvbigpe30pLF8weDI0NjZiOCYmdHlwZW9mIF8weDI0NjZiOFtfMHgxYzVmYzAoMHgyMjkpXT09XzB4MWM1ZmMwKDB4MjI2KSYmKF8weDUzMzdmMVtfMHgxYzVmYzAoMHgyMjkpXT1fMHgyNDY2YjhbXzB4MWM1ZmMwKDB4MjI5KV0pO31jYXRjaHt9ZmluYWxseXtfMHgzOGE0NzImJihfMHgyODlmNTRbXzB4MWM1ZmMwKDB4MjhhKV1bXzB4MWM1ZmMwKDB4MjIzKV09XzB4MzhhNDcyKTt9aWYoXzB4NTMzN2YxW18weDFjNWZjMCgweDIwNCldPT09XzB4MWM1ZmMwKDB4MjI2KXx8XzB4NTMzN2YxWyd0eXBlJ109PT1fMHgxYzVmYzAoMHgyNjMpKXtpZihpc05hTihfMHg1MzM3ZjFbXzB4MWM1ZmMwKDB4MjZlKV0pKV8weDUzMzdmMVtfMHgxYzVmYzAoMHgxYmIpXT0hMHgwLGRlbGV0ZSBfMHg1MzM3ZjFbXzB4MWM1ZmMwKDB4MjZlKV07ZWxzZSBzd2l0Y2goXzB4NTMzN2YxW18weDFjNWZjMCgweDI2ZSldKXtjYXNlIE51bWJlcltfMHgxYzVmYzAoMHgyMDMpXTpfMHg1MzM3ZjFbXzB4MWM1ZmMwKDB4Mjc4KV09ITB4MCxkZWxldGUgXzB4NTMzN2YxW18weDFjNWZjMCgweDI2ZSldO2JyZWFrO2Nhc2UgTnVtYmVyW18weDFjNWZjMCgweDI2ZCldOl8weDUzMzdmMVtfMHgxYzVmYzAoMHgyMzEpXT0hMHgwLGRlbGV0ZSBfMHg1MzM3ZjFbJ3ZhbHVlJ107YnJlYWs7Y2FzZSAweDA6dGhpc1snX2lzTmVnYXRpdmVaZXJvJ10oXzB4NTMzN2YxW18weDFjNWZjMCgweDI2ZSldKSYmKF8weDUzMzdmMVtfMHgxYzVmYzAoMHgxZWMpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4NTMzN2YxW18weDFjNWZjMCgweDIwNCldPT09XzB4MWM1ZmMwKDB4MWRlKSYmdHlwZW9mIF8weDI0NjZiOFtfMHgxYzVmYzAoMHgyNDMpXT09XzB4MWM1ZmMwKDB4MjQyKSYmXzB4MjQ2NmI4W18weDFjNWZjMCgweDI0MyldJiZfMHg1MzM3ZjFbXzB4MWM1ZmMwKDB4MjQzKV0mJl8weDI0NjZiOFtfMHgxYzVmYzAoMHgyNDMpXSE9PV8weDUzMzdmMVtfMHgxYzVmYzAoMHgyNDMpXSYmKF8weDUzMzdmMVtfMHgxYzVmYzAoMHgxZDUpXT1fMHgyNDY2YjhbJ25hbWUnXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4NGM2YWZmKXtyZXR1cm4gMHgxL18weDRjNmFmZj09PU51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTt9W18weDMxMjQ0MigweDFiOSldKF8weDQ5N2NiMyl7dmFyIF8weGY3YWNkMj1fMHgzMTI0NDI7IV8weDQ5N2NiM1sncHJvcHMnXXx8IV8weDQ5N2NiM1tfMHhmN2FjZDIoMHgyNGYpXVsnbGVuZ3RoJ118fF8weDQ5N2NiM1tfMHhmN2FjZDIoMHgyMDQpXT09PV8weGY3YWNkMigweDFlOSl8fF8weDQ5N2NiM1tfMHhmN2FjZDIoMHgyMDQpXT09PV8weGY3YWNkMigweDI4Myl8fF8weDQ5N2NiM1tfMHhmN2FjZDIoMHgyMDQpXT09PV8weGY3YWNkMigweDFjMil8fF8weDQ5N2NiM1tfMHhmN2FjZDIoMHgyNGYpXVsnc29ydCddKGZ1bmN0aW9uKF8weDU0NGUxZCxfMHgxODFiMTkpe3ZhciBfMHg0ZmFlZmE9XzB4ZjdhY2QyLF8weDViMGQyMz1fMHg1NDRlMWRbXzB4NGZhZWZhKDB4MjQzKV1bJ3RvTG93ZXJDYXNlJ10oKSxfMHg1NDFhZTg9XzB4MTgxYjE5W18weDRmYWVmYSgweDI0MyldW18weDRmYWVmYSgweDFhNCldKCk7cmV0dXJuIF8weDViMGQyMzxfMHg1NDFhZTg/LTB4MTpfMHg1YjBkMjM+XzB4NTQxYWU4PzB4MToweDA7fSk7fVsnX2FkZEZ1bmN0aW9uc05vZGUnXShfMHgyOGQ3MzgsXzB4MTAzNjE5KXt2YXIgXzB4MzNjNWRhPV8weDMxMjQ0MjtpZighKF8weDEwMzYxOVsnbm9GdW5jdGlvbnMnXXx8IV8weDI4ZDczOFsncHJvcHMnXXx8IV8weDI4ZDczOFtfMHgzM2M1ZGEoMHgyNGYpXVsnbGVuZ3RoJ10pKXtmb3IodmFyIF8weDJhMjcwYT1bXSxfMHg0ZTMzZmE9W10sXzB4MmM2ZDdlPTB4MCxfMHgxNGRmN2M9XzB4MjhkNzM4W18weDMzYzVkYSgweDI0ZildW18weDMzYzVkYSgweDIyOSldO18weDJjNmQ3ZTxfMHgxNGRmN2M7XzB4MmM2ZDdlKyspe3ZhciBfMHgxMGYzZDE9XzB4MjhkNzM4W18weDMzYzVkYSgweDI0ZildW18weDJjNmQ3ZV07XzB4MTBmM2QxWyd0eXBlJ109PT0nZnVuY3Rpb24nP18weDJhMjcwYVtfMHgzM2M1ZGEoMHgxYWUpXShfMHgxMGYzZDEpOl8weDRlMzNmYVsncHVzaCddKF8weDEwZjNkMSk7fWlmKCEoIV8weDRlMzNmYVsnbGVuZ3RoJ118fF8weDJhMjcwYVtfMHgzM2M1ZGEoMHgyMjkpXTw9MHgxKSl7XzB4MjhkNzM4W18weDMzYzVkYSgweDI0ZildPV8weDRlMzNmYTt2YXIgXzB4NWNhNGJmPXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDJhMjcwYX07dGhpc1tfMHgzM2M1ZGEoMHgyN2IpXShfMHg1Y2E0YmYsXzB4MTAzNjE5KSx0aGlzW18weDMzYzVkYSgweDI3MyldKF8weDVjYTRiZixfMHgxMDM2MTkpLHRoaXNbJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4NWNhNGJmKSx0aGlzW18weDMzYzVkYSgweDIxMSldKF8weDVjYTRiZixfMHgxMDM2MTkpLF8weDVjYTRiZlsnaWQnXSs9J1xcXFx4MjBmJyxfMHgyOGQ3MzhbXzB4MzNjNWRhKDB4MjRmKV1bJ3Vuc2hpZnQnXShfMHg1Y2E0YmYpO319fVtfMHgzMTI0NDIoMHgyNjcpXShfMHg1NTcyNTMsXzB4MjBiOTY5KXt9Wydfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZSddKF8weDRjYmYxZil7fVtfMHgzMTI0NDIoMHgyODcpXShfMHg3MTIwYjcpe3ZhciBfMHgxMGFlZjM9XzB4MzEyNDQyO3JldHVybiBBcnJheVtfMHgxMGFlZjMoMHgyNGQpXShfMHg3MTIwYjcpfHx0eXBlb2YgXzB4NzEyMGI3PT1fMHgxMGFlZjMoMHgyM2EpJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg3MTIwYjcpPT09XzB4MTBhZWYzKDB4MjA4KTt9Wydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4NGE3N2NjLF8weDQ5NTNlNyl7fVtfMHgzMTI0NDIoMHgyNmIpXShfMHgzYWY0MTUpe2RlbGV0ZSBfMHgzYWY0MTVbJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCddLGRlbGV0ZSBfMHgzYWY0MTVbJ19oYXNTZXRPbkl0c1BhdGgnXSxkZWxldGUgXzB4M2FmNDE1WydfaGFzTWFwT25JdHNQYXRoJ107fVsnX3NldE5vZGVFeHByZXNzaW9uUGF0aCddKF8weDEwNzk0NixfMHgyN2RmZWUpe31bXzB4MzEyNDQyKDB4MWZkKV0oXzB4NDdiMjBmKXt2YXIgXzB4NDI3NDlmPV8weDMxMjQ0MjtyZXR1cm4gXzB4NDdiMjBmP18weDQ3YjIwZltfMHg0Mjc0OWYoMHgxZmIpXSh0aGlzW18weDQyNzQ5ZigweDFjNSldKT8nWycrXzB4NDdiMjBmKyddJzpfMHg0N2IyMGZbXzB4NDI3NDlmKDB4MWZiKV0odGhpc1tfMHg0Mjc0OWYoMHgxZTgpXSk/Jy4nK18weDQ3YjIwZjpfMHg0N2IyMGZbXzB4NDI3NDlmKDB4MWZiKV0odGhpc1tfMHg0Mjc0OWYoMHgyMTApXSk/J1snK18weDQ3YjIwZisnXSc6J1tcXFxceDI3JytfMHg0N2IyMGYrJ1xcXFx4MjddJzonJzt9fWxldCBfMHgyYzc3YTY9bmV3IF8weDFkMWY5MCgpO2Z1bmN0aW9uIF8weDMwZjVjZShfMHg0YThkMmMsXzB4MTI3NjA5LF8weDU1ODRjNSxfMHgzZDhiNTcsXzB4NWMyMGQ3LF8weDM2MzAyMyl7dmFyIF8weDUxMGE2Yj1fMHgzMTI0NDI7bGV0IF8weDNhY2RhZixfMHgzZTIxYTM7dHJ5e18weDNlMjFhMz1fMHgzMmMyYmYoKSxfMHgzYWNkYWY9XzB4MjFkMzZhW18weDEyNzYwOV0sIV8weDNhY2RhZnx8XzB4M2UyMWEzLV8weDNhY2RhZlsndHMnXT4weDFmNCYmXzB4M2FjZGFmWydjb3VudCddJiZfMHgzYWNkYWZbXzB4NTEwYTZiKDB4MWNkKV0vXzB4M2FjZGFmW18weDUxMGE2YigweDI0OCldPDB4NjQ/KF8weDIxZDM2YVtfMHgxMjc2MDldPV8weDNhY2RhZj17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDNlMjFhM30sXzB4MjFkMzZhW18weDUxMGE2YigweDIxOSldPXt9KTpfMHgzZTIxYTMtXzB4MjFkMzZhW18weDUxMGE2YigweDIxOSldWyd0cyddPjB4MzImJl8weDIxZDM2YVtfMHg1MTBhNmIoMHgyMTkpXVsnY291bnQnXSYmXzB4MjFkMzZhWydoaXRzJ11bXzB4NTEwYTZiKDB4MWNkKV0vXzB4MjFkMzZhW18weDUxMGE2YigweDIxOSldW18weDUxMGE2YigweDI0OCldPDB4NjQmJihfMHgyMWQzNmFbXzB4NTEwYTZiKDB4MjE5KV09e30pO2xldCBfMHgyMTRkMzc9W10sXzB4MWE1MmQ3PV8weDNhY2RhZltfMHg1MTBhNmIoMHgxZjcpXXx8XzB4MjFkMzZhW18weDUxMGE2YigweDIxOSldW18weDUxMGE2YigweDFmNyldP18weDU0NDI1MDpfMHhkZjYwMixfMHg5NmM4ZTY9XzB4NDhiNTA5PT57dmFyIF8weDNhOWQxMT1fMHg1MTBhNmI7bGV0IF8weDM0MTQ5OT17fTtyZXR1cm4gXzB4MzQxNDk5W18weDNhOWQxMSgweDI0ZildPV8weDQ4YjUwOVtfMHgzYTlkMTEoMHgyNGYpXSxfMHgzNDE0OTlbXzB4M2E5ZDExKDB4MjUyKV09XzB4NDhiNTA5W18weDNhOWQxMSgweDI1MildLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgxYTYpXT1fMHg0OGI1MDlbJ3N0ckxlbmd0aCddLF8weDM0MTQ5OVsndG90YWxTdHJMZW5ndGgnXT1fMHg0OGI1MDlbXzB4M2E5ZDExKDB4MWY2KV0sXzB4MzQxNDk5W18weDNhOWQxMSgweDI4NCldPV8weDQ4YjUwOVtfMHgzYTlkMTEoMHgyODQpXSxfMHgzNDE0OTlbXzB4M2E5ZDExKDB4MWYzKV09XzB4NDhiNTA5W18weDNhOWQxMSgweDFmMyldLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgyNTEpXT0hMHgxLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgyNDYpXT0hXzB4MTE4OWZmLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgxZmMpXT0weDEsXzB4MzQxNDk5WydsZXZlbCddPTB4MCxfMHgzNDE0OTlbXzB4M2E5ZDExKDB4MjM0KV09XzB4M2E5ZDExKDB4MWYyKSxfMHgzNDE0OTlbJ3Jvb3RFeHByZXNzaW9uJ109XzB4M2E5ZDExKDB4MWNhKSxfMHgzNDE0OTlbXzB4M2E5ZDExKDB4MWI2KV09ITB4MCxfMHgzNDE0OTlbXzB4M2E5ZDExKDB4MjY2KV09W10sXzB4MzQxNDk5W18weDNhOWQxMSgweDI0OSldPTB4MCxfMHgzNDE0OTlbXzB4M2E5ZDExKDB4MWYxKV09ITB4MCxfMHgzNDE0OTlbJ2FsbFN0ckxlbmd0aCddPTB4MCxfMHgzNDE0OTlbXzB4M2E5ZDExKDB4MWJkKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4MzQxNDk5O307Zm9yKHZhciBfMHg0Mzk4NTE9MHgwO18weDQzOTg1MTxfMHg1YzIwZDdbJ2xlbmd0aCddO18weDQzOTg1MSsrKV8weDIxNGQzN1sncHVzaCddKF8weDJjNzdhNlsnc2VyaWFsaXplJ10oeyd0aW1lTm9kZSc6XzB4NGE4ZDJjPT09J3RpbWUnfHx2b2lkIDB4MH0sXzB4NWMyMGQ3W18weDQzOTg1MV0sXzB4OTZjOGU2KF8weDFhNTJkNykse30pKTtpZihfMHg0YThkMmM9PT1fMHg1MTBhNmIoMHgxZWEpKXtsZXQgXzB4NDdkYjJjPUVycm9yW18weDUxMGE2YigweDIwNildO3RyeXtFcnJvcltfMHg1MTBhNmIoMHgyMDYpXT0weDEvMHgwLF8weDIxNGQzN1tfMHg1MTBhNmIoMHgxYWUpXShfMHgyYzc3YTZbXzB4NTEwYTZiKDB4MjM4KV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDUxMGE2YigweDFiMyldLF8weDk2YzhlNihfMHgxYTUyZDcpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yW18weDUxMGE2YigweDIwNildPV8weDQ3ZGIyYzt9fXJldHVybnsnbWV0aG9kJzpfMHg1MTBhNmIoMHgyNWYpLCd2ZXJzaW9uJzpfMHg1OTIyNTMsJ2FyZ3MnOlt7J3RzJzpfMHg1NTg0YzUsJ3Nlc3Npb24nOl8weDNkOGI1NywnYXJncyc6XzB4MjE0ZDM3LCdpZCc6XzB4MTI3NjA5LCdjb250ZXh0JzpfMHgzNjMwMjN9XX07fWNhdGNoKF8weDNmNjFjOSl7cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHg1OTIyNTMsJ2FyZ3MnOlt7J3RzJzpfMHg1NTg0YzUsJ3Nlc3Npb24nOl8weDNkOGI1NywnYXJncyc6W3sndHlwZSc6XzB4NTEwYTZiKDB4MjZjKSwnZXJyb3InOl8weDNmNjFjOSYmXzB4M2Y2MWM5W18weDUxMGE2YigweDI1ZSldfV0sJ2lkJzpfMHgxMjc2MDksJ2NvbnRleHQnOl8weDM2MzAyM31dfTt9ZmluYWxseXt0cnl7aWYoXzB4M2FjZGFmJiZfMHgzZTIxYTMpe2xldCBfMHgyYTdmNjU9XzB4MzJjMmJmKCk7XzB4M2FjZGFmW18weDUxMGE2YigweDI0OCldKyssXzB4M2FjZGFmW18weDUxMGE2YigweDFjZCldKz1fMHg1OTYxZGQoXzB4M2UyMWEzLF8weDJhN2Y2NSksXzB4M2FjZGFmWyd0cyddPV8weDJhN2Y2NSxfMHgyMWQzNmFbJ2hpdHMnXVtfMHg1MTBhNmIoMHgyNDgpXSsrLF8weDIxZDM2YVtfMHg1MTBhNmIoMHgyMTkpXVtfMHg1MTBhNmIoMHgxY2QpXSs9XzB4NTk2MWRkKF8weDNlMjFhMyxfMHgyYTdmNjUpLF8weDIxZDM2YVtfMHg1MTBhNmIoMHgyMTkpXVsndHMnXT1fMHgyYTdmNjUsKF8weDNhY2RhZlsnY291bnQnXT4weDMyfHxfMHgzYWNkYWZbXzB4NTEwYTZiKDB4MWNkKV0+MHg2NCkmJihfMHgzYWNkYWZbJ3JlZHVjZUxpbWl0cyddPSEweDApLChfMHgyMWQzNmFbXzB4NTEwYTZiKDB4MjE5KV1bJ2NvdW50J10+MHgzZTh8fF8weDIxZDM2YVtfMHg1MTBhNmIoMHgyMTkpXVtfMHg1MTBhNmIoMHgxY2QpXT4weDEyYykmJihfMHgyMWQzNmFbJ2hpdHMnXVtfMHg1MTBhNmIoMHgxZjcpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgyODlmNTRbJ19jb25zb2xlX25pbmphJ107fSkoZ2xvYmFsVGhpcyxfMHgzYmE4M2QoMHgyMGYpLF8weDNiYTgzZCgweDFhYSksXzB4M2JhODNkKDB4MWU3KSwnd2VicGFjaycsJzEuMC4wJyxfMHgzYmE4M2QoMHgxYWYpLF8weDNiYTgzZCgweDFhMiksXzB4M2JhODNkKDB4MjQ1KSk7XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImltcG9ydCB7Y3VycmVudERheUluZGV4LCBsYXN0V2VhdGhlckRhdGEsIHNldEN1cnJlbnREYXlJbmRleCwgdXBkYXRlV2VhdGhlckFwcH0gZnJvbSAnLi4vd2VhdGhlckFwcCc7XG5cbi8qKlxuICogQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgbmV4dCBhcnJvd1xuICogUGFzcyB0byB0aGUgbmV4dCBkYXkgaWYgaXMgdGhlIGxhc3QgZ28gdG8gdGhlIGZpcnN0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU5leHRBcnJvd0V2ZW50KCkge1xuICBjb25zdCBuZXh0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dF9fYXJyb3cnKTtcbiAgbmV4dEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhRm9yZUNhc3QgPSBsYXN0V2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgY29uc3QgbmV4dERheUluZGV4ID0gY3VycmVudERheUluZGV4ICsgMSA+PSB3ZWF0aGVyRGF0YUZvcmVDYXN0Lmxlbmd0aCA/IDAgOiBjdXJyZW50RGF5SW5kZXggKyAxO1xuICAgIHNldEN1cnJlbnREYXlJbmRleChuZXh0RGF5SW5kZXgpO1xuICAgIHVwZGF0ZVdlYXRoZXJBcHAoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgcHJldiBhcnJvd1xuICogUGFzcyB0byB0aGUgbmV4dCBkYXkgaWYgaXMgdGhlIGxhc3QgZ28gdG8gdGhlIGZpcnN0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByZXZBcnJvd0V2ZW50KCkge1xuICBjb25zdCBuZXh0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldl9fYXJyb3cnKTtcbiAgbmV4dEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhRm9yZUNhc3QgPSBsYXN0V2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgY29uc3QgbmV4dERheUluZGV4ID0gY3VycmVudERheUluZGV4IC0gMSA8IDAgPyB3ZWF0aGVyRGF0YUZvcmVDYXN0Lmxlbmd0aC0xIDogY3VycmVudERheUluZGV4IC0gMTtcbiAgICBzZXRDdXJyZW50RGF5SW5kZXgobmV4dERheUluZGV4KTtcbiAgICB1cGRhdGVXZWF0aGVyQXBwKCk7XG4gIH0pO1xufVxuXG5leHBvcnQge2NyZWF0ZU5leHRBcnJvd0V2ZW50LCBjcmVhdGVQcmV2QXJyb3dFdmVudH07XG4iLCJpbXBvcnQge3VzaW5nRmFocmVuaGVpdH0gZnJvbSAnLi4vd2VhdGhlckFwcCc7XG4vLyBjb25zdCB3ZWF0aGVySWNvbiA9IFtcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwMDAsXG4vLyAgICAgZGF5OiAnU3VubnknLFxuLy8gICAgIG5pZ2h0OiAnQ2xlYXInLFxuLy8gICAgIGljb246IDExMyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwMDMsXG4vLyAgICAgZGF5OiAnUGFydGx5IGNsb3VkeScsXG4vLyAgICAgbmlnaHQ6ICdQYXJ0bHkgY2xvdWR5Jyxcbi8vICAgICBpY29uOiAxMTYsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDA2LFxuLy8gICAgIGRheTogJ0Nsb3VkeScsXG4vLyAgICAgbmlnaHQ6ICdDbG91ZHknLFxuLy8gICAgIGljb246IDExOSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwMDksXG4vLyAgICAgZGF5OiAnT3ZlcmNhc3QnLFxuLy8gICAgIG5pZ2h0OiAnT3ZlcmNhc3QnLFxuLy8gICAgIGljb246IDEyMixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwMzAsXG4vLyAgICAgZGF5OiAnTWlzdCcsXG4vLyAgICAgbmlnaHQ6ICdNaXN0Jyxcbi8vICAgICBpY29uOiAxNDMsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDYzLFxuLy8gICAgIGRheTogJ1BhdGNoeSByYWluIHBvc3NpYmxlJyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSByYWluIHBvc3NpYmxlJyxcbi8vICAgICBpY29uOiAxNzYsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDY2LFxuLy8gICAgIGRheTogJ1BhdGNoeSBzbm93IHBvc3NpYmxlJyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSBzbm93IHBvc3NpYmxlJyxcbi8vICAgICBpY29uOiAxNzksXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDY5LFxuLy8gICAgIGRheTogJ1BhdGNoeSBzbGVldCBwb3NzaWJsZScsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgc2xlZXQgcG9zc2libGUnLFxuLy8gICAgIGljb246IDE4Mixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwNzIsXG4vLyAgICAgZGF5OiAnUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGUnLFxuLy8gICAgIG5pZ2h0OiAnUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGUnLFxuLy8gICAgIGljb246IDE4NSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwODcsXG4vLyAgICAgZGF5OiAnVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlJyxcbi8vICAgICBuaWdodDogJ1RodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZScsXG4vLyAgICAgaWNvbjogMjAwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTExNCxcbi8vICAgICBkYXk6ICdCbG93aW5nIHNub3cnLFxuLy8gICAgIG5pZ2h0OiAnQmxvd2luZyBzbm93Jyxcbi8vICAgICBpY29uOiAyMjcsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTE3LFxuLy8gICAgIGRheTogJ0JsaXp6YXJkJyxcbi8vICAgICBuaWdodDogJ0JsaXp6YXJkJyxcbi8vICAgICBpY29uOiAyMzAsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTM1LFxuLy8gICAgIGRheTogJ0ZvZycsXG4vLyAgICAgbmlnaHQ6ICdGb2cnLFxuLy8gICAgIGljb246IDI0OCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExNDcsXG4vLyAgICAgZGF5OiAnRnJlZXppbmcgZm9nJyxcbi8vICAgICBuaWdodDogJ0ZyZWV6aW5nIGZvZycsXG4vLyAgICAgaWNvbjogMjYwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE1MCxcbi8vICAgICBkYXk6ICdQYXRjaHkgbGlnaHQgZHJpenpsZScsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgbGlnaHQgZHJpenpsZScsXG4vLyAgICAgaWNvbjogMjYzLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE1Myxcbi8vICAgICBkYXk6ICdMaWdodCBkcml6emxlJyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IGRyaXp6bGUnLFxuLy8gICAgIGljb246IDI2Nixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExNjgsXG4vLyAgICAgZGF5OiAnRnJlZXppbmcgZHJpenpsZScsXG4vLyAgICAgbmlnaHQ6ICdGcmVlemluZyBkcml6emxlJyxcbi8vICAgICBpY29uOiAyODEsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTcxLFxuLy8gICAgIGRheTogJ0hlYXZ5IGZyZWV6aW5nIGRyaXp6bGUnLFxuLy8gICAgIG5pZ2h0OiAnSGVhdnkgZnJlZXppbmcgZHJpenpsZScsXG4vLyAgICAgaWNvbjogMjg0LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE4MCxcbi8vICAgICBkYXk6ICdQYXRjaHkgbGlnaHQgcmFpbicsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgbGlnaHQgcmFpbicsXG4vLyAgICAgaWNvbjogMjkzLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE4Myxcbi8vICAgICBkYXk6ICdMaWdodCByYWluJyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IHJhaW4nLFxuLy8gICAgIGljb246IDI5Nixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExODYsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgcmFpbiBhdCB0aW1lcycsXG4vLyAgICAgbmlnaHQ6ICdNb2RlcmF0ZSByYWluIGF0IHRpbWVzJyxcbi8vICAgICBpY29uOiAyOTksXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTg5LFxuLy8gICAgIGRheTogJ01vZGVyYXRlIHJhaW4nLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgcmFpbicsXG4vLyAgICAgaWNvbjogMzAyLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE5Mixcbi8vICAgICBkYXk6ICdIZWF2eSByYWluIGF0IHRpbWVzJyxcbi8vICAgICBuaWdodDogJ0hlYXZ5IHJhaW4gYXQgdGltZXMnLFxuLy8gICAgIGljb246IDMwNSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExOTUsXG4vLyAgICAgZGF5OiAnSGVhdnkgcmFpbicsXG4vLyAgICAgbmlnaHQ6ICdIZWF2eSByYWluJyxcbi8vICAgICBpY29uOiAzMDgsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTk4LFxuLy8gICAgIGRheTogJ0xpZ2h0IGZyZWV6aW5nIHJhaW4nLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgZnJlZXppbmcgcmFpbicsXG4vLyAgICAgaWNvbjogMzExLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTIwMSxcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW4nLFxuLy8gICAgIGljb246IDMxNCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMDQsXG4vLyAgICAgZGF5OiAnTGlnaHQgc2xlZXQnLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgc2xlZXQnLFxuLy8gICAgIGljb246IDMxNyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMDcsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQnLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQnLFxuLy8gICAgIGljb246IDMyMCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMTAsXG4vLyAgICAgZGF5OiAnUGF0Y2h5IGxpZ2h0IHNub3cnLFxuLy8gICAgIG5pZ2h0OiAnUGF0Y2h5IGxpZ2h0IHNub3cnLFxuLy8gICAgIGljb246IDMyMyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMTMsXG4vLyAgICAgZGF5OiAnTGlnaHQgc25vdycsXG4vLyAgICAgbmlnaHQ6ICdMaWdodCBzbm93Jyxcbi8vICAgICBpY29uOiAzMjYsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjE2LFxuLy8gICAgIGRheTogJ1BhdGNoeSBtb2RlcmF0ZSBzbm93Jyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSBtb2RlcmF0ZSBzbm93Jyxcbi8vICAgICBpY29uOiAzMjksXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjE5LFxuLy8gICAgIGRheTogJ01vZGVyYXRlIHNub3cnLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgc25vdycsXG4vLyAgICAgaWNvbjogMzMyLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTIyMixcbi8vICAgICBkYXk6ICdQYXRjaHkgaGVhdnkgc25vdycsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgaGVhdnkgc25vdycsXG4vLyAgICAgaWNvbjogMzM1LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTIyNSxcbi8vICAgICBkYXk6ICdIZWF2eSBzbm93Jyxcbi8vICAgICBuaWdodDogJ0hlYXZ5IHNub3cnLFxuLy8gICAgIGljb246IDMzOCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMzcsXG4vLyAgICAgZGF5OiAnSWNlIHBlbGxldHMnLFxuLy8gICAgIG5pZ2h0OiAnSWNlIHBlbGxldHMnLFxuLy8gICAgIGljb246IDM1MCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNDAsXG4vLyAgICAgZGF5OiAnTGlnaHQgcmFpbiBzaG93ZXInLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgcmFpbiBzaG93ZXInLFxuLy8gICAgIGljb246IDM1Myxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNDMsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXInLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXInLFxuLy8gICAgIGljb246IDM1Nixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNDYsXG4vLyAgICAgZGF5OiAnVG9ycmVudGlhbCByYWluIHNob3dlcicsXG4vLyAgICAgbmlnaHQ6ICdUb3JyZW50aWFsIHJhaW4gc2hvd2VyJyxcbi8vICAgICBpY29uOiAzNTksXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjQ5LFxuLy8gICAgIGRheTogJ0xpZ2h0IHNsZWV0IHNob3dlcnMnLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgc2xlZXQgc2hvd2VycycsXG4vLyAgICAgaWNvbjogMzYyLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI1Mixcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnMnLFxuLy8gICAgIGljb246IDM2NSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNTUsXG4vLyAgICAgZGF5OiAnTGlnaHQgc25vdyBzaG93ZXJzJyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IHNub3cgc2hvd2VycycsXG4vLyAgICAgaWNvbjogMzY4LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI1OCxcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnMnLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzJyxcbi8vICAgICBpY29uOiAzNzEsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjYxLFxuLy8gICAgIGRheTogJ0xpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHMnLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0cycsXG4vLyAgICAgaWNvbjogMzc0LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI2NCxcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHMnLFxuLy8gICAgIGljb246IDM3Nyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNzMsXG4vLyAgICAgZGF5OiAnUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyJyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlcicsXG4vLyAgICAgaWNvbjogMzg2LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI3Nixcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlcicsXG4vLyAgICAgbmlnaHQ6ICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlcicsXG4vLyAgICAgaWNvbjogMzg5LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI3OSxcbi8vICAgICBkYXk6ICdQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXInLFxuLy8gICAgIG5pZ2h0OiAnUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyJyxcbi8vICAgICBpY29uOiAzOTIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjgyLFxuLy8gICAgIGRheTogJ01vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyJyxcbi8vICAgICBpY29uOiAzOTUsXG4vLyAgIH0sXG4vLyBdO1xuXG4vKipcbiAqIFByaW50IHRoZSB3ZWF0aGVyIHNsaWRlclxuICogWW91IGNhbiBzY3JvbGwgdGhyb3VnaCBhbGwgdGhlIHNsaWRlcyBvZiB0aGUgZGF5c1xuICogQHBhcmFtIHtPYmplY3R9IGRheVxuICovXG5mdW5jdGlvbiBwcmludFdlYXRoZXJTbGlkZXIoZGF5KSB7XG4gIGNvbnN0IHdlYXRoZXJJY29uRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJfX3NsaWRlcl9faW5mb3JtYXRpb25fX2ltZycpO1xuICBjb25zdCB3ZWF0aGVyVGl0bGVEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbl9fdGl0bGUnKTtcbiAgY29uc3Qgd2luZFZhbHVlRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRfX3ZhbHVlX19kYXRhJyk7XG4gIGNvbnN0IHRlbXBWYWx1ZURheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wX19kYXRhX192YWx1ZScpO1xuICBjb25zdCBodW1pZGl0eVZhbHVlRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X19kYXRhX192YWx1ZScpO1xuXG4gIC8vIHdlYXRoZXJJY29uRGF5LnNyYyA9IHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvd2VhdGhlci1pY29ucy8ke3dlYXRoZXJJY29uW2xpc3REYXlzWzBdLndlYXRoZXIuY29kZV0uaWNvbn0ucG5nYCk7XG4gIHdlYXRoZXJJY29uRGF5LnNyYyA9IHJlcXVpcmUoYCR7Z2V0V2VhdGhlckljb24oZGF5LmNvbmRpdGlvbi5jb2RlKX1gKTsgLy8gVE9ETzogY2hhbmdlIHRoZSBpY29uXG4gIHdlYXRoZXJUaXRsZURheS5pbm5lckhUTUwgPSBkYXkuY29uZGl0aW9uLnRleHQ7XG4gIHdpbmRWYWx1ZURheS50ZXh0Q29udGVudCA9IGRheS5hdmd2aXNfa207XG4gIHRlbXBWYWx1ZURheS50ZXh0Q29udGVudCA9IHVzaW5nRmFocmVuaGVpdCA/IE1hdGgucm91bmQoZGF5LmF2Z3RlbXBfZikgOiBNYXRoLnJvdW5kKGRheS5hdmd0ZW1wX2MpO1xuICBodW1pZGl0eVZhbHVlRGF5LnRleHRDb250ZW50ID0gZGF5LmF2Z2h1bWlkaXR5O1xufVxuXG4vKipcbiAqIENvbnZlcnQgdGhlIGNvZGUgb2YgdGhlIHdlYXRoZXIgdG8gdGhlIGljb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGljb25cbiAqL1xuZnVuY3Rpb24gZ2V0V2VhdGhlckljb24oY29kZSkge1xuICBjb25zdCBtYWluUGF0aCA9ICcuL2ltZy8nO1xuICBsZXQgaWNvbk5hbWUgPSAnJztcblxuICBpZiAoY29kZSA9PSAxMDAwKSB7XG4gICAgaWNvbk5hbWUgPSAnc3VubnkucG5nJztcbiAgfSBlbHNlIGlmIChjb2RlID09IDEwMDMpIHtcbiAgICBpY29uTmFtZSA9ICdwYXJ0bHktY2xvdWR5LWRheS5wbmcnO1xuICB9IGVsc2UgaWYgKGNvZGUgPT0gMTAwNikge1xuICAgIGljb25OYW1lID0gJ2Nsb3VkeS5wbmcnO1xuICB9IGVsc2UgaWYgKGNvZGUgPT0gMTAwOSkge1xuICAgIGljb25OYW1lID0gJ292ZXJjYXN0LnBuZyc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMDMwIHx8IGNvZGUgPT0gMTEzNSB8fCBjb2RlID09IDExNDcpIHsgLy8gQWxsIHRoZSBtaXN0IGNvZGVzXG4gICAgaWNvbk5hbWUgPSAnbWlzdC5wbmcnO1xuICB9IGVsc2UgaWYgKGNvZGUgPT0gMTA2MyB8fFxuICAgIGNvZGUgPT0gMTA3MiB8fFxuICAgIGNvZGUgPT0gMTE1MCB8fFxuICAgIGNvZGUgPT0gMTE1MyB8fFxuICAgIGNvZGUgPT0gMTE4MCB8fFxuICAgIGNvZGUgPT0gMTE4MyB8fFxuICAgIGNvZGUgPT0gMTE4NiB8fFxuICAgIGNvZGUgPT0gMTE4OSB8fFxuICAgIGNvZGUgPT0gMTE5MiB8fFxuICAgIGNvZGUgPT0gMTE5NSB8fFxuICAgIGNvZGUgPT0gMTI0MCB8fFxuICAgIGNvZGUgPT0gMTI0MyB8fFxuICAgIGNvZGUgPT0gMTI0NikgeyAvLyBBbGwgdGhlIHJhaW4gY29kZXNcbiAgICBpY29uTmFtZSA9ICdyYWluLnBuZyc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMDY2IHx8XG4gICAgY29kZSA9PSAxMjEwIHx8XG4gICAgY29kZSA9PSAxMjEzIHx8XG4gICAgY29kZSA9PSAxMjE2IHx8XG4gICAgY29kZSA9PSAxMjE5IHx8XG4gICAgY29kZSA9PSAxMjIyIHx8XG4gICAgY29kZSA9PSAxMjI1IHx8XG4gICAgY29kZSA9PSAxMjM3IHx8XG4gICAgY29kZSA9PSAxMjU1IHx8XG4gICAgY29kZSA9PSAxMjU4IHx8XG4gICAgY29kZSA9PSAxMjYxIHx8XG4gICAgY29kZSA9PSAxMjY0KSB7IC8vIEFsbCB0aGUgc25vdyBjb2Rlc1xuICAgIGljb25OYW1lID0gJ3Nub3cucG5nJztcbiAgfSBlbHNlIGlmIChjb2RlID09IDEwNjkgfHxcbiAgICBjb2RlID09IDExMTQgfHxcbiAgICBjb2RlID09IDExNjggfHxcbiAgICBjb2RlID09IDExNzEgfHxcbiAgICBjb2RlID09IDExOTggfHxcbiAgICBjb2RlID09IDEyMDEgfHxcbiAgICBjb2RlID09IDEyMDQgfHxcbiAgICBjb2RlID09IDEyMDcgfHxcbiAgICBjb2RlID09IDEyNDkgfHxcbiAgICBjb2RlID09IDEyNTIpIHsgLy8gQWxsIHRoZSBzbGVldCBjb2Rlc1xuICAgIGljb25OYW1lID0gJ3NsZWV0LnBuZyc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMDg3IHx8XG4gICAgY29kZSA9PSAxMjczIHx8XG4gICAgY29kZSA9PSAxMjc2IHx8XG4gICAgY29kZSA9PSAxMjc5IHx8XG4gICAgY29kZSA9PSAxMjgyKSB7IC8vIEFsbCB0aGUgdGh1bmRlcnN0b3JtIGNvZGVzXG4gICAgaWNvbk5hbWUgPSAndGh1bmRlcnN0b3JtLnBuZyc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMTE3KSB7IC8vIEFsbCB0aGUgd2luZCBjb2Rlc1xuICAgIGljb25OYW1lID0gJ3dpbmQucG5nJztcbiAgfVxuXG4gIHJldHVybiBtYWluUGF0aCArIGljb25OYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmludFdlYXRoZXJTbGlkZXI7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1nL2Nsb3VkeS5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyU2xpZGVyL2ltZy9jbG91ZHkucG5nXCIsXG5cdFwiLi9pbWcvbWlzdC5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyU2xpZGVyL2ltZy9taXN0LnBuZ1wiLFxuXHRcIi4vaW1nL292ZXJjYXN0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvaW1nL292ZXJjYXN0LnBuZ1wiLFxuXHRcIi4vaW1nL3BhcnRseS1jbG91ZHktZGF5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvaW1nL3BhcnRseS1jbG91ZHktZGF5LnBuZ1wiLFxuXHRcIi4vaW1nL3JhaW4ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlclNsaWRlci9pbWcvcmFpbi5wbmdcIixcblx0XCIuL2ltZy9zbGVldC5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyU2xpZGVyL2ltZy9zbGVldC5wbmdcIixcblx0XCIuL2ltZy9zbm93LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvaW1nL3Nub3cucG5nXCIsXG5cdFwiLi9pbWcvc3VubnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlclNsaWRlci9pbWcvc3VubnkucG5nXCIsXG5cdFwiLi9pbWcvdGh1bmRlcnN0b3JtLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvaW1nL3RodW5kZXJzdG9ybS5wbmdcIixcblx0XCIuL2ltZy93aW5kLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvaW1nL3dpbmQucG5nXCIsXG5cdFwiLi9zbGlkZXJBcnJvd3NcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyU2xpZGVyL3NsaWRlckFycm93cy5qc1wiLFxuXHRcIi4vc2xpZGVyQXJyb3dzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlclNsaWRlci9zbGlkZXJBcnJvd3MuanNcIixcblx0XCIuL3dlYXRoZXJTbGlkZXJcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyU2xpZGVyL3dlYXRoZXJTbGlkZXIuanNcIixcblx0XCIuL3dlYXRoZXJTbGlkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyU2xpZGVyL3dlYXRoZXJTbGlkZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlclNsaWRlciBzeW5jIHJlY3Vyc2l2ZSBeLiokXCI7IiwiaW1wb3J0ICcuL2Nzcy9nbG9iYWwuY3NzJztcbmltcG9ydCAnLi9jc3MvaGVhZGVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2xvYWRpbmcuY3NzJztcbmltcG9ydCAnLi9jc3Mvc2xpZGVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2hvdXJseVNsaWRlci5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9zZWFyY2guY3NzJztcbmltcG9ydCB7cHJpbnRXZWF0aGVyQXBwfSBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJBcHAnO1xuaW1wb3J0IGxvYWRpbmdTdmcgZnJvbSAnLi9pbWcvbG9hZGluZy5zdmcnO1xuaW1wb3J0IGNyZWF0ZVNlYXJjaEV2ZW50IGZyb20gJy4vYXNzZXRzL3dlYXRoZXJBcHAvc2VhcmNoQm94L3NlYXJjaEJveCc7XG5pbXBvcnQgY3JlYXRlRmFocmVuaGVpdEV2ZW50TGlzdGVuZXJzIGZyb20gJy4vYXNzZXRzL3dlYXRoZXJBcHAvZmFocmVuaGVpdENoZWNrL2ZhaHJlbmhlaXRDaGVjayc7XG5pbXBvcnQge2NyZWF0ZU5leHRBcnJvd0V2ZW50LCBjcmVhdGVQcmV2QXJyb3dFdmVudH0gZnJvbSAnLi9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyU2xpZGVyL3NsaWRlckFycm93cyc7XG5cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBpcyB0aGUgbWFpbiBmdW5jdGlvbiBvZiB0aGUgYXBwbGljYXRpb25cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIHNldExvYWRpbmdJbWcoKTtcbiAgcHJpbnRXZWF0aGVyQXBwKCk7XG4gIGNyZWF0ZVNlYXJjaEV2ZW50KCk7XG4gIGNyZWF0ZUZhaHJlbmhlaXRFdmVudExpc3RlbmVycygpO1xuICBjcmVhdGVOZXh0QXJyb3dFdmVudCgpO1xuICBjcmVhdGVQcmV2QXJyb3dFdmVudCgpO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgbG9hZGluZyBpbWFnZSB0byB0aGUgRE9NXG4gKi9cbmZ1bmN0aW9uIHNldExvYWRpbmdJbWcoKSB7XG4gIGNvbnN0IGxvYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xuICBjb25zdCBsb2FkaW5nSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxvYWRpbmdJbWcuc3JjID0gbG9hZGluZ1N2ZztcbiAgbG9hZGluZ0ltZy5hbHQgPSAnTG9hZGluZy4uLic7XG4gIGxvYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZGluZ0ltZyk7XG59XG5cbmluaXQoKTsgLy8gQ2FsbGluZyB0aGUgbWFpbiBmdW5jdGlvblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9