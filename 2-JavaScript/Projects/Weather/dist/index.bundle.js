"use strict";
(self["webpackChunkweather"] = self["webpackChunkweather"] || []).push([["index"],{

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

/***/ "./src/css/hourlySlider.css":
/*!**********************************!*\
  !*** ./src/css/hourlySlider.css ***!
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

/***/ "./src/assets/apiCalls/apiCalls.js":
/*!*****************************************!*\
  !*** ./src/assets/apiCalls/apiCalls.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=${"098a63f78d284c26b39202357230908"}&q=${location}&days=3&aqi=yes&alerts=no`)
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
  hourlyImage.src = __webpack_require__(/*! ../weatherSlider/img/soleado.png */ "./src/assets/weatherApp/weatherSlider/img/soleado.png");

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


/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x230995=_0x413f;(function(_0x1f53c0,_0x363b1b){var _0x271a83=_0x413f,_0x5e0775=_0x1f53c0();while(!![]){try{var _0x242b40=-parseInt(_0x271a83(0x1e6))/0x1+-parseInt(_0x271a83(0x1b8))/0x2+-parseInt(_0x271a83(0x1cc))/0x3+parseInt(_0x271a83(0x1e5))/0x4*(-parseInt(_0x271a83(0x21d))/0x5)+-parseInt(_0x271a83(0x195))/0x6*(-parseInt(_0x271a83(0x241))/0x7)+-parseInt(_0x271a83(0x255))/0x8*(-parseInt(_0x271a83(0x239))/0x9)+parseInt(_0x271a83(0x1e7))/0xa*(parseInt(_0x271a83(0x279))/0xb);if(_0x242b40===_0x363b1b)break;else _0x5e0775['push'](_0x5e0775['shift']());}catch(_0x5d3cc1){_0x5e0775['push'](_0x5e0775['shift']());}}}(_0x27f0,0xea6b5));var ue=Object['create'],te=Object['defineProperty'],he=Object['getOwnPropertyDescriptor'],le=Object[_0x230995(0x20e)],fe=Object[_0x230995(0x216)],_e=Object['prototype'][_0x230995(0x230)],pe=(_0x34e0bb,_0x407d23,_0x32de25,_0x36c36a)=>{var _0xc36700=_0x230995;if(_0x407d23&&typeof _0x407d23==_0xc36700(0x258)||typeof _0x407d23==_0xc36700(0x1ed)){for(let _0x2d5904 of le(_0x407d23))!_e[_0xc36700(0x1a4)](_0x34e0bb,_0x2d5904)&&_0x2d5904!==_0x32de25&&te(_0x34e0bb,_0x2d5904,{'get':()=>_0x407d23[_0x2d5904],'enumerable':!(_0x36c36a=he(_0x407d23,_0x2d5904))||_0x36c36a[_0xc36700(0x23b)]});}return _0x34e0bb;},ne=(_0x35597d,_0x381cf4,_0x1f7ce0)=>(_0x1f7ce0=_0x35597d!=null?ue(fe(_0x35597d)):{},pe(_0x381cf4||!_0x35597d||!_0x35597d[_0x230995(0x1a6)]?te(_0x1f7ce0,_0x230995(0x202),{'value':_0x35597d,'enumerable':!0x0}):_0x1f7ce0,_0x35597d)),Q=class{constructor(_0x2fc440,_0x152ce7,_0x422a6b,_0x203d2c){var _0x2f1720=_0x230995;this[_0x2f1720(0x206)]=_0x2fc440,this[_0x2f1720(0x214)]=_0x152ce7,this[_0x2f1720(0x1b1)]=_0x422a6b,this['nodeModules']=_0x203d2c,this[_0x2f1720(0x215)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x2f1720(0x203)]=!0x1,this['_connecting']=!0x1,this[_0x2f1720(0x1f9)]=!!this[_0x2f1720(0x206)][_0x2f1720(0x1ee)],this[_0x2f1720(0x234)]=null,this[_0x2f1720(0x225)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x2f1720(0x272)]=_0x2f1720(0x1df),this[_0x2f1720(0x1a9)]=(this[_0x2f1720(0x1f9)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this['_webSocketErrorDocsLink'];}async[_0x230995(0x260)](){var _0x2f9c83=_0x230995;if(this['_WebSocketClass'])return this[_0x2f9c83(0x234)];let _0x5431b1;if(this[_0x2f9c83(0x1f9)])_0x5431b1=this[_0x2f9c83(0x206)]['WebSocket'];else{if(this[_0x2f9c83(0x206)][_0x2f9c83(0x240)]?.[_0x2f9c83(0x20b)])_0x5431b1=this[_0x2f9c83(0x206)]['process']?.[_0x2f9c83(0x20b)];else try{let _0x353acb=await import(_0x2f9c83(0x250));_0x5431b1=(await import((await import('url'))[_0x2f9c83(0x24e)](_0x353acb[_0x2f9c83(0x22d)](this[_0x2f9c83(0x22b)],'ws/index.js'))[_0x2f9c83(0x1ad)]()))[_0x2f9c83(0x202)];}catch{try{_0x5431b1=require(require(_0x2f9c83(0x250))[_0x2f9c83(0x22d)](this[_0x2f9c83(0x22b)],'ws'));}catch{throw new Error(_0x2f9c83(0x223));}}}return this[_0x2f9c83(0x234)]=_0x5431b1,_0x5431b1;}[_0x230995(0x262)](){var _0x445a91=_0x230995;this[_0x445a91(0x1a8)]||this[_0x445a91(0x203)]||this['_connectAttemptCount']>=this[_0x445a91(0x265)]||(this[_0x445a91(0x1e2)]=!0x1,this[_0x445a91(0x1a8)]=!0x0,this[_0x445a91(0x225)]++,this['_ws']=new Promise((_0xb961,_0x2e1eea)=>{var _0x30026b=_0x445a91;this[_0x30026b(0x260)]()['then'](_0x442a1c=>{var _0xec58ba=_0x30026b;let _0x224a4d=new _0x442a1c(_0xec58ba(0x26a)+this[_0xec58ba(0x214)]+':'+this[_0xec58ba(0x1b1)]);_0x224a4d[_0xec58ba(0x244)]=()=>{var _0x5263ab=_0xec58ba;this[_0x5263ab(0x215)]=!0x1,this[_0x5263ab(0x26e)](_0x224a4d),this[_0x5263ab(0x222)](),_0x2e1eea(new Error(_0x5263ab(0x20d)));},_0x224a4d[_0xec58ba(0x261)]=()=>{var _0x39a044=_0xec58ba;this['_inBrowser']||_0x224a4d[_0x39a044(0x20f)]&&_0x224a4d[_0x39a044(0x20f)][_0x39a044(0x1d1)]&&_0x224a4d[_0x39a044(0x20f)][_0x39a044(0x1d1)](),_0xb961(_0x224a4d);},_0x224a4d[_0xec58ba(0x1c5)]=()=>{this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x224a4d),this['_attemptToReconnectShortly']();},_0x224a4d['onmessage']=_0xec4b43=>{var _0x5e86e2=_0xec58ba;try{_0xec4b43&&_0xec4b43[_0x5e86e2(0x1f1)]&&this[_0x5e86e2(0x1f9)]&&JSON['parse'](_0xec4b43[_0x5e86e2(0x1f1)])['method']===_0x5e86e2(0x1d6)&&this[_0x5e86e2(0x206)]['location'][_0x5e86e2(0x1d6)]();}catch{}};})[_0x30026b(0x205)](_0xee9741=>(this[_0x30026b(0x203)]=!0x0,this['_connecting']=!0x1,this[_0x30026b(0x1e2)]=!0x1,this[_0x30026b(0x215)]=!0x0,this[_0x30026b(0x225)]=0x0,_0xee9741))[_0x30026b(0x249)](_0x186c06=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x30026b(0x1be)](_0x30026b(0x224)+this['_webSocketErrorDocsLink']),_0x2e1eea(new Error(_0x30026b(0x228)+(_0x186c06&&_0x186c06[_0x30026b(0x1bb)])))));}));}['_disposeWebsocket'](_0x210e3d){var _0x40e4e4=_0x230995;this[_0x40e4e4(0x203)]=!0x1,this[_0x40e4e4(0x1a8)]=!0x1;try{_0x210e3d[_0x40e4e4(0x1c5)]=null,_0x210e3d[_0x40e4e4(0x244)]=null,_0x210e3d[_0x40e4e4(0x261)]=null;}catch{}try{_0x210e3d[_0x40e4e4(0x1b7)]<0x2&&_0x210e3d[_0x40e4e4(0x22a)]();}catch{}}[_0x230995(0x222)](){var _0x130709=_0x230995;clearTimeout(this[_0x130709(0x1de)]),!(this['_connectAttemptCount']>=this[_0x130709(0x265)])&&(this[_0x130709(0x1de)]=setTimeout(()=>{var _0x1e2424=_0x130709;this[_0x1e2424(0x203)]||this[_0x1e2424(0x1a8)]||(this[_0x1e2424(0x262)](),this[_0x1e2424(0x1d3)]?.[_0x1e2424(0x249)](()=>this[_0x1e2424(0x222)]()));},0x1f4),this[_0x130709(0x1de)][_0x130709(0x1d1)]&&this['_reconnectTimeout'][_0x130709(0x1d1)]());}async[_0x230995(0x1d4)](_0x3aa910){var _0x46d315=_0x230995;try{if(!this['_allowedToSend'])return;this['_allowedToConnectOnSend']&&this[_0x46d315(0x262)](),(await this['_ws'])[_0x46d315(0x1d4)](JSON[_0x46d315(0x22e)](_0x3aa910));}catch(_0x5a1732){console['warn'](this[_0x46d315(0x1a9)]+':\\x20'+(_0x5a1732&&_0x5a1732['message'])),this[_0x46d315(0x215)]=!0x1,this['_attemptToReconnectShortly']();}}};function _0x27f0(){var _0x5b2a13=['\\x20server','_quotedRegExp','stackTraceLimit','serialize','capped','getter','default','_connected','bind','then','global','props','set','_numberRegExp','perf_hooks','_WebSocket','reduceLimits','logger\\x20websocket\\x20error','getOwnPropertyNames','_socket','current','strLength','_setNodeExpandableState','performance','host','_allowedToSend','getPrototypeOf','valueOf','unshift','_p_length','autoExpandPreviousObjects','expId','_getOwnPropertyDescriptor','20YCSEOI','_addFunctionsNode','index','negativeInfinity','_consoleNinjaAllowedToStart','_attemptToReconnectShortly','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_connectAttemptCount','_console_ninja','name','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','concat','close','nodeModules','64269','join','stringify','toLowerCase','hasOwnProperty','count','cappedElements','get','_WebSocketClass','_isUndefined','','_isPrimitiveWrapperType',':logPointId:','89253UlUoaD','value','enumerable','_objectToString','autoExpand','NEGATIVE_INFINITY','log','process','7113274ERjvjf','constructor','_isMap','onerror','autoExpandLimit','_setNodeQueryPath','1.0.0','_addLoadNode','catch','date','nuxt','_setNodeLabel','_blacklistedProperty','pathToFileURL','...','path','match','_Symbol','_hasSymbolPropertyOnItsPath','astro','568PZEtyV','funcName','POSITIVE_INFINITY','object','127.0.0.1','_additionalMetadata','length','_undefined','_addObjectProperty','_getOwnPropertySymbols','_addProperty','getWebSocketClass','onopen','_connectToHostNow','String','time','_maxConnectAttemptCount','_cleanNode','versions',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"MacBook-Pro-de-Jose.local\",\"192.168.1.131\"],'sort','ws://','node','autoExpandMaxDepth','_capIfString','_disposeWebsocket','[object\\x20Array]','_p_name','location','_webSocketErrorDocsLink','_propertyAccessor','unknown','disabledLog','_type','Error','type','52262573rMGqJe','6UviXjg','trace','Symbol','test','depth','_treeNodePropertiesBeforeFullValue','_getOwnPropertyNames','RegExp','_hasSetOnItsPath','substr','number','string','getOwnPropertySymbols','_HTMLAllCollection','level','call','_setNodeExpressionPath','__es'+'Module','_keyStrRegExp','_connecting','_sendErrorMessage','elapsed','bigint','prototype','toString','Map','isExpressionToEvaluate','autoExpandPropertyCount','port','webpack','isArray','negativeZero','_property','_treeNodePropertiesAfterFullValue','readyState','3169520sYdYbg','[object\\x20Date]','root_exp','message','_setNodeId','slice','warn','_isPrimitiveType','resolveGetters','elements','allStrLength','array','_processTreeNodeResult','onclose','_sortProps','root_exp_id','\\x20browser','timeEnd','null','error','5712039AsmlQc','_dateToString','noFunctions','timeStamp','_setNodePermissions','unref','push','_ws','send','replace','reload','_propertyName','HTMLAllCollection','forEach','parent','_isNegativeZero',\"/Users/josemaria/.vscode-insiders/extensions/wallabyjs.console-ninja-0.0.198/node_modules\",'console','_reconnectTimeout','https://tinyurl.com/37x8b79t','expressionsToEvaluate','_p_','_allowedToConnectOnSend','stack','hits','1763844ETMsjQ','258634ahPWFF','10ZNfnjf','Set','sortProps','hrtime','symbol','setter','function','WebSocket','cappedProps','totalStrLength','data','indexOf','now','Number','split','_regExpToString','Buffer','undefined','_inBrowser','[object\\x20BigInt]','_console_ninja_session'];_0x27f0=function(){return _0x5b2a13;};return _0x27f0();}function V(_0x5a496d,_0x1774b1,_0x54bccd,_0x17077b,_0x341dd6){var _0x3d6393=_0x230995;let _0x2a1b16=_0x54bccd[_0x3d6393(0x1f5)](',')['map'](_0x27d9a1=>{var _0x511af5=_0x3d6393;try{_0x5a496d[_0x511af5(0x1fb)]||((_0x341dd6==='next.js'||_0x341dd6==='remix'||_0x341dd6===_0x511af5(0x254))&&(_0x341dd6+=_0x5a496d['process']?.[_0x511af5(0x267)]?.[_0x511af5(0x26b)]?_0x511af5(0x1fc):_0x511af5(0x1c8)),_0x5a496d[_0x511af5(0x1fb)]={'id':+new Date(),'tool':_0x341dd6});let _0xb6e3b4=new Q(_0x5a496d,_0x1774b1,_0x27d9a1,_0x17077b);return _0xb6e3b4[_0x511af5(0x1d4)][_0x511af5(0x204)](_0xb6e3b4);}catch(_0x390d9a){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x390d9a&&_0x390d9a[_0x511af5(0x1bb)]),()=>{};}});return _0x395388=>_0x2a1b16[_0x3d6393(0x1d9)](_0x232e5c=>_0x232e5c(_0x395388));}function _0x413f(_0x7e1ead,_0x1f5c6e){var _0x27f084=_0x27f0();return _0x413f=function(_0x413f9c,_0x31d98d){_0x413f9c=_0x413f9c-0x195;var _0x259898=_0x27f084[_0x413f9c];return _0x259898;},_0x413f(_0x7e1ead,_0x1f5c6e);}function H(_0x54448a){var _0x4a0456=_0x230995;let _0x1a56b8=function(_0x48661a,_0x3d5762){return _0x3d5762-_0x48661a;},_0x3dfde6;if(_0x54448a[_0x4a0456(0x213)])_0x3dfde6=function(){var _0x358eba=_0x4a0456;return _0x54448a[_0x358eba(0x213)]['now']();};else{if(_0x54448a['process']&&_0x54448a[_0x4a0456(0x240)][_0x4a0456(0x1ea)])_0x3dfde6=function(){var _0x986177=_0x4a0456;return _0x54448a['process'][_0x986177(0x1ea)]();},_0x1a56b8=function(_0x48fe9d,_0xe327c4){return 0x3e8*(_0xe327c4[0x0]-_0x48fe9d[0x0])+(_0xe327c4[0x1]-_0x48fe9d[0x1])/0xf4240;};else try{let {performance:_0xf004a2}=require(_0x4a0456(0x20a));_0x3dfde6=function(){var _0x13230e=_0x4a0456;return _0xf004a2[_0x13230e(0x1f3)]();};}catch{_0x3dfde6=function(){return+new Date();};}}return{'elapsed':_0x1a56b8,'timeStamp':_0x3dfde6,'now':()=>Date[_0x4a0456(0x1f3)]()};}function X(_0x4916dd,_0x33499d,_0x3d4aba){var _0x5a279d=_0x230995;if(_0x4916dd['_consoleNinjaAllowedToStart']!==void 0x0)return _0x4916dd[_0x5a279d(0x221)];let _0x5286d7=_0x4916dd[_0x5a279d(0x240)]?.[_0x5a279d(0x267)]?.[_0x5a279d(0x26b)];return _0x5286d7&&_0x3d4aba===_0x5a279d(0x24b)?_0x4916dd[_0x5a279d(0x221)]=!0x1:_0x4916dd[_0x5a279d(0x221)]=_0x5286d7||!_0x33499d||_0x4916dd[_0x5a279d(0x271)]?.['hostname']&&_0x33499d['includes'](_0x4916dd[_0x5a279d(0x271)]['hostname']),_0x4916dd[_0x5a279d(0x221)];}((_0x1aecc1,_0x169db0,_0x3f784f,_0x505869,_0x5aee63,_0x94cf8c,_0x49c8c5,_0x58a732,_0x290895)=>{var _0x455271=_0x230995;if(_0x1aecc1['_console_ninja'])return _0x1aecc1[_0x455271(0x226)];if(!X(_0x1aecc1,_0x58a732,_0x5aee63))return _0x1aecc1[_0x455271(0x226)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1aecc1['_console_ninja'];let _0x589ff4={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x393c70={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x21ece9=H(_0x1aecc1),_0x1b1c3a=_0x21ece9[_0x455271(0x1aa)],_0x2cb31d=_0x21ece9[_0x455271(0x1cf)],_0x3a9a2f=_0x21ece9[_0x455271(0x1f3)],_0x18be6e={'hits':{},'ts':{}},_0x149d0a=_0x39378a=>{_0x18be6e['ts'][_0x39378a]=_0x2cb31d();},_0x44d8cc=(_0x1e7bc8,_0x2d62f4)=>{var _0x5c1ab3=_0x455271;let _0x2d70ae=_0x18be6e['ts'][_0x2d62f4];if(delete _0x18be6e['ts'][_0x2d62f4],_0x2d70ae){let _0x16c176=_0x1b1c3a(_0x2d70ae,_0x2cb31d());_0x1287e4(_0x1898be(_0x5c1ab3(0x264),_0x1e7bc8,_0x3a9a2f(),_0x57c957,[_0x16c176],_0x2d62f4));}},_0x3d6344=_0x427069=>_0x157010=>{var _0x504ff1=_0x455271;try{_0x149d0a(_0x157010),_0x427069(_0x157010);}finally{_0x1aecc1[_0x504ff1(0x1dd)][_0x504ff1(0x264)]=_0x427069;}},_0x3d5a50=_0x2d385b=>_0x28da9=>{var _0x5d3086=_0x455271;try{let [_0x3d3205,_0x440517]=_0x28da9[_0x5d3086(0x1f5)](_0x5d3086(0x238));_0x44d8cc(_0x440517,_0x3d3205),_0x2d385b(_0x3d3205);}finally{_0x1aecc1[_0x5d3086(0x1dd)][_0x5d3086(0x1c9)]=_0x2d385b;}};_0x1aecc1[_0x455271(0x226)]={'consoleLog':(_0x528632,_0x3b4a40)=>{var _0x33e13d=_0x455271;_0x1aecc1[_0x33e13d(0x1dd)][_0x33e13d(0x23f)][_0x33e13d(0x227)]!==_0x33e13d(0x275)&&_0x1287e4(_0x1898be(_0x33e13d(0x23f),_0x528632,_0x3a9a2f(),_0x57c957,_0x3b4a40));},'consoleTrace':(_0x1215b3,_0x349603)=>{var _0x4906aa=_0x455271;_0x1aecc1[_0x4906aa(0x1dd)][_0x4906aa(0x23f)]['name']!=='disabledTrace'&&_0x1287e4(_0x1898be(_0x4906aa(0x196),_0x1215b3,_0x3a9a2f(),_0x57c957,_0x349603));},'consoleTime':()=>{var _0x202526=_0x455271;_0x1aecc1[_0x202526(0x1dd)][_0x202526(0x264)]=_0x3d6344(_0x1aecc1[_0x202526(0x1dd)]['time']);},'consoleTimeEnd':()=>{var _0x3f791b=_0x455271;_0x1aecc1['console'][_0x3f791b(0x1c9)]=_0x3d5a50(_0x1aecc1['console'][_0x3f791b(0x1c9)]);},'autoLog':(_0x5ed08c,_0x47e90c)=>{var _0x3e6b72=_0x455271;_0x1287e4(_0x1898be(_0x3e6b72(0x23f),_0x47e90c,_0x3a9a2f(),_0x57c957,[_0x5ed08c]));},'autoLogMany':(_0x3cf7bf,_0x464c7e)=>{var _0x4fc658=_0x455271;_0x1287e4(_0x1898be(_0x4fc658(0x23f),_0x3cf7bf,_0x3a9a2f(),_0x57c957,_0x464c7e));},'autoTrace':(_0x7d917e,_0x527ead)=>{var _0x258cec=_0x455271;_0x1287e4(_0x1898be(_0x258cec(0x196),_0x527ead,_0x3a9a2f(),_0x57c957,[_0x7d917e]));},'autoTraceMany':(_0x19a00e,_0x7ce033)=>{var _0x3ad3e2=_0x455271;_0x1287e4(_0x1898be(_0x3ad3e2(0x196),_0x19a00e,_0x3a9a2f(),_0x57c957,_0x7ce033));},'autoTime':(_0x31015b,_0x2d9994,_0x39d7c2)=>{_0x149d0a(_0x39d7c2);},'autoTimeEnd':(_0x3e33cc,_0x3aa7b1,_0x50e02b)=>{_0x44d8cc(_0x3aa7b1,_0x50e02b);}};let _0x1287e4=V(_0x1aecc1,_0x169db0,_0x3f784f,_0x505869,_0x5aee63),_0x57c957=_0x1aecc1['_console_ninja_session'];class _0x30697{constructor(){var _0x434125=_0x455271;this[_0x434125(0x1a7)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x434125(0x1fd)]=/'([^\\\\']|\\\\')*'/,this[_0x434125(0x25c)]=_0x1aecc1[_0x434125(0x1f8)],this[_0x434125(0x1a2)]=_0x1aecc1[_0x434125(0x1d8)],this[_0x434125(0x21c)]=Object['getOwnPropertyDescriptor'],this[_0x434125(0x19b)]=Object[_0x434125(0x20e)],this[_0x434125(0x252)]=_0x1aecc1[_0x434125(0x197)],this[_0x434125(0x1f6)]=RegExp[_0x434125(0x1ac)][_0x434125(0x1ad)],this['_dateToString']=Date[_0x434125(0x1ac)][_0x434125(0x1ad)];}[_0x455271(0x1ff)](_0x357da1,_0x1980e9,_0x180616,_0x5166f7){var _0x581162=_0x455271,_0x3d0195=this,_0x1d7cfa=_0x180616[_0x581162(0x23d)];function _0x1752d1(_0x120788,_0x1a98cf,_0x2a225b){var _0x5432c4=_0x581162;_0x1a98cf[_0x5432c4(0x278)]=_0x5432c4(0x274),_0x1a98cf[_0x5432c4(0x1cb)]=_0x120788['message'],_0x1552df=_0x2a225b[_0x5432c4(0x26b)][_0x5432c4(0x210)],_0x2a225b['node'][_0x5432c4(0x210)]=_0x1a98cf,_0x3d0195['_treeNodePropertiesBeforeFullValue'](_0x1a98cf,_0x2a225b);}try{_0x180616[_0x581162(0x1a3)]++,_0x180616[_0x581162(0x23d)]&&_0x180616[_0x581162(0x21a)][_0x581162(0x1d2)](_0x1980e9);var _0x1e0319,_0x40e689,_0x21ce69,_0x58e420,_0xac47bc=[],_0x3c1844=[],_0x24c5bf,_0x593ff7=this[_0x581162(0x276)](_0x1980e9),_0x577a7b=_0x593ff7===_0x581162(0x1c3),_0x21adee=!0x1,_0x63c199=_0x593ff7===_0x581162(0x1ed),_0x94e4e0=this[_0x581162(0x1bf)](_0x593ff7),_0x370a56=this[_0x581162(0x237)](_0x593ff7),_0x3ab83a=_0x94e4e0||_0x370a56,_0x248fc9={},_0xf50f4=0x0,_0x648d56=!0x1,_0x1552df,_0x27a24c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x180616[_0x581162(0x199)]){if(_0x577a7b){if(_0x40e689=_0x1980e9['length'],_0x40e689>_0x180616['elements']){for(_0x21ce69=0x0,_0x58e420=_0x180616[_0x581162(0x1c1)],_0x1e0319=_0x21ce69;_0x1e0319<_0x58e420;_0x1e0319++)_0x3c1844[_0x581162(0x1d2)](_0x3d0195[_0x581162(0x25f)](_0xac47bc,_0x1980e9,_0x593ff7,_0x1e0319,_0x180616));_0x357da1[_0x581162(0x232)]=!0x0;}else{for(_0x21ce69=0x0,_0x58e420=_0x40e689,_0x1e0319=_0x21ce69;_0x1e0319<_0x58e420;_0x1e0319++)_0x3c1844['push'](_0x3d0195[_0x581162(0x25f)](_0xac47bc,_0x1980e9,_0x593ff7,_0x1e0319,_0x180616));}_0x180616[_0x581162(0x1b0)]+=_0x3c1844[_0x581162(0x25b)];}if(!(_0x593ff7===_0x581162(0x1ca)||_0x593ff7===_0x581162(0x1f8))&&!_0x94e4e0&&_0x593ff7!=='String'&&_0x593ff7!==_0x581162(0x1f7)&&_0x593ff7!=='bigint'){var _0x2bb543=_0x5166f7[_0x581162(0x207)]||_0x180616[_0x581162(0x207)];if(this['_isSet'](_0x1980e9)?(_0x1e0319=0x0,_0x1980e9['forEach'](function(_0x4b8d65){var _0x54c1f2=_0x581162;if(_0xf50f4++,_0x180616[_0x54c1f2(0x1b0)]++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;return;}if(!_0x180616[_0x54c1f2(0x1af)]&&_0x180616[_0x54c1f2(0x23d)]&&_0x180616[_0x54c1f2(0x1b0)]>_0x180616[_0x54c1f2(0x245)]){_0x648d56=!0x0;return;}_0x3c1844[_0x54c1f2(0x1d2)](_0x3d0195['_addProperty'](_0xac47bc,_0x1980e9,_0x54c1f2(0x1e8),_0x1e0319++,_0x180616,function(_0x2a2f63){return function(){return _0x2a2f63;};}(_0x4b8d65)));})):this[_0x581162(0x243)](_0x1980e9)&&_0x1980e9[_0x581162(0x1d9)](function(_0x37867e,_0x181b6f){var _0x10bdd9=_0x581162;if(_0xf50f4++,_0x180616[_0x10bdd9(0x1b0)]++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;return;}if(!_0x180616[_0x10bdd9(0x1af)]&&_0x180616['autoExpand']&&_0x180616[_0x10bdd9(0x1b0)]>_0x180616[_0x10bdd9(0x245)]){_0x648d56=!0x0;return;}var _0x5acdb6=_0x181b6f[_0x10bdd9(0x1ad)]();_0x5acdb6['length']>0x64&&(_0x5acdb6=_0x5acdb6[_0x10bdd9(0x1bd)](0x0,0x64)+_0x10bdd9(0x24f)),_0x3c1844['push'](_0x3d0195[_0x10bdd9(0x25f)](_0xac47bc,_0x1980e9,_0x10bdd9(0x1ae),_0x5acdb6,_0x180616,function(_0x229ddf){return function(){return _0x229ddf;};}(_0x37867e)));}),!_0x21adee){try{for(_0x24c5bf in _0x1980e9)if(!(_0x577a7b&&_0x27a24c[_0x581162(0x198)](_0x24c5bf))&&!this['_blacklistedProperty'](_0x1980e9,_0x24c5bf,_0x180616)){if(_0xf50f4++,_0x180616['autoExpandPropertyCount']++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;break;}if(!_0x180616[_0x581162(0x1af)]&&_0x180616[_0x581162(0x23d)]&&_0x180616['autoExpandPropertyCount']>_0x180616['autoExpandLimit']){_0x648d56=!0x0;break;}_0x3c1844['push'](_0x3d0195['_addObjectProperty'](_0xac47bc,_0x248fc9,_0x1980e9,_0x593ff7,_0x24c5bf,_0x180616));}}catch{}if(_0x248fc9[_0x581162(0x219)]=!0x0,_0x63c199&&(_0x248fc9[_0x581162(0x270)]=!0x0),!_0x648d56){var _0x276f0a=[][_0x581162(0x229)](this[_0x581162(0x19b)](_0x1980e9))[_0x581162(0x229)](this[_0x581162(0x25e)](_0x1980e9));for(_0x1e0319=0x0,_0x40e689=_0x276f0a[_0x581162(0x25b)];_0x1e0319<_0x40e689;_0x1e0319++)if(_0x24c5bf=_0x276f0a[_0x1e0319],!(_0x577a7b&&_0x27a24c[_0x581162(0x198)](_0x24c5bf[_0x581162(0x1ad)]()))&&!this[_0x581162(0x24d)](_0x1980e9,_0x24c5bf,_0x180616)&&!_0x248fc9[_0x581162(0x1e1)+_0x24c5bf['toString']()]){if(_0xf50f4++,_0x180616[_0x581162(0x1b0)]++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;break;}if(!_0x180616[_0x581162(0x1af)]&&_0x180616[_0x581162(0x23d)]&&_0x180616['autoExpandPropertyCount']>_0x180616[_0x581162(0x245)]){_0x648d56=!0x0;break;}_0x3c1844[_0x581162(0x1d2)](_0x3d0195[_0x581162(0x25d)](_0xac47bc,_0x248fc9,_0x1980e9,_0x593ff7,_0x24c5bf,_0x180616));}}}}}if(_0x357da1['type']=_0x593ff7,_0x3ab83a?(_0x357da1[_0x581162(0x23a)]=_0x1980e9[_0x581162(0x217)](),this[_0x581162(0x26d)](_0x593ff7,_0x357da1,_0x180616,_0x5166f7)):_0x593ff7===_0x581162(0x24a)?_0x357da1[_0x581162(0x23a)]=this[_0x581162(0x1cd)]['call'](_0x1980e9):_0x593ff7===_0x581162(0x1ab)?_0x357da1[_0x581162(0x23a)]=_0x1980e9['toString']():_0x593ff7===_0x581162(0x19c)?_0x357da1[_0x581162(0x23a)]=this[_0x581162(0x1f6)][_0x581162(0x1a4)](_0x1980e9):_0x593ff7===_0x581162(0x1eb)&&this[_0x581162(0x252)]?_0x357da1[_0x581162(0x23a)]=this[_0x581162(0x252)]['prototype'][_0x581162(0x1ad)][_0x581162(0x1a4)](_0x1980e9):!_0x180616[_0x581162(0x199)]&&!(_0x593ff7===_0x581162(0x1ca)||_0x593ff7===_0x581162(0x1f8))&&(delete _0x357da1[_0x581162(0x23a)],_0x357da1[_0x581162(0x200)]=!0x0),_0x648d56&&(_0x357da1[_0x581162(0x1ef)]=!0x0),_0x1552df=_0x180616[_0x581162(0x26b)][_0x581162(0x210)],_0x180616['node']['current']=_0x357da1,this['_treeNodePropertiesBeforeFullValue'](_0x357da1,_0x180616),_0x3c1844['length']){for(_0x1e0319=0x0,_0x40e689=_0x3c1844[_0x581162(0x25b)];_0x1e0319<_0x40e689;_0x1e0319++)_0x3c1844[_0x1e0319](_0x1e0319);}_0xac47bc['length']&&(_0x357da1[_0x581162(0x207)]=_0xac47bc);}catch(_0x59c5ca){_0x1752d1(_0x59c5ca,_0x357da1,_0x180616);}return this[_0x581162(0x25a)](_0x1980e9,_0x357da1),this[_0x581162(0x1b6)](_0x357da1,_0x180616),_0x180616['node']['current']=_0x1552df,_0x180616[_0x581162(0x1a3)]--,_0x180616[_0x581162(0x23d)]=_0x1d7cfa,_0x180616[_0x581162(0x23d)]&&_0x180616[_0x581162(0x21a)]['pop'](),_0x357da1;}[_0x455271(0x25e)](_0x35db2f){var _0x36f105=_0x455271;return Object[_0x36f105(0x1a1)]?Object[_0x36f105(0x1a1)](_0x35db2f):[];}['_isSet'](_0x315ed0){var _0x30f9c3=_0x455271;return!!(_0x315ed0&&_0x1aecc1['Set']&&this[_0x30f9c3(0x23c)](_0x315ed0)==='[object\\x20Set]'&&_0x315ed0[_0x30f9c3(0x1d9)]);}[_0x455271(0x24d)](_0x2fff3c,_0x42c2a8,_0xec53cb){var _0x50742a=_0x455271;return _0xec53cb['noFunctions']?typeof _0x2fff3c[_0x42c2a8]==_0x50742a(0x1ed):!0x1;}[_0x455271(0x276)](_0xc34c7c){var _0x87b248=_0x455271,_0x1ffe19='';return _0x1ffe19=typeof _0xc34c7c,_0x1ffe19==='object'?this[_0x87b248(0x23c)](_0xc34c7c)==='[object\\x20Array]'?_0x1ffe19=_0x87b248(0x1c3):this['_objectToString'](_0xc34c7c)===_0x87b248(0x1b9)?_0x1ffe19=_0x87b248(0x24a):this[_0x87b248(0x23c)](_0xc34c7c)===_0x87b248(0x1fa)?_0x1ffe19=_0x87b248(0x1ab):_0xc34c7c===null?_0x1ffe19='null':_0xc34c7c[_0x87b248(0x242)]&&(_0x1ffe19=_0xc34c7c[_0x87b248(0x242)][_0x87b248(0x227)]||_0x1ffe19):_0x1ffe19===_0x87b248(0x1f8)&&this[_0x87b248(0x1a2)]&&_0xc34c7c instanceof this[_0x87b248(0x1a2)]&&(_0x1ffe19='HTMLAllCollection'),_0x1ffe19;}[_0x455271(0x23c)](_0x494626){var _0x9cebde=_0x455271;return Object[_0x9cebde(0x1ac)]['toString'][_0x9cebde(0x1a4)](_0x494626);}[_0x455271(0x1bf)](_0x2ea78d){var _0x5cc4db=_0x455271;return _0x2ea78d==='boolean'||_0x2ea78d===_0x5cc4db(0x1a0)||_0x2ea78d===_0x5cc4db(0x19f);}[_0x455271(0x237)](_0x232b26){var _0x5ad32e=_0x455271;return _0x232b26==='Boolean'||_0x232b26===_0x5ad32e(0x263)||_0x232b26===_0x5ad32e(0x1f4);}[_0x455271(0x25f)](_0x37542c,_0x3ae7af,_0x495ed2,_0x444b7a,_0x4c8050,_0x4d87d9){var _0x30267b=this;return function(_0x3c32aa){var _0x2bfea8=_0x413f,_0x3c84ba=_0x4c8050[_0x2bfea8(0x26b)]['current'],_0x1c5d83=_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x21f)],_0x1f92f4=_0x4c8050['node'][_0x2bfea8(0x1da)];_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x1da)]=_0x3c84ba,_0x4c8050[_0x2bfea8(0x26b)]['index']=typeof _0x444b7a==_0x2bfea8(0x19f)?_0x444b7a:_0x3c32aa,_0x37542c[_0x2bfea8(0x1d2)](_0x30267b[_0x2bfea8(0x1b5)](_0x3ae7af,_0x495ed2,_0x444b7a,_0x4c8050,_0x4d87d9)),_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x1da)]=_0x1f92f4,_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x21f)]=_0x1c5d83;};}['_addObjectProperty'](_0x4debd4,_0x1d88bb,_0x4ce588,_0x19267c,_0x2a53c1,_0x4094d7,_0x13a16c){var _0x1761fb=_0x455271,_0x180763=this;return _0x1d88bb[_0x1761fb(0x1e1)+_0x2a53c1[_0x1761fb(0x1ad)]()]=!0x0,function(_0x13ff60){var _0x5de4fa=_0x1761fb,_0x32d67a=_0x4094d7['node'][_0x5de4fa(0x210)],_0x2526d6=_0x4094d7[_0x5de4fa(0x26b)]['index'],_0x28371d=_0x4094d7[_0x5de4fa(0x26b)][_0x5de4fa(0x1da)];_0x4094d7[_0x5de4fa(0x26b)][_0x5de4fa(0x1da)]=_0x32d67a,_0x4094d7['node'][_0x5de4fa(0x21f)]=_0x13ff60,_0x4debd4[_0x5de4fa(0x1d2)](_0x180763[_0x5de4fa(0x1b5)](_0x4ce588,_0x19267c,_0x2a53c1,_0x4094d7,_0x13a16c)),_0x4094d7['node'][_0x5de4fa(0x1da)]=_0x28371d,_0x4094d7[_0x5de4fa(0x26b)]['index']=_0x2526d6;};}[_0x455271(0x1b5)](_0x43e83b,_0x1dbf23,_0x2f7f5e,_0x3827c3,_0x36de0f){var _0x337a29=_0x455271,_0x549d1e=this;_0x36de0f||(_0x36de0f=function(_0x2b0ac8,_0x2a6f8b){return _0x2b0ac8[_0x2a6f8b];});var _0x5b87a8=_0x2f7f5e[_0x337a29(0x1ad)](),_0x3bd5ee=_0x3827c3[_0x337a29(0x1e0)]||{},_0x3d36f3=_0x3827c3[_0x337a29(0x199)],_0x1c018b=_0x3827c3[_0x337a29(0x1af)];try{var _0x55cbf1=this[_0x337a29(0x243)](_0x43e83b),_0x1275d5=_0x5b87a8;_0x55cbf1&&_0x1275d5[0x0]==='\\x27'&&(_0x1275d5=_0x1275d5[_0x337a29(0x19e)](0x1,_0x1275d5[_0x337a29(0x25b)]-0x2));var _0x3a60f4=_0x3827c3[_0x337a29(0x1e0)]=_0x3bd5ee['_p_'+_0x1275d5];_0x3a60f4&&(_0x3827c3[_0x337a29(0x199)]=_0x3827c3[_0x337a29(0x199)]+0x1),_0x3827c3[_0x337a29(0x1af)]=!!_0x3a60f4;var _0x2e6757=typeof _0x2f7f5e==_0x337a29(0x1eb),_0x2d2f79={'name':_0x2e6757||_0x55cbf1?_0x5b87a8:this[_0x337a29(0x1d7)](_0x5b87a8)};if(_0x2e6757&&(_0x2d2f79[_0x337a29(0x1eb)]=!0x0),!(_0x1dbf23===_0x337a29(0x1c3)||_0x1dbf23===_0x337a29(0x277))){var _0x4d7142=this[_0x337a29(0x21c)](_0x43e83b,_0x2f7f5e);if(_0x4d7142&&(_0x4d7142[_0x337a29(0x208)]&&(_0x2d2f79[_0x337a29(0x1ec)]=!0x0),_0x4d7142[_0x337a29(0x233)]&&!_0x3a60f4&&!_0x3827c3['resolveGetters']))return _0x2d2f79[_0x337a29(0x201)]=!0x0,this[_0x337a29(0x1c4)](_0x2d2f79,_0x3827c3),_0x2d2f79;}var _0x1f0502;try{_0x1f0502=_0x36de0f(_0x43e83b,_0x2f7f5e);}catch(_0x215c29){return _0x2d2f79={'name':_0x5b87a8,'type':_0x337a29(0x274),'error':_0x215c29[_0x337a29(0x1bb)]},this[_0x337a29(0x1c4)](_0x2d2f79,_0x3827c3),_0x2d2f79;}var _0xefdfc=this[_0x337a29(0x276)](_0x1f0502),_0x13c42f=this['_isPrimitiveType'](_0xefdfc);if(_0x2d2f79['type']=_0xefdfc,_0x13c42f)this[_0x337a29(0x1c4)](_0x2d2f79,_0x3827c3,_0x1f0502,function(){var _0x38e0ed=_0x337a29;_0x2d2f79[_0x38e0ed(0x23a)]=_0x1f0502[_0x38e0ed(0x217)](),!_0x3a60f4&&_0x549d1e[_0x38e0ed(0x26d)](_0xefdfc,_0x2d2f79,_0x3827c3,{});});else{var _0x2802cd=_0x3827c3[_0x337a29(0x23d)]&&_0x3827c3[_0x337a29(0x1a3)]<_0x3827c3[_0x337a29(0x26c)]&&_0x3827c3[_0x337a29(0x21a)][_0x337a29(0x1f2)](_0x1f0502)<0x0&&_0xefdfc!=='function'&&_0x3827c3[_0x337a29(0x1b0)]<_0x3827c3[_0x337a29(0x245)];_0x2802cd||_0x3827c3['level']<_0x3d36f3||_0x3a60f4?(this[_0x337a29(0x1ff)](_0x2d2f79,_0x1f0502,_0x3827c3,_0x3a60f4||{}),this['_additionalMetadata'](_0x1f0502,_0x2d2f79)):this['_processTreeNodeResult'](_0x2d2f79,_0x3827c3,_0x1f0502,function(){var _0x43e9f7=_0x337a29;_0xefdfc===_0x43e9f7(0x1ca)||_0xefdfc===_0x43e9f7(0x1f8)||(delete _0x2d2f79[_0x43e9f7(0x23a)],_0x2d2f79['capped']=!0x0);});}return _0x2d2f79;}finally{_0x3827c3[_0x337a29(0x1e0)]=_0x3bd5ee,_0x3827c3['depth']=_0x3d36f3,_0x3827c3[_0x337a29(0x1af)]=_0x1c018b;}}[_0x455271(0x26d)](_0x360681,_0x12d5f3,_0x5ec981,_0x36ce52){var _0x954949=_0x455271,_0x938ac4=_0x36ce52['strLength']||_0x5ec981['strLength'];if((_0x360681===_0x954949(0x1a0)||_0x360681==='String')&&_0x12d5f3[_0x954949(0x23a)]){let _0x3c6b83=_0x12d5f3['value'][_0x954949(0x25b)];_0x5ec981[_0x954949(0x1c2)]+=_0x3c6b83,_0x5ec981[_0x954949(0x1c2)]>_0x5ec981[_0x954949(0x1f0)]?(_0x12d5f3[_0x954949(0x200)]='',delete _0x12d5f3[_0x954949(0x23a)]):_0x3c6b83>_0x938ac4&&(_0x12d5f3[_0x954949(0x200)]=_0x12d5f3[_0x954949(0x23a)][_0x954949(0x19e)](0x0,_0x938ac4),delete _0x12d5f3['value']);}}[_0x455271(0x243)](_0x54d5a9){var _0x1953c3=_0x455271;return!!(_0x54d5a9&&_0x1aecc1['Map']&&this[_0x1953c3(0x23c)](_0x54d5a9)==='[object\\x20Map]'&&_0x54d5a9[_0x1953c3(0x1d9)]);}['_propertyName'](_0x3d3366){var _0x40f315=_0x455271;if(_0x3d3366[_0x40f315(0x251)](/^\\d+$/))return _0x3d3366;var _0x1cdb91;try{_0x1cdb91=JSON[_0x40f315(0x22e)](''+_0x3d3366);}catch{_0x1cdb91='\\x22'+this[_0x40f315(0x23c)](_0x3d3366)+'\\x22';}return _0x1cdb91[_0x40f315(0x251)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1cdb91=_0x1cdb91[_0x40f315(0x19e)](0x1,_0x1cdb91[_0x40f315(0x25b)]-0x2):_0x1cdb91=_0x1cdb91[_0x40f315(0x1d5)](/'/g,'\\x5c\\x27')[_0x40f315(0x1d5)](/\\\\\"/g,'\\x22')[_0x40f315(0x1d5)](/(^\"|\"$)/g,'\\x27'),_0x1cdb91;}[_0x455271(0x1c4)](_0xfcf0ca,_0x3213fa,_0x43cb6a,_0x59d7bc){var _0x11826f=_0x455271;this['_treeNodePropertiesBeforeFullValue'](_0xfcf0ca,_0x3213fa),_0x59d7bc&&_0x59d7bc(),this['_additionalMetadata'](_0x43cb6a,_0xfcf0ca),this[_0x11826f(0x1b6)](_0xfcf0ca,_0x3213fa);}[_0x455271(0x19a)](_0x8be691,_0x432e24){var _0x5a0f7d=_0x455271;this[_0x5a0f7d(0x1bc)](_0x8be691,_0x432e24),this[_0x5a0f7d(0x246)](_0x8be691,_0x432e24),this[_0x5a0f7d(0x1a5)](_0x8be691,_0x432e24),this[_0x5a0f7d(0x1d0)](_0x8be691,_0x432e24);}[_0x455271(0x1bc)](_0x219e23,_0xb845c3){}[_0x455271(0x246)](_0x2a0248,_0x70ecd3){}[_0x455271(0x24c)](_0x37d6dd,_0x2520fe){}[_0x455271(0x235)](_0x56c23a){var _0x2364ac=_0x455271;return _0x56c23a===this[_0x2364ac(0x25c)];}['_treeNodePropertiesAfterFullValue'](_0x34af1c,_0x377cfe){var _0x48c1e5=_0x455271;this[_0x48c1e5(0x24c)](_0x34af1c,_0x377cfe),this[_0x48c1e5(0x212)](_0x34af1c),_0x377cfe[_0x48c1e5(0x1e9)]&&this[_0x48c1e5(0x1c6)](_0x34af1c),this[_0x48c1e5(0x21e)](_0x34af1c,_0x377cfe),this[_0x48c1e5(0x248)](_0x34af1c,_0x377cfe),this[_0x48c1e5(0x266)](_0x34af1c);}['_additionalMetadata'](_0x1739f1,_0x364748){var _0x458b6e=_0x455271;let _0x40e88a;try{_0x1aecc1['console']&&(_0x40e88a=_0x1aecc1[_0x458b6e(0x1dd)]['error'],_0x1aecc1[_0x458b6e(0x1dd)][_0x458b6e(0x1cb)]=function(){}),_0x1739f1&&typeof _0x1739f1[_0x458b6e(0x25b)]==_0x458b6e(0x19f)&&(_0x364748[_0x458b6e(0x25b)]=_0x1739f1[_0x458b6e(0x25b)]);}catch{}finally{_0x40e88a&&(_0x1aecc1['console'][_0x458b6e(0x1cb)]=_0x40e88a);}if(_0x364748[_0x458b6e(0x278)]===_0x458b6e(0x19f)||_0x364748[_0x458b6e(0x278)]==='Number'){if(isNaN(_0x364748[_0x458b6e(0x23a)]))_0x364748['nan']=!0x0,delete _0x364748[_0x458b6e(0x23a)];else switch(_0x364748[_0x458b6e(0x23a)]){case Number[_0x458b6e(0x257)]:_0x364748['positiveInfinity']=!0x0,delete _0x364748[_0x458b6e(0x23a)];break;case Number[_0x458b6e(0x23e)]:_0x364748[_0x458b6e(0x220)]=!0x0,delete _0x364748[_0x458b6e(0x23a)];break;case 0x0:this[_0x458b6e(0x1db)](_0x364748['value'])&&(_0x364748[_0x458b6e(0x1b4)]=!0x0);break;}}else _0x364748[_0x458b6e(0x278)]===_0x458b6e(0x1ed)&&typeof _0x1739f1[_0x458b6e(0x227)]==_0x458b6e(0x1a0)&&_0x1739f1[_0x458b6e(0x227)]&&_0x364748['name']&&_0x1739f1['name']!==_0x364748[_0x458b6e(0x227)]&&(_0x364748[_0x458b6e(0x256)]=_0x1739f1[_0x458b6e(0x227)]);}['_isNegativeZero'](_0xe62f02){var _0x31d403=_0x455271;return 0x1/_0xe62f02===Number[_0x31d403(0x23e)];}[_0x455271(0x1c6)](_0x17f2bf){var _0xae8a3c=_0x455271;!_0x17f2bf[_0xae8a3c(0x207)]||!_0x17f2bf[_0xae8a3c(0x207)]['length']||_0x17f2bf[_0xae8a3c(0x278)]===_0xae8a3c(0x1c3)||_0x17f2bf['type']==='Map'||_0x17f2bf['type']===_0xae8a3c(0x1e8)||_0x17f2bf[_0xae8a3c(0x207)][_0xae8a3c(0x269)](function(_0x15e0b3,_0x4d676b){var _0x23aefc=_0xae8a3c,_0x721d23=_0x15e0b3[_0x23aefc(0x227)][_0x23aefc(0x22f)](),_0x18d1f7=_0x4d676b[_0x23aefc(0x227)][_0x23aefc(0x22f)]();return _0x721d23<_0x18d1f7?-0x1:_0x721d23>_0x18d1f7?0x1:0x0;});}[_0x455271(0x21e)](_0x3910b5,_0x3c3538){var _0x24e905=_0x455271;if(!(_0x3c3538[_0x24e905(0x1ce)]||!_0x3910b5[_0x24e905(0x207)]||!_0x3910b5['props']['length'])){for(var _0x47be43=[],_0x21b7bb=[],_0xfb58e0=0x0,_0x32b166=_0x3910b5[_0x24e905(0x207)][_0x24e905(0x25b)];_0xfb58e0<_0x32b166;_0xfb58e0++){var _0x4a2f42=_0x3910b5[_0x24e905(0x207)][_0xfb58e0];_0x4a2f42[_0x24e905(0x278)]===_0x24e905(0x1ed)?_0x47be43[_0x24e905(0x1d2)](_0x4a2f42):_0x21b7bb['push'](_0x4a2f42);}if(!(!_0x21b7bb[_0x24e905(0x25b)]||_0x47be43[_0x24e905(0x25b)]<=0x1)){_0x3910b5[_0x24e905(0x207)]=_0x21b7bb;var _0x5b4429={'functionsNode':!0x0,'props':_0x47be43};this[_0x24e905(0x1bc)](_0x5b4429,_0x3c3538),this['_setNodeLabel'](_0x5b4429,_0x3c3538),this[_0x24e905(0x212)](_0x5b4429),this[_0x24e905(0x1d0)](_0x5b4429,_0x3c3538),_0x5b4429['id']+='\\x20f',_0x3910b5[_0x24e905(0x207)][_0x24e905(0x218)](_0x5b4429);}}}[_0x455271(0x248)](_0x582e60,_0x16967f){}[_0x455271(0x212)](_0x41580d){}['_isArray'](_0x37b4c3){var _0x195df3=_0x455271;return Array[_0x195df3(0x1b3)](_0x37b4c3)||typeof _0x37b4c3=='object'&&this[_0x195df3(0x23c)](_0x37b4c3)===_0x195df3(0x26f);}[_0x455271(0x1d0)](_0x5e6c06,_0x528dab){}[_0x455271(0x266)](_0x256e2b){var _0x1266ad=_0x455271;delete _0x256e2b[_0x1266ad(0x253)],delete _0x256e2b[_0x1266ad(0x19d)],delete _0x256e2b['_hasMapOnItsPath'];}[_0x455271(0x1a5)](_0x3b60bd,_0x35e7d9){}[_0x455271(0x273)](_0x5ec598){var _0x568dcb=_0x455271;return _0x5ec598?_0x5ec598[_0x568dcb(0x251)](this[_0x568dcb(0x209)])?'['+_0x5ec598+']':_0x5ec598[_0x568dcb(0x251)](this['_keyStrRegExp'])?'.'+_0x5ec598:_0x5ec598[_0x568dcb(0x251)](this['_quotedRegExp'])?'['+_0x5ec598+']':'[\\x27'+_0x5ec598+'\\x27]':'';}}let _0x38dc68=new _0x30697();function _0x1898be(_0x4dc3ad,_0x4c5556,_0x1921cf,_0x268790,_0x4f923,_0x5ce9e0){var _0x75401b=_0x455271;let _0x57871b,_0x1b0815;try{_0x1b0815=_0x2cb31d(),_0x57871b=_0x18be6e[_0x4c5556],!_0x57871b||_0x1b0815-_0x57871b['ts']>0x1f4&&_0x57871b[_0x75401b(0x231)]&&_0x57871b[_0x75401b(0x264)]/_0x57871b['count']<0x64?(_0x18be6e[_0x4c5556]=_0x57871b={'count':0x0,'time':0x0,'ts':_0x1b0815},_0x18be6e[_0x75401b(0x1e4)]={}):_0x1b0815-_0x18be6e[_0x75401b(0x1e4)]['ts']>0x32&&_0x18be6e[_0x75401b(0x1e4)]['count']&&_0x18be6e['hits']['time']/_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x231)]<0x64&&(_0x18be6e['hits']={});let _0x4b9a58=[],_0x433287=_0x57871b['reduceLimits']||_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x20c)]?_0x393c70:_0x589ff4,_0x1a03f4=_0x1195da=>{var _0x3774be=_0x75401b;let _0x5123e6={};return _0x5123e6['props']=_0x1195da[_0x3774be(0x207)],_0x5123e6[_0x3774be(0x1c1)]=_0x1195da['elements'],_0x5123e6[_0x3774be(0x211)]=_0x1195da['strLength'],_0x5123e6[_0x3774be(0x1f0)]=_0x1195da[_0x3774be(0x1f0)],_0x5123e6['autoExpandLimit']=_0x1195da[_0x3774be(0x245)],_0x5123e6['autoExpandMaxDepth']=_0x1195da['autoExpandMaxDepth'],_0x5123e6[_0x3774be(0x1e9)]=!0x1,_0x5123e6['noFunctions']=!_0x290895,_0x5123e6[_0x3774be(0x199)]=0x1,_0x5123e6[_0x3774be(0x1a3)]=0x0,_0x5123e6[_0x3774be(0x21b)]=_0x3774be(0x1c7),_0x5123e6['rootExpression']=_0x3774be(0x1ba),_0x5123e6[_0x3774be(0x23d)]=!0x0,_0x5123e6['autoExpandPreviousObjects']=[],_0x5123e6[_0x3774be(0x1b0)]=0x0,_0x5123e6[_0x3774be(0x1c0)]=!0x0,_0x5123e6[_0x3774be(0x1c2)]=0x0,_0x5123e6[_0x3774be(0x26b)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5123e6;};for(var _0x20255f=0x0;_0x20255f<_0x4f923[_0x75401b(0x25b)];_0x20255f++)_0x4b9a58['push'](_0x38dc68[_0x75401b(0x1ff)]({'timeNode':_0x4dc3ad==='time'||void 0x0},_0x4f923[_0x20255f],_0x1a03f4(_0x433287),{}));if(_0x4dc3ad===_0x75401b(0x196)){let _0x4574d9=Error[_0x75401b(0x1fe)];try{Error[_0x75401b(0x1fe)]=0x1/0x0,_0x4b9a58[_0x75401b(0x1d2)](_0x38dc68[_0x75401b(0x1ff)]({'stackNode':!0x0},new Error()[_0x75401b(0x1e3)],_0x1a03f4(_0x433287),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x4574d9;}}return{'method':_0x75401b(0x23f),'version':_0x94cf8c,'args':[{'ts':_0x1921cf,'session':_0x268790,'args':_0x4b9a58,'id':_0x4c5556,'context':_0x5ce9e0}]};}catch(_0x297f69){return{'method':_0x75401b(0x23f),'version':_0x94cf8c,'args':[{'ts':_0x1921cf,'session':_0x268790,'args':[{'type':_0x75401b(0x274),'error':_0x297f69&&_0x297f69[_0x75401b(0x1bb)]}],'id':_0x4c5556,'context':_0x5ce9e0}]};}finally{try{if(_0x57871b&&_0x1b0815){let _0x2e27c0=_0x2cb31d();_0x57871b[_0x75401b(0x231)]++,_0x57871b[_0x75401b(0x264)]+=_0x1b1c3a(_0x1b0815,_0x2e27c0),_0x57871b['ts']=_0x2e27c0,_0x18be6e[_0x75401b(0x1e4)]['count']++,_0x18be6e[_0x75401b(0x1e4)]['time']+=_0x1b1c3a(_0x1b0815,_0x2e27c0),_0x18be6e[_0x75401b(0x1e4)]['ts']=_0x2e27c0,(_0x57871b[_0x75401b(0x231)]>0x32||_0x57871b[_0x75401b(0x264)]>0x64)&&(_0x57871b[_0x75401b(0x20c)]=!0x0),(_0x18be6e[_0x75401b(0x1e4)]['count']>0x3e8||_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x264)]>0x12c)&&(_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x20c)]=!0x0);}}catch{}}}return _0x1aecc1['_console_ninja'];})(globalThis,_0x230995(0x259),_0x230995(0x22c),_0x230995(0x1dc),_0x230995(0x1b2),_0x230995(0x247),'1692044086029',_0x230995(0x268),_0x230995(0x236));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/sliderArrows.js":
/*!*************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/sliderArrows.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  weatherIconDay.src = __webpack_require__(/*! ./img/soleado.png */ "./src/assets/weatherApp/weatherSlider/img/soleado.png"); // TODO: change the icon
  weatherTitleDay.innerHTML = day.condition.text;
  windValueDay.textContent = day.avgvis_km;
  tempValueDay.textContent = _weatherApp__WEBPACK_IMPORTED_MODULE_0__.usingFahrenheit ? Math.round(day.avgtemp_f) : Math.round(day.avgtemp_c);
  humidityValueDay.textContent = day.avghumidity;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printWeatherSlider);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/assets/weatherApp/weatherSlider/img/soleado.png":
/*!*************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/soleado.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb5ea5d59d61e61ec24f.png";

/***/ }),

