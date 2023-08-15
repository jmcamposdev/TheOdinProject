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


/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x230995=_0x413f;(function(_0x1f53c0,_0x363b1b){var _0x271a83=_0x413f,_0x5e0775=_0x1f53c0();while(!![]){try{var _0x242b40=-parseInt(_0x271a83(0x1e6))/0x1+-parseInt(_0x271a83(0x1b8))/0x2+-parseInt(_0x271a83(0x1cc))/0x3+parseInt(_0x271a83(0x1e5))/0x4*(-parseInt(_0x271a83(0x21d))/0x5)+-parseInt(_0x271a83(0x195))/0x6*(-parseInt(_0x271a83(0x241))/0x7)+-parseInt(_0x271a83(0x255))/0x8*(-parseInt(_0x271a83(0x239))/0x9)+parseInt(_0x271a83(0x1e7))/0xa*(parseInt(_0x271a83(0x279))/0xb);if(_0x242b40===_0x363b1b)break;else _0x5e0775['push'](_0x5e0775['shift']());}catch(_0x5d3cc1){_0x5e0775['push'](_0x5e0775['shift']());}}}(_0x27f0,0xea6b5));var ue=Object['create'],te=Object['defineProperty'],he=Object['getOwnPropertyDescriptor'],le=Object[_0x230995(0x20e)],fe=Object[_0x230995(0x216)],_e=Object['prototype'][_0x230995(0x230)],pe=(_0x34e0bb,_0x407d23,_0x32de25,_0x36c36a)=>{var _0xc36700=_0x230995;if(_0x407d23&&typeof _0x407d23==_0xc36700(0x258)||typeof _0x407d23==_0xc36700(0x1ed)){for(let _0x2d5904 of le(_0x407d23))!_e[_0xc36700(0x1a4)](_0x34e0bb,_0x2d5904)&&_0x2d5904!==_0x32de25&&te(_0x34e0bb,_0x2d5904,{'get':()=>_0x407d23[_0x2d5904],'enumerable':!(_0x36c36a=he(_0x407d23,_0x2d5904))||_0x36c36a[_0xc36700(0x23b)]});}return _0x34e0bb;},ne=(_0x35597d,_0x381cf4,_0x1f7ce0)=>(_0x1f7ce0=_0x35597d!=null?ue(fe(_0x35597d)):{},pe(_0x381cf4||!_0x35597d||!_0x35597d[_0x230995(0x1a6)]?te(_0x1f7ce0,_0x230995(0x202),{'value':_0x35597d,'enumerable':!0x0}):_0x1f7ce0,_0x35597d)),Q=class{constructor(_0x2fc440,_0x152ce7,_0x422a6b,_0x203d2c){var _0x2f1720=_0x230995;this[_0x2f1720(0x206)]=_0x2fc440,this[_0x2f1720(0x214)]=_0x152ce7,this[_0x2f1720(0x1b1)]=_0x422a6b,this['nodeModules']=_0x203d2c,this[_0x2f1720(0x215)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x2f1720(0x203)]=!0x1,this['_connecting']=!0x1,this[_0x2f1720(0x1f9)]=!!this[_0x2f1720(0x206)][_0x2f1720(0x1ee)],this[_0x2f1720(0x234)]=null,this[_0x2f1720(0x225)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x2f1720(0x272)]=_0x2f1720(0x1df),this[_0x2f1720(0x1a9)]=(this[_0x2f1720(0x1f9)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this['_webSocketErrorDocsLink'];}async[_0x230995(0x260)](){var _0x2f9c83=_0x230995;if(this['_WebSocketClass'])return this[_0x2f9c83(0x234)];let _0x5431b1;if(this[_0x2f9c83(0x1f9)])_0x5431b1=this[_0x2f9c83(0x206)]['WebSocket'];else{if(this[_0x2f9c83(0x206)][_0x2f9c83(0x240)]?.[_0x2f9c83(0x20b)])_0x5431b1=this[_0x2f9c83(0x206)]['process']?.[_0x2f9c83(0x20b)];else try{let _0x353acb=await import(_0x2f9c83(0x250));_0x5431b1=(await import((await import('url'))[_0x2f9c83(0x24e)](_0x353acb[_0x2f9c83(0x22d)](this[_0x2f9c83(0x22b)],'ws/index.js'))[_0x2f9c83(0x1ad)]()))[_0x2f9c83(0x202)];}catch{try{_0x5431b1=require(require(_0x2f9c83(0x250))[_0x2f9c83(0x22d)](this[_0x2f9c83(0x22b)],'ws'));}catch{throw new Error(_0x2f9c83(0x223));}}}return this[_0x2f9c83(0x234)]=_0x5431b1,_0x5431b1;}[_0x230995(0x262)](){var _0x445a91=_0x230995;this[_0x445a91(0x1a8)]||this[_0x445a91(0x203)]||this['_connectAttemptCount']>=this[_0x445a91(0x265)]||(this[_0x445a91(0x1e2)]=!0x1,this[_0x445a91(0x1a8)]=!0x0,this[_0x445a91(0x225)]++,this['_ws']=new Promise((_0xb961,_0x2e1eea)=>{var _0x30026b=_0x445a91;this[_0x30026b(0x260)]()['then'](_0x442a1c=>{var _0xec58ba=_0x30026b;let _0x224a4d=new _0x442a1c(_0xec58ba(0x26a)+this[_0xec58ba(0x214)]+':'+this[_0xec58ba(0x1b1)]);_0x224a4d[_0xec58ba(0x244)]=()=>{var _0x5263ab=_0xec58ba;this[_0x5263ab(0x215)]=!0x1,this[_0x5263ab(0x26e)](_0x224a4d),this[_0x5263ab(0x222)](),_0x2e1eea(new Error(_0x5263ab(0x20d)));},_0x224a4d[_0xec58ba(0x261)]=()=>{var _0x39a044=_0xec58ba;this['_inBrowser']||_0x224a4d[_0x39a044(0x20f)]&&_0x224a4d[_0x39a044(0x20f)][_0x39a044(0x1d1)]&&_0x224a4d[_0x39a044(0x20f)][_0x39a044(0x1d1)](),_0xb961(_0x224a4d);},_0x224a4d[_0xec58ba(0x1c5)]=()=>{this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x224a4d),this['_attemptToReconnectShortly']();},_0x224a4d['onmessage']=_0xec4b43=>{var _0x5e86e2=_0xec58ba;try{_0xec4b43&&_0xec4b43[_0x5e86e2(0x1f1)]&&this[_0x5e86e2(0x1f9)]&&JSON['parse'](_0xec4b43[_0x5e86e2(0x1f1)])['method']===_0x5e86e2(0x1d6)&&this[_0x5e86e2(0x206)]['location'][_0x5e86e2(0x1d6)]();}catch{}};})[_0x30026b(0x205)](_0xee9741=>(this[_0x30026b(0x203)]=!0x0,this['_connecting']=!0x1,this[_0x30026b(0x1e2)]=!0x1,this[_0x30026b(0x215)]=!0x0,this[_0x30026b(0x225)]=0x0,_0xee9741))[_0x30026b(0x249)](_0x186c06=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x30026b(0x1be)](_0x30026b(0x224)+this['_webSocketErrorDocsLink']),_0x2e1eea(new Error(_0x30026b(0x228)+(_0x186c06&&_0x186c06[_0x30026b(0x1bb)])))));}));}['_disposeWebsocket'](_0x210e3d){var _0x40e4e4=_0x230995;this[_0x40e4e4(0x203)]=!0x1,this[_0x40e4e4(0x1a8)]=!0x1;try{_0x210e3d[_0x40e4e4(0x1c5)]=null,_0x210e3d[_0x40e4e4(0x244)]=null,_0x210e3d[_0x40e4e4(0x261)]=null;}catch{}try{_0x210e3d[_0x40e4e4(0x1b7)]<0x2&&_0x210e3d[_0x40e4e4(0x22a)]();}catch{}}[_0x230995(0x222)](){var _0x130709=_0x230995;clearTimeout(this[_0x130709(0x1de)]),!(this['_connectAttemptCount']>=this[_0x130709(0x265)])&&(this[_0x130709(0x1de)]=setTimeout(()=>{var _0x1e2424=_0x130709;this[_0x1e2424(0x203)]||this[_0x1e2424(0x1a8)]||(this[_0x1e2424(0x262)](),this[_0x1e2424(0x1d3)]?.[_0x1e2424(0x249)](()=>this[_0x1e2424(0x222)]()));},0x1f4),this[_0x130709(0x1de)][_0x130709(0x1d1)]&&this['_reconnectTimeout'][_0x130709(0x1d1)]());}async[_0x230995(0x1d4)](_0x3aa910){var _0x46d315=_0x230995;try{if(!this['_allowedToSend'])return;this['_allowedToConnectOnSend']&&this[_0x46d315(0x262)](),(await this['_ws'])[_0x46d315(0x1d4)](JSON[_0x46d315(0x22e)](_0x3aa910));}catch(_0x5a1732){console['warn'](this[_0x46d315(0x1a9)]+':\\x20'+(_0x5a1732&&_0x5a1732['message'])),this[_0x46d315(0x215)]=!0x1,this['_attemptToReconnectShortly']();}}};function _0x27f0(){var _0x5b2a13=['\\x20server','_quotedRegExp','stackTraceLimit','serialize','capped','getter','default','_connected','bind','then','global','props','set','_numberRegExp','perf_hooks','_WebSocket','reduceLimits','logger\\x20websocket\\x20error','getOwnPropertyNames','_socket','current','strLength','_setNodeExpandableState','performance','host','_allowedToSend','getPrototypeOf','valueOf','unshift','_p_length','autoExpandPreviousObjects','expId','_getOwnPropertyDescriptor','20YCSEOI','_addFunctionsNode','index','negativeInfinity','_consoleNinjaAllowedToStart','_attemptToReconnectShortly','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_connectAttemptCount','_console_ninja','name','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','concat','close','nodeModules','64269','join','stringify','toLowerCase','hasOwnProperty','count','cappedElements','get','_WebSocketClass','_isUndefined','','_isPrimitiveWrapperType',':logPointId:','89253UlUoaD','value','enumerable','_objectToString','autoExpand','NEGATIVE_INFINITY','log','process','7113274ERjvjf','constructor','_isMap','onerror','autoExpandLimit','_setNodeQueryPath','1.0.0','_addLoadNode','catch','date','nuxt','_setNodeLabel','_blacklistedProperty','pathToFileURL','...','path','match','_Symbol','_hasSymbolPropertyOnItsPath','astro','568PZEtyV','funcName','POSITIVE_INFINITY','object','127.0.0.1','_additionalMetadata','length','_undefined','_addObjectProperty','_getOwnPropertySymbols','_addProperty','getWebSocketClass','onopen','_connectToHostNow','String','time','_maxConnectAttemptCount','_cleanNode','versions',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"MacBook-Pro-de-Jose.local\",\"192.168.1.131\"],'sort','ws://','node','autoExpandMaxDepth','_capIfString','_disposeWebsocket','[object\\x20Array]','_p_name','location','_webSocketErrorDocsLink','_propertyAccessor','unknown','disabledLog','_type','Error','type','52262573rMGqJe','6UviXjg','trace','Symbol','test','depth','_treeNodePropertiesBeforeFullValue','_getOwnPropertyNames','RegExp','_hasSetOnItsPath','substr','number','string','getOwnPropertySymbols','_HTMLAllCollection','level','call','_setNodeExpressionPath','__es'+'Module','_keyStrRegExp','_connecting','_sendErrorMessage','elapsed','bigint','prototype','toString','Map','isExpressionToEvaluate','autoExpandPropertyCount','port','webpack','isArray','negativeZero','_property','_treeNodePropertiesAfterFullValue','readyState','3169520sYdYbg','[object\\x20Date]','root_exp','message','_setNodeId','slice','warn','_isPrimitiveType','resolveGetters','elements','allStrLength','array','_processTreeNodeResult','onclose','_sortProps','root_exp_id','\\x20browser','timeEnd','null','error','5712039AsmlQc','_dateToString','noFunctions','timeStamp','_setNodePermissions','unref','push','_ws','send','replace','reload','_propertyName','HTMLAllCollection','forEach','parent','_isNegativeZero',\"/Users/josemaria/.vscode-insiders/extensions/wallabyjs.console-ninja-0.0.198/node_modules\",'console','_reconnectTimeout','https://tinyurl.com/37x8b79t','expressionsToEvaluate','_p_','_allowedToConnectOnSend','stack','hits','1763844ETMsjQ','258634ahPWFF','10ZNfnjf','Set','sortProps','hrtime','symbol','setter','function','WebSocket','cappedProps','totalStrLength','data','indexOf','now','Number','split','_regExpToString','Buffer','undefined','_inBrowser','[object\\x20BigInt]','_console_ninja_session'];_0x27f0=function(){return _0x5b2a13;};return _0x27f0();}function V(_0x5a496d,_0x1774b1,_0x54bccd,_0x17077b,_0x341dd6){var _0x3d6393=_0x230995;let _0x2a1b16=_0x54bccd[_0x3d6393(0x1f5)](',')['map'](_0x27d9a1=>{var _0x511af5=_0x3d6393;try{_0x5a496d[_0x511af5(0x1fb)]||((_0x341dd6==='next.js'||_0x341dd6==='remix'||_0x341dd6===_0x511af5(0x254))&&(_0x341dd6+=_0x5a496d['process']?.[_0x511af5(0x267)]?.[_0x511af5(0x26b)]?_0x511af5(0x1fc):_0x511af5(0x1c8)),_0x5a496d[_0x511af5(0x1fb)]={'id':+new Date(),'tool':_0x341dd6});let _0xb6e3b4=new Q(_0x5a496d,_0x1774b1,_0x27d9a1,_0x17077b);return _0xb6e3b4[_0x511af5(0x1d4)][_0x511af5(0x204)](_0xb6e3b4);}catch(_0x390d9a){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x390d9a&&_0x390d9a[_0x511af5(0x1bb)]),()=>{};}});return _0x395388=>_0x2a1b16[_0x3d6393(0x1d9)](_0x232e5c=>_0x232e5c(_0x395388));}function _0x413f(_0x7e1ead,_0x1f5c6e){var _0x27f084=_0x27f0();return _0x413f=function(_0x413f9c,_0x31d98d){_0x413f9c=_0x413f9c-0x195;var _0x259898=_0x27f084[_0x413f9c];return _0x259898;},_0x413f(_0x7e1ead,_0x1f5c6e);}function H(_0x54448a){var _0x4a0456=_0x230995;let _0x1a56b8=function(_0x48661a,_0x3d5762){return _0x3d5762-_0x48661a;},_0x3dfde6;if(_0x54448a[_0x4a0456(0x213)])_0x3dfde6=function(){var _0x358eba=_0x4a0456;return _0x54448a[_0x358eba(0x213)]['now']();};else{if(_0x54448a['process']&&_0x54448a[_0x4a0456(0x240)][_0x4a0456(0x1ea)])_0x3dfde6=function(){var _0x986177=_0x4a0456;return _0x54448a['process'][_0x986177(0x1ea)]();},_0x1a56b8=function(_0x48fe9d,_0xe327c4){return 0x3e8*(_0xe327c4[0x0]-_0x48fe9d[0x0])+(_0xe327c4[0x1]-_0x48fe9d[0x1])/0xf4240;};else try{let {performance:_0xf004a2}=require(_0x4a0456(0x20a));_0x3dfde6=function(){var _0x13230e=_0x4a0456;return _0xf004a2[_0x13230e(0x1f3)]();};}catch{_0x3dfde6=function(){return+new Date();};}}return{'elapsed':_0x1a56b8,'timeStamp':_0x3dfde6,'now':()=>Date[_0x4a0456(0x1f3)]()};}function X(_0x4916dd,_0x33499d,_0x3d4aba){var _0x5a279d=_0x230995;if(_0x4916dd['_consoleNinjaAllowedToStart']!==void 0x0)return _0x4916dd[_0x5a279d(0x221)];let _0x5286d7=_0x4916dd[_0x5a279d(0x240)]?.[_0x5a279d(0x267)]?.[_0x5a279d(0x26b)];return _0x5286d7&&_0x3d4aba===_0x5a279d(0x24b)?_0x4916dd[_0x5a279d(0x221)]=!0x1:_0x4916dd[_0x5a279d(0x221)]=_0x5286d7||!_0x33499d||_0x4916dd[_0x5a279d(0x271)]?.['hostname']&&_0x33499d['includes'](_0x4916dd[_0x5a279d(0x271)]['hostname']),_0x4916dd[_0x5a279d(0x221)];}((_0x1aecc1,_0x169db0,_0x3f784f,_0x505869,_0x5aee63,_0x94cf8c,_0x49c8c5,_0x58a732,_0x290895)=>{var _0x455271=_0x230995;if(_0x1aecc1['_console_ninja'])return _0x1aecc1[_0x455271(0x226)];if(!X(_0x1aecc1,_0x58a732,_0x5aee63))return _0x1aecc1[_0x455271(0x226)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1aecc1['_console_ninja'];let _0x589ff4={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x393c70={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x21ece9=H(_0x1aecc1),_0x1b1c3a=_0x21ece9[_0x455271(0x1aa)],_0x2cb31d=_0x21ece9[_0x455271(0x1cf)],_0x3a9a2f=_0x21ece9[_0x455271(0x1f3)],_0x18be6e={'hits':{},'ts':{}},_0x149d0a=_0x39378a=>{_0x18be6e['ts'][_0x39378a]=_0x2cb31d();},_0x44d8cc=(_0x1e7bc8,_0x2d62f4)=>{var _0x5c1ab3=_0x455271;let _0x2d70ae=_0x18be6e['ts'][_0x2d62f4];if(delete _0x18be6e['ts'][_0x2d62f4],_0x2d70ae){let _0x16c176=_0x1b1c3a(_0x2d70ae,_0x2cb31d());_0x1287e4(_0x1898be(_0x5c1ab3(0x264),_0x1e7bc8,_0x3a9a2f(),_0x57c957,[_0x16c176],_0x2d62f4));}},_0x3d6344=_0x427069=>_0x157010=>{var _0x504ff1=_0x455271;try{_0x149d0a(_0x157010),_0x427069(_0x157010);}finally{_0x1aecc1[_0x504ff1(0x1dd)][_0x504ff1(0x264)]=_0x427069;}},_0x3d5a50=_0x2d385b=>_0x28da9=>{var _0x5d3086=_0x455271;try{let [_0x3d3205,_0x440517]=_0x28da9[_0x5d3086(0x1f5)](_0x5d3086(0x238));_0x44d8cc(_0x440517,_0x3d3205),_0x2d385b(_0x3d3205);}finally{_0x1aecc1[_0x5d3086(0x1dd)][_0x5d3086(0x1c9)]=_0x2d385b;}};_0x1aecc1[_0x455271(0x226)]={'consoleLog':(_0x528632,_0x3b4a40)=>{var _0x33e13d=_0x455271;_0x1aecc1[_0x33e13d(0x1dd)][_0x33e13d(0x23f)][_0x33e13d(0x227)]!==_0x33e13d(0x275)&&_0x1287e4(_0x1898be(_0x33e13d(0x23f),_0x528632,_0x3a9a2f(),_0x57c957,_0x3b4a40));},'consoleTrace':(_0x1215b3,_0x349603)=>{var _0x4906aa=_0x455271;_0x1aecc1[_0x4906aa(0x1dd)][_0x4906aa(0x23f)]['name']!=='disabledTrace'&&_0x1287e4(_0x1898be(_0x4906aa(0x196),_0x1215b3,_0x3a9a2f(),_0x57c957,_0x349603));},'consoleTime':()=>{var _0x202526=_0x455271;_0x1aecc1[_0x202526(0x1dd)][_0x202526(0x264)]=_0x3d6344(_0x1aecc1[_0x202526(0x1dd)]['time']);},'consoleTimeEnd':()=>{var _0x3f791b=_0x455271;_0x1aecc1['console'][_0x3f791b(0x1c9)]=_0x3d5a50(_0x1aecc1['console'][_0x3f791b(0x1c9)]);},'autoLog':(_0x5ed08c,_0x47e90c)=>{var _0x3e6b72=_0x455271;_0x1287e4(_0x1898be(_0x3e6b72(0x23f),_0x47e90c,_0x3a9a2f(),_0x57c957,[_0x5ed08c]));},'autoLogMany':(_0x3cf7bf,_0x464c7e)=>{var _0x4fc658=_0x455271;_0x1287e4(_0x1898be(_0x4fc658(0x23f),_0x3cf7bf,_0x3a9a2f(),_0x57c957,_0x464c7e));},'autoTrace':(_0x7d917e,_0x527ead)=>{var _0x258cec=_0x455271;_0x1287e4(_0x1898be(_0x258cec(0x196),_0x527ead,_0x3a9a2f(),_0x57c957,[_0x7d917e]));},'autoTraceMany':(_0x19a00e,_0x7ce033)=>{var _0x3ad3e2=_0x455271;_0x1287e4(_0x1898be(_0x3ad3e2(0x196),_0x19a00e,_0x3a9a2f(),_0x57c957,_0x7ce033));},'autoTime':(_0x31015b,_0x2d9994,_0x39d7c2)=>{_0x149d0a(_0x39d7c2);},'autoTimeEnd':(_0x3e33cc,_0x3aa7b1,_0x50e02b)=>{_0x44d8cc(_0x3aa7b1,_0x50e02b);}};let _0x1287e4=V(_0x1aecc1,_0x169db0,_0x3f784f,_0x505869,_0x5aee63),_0x57c957=_0x1aecc1['_console_ninja_session'];class _0x30697{constructor(){var _0x434125=_0x455271;this[_0x434125(0x1a7)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x434125(0x1fd)]=/'([^\\\\']|\\\\')*'/,this[_0x434125(0x25c)]=_0x1aecc1[_0x434125(0x1f8)],this[_0x434125(0x1a2)]=_0x1aecc1[_0x434125(0x1d8)],this[_0x434125(0x21c)]=Object['getOwnPropertyDescriptor'],this[_0x434125(0x19b)]=Object[_0x434125(0x20e)],this[_0x434125(0x252)]=_0x1aecc1[_0x434125(0x197)],this[_0x434125(0x1f6)]=RegExp[_0x434125(0x1ac)][_0x434125(0x1ad)],this['_dateToString']=Date[_0x434125(0x1ac)][_0x434125(0x1ad)];}[_0x455271(0x1ff)](_0x357da1,_0x1980e9,_0x180616,_0x5166f7){var _0x581162=_0x455271,_0x3d0195=this,_0x1d7cfa=_0x180616[_0x581162(0x23d)];function _0x1752d1(_0x120788,_0x1a98cf,_0x2a225b){var _0x5432c4=_0x581162;_0x1a98cf[_0x5432c4(0x278)]=_0x5432c4(0x274),_0x1a98cf[_0x5432c4(0x1cb)]=_0x120788['message'],_0x1552df=_0x2a225b[_0x5432c4(0x26b)][_0x5432c4(0x210)],_0x2a225b['node'][_0x5432c4(0x210)]=_0x1a98cf,_0x3d0195['_treeNodePropertiesBeforeFullValue'](_0x1a98cf,_0x2a225b);}try{_0x180616[_0x581162(0x1a3)]++,_0x180616[_0x581162(0x23d)]&&_0x180616[_0x581162(0x21a)][_0x581162(0x1d2)](_0x1980e9);var _0x1e0319,_0x40e689,_0x21ce69,_0x58e420,_0xac47bc=[],_0x3c1844=[],_0x24c5bf,_0x593ff7=this[_0x581162(0x276)](_0x1980e9),_0x577a7b=_0x593ff7===_0x581162(0x1c3),_0x21adee=!0x1,_0x63c199=_0x593ff7===_0x581162(0x1ed),_0x94e4e0=this[_0x581162(0x1bf)](_0x593ff7),_0x370a56=this[_0x581162(0x237)](_0x593ff7),_0x3ab83a=_0x94e4e0||_0x370a56,_0x248fc9={},_0xf50f4=0x0,_0x648d56=!0x1,_0x1552df,_0x27a24c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x180616[_0x581162(0x199)]){if(_0x577a7b){if(_0x40e689=_0x1980e9['length'],_0x40e689>_0x180616['elements']){for(_0x21ce69=0x0,_0x58e420=_0x180616[_0x581162(0x1c1)],_0x1e0319=_0x21ce69;_0x1e0319<_0x58e420;_0x1e0319++)_0x3c1844[_0x581162(0x1d2)](_0x3d0195[_0x581162(0x25f)](_0xac47bc,_0x1980e9,_0x593ff7,_0x1e0319,_0x180616));_0x357da1[_0x581162(0x232)]=!0x0;}else{for(_0x21ce69=0x0,_0x58e420=_0x40e689,_0x1e0319=_0x21ce69;_0x1e0319<_0x58e420;_0x1e0319++)_0x3c1844['push'](_0x3d0195[_0x581162(0x25f)](_0xac47bc,_0x1980e9,_0x593ff7,_0x1e0319,_0x180616));}_0x180616[_0x581162(0x1b0)]+=_0x3c1844[_0x581162(0x25b)];}if(!(_0x593ff7===_0x581162(0x1ca)||_0x593ff7===_0x581162(0x1f8))&&!_0x94e4e0&&_0x593ff7!=='String'&&_0x593ff7!==_0x581162(0x1f7)&&_0x593ff7!=='bigint'){var _0x2bb543=_0x5166f7[_0x581162(0x207)]||_0x180616[_0x581162(0x207)];if(this['_isSet'](_0x1980e9)?(_0x1e0319=0x0,_0x1980e9['forEach'](function(_0x4b8d65){var _0x54c1f2=_0x581162;if(_0xf50f4++,_0x180616[_0x54c1f2(0x1b0)]++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;return;}if(!_0x180616[_0x54c1f2(0x1af)]&&_0x180616[_0x54c1f2(0x23d)]&&_0x180616[_0x54c1f2(0x1b0)]>_0x180616[_0x54c1f2(0x245)]){_0x648d56=!0x0;return;}_0x3c1844[_0x54c1f2(0x1d2)](_0x3d0195['_addProperty'](_0xac47bc,_0x1980e9,_0x54c1f2(0x1e8),_0x1e0319++,_0x180616,function(_0x2a2f63){return function(){return _0x2a2f63;};}(_0x4b8d65)));})):this[_0x581162(0x243)](_0x1980e9)&&_0x1980e9[_0x581162(0x1d9)](function(_0x37867e,_0x181b6f){var _0x10bdd9=_0x581162;if(_0xf50f4++,_0x180616[_0x10bdd9(0x1b0)]++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;return;}if(!_0x180616[_0x10bdd9(0x1af)]&&_0x180616['autoExpand']&&_0x180616[_0x10bdd9(0x1b0)]>_0x180616[_0x10bdd9(0x245)]){_0x648d56=!0x0;return;}var _0x5acdb6=_0x181b6f[_0x10bdd9(0x1ad)]();_0x5acdb6['length']>0x64&&(_0x5acdb6=_0x5acdb6[_0x10bdd9(0x1bd)](0x0,0x64)+_0x10bdd9(0x24f)),_0x3c1844['push'](_0x3d0195[_0x10bdd9(0x25f)](_0xac47bc,_0x1980e9,_0x10bdd9(0x1ae),_0x5acdb6,_0x180616,function(_0x229ddf){return function(){return _0x229ddf;};}(_0x37867e)));}),!_0x21adee){try{for(_0x24c5bf in _0x1980e9)if(!(_0x577a7b&&_0x27a24c[_0x581162(0x198)](_0x24c5bf))&&!this['_blacklistedProperty'](_0x1980e9,_0x24c5bf,_0x180616)){if(_0xf50f4++,_0x180616['autoExpandPropertyCount']++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;break;}if(!_0x180616[_0x581162(0x1af)]&&_0x180616[_0x581162(0x23d)]&&_0x180616['autoExpandPropertyCount']>_0x180616['autoExpandLimit']){_0x648d56=!0x0;break;}_0x3c1844['push'](_0x3d0195['_addObjectProperty'](_0xac47bc,_0x248fc9,_0x1980e9,_0x593ff7,_0x24c5bf,_0x180616));}}catch{}if(_0x248fc9[_0x581162(0x219)]=!0x0,_0x63c199&&(_0x248fc9[_0x581162(0x270)]=!0x0),!_0x648d56){var _0x276f0a=[][_0x581162(0x229)](this[_0x581162(0x19b)](_0x1980e9))[_0x581162(0x229)](this[_0x581162(0x25e)](_0x1980e9));for(_0x1e0319=0x0,_0x40e689=_0x276f0a[_0x581162(0x25b)];_0x1e0319<_0x40e689;_0x1e0319++)if(_0x24c5bf=_0x276f0a[_0x1e0319],!(_0x577a7b&&_0x27a24c[_0x581162(0x198)](_0x24c5bf[_0x581162(0x1ad)]()))&&!this[_0x581162(0x24d)](_0x1980e9,_0x24c5bf,_0x180616)&&!_0x248fc9[_0x581162(0x1e1)+_0x24c5bf['toString']()]){if(_0xf50f4++,_0x180616[_0x581162(0x1b0)]++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;break;}if(!_0x180616[_0x581162(0x1af)]&&_0x180616[_0x581162(0x23d)]&&_0x180616['autoExpandPropertyCount']>_0x180616[_0x581162(0x245)]){_0x648d56=!0x0;break;}_0x3c1844[_0x581162(0x1d2)](_0x3d0195[_0x581162(0x25d)](_0xac47bc,_0x248fc9,_0x1980e9,_0x593ff7,_0x24c5bf,_0x180616));}}}}}if(_0x357da1['type']=_0x593ff7,_0x3ab83a?(_0x357da1[_0x581162(0x23a)]=_0x1980e9[_0x581162(0x217)](),this[_0x581162(0x26d)](_0x593ff7,_0x357da1,_0x180616,_0x5166f7)):_0x593ff7===_0x581162(0x24a)?_0x357da1[_0x581162(0x23a)]=this[_0x581162(0x1cd)]['call'](_0x1980e9):_0x593ff7===_0x581162(0x1ab)?_0x357da1[_0x581162(0x23a)]=_0x1980e9['toString']():_0x593ff7===_0x581162(0x19c)?_0x357da1[_0x581162(0x23a)]=this[_0x581162(0x1f6)][_0x581162(0x1a4)](_0x1980e9):_0x593ff7===_0x581162(0x1eb)&&this[_0x581162(0x252)]?_0x357da1[_0x581162(0x23a)]=this[_0x581162(0x252)]['prototype'][_0x581162(0x1ad)][_0x581162(0x1a4)](_0x1980e9):!_0x180616[_0x581162(0x199)]&&!(_0x593ff7===_0x581162(0x1ca)||_0x593ff7===_0x581162(0x1f8))&&(delete _0x357da1[_0x581162(0x23a)],_0x357da1[_0x581162(0x200)]=!0x0),_0x648d56&&(_0x357da1[_0x581162(0x1ef)]=!0x0),_0x1552df=_0x180616[_0x581162(0x26b)][_0x581162(0x210)],_0x180616['node']['current']=_0x357da1,this['_treeNodePropertiesBeforeFullValue'](_0x357da1,_0x180616),_0x3c1844['length']){for(_0x1e0319=0x0,_0x40e689=_0x3c1844[_0x581162(0x25b)];_0x1e0319<_0x40e689;_0x1e0319++)_0x3c1844[_0x1e0319](_0x1e0319);}_0xac47bc['length']&&(_0x357da1[_0x581162(0x207)]=_0xac47bc);}catch(_0x59c5ca){_0x1752d1(_0x59c5ca,_0x357da1,_0x180616);}return this[_0x581162(0x25a)](_0x1980e9,_0x357da1),this[_0x581162(0x1b6)](_0x357da1,_0x180616),_0x180616['node']['current']=_0x1552df,_0x180616[_0x581162(0x1a3)]--,_0x180616[_0x581162(0x23d)]=_0x1d7cfa,_0x180616[_0x581162(0x23d)]&&_0x180616[_0x581162(0x21a)]['pop'](),_0x357da1;}[_0x455271(0x25e)](_0x35db2f){var _0x36f105=_0x455271;return Object[_0x36f105(0x1a1)]?Object[_0x36f105(0x1a1)](_0x35db2f):[];}['_isSet'](_0x315ed0){var _0x30f9c3=_0x455271;return!!(_0x315ed0&&_0x1aecc1['Set']&&this[_0x30f9c3(0x23c)](_0x315ed0)==='[object\\x20Set]'&&_0x315ed0[_0x30f9c3(0x1d9)]);}[_0x455271(0x24d)](_0x2fff3c,_0x42c2a8,_0xec53cb){var _0x50742a=_0x455271;return _0xec53cb['noFunctions']?typeof _0x2fff3c[_0x42c2a8]==_0x50742a(0x1ed):!0x1;}[_0x455271(0x276)](_0xc34c7c){var _0x87b248=_0x455271,_0x1ffe19='';return _0x1ffe19=typeof _0xc34c7c,_0x1ffe19==='object'?this[_0x87b248(0x23c)](_0xc34c7c)==='[object\\x20Array]'?_0x1ffe19=_0x87b248(0x1c3):this['_objectToString'](_0xc34c7c)===_0x87b248(0x1b9)?_0x1ffe19=_0x87b248(0x24a):this[_0x87b248(0x23c)](_0xc34c7c)===_0x87b248(0x1fa)?_0x1ffe19=_0x87b248(0x1ab):_0xc34c7c===null?_0x1ffe19='null':_0xc34c7c[_0x87b248(0x242)]&&(_0x1ffe19=_0xc34c7c[_0x87b248(0x242)][_0x87b248(0x227)]||_0x1ffe19):_0x1ffe19===_0x87b248(0x1f8)&&this[_0x87b248(0x1a2)]&&_0xc34c7c instanceof this[_0x87b248(0x1a2)]&&(_0x1ffe19='HTMLAllCollection'),_0x1ffe19;}[_0x455271(0x23c)](_0x494626){var _0x9cebde=_0x455271;return Object[_0x9cebde(0x1ac)]['toString'][_0x9cebde(0x1a4)](_0x494626);}[_0x455271(0x1bf)](_0x2ea78d){var _0x5cc4db=_0x455271;return _0x2ea78d==='boolean'||_0x2ea78d===_0x5cc4db(0x1a0)||_0x2ea78d===_0x5cc4db(0x19f);}[_0x455271(0x237)](_0x232b26){var _0x5ad32e=_0x455271;return _0x232b26==='Boolean'||_0x232b26===_0x5ad32e(0x263)||_0x232b26===_0x5ad32e(0x1f4);}[_0x455271(0x25f)](_0x37542c,_0x3ae7af,_0x495ed2,_0x444b7a,_0x4c8050,_0x4d87d9){var _0x30267b=this;return function(_0x3c32aa){var _0x2bfea8=_0x413f,_0x3c84ba=_0x4c8050[_0x2bfea8(0x26b)]['current'],_0x1c5d83=_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x21f)],_0x1f92f4=_0x4c8050['node'][_0x2bfea8(0x1da)];_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x1da)]=_0x3c84ba,_0x4c8050[_0x2bfea8(0x26b)]['index']=typeof _0x444b7a==_0x2bfea8(0x19f)?_0x444b7a:_0x3c32aa,_0x37542c[_0x2bfea8(0x1d2)](_0x30267b[_0x2bfea8(0x1b5)](_0x3ae7af,_0x495ed2,_0x444b7a,_0x4c8050,_0x4d87d9)),_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x1da)]=_0x1f92f4,_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x21f)]=_0x1c5d83;};}['_addObjectProperty'](_0x4debd4,_0x1d88bb,_0x4ce588,_0x19267c,_0x2a53c1,_0x4094d7,_0x13a16c){var _0x1761fb=_0x455271,_0x180763=this;return _0x1d88bb[_0x1761fb(0x1e1)+_0x2a53c1[_0x1761fb(0x1ad)]()]=!0x0,function(_0x13ff60){var _0x5de4fa=_0x1761fb,_0x32d67a=_0x4094d7['node'][_0x5de4fa(0x210)],_0x2526d6=_0x4094d7[_0x5de4fa(0x26b)]['index'],_0x28371d=_0x4094d7[_0x5de4fa(0x26b)][_0x5de4fa(0x1da)];_0x4094d7[_0x5de4fa(0x26b)][_0x5de4fa(0x1da)]=_0x32d67a,_0x4094d7['node'][_0x5de4fa(0x21f)]=_0x13ff60,_0x4debd4[_0x5de4fa(0x1d2)](_0x180763[_0x5de4fa(0x1b5)](_0x4ce588,_0x19267c,_0x2a53c1,_0x4094d7,_0x13a16c)),_0x4094d7['node'][_0x5de4fa(0x1da)]=_0x28371d,_0x4094d7[_0x5de4fa(0x26b)]['index']=_0x2526d6;};}[_0x455271(0x1b5)](_0x43e83b,_0x1dbf23,_0x2f7f5e,_0x3827c3,_0x36de0f){var _0x337a29=_0x455271,_0x549d1e=this;_0x36de0f||(_0x36de0f=function(_0x2b0ac8,_0x2a6f8b){return _0x2b0ac8[_0x2a6f8b];});var _0x5b87a8=_0x2f7f5e[_0x337a29(0x1ad)](),_0x3bd5ee=_0x3827c3[_0x337a29(0x1e0)]||{},_0x3d36f3=_0x3827c3[_0x337a29(0x199)],_0x1c018b=_0x3827c3[_0x337a29(0x1af)];try{var _0x55cbf1=this[_0x337a29(0x243)](_0x43e83b),_0x1275d5=_0x5b87a8;_0x55cbf1&&_0x1275d5[0x0]==='\\x27'&&(_0x1275d5=_0x1275d5[_0x337a29(0x19e)](0x1,_0x1275d5[_0x337a29(0x25b)]-0x2));var _0x3a60f4=_0x3827c3[_0x337a29(0x1e0)]=_0x3bd5ee['_p_'+_0x1275d5];_0x3a60f4&&(_0x3827c3[_0x337a29(0x199)]=_0x3827c3[_0x337a29(0x199)]+0x1),_0x3827c3[_0x337a29(0x1af)]=!!_0x3a60f4;var _0x2e6757=typeof _0x2f7f5e==_0x337a29(0x1eb),_0x2d2f79={'name':_0x2e6757||_0x55cbf1?_0x5b87a8:this[_0x337a29(0x1d7)](_0x5b87a8)};if(_0x2e6757&&(_0x2d2f79[_0x337a29(0x1eb)]=!0x0),!(_0x1dbf23===_0x337a29(0x1c3)||_0x1dbf23===_0x337a29(0x277))){var _0x4d7142=this[_0x337a29(0x21c)](_0x43e83b,_0x2f7f5e);if(_0x4d7142&&(_0x4d7142[_0x337a29(0x208)]&&(_0x2d2f79[_0x337a29(0x1ec)]=!0x0),_0x4d7142[_0x337a29(0x233)]&&!_0x3a60f4&&!_0x3827c3['resolveGetters']))return _0x2d2f79[_0x337a29(0x201)]=!0x0,this[_0x337a29(0x1c4)](_0x2d2f79,_0x3827c3),_0x2d2f79;}var _0x1f0502;try{_0x1f0502=_0x36de0f(_0x43e83b,_0x2f7f5e);}catch(_0x215c29){return _0x2d2f79={'name':_0x5b87a8,'type':_0x337a29(0x274),'error':_0x215c29[_0x337a29(0x1bb)]},this[_0x337a29(0x1c4)](_0x2d2f79,_0x3827c3),_0x2d2f79;}var _0xefdfc=this[_0x337a29(0x276)](_0x1f0502),_0x13c42f=this['_isPrimitiveType'](_0xefdfc);if(_0x2d2f79['type']=_0xefdfc,_0x13c42f)this[_0x337a29(0x1c4)](_0x2d2f79,_0x3827c3,_0x1f0502,function(){var _0x38e0ed=_0x337a29;_0x2d2f79[_0x38e0ed(0x23a)]=_0x1f0502[_0x38e0ed(0x217)](),!_0x3a60f4&&_0x549d1e[_0x38e0ed(0x26d)](_0xefdfc,_0x2d2f79,_0x3827c3,{});});else{var _0x2802cd=_0x3827c3[_0x337a29(0x23d)]&&_0x3827c3[_0x337a29(0x1a3)]<_0x3827c3[_0x337a29(0x26c)]&&_0x3827c3[_0x337a29(0x21a)][_0x337a29(0x1f2)](_0x1f0502)<0x0&&_0xefdfc!=='function'&&_0x3827c3[_0x337a29(0x1b0)]<_0x3827c3[_0x337a29(0x245)];_0x2802cd||_0x3827c3['level']<_0x3d36f3||_0x3a60f4?(this[_0x337a29(0x1ff)](_0x2d2f79,_0x1f0502,_0x3827c3,_0x3a60f4||{}),this['_additionalMetadata'](_0x1f0502,_0x2d2f79)):this['_processTreeNodeResult'](_0x2d2f79,_0x3827c3,_0x1f0502,function(){var _0x43e9f7=_0x337a29;_0xefdfc===_0x43e9f7(0x1ca)||_0xefdfc===_0x43e9f7(0x1f8)||(delete _0x2d2f79[_0x43e9f7(0x23a)],_0x2d2f79['capped']=!0x0);});}return _0x2d2f79;}finally{_0x3827c3[_0x337a29(0x1e0)]=_0x3bd5ee,_0x3827c3['depth']=_0x3d36f3,_0x3827c3[_0x337a29(0x1af)]=_0x1c018b;}}[_0x455271(0x26d)](_0x360681,_0x12d5f3,_0x5ec981,_0x36ce52){var _0x954949=_0x455271,_0x938ac4=_0x36ce52['strLength']||_0x5ec981['strLength'];if((_0x360681===_0x954949(0x1a0)||_0x360681==='String')&&_0x12d5f3[_0x954949(0x23a)]){let _0x3c6b83=_0x12d5f3['value'][_0x954949(0x25b)];_0x5ec981[_0x954949(0x1c2)]+=_0x3c6b83,_0x5ec981[_0x954949(0x1c2)]>_0x5ec981[_0x954949(0x1f0)]?(_0x12d5f3[_0x954949(0x200)]='',delete _0x12d5f3[_0x954949(0x23a)]):_0x3c6b83>_0x938ac4&&(_0x12d5f3[_0x954949(0x200)]=_0x12d5f3[_0x954949(0x23a)][_0x954949(0x19e)](0x0,_0x938ac4),delete _0x12d5f3['value']);}}[_0x455271(0x243)](_0x54d5a9){var _0x1953c3=_0x455271;return!!(_0x54d5a9&&_0x1aecc1['Map']&&this[_0x1953c3(0x23c)](_0x54d5a9)==='[object\\x20Map]'&&_0x54d5a9[_0x1953c3(0x1d9)]);}['_propertyName'](_0x3d3366){var _0x40f315=_0x455271;if(_0x3d3366[_0x40f315(0x251)](/^\\d+$/))return _0x3d3366;var _0x1cdb91;try{_0x1cdb91=JSON[_0x40f315(0x22e)](''+_0x3d3366);}catch{_0x1cdb91='\\x22'+this[_0x40f315(0x23c)](_0x3d3366)+'\\x22';}return _0x1cdb91[_0x40f315(0x251)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1cdb91=_0x1cdb91[_0x40f315(0x19e)](0x1,_0x1cdb91[_0x40f315(0x25b)]-0x2):_0x1cdb91=_0x1cdb91[_0x40f315(0x1d5)](/'/g,'\\x5c\\x27')[_0x40f315(0x1d5)](/\\\\\"/g,'\\x22')[_0x40f315(0x1d5)](/(^\"|\"$)/g,'\\x27'),_0x1cdb91;}[_0x455271(0x1c4)](_0xfcf0ca,_0x3213fa,_0x43cb6a,_0x59d7bc){var _0x11826f=_0x455271;this['_treeNodePropertiesBeforeFullValue'](_0xfcf0ca,_0x3213fa),_0x59d7bc&&_0x59d7bc(),this['_additionalMetadata'](_0x43cb6a,_0xfcf0ca),this[_0x11826f(0x1b6)](_0xfcf0ca,_0x3213fa);}[_0x455271(0x19a)](_0x8be691,_0x432e24){var _0x5a0f7d=_0x455271;this[_0x5a0f7d(0x1bc)](_0x8be691,_0x432e24),this[_0x5a0f7d(0x246)](_0x8be691,_0x432e24),this[_0x5a0f7d(0x1a5)](_0x8be691,_0x432e24),this[_0x5a0f7d(0x1d0)](_0x8be691,_0x432e24);}[_0x455271(0x1bc)](_0x219e23,_0xb845c3){}[_0x455271(0x246)](_0x2a0248,_0x70ecd3){}[_0x455271(0x24c)](_0x37d6dd,_0x2520fe){}[_0x455271(0x235)](_0x56c23a){var _0x2364ac=_0x455271;return _0x56c23a===this[_0x2364ac(0x25c)];}['_treeNodePropertiesAfterFullValue'](_0x34af1c,_0x377cfe){var _0x48c1e5=_0x455271;this[_0x48c1e5(0x24c)](_0x34af1c,_0x377cfe),this[_0x48c1e5(0x212)](_0x34af1c),_0x377cfe[_0x48c1e5(0x1e9)]&&this[_0x48c1e5(0x1c6)](_0x34af1c),this[_0x48c1e5(0x21e)](_0x34af1c,_0x377cfe),this[_0x48c1e5(0x248)](_0x34af1c,_0x377cfe),this[_0x48c1e5(0x266)](_0x34af1c);}['_additionalMetadata'](_0x1739f1,_0x364748){var _0x458b6e=_0x455271;let _0x40e88a;try{_0x1aecc1['console']&&(_0x40e88a=_0x1aecc1[_0x458b6e(0x1dd)]['error'],_0x1aecc1[_0x458b6e(0x1dd)][_0x458b6e(0x1cb)]=function(){}),_0x1739f1&&typeof _0x1739f1[_0x458b6e(0x25b)]==_0x458b6e(0x19f)&&(_0x364748[_0x458b6e(0x25b)]=_0x1739f1[_0x458b6e(0x25b)]);}catch{}finally{_0x40e88a&&(_0x1aecc1['console'][_0x458b6e(0x1cb)]=_0x40e88a);}if(_0x364748[_0x458b6e(0x278)]===_0x458b6e(0x19f)||_0x364748[_0x458b6e(0x278)]==='Number'){if(isNaN(_0x364748[_0x458b6e(0x23a)]))_0x364748['nan']=!0x0,delete _0x364748[_0x458b6e(0x23a)];else switch(_0x364748[_0x458b6e(0x23a)]){case Number[_0x458b6e(0x257)]:_0x364748['positiveInfinity']=!0x0,delete _0x364748[_0x458b6e(0x23a)];break;case Number[_0x458b6e(0x23e)]:_0x364748[_0x458b6e(0x220)]=!0x0,delete _0x364748[_0x458b6e(0x23a)];break;case 0x0:this[_0x458b6e(0x1db)](_0x364748['value'])&&(_0x364748[_0x458b6e(0x1b4)]=!0x0);break;}}else _0x364748[_0x458b6e(0x278)]===_0x458b6e(0x1ed)&&typeof _0x1739f1[_0x458b6e(0x227)]==_0x458b6e(0x1a0)&&_0x1739f1[_0x458b6e(0x227)]&&_0x364748['name']&&_0x1739f1['name']!==_0x364748[_0x458b6e(0x227)]&&(_0x364748[_0x458b6e(0x256)]=_0x1739f1[_0x458b6e(0x227)]);}['_isNegativeZero'](_0xe62f02){var _0x31d403=_0x455271;return 0x1/_0xe62f02===Number[_0x31d403(0x23e)];}[_0x455271(0x1c6)](_0x17f2bf){var _0xae8a3c=_0x455271;!_0x17f2bf[_0xae8a3c(0x207)]||!_0x17f2bf[_0xae8a3c(0x207)]['length']||_0x17f2bf[_0xae8a3c(0x278)]===_0xae8a3c(0x1c3)||_0x17f2bf['type']==='Map'||_0x17f2bf['type']===_0xae8a3c(0x1e8)||_0x17f2bf[_0xae8a3c(0x207)][_0xae8a3c(0x269)](function(_0x15e0b3,_0x4d676b){var _0x23aefc=_0xae8a3c,_0x721d23=_0x15e0b3[_0x23aefc(0x227)][_0x23aefc(0x22f)](),_0x18d1f7=_0x4d676b[_0x23aefc(0x227)][_0x23aefc(0x22f)]();return _0x721d23<_0x18d1f7?-0x1:_0x721d23>_0x18d1f7?0x1:0x0;});}[_0x455271(0x21e)](_0x3910b5,_0x3c3538){var _0x24e905=_0x455271;if(!(_0x3c3538[_0x24e905(0x1ce)]||!_0x3910b5[_0x24e905(0x207)]||!_0x3910b5['props']['length'])){for(var _0x47be43=[],_0x21b7bb=[],_0xfb58e0=0x0,_0x32b166=_0x3910b5[_0x24e905(0x207)][_0x24e905(0x25b)];_0xfb58e0<_0x32b166;_0xfb58e0++){var _0x4a2f42=_0x3910b5[_0x24e905(0x207)][_0xfb58e0];_0x4a2f42[_0x24e905(0x278)]===_0x24e905(0x1ed)?_0x47be43[_0x24e905(0x1d2)](_0x4a2f42):_0x21b7bb['push'](_0x4a2f42);}if(!(!_0x21b7bb[_0x24e905(0x25b)]||_0x47be43[_0x24e905(0x25b)]<=0x1)){_0x3910b5[_0x24e905(0x207)]=_0x21b7bb;var _0x5b4429={'functionsNode':!0x0,'props':_0x47be43};this[_0x24e905(0x1bc)](_0x5b4429,_0x3c3538),this['_setNodeLabel'](_0x5b4429,_0x3c3538),this[_0x24e905(0x212)](_0x5b4429),this[_0x24e905(0x1d0)](_0x5b4429,_0x3c3538),_0x5b4429['id']+='\\x20f',_0x3910b5[_0x24e905(0x207)][_0x24e905(0x218)](_0x5b4429);}}}[_0x455271(0x248)](_0x582e60,_0x16967f){}[_0x455271(0x212)](_0x41580d){}['_isArray'](_0x37b4c3){var _0x195df3=_0x455271;return Array[_0x195df3(0x1b3)](_0x37b4c3)||typeof _0x37b4c3=='object'&&this[_0x195df3(0x23c)](_0x37b4c3)===_0x195df3(0x26f);}[_0x455271(0x1d0)](_0x5e6c06,_0x528dab){}[_0x455271(0x266)](_0x256e2b){var _0x1266ad=_0x455271;delete _0x256e2b[_0x1266ad(0x253)],delete _0x256e2b[_0x1266ad(0x19d)],delete _0x256e2b['_hasMapOnItsPath'];}[_0x455271(0x1a5)](_0x3b60bd,_0x35e7d9){}[_0x455271(0x273)](_0x5ec598){var _0x568dcb=_0x455271;return _0x5ec598?_0x5ec598[_0x568dcb(0x251)](this[_0x568dcb(0x209)])?'['+_0x5ec598+']':_0x5ec598[_0x568dcb(0x251)](this['_keyStrRegExp'])?'.'+_0x5ec598:_0x5ec598[_0x568dcb(0x251)](this['_quotedRegExp'])?'['+_0x5ec598+']':'[\\x27'+_0x5ec598+'\\x27]':'';}}let _0x38dc68=new _0x30697();function _0x1898be(_0x4dc3ad,_0x4c5556,_0x1921cf,_0x268790,_0x4f923,_0x5ce9e0){var _0x75401b=_0x455271;let _0x57871b,_0x1b0815;try{_0x1b0815=_0x2cb31d(),_0x57871b=_0x18be6e[_0x4c5556],!_0x57871b||_0x1b0815-_0x57871b['ts']>0x1f4&&_0x57871b[_0x75401b(0x231)]&&_0x57871b[_0x75401b(0x264)]/_0x57871b['count']<0x64?(_0x18be6e[_0x4c5556]=_0x57871b={'count':0x0,'time':0x0,'ts':_0x1b0815},_0x18be6e[_0x75401b(0x1e4)]={}):_0x1b0815-_0x18be6e[_0x75401b(0x1e4)]['ts']>0x32&&_0x18be6e[_0x75401b(0x1e4)]['count']&&_0x18be6e['hits']['time']/_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x231)]<0x64&&(_0x18be6e['hits']={});let _0x4b9a58=[],_0x433287=_0x57871b['reduceLimits']||_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x20c)]?_0x393c70:_0x589ff4,_0x1a03f4=_0x1195da=>{var _0x3774be=_0x75401b;let _0x5123e6={};return _0x5123e6['props']=_0x1195da[_0x3774be(0x207)],_0x5123e6[_0x3774be(0x1c1)]=_0x1195da['elements'],_0x5123e6[_0x3774be(0x211)]=_0x1195da['strLength'],_0x5123e6[_0x3774be(0x1f0)]=_0x1195da[_0x3774be(0x1f0)],_0x5123e6['autoExpandLimit']=_0x1195da[_0x3774be(0x245)],_0x5123e6['autoExpandMaxDepth']=_0x1195da['autoExpandMaxDepth'],_0x5123e6[_0x3774be(0x1e9)]=!0x1,_0x5123e6['noFunctions']=!_0x290895,_0x5123e6[_0x3774be(0x199)]=0x1,_0x5123e6[_0x3774be(0x1a3)]=0x0,_0x5123e6[_0x3774be(0x21b)]=_0x3774be(0x1c7),_0x5123e6['rootExpression']=_0x3774be(0x1ba),_0x5123e6[_0x3774be(0x23d)]=!0x0,_0x5123e6['autoExpandPreviousObjects']=[],_0x5123e6[_0x3774be(0x1b0)]=0x0,_0x5123e6[_0x3774be(0x1c0)]=!0x0,_0x5123e6[_0x3774be(0x1c2)]=0x0,_0x5123e6[_0x3774be(0x26b)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5123e6;};for(var _0x20255f=0x0;_0x20255f<_0x4f923[_0x75401b(0x25b)];_0x20255f++)_0x4b9a58['push'](_0x38dc68[_0x75401b(0x1ff)]({'timeNode':_0x4dc3ad==='time'||void 0x0},_0x4f923[_0x20255f],_0x1a03f4(_0x433287),{}));if(_0x4dc3ad===_0x75401b(0x196)){let _0x4574d9=Error[_0x75401b(0x1fe)];try{Error[_0x75401b(0x1fe)]=0x1/0x0,_0x4b9a58[_0x75401b(0x1d2)](_0x38dc68[_0x75401b(0x1ff)]({'stackNode':!0x0},new Error()[_0x75401b(0x1e3)],_0x1a03f4(_0x433287),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x4574d9;}}return{'method':_0x75401b(0x23f),'version':_0x94cf8c,'args':[{'ts':_0x1921cf,'session':_0x268790,'args':_0x4b9a58,'id':_0x4c5556,'context':_0x5ce9e0}]};}catch(_0x297f69){return{'method':_0x75401b(0x23f),'version':_0x94cf8c,'args':[{'ts':_0x1921cf,'session':_0x268790,'args':[{'type':_0x75401b(0x274),'error':_0x297f69&&_0x297f69[_0x75401b(0x1bb)]}],'id':_0x4c5556,'context':_0x5ce9e0}]};}finally{try{if(_0x57871b&&_0x1b0815){let _0x2e27c0=_0x2cb31d();_0x57871b[_0x75401b(0x231)]++,_0x57871b[_0x75401b(0x264)]+=_0x1b1c3a(_0x1b0815,_0x2e27c0),_0x57871b['ts']=_0x2e27c0,_0x18be6e[_0x75401b(0x1e4)]['count']++,_0x18be6e[_0x75401b(0x1e4)]['time']+=_0x1b1c3a(_0x1b0815,_0x2e27c0),_0x18be6e[_0x75401b(0x1e4)]['ts']=_0x2e27c0,(_0x57871b[_0x75401b(0x231)]>0x32||_0x57871b[_0x75401b(0x264)]>0x64)&&(_0x57871b[_0x75401b(0x20c)]=!0x0),(_0x18be6e[_0x75401b(0x1e4)]['count']>0x3e8||_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x264)]>0x12c)&&(_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x20c)]=!0x0);}}catch{}}}return _0x1aecc1['_console_ninja'];})(globalThis,_0x230995(0x259),_0x230995(0x22c),_0x230995(0x1dc),_0x230995(0x1b2),_0x230995(0x247),'1692044618875',_0x230995(0x268),_0x230995(0x236));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0VBQW9FLDJDQUEyQztBQUMvRyx1QkFBdUIsbUJBQU8sQ0FBQyxnRkFBbUIsR0FBRztBQUNyRDtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFlO0FBQzVDO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelRSO0FBQ0E7QUFDQztBQUNEO0FBQ007QUFDTjtBQUNxQztBQUNwQjtBQUM2QjtBQUN5QjtBQUNTOzs7QUFHMUc7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhFQUFlO0FBQ2pCLEVBQUUsa0ZBQWlCO0FBQ25CLEVBQUUsOEZBQThCO0FBQ2hDLEVBQUUsb0dBQW9CO0FBQ3RCLEVBQUUsb0dBQW9CO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBVTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9ob3VybHlTbGlkZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2xvYWRpbmcuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL3NlYXJjaC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3Mvc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvZ2xvYmFsLmNzcz81ODRhIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2hlYWRlci5jc3M/OGFjMSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9ob3VybHlTbGlkZXIuY3NzP2U2ZTMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvbG9hZGluZy5jc3M/YjZjNyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9zZWFyY2guY3NzPzQ0NjkiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3Mvc2xpZGVyLmNzcz8wNDlhIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvYXBpQ2FsbHMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvdXRpbHMvc2V0TG9hZGluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy91dGlscy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC9mYWhyZW5oZWl0Q2hlY2svZmFocmVuaGVpdENoZWNrLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvaGVhZGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL2hvdXJseVNsaWRlci9ob3VybHlTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC9zZWFyY2hCb3gvc2VhcmNoQm94LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlckFwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvc2xpZGVyQXJyb3dzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlclNsaWRlci93ZWF0aGVyU2xpZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAxMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMjM2LDI0MiwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG59XG5cbiNyb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHFGQUFxRjtBQUN2Rjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAxMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zIEpQXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogcmdiKDIzNiwyNDIsMjU1KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMjM2LDI0MiwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XFxufVxcblxcbiNyb290IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4IDBweCAxNXB4O1xufVxuXG4uaGVhZGVyX19jaXR5X19jb250YWluZXIge1xuICBmbGV4OiAxO1xufVxuXG4uaGVhZGVyX19jaXR5X19uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGUge1xuICBjb2xvcjogI2E4YjFkZDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyX19jaXR5X19uYW1lX19jaXR5IHtcbiAgY29sb3I6ICM0OTQxNzM7XG59XG5cbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fY2l0eV9fdG1wVG9nZ2xlX190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLnN3aXRjaCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFN3aXRjaCBTdHlsZVxuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zd2l0Y2gsXG4uc3dpdGNoIGlucHV0LFxuLnN3aXRjaCAuc2xpZGVyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQxNzM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzQ5NDE3Mztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztrREFFa0Q7O0FBRWxEOzs7RUFHRSxpQkFBaUI7QUFDbkI7QUFDQSwyQ0FBMkM7QUFDM0M7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUEsZUFBZTtBQUNmO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDBweCAxNXB4O1xcbn1cXG5cXG4uaGVhZGVyX19jaXR5X19jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmhlYWRlcl9fY2l0eV9fbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZSB7XFxuICBjb2xvcjogI2E4YjFkZDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5oZWFkZXJfX2NpdHlfX25hbWVfX2NpdHkge1xcbiAgY29sb3I6ICM0OTQxNzM7XFxufVxcblxcbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19jaXR5X190bXBUb2dnbGVfX3RleHQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuLnN3aXRjaCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICAgU3dpdGNoIFN0eWxlXFxuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnN3aXRjaCxcXG4uc3dpdGNoIGlucHV0LFxcbi5zd2l0Y2ggLnNsaWRlciB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyICovXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0MTczO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNDk0MTczO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud2VhdGhlcl9fZGF0YV9faG91cmx5IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBMUJFRTtcbiAgcGFkZGluZzogMjVweCAyNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbn1cblxuLmN1cnJlbnRfX2RheSB7XG4gIGNvbG9yOiAjRTFFQUZEO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIEhvdXJseSBTbGlkZXIgKi9cbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjVweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMjVweCAwO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDUwcHgpO1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQyRkYzO1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9faW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50ID4gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob3VybHlTbGlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2VhdGhlcl9fZGF0YV9faG91cmx5IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUExQkVFO1xcbiAgcGFkZGluZzogMjVweCAyNXB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uY3VycmVudF9fZGF5IHtcXG4gIGNvbG9yOiAjRTFFQUZEO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4vKiBIb3VybHkgU2xpZGVyICovXFxuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI1cHg7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgcGFkZGluZzogMjVweCAwO1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA1MHB4KTtcXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0MkZGMztcXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudCA+IHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LDI0MiwyNTUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5sb2FkaW5nLmxvYWRpbmctLWFjdGl2ZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9sb2FkaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHFGQUFxRjtFQUNyRixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQ0FBbUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmxvYWRpbmcubG9hZGluZy0tYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndlYXRoZXJfX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBMUJFRTtcbn1cbi5zZWFyY2hfX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjdGRjtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuLnNlYXJjaF9fZm9ybV9faW5wdXQsIC5zZWFyY2hfX2Zvcm1fX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cblxuLnNlYXJjaF9fZXJyb3Ige1xuICBjb2xvcjogI0ZGMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7IFxufVxuXG4uc2VhcmNoX19lcnJvci0taW5hY3RpdmUge1xuICBvcGFjaXR5OiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zZWFyY2guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2VhdGhlcl9fc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUExQkVFO1xcbn1cXG4uc2VhcmNoX19mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGN0ZGO1xcbiAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuLnNlYXJjaF9fZm9ybV9faW5wdXQsIC5zZWFyY2hfX2Zvcm1fX2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLnNlYXJjaF9fZXJyb3Ige1xcbiAgY29sb3I6ICNGRjAwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yczsgXFxufVxcblxcbi5zZWFyY2hfX2Vycm9yLS1pbmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53ZWF0aGVyX19kYXRhIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi53ZWF0aGVyX19zbGlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLndlYXRoZXJfX3NsaWRlcl9faW5mb3JtYXRpb25fX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2VhdGhlcl9fc2VsZWN0ZWRfX2Fycm93IHtcbiAgZmlsbDogI2E4YjFkZDtcbn1cblxuXG5cbi53ZWF0aGVyX19kYXRhX19pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG59XG4ud2VhdGhlcl9fZGF0YV9faW5mb3JtYXRpb246Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQThCMUREICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi53ZWF0aGVyX19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud2VhdGhlcl9faW5mbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNBOEIxREQ7XG59XG4ud2VhdGhlcl9faW5mbyA+IHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNDk0MTczO1xufVxuXG4ud2VhdGhlcl9faW5mb19fdW5pdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2xpZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndlYXRoZXJfX2RhdGEge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2VhdGhlcl9fc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcblxcbi53ZWF0aGVyX19zbGlkZXJfX2luZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbl9faW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2VhdGhlcl9fc2VsZWN0ZWRfX2Fycm93IHtcXG4gIGZpbGw6ICNhOGIxZGQ7XFxufVxcblxcblxcblxcbi53ZWF0aGVyX19kYXRhX19pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweCAxNXB4O1xcbn1cXG4ud2VhdGhlcl9fZGF0YV9faW5mb3JtYXRpb246Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0E4QjFERCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ud2VhdGhlcl9faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi53ZWF0aGVyX19pbmZvIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogI0E4QjFERDtcXG59XFxuLndlYXRoZXJfX2luZm8gPiBwIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjNDk0MTczO1xcbn1cXG5cXG4ud2VhdGhlcl9faW5mb19fdW5pdCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG91cmx5U2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG91cmx5U2xpZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc2V0TG9hZGluZyBmcm9tICcuLi91dGlscy9zZXRMb2FkaW5nJztcbi8qKlxuICogUmV0dXJuIHRoZSB3ZWF0aGVyIGZvciB0aGUgZ2l2ZW4gbG9jYXRpb25cbiAqIFVzZSB0aGUgd2VhdGhlcmFwaS5jb20gQVBJXG4gKiBAc2VlIGh0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL2RvY3MvXG4gKiBAc2VlIGh0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL2FwaS1leHBsb3Jlci5hc3B4XG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAqIHJldHVybiB7b2JqZWN0fSB3ZWF0aGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gIHNldExvYWRpbmcodHJ1ZSk7XG4gIC8qIGVzbGludCBtYXgtbGVuOiBbXCJlcnJvclwiLCB7IFwiaWdub3JlVXJsc1wiOiB0cnVlIH1dICovXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXRcbiAgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPW5vYCwge21vZGU6ICdjb3JzJ30pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogU2hvd3Mgb3IgaGlkZXMgdGhlIGxvYWRpbmcgc3Bpbm5lclxuICogQHBhcmFtIHtCb29sZWFufSBpc0xvYWRpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TG9hZGluZyhpc0xvYWRpbmcpIHtcbiAgY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJyk7XG4gIGxvYWRpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGluZy0tYWN0aXZlJywgaXNMb2FkaW5nKTtcbn1cblxuIiwiLyoqXG4gKiBSZXR1cm4gdGhlIGRheSBvZiB0aGUgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBFLmcuIE1vbmRheSwgVHVlc2RheSwgZXRjLlxuICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldERheShkYXRlKSB7XG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gIHJldHVybiBkYXlzW2RhdGUuZ2V0RGF5KCldO1xufVxuXG5leHBvcnQge2dldERheX07XG4iLCJpbXBvcnQge3VzaW5nRmFocmVuaGVpdCwgc2V0RmFocmVuaGVpdH0gZnJvbSAnLi4vd2VhdGhlckFwcCc7XG5cbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGZhaHJlbmhlaXQgY2hlY2tib3hcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmFocmVuaGVpdEV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBmYWhyZW5oZWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaHJlbmhlaXRfX2NoZWNrYm94Jyk7XG4gIGZhaHJlbmhlaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0RmFocmVuaGVpdCghdXNpbmdGYWhyZW5oZWl0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZhaHJlbmhlaXRFdmVudExpc3RlbmVycztcbiIsImltcG9ydCB7Z2V0RGF5fSBmcm9tICcuLi91dGlscy91dGlsaXRpZXMnO1xuXG4vKipcbiAqIFByaW50IGluIHRoZSBIZWFkZXIgdGhlIERhdGUgYW5kIHRoZSBDaXR5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2l0eSAtIENpdHkgTmFtZVxuICogQHBhcmFtIHtEYXRlfSBkYXRlIC0gRGF0ZVxuICovXG5mdW5jdGlvbiBwcmludEhlYWRlckRhdGEoY2l0eSwgZGF0ZSkge1xuICAvLyBHZXR0aW5nIERPTSBFbGVtZW50c1xuICBjb25zdCBuYW1lQ2l0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jaXR5X19uYW1lX19jaXR5Jyk7XG4gIGNvbnN0IHRleHREYXlFbGVtZW50ID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZV9fdGV4dERheScpO1xuICBjb25zdCBudW1iZXJEYXlFbGVtZW50ID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZV9fbnVtYmVyRGF5Jyk7XG4gIGNvbnN0IG1vbnRoRWxlbWVudCA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGVfX3RleHRNb250aCcpO1xuICAvLyBTZXR0aW5nIHRoZSBjb250ZW50XG4gIG5hbWVDaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGNpdHk7IC8vIENpdHkgTmFtZVxuICB0ZXh0RGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGdldERheShkYXRlKTsgLy8gRGF5IG9mIHRoZSBXZWVrXG4gIG51bWJlckRheUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRlLmdldERhdGUoKTsgLy8gRGF5IG9mIHRoZSBNb250aFxuICBtb250aEVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHttb250aDogJ2xvbmcnfSk7IC8vIE1vbnRoXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaW50SGVhZGVyRGF0YTtcbiIsImltcG9ydCB7Z2V0RGF5fSBmcm9tICcuLi8uLi91dGlscy91dGlsaXRpZXMnO1xuaW1wb3J0IHt1c2luZ0ZhaHJlbmhlaXR9IGZyb20gJy4uL3dlYXRoZXJBcHAnO1xuXG4vKipcbiAqIFByaW50IHRoZSBob3VybHkgc2xpZGVyIGZyb20gdGhlIGhvdXJseSBsaXN0XG4gKiBwYXNzZWQgYXMgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge0FycmF5fSBkYXlcbiAqL1xuZnVuY3Rpb24gcHJpbnRIb3VybHlTbGlkZXIoZGF5KSB7XG4gIC8vIE1haW4gY29udGFpbmVyIG9mIHRoZSBzbGlkZXJcbiAgY29uc3QgaG91cmx5U2xpZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcicpO1xuICBob3VybHlTbGlkZXJFbGVtZW50LmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciB0aGUgc2xpZGVyXG4gIGNvbnN0IGRheVRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRfX2RheScpO1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IGRheURhdGUgPSBuZXcgRGF0ZShkYXkuZGF0ZSkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGxldCBjdXJyZW50SG91ckluZGV4OyAvLyBJbmRleCBvZiB0aGUgY3VycmVudCBob3VyIGluIHRoZSBob3VybHkgbGlzdFxuXG4gIGlmIChjdXJyZW50RGF0ZSA9PT0gZGF5RGF0ZSkgeyAvLyBJZiB0aGUgZGF5IGlzIHRvZGF5XG4gICAgLy8gVGhlIGN1cnJlbnQgaG91ciBpcyB0aGUgY29ycmVjdCBob3VyIGluZGV4IHRvIHN0YXJ0XG4gICAgY3VycmVudEhvdXJJbmRleCA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgfSBlbHNlIHsgLy8gSWYgdGhlIGRheSBpcyBub3QgdG9kYXkgc3RhcnQgZnJvbSB0aGUgZmlyc3QgaG91clxuICAgIGN1cnJlbnRIb3VySW5kZXggPSAwO1xuICB9XG5cbiAgZGF5VGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSBnZXREYXkobmV3IERhdGUoZGF5LmRhdGUpKTtcbiAgY29uc3QgZmlsdGVyZWRIb3VybHlMaXN0ID0gZGF5LmhvdXIuc2xpY2UoY3VycmVudEhvdXJJbmRleCk7XG4gIGZpbHRlcmVkSG91cmx5TGlzdC5mb3JFYWNoKChob3VybHkpID0+IHtcbiAgICBob3VybHlTbGlkZXJFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJseUVsZW1lbnQoaG91cmx5KSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZSBIVE1MIGVsZW1lbnQgZm9yIHRoZSBob3VybHkgc2xpZGVyXG4gKiBAcGFyYW0ge09iamVjdH0gaG91cmx5RGF0YVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUVsZW1lbnQoaG91cmx5RGF0YSkge1xuICBjb25zdCBob3VybHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJseUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnQnKTtcblxuICBjb25zdCBob3VybHlJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBob3VybHlJbWFnZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9faW1hZ2UnKTtcbiAgaG91cmx5SW1hZ2Uuc3JjID0gcmVxdWlyZShgLi4vd2VhdGhlclNsaWRlci9pbWcvc29sZWFkby5wbmdgKTtcblxuICBjb25zdCBob3VybHlIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob3VybHlIb3VyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50X19ob3VyJyk7XG4gIGhvdXJseUhvdXIudGV4dENvbnRlbnQgPSBuZXcgRGF0ZShob3VybHlEYXRhLnRpbWUpLmdldEhvdXJzKCkgKyAnOjAwJztcblxuICBjb25zdCBob3VybHlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaG91cmx5VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX3RlbXBlcmF0dXJlJyk7XG4gIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhvdXJseVRlbXBlcmF0dXJlVmFsdWUuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX3RlbXBlcmF0dXJlX192YWx1ZScpO1xuICBob3VybHlUZW1wZXJhdHVyZVZhbHVlLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh1c2luZ0ZhaHJlbmhlaXQgPyBob3VybHlEYXRhLnRlbXBfZiA6IGhvdXJseURhdGEudGVtcF9jKTtcbiAgY29uc3QgaG91cmx5VGVtcGVyYXR1cmVVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBob3VybHlUZW1wZXJhdHVyZVVuaXQuY2xhc3NMaXN0XG4gICAgICAuYWRkKCd3ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9fdGVtcGVyYXR1cmVfX3VuaXQnLCAnd2VhdGhlcl9faW5mb19fdW5pdCcsICd3ZWF0aGVyX190ZW1wX191bml0Jyk7XG4gIGhvdXJseVRlbXBlcmF0dXJlVW5pdC50ZXh0Q29udGVudCA9ICfCsEMnO1xuXG4gIGhvdXJseVRlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGhvdXJseVRlbXBlcmF0dXJlVmFsdWUpO1xuICBob3VybHlUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZVVuaXQpO1xuXG4gIGhvdXJseUVsZW1lbnQuYXBwZW5kQ2hpbGQoaG91cmx5SW1hZ2UpO1xuICBob3VybHlFbGVtZW50LmFwcGVuZENoaWxkKGhvdXJseUhvdXIpO1xuICBob3VybHlFbGVtZW50LmFwcGVuZENoaWxkKGhvdXJseVRlbXBlcmF0dXJlKTtcblxuICByZXR1cm4gaG91cmx5RWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpbnRIb3VybHlTbGlkZXI7XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi4vLi4vYXBpQ2FsbHMvYXBpQ2FsbHMnO1xuXG5pbXBvcnQge3NldExhc3RXZWF0aGVyRGF0YSwgdXBkYXRlV2VhdGhlckFwcH0gZnJvbSAnLi4vd2VhdGhlckFwcCc7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBTZWFyY2ggQm94IFN1Ym1pdCBFdmVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2VhcmNoRXZlbnQoKSB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19mb3JtJyk7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fZm9ybV9faW5wdXQnKTtcblxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7IC8vIEdldCB0aGUgc2VhcmNoIHF1ZXJ5XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShzZWFyY2hRdWVyeSk7IC8vIEdldCB0aGUgd2VhdGhlciBkYXRhXG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJzsgLy8gQ2xlYXIgdGhlIHNlYXJjaCBpbnB1dFxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIGRpc3BsYXkgaXQgYW5kIHJldHVyblxuICAgIGlmICh3ZWF0aGVyRGF0YS5lcnJvcikge1xuICAgICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19lcnJvcicpO1xuICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnQ2l0eSBub3QgZm91bmQnO1xuICAgICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoX19lcnJvci0taW5hY3RpdmUnKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaF9fZXJyb3ItLWluYWN0aXZlJyk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBlcnJvciwgcHJpbnQgdGhlIHdlYXRoZXIgYXBwXG4gICAgc2V0TGFzdFdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgICB1cGRhdGVXZWF0aGVyQXBwKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZWFyY2hFdmVudDtcbiIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuLi9hcGlDYWxscy9hcGlDYWxscyc7XG5pbXBvcnQgcHJpbnRIZWFkZXJEYXRhIGZyb20gJy4vaGVhZGVyRGF0YSc7XG5pbXBvcnQgcHJpbnRIb3VybHlTbGlkZXIgZnJvbSAnLi9ob3VybHlTbGlkZXIvaG91cmx5U2xpZGVyJztcbmltcG9ydCBwcmludFdlYXRoZXJTbGlkZXIgZnJvbSAnLi93ZWF0aGVyU2xpZGVyL3dlYXRoZXJTbGlkZXInO1xuXG5jb25zdCBsb2NhdGlvbiA9ICdNw6FsYWdhJztcbmxldCBsYXN0V2VhdGhlckRhdGE7XG5sZXQgdXNpbmdGYWhyZW5oZWl0ID0gZmFsc2U7XG5sZXQgY3VycmVudERheUluZGV4ID0gMDtcbi8qKlxuICogUHJpbnQgYWxsIHRoZSB3ZWF0aGVyIGFwcFxuICogU2xpZGVzIHRoZSB3ZWF0aGVyIGFwcCBpbiBhbmQgb3V0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHByaW50V2VhdGhlckFwcCgpIHtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7IC8vIEdldCB3ZWF0aGVyIGRhdGFcbiAgaWYgKHdlYXRoZXJEYXRhLmVycm9yKSB7IC8vIElmIHRoZXJlIGlzIGFuIGVycm9yLCBwcmludCBpdCBhbmQgcmV0dXJuXG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgN2UzOWQxNWFfMGAsd2VhdGhlckRhdGEuZXJyb3IpKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGFzdFdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGE7IC8vIFNhdmUgdGhlIGxhc3Qgd2VhdGhlciBkYXRhXG4gIHVwZGF0ZVdlYXRoZXJBcHAoKTsgLy8gVXBkYXRlIHRoZSB3ZWF0aGVyIGFwcFxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgYWxsIHRoZSB3ZWF0aGVyIGFwcFxuICogSGVhZGVyIGRhdGEsIHdlYXRoZXIgc2xpZGVyIGFuZCBob3VybHkgc2xpZGVyXG4gKiBAcGFyYW0ge09iamVjdH0gd2VhdGhlckRhdGFcbiAqL1xuZnVuY3Rpb24gdXBkYXRlV2VhdGhlckFwcCgpIHtcbiAgY29uc3QgY3VycmVudERheURhdGEgPSBsYXN0V2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbY3VycmVudERheUluZGV4XTsgLy8gR2V0IGN1cnJlbnQgZGF5XG4gIGNvbnN0IGN1cnJlbnRDaXR5TmFtZSA9IGxhc3RXZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lOyAvLyBHZXQgY3VycmVudCBjaXR5IG5hbWVcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF5RGF0YS5kYXRlKTsgLy8gR2V0IGN1cnJlbnQgZGF0ZVxuICBwcmludEhlYWRlckRhdGEoY3VycmVudENpdHlOYW1lLCBjdXJyZW50RGF0ZSk7IC8vIFByaW50IGhlYWRlciBkYXRhXG4gIHByaW50V2VhdGhlclNsaWRlcihjdXJyZW50RGF5RGF0YS5kYXkpOyAvLyBQcmludCB3ZWF0aGVyIHNsaWRlclxuICBwcmludEhvdXJseVNsaWRlcihjdXJyZW50RGF5RGF0YSk7IC8vIFByaW50IGhvdXJseSBzbGlkZXJcbiAgdXBkYXRlVW5pdHModXNpbmdGYWhyZW5oZWl0ID8gJ0YnIDogJ8KwQycpOyAvLyBVcGRhdGUgdW5pdHNcbn07XG5cbi8qKlxuICogVXBkYXRlIHRoZSBsYXN0IHdlYXRoZXIgZGF0YSB3aXRoIHRoZSBuZXcgb25lXG4gKiBAcGFyYW0ge09iamVjdH0gd2VhdGhlckRhdGFcbiAqL1xuZnVuY3Rpb24gc2V0TGFzdFdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIGxhc3RXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhO1xufVxuXG4vKipcbiAqIENoYW5nZSB0aGUgdGVtcGVyYXR1cmUgdW5pdHMgb2YgdGhlIGFsbCB0aGUgd2VhdGhlciBhcHBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYm9vbGVhblxuICovXG5mdW5jdGlvbiBzZXRGYWhyZW5oZWl0KGJvb2xlYW4pIHtcbiAgdXNpbmdGYWhyZW5oZWl0ID0gYm9vbGVhbjtcbiAgdXBkYXRlV2VhdGhlckFwcChsYXN0V2VhdGhlckRhdGEpO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY3VycmVudCBkYXkgaW5kZXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICovXG5mdW5jdGlvbiBzZXRDdXJyZW50RGF5SW5kZXgoaW5kZXgpIHtcbiAgY3VycmVudERheUluZGV4ID0gaW5kZXg7XG59XG5cbi8qKlxuICogVXBkYXRlIGFsbCB0aGUgdW5pdHMgb2YgdGhlIHdlYXRoZXIgYXBwXG4gKiBAcGFyYW0ge1N0cmluZ30gdW5pdHNcbiAqL1xuZnVuY3Rpb24gdXBkYXRlVW5pdHModW5pdHMgPSAnwrBDJykge1xuICBjb25zdCB1bml0c0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlYXRoZXJfX3RlbXBfX3VuaXQnKTtcbiAgdW5pdHNFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB1bml0cztcbiAgfSk7XG59XG5cbmV4cG9ydCB7cHJpbnRXZWF0aGVyQXBwLFxuICB1cGRhdGVXZWF0aGVyQXBwLFxuICBzZXRMYXN0V2VhdGhlckRhdGEsXG4gIGxhc3RXZWF0aGVyRGF0YSxcbiAgdXNpbmdGYWhyZW5oZWl0LFxuICBzZXRGYWhyZW5oZWl0LFxuICBjdXJyZW50RGF5SW5kZXgsXG4gIHNldEN1cnJlbnREYXlJbmRleCxcbn07XG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDIzMDk5NT1fMHg0MTNmOyhmdW5jdGlvbihfMHgxZjUzYzAsXzB4MzYzYjFiKXt2YXIgXzB4MjcxYTgzPV8weDQxM2YsXzB4NWUwNzc1PV8weDFmNTNjMCgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4MjQyYjQwPS1wYXJzZUludChfMHgyNzFhODMoMHgxZTYpKS8weDErLXBhcnNlSW50KF8weDI3MWE4MygweDFiOCkpLzB4MistcGFyc2VJbnQoXzB4MjcxYTgzKDB4MWNjKSkvMHgzK3BhcnNlSW50KF8weDI3MWE4MygweDFlNSkpLzB4NCooLXBhcnNlSW50KF8weDI3MWE4MygweDIxZCkpLzB4NSkrLXBhcnNlSW50KF8weDI3MWE4MygweDE5NSkpLzB4NiooLXBhcnNlSW50KF8weDI3MWE4MygweDI0MSkpLzB4NykrLXBhcnNlSW50KF8weDI3MWE4MygweDI1NSkpLzB4OCooLXBhcnNlSW50KF8weDI3MWE4MygweDIzOSkpLzB4OSkrcGFyc2VJbnQoXzB4MjcxYTgzKDB4MWU3KSkvMHhhKihwYXJzZUludChfMHgyNzFhODMoMHgyNzkpKS8weGIpO2lmKF8weDI0MmI0MD09PV8weDM2M2IxYilicmVhaztlbHNlIF8weDVlMDc3NVsncHVzaCddKF8weDVlMDc3NVsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4NWQzY2MxKXtfMHg1ZTA3NzVbJ3B1c2gnXShfMHg1ZTA3NzVbJ3NoaWZ0J10oKSk7fX19KF8weDI3ZjAsMHhlYTZiNSkpO3ZhciB1ZT1PYmplY3RbJ2NyZWF0ZSddLHRlPU9iamVjdFsnZGVmaW5lUHJvcGVydHknXSxoZT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLGxlPU9iamVjdFtfMHgyMzA5OTUoMHgyMGUpXSxmZT1PYmplY3RbXzB4MjMwOTk1KDB4MjE2KV0sX2U9T2JqZWN0Wydwcm90b3R5cGUnXVtfMHgyMzA5OTUoMHgyMzApXSxwZT0oXzB4MzRlMGJiLF8weDQwN2QyMyxfMHgzMmRlMjUsXzB4MzZjMzZhKT0+e3ZhciBfMHhjMzY3MDA9XzB4MjMwOTk1O2lmKF8weDQwN2QyMyYmdHlwZW9mIF8weDQwN2QyMz09XzB4YzM2NzAwKDB4MjU4KXx8dHlwZW9mIF8weDQwN2QyMz09XzB4YzM2NzAwKDB4MWVkKSl7Zm9yKGxldCBfMHgyZDU5MDQgb2YgbGUoXzB4NDA3ZDIzKSkhX2VbXzB4YzM2NzAwKDB4MWE0KV0oXzB4MzRlMGJiLF8weDJkNTkwNCkmJl8weDJkNTkwNCE9PV8weDMyZGUyNSYmdGUoXzB4MzRlMGJiLF8weDJkNTkwNCx7J2dldCc6KCk9Pl8weDQwN2QyM1tfMHgyZDU5MDRdLCdlbnVtZXJhYmxlJzohKF8weDM2YzM2YT1oZShfMHg0MDdkMjMsXzB4MmQ1OTA0KSl8fF8weDM2YzM2YVtfMHhjMzY3MDAoMHgyM2IpXX0pO31yZXR1cm4gXzB4MzRlMGJiO30sbmU9KF8weDM1NTk3ZCxfMHgzODFjZjQsXzB4MWY3Y2UwKT0+KF8weDFmN2NlMD1fMHgzNTU5N2QhPW51bGw/dWUoZmUoXzB4MzU1OTdkKSk6e30scGUoXzB4MzgxY2Y0fHwhXzB4MzU1OTdkfHwhXzB4MzU1OTdkW18weDIzMDk5NSgweDFhNildP3RlKF8weDFmN2NlMCxfMHgyMzA5OTUoMHgyMDIpLHsndmFsdWUnOl8weDM1NTk3ZCwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDFmN2NlMCxfMHgzNTU5N2QpKSxRPWNsYXNze2NvbnN0cnVjdG9yKF8weDJmYzQ0MCxfMHgxNTJjZTcsXzB4NDIyYTZiLF8weDIwM2QyYyl7dmFyIF8weDJmMTcyMD1fMHgyMzA5OTU7dGhpc1tfMHgyZjE3MjAoMHgyMDYpXT1fMHgyZmM0NDAsdGhpc1tfMHgyZjE3MjAoMHgyMTQpXT1fMHgxNTJjZTcsdGhpc1tfMHgyZjE3MjAoMHgxYjEpXT1fMHg0MjJhNmIsdGhpc1snbm9kZU1vZHVsZXMnXT1fMHgyMDNkMmMsdGhpc1tfMHgyZjE3MjAoMHgyMTUpXT0hMHgwLHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MCx0aGlzW18weDJmMTcyMCgweDIwMyldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbXzB4MmYxNzIwKDB4MWY5KV09ISF0aGlzW18weDJmMTcyMCgweDIwNildW18weDJmMTcyMCgweDFlZSldLHRoaXNbXzB4MmYxNzIwKDB4MjM0KV09bnVsbCx0aGlzW18weDJmMTcyMCgweDIyNSldPTB4MCx0aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddPTB4MTQsdGhpc1tfMHgyZjE3MjAoMHgyNzIpXT1fMHgyZjE3MjAoMHgxZGYpLHRoaXNbXzB4MmYxNzIwKDB4MWE5KV09KHRoaXNbXzB4MmYxNzIwKDB4MWY5KV0/J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJzonQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnKSt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddO31hc3luY1tfMHgyMzA5OTUoMHgyNjApXSgpe3ZhciBfMHgyZjljODM9XzB4MjMwOTk1O2lmKHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddKXJldHVybiB0aGlzW18weDJmOWM4MygweDIzNCldO2xldCBfMHg1NDMxYjE7aWYodGhpc1tfMHgyZjljODMoMHgxZjkpXSlfMHg1NDMxYjE9dGhpc1tfMHgyZjljODMoMHgyMDYpXVsnV2ViU29ja2V0J107ZWxzZXtpZih0aGlzW18weDJmOWM4MygweDIwNildW18weDJmOWM4MygweDI0MCldPy5bXzB4MmY5YzgzKDB4MjBiKV0pXzB4NTQzMWIxPXRoaXNbXzB4MmY5YzgzKDB4MjA2KV1bJ3Byb2Nlc3MnXT8uW18weDJmOWM4MygweDIwYildO2Vsc2UgdHJ5e2xldCBfMHgzNTNhY2I9YXdhaXQgaW1wb3J0KF8weDJmOWM4MygweDI1MCkpO18weDU0MzFiMT0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoJ3VybCcpKVtfMHgyZjljODMoMHgyNGUpXShfMHgzNTNhY2JbXzB4MmY5YzgzKDB4MjJkKV0odGhpc1tfMHgyZjljODMoMHgyMmIpXSwnd3MvaW5kZXguanMnKSlbXzB4MmY5YzgzKDB4MWFkKV0oKSkpW18weDJmOWM4MygweDIwMildO31jYXRjaHt0cnl7XzB4NTQzMWIxPXJlcXVpcmUocmVxdWlyZShfMHgyZjljODMoMHgyNTApKVtfMHgyZjljODMoMHgyMmQpXSh0aGlzW18weDJmOWM4MygweDIyYildLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDJmOWM4MygweDIyMykpO319fXJldHVybiB0aGlzW18weDJmOWM4MygweDIzNCldPV8weDU0MzFiMSxfMHg1NDMxYjE7fVtfMHgyMzA5OTUoMHgyNjIpXSgpe3ZhciBfMHg0NDVhOTE9XzB4MjMwOTk1O3RoaXNbXzB4NDQ1YTkxKDB4MWE4KV18fHRoaXNbXzB4NDQ1YTkxKDB4MjAzKV18fHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J10+PXRoaXNbXzB4NDQ1YTkxKDB4MjY1KV18fCh0aGlzW18weDQ0NWE5MSgweDFlMildPSEweDEsdGhpc1tfMHg0NDVhOTEoMHgxYTgpXT0hMHgwLHRoaXNbXzB4NDQ1YTkxKDB4MjI1KV0rKyx0aGlzWydfd3MnXT1uZXcgUHJvbWlzZSgoXzB4Yjk2MSxfMHgyZTFlZWEpPT57dmFyIF8weDMwMDI2Yj1fMHg0NDVhOTE7dGhpc1tfMHgzMDAyNmIoMHgyNjApXSgpWyd0aGVuJ10oXzB4NDQyYTFjPT57dmFyIF8weGVjNThiYT1fMHgzMDAyNmI7bGV0IF8weDIyNGE0ZD1uZXcgXzB4NDQyYTFjKF8weGVjNThiYSgweDI2YSkrdGhpc1tfMHhlYzU4YmEoMHgyMTQpXSsnOicrdGhpc1tfMHhlYzU4YmEoMHgxYjEpXSk7XzB4MjI0YTRkW18weGVjNThiYSgweDI0NCldPSgpPT57dmFyIF8weDUyNjNhYj1fMHhlYzU4YmE7dGhpc1tfMHg1MjYzYWIoMHgyMTUpXT0hMHgxLHRoaXNbXzB4NTI2M2FiKDB4MjZlKV0oXzB4MjI0YTRkKSx0aGlzW18weDUyNjNhYigweDIyMildKCksXzB4MmUxZWVhKG5ldyBFcnJvcihfMHg1MjYzYWIoMHgyMGQpKSk7fSxfMHgyMjRhNGRbXzB4ZWM1OGJhKDB4MjYxKV09KCk9Pnt2YXIgXzB4MzlhMDQ0PV8weGVjNThiYTt0aGlzWydfaW5Ccm93c2VyJ118fF8weDIyNGE0ZFtfMHgzOWEwNDQoMHgyMGYpXSYmXzB4MjI0YTRkW18weDM5YTA0NCgweDIwZildW18weDM5YTA0NCgweDFkMSldJiZfMHgyMjRhNGRbXzB4MzlhMDQ0KDB4MjBmKV1bXzB4MzlhMDQ0KDB4MWQxKV0oKSxfMHhiOTYxKF8weDIyNGE0ZCk7fSxfMHgyMjRhNGRbXzB4ZWM1OGJhKDB4MWM1KV09KCk9Pnt0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgyMjRhNGQpLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9LF8weDIyNGE0ZFsnb25tZXNzYWdlJ109XzB4ZWM0YjQzPT57dmFyIF8weDVlODZlMj1fMHhlYzU4YmE7dHJ5e18weGVjNGI0MyYmXzB4ZWM0YjQzW18weDVlODZlMigweDFmMSldJiZ0aGlzW18weDVlODZlMigweDFmOSldJiZKU09OWydwYXJzZSddKF8weGVjNGI0M1tfMHg1ZTg2ZTIoMHgxZjEpXSlbJ21ldGhvZCddPT09XzB4NWU4NmUyKDB4MWQ2KSYmdGhpc1tfMHg1ZTg2ZTIoMHgyMDYpXVsnbG9jYXRpb24nXVtfMHg1ZTg2ZTIoMHgxZDYpXSgpO31jYXRjaHt9fTt9KVtfMHgzMDAyNmIoMHgyMDUpXShfMHhlZTk3NDE9Pih0aGlzW18weDMwMDI2YigweDIwMyldPSEweDAsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbXzB4MzAwMjZiKDB4MWUyKV09ITB4MSx0aGlzW18weDMwMDI2YigweDIxNSldPSEweDAsdGhpc1tfMHgzMDAyNmIoMHgyMjUpXT0weDAsXzB4ZWU5NzQxKSlbXzB4MzAwMjZiKDB4MjQ5KV0oXzB4MTg2YzA2PT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLGNvbnNvbGVbXzB4MzAwMjZiKDB4MWJlKV0oXzB4MzAwMjZiKDB4MjI0KSt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddKSxfMHgyZTFlZWEobmV3IEVycm9yKF8weDMwMDI2YigweDIyOCkrKF8weDE4NmMwNiYmXzB4MTg2YzA2W18weDMwMDI2YigweDFiYildKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MjEwZTNkKXt2YXIgXzB4NDBlNGU0PV8weDIzMDk5NTt0aGlzW18weDQwZTRlNCgweDIwMyldPSEweDEsdGhpc1tfMHg0MGU0ZTQoMHgxYTgpXT0hMHgxO3RyeXtfMHgyMTBlM2RbXzB4NDBlNGU0KDB4MWM1KV09bnVsbCxfMHgyMTBlM2RbXzB4NDBlNGU0KDB4MjQ0KV09bnVsbCxfMHgyMTBlM2RbXzB4NDBlNGU0KDB4MjYxKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHgyMTBlM2RbXzB4NDBlNGU0KDB4MWI3KV08MHgyJiZfMHgyMTBlM2RbXzB4NDBlNGU0KDB4MjJhKV0oKTt9Y2F0Y2h7fX1bXzB4MjMwOTk1KDB4MjIyKV0oKXt2YXIgXzB4MTMwNzA5PV8weDIzMDk5NTtjbGVhclRpbWVvdXQodGhpc1tfMHgxMzA3MDkoMHgxZGUpXSksISh0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPj10aGlzW18weDEzMDcwOSgweDI2NSldKSYmKHRoaXNbXzB4MTMwNzA5KDB4MWRlKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHgxZTI0MjQ9XzB4MTMwNzA5O3RoaXNbXzB4MWUyNDI0KDB4MjAzKV18fHRoaXNbXzB4MWUyNDI0KDB4MWE4KV18fCh0aGlzW18weDFlMjQyNCgweDI2MildKCksdGhpc1tfMHgxZTI0MjQoMHgxZDMpXT8uW18weDFlMjQyNCgweDI0OSldKCgpPT50aGlzW18weDFlMjQyNCgweDIyMildKCkpKTt9LDB4MWY0KSx0aGlzW18weDEzMDcwOSgweDFkZSldW18weDEzMDcwOSgweDFkMSldJiZ0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weDEzMDcwOSgweDFkMSldKCkpO31hc3luY1tfMHgyMzA5OTUoMHgxZDQpXShfMHgzYWE5MTApe3ZhciBfMHg0NmQzMTU9XzB4MjMwOTk1O3RyeXtpZighdGhpc1snX2FsbG93ZWRUb1NlbmQnXSlyZXR1cm47dGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXSYmdGhpc1tfMHg0NmQzMTUoMHgyNjIpXSgpLChhd2FpdCB0aGlzWydfd3MnXSlbXzB4NDZkMzE1KDB4MWQ0KV0oSlNPTltfMHg0NmQzMTUoMHgyMmUpXShfMHgzYWE5MTApKTt9Y2F0Y2goXzB4NWExNzMyKXtjb25zb2xlWyd3YXJuJ10odGhpc1tfMHg0NmQzMTUoMHgxYTkpXSsnOlxcXFx4MjAnKyhfMHg1YTE3MzImJl8weDVhMTczMlsnbWVzc2FnZSddKSksdGhpc1tfMHg0NmQzMTUoMHgyMTUpXT0hMHgxLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKTt9fX07ZnVuY3Rpb24gXzB4MjdmMCgpe3ZhciBfMHg1YjJhMTM9WydcXFxceDIwc2VydmVyJywnX3F1b3RlZFJlZ0V4cCcsJ3N0YWNrVHJhY2VMaW1pdCcsJ3NlcmlhbGl6ZScsJ2NhcHBlZCcsJ2dldHRlcicsJ2RlZmF1bHQnLCdfY29ubmVjdGVkJywnYmluZCcsJ3RoZW4nLCdnbG9iYWwnLCdwcm9wcycsJ3NldCcsJ19udW1iZXJSZWdFeHAnLCdwZXJmX2hvb2tzJywnX1dlYlNvY2tldCcsJ3JlZHVjZUxpbWl0cycsJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnX3NvY2tldCcsJ2N1cnJlbnQnLCdzdHJMZW5ndGgnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ3BlcmZvcm1hbmNlJywnaG9zdCcsJ19hbGxvd2VkVG9TZW5kJywnZ2V0UHJvdG90eXBlT2YnLCd2YWx1ZU9mJywndW5zaGlmdCcsJ19wX2xlbmd0aCcsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdleHBJZCcsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCcyMFlDU0VPSScsJ19hZGRGdW5jdGlvbnNOb2RlJywnaW5kZXgnLCduZWdhdGl2ZUluZmluaXR5JywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnX2NvbnNvbGVfbmluamEnLCduYW1lJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJywnY29uY2F0JywnY2xvc2UnLCdub2RlTW9kdWxlcycsJzY0MjY5Jywnam9pbicsJ3N0cmluZ2lmeScsJ3RvTG93ZXJDYXNlJywnaGFzT3duUHJvcGVydHknLCdjb3VudCcsJ2NhcHBlZEVsZW1lbnRzJywnZ2V0JywnX1dlYlNvY2tldENsYXNzJywnX2lzVW5kZWZpbmVkJywnJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCc6bG9nUG9pbnRJZDonLCc4OTI1M1VsVW9hRCcsJ3ZhbHVlJywnZW51bWVyYWJsZScsJ19vYmplY3RUb1N0cmluZycsJ2F1dG9FeHBhbmQnLCdORUdBVElWRV9JTkZJTklUWScsJ2xvZycsJ3Byb2Nlc3MnLCc3MTEzMjc0RVJqdmpmJywnY29uc3RydWN0b3InLCdfaXNNYXAnLCdvbmVycm9yJywnYXV0b0V4cGFuZExpbWl0JywnX3NldE5vZGVRdWVyeVBhdGgnLCcxLjAuMCcsJ19hZGRMb2FkTm9kZScsJ2NhdGNoJywnZGF0ZScsJ251eHQnLCdfc2V0Tm9kZUxhYmVsJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdwYXRoVG9GaWxlVVJMJywnLi4uJywncGF0aCcsJ21hdGNoJywnX1N5bWJvbCcsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ2FzdHJvJywnNTY4UFpFdHlWJywnZnVuY05hbWUnLCdQT1NJVElWRV9JTkZJTklUWScsJ29iamVjdCcsJzEyNy4wLjAuMScsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdsZW5ndGgnLCdfdW5kZWZpbmVkJywnX2FkZE9iamVjdFByb3BlcnR5JywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ19hZGRQcm9wZXJ0eScsJ2dldFdlYlNvY2tldENsYXNzJywnb25vcGVuJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdTdHJpbmcnLCd0aW1lJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdfY2xlYW5Ob2RlJywndmVyc2lvbnMnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiTWFjQm9vay1Qcm8tZGUtSm9zZS5sb2NhbFxcXCIsXFxcIjE5Mi4xNjguMS4xMzFcXFwiXSwnc29ydCcsJ3dzOi8vJywnbm9kZScsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ19jYXBJZlN0cmluZycsJ19kaXNwb3NlV2Vic29ja2V0JywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdfcF9uYW1lJywnbG9jYXRpb24nLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ19wcm9wZXJ0eUFjY2Vzc29yJywndW5rbm93bicsJ2Rpc2FibGVkTG9nJywnX3R5cGUnLCdFcnJvcicsJ3R5cGUnLCc1MjI2MjU3M3JNR3FKZScsJzZVdmlYamcnLCd0cmFjZScsJ1N5bWJvbCcsJ3Rlc3QnLCdkZXB0aCcsJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ1JlZ0V4cCcsJ19oYXNTZXRPbkl0c1BhdGgnLCdzdWJzdHInLCdudW1iZXInLCdzdHJpbmcnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdsZXZlbCcsJ2NhbGwnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnX19lcycrJ01vZHVsZScsJ19rZXlTdHJSZWdFeHAnLCdfY29ubmVjdGluZycsJ19zZW5kRXJyb3JNZXNzYWdlJywnZWxhcHNlZCcsJ2JpZ2ludCcsJ3Byb3RvdHlwZScsJ3RvU3RyaW5nJywnTWFwJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywncG9ydCcsJ3dlYnBhY2snLCdpc0FycmF5JywnbmVnYXRpdmVaZXJvJywnX3Byb3BlcnR5JywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywncmVhZHlTdGF0ZScsJzMxNjk1MjBzWWRZYmcnLCdbb2JqZWN0XFxcXHgyMERhdGVdJywncm9vdF9leHAnLCdtZXNzYWdlJywnX3NldE5vZGVJZCcsJ3NsaWNlJywnd2FybicsJ19pc1ByaW1pdGl2ZVR5cGUnLCdyZXNvbHZlR2V0dGVycycsJ2VsZW1lbnRzJywnYWxsU3RyTGVuZ3RoJywnYXJyYXknLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0Jywnb25jbG9zZScsJ19zb3J0UHJvcHMnLCdyb290X2V4cF9pZCcsJ1xcXFx4MjBicm93c2VyJywndGltZUVuZCcsJ251bGwnLCdlcnJvcicsJzU3MTIwMzlBc21sUWMnLCdfZGF0ZVRvU3RyaW5nJywnbm9GdW5jdGlvbnMnLCd0aW1lU3RhbXAnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywndW5yZWYnLCdwdXNoJywnX3dzJywnc2VuZCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdfcHJvcGVydHlOYW1lJywnSFRNTEFsbENvbGxlY3Rpb24nLCdmb3JFYWNoJywncGFyZW50JywnX2lzTmVnYXRpdmVaZXJvJyxcXFwiL1VzZXJzL2pvc2VtYXJpYS8udnNjb2RlLWluc2lkZXJzL2V4dGVuc2lvbnMvd2FsbGFieWpzLmNvbnNvbGUtbmluamEtMC4wLjE5OC9ub2RlX21vZHVsZXNcXFwiLCdjb25zb2xlJywnX3JlY29ubmVjdFRpbWVvdXQnLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnX3BfJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdzdGFjaycsJ2hpdHMnLCcxNzYzODQ0RVRNc2pRJywnMjU4NjM0YWhQV0ZGJywnMTBaTmZuamYnLCdTZXQnLCdzb3J0UHJvcHMnLCdocnRpbWUnLCdzeW1ib2wnLCdzZXR0ZXInLCdmdW5jdGlvbicsJ1dlYlNvY2tldCcsJ2NhcHBlZFByb3BzJywndG90YWxTdHJMZW5ndGgnLCdkYXRhJywnaW5kZXhPZicsJ25vdycsJ051bWJlcicsJ3NwbGl0JywnX3JlZ0V4cFRvU3RyaW5nJywnQnVmZmVyJywndW5kZWZpbmVkJywnX2luQnJvd3NlcicsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXTtfMHgyN2YwPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDViMmExMzt9O3JldHVybiBfMHgyN2YwKCk7fWZ1bmN0aW9uIFYoXzB4NWE0OTZkLF8weDE3NzRiMSxfMHg1NGJjY2QsXzB4MTcwNzdiLF8weDM0MWRkNil7dmFyIF8weDNkNjM5Mz1fMHgyMzA5OTU7bGV0IF8weDJhMWIxNj1fMHg1NGJjY2RbXzB4M2Q2MzkzKDB4MWY1KV0oJywnKVsnbWFwJ10oXzB4MjdkOWExPT57dmFyIF8weDUxMWFmNT1fMHgzZDYzOTM7dHJ5e18weDVhNDk2ZFtfMHg1MTFhZjUoMHgxZmIpXXx8KChfMHgzNDFkZDY9PT0nbmV4dC5qcyd8fF8weDM0MWRkNj09PSdyZW1peCd8fF8weDM0MWRkNj09PV8weDUxMWFmNSgweDI1NCkpJiYoXzB4MzQxZGQ2Kz1fMHg1YTQ5NmRbJ3Byb2Nlc3MnXT8uW18weDUxMWFmNSgweDI2NyldPy5bXzB4NTExYWY1KDB4MjZiKV0/XzB4NTExYWY1KDB4MWZjKTpfMHg1MTFhZjUoMHgxYzgpKSxfMHg1YTQ5NmRbXzB4NTExYWY1KDB4MWZiKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDM0MWRkNn0pO2xldCBfMHhiNmUzYjQ9bmV3IFEoXzB4NWE0OTZkLF8weDE3NzRiMSxfMHgyN2Q5YTEsXzB4MTcwNzdiKTtyZXR1cm4gXzB4YjZlM2I0W18weDUxMWFmNSgweDFkNCldW18weDUxMWFmNSgweDIwNCldKF8weGI2ZTNiNCk7fWNhdGNoKF8weDM5MGQ5YSl7cmV0dXJuIGNvbnNvbGVbJ3dhcm4nXSgnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLF8weDM5MGQ5YSYmXzB4MzkwZDlhW18weDUxMWFmNSgweDFiYildKSwoKT0+e307fX0pO3JldHVybiBfMHgzOTUzODg9Pl8weDJhMWIxNltfMHgzZDYzOTMoMHgxZDkpXShfMHgyMzJlNWM9Pl8weDIzMmU1YyhfMHgzOTUzODgpKTt9ZnVuY3Rpb24gXzB4NDEzZihfMHg3ZTFlYWQsXzB4MWY1YzZlKXt2YXIgXzB4MjdmMDg0PV8weDI3ZjAoKTtyZXR1cm4gXzB4NDEzZj1mdW5jdGlvbihfMHg0MTNmOWMsXzB4MzFkOThkKXtfMHg0MTNmOWM9XzB4NDEzZjljLTB4MTk1O3ZhciBfMHgyNTk4OTg9XzB4MjdmMDg0W18weDQxM2Y5Y107cmV0dXJuIF8weDI1OTg5ODt9LF8weDQxM2YoXzB4N2UxZWFkLF8weDFmNWM2ZSk7fWZ1bmN0aW9uIEgoXzB4NTQ0NDhhKXt2YXIgXzB4NGEwNDU2PV8weDIzMDk5NTtsZXQgXzB4MWE1NmI4PWZ1bmN0aW9uKF8weDQ4NjYxYSxfMHgzZDU3NjIpe3JldHVybiBfMHgzZDU3NjItXzB4NDg2NjFhO30sXzB4M2RmZGU2O2lmKF8weDU0NDQ4YVtfMHg0YTA0NTYoMHgyMTMpXSlfMHgzZGZkZTY9ZnVuY3Rpb24oKXt2YXIgXzB4MzU4ZWJhPV8weDRhMDQ1NjtyZXR1cm4gXzB4NTQ0NDhhW18weDM1OGViYSgweDIxMyldWydub3cnXSgpO307ZWxzZXtpZihfMHg1NDQ0OGFbJ3Byb2Nlc3MnXSYmXzB4NTQ0NDhhW18weDRhMDQ1NigweDI0MCldW18weDRhMDQ1NigweDFlYSldKV8weDNkZmRlNj1mdW5jdGlvbigpe3ZhciBfMHg5ODYxNzc9XzB4NGEwNDU2O3JldHVybiBfMHg1NDQ0OGFbJ3Byb2Nlc3MnXVtfMHg5ODYxNzcoMHgxZWEpXSgpO30sXzB4MWE1NmI4PWZ1bmN0aW9uKF8weDQ4ZmU5ZCxfMHhlMzI3YzQpe3JldHVybiAweDNlOCooXzB4ZTMyN2M0WzB4MF0tXzB4NDhmZTlkWzB4MF0pKyhfMHhlMzI3YzRbMHgxXS1fMHg0OGZlOWRbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4ZjAwNGEyfT1yZXF1aXJlKF8weDRhMDQ1NigweDIwYSkpO18weDNkZmRlNj1mdW5jdGlvbigpe3ZhciBfMHgxMzIzMGU9XzB4NGEwNDU2O3JldHVybiBfMHhmMDA0YTJbXzB4MTMyMzBlKDB4MWYzKV0oKTt9O31jYXRjaHtfMHgzZGZkZTY9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHgxYTU2YjgsJ3RpbWVTdGFtcCc6XzB4M2RmZGU2LCdub3cnOigpPT5EYXRlW18weDRhMDQ1NigweDFmMyldKCl9O31mdW5jdGlvbiBYKF8weDQ5MTZkZCxfMHgzMzQ5OWQsXzB4M2Q0YWJhKXt2YXIgXzB4NWEyNzlkPV8weDIzMDk5NTtpZihfMHg0OTE2ZGRbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddIT09dm9pZCAweDApcmV0dXJuIF8weDQ5MTZkZFtfMHg1YTI3OWQoMHgyMjEpXTtsZXQgXzB4NTI4NmQ3PV8weDQ5MTZkZFtfMHg1YTI3OWQoMHgyNDApXT8uW18weDVhMjc5ZCgweDI2NyldPy5bXzB4NWEyNzlkKDB4MjZiKV07cmV0dXJuIF8weDUyODZkNyYmXzB4M2Q0YWJhPT09XzB4NWEyNzlkKDB4MjRiKT9fMHg0OTE2ZGRbXzB4NWEyNzlkKDB4MjIxKV09ITB4MTpfMHg0OTE2ZGRbXzB4NWEyNzlkKDB4MjIxKV09XzB4NTI4NmQ3fHwhXzB4MzM0OTlkfHxfMHg0OTE2ZGRbXzB4NWEyNzlkKDB4MjcxKV0/LlsnaG9zdG5hbWUnXSYmXzB4MzM0OTlkWydpbmNsdWRlcyddKF8weDQ5MTZkZFtfMHg1YTI3OWQoMHgyNzEpXVsnaG9zdG5hbWUnXSksXzB4NDkxNmRkW18weDVhMjc5ZCgweDIyMSldO30oKF8weDFhZWNjMSxfMHgxNjlkYjAsXzB4M2Y3ODRmLF8weDUwNTg2OSxfMHg1YWVlNjMsXzB4OTRjZjhjLF8weDQ5YzhjNSxfMHg1OGE3MzIsXzB4MjkwODk1KT0+e3ZhciBfMHg0NTUyNzE9XzB4MjMwOTk1O2lmKF8weDFhZWNjMVsnX2NvbnNvbGVfbmluamEnXSlyZXR1cm4gXzB4MWFlY2MxW18weDQ1NTI3MSgweDIyNildO2lmKCFYKF8weDFhZWNjMSxfMHg1OGE3MzIsXzB4NWFlZTYzKSlyZXR1cm4gXzB4MWFlY2MxW18weDQ1NTI3MSgweDIyNildPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHgxYWVjYzFbJ19jb25zb2xlX25pbmphJ107bGV0IF8weDU4OWZmND17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHgzOTNjNzA9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfSxfMHgyMWVjZTk9SChfMHgxYWVjYzEpLF8weDFiMWMzYT1fMHgyMWVjZTlbXzB4NDU1MjcxKDB4MWFhKV0sXzB4MmNiMzFkPV8weDIxZWNlOVtfMHg0NTUyNzEoMHgxY2YpXSxfMHgzYTlhMmY9XzB4MjFlY2U5W18weDQ1NTI3MSgweDFmMyldLF8weDE4YmU2ZT17J2hpdHMnOnt9LCd0cyc6e319LF8weDE0OWQwYT1fMHgzOTM3OGE9PntfMHgxOGJlNmVbJ3RzJ11bXzB4MzkzNzhhXT1fMHgyY2IzMWQoKTt9LF8weDQ0ZDhjYz0oXzB4MWU3YmM4LF8weDJkNjJmNCk9Pnt2YXIgXzB4NWMxYWIzPV8weDQ1NTI3MTtsZXQgXzB4MmQ3MGFlPV8weDE4YmU2ZVsndHMnXVtfMHgyZDYyZjRdO2lmKGRlbGV0ZSBfMHgxOGJlNmVbJ3RzJ11bXzB4MmQ2MmY0XSxfMHgyZDcwYWUpe2xldCBfMHgxNmMxNzY9XzB4MWIxYzNhKF8weDJkNzBhZSxfMHgyY2IzMWQoKSk7XzB4MTI4N2U0KF8weDE4OThiZShfMHg1YzFhYjMoMHgyNjQpLF8weDFlN2JjOCxfMHgzYTlhMmYoKSxfMHg1N2M5NTcsW18weDE2YzE3Nl0sXzB4MmQ2MmY0KSk7fX0sXzB4M2Q2MzQ0PV8weDQyNzA2OT0+XzB4MTU3MDEwPT57dmFyIF8weDUwNGZmMT1fMHg0NTUyNzE7dHJ5e18weDE0OWQwYShfMHgxNTcwMTApLF8weDQyNzA2OShfMHgxNTcwMTApO31maW5hbGx5e18weDFhZWNjMVtfMHg1MDRmZjEoMHgxZGQpXVtfMHg1MDRmZjEoMHgyNjQpXT1fMHg0MjcwNjk7fX0sXzB4M2Q1YTUwPV8weDJkMzg1Yj0+XzB4MjhkYTk9Pnt2YXIgXzB4NWQzMDg2PV8weDQ1NTI3MTt0cnl7bGV0IFtfMHgzZDMyMDUsXzB4NDQwNTE3XT1fMHgyOGRhOVtfMHg1ZDMwODYoMHgxZjUpXShfMHg1ZDMwODYoMHgyMzgpKTtfMHg0NGQ4Y2MoXzB4NDQwNTE3LF8weDNkMzIwNSksXzB4MmQzODViKF8weDNkMzIwNSk7fWZpbmFsbHl7XzB4MWFlY2MxW18weDVkMzA4NigweDFkZCldW18weDVkMzA4NigweDFjOSldPV8weDJkMzg1Yjt9fTtfMHgxYWVjYzFbXzB4NDU1MjcxKDB4MjI2KV09eydjb25zb2xlTG9nJzooXzB4NTI4NjMyLF8weDNiNGE0MCk9Pnt2YXIgXzB4MzNlMTNkPV8weDQ1NTI3MTtfMHgxYWVjYzFbXzB4MzNlMTNkKDB4MWRkKV1bXzB4MzNlMTNkKDB4MjNmKV1bXzB4MzNlMTNkKDB4MjI3KV0hPT1fMHgzM2UxM2QoMHgyNzUpJiZfMHgxMjg3ZTQoXzB4MTg5OGJlKF8weDMzZTEzZCgweDIzZiksXzB4NTI4NjMyLF8weDNhOWEyZigpLF8weDU3Yzk1NyxfMHgzYjRhNDApKTt9LCdjb25zb2xlVHJhY2UnOihfMHgxMjE1YjMsXzB4MzQ5NjAzKT0+e3ZhciBfMHg0OTA2YWE9XzB4NDU1MjcxO18weDFhZWNjMVtfMHg0OTA2YWEoMHgxZGQpXVtfMHg0OTA2YWEoMHgyM2YpXVsnbmFtZSddIT09J2Rpc2FibGVkVHJhY2UnJiZfMHgxMjg3ZTQoXzB4MTg5OGJlKF8weDQ5MDZhYSgweDE5NiksXzB4MTIxNWIzLF8weDNhOWEyZigpLF8weDU3Yzk1NyxfMHgzNDk2MDMpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MjAyNTI2PV8weDQ1NTI3MTtfMHgxYWVjYzFbXzB4MjAyNTI2KDB4MWRkKV1bXzB4MjAyNTI2KDB4MjY0KV09XzB4M2Q2MzQ0KF8weDFhZWNjMVtfMHgyMDI1MjYoMHgxZGQpXVsndGltZSddKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4M2Y3OTFiPV8weDQ1NTI3MTtfMHgxYWVjYzFbJ2NvbnNvbGUnXVtfMHgzZjc5MWIoMHgxYzkpXT1fMHgzZDVhNTAoXzB4MWFlY2MxWydjb25zb2xlJ11bXzB4M2Y3OTFiKDB4MWM5KV0pO30sJ2F1dG9Mb2cnOihfMHg1ZWQwOGMsXzB4NDdlOTBjKT0+e3ZhciBfMHgzZTZiNzI9XzB4NDU1MjcxO18weDEyODdlNChfMHgxODk4YmUoXzB4M2U2YjcyKDB4MjNmKSxfMHg0N2U5MGMsXzB4M2E5YTJmKCksXzB4NTdjOTU3LFtfMHg1ZWQwOGNdKSk7fSwnYXV0b0xvZ01hbnknOihfMHgzY2Y3YmYsXzB4NDY0YzdlKT0+e3ZhciBfMHg0ZmM2NTg9XzB4NDU1MjcxO18weDEyODdlNChfMHgxODk4YmUoXzB4NGZjNjU4KDB4MjNmKSxfMHgzY2Y3YmYsXzB4M2E5YTJmKCksXzB4NTdjOTU3LF8weDQ2NGM3ZSkpO30sJ2F1dG9UcmFjZSc6KF8weDdkOTE3ZSxfMHg1MjdlYWQpPT57dmFyIF8weDI1OGNlYz1fMHg0NTUyNzE7XzB4MTI4N2U0KF8weDE4OThiZShfMHgyNThjZWMoMHgxOTYpLF8weDUyN2VhZCxfMHgzYTlhMmYoKSxfMHg1N2M5NTcsW18weDdkOTE3ZV0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4MTlhMDBlLF8weDdjZTAzMyk9Pnt2YXIgXzB4M2FkM2UyPV8weDQ1NTI3MTtfMHgxMjg3ZTQoXzB4MTg5OGJlKF8weDNhZDNlMigweDE5NiksXzB4MTlhMDBlLF8weDNhOWEyZigpLF8weDU3Yzk1NyxfMHg3Y2UwMzMpKTt9LCdhdXRvVGltZSc6KF8weDMxMDE1YixfMHgyZDk5OTQsXzB4MzlkN2MyKT0+e18weDE0OWQwYShfMHgzOWQ3YzIpO30sJ2F1dG9UaW1lRW5kJzooXzB4M2UzM2NjLF8weDNhYTdiMSxfMHg1MGUwMmIpPT57XzB4NDRkOGNjKF8weDNhYTdiMSxfMHg1MGUwMmIpO319O2xldCBfMHgxMjg3ZTQ9VihfMHgxYWVjYzEsXzB4MTY5ZGIwLF8weDNmNzg0ZixfMHg1MDU4NjksXzB4NWFlZTYzKSxfMHg1N2M5NTc9XzB4MWFlY2MxWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ107Y2xhc3MgXzB4MzA2OTd7Y29uc3RydWN0b3IoKXt2YXIgXzB4NDM0MTI1PV8weDQ1NTI3MTt0aGlzW18weDQzNDEyNSgweDFhNyldPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1snX251bWJlclJlZ0V4cCddPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHg0MzQxMjUoMHgxZmQpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDQzNDEyNSgweDI1YyldPV8weDFhZWNjMVtfMHg0MzQxMjUoMHgxZjgpXSx0aGlzW18weDQzNDEyNSgweDFhMildPV8weDFhZWNjMVtfMHg0MzQxMjUoMHgxZDgpXSx0aGlzW18weDQzNDEyNSgweDIxYyldPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sdGhpc1tfMHg0MzQxMjUoMHgxOWIpXT1PYmplY3RbXzB4NDM0MTI1KDB4MjBlKV0sdGhpc1tfMHg0MzQxMjUoMHgyNTIpXT1fMHgxYWVjYzFbXzB4NDM0MTI1KDB4MTk3KV0sdGhpc1tfMHg0MzQxMjUoMHgxZjYpXT1SZWdFeHBbXzB4NDM0MTI1KDB4MWFjKV1bXzB4NDM0MTI1KDB4MWFkKV0sdGhpc1snX2RhdGVUb1N0cmluZyddPURhdGVbXzB4NDM0MTI1KDB4MWFjKV1bXzB4NDM0MTI1KDB4MWFkKV07fVtfMHg0NTUyNzEoMHgxZmYpXShfMHgzNTdkYTEsXzB4MTk4MGU5LF8weDE4MDYxNixfMHg1MTY2Zjcpe3ZhciBfMHg1ODExNjI9XzB4NDU1MjcxLF8weDNkMDE5NT10aGlzLF8weDFkN2NmYT1fMHgxODA2MTZbXzB4NTgxMTYyKDB4MjNkKV07ZnVuY3Rpb24gXzB4MTc1MmQxKF8weDEyMDc4OCxfMHgxYTk4Y2YsXzB4MmEyMjViKXt2YXIgXzB4NTQzMmM0PV8weDU4MTE2MjtfMHgxYTk4Y2ZbXzB4NTQzMmM0KDB4Mjc4KV09XzB4NTQzMmM0KDB4Mjc0KSxfMHgxYTk4Y2ZbXzB4NTQzMmM0KDB4MWNiKV09XzB4MTIwNzg4WydtZXNzYWdlJ10sXzB4MTU1MmRmPV8weDJhMjI1YltfMHg1NDMyYzQoMHgyNmIpXVtfMHg1NDMyYzQoMHgyMTApXSxfMHgyYTIyNWJbJ25vZGUnXVtfMHg1NDMyYzQoMHgyMTApXT1fMHgxYTk4Y2YsXzB4M2QwMTk1WydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MWE5OGNmLF8weDJhMjI1Yik7fXRyeXtfMHgxODA2MTZbXzB4NTgxMTYyKDB4MWEzKV0rKyxfMHgxODA2MTZbXzB4NTgxMTYyKDB4MjNkKV0mJl8weDE4MDYxNltfMHg1ODExNjIoMHgyMWEpXVtfMHg1ODExNjIoMHgxZDIpXShfMHgxOTgwZTkpO3ZhciBfMHgxZTAzMTksXzB4NDBlNjg5LF8weDIxY2U2OSxfMHg1OGU0MjAsXzB4YWM0N2JjPVtdLF8weDNjMTg0ND1bXSxfMHgyNGM1YmYsXzB4NTkzZmY3PXRoaXNbXzB4NTgxMTYyKDB4Mjc2KV0oXzB4MTk4MGU5KSxfMHg1NzdhN2I9XzB4NTkzZmY3PT09XzB4NTgxMTYyKDB4MWMzKSxfMHgyMWFkZWU9ITB4MSxfMHg2M2MxOTk9XzB4NTkzZmY3PT09XzB4NTgxMTYyKDB4MWVkKSxfMHg5NGU0ZTA9dGhpc1tfMHg1ODExNjIoMHgxYmYpXShfMHg1OTNmZjcpLF8weDM3MGE1Nj10aGlzW18weDU4MTE2MigweDIzNyldKF8weDU5M2ZmNyksXzB4M2FiODNhPV8weDk0ZTRlMHx8XzB4MzcwYTU2LF8weDI0OGZjOT17fSxfMHhmNTBmND0weDAsXzB4NjQ4ZDU2PSEweDEsXzB4MTU1MmRmLF8weDI3YTI0Yz0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4MTgwNjE2W18weDU4MTE2MigweDE5OSldKXtpZihfMHg1NzdhN2Ipe2lmKF8weDQwZTY4OT1fMHgxOTgwZTlbJ2xlbmd0aCddLF8weDQwZTY4OT5fMHgxODA2MTZbJ2VsZW1lbnRzJ10pe2ZvcihfMHgyMWNlNjk9MHgwLF8weDU4ZTQyMD1fMHgxODA2MTZbXzB4NTgxMTYyKDB4MWMxKV0sXzB4MWUwMzE5PV8weDIxY2U2OTtfMHgxZTAzMTk8XzB4NThlNDIwO18weDFlMDMxOSsrKV8weDNjMTg0NFtfMHg1ODExNjIoMHgxZDIpXShfMHgzZDAxOTVbXzB4NTgxMTYyKDB4MjVmKV0oXzB4YWM0N2JjLF8weDE5ODBlOSxfMHg1OTNmZjcsXzB4MWUwMzE5LF8weDE4MDYxNikpO18weDM1N2RhMVtfMHg1ODExNjIoMHgyMzIpXT0hMHgwO31lbHNle2ZvcihfMHgyMWNlNjk9MHgwLF8weDU4ZTQyMD1fMHg0MGU2ODksXzB4MWUwMzE5PV8weDIxY2U2OTtfMHgxZTAzMTk8XzB4NThlNDIwO18weDFlMDMxOSsrKV8weDNjMTg0NFsncHVzaCddKF8weDNkMDE5NVtfMHg1ODExNjIoMHgyNWYpXShfMHhhYzQ3YmMsXzB4MTk4MGU5LF8weDU5M2ZmNyxfMHgxZTAzMTksXzB4MTgwNjE2KSk7fV8weDE4MDYxNltfMHg1ODExNjIoMHgxYjApXSs9XzB4M2MxODQ0W18weDU4MTE2MigweDI1YildO31pZighKF8weDU5M2ZmNz09PV8weDU4MTE2MigweDFjYSl8fF8weDU5M2ZmNz09PV8weDU4MTE2MigweDFmOCkpJiYhXzB4OTRlNGUwJiZfMHg1OTNmZjchPT0nU3RyaW5nJyYmXzB4NTkzZmY3IT09XzB4NTgxMTYyKDB4MWY3KSYmXzB4NTkzZmY3IT09J2JpZ2ludCcpe3ZhciBfMHgyYmI1NDM9XzB4NTE2NmY3W18weDU4MTE2MigweDIwNyldfHxfMHgxODA2MTZbXzB4NTgxMTYyKDB4MjA3KV07aWYodGhpc1snX2lzU2V0J10oXzB4MTk4MGU5KT8oXzB4MWUwMzE5PTB4MCxfMHgxOTgwZTlbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHg0YjhkNjUpe3ZhciBfMHg1NGMxZjI9XzB4NTgxMTYyO2lmKF8weGY1MGY0KyssXzB4MTgwNjE2W18weDU0YzFmMigweDFiMCldKyssXzB4ZjUwZjQ+XzB4MmJiNTQzKXtfMHg2NDhkNTY9ITB4MDtyZXR1cm47fWlmKCFfMHgxODA2MTZbXzB4NTRjMWYyKDB4MWFmKV0mJl8weDE4MDYxNltfMHg1NGMxZjIoMHgyM2QpXSYmXzB4MTgwNjE2W18weDU0YzFmMigweDFiMCldPl8weDE4MDYxNltfMHg1NGMxZjIoMHgyNDUpXSl7XzB4NjQ4ZDU2PSEweDA7cmV0dXJuO31fMHgzYzE4NDRbXzB4NTRjMWYyKDB4MWQyKV0oXzB4M2QwMTk1WydfYWRkUHJvcGVydHknXShfMHhhYzQ3YmMsXzB4MTk4MGU5LF8weDU0YzFmMigweDFlOCksXzB4MWUwMzE5KyssXzB4MTgwNjE2LGZ1bmN0aW9uKF8weDJhMmY2Myl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDJhMmY2Mzt9O30oXzB4NGI4ZDY1KSkpO30pKTp0aGlzW18weDU4MTE2MigweDI0MyldKF8weDE5ODBlOSkmJl8weDE5ODBlOVtfMHg1ODExNjIoMHgxZDkpXShmdW5jdGlvbihfMHgzNzg2N2UsXzB4MTgxYjZmKXt2YXIgXzB4MTBiZGQ5PV8weDU4MTE2MjtpZihfMHhmNTBmNCsrLF8weDE4MDYxNltfMHgxMGJkZDkoMHgxYjApXSsrLF8weGY1MGY0Pl8weDJiYjU0Myl7XzB4NjQ4ZDU2PSEweDA7cmV0dXJuO31pZighXzB4MTgwNjE2W18weDEwYmRkOSgweDFhZildJiZfMHgxODA2MTZbJ2F1dG9FeHBhbmQnXSYmXzB4MTgwNjE2W18weDEwYmRkOSgweDFiMCldPl8weDE4MDYxNltfMHgxMGJkZDkoMHgyNDUpXSl7XzB4NjQ4ZDU2PSEweDA7cmV0dXJuO312YXIgXzB4NWFjZGI2PV8weDE4MWI2ZltfMHgxMGJkZDkoMHgxYWQpXSgpO18weDVhY2RiNlsnbGVuZ3RoJ10+MHg2NCYmKF8weDVhY2RiNj1fMHg1YWNkYjZbXzB4MTBiZGQ5KDB4MWJkKV0oMHgwLDB4NjQpK18weDEwYmRkOSgweDI0ZikpLF8weDNjMTg0NFsncHVzaCddKF8weDNkMDE5NVtfMHgxMGJkZDkoMHgyNWYpXShfMHhhYzQ3YmMsXzB4MTk4MGU5LF8weDEwYmRkOSgweDFhZSksXzB4NWFjZGI2LF8weDE4MDYxNixmdW5jdGlvbihfMHgyMjlkZGYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyMjlkZGY7fTt9KF8weDM3ODY3ZSkpKTt9KSwhXzB4MjFhZGVlKXt0cnl7Zm9yKF8weDI0YzViZiBpbiBfMHgxOTgwZTkpaWYoIShfMHg1NzdhN2ImJl8weDI3YTI0Y1tfMHg1ODExNjIoMHgxOTgpXShfMHgyNGM1YmYpKSYmIXRoaXNbJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4MTk4MGU5LF8weDI0YzViZixfMHgxODA2MTYpKXtpZihfMHhmNTBmNCsrLF8weDE4MDYxNlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weGY1MGY0Pl8weDJiYjU0Myl7XzB4NjQ4ZDU2PSEweDA7YnJlYWs7fWlmKCFfMHgxODA2MTZbXzB4NTgxMTYyKDB4MWFmKV0mJl8weDE4MDYxNltfMHg1ODExNjIoMHgyM2QpXSYmXzB4MTgwNjE2WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDE4MDYxNlsnYXV0b0V4cGFuZExpbWl0J10pe18weDY0OGQ1Nj0hMHgwO2JyZWFrO31fMHgzYzE4NDRbJ3B1c2gnXShfMHgzZDAxOTVbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weGFjNDdiYyxfMHgyNDhmYzksXzB4MTk4MGU5LF8weDU5M2ZmNyxfMHgyNGM1YmYsXzB4MTgwNjE2KSk7fX1jYXRjaHt9aWYoXzB4MjQ4ZmM5W18weDU4MTE2MigweDIxOSldPSEweDAsXzB4NjNjMTk5JiYoXzB4MjQ4ZmM5W18weDU4MTE2MigweDI3MCldPSEweDApLCFfMHg2NDhkNTYpe3ZhciBfMHgyNzZmMGE9W11bXzB4NTgxMTYyKDB4MjI5KV0odGhpc1tfMHg1ODExNjIoMHgxOWIpXShfMHgxOTgwZTkpKVtfMHg1ODExNjIoMHgyMjkpXSh0aGlzW18weDU4MTE2MigweDI1ZSldKF8weDE5ODBlOSkpO2ZvcihfMHgxZTAzMTk9MHgwLF8weDQwZTY4OT1fMHgyNzZmMGFbXzB4NTgxMTYyKDB4MjViKV07XzB4MWUwMzE5PF8weDQwZTY4OTtfMHgxZTAzMTkrKylpZihfMHgyNGM1YmY9XzB4Mjc2ZjBhW18weDFlMDMxOV0sIShfMHg1NzdhN2ImJl8weDI3YTI0Y1tfMHg1ODExNjIoMHgxOTgpXShfMHgyNGM1YmZbXzB4NTgxMTYyKDB4MWFkKV0oKSkpJiYhdGhpc1tfMHg1ODExNjIoMHgyNGQpXShfMHgxOTgwZTksXzB4MjRjNWJmLF8weDE4MDYxNikmJiFfMHgyNDhmYzlbXzB4NTgxMTYyKDB4MWUxKStfMHgyNGM1YmZbJ3RvU3RyaW5nJ10oKV0pe2lmKF8weGY1MGY0KyssXzB4MTgwNjE2W18weDU4MTE2MigweDFiMCldKyssXzB4ZjUwZjQ+XzB4MmJiNTQzKXtfMHg2NDhkNTY9ITB4MDticmVhazt9aWYoIV8weDE4MDYxNltfMHg1ODExNjIoMHgxYWYpXSYmXzB4MTgwNjE2W18weDU4MTE2MigweDIzZCldJiZfMHgxODA2MTZbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MTgwNjE2W18weDU4MTE2MigweDI0NSldKXtfMHg2NDhkNTY9ITB4MDticmVhazt9XzB4M2MxODQ0W18weDU4MTE2MigweDFkMildKF8weDNkMDE5NVtfMHg1ODExNjIoMHgyNWQpXShfMHhhYzQ3YmMsXzB4MjQ4ZmM5LF8weDE5ODBlOSxfMHg1OTNmZjcsXzB4MjRjNWJmLF8weDE4MDYxNikpO319fX19aWYoXzB4MzU3ZGExWyd0eXBlJ109XzB4NTkzZmY3LF8weDNhYjgzYT8oXzB4MzU3ZGExW18weDU4MTE2MigweDIzYSldPV8weDE5ODBlOVtfMHg1ODExNjIoMHgyMTcpXSgpLHRoaXNbXzB4NTgxMTYyKDB4MjZkKV0oXzB4NTkzZmY3LF8weDM1N2RhMSxfMHgxODA2MTYsXzB4NTE2NmY3KSk6XzB4NTkzZmY3PT09XzB4NTgxMTYyKDB4MjRhKT9fMHgzNTdkYTFbXzB4NTgxMTYyKDB4MjNhKV09dGhpc1tfMHg1ODExNjIoMHgxY2QpXVsnY2FsbCddKF8weDE5ODBlOSk6XzB4NTkzZmY3PT09XzB4NTgxMTYyKDB4MWFiKT9fMHgzNTdkYTFbXzB4NTgxMTYyKDB4MjNhKV09XzB4MTk4MGU5Wyd0b1N0cmluZyddKCk6XzB4NTkzZmY3PT09XzB4NTgxMTYyKDB4MTljKT9fMHgzNTdkYTFbXzB4NTgxMTYyKDB4MjNhKV09dGhpc1tfMHg1ODExNjIoMHgxZjYpXVtfMHg1ODExNjIoMHgxYTQpXShfMHgxOTgwZTkpOl8weDU5M2ZmNz09PV8weDU4MTE2MigweDFlYikmJnRoaXNbXzB4NTgxMTYyKDB4MjUyKV0/XzB4MzU3ZGExW18weDU4MTE2MigweDIzYSldPXRoaXNbXzB4NTgxMTYyKDB4MjUyKV1bJ3Byb3RvdHlwZSddW18weDU4MTE2MigweDFhZCldW18weDU4MTE2MigweDFhNCldKF8weDE5ODBlOSk6IV8weDE4MDYxNltfMHg1ODExNjIoMHgxOTkpXSYmIShfMHg1OTNmZjc9PT1fMHg1ODExNjIoMHgxY2EpfHxfMHg1OTNmZjc9PT1fMHg1ODExNjIoMHgxZjgpKSYmKGRlbGV0ZSBfMHgzNTdkYTFbXzB4NTgxMTYyKDB4MjNhKV0sXzB4MzU3ZGExW18weDU4MTE2MigweDIwMCldPSEweDApLF8weDY0OGQ1NiYmKF8weDM1N2RhMVtfMHg1ODExNjIoMHgxZWYpXT0hMHgwKSxfMHgxNTUyZGY9XzB4MTgwNjE2W18weDU4MTE2MigweDI2YildW18weDU4MTE2MigweDIxMCldLF8weDE4MDYxNlsnbm9kZSddWydjdXJyZW50J109XzB4MzU3ZGExLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgzNTdkYTEsXzB4MTgwNjE2KSxfMHgzYzE4NDRbJ2xlbmd0aCddKXtmb3IoXzB4MWUwMzE5PTB4MCxfMHg0MGU2ODk9XzB4M2MxODQ0W18weDU4MTE2MigweDI1YildO18weDFlMDMxOTxfMHg0MGU2ODk7XzB4MWUwMzE5KyspXzB4M2MxODQ0W18weDFlMDMxOV0oXzB4MWUwMzE5KTt9XzB4YWM0N2JjWydsZW5ndGgnXSYmKF8weDM1N2RhMVtfMHg1ODExNjIoMHgyMDcpXT1fMHhhYzQ3YmMpO31jYXRjaChfMHg1OWM1Y2Epe18weDE3NTJkMShfMHg1OWM1Y2EsXzB4MzU3ZGExLF8weDE4MDYxNik7fXJldHVybiB0aGlzW18weDU4MTE2MigweDI1YSldKF8weDE5ODBlOSxfMHgzNTdkYTEpLHRoaXNbXzB4NTgxMTYyKDB4MWI2KV0oXzB4MzU3ZGExLF8weDE4MDYxNiksXzB4MTgwNjE2Wydub2RlJ11bJ2N1cnJlbnQnXT1fMHgxNTUyZGYsXzB4MTgwNjE2W18weDU4MTE2MigweDFhMyldLS0sXzB4MTgwNjE2W18weDU4MTE2MigweDIzZCldPV8weDFkN2NmYSxfMHgxODA2MTZbXzB4NTgxMTYyKDB4MjNkKV0mJl8weDE4MDYxNltfMHg1ODExNjIoMHgyMWEpXVsncG9wJ10oKSxfMHgzNTdkYTE7fVtfMHg0NTUyNzEoMHgyNWUpXShfMHgzNWRiMmYpe3ZhciBfMHgzNmYxMDU9XzB4NDU1MjcxO3JldHVybiBPYmplY3RbXzB4MzZmMTA1KDB4MWExKV0/T2JqZWN0W18weDM2ZjEwNSgweDFhMSldKF8weDM1ZGIyZik6W107fVsnX2lzU2V0J10oXzB4MzE1ZWQwKXt2YXIgXzB4MzBmOWMzPV8weDQ1NTI3MTtyZXR1cm4hIShfMHgzMTVlZDAmJl8weDFhZWNjMVsnU2V0J10mJnRoaXNbXzB4MzBmOWMzKDB4MjNjKV0oXzB4MzE1ZWQwKT09PSdbb2JqZWN0XFxcXHgyMFNldF0nJiZfMHgzMTVlZDBbXzB4MzBmOWMzKDB4MWQ5KV0pO31bXzB4NDU1MjcxKDB4MjRkKV0oXzB4MmZmZjNjLF8weDQyYzJhOCxfMHhlYzUzY2Ipe3ZhciBfMHg1MDc0MmE9XzB4NDU1MjcxO3JldHVybiBfMHhlYzUzY2JbJ25vRnVuY3Rpb25zJ10/dHlwZW9mIF8weDJmZmYzY1tfMHg0MmMyYThdPT1fMHg1MDc0MmEoMHgxZWQpOiEweDE7fVtfMHg0NTUyNzEoMHgyNzYpXShfMHhjMzRjN2Mpe3ZhciBfMHg4N2IyNDg9XzB4NDU1MjcxLF8weDFmZmUxOT0nJztyZXR1cm4gXzB4MWZmZTE5PXR5cGVvZiBfMHhjMzRjN2MsXzB4MWZmZTE5PT09J29iamVjdCc/dGhpc1tfMHg4N2IyNDgoMHgyM2MpXShfMHhjMzRjN2MpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJz9fMHgxZmZlMTk9XzB4ODdiMjQ4KDB4MWMzKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHhjMzRjN2MpPT09XzB4ODdiMjQ4KDB4MWI5KT9fMHgxZmZlMTk9XzB4ODdiMjQ4KDB4MjRhKTp0aGlzW18weDg3YjI0OCgweDIzYyldKF8weGMzNGM3Yyk9PT1fMHg4N2IyNDgoMHgxZmEpP18weDFmZmUxOT1fMHg4N2IyNDgoMHgxYWIpOl8weGMzNGM3Yz09PW51bGw/XzB4MWZmZTE5PSdudWxsJzpfMHhjMzRjN2NbXzB4ODdiMjQ4KDB4MjQyKV0mJihfMHgxZmZlMTk9XzB4YzM0YzdjW18weDg3YjI0OCgweDI0MildW18weDg3YjI0OCgweDIyNyldfHxfMHgxZmZlMTkpOl8weDFmZmUxOT09PV8weDg3YjI0OCgweDFmOCkmJnRoaXNbXzB4ODdiMjQ4KDB4MWEyKV0mJl8weGMzNGM3YyBpbnN0YW5jZW9mIHRoaXNbXzB4ODdiMjQ4KDB4MWEyKV0mJihfMHgxZmZlMTk9J0hUTUxBbGxDb2xsZWN0aW9uJyksXzB4MWZmZTE5O31bXzB4NDU1MjcxKDB4MjNjKV0oXzB4NDk0NjI2KXt2YXIgXzB4OWNlYmRlPV8weDQ1NTI3MTtyZXR1cm4gT2JqZWN0W18weDljZWJkZSgweDFhYyldWyd0b1N0cmluZyddW18weDljZWJkZSgweDFhNCldKF8weDQ5NDYyNik7fVtfMHg0NTUyNzEoMHgxYmYpXShfMHgyZWE3OGQpe3ZhciBfMHg1Y2M0ZGI9XzB4NDU1MjcxO3JldHVybiBfMHgyZWE3OGQ9PT0nYm9vbGVhbid8fF8weDJlYTc4ZD09PV8weDVjYzRkYigweDFhMCl8fF8weDJlYTc4ZD09PV8weDVjYzRkYigweDE5Zik7fVtfMHg0NTUyNzEoMHgyMzcpXShfMHgyMzJiMjYpe3ZhciBfMHg1YWQzMmU9XzB4NDU1MjcxO3JldHVybiBfMHgyMzJiMjY9PT0nQm9vbGVhbid8fF8weDIzMmIyNj09PV8weDVhZDMyZSgweDI2Myl8fF8weDIzMmIyNj09PV8weDVhZDMyZSgweDFmNCk7fVtfMHg0NTUyNzEoMHgyNWYpXShfMHgzNzU0MmMsXzB4M2FlN2FmLF8weDQ5NWVkMixfMHg0NDRiN2EsXzB4NGM4MDUwLF8weDRkODdkOSl7dmFyIF8weDMwMjY3Yj10aGlzO3JldHVybiBmdW5jdGlvbihfMHgzYzMyYWEpe3ZhciBfMHgyYmZlYTg9XzB4NDEzZixfMHgzYzg0YmE9XzB4NGM4MDUwW18weDJiZmVhOCgweDI2YildWydjdXJyZW50J10sXzB4MWM1ZDgzPV8weDRjODA1MFtfMHgyYmZlYTgoMHgyNmIpXVtfMHgyYmZlYTgoMHgyMWYpXSxfMHgxZjkyZjQ9XzB4NGM4MDUwWydub2RlJ11bXzB4MmJmZWE4KDB4MWRhKV07XzB4NGM4MDUwW18weDJiZmVhOCgweDI2YildW18weDJiZmVhOCgweDFkYSldPV8weDNjODRiYSxfMHg0YzgwNTBbXzB4MmJmZWE4KDB4MjZiKV1bJ2luZGV4J109dHlwZW9mIF8weDQ0NGI3YT09XzB4MmJmZWE4KDB4MTlmKT9fMHg0NDRiN2E6XzB4M2MzMmFhLF8weDM3NTQyY1tfMHgyYmZlYTgoMHgxZDIpXShfMHgzMDI2N2JbXzB4MmJmZWE4KDB4MWI1KV0oXzB4M2FlN2FmLF8weDQ5NWVkMixfMHg0NDRiN2EsXzB4NGM4MDUwLF8weDRkODdkOSkpLF8weDRjODA1MFtfMHgyYmZlYTgoMHgyNmIpXVtfMHgyYmZlYTgoMHgxZGEpXT1fMHgxZjkyZjQsXzB4NGM4MDUwW18weDJiZmVhOCgweDI2YildW18weDJiZmVhOCgweDIxZildPV8weDFjNWQ4Mzt9O31bJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDRkZWJkNCxfMHgxZDg4YmIsXzB4NGNlNTg4LF8weDE5MjY3YyxfMHgyYTUzYzEsXzB4NDA5NGQ3LF8weDEzYTE2Yyl7dmFyIF8weDE3NjFmYj1fMHg0NTUyNzEsXzB4MTgwNzYzPXRoaXM7cmV0dXJuIF8weDFkODhiYltfMHgxNzYxZmIoMHgxZTEpK18weDJhNTNjMVtfMHgxNzYxZmIoMHgxYWQpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDEzZmY2MCl7dmFyIF8weDVkZTRmYT1fMHgxNzYxZmIsXzB4MzJkNjdhPV8weDQwOTRkN1snbm9kZSddW18weDVkZTRmYSgweDIxMCldLF8weDI1MjZkNj1fMHg0MDk0ZDdbXzB4NWRlNGZhKDB4MjZiKV1bJ2luZGV4J10sXzB4MjgzNzFkPV8weDQwOTRkN1tfMHg1ZGU0ZmEoMHgyNmIpXVtfMHg1ZGU0ZmEoMHgxZGEpXTtfMHg0MDk0ZDdbXzB4NWRlNGZhKDB4MjZiKV1bXzB4NWRlNGZhKDB4MWRhKV09XzB4MzJkNjdhLF8weDQwOTRkN1snbm9kZSddW18weDVkZTRmYSgweDIxZildPV8weDEzZmY2MCxfMHg0ZGViZDRbXzB4NWRlNGZhKDB4MWQyKV0oXzB4MTgwNzYzW18weDVkZTRmYSgweDFiNSldKF8weDRjZTU4OCxfMHgxOTI2N2MsXzB4MmE1M2MxLF8weDQwOTRkNyxfMHgxM2ExNmMpKSxfMHg0MDk0ZDdbJ25vZGUnXVtfMHg1ZGU0ZmEoMHgxZGEpXT1fMHgyODM3MWQsXzB4NDA5NGQ3W18weDVkZTRmYSgweDI2YildWydpbmRleCddPV8weDI1MjZkNjt9O31bXzB4NDU1MjcxKDB4MWI1KV0oXzB4NDNlODNiLF8weDFkYmYyMyxfMHgyZjdmNWUsXzB4MzgyN2MzLF8weDM2ZGUwZil7dmFyIF8weDMzN2EyOT1fMHg0NTUyNzEsXzB4NTQ5ZDFlPXRoaXM7XzB4MzZkZTBmfHwoXzB4MzZkZTBmPWZ1bmN0aW9uKF8weDJiMGFjOCxfMHgyYTZmOGIpe3JldHVybiBfMHgyYjBhYzhbXzB4MmE2ZjhiXTt9KTt2YXIgXzB4NWI4N2E4PV8weDJmN2Y1ZVtfMHgzMzdhMjkoMHgxYWQpXSgpLF8weDNiZDVlZT1fMHgzODI3YzNbXzB4MzM3YTI5KDB4MWUwKV18fHt9LF8weDNkMzZmMz1fMHgzODI3YzNbXzB4MzM3YTI5KDB4MTk5KV0sXzB4MWMwMThiPV8weDM4MjdjM1tfMHgzMzdhMjkoMHgxYWYpXTt0cnl7dmFyIF8weDU1Y2JmMT10aGlzW18weDMzN2EyOSgweDI0MyldKF8weDQzZTgzYiksXzB4MTI3NWQ1PV8weDViODdhODtfMHg1NWNiZjEmJl8weDEyNzVkNVsweDBdPT09J1xcXFx4MjcnJiYoXzB4MTI3NWQ1PV8weDEyNzVkNVtfMHgzMzdhMjkoMHgxOWUpXSgweDEsXzB4MTI3NWQ1W18weDMzN2EyOSgweDI1YildLTB4MikpO3ZhciBfMHgzYTYwZjQ9XzB4MzgyN2MzW18weDMzN2EyOSgweDFlMCldPV8weDNiZDVlZVsnX3BfJytfMHgxMjc1ZDVdO18weDNhNjBmNCYmKF8weDM4MjdjM1tfMHgzMzdhMjkoMHgxOTkpXT1fMHgzODI3YzNbXzB4MzM3YTI5KDB4MTk5KV0rMHgxKSxfMHgzODI3YzNbXzB4MzM3YTI5KDB4MWFmKV09ISFfMHgzYTYwZjQ7dmFyIF8weDJlNjc1Nz10eXBlb2YgXzB4MmY3ZjVlPT1fMHgzMzdhMjkoMHgxZWIpLF8weDJkMmY3OT17J25hbWUnOl8weDJlNjc1N3x8XzB4NTVjYmYxP18weDViODdhODp0aGlzW18weDMzN2EyOSgweDFkNyldKF8weDViODdhOCl9O2lmKF8weDJlNjc1NyYmKF8weDJkMmY3OVtfMHgzMzdhMjkoMHgxZWIpXT0hMHgwKSwhKF8weDFkYmYyMz09PV8weDMzN2EyOSgweDFjMyl8fF8weDFkYmYyMz09PV8weDMzN2EyOSgweDI3NykpKXt2YXIgXzB4NGQ3MTQyPXRoaXNbXzB4MzM3YTI5KDB4MjFjKV0oXzB4NDNlODNiLF8weDJmN2Y1ZSk7aWYoXzB4NGQ3MTQyJiYoXzB4NGQ3MTQyW18weDMzN2EyOSgweDIwOCldJiYoXzB4MmQyZjc5W18weDMzN2EyOSgweDFlYyldPSEweDApLF8weDRkNzE0MltfMHgzMzdhMjkoMHgyMzMpXSYmIV8weDNhNjBmNCYmIV8weDM4MjdjM1sncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDJkMmY3OVtfMHgzMzdhMjkoMHgyMDEpXT0hMHgwLHRoaXNbXzB4MzM3YTI5KDB4MWM0KV0oXzB4MmQyZjc5LF8weDM4MjdjMyksXzB4MmQyZjc5O312YXIgXzB4MWYwNTAyO3RyeXtfMHgxZjA1MDI9XzB4MzZkZTBmKF8weDQzZTgzYixfMHgyZjdmNWUpO31jYXRjaChfMHgyMTVjMjkpe3JldHVybiBfMHgyZDJmNzk9eyduYW1lJzpfMHg1Yjg3YTgsJ3R5cGUnOl8weDMzN2EyOSgweDI3NCksJ2Vycm9yJzpfMHgyMTVjMjlbXzB4MzM3YTI5KDB4MWJiKV19LHRoaXNbXzB4MzM3YTI5KDB4MWM0KV0oXzB4MmQyZjc5LF8weDM4MjdjMyksXzB4MmQyZjc5O312YXIgXzB4ZWZkZmM9dGhpc1tfMHgzMzdhMjkoMHgyNzYpXShfMHgxZjA1MDIpLF8weDEzYzQyZj10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4ZWZkZmMpO2lmKF8weDJkMmY3OVsndHlwZSddPV8weGVmZGZjLF8weDEzYzQyZil0aGlzW18weDMzN2EyOSgweDFjNCldKF8weDJkMmY3OSxfMHgzODI3YzMsXzB4MWYwNTAyLGZ1bmN0aW9uKCl7dmFyIF8weDM4ZTBlZD1fMHgzMzdhMjk7XzB4MmQyZjc5W18weDM4ZTBlZCgweDIzYSldPV8weDFmMDUwMltfMHgzOGUwZWQoMHgyMTcpXSgpLCFfMHgzYTYwZjQmJl8weDU0OWQxZVtfMHgzOGUwZWQoMHgyNmQpXShfMHhlZmRmYyxfMHgyZDJmNzksXzB4MzgyN2MzLHt9KTt9KTtlbHNle3ZhciBfMHgyODAyY2Q9XzB4MzgyN2MzW18weDMzN2EyOSgweDIzZCldJiZfMHgzODI3YzNbXzB4MzM3YTI5KDB4MWEzKV08XzB4MzgyN2MzW18weDMzN2EyOSgweDI2YyldJiZfMHgzODI3YzNbXzB4MzM3YTI5KDB4MjFhKV1bXzB4MzM3YTI5KDB4MWYyKV0oXzB4MWYwNTAyKTwweDAmJl8weGVmZGZjIT09J2Z1bmN0aW9uJyYmXzB4MzgyN2MzW18weDMzN2EyOSgweDFiMCldPF8weDM4MjdjM1tfMHgzMzdhMjkoMHgyNDUpXTtfMHgyODAyY2R8fF8weDM4MjdjM1snbGV2ZWwnXTxfMHgzZDM2ZjN8fF8weDNhNjBmND8odGhpc1tfMHgzMzdhMjkoMHgxZmYpXShfMHgyZDJmNzksXzB4MWYwNTAyLF8weDM4MjdjMyxfMHgzYTYwZjR8fHt9KSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4MWYwNTAyLF8weDJkMmY3OSkpOnRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgyZDJmNzksXzB4MzgyN2MzLF8weDFmMDUwMixmdW5jdGlvbigpe3ZhciBfMHg0M2U5Zjc9XzB4MzM3YTI5O18weGVmZGZjPT09XzB4NDNlOWY3KDB4MWNhKXx8XzB4ZWZkZmM9PT1fMHg0M2U5ZjcoMHgxZjgpfHwoZGVsZXRlIF8weDJkMmY3OVtfMHg0M2U5ZjcoMHgyM2EpXSxfMHgyZDJmNzlbJ2NhcHBlZCddPSEweDApO30pO31yZXR1cm4gXzB4MmQyZjc5O31maW5hbGx5e18weDM4MjdjM1tfMHgzMzdhMjkoMHgxZTApXT1fMHgzYmQ1ZWUsXzB4MzgyN2MzWydkZXB0aCddPV8weDNkMzZmMyxfMHgzODI3YzNbXzB4MzM3YTI5KDB4MWFmKV09XzB4MWMwMThiO319W18weDQ1NTI3MSgweDI2ZCldKF8weDM2MDY4MSxfMHgxMmQ1ZjMsXzB4NWVjOTgxLF8weDM2Y2U1Mil7dmFyIF8weDk1NDk0OT1fMHg0NTUyNzEsXzB4OTM4YWM0PV8weDM2Y2U1Mlsnc3RyTGVuZ3RoJ118fF8weDVlYzk4MVsnc3RyTGVuZ3RoJ107aWYoKF8weDM2MDY4MT09PV8weDk1NDk0OSgweDFhMCl8fF8weDM2MDY4MT09PSdTdHJpbmcnKSYmXzB4MTJkNWYzW18weDk1NDk0OSgweDIzYSldKXtsZXQgXzB4M2M2YjgzPV8weDEyZDVmM1sndmFsdWUnXVtfMHg5NTQ5NDkoMHgyNWIpXTtfMHg1ZWM5ODFbXzB4OTU0OTQ5KDB4MWMyKV0rPV8weDNjNmI4MyxfMHg1ZWM5ODFbXzB4OTU0OTQ5KDB4MWMyKV0+XzB4NWVjOTgxW18weDk1NDk0OSgweDFmMCldPyhfMHgxMmQ1ZjNbXzB4OTU0OTQ5KDB4MjAwKV09JycsZGVsZXRlIF8weDEyZDVmM1tfMHg5NTQ5NDkoMHgyM2EpXSk6XzB4M2M2YjgzPl8weDkzOGFjNCYmKF8weDEyZDVmM1tfMHg5NTQ5NDkoMHgyMDApXT1fMHgxMmQ1ZjNbXzB4OTU0OTQ5KDB4MjNhKV1bXzB4OTU0OTQ5KDB4MTllKV0oMHgwLF8weDkzOGFjNCksZGVsZXRlIF8weDEyZDVmM1sndmFsdWUnXSk7fX1bXzB4NDU1MjcxKDB4MjQzKV0oXzB4NTRkNWE5KXt2YXIgXzB4MTk1M2MzPV8weDQ1NTI3MTtyZXR1cm4hIShfMHg1NGQ1YTkmJl8weDFhZWNjMVsnTWFwJ10mJnRoaXNbXzB4MTk1M2MzKDB4MjNjKV0oXzB4NTRkNWE5KT09PSdbb2JqZWN0XFxcXHgyME1hcF0nJiZfMHg1NGQ1YTlbXzB4MTk1M2MzKDB4MWQ5KV0pO31bJ19wcm9wZXJ0eU5hbWUnXShfMHgzZDMzNjYpe3ZhciBfMHg0MGYzMTU9XzB4NDU1MjcxO2lmKF8weDNkMzM2NltfMHg0MGYzMTUoMHgyNTEpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4M2QzMzY2O3ZhciBfMHgxY2RiOTE7dHJ5e18weDFjZGI5MT1KU09OW18weDQwZjMxNSgweDIyZSldKCcnK18weDNkMzM2Nik7fWNhdGNoe18weDFjZGI5MT0nXFxcXHgyMicrdGhpc1tfMHg0MGYzMTUoMHgyM2MpXShfMHgzZDMzNjYpKydcXFxceDIyJzt9cmV0dXJuIF8weDFjZGI5MVtfMHg0MGYzMTUoMHgyNTEpXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDFjZGI5MT1fMHgxY2RiOTFbXzB4NDBmMzE1KDB4MTllKV0oMHgxLF8weDFjZGI5MVtfMHg0MGYzMTUoMHgyNWIpXS0weDIpOl8weDFjZGI5MT1fMHgxY2RiOTFbXzB4NDBmMzE1KDB4MWQ1KV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHg0MGYzMTUoMHgxZDUpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHg0MGYzMTUoMHgxZDUpXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4MWNkYjkxO31bXzB4NDU1MjcxKDB4MWM0KV0oXzB4ZmNmMGNhLF8weDMyMTNmYSxfMHg0M2NiNmEsXzB4NTlkN2JjKXt2YXIgXzB4MTE4MjZmPV8weDQ1NTI3MTt0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4ZmNmMGNhLF8weDMyMTNmYSksXzB4NTlkN2JjJiZfMHg1OWQ3YmMoKSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4NDNjYjZhLF8weGZjZjBjYSksdGhpc1tfMHgxMTgyNmYoMHgxYjYpXShfMHhmY2YwY2EsXzB4MzIxM2ZhKTt9W18weDQ1NTI3MSgweDE5YSldKF8weDhiZTY5MSxfMHg0MzJlMjQpe3ZhciBfMHg1YTBmN2Q9XzB4NDU1MjcxO3RoaXNbXzB4NWEwZjdkKDB4MWJjKV0oXzB4OGJlNjkxLF8weDQzMmUyNCksdGhpc1tfMHg1YTBmN2QoMHgyNDYpXShfMHg4YmU2OTEsXzB4NDMyZTI0KSx0aGlzW18weDVhMGY3ZCgweDFhNSldKF8weDhiZTY5MSxfMHg0MzJlMjQpLHRoaXNbXzB4NWEwZjdkKDB4MWQwKV0oXzB4OGJlNjkxLF8weDQzMmUyNCk7fVtfMHg0NTUyNzEoMHgxYmMpXShfMHgyMTllMjMsXzB4Yjg0NWMzKXt9W18weDQ1NTI3MSgweDI0NildKF8weDJhMDI0OCxfMHg3MGVjZDMpe31bXzB4NDU1MjcxKDB4MjRjKV0oXzB4MzdkNmRkLF8weDI1MjBmZSl7fVtfMHg0NTUyNzEoMHgyMzUpXShfMHg1NmMyM2Epe3ZhciBfMHgyMzY0YWM9XzB4NDU1MjcxO3JldHVybiBfMHg1NmMyM2E9PT10aGlzW18weDIzNjRhYygweDI1YyldO31bJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDM0YWYxYyxfMHgzNzdjZmUpe3ZhciBfMHg0OGMxZTU9XzB4NDU1MjcxO3RoaXNbXzB4NDhjMWU1KDB4MjRjKV0oXzB4MzRhZjFjLF8weDM3N2NmZSksdGhpc1tfMHg0OGMxZTUoMHgyMTIpXShfMHgzNGFmMWMpLF8weDM3N2NmZVtfMHg0OGMxZTUoMHgxZTkpXSYmdGhpc1tfMHg0OGMxZTUoMHgxYzYpXShfMHgzNGFmMWMpLHRoaXNbXzB4NDhjMWU1KDB4MjFlKV0oXzB4MzRhZjFjLF8weDM3N2NmZSksdGhpc1tfMHg0OGMxZTUoMHgyNDgpXShfMHgzNGFmMWMsXzB4Mzc3Y2ZlKSx0aGlzW18weDQ4YzFlNSgweDI2NildKF8weDM0YWYxYyk7fVsnX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDE3MzlmMSxfMHgzNjQ3NDgpe3ZhciBfMHg0NThiNmU9XzB4NDU1MjcxO2xldCBfMHg0MGU4OGE7dHJ5e18weDFhZWNjMVsnY29uc29sZSddJiYoXzB4NDBlODhhPV8weDFhZWNjMVtfMHg0NThiNmUoMHgxZGQpXVsnZXJyb3InXSxfMHgxYWVjYzFbXzB4NDU4YjZlKDB4MWRkKV1bXzB4NDU4YjZlKDB4MWNiKV09ZnVuY3Rpb24oKXt9KSxfMHgxNzM5ZjEmJnR5cGVvZiBfMHgxNzM5ZjFbXzB4NDU4YjZlKDB4MjViKV09PV8weDQ1OGI2ZSgweDE5ZikmJihfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4MjViKV09XzB4MTczOWYxW18weDQ1OGI2ZSgweDI1YildKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4NDBlODhhJiYoXzB4MWFlY2MxWydjb25zb2xlJ11bXzB4NDU4YjZlKDB4MWNiKV09XzB4NDBlODhhKTt9aWYoXzB4MzY0NzQ4W18weDQ1OGI2ZSgweDI3OCldPT09XzB4NDU4YjZlKDB4MTlmKXx8XzB4MzY0NzQ4W18weDQ1OGI2ZSgweDI3OCldPT09J051bWJlcicpe2lmKGlzTmFOKF8weDM2NDc0OFtfMHg0NThiNmUoMHgyM2EpXSkpXzB4MzY0NzQ4WyduYW4nXT0hMHgwLGRlbGV0ZSBfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4MjNhKV07ZWxzZSBzd2l0Y2goXzB4MzY0NzQ4W18weDQ1OGI2ZSgweDIzYSldKXtjYXNlIE51bWJlcltfMHg0NThiNmUoMHgyNTcpXTpfMHgzNjQ3NDhbJ3Bvc2l0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4MjNhKV07YnJlYWs7Y2FzZSBOdW1iZXJbXzB4NDU4YjZlKDB4MjNlKV06XzB4MzY0NzQ4W18weDQ1OGI2ZSgweDIyMCldPSEweDAsZGVsZXRlIF8weDM2NDc0OFtfMHg0NThiNmUoMHgyM2EpXTticmVhaztjYXNlIDB4MDp0aGlzW18weDQ1OGI2ZSgweDFkYildKF8weDM2NDc0OFsndmFsdWUnXSkmJihfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4MWI0KV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDM2NDc0OFtfMHg0NThiNmUoMHgyNzgpXT09PV8weDQ1OGI2ZSgweDFlZCkmJnR5cGVvZiBfMHgxNzM5ZjFbXzB4NDU4YjZlKDB4MjI3KV09PV8weDQ1OGI2ZSgweDFhMCkmJl8weDE3MzlmMVtfMHg0NThiNmUoMHgyMjcpXSYmXzB4MzY0NzQ4WyduYW1lJ10mJl8weDE3MzlmMVsnbmFtZSddIT09XzB4MzY0NzQ4W18weDQ1OGI2ZSgweDIyNyldJiYoXzB4MzY0NzQ4W18weDQ1OGI2ZSgweDI1NildPV8weDE3MzlmMVtfMHg0NThiNmUoMHgyMjcpXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4ZTYyZjAyKXt2YXIgXzB4MzFkNDAzPV8weDQ1NTI3MTtyZXR1cm4gMHgxL18weGU2MmYwMj09PU51bWJlcltfMHgzMWQ0MDMoMHgyM2UpXTt9W18weDQ1NTI3MSgweDFjNildKF8weDE3ZjJiZil7dmFyIF8weGFlOGEzYz1fMHg0NTUyNzE7IV8weDE3ZjJiZltfMHhhZThhM2MoMHgyMDcpXXx8IV8weDE3ZjJiZltfMHhhZThhM2MoMHgyMDcpXVsnbGVuZ3RoJ118fF8weDE3ZjJiZltfMHhhZThhM2MoMHgyNzgpXT09PV8weGFlOGEzYygweDFjMyl8fF8weDE3ZjJiZlsndHlwZSddPT09J01hcCd8fF8weDE3ZjJiZlsndHlwZSddPT09XzB4YWU4YTNjKDB4MWU4KXx8XzB4MTdmMmJmW18weGFlOGEzYygweDIwNyldW18weGFlOGEzYygweDI2OSldKGZ1bmN0aW9uKF8weDE1ZTBiMyxfMHg0ZDY3NmIpe3ZhciBfMHgyM2FlZmM9XzB4YWU4YTNjLF8weDcyMWQyMz1fMHgxNWUwYjNbXzB4MjNhZWZjKDB4MjI3KV1bXzB4MjNhZWZjKDB4MjJmKV0oKSxfMHgxOGQxZjc9XzB4NGQ2NzZiW18weDIzYWVmYygweDIyNyldW18weDIzYWVmYygweDIyZildKCk7cmV0dXJuIF8weDcyMWQyMzxfMHgxOGQxZjc/LTB4MTpfMHg3MjFkMjM+XzB4MThkMWY3PzB4MToweDA7fSk7fVtfMHg0NTUyNzEoMHgyMWUpXShfMHgzOTEwYjUsXzB4M2MzNTM4KXt2YXIgXzB4MjRlOTA1PV8weDQ1NTI3MTtpZighKF8weDNjMzUzOFtfMHgyNGU5MDUoMHgxY2UpXXx8IV8weDM5MTBiNVtfMHgyNGU5MDUoMHgyMDcpXXx8IV8weDM5MTBiNVsncHJvcHMnXVsnbGVuZ3RoJ10pKXtmb3IodmFyIF8weDQ3YmU0Mz1bXSxfMHgyMWI3YmI9W10sXzB4ZmI1OGUwPTB4MCxfMHgzMmIxNjY9XzB4MzkxMGI1W18weDI0ZTkwNSgweDIwNyldW18weDI0ZTkwNSgweDI1YildO18weGZiNThlMDxfMHgzMmIxNjY7XzB4ZmI1OGUwKyspe3ZhciBfMHg0YTJmNDI9XzB4MzkxMGI1W18weDI0ZTkwNSgweDIwNyldW18weGZiNThlMF07XzB4NGEyZjQyW18weDI0ZTkwNSgweDI3OCldPT09XzB4MjRlOTA1KDB4MWVkKT9fMHg0N2JlNDNbXzB4MjRlOTA1KDB4MWQyKV0oXzB4NGEyZjQyKTpfMHgyMWI3YmJbJ3B1c2gnXShfMHg0YTJmNDIpO31pZighKCFfMHgyMWI3YmJbXzB4MjRlOTA1KDB4MjViKV18fF8weDQ3YmU0M1tfMHgyNGU5MDUoMHgyNWIpXTw9MHgxKSl7XzB4MzkxMGI1W18weDI0ZTkwNSgweDIwNyldPV8weDIxYjdiYjt2YXIgXzB4NWI0NDI5PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDQ3YmU0M307dGhpc1tfMHgyNGU5MDUoMHgxYmMpXShfMHg1YjQ0MjksXzB4M2MzNTM4KSx0aGlzWydfc2V0Tm9kZUxhYmVsJ10oXzB4NWI0NDI5LF8weDNjMzUzOCksdGhpc1tfMHgyNGU5MDUoMHgyMTIpXShfMHg1YjQ0MjkpLHRoaXNbXzB4MjRlOTA1KDB4MWQwKV0oXzB4NWI0NDI5LF8weDNjMzUzOCksXzB4NWI0NDI5WydpZCddKz0nXFxcXHgyMGYnLF8weDM5MTBiNVtfMHgyNGU5MDUoMHgyMDcpXVtfMHgyNGU5MDUoMHgyMTgpXShfMHg1YjQ0MjkpO319fVtfMHg0NTUyNzEoMHgyNDgpXShfMHg1ODJlNjAsXzB4MTY5NjdmKXt9W18weDQ1NTI3MSgweDIxMildKF8weDQxNTgwZCl7fVsnX2lzQXJyYXknXShfMHgzN2I0YzMpe3ZhciBfMHgxOTVkZjM9XzB4NDU1MjcxO3JldHVybiBBcnJheVtfMHgxOTVkZjMoMHgxYjMpXShfMHgzN2I0YzMpfHx0eXBlb2YgXzB4MzdiNGMzPT0nb2JqZWN0JyYmdGhpc1tfMHgxOTVkZjMoMHgyM2MpXShfMHgzN2I0YzMpPT09XzB4MTk1ZGYzKDB4MjZmKTt9W18weDQ1NTI3MSgweDFkMCldKF8weDVlNmMwNixfMHg1MjhkYWIpe31bXzB4NDU1MjcxKDB4MjY2KV0oXzB4MjU2ZTJiKXt2YXIgXzB4MTI2NmFkPV8weDQ1NTI3MTtkZWxldGUgXzB4MjU2ZTJiW18weDEyNjZhZCgweDI1MyldLGRlbGV0ZSBfMHgyNTZlMmJbXzB4MTI2NmFkKDB4MTlkKV0sZGVsZXRlIF8weDI1NmUyYlsnX2hhc01hcE9uSXRzUGF0aCddO31bXzB4NDU1MjcxKDB4MWE1KV0oXzB4M2I2MGJkLF8weDM1ZTdkOSl7fVtfMHg0NTUyNzEoMHgyNzMpXShfMHg1ZWM1OTgpe3ZhciBfMHg1NjhkY2I9XzB4NDU1MjcxO3JldHVybiBfMHg1ZWM1OTg/XzB4NWVjNTk4W18weDU2OGRjYigweDI1MSldKHRoaXNbXzB4NTY4ZGNiKDB4MjA5KV0pPydbJytfMHg1ZWM1OTgrJ10nOl8weDVlYzU5OFtfMHg1NjhkY2IoMHgyNTEpXSh0aGlzWydfa2V5U3RyUmVnRXhwJ10pPycuJytfMHg1ZWM1OTg6XzB4NWVjNTk4W18weDU2OGRjYigweDI1MSldKHRoaXNbJ19xdW90ZWRSZWdFeHAnXSk/J1snK18weDVlYzU5OCsnXSc6J1tcXFxceDI3JytfMHg1ZWM1OTgrJ1xcXFx4MjddJzonJzt9fWxldCBfMHgzOGRjNjg9bmV3IF8weDMwNjk3KCk7ZnVuY3Rpb24gXzB4MTg5OGJlKF8weDRkYzNhZCxfMHg0YzU1NTYsXzB4MTkyMWNmLF8weDI2ODc5MCxfMHg0ZjkyMyxfMHg1Y2U5ZTApe3ZhciBfMHg3NTQwMWI9XzB4NDU1MjcxO2xldCBfMHg1Nzg3MWIsXzB4MWIwODE1O3RyeXtfMHgxYjA4MTU9XzB4MmNiMzFkKCksXzB4NTc4NzFiPV8weDE4YmU2ZVtfMHg0YzU1NTZdLCFfMHg1Nzg3MWJ8fF8weDFiMDgxNS1fMHg1Nzg3MWJbJ3RzJ10+MHgxZjQmJl8weDU3ODcxYltfMHg3NTQwMWIoMHgyMzEpXSYmXzB4NTc4NzFiW18weDc1NDAxYigweDI2NCldL18weDU3ODcxYlsnY291bnQnXTwweDY0PyhfMHgxOGJlNmVbXzB4NGM1NTU2XT1fMHg1Nzg3MWI9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHgxYjA4MTV9LF8weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXT17fSk6XzB4MWIwODE1LV8weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXVsndHMnXT4weDMyJiZfMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV1bJ2NvdW50J10mJl8weDE4YmU2ZVsnaGl0cyddWyd0aW1lJ10vXzB4MThiZTZlW18weDc1NDAxYigweDFlNCldW18weDc1NDAxYigweDIzMSldPDB4NjQmJihfMHgxOGJlNmVbJ2hpdHMnXT17fSk7bGV0IF8weDRiOWE1OD1bXSxfMHg0MzMyODc9XzB4NTc4NzFiWydyZWR1Y2VMaW1pdHMnXXx8XzB4MThiZTZlW18weDc1NDAxYigweDFlNCldW18weDc1NDAxYigweDIwYyldP18weDM5M2M3MDpfMHg1ODlmZjQsXzB4MWEwM2Y0PV8weDExOTVkYT0+e3ZhciBfMHgzNzc0YmU9XzB4NzU0MDFiO2xldCBfMHg1MTIzZTY9e307cmV0dXJuIF8weDUxMjNlNlsncHJvcHMnXT1fMHgxMTk1ZGFbXzB4Mzc3NGJlKDB4MjA3KV0sXzB4NTEyM2U2W18weDM3NzRiZSgweDFjMSldPV8weDExOTVkYVsnZWxlbWVudHMnXSxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MjExKV09XzB4MTE5NWRhWydzdHJMZW5ndGgnXSxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MWYwKV09XzB4MTE5NWRhW18weDM3NzRiZSgweDFmMCldLF8weDUxMjNlNlsnYXV0b0V4cGFuZExpbWl0J109XzB4MTE5NWRhW18weDM3NzRiZSgweDI0NSldLF8weDUxMjNlNlsnYXV0b0V4cGFuZE1heERlcHRoJ109XzB4MTE5NWRhWydhdXRvRXhwYW5kTWF4RGVwdGgnXSxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MWU5KV09ITB4MSxfMHg1MTIzZTZbJ25vRnVuY3Rpb25zJ109IV8weDI5MDg5NSxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MTk5KV09MHgxLF8weDUxMjNlNltfMHgzNzc0YmUoMHgxYTMpXT0weDAsXzB4NTEyM2U2W18weDM3NzRiZSgweDIxYildPV8weDM3NzRiZSgweDFjNyksXzB4NTEyM2U2Wydyb290RXhwcmVzc2lvbiddPV8weDM3NzRiZSgweDFiYSksXzB4NTEyM2U2W18weDM3NzRiZSgweDIzZCldPSEweDAsXzB4NTEyM2U2WydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ109W10sXzB4NTEyM2U2W18weDM3NzRiZSgweDFiMCldPTB4MCxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MWMwKV09ITB4MCxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MWMyKV09MHgwLF8weDUxMjNlNltfMHgzNzc0YmUoMHgyNmIpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHg1MTIzZTY7fTtmb3IodmFyIF8weDIwMjU1Zj0weDA7XzB4MjAyNTVmPF8weDRmOTIzW18weDc1NDAxYigweDI1YildO18weDIwMjU1ZisrKV8weDRiOWE1OFsncHVzaCddKF8weDM4ZGM2OFtfMHg3NTQwMWIoMHgxZmYpXSh7J3RpbWVOb2RlJzpfMHg0ZGMzYWQ9PT0ndGltZSd8fHZvaWQgMHgwfSxfMHg0ZjkyM1tfMHgyMDI1NWZdLF8weDFhMDNmNChfMHg0MzMyODcpLHt9KSk7aWYoXzB4NGRjM2FkPT09XzB4NzU0MDFiKDB4MTk2KSl7bGV0IF8weDQ1NzRkOT1FcnJvcltfMHg3NTQwMWIoMHgxZmUpXTt0cnl7RXJyb3JbXzB4NzU0MDFiKDB4MWZlKV09MHgxLzB4MCxfMHg0YjlhNThbXzB4NzU0MDFiKDB4MWQyKV0oXzB4MzhkYzY4W18weDc1NDAxYigweDFmZildKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg3NTQwMWIoMHgxZTMpXSxfMHgxYTAzZjQoXzB4NDMzMjg3KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4NDU3NGQ5O319cmV0dXJueydtZXRob2QnOl8weDc1NDAxYigweDIzZiksJ3ZlcnNpb24nOl8weDk0Y2Y4YywnYXJncyc6W3sndHMnOl8weDE5MjFjZiwnc2Vzc2lvbic6XzB4MjY4NzkwLCdhcmdzJzpfMHg0YjlhNTgsJ2lkJzpfMHg0YzU1NTYsJ2NvbnRleHQnOl8weDVjZTllMH1dfTt9Y2F0Y2goXzB4Mjk3ZjY5KXtyZXR1cm57J21ldGhvZCc6XzB4NzU0MDFiKDB4MjNmKSwndmVyc2lvbic6XzB4OTRjZjhjLCdhcmdzJzpbeyd0cyc6XzB4MTkyMWNmLCdzZXNzaW9uJzpfMHgyNjg3OTAsJ2FyZ3MnOlt7J3R5cGUnOl8weDc1NDAxYigweDI3NCksJ2Vycm9yJzpfMHgyOTdmNjkmJl8weDI5N2Y2OVtfMHg3NTQwMWIoMHgxYmIpXX1dLCdpZCc6XzB4NGM1NTU2LCdjb250ZXh0JzpfMHg1Y2U5ZTB9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDU3ODcxYiYmXzB4MWIwODE1KXtsZXQgXzB4MmUyN2MwPV8weDJjYjMxZCgpO18weDU3ODcxYltfMHg3NTQwMWIoMHgyMzEpXSsrLF8weDU3ODcxYltfMHg3NTQwMWIoMHgyNjQpXSs9XzB4MWIxYzNhKF8weDFiMDgxNSxfMHgyZTI3YzApLF8weDU3ODcxYlsndHMnXT1fMHgyZTI3YzAsXzB4MThiZTZlW18weDc1NDAxYigweDFlNCldWydjb3VudCddKyssXzB4MThiZTZlW18weDc1NDAxYigweDFlNCldWyd0aW1lJ10rPV8weDFiMWMzYShfMHgxYjA4MTUsXzB4MmUyN2MwKSxfMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV1bJ3RzJ109XzB4MmUyN2MwLChfMHg1Nzg3MWJbXzB4NzU0MDFiKDB4MjMxKV0+MHgzMnx8XzB4NTc4NzFiW18weDc1NDAxYigweDI2NCldPjB4NjQpJiYoXzB4NTc4NzFiW18weDc1NDAxYigweDIwYyldPSEweDApLChfMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV1bJ2NvdW50J10+MHgzZTh8fF8weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXVtfMHg3NTQwMWIoMHgyNjQpXT4weDEyYykmJihfMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV1bXzB4NzU0MDFiKDB4MjBjKV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MWFlY2MxWydfY29uc29sZV9uaW5qYSddO30pKGdsb2JhbFRoaXMsXzB4MjMwOTk1KDB4MjU5KSxfMHgyMzA5OTUoMHgyMmMpLF8weDIzMDk5NSgweDFkYyksXzB4MjMwOTk1KDB4MWIyKSxfMHgyMzA5OTUoMHgyNDcpLCcxNjkyMDQ0NjE4ODc1JyxfMHgyMzA5OTUoMHgyNjgpLF8weDIzMDk5NSgweDIzNikpO1wiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCJpbXBvcnQge2N1cnJlbnREYXlJbmRleCwgbGFzdFdlYXRoZXJEYXRhLCBzZXRDdXJyZW50RGF5SW5kZXgsIHVwZGF0ZVdlYXRoZXJBcHB9IGZyb20gJy4uL3dlYXRoZXJBcHAnO1xuXG4vKipcbiAqIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIG5leHQgYXJyb3dcbiAqIFBhc3MgdG8gdGhlIG5leHQgZGF5IGlmIGlzIHRoZSBsYXN0IGdvIHRvIHRoZSBmaXJzdFxuICovXG5mdW5jdGlvbiBjcmVhdGVOZXh0QXJyb3dFdmVudCgpIHtcbiAgY29uc3QgbmV4dEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRfX2Fycm93Jyk7XG4gIG5leHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YUZvcmVDYXN0ID0gbGFzdFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgIGNvbnN0IG5leHREYXlJbmRleCA9IGN1cnJlbnREYXlJbmRleCArIDEgPj0gd2VhdGhlckRhdGFGb3JlQ2FzdC5sZW5ndGggPyAwIDogY3VycmVudERheUluZGV4ICsgMTtcbiAgICBzZXRDdXJyZW50RGF5SW5kZXgobmV4dERheUluZGV4KTtcbiAgICB1cGRhdGVXZWF0aGVyQXBwKCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHByZXYgYXJyb3dcbiAqIFBhc3MgdG8gdGhlIG5leHQgZGF5IGlmIGlzIHRoZSBsYXN0IGdvIHRvIHRoZSBmaXJzdFxuICovXG5mdW5jdGlvbiBjcmVhdGVQcmV2QXJyb3dFdmVudCgpIHtcbiAgY29uc3QgbmV4dEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZfX2Fycm93Jyk7XG4gIG5leHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YUZvcmVDYXN0ID0gbGFzdFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgIGNvbnN0IG5leHREYXlJbmRleCA9IGN1cnJlbnREYXlJbmRleCAtIDEgPCAwID8gd2VhdGhlckRhdGFGb3JlQ2FzdC5sZW5ndGgtMSA6IGN1cnJlbnREYXlJbmRleCAtIDE7XG4gICAgc2V0Q3VycmVudERheUluZGV4KG5leHREYXlJbmRleCk7XG4gICAgdXBkYXRlV2VhdGhlckFwcCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHtjcmVhdGVOZXh0QXJyb3dFdmVudCwgY3JlYXRlUHJldkFycm93RXZlbnR9O1xuIiwiaW1wb3J0IHt1c2luZ0ZhaHJlbmhlaXR9IGZyb20gJy4uL3dlYXRoZXJBcHAnO1xuXG4vLyBjb25zdCB3ZWF0aGVySWNvbiA9IFtcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwMDAsXG4vLyAgICAgZGF5OiAnU3VubnknLFxuLy8gICAgIG5pZ2h0OiAnQ2xlYXInLFxuLy8gICAgIGljb246IDExMyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwMDMsXG4vLyAgICAgZGF5OiAnUGFydGx5IGNsb3VkeScsXG4vLyAgICAgbmlnaHQ6ICdQYXJ0bHkgY2xvdWR5Jyxcbi8vICAgICBpY29uOiAxMTYsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDA2LFxuLy8gICAgIGRheTogJ0Nsb3VkeScsXG4vLyAgICAgbmlnaHQ6ICdDbG91ZHknLFxuLy8gICAgIGljb246IDExOSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwMDksXG4vLyAgICAgZGF5OiAnT3ZlcmNhc3QnLFxuLy8gICAgIG5pZ2h0OiAnT3ZlcmNhc3QnLFxuLy8gICAgIGljb246IDEyMixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwMzAsXG4vLyAgICAgZGF5OiAnTWlzdCcsXG4vLyAgICAgbmlnaHQ6ICdNaXN0Jyxcbi8vICAgICBpY29uOiAxNDMsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDYzLFxuLy8gICAgIGRheTogJ1BhdGNoeSByYWluIHBvc3NpYmxlJyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSByYWluIHBvc3NpYmxlJyxcbi8vICAgICBpY29uOiAxNzYsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDY2LFxuLy8gICAgIGRheTogJ1BhdGNoeSBzbm93IHBvc3NpYmxlJyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSBzbm93IHBvc3NpYmxlJyxcbi8vICAgICBpY29uOiAxNzksXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMDY5LFxuLy8gICAgIGRheTogJ1BhdGNoeSBzbGVldCBwb3NzaWJsZScsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgc2xlZXQgcG9zc2libGUnLFxuLy8gICAgIGljb246IDE4Mixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwNzIsXG4vLyAgICAgZGF5OiAnUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGUnLFxuLy8gICAgIG5pZ2h0OiAnUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGUnLFxuLy8gICAgIGljb246IDE4NSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEwODcsXG4vLyAgICAgZGF5OiAnVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlJyxcbi8vICAgICBuaWdodDogJ1RodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZScsXG4vLyAgICAgaWNvbjogMjAwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTExNCxcbi8vICAgICBkYXk6ICdCbG93aW5nIHNub3cnLFxuLy8gICAgIG5pZ2h0OiAnQmxvd2luZyBzbm93Jyxcbi8vICAgICBpY29uOiAyMjcsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTE3LFxuLy8gICAgIGRheTogJ0JsaXp6YXJkJyxcbi8vICAgICBuaWdodDogJ0JsaXp6YXJkJyxcbi8vICAgICBpY29uOiAyMzAsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTM1LFxuLy8gICAgIGRheTogJ0ZvZycsXG4vLyAgICAgbmlnaHQ6ICdGb2cnLFxuLy8gICAgIGljb246IDI0OCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExNDcsXG4vLyAgICAgZGF5OiAnRnJlZXppbmcgZm9nJyxcbi8vICAgICBuaWdodDogJ0ZyZWV6aW5nIGZvZycsXG4vLyAgICAgaWNvbjogMjYwLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE1MCxcbi8vICAgICBkYXk6ICdQYXRjaHkgbGlnaHQgZHJpenpsZScsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgbGlnaHQgZHJpenpsZScsXG4vLyAgICAgaWNvbjogMjYzLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE1Myxcbi8vICAgICBkYXk6ICdMaWdodCBkcml6emxlJyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IGRyaXp6bGUnLFxuLy8gICAgIGljb246IDI2Nixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExNjgsXG4vLyAgICAgZGF5OiAnRnJlZXppbmcgZHJpenpsZScsXG4vLyAgICAgbmlnaHQ6ICdGcmVlemluZyBkcml6emxlJyxcbi8vICAgICBpY29uOiAyODEsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTcxLFxuLy8gICAgIGRheTogJ0hlYXZ5IGZyZWV6aW5nIGRyaXp6bGUnLFxuLy8gICAgIG5pZ2h0OiAnSGVhdnkgZnJlZXppbmcgZHJpenpsZScsXG4vLyAgICAgaWNvbjogMjg0LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE4MCxcbi8vICAgICBkYXk6ICdQYXRjaHkgbGlnaHQgcmFpbicsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgbGlnaHQgcmFpbicsXG4vLyAgICAgaWNvbjogMjkzLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE4Myxcbi8vICAgICBkYXk6ICdMaWdodCByYWluJyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IHJhaW4nLFxuLy8gICAgIGljb246IDI5Nixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExODYsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgcmFpbiBhdCB0aW1lcycsXG4vLyAgICAgbmlnaHQ6ICdNb2RlcmF0ZSByYWluIGF0IHRpbWVzJyxcbi8vICAgICBpY29uOiAyOTksXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTg5LFxuLy8gICAgIGRheTogJ01vZGVyYXRlIHJhaW4nLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgcmFpbicsXG4vLyAgICAgaWNvbjogMzAyLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTE5Mixcbi8vICAgICBkYXk6ICdIZWF2eSByYWluIGF0IHRpbWVzJyxcbi8vICAgICBuaWdodDogJ0hlYXZ5IHJhaW4gYXQgdGltZXMnLFxuLy8gICAgIGljb246IDMwNSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDExOTUsXG4vLyAgICAgZGF5OiAnSGVhdnkgcmFpbicsXG4vLyAgICAgbmlnaHQ6ICdIZWF2eSByYWluJyxcbi8vICAgICBpY29uOiAzMDgsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMTk4LFxuLy8gICAgIGRheTogJ0xpZ2h0IGZyZWV6aW5nIHJhaW4nLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgZnJlZXppbmcgcmFpbicsXG4vLyAgICAgaWNvbjogMzExLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTIwMSxcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW4nLFxuLy8gICAgIGljb246IDMxNCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMDQsXG4vLyAgICAgZGF5OiAnTGlnaHQgc2xlZXQnLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgc2xlZXQnLFxuLy8gICAgIGljb246IDMxNyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMDcsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQnLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQnLFxuLy8gICAgIGljb246IDMyMCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMTAsXG4vLyAgICAgZGF5OiAnUGF0Y2h5IGxpZ2h0IHNub3cnLFxuLy8gICAgIG5pZ2h0OiAnUGF0Y2h5IGxpZ2h0IHNub3cnLFxuLy8gICAgIGljb246IDMyMyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMTMsXG4vLyAgICAgZGF5OiAnTGlnaHQgc25vdycsXG4vLyAgICAgbmlnaHQ6ICdMaWdodCBzbm93Jyxcbi8vICAgICBpY29uOiAzMjYsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjE2LFxuLy8gICAgIGRheTogJ1BhdGNoeSBtb2RlcmF0ZSBzbm93Jyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSBtb2RlcmF0ZSBzbm93Jyxcbi8vICAgICBpY29uOiAzMjksXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjE5LFxuLy8gICAgIGRheTogJ01vZGVyYXRlIHNub3cnLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgc25vdycsXG4vLyAgICAgaWNvbjogMzMyLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTIyMixcbi8vICAgICBkYXk6ICdQYXRjaHkgaGVhdnkgc25vdycsXG4vLyAgICAgbmlnaHQ6ICdQYXRjaHkgaGVhdnkgc25vdycsXG4vLyAgICAgaWNvbjogMzM1LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTIyNSxcbi8vICAgICBkYXk6ICdIZWF2eSBzbm93Jyxcbi8vICAgICBuaWdodDogJ0hlYXZ5IHNub3cnLFxuLy8gICAgIGljb246IDMzOCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyMzcsXG4vLyAgICAgZGF5OiAnSWNlIHBlbGxldHMnLFxuLy8gICAgIG5pZ2h0OiAnSWNlIHBlbGxldHMnLFxuLy8gICAgIGljb246IDM1MCxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNDAsXG4vLyAgICAgZGF5OiAnTGlnaHQgcmFpbiBzaG93ZXInLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgcmFpbiBzaG93ZXInLFxuLy8gICAgIGljb246IDM1Myxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNDMsXG4vLyAgICAgZGF5OiAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXInLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXInLFxuLy8gICAgIGljb246IDM1Nixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNDYsXG4vLyAgICAgZGF5OiAnVG9ycmVudGlhbCByYWluIHNob3dlcicsXG4vLyAgICAgbmlnaHQ6ICdUb3JyZW50aWFsIHJhaW4gc2hvd2VyJyxcbi8vICAgICBpY29uOiAzNTksXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjQ5LFxuLy8gICAgIGRheTogJ0xpZ2h0IHNsZWV0IHNob3dlcnMnLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgc2xlZXQgc2hvd2VycycsXG4vLyAgICAgaWNvbjogMzYyLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI1Mixcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnMnLFxuLy8gICAgIGljb246IDM2NSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNTUsXG4vLyAgICAgZGF5OiAnTGlnaHQgc25vdyBzaG93ZXJzJyxcbi8vICAgICBuaWdodDogJ0xpZ2h0IHNub3cgc2hvd2VycycsXG4vLyAgICAgaWNvbjogMzY4LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI1OCxcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnMnLFxuLy8gICAgIG5pZ2h0OiAnTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzJyxcbi8vICAgICBpY29uOiAzNzEsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjYxLFxuLy8gICAgIGRheTogJ0xpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHMnLFxuLy8gICAgIG5pZ2h0OiAnTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0cycsXG4vLyAgICAgaWNvbjogMzc0LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI2NCxcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHMnLFxuLy8gICAgIGljb246IDM3Nyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGNvZGU6IDEyNzMsXG4vLyAgICAgZGF5OiAnUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyJyxcbi8vICAgICBuaWdodDogJ1BhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlcicsXG4vLyAgICAgaWNvbjogMzg2LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI3Nixcbi8vICAgICBkYXk6ICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlcicsXG4vLyAgICAgbmlnaHQ6ICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlcicsXG4vLyAgICAgaWNvbjogMzg5LFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgY29kZTogMTI3OSxcbi8vICAgICBkYXk6ICdQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXInLFxuLy8gICAgIG5pZ2h0OiAnUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyJyxcbi8vICAgICBpY29uOiAzOTIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBjb2RlOiAxMjgyLFxuLy8gICAgIGRheTogJ01vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyJyxcbi8vICAgICBuaWdodDogJ01vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyJyxcbi8vICAgICBpY29uOiAzOTUsXG4vLyAgIH0sXG4vLyBdO1xuXG4vKipcbiAqIFByaW50IHRoZSB3ZWF0aGVyIHNsaWRlclxuICogWW91IGNhbiBzY3JvbGwgdGhyb3VnaCBhbGwgdGhlIHNsaWRlcyBvZiB0aGUgZGF5c1xuICogQHBhcmFtIHtPYmplY3R9IGRheVxuICovXG5mdW5jdGlvbiBwcmludFdlYXRoZXJTbGlkZXIoZGF5KSB7XG4gIGNvbnN0IHdlYXRoZXJJY29uRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJfX3NsaWRlcl9faW5mb3JtYXRpb25fX2ltZycpO1xuICBjb25zdCB3ZWF0aGVyVGl0bGVEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbl9fdGl0bGUnKTtcbiAgY29uc3Qgd2luZFZhbHVlRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRfX3ZhbHVlX19kYXRhJyk7XG4gIGNvbnN0IHRlbXBWYWx1ZURheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wX19kYXRhX192YWx1ZScpO1xuICBjb25zdCBodW1pZGl0eVZhbHVlRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X19kYXRhX192YWx1ZScpO1xuXG4gIC8vIHdlYXRoZXJJY29uRGF5LnNyYyA9IHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvd2VhdGhlci1pY29ucy8ke3dlYXRoZXJJY29uW2xpc3REYXlzWzBdLndlYXRoZXIuY29kZV0uaWNvbn0ucG5nYCk7XG4gIHdlYXRoZXJJY29uRGF5LnNyYyA9IHJlcXVpcmUoYC4vaW1nL3NvbGVhZG8ucG5nYCk7IC8vIFRPRE86IGNoYW5nZSB0aGUgaWNvblxuICB3ZWF0aGVyVGl0bGVEYXkuaW5uZXJIVE1MID0gZGF5LmNvbmRpdGlvbi50ZXh0O1xuICB3aW5kVmFsdWVEYXkudGV4dENvbnRlbnQgPSBkYXkuYXZndmlzX2ttO1xuICB0ZW1wVmFsdWVEYXkudGV4dENvbnRlbnQgPSB1c2luZ0ZhaHJlbmhlaXQgPyBNYXRoLnJvdW5kKGRheS5hdmd0ZW1wX2YpIDogTWF0aC5yb3VuZChkYXkuYXZndGVtcF9jKTtcbiAgaHVtaWRpdHlWYWx1ZURheS50ZXh0Q29udGVudCA9IGRheS5hdmdodW1pZGl0eTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpbnRXZWF0aGVyU2xpZGVyO1xuIiwiaW1wb3J0ICcuL2Nzcy9nbG9iYWwuY3NzJztcbmltcG9ydCAnLi9jc3MvaGVhZGVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2xvYWRpbmcuY3NzJztcbmltcG9ydCAnLi9jc3Mvc2xpZGVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2hvdXJseVNsaWRlci5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9zZWFyY2guY3NzJztcbmltcG9ydCB7cHJpbnRXZWF0aGVyQXBwfSBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJBcHAnO1xuaW1wb3J0IGxvYWRpbmdTdmcgZnJvbSAnLi9pbWcvbG9hZGluZy5zdmcnO1xuaW1wb3J0IGNyZWF0ZVNlYXJjaEV2ZW50IGZyb20gJy4vYXNzZXRzL3dlYXRoZXJBcHAvc2VhcmNoQm94L3NlYXJjaEJveCc7XG5pbXBvcnQgY3JlYXRlRmFocmVuaGVpdEV2ZW50TGlzdGVuZXJzIGZyb20gJy4vYXNzZXRzL3dlYXRoZXJBcHAvZmFocmVuaGVpdENoZWNrL2ZhaHJlbmhlaXRDaGVjayc7XG5pbXBvcnQge2NyZWF0ZU5leHRBcnJvd0V2ZW50LCBjcmVhdGVQcmV2QXJyb3dFdmVudH0gZnJvbSAnLi9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyU2xpZGVyL3NsaWRlckFycm93cyc7XG5cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBpcyB0aGUgbWFpbiBmdW5jdGlvbiBvZiB0aGUgYXBwbGljYXRpb25cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIHNldExvYWRpbmdJbWcoKTtcbiAgcHJpbnRXZWF0aGVyQXBwKCk7XG4gIGNyZWF0ZVNlYXJjaEV2ZW50KCk7XG4gIGNyZWF0ZUZhaHJlbmhlaXRFdmVudExpc3RlbmVycygpO1xuICBjcmVhdGVOZXh0QXJyb3dFdmVudCgpO1xuICBjcmVhdGVQcmV2QXJyb3dFdmVudCgpO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgbG9hZGluZyBpbWFnZSB0byB0aGUgRE9NXG4gKi9cbmZ1bmN0aW9uIHNldExvYWRpbmdJbWcoKSB7XG4gIGNvbnN0IGxvYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xuICBjb25zdCBsb2FkaW5nSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxvYWRpbmdJbWcuc3JjID0gbG9hZGluZ1N2ZztcbiAgbG9hZGluZ0ltZy5hbHQgPSAnTG9hZGluZy4uLic7XG4gIGxvYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZGluZ0ltZyk7XG59XG5cbmluaXQoKTsgLy8gQ2FsbGluZyB0aGUgbWFpbiBmdW5jdGlvblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9