/***/ "./src/img/loading.svg":
/*!*****************************!*\
  !*** ./src/img/loading.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34d2cb87cdc6f223301c.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0VBQW9FLDJDQUEyQztBQUMvRyx1QkFBdUIsbUJBQU8sQ0FBQyxnRkFBbUIsR0FBRztBQUNyRDtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFlO0FBQzVDO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelRSO0FBQ0E7QUFDQztBQUNEO0FBQ007QUFDTjtBQUNxQztBQUNwQjtBQUM2QjtBQUN5QjtBQUNTOzs7QUFHMUc7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhFQUFlO0FBQ2pCLEVBQUUsa0ZBQWlCO0FBQ25CLEVBQUUsOEZBQThCO0FBQ2hDLEVBQUUsb0dBQW9CO0FBQ3RCLEVBQUUsb0dBQW9CO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBVTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9ob3VybHlTbGlkZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2xvYWRpbmcuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL3NlYXJjaC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3Mvc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvZ2xvYmFsLmNzcz81ODRhIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2hlYWRlci5jc3M/OGFjMSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9ob3VybHlTbGlkZXIuY3NzP2U2ZTMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvbG9hZGluZy5jc3M/YjZjNyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9zZWFyY2guY3NzPzQ0NjkiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3Mvc2xpZGVyLmNzcz8wNDlhIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvYXBpQ2FsbHMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvdXRpbHMvc2V0TG9hZGluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy91dGlscy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC9mYWhyZW5oZWl0Q2hlY2svZmFocmVuaGVpdENoZWNrLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvaGVhZGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL2hvdXJseVNsaWRlci9ob3VybHlTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC9zZWFyY2hCb3gvc2VhcmNoQm94LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlckFwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvc2xpZGVyQXJyb3dzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlclNsaWRlci93ZWF0aGVyU2xpZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAxMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMjM2LDI0MiwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG59XG5cbiNyb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHFGQUFxRjtBQUN2Rjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAxMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zIEpQXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogcmdiKDIzNiwyNDIsMjU1KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMjM2LDI0MiwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XFxufVxcblxcbiNyb290IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4IDBweCAxNXB4O1xufVxuXG4uaGVhZGVyX19jaXR5X19jb250YWluZXIge1xuICBmbGV4OiAxO1xufVxuXG4uaGVhZGVyX19jaXR5X19uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGUge1xuICBjb2xvcjogI2E4YjFkZDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyX19jaXR5X19uYW1lX19jaXR5IHtcbiAgY29sb3I6ICM0OTQxNzM7XG59XG5cbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fY2l0eV9fdG1wVG9nZ2xlX190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLnN3aXRjaCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFN3aXRjaCBTdHlsZVxuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zd2l0Y2gsXG4uc3dpdGNoIGlucHV0LFxuLnN3aXRjaCAuc2xpZGVyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQxNzM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzQ5NDE3Mztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztrREFFa0Q7O0FBRWxEOzs7RUFHRSxpQkFBaUI7QUFDbkI7QUFDQSwyQ0FBMkM7QUFDM0M7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUEsZUFBZTtBQUNmO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDBweCAxNXB4O1xcbn1cXG5cXG4uaGVhZGVyX19jaXR5X19jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmhlYWRlcl9fY2l0eV9fbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZSB7XFxuICBjb2xvcjogI2E4YjFkZDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5oZWFkZXJfX2NpdHlfX25hbWVfX2NpdHkge1xcbiAgY29sb3I6ICM0OTQxNzM7XFxufVxcblxcbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19jaXR5X190bXBUb2dnbGVfX3RleHQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuLnN3aXRjaCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICAgU3dpdGNoIFN0eWxlXFxuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnN3aXRjaCxcXG4uc3dpdGNoIGlucHV0LFxcbi5zd2l0Y2ggLnNsaWRlciB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyICovXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0MTczO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNDk0MTczO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud2VhdGhlcl9fZGF0YV9faG91cmx5IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBMUJFRTtcbiAgcGFkZGluZzogMjVweCAyNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbn1cblxuLmN1cnJlbnRfX2RheSB7XG4gIGNvbG9yOiAjRTFFQUZEO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIEhvdXJseSBTbGlkZXIgKi9cbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjVweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMjVweCAwO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDUwcHgpO1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQyRkYzO1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9faW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50ID4gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob3VybHlTbGlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2VhdGhlcl9fZGF0YV9faG91cmx5IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUExQkVFO1xcbiAgcGFkZGluZzogMjVweCAyNXB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uY3VycmVudF9fZGF5IHtcXG4gIGNvbG9yOiAjRTFFQUZEO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4vKiBIb3VybHkgU2xpZGVyICovXFxuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI1cHg7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgcGFkZGluZzogMjVweCAwO1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA1MHB4KTtcXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0MkZGMztcXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudCA+IHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LDI0MiwyNTUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5sb2FkaW5nLmxvYWRpbmctLWFjdGl2ZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9sb2FkaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHFGQUFxRjtFQUNyRixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQ0FBbUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmxvYWRpbmcubG9hZGluZy0tYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndlYXRoZXJfX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBMUJFRTtcbn1cbi5zZWFyY2hfX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjdGRjtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuLnNlYXJjaF9fZm9ybV9faW5wdXQsIC5zZWFyY2hfX2Zvcm1fX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cblxuLnNlYXJjaF9fZXJyb3Ige1xuICBjb2xvcjogI0ZGMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7IFxufVxuXG4uc2VhcmNoX19lcnJvci0taW5hY3RpdmUge1xuICBvcGFjaXR5OiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zZWFyY2guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2VhdGhlcl9fc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUExQkVFO1xcbn1cXG4uc2VhcmNoX19mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGN0ZGO1xcbiAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuLnNlYXJjaF9fZm9ybV9faW5wdXQsIC5zZWFyY2hfX2Zvcm1fX2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLnNlYXJjaF9fZXJyb3Ige1xcbiAgY29sb3I6ICNGRjAwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yczsgXFxufVxcblxcbi5zZWFyY2hfX2Vycm9yLS1pbmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53ZWF0aGVyX19kYXRhIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi53ZWF0aGVyX19zbGlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLndlYXRoZXJfX3NsaWRlcl9faW5mb3JtYXRpb25fX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2VhdGhlcl9fc2VsZWN0ZWRfX2Fycm93IHtcbiAgZmlsbDogI2E4YjFkZDtcbn1cblxuXG5cbi53ZWF0aGVyX19kYXRhX19pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG59XG4ud2VhdGhlcl9fZGF0YV9faW5mb3JtYXRpb246Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQThCMUREICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi53ZWF0aGVyX19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud2VhdGhlcl9faW5mbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNBOEIxREQ7XG59XG4ud2VhdGhlcl9faW5mbyA+IHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNDk0MTczO1xufVxuXG4ud2VhdGhlcl9faW5mb19fdW5pdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2xpZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndlYXRoZXJfX2RhdGEge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2VhdGhlcl9fc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcblxcbi53ZWF0aGVyX19zbGlkZXJfX2luZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbl9faW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2VhdGhlcl9fc2VsZWN0ZWRfX2Fycm93IHtcXG4gIGZpbGw6ICNhOGIxZGQ7XFxufVxcblxcblxcblxcbi53ZWF0aGVyX19kYXRhX19pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweCAxNXB4O1xcbn1cXG4ud2VhdGhlcl9fZGF0YV9faW5mb3JtYXRpb246Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0E4QjFERCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ud2VhdGhlcl9faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi53ZWF0aGVyX19pbmZvIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogI0E4QjFERDtcXG59XFxuLndlYXRoZXJfX2luZm8gPiBwIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjNDk0MTczO1xcbn1cXG5cXG4ud2VhdGhlcl9faW5mb19fdW5pdCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG91cmx5U2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG91cmx5U2xpZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc2V0TG9hZGluZyBmcm9tICcuLi91dGlscy9zZXRMb2FkaW5nJztcbi8qKlxuICogUmV0dXJuIHRoZSB3ZWF0aGVyIGZvciB0aGUgZ2l2ZW4gbG9jYXRpb25cbiAqIFVzZSB0aGUgd2VhdGhlcmFwaS5jb20gQVBJXG4gKiBAc2VlIGh0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL2RvY3MvXG4gKiBAc2VlIGh0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL2FwaS1leHBsb3Jlci5hc3B4XG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAqIHJldHVybiB7b2JqZWN0fSB3ZWF0aGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gIHNldExvYWRpbmcodHJ1ZSk7XG4gIC8qIGVzbGludCBtYXgtbGVuOiBbXCJlcnJvclwiLCB7IFwiaWdub3JlVXJsc1wiOiB0cnVlIH1dICovXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXRcbiAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0FQSX0mcT0ke2xvY2F0aW9ufSZkYXlzPTMmYXFpPXllcyZhbGVydHM9bm9gKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvKipcbiAqIFNob3dzIG9yIGhpZGVzIHRoZSBsb2FkaW5nIHNwaW5uZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNMb2FkaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldExvYWRpbmcoaXNMb2FkaW5nKSB7XG4gIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xuICBsb2FkaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmctLWFjdGl2ZScsIGlzTG9hZGluZyk7XG59XG5cbiIsIi8qKlxuICogUmV0dXJuIHRoZSBkYXkgb2YgdGhlIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogRS5nLiBNb25kYXksIFR1ZXNkYXksIGV0Yy5cbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXREYXkoZGF0ZSkge1xuICBjb25zdCBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICByZXR1cm4gZGF5c1tkYXRlLmdldERheSgpXTtcbn1cblxuZXhwb3J0IHtnZXREYXl9O1xuIiwiaW1wb3J0IHt1c2luZ0ZhaHJlbmhlaXQsIHNldEZhaHJlbmhlaXR9IGZyb20gJy4uL3dlYXRoZXJBcHAnO1xuXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBmYWhyZW5oZWl0IGNoZWNrYm94XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZhaHJlbmhlaXRFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgZmFocmVuaGVpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0X19jaGVja2JveCcpO1xuICBmYWhyZW5oZWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEZhaHJlbmhlaXQoIXVzaW5nRmFocmVuaGVpdCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGYWhyZW5oZWl0RXZlbnRMaXN0ZW5lcnM7XG4iLCJpbXBvcnQge2dldERheX0gZnJvbSAnLi4vdXRpbHMvdXRpbGl0aWVzJztcblxuLyoqXG4gKiBQcmludCBpbiB0aGUgSGVhZGVyIHRoZSBEYXRlIGFuZCB0aGUgQ2l0eVxuICogQHBhcmFtIHtzdHJpbmd9IGNpdHkgLSBDaXR5IE5hbWVcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIERhdGVcbiAqL1xuZnVuY3Rpb24gcHJpbnRIZWFkZXJEYXRhKGNpdHksIGRhdGUpIHtcbiAgLy8gR2V0dGluZyBET00gRWxlbWVudHNcbiAgY29uc3QgbmFtZUNpdHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2l0eV9fbmFtZV9fY2l0eScpO1xuICBjb25zdCB0ZXh0RGF5RWxlbWVudCA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGVfX3RleHREYXknKTtcbiAgY29uc3QgbnVtYmVyRGF5RWxlbWVudCA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGVfX251bWJlckRheScpO1xuICBjb25zdCBtb250aEVsZW1lbnQgPVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jaXR5X19uYW1lX19kYXRlX190ZXh0TW9udGgnKTtcbiAgLy8gU2V0dGluZyB0aGUgY29udGVudFxuICBuYW1lQ2l0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBjaXR5OyAvLyBDaXR5IE5hbWVcbiAgdGV4dERheUVsZW1lbnQudGV4dENvbnRlbnQgPSBnZXREYXkoZGF0ZSk7IC8vIERheSBvZiB0aGUgV2Vla1xuICBudW1iZXJEYXlFbGVtZW50LnRleHRDb250ZW50ID0gZGF0ZS5nZXREYXRlKCk7IC8vIERheSBvZiB0aGUgTW9udGhcbiAgbW9udGhFbGVtZW50LnRleHRDb250ZW50ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7bW9udGg6ICdsb25nJ30pOyAvLyBNb250aFxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmludEhlYWRlckRhdGE7XG4iLCJpbXBvcnQge2dldERheX0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbGl0aWVzJztcbmltcG9ydCB7dXNpbmdGYWhyZW5oZWl0fSBmcm9tICcuLi93ZWF0aGVyQXBwJztcblxuLyoqXG4gKiBQcmludCB0aGUgaG91cmx5IHNsaWRlciBmcm9tIHRoZSBob3VybHkgbGlzdFxuICogcGFzc2VkIGFzIHBhcmFtZXRlclxuICogQHBhcmFtIHtBcnJheX0gZGF5XG4gKi9cbmZ1bmN0aW9uIHByaW50SG91cmx5U2xpZGVyKGRheSkge1xuICAvLyBNYWluIGNvbnRhaW5lciBvZiB0aGUgc2xpZGVyXG4gIGNvbnN0IGhvdXJseVNsaWRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXInKTtcbiAgaG91cmx5U2xpZGVyRWxlbWVudC5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgdGhlIHNsaWRlclxuICBjb25zdCBkYXlUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50X19kYXknKTtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBkYXlEYXRlID0gbmV3IERhdGUoZGF5LmRhdGUpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBsZXQgY3VycmVudEhvdXJJbmRleDsgLy8gSW5kZXggb2YgdGhlIGN1cnJlbnQgaG91ciBpbiB0aGUgaG91cmx5IGxpc3RcblxuICBpZiAoY3VycmVudERhdGUgPT09IGRheURhdGUpIHsgLy8gSWYgdGhlIGRheSBpcyB0b2RheVxuICAgIC8vIFRoZSBjdXJyZW50IGhvdXIgaXMgdGhlIGNvcnJlY3QgaG91ciBpbmRleCB0byBzdGFydFxuICAgIGN1cnJlbnRIb3VySW5kZXggPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gIH0gZWxzZSB7IC8vIElmIHRoZSBkYXkgaXMgbm90IHRvZGF5IHN0YXJ0IGZyb20gdGhlIGZpcnN0IGhvdXJcbiAgICBjdXJyZW50SG91ckluZGV4ID0gMDtcbiAgfVxuXG4gIGRheVRleHRFbGVtZW50LnRleHRDb250ZW50ID0gZ2V0RGF5KG5ldyBEYXRlKGRheS5kYXRlKSk7XG4gIGNvbnN0IGZpbHRlcmVkSG91cmx5TGlzdCA9IGRheS5ob3VyLnNsaWNlKGN1cnJlbnRIb3VySW5kZXgpO1xuICBmaWx0ZXJlZEhvdXJseUxpc3QuZm9yRWFjaCgoaG91cmx5KSA9PiB7XG4gICAgaG91cmx5U2xpZGVyRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIb3VybHlFbGVtZW50KGhvdXJseSkpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgSFRNTCBlbGVtZW50IGZvciB0aGUgaG91cmx5IHNsaWRlclxuICogQHBhcmFtIHtPYmplY3R9IGhvdXJseURhdGFcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlFbGVtZW50KGhvdXJseURhdGEpIHtcbiAgY29uc3QgaG91cmx5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VybHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50Jyk7XG5cbiAgY29uc3QgaG91cmx5SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaG91cmx5SW1hZ2UuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX2ltYWdlJyk7XG4gIGhvdXJseUltYWdlLnNyYyA9IHJlcXVpcmUoYC4uL3dlYXRoZXJTbGlkZXIvaW1nL3NvbGVhZG8ucG5nYCk7XG5cbiAgY29uc3QgaG91cmx5SG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaG91cmx5SG91ci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9faG91cicpO1xuICBob3VybHlIb3VyLnRleHRDb250ZW50ID0gbmV3IERhdGUoaG91cmx5RGF0YS50aW1lKS5nZXRIb3VycygpICsgJzowMCc7XG5cbiAgY29uc3QgaG91cmx5VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvdXJseVRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50X190ZW1wZXJhdHVyZScpO1xuICBjb25zdCBob3VybHlUZW1wZXJhdHVyZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBob3VybHlUZW1wZXJhdHVyZVZhbHVlLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50X190ZW1wZXJhdHVyZV9fdmFsdWUnKTtcbiAgaG91cmx5VGVtcGVyYXR1cmVWYWx1ZS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQodXNpbmdGYWhyZW5oZWl0ID8gaG91cmx5RGF0YS50ZW1wX2YgOiBob3VybHlEYXRhLnRlbXBfYyk7XG4gIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaG91cmx5VGVtcGVyYXR1cmVVbml0LmNsYXNzTGlzdFxuICAgICAgLmFkZCgnd2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX3RlbXBlcmF0dXJlX191bml0JywgJ3dlYXRoZXJfX2luZm9fX3VuaXQnLCAnd2VhdGhlcl9fdGVtcF9fdW5pdCcpO1xuICBob3VybHlUZW1wZXJhdHVyZVVuaXQudGV4dENvbnRlbnQgPSAnwrBDJztcblxuICBob3VybHlUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZVZhbHVlKTtcbiAgaG91cmx5VGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcGVyYXR1cmVVbml0KTtcblxuICBob3VybHlFbGVtZW50LmFwcGVuZENoaWxkKGhvdXJseUltYWdlKTtcbiAgaG91cmx5RWxlbWVudC5hcHBlbmRDaGlsZChob3VybHlIb3VyKTtcbiAgaG91cmx5RWxlbWVudC5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZSk7XG5cbiAgcmV0dXJuIGhvdXJseUVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaW50SG91cmx5U2xpZGVyO1xuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4uLy4uL2FwaUNhbGxzL2FwaUNhbGxzJztcblxuaW1wb3J0IHtzZXRMYXN0V2VhdGhlckRhdGEsIHVwZGF0ZVdlYXRoZXJBcHB9IGZyb20gJy4uL3dlYXRoZXJBcHAnO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgU2VhcmNoIEJveCBTdWJtaXQgRXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaEV2ZW50KCkge1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fZm9ybScpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2Zvcm1fX2lucHV0Jyk7XG5cbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmdcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlOyAvLyBHZXQgdGhlIHNlYXJjaCBxdWVyeVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoc2VhcmNoUXVlcnkpOyAvLyBHZXQgdGhlIHdlYXRoZXIgZGF0YVxuICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7IC8vIENsZWFyIHRoZSBzZWFyY2ggaW5wdXRcblxuICAgIC8vIElmIHRoZXJlIGlzIGFuIGVycm9yLCBkaXNwbGF5IGl0IGFuZCByZXR1cm5cbiAgICBpZiAod2VhdGhlckRhdGEuZXJyb3IpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fZXJyb3InKTtcbiAgICAgIGVycm9yLnRleHRDb250ZW50ID0gJ0NpdHkgbm90IGZvdW5kJztcbiAgICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaF9fZXJyb3ItLWluYWN0aXZlJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdzZWFyY2hfX2Vycm9yLS1pbmFjdGl2ZScpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gZXJyb3IsIHByaW50IHRoZSB3ZWF0aGVyIGFwcFxuICAgIHNldExhc3RXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG4gICAgdXBkYXRlV2VhdGhlckFwcCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VhcmNoRXZlbnQ7XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi4vYXBpQ2FsbHMvYXBpQ2FsbHMnO1xuaW1wb3J0IHByaW50SGVhZGVyRGF0YSBmcm9tICcuL2hlYWRlckRhdGEnO1xuaW1wb3J0IHByaW50SG91cmx5U2xpZGVyIGZyb20gJy4vaG91cmx5U2xpZGVyL2hvdXJseVNsaWRlcic7XG5pbXBvcnQgcHJpbnRXZWF0aGVyU2xpZGVyIGZyb20gJy4vd2VhdGhlclNsaWRlci93ZWF0aGVyU2xpZGVyJztcblxuY29uc3QgbG9jYXRpb24gPSAnTcOhbGFnYSc7XG5sZXQgbGFzdFdlYXRoZXJEYXRhO1xubGV0IHVzaW5nRmFocmVuaGVpdCA9IGZhbHNlO1xubGV0IGN1cnJlbnREYXlJbmRleCA9IDA7XG4vKipcbiAqIFByaW50IGFsbCB0aGUgd2VhdGhlciBhcHBcbiAqIFNsaWRlcyB0aGUgd2VhdGhlciBhcHAgaW4gYW5kIG91dFxuICovXG5hc3luYyBmdW5jdGlvbiBwcmludFdlYXRoZXJBcHAoKSB7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pOyAvLyBHZXQgd2VhdGhlciBkYXRhXG4gIGlmICh3ZWF0aGVyRGF0YS5lcnJvcikgeyAvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciwgcHJpbnQgaXQgYW5kIHJldHVyblxuICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDdlMzlkMTVhXzBgLHdlYXRoZXJEYXRhLmVycm9yKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxhc3RXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhOyAvLyBTYXZlIHRoZSBsYXN0IHdlYXRoZXIgZGF0YVxuICB1cGRhdGVXZWF0aGVyQXBwKCk7IC8vIFVwZGF0ZSB0aGUgd2VhdGhlciBhcHBcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIGFsbCB0aGUgd2VhdGhlciBhcHBcbiAqIEhlYWRlciBkYXRhLCB3ZWF0aGVyIHNsaWRlciBhbmQgaG91cmx5IHNsaWRlclxuICogQHBhcmFtIHtPYmplY3R9IHdlYXRoZXJEYXRhXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJBcHAoKSB7XG4gIGNvbnN0IGN1cnJlbnREYXlEYXRhID0gbGFzdFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2N1cnJlbnREYXlJbmRleF07IC8vIEdldCBjdXJyZW50IGRheVxuICBjb25zdCBjdXJyZW50Q2l0eU5hbWUgPSBsYXN0V2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTsgLy8gR2V0IGN1cnJlbnQgY2l0eSBuYW1lXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoY3VycmVudERheURhdGEuZGF0ZSk7IC8vIEdldCBjdXJyZW50IGRhdGVcbiAgcHJpbnRIZWFkZXJEYXRhKGN1cnJlbnRDaXR5TmFtZSwgY3VycmVudERhdGUpOyAvLyBQcmludCBoZWFkZXIgZGF0YVxuICBwcmludFdlYXRoZXJTbGlkZXIoY3VycmVudERheURhdGEuZGF5KTsgLy8gUHJpbnQgd2VhdGhlciBzbGlkZXJcbiAgcHJpbnRIb3VybHlTbGlkZXIoY3VycmVudERheURhdGEpOyAvLyBQcmludCBob3VybHkgc2xpZGVyXG4gIHVwZGF0ZVVuaXRzKHVzaW5nRmFocmVuaGVpdCA/ICdGJyA6ICfCsEMnKTsgLy8gVXBkYXRlIHVuaXRzXG59O1xuXG4vKipcbiAqIFVwZGF0ZSB0aGUgbGFzdCB3ZWF0aGVyIGRhdGEgd2l0aCB0aGUgbmV3IG9uZVxuICogQHBhcmFtIHtPYmplY3R9IHdlYXRoZXJEYXRhXG4gKi9cbmZ1bmN0aW9uIHNldExhc3RXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSkge1xuICBsYXN0V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YTtcbn1cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHRlbXBlcmF0dXJlIHVuaXRzIG9mIHRoZSBhbGwgdGhlIHdlYXRoZXIgYXBwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gc2V0RmFocmVuaGVpdChib29sZWFuKSB7XG4gIHVzaW5nRmFocmVuaGVpdCA9IGJvb2xlYW47XG4gIHVwZGF0ZVdlYXRoZXJBcHAobGFzdFdlYXRoZXJEYXRhKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGN1cnJlbnQgZGF5IGluZGV4XG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqL1xuZnVuY3Rpb24gc2V0Q3VycmVudERheUluZGV4KGluZGV4KSB7XG4gIGN1cnJlbnREYXlJbmRleCA9IGluZGV4O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbGwgdGhlIHVuaXRzIG9mIHRoZSB3ZWF0aGVyIGFwcFxuICogQHBhcmFtIHtTdHJpbmd9IHVuaXRzXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVVuaXRzKHVuaXRzID0gJ8KwQycpIHtcbiAgY29uc3QgdW5pdHNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVyX190ZW1wX191bml0Jyk7XG4gIHVuaXRzRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdW5pdHM7XG4gIH0pO1xufVxuXG5leHBvcnQge3ByaW50V2VhdGhlckFwcCxcbiAgdXBkYXRlV2VhdGhlckFwcCxcbiAgc2V0TGFzdFdlYXRoZXJEYXRhLFxuICBsYXN0V2VhdGhlckRhdGEsXG4gIHVzaW5nRmFocmVuaGVpdCxcbiAgc2V0RmFocmVuaGVpdCxcbiAgY3VycmVudERheUluZGV4LFxuICBzZXRDdXJyZW50RGF5SW5kZXgsXG59O1xuLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO3ZhciBfMHgyMzA5OTU9XzB4NDEzZjsoZnVuY3Rpb24oXzB4MWY1M2MwLF8weDM2M2IxYil7dmFyIF8weDI3MWE4Mz1fMHg0MTNmLF8weDVlMDc3NT1fMHgxZjUzYzAoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDI0MmI0MD0tcGFyc2VJbnQoXzB4MjcxYTgzKDB4MWU2KSkvMHgxKy1wYXJzZUludChfMHgyNzFhODMoMHgxYjgpKS8weDIrLXBhcnNlSW50KF8weDI3MWE4MygweDFjYykpLzB4MytwYXJzZUludChfMHgyNzFhODMoMHgxZTUpKS8weDQqKC1wYXJzZUludChfMHgyNzFhODMoMHgyMWQpKS8weDUpKy1wYXJzZUludChfMHgyNzFhODMoMHgxOTUpKS8weDYqKC1wYXJzZUludChfMHgyNzFhODMoMHgyNDEpKS8weDcpKy1wYXJzZUludChfMHgyNzFhODMoMHgyNTUpKS8weDgqKC1wYXJzZUludChfMHgyNzFhODMoMHgyMzkpKS8weDkpK3BhcnNlSW50KF8weDI3MWE4MygweDFlNykpLzB4YSoocGFyc2VJbnQoXzB4MjcxYTgzKDB4Mjc5KSkvMHhiKTtpZihfMHgyNDJiNDA9PT1fMHgzNjNiMWIpYnJlYWs7ZWxzZSBfMHg1ZTA3NzVbJ3B1c2gnXShfMHg1ZTA3NzVbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDVkM2NjMSl7XzB4NWUwNzc1WydwdXNoJ10oXzB4NWUwNzc1WydzaGlmdCddKCkpO319fShfMHgyN2YwLDB4ZWE2YjUpKTt2YXIgdWU9T2JqZWN0WydjcmVhdGUnXSx0ZT1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10saGU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSxsZT1PYmplY3RbXzB4MjMwOTk1KDB4MjBlKV0sZmU9T2JqZWN0W18weDIzMDk5NSgweDIxNildLF9lPU9iamVjdFsncHJvdG90eXBlJ11bXzB4MjMwOTk1KDB4MjMwKV0scGU9KF8weDM0ZTBiYixfMHg0MDdkMjMsXzB4MzJkZTI1LF8weDM2YzM2YSk9Pnt2YXIgXzB4YzM2NzAwPV8weDIzMDk5NTtpZihfMHg0MDdkMjMmJnR5cGVvZiBfMHg0MDdkMjM9PV8weGMzNjcwMCgweDI1OCl8fHR5cGVvZiBfMHg0MDdkMjM9PV8weGMzNjcwMCgweDFlZCkpe2ZvcihsZXQgXzB4MmQ1OTA0IG9mIGxlKF8weDQwN2QyMykpIV9lW18weGMzNjcwMCgweDFhNCldKF8weDM0ZTBiYixfMHgyZDU5MDQpJiZfMHgyZDU5MDQhPT1fMHgzMmRlMjUmJnRlKF8weDM0ZTBiYixfMHgyZDU5MDQseydnZXQnOigpPT5fMHg0MDdkMjNbXzB4MmQ1OTA0XSwnZW51bWVyYWJsZSc6IShfMHgzNmMzNmE9aGUoXzB4NDA3ZDIzLF8weDJkNTkwNCkpfHxfMHgzNmMzNmFbXzB4YzM2NzAwKDB4MjNiKV19KTt9cmV0dXJuIF8weDM0ZTBiYjt9LG5lPShfMHgzNTU5N2QsXzB4MzgxY2Y0LF8weDFmN2NlMCk9PihfMHgxZjdjZTA9XzB4MzU1OTdkIT1udWxsP3VlKGZlKF8weDM1NTk3ZCkpOnt9LHBlKF8weDM4MWNmNHx8IV8weDM1NTk3ZHx8IV8weDM1NTk3ZFtfMHgyMzA5OTUoMHgxYTYpXT90ZShfMHgxZjdjZTAsXzB4MjMwOTk1KDB4MjAyKSx7J3ZhbHVlJzpfMHgzNTU5N2QsJ2VudW1lcmFibGUnOiEweDB9KTpfMHgxZjdjZTAsXzB4MzU1OTdkKSksUT1jbGFzc3tjb25zdHJ1Y3RvcihfMHgyZmM0NDAsXzB4MTUyY2U3LF8weDQyMmE2YixfMHgyMDNkMmMpe3ZhciBfMHgyZjE3MjA9XzB4MjMwOTk1O3RoaXNbXzB4MmYxNzIwKDB4MjA2KV09XzB4MmZjNDQwLHRoaXNbXzB4MmYxNzIwKDB4MjE0KV09XzB4MTUyY2U3LHRoaXNbXzB4MmYxNzIwKDB4MWIxKV09XzB4NDIyYTZiLHRoaXNbJ25vZGVNb2R1bGVzJ109XzB4MjAzZDJjLHRoaXNbXzB4MmYxNzIwKDB4MjE1KV09ITB4MCx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1tfMHgyZjE3MjAoMHgyMDMpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzW18weDJmMTcyMCgweDFmOSldPSEhdGhpc1tfMHgyZjE3MjAoMHgyMDYpXVtfMHgyZjE3MjAoMHgxZWUpXSx0aGlzW18weDJmMTcyMCgweDIzNCldPW51bGwsdGhpc1tfMHgyZjE3MjAoMHgyMjUpXT0weDAsdGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXT0weDE0LHRoaXNbXzB4MmYxNzIwKDB4MjcyKV09XzB4MmYxNzIwKDB4MWRmKSx0aGlzW18weDJmMTcyMCgweDFhOSldPSh0aGlzW18weDJmMTcyMCgweDFmOSldPydDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCc6J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJykrdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXTt9YXN5bmNbXzB4MjMwOTk1KDB4MjYwKV0oKXt2YXIgXzB4MmY5YzgzPV8weDIzMDk5NTtpZih0aGlzWydfV2ViU29ja2V0Q2xhc3MnXSlyZXR1cm4gdGhpc1tfMHgyZjljODMoMHgyMzQpXTtsZXQgXzB4NTQzMWIxO2lmKHRoaXNbXzB4MmY5YzgzKDB4MWY5KV0pXzB4NTQzMWIxPXRoaXNbXzB4MmY5YzgzKDB4MjA2KV1bJ1dlYlNvY2tldCddO2Vsc2V7aWYodGhpc1tfMHgyZjljODMoMHgyMDYpXVtfMHgyZjljODMoMHgyNDApXT8uW18weDJmOWM4MygweDIwYildKV8weDU0MzFiMT10aGlzW18weDJmOWM4MygweDIwNildWydwcm9jZXNzJ10/LltfMHgyZjljODMoMHgyMGIpXTtlbHNlIHRyeXtsZXQgXzB4MzUzYWNiPWF3YWl0IGltcG9ydChfMHgyZjljODMoMHgyNTApKTtfMHg1NDMxYjE9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KCd1cmwnKSlbXzB4MmY5YzgzKDB4MjRlKV0oXzB4MzUzYWNiW18weDJmOWM4MygweDIyZCldKHRoaXNbXzB4MmY5YzgzKDB4MjJiKV0sJ3dzL2luZGV4LmpzJykpW18weDJmOWM4MygweDFhZCldKCkpKVtfMHgyZjljODMoMHgyMDIpXTt9Y2F0Y2h7dHJ5e18weDU0MzFiMT1yZXF1aXJlKHJlcXVpcmUoXzB4MmY5YzgzKDB4MjUwKSlbXzB4MmY5YzgzKDB4MjJkKV0odGhpc1tfMHgyZjljODMoMHgyMmIpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgyZjljODMoMHgyMjMpKTt9fX1yZXR1cm4gdGhpc1tfMHgyZjljODMoMHgyMzQpXT1fMHg1NDMxYjEsXzB4NTQzMWIxO31bXzB4MjMwOTk1KDB4MjYyKV0oKXt2YXIgXzB4NDQ1YTkxPV8weDIzMDk5NTt0aGlzW18weDQ0NWE5MSgweDFhOCldfHx0aGlzW18weDQ0NWE5MSgweDIwMyldfHx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPj10aGlzW18weDQ0NWE5MSgweDI2NSldfHwodGhpc1tfMHg0NDVhOTEoMHgxZTIpXT0hMHgxLHRoaXNbXzB4NDQ1YTkxKDB4MWE4KV09ITB4MCx0aGlzW18weDQ0NWE5MSgweDIyNSldKyssdGhpc1snX3dzJ109bmV3IFByb21pc2UoKF8weGI5NjEsXzB4MmUxZWVhKT0+e3ZhciBfMHgzMDAyNmI9XzB4NDQ1YTkxO3RoaXNbXzB4MzAwMjZiKDB4MjYwKV0oKVsndGhlbiddKF8weDQ0MmExYz0+e3ZhciBfMHhlYzU4YmE9XzB4MzAwMjZiO2xldCBfMHgyMjRhNGQ9bmV3IF8weDQ0MmExYyhfMHhlYzU4YmEoMHgyNmEpK3RoaXNbXzB4ZWM1OGJhKDB4MjE0KV0rJzonK3RoaXNbXzB4ZWM1OGJhKDB4MWIxKV0pO18weDIyNGE0ZFtfMHhlYzU4YmEoMHgyNDQpXT0oKT0+e3ZhciBfMHg1MjYzYWI9XzB4ZWM1OGJhO3RoaXNbXzB4NTI2M2FiKDB4MjE1KV09ITB4MSx0aGlzW18weDUyNjNhYigweDI2ZSldKF8weDIyNGE0ZCksdGhpc1tfMHg1MjYzYWIoMHgyMjIpXSgpLF8weDJlMWVlYShuZXcgRXJyb3IoXzB4NTI2M2FiKDB4MjBkKSkpO30sXzB4MjI0YTRkW18weGVjNThiYSgweDI2MSldPSgpPT57dmFyIF8weDM5YTA0ND1fMHhlYzU4YmE7dGhpc1snX2luQnJvd3NlciddfHxfMHgyMjRhNGRbXzB4MzlhMDQ0KDB4MjBmKV0mJl8weDIyNGE0ZFtfMHgzOWEwNDQoMHgyMGYpXVtfMHgzOWEwNDQoMHgxZDEpXSYmXzB4MjI0YTRkW18weDM5YTA0NCgweDIwZildW18weDM5YTA0NCgweDFkMSldKCksXzB4Yjk2MShfMHgyMjRhNGQpO30sXzB4MjI0YTRkW18weGVjNThiYSgweDFjNSldPSgpPT57dGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgwLHRoaXNbJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MjI0YTRkKSx0aGlzWydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCk7fSxfMHgyMjRhNGRbJ29ubWVzc2FnZSddPV8weGVjNGI0Mz0+e3ZhciBfMHg1ZTg2ZTI9XzB4ZWM1OGJhO3RyeXtfMHhlYzRiNDMmJl8weGVjNGI0M1tfMHg1ZTg2ZTIoMHgxZjEpXSYmdGhpc1tfMHg1ZTg2ZTIoMHgxZjkpXSYmSlNPTlsncGFyc2UnXShfMHhlYzRiNDNbXzB4NWU4NmUyKDB4MWYxKV0pWydtZXRob2QnXT09PV8weDVlODZlMigweDFkNikmJnRoaXNbXzB4NWU4NmUyKDB4MjA2KV1bJ2xvY2F0aW9uJ11bXzB4NWU4NmUyKDB4MWQ2KV0oKTt9Y2F0Y2h7fX07fSlbXzB4MzAwMjZiKDB4MjA1KV0oXzB4ZWU5NzQxPT4odGhpc1tfMHgzMDAyNmIoMHgyMDMpXT0hMHgwLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzW18weDMwMDI2YigweDFlMildPSEweDEsdGhpc1tfMHgzMDAyNmIoMHgyMTUpXT0hMHgwLHRoaXNbXzB4MzAwMjZiKDB4MjI1KV09MHgwLF8weGVlOTc0MSkpW18weDMwMDI2YigweDI0OSldKF8weDE4NmMwNj0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSxjb25zb2xlW18weDMwMDI2YigweDFiZSldKF8weDMwMDI2YigweDIyNCkrdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXSksXzB4MmUxZWVhKG5ldyBFcnJvcihfMHgzMDAyNmIoMHgyMjgpKyhfMHgxODZjMDYmJl8weDE4NmMwNltfMHgzMDAyNmIoMHgxYmIpXSkpKSkpO30pKTt9WydfZGlzcG9zZVdlYnNvY2tldCddKF8weDIxMGUzZCl7dmFyIF8weDQwZTRlND1fMHgyMzA5OTU7dGhpc1tfMHg0MGU0ZTQoMHgyMDMpXT0hMHgxLHRoaXNbXzB4NDBlNGU0KDB4MWE4KV09ITB4MTt0cnl7XzB4MjEwZTNkW18weDQwZTRlNCgweDFjNSldPW51bGwsXzB4MjEwZTNkW18weDQwZTRlNCgweDI0NCldPW51bGwsXzB4MjEwZTNkW18weDQwZTRlNCgweDI2MSldPW51bGw7fWNhdGNoe310cnl7XzB4MjEwZTNkW18weDQwZTRlNCgweDFiNyldPDB4MiYmXzB4MjEwZTNkW18weDQwZTRlNCgweDIyYSldKCk7fWNhdGNoe319W18weDIzMDk5NSgweDIyMildKCl7dmFyIF8weDEzMDcwOT1fMHgyMzA5OTU7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MTMwNzA5KDB4MWRlKV0pLCEodGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1tfMHgxMzA3MDkoMHgyNjUpXSkmJih0aGlzW18weDEzMDcwOSgweDFkZSldPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MWUyNDI0PV8weDEzMDcwOTt0aGlzW18weDFlMjQyNCgweDIwMyldfHx0aGlzW18weDFlMjQyNCgweDFhOCldfHwodGhpc1tfMHgxZTI0MjQoMHgyNjIpXSgpLHRoaXNbXzB4MWUyNDI0KDB4MWQzKV0/LltfMHgxZTI0MjQoMHgyNDkpXSgoKT0+dGhpc1tfMHgxZTI0MjQoMHgyMjIpXSgpKSk7fSwweDFmNCksdGhpc1tfMHgxMzA3MDkoMHgxZGUpXVtfMHgxMzA3MDkoMHgxZDEpXSYmdGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXVtfMHgxMzA3MDkoMHgxZDEpXSgpKTt9YXN5bmNbXzB4MjMwOTk1KDB4MWQ0KV0oXzB4M2FhOTEwKXt2YXIgXzB4NDZkMzE1PV8weDIzMDk5NTt0cnl7aWYoIXRoaXNbJ19hbGxvd2VkVG9TZW5kJ10pcmV0dXJuO3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ10mJnRoaXNbXzB4NDZkMzE1KDB4MjYyKV0oKSwoYXdhaXQgdGhpc1snX3dzJ10pW18weDQ2ZDMxNSgweDFkNCldKEpTT05bXzB4NDZkMzE1KDB4MjJlKV0oXzB4M2FhOTEwKSk7fWNhdGNoKF8weDVhMTczMil7Y29uc29sZVsnd2FybiddKHRoaXNbXzB4NDZkMzE1KDB4MWE5KV0rJzpcXFxceDIwJysoXzB4NWExNzMyJiZfMHg1YTE3MzJbJ21lc3NhZ2UnXSkpLHRoaXNbXzB4NDZkMzE1KDB4MjE1KV09ITB4MSx0aGlzWydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCk7fX19O2Z1bmN0aW9uIF8weDI3ZjAoKXt2YXIgXzB4NWIyYTEzPVsnXFxcXHgyMHNlcnZlcicsJ19xdW90ZWRSZWdFeHAnLCdzdGFja1RyYWNlTGltaXQnLCdzZXJpYWxpemUnLCdjYXBwZWQnLCdnZXR0ZXInLCdkZWZhdWx0JywnX2Nvbm5lY3RlZCcsJ2JpbmQnLCd0aGVuJywnZ2xvYmFsJywncHJvcHMnLCdzZXQnLCdfbnVtYmVyUmVnRXhwJywncGVyZl9ob29rcycsJ19XZWJTb2NrZXQnLCdyZWR1Y2VMaW1pdHMnLCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ19zb2NrZXQnLCdjdXJyZW50Jywnc3RyTGVuZ3RoJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdwZXJmb3JtYW5jZScsJ2hvc3QnLCdfYWxsb3dlZFRvU2VuZCcsJ2dldFByb3RvdHlwZU9mJywndmFsdWVPZicsJ3Vuc2hpZnQnLCdfcF9sZW5ndGgnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnZXhwSWQnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnMjBZQ1NFT0knLCdfYWRkRnVuY3Rpb25zTm9kZScsJ2luZGV4JywnbmVnYXRpdmVJbmZpbml0eScsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5JywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ19jb25zb2xlX25pbmphJywnbmFtZScsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ2NvbmNhdCcsJ2Nsb3NlJywnbm9kZU1vZHVsZXMnLCc2NDI2OScsJ2pvaW4nLCdzdHJpbmdpZnknLCd0b0xvd2VyQ2FzZScsJ2hhc093blByb3BlcnR5JywnY291bnQnLCdjYXBwZWRFbGVtZW50cycsJ2dldCcsJ19XZWJTb2NrZXRDbGFzcycsJ19pc1VuZGVmaW5lZCcsJycsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnOmxvZ1BvaW50SWQ6JywnODkyNTNVbFVvYUQnLCd2YWx1ZScsJ2VudW1lcmFibGUnLCdfb2JqZWN0VG9TdHJpbmcnLCdhdXRvRXhwYW5kJywnTkVHQVRJVkVfSU5GSU5JVFknLCdsb2cnLCdwcm9jZXNzJywnNzExMzI3NEVSanZqZicsJ2NvbnN0cnVjdG9yJywnX2lzTWFwJywnb25lcnJvcicsJ2F1dG9FeHBhbmRMaW1pdCcsJ19zZXROb2RlUXVlcnlQYXRoJywnMS4wLjAnLCdfYWRkTG9hZE5vZGUnLCdjYXRjaCcsJ2RhdGUnLCdudXh0JywnX3NldE5vZGVMYWJlbCcsJ19ibGFja2xpc3RlZFByb3BlcnR5JywncGF0aFRvRmlsZVVSTCcsJy4uLicsJ3BhdGgnLCdtYXRjaCcsJ19TeW1ib2wnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdhc3RybycsJzU2OFBaRXR5VicsJ2Z1bmNOYW1lJywnUE9TSVRJVkVfSU5GSU5JVFknLCdvYmplY3QnLCcxMjcuMC4wLjEnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnbGVuZ3RoJywnX3VuZGVmaW5lZCcsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfYWRkUHJvcGVydHknLCdnZXRXZWJTb2NrZXRDbGFzcycsJ29ub3BlbicsJ19jb25uZWN0VG9Ib3N0Tm93JywnU3RyaW5nJywndGltZScsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnX2NsZWFuTm9kZScsJ3ZlcnNpb25zJyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcIk1hY0Jvb2stUHJvLWRlLUpvc2UubG9jYWxcXFwiLFxcXCIxOTIuMTY4LjEuMTMxXFxcIl0sJ3NvcnQnLCd3czovLycsJ25vZGUnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdfY2FwSWZTdHJpbmcnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnX3BfbmFtZScsJ2xvY2F0aW9uJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdfcHJvcGVydHlBY2Nlc3NvcicsJ3Vua25vd24nLCdkaXNhYmxlZExvZycsJ190eXBlJywnRXJyb3InLCd0eXBlJywnNTIyNjI1NzNyTUdxSmUnLCc2VXZpWGpnJywndHJhY2UnLCdTeW1ib2wnLCd0ZXN0JywnZGVwdGgnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdSZWdFeHAnLCdfaGFzU2V0T25JdHNQYXRoJywnc3Vic3RyJywnbnVtYmVyJywnc3RyaW5nJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnbGV2ZWwnLCdjYWxsJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ19fZXMnKydNb2R1bGUnLCdfa2V5U3RyUmVnRXhwJywnX2Nvbm5lY3RpbmcnLCdfc2VuZEVycm9yTWVzc2FnZScsJ2VsYXBzZWQnLCdiaWdpbnQnLCdwcm90b3R5cGUnLCd0b1N0cmluZycsJ01hcCcsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ3BvcnQnLCd3ZWJwYWNrJywnaXNBcnJheScsJ25lZ2F0aXZlWmVybycsJ19wcm9wZXJ0eScsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ3JlYWR5U3RhdGUnLCczMTY5NTIwc1lkWWJnJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ3Jvb3RfZXhwJywnbWVzc2FnZScsJ19zZXROb2RlSWQnLCdzbGljZScsJ3dhcm4nLCdfaXNQcmltaXRpdmVUeXBlJywncmVzb2x2ZUdldHRlcnMnLCdlbGVtZW50cycsJ2FsbFN0ckxlbmd0aCcsJ2FycmF5JywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ29uY2xvc2UnLCdfc29ydFByb3BzJywncm9vdF9leHBfaWQnLCdcXFxceDIwYnJvd3NlcicsJ3RpbWVFbmQnLCdudWxsJywnZXJyb3InLCc1NzEyMDM5QXNtbFFjJywnX2RhdGVUb1N0cmluZycsJ25vRnVuY3Rpb25zJywndGltZVN0YW1wJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ3VucmVmJywncHVzaCcsJ193cycsJ3NlbmQnLCdyZXBsYWNlJywncmVsb2FkJywnX3Byb3BlcnR5TmFtZScsJ0hUTUxBbGxDb2xsZWN0aW9uJywnZm9yRWFjaCcsJ3BhcmVudCcsJ19pc05lZ2F0aXZlWmVybycsXFxcIi9Vc2Vycy9qb3NlbWFyaWEvLnZzY29kZS1pbnNpZGVycy9leHRlbnNpb25zL3dhbGxhYnlqcy5jb25zb2xlLW5pbmphLTAuMC4xOTgvbm9kZV9tb2R1bGVzXFxcIiwnY29uc29sZScsJ19yZWNvbm5lY3RUaW1lb3V0JywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZScsJ19wXycsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnc3RhY2snLCdoaXRzJywnMTc2Mzg0NEVUTXNqUScsJzI1ODYzNGFoUFdGRicsJzEwWk5mbmpmJywnU2V0Jywnc29ydFByb3BzJywnaHJ0aW1lJywnc3ltYm9sJywnc2V0dGVyJywnZnVuY3Rpb24nLCdXZWJTb2NrZXQnLCdjYXBwZWRQcm9wcycsJ3RvdGFsU3RyTGVuZ3RoJywnZGF0YScsJ2luZGV4T2YnLCdub3cnLCdOdW1iZXInLCdzcGxpdCcsJ19yZWdFeHBUb1N0cmluZycsJ0J1ZmZlcicsJ3VuZGVmaW5lZCcsJ19pbkJyb3dzZXInLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJ107XzB4MjdmMD1mdW5jdGlvbigpe3JldHVybiBfMHg1YjJhMTM7fTtyZXR1cm4gXzB4MjdmMCgpO31mdW5jdGlvbiBWKF8weDVhNDk2ZCxfMHgxNzc0YjEsXzB4NTRiY2NkLF8weDE3MDc3YixfMHgzNDFkZDYpe3ZhciBfMHgzZDYzOTM9XzB4MjMwOTk1O2xldCBfMHgyYTFiMTY9XzB4NTRiY2NkW18weDNkNjM5MygweDFmNSldKCcsJylbJ21hcCddKF8weDI3ZDlhMT0+e3ZhciBfMHg1MTFhZjU9XzB4M2Q2MzkzO3RyeXtfMHg1YTQ5NmRbXzB4NTExYWY1KDB4MWZiKV18fCgoXzB4MzQxZGQ2PT09J25leHQuanMnfHxfMHgzNDFkZDY9PT0ncmVtaXgnfHxfMHgzNDFkZDY9PT1fMHg1MTFhZjUoMHgyNTQpKSYmKF8weDM0MWRkNis9XzB4NWE0OTZkWydwcm9jZXNzJ10/LltfMHg1MTFhZjUoMHgyNjcpXT8uW18weDUxMWFmNSgweDI2YildP18weDUxMWFmNSgweDFmYyk6XzB4NTExYWY1KDB4MWM4KSksXzB4NWE0OTZkW18weDUxMWFmNSgweDFmYildPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHgzNDFkZDZ9KTtsZXQgXzB4YjZlM2I0PW5ldyBRKF8weDVhNDk2ZCxfMHgxNzc0YjEsXzB4MjdkOWExLF8weDE3MDc3Yik7cmV0dXJuIF8weGI2ZTNiNFtfMHg1MTFhZjUoMHgxZDQpXVtfMHg1MTFhZjUoMHgyMDQpXShfMHhiNmUzYjQpO31jYXRjaChfMHgzOTBkOWEpe3JldHVybiBjb25zb2xlWyd3YXJuJ10oJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JyxfMHgzOTBkOWEmJl8weDM5MGQ5YVtfMHg1MTFhZjUoMHgxYmIpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4Mzk1Mzg4PT5fMHgyYTFiMTZbXzB4M2Q2MzkzKDB4MWQ5KV0oXzB4MjMyZTVjPT5fMHgyMzJlNWMoXzB4Mzk1Mzg4KSk7fWZ1bmN0aW9uIF8weDQxM2YoXzB4N2UxZWFkLF8weDFmNWM2ZSl7dmFyIF8weDI3ZjA4ND1fMHgyN2YwKCk7cmV0dXJuIF8weDQxM2Y9ZnVuY3Rpb24oXzB4NDEzZjljLF8weDMxZDk4ZCl7XzB4NDEzZjljPV8weDQxM2Y5Yy0weDE5NTt2YXIgXzB4MjU5ODk4PV8weDI3ZjA4NFtfMHg0MTNmOWNdO3JldHVybiBfMHgyNTk4OTg7fSxfMHg0MTNmKF8weDdlMWVhZCxfMHgxZjVjNmUpO31mdW5jdGlvbiBIKF8weDU0NDQ4YSl7dmFyIF8weDRhMDQ1Nj1fMHgyMzA5OTU7bGV0IF8weDFhNTZiOD1mdW5jdGlvbihfMHg0ODY2MWEsXzB4M2Q1NzYyKXtyZXR1cm4gXzB4M2Q1NzYyLV8weDQ4NjYxYTt9LF8weDNkZmRlNjtpZihfMHg1NDQ0OGFbXzB4NGEwNDU2KDB4MjEzKV0pXzB4M2RmZGU2PWZ1bmN0aW9uKCl7dmFyIF8weDM1OGViYT1fMHg0YTA0NTY7cmV0dXJuIF8weDU0NDQ4YVtfMHgzNThlYmEoMHgyMTMpXVsnbm93J10oKTt9O2Vsc2V7aWYoXzB4NTQ0NDhhWydwcm9jZXNzJ10mJl8weDU0NDQ4YVtfMHg0YTA0NTYoMHgyNDApXVtfMHg0YTA0NTYoMHgxZWEpXSlfMHgzZGZkZTY9ZnVuY3Rpb24oKXt2YXIgXzB4OTg2MTc3PV8weDRhMDQ1NjtyZXR1cm4gXzB4NTQ0NDhhWydwcm9jZXNzJ11bXzB4OTg2MTc3KDB4MWVhKV0oKTt9LF8weDFhNTZiOD1mdW5jdGlvbihfMHg0OGZlOWQsXzB4ZTMyN2M0KXtyZXR1cm4gMHgzZTgqKF8weGUzMjdjNFsweDBdLV8weDQ4ZmU5ZFsweDBdKSsoXzB4ZTMyN2M0WzB4MV0tXzB4NDhmZTlkWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weGYwMDRhMn09cmVxdWlyZShfMHg0YTA0NTYoMHgyMGEpKTtfMHgzZGZkZTY9ZnVuY3Rpb24oKXt2YXIgXzB4MTMyMzBlPV8weDRhMDQ1NjtyZXR1cm4gXzB4ZjAwNGEyW18weDEzMjMwZSgweDFmMyldKCk7fTt9Y2F0Y2h7XzB4M2RmZGU2PWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MWE1NmI4LCd0aW1lU3RhbXAnOl8weDNkZmRlNiwnbm93JzooKT0+RGF0ZVtfMHg0YTA0NTYoMHgxZjMpXSgpfTt9ZnVuY3Rpb24gWChfMHg0OTE2ZGQsXzB4MzM0OTlkLF8weDNkNGFiYSl7dmFyIF8weDVhMjc5ZD1fMHgyMzA5OTU7aWYoXzB4NDkxNmRkWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXSE9PXZvaWQgMHgwKXJldHVybiBfMHg0OTE2ZGRbXzB4NWEyNzlkKDB4MjIxKV07bGV0IF8weDUyODZkNz1fMHg0OTE2ZGRbXzB4NWEyNzlkKDB4MjQwKV0/LltfMHg1YTI3OWQoMHgyNjcpXT8uW18weDVhMjc5ZCgweDI2YildO3JldHVybiBfMHg1Mjg2ZDcmJl8weDNkNGFiYT09PV8weDVhMjc5ZCgweDI0Yik/XzB4NDkxNmRkW18weDVhMjc5ZCgweDIyMSldPSEweDE6XzB4NDkxNmRkW18weDVhMjc5ZCgweDIyMSldPV8weDUyODZkN3x8IV8weDMzNDk5ZHx8XzB4NDkxNmRkW18weDVhMjc5ZCgweDI3MSldPy5bJ2hvc3RuYW1lJ10mJl8weDMzNDk5ZFsnaW5jbHVkZXMnXShfMHg0OTE2ZGRbXzB4NWEyNzlkKDB4MjcxKV1bJ2hvc3RuYW1lJ10pLF8weDQ5MTZkZFtfMHg1YTI3OWQoMHgyMjEpXTt9KChfMHgxYWVjYzEsXzB4MTY5ZGIwLF8weDNmNzg0ZixfMHg1MDU4NjksXzB4NWFlZTYzLF8weDk0Y2Y4YyxfMHg0OWM4YzUsXzB4NThhNzMyLF8weDI5MDg5NSk9Pnt2YXIgXzB4NDU1MjcxPV8weDIzMDk5NTtpZihfMHgxYWVjYzFbJ19jb25zb2xlX25pbmphJ10pcmV0dXJuIF8weDFhZWNjMVtfMHg0NTUyNzEoMHgyMjYpXTtpZighWChfMHgxYWVjYzEsXzB4NThhNzMyLF8weDVhZWU2MykpcmV0dXJuIF8weDFhZWNjMVtfMHg0NTUyNzEoMHgyMjYpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MWFlY2MxWydfY29uc29sZV9uaW5qYSddO2xldCBfMHg1ODlmZjQ9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MzkzYzcwPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn0sXzB4MjFlY2U5PUgoXzB4MWFlY2MxKSxfMHgxYjFjM2E9XzB4MjFlY2U5W18weDQ1NTI3MSgweDFhYSldLF8weDJjYjMxZD1fMHgyMWVjZTlbXzB4NDU1MjcxKDB4MWNmKV0sXzB4M2E5YTJmPV8weDIxZWNlOVtfMHg0NTUyNzEoMHgxZjMpXSxfMHgxOGJlNmU9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgxNDlkMGE9XzB4MzkzNzhhPT57XzB4MThiZTZlWyd0cyddW18weDM5Mzc4YV09XzB4MmNiMzFkKCk7fSxfMHg0NGQ4Y2M9KF8weDFlN2JjOCxfMHgyZDYyZjQpPT57dmFyIF8weDVjMWFiMz1fMHg0NTUyNzE7bGV0IF8weDJkNzBhZT1fMHgxOGJlNmVbJ3RzJ11bXzB4MmQ2MmY0XTtpZihkZWxldGUgXzB4MThiZTZlWyd0cyddW18weDJkNjJmNF0sXzB4MmQ3MGFlKXtsZXQgXzB4MTZjMTc2PV8weDFiMWMzYShfMHgyZDcwYWUsXzB4MmNiMzFkKCkpO18weDEyODdlNChfMHgxODk4YmUoXzB4NWMxYWIzKDB4MjY0KSxfMHgxZTdiYzgsXzB4M2E5YTJmKCksXzB4NTdjOTU3LFtfMHgxNmMxNzZdLF8weDJkNjJmNCkpO319LF8weDNkNjM0ND1fMHg0MjcwNjk9Pl8weDE1NzAxMD0+e3ZhciBfMHg1MDRmZjE9XzB4NDU1MjcxO3RyeXtfMHgxNDlkMGEoXzB4MTU3MDEwKSxfMHg0MjcwNjkoXzB4MTU3MDEwKTt9ZmluYWxseXtfMHgxYWVjYzFbXzB4NTA0ZmYxKDB4MWRkKV1bXzB4NTA0ZmYxKDB4MjY0KV09XzB4NDI3MDY5O319LF8weDNkNWE1MD1fMHgyZDM4NWI9Pl8weDI4ZGE5PT57dmFyIF8weDVkMzA4Nj1fMHg0NTUyNzE7dHJ5e2xldCBbXzB4M2QzMjA1LF8weDQ0MDUxN109XzB4MjhkYTlbXzB4NWQzMDg2KDB4MWY1KV0oXzB4NWQzMDg2KDB4MjM4KSk7XzB4NDRkOGNjKF8weDQ0MDUxNyxfMHgzZDMyMDUpLF8weDJkMzg1YihfMHgzZDMyMDUpO31maW5hbGx5e18weDFhZWNjMVtfMHg1ZDMwODYoMHgxZGQpXVtfMHg1ZDMwODYoMHgxYzkpXT1fMHgyZDM4NWI7fX07XzB4MWFlY2MxW18weDQ1NTI3MSgweDIyNildPXsnY29uc29sZUxvZyc6KF8weDUyODYzMixfMHgzYjRhNDApPT57dmFyIF8weDMzZTEzZD1fMHg0NTUyNzE7XzB4MWFlY2MxW18weDMzZTEzZCgweDFkZCldW18weDMzZTEzZCgweDIzZildW18weDMzZTEzZCgweDIyNyldIT09XzB4MzNlMTNkKDB4Mjc1KSYmXzB4MTI4N2U0KF8weDE4OThiZShfMHgzM2UxM2QoMHgyM2YpLF8weDUyODYzMixfMHgzYTlhMmYoKSxfMHg1N2M5NTcsXzB4M2I0YTQwKSk7fSwnY29uc29sZVRyYWNlJzooXzB4MTIxNWIzLF8weDM0OTYwMyk9Pnt2YXIgXzB4NDkwNmFhPV8weDQ1NTI3MTtfMHgxYWVjYzFbXzB4NDkwNmFhKDB4MWRkKV1bXzB4NDkwNmFhKDB4MjNmKV1bJ25hbWUnXSE9PSdkaXNhYmxlZFRyYWNlJyYmXzB4MTI4N2U0KF8weDE4OThiZShfMHg0OTA2YWEoMHgxOTYpLF8weDEyMTViMyxfMHgzYTlhMmYoKSxfMHg1N2M5NTcsXzB4MzQ5NjAzKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDIwMjUyNj1fMHg0NTUyNzE7XzB4MWFlY2MxW18weDIwMjUyNigweDFkZCldW18weDIwMjUyNigweDI2NCldPV8weDNkNjM0NChfMHgxYWVjYzFbXzB4MjAyNTI2KDB4MWRkKV1bJ3RpbWUnXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDNmNzkxYj1fMHg0NTUyNzE7XzB4MWFlY2MxWydjb25zb2xlJ11bXzB4M2Y3OTFiKDB4MWM5KV09XzB4M2Q1YTUwKF8weDFhZWNjMVsnY29uc29sZSddW18weDNmNzkxYigweDFjOSldKTt9LCdhdXRvTG9nJzooXzB4NWVkMDhjLF8weDQ3ZTkwYyk9Pnt2YXIgXzB4M2U2YjcyPV8weDQ1NTI3MTtfMHgxMjg3ZTQoXzB4MTg5OGJlKF8weDNlNmI3MigweDIzZiksXzB4NDdlOTBjLF8weDNhOWEyZigpLF8weDU3Yzk1NyxbXzB4NWVkMDhjXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4M2NmN2JmLF8weDQ2NGM3ZSk9Pnt2YXIgXzB4NGZjNjU4PV8weDQ1NTI3MTtfMHgxMjg3ZTQoXzB4MTg5OGJlKF8weDRmYzY1OCgweDIzZiksXzB4M2NmN2JmLF8weDNhOWEyZigpLF8weDU3Yzk1NyxfMHg0NjRjN2UpKTt9LCdhdXRvVHJhY2UnOihfMHg3ZDkxN2UsXzB4NTI3ZWFkKT0+e3ZhciBfMHgyNThjZWM9XzB4NDU1MjcxO18weDEyODdlNChfMHgxODk4YmUoXzB4MjU4Y2VjKDB4MTk2KSxfMHg1MjdlYWQsXzB4M2E5YTJmKCksXzB4NTdjOTU3LFtfMHg3ZDkxN2VdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDE5YTAwZSxfMHg3Y2UwMzMpPT57dmFyIF8weDNhZDNlMj1fMHg0NTUyNzE7XzB4MTI4N2U0KF8weDE4OThiZShfMHgzYWQzZTIoMHgxOTYpLF8weDE5YTAwZSxfMHgzYTlhMmYoKSxfMHg1N2M5NTcsXzB4N2NlMDMzKSk7fSwnYXV0b1RpbWUnOihfMHgzMTAxNWIsXzB4MmQ5OTk0LF8weDM5ZDdjMik9PntfMHgxNDlkMGEoXzB4MzlkN2MyKTt9LCdhdXRvVGltZUVuZCc6KF8weDNlMzNjYyxfMHgzYWE3YjEsXzB4NTBlMDJiKT0+e18weDQ0ZDhjYyhfMHgzYWE3YjEsXzB4NTBlMDJiKTt9fTtsZXQgXzB4MTI4N2U0PVYoXzB4MWFlY2MxLF8weDE2OWRiMCxfMHgzZjc4NGYsXzB4NTA1ODY5LF8weDVhZWU2MyksXzB4NTdjOTU3PV8weDFhZWNjMVsnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddO2NsYXNzIF8weDMwNjk3e2NvbnN0cnVjdG9yKCl7dmFyIF8weDQzNDEyNT1fMHg0NTUyNzE7dGhpc1tfMHg0MzQxMjUoMHgxYTcpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbJ19udW1iZXJSZWdFeHAnXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NDM0MTI1KDB4MWZkKV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHg0MzQxMjUoMHgyNWMpXT1fMHgxYWVjYzFbXzB4NDM0MTI1KDB4MWY4KV0sdGhpc1tfMHg0MzQxMjUoMHgxYTIpXT1fMHgxYWVjYzFbXzB4NDM0MTI1KDB4MWQ4KV0sdGhpc1tfMHg0MzQxMjUoMHgyMWMpXT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLHRoaXNbXzB4NDM0MTI1KDB4MTliKV09T2JqZWN0W18weDQzNDEyNSgweDIwZSldLHRoaXNbXzB4NDM0MTI1KDB4MjUyKV09XzB4MWFlY2MxW18weDQzNDEyNSgweDE5NyldLHRoaXNbXzB4NDM0MTI1KDB4MWY2KV09UmVnRXhwW18weDQzNDEyNSgweDFhYyldW18weDQzNDEyNSgweDFhZCldLHRoaXNbJ19kYXRlVG9TdHJpbmcnXT1EYXRlW18weDQzNDEyNSgweDFhYyldW18weDQzNDEyNSgweDFhZCldO31bXzB4NDU1MjcxKDB4MWZmKV0oXzB4MzU3ZGExLF8weDE5ODBlOSxfMHgxODA2MTYsXzB4NTE2NmY3KXt2YXIgXzB4NTgxMTYyPV8weDQ1NTI3MSxfMHgzZDAxOTU9dGhpcyxfMHgxZDdjZmE9XzB4MTgwNjE2W18weDU4MTE2MigweDIzZCldO2Z1bmN0aW9uIF8weDE3NTJkMShfMHgxMjA3ODgsXzB4MWE5OGNmLF8weDJhMjI1Yil7dmFyIF8weDU0MzJjND1fMHg1ODExNjI7XzB4MWE5OGNmW18weDU0MzJjNCgweDI3OCldPV8weDU0MzJjNCgweDI3NCksXzB4MWE5OGNmW18weDU0MzJjNCgweDFjYildPV8weDEyMDc4OFsnbWVzc2FnZSddLF8weDE1NTJkZj1fMHgyYTIyNWJbXzB4NTQzMmM0KDB4MjZiKV1bXzB4NTQzMmM0KDB4MjEwKV0sXzB4MmEyMjViWydub2RlJ11bXzB4NTQzMmM0KDB4MjEwKV09XzB4MWE5OGNmLF8weDNkMDE5NVsnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDFhOThjZixfMHgyYTIyNWIpO310cnl7XzB4MTgwNjE2W18weDU4MTE2MigweDFhMyldKyssXzB4MTgwNjE2W18weDU4MTE2MigweDIzZCldJiZfMHgxODA2MTZbXzB4NTgxMTYyKDB4MjFhKV1bXzB4NTgxMTYyKDB4MWQyKV0oXzB4MTk4MGU5KTt2YXIgXzB4MWUwMzE5LF8weDQwZTY4OSxfMHgyMWNlNjksXzB4NThlNDIwLF8weGFjNDdiYz1bXSxfMHgzYzE4NDQ9W10sXzB4MjRjNWJmLF8weDU5M2ZmNz10aGlzW18weDU4MTE2MigweDI3NildKF8weDE5ODBlOSksXzB4NTc3YTdiPV8weDU5M2ZmNz09PV8weDU4MTE2MigweDFjMyksXzB4MjFhZGVlPSEweDEsXzB4NjNjMTk5PV8weDU5M2ZmNz09PV8weDU4MTE2MigweDFlZCksXzB4OTRlNGUwPXRoaXNbXzB4NTgxMTYyKDB4MWJmKV0oXzB4NTkzZmY3KSxfMHgzNzBhNTY9dGhpc1tfMHg1ODExNjIoMHgyMzcpXShfMHg1OTNmZjcpLF8weDNhYjgzYT1fMHg5NGU0ZTB8fF8weDM3MGE1NixfMHgyNDhmYzk9e30sXzB4ZjUwZjQ9MHgwLF8weDY0OGQ1Nj0hMHgxLF8weDE1NTJkZixfMHgyN2EyNGM9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weDE4MDYxNltfMHg1ODExNjIoMHgxOTkpXSl7aWYoXzB4NTc3YTdiKXtpZihfMHg0MGU2ODk9XzB4MTk4MGU5WydsZW5ndGgnXSxfMHg0MGU2ODk+XzB4MTgwNjE2WydlbGVtZW50cyddKXtmb3IoXzB4MjFjZTY5PTB4MCxfMHg1OGU0MjA9XzB4MTgwNjE2W18weDU4MTE2MigweDFjMSldLF8weDFlMDMxOT1fMHgyMWNlNjk7XzB4MWUwMzE5PF8weDU4ZTQyMDtfMHgxZTAzMTkrKylfMHgzYzE4NDRbXzB4NTgxMTYyKDB4MWQyKV0oXzB4M2QwMTk1W18weDU4MTE2MigweDI1ZildKF8weGFjNDdiYyxfMHgxOTgwZTksXzB4NTkzZmY3LF8weDFlMDMxOSxfMHgxODA2MTYpKTtfMHgzNTdkYTFbXzB4NTgxMTYyKDB4MjMyKV09ITB4MDt9ZWxzZXtmb3IoXzB4MjFjZTY5PTB4MCxfMHg1OGU0MjA9XzB4NDBlNjg5LF8weDFlMDMxOT1fMHgyMWNlNjk7XzB4MWUwMzE5PF8weDU4ZTQyMDtfMHgxZTAzMTkrKylfMHgzYzE4NDRbJ3B1c2gnXShfMHgzZDAxOTVbXzB4NTgxMTYyKDB4MjVmKV0oXzB4YWM0N2JjLF8weDE5ODBlOSxfMHg1OTNmZjcsXzB4MWUwMzE5LF8weDE4MDYxNikpO31fMHgxODA2MTZbXzB4NTgxMTYyKDB4MWIwKV0rPV8weDNjMTg0NFtfMHg1ODExNjIoMHgyNWIpXTt9aWYoIShfMHg1OTNmZjc9PT1fMHg1ODExNjIoMHgxY2EpfHxfMHg1OTNmZjc9PT1fMHg1ODExNjIoMHgxZjgpKSYmIV8weDk0ZTRlMCYmXzB4NTkzZmY3IT09J1N0cmluZycmJl8weDU5M2ZmNyE9PV8weDU4MTE2MigweDFmNykmJl8weDU5M2ZmNyE9PSdiaWdpbnQnKXt2YXIgXzB4MmJiNTQzPV8weDUxNjZmN1tfMHg1ODExNjIoMHgyMDcpXXx8XzB4MTgwNjE2W18weDU4MTE2MigweDIwNyldO2lmKHRoaXNbJ19pc1NldCddKF8weDE5ODBlOSk/KF8weDFlMDMxOT0weDAsXzB4MTk4MGU5Wydmb3JFYWNoJ10oZnVuY3Rpb24oXzB4NGI4ZDY1KXt2YXIgXzB4NTRjMWYyPV8weDU4MTE2MjtpZihfMHhmNTBmNCsrLF8weDE4MDYxNltfMHg1NGMxZjIoMHgxYjApXSsrLF8weGY1MGY0Pl8weDJiYjU0Myl7XzB4NjQ4ZDU2PSEweDA7cmV0dXJuO31pZighXzB4MTgwNjE2W18weDU0YzFmMigweDFhZildJiZfMHgxODA2MTZbXzB4NTRjMWYyKDB4MjNkKV0mJl8weDE4MDYxNltfMHg1NGMxZjIoMHgxYjApXT5fMHgxODA2MTZbXzB4NTRjMWYyKDB4MjQ1KV0pe18weDY0OGQ1Nj0hMHgwO3JldHVybjt9XzB4M2MxODQ0W18weDU0YzFmMigweDFkMildKF8weDNkMDE5NVsnX2FkZFByb3BlcnR5J10oXzB4YWM0N2JjLF8weDE5ODBlOSxfMHg1NGMxZjIoMHgxZTgpLF8weDFlMDMxOSsrLF8weDE4MDYxNixmdW5jdGlvbihfMHgyYTJmNjMpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyYTJmNjM7fTt9KF8weDRiOGQ2NSkpKTt9KSk6dGhpc1tfMHg1ODExNjIoMHgyNDMpXShfMHgxOTgwZTkpJiZfMHgxOTgwZTlbXzB4NTgxMTYyKDB4MWQ5KV0oZnVuY3Rpb24oXzB4Mzc4NjdlLF8weDE4MWI2Zil7dmFyIF8weDEwYmRkOT1fMHg1ODExNjI7aWYoXzB4ZjUwZjQrKyxfMHgxODA2MTZbXzB4MTBiZGQ5KDB4MWIwKV0rKyxfMHhmNTBmND5fMHgyYmI1NDMpe18weDY0OGQ1Nj0hMHgwO3JldHVybjt9aWYoIV8weDE4MDYxNltfMHgxMGJkZDkoMHgxYWYpXSYmXzB4MTgwNjE2WydhdXRvRXhwYW5kJ10mJl8weDE4MDYxNltfMHgxMGJkZDkoMHgxYjApXT5fMHgxODA2MTZbXzB4MTBiZGQ5KDB4MjQ1KV0pe18weDY0OGQ1Nj0hMHgwO3JldHVybjt9dmFyIF8weDVhY2RiNj1fMHgxODFiNmZbXzB4MTBiZGQ5KDB4MWFkKV0oKTtfMHg1YWNkYjZbJ2xlbmd0aCddPjB4NjQmJihfMHg1YWNkYjY9XzB4NWFjZGI2W18weDEwYmRkOSgweDFiZCldKDB4MCwweDY0KStfMHgxMGJkZDkoMHgyNGYpKSxfMHgzYzE4NDRbJ3B1c2gnXShfMHgzZDAxOTVbXzB4MTBiZGQ5KDB4MjVmKV0oXzB4YWM0N2JjLF8weDE5ODBlOSxfMHgxMGJkZDkoMHgxYWUpLF8weDVhY2RiNixfMHgxODA2MTYsZnVuY3Rpb24oXzB4MjI5ZGRmKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MjI5ZGRmO307fShfMHgzNzg2N2UpKSk7fSksIV8weDIxYWRlZSl7dHJ5e2ZvcihfMHgyNGM1YmYgaW4gXzB4MTk4MGU5KWlmKCEoXzB4NTc3YTdiJiZfMHgyN2EyNGNbXzB4NTgxMTYyKDB4MTk4KV0oXzB4MjRjNWJmKSkmJiF0aGlzWydfYmxhY2tsaXN0ZWRQcm9wZXJ0eSddKF8weDE5ODBlOSxfMHgyNGM1YmYsXzB4MTgwNjE2KSl7aWYoXzB4ZjUwZjQrKyxfMHgxODA2MTZbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHhmNTBmND5fMHgyYmI1NDMpe18weDY0OGQ1Nj0hMHgwO2JyZWFrO31pZighXzB4MTgwNjE2W18weDU4MTE2MigweDFhZildJiZfMHgxODA2MTZbXzB4NTgxMTYyKDB4MjNkKV0mJl8weDE4MDYxNlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxODA2MTZbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHg2NDhkNTY9ITB4MDticmVhazt9XzB4M2MxODQ0WydwdXNoJ10oXzB4M2QwMTk1WydfYWRkT2JqZWN0UHJvcGVydHknXShfMHhhYzQ3YmMsXzB4MjQ4ZmM5LF8weDE5ODBlOSxfMHg1OTNmZjcsXzB4MjRjNWJmLF8weDE4MDYxNikpO319Y2F0Y2h7fWlmKF8weDI0OGZjOVtfMHg1ODExNjIoMHgyMTkpXT0hMHgwLF8weDYzYzE5OSYmKF8weDI0OGZjOVtfMHg1ODExNjIoMHgyNzApXT0hMHgwKSwhXzB4NjQ4ZDU2KXt2YXIgXzB4Mjc2ZjBhPVtdW18weDU4MTE2MigweDIyOSldKHRoaXNbXzB4NTgxMTYyKDB4MTliKV0oXzB4MTk4MGU5KSlbXzB4NTgxMTYyKDB4MjI5KV0odGhpc1tfMHg1ODExNjIoMHgyNWUpXShfMHgxOTgwZTkpKTtmb3IoXzB4MWUwMzE5PTB4MCxfMHg0MGU2ODk9XzB4Mjc2ZjBhW18weDU4MTE2MigweDI1YildO18weDFlMDMxOTxfMHg0MGU2ODk7XzB4MWUwMzE5KyspaWYoXzB4MjRjNWJmPV8weDI3NmYwYVtfMHgxZTAzMTldLCEoXzB4NTc3YTdiJiZfMHgyN2EyNGNbXzB4NTgxMTYyKDB4MTk4KV0oXzB4MjRjNWJmW18weDU4MTE2MigweDFhZCldKCkpKSYmIXRoaXNbXzB4NTgxMTYyKDB4MjRkKV0oXzB4MTk4MGU5LF8weDI0YzViZixfMHgxODA2MTYpJiYhXzB4MjQ4ZmM5W18weDU4MTE2MigweDFlMSkrXzB4MjRjNWJmWyd0b1N0cmluZyddKCldKXtpZihfMHhmNTBmNCsrLF8weDE4MDYxNltfMHg1ODExNjIoMHgxYjApXSsrLF8weGY1MGY0Pl8weDJiYjU0Myl7XzB4NjQ4ZDU2PSEweDA7YnJlYWs7fWlmKCFfMHgxODA2MTZbXzB4NTgxMTYyKDB4MWFmKV0mJl8weDE4MDYxNltfMHg1ODExNjIoMHgyM2QpXSYmXzB4MTgwNjE2WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDE4MDYxNltfMHg1ODExNjIoMHgyNDUpXSl7XzB4NjQ4ZDU2PSEweDA7YnJlYWs7fV8weDNjMTg0NFtfMHg1ODExNjIoMHgxZDIpXShfMHgzZDAxOTVbXzB4NTgxMTYyKDB4MjVkKV0oXzB4YWM0N2JjLF8weDI0OGZjOSxfMHgxOTgwZTksXzB4NTkzZmY3LF8weDI0YzViZixfMHgxODA2MTYpKTt9fX19fWlmKF8weDM1N2RhMVsndHlwZSddPV8weDU5M2ZmNyxfMHgzYWI4M2E/KF8weDM1N2RhMVtfMHg1ODExNjIoMHgyM2EpXT1fMHgxOTgwZTlbXzB4NTgxMTYyKDB4MjE3KV0oKSx0aGlzW18weDU4MTE2MigweDI2ZCldKF8weDU5M2ZmNyxfMHgzNTdkYTEsXzB4MTgwNjE2LF8weDUxNjZmNykpOl8weDU5M2ZmNz09PV8weDU4MTE2MigweDI0YSk/XzB4MzU3ZGExW18weDU4MTE2MigweDIzYSldPXRoaXNbXzB4NTgxMTYyKDB4MWNkKV1bJ2NhbGwnXShfMHgxOTgwZTkpOl8weDU5M2ZmNz09PV8weDU4MTE2MigweDFhYik/XzB4MzU3ZGExW18weDU4MTE2MigweDIzYSldPV8weDE5ODBlOVsndG9TdHJpbmcnXSgpOl8weDU5M2ZmNz09PV8weDU4MTE2MigweDE5Yyk/XzB4MzU3ZGExW18weDU4MTE2MigweDIzYSldPXRoaXNbXzB4NTgxMTYyKDB4MWY2KV1bXzB4NTgxMTYyKDB4MWE0KV0oXzB4MTk4MGU5KTpfMHg1OTNmZjc9PT1fMHg1ODExNjIoMHgxZWIpJiZ0aGlzW18weDU4MTE2MigweDI1MildP18weDM1N2RhMVtfMHg1ODExNjIoMHgyM2EpXT10aGlzW18weDU4MTE2MigweDI1MildWydwcm90b3R5cGUnXVtfMHg1ODExNjIoMHgxYWQpXVtfMHg1ODExNjIoMHgxYTQpXShfMHgxOTgwZTkpOiFfMHgxODA2MTZbXzB4NTgxMTYyKDB4MTk5KV0mJiEoXzB4NTkzZmY3PT09XzB4NTgxMTYyKDB4MWNhKXx8XzB4NTkzZmY3PT09XzB4NTgxMTYyKDB4MWY4KSkmJihkZWxldGUgXzB4MzU3ZGExW18weDU4MTE2MigweDIzYSldLF8weDM1N2RhMVtfMHg1ODExNjIoMHgyMDApXT0hMHgwKSxfMHg2NDhkNTYmJihfMHgzNTdkYTFbXzB4NTgxMTYyKDB4MWVmKV09ITB4MCksXzB4MTU1MmRmPV8weDE4MDYxNltfMHg1ODExNjIoMHgyNmIpXVtfMHg1ODExNjIoMHgyMTApXSxfMHgxODA2MTZbJ25vZGUnXVsnY3VycmVudCddPV8weDM1N2RhMSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MzU3ZGExLF8weDE4MDYxNiksXzB4M2MxODQ0WydsZW5ndGgnXSl7Zm9yKF8weDFlMDMxOT0weDAsXzB4NDBlNjg5PV8weDNjMTg0NFtfMHg1ODExNjIoMHgyNWIpXTtfMHgxZTAzMTk8XzB4NDBlNjg5O18weDFlMDMxOSsrKV8weDNjMTg0NFtfMHgxZTAzMTldKF8weDFlMDMxOSk7fV8weGFjNDdiY1snbGVuZ3RoJ10mJihfMHgzNTdkYTFbXzB4NTgxMTYyKDB4MjA3KV09XzB4YWM0N2JjKTt9Y2F0Y2goXzB4NTljNWNhKXtfMHgxNzUyZDEoXzB4NTljNWNhLF8weDM1N2RhMSxfMHgxODA2MTYpO31yZXR1cm4gdGhpc1tfMHg1ODExNjIoMHgyNWEpXShfMHgxOTgwZTksXzB4MzU3ZGExKSx0aGlzW18weDU4MTE2MigweDFiNildKF8weDM1N2RhMSxfMHgxODA2MTYpLF8weDE4MDYxNlsnbm9kZSddWydjdXJyZW50J109XzB4MTU1MmRmLF8weDE4MDYxNltfMHg1ODExNjIoMHgxYTMpXS0tLF8weDE4MDYxNltfMHg1ODExNjIoMHgyM2QpXT1fMHgxZDdjZmEsXzB4MTgwNjE2W18weDU4MTE2MigweDIzZCldJiZfMHgxODA2MTZbXzB4NTgxMTYyKDB4MjFhKV1bJ3BvcCddKCksXzB4MzU3ZGExO31bXzB4NDU1MjcxKDB4MjVlKV0oXzB4MzVkYjJmKXt2YXIgXzB4MzZmMTA1PV8weDQ1NTI3MTtyZXR1cm4gT2JqZWN0W18weDM2ZjEwNSgweDFhMSldP09iamVjdFtfMHgzNmYxMDUoMHgxYTEpXShfMHgzNWRiMmYpOltdO31bJ19pc1NldCddKF8weDMxNWVkMCl7dmFyIF8weDMwZjljMz1fMHg0NTUyNzE7cmV0dXJuISEoXzB4MzE1ZWQwJiZfMHgxYWVjYzFbJ1NldCddJiZ0aGlzW18weDMwZjljMygweDIzYyldKF8weDMxNWVkMCk9PT0nW29iamVjdFxcXFx4MjBTZXRdJyYmXzB4MzE1ZWQwW18weDMwZjljMygweDFkOSldKTt9W18weDQ1NTI3MSgweDI0ZCldKF8weDJmZmYzYyxfMHg0MmMyYTgsXzB4ZWM1M2NiKXt2YXIgXzB4NTA3NDJhPV8weDQ1NTI3MTtyZXR1cm4gXzB4ZWM1M2NiWydub0Z1bmN0aW9ucyddP3R5cGVvZiBfMHgyZmZmM2NbXzB4NDJjMmE4XT09XzB4NTA3NDJhKDB4MWVkKTohMHgxO31bXzB4NDU1MjcxKDB4Mjc2KV0oXzB4YzM0YzdjKXt2YXIgXzB4ODdiMjQ4PV8weDQ1NTI3MSxfMHgxZmZlMTk9Jyc7cmV0dXJuIF8weDFmZmUxOT10eXBlb2YgXzB4YzM0YzdjLF8weDFmZmUxOT09PSdvYmplY3QnP3RoaXNbXzB4ODdiMjQ4KDB4MjNjKV0oXzB4YzM0YzdjKT09PSdbb2JqZWN0XFxcXHgyMEFycmF5XSc/XzB4MWZmZTE5PV8weDg3YjI0OCgweDFjMyk6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4YzM0YzdjKT09PV8weDg3YjI0OCgweDFiOSk/XzB4MWZmZTE5PV8weDg3YjI0OCgweDI0YSk6dGhpc1tfMHg4N2IyNDgoMHgyM2MpXShfMHhjMzRjN2MpPT09XzB4ODdiMjQ4KDB4MWZhKT9fMHgxZmZlMTk9XzB4ODdiMjQ4KDB4MWFiKTpfMHhjMzRjN2M9PT1udWxsP18weDFmZmUxOT0nbnVsbCc6XzB4YzM0YzdjW18weDg3YjI0OCgweDI0MildJiYoXzB4MWZmZTE5PV8weGMzNGM3Y1tfMHg4N2IyNDgoMHgyNDIpXVtfMHg4N2IyNDgoMHgyMjcpXXx8XzB4MWZmZTE5KTpfMHgxZmZlMTk9PT1fMHg4N2IyNDgoMHgxZjgpJiZ0aGlzW18weDg3YjI0OCgweDFhMildJiZfMHhjMzRjN2MgaW5zdGFuY2VvZiB0aGlzW18weDg3YjI0OCgweDFhMildJiYoXzB4MWZmZTE5PSdIVE1MQWxsQ29sbGVjdGlvbicpLF8weDFmZmUxOTt9W18weDQ1NTI3MSgweDIzYyldKF8weDQ5NDYyNil7dmFyIF8weDljZWJkZT1fMHg0NTUyNzE7cmV0dXJuIE9iamVjdFtfMHg5Y2ViZGUoMHgxYWMpXVsndG9TdHJpbmcnXVtfMHg5Y2ViZGUoMHgxYTQpXShfMHg0OTQ2MjYpO31bXzB4NDU1MjcxKDB4MWJmKV0oXzB4MmVhNzhkKXt2YXIgXzB4NWNjNGRiPV8weDQ1NTI3MTtyZXR1cm4gXzB4MmVhNzhkPT09J2Jvb2xlYW4nfHxfMHgyZWE3OGQ9PT1fMHg1Y2M0ZGIoMHgxYTApfHxfMHgyZWE3OGQ9PT1fMHg1Y2M0ZGIoMHgxOWYpO31bXzB4NDU1MjcxKDB4MjM3KV0oXzB4MjMyYjI2KXt2YXIgXzB4NWFkMzJlPV8weDQ1NTI3MTtyZXR1cm4gXzB4MjMyYjI2PT09J0Jvb2xlYW4nfHxfMHgyMzJiMjY9PT1fMHg1YWQzMmUoMHgyNjMpfHxfMHgyMzJiMjY9PT1fMHg1YWQzMmUoMHgxZjQpO31bXzB4NDU1MjcxKDB4MjVmKV0oXzB4Mzc1NDJjLF8weDNhZTdhZixfMHg0OTVlZDIsXzB4NDQ0YjdhLF8weDRjODA1MCxfMHg0ZDg3ZDkpe3ZhciBfMHgzMDI2N2I9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4M2MzMmFhKXt2YXIgXzB4MmJmZWE4PV8weDQxM2YsXzB4M2M4NGJhPV8weDRjODA1MFtfMHgyYmZlYTgoMHgyNmIpXVsnY3VycmVudCddLF8weDFjNWQ4Mz1fMHg0YzgwNTBbXzB4MmJmZWE4KDB4MjZiKV1bXzB4MmJmZWE4KDB4MjFmKV0sXzB4MWY5MmY0PV8weDRjODA1MFsnbm9kZSddW18weDJiZmVhOCgweDFkYSldO18weDRjODA1MFtfMHgyYmZlYTgoMHgyNmIpXVtfMHgyYmZlYTgoMHgxZGEpXT1fMHgzYzg0YmEsXzB4NGM4MDUwW18weDJiZmVhOCgweDI2YildWydpbmRleCddPXR5cGVvZiBfMHg0NDRiN2E9PV8weDJiZmVhOCgweDE5Zik/XzB4NDQ0YjdhOl8weDNjMzJhYSxfMHgzNzU0MmNbXzB4MmJmZWE4KDB4MWQyKV0oXzB4MzAyNjdiW18weDJiZmVhOCgweDFiNSldKF8weDNhZTdhZixfMHg0OTVlZDIsXzB4NDQ0YjdhLF8weDRjODA1MCxfMHg0ZDg3ZDkpKSxfMHg0YzgwNTBbXzB4MmJmZWE4KDB4MjZiKV1bXzB4MmJmZWE4KDB4MWRhKV09XzB4MWY5MmY0LF8weDRjODA1MFtfMHgyYmZlYTgoMHgyNmIpXVtfMHgyYmZlYTgoMHgyMWYpXT1fMHgxYzVkODM7fTt9WydfYWRkT2JqZWN0UHJvcGVydHknXShfMHg0ZGViZDQsXzB4MWQ4OGJiLF8weDRjZTU4OCxfMHgxOTI2N2MsXzB4MmE1M2MxLF8weDQwOTRkNyxfMHgxM2ExNmMpe3ZhciBfMHgxNzYxZmI9XzB4NDU1MjcxLF8weDE4MDc2Mz10aGlzO3JldHVybiBfMHgxZDg4YmJbXzB4MTc2MWZiKDB4MWUxKStfMHgyYTUzYzFbXzB4MTc2MWZiKDB4MWFkKV0oKV09ITB4MCxmdW5jdGlvbihfMHgxM2ZmNjApe3ZhciBfMHg1ZGU0ZmE9XzB4MTc2MWZiLF8weDMyZDY3YT1fMHg0MDk0ZDdbJ25vZGUnXVtfMHg1ZGU0ZmEoMHgyMTApXSxfMHgyNTI2ZDY9XzB4NDA5NGQ3W18weDVkZTRmYSgweDI2YildWydpbmRleCddLF8weDI4MzcxZD1fMHg0MDk0ZDdbXzB4NWRlNGZhKDB4MjZiKV1bXzB4NWRlNGZhKDB4MWRhKV07XzB4NDA5NGQ3W18weDVkZTRmYSgweDI2YildW18weDVkZTRmYSgweDFkYSldPV8weDMyZDY3YSxfMHg0MDk0ZDdbJ25vZGUnXVtfMHg1ZGU0ZmEoMHgyMWYpXT1fMHgxM2ZmNjAsXzB4NGRlYmQ0W18weDVkZTRmYSgweDFkMildKF8weDE4MDc2M1tfMHg1ZGU0ZmEoMHgxYjUpXShfMHg0Y2U1ODgsXzB4MTkyNjdjLF8weDJhNTNjMSxfMHg0MDk0ZDcsXzB4MTNhMTZjKSksXzB4NDA5NGQ3Wydub2RlJ11bXzB4NWRlNGZhKDB4MWRhKV09XzB4MjgzNzFkLF8weDQwOTRkN1tfMHg1ZGU0ZmEoMHgyNmIpXVsnaW5kZXgnXT1fMHgyNTI2ZDY7fTt9W18weDQ1NTI3MSgweDFiNSldKF8weDQzZTgzYixfMHgxZGJmMjMsXzB4MmY3ZjVlLF8weDM4MjdjMyxfMHgzNmRlMGYpe3ZhciBfMHgzMzdhMjk9XzB4NDU1MjcxLF8weDU0OWQxZT10aGlzO18weDM2ZGUwZnx8KF8weDM2ZGUwZj1mdW5jdGlvbihfMHgyYjBhYzgsXzB4MmE2ZjhiKXtyZXR1cm4gXzB4MmIwYWM4W18weDJhNmY4Yl07fSk7dmFyIF8weDViODdhOD1fMHgyZjdmNWVbXzB4MzM3YTI5KDB4MWFkKV0oKSxfMHgzYmQ1ZWU9XzB4MzgyN2MzW18weDMzN2EyOSgweDFlMCldfHx7fSxfMHgzZDM2ZjM9XzB4MzgyN2MzW18weDMzN2EyOSgweDE5OSldLF8weDFjMDE4Yj1fMHgzODI3YzNbXzB4MzM3YTI5KDB4MWFmKV07dHJ5e3ZhciBfMHg1NWNiZjE9dGhpc1tfMHgzMzdhMjkoMHgyNDMpXShfMHg0M2U4M2IpLF8weDEyNzVkNT1fMHg1Yjg3YTg7XzB4NTVjYmYxJiZfMHgxMjc1ZDVbMHgwXT09PSdcXFxceDI3JyYmKF8weDEyNzVkNT1fMHgxMjc1ZDVbXzB4MzM3YTI5KDB4MTllKV0oMHgxLF8weDEyNzVkNVtfMHgzMzdhMjkoMHgyNWIpXS0weDIpKTt2YXIgXzB4M2E2MGY0PV8weDM4MjdjM1tfMHgzMzdhMjkoMHgxZTApXT1fMHgzYmQ1ZWVbJ19wXycrXzB4MTI3NWQ1XTtfMHgzYTYwZjQmJihfMHgzODI3YzNbXzB4MzM3YTI5KDB4MTk5KV09XzB4MzgyN2MzW18weDMzN2EyOSgweDE5OSldKzB4MSksXzB4MzgyN2MzW18weDMzN2EyOSgweDFhZildPSEhXzB4M2E2MGY0O3ZhciBfMHgyZTY3NTc9dHlwZW9mIF8weDJmN2Y1ZT09XzB4MzM3YTI5KDB4MWViKSxfMHgyZDJmNzk9eyduYW1lJzpfMHgyZTY3NTd8fF8weDU1Y2JmMT9fMHg1Yjg3YTg6dGhpc1tfMHgzMzdhMjkoMHgxZDcpXShfMHg1Yjg3YTgpfTtpZihfMHgyZTY3NTcmJihfMHgyZDJmNzlbXzB4MzM3YTI5KDB4MWViKV09ITB4MCksIShfMHgxZGJmMjM9PT1fMHgzMzdhMjkoMHgxYzMpfHxfMHgxZGJmMjM9PT1fMHgzMzdhMjkoMHgyNzcpKSl7dmFyIF8weDRkNzE0Mj10aGlzW18weDMzN2EyOSgweDIxYyldKF8weDQzZTgzYixfMHgyZjdmNWUpO2lmKF8weDRkNzE0MiYmKF8weDRkNzE0MltfMHgzMzdhMjkoMHgyMDgpXSYmKF8weDJkMmY3OVtfMHgzMzdhMjkoMHgxZWMpXT0hMHgwKSxfMHg0ZDcxNDJbXzB4MzM3YTI5KDB4MjMzKV0mJiFfMHgzYTYwZjQmJiFfMHgzODI3YzNbJ3Jlc29sdmVHZXR0ZXJzJ10pKXJldHVybiBfMHgyZDJmNzlbXzB4MzM3YTI5KDB4MjAxKV09ITB4MCx0aGlzW18weDMzN2EyOSgweDFjNCldKF8weDJkMmY3OSxfMHgzODI3YzMpLF8weDJkMmY3OTt9dmFyIF8weDFmMDUwMjt0cnl7XzB4MWYwNTAyPV8weDM2ZGUwZihfMHg0M2U4M2IsXzB4MmY3ZjVlKTt9Y2F0Y2goXzB4MjE1YzI5KXtyZXR1cm4gXzB4MmQyZjc5PXsnbmFtZSc6XzB4NWI4N2E4LCd0eXBlJzpfMHgzMzdhMjkoMHgyNzQpLCdlcnJvcic6XzB4MjE1YzI5W18weDMzN2EyOSgweDFiYildfSx0aGlzW18weDMzN2EyOSgweDFjNCldKF8weDJkMmY3OSxfMHgzODI3YzMpLF8weDJkMmY3OTt9dmFyIF8weGVmZGZjPXRoaXNbXzB4MzM3YTI5KDB4Mjc2KV0oXzB4MWYwNTAyKSxfMHgxM2M0MmY9dGhpc1snX2lzUHJpbWl0aXZlVHlwZSddKF8weGVmZGZjKTtpZihfMHgyZDJmNzlbJ3R5cGUnXT1fMHhlZmRmYyxfMHgxM2M0MmYpdGhpc1tfMHgzMzdhMjkoMHgxYzQpXShfMHgyZDJmNzksXzB4MzgyN2MzLF8weDFmMDUwMixmdW5jdGlvbigpe3ZhciBfMHgzOGUwZWQ9XzB4MzM3YTI5O18weDJkMmY3OVtfMHgzOGUwZWQoMHgyM2EpXT1fMHgxZjA1MDJbXzB4MzhlMGVkKDB4MjE3KV0oKSwhXzB4M2E2MGY0JiZfMHg1NDlkMWVbXzB4MzhlMGVkKDB4MjZkKV0oXzB4ZWZkZmMsXzB4MmQyZjc5LF8weDM4MjdjMyx7fSk7fSk7ZWxzZXt2YXIgXzB4MjgwMmNkPV8weDM4MjdjM1tfMHgzMzdhMjkoMHgyM2QpXSYmXzB4MzgyN2MzW18weDMzN2EyOSgweDFhMyldPF8weDM4MjdjM1tfMHgzMzdhMjkoMHgyNmMpXSYmXzB4MzgyN2MzW18weDMzN2EyOSgweDIxYSldW18weDMzN2EyOSgweDFmMildKF8weDFmMDUwMik8MHgwJiZfMHhlZmRmYyE9PSdmdW5jdGlvbicmJl8weDM4MjdjM1tfMHgzMzdhMjkoMHgxYjApXTxfMHgzODI3YzNbXzB4MzM3YTI5KDB4MjQ1KV07XzB4MjgwMmNkfHxfMHgzODI3YzNbJ2xldmVsJ108XzB4M2QzNmYzfHxfMHgzYTYwZjQ/KHRoaXNbXzB4MzM3YTI5KDB4MWZmKV0oXzB4MmQyZjc5LF8weDFmMDUwMixfMHgzODI3YzMsXzB4M2E2MGY0fHx7fSksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDFmMDUwMixfMHgyZDJmNzkpKTp0aGlzWydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4MmQyZjc5LF8weDM4MjdjMyxfMHgxZjA1MDIsZnVuY3Rpb24oKXt2YXIgXzB4NDNlOWY3PV8weDMzN2EyOTtfMHhlZmRmYz09PV8weDQzZTlmNygweDFjYSl8fF8weGVmZGZjPT09XzB4NDNlOWY3KDB4MWY4KXx8KGRlbGV0ZSBfMHgyZDJmNzlbXzB4NDNlOWY3KDB4MjNhKV0sXzB4MmQyZjc5WydjYXBwZWQnXT0hMHgwKTt9KTt9cmV0dXJuIF8weDJkMmY3OTt9ZmluYWxseXtfMHgzODI3YzNbXzB4MzM3YTI5KDB4MWUwKV09XzB4M2JkNWVlLF8weDM4MjdjM1snZGVwdGgnXT1fMHgzZDM2ZjMsXzB4MzgyN2MzW18weDMzN2EyOSgweDFhZildPV8weDFjMDE4Yjt9fVtfMHg0NTUyNzEoMHgyNmQpXShfMHgzNjA2ODEsXzB4MTJkNWYzLF8weDVlYzk4MSxfMHgzNmNlNTIpe3ZhciBfMHg5NTQ5NDk9XzB4NDU1MjcxLF8weDkzOGFjND1fMHgzNmNlNTJbJ3N0ckxlbmd0aCddfHxfMHg1ZWM5ODFbJ3N0ckxlbmd0aCddO2lmKChfMHgzNjA2ODE9PT1fMHg5NTQ5NDkoMHgxYTApfHxfMHgzNjA2ODE9PT0nU3RyaW5nJykmJl8weDEyZDVmM1tfMHg5NTQ5NDkoMHgyM2EpXSl7bGV0IF8weDNjNmI4Mz1fMHgxMmQ1ZjNbJ3ZhbHVlJ11bXzB4OTU0OTQ5KDB4MjViKV07XzB4NWVjOTgxW18weDk1NDk0OSgweDFjMildKz1fMHgzYzZiODMsXzB4NWVjOTgxW18weDk1NDk0OSgweDFjMildPl8weDVlYzk4MVtfMHg5NTQ5NDkoMHgxZjApXT8oXzB4MTJkNWYzW18weDk1NDk0OSgweDIwMCldPScnLGRlbGV0ZSBfMHgxMmQ1ZjNbXzB4OTU0OTQ5KDB4MjNhKV0pOl8weDNjNmI4Mz5fMHg5MzhhYzQmJihfMHgxMmQ1ZjNbXzB4OTU0OTQ5KDB4MjAwKV09XzB4MTJkNWYzW18weDk1NDk0OSgweDIzYSldW18weDk1NDk0OSgweDE5ZSldKDB4MCxfMHg5MzhhYzQpLGRlbGV0ZSBfMHgxMmQ1ZjNbJ3ZhbHVlJ10pO319W18weDQ1NTI3MSgweDI0MyldKF8weDU0ZDVhOSl7dmFyIF8weDE5NTNjMz1fMHg0NTUyNzE7cmV0dXJuISEoXzB4NTRkNWE5JiZfMHgxYWVjYzFbJ01hcCddJiZ0aGlzW18weDE5NTNjMygweDIzYyldKF8weDU0ZDVhOSk9PT0nW29iamVjdFxcXFx4MjBNYXBdJyYmXzB4NTRkNWE5W18weDE5NTNjMygweDFkOSldKTt9WydfcHJvcGVydHlOYW1lJ10oXzB4M2QzMzY2KXt2YXIgXzB4NDBmMzE1PV8weDQ1NTI3MTtpZihfMHgzZDMzNjZbXzB4NDBmMzE1KDB4MjUxKV0oL15cXFxcZCskLykpcmV0dXJuIF8weDNkMzM2Njt2YXIgXzB4MWNkYjkxO3RyeXtfMHgxY2RiOTE9SlNPTltfMHg0MGYzMTUoMHgyMmUpXSgnJytfMHgzZDMzNjYpO31jYXRjaHtfMHgxY2RiOTE9J1xcXFx4MjInK3RoaXNbXzB4NDBmMzE1KDB4MjNjKV0oXzB4M2QzMzY2KSsnXFxcXHgyMic7fXJldHVybiBfMHgxY2RiOTFbXzB4NDBmMzE1KDB4MjUxKV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHgxY2RiOTE9XzB4MWNkYjkxW18weDQwZjMxNSgweDE5ZSldKDB4MSxfMHgxY2RiOTFbXzB4NDBmMzE1KDB4MjViKV0tMHgyKTpfMHgxY2RiOTE9XzB4MWNkYjkxW18weDQwZjMxNSgweDFkNSldKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4NDBmMzE1KDB4MWQ1KV0oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4NDBmMzE1KDB4MWQ1KV0oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDFjZGI5MTt9W18weDQ1NTI3MSgweDFjNCldKF8weGZjZjBjYSxfMHgzMjEzZmEsXzB4NDNjYjZhLF8weDU5ZDdiYyl7dmFyIF8weDExODI2Zj1fMHg0NTUyNzE7dGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weGZjZjBjYSxfMHgzMjEzZmEpLF8weDU5ZDdiYyYmXzB4NTlkN2JjKCksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDQzY2I2YSxfMHhmY2YwY2EpLHRoaXNbXzB4MTE4MjZmKDB4MWI2KV0oXzB4ZmNmMGNhLF8weDMyMTNmYSk7fVtfMHg0NTUyNzEoMHgxOWEpXShfMHg4YmU2OTEsXzB4NDMyZTI0KXt2YXIgXzB4NWEwZjdkPV8weDQ1NTI3MTt0aGlzW18weDVhMGY3ZCgweDFiYyldKF8weDhiZTY5MSxfMHg0MzJlMjQpLHRoaXNbXzB4NWEwZjdkKDB4MjQ2KV0oXzB4OGJlNjkxLF8weDQzMmUyNCksdGhpc1tfMHg1YTBmN2QoMHgxYTUpXShfMHg4YmU2OTEsXzB4NDMyZTI0KSx0aGlzW18weDVhMGY3ZCgweDFkMCldKF8weDhiZTY5MSxfMHg0MzJlMjQpO31bXzB4NDU1MjcxKDB4MWJjKV0oXzB4MjE5ZTIzLF8weGI4NDVjMyl7fVtfMHg0NTUyNzEoMHgyNDYpXShfMHgyYTAyNDgsXzB4NzBlY2QzKXt9W18weDQ1NTI3MSgweDI0YyldKF8weDM3ZDZkZCxfMHgyNTIwZmUpe31bXzB4NDU1MjcxKDB4MjM1KV0oXzB4NTZjMjNhKXt2YXIgXzB4MjM2NGFjPV8weDQ1NTI3MTtyZXR1cm4gXzB4NTZjMjNhPT09dGhpc1tfMHgyMzY0YWMoMHgyNWMpXTt9WydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgzNGFmMWMsXzB4Mzc3Y2ZlKXt2YXIgXzB4NDhjMWU1PV8weDQ1NTI3MTt0aGlzW18weDQ4YzFlNSgweDI0YyldKF8weDM0YWYxYyxfMHgzNzdjZmUpLHRoaXNbXzB4NDhjMWU1KDB4MjEyKV0oXzB4MzRhZjFjKSxfMHgzNzdjZmVbXzB4NDhjMWU1KDB4MWU5KV0mJnRoaXNbXzB4NDhjMWU1KDB4MWM2KV0oXzB4MzRhZjFjKSx0aGlzW18weDQ4YzFlNSgweDIxZSldKF8weDM0YWYxYyxfMHgzNzdjZmUpLHRoaXNbXzB4NDhjMWU1KDB4MjQ4KV0oXzB4MzRhZjFjLF8weDM3N2NmZSksdGhpc1tfMHg0OGMxZTUoMHgyNjYpXShfMHgzNGFmMWMpO31bJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgxNzM5ZjEsXzB4MzY0NzQ4KXt2YXIgXzB4NDU4YjZlPV8weDQ1NTI3MTtsZXQgXzB4NDBlODhhO3RyeXtfMHgxYWVjYzFbJ2NvbnNvbGUnXSYmKF8weDQwZTg4YT1fMHgxYWVjYzFbXzB4NDU4YjZlKDB4MWRkKV1bJ2Vycm9yJ10sXzB4MWFlY2MxW18weDQ1OGI2ZSgweDFkZCldW18weDQ1OGI2ZSgweDFjYildPWZ1bmN0aW9uKCl7fSksXzB4MTczOWYxJiZ0eXBlb2YgXzB4MTczOWYxW18weDQ1OGI2ZSgweDI1YildPT1fMHg0NThiNmUoMHgxOWYpJiYoXzB4MzY0NzQ4W18weDQ1OGI2ZSgweDI1YildPV8weDE3MzlmMVtfMHg0NThiNmUoMHgyNWIpXSk7fWNhdGNoe31maW5hbGx5e18weDQwZTg4YSYmKF8weDFhZWNjMVsnY29uc29sZSddW18weDQ1OGI2ZSgweDFjYildPV8weDQwZTg4YSk7fWlmKF8weDM2NDc0OFtfMHg0NThiNmUoMHgyNzgpXT09PV8weDQ1OGI2ZSgweDE5Zil8fF8weDM2NDc0OFtfMHg0NThiNmUoMHgyNzgpXT09PSdOdW1iZXInKXtpZihpc05hTihfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4MjNhKV0pKV8weDM2NDc0OFsnbmFuJ109ITB4MCxkZWxldGUgXzB4MzY0NzQ4W18weDQ1OGI2ZSgweDIzYSldO2Vsc2Ugc3dpdGNoKF8weDM2NDc0OFtfMHg0NThiNmUoMHgyM2EpXSl7Y2FzZSBOdW1iZXJbXzB4NDU4YjZlKDB4MjU3KV06XzB4MzY0NzQ4Wydwb3NpdGl2ZUluZmluaXR5J109ITB4MCxkZWxldGUgXzB4MzY0NzQ4W18weDQ1OGI2ZSgweDIzYSldO2JyZWFrO2Nhc2UgTnVtYmVyW18weDQ1OGI2ZSgweDIzZSldOl8weDM2NDc0OFtfMHg0NThiNmUoMHgyMjApXT0hMHgwLGRlbGV0ZSBfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4MjNhKV07YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHg0NThiNmUoMHgxZGIpXShfMHgzNjQ3NDhbJ3ZhbHVlJ10pJiYoXzB4MzY0NzQ4W18weDQ1OGI2ZSgweDFiNCldPSEweDApO2JyZWFrO319ZWxzZSBfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4Mjc4KV09PT1fMHg0NThiNmUoMHgxZWQpJiZ0eXBlb2YgXzB4MTczOWYxW18weDQ1OGI2ZSgweDIyNyldPT1fMHg0NThiNmUoMHgxYTApJiZfMHgxNzM5ZjFbXzB4NDU4YjZlKDB4MjI3KV0mJl8weDM2NDc0OFsnbmFtZSddJiZfMHgxNzM5ZjFbJ25hbWUnXSE9PV8weDM2NDc0OFtfMHg0NThiNmUoMHgyMjcpXSYmKF8weDM2NDc0OFtfMHg0NThiNmUoMHgyNTYpXT1fMHgxNzM5ZjFbXzB4NDU4YjZlKDB4MjI3KV0pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weGU2MmYwMil7dmFyIF8weDMxZDQwMz1fMHg0NTUyNzE7cmV0dXJuIDB4MS9fMHhlNjJmMDI9PT1OdW1iZXJbXzB4MzFkNDAzKDB4MjNlKV07fVtfMHg0NTUyNzEoMHgxYzYpXShfMHgxN2YyYmYpe3ZhciBfMHhhZThhM2M9XzB4NDU1MjcxOyFfMHgxN2YyYmZbXzB4YWU4YTNjKDB4MjA3KV18fCFfMHgxN2YyYmZbXzB4YWU4YTNjKDB4MjA3KV1bJ2xlbmd0aCddfHxfMHgxN2YyYmZbXzB4YWU4YTNjKDB4Mjc4KV09PT1fMHhhZThhM2MoMHgxYzMpfHxfMHgxN2YyYmZbJ3R5cGUnXT09PSdNYXAnfHxfMHgxN2YyYmZbJ3R5cGUnXT09PV8weGFlOGEzYygweDFlOCl8fF8weDE3ZjJiZltfMHhhZThhM2MoMHgyMDcpXVtfMHhhZThhM2MoMHgyNjkpXShmdW5jdGlvbihfMHgxNWUwYjMsXzB4NGQ2NzZiKXt2YXIgXzB4MjNhZWZjPV8weGFlOGEzYyxfMHg3MjFkMjM9XzB4MTVlMGIzW18weDIzYWVmYygweDIyNyldW18weDIzYWVmYygweDIyZildKCksXzB4MThkMWY3PV8weDRkNjc2YltfMHgyM2FlZmMoMHgyMjcpXVtfMHgyM2FlZmMoMHgyMmYpXSgpO3JldHVybiBfMHg3MjFkMjM8XzB4MThkMWY3Py0weDE6XzB4NzIxZDIzPl8weDE4ZDFmNz8weDE6MHgwO30pO31bXzB4NDU1MjcxKDB4MjFlKV0oXzB4MzkxMGI1LF8weDNjMzUzOCl7dmFyIF8weDI0ZTkwNT1fMHg0NTUyNzE7aWYoIShfMHgzYzM1MzhbXzB4MjRlOTA1KDB4MWNlKV18fCFfMHgzOTEwYjVbXzB4MjRlOTA1KDB4MjA3KV18fCFfMHgzOTEwYjVbJ3Byb3BzJ11bJ2xlbmd0aCddKSl7Zm9yKHZhciBfMHg0N2JlNDM9W10sXzB4MjFiN2JiPVtdLF8weGZiNThlMD0weDAsXzB4MzJiMTY2PV8weDM5MTBiNVtfMHgyNGU5MDUoMHgyMDcpXVtfMHgyNGU5MDUoMHgyNWIpXTtfMHhmYjU4ZTA8XzB4MzJiMTY2O18weGZiNThlMCsrKXt2YXIgXzB4NGEyZjQyPV8weDM5MTBiNVtfMHgyNGU5MDUoMHgyMDcpXVtfMHhmYjU4ZTBdO18weDRhMmY0MltfMHgyNGU5MDUoMHgyNzgpXT09PV8weDI0ZTkwNSgweDFlZCk/XzB4NDdiZTQzW18weDI0ZTkwNSgweDFkMildKF8weDRhMmY0Mik6XzB4MjFiN2JiWydwdXNoJ10oXzB4NGEyZjQyKTt9aWYoISghXzB4MjFiN2JiW18weDI0ZTkwNSgweDI1YildfHxfMHg0N2JlNDNbXzB4MjRlOTA1KDB4MjViKV08PTB4MSkpe18weDM5MTBiNVtfMHgyNGU5MDUoMHgyMDcpXT1fMHgyMWI3YmI7dmFyIF8weDViNDQyOT17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHg0N2JlNDN9O3RoaXNbXzB4MjRlOTA1KDB4MWJjKV0oXzB4NWI0NDI5LF8weDNjMzUzOCksdGhpc1snX3NldE5vZGVMYWJlbCddKF8weDViNDQyOSxfMHgzYzM1MzgpLHRoaXNbXzB4MjRlOTA1KDB4MjEyKV0oXzB4NWI0NDI5KSx0aGlzW18weDI0ZTkwNSgweDFkMCldKF8weDViNDQyOSxfMHgzYzM1MzgpLF8weDViNDQyOVsnaWQnXSs9J1xcXFx4MjBmJyxfMHgzOTEwYjVbXzB4MjRlOTA1KDB4MjA3KV1bXzB4MjRlOTA1KDB4MjE4KV0oXzB4NWI0NDI5KTt9fX1bXzB4NDU1MjcxKDB4MjQ4KV0oXzB4NTgyZTYwLF8weDE2OTY3Zil7fVtfMHg0NTUyNzEoMHgyMTIpXShfMHg0MTU4MGQpe31bJ19pc0FycmF5J10oXzB4MzdiNGMzKXt2YXIgXzB4MTk1ZGYzPV8weDQ1NTI3MTtyZXR1cm4gQXJyYXlbXzB4MTk1ZGYzKDB4MWIzKV0oXzB4MzdiNGMzKXx8dHlwZW9mIF8weDM3YjRjMz09J29iamVjdCcmJnRoaXNbXzB4MTk1ZGYzKDB4MjNjKV0oXzB4MzdiNGMzKT09PV8weDE5NWRmMygweDI2Zik7fVtfMHg0NTUyNzEoMHgxZDApXShfMHg1ZTZjMDYsXzB4NTI4ZGFiKXt9W18weDQ1NTI3MSgweDI2NildKF8weDI1NmUyYil7dmFyIF8weDEyNjZhZD1fMHg0NTUyNzE7ZGVsZXRlIF8weDI1NmUyYltfMHgxMjY2YWQoMHgyNTMpXSxkZWxldGUgXzB4MjU2ZTJiW18weDEyNjZhZCgweDE5ZCldLGRlbGV0ZSBfMHgyNTZlMmJbJ19oYXNNYXBPbkl0c1BhdGgnXTt9W18weDQ1NTI3MSgweDFhNSldKF8weDNiNjBiZCxfMHgzNWU3ZDkpe31bXzB4NDU1MjcxKDB4MjczKV0oXzB4NWVjNTk4KXt2YXIgXzB4NTY4ZGNiPV8weDQ1NTI3MTtyZXR1cm4gXzB4NWVjNTk4P18weDVlYzU5OFtfMHg1NjhkY2IoMHgyNTEpXSh0aGlzW18weDU2OGRjYigweDIwOSldKT8nWycrXzB4NWVjNTk4KyddJzpfMHg1ZWM1OThbXzB4NTY4ZGNiKDB4MjUxKV0odGhpc1snX2tleVN0clJlZ0V4cCddKT8nLicrXzB4NWVjNTk4Ol8weDVlYzU5OFtfMHg1NjhkY2IoMHgyNTEpXSh0aGlzWydfcXVvdGVkUmVnRXhwJ10pPydbJytfMHg1ZWM1OTgrJ10nOidbXFxcXHgyNycrXzB4NWVjNTk4KydcXFxceDI3XSc6Jyc7fX1sZXQgXzB4MzhkYzY4PW5ldyBfMHgzMDY5NygpO2Z1bmN0aW9uIF8weDE4OThiZShfMHg0ZGMzYWQsXzB4NGM1NTU2LF8weDE5MjFjZixfMHgyNjg3OTAsXzB4NGY5MjMsXzB4NWNlOWUwKXt2YXIgXzB4NzU0MDFiPV8weDQ1NTI3MTtsZXQgXzB4NTc4NzFiLF8weDFiMDgxNTt0cnl7XzB4MWIwODE1PV8weDJjYjMxZCgpLF8weDU3ODcxYj1fMHgxOGJlNmVbXzB4NGM1NTU2XSwhXzB4NTc4NzFifHxfMHgxYjA4MTUtXzB4NTc4NzFiWyd0cyddPjB4MWY0JiZfMHg1Nzg3MWJbXzB4NzU0MDFiKDB4MjMxKV0mJl8weDU3ODcxYltfMHg3NTQwMWIoMHgyNjQpXS9fMHg1Nzg3MWJbJ2NvdW50J108MHg2ND8oXzB4MThiZTZlW18weDRjNTU1Nl09XzB4NTc4NzFiPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4MWIwODE1fSxfMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV09e30pOl8weDFiMDgxNS1fMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV1bJ3RzJ10+MHgzMiYmXzB4MThiZTZlW18weDc1NDAxYigweDFlNCldWydjb3VudCddJiZfMHgxOGJlNmVbJ2hpdHMnXVsndGltZSddL18weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXVtfMHg3NTQwMWIoMHgyMzEpXTwweDY0JiYoXzB4MThiZTZlWydoaXRzJ109e30pO2xldCBfMHg0YjlhNTg9W10sXzB4NDMzMjg3PV8weDU3ODcxYlsncmVkdWNlTGltaXRzJ118fF8weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXVtfMHg3NTQwMWIoMHgyMGMpXT9fMHgzOTNjNzA6XzB4NTg5ZmY0LF8weDFhMDNmND1fMHgxMTk1ZGE9Pnt2YXIgXzB4Mzc3NGJlPV8weDc1NDAxYjtsZXQgXzB4NTEyM2U2PXt9O3JldHVybiBfMHg1MTIzZTZbJ3Byb3BzJ109XzB4MTE5NWRhW18weDM3NzRiZSgweDIwNyldLF8weDUxMjNlNltfMHgzNzc0YmUoMHgxYzEpXT1fMHgxMTk1ZGFbJ2VsZW1lbnRzJ10sXzB4NTEyM2U2W18weDM3NzRiZSgweDIxMSldPV8weDExOTVkYVsnc3RyTGVuZ3RoJ10sXzB4NTEyM2U2W18weDM3NzRiZSgweDFmMCldPV8weDExOTVkYVtfMHgzNzc0YmUoMHgxZjApXSxfMHg1MTIzZTZbJ2F1dG9FeHBhbmRMaW1pdCddPV8weDExOTVkYVtfMHgzNzc0YmUoMHgyNDUpXSxfMHg1MTIzZTZbJ2F1dG9FeHBhbmRNYXhEZXB0aCddPV8weDExOTVkYVsnYXV0b0V4cGFuZE1heERlcHRoJ10sXzB4NTEyM2U2W18weDM3NzRiZSgweDFlOSldPSEweDEsXzB4NTEyM2U2Wydub0Z1bmN0aW9ucyddPSFfMHgyOTA4OTUsXzB4NTEyM2U2W18weDM3NzRiZSgweDE5OSldPTB4MSxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MWEzKV09MHgwLF8weDUxMjNlNltfMHgzNzc0YmUoMHgyMWIpXT1fMHgzNzc0YmUoMHgxYzcpLF8weDUxMjNlNlsncm9vdEV4cHJlc3Npb24nXT1fMHgzNzc0YmUoMHgxYmEpLF8weDUxMjNlNltfMHgzNzc0YmUoMHgyM2QpXT0hMHgwLF8weDUxMjNlNlsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddPVtdLF8weDUxMjNlNltfMHgzNzc0YmUoMHgxYjApXT0weDAsXzB4NTEyM2U2W18weDM3NzRiZSgweDFjMCldPSEweDAsXzB4NTEyM2U2W18weDM3NzRiZSgweDFjMildPTB4MCxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MjZiKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NTEyM2U2O307Zm9yKHZhciBfMHgyMDI1NWY9MHgwO18weDIwMjU1ZjxfMHg0ZjkyM1tfMHg3NTQwMWIoMHgyNWIpXTtfMHgyMDI1NWYrKylfMHg0YjlhNThbJ3B1c2gnXShfMHgzOGRjNjhbXzB4NzU0MDFiKDB4MWZmKV0oeyd0aW1lTm9kZSc6XzB4NGRjM2FkPT09J3RpbWUnfHx2b2lkIDB4MH0sXzB4NGY5MjNbXzB4MjAyNTVmXSxfMHgxYTAzZjQoXzB4NDMzMjg3KSx7fSkpO2lmKF8weDRkYzNhZD09PV8weDc1NDAxYigweDE5Nikpe2xldCBfMHg0NTc0ZDk9RXJyb3JbXzB4NzU0MDFiKDB4MWZlKV07dHJ5e0Vycm9yW18weDc1NDAxYigweDFmZSldPTB4MS8weDAsXzB4NGI5YTU4W18weDc1NDAxYigweDFkMildKF8weDM4ZGM2OFtfMHg3NTQwMWIoMHgxZmYpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4NzU0MDFiKDB4MWUzKV0sXzB4MWEwM2Y0KF8weDQzMzI4NykseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddPV8weDQ1NzRkOTt9fXJldHVybnsnbWV0aG9kJzpfMHg3NTQwMWIoMHgyM2YpLCd2ZXJzaW9uJzpfMHg5NGNmOGMsJ2FyZ3MnOlt7J3RzJzpfMHgxOTIxY2YsJ3Nlc3Npb24nOl8weDI2ODc5MCwnYXJncyc6XzB4NGI5YTU4LCdpZCc6XzB4NGM1NTU2LCdjb250ZXh0JzpfMHg1Y2U5ZTB9XX07fWNhdGNoKF8weDI5N2Y2OSl7cmV0dXJueydtZXRob2QnOl8weDc1NDAxYigweDIzZiksJ3ZlcnNpb24nOl8weDk0Y2Y4YywnYXJncyc6W3sndHMnOl8weDE5MjFjZiwnc2Vzc2lvbic6XzB4MjY4NzkwLCdhcmdzJzpbeyd0eXBlJzpfMHg3NTQwMWIoMHgyNzQpLCdlcnJvcic6XzB4Mjk3ZjY5JiZfMHgyOTdmNjlbXzB4NzU0MDFiKDB4MWJiKV19XSwnaWQnOl8weDRjNTU1NiwnY29udGV4dCc6XzB4NWNlOWUwfV19O31maW5hbGx5e3RyeXtpZihfMHg1Nzg3MWImJl8weDFiMDgxNSl7bGV0IF8weDJlMjdjMD1fMHgyY2IzMWQoKTtfMHg1Nzg3MWJbXzB4NzU0MDFiKDB4MjMxKV0rKyxfMHg1Nzg3MWJbXzB4NzU0MDFiKDB4MjY0KV0rPV8weDFiMWMzYShfMHgxYjA4MTUsXzB4MmUyN2MwKSxfMHg1Nzg3MWJbJ3RzJ109XzB4MmUyN2MwLF8weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXVsnY291bnQnXSsrLF8weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXVsndGltZSddKz1fMHgxYjFjM2EoXzB4MWIwODE1LF8weDJlMjdjMCksXzB4MThiZTZlW18weDc1NDAxYigweDFlNCldWyd0cyddPV8weDJlMjdjMCwoXzB4NTc4NzFiW18weDc1NDAxYigweDIzMSldPjB4MzJ8fF8weDU3ODcxYltfMHg3NTQwMWIoMHgyNjQpXT4weDY0KSYmKF8weDU3ODcxYltfMHg3NTQwMWIoMHgyMGMpXT0hMHgwKSwoXzB4MThiZTZlW18weDc1NDAxYigweDFlNCldWydjb3VudCddPjB4M2U4fHxfMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV1bXzB4NzU0MDFiKDB4MjY0KV0+MHgxMmMpJiYoXzB4MThiZTZlW18weDc1NDAxYigweDFlNCldW18weDc1NDAxYigweDIwYyldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDFhZWNjMVsnX2NvbnNvbGVfbmluamEnXTt9KShnbG9iYWxUaGlzLF8weDIzMDk5NSgweDI1OSksXzB4MjMwOTk1KDB4MjJjKSxfMHgyMzA5OTUoMHgxZGMpLF8weDIzMDk5NSgweDFiMiksXzB4MjMwOTk1KDB4MjQ3KSwnMTY5MjA0NDA4NjAyOScsXzB4MjMwOTk1KDB4MjY4KSxfMHgyMzA5OTUoMHgyMzYpKTtcIik7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCBlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiaW1wb3J0IHtjdXJyZW50RGF5SW5kZXgsIGxhc3RXZWF0aGVyRGF0YSwgc2V0Q3VycmVudERheUluZGV4LCB1cGRhdGVXZWF0aGVyQXBwfSBmcm9tICcuLi93ZWF0aGVyQXBwJztcblxuLyoqXG4gKiBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBuZXh0IGFycm93XG4gKiBQYXNzIHRvIHRoZSBuZXh0IGRheSBpZiBpcyB0aGUgbGFzdCBnbyB0byB0aGUgZmlyc3RcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTmV4dEFycm93RXZlbnQoKSB7XG4gIGNvbnN0IG5leHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0X19hcnJvdycpO1xuICBuZXh0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGFGb3JlQ2FzdCA9IGxhc3RXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBuZXh0RGF5SW5kZXggPSBjdXJyZW50RGF5SW5kZXggKyAxID49IHdlYXRoZXJEYXRhRm9yZUNhc3QubGVuZ3RoID8gMCA6IGN1cnJlbnREYXlJbmRleCArIDE7XG4gICAgc2V0Q3VycmVudERheUluZGV4KG5leHREYXlJbmRleCk7XG4gICAgdXBkYXRlV2VhdGhlckFwcCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwcmV2IGFycm93XG4gKiBQYXNzIHRvIHRoZSBuZXh0IGRheSBpZiBpcyB0aGUgbGFzdCBnbyB0byB0aGUgZmlyc3RcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJldkFycm93RXZlbnQoKSB7XG4gIGNvbnN0IG5leHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2X19hcnJvdycpO1xuICBuZXh0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGFGb3JlQ2FzdCA9IGxhc3RXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBuZXh0RGF5SW5kZXggPSBjdXJyZW50RGF5SW5kZXggLSAxIDwgMCA/IHdlYXRoZXJEYXRhRm9yZUNhc3QubGVuZ3RoLTEgOiBjdXJyZW50RGF5SW5kZXggLSAxO1xuICAgIHNldEN1cnJlbnREYXlJbmRleChuZXh0RGF5SW5kZXgpO1xuICAgIHVwZGF0ZVdlYXRoZXJBcHAoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV4dEFycm93RXZlbnQsIGNyZWF0ZVByZXZBcnJvd0V2ZW50fTtcbiIsImltcG9ydCB7dXNpbmdGYWhyZW5oZWl0fSBmcm9tICcuLi93ZWF0aGVyQXBwJztcblxuLy8gY29uc3Qgd2VhdGhlckljb24gPSBbXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDAwLFxuLy8gICAgIGRheTogJ1N1bm55Jyxcbi8vICAgICBuaWdodDogJ0NsZWFyJyxcbi8vICAgICBpY29uOiAxMTMsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDAzLFxuLy8gICAgIGRheTogJ1BhcnRseSBjbG91ZHknLFxuLy8gICAgIG5pZ2h0OiAnUGFydGx5IGNsb3VkeScsXG4vLyAgICAgaWNvbjogMTE2LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTAwNixcbi8vICAgICBkYXk6ICdDbG91ZHknLFxuLy8gICAgIG5pZ2h0OiAnQ2xvdWR5Jyxcbi8vICAgICBpY29uOiAxMTksXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDA5LFxuLy8gICAgIGRheTogJ092ZXJjYXN0Jyxcbi8vICAgICBuaWdodDogJ092ZXJjYXN0Jyxcbi8vICAgICBpY29uOiAxMjIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDMwLFxuLy8gICAgIGRheTogJ01pc3QnLFxuLy8gICAgIG5pZ2h0OiAnTWlzdCcsXG4vLyAgICAgaWNvbjogMTQzLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTA2Myxcbi8vICAgICBkYXk6ICdQYXRjaHkgcmFpbiBwb3NzaWJsZScsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgcmFpbiBwb3NzaWJsZScsXG4vLyAgICAgaWNvbjogMTc2LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTA2Nixcbi8vICAgICBkYXk6ICdQYXRjaHkgc25vdyBwb3NzaWJsZScsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgc25vdyBwb3NzaWJsZScsXG4vLyAgICAgaWNvbjogMTc5LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTA2OSxcbi8vICAgICBkYXk6ICdQYXRjaHkgc2xlZXQgcG9zc2libGUnLFxuLy8gICAgIG5pZ2h0OiAnUGF0Y2h5IHNsZWV0IHBvc3NpYmxlJyxcbi8vICAgICBpY29uOiAxODIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDcyLFxuLy8gICAgIGRheTogJ1BhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlJyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlJyxcbi8vICAgICBpY29uOiAxODUsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDg3LFxuLy8gICAgIGRheTogJ1RodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZScsXG4vLyAgICAgbmlnaHQ6ICdUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGUnLFxuLy8gICAgIGljb246IDIwMCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExMTQsXG4vLyAgICAgZGF5OiAnQmxvd2luZyBzbm93Jyxcbi8vICAgICBuaWdodDogJ0Jsb3dpbmcgc25vdycsXG4vLyAgICAgaWNvbjogMjI3LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTExNyxcbi8vICAgICBkYXk6ICdCbGl6emFyZCcsXG4vLyAgICAgbmlnaHQ6ICdCbGl6emFyZCcsXG4vLyAgICAgaWNvbjogMjMwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTEzNSxcbi8vICAgICBkYXk6ICdGb2cnLFxuLy8gICAgIG5pZ2h0OiAnRm9nJyxcbi8vICAgICBpY29uOiAyNDgsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTQ3LFxuLy8gICAgIGRheTogJ0ZyZWV6aW5nIGZvZycsXG4vLyAgICAgbmlnaHQ6ICdGcmVlemluZyBmb2cnLFxuLy8gICAgIGljb246IDI2MCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExNTAsXG4vLyAgICAgZGF5OiAnUGF0Y2h5IGxpZ2h0IGRyaXp6bGUnLFxuLy8gICAgIG5pZ2h0OiAnUGF0Y2h5IGxpZ2h0IGRyaXp6bGUnLFxuLy8gICAgIGljb246IDI2Myxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExNTMsXG4vLyAgICAgZGF5OiAnTGlnaHQgZHJpenpsZScsXG4vLyAgICAgbmlnaHQ6ICdMaWdodCBkcml6emxlJyxcbi8vICAgICBpY29uOiAyNjYsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTY4LFxuLy8gICAgIGRheTogJ0ZyZWV6aW5nIGRyaXp6bGUnLFxuLy8gICAgIG5pZ2h0OiAnRnJlZXppbmcgZHJpenpsZScsXG4vLyAgICAgaWNvbjogMjgxLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE3MSxcbi8vICAgICBkYXk6ICdIZWF2eSBmcmVlemluZyBkcml6emxlJyxcbi8vICAgICBuaWdodDogJ0hlYXZ5IGZyZWV6aW5nIGRyaXp6bGUnLFxuLy8gICAgIGljb246IDI4NCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExODAsXG4vLyAgICAgZGF5OiAnUGF0Y2h5IGxpZ2h0IHJhaW4nLFxuLy8gICAgIG5pZ2h0OiAnUGF0Y2h5IGxpZ2h0IHJhaW4nLFxuLy8gICAgIGljb246IDI5Myxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExODMsXG4vLyAgICAgZGF5OiAnTGlnaHQgcmFpbicsXG4vLyAgICAgbmlnaHQ6ICdMaWdodCByYWluJyxcbi8vICAgICBpY29uOiAyOTYsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTg2LFxuLy8gICAgIGRheTogJ01vZGVyYXRlIHJhaW4gYXQgdGltZXMnLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgcmFpbiBhdCB0aW1lcycsXG4vLyAgICAgaWNvbjogMjk5LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE4OSxcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSByYWluJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIHJhaW4nLFxuLy8gICAgIGljb246IDMwMixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExOTIsXG4vLyAgICAgZGF5OiAnSGVhdnkgcmFpbiBhdCB0aW1lcycsXG4vLyAgICAgbmlnaHQ6ICdIZWF2eSByYWluIGF0IHRpbWVzJyxcbi8vICAgICBpY29uOiAzMDUsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTk1LFxuLy8gICAgIGRheTogJ0hlYXZ5IHJhaW4nLFxuLy8gICAgIG5pZ2h0OiAnSGVhdnkgcmFpbicsXG4vLyAgICAgaWNvbjogMzA4LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE5OCxcbi8vICAgICBkYXk6ICdMaWdodCBmcmVlemluZyByYWluJyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IGZyZWV6aW5nIHJhaW4nLFxuLy8gICAgIGljb246IDMxMSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMDEsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpbicsXG4vLyAgICAgbmlnaHQ6ICdNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluJyxcbi8vICAgICBpY29uOiAzMTQsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjA0LFxuLy8gICAgIGRheTogJ0xpZ2h0IHNsZWV0Jyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IHNsZWV0Jyxcbi8vICAgICBpY29uOiAzMTcsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjA3LFxuLy8gICAgIGRheTogJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0Jyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0Jyxcbi8vICAgICBpY29uOiAzMjAsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjEwLFxuLy8gICAgIGRheTogJ1BhdGNoeSBsaWdodCBzbm93Jyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSBsaWdodCBzbm93Jyxcbi8vICAgICBpY29uOiAzMjMsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjEzLFxuLy8gICAgIGRheTogJ0xpZ2h0IHNub3cnLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgc25vdycsXG4vLyAgICAgaWNvbjogMzI2LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTIxNixcbi8vICAgICBkYXk6ICdQYXRjaHkgbW9kZXJhdGUgc25vdycsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgbW9kZXJhdGUgc25vdycsXG4vLyAgICAgaWNvbjogMzI5LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTIxOSxcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBzbm93Jyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIHNub3cnLFxuLy8gICAgIGljb246IDMzMixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMjIsXG4vLyAgICAgZGF5OiAnUGF0Y2h5IGhlYXZ5IHNub3cnLFxuLy8gICAgIG5pZ2h0OiAnUGF0Y2h5IGhlYXZ5IHNub3cnLFxuLy8gICAgIGljb246IDMzNSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMjUsXG4vLyAgICAgZGF5OiAnSGVhdnkgc25vdycsXG4vLyAgICAgbmlnaHQ6ICdIZWF2eSBzbm93Jyxcbi8vICAgICBpY29uOiAzMzgsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjM3LFxuLy8gICAgIGRheTogJ0ljZSBwZWxsZXRzJyxcbi8vICAgICBuaWdodDogJ0ljZSBwZWxsZXRzJyxcbi8vICAgICBpY29uOiAzNTAsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjQwLFxuLy8gICAgIGRheTogJ0xpZ2h0IHJhaW4gc2hvd2VyJyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IHJhaW4gc2hvd2VyJyxcbi8vICAgICBpY29uOiAzNTMsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjQzLFxuLy8gICAgIGRheTogJ01vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyJyxcbi8vICAgICBpY29uOiAzNTYsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjQ2LFxuLy8gICAgIGRheTogJ1RvcnJlbnRpYWwgcmFpbiBzaG93ZXInLFxuLy8gICAgIG5pZ2h0OiAnVG9ycmVudGlhbCByYWluIHNob3dlcicsXG4vLyAgICAgaWNvbjogMzU5LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI0OSxcbi8vICAgICBkYXk6ICdMaWdodCBzbGVldCBzaG93ZXJzJyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IHNsZWV0IHNob3dlcnMnLFxuLy8gICAgIGljb246IDM2Mixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNTIsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2VycycsXG4vLyAgICAgbmlnaHQ6ICdNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzJyxcbi8vICAgICBpY29uOiAzNjUsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjU1LFxuLy8gICAgIGRheTogJ0xpZ2h0IHNub3cgc2hvd2VycycsXG4vLyAgICAgbmlnaHQ6ICdMaWdodCBzbm93IHNob3dlcnMnLFxuLy8gICAgIGljb246IDM2OCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNTgsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2VycycsXG4vLyAgICAgaWNvbjogMzcxLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI2MSxcbi8vICAgICBkYXk6ICdMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHMnLFxuLy8gICAgIGljb246IDM3NCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNjQsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0cycsXG4vLyAgICAgbmlnaHQ6ICdNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJyxcbi8vICAgICBpY29uOiAzNzcsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjczLFxuLy8gICAgIGRheTogJ1BhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlcicsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXInLFxuLy8gICAgIGljb246IDM4Nixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNzYsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXInLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXInLFxuLy8gICAgIGljb246IDM4OSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNzksXG4vLyAgICAgZGF5OiAnUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyJyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlcicsXG4vLyAgICAgaWNvbjogMzkyLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI4Mixcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlcicsXG4vLyAgICAgbmlnaHQ6ICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlcicsXG4vLyAgICAgaWNvbjogMzk1LFxuLy8gICB9LFxuLy8gXTtcblxuLyoqXG4gKiBQcmludCB0aGUgd2VhdGhlciBzbGlkZXJcbiAqIFlvdSBjYW4gc2Nyb2xsIHRocm91Z2ggYWxsIHRoZSBzbGlkZXMgb2YgdGhlIGRheXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXlcbiAqL1xuZnVuY3Rpb24gcHJpbnRXZWF0aGVyU2xpZGVyKGRheSkge1xuICBjb25zdCB3ZWF0aGVySWNvbkRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyX19zbGlkZXJfX2luZm9ybWF0aW9uX19pbWcnKTtcbiAgY29uc3Qgd2VhdGhlclRpdGxlRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJfX3NsaWRlcl9faW5mb3JtYXRpb25fX3RpdGxlJyk7XG4gIGNvbnN0IHdpbmRWYWx1ZURheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kX192YWx1ZV9fZGF0YScpO1xuICBjb25zdCB0ZW1wVmFsdWVEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcF9fZGF0YV9fdmFsdWUnKTtcbiAgY29uc3QgaHVtaWRpdHlWYWx1ZURheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fZGF0YV9fdmFsdWUnKTtcblxuICAvLyB3ZWF0aGVySWNvbkRheS5zcmMgPSByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzL3dlYXRoZXItaWNvbnMvJHt3ZWF0aGVySWNvbltsaXN0RGF5c1swXS53ZWF0aGVyLmNvZGVdLmljb259LnBuZ2ApO1xuICB3ZWF0aGVySWNvbkRheS5zcmMgPSByZXF1aXJlKGAuL2ltZy9zb2xlYWRvLnBuZ2ApOyAvLyBUT0RPOiBjaGFuZ2UgdGhlIGljb25cbiAgd2VhdGhlclRpdGxlRGF5LmlubmVySFRNTCA9IGRheS5jb25kaXRpb24udGV4dDtcbiAgd2luZFZhbHVlRGF5LnRleHRDb250ZW50ID0gZGF5LmF2Z3Zpc19rbTtcbiAgdGVtcFZhbHVlRGF5LnRleHRDb250ZW50ID0gdXNpbmdGYWhyZW5oZWl0ID8gTWF0aC5yb3VuZChkYXkuYXZndGVtcF9mKSA6IE1hdGgucm91bmQoZGF5LmF2Z3RlbXBfYyk7XG4gIGh1bWlkaXR5VmFsdWVEYXkudGV4dENvbnRlbnQgPSBkYXkuYXZnaHVtaWRpdHk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaW50V2VhdGhlclNsaWRlcjtcbiIsImltcG9ydCAnLi9jc3MvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2hlYWRlci5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9sb2FkaW5nLmNzcyc7XG5pbXBvcnQgJy4vY3NzL3NsaWRlci5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9ob3VybHlTbGlkZXIuY3NzJztcbmltcG9ydCAnLi9jc3Mvc2VhcmNoLmNzcyc7XG5pbXBvcnQge3ByaW50V2VhdGhlckFwcH0gZnJvbSAnLi9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyQXBwJztcbmltcG9ydCBsb2FkaW5nU3ZnIGZyb20gJy4vaW1nL2xvYWRpbmcuc3ZnJztcbmltcG9ydCBjcmVhdGVTZWFyY2hFdmVudCBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyQXBwL3NlYXJjaEJveC9zZWFyY2hCb3gnO1xuaW1wb3J0IGNyZWF0ZUZhaHJlbmhlaXRFdmVudExpc3RlbmVycyBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyQXBwL2ZhaHJlbmhlaXRDaGVjay9mYWhyZW5oZWl0Q2hlY2snO1xuaW1wb3J0IHtjcmVhdGVOZXh0QXJyb3dFdmVudCwgY3JlYXRlUHJldkFycm93RXZlbnR9IGZyb20gJy4vYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlclNsaWRlci9zbGlkZXJBcnJvd3MnO1xuXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIG1haW4gZnVuY3Rpb24gb2YgdGhlIGFwcGxpY2F0aW9uXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBzZXRMb2FkaW5nSW1nKCk7XG4gIHByaW50V2VhdGhlckFwcCgpO1xuICBjcmVhdGVTZWFyY2hFdmVudCgpO1xuICBjcmVhdGVGYWhyZW5oZWl0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgY3JlYXRlTmV4dEFycm93RXZlbnQoKTtcbiAgY3JlYXRlUHJldkFycm93RXZlbnQoKTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGxvYWRpbmcgaW1hZ2UgdG8gdGhlIERPTVxuICovXG5mdW5jdGlvbiBzZXRMb2FkaW5nSW1nKCkge1xuICBjb25zdCBsb2FkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKTtcbiAgY29uc3QgbG9hZGluZ0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsb2FkaW5nSW1nLnNyYyA9IGxvYWRpbmdTdmc7XG4gIGxvYWRpbmdJbWcuYWx0ID0gJ0xvYWRpbmcuLi4nO1xuICBsb2FkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRpbmdJbWcpO1xufVxuXG5pbml0KCk7IC8vIENhbGxpbmcgdGhlIG1haW4gZnVuY3Rpb25cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==