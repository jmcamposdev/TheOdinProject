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
/* harmony import */ var _weatherSlider_weatherSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weatherSlider/weatherSlider */ "./src/assets/weatherApp/weatherSlider/weatherSlider.js");




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
  const hourlyElement = document.createElement('div'); // Create the element
  hourlyElement.classList.add('weather__data__hourly__slider__element'); // Add the class

  const hourlyImage = document.createElement('img'); // Create the image
  hourlyImage.classList.add('weather__data__hourly__slider__element__image'); // Add the class
  hourlyImage.src = (0,_weatherSlider_weatherSlider__WEBPACK_IMPORTED_MODULE_2__.getWeatherIcon)(hourlyData.condition.code); // Get the weather icon

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
    /* eslint-disable */console.log(...oo_oo(`c7ea5e8_0`,weatherData.error));
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
  (0,_weatherSlider_weatherSlider__WEBPACK_IMPORTED_MODULE_3__.printWeatherSlider)(currentDayData.day); // Print weather slider
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


/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x578d(_0x4e6c1a,_0x582af6){var _0x314cba=_0x314c();return _0x578d=function(_0x578d11,_0x105e51){_0x578d11=_0x578d11-0x1a2;var _0x3b38bc=_0x314cba[_0x578d11];return _0x3b38bc;},_0x578d(_0x4e6c1a,_0x582af6);}function _0x314c(){var _0x2e9d21=['host','_connected','_connectToHostNow','split',\"/Users/josemaria/.vscode-insiders/extensions/wallabyjs.console-ninja-0.0.199/node_modules\",'_keyStrRegExp','array','trace','_attemptToReconnectShortly','negativeZero','_p_name','1965922rYzVKH','_propertyName','_setNodeExpressionPath','resolveGetters','root_exp_id','autoExpandMaxDepth','[object\\x20Date]','replace','totalStrLength','reduceLimits','_WebSocketClass','now','...','match','depth','_propertyAccessor','onmessage','onopen','17808NPPqTh','_additionalMetadata','_consoleNinjaAllowedToStart','POSITIVE_INFINITY','type','index','stackTraceLimit','_getOwnPropertyNames','[object\\x20Array]','getWebSocketClass','method','_objectToString','forEach','date','catch','127.0.0.1','_quotedRegExp','_setNodePermissions','level','data','unref','_reconnectTimeout','capped','remix','enumerable','hits','create','elapsed','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','nodeModules','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','toString','4414Xbesdi','10izQufv','perf_hooks','error','set','defineProperty','number','RegExp','expressionsToEvaluate','length','_connecting','872150RZZLha','__es'+'Module','_webSocketErrorDocsLink','logger\\x20websocket\\x20error','_disposeWebsocket','getOwnPropertyNames','negativeInfinity','null','parse','expId','reload','_addObjectProperty','_undefined','serialize','boolean','object','hostname','_console_ninja','Boolean','concat','_treeNodePropertiesAfterFullValue','symbol','_dateToString','string','name','getOwnPropertyDescriptor','','noFunctions','then','count','autoExpandPropertyCount','_processTreeNodeResult','24cIOBYG','ws/index.js','isArray','2153129WuUNjX','props','send','sortProps','elements','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','slice','_socket','_connectAttemptCount','_property','onclose','_allowedToConnectOnSend','disabledLog','_isPrimitiveType','allStrLength','_getOwnPropertyDescriptor','message','log','\\x20server','getter','global','Number','cappedElements','_addProperty','autoExpandPreviousObjects','_addLoadNode','performance','hasOwnProperty','readyState','_cleanNode','unknown','NEGATIVE_INFINITY','value','indexOf','pathToFileURL','_blacklistedProperty','_Symbol','_setNodeLabel','hrtime','join','Buffer','_HTMLAllCollection','positiveInfinity','_capIfString','_treeNodePropertiesBeforeFullValue','_setNodeId','stringify','path','nuxt','map','_WebSocket','undefined','_isSet','Map','autoExpandLimit','_setNodeQueryPath','_getOwnPropertySymbols','_isArray','bigint','_isPrimitiveWrapperType','console',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"MacBook-Pro-de-Jose.local\",\"192.168.1.131\"],'constructor','toLowerCase','getOwnPropertySymbols','strLength','versions','isExpressionToEvaluate','_ws','64269','_console_ninja_session','_allowedToSend','pop','push','1692369139595','332ypOonG','4851762UyJTiI','_inBrowser','stack','[object\\x20BigInt]','[object\\x20Set]','autoExpand','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','timeEnd','_sortProps','call','nan','_isMap','node','Error','onerror','8809317ypYazq','get','Set','WebSocket','warn','_numberRegExp','valueOf','265TFuYhk','prototype','Symbol','root_exp','\\x20browser','_regExpToString','time','_maxConnectAttemptCount','substr','parent','current','String','default','_sendErrorMessage','funcName','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','process','_p_','_type','port','close','_p_length','location','function','ws://','_isUndefined','test','timeStamp'];_0x314c=function(){return _0x2e9d21;};return _0x314c();}var _0x3ba83d=_0x578d;(function(_0x1086fb,_0x1317d1){var _0x41a152=_0x578d,_0x1de80b=_0x1086fb();while(!![]){try{var _0x15aa31=parseInt(_0x41a152(0x1c7))/0x1*(-parseInt(_0x41a152(0x220))/0x2)+parseInt(_0x41a152(0x200))/0x3*(parseInt(_0x41a152(0x1b0))/0x4)+-parseInt(_0x41a152(0x22b))/0x5+-parseInt(_0x41a152(0x1b1))/0x6+-parseInt(_0x41a152(0x1ee))/0x7*(-parseInt(_0x41a152(0x24b))/0x8)+parseInt(_0x41a152(0x1c0))/0x9+-parseInt(_0x41a152(0x221))/0xa*(parseInt(_0x41a152(0x24e))/0xb);if(_0x15aa31===_0x1317d1)break;else _0x1de80b['push'](_0x1de80b['shift']());}catch(_0x3ecc84){_0x1de80b['push'](_0x1de80b['shift']());}}}(_0x314c,0x865f4));var ue=Object[_0x3ba83d(0x21a)],te=Object[_0x3ba83d(0x225)],he=Object[_0x3ba83d(0x244)],le=Object['getOwnPropertyNames'],fe=Object['getPrototypeOf'],_e=Object[_0x3ba83d(0x1c8)][_0x3ba83d(0x269)],pe=(_0x5e0a2c,_0x75a218,_0x138e52,_0x3df4cb)=>{var _0x6f3f5c=_0x3ba83d;if(_0x75a218&&typeof _0x75a218==_0x6f3f5c(0x23a)||typeof _0x75a218==_0x6f3f5c(0x1de)){for(let _0x1acd38 of le(_0x75a218))!_e[_0x6f3f5c(0x1ba)](_0x5e0a2c,_0x1acd38)&&_0x1acd38!==_0x138e52&&te(_0x5e0a2c,_0x1acd38,{'get':()=>_0x75a218[_0x1acd38],'enumerable':!(_0x3df4cb=he(_0x75a218,_0x1acd38))||_0x3df4cb[_0x6f3f5c(0x218)]});}return _0x5e0a2c;},ne=(_0x5b7c89,_0x16cc59,_0x327e06)=>(_0x327e06=_0x5b7c89!=null?ue(fe(_0x5b7c89)):{},pe(_0x16cc59||!_0x5b7c89||!_0x5b7c89[_0x3ba83d(0x22c)]?te(_0x327e06,_0x3ba83d(0x1d3),{'value':_0x5b7c89,'enumerable':!0x0}):_0x327e06,_0x5b7c89)),Q=class{constructor(_0x105d2b,_0x20676b,_0x405712,_0x2c564c){var _0x48e70d=_0x3ba83d;this[_0x48e70d(0x262)]=_0x105d2b,this[_0x48e70d(0x1e3)]=_0x20676b,this[_0x48e70d(0x1da)]=_0x405712,this['nodeModules']=_0x2c564c,this[_0x48e70d(0x1ac)]=!0x0,this[_0x48e70d(0x259)]=!0x0,this[_0x48e70d(0x1e4)]=!0x1,this['_connecting']=!0x1,this[_0x48e70d(0x1b2)]=!!this[_0x48e70d(0x262)][_0x48e70d(0x1c3)],this['_WebSocketClass']=null,this[_0x48e70d(0x256)]=0x0,this[_0x48e70d(0x1ce)]=0x14,this[_0x48e70d(0x22d)]='https://tinyurl.com/37x8b79t',this[_0x48e70d(0x1d4)]=(this[_0x48e70d(0x1b2)]?_0x48e70d(0x1d6):_0x48e70d(0x1b7))+this['_webSocketErrorDocsLink'];}async[_0x3ba83d(0x209)](){var _0x586738=_0x3ba83d;if(this[_0x586738(0x1f8)])return this[_0x586738(0x1f8)];let _0x9085ab;if(this[_0x586738(0x1b2)])_0x9085ab=this[_0x586738(0x262)]['WebSocket'];else{if(this[_0x586738(0x262)][_0x586738(0x1d7)]?.['_WebSocket'])_0x9085ab=this[_0x586738(0x262)][_0x586738(0x1d7)]?.[_0x586738(0x280)];else try{let _0x5b33ba=await import(_0x586738(0x27d));_0x9085ab=(await import((await import('url'))[_0x586738(0x270)](_0x5b33ba['join'](this[_0x586738(0x21d)],_0x586738(0x24c)))[_0x586738(0x21f)]()))[_0x586738(0x1d3)];}catch{try{_0x9085ab=require(require(_0x586738(0x27d))[_0x586738(0x275)](this[_0x586738(0x21d)],'ws'));}catch{throw new Error(_0x586738(0x21c));}}}return this[_0x586738(0x1f8)]=_0x9085ab,_0x9085ab;}['_connectToHostNow'](){var _0x2bfa4b=_0x3ba83d;this[_0x2bfa4b(0x22a)]||this[_0x2bfa4b(0x1e4)]||this[_0x2bfa4b(0x256)]>=this[_0x2bfa4b(0x1ce)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this[_0x2bfa4b(0x256)]++,this['_ws']=new Promise((_0x44af24,_0x2619a0)=>{var _0x37bb19=_0x2bfa4b;this[_0x37bb19(0x209)]()[_0x37bb19(0x247)](_0x6e3122=>{var _0x263a07=_0x37bb19;let _0x17a95c=new _0x6e3122(_0x263a07(0x1df)+this[_0x263a07(0x1e3)]+':'+this[_0x263a07(0x1da)]);_0x17a95c[_0x263a07(0x1bf)]=()=>{var _0x1bc41e=_0x263a07;this[_0x1bc41e(0x1ac)]=!0x1,this['_disposeWebsocket'](_0x17a95c),this[_0x1bc41e(0x1eb)](),_0x2619a0(new Error(_0x1bc41e(0x22e)));},_0x17a95c[_0x263a07(0x1ff)]=()=>{var _0x56034b=_0x263a07;this['_inBrowser']||_0x17a95c[_0x56034b(0x255)]&&_0x17a95c[_0x56034b(0x255)]['unref']&&_0x17a95c[_0x56034b(0x255)]['unref'](),_0x44af24(_0x17a95c);},_0x17a95c[_0x263a07(0x258)]=()=>{var _0xba4898=_0x263a07;this[_0xba4898(0x259)]=!0x0,this[_0xba4898(0x22f)](_0x17a95c),this[_0xba4898(0x1eb)]();},_0x17a95c[_0x263a07(0x1fe)]=_0x4432d7=>{var _0xcf0a94=_0x263a07;try{_0x4432d7&&_0x4432d7[_0xcf0a94(0x213)]&&this['_inBrowser']&&JSON[_0xcf0a94(0x233)](_0x4432d7[_0xcf0a94(0x213)])[_0xcf0a94(0x20a)]===_0xcf0a94(0x235)&&this[_0xcf0a94(0x262)][_0xcf0a94(0x1dd)]['reload']();}catch{}};})[_0x37bb19(0x247)](_0x334fab=>(this[_0x37bb19(0x1e4)]=!0x0,this[_0x37bb19(0x22a)]=!0x1,this[_0x37bb19(0x259)]=!0x1,this[_0x37bb19(0x1ac)]=!0x0,this[_0x37bb19(0x256)]=0x0,_0x334fab))[_0x37bb19(0x20e)](_0x329315=>(this[_0x37bb19(0x1e4)]=!0x1,this['_connecting']=!0x1,console[_0x37bb19(0x1c4)](_0x37bb19(0x21e)+this[_0x37bb19(0x22d)]),_0x2619a0(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x329315&&_0x329315['message'])))));}));}['_disposeWebsocket'](_0x196180){var _0xef30c7=_0x3ba83d;this[_0xef30c7(0x1e4)]=!0x1,this['_connecting']=!0x1;try{_0x196180['onclose']=null,_0x196180['onerror']=null,_0x196180[_0xef30c7(0x1ff)]=null;}catch{}try{_0x196180[_0xef30c7(0x26a)]<0x2&&_0x196180[_0xef30c7(0x1db)]();}catch{}}[_0x3ba83d(0x1eb)](){var _0x6a7157=_0x3ba83d;clearTimeout(this[_0x6a7157(0x215)]),!(this['_connectAttemptCount']>=this[_0x6a7157(0x1ce)])&&(this[_0x6a7157(0x215)]=setTimeout(()=>{var _0x4ae5fd=_0x6a7157;this['_connected']||this[_0x4ae5fd(0x22a)]||(this[_0x4ae5fd(0x1e5)](),this[_0x4ae5fd(0x1a9)]?.['catch'](()=>this[_0x4ae5fd(0x1eb)]()));},0x1f4),this['_reconnectTimeout'][_0x6a7157(0x214)]&&this['_reconnectTimeout'][_0x6a7157(0x214)]());}async['send'](_0x423266){var _0x315a78=_0x3ba83d;try{if(!this[_0x315a78(0x1ac)])return;this['_allowedToConnectOnSend']&&this['_connectToHostNow'](),(await this[_0x315a78(0x1a9)])['send'](JSON[_0x315a78(0x27c)](_0x423266));}catch(_0x3bb1d2){console[_0x315a78(0x1c4)](this[_0x315a78(0x1d4)]+':\\x20'+(_0x3bb1d2&&_0x3bb1d2['message'])),this[_0x315a78(0x1ac)]=!0x1,this[_0x315a78(0x1eb)]();}}};function V(_0x14c01b,_0x192755,_0x4a4b6d,_0x30f2f1,_0x38ab2d){var _0x3b8dc7=_0x3ba83d;let _0x4e5f37=_0x4a4b6d['split'](',')[_0x3b8dc7(0x27f)](_0x4a8d52=>{var _0x3840c2=_0x3b8dc7;try{_0x14c01b[_0x3840c2(0x1ab)]||((_0x38ab2d==='next.js'||_0x38ab2d===_0x3840c2(0x217)||_0x38ab2d==='astro')&&(_0x38ab2d+=_0x14c01b['process']?.[_0x3840c2(0x1a7)]?.['node']?_0x3840c2(0x260):_0x3840c2(0x1cb)),_0x14c01b[_0x3840c2(0x1ab)]={'id':+new Date(),'tool':_0x38ab2d});let _0x2ecd1c=new Q(_0x14c01b,_0x192755,_0x4a8d52,_0x30f2f1);return _0x2ecd1c[_0x3840c2(0x250)]['bind'](_0x2ecd1c);}catch(_0x580284){return console[_0x3840c2(0x1c4)](_0x3840c2(0x253),_0x580284&&_0x580284[_0x3840c2(0x25e)]),()=>{};}});return _0x1c11ef=>_0x4e5f37[_0x3b8dc7(0x20c)](_0x163a22=>_0x163a22(_0x1c11ef));}function H(_0x557474){var _0x403b8f=_0x3ba83d;let _0x4e42c5=function(_0x1e02f9,_0xc09b4a){return _0xc09b4a-_0x1e02f9;},_0x4e68e0;if(_0x557474[_0x403b8f(0x268)])_0x4e68e0=function(){var _0x2eaec0=_0x403b8f;return _0x557474['performance'][_0x2eaec0(0x1f9)]();};else{if(_0x557474['process']&&_0x557474[_0x403b8f(0x1d7)][_0x403b8f(0x274)])_0x4e68e0=function(){var _0x2f7152=_0x403b8f;return _0x557474[_0x2f7152(0x1d7)][_0x2f7152(0x274)]();},_0x4e42c5=function(_0xf29124,_0x32fc4b){return 0x3e8*(_0x32fc4b[0x0]-_0xf29124[0x0])+(_0x32fc4b[0x1]-_0xf29124[0x1])/0xf4240;};else try{let {performance:_0x2bb63c}=require(_0x403b8f(0x222));_0x4e68e0=function(){return _0x2bb63c['now']();};}catch{_0x4e68e0=function(){return+new Date();};}}return{'elapsed':_0x4e42c5,'timeStamp':_0x4e68e0,'now':()=>Date[_0x403b8f(0x1f9)]()};}function X(_0x4ee268,_0x1f6bcd,_0x26b09b){var _0x2d4d28=_0x3ba83d;if(_0x4ee268['_consoleNinjaAllowedToStart']!==void 0x0)return _0x4ee268['_consoleNinjaAllowedToStart'];let _0x2aad90=_0x4ee268['process']?.[_0x2d4d28(0x1a7)]?.[_0x2d4d28(0x1bd)];return _0x2aad90&&_0x26b09b===_0x2d4d28(0x27e)?_0x4ee268[_0x2d4d28(0x202)]=!0x1:_0x4ee268['_consoleNinjaAllowedToStart']=_0x2aad90||!_0x1f6bcd||_0x4ee268[_0x2d4d28(0x1dd)]?.[_0x2d4d28(0x23b)]&&_0x1f6bcd['includes'](_0x4ee268[_0x2d4d28(0x1dd)][_0x2d4d28(0x23b)]),_0x4ee268[_0x2d4d28(0x202)];}((_0x289f54,_0x29789e,_0x2f548f,_0x2fbd9e,_0x21dd5e,_0x592253,_0x3f52fd,_0x41dd6d,_0x1189ff)=>{var _0x312442=_0x3ba83d;if(_0x289f54[_0x312442(0x23c)])return _0x289f54[_0x312442(0x23c)];if(!X(_0x289f54,_0x41dd6d,_0x21dd5e))return _0x289f54['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x289f54[_0x312442(0x23c)];let _0xdf602={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x544250={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0xcd6f41=H(_0x289f54),_0x5961dd=_0xcd6f41[_0x312442(0x21b)],_0x32c2bf=_0xcd6f41[_0x312442(0x1e2)],_0x3fc0e4=_0xcd6f41[_0x312442(0x1f9)],_0x21d36a={'hits':{},'ts':{}},_0x47415f=_0xe98645=>{_0x21d36a['ts'][_0xe98645]=_0x32c2bf();},_0x294520=(_0x168879,_0x369685)=>{let _0x447058=_0x21d36a['ts'][_0x369685];if(delete _0x21d36a['ts'][_0x369685],_0x447058){let _0x28c8d6=_0x5961dd(_0x447058,_0x32c2bf());_0x1152c0(_0x30f5ce('time',_0x168879,_0x3fc0e4(),_0x12ecc2,[_0x28c8d6],_0x369685));}},_0x7b6e0e=_0x218364=>_0x513ac5=>{var _0x116fa5=_0x312442;try{_0x47415f(_0x513ac5),_0x218364(_0x513ac5);}finally{_0x289f54[_0x116fa5(0x28a)][_0x116fa5(0x1cd)]=_0x218364;}},_0x3c8ef5=_0x3cd42a=>_0x476c4b=>{var _0x524406=_0x312442;try{let [_0x1f3f5c,_0xaeebdd]=_0x476c4b[_0x524406(0x1e6)](':logPointId:');_0x294520(_0xaeebdd,_0x1f3f5c),_0x3cd42a(_0x1f3f5c);}finally{_0x289f54['console'][_0x524406(0x1b8)]=_0x3cd42a;}};_0x289f54[_0x312442(0x23c)]={'consoleLog':(_0x5e664b,_0x38aebf)=>{var _0xe063e7=_0x312442;_0x289f54[_0xe063e7(0x28a)][_0xe063e7(0x25f)][_0xe063e7(0x243)]!==_0xe063e7(0x25a)&&_0x1152c0(_0x30f5ce(_0xe063e7(0x25f),_0x5e664b,_0x3fc0e4(),_0x12ecc2,_0x38aebf));},'consoleTrace':(_0x5c312f,_0x43296b)=>{var _0x7bd5b=_0x312442;_0x289f54[_0x7bd5b(0x28a)][_0x7bd5b(0x25f)][_0x7bd5b(0x243)]!=='disabledTrace'&&_0x1152c0(_0x30f5ce(_0x7bd5b(0x1ea),_0x5c312f,_0x3fc0e4(),_0x12ecc2,_0x43296b));},'consoleTime':()=>{var _0x40a9bf=_0x312442;_0x289f54[_0x40a9bf(0x28a)][_0x40a9bf(0x1cd)]=_0x7b6e0e(_0x289f54['console'][_0x40a9bf(0x1cd)]);},'consoleTimeEnd':()=>{var _0x2723c5=_0x312442;_0x289f54[_0x2723c5(0x28a)][_0x2723c5(0x1b8)]=_0x3c8ef5(_0x289f54[_0x2723c5(0x28a)][_0x2723c5(0x1b8)]);},'autoLog':(_0x8ea6f,_0x1c22e6)=>{var _0x3d5a9b=_0x312442;_0x1152c0(_0x30f5ce(_0x3d5a9b(0x25f),_0x1c22e6,_0x3fc0e4(),_0x12ecc2,[_0x8ea6f]));},'autoLogMany':(_0x2eb901,_0x353773)=>{var _0x4f73ec=_0x312442;_0x1152c0(_0x30f5ce(_0x4f73ec(0x25f),_0x2eb901,_0x3fc0e4(),_0x12ecc2,_0x353773));},'autoTrace':(_0x426610,_0x2d8dbb)=>{var _0x5ddbad=_0x312442;_0x1152c0(_0x30f5ce(_0x5ddbad(0x1ea),_0x2d8dbb,_0x3fc0e4(),_0x12ecc2,[_0x426610]));},'autoTraceMany':(_0x425e00,_0x239ffe)=>{_0x1152c0(_0x30f5ce('trace',_0x425e00,_0x3fc0e4(),_0x12ecc2,_0x239ffe));},'autoTime':(_0x54f445,_0x3865a3,_0x336fe5)=>{_0x47415f(_0x336fe5);},'autoTimeEnd':(_0x25ab2c,_0x2f1951,_0x1705ec)=>{_0x294520(_0x2f1951,_0x1705ec);}};let _0x1152c0=V(_0x289f54,_0x29789e,_0x2f548f,_0x2fbd9e,_0x21dd5e),_0x12ecc2=_0x289f54['_console_ninja_session'];class _0x1d1f90{constructor(){var _0x11adf9=_0x312442;this[_0x11adf9(0x1e8)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x11adf9(0x1c5)]=/^(0|[1-9][0-9]*)$/,this[_0x11adf9(0x210)]=/'([^\\\\']|\\\\')*'/,this[_0x11adf9(0x237)]=_0x289f54[_0x11adf9(0x281)],this[_0x11adf9(0x277)]=_0x289f54['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x11adf9(0x244)],this[_0x11adf9(0x207)]=Object[_0x11adf9(0x230)],this['_Symbol']=_0x289f54[_0x11adf9(0x1c9)],this[_0x11adf9(0x1cc)]=RegExp[_0x11adf9(0x1c8)][_0x11adf9(0x21f)],this[_0x11adf9(0x241)]=Date['prototype'][_0x11adf9(0x21f)];}[_0x312442(0x238)](_0x4d0e15,_0x5389a6,_0x257208,_0x52c0b3){var _0x2f3f66=_0x312442,_0x1ac22e=this,_0x59abc6=_0x257208[_0x2f3f66(0x1b6)];function _0x3de612(_0x1a97aa,_0x1697d6,_0x2a7731){var _0xd123b=_0x2f3f66;_0x1697d6['type']=_0xd123b(0x26c),_0x1697d6[_0xd123b(0x223)]=_0x1a97aa[_0xd123b(0x25e)],_0x170616=_0x2a7731['node'][_0xd123b(0x1d1)],_0x2a7731[_0xd123b(0x1bd)][_0xd123b(0x1d1)]=_0x1697d6,_0x1ac22e['_treeNodePropertiesBeforeFullValue'](_0x1697d6,_0x2a7731);}try{_0x257208[_0x2f3f66(0x212)]++,_0x257208[_0x2f3f66(0x1b6)]&&_0x257208[_0x2f3f66(0x266)]['push'](_0x5389a6);var _0x42be5e,_0x284614,_0x33a2a3,_0x11f419,_0x262728=[],_0x5b8cd7=[],_0x4815d4,_0x928c76=this[_0x2f3f66(0x1d9)](_0x5389a6),_0x2d4b7d=_0x928c76===_0x2f3f66(0x1e9),_0x3b09ba=!0x1,_0x4dd58d=_0x928c76===_0x2f3f66(0x1de),_0x5f228a=this[_0x2f3f66(0x25b)](_0x928c76),_0x3b467a=this[_0x2f3f66(0x289)](_0x928c76),_0x2bc2e1=_0x5f228a||_0x3b467a,_0x76cbd1={},_0x287cc4=0x0,_0x5cd77c=!0x1,_0x170616,_0x8ff245=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x257208['depth']){if(_0x2d4b7d){if(_0x284614=_0x5389a6['length'],_0x284614>_0x257208['elements']){for(_0x33a2a3=0x0,_0x11f419=_0x257208[_0x2f3f66(0x252)],_0x42be5e=_0x33a2a3;_0x42be5e<_0x11f419;_0x42be5e++)_0x5b8cd7[_0x2f3f66(0x1ae)](_0x1ac22e[_0x2f3f66(0x265)](_0x262728,_0x5389a6,_0x928c76,_0x42be5e,_0x257208));_0x4d0e15[_0x2f3f66(0x264)]=!0x0;}else{for(_0x33a2a3=0x0,_0x11f419=_0x284614,_0x42be5e=_0x33a2a3;_0x42be5e<_0x11f419;_0x42be5e++)_0x5b8cd7[_0x2f3f66(0x1ae)](_0x1ac22e[_0x2f3f66(0x265)](_0x262728,_0x5389a6,_0x928c76,_0x42be5e,_0x257208));}_0x257208[_0x2f3f66(0x249)]+=_0x5b8cd7[_0x2f3f66(0x229)];}if(!(_0x928c76===_0x2f3f66(0x232)||_0x928c76===_0x2f3f66(0x281))&&!_0x5f228a&&_0x928c76!==_0x2f3f66(0x1d2)&&_0x928c76!==_0x2f3f66(0x276)&&_0x928c76!==_0x2f3f66(0x288)){var _0x6f82dd=_0x52c0b3[_0x2f3f66(0x24f)]||_0x257208[_0x2f3f66(0x24f)];if(this[_0x2f3f66(0x282)](_0x5389a6)?(_0x42be5e=0x0,_0x5389a6[_0x2f3f66(0x20c)](function(_0x4e4d1d){var _0x762fa0=_0x2f3f66;if(_0x287cc4++,_0x257208[_0x762fa0(0x249)]++,_0x287cc4>_0x6f82dd){_0x5cd77c=!0x0;return;}if(!_0x257208[_0x762fa0(0x1a8)]&&_0x257208[_0x762fa0(0x1b6)]&&_0x257208[_0x762fa0(0x249)]>_0x257208[_0x762fa0(0x284)]){_0x5cd77c=!0x0;return;}_0x5b8cd7['push'](_0x1ac22e[_0x762fa0(0x265)](_0x262728,_0x5389a6,_0x762fa0(0x1c2),_0x42be5e++,_0x257208,function(_0x287a20){return function(){return _0x287a20;};}(_0x4e4d1d)));})):this[_0x2f3f66(0x1bc)](_0x5389a6)&&_0x5389a6['forEach'](function(_0x5752ec,_0x522e09){var _0x3c0031=_0x2f3f66;if(_0x287cc4++,_0x257208[_0x3c0031(0x249)]++,_0x287cc4>_0x6f82dd){_0x5cd77c=!0x0;return;}if(!_0x257208[_0x3c0031(0x1a8)]&&_0x257208[_0x3c0031(0x1b6)]&&_0x257208[_0x3c0031(0x249)]>_0x257208[_0x3c0031(0x284)]){_0x5cd77c=!0x0;return;}var _0x45fa40=_0x522e09[_0x3c0031(0x21f)]();_0x45fa40[_0x3c0031(0x229)]>0x64&&(_0x45fa40=_0x45fa40[_0x3c0031(0x254)](0x0,0x64)+_0x3c0031(0x1fa)),_0x5b8cd7[_0x3c0031(0x1ae)](_0x1ac22e[_0x3c0031(0x265)](_0x262728,_0x5389a6,_0x3c0031(0x283),_0x45fa40,_0x257208,function(_0x4b62d4){return function(){return _0x4b62d4;};}(_0x5752ec)));}),!_0x3b09ba){try{for(_0x4815d4 in _0x5389a6)if(!(_0x2d4b7d&&_0x8ff245[_0x2f3f66(0x1e1)](_0x4815d4))&&!this[_0x2f3f66(0x271)](_0x5389a6,_0x4815d4,_0x257208)){if(_0x287cc4++,_0x257208[_0x2f3f66(0x249)]++,_0x287cc4>_0x6f82dd){_0x5cd77c=!0x0;break;}if(!_0x257208[_0x2f3f66(0x1a8)]&&_0x257208['autoExpand']&&_0x257208[_0x2f3f66(0x249)]>_0x257208[_0x2f3f66(0x284)]){_0x5cd77c=!0x0;break;}_0x5b8cd7['push'](_0x1ac22e[_0x2f3f66(0x236)](_0x262728,_0x76cbd1,_0x5389a6,_0x928c76,_0x4815d4,_0x257208));}}catch{}if(_0x76cbd1[_0x2f3f66(0x1dc)]=!0x0,_0x4dd58d&&(_0x76cbd1[_0x2f3f66(0x1ed)]=!0x0),!_0x5cd77c){var _0x20015d=[][_0x2f3f66(0x23e)](this[_0x2f3f66(0x207)](_0x5389a6))[_0x2f3f66(0x23e)](this[_0x2f3f66(0x286)](_0x5389a6));for(_0x42be5e=0x0,_0x284614=_0x20015d[_0x2f3f66(0x229)];_0x42be5e<_0x284614;_0x42be5e++)if(_0x4815d4=_0x20015d[_0x42be5e],!(_0x2d4b7d&&_0x8ff245[_0x2f3f66(0x1e1)](_0x4815d4[_0x2f3f66(0x21f)]()))&&!this[_0x2f3f66(0x271)](_0x5389a6,_0x4815d4,_0x257208)&&!_0x76cbd1[_0x2f3f66(0x1d8)+_0x4815d4[_0x2f3f66(0x21f)]()]){if(_0x287cc4++,_0x257208[_0x2f3f66(0x249)]++,_0x287cc4>_0x6f82dd){_0x5cd77c=!0x0;break;}if(!_0x257208[_0x2f3f66(0x1a8)]&&_0x257208[_0x2f3f66(0x1b6)]&&_0x257208['autoExpandPropertyCount']>_0x257208['autoExpandLimit']){_0x5cd77c=!0x0;break;}_0x5b8cd7[_0x2f3f66(0x1ae)](_0x1ac22e['_addObjectProperty'](_0x262728,_0x76cbd1,_0x5389a6,_0x928c76,_0x4815d4,_0x257208));}}}}}if(_0x4d0e15[_0x2f3f66(0x204)]=_0x928c76,_0x2bc2e1?(_0x4d0e15[_0x2f3f66(0x26e)]=_0x5389a6[_0x2f3f66(0x1c6)](),this['_capIfString'](_0x928c76,_0x4d0e15,_0x257208,_0x52c0b3)):_0x928c76==='date'?_0x4d0e15[_0x2f3f66(0x26e)]=this['_dateToString'][_0x2f3f66(0x1ba)](_0x5389a6):_0x928c76===_0x2f3f66(0x288)?_0x4d0e15['value']=_0x5389a6[_0x2f3f66(0x21f)]():_0x928c76===_0x2f3f66(0x227)?_0x4d0e15[_0x2f3f66(0x26e)]=this[_0x2f3f66(0x1cc)][_0x2f3f66(0x1ba)](_0x5389a6):_0x928c76==='symbol'&&this[_0x2f3f66(0x272)]?_0x4d0e15['value']=this[_0x2f3f66(0x272)][_0x2f3f66(0x1c8)][_0x2f3f66(0x21f)]['call'](_0x5389a6):!_0x257208['depth']&&!(_0x928c76==='null'||_0x928c76===_0x2f3f66(0x281))&&(delete _0x4d0e15[_0x2f3f66(0x26e)],_0x4d0e15[_0x2f3f66(0x216)]=!0x0),_0x5cd77c&&(_0x4d0e15['cappedProps']=!0x0),_0x170616=_0x257208[_0x2f3f66(0x1bd)][_0x2f3f66(0x1d1)],_0x257208[_0x2f3f66(0x1bd)][_0x2f3f66(0x1d1)]=_0x4d0e15,this[_0x2f3f66(0x27a)](_0x4d0e15,_0x257208),_0x5b8cd7[_0x2f3f66(0x229)]){for(_0x42be5e=0x0,_0x284614=_0x5b8cd7[_0x2f3f66(0x229)];_0x42be5e<_0x284614;_0x42be5e++)_0x5b8cd7[_0x42be5e](_0x42be5e);}_0x262728['length']&&(_0x4d0e15[_0x2f3f66(0x24f)]=_0x262728);}catch(_0x290d34){_0x3de612(_0x290d34,_0x4d0e15,_0x257208);}return this['_additionalMetadata'](_0x5389a6,_0x4d0e15),this[_0x2f3f66(0x23f)](_0x4d0e15,_0x257208),_0x257208[_0x2f3f66(0x1bd)][_0x2f3f66(0x1d1)]=_0x170616,_0x257208[_0x2f3f66(0x212)]--,_0x257208['autoExpand']=_0x59abc6,_0x257208[_0x2f3f66(0x1b6)]&&_0x257208[_0x2f3f66(0x266)][_0x2f3f66(0x1ad)](),_0x4d0e15;}[_0x312442(0x286)](_0x2defce){var _0x26368f=_0x312442;return Object[_0x26368f(0x1a5)]?Object[_0x26368f(0x1a5)](_0x2defce):[];}[_0x312442(0x282)](_0x538ed4){var _0x363e47=_0x312442;return!!(_0x538ed4&&_0x289f54['Set']&&this[_0x363e47(0x20b)](_0x538ed4)===_0x363e47(0x1b5)&&_0x538ed4[_0x363e47(0x20c)]);}[_0x312442(0x271)](_0x4bb3cf,_0x576149,_0x1f822b){var _0x5247c8=_0x312442;return _0x1f822b[_0x5247c8(0x246)]?typeof _0x4bb3cf[_0x576149]==_0x5247c8(0x1de):!0x1;}[_0x312442(0x1d9)](_0x54a3ed){var _0x133383=_0x312442,_0x3d6dc3='';return _0x3d6dc3=typeof _0x54a3ed,_0x3d6dc3===_0x133383(0x23a)?this['_objectToString'](_0x54a3ed)==='[object\\x20Array]'?_0x3d6dc3='array':this[_0x133383(0x20b)](_0x54a3ed)===_0x133383(0x1f4)?_0x3d6dc3=_0x133383(0x20d):this[_0x133383(0x20b)](_0x54a3ed)===_0x133383(0x1b4)?_0x3d6dc3=_0x133383(0x288):_0x54a3ed===null?_0x3d6dc3=_0x133383(0x232):_0x54a3ed[_0x133383(0x1a3)]&&(_0x3d6dc3=_0x54a3ed[_0x133383(0x1a3)][_0x133383(0x243)]||_0x3d6dc3):_0x3d6dc3===_0x133383(0x281)&&this[_0x133383(0x277)]&&_0x54a3ed instanceof this[_0x133383(0x277)]&&(_0x3d6dc3='HTMLAllCollection'),_0x3d6dc3;}[_0x312442(0x20b)](_0x3f9962){var _0x230913=_0x312442;return Object[_0x230913(0x1c8)][_0x230913(0x21f)][_0x230913(0x1ba)](_0x3f9962);}[_0x312442(0x25b)](_0x5d7847){var _0x357c83=_0x312442;return _0x5d7847===_0x357c83(0x239)||_0x5d7847==='string'||_0x5d7847===_0x357c83(0x226);}[_0x312442(0x289)](_0x126c23){var _0x5bc3da=_0x312442;return _0x126c23===_0x5bc3da(0x23d)||_0x126c23===_0x5bc3da(0x1d2)||_0x126c23===_0x5bc3da(0x263);}['_addProperty'](_0xc726db,_0x9055f1,_0x48e167,_0x525d7c,_0x2a2d6d,_0x260b43){var _0x4440e7=this;return function(_0x26da21){var _0x166261=_0x578d,_0x2fca76=_0x2a2d6d[_0x166261(0x1bd)][_0x166261(0x1d1)],_0x47e39e=_0x2a2d6d[_0x166261(0x1bd)][_0x166261(0x205)],_0x35d83e=_0x2a2d6d[_0x166261(0x1bd)][_0x166261(0x1d0)];_0x2a2d6d[_0x166261(0x1bd)]['parent']=_0x2fca76,_0x2a2d6d[_0x166261(0x1bd)][_0x166261(0x205)]=typeof _0x525d7c==_0x166261(0x226)?_0x525d7c:_0x26da21,_0xc726db['push'](_0x4440e7[_0x166261(0x257)](_0x9055f1,_0x48e167,_0x525d7c,_0x2a2d6d,_0x260b43)),_0x2a2d6d[_0x166261(0x1bd)][_0x166261(0x1d0)]=_0x35d83e,_0x2a2d6d[_0x166261(0x1bd)]['index']=_0x47e39e;};}[_0x312442(0x236)](_0x4dde0b,_0x3cfaa4,_0x5bba70,_0x1e29d3,_0x2e93de,_0x594736,_0x3651f8){var _0x1b9bbd=_0x312442,_0x5754a5=this;return _0x3cfaa4[_0x1b9bbd(0x1d8)+_0x2e93de[_0x1b9bbd(0x21f)]()]=!0x0,function(_0x1ead38){var _0x417bb1=_0x1b9bbd,_0xdd7dc9=_0x594736['node'][_0x417bb1(0x1d1)],_0x2930d9=_0x594736[_0x417bb1(0x1bd)][_0x417bb1(0x205)],_0x27afad=_0x594736[_0x417bb1(0x1bd)][_0x417bb1(0x1d0)];_0x594736[_0x417bb1(0x1bd)][_0x417bb1(0x1d0)]=_0xdd7dc9,_0x594736[_0x417bb1(0x1bd)][_0x417bb1(0x205)]=_0x1ead38,_0x4dde0b[_0x417bb1(0x1ae)](_0x5754a5[_0x417bb1(0x257)](_0x5bba70,_0x1e29d3,_0x2e93de,_0x594736,_0x3651f8)),_0x594736[_0x417bb1(0x1bd)]['parent']=_0x27afad,_0x594736['node'][_0x417bb1(0x205)]=_0x2930d9;};}['_property'](_0x558a48,_0x3ff37d,_0x8c7d12,_0x5573c9,_0x1347c3){var _0x3e6fe4=_0x312442,_0x4736fb=this;_0x1347c3||(_0x1347c3=function(_0x1bf36d,_0x23f973){return _0x1bf36d[_0x23f973];});var _0x4c0e53=_0x8c7d12[_0x3e6fe4(0x21f)](),_0x28a1a6=_0x5573c9[_0x3e6fe4(0x228)]||{},_0x1af6ca=_0x5573c9[_0x3e6fe4(0x1fc)],_0x433cc4=_0x5573c9[_0x3e6fe4(0x1a8)];try{var _0x5e5eb8=this['_isMap'](_0x558a48),_0x224925=_0x4c0e53;_0x5e5eb8&&_0x224925[0x0]==='\\x27'&&(_0x224925=_0x224925[_0x3e6fe4(0x1cf)](0x1,_0x224925[_0x3e6fe4(0x229)]-0x2));var _0x3749ac=_0x5573c9['expressionsToEvaluate']=_0x28a1a6['_p_'+_0x224925];_0x3749ac&&(_0x5573c9[_0x3e6fe4(0x1fc)]=_0x5573c9[_0x3e6fe4(0x1fc)]+0x1),_0x5573c9[_0x3e6fe4(0x1a8)]=!!_0x3749ac;var _0x1f2227=typeof _0x8c7d12==_0x3e6fe4(0x240),_0x328d23={'name':_0x1f2227||_0x5e5eb8?_0x4c0e53:this[_0x3e6fe4(0x1ef)](_0x4c0e53)};if(_0x1f2227&&(_0x328d23['symbol']=!0x0),!(_0x3ff37d===_0x3e6fe4(0x1e9)||_0x3ff37d===_0x3e6fe4(0x1be))){var _0x279e70=this[_0x3e6fe4(0x25d)](_0x558a48,_0x8c7d12);if(_0x279e70&&(_0x279e70[_0x3e6fe4(0x224)]&&(_0x328d23['setter']=!0x0),_0x279e70[_0x3e6fe4(0x1c1)]&&!_0x3749ac&&!_0x5573c9[_0x3e6fe4(0x1f1)]))return _0x328d23[_0x3e6fe4(0x261)]=!0x0,this[_0x3e6fe4(0x24a)](_0x328d23,_0x5573c9),_0x328d23;}var _0xf686d0;try{_0xf686d0=_0x1347c3(_0x558a48,_0x8c7d12);}catch(_0x258f00){return _0x328d23={'name':_0x4c0e53,'type':_0x3e6fe4(0x26c),'error':_0x258f00[_0x3e6fe4(0x25e)]},this[_0x3e6fe4(0x24a)](_0x328d23,_0x5573c9),_0x328d23;}var _0x117616=this['_type'](_0xf686d0),_0x5977d8=this[_0x3e6fe4(0x25b)](_0x117616);if(_0x328d23[_0x3e6fe4(0x204)]=_0x117616,_0x5977d8)this[_0x3e6fe4(0x24a)](_0x328d23,_0x5573c9,_0xf686d0,function(){var _0x322f68=_0x3e6fe4;_0x328d23['value']=_0xf686d0['valueOf'](),!_0x3749ac&&_0x4736fb[_0x322f68(0x279)](_0x117616,_0x328d23,_0x5573c9,{});});else{var _0x45ecd4=_0x5573c9[_0x3e6fe4(0x1b6)]&&_0x5573c9['level']<_0x5573c9[_0x3e6fe4(0x1f3)]&&_0x5573c9['autoExpandPreviousObjects'][_0x3e6fe4(0x26f)](_0xf686d0)<0x0&&_0x117616!==_0x3e6fe4(0x1de)&&_0x5573c9[_0x3e6fe4(0x249)]<_0x5573c9[_0x3e6fe4(0x284)];_0x45ecd4||_0x5573c9[_0x3e6fe4(0x212)]<_0x1af6ca||_0x3749ac?(this[_0x3e6fe4(0x238)](_0x328d23,_0xf686d0,_0x5573c9,_0x3749ac||{}),this[_0x3e6fe4(0x201)](_0xf686d0,_0x328d23)):this[_0x3e6fe4(0x24a)](_0x328d23,_0x5573c9,_0xf686d0,function(){var _0x2bcb77=_0x3e6fe4;_0x117616==='null'||_0x117616===_0x2bcb77(0x281)||(delete _0x328d23[_0x2bcb77(0x26e)],_0x328d23[_0x2bcb77(0x216)]=!0x0);});}return _0x328d23;}finally{_0x5573c9[_0x3e6fe4(0x228)]=_0x28a1a6,_0x5573c9[_0x3e6fe4(0x1fc)]=_0x1af6ca,_0x5573c9['isExpressionToEvaluate']=_0x433cc4;}}[_0x312442(0x279)](_0x2c6f83,_0x44a500,_0xbfbae3,_0x253117){var _0x5b7148=_0x312442,_0x343096=_0x253117[_0x5b7148(0x1a6)]||_0xbfbae3['strLength'];if((_0x2c6f83===_0x5b7148(0x242)||_0x2c6f83==='String')&&_0x44a500[_0x5b7148(0x26e)]){let _0x4c83df=_0x44a500[_0x5b7148(0x26e)][_0x5b7148(0x229)];_0xbfbae3[_0x5b7148(0x25c)]+=_0x4c83df,_0xbfbae3[_0x5b7148(0x25c)]>_0xbfbae3[_0x5b7148(0x1f6)]?(_0x44a500[_0x5b7148(0x216)]='',delete _0x44a500['value']):_0x4c83df>_0x343096&&(_0x44a500[_0x5b7148(0x216)]=_0x44a500[_0x5b7148(0x26e)][_0x5b7148(0x1cf)](0x0,_0x343096),delete _0x44a500[_0x5b7148(0x26e)]);}}[_0x312442(0x1bc)](_0xc88439){var _0x31bf6a=_0x312442;return!!(_0xc88439&&_0x289f54['Map']&&this[_0x31bf6a(0x20b)](_0xc88439)==='[object\\x20Map]'&&_0xc88439[_0x31bf6a(0x20c)]);}[_0x312442(0x1ef)](_0x594cba){var _0x11561a=_0x312442;if(_0x594cba['match'](/^\\d+$/))return _0x594cba;var _0x4fa23d;try{_0x4fa23d=JSON[_0x11561a(0x27c)](''+_0x594cba);}catch{_0x4fa23d='\\x22'+this[_0x11561a(0x20b)](_0x594cba)+'\\x22';}return _0x4fa23d[_0x11561a(0x1fb)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x4fa23d=_0x4fa23d['substr'](0x1,_0x4fa23d[_0x11561a(0x229)]-0x2):_0x4fa23d=_0x4fa23d[_0x11561a(0x1f5)](/'/g,'\\x5c\\x27')[_0x11561a(0x1f5)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x4fa23d;}[_0x312442(0x24a)](_0x3faa2e,_0x4a5593,_0x1b0e78,_0x24e995){var _0x2d5288=_0x312442;this[_0x2d5288(0x27a)](_0x3faa2e,_0x4a5593),_0x24e995&&_0x24e995(),this[_0x2d5288(0x201)](_0x1b0e78,_0x3faa2e),this[_0x2d5288(0x23f)](_0x3faa2e,_0x4a5593);}[_0x312442(0x27a)](_0x1bcbdb,_0x1b73c1){var _0xc18741=_0x312442;this[_0xc18741(0x27b)](_0x1bcbdb,_0x1b73c1),this[_0xc18741(0x285)](_0x1bcbdb,_0x1b73c1),this[_0xc18741(0x1f0)](_0x1bcbdb,_0x1b73c1),this[_0xc18741(0x211)](_0x1bcbdb,_0x1b73c1);}['_setNodeId'](_0xddab67,_0x2358fb){}['_setNodeQueryPath'](_0x50ac21,_0x46bf6c){}[_0x312442(0x273)](_0x4b6c5c,_0x26477a){}[_0x312442(0x1e0)](_0x1bd1dc){var _0x39d919=_0x312442;return _0x1bd1dc===this[_0x39d919(0x237)];}['_treeNodePropertiesAfterFullValue'](_0x2e3b9d,_0x3f705d){var _0x9e7f60=_0x312442;this['_setNodeLabel'](_0x2e3b9d,_0x3f705d),this['_setNodeExpandableState'](_0x2e3b9d),_0x3f705d['sortProps']&&this[_0x9e7f60(0x1b9)](_0x2e3b9d),this['_addFunctionsNode'](_0x2e3b9d,_0x3f705d),this['_addLoadNode'](_0x2e3b9d,_0x3f705d),this['_cleanNode'](_0x2e3b9d);}[_0x312442(0x201)](_0x2466b8,_0x5337f1){var _0x1c5fc0=_0x312442;let _0x38a472;try{_0x289f54[_0x1c5fc0(0x28a)]&&(_0x38a472=_0x289f54[_0x1c5fc0(0x28a)]['error'],_0x289f54['console'][_0x1c5fc0(0x223)]=function(){}),_0x2466b8&&typeof _0x2466b8[_0x1c5fc0(0x229)]==_0x1c5fc0(0x226)&&(_0x5337f1[_0x1c5fc0(0x229)]=_0x2466b8[_0x1c5fc0(0x229)]);}catch{}finally{_0x38a472&&(_0x289f54[_0x1c5fc0(0x28a)][_0x1c5fc0(0x223)]=_0x38a472);}if(_0x5337f1[_0x1c5fc0(0x204)]===_0x1c5fc0(0x226)||_0x5337f1['type']===_0x1c5fc0(0x263)){if(isNaN(_0x5337f1[_0x1c5fc0(0x26e)]))_0x5337f1[_0x1c5fc0(0x1bb)]=!0x0,delete _0x5337f1[_0x1c5fc0(0x26e)];else switch(_0x5337f1[_0x1c5fc0(0x26e)]){case Number[_0x1c5fc0(0x203)]:_0x5337f1[_0x1c5fc0(0x278)]=!0x0,delete _0x5337f1[_0x1c5fc0(0x26e)];break;case Number[_0x1c5fc0(0x26d)]:_0x5337f1[_0x1c5fc0(0x231)]=!0x0,delete _0x5337f1['value'];break;case 0x0:this['_isNegativeZero'](_0x5337f1[_0x1c5fc0(0x26e)])&&(_0x5337f1[_0x1c5fc0(0x1ec)]=!0x0);break;}}else _0x5337f1[_0x1c5fc0(0x204)]===_0x1c5fc0(0x1de)&&typeof _0x2466b8[_0x1c5fc0(0x243)]==_0x1c5fc0(0x242)&&_0x2466b8[_0x1c5fc0(0x243)]&&_0x5337f1[_0x1c5fc0(0x243)]&&_0x2466b8[_0x1c5fc0(0x243)]!==_0x5337f1[_0x1c5fc0(0x243)]&&(_0x5337f1[_0x1c5fc0(0x1d5)]=_0x2466b8['name']);}['_isNegativeZero'](_0x4c6aff){return 0x1/_0x4c6aff===Number['NEGATIVE_INFINITY'];}[_0x312442(0x1b9)](_0x497cb3){var _0xf7acd2=_0x312442;!_0x497cb3['props']||!_0x497cb3[_0xf7acd2(0x24f)]['length']||_0x497cb3[_0xf7acd2(0x204)]===_0xf7acd2(0x1e9)||_0x497cb3[_0xf7acd2(0x204)]===_0xf7acd2(0x283)||_0x497cb3[_0xf7acd2(0x204)]===_0xf7acd2(0x1c2)||_0x497cb3[_0xf7acd2(0x24f)]['sort'](function(_0x544e1d,_0x181b19){var _0x4faefa=_0xf7acd2,_0x5b0d23=_0x544e1d[_0x4faefa(0x243)]['toLowerCase'](),_0x541ae8=_0x181b19[_0x4faefa(0x243)][_0x4faefa(0x1a4)]();return _0x5b0d23<_0x541ae8?-0x1:_0x5b0d23>_0x541ae8?0x1:0x0;});}['_addFunctionsNode'](_0x28d738,_0x103619){var _0x33c5da=_0x312442;if(!(_0x103619['noFunctions']||!_0x28d738['props']||!_0x28d738[_0x33c5da(0x24f)]['length'])){for(var _0x2a270a=[],_0x4e33fa=[],_0x2c6d7e=0x0,_0x14df7c=_0x28d738[_0x33c5da(0x24f)][_0x33c5da(0x229)];_0x2c6d7e<_0x14df7c;_0x2c6d7e++){var _0x10f3d1=_0x28d738[_0x33c5da(0x24f)][_0x2c6d7e];_0x10f3d1['type']==='function'?_0x2a270a[_0x33c5da(0x1ae)](_0x10f3d1):_0x4e33fa['push'](_0x10f3d1);}if(!(!_0x4e33fa['length']||_0x2a270a[_0x33c5da(0x229)]<=0x1)){_0x28d738[_0x33c5da(0x24f)]=_0x4e33fa;var _0x5ca4bf={'functionsNode':!0x0,'props':_0x2a270a};this[_0x33c5da(0x27b)](_0x5ca4bf,_0x103619),this[_0x33c5da(0x273)](_0x5ca4bf,_0x103619),this['_setNodeExpandableState'](_0x5ca4bf),this[_0x33c5da(0x211)](_0x5ca4bf,_0x103619),_0x5ca4bf['id']+='\\x20f',_0x28d738[_0x33c5da(0x24f)]['unshift'](_0x5ca4bf);}}}[_0x312442(0x267)](_0x557253,_0x20b969){}['_setNodeExpandableState'](_0x4cbf1f){}[_0x312442(0x287)](_0x7120b7){var _0x10aef3=_0x312442;return Array[_0x10aef3(0x24d)](_0x7120b7)||typeof _0x7120b7==_0x10aef3(0x23a)&&this['_objectToString'](_0x7120b7)===_0x10aef3(0x208);}['_setNodePermissions'](_0x4a77cc,_0x4953e7){}[_0x312442(0x26b)](_0x3af415){delete _0x3af415['_hasSymbolPropertyOnItsPath'],delete _0x3af415['_hasSetOnItsPath'],delete _0x3af415['_hasMapOnItsPath'];}['_setNodeExpressionPath'](_0x107946,_0x27dfee){}[_0x312442(0x1fd)](_0x47b20f){var _0x42749f=_0x312442;return _0x47b20f?_0x47b20f[_0x42749f(0x1fb)](this[_0x42749f(0x1c5)])?'['+_0x47b20f+']':_0x47b20f[_0x42749f(0x1fb)](this[_0x42749f(0x1e8)])?'.'+_0x47b20f:_0x47b20f[_0x42749f(0x1fb)](this[_0x42749f(0x210)])?'['+_0x47b20f+']':'[\\x27'+_0x47b20f+'\\x27]':'';}}let _0x2c77a6=new _0x1d1f90();function _0x30f5ce(_0x4a8d2c,_0x127609,_0x5584c5,_0x3d8b57,_0x5c20d7,_0x363023){var _0x510a6b=_0x312442;let _0x3acdaf,_0x3e21a3;try{_0x3e21a3=_0x32c2bf(),_0x3acdaf=_0x21d36a[_0x127609],!_0x3acdaf||_0x3e21a3-_0x3acdaf['ts']>0x1f4&&_0x3acdaf['count']&&_0x3acdaf[_0x510a6b(0x1cd)]/_0x3acdaf[_0x510a6b(0x248)]<0x64?(_0x21d36a[_0x127609]=_0x3acdaf={'count':0x0,'time':0x0,'ts':_0x3e21a3},_0x21d36a[_0x510a6b(0x219)]={}):_0x3e21a3-_0x21d36a[_0x510a6b(0x219)]['ts']>0x32&&_0x21d36a[_0x510a6b(0x219)]['count']&&_0x21d36a['hits'][_0x510a6b(0x1cd)]/_0x21d36a[_0x510a6b(0x219)][_0x510a6b(0x248)]<0x64&&(_0x21d36a[_0x510a6b(0x219)]={});let _0x214d37=[],_0x1a52d7=_0x3acdaf[_0x510a6b(0x1f7)]||_0x21d36a[_0x510a6b(0x219)][_0x510a6b(0x1f7)]?_0x544250:_0xdf602,_0x96c8e6=_0x48b509=>{var _0x3a9d11=_0x510a6b;let _0x341499={};return _0x341499[_0x3a9d11(0x24f)]=_0x48b509[_0x3a9d11(0x24f)],_0x341499[_0x3a9d11(0x252)]=_0x48b509[_0x3a9d11(0x252)],_0x341499[_0x3a9d11(0x1a6)]=_0x48b509['strLength'],_0x341499['totalStrLength']=_0x48b509[_0x3a9d11(0x1f6)],_0x341499[_0x3a9d11(0x284)]=_0x48b509[_0x3a9d11(0x284)],_0x341499[_0x3a9d11(0x1f3)]=_0x48b509[_0x3a9d11(0x1f3)],_0x341499[_0x3a9d11(0x251)]=!0x1,_0x341499[_0x3a9d11(0x246)]=!_0x1189ff,_0x341499[_0x3a9d11(0x1fc)]=0x1,_0x341499['level']=0x0,_0x341499[_0x3a9d11(0x234)]=_0x3a9d11(0x1f2),_0x341499['rootExpression']=_0x3a9d11(0x1ca),_0x341499[_0x3a9d11(0x1b6)]=!0x0,_0x341499[_0x3a9d11(0x266)]=[],_0x341499[_0x3a9d11(0x249)]=0x0,_0x341499[_0x3a9d11(0x1f1)]=!0x0,_0x341499['allStrLength']=0x0,_0x341499[_0x3a9d11(0x1bd)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x341499;};for(var _0x439851=0x0;_0x439851<_0x5c20d7['length'];_0x439851++)_0x214d37['push'](_0x2c77a6['serialize']({'timeNode':_0x4a8d2c==='time'||void 0x0},_0x5c20d7[_0x439851],_0x96c8e6(_0x1a52d7),{}));if(_0x4a8d2c===_0x510a6b(0x1ea)){let _0x47db2c=Error[_0x510a6b(0x206)];try{Error[_0x510a6b(0x206)]=0x1/0x0,_0x214d37[_0x510a6b(0x1ae)](_0x2c77a6[_0x510a6b(0x238)]({'stackNode':!0x0},new Error()[_0x510a6b(0x1b3)],_0x96c8e6(_0x1a52d7),{'strLength':0x1/0x0}));}finally{Error[_0x510a6b(0x206)]=_0x47db2c;}}return{'method':_0x510a6b(0x25f),'version':_0x592253,'args':[{'ts':_0x5584c5,'session':_0x3d8b57,'args':_0x214d37,'id':_0x127609,'context':_0x363023}]};}catch(_0x3f61c9){return{'method':'log','version':_0x592253,'args':[{'ts':_0x5584c5,'session':_0x3d8b57,'args':[{'type':_0x510a6b(0x26c),'error':_0x3f61c9&&_0x3f61c9[_0x510a6b(0x25e)]}],'id':_0x127609,'context':_0x363023}]};}finally{try{if(_0x3acdaf&&_0x3e21a3){let _0x2a7f65=_0x32c2bf();_0x3acdaf[_0x510a6b(0x248)]++,_0x3acdaf[_0x510a6b(0x1cd)]+=_0x5961dd(_0x3e21a3,_0x2a7f65),_0x3acdaf['ts']=_0x2a7f65,_0x21d36a['hits'][_0x510a6b(0x248)]++,_0x21d36a[_0x510a6b(0x219)][_0x510a6b(0x1cd)]+=_0x5961dd(_0x3e21a3,_0x2a7f65),_0x21d36a[_0x510a6b(0x219)]['ts']=_0x2a7f65,(_0x3acdaf['count']>0x32||_0x3acdaf[_0x510a6b(0x1cd)]>0x64)&&(_0x3acdaf['reduceLimits']=!0x0),(_0x21d36a[_0x510a6b(0x219)]['count']>0x3e8||_0x21d36a[_0x510a6b(0x219)][_0x510a6b(0x1cd)]>0x12c)&&(_0x21d36a['hits'][_0x510a6b(0x1f7)]=!0x0);}}catch{}}}return _0x289f54['_console_ninja'];})(globalThis,_0x3ba83d(0x20f),_0x3ba83d(0x1aa),_0x3ba83d(0x1e7),'webpack','1.0.0',_0x3ba83d(0x1af),_0x3ba83d(0x1a2),_0x3ba83d(0x245));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
/* harmony export */   getWeatherIcon: () => (/* binding */ getWeatherIcon),
/* harmony export */   printWeatherSlider: () => (/* binding */ printWeatherSlider)
/* harmony export */ });
/* harmony import */ var _weatherApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weatherApp */ "./src/assets/weatherApp/weatherApp.js");
/* harmony import */ var _img_sunny_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/sunny.png */ "./src/assets/weatherApp/weatherSlider/img/sunny.png");
/* harmony import */ var _img_partly_cloudy_day_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/partly-cloudy-day.png */ "./src/assets/weatherApp/weatherSlider/img/partly-cloudy-day.png");
/* harmony import */ var _img_cloudy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cloudy.png */ "./src/assets/weatherApp/weatherSlider/img/cloudy.png");
/* harmony import */ var _img_overcast_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/overcast.png */ "./src/assets/weatherApp/weatherSlider/img/overcast.png");
/* harmony import */ var _img_mist_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/mist.png */ "./src/assets/weatherApp/weatherSlider/img/mist.png");
/* harmony import */ var _img_rain_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/rain.png */ "./src/assets/weatherApp/weatherSlider/img/rain.png");
/* harmony import */ var _img_snow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/snow.png */ "./src/assets/weatherApp/weatherSlider/img/snow.png");
/* harmony import */ var _img_sleet_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/sleet.png */ "./src/assets/weatherApp/weatherSlider/img/sleet.png");
/* harmony import */ var _img_thunderstorm_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/thunderstorm.png */ "./src/assets/weatherApp/weatherSlider/img/thunderstorm.png");
/* harmony import */ var _img_wind_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/wind.png */ "./src/assets/weatherApp/weatherSlider/img/wind.png");


// Import all the weather icons











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

  weatherIconDay.src = getWeatherIcon(day.condition.code);
  weatherTitleDay.innerHTML = day.condition.text;
  windValueDay.textContent = day.avgvis_km;
  tempValueDay.textContent = _weatherApp__WEBPACK_IMPORTED_MODULE_0__.usingFahrenheit ? Math.round(day.avgtemp_f) : Math.round(day.avgtemp_c);
  humidityValueDay.textContent = day.avghumidity;
}

/**
 * Convert the code of the weather to the icon
 * @param {Number} code
 * @param {String} path
 * @return {String} icon
 */
function getWeatherIcon(code) {
  let img;
  if (code == 1000) {
    img = _img_sunny_png__WEBPACK_IMPORTED_MODULE_1__;
  } else if (code == 1003) {
    img = _img_partly_cloudy_day_png__WEBPACK_IMPORTED_MODULE_2__;
  } else if (code == 1006) {
    img = _img_cloudy_png__WEBPACK_IMPORTED_MODULE_3__;
  } else if (code == 1009) {
    img = _img_overcast_png__WEBPACK_IMPORTED_MODULE_4__;
  } else if (code == 1030 || code == 1135 || code == 1147) { // All the mist codes
    img = _img_mist_png__WEBPACK_IMPORTED_MODULE_5__;
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
    img = _img_rain_png__WEBPACK_IMPORTED_MODULE_6__;
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
    img = _img_snow_png__WEBPACK_IMPORTED_MODULE_7__;
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
    img = _img_sleet_png__WEBPACK_IMPORTED_MODULE_8__;
  } else if (code == 1087 ||
    code == 1273 ||
    code == 1276 ||
    code == 1279 ||
    code == 1282) { // All the thunderstorm codes
    img = _img_thunderstorm_png__WEBPACK_IMPORTED_MODULE_9__;
  } else if (code == 1117) { // All the wind codes
    img = _img_wind_png__WEBPACK_IMPORTED_MODULE_10__;
  }
  return img;
}




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

/***/ "./src/assets/weatherApp/weatherSlider/img/cloudy.png":
/*!************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/cloudy.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d7f0984deb69cdcc507.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/mist.png":
/*!**********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/mist.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dde8fde40633e95f6b1.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/overcast.png":
/*!**************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/overcast.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb7edc2b3add55a6fd54.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/partly-cloudy-day.png":
/*!***********************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/partly-cloudy-day.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4041ab7ca22dedc294ea.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/rain.png":
/*!**********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/rain.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfefc3aef7def265b28a.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/sleet.png":
/*!***********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/sleet.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3724db0fa8c8771a4ea1.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/snow.png":
/*!**********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/snow.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ede0c5402850166b24f.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/sunny.png":
/*!***********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/sunny.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67be78f859ee6384a6ca.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/thunderstorm.png":
/*!******************************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/thunderstorm.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c557b5d54830aecffce3.png";

/***/ }),

/***/ "./src/assets/weatherApp/weatherSlider/img/wind.png":
/*!**********************************************************!*\
  !*** ./src/assets/weatherApp/weatherSlider/img/wind.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee8be689f57ecc68a9e8.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixVQUFVLDBDQUFPO0FBQ2pCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFVBQVUsMkNBQVE7QUFDbEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixVQUFVLGtEQUFlO0FBQ3pCLElBQUkseUJBQXlCO0FBQzdCLFVBQVUsMkNBQU87QUFDakI7QUFDQTtBQUNBOztBQUU0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR2xCO0FBQ0E7QUFDQztBQUNEO0FBQ007QUFDTjtBQUNxQztBQUNwQjtBQUM2QjtBQUN5QjtBQUNTOzs7QUFHMUc7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhFQUFlO0FBQ2pCLEVBQUUsa0ZBQWlCO0FBQ25CLEVBQUUsOEZBQThCO0FBQ2hDLEVBQUUsb0dBQW9CO0FBQ3RCLEVBQUUsb0dBQW9CO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBVTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9ob3VybHlTbGlkZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2xvYWRpbmcuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL3NlYXJjaC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3Mvc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvZ2xvYmFsLmNzcz81ODRhIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2hlYWRlci5jc3M/OGFjMSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9ob3VybHlTbGlkZXIuY3NzP2U2ZTMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvbG9hZGluZy5jc3M/YjZjNyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9zZWFyY2guY3NzPzQ0NjkiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3Mvc2xpZGVyLmNzcz8wNDlhIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvYXBpQ2FsbHMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvdXRpbHMvc2V0TG9hZGluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy91dGlscy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC9mYWhyZW5oZWl0Q2hlY2svZmFocmVuaGVpdENoZWNrLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvaGVhZGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL2hvdXJseVNsaWRlci9ob3VybHlTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC9zZWFyY2hCb3gvc2VhcmNoQm94LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlckFwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvc2xpZGVyQXJyb3dzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlclNsaWRlci93ZWF0aGVyU2xpZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAxMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMjM2LDI0MiwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG59XG5cbiNyb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHFGQUFxRjtBQUN2Rjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAxMDA7NDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zIEpQXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogcmdiKDIzNiwyNDIsMjU1KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMjM2LDI0MiwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XFxufVxcblxcbiNyb290IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4IDBweCAxNXB4O1xufVxuXG4uaGVhZGVyX19jaXR5X19jb250YWluZXIge1xuICBmbGV4OiAxO1xufVxuXG4uaGVhZGVyX19jaXR5X19uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGUge1xuICBjb2xvcjogI2E4YjFkZDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyX19jaXR5X19uYW1lX19jaXR5IHtcbiAgY29sb3I6ICM0OTQxNzM7XG59XG5cbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fY2l0eV9fdG1wVG9nZ2xlX190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLnN3aXRjaCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFN3aXRjaCBTdHlsZVxuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zd2l0Y2gsXG4uc3dpdGNoIGlucHV0LFxuLnN3aXRjaCAuc2xpZGVyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQxNzM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzQ5NDE3Mztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztrREFFa0Q7O0FBRWxEOzs7RUFHRSxpQkFBaUI7QUFDbkI7QUFDQSwyQ0FBMkM7QUFDM0M7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUEsZUFBZTtBQUNmO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDBweCAxNXB4O1xcbn1cXG5cXG4uaGVhZGVyX19jaXR5X19jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmhlYWRlcl9fY2l0eV9fbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZSB7XFxuICBjb2xvcjogI2E4YjFkZDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5oZWFkZXJfX2NpdHlfX25hbWVfX2NpdHkge1xcbiAgY29sb3I6ICM0OTQxNzM7XFxufVxcblxcbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19jaXR5X190bXBUb2dnbGVfX3RleHQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuLnN3aXRjaCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gICAgU3dpdGNoIFN0eWxlXFxuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnN3aXRjaCxcXG4uc3dpdGNoIGlucHV0LFxcbi5zd2l0Y2ggLnNsaWRlciB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyICovXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0MTczO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNDk0MTczO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud2VhdGhlcl9fZGF0YV9faG91cmx5IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBMUJFRTtcbiAgcGFkZGluZzogMjVweCAyNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbn1cblxuLmN1cnJlbnRfX2RheSB7XG4gIGNvbG9yOiAjRTFFQUZEO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIEhvdXJseSBTbGlkZXIgKi9cbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjVweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMjVweCAwO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDUwcHgpO1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQyRkYzO1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9faW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50ID4gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob3VybHlTbGlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2VhdGhlcl9fZGF0YV9faG91cmx5IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUExQkVFO1xcbiAgcGFkZGluZzogMjVweCAyNXB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uY3VycmVudF9fZGF5IHtcXG4gIGNvbG9yOiAjRTFFQUZEO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4vKiBIb3VybHkgU2xpZGVyICovXFxuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI1cHg7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgcGFkZGluZzogMjVweCAwO1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA1MHB4KTtcXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0MkZGMztcXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudCA+IHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LDI0MiwyNTUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5sb2FkaW5nLmxvYWRpbmctLWFjdGl2ZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9sb2FkaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHFGQUFxRjtFQUNyRixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQ0FBbUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmxvYWRpbmcubG9hZGluZy0tYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndlYXRoZXJfX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBMUJFRTtcbn1cbi5zZWFyY2hfX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjdGRjtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuLnNlYXJjaF9fZm9ybV9faW5wdXQsIC5zZWFyY2hfX2Zvcm1fX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cblxuLnNlYXJjaF9fZXJyb3Ige1xuICBjb2xvcjogI0ZGMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7IFxufVxuXG4uc2VhcmNoX19lcnJvci0taW5hY3RpdmUge1xuICBvcGFjaXR5OiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zZWFyY2guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2VhdGhlcl9fc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUExQkVFO1xcbn1cXG4uc2VhcmNoX19mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGN0ZGO1xcbiAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuLnNlYXJjaF9fZm9ybV9faW5wdXQsIC5zZWFyY2hfX2Zvcm1fX2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLnNlYXJjaF9fZXJyb3Ige1xcbiAgY29sb3I6ICNGRjAwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yczsgXFxufVxcblxcbi5zZWFyY2hfX2Vycm9yLS1pbmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53ZWF0aGVyX19kYXRhIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi53ZWF0aGVyX19zbGlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLndlYXRoZXJfX3NsaWRlcl9faW5mb3JtYXRpb25fX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2VhdGhlcl9fc2VsZWN0ZWRfX2Fycm93IHtcbiAgZmlsbDogI2E4YjFkZDtcbn1cblxuXG5cbi53ZWF0aGVyX19kYXRhX19pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG59XG4ud2VhdGhlcl9fZGF0YV9faW5mb3JtYXRpb246Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQThCMUREICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi53ZWF0aGVyX19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud2VhdGhlcl9faW5mbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNBOEIxREQ7XG59XG4ud2VhdGhlcl9faW5mbyA+IHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNDk0MTczO1xufVxuXG4ud2VhdGhlcl9faW5mb19fdW5pdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2xpZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndlYXRoZXJfX2RhdGEge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2VhdGhlcl9fc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcblxcbi53ZWF0aGVyX19zbGlkZXJfX2luZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbl9faW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2VhdGhlcl9fc2VsZWN0ZWRfX2Fycm93IHtcXG4gIGZpbGw6ICNhOGIxZGQ7XFxufVxcblxcblxcblxcbi53ZWF0aGVyX19kYXRhX19pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweCAxNXB4O1xcbn1cXG4ud2VhdGhlcl9fZGF0YV9faW5mb3JtYXRpb246Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0E4QjFERCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ud2VhdGhlcl9faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi53ZWF0aGVyX19pbmZvIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogI0E4QjFERDtcXG59XFxuLndlYXRoZXJfX2luZm8gPiBwIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjNDk0MTczO1xcbn1cXG5cXG4ud2VhdGhlcl9faW5mb19fdW5pdCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG91cmx5U2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG91cmx5U2xpZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc2V0TG9hZGluZyBmcm9tICcuLi91dGlscy9zZXRMb2FkaW5nJztcbi8qKlxuICogUmV0dXJuIHRoZSB3ZWF0aGVyIGZvciB0aGUgZ2l2ZW4gbG9jYXRpb25cbiAqIFVzZSB0aGUgd2VhdGhlcmFwaS5jb20gQVBJXG4gKiBAc2VlIGh0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL2RvY3MvXG4gKiBAc2VlIGh0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL2FwaS1leHBsb3Jlci5hc3B4XG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAqIHJldHVybiB7b2JqZWN0fSB3ZWF0aGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gIHNldExvYWRpbmcodHJ1ZSk7XG4gIC8qIGVzbGludCBtYXgtbGVuOiBbXCJlcnJvclwiLCB7IFwiaWdub3JlVXJsc1wiOiB0cnVlIH1dICovXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXRcbiAgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPW5vYCwge21vZGU6ICdjb3JzJ30pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogU2hvd3Mgb3IgaGlkZXMgdGhlIGxvYWRpbmcgc3Bpbm5lclxuICogQHBhcmFtIHtCb29sZWFufSBpc0xvYWRpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TG9hZGluZyhpc0xvYWRpbmcpIHtcbiAgY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJyk7XG4gIGxvYWRpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGluZy0tYWN0aXZlJywgaXNMb2FkaW5nKTtcbn1cblxuIiwiLyoqXG4gKiBSZXR1cm4gdGhlIGRheSBvZiB0aGUgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBFLmcuIE1vbmRheSwgVHVlc2RheSwgZXRjLlxuICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldERheShkYXRlKSB7XG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gIHJldHVybiBkYXlzW2RhdGUuZ2V0RGF5KCldO1xufVxuXG5leHBvcnQge2dldERheX07XG4iLCJpbXBvcnQge3VzaW5nRmFocmVuaGVpdCwgc2V0RmFocmVuaGVpdH0gZnJvbSAnLi4vd2VhdGhlckFwcCc7XG5cbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGZhaHJlbmhlaXQgY2hlY2tib3hcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmFocmVuaGVpdEV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBmYWhyZW5oZWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaHJlbmhlaXRfX2NoZWNrYm94Jyk7XG4gIGZhaHJlbmhlaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0RmFocmVuaGVpdCghdXNpbmdGYWhyZW5oZWl0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZhaHJlbmhlaXRFdmVudExpc3RlbmVycztcbiIsImltcG9ydCB7Z2V0RGF5fSBmcm9tICcuLi91dGlscy91dGlsaXRpZXMnO1xuXG4vKipcbiAqIFByaW50IGluIHRoZSBIZWFkZXIgdGhlIERhdGUgYW5kIHRoZSBDaXR5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2l0eSAtIENpdHkgTmFtZVxuICogQHBhcmFtIHtEYXRlfSBkYXRlIC0gRGF0ZVxuICovXG5mdW5jdGlvbiBwcmludEhlYWRlckRhdGEoY2l0eSwgZGF0ZSkge1xuICAvLyBHZXR0aW5nIERPTSBFbGVtZW50c1xuICBjb25zdCBuYW1lQ2l0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jaXR5X19uYW1lX19jaXR5Jyk7XG4gIGNvbnN0IHRleHREYXlFbGVtZW50ID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZV9fdGV4dERheScpO1xuICBjb25zdCBudW1iZXJEYXlFbGVtZW50ID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZV9fbnVtYmVyRGF5Jyk7XG4gIGNvbnN0IG1vbnRoRWxlbWVudCA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGVfX3RleHRNb250aCcpO1xuICAvLyBTZXR0aW5nIHRoZSBjb250ZW50XG4gIG5hbWVDaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGNpdHk7IC8vIENpdHkgTmFtZVxuICB0ZXh0RGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGdldERheShkYXRlKTsgLy8gRGF5IG9mIHRoZSBXZWVrXG4gIG51bWJlckRheUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRlLmdldERhdGUoKTsgLy8gRGF5IG9mIHRoZSBNb250aFxuICBtb250aEVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHttb250aDogJ2xvbmcnfSk7IC8vIE1vbnRoXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaW50SGVhZGVyRGF0YTtcbiIsImltcG9ydCB7Z2V0RGF5fSBmcm9tICcuLi8uLi91dGlscy91dGlsaXRpZXMnO1xuaW1wb3J0IHt1c2luZ0ZhaHJlbmhlaXR9IGZyb20gJy4uL3dlYXRoZXJBcHAnO1xuaW1wb3J0IHtnZXRXZWF0aGVySWNvbn0gZnJvbSAnLi4vd2VhdGhlclNsaWRlci93ZWF0aGVyU2xpZGVyJztcblxuLyoqXG4gKiBQcmludCB0aGUgaG91cmx5IHNsaWRlciBmcm9tIHRoZSBob3VybHkgbGlzdFxuICogcGFzc2VkIGFzIHBhcmFtZXRlclxuICogQHBhcmFtIHtBcnJheX0gZGF5XG4gKi9cbmZ1bmN0aW9uIHByaW50SG91cmx5U2xpZGVyKGRheSkge1xuICAvLyBNYWluIGNvbnRhaW5lciBvZiB0aGUgc2xpZGVyXG4gIGNvbnN0IGhvdXJseVNsaWRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXInKTtcbiAgaG91cmx5U2xpZGVyRWxlbWVudC5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgdGhlIHNsaWRlclxuICBjb25zdCBkYXlUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50X19kYXknKTtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBkYXlEYXRlID0gbmV3IERhdGUoZGF5LmRhdGUpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBsZXQgY3VycmVudEhvdXJJbmRleDsgLy8gSW5kZXggb2YgdGhlIGN1cnJlbnQgaG91ciBpbiB0aGUgaG91cmx5IGxpc3RcblxuICBpZiAoY3VycmVudERhdGUgPT09IGRheURhdGUpIHsgLy8gSWYgdGhlIGRheSBpcyB0b2RheVxuICAgIC8vIFRoZSBjdXJyZW50IGhvdXIgaXMgdGhlIGNvcnJlY3QgaG91ciBpbmRleCB0byBzdGFydFxuICAgIGN1cnJlbnRIb3VySW5kZXggPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gIH0gZWxzZSB7IC8vIElmIHRoZSBkYXkgaXMgbm90IHRvZGF5IHN0YXJ0IGZyb20gdGhlIGZpcnN0IGhvdXJcbiAgICBjdXJyZW50SG91ckluZGV4ID0gMDtcbiAgfVxuXG4gIGRheVRleHRFbGVtZW50LnRleHRDb250ZW50ID0gZ2V0RGF5KG5ldyBEYXRlKGRheS5kYXRlKSk7XG4gIGNvbnN0IGZpbHRlcmVkSG91cmx5TGlzdCA9IGRheS5ob3VyLnNsaWNlKGN1cnJlbnRIb3VySW5kZXgpO1xuICBmaWx0ZXJlZEhvdXJseUxpc3QuZm9yRWFjaCgoaG91cmx5KSA9PiB7XG4gICAgaG91cmx5U2xpZGVyRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIb3VybHlFbGVtZW50KGhvdXJseSkpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgSFRNTCBlbGVtZW50IGZvciB0aGUgaG91cmx5IHNsaWRlclxuICogQHBhcmFtIHtPYmplY3R9IGhvdXJseURhdGFcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlFbGVtZW50KGhvdXJseURhdGEpIHtcbiAgY29uc3QgaG91cmx5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBDcmVhdGUgdGhlIGVsZW1lbnRcbiAgaG91cmx5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudCcpOyAvLyBBZGQgdGhlIGNsYXNzXG5cbiAgY29uc3QgaG91cmx5SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgLy8gQ3JlYXRlIHRoZSBpbWFnZVxuICBob3VybHlJbWFnZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9faW1hZ2UnKTsgLy8gQWRkIHRoZSBjbGFzc1xuICBob3VybHlJbWFnZS5zcmMgPSBnZXRXZWF0aGVySWNvbihob3VybHlEYXRhLmNvbmRpdGlvbi5jb2RlKTsgLy8gR2V0IHRoZSB3ZWF0aGVyIGljb25cblxuICBjb25zdCBob3VybHlIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob3VybHlIb3VyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50X19ob3VyJyk7XG4gIGhvdXJseUhvdXIudGV4dENvbnRlbnQgPSBuZXcgRGF0ZShob3VybHlEYXRhLnRpbWUpLmdldEhvdXJzKCkgKyAnOjAwJztcblxuICBjb25zdCBob3VybHlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaG91cmx5VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX3RlbXBlcmF0dXJlJyk7XG4gIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhvdXJseVRlbXBlcmF0dXJlVmFsdWUuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX3RlbXBlcmF0dXJlX192YWx1ZScpO1xuICBob3VybHlUZW1wZXJhdHVyZVZhbHVlLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh1c2luZ0ZhaHJlbmhlaXQgPyBob3VybHlEYXRhLnRlbXBfZiA6IGhvdXJseURhdGEudGVtcF9jKTtcbiAgY29uc3QgaG91cmx5VGVtcGVyYXR1cmVVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBob3VybHlUZW1wZXJhdHVyZVVuaXQuY2xhc3NMaXN0XG4gICAgICAuYWRkKCd3ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9fdGVtcGVyYXR1cmVfX3VuaXQnLCAnd2VhdGhlcl9faW5mb19fdW5pdCcsICd3ZWF0aGVyX190ZW1wX191bml0Jyk7XG4gIGhvdXJseVRlbXBlcmF0dXJlVW5pdC50ZXh0Q29udGVudCA9ICfCsEMnO1xuXG4gIGhvdXJseVRlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGhvdXJseVRlbXBlcmF0dXJlVmFsdWUpO1xuICBob3VybHlUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZVVuaXQpO1xuXG4gIGhvdXJseUVsZW1lbnQuYXBwZW5kQ2hpbGQoaG91cmx5SW1hZ2UpO1xuICBob3VybHlFbGVtZW50LmFwcGVuZENoaWxkKGhvdXJseUhvdXIpO1xuICBob3VybHlFbGVtZW50LmFwcGVuZENoaWxkKGhvdXJseVRlbXBlcmF0dXJlKTtcblxuICByZXR1cm4gaG91cmx5RWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpbnRIb3VybHlTbGlkZXI7XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi4vLi4vYXBpQ2FsbHMvYXBpQ2FsbHMnO1xuXG5pbXBvcnQge3NldExhc3RXZWF0aGVyRGF0YSwgdXBkYXRlV2VhdGhlckFwcH0gZnJvbSAnLi4vd2VhdGhlckFwcCc7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBTZWFyY2ggQm94IFN1Ym1pdCBFdmVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2VhcmNoRXZlbnQoKSB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19mb3JtJyk7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fZm9ybV9faW5wdXQnKTtcblxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7IC8vIEdldCB0aGUgc2VhcmNoIHF1ZXJ5XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShzZWFyY2hRdWVyeSk7IC8vIEdldCB0aGUgd2VhdGhlciBkYXRhXG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJzsgLy8gQ2xlYXIgdGhlIHNlYXJjaCBpbnB1dFxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIGRpc3BsYXkgaXQgYW5kIHJldHVyblxuICAgIGlmICh3ZWF0aGVyRGF0YS5lcnJvcikge1xuICAgICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19lcnJvcicpO1xuICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnQ2l0eSBub3QgZm91bmQnO1xuICAgICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoX19lcnJvci0taW5hY3RpdmUnKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaF9fZXJyb3ItLWluYWN0aXZlJyk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBlcnJvciwgcHJpbnQgdGhlIHdlYXRoZXIgYXBwXG4gICAgc2V0TGFzdFdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgICB1cGRhdGVXZWF0aGVyQXBwKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZWFyY2hFdmVudDtcbiIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuLi9hcGlDYWxscy9hcGlDYWxscyc7XG5pbXBvcnQgcHJpbnRIZWFkZXJEYXRhIGZyb20gJy4vaGVhZGVyRGF0YSc7XG5pbXBvcnQgcHJpbnRIb3VybHlTbGlkZXIgZnJvbSAnLi9ob3VybHlTbGlkZXIvaG91cmx5U2xpZGVyJztcbmltcG9ydCB7cHJpbnRXZWF0aGVyU2xpZGVyfSBmcm9tICcuL3dlYXRoZXJTbGlkZXIvd2VhdGhlclNsaWRlcic7XG5cbmNvbnN0IGxvY2F0aW9uID0gJ03DoWxhZ2EnO1xubGV0IGxhc3RXZWF0aGVyRGF0YTtcbmxldCB1c2luZ0ZhaHJlbmhlaXQgPSBmYWxzZTtcbmxldCBjdXJyZW50RGF5SW5kZXggPSAwO1xuLyoqXG4gKiBQcmludCBhbGwgdGhlIHdlYXRoZXIgYXBwXG4gKiBTbGlkZXMgdGhlIHdlYXRoZXIgYXBwIGluIGFuZCBvdXRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcHJpbnRXZWF0aGVyQXBwKCkge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTsgLy8gR2V0IHdlYXRoZXIgZGF0YVxuICBpZiAod2VhdGhlckRhdGEuZXJyb3IpIHsgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIHByaW50IGl0IGFuZCByZXR1cm5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGBjN2VhNWU4XzBgLHdlYXRoZXJEYXRhLmVycm9yKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxhc3RXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhOyAvLyBTYXZlIHRoZSBsYXN0IHdlYXRoZXIgZGF0YVxuICB1cGRhdGVXZWF0aGVyQXBwKCk7IC8vIFVwZGF0ZSB0aGUgd2VhdGhlciBhcHBcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIGFsbCB0aGUgd2VhdGhlciBhcHBcbiAqIEhlYWRlciBkYXRhLCB3ZWF0aGVyIHNsaWRlciBhbmQgaG91cmx5IHNsaWRlclxuICogQHBhcmFtIHtPYmplY3R9IHdlYXRoZXJEYXRhXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJBcHAoKSB7XG4gIGNvbnN0IGN1cnJlbnREYXlEYXRhID0gbGFzdFdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2N1cnJlbnREYXlJbmRleF07IC8vIEdldCBjdXJyZW50IGRheVxuICBjb25zdCBjdXJyZW50Q2l0eU5hbWUgPSBsYXN0V2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTsgLy8gR2V0IGN1cnJlbnQgY2l0eSBuYW1lXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoY3VycmVudERheURhdGEuZGF0ZSk7IC8vIEdldCBjdXJyZW50IGRhdGVcbiAgcHJpbnRIZWFkZXJEYXRhKGN1cnJlbnRDaXR5TmFtZSwgY3VycmVudERhdGUpOyAvLyBQcmludCBoZWFkZXIgZGF0YVxuICBwcmludFdlYXRoZXJTbGlkZXIoY3VycmVudERheURhdGEuZGF5KTsgLy8gUHJpbnQgd2VhdGhlciBzbGlkZXJcbiAgcHJpbnRIb3VybHlTbGlkZXIoY3VycmVudERheURhdGEpOyAvLyBQcmludCBob3VybHkgc2xpZGVyXG4gIHVwZGF0ZVVuaXRzKHVzaW5nRmFocmVuaGVpdCA/ICdGJyA6ICfCsEMnKTsgLy8gVXBkYXRlIHVuaXRzXG59O1xuXG4vKipcbiAqIFVwZGF0ZSB0aGUgbGFzdCB3ZWF0aGVyIGRhdGEgd2l0aCB0aGUgbmV3IG9uZVxuICogQHBhcmFtIHtPYmplY3R9IHdlYXRoZXJEYXRhXG4gKi9cbmZ1bmN0aW9uIHNldExhc3RXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSkge1xuICBsYXN0V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YTtcbn1cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHRlbXBlcmF0dXJlIHVuaXRzIG9mIHRoZSBhbGwgdGhlIHdlYXRoZXIgYXBwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gc2V0RmFocmVuaGVpdChib29sZWFuKSB7XG4gIHVzaW5nRmFocmVuaGVpdCA9IGJvb2xlYW47XG4gIHVwZGF0ZVdlYXRoZXJBcHAobGFzdFdlYXRoZXJEYXRhKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGN1cnJlbnQgZGF5IGluZGV4XG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqL1xuZnVuY3Rpb24gc2V0Q3VycmVudERheUluZGV4KGluZGV4KSB7XG4gIGN1cnJlbnREYXlJbmRleCA9IGluZGV4O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbGwgdGhlIHVuaXRzIG9mIHRoZSB3ZWF0aGVyIGFwcFxuICogQHBhcmFtIHtTdHJpbmd9IHVuaXRzXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVVuaXRzKHVuaXRzID0gJ8KwQycpIHtcbiAgY29uc3QgdW5pdHNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVyX190ZW1wX191bml0Jyk7XG4gIHVuaXRzRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdW5pdHM7XG4gIH0pO1xufVxuXG5leHBvcnQge3ByaW50V2VhdGhlckFwcCxcbiAgdXBkYXRlV2VhdGhlckFwcCxcbiAgc2V0TGFzdFdlYXRoZXJEYXRhLFxuICBsYXN0V2VhdGhlckRhdGEsXG4gIHVzaW5nRmFocmVuaGVpdCxcbiAgc2V0RmFocmVuaGVpdCxcbiAgY3VycmVudERheUluZGV4LFxuICBzZXRDdXJyZW50RGF5SW5kZXgsXG59O1xuLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO2Z1bmN0aW9uIF8weDU3OGQoXzB4NGU2YzFhLF8weDU4MmFmNil7dmFyIF8weDMxNGNiYT1fMHgzMTRjKCk7cmV0dXJuIF8weDU3OGQ9ZnVuY3Rpb24oXzB4NTc4ZDExLF8weDEwNWU1MSl7XzB4NTc4ZDExPV8weDU3OGQxMS0weDFhMjt2YXIgXzB4M2IzOGJjPV8weDMxNGNiYVtfMHg1NzhkMTFdO3JldHVybiBfMHgzYjM4YmM7fSxfMHg1NzhkKF8weDRlNmMxYSxfMHg1ODJhZjYpO31mdW5jdGlvbiBfMHgzMTRjKCl7dmFyIF8weDJlOWQyMT1bJ2hvc3QnLCdfY29ubmVjdGVkJywnX2Nvbm5lY3RUb0hvc3ROb3cnLCdzcGxpdCcsXFxcIi9Vc2Vycy9qb3NlbWFyaWEvLnZzY29kZS1pbnNpZGVycy9leHRlbnNpb25zL3dhbGxhYnlqcy5jb25zb2xlLW5pbmphLTAuMC4xOTkvbm9kZV9tb2R1bGVzXFxcIiwnX2tleVN0clJlZ0V4cCcsJ2FycmF5JywndHJhY2UnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ25lZ2F0aXZlWmVybycsJ19wX25hbWUnLCcxOTY1OTIycll6VktIJywnX3Byb3BlcnR5TmFtZScsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdyZXNvbHZlR2V0dGVycycsJ3Jvb3RfZXhwX2lkJywnYXV0b0V4cGFuZE1heERlcHRoJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ3JlcGxhY2UnLCd0b3RhbFN0ckxlbmd0aCcsJ3JlZHVjZUxpbWl0cycsJ19XZWJTb2NrZXRDbGFzcycsJ25vdycsJy4uLicsJ21hdGNoJywnZGVwdGgnLCdfcHJvcGVydHlBY2Nlc3NvcicsJ29ubWVzc2FnZScsJ29ub3BlbicsJzE3ODA4TlBQcVRoJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ1BPU0lUSVZFX0lORklOSVRZJywndHlwZScsJ2luZGV4Jywnc3RhY2tUcmFjZUxpbWl0JywnX2dldE93blByb3BlcnR5TmFtZXMnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ2dldFdlYlNvY2tldENsYXNzJywnbWV0aG9kJywnX29iamVjdFRvU3RyaW5nJywnZm9yRWFjaCcsJ2RhdGUnLCdjYXRjaCcsJzEyNy4wLjAuMScsJ19xdW90ZWRSZWdFeHAnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnbGV2ZWwnLCdkYXRhJywndW5yZWYnLCdfcmVjb25uZWN0VGltZW91dCcsJ2NhcHBlZCcsJ3JlbWl4JywnZW51bWVyYWJsZScsJ2hpdHMnLCdjcmVhdGUnLCdlbGFwc2VkJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0Jywnbm9kZU1vZHVsZXMnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCxcXFxceDIwc2VlXFxcXHgyMCcsJ3RvU3RyaW5nJywnNDQxNFhiZXNkaScsJzEwaXpRdWZ2JywncGVyZl9ob29rcycsJ2Vycm9yJywnc2V0JywnZGVmaW5lUHJvcGVydHknLCdudW1iZXInLCdSZWdFeHAnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdsZW5ndGgnLCdfY29ubmVjdGluZycsJzg3MjE1MFJaWkxoYScsJ19fZXMnKydNb2R1bGUnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InLCdfZGlzcG9zZVdlYnNvY2tldCcsJ2dldE93blByb3BlcnR5TmFtZXMnLCduZWdhdGl2ZUluZmluaXR5JywnbnVsbCcsJ3BhcnNlJywnZXhwSWQnLCdyZWxvYWQnLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfdW5kZWZpbmVkJywnc2VyaWFsaXplJywnYm9vbGVhbicsJ29iamVjdCcsJ2hvc3RuYW1lJywnX2NvbnNvbGVfbmluamEnLCdCb29sZWFuJywnY29uY2F0JywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnc3ltYm9sJywnX2RhdGVUb1N0cmluZycsJ3N0cmluZycsJ25hbWUnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCcnLCdub0Z1bmN0aW9ucycsJ3RoZW4nLCdjb3VudCcsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJzI0Y0lPQllHJywnd3MvaW5kZXguanMnLCdpc0FycmF5JywnMjE1MzEyOVd1VU5qWCcsJ3Byb3BzJywnc2VuZCcsJ3NvcnRQcm9wcycsJ2VsZW1lbnRzJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdzbGljZScsJ19zb2NrZXQnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ19wcm9wZXJ0eScsJ29uY2xvc2UnLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ2Rpc2FibGVkTG9nJywnX2lzUHJpbWl0aXZlVHlwZScsJ2FsbFN0ckxlbmd0aCcsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdtZXNzYWdlJywnbG9nJywnXFxcXHgyMHNlcnZlcicsJ2dldHRlcicsJ2dsb2JhbCcsJ051bWJlcicsJ2NhcHBlZEVsZW1lbnRzJywnX2FkZFByb3BlcnR5JywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ19hZGRMb2FkTm9kZScsJ3BlcmZvcm1hbmNlJywnaGFzT3duUHJvcGVydHknLCdyZWFkeVN0YXRlJywnX2NsZWFuTm9kZScsJ3Vua25vd24nLCdORUdBVElWRV9JTkZJTklUWScsJ3ZhbHVlJywnaW5kZXhPZicsJ3BhdGhUb0ZpbGVVUkwnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ19TeW1ib2wnLCdfc2V0Tm9kZUxhYmVsJywnaHJ0aW1lJywnam9pbicsJ0J1ZmZlcicsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ3Bvc2l0aXZlSW5maW5pdHknLCdfY2FwSWZTdHJpbmcnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnX3NldE5vZGVJZCcsJ3N0cmluZ2lmeScsJ3BhdGgnLCdudXh0JywnbWFwJywnX1dlYlNvY2tldCcsJ3VuZGVmaW5lZCcsJ19pc1NldCcsJ01hcCcsJ2F1dG9FeHBhbmRMaW1pdCcsJ19zZXROb2RlUXVlcnlQYXRoJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ19pc0FycmF5JywnYmlnaW50JywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdjb25zb2xlJyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcIk1hY0Jvb2stUHJvLWRlLUpvc2UubG9jYWxcXFwiLFxcXCIxOTIuMTY4LjEuMTMxXFxcIl0sJ2NvbnN0cnVjdG9yJywndG9Mb3dlckNhc2UnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdzdHJMZW5ndGgnLCd2ZXJzaW9ucycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdfd3MnLCc2NDI2OScsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdfYWxsb3dlZFRvU2VuZCcsJ3BvcCcsJ3B1c2gnLCcxNjkyMzY5MTM5NTk1JywnMzMyeXBPb25HJywnNDg1MTc2MlV5SlRpSScsJ19pbkJyb3dzZXInLCdzdGFjaycsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ1tvYmplY3RcXFxceDIwU2V0XScsJ2F1dG9FeHBhbmQnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ3RpbWVFbmQnLCdfc29ydFByb3BzJywnY2FsbCcsJ25hbicsJ19pc01hcCcsJ25vZGUnLCdFcnJvcicsJ29uZXJyb3InLCc4ODA5MzE3eXBZYXpxJywnZ2V0JywnU2V0JywnV2ViU29ja2V0Jywnd2FybicsJ19udW1iZXJSZWdFeHAnLCd2YWx1ZU9mJywnMjY1VEZ1WWhrJywncHJvdG90eXBlJywnU3ltYm9sJywncm9vdF9leHAnLCdcXFxceDIwYnJvd3NlcicsJ19yZWdFeHBUb1N0cmluZycsJ3RpbWUnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ3N1YnN0cicsJ3BhcmVudCcsJ2N1cnJlbnQnLCdTdHJpbmcnLCdkZWZhdWx0JywnX3NlbmRFcnJvck1lc3NhZ2UnLCdmdW5jTmFtZScsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywncHJvY2VzcycsJ19wXycsJ190eXBlJywncG9ydCcsJ2Nsb3NlJywnX3BfbGVuZ3RoJywnbG9jYXRpb24nLCdmdW5jdGlvbicsJ3dzOi8vJywnX2lzVW5kZWZpbmVkJywndGVzdCcsJ3RpbWVTdGFtcCddO18weDMxNGM9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4MmU5ZDIxO307cmV0dXJuIF8weDMxNGMoKTt9dmFyIF8weDNiYTgzZD1fMHg1NzhkOyhmdW5jdGlvbihfMHgxMDg2ZmIsXzB4MTMxN2QxKXt2YXIgXzB4NDFhMTUyPV8weDU3OGQsXzB4MWRlODBiPV8weDEwODZmYigpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4MTVhYTMxPXBhcnNlSW50KF8weDQxYTE1MigweDFjNykpLzB4MSooLXBhcnNlSW50KF8weDQxYTE1MigweDIyMCkpLzB4MikrcGFyc2VJbnQoXzB4NDFhMTUyKDB4MjAwKSkvMHgzKihwYXJzZUludChfMHg0MWExNTIoMHgxYjApKS8weDQpKy1wYXJzZUludChfMHg0MWExNTIoMHgyMmIpKS8weDUrLXBhcnNlSW50KF8weDQxYTE1MigweDFiMSkpLzB4NistcGFyc2VJbnQoXzB4NDFhMTUyKDB4MWVlKSkvMHg3KigtcGFyc2VJbnQoXzB4NDFhMTUyKDB4MjRiKSkvMHg4KStwYXJzZUludChfMHg0MWExNTIoMHgxYzApKS8weDkrLXBhcnNlSW50KF8weDQxYTE1MigweDIyMSkpLzB4YSoocGFyc2VJbnQoXzB4NDFhMTUyKDB4MjRlKSkvMHhiKTtpZihfMHgxNWFhMzE9PT1fMHgxMzE3ZDEpYnJlYWs7ZWxzZSBfMHgxZGU4MGJbJ3B1c2gnXShfMHgxZGU4MGJbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDNlY2M4NCl7XzB4MWRlODBiWydwdXNoJ10oXzB4MWRlODBiWydzaGlmdCddKCkpO319fShfMHgzMTRjLDB4ODY1ZjQpKTt2YXIgdWU9T2JqZWN0W18weDNiYTgzZCgweDIxYSldLHRlPU9iamVjdFtfMHgzYmE4M2QoMHgyMjUpXSxoZT1PYmplY3RbXzB4M2JhODNkKDB4MjQ0KV0sbGU9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eU5hbWVzJ10sZmU9T2JqZWN0WydnZXRQcm90b3R5cGVPZiddLF9lPU9iamVjdFtfMHgzYmE4M2QoMHgxYzgpXVtfMHgzYmE4M2QoMHgyNjkpXSxwZT0oXzB4NWUwYTJjLF8weDc1YTIxOCxfMHgxMzhlNTIsXzB4M2RmNGNiKT0+e3ZhciBfMHg2ZjNmNWM9XzB4M2JhODNkO2lmKF8weDc1YTIxOCYmdHlwZW9mIF8weDc1YTIxOD09XzB4NmYzZjVjKDB4MjNhKXx8dHlwZW9mIF8weDc1YTIxOD09XzB4NmYzZjVjKDB4MWRlKSl7Zm9yKGxldCBfMHgxYWNkMzggb2YgbGUoXzB4NzVhMjE4KSkhX2VbXzB4NmYzZjVjKDB4MWJhKV0oXzB4NWUwYTJjLF8weDFhY2QzOCkmJl8weDFhY2QzOCE9PV8weDEzOGU1MiYmdGUoXzB4NWUwYTJjLF8weDFhY2QzOCx7J2dldCc6KCk9Pl8weDc1YTIxOFtfMHgxYWNkMzhdLCdlbnVtZXJhYmxlJzohKF8weDNkZjRjYj1oZShfMHg3NWEyMTgsXzB4MWFjZDM4KSl8fF8weDNkZjRjYltfMHg2ZjNmNWMoMHgyMTgpXX0pO31yZXR1cm4gXzB4NWUwYTJjO30sbmU9KF8weDViN2M4OSxfMHgxNmNjNTksXzB4MzI3ZTA2KT0+KF8weDMyN2UwNj1fMHg1YjdjODkhPW51bGw/dWUoZmUoXzB4NWI3Yzg5KSk6e30scGUoXzB4MTZjYzU5fHwhXzB4NWI3Yzg5fHwhXzB4NWI3Yzg5W18weDNiYTgzZCgweDIyYyldP3RlKF8weDMyN2UwNixfMHgzYmE4M2QoMHgxZDMpLHsndmFsdWUnOl8weDViN2M4OSwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDMyN2UwNixfMHg1YjdjODkpKSxRPWNsYXNze2NvbnN0cnVjdG9yKF8weDEwNWQyYixfMHgyMDY3NmIsXzB4NDA1NzEyLF8weDJjNTY0Yyl7dmFyIF8weDQ4ZTcwZD1fMHgzYmE4M2Q7dGhpc1tfMHg0OGU3MGQoMHgyNjIpXT1fMHgxMDVkMmIsdGhpc1tfMHg0OGU3MGQoMHgxZTMpXT1fMHgyMDY3NmIsdGhpc1tfMHg0OGU3MGQoMHgxZGEpXT1fMHg0MDU3MTIsdGhpc1snbm9kZU1vZHVsZXMnXT1fMHgyYzU2NGMsdGhpc1tfMHg0OGU3MGQoMHgxYWMpXT0hMHgwLHRoaXNbXzB4NDhlNzBkKDB4MjU5KV09ITB4MCx0aGlzW18weDQ4ZTcwZCgweDFlNCldPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbXzB4NDhlNzBkKDB4MWIyKV09ISF0aGlzW18weDQ4ZTcwZCgweDI2MildW18weDQ4ZTcwZCgweDFjMyldLHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddPW51bGwsdGhpc1tfMHg0OGU3MGQoMHgyNTYpXT0weDAsdGhpc1tfMHg0OGU3MGQoMHgxY2UpXT0weDE0LHRoaXNbXzB4NDhlNzBkKDB4MjJkKV09J2h0dHBzOi8vdGlueXVybC5jb20vMzd4OGI3OXQnLHRoaXNbXzB4NDhlNzBkKDB4MWQ0KV09KHRoaXNbXzB4NDhlNzBkKDB4MWIyKV0/XzB4NDhlNzBkKDB4MWQ2KTpfMHg0OGU3MGQoMHgxYjcpKSt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddO31hc3luY1tfMHgzYmE4M2QoMHgyMDkpXSgpe3ZhciBfMHg1ODY3Mzg9XzB4M2JhODNkO2lmKHRoaXNbXzB4NTg2NzM4KDB4MWY4KV0pcmV0dXJuIHRoaXNbXzB4NTg2NzM4KDB4MWY4KV07bGV0IF8weDkwODVhYjtpZih0aGlzW18weDU4NjczOCgweDFiMildKV8weDkwODVhYj10aGlzW18weDU4NjczOCgweDI2MildWydXZWJTb2NrZXQnXTtlbHNle2lmKHRoaXNbXzB4NTg2NzM4KDB4MjYyKV1bXzB4NTg2NzM4KDB4MWQ3KV0/LlsnX1dlYlNvY2tldCddKV8weDkwODVhYj10aGlzW18weDU4NjczOCgweDI2MildW18weDU4NjczOCgweDFkNyldPy5bXzB4NTg2NzM4KDB4MjgwKV07ZWxzZSB0cnl7bGV0IF8weDViMzNiYT1hd2FpdCBpbXBvcnQoXzB4NTg2NzM4KDB4MjdkKSk7XzB4OTA4NWFiPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydCgndXJsJykpW18weDU4NjczOCgweDI3MCldKF8weDViMzNiYVsnam9pbiddKHRoaXNbXzB4NTg2NzM4KDB4MjFkKV0sXzB4NTg2NzM4KDB4MjRjKSkpW18weDU4NjczOCgweDIxZildKCkpKVtfMHg1ODY3MzgoMHgxZDMpXTt9Y2F0Y2h7dHJ5e18weDkwODVhYj1yZXF1aXJlKHJlcXVpcmUoXzB4NTg2NzM4KDB4MjdkKSlbXzB4NTg2NzM4KDB4Mjc1KV0odGhpc1tfMHg1ODY3MzgoMHgyMWQpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHg1ODY3MzgoMHgyMWMpKTt9fX1yZXR1cm4gdGhpc1tfMHg1ODY3MzgoMHgxZjgpXT1fMHg5MDg1YWIsXzB4OTA4NWFiO31bJ19jb25uZWN0VG9Ib3N0Tm93J10oKXt2YXIgXzB4MmJmYTRiPV8weDNiYTgzZDt0aGlzW18weDJiZmE0YigweDIyYSldfHx0aGlzW18weDJiZmE0YigweDFlNCldfHx0aGlzW18weDJiZmE0YigweDI1NildPj10aGlzW18weDJiZmE0YigweDFjZSldfHwodGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MCx0aGlzW18weDJiZmE0YigweDI1NildKyssdGhpc1snX3dzJ109bmV3IFByb21pc2UoKF8weDQ0YWYyNCxfMHgyNjE5YTApPT57dmFyIF8weDM3YmIxOT1fMHgyYmZhNGI7dGhpc1tfMHgzN2JiMTkoMHgyMDkpXSgpW18weDM3YmIxOSgweDI0NyldKF8weDZlMzEyMj0+e3ZhciBfMHgyNjNhMDc9XzB4MzdiYjE5O2xldCBfMHgxN2E5NWM9bmV3IF8weDZlMzEyMihfMHgyNjNhMDcoMHgxZGYpK3RoaXNbXzB4MjYzYTA3KDB4MWUzKV0rJzonK3RoaXNbXzB4MjYzYTA3KDB4MWRhKV0pO18weDE3YTk1Y1tfMHgyNjNhMDcoMHgxYmYpXT0oKT0+e3ZhciBfMHgxYmM0MWU9XzB4MjYzYTA3O3RoaXNbXzB4MWJjNDFlKDB4MWFjKV09ITB4MSx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDE3YTk1YyksdGhpc1tfMHgxYmM0MWUoMHgxZWIpXSgpLF8weDI2MTlhMChuZXcgRXJyb3IoXzB4MWJjNDFlKDB4MjJlKSkpO30sXzB4MTdhOTVjW18weDI2M2EwNygweDFmZildPSgpPT57dmFyIF8weDU2MDM0Yj1fMHgyNjNhMDc7dGhpc1snX2luQnJvd3NlciddfHxfMHgxN2E5NWNbXzB4NTYwMzRiKDB4MjU1KV0mJl8weDE3YTk1Y1tfMHg1NjAzNGIoMHgyNTUpXVsndW5yZWYnXSYmXzB4MTdhOTVjW18weDU2MDM0YigweDI1NSldWyd1bnJlZiddKCksXzB4NDRhZjI0KF8weDE3YTk1Yyk7fSxfMHgxN2E5NWNbXzB4MjYzYTA3KDB4MjU4KV09KCk9Pnt2YXIgXzB4YmE0ODk4PV8weDI2M2EwNzt0aGlzW18weGJhNDg5OCgweDI1OSldPSEweDAsdGhpc1tfMHhiYTQ4OTgoMHgyMmYpXShfMHgxN2E5NWMpLHRoaXNbXzB4YmE0ODk4KDB4MWViKV0oKTt9LF8weDE3YTk1Y1tfMHgyNjNhMDcoMHgxZmUpXT1fMHg0NDMyZDc9Pnt2YXIgXzB4Y2YwYTk0PV8weDI2M2EwNzt0cnl7XzB4NDQzMmQ3JiZfMHg0NDMyZDdbXzB4Y2YwYTk0KDB4MjEzKV0mJnRoaXNbJ19pbkJyb3dzZXInXSYmSlNPTltfMHhjZjBhOTQoMHgyMzMpXShfMHg0NDMyZDdbXzB4Y2YwYTk0KDB4MjEzKV0pW18weGNmMGE5NCgweDIwYSldPT09XzB4Y2YwYTk0KDB4MjM1KSYmdGhpc1tfMHhjZjBhOTQoMHgyNjIpXVtfMHhjZjBhOTQoMHgxZGQpXVsncmVsb2FkJ10oKTt9Y2F0Y2h7fX07fSlbXzB4MzdiYjE5KDB4MjQ3KV0oXzB4MzM0ZmFiPT4odGhpc1tfMHgzN2JiMTkoMHgxZTQpXT0hMHgwLHRoaXNbXzB4MzdiYjE5KDB4MjJhKV09ITB4MSx0aGlzW18weDM3YmIxOSgweDI1OSldPSEweDEsdGhpc1tfMHgzN2JiMTkoMHgxYWMpXT0hMHgwLHRoaXNbXzB4MzdiYjE5KDB4MjU2KV09MHgwLF8weDMzNGZhYikpW18weDM3YmIxOSgweDIwZSldKF8weDMyOTMxNT0+KHRoaXNbXzB4MzdiYjE5KDB4MWU0KV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsY29uc29sZVtfMHgzN2JiMTkoMHgxYzQpXShfMHgzN2JiMTkoMHgyMWUpK3RoaXNbXzB4MzdiYjE5KDB4MjJkKV0pLF8weDI2MTlhMChuZXcgRXJyb3IoJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcrKF8weDMyOTMxNSYmXzB4MzI5MzE1WydtZXNzYWdlJ10pKSkpKTt9KSk7fVsnX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgxOTYxODApe3ZhciBfMHhlZjMwYzc9XzB4M2JhODNkO3RoaXNbXzB4ZWYzMGM3KDB4MWU0KV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDE7dHJ5e18weDE5NjE4MFsnb25jbG9zZSddPW51bGwsXzB4MTk2MTgwWydvbmVycm9yJ109bnVsbCxfMHgxOTYxODBbXzB4ZWYzMGM3KDB4MWZmKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHgxOTYxODBbXzB4ZWYzMGM3KDB4MjZhKV08MHgyJiZfMHgxOTYxODBbXzB4ZWYzMGM3KDB4MWRiKV0oKTt9Y2F0Y2h7fX1bXzB4M2JhODNkKDB4MWViKV0oKXt2YXIgXzB4NmE3MTU3PV8weDNiYTgzZDtjbGVhclRpbWVvdXQodGhpc1tfMHg2YTcxNTcoMHgyMTUpXSksISh0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPj10aGlzW18weDZhNzE1NygweDFjZSldKSYmKHRoaXNbXzB4NmE3MTU3KDB4MjE1KV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg0YWU1ZmQ9XzB4NmE3MTU3O3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1tfMHg0YWU1ZmQoMHgyMmEpXXx8KHRoaXNbXzB4NGFlNWZkKDB4MWU1KV0oKSx0aGlzW18weDRhZTVmZCgweDFhOSldPy5bJ2NhdGNoJ10oKCk9PnRoaXNbXzB4NGFlNWZkKDB4MWViKV0oKSkpO30sMHgxZjQpLHRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4NmE3MTU3KDB4MjE0KV0mJnRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4NmE3MTU3KDB4MjE0KV0oKSk7fWFzeW5jWydzZW5kJ10oXzB4NDIzMjY2KXt2YXIgXzB4MzE1YTc4PV8weDNiYTgzZDt0cnl7aWYoIXRoaXNbXzB4MzE1YTc4KDB4MWFjKV0pcmV0dXJuO3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ10mJnRoaXNbJ19jb25uZWN0VG9Ib3N0Tm93J10oKSwoYXdhaXQgdGhpc1tfMHgzMTVhNzgoMHgxYTkpXSlbJ3NlbmQnXShKU09OW18weDMxNWE3OCgweDI3YyldKF8weDQyMzI2NikpO31jYXRjaChfMHgzYmIxZDIpe2NvbnNvbGVbXzB4MzE1YTc4KDB4MWM0KV0odGhpc1tfMHgzMTVhNzgoMHgxZDQpXSsnOlxcXFx4MjAnKyhfMHgzYmIxZDImJl8weDNiYjFkMlsnbWVzc2FnZSddKSksdGhpc1tfMHgzMTVhNzgoMHgxYWMpXT0hMHgxLHRoaXNbXzB4MzE1YTc4KDB4MWViKV0oKTt9fX07ZnVuY3Rpb24gVihfMHgxNGMwMWIsXzB4MTkyNzU1LF8weDRhNGI2ZCxfMHgzMGYyZjEsXzB4MzhhYjJkKXt2YXIgXzB4M2I4ZGM3PV8weDNiYTgzZDtsZXQgXzB4NGU1ZjM3PV8weDRhNGI2ZFsnc3BsaXQnXSgnLCcpW18weDNiOGRjNygweDI3ZildKF8weDRhOGQ1Mj0+e3ZhciBfMHgzODQwYzI9XzB4M2I4ZGM3O3RyeXtfMHgxNGMwMWJbXzB4Mzg0MGMyKDB4MWFiKV18fCgoXzB4MzhhYjJkPT09J25leHQuanMnfHxfMHgzOGFiMmQ9PT1fMHgzODQwYzIoMHgyMTcpfHxfMHgzOGFiMmQ9PT0nYXN0cm8nKSYmKF8weDM4YWIyZCs9XzB4MTRjMDFiWydwcm9jZXNzJ10/LltfMHgzODQwYzIoMHgxYTcpXT8uWydub2RlJ10/XzB4Mzg0MGMyKDB4MjYwKTpfMHgzODQwYzIoMHgxY2IpKSxfMHgxNGMwMWJbXzB4Mzg0MGMyKDB4MWFiKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDM4YWIyZH0pO2xldCBfMHgyZWNkMWM9bmV3IFEoXzB4MTRjMDFiLF8weDE5Mjc1NSxfMHg0YThkNTIsXzB4MzBmMmYxKTtyZXR1cm4gXzB4MmVjZDFjW18weDM4NDBjMigweDI1MCldWydiaW5kJ10oXzB4MmVjZDFjKTt9Y2F0Y2goXzB4NTgwMjg0KXtyZXR1cm4gY29uc29sZVtfMHgzODQwYzIoMHgxYzQpXShfMHgzODQwYzIoMHgyNTMpLF8weDU4MDI4NCYmXzB4NTgwMjg0W18weDM4NDBjMigweDI1ZSldKSwoKT0+e307fX0pO3JldHVybiBfMHgxYzExZWY9Pl8weDRlNWYzN1tfMHgzYjhkYzcoMHgyMGMpXShfMHgxNjNhMjI9Pl8weDE2M2EyMihfMHgxYzExZWYpKTt9ZnVuY3Rpb24gSChfMHg1NTc0NzQpe3ZhciBfMHg0MDNiOGY9XzB4M2JhODNkO2xldCBfMHg0ZTQyYzU9ZnVuY3Rpb24oXzB4MWUwMmY5LF8weGMwOWI0YSl7cmV0dXJuIF8weGMwOWI0YS1fMHgxZTAyZjk7fSxfMHg0ZTY4ZTA7aWYoXzB4NTU3NDc0W18weDQwM2I4ZigweDI2OCldKV8weDRlNjhlMD1mdW5jdGlvbigpe3ZhciBfMHgyZWFlYzA9XzB4NDAzYjhmO3JldHVybiBfMHg1NTc0NzRbJ3BlcmZvcm1hbmNlJ11bXzB4MmVhZWMwKDB4MWY5KV0oKTt9O2Vsc2V7aWYoXzB4NTU3NDc0Wydwcm9jZXNzJ10mJl8weDU1NzQ3NFtfMHg0MDNiOGYoMHgxZDcpXVtfMHg0MDNiOGYoMHgyNzQpXSlfMHg0ZTY4ZTA9ZnVuY3Rpb24oKXt2YXIgXzB4MmY3MTUyPV8weDQwM2I4ZjtyZXR1cm4gXzB4NTU3NDc0W18weDJmNzE1MigweDFkNyldW18weDJmNzE1MigweDI3NCldKCk7fSxfMHg0ZTQyYzU9ZnVuY3Rpb24oXzB4ZjI5MTI0LF8weDMyZmM0Yil7cmV0dXJuIDB4M2U4KihfMHgzMmZjNGJbMHgwXS1fMHhmMjkxMjRbMHgwXSkrKF8weDMyZmM0YlsweDFdLV8weGYyOTEyNFsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgyYmI2M2N9PXJlcXVpcmUoXzB4NDAzYjhmKDB4MjIyKSk7XzB4NGU2OGUwPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDJiYjYzY1snbm93J10oKTt9O31jYXRjaHtfMHg0ZTY4ZTA9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHg0ZTQyYzUsJ3RpbWVTdGFtcCc6XzB4NGU2OGUwLCdub3cnOigpPT5EYXRlW18weDQwM2I4ZigweDFmOSldKCl9O31mdW5jdGlvbiBYKF8weDRlZTI2OCxfMHgxZjZiY2QsXzB4MjZiMDliKXt2YXIgXzB4MmQ0ZDI4PV8weDNiYTgzZDtpZihfMHg0ZWUyNjhbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddIT09dm9pZCAweDApcmV0dXJuIF8weDRlZTI2OFsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J107bGV0IF8weDJhYWQ5MD1fMHg0ZWUyNjhbJ3Byb2Nlc3MnXT8uW18weDJkNGQyOCgweDFhNyldPy5bXzB4MmQ0ZDI4KDB4MWJkKV07cmV0dXJuIF8weDJhYWQ5MCYmXzB4MjZiMDliPT09XzB4MmQ0ZDI4KDB4MjdlKT9fMHg0ZWUyNjhbXzB4MmQ0ZDI4KDB4MjAyKV09ITB4MTpfMHg0ZWUyNjhbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddPV8weDJhYWQ5MHx8IV8weDFmNmJjZHx8XzB4NGVlMjY4W18weDJkNGQyOCgweDFkZCldPy5bXzB4MmQ0ZDI4KDB4MjNiKV0mJl8weDFmNmJjZFsnaW5jbHVkZXMnXShfMHg0ZWUyNjhbXzB4MmQ0ZDI4KDB4MWRkKV1bXzB4MmQ0ZDI4KDB4MjNiKV0pLF8weDRlZTI2OFtfMHgyZDRkMjgoMHgyMDIpXTt9KChfMHgyODlmNTQsXzB4Mjk3ODllLF8weDJmNTQ4ZixfMHgyZmJkOWUsXzB4MjFkZDVlLF8weDU5MjI1MyxfMHgzZjUyZmQsXzB4NDFkZDZkLF8weDExODlmZik9Pnt2YXIgXzB4MzEyNDQyPV8weDNiYTgzZDtpZihfMHgyODlmNTRbXzB4MzEyNDQyKDB4MjNjKV0pcmV0dXJuIF8weDI4OWY1NFtfMHgzMTI0NDIoMHgyM2MpXTtpZighWChfMHgyODlmNTQsXzB4NDFkZDZkLF8weDIxZGQ1ZSkpcmV0dXJuIF8weDI4OWY1NFsnX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4Mjg5ZjU0W18weDMxMjQ0MigweDIzYyldO2xldCBfMHhkZjYwMj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHg1NDQyNTA9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfSxfMHhjZDZmNDE9SChfMHgyODlmNTQpLF8weDU5NjFkZD1fMHhjZDZmNDFbXzB4MzEyNDQyKDB4MjFiKV0sXzB4MzJjMmJmPV8weGNkNmY0MVtfMHgzMTI0NDIoMHgxZTIpXSxfMHgzZmMwZTQ9XzB4Y2Q2ZjQxW18weDMxMjQ0MigweDFmOSldLF8weDIxZDM2YT17J2hpdHMnOnt9LCd0cyc6e319LF8weDQ3NDE1Zj1fMHhlOTg2NDU9PntfMHgyMWQzNmFbJ3RzJ11bXzB4ZTk4NjQ1XT1fMHgzMmMyYmYoKTt9LF8weDI5NDUyMD0oXzB4MTY4ODc5LF8weDM2OTY4NSk9PntsZXQgXzB4NDQ3MDU4PV8weDIxZDM2YVsndHMnXVtfMHgzNjk2ODVdO2lmKGRlbGV0ZSBfMHgyMWQzNmFbJ3RzJ11bXzB4MzY5Njg1XSxfMHg0NDcwNTgpe2xldCBfMHgyOGM4ZDY9XzB4NTk2MWRkKF8weDQ0NzA1OCxfMHgzMmMyYmYoKSk7XzB4MTE1MmMwKF8weDMwZjVjZSgndGltZScsXzB4MTY4ODc5LF8weDNmYzBlNCgpLF8weDEyZWNjMixbXzB4MjhjOGQ2XSxfMHgzNjk2ODUpKTt9fSxfMHg3YjZlMGU9XzB4MjE4MzY0PT5fMHg1MTNhYzU9Pnt2YXIgXzB4MTE2ZmE1PV8weDMxMjQ0Mjt0cnl7XzB4NDc0MTVmKF8weDUxM2FjNSksXzB4MjE4MzY0KF8weDUxM2FjNSk7fWZpbmFsbHl7XzB4Mjg5ZjU0W18weDExNmZhNSgweDI4YSldW18weDExNmZhNSgweDFjZCldPV8weDIxODM2NDt9fSxfMHgzYzhlZjU9XzB4M2NkNDJhPT5fMHg0NzZjNGI9Pnt2YXIgXzB4NTI0NDA2PV8weDMxMjQ0Mjt0cnl7bGV0IFtfMHgxZjNmNWMsXzB4YWVlYmRkXT1fMHg0NzZjNGJbXzB4NTI0NDA2KDB4MWU2KV0oJzpsb2dQb2ludElkOicpO18weDI5NDUyMChfMHhhZWViZGQsXzB4MWYzZjVjKSxfMHgzY2Q0MmEoXzB4MWYzZjVjKTt9ZmluYWxseXtfMHgyODlmNTRbJ2NvbnNvbGUnXVtfMHg1MjQ0MDYoMHgxYjgpXT1fMHgzY2Q0MmE7fX07XzB4Mjg5ZjU0W18weDMxMjQ0MigweDIzYyldPXsnY29uc29sZUxvZyc6KF8weDVlNjY0YixfMHgzOGFlYmYpPT57dmFyIF8weGUwNjNlNz1fMHgzMTI0NDI7XzB4Mjg5ZjU0W18weGUwNjNlNygweDI4YSldW18weGUwNjNlNygweDI1ZildW18weGUwNjNlNygweDI0MyldIT09XzB4ZTA2M2U3KDB4MjVhKSYmXzB4MTE1MmMwKF8weDMwZjVjZShfMHhlMDYzZTcoMHgyNWYpLF8weDVlNjY0YixfMHgzZmMwZTQoKSxfMHgxMmVjYzIsXzB4MzhhZWJmKSk7fSwnY29uc29sZVRyYWNlJzooXzB4NWMzMTJmLF8weDQzMjk2Yik9Pnt2YXIgXzB4N2JkNWI9XzB4MzEyNDQyO18weDI4OWY1NFtfMHg3YmQ1YigweDI4YSldW18weDdiZDViKDB4MjVmKV1bXzB4N2JkNWIoMHgyNDMpXSE9PSdkaXNhYmxlZFRyYWNlJyYmXzB4MTE1MmMwKF8weDMwZjVjZShfMHg3YmQ1YigweDFlYSksXzB4NWMzMTJmLF8weDNmYzBlNCgpLF8weDEyZWNjMixfMHg0MzI5NmIpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4NDBhOWJmPV8weDMxMjQ0MjtfMHgyODlmNTRbXzB4NDBhOWJmKDB4MjhhKV1bXzB4NDBhOWJmKDB4MWNkKV09XzB4N2I2ZTBlKF8weDI4OWY1NFsnY29uc29sZSddW18weDQwYTliZigweDFjZCldKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4MjcyM2M1PV8weDMxMjQ0MjtfMHgyODlmNTRbXzB4MjcyM2M1KDB4MjhhKV1bXzB4MjcyM2M1KDB4MWI4KV09XzB4M2M4ZWY1KF8weDI4OWY1NFtfMHgyNzIzYzUoMHgyOGEpXVtfMHgyNzIzYzUoMHgxYjgpXSk7fSwnYXV0b0xvZyc6KF8weDhlYTZmLF8weDFjMjJlNik9Pnt2YXIgXzB4M2Q1YTliPV8weDMxMjQ0MjtfMHgxMTUyYzAoXzB4MzBmNWNlKF8weDNkNWE5YigweDI1ZiksXzB4MWMyMmU2LF8weDNmYzBlNCgpLF8weDEyZWNjMixbXzB4OGVhNmZdKSk7fSwnYXV0b0xvZ01hbnknOihfMHgyZWI5MDEsXzB4MzUzNzczKT0+e3ZhciBfMHg0ZjczZWM9XzB4MzEyNDQyO18weDExNTJjMChfMHgzMGY1Y2UoXzB4NGY3M2VjKDB4MjVmKSxfMHgyZWI5MDEsXzB4M2ZjMGU0KCksXzB4MTJlY2MyLF8weDM1Mzc3MykpO30sJ2F1dG9UcmFjZSc6KF8weDQyNjYxMCxfMHgyZDhkYmIpPT57dmFyIF8weDVkZGJhZD1fMHgzMTI0NDI7XzB4MTE1MmMwKF8weDMwZjVjZShfMHg1ZGRiYWQoMHgxZWEpLF8weDJkOGRiYixfMHgzZmMwZTQoKSxfMHgxMmVjYzIsW18weDQyNjYxMF0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4NDI1ZTAwLF8weDIzOWZmZSk9PntfMHgxMTUyYzAoXzB4MzBmNWNlKCd0cmFjZScsXzB4NDI1ZTAwLF8weDNmYzBlNCgpLF8weDEyZWNjMixfMHgyMzlmZmUpKTt9LCdhdXRvVGltZSc6KF8weDU0ZjQ0NSxfMHgzODY1YTMsXzB4MzM2ZmU1KT0+e18weDQ3NDE1ZihfMHgzMzZmZTUpO30sJ2F1dG9UaW1lRW5kJzooXzB4MjVhYjJjLF8weDJmMTk1MSxfMHgxNzA1ZWMpPT57XzB4Mjk0NTIwKF8weDJmMTk1MSxfMHgxNzA1ZWMpO319O2xldCBfMHgxMTUyYzA9VihfMHgyODlmNTQsXzB4Mjk3ODllLF8weDJmNTQ4ZixfMHgyZmJkOWUsXzB4MjFkZDVlKSxfMHgxMmVjYzI9XzB4Mjg5ZjU0WydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ107Y2xhc3MgXzB4MWQxZjkwe2NvbnN0cnVjdG9yKCl7dmFyIF8weDExYWRmOT1fMHgzMTI0NDI7dGhpc1tfMHgxMWFkZjkoMHgxZTgpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbXzB4MTFhZGY5KDB4MWM1KV09L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDExYWRmOSgweDIxMCldPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4MTFhZGY5KDB4MjM3KV09XzB4Mjg5ZjU0W18weDExYWRmOSgweDI4MSldLHRoaXNbXzB4MTFhZGY5KDB4Mjc3KV09XzB4Mjg5ZjU0WydIVE1MQWxsQ29sbGVjdGlvbiddLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXT1PYmplY3RbXzB4MTFhZGY5KDB4MjQ0KV0sdGhpc1tfMHgxMWFkZjkoMHgyMDcpXT1PYmplY3RbXzB4MTFhZGY5KDB4MjMwKV0sdGhpc1snX1N5bWJvbCddPV8weDI4OWY1NFtfMHgxMWFkZjkoMHgxYzkpXSx0aGlzW18weDExYWRmOSgweDFjYyldPVJlZ0V4cFtfMHgxMWFkZjkoMHgxYzgpXVtfMHgxMWFkZjkoMHgyMWYpXSx0aGlzW18weDExYWRmOSgweDI0MSldPURhdGVbJ3Byb3RvdHlwZSddW18weDExYWRmOSgweDIxZildO31bXzB4MzEyNDQyKDB4MjM4KV0oXzB4NGQwZTE1LF8weDUzODlhNixfMHgyNTcyMDgsXzB4NTJjMGIzKXt2YXIgXzB4MmYzZjY2PV8weDMxMjQ0MixfMHgxYWMyMmU9dGhpcyxfMHg1OWFiYzY9XzB4MjU3MjA4W18weDJmM2Y2NigweDFiNildO2Z1bmN0aW9uIF8weDNkZTYxMihfMHgxYTk3YWEsXzB4MTY5N2Q2LF8weDJhNzczMSl7dmFyIF8weGQxMjNiPV8weDJmM2Y2NjtfMHgxNjk3ZDZbJ3R5cGUnXT1fMHhkMTIzYigweDI2YyksXzB4MTY5N2Q2W18weGQxMjNiKDB4MjIzKV09XzB4MWE5N2FhW18weGQxMjNiKDB4MjVlKV0sXzB4MTcwNjE2PV8weDJhNzczMVsnbm9kZSddW18weGQxMjNiKDB4MWQxKV0sXzB4MmE3NzMxW18weGQxMjNiKDB4MWJkKV1bXzB4ZDEyM2IoMHgxZDEpXT1fMHgxNjk3ZDYsXzB4MWFjMjJlWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MTY5N2Q2LF8weDJhNzczMSk7fXRyeXtfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MjEyKV0rKyxfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MWI2KV0mJl8weDI1NzIwOFtfMHgyZjNmNjYoMHgyNjYpXVsncHVzaCddKF8weDUzODlhNik7dmFyIF8weDQyYmU1ZSxfMHgyODQ2MTQsXzB4MzNhMmEzLF8weDExZjQxOSxfMHgyNjI3Mjg9W10sXzB4NWI4Y2Q3PVtdLF8weDQ4MTVkNCxfMHg5MjhjNzY9dGhpc1tfMHgyZjNmNjYoMHgxZDkpXShfMHg1Mzg5YTYpLF8weDJkNGI3ZD1fMHg5MjhjNzY9PT1fMHgyZjNmNjYoMHgxZTkpLF8weDNiMDliYT0hMHgxLF8weDRkZDU4ZD1fMHg5MjhjNzY9PT1fMHgyZjNmNjYoMHgxZGUpLF8weDVmMjI4YT10aGlzW18weDJmM2Y2NigweDI1YildKF8weDkyOGM3NiksXzB4M2I0NjdhPXRoaXNbXzB4MmYzZjY2KDB4Mjg5KV0oXzB4OTI4Yzc2KSxfMHgyYmMyZTE9XzB4NWYyMjhhfHxfMHgzYjQ2N2EsXzB4NzZjYmQxPXt9LF8weDI4N2NjND0weDAsXzB4NWNkNzdjPSEweDEsXzB4MTcwNjE2LF8weDhmZjI0NT0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4MjU3MjA4WydkZXB0aCddKXtpZihfMHgyZDRiN2Qpe2lmKF8weDI4NDYxND1fMHg1Mzg5YTZbJ2xlbmd0aCddLF8weDI4NDYxND5fMHgyNTcyMDhbJ2VsZW1lbnRzJ10pe2ZvcihfMHgzM2EyYTM9MHgwLF8weDExZjQxOT1fMHgyNTcyMDhbXzB4MmYzZjY2KDB4MjUyKV0sXzB4NDJiZTVlPV8weDMzYTJhMztfMHg0MmJlNWU8XzB4MTFmNDE5O18weDQyYmU1ZSsrKV8weDViOGNkN1tfMHgyZjNmNjYoMHgxYWUpXShfMHgxYWMyMmVbXzB4MmYzZjY2KDB4MjY1KV0oXzB4MjYyNzI4LF8weDUzODlhNixfMHg5MjhjNzYsXzB4NDJiZTVlLF8weDI1NzIwOCkpO18weDRkMGUxNVtfMHgyZjNmNjYoMHgyNjQpXT0hMHgwO31lbHNle2ZvcihfMHgzM2EyYTM9MHgwLF8weDExZjQxOT1fMHgyODQ2MTQsXzB4NDJiZTVlPV8weDMzYTJhMztfMHg0MmJlNWU8XzB4MTFmNDE5O18weDQyYmU1ZSsrKV8weDViOGNkN1tfMHgyZjNmNjYoMHgxYWUpXShfMHgxYWMyMmVbXzB4MmYzZjY2KDB4MjY1KV0oXzB4MjYyNzI4LF8weDUzODlhNixfMHg5MjhjNzYsXzB4NDJiZTVlLF8weDI1NzIwOCkpO31fMHgyNTcyMDhbXzB4MmYzZjY2KDB4MjQ5KV0rPV8weDViOGNkN1tfMHgyZjNmNjYoMHgyMjkpXTt9aWYoIShfMHg5MjhjNzY9PT1fMHgyZjNmNjYoMHgyMzIpfHxfMHg5MjhjNzY9PT1fMHgyZjNmNjYoMHgyODEpKSYmIV8weDVmMjI4YSYmXzB4OTI4Yzc2IT09XzB4MmYzZjY2KDB4MWQyKSYmXzB4OTI4Yzc2IT09XzB4MmYzZjY2KDB4Mjc2KSYmXzB4OTI4Yzc2IT09XzB4MmYzZjY2KDB4Mjg4KSl7dmFyIF8weDZmODJkZD1fMHg1MmMwYjNbXzB4MmYzZjY2KDB4MjRmKV18fF8weDI1NzIwOFtfMHgyZjNmNjYoMHgyNGYpXTtpZih0aGlzW18weDJmM2Y2NigweDI4MildKF8weDUzODlhNik/KF8weDQyYmU1ZT0weDAsXzB4NTM4OWE2W18weDJmM2Y2NigweDIwYyldKGZ1bmN0aW9uKF8weDRlNGQxZCl7dmFyIF8weDc2MmZhMD1fMHgyZjNmNjY7aWYoXzB4Mjg3Y2M0KyssXzB4MjU3MjA4W18weDc2MmZhMCgweDI0OSldKyssXzB4Mjg3Y2M0Pl8weDZmODJkZCl7XzB4NWNkNzdjPSEweDA7cmV0dXJuO31pZighXzB4MjU3MjA4W18weDc2MmZhMCgweDFhOCldJiZfMHgyNTcyMDhbXzB4NzYyZmEwKDB4MWI2KV0mJl8weDI1NzIwOFtfMHg3NjJmYTAoMHgyNDkpXT5fMHgyNTcyMDhbXzB4NzYyZmEwKDB4Mjg0KV0pe18weDVjZDc3Yz0hMHgwO3JldHVybjt9XzB4NWI4Y2Q3WydwdXNoJ10oXzB4MWFjMjJlW18weDc2MmZhMCgweDI2NSldKF8weDI2MjcyOCxfMHg1Mzg5YTYsXzB4NzYyZmEwKDB4MWMyKSxfMHg0MmJlNWUrKyxfMHgyNTcyMDgsZnVuY3Rpb24oXzB4Mjg3YTIwKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4Mjg3YTIwO307fShfMHg0ZTRkMWQpKSk7fSkpOnRoaXNbXzB4MmYzZjY2KDB4MWJjKV0oXzB4NTM4OWE2KSYmXzB4NTM4OWE2Wydmb3JFYWNoJ10oZnVuY3Rpb24oXzB4NTc1MmVjLF8weDUyMmUwOSl7dmFyIF8weDNjMDAzMT1fMHgyZjNmNjY7aWYoXzB4Mjg3Y2M0KyssXzB4MjU3MjA4W18weDNjMDAzMSgweDI0OSldKyssXzB4Mjg3Y2M0Pl8weDZmODJkZCl7XzB4NWNkNzdjPSEweDA7cmV0dXJuO31pZighXzB4MjU3MjA4W18weDNjMDAzMSgweDFhOCldJiZfMHgyNTcyMDhbXzB4M2MwMDMxKDB4MWI2KV0mJl8weDI1NzIwOFtfMHgzYzAwMzEoMHgyNDkpXT5fMHgyNTcyMDhbXzB4M2MwMDMxKDB4Mjg0KV0pe18weDVjZDc3Yz0hMHgwO3JldHVybjt9dmFyIF8weDQ1ZmE0MD1fMHg1MjJlMDlbXzB4M2MwMDMxKDB4MjFmKV0oKTtfMHg0NWZhNDBbXzB4M2MwMDMxKDB4MjI5KV0+MHg2NCYmKF8weDQ1ZmE0MD1fMHg0NWZhNDBbXzB4M2MwMDMxKDB4MjU0KV0oMHgwLDB4NjQpK18weDNjMDAzMSgweDFmYSkpLF8weDViOGNkN1tfMHgzYzAwMzEoMHgxYWUpXShfMHgxYWMyMmVbXzB4M2MwMDMxKDB4MjY1KV0oXzB4MjYyNzI4LF8weDUzODlhNixfMHgzYzAwMzEoMHgyODMpLF8weDQ1ZmE0MCxfMHgyNTcyMDgsZnVuY3Rpb24oXzB4NGI2MmQ0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NGI2MmQ0O307fShfMHg1NzUyZWMpKSk7fSksIV8weDNiMDliYSl7dHJ5e2ZvcihfMHg0ODE1ZDQgaW4gXzB4NTM4OWE2KWlmKCEoXzB4MmQ0YjdkJiZfMHg4ZmYyNDVbXzB4MmYzZjY2KDB4MWUxKV0oXzB4NDgxNWQ0KSkmJiF0aGlzW18weDJmM2Y2NigweDI3MSldKF8weDUzODlhNixfMHg0ODE1ZDQsXzB4MjU3MjA4KSl7aWYoXzB4Mjg3Y2M0KyssXzB4MjU3MjA4W18weDJmM2Y2NigweDI0OSldKyssXzB4Mjg3Y2M0Pl8weDZmODJkZCl7XzB4NWNkNzdjPSEweDA7YnJlYWs7fWlmKCFfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MWE4KV0mJl8weDI1NzIwOFsnYXV0b0V4cGFuZCddJiZfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MjQ5KV0+XzB4MjU3MjA4W18weDJmM2Y2NigweDI4NCldKXtfMHg1Y2Q3N2M9ITB4MDticmVhazt9XzB4NWI4Y2Q3WydwdXNoJ10oXzB4MWFjMjJlW18weDJmM2Y2NigweDIzNildKF8weDI2MjcyOCxfMHg3NmNiZDEsXzB4NTM4OWE2LF8weDkyOGM3NixfMHg0ODE1ZDQsXzB4MjU3MjA4KSk7fX1jYXRjaHt9aWYoXzB4NzZjYmQxW18weDJmM2Y2NigweDFkYyldPSEweDAsXzB4NGRkNThkJiYoXzB4NzZjYmQxW18weDJmM2Y2NigweDFlZCldPSEweDApLCFfMHg1Y2Q3N2Mpe3ZhciBfMHgyMDAxNWQ9W11bXzB4MmYzZjY2KDB4MjNlKV0odGhpc1tfMHgyZjNmNjYoMHgyMDcpXShfMHg1Mzg5YTYpKVtfMHgyZjNmNjYoMHgyM2UpXSh0aGlzW18weDJmM2Y2NigweDI4NildKF8weDUzODlhNikpO2ZvcihfMHg0MmJlNWU9MHgwLF8weDI4NDYxND1fMHgyMDAxNWRbXzB4MmYzZjY2KDB4MjI5KV07XzB4NDJiZTVlPF8weDI4NDYxNDtfMHg0MmJlNWUrKylpZihfMHg0ODE1ZDQ9XzB4MjAwMTVkW18weDQyYmU1ZV0sIShfMHgyZDRiN2QmJl8weDhmZjI0NVtfMHgyZjNmNjYoMHgxZTEpXShfMHg0ODE1ZDRbXzB4MmYzZjY2KDB4MjFmKV0oKSkpJiYhdGhpc1tfMHgyZjNmNjYoMHgyNzEpXShfMHg1Mzg5YTYsXzB4NDgxNWQ0LF8weDI1NzIwOCkmJiFfMHg3NmNiZDFbXzB4MmYzZjY2KDB4MWQ4KStfMHg0ODE1ZDRbXzB4MmYzZjY2KDB4MjFmKV0oKV0pe2lmKF8weDI4N2NjNCsrLF8weDI1NzIwOFtfMHgyZjNmNjYoMHgyNDkpXSsrLF8weDI4N2NjND5fMHg2ZjgyZGQpe18weDVjZDc3Yz0hMHgwO2JyZWFrO31pZighXzB4MjU3MjA4W18weDJmM2Y2NigweDFhOCldJiZfMHgyNTcyMDhbXzB4MmYzZjY2KDB4MWI2KV0mJl8weDI1NzIwOFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgyNTcyMDhbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHg1Y2Q3N2M9ITB4MDticmVhazt9XzB4NWI4Y2Q3W18weDJmM2Y2NigweDFhZSldKF8weDFhYzIyZVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MjYyNzI4LF8weDc2Y2JkMSxfMHg1Mzg5YTYsXzB4OTI4Yzc2LF8weDQ4MTVkNCxfMHgyNTcyMDgpKTt9fX19fWlmKF8weDRkMGUxNVtfMHgyZjNmNjYoMHgyMDQpXT1fMHg5MjhjNzYsXzB4MmJjMmUxPyhfMHg0ZDBlMTVbXzB4MmYzZjY2KDB4MjZlKV09XzB4NTM4OWE2W18weDJmM2Y2NigweDFjNildKCksdGhpc1snX2NhcElmU3RyaW5nJ10oXzB4OTI4Yzc2LF8weDRkMGUxNSxfMHgyNTcyMDgsXzB4NTJjMGIzKSk6XzB4OTI4Yzc2PT09J2RhdGUnP18weDRkMGUxNVtfMHgyZjNmNjYoMHgyNmUpXT10aGlzWydfZGF0ZVRvU3RyaW5nJ11bXzB4MmYzZjY2KDB4MWJhKV0oXzB4NTM4OWE2KTpfMHg5MjhjNzY9PT1fMHgyZjNmNjYoMHgyODgpP18weDRkMGUxNVsndmFsdWUnXT1fMHg1Mzg5YTZbXzB4MmYzZjY2KDB4MjFmKV0oKTpfMHg5MjhjNzY9PT1fMHgyZjNmNjYoMHgyMjcpP18weDRkMGUxNVtfMHgyZjNmNjYoMHgyNmUpXT10aGlzW18weDJmM2Y2NigweDFjYyldW18weDJmM2Y2NigweDFiYSldKF8weDUzODlhNik6XzB4OTI4Yzc2PT09J3N5bWJvbCcmJnRoaXNbXzB4MmYzZjY2KDB4MjcyKV0/XzB4NGQwZTE1Wyd2YWx1ZSddPXRoaXNbXzB4MmYzZjY2KDB4MjcyKV1bXzB4MmYzZjY2KDB4MWM4KV1bXzB4MmYzZjY2KDB4MjFmKV1bJ2NhbGwnXShfMHg1Mzg5YTYpOiFfMHgyNTcyMDhbJ2RlcHRoJ10mJiEoXzB4OTI4Yzc2PT09J251bGwnfHxfMHg5MjhjNzY9PT1fMHgyZjNmNjYoMHgyODEpKSYmKGRlbGV0ZSBfMHg0ZDBlMTVbXzB4MmYzZjY2KDB4MjZlKV0sXzB4NGQwZTE1W18weDJmM2Y2NigweDIxNildPSEweDApLF8weDVjZDc3YyYmKF8weDRkMGUxNVsnY2FwcGVkUHJvcHMnXT0hMHgwKSxfMHgxNzA2MTY9XzB4MjU3MjA4W18weDJmM2Y2NigweDFiZCldW18weDJmM2Y2NigweDFkMSldLF8weDI1NzIwOFtfMHgyZjNmNjYoMHgxYmQpXVtfMHgyZjNmNjYoMHgxZDEpXT1fMHg0ZDBlMTUsdGhpc1tfMHgyZjNmNjYoMHgyN2EpXShfMHg0ZDBlMTUsXzB4MjU3MjA4KSxfMHg1YjhjZDdbXzB4MmYzZjY2KDB4MjI5KV0pe2ZvcihfMHg0MmJlNWU9MHgwLF8weDI4NDYxND1fMHg1YjhjZDdbXzB4MmYzZjY2KDB4MjI5KV07XzB4NDJiZTVlPF8weDI4NDYxNDtfMHg0MmJlNWUrKylfMHg1YjhjZDdbXzB4NDJiZTVlXShfMHg0MmJlNWUpO31fMHgyNjI3MjhbJ2xlbmd0aCddJiYoXzB4NGQwZTE1W18weDJmM2Y2NigweDI0ZildPV8weDI2MjcyOCk7fWNhdGNoKF8weDI5MGQzNCl7XzB4M2RlNjEyKF8weDI5MGQzNCxfMHg0ZDBlMTUsXzB4MjU3MjA4KTt9cmV0dXJuIHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHg1Mzg5YTYsXzB4NGQwZTE1KSx0aGlzW18weDJmM2Y2NigweDIzZildKF8weDRkMGUxNSxfMHgyNTcyMDgpLF8weDI1NzIwOFtfMHgyZjNmNjYoMHgxYmQpXVtfMHgyZjNmNjYoMHgxZDEpXT1fMHgxNzA2MTYsXzB4MjU3MjA4W18weDJmM2Y2NigweDIxMildLS0sXzB4MjU3MjA4WydhdXRvRXhwYW5kJ109XzB4NTlhYmM2LF8weDI1NzIwOFtfMHgyZjNmNjYoMHgxYjYpXSYmXzB4MjU3MjA4W18weDJmM2Y2NigweDI2NildW18weDJmM2Y2NigweDFhZCldKCksXzB4NGQwZTE1O31bXzB4MzEyNDQyKDB4Mjg2KV0oXzB4MmRlZmNlKXt2YXIgXzB4MjYzNjhmPV8weDMxMjQ0MjtyZXR1cm4gT2JqZWN0W18weDI2MzY4ZigweDFhNSldP09iamVjdFtfMHgyNjM2OGYoMHgxYTUpXShfMHgyZGVmY2UpOltdO31bXzB4MzEyNDQyKDB4MjgyKV0oXzB4NTM4ZWQ0KXt2YXIgXzB4MzYzZTQ3PV8weDMxMjQ0MjtyZXR1cm4hIShfMHg1MzhlZDQmJl8weDI4OWY1NFsnU2V0J10mJnRoaXNbXzB4MzYzZTQ3KDB4MjBiKV0oXzB4NTM4ZWQ0KT09PV8weDM2M2U0NygweDFiNSkmJl8weDUzOGVkNFtfMHgzNjNlNDcoMHgyMGMpXSk7fVtfMHgzMTI0NDIoMHgyNzEpXShfMHg0YmIzY2YsXzB4NTc2MTQ5LF8weDFmODIyYil7dmFyIF8weDUyNDdjOD1fMHgzMTI0NDI7cmV0dXJuIF8weDFmODIyYltfMHg1MjQ3YzgoMHgyNDYpXT90eXBlb2YgXzB4NGJiM2NmW18weDU3NjE0OV09PV8weDUyNDdjOCgweDFkZSk6ITB4MTt9W18weDMxMjQ0MigweDFkOSldKF8weDU0YTNlZCl7dmFyIF8weDEzMzM4Mz1fMHgzMTI0NDIsXzB4M2Q2ZGMzPScnO3JldHVybiBfMHgzZDZkYzM9dHlwZW9mIF8weDU0YTNlZCxfMHgzZDZkYzM9PT1fMHgxMzMzODMoMHgyM2EpP3RoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDU0YTNlZCk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nP18weDNkNmRjMz0nYXJyYXknOnRoaXNbXzB4MTMzMzgzKDB4MjBiKV0oXzB4NTRhM2VkKT09PV8weDEzMzM4MygweDFmNCk/XzB4M2Q2ZGMzPV8weDEzMzM4MygweDIwZCk6dGhpc1tfMHgxMzMzODMoMHgyMGIpXShfMHg1NGEzZWQpPT09XzB4MTMzMzgzKDB4MWI0KT9fMHgzZDZkYzM9XzB4MTMzMzgzKDB4Mjg4KTpfMHg1NGEzZWQ9PT1udWxsP18weDNkNmRjMz1fMHgxMzMzODMoMHgyMzIpOl8weDU0YTNlZFtfMHgxMzMzODMoMHgxYTMpXSYmKF8weDNkNmRjMz1fMHg1NGEzZWRbXzB4MTMzMzgzKDB4MWEzKV1bXzB4MTMzMzgzKDB4MjQzKV18fF8weDNkNmRjMyk6XzB4M2Q2ZGMzPT09XzB4MTMzMzgzKDB4MjgxKSYmdGhpc1tfMHgxMzMzODMoMHgyNzcpXSYmXzB4NTRhM2VkIGluc3RhbmNlb2YgdGhpc1tfMHgxMzMzODMoMHgyNzcpXSYmKF8weDNkNmRjMz0nSFRNTEFsbENvbGxlY3Rpb24nKSxfMHgzZDZkYzM7fVtfMHgzMTI0NDIoMHgyMGIpXShfMHgzZjk5NjIpe3ZhciBfMHgyMzA5MTM9XzB4MzEyNDQyO3JldHVybiBPYmplY3RbXzB4MjMwOTEzKDB4MWM4KV1bXzB4MjMwOTEzKDB4MjFmKV1bXzB4MjMwOTEzKDB4MWJhKV0oXzB4M2Y5OTYyKTt9W18weDMxMjQ0MigweDI1YildKF8weDVkNzg0Nyl7dmFyIF8weDM1N2M4Mz1fMHgzMTI0NDI7cmV0dXJuIF8weDVkNzg0Nz09PV8weDM1N2M4MygweDIzOSl8fF8weDVkNzg0Nz09PSdzdHJpbmcnfHxfMHg1ZDc4NDc9PT1fMHgzNTdjODMoMHgyMjYpO31bXzB4MzEyNDQyKDB4Mjg5KV0oXzB4MTI2YzIzKXt2YXIgXzB4NWJjM2RhPV8weDMxMjQ0MjtyZXR1cm4gXzB4MTI2YzIzPT09XzB4NWJjM2RhKDB4MjNkKXx8XzB4MTI2YzIzPT09XzB4NWJjM2RhKDB4MWQyKXx8XzB4MTI2YzIzPT09XzB4NWJjM2RhKDB4MjYzKTt9WydfYWRkUHJvcGVydHknXShfMHhjNzI2ZGIsXzB4OTA1NWYxLF8weDQ4ZTE2NyxfMHg1MjVkN2MsXzB4MmEyZDZkLF8weDI2MGI0Myl7dmFyIF8weDQ0NDBlNz10aGlzO3JldHVybiBmdW5jdGlvbihfMHgyNmRhMjEpe3ZhciBfMHgxNjYyNjE9XzB4NTc4ZCxfMHgyZmNhNzY9XzB4MmEyZDZkW18weDE2NjI2MSgweDFiZCldW18weDE2NjI2MSgweDFkMSldLF8weDQ3ZTM5ZT1fMHgyYTJkNmRbXzB4MTY2MjYxKDB4MWJkKV1bXzB4MTY2MjYxKDB4MjA1KV0sXzB4MzVkODNlPV8weDJhMmQ2ZFtfMHgxNjYyNjEoMHgxYmQpXVtfMHgxNjYyNjEoMHgxZDApXTtfMHgyYTJkNmRbXzB4MTY2MjYxKDB4MWJkKV1bJ3BhcmVudCddPV8weDJmY2E3NixfMHgyYTJkNmRbXzB4MTY2MjYxKDB4MWJkKV1bXzB4MTY2MjYxKDB4MjA1KV09dHlwZW9mIF8weDUyNWQ3Yz09XzB4MTY2MjYxKDB4MjI2KT9fMHg1MjVkN2M6XzB4MjZkYTIxLF8weGM3MjZkYlsncHVzaCddKF8weDQ0NDBlN1tfMHgxNjYyNjEoMHgyNTcpXShfMHg5MDU1ZjEsXzB4NDhlMTY3LF8weDUyNWQ3YyxfMHgyYTJkNmQsXzB4MjYwYjQzKSksXzB4MmEyZDZkW18weDE2NjI2MSgweDFiZCldW18weDE2NjI2MSgweDFkMCldPV8weDM1ZDgzZSxfMHgyYTJkNmRbXzB4MTY2MjYxKDB4MWJkKV1bJ2luZGV4J109XzB4NDdlMzllO307fVtfMHgzMTI0NDIoMHgyMzYpXShfMHg0ZGRlMGIsXzB4M2NmYWE0LF8weDViYmE3MCxfMHgxZTI5ZDMsXzB4MmU5M2RlLF8weDU5NDczNixfMHgzNjUxZjgpe3ZhciBfMHgxYjliYmQ9XzB4MzEyNDQyLF8weDU3NTRhNT10aGlzO3JldHVybiBfMHgzY2ZhYTRbXzB4MWI5YmJkKDB4MWQ4KStfMHgyZTkzZGVbXzB4MWI5YmJkKDB4MjFmKV0oKV09ITB4MCxmdW5jdGlvbihfMHgxZWFkMzgpe3ZhciBfMHg0MTdiYjE9XzB4MWI5YmJkLF8weGRkN2RjOT1fMHg1OTQ3MzZbJ25vZGUnXVtfMHg0MTdiYjEoMHgxZDEpXSxfMHgyOTMwZDk9XzB4NTk0NzM2W18weDQxN2JiMSgweDFiZCldW18weDQxN2JiMSgweDIwNSldLF8weDI3YWZhZD1fMHg1OTQ3MzZbXzB4NDE3YmIxKDB4MWJkKV1bXzB4NDE3YmIxKDB4MWQwKV07XzB4NTk0NzM2W18weDQxN2JiMSgweDFiZCldW18weDQxN2JiMSgweDFkMCldPV8weGRkN2RjOSxfMHg1OTQ3MzZbXzB4NDE3YmIxKDB4MWJkKV1bXzB4NDE3YmIxKDB4MjA1KV09XzB4MWVhZDM4LF8weDRkZGUwYltfMHg0MTdiYjEoMHgxYWUpXShfMHg1NzU0YTVbXzB4NDE3YmIxKDB4MjU3KV0oXzB4NWJiYTcwLF8weDFlMjlkMyxfMHgyZTkzZGUsXzB4NTk0NzM2LF8weDM2NTFmOCkpLF8weDU5NDczNltfMHg0MTdiYjEoMHgxYmQpXVsncGFyZW50J109XzB4MjdhZmFkLF8weDU5NDczNlsnbm9kZSddW18weDQxN2JiMSgweDIwNSldPV8weDI5MzBkOTt9O31bJ19wcm9wZXJ0eSddKF8weDU1OGE0OCxfMHgzZmYzN2QsXzB4OGM3ZDEyLF8weDU1NzNjOSxfMHgxMzQ3YzMpe3ZhciBfMHgzZTZmZTQ9XzB4MzEyNDQyLF8weDQ3MzZmYj10aGlzO18weDEzNDdjM3x8KF8weDEzNDdjMz1mdW5jdGlvbihfMHgxYmYzNmQsXzB4MjNmOTczKXtyZXR1cm4gXzB4MWJmMzZkW18weDIzZjk3M107fSk7dmFyIF8weDRjMGU1Mz1fMHg4YzdkMTJbXzB4M2U2ZmU0KDB4MjFmKV0oKSxfMHgyOGExYTY9XzB4NTU3M2M5W18weDNlNmZlNCgweDIyOCldfHx7fSxfMHgxYWY2Y2E9XzB4NTU3M2M5W18weDNlNmZlNCgweDFmYyldLF8weDQzM2NjND1fMHg1NTczYzlbXzB4M2U2ZmU0KDB4MWE4KV07dHJ5e3ZhciBfMHg1ZTVlYjg9dGhpc1snX2lzTWFwJ10oXzB4NTU4YTQ4KSxfMHgyMjQ5MjU9XzB4NGMwZTUzO18weDVlNWViOCYmXzB4MjI0OTI1WzB4MF09PT0nXFxcXHgyNycmJihfMHgyMjQ5MjU9XzB4MjI0OTI1W18weDNlNmZlNCgweDFjZildKDB4MSxfMHgyMjQ5MjVbXzB4M2U2ZmU0KDB4MjI5KV0tMHgyKSk7dmFyIF8weDM3NDlhYz1fMHg1NTczYzlbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDI4YTFhNlsnX3BfJytfMHgyMjQ5MjVdO18weDM3NDlhYyYmKF8weDU1NzNjOVtfMHgzZTZmZTQoMHgxZmMpXT1fMHg1NTczYzlbXzB4M2U2ZmU0KDB4MWZjKV0rMHgxKSxfMHg1NTczYzlbXzB4M2U2ZmU0KDB4MWE4KV09ISFfMHgzNzQ5YWM7dmFyIF8weDFmMjIyNz10eXBlb2YgXzB4OGM3ZDEyPT1fMHgzZTZmZTQoMHgyNDApLF8weDMyOGQyMz17J25hbWUnOl8weDFmMjIyN3x8XzB4NWU1ZWI4P18weDRjMGU1Mzp0aGlzW18weDNlNmZlNCgweDFlZildKF8weDRjMGU1Myl9O2lmKF8weDFmMjIyNyYmKF8weDMyOGQyM1snc3ltYm9sJ109ITB4MCksIShfMHgzZmYzN2Q9PT1fMHgzZTZmZTQoMHgxZTkpfHxfMHgzZmYzN2Q9PT1fMHgzZTZmZTQoMHgxYmUpKSl7dmFyIF8weDI3OWU3MD10aGlzW18weDNlNmZlNCgweDI1ZCldKF8weDU1OGE0OCxfMHg4YzdkMTIpO2lmKF8weDI3OWU3MCYmKF8weDI3OWU3MFtfMHgzZTZmZTQoMHgyMjQpXSYmKF8weDMyOGQyM1snc2V0dGVyJ109ITB4MCksXzB4Mjc5ZTcwW18weDNlNmZlNCgweDFjMSldJiYhXzB4Mzc0OWFjJiYhXzB4NTU3M2M5W18weDNlNmZlNCgweDFmMSldKSlyZXR1cm4gXzB4MzI4ZDIzW18weDNlNmZlNCgweDI2MSldPSEweDAsdGhpc1tfMHgzZTZmZTQoMHgyNGEpXShfMHgzMjhkMjMsXzB4NTU3M2M5KSxfMHgzMjhkMjM7fXZhciBfMHhmNjg2ZDA7dHJ5e18weGY2ODZkMD1fMHgxMzQ3YzMoXzB4NTU4YTQ4LF8weDhjN2QxMik7fWNhdGNoKF8weDI1OGYwMCl7cmV0dXJuIF8weDMyOGQyMz17J25hbWUnOl8weDRjMGU1MywndHlwZSc6XzB4M2U2ZmU0KDB4MjZjKSwnZXJyb3InOl8weDI1OGYwMFtfMHgzZTZmZTQoMHgyNWUpXX0sdGhpc1tfMHgzZTZmZTQoMHgyNGEpXShfMHgzMjhkMjMsXzB4NTU3M2M5KSxfMHgzMjhkMjM7fXZhciBfMHgxMTc2MTY9dGhpc1snX3R5cGUnXShfMHhmNjg2ZDApLF8weDU5NzdkOD10aGlzW18weDNlNmZlNCgweDI1YildKF8weDExNzYxNik7aWYoXzB4MzI4ZDIzW18weDNlNmZlNCgweDIwNCldPV8weDExNzYxNixfMHg1OTc3ZDgpdGhpc1tfMHgzZTZmZTQoMHgyNGEpXShfMHgzMjhkMjMsXzB4NTU3M2M5LF8weGY2ODZkMCxmdW5jdGlvbigpe3ZhciBfMHgzMjJmNjg9XzB4M2U2ZmU0O18weDMyOGQyM1sndmFsdWUnXT1fMHhmNjg2ZDBbJ3ZhbHVlT2YnXSgpLCFfMHgzNzQ5YWMmJl8weDQ3MzZmYltfMHgzMjJmNjgoMHgyNzkpXShfMHgxMTc2MTYsXzB4MzI4ZDIzLF8weDU1NzNjOSx7fSk7fSk7ZWxzZXt2YXIgXzB4NDVlY2Q0PV8weDU1NzNjOVtfMHgzZTZmZTQoMHgxYjYpXSYmXzB4NTU3M2M5WydsZXZlbCddPF8weDU1NzNjOVtfMHgzZTZmZTQoMHgxZjMpXSYmXzB4NTU3M2M5WydhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJ11bXzB4M2U2ZmU0KDB4MjZmKV0oXzB4ZjY4NmQwKTwweDAmJl8weDExNzYxNiE9PV8weDNlNmZlNCgweDFkZSkmJl8weDU1NzNjOVtfMHgzZTZmZTQoMHgyNDkpXTxfMHg1NTczYzlbXzB4M2U2ZmU0KDB4Mjg0KV07XzB4NDVlY2Q0fHxfMHg1NTczYzlbXzB4M2U2ZmU0KDB4MjEyKV08XzB4MWFmNmNhfHxfMHgzNzQ5YWM/KHRoaXNbXzB4M2U2ZmU0KDB4MjM4KV0oXzB4MzI4ZDIzLF8weGY2ODZkMCxfMHg1NTczYzksXzB4Mzc0OWFjfHx7fSksdGhpc1tfMHgzZTZmZTQoMHgyMDEpXShfMHhmNjg2ZDAsXzB4MzI4ZDIzKSk6dGhpc1tfMHgzZTZmZTQoMHgyNGEpXShfMHgzMjhkMjMsXzB4NTU3M2M5LF8weGY2ODZkMCxmdW5jdGlvbigpe3ZhciBfMHgyYmNiNzc9XzB4M2U2ZmU0O18weDExNzYxNj09PSdudWxsJ3x8XzB4MTE3NjE2PT09XzB4MmJjYjc3KDB4MjgxKXx8KGRlbGV0ZSBfMHgzMjhkMjNbXzB4MmJjYjc3KDB4MjZlKV0sXzB4MzI4ZDIzW18weDJiY2I3NygweDIxNildPSEweDApO30pO31yZXR1cm4gXzB4MzI4ZDIzO31maW5hbGx5e18weDU1NzNjOVtfMHgzZTZmZTQoMHgyMjgpXT1fMHgyOGExYTYsXzB4NTU3M2M5W18weDNlNmZlNCgweDFmYyldPV8weDFhZjZjYSxfMHg1NTczYzlbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT1fMHg0MzNjYzQ7fX1bXzB4MzEyNDQyKDB4Mjc5KV0oXzB4MmM2ZjgzLF8weDQ0YTUwMCxfMHhiZmJhZTMsXzB4MjUzMTE3KXt2YXIgXzB4NWI3MTQ4PV8weDMxMjQ0MixfMHgzNDMwOTY9XzB4MjUzMTE3W18weDViNzE0OCgweDFhNildfHxfMHhiZmJhZTNbJ3N0ckxlbmd0aCddO2lmKChfMHgyYzZmODM9PT1fMHg1YjcxNDgoMHgyNDIpfHxfMHgyYzZmODM9PT0nU3RyaW5nJykmJl8weDQ0YTUwMFtfMHg1YjcxNDgoMHgyNmUpXSl7bGV0IF8weDRjODNkZj1fMHg0NGE1MDBbXzB4NWI3MTQ4KDB4MjZlKV1bXzB4NWI3MTQ4KDB4MjI5KV07XzB4YmZiYWUzW18weDViNzE0OCgweDI1YyldKz1fMHg0YzgzZGYsXzB4YmZiYWUzW18weDViNzE0OCgweDI1YyldPl8weGJmYmFlM1tfMHg1YjcxNDgoMHgxZjYpXT8oXzB4NDRhNTAwW18weDViNzE0OCgweDIxNildPScnLGRlbGV0ZSBfMHg0NGE1MDBbJ3ZhbHVlJ10pOl8weDRjODNkZj5fMHgzNDMwOTYmJihfMHg0NGE1MDBbXzB4NWI3MTQ4KDB4MjE2KV09XzB4NDRhNTAwW18weDViNzE0OCgweDI2ZSldW18weDViNzE0OCgweDFjZildKDB4MCxfMHgzNDMwOTYpLGRlbGV0ZSBfMHg0NGE1MDBbXzB4NWI3MTQ4KDB4MjZlKV0pO319W18weDMxMjQ0MigweDFiYyldKF8weGM4ODQzOSl7dmFyIF8weDMxYmY2YT1fMHgzMTI0NDI7cmV0dXJuISEoXzB4Yzg4NDM5JiZfMHgyODlmNTRbJ01hcCddJiZ0aGlzW18weDMxYmY2YSgweDIwYildKF8weGM4ODQzOSk9PT0nW29iamVjdFxcXFx4MjBNYXBdJyYmXzB4Yzg4NDM5W18weDMxYmY2YSgweDIwYyldKTt9W18weDMxMjQ0MigweDFlZildKF8weDU5NGNiYSl7dmFyIF8weDExNTYxYT1fMHgzMTI0NDI7aWYoXzB4NTk0Y2JhWydtYXRjaCddKC9eXFxcXGQrJC8pKXJldHVybiBfMHg1OTRjYmE7dmFyIF8weDRmYTIzZDt0cnl7XzB4NGZhMjNkPUpTT05bXzB4MTE1NjFhKDB4MjdjKV0oJycrXzB4NTk0Y2JhKTt9Y2F0Y2h7XzB4NGZhMjNkPSdcXFxceDIyJyt0aGlzW18weDExNTYxYSgweDIwYildKF8weDU5NGNiYSkrJ1xcXFx4MjInO31yZXR1cm4gXzB4NGZhMjNkW18weDExNTYxYSgweDFmYildKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NGZhMjNkPV8weDRmYTIzZFsnc3Vic3RyJ10oMHgxLF8weDRmYTIzZFtfMHgxMTU2MWEoMHgyMjkpXS0weDIpOl8weDRmYTIzZD1fMHg0ZmEyM2RbXzB4MTE1NjFhKDB4MWY1KV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgxMTU2MWEoMHgxZjUpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg0ZmEyM2Q7fVtfMHgzMTI0NDIoMHgyNGEpXShfMHgzZmFhMmUsXzB4NGE1NTkzLF8weDFiMGU3OCxfMHgyNGU5OTUpe3ZhciBfMHgyZDUyODg9XzB4MzEyNDQyO3RoaXNbXzB4MmQ1Mjg4KDB4MjdhKV0oXzB4M2ZhYTJlLF8weDRhNTU5MyksXzB4MjRlOTk1JiZfMHgyNGU5OTUoKSx0aGlzW18weDJkNTI4OCgweDIwMSldKF8weDFiMGU3OCxfMHgzZmFhMmUpLHRoaXNbXzB4MmQ1Mjg4KDB4MjNmKV0oXzB4M2ZhYTJlLF8weDRhNTU5Myk7fVtfMHgzMTI0NDIoMHgyN2EpXShfMHgxYmNiZGIsXzB4MWI3M2MxKXt2YXIgXzB4YzE4NzQxPV8weDMxMjQ0Mjt0aGlzW18weGMxODc0MSgweDI3YildKF8weDFiY2JkYixfMHgxYjczYzEpLHRoaXNbXzB4YzE4NzQxKDB4Mjg1KV0oXzB4MWJjYmRiLF8weDFiNzNjMSksdGhpc1tfMHhjMTg3NDEoMHgxZjApXShfMHgxYmNiZGIsXzB4MWI3M2MxKSx0aGlzW18weGMxODc0MSgweDIxMSldKF8weDFiY2JkYixfMHgxYjczYzEpO31bJ19zZXROb2RlSWQnXShfMHhkZGFiNjcsXzB4MjM1OGZiKXt9Wydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDUwYWMyMSxfMHg0NmJmNmMpe31bXzB4MzEyNDQyKDB4MjczKV0oXzB4NGI2YzVjLF8weDI2NDc3YSl7fVtfMHgzMTI0NDIoMHgxZTApXShfMHgxYmQxZGMpe3ZhciBfMHgzOWQ5MTk9XzB4MzEyNDQyO3JldHVybiBfMHgxYmQxZGM9PT10aGlzW18weDM5ZDkxOSgweDIzNyldO31bJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDJlM2I5ZCxfMHgzZjcwNWQpe3ZhciBfMHg5ZTdmNjA9XzB4MzEyNDQyO3RoaXNbJ19zZXROb2RlTGFiZWwnXShfMHgyZTNiOWQsXzB4M2Y3MDVkKSx0aGlzWydfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZSddKF8weDJlM2I5ZCksXzB4M2Y3MDVkWydzb3J0UHJvcHMnXSYmdGhpc1tfMHg5ZTdmNjAoMHgxYjkpXShfMHgyZTNiOWQpLHRoaXNbJ19hZGRGdW5jdGlvbnNOb2RlJ10oXzB4MmUzYjlkLF8weDNmNzA1ZCksdGhpc1snX2FkZExvYWROb2RlJ10oXzB4MmUzYjlkLF8weDNmNzA1ZCksdGhpc1snX2NsZWFuTm9kZSddKF8weDJlM2I5ZCk7fVtfMHgzMTI0NDIoMHgyMDEpXShfMHgyNDY2YjgsXzB4NTMzN2YxKXt2YXIgXzB4MWM1ZmMwPV8weDMxMjQ0MjtsZXQgXzB4MzhhNDcyO3RyeXtfMHgyODlmNTRbXzB4MWM1ZmMwKDB4MjhhKV0mJihfMHgzOGE0NzI9XzB4Mjg5ZjU0W18weDFjNWZjMCgweDI4YSldWydlcnJvciddLF8weDI4OWY1NFsnY29uc29sZSddW18weDFjNWZjMCgweDIyMyldPWZ1bmN0aW9uKCl7fSksXzB4MjQ2NmI4JiZ0eXBlb2YgXzB4MjQ2NmI4W18weDFjNWZjMCgweDIyOSldPT1fMHgxYzVmYzAoMHgyMjYpJiYoXzB4NTMzN2YxW18weDFjNWZjMCgweDIyOSldPV8weDI0NjZiOFtfMHgxYzVmYzAoMHgyMjkpXSk7fWNhdGNoe31maW5hbGx5e18weDM4YTQ3MiYmKF8weDI4OWY1NFtfMHgxYzVmYzAoMHgyOGEpXVtfMHgxYzVmYzAoMHgyMjMpXT1fMHgzOGE0NzIpO31pZihfMHg1MzM3ZjFbXzB4MWM1ZmMwKDB4MjA0KV09PT1fMHgxYzVmYzAoMHgyMjYpfHxfMHg1MzM3ZjFbJ3R5cGUnXT09PV8weDFjNWZjMCgweDI2Mykpe2lmKGlzTmFOKF8weDUzMzdmMVtfMHgxYzVmYzAoMHgyNmUpXSkpXzB4NTMzN2YxW18weDFjNWZjMCgweDFiYildPSEweDAsZGVsZXRlIF8weDUzMzdmMVtfMHgxYzVmYzAoMHgyNmUpXTtlbHNlIHN3aXRjaChfMHg1MzM3ZjFbXzB4MWM1ZmMwKDB4MjZlKV0pe2Nhc2UgTnVtYmVyW18weDFjNWZjMCgweDIwMyldOl8weDUzMzdmMVtfMHgxYzVmYzAoMHgyNzgpXT0hMHgwLGRlbGV0ZSBfMHg1MzM3ZjFbXzB4MWM1ZmMwKDB4MjZlKV07YnJlYWs7Y2FzZSBOdW1iZXJbXzB4MWM1ZmMwKDB4MjZkKV06XzB4NTMzN2YxW18weDFjNWZjMCgweDIzMSldPSEweDAsZGVsZXRlIF8weDUzMzdmMVsndmFsdWUnXTticmVhaztjYXNlIDB4MDp0aGlzWydfaXNOZWdhdGl2ZVplcm8nXShfMHg1MzM3ZjFbXzB4MWM1ZmMwKDB4MjZlKV0pJiYoXzB4NTMzN2YxW18weDFjNWZjMCgweDFlYyldPSEweDApO2JyZWFrO319ZWxzZSBfMHg1MzM3ZjFbXzB4MWM1ZmMwKDB4MjA0KV09PT1fMHgxYzVmYzAoMHgxZGUpJiZ0eXBlb2YgXzB4MjQ2NmI4W18weDFjNWZjMCgweDI0MyldPT1fMHgxYzVmYzAoMHgyNDIpJiZfMHgyNDY2YjhbXzB4MWM1ZmMwKDB4MjQzKV0mJl8weDUzMzdmMVtfMHgxYzVmYzAoMHgyNDMpXSYmXzB4MjQ2NmI4W18weDFjNWZjMCgweDI0MyldIT09XzB4NTMzN2YxW18weDFjNWZjMCgweDI0MyldJiYoXzB4NTMzN2YxW18weDFjNWZjMCgweDFkNSldPV8weDI0NjZiOFsnbmFtZSddKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHg0YzZhZmYpe3JldHVybiAweDEvXzB4NGM2YWZmPT09TnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddO31bXzB4MzEyNDQyKDB4MWI5KV0oXzB4NDk3Y2IzKXt2YXIgXzB4ZjdhY2QyPV8weDMxMjQ0MjshXzB4NDk3Y2IzWydwcm9wcyddfHwhXzB4NDk3Y2IzW18weGY3YWNkMigweDI0ZildWydsZW5ndGgnXXx8XzB4NDk3Y2IzW18weGY3YWNkMigweDIwNCldPT09XzB4ZjdhY2QyKDB4MWU5KXx8XzB4NDk3Y2IzW18weGY3YWNkMigweDIwNCldPT09XzB4ZjdhY2QyKDB4MjgzKXx8XzB4NDk3Y2IzW18weGY3YWNkMigweDIwNCldPT09XzB4ZjdhY2QyKDB4MWMyKXx8XzB4NDk3Y2IzW18weGY3YWNkMigweDI0ZildWydzb3J0J10oZnVuY3Rpb24oXzB4NTQ0ZTFkLF8weDE4MWIxOSl7dmFyIF8weDRmYWVmYT1fMHhmN2FjZDIsXzB4NWIwZDIzPV8weDU0NGUxZFtfMHg0ZmFlZmEoMHgyNDMpXVsndG9Mb3dlckNhc2UnXSgpLF8weDU0MWFlOD1fMHgxODFiMTlbXzB4NGZhZWZhKDB4MjQzKV1bXzB4NGZhZWZhKDB4MWE0KV0oKTtyZXR1cm4gXzB4NWIwZDIzPF8weDU0MWFlOD8tMHgxOl8weDViMGQyMz5fMHg1NDFhZTg/MHgxOjB4MDt9KTt9WydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDI4ZDczOCxfMHgxMDM2MTkpe3ZhciBfMHgzM2M1ZGE9XzB4MzEyNDQyO2lmKCEoXzB4MTAzNjE5Wydub0Z1bmN0aW9ucyddfHwhXzB4MjhkNzM4Wydwcm9wcyddfHwhXzB4MjhkNzM4W18weDMzYzVkYSgweDI0ZildWydsZW5ndGgnXSkpe2Zvcih2YXIgXzB4MmEyNzBhPVtdLF8weDRlMzNmYT1bXSxfMHgyYzZkN2U9MHgwLF8weDE0ZGY3Yz1fMHgyOGQ3MzhbXzB4MzNjNWRhKDB4MjRmKV1bXzB4MzNjNWRhKDB4MjI5KV07XzB4MmM2ZDdlPF8weDE0ZGY3YztfMHgyYzZkN2UrKyl7dmFyIF8weDEwZjNkMT1fMHgyOGQ3MzhbXzB4MzNjNWRhKDB4MjRmKV1bXzB4MmM2ZDdlXTtfMHgxMGYzZDFbJ3R5cGUnXT09PSdmdW5jdGlvbic/XzB4MmEyNzBhW18weDMzYzVkYSgweDFhZSldKF8weDEwZjNkMSk6XzB4NGUzM2ZhWydwdXNoJ10oXzB4MTBmM2QxKTt9aWYoISghXzB4NGUzM2ZhWydsZW5ndGgnXXx8XzB4MmEyNzBhW18weDMzYzVkYSgweDIyOSldPD0weDEpKXtfMHgyOGQ3MzhbXzB4MzNjNWRhKDB4MjRmKV09XzB4NGUzM2ZhO3ZhciBfMHg1Y2E0YmY9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4MmEyNzBhfTt0aGlzW18weDMzYzVkYSgweDI3YildKF8weDVjYTRiZixfMHgxMDM2MTkpLHRoaXNbXzB4MzNjNWRhKDB4MjczKV0oXzB4NWNhNGJmLF8weDEwMzYxOSksdGhpc1snX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHg1Y2E0YmYpLHRoaXNbXzB4MzNjNWRhKDB4MjExKV0oXzB4NWNhNGJmLF8weDEwMzYxOSksXzB4NWNhNGJmWydpZCddKz0nXFxcXHgyMGYnLF8weDI4ZDczOFtfMHgzM2M1ZGEoMHgyNGYpXVsndW5zaGlmdCddKF8weDVjYTRiZik7fX19W18weDMxMjQ0MigweDI2NyldKF8weDU1NzI1MyxfMHgyMGI5Njkpe31bJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4NGNiZjFmKXt9W18weDMxMjQ0MigweDI4NyldKF8weDcxMjBiNyl7dmFyIF8weDEwYWVmMz1fMHgzMTI0NDI7cmV0dXJuIEFycmF5W18weDEwYWVmMygweDI0ZCldKF8weDcxMjBiNyl8fHR5cGVvZiBfMHg3MTIwYjc9PV8weDEwYWVmMygweDIzYSkmJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDcxMjBiNyk9PT1fMHgxMGFlZjMoMHgyMDgpO31bJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHg0YTc3Y2MsXzB4NDk1M2U3KXt9W18weDMxMjQ0MigweDI2YildKF8weDNhZjQxNSl7ZGVsZXRlIF8weDNhZjQxNVsnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJ10sZGVsZXRlIF8weDNhZjQxNVsnX2hhc1NldE9uSXRzUGF0aCddLGRlbGV0ZSBfMHgzYWY0MTVbJ19oYXNNYXBPbkl0c1BhdGgnXTt9Wydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4MTA3OTQ2LF8weDI3ZGZlZSl7fVtfMHgzMTI0NDIoMHgxZmQpXShfMHg0N2IyMGYpe3ZhciBfMHg0Mjc0OWY9XzB4MzEyNDQyO3JldHVybiBfMHg0N2IyMGY/XzB4NDdiMjBmW18weDQyNzQ5ZigweDFmYildKHRoaXNbXzB4NDI3NDlmKDB4MWM1KV0pPydbJytfMHg0N2IyMGYrJ10nOl8weDQ3YjIwZltfMHg0Mjc0OWYoMHgxZmIpXSh0aGlzW18weDQyNzQ5ZigweDFlOCldKT8nLicrXzB4NDdiMjBmOl8weDQ3YjIwZltfMHg0Mjc0OWYoMHgxZmIpXSh0aGlzW18weDQyNzQ5ZigweDIxMCldKT8nWycrXzB4NDdiMjBmKyddJzonW1xcXFx4MjcnK18weDQ3YjIwZisnXFxcXHgyN10nOicnO319bGV0IF8weDJjNzdhNj1uZXcgXzB4MWQxZjkwKCk7ZnVuY3Rpb24gXzB4MzBmNWNlKF8weDRhOGQyYyxfMHgxMjc2MDksXzB4NTU4NGM1LF8weDNkOGI1NyxfMHg1YzIwZDcsXzB4MzYzMDIzKXt2YXIgXzB4NTEwYTZiPV8weDMxMjQ0MjtsZXQgXzB4M2FjZGFmLF8weDNlMjFhMzt0cnl7XzB4M2UyMWEzPV8weDMyYzJiZigpLF8weDNhY2RhZj1fMHgyMWQzNmFbXzB4MTI3NjA5XSwhXzB4M2FjZGFmfHxfMHgzZTIxYTMtXzB4M2FjZGFmWyd0cyddPjB4MWY0JiZfMHgzYWNkYWZbJ2NvdW50J10mJl8weDNhY2RhZltfMHg1MTBhNmIoMHgxY2QpXS9fMHgzYWNkYWZbXzB4NTEwYTZiKDB4MjQ4KV08MHg2ND8oXzB4MjFkMzZhW18weDEyNzYwOV09XzB4M2FjZGFmPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4M2UyMWEzfSxfMHgyMWQzNmFbXzB4NTEwYTZiKDB4MjE5KV09e30pOl8weDNlMjFhMy1fMHgyMWQzNmFbXzB4NTEwYTZiKDB4MjE5KV1bJ3RzJ10+MHgzMiYmXzB4MjFkMzZhW18weDUxMGE2YigweDIxOSldWydjb3VudCddJiZfMHgyMWQzNmFbJ2hpdHMnXVtfMHg1MTBhNmIoMHgxY2QpXS9fMHgyMWQzNmFbXzB4NTEwYTZiKDB4MjE5KV1bXzB4NTEwYTZiKDB4MjQ4KV08MHg2NCYmKF8weDIxZDM2YVtfMHg1MTBhNmIoMHgyMTkpXT17fSk7bGV0IF8weDIxNGQzNz1bXSxfMHgxYTUyZDc9XzB4M2FjZGFmW18weDUxMGE2YigweDFmNyldfHxfMHgyMWQzNmFbXzB4NTEwYTZiKDB4MjE5KV1bXzB4NTEwYTZiKDB4MWY3KV0/XzB4NTQ0MjUwOl8weGRmNjAyLF8weDk2YzhlNj1fMHg0OGI1MDk9Pnt2YXIgXzB4M2E5ZDExPV8weDUxMGE2YjtsZXQgXzB4MzQxNDk5PXt9O3JldHVybiBfMHgzNDE0OTlbXzB4M2E5ZDExKDB4MjRmKV09XzB4NDhiNTA5W18weDNhOWQxMSgweDI0ZildLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgyNTIpXT1fMHg0OGI1MDlbXzB4M2E5ZDExKDB4MjUyKV0sXzB4MzQxNDk5W18weDNhOWQxMSgweDFhNildPV8weDQ4YjUwOVsnc3RyTGVuZ3RoJ10sXzB4MzQxNDk5Wyd0b3RhbFN0ckxlbmd0aCddPV8weDQ4YjUwOVtfMHgzYTlkMTEoMHgxZjYpXSxfMHgzNDE0OTlbXzB4M2E5ZDExKDB4Mjg0KV09XzB4NDhiNTA5W18weDNhOWQxMSgweDI4NCldLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgxZjMpXT1fMHg0OGI1MDlbXzB4M2E5ZDExKDB4MWYzKV0sXzB4MzQxNDk5W18weDNhOWQxMSgweDI1MSldPSEweDEsXzB4MzQxNDk5W18weDNhOWQxMSgweDI0NildPSFfMHgxMTg5ZmYsXzB4MzQxNDk5W18weDNhOWQxMSgweDFmYyldPTB4MSxfMHgzNDE0OTlbJ2xldmVsJ109MHgwLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgyMzQpXT1fMHgzYTlkMTEoMHgxZjIpLF8weDM0MTQ5OVsncm9vdEV4cHJlc3Npb24nXT1fMHgzYTlkMTEoMHgxY2EpLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgxYjYpXT0hMHgwLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgyNjYpXT1bXSxfMHgzNDE0OTlbXzB4M2E5ZDExKDB4MjQ5KV09MHgwLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgxZjEpXT0hMHgwLF8weDM0MTQ5OVsnYWxsU3RyTGVuZ3RoJ109MHgwLF8weDM0MTQ5OVtfMHgzYTlkMTEoMHgxYmQpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHgzNDE0OTk7fTtmb3IodmFyIF8weDQzOTg1MT0weDA7XzB4NDM5ODUxPF8weDVjMjBkN1snbGVuZ3RoJ107XzB4NDM5ODUxKyspXzB4MjE0ZDM3WydwdXNoJ10oXzB4MmM3N2E2WydzZXJpYWxpemUnXSh7J3RpbWVOb2RlJzpfMHg0YThkMmM9PT0ndGltZSd8fHZvaWQgMHgwfSxfMHg1YzIwZDdbXzB4NDM5ODUxXSxfMHg5NmM4ZTYoXzB4MWE1MmQ3KSx7fSkpO2lmKF8weDRhOGQyYz09PV8weDUxMGE2YigweDFlYSkpe2xldCBfMHg0N2RiMmM9RXJyb3JbXzB4NTEwYTZiKDB4MjA2KV07dHJ5e0Vycm9yW18weDUxMGE2YigweDIwNildPTB4MS8weDAsXzB4MjE0ZDM3W18weDUxMGE2YigweDFhZSldKF8weDJjNzdhNltfMHg1MTBhNmIoMHgyMzgpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4NTEwYTZiKDB4MWIzKV0sXzB4OTZjOGU2KF8weDFhNTJkNykseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbXzB4NTEwYTZiKDB4MjA2KV09XzB4NDdkYjJjO319cmV0dXJueydtZXRob2QnOl8weDUxMGE2YigweDI1ZiksJ3ZlcnNpb24nOl8weDU5MjI1MywnYXJncyc6W3sndHMnOl8weDU1ODRjNSwnc2Vzc2lvbic6XzB4M2Q4YjU3LCdhcmdzJzpfMHgyMTRkMzcsJ2lkJzpfMHgxMjc2MDksJ2NvbnRleHQnOl8weDM2MzAyM31dfTt9Y2F0Y2goXzB4M2Y2MWM5KXtyZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDU5MjI1MywnYXJncyc6W3sndHMnOl8weDU1ODRjNSwnc2Vzc2lvbic6XzB4M2Q4YjU3LCdhcmdzJzpbeyd0eXBlJzpfMHg1MTBhNmIoMHgyNmMpLCdlcnJvcic6XzB4M2Y2MWM5JiZfMHgzZjYxYzlbXzB4NTEwYTZiKDB4MjVlKV19XSwnaWQnOl8weDEyNzYwOSwnY29udGV4dCc6XzB4MzYzMDIzfV19O31maW5hbGx5e3RyeXtpZihfMHgzYWNkYWYmJl8weDNlMjFhMyl7bGV0IF8weDJhN2Y2NT1fMHgzMmMyYmYoKTtfMHgzYWNkYWZbXzB4NTEwYTZiKDB4MjQ4KV0rKyxfMHgzYWNkYWZbXzB4NTEwYTZiKDB4MWNkKV0rPV8weDU5NjFkZChfMHgzZTIxYTMsXzB4MmE3ZjY1KSxfMHgzYWNkYWZbJ3RzJ109XzB4MmE3ZjY1LF8weDIxZDM2YVsnaGl0cyddW18weDUxMGE2YigweDI0OCldKyssXzB4MjFkMzZhW18weDUxMGE2YigweDIxOSldW18weDUxMGE2YigweDFjZCldKz1fMHg1OTYxZGQoXzB4M2UyMWEzLF8weDJhN2Y2NSksXzB4MjFkMzZhW18weDUxMGE2YigweDIxOSldWyd0cyddPV8weDJhN2Y2NSwoXzB4M2FjZGFmWydjb3VudCddPjB4MzJ8fF8weDNhY2RhZltfMHg1MTBhNmIoMHgxY2QpXT4weDY0KSYmKF8weDNhY2RhZlsncmVkdWNlTGltaXRzJ109ITB4MCksKF8weDIxZDM2YVtfMHg1MTBhNmIoMHgyMTkpXVsnY291bnQnXT4weDNlOHx8XzB4MjFkMzZhW18weDUxMGE2YigweDIxOSldW18weDUxMGE2YigweDFjZCldPjB4MTJjKSYmKF8weDIxZDM2YVsnaGl0cyddW18weDUxMGE2YigweDFmNyldPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDI4OWY1NFsnX2NvbnNvbGVfbmluamEnXTt9KShnbG9iYWxUaGlzLF8weDNiYTgzZCgweDIwZiksXzB4M2JhODNkKDB4MWFhKSxfMHgzYmE4M2QoMHgxZTcpLCd3ZWJwYWNrJywnMS4wLjAnLF8weDNiYTgzZCgweDFhZiksXzB4M2JhODNkKDB4MWEyKSxfMHgzYmE4M2QoMHgyNDUpKTtcIik7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCBlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiaW1wb3J0IHtjdXJyZW50RGF5SW5kZXgsIGxhc3RXZWF0aGVyRGF0YSwgc2V0Q3VycmVudERheUluZGV4LCB1cGRhdGVXZWF0aGVyQXBwfSBmcm9tICcuLi93ZWF0aGVyQXBwJztcblxuLyoqXG4gKiBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBuZXh0IGFycm93XG4gKiBQYXNzIHRvIHRoZSBuZXh0IGRheSBpZiBpcyB0aGUgbGFzdCBnbyB0byB0aGUgZmlyc3RcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTmV4dEFycm93RXZlbnQoKSB7XG4gIGNvbnN0IG5leHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0X19hcnJvdycpO1xuICBuZXh0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGFGb3JlQ2FzdCA9IGxhc3RXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBuZXh0RGF5SW5kZXggPSBjdXJyZW50RGF5SW5kZXggKyAxID49IHdlYXRoZXJEYXRhRm9yZUNhc3QubGVuZ3RoID8gMCA6IGN1cnJlbnREYXlJbmRleCArIDE7XG4gICAgc2V0Q3VycmVudERheUluZGV4KG5leHREYXlJbmRleCk7XG4gICAgdXBkYXRlV2VhdGhlckFwcCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwcmV2IGFycm93XG4gKiBQYXNzIHRvIHRoZSBuZXh0IGRheSBpZiBpcyB0aGUgbGFzdCBnbyB0byB0aGUgZmlyc3RcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJldkFycm93RXZlbnQoKSB7XG4gIGNvbnN0IG5leHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2X19hcnJvdycpO1xuICBuZXh0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGFGb3JlQ2FzdCA9IGxhc3RXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBuZXh0RGF5SW5kZXggPSBjdXJyZW50RGF5SW5kZXggLSAxIDwgMCA/IHdlYXRoZXJEYXRhRm9yZUNhc3QubGVuZ3RoLTEgOiBjdXJyZW50RGF5SW5kZXggLSAxO1xuICAgIHNldEN1cnJlbnREYXlJbmRleChuZXh0RGF5SW5kZXgpO1xuICAgIHVwZGF0ZVdlYXRoZXJBcHAoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV4dEFycm93RXZlbnQsIGNyZWF0ZVByZXZBcnJvd0V2ZW50fTtcbiIsImltcG9ydCB7dXNpbmdGYWhyZW5oZWl0fSBmcm9tICcuLi93ZWF0aGVyQXBwJztcblxuLy8gSW1wb3J0IGFsbCB0aGUgd2VhdGhlciBpY29uc1xuaW1wb3J0IHN1bm55SW1nIGZyb20gJy4vaW1nL3N1bm55LnBuZyc7XG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5SW1nIGZyb20gJy4vaW1nL3BhcnRseS1jbG91ZHktZGF5LnBuZyc7XG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gJy4vaW1nL2Nsb3VkeS5wbmcnO1xuaW1wb3J0IG92ZXJjYXN0SW1nIGZyb20gJy4vaW1nL292ZXJjYXN0LnBuZyc7XG5pbXBvcnQgbWlzdEltZyBmcm9tICcuL2ltZy9taXN0LnBuZyc7XG5pbXBvcnQgcmFpbkltZyBmcm9tICcuL2ltZy9yYWluLnBuZyc7XG5pbXBvcnQgc25vd0ltZyBmcm9tICcuL2ltZy9zbm93LnBuZyc7XG5pbXBvcnQgc2xlZXRJbWcgZnJvbSAnLi9pbWcvc2xlZXQucG5nJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1JbWcgZnJvbSAnLi9pbWcvdGh1bmRlcnN0b3JtLnBuZyc7XG5pbXBvcnQgd2luZEltZyBmcm9tICcuL2ltZy93aW5kLnBuZyc7XG5cbi8qKlxuICogUHJpbnQgdGhlIHdlYXRoZXIgc2xpZGVyXG4gKiBZb3UgY2FuIHNjcm9sbCB0aHJvdWdoIGFsbCB0aGUgc2xpZGVzIG9mIHRoZSBkYXlzXG4gKiBAcGFyYW0ge09iamVjdH0gZGF5XG4gKi9cbmZ1bmN0aW9uIHByaW50V2VhdGhlclNsaWRlcihkYXkpIHtcbiAgY29uc3Qgd2VhdGhlckljb25EYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbl9faW1nJyk7XG4gIGNvbnN0IHdlYXRoZXJUaXRsZURheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyX19zbGlkZXJfX2luZm9ybWF0aW9uX190aXRsZScpO1xuICBjb25zdCB3aW5kVmFsdWVEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZF9fdmFsdWVfX2RhdGEnKTtcbiAgY29uc3QgdGVtcFZhbHVlRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBfX2RhdGFfX3ZhbHVlJyk7XG4gIGNvbnN0IGh1bWlkaXR5VmFsdWVEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX2RhdGFfX3ZhbHVlJyk7XG5cbiAgd2VhdGhlckljb25EYXkuc3JjID0gZ2V0V2VhdGhlckljb24oZGF5LmNvbmRpdGlvbi5jb2RlKTtcbiAgd2VhdGhlclRpdGxlRGF5LmlubmVySFRNTCA9IGRheS5jb25kaXRpb24udGV4dDtcbiAgd2luZFZhbHVlRGF5LnRleHRDb250ZW50ID0gZGF5LmF2Z3Zpc19rbTtcbiAgdGVtcFZhbHVlRGF5LnRleHRDb250ZW50ID0gdXNpbmdGYWhyZW5oZWl0ID8gTWF0aC5yb3VuZChkYXkuYXZndGVtcF9mKSA6IE1hdGgucm91bmQoZGF5LmF2Z3RlbXBfYyk7XG4gIGh1bWlkaXR5VmFsdWVEYXkudGV4dENvbnRlbnQgPSBkYXkuYXZnaHVtaWRpdHk7XG59XG5cbi8qKlxuICogQ29udmVydCB0aGUgY29kZSBvZiB0aGUgd2VhdGhlciB0byB0aGUgaWNvblxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGljb25cbiAqL1xuZnVuY3Rpb24gZ2V0V2VhdGhlckljb24oY29kZSkge1xuICBsZXQgaW1nO1xuICBpZiAoY29kZSA9PSAxMDAwKSB7XG4gICAgaW1nID0gc3VubnlJbWc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMDAzKSB7XG4gICAgaW1nID0gcGFydGx5Q2xvdWR5RGF5SW1nO1xuICB9IGVsc2UgaWYgKGNvZGUgPT0gMTAwNikge1xuICAgIGltZyA9IGNsb3VkeUltZztcbiAgfSBlbHNlIGlmIChjb2RlID09IDEwMDkpIHtcbiAgICBpbWcgPSBvdmVyY2FzdEltZztcbiAgfSBlbHNlIGlmIChjb2RlID09IDEwMzAgfHwgY29kZSA9PSAxMTM1IHx8IGNvZGUgPT0gMTE0NykgeyAvLyBBbGwgdGhlIG1pc3QgY29kZXNcbiAgICBpbWcgPSBtaXN0SW1nO1xuICB9IGVsc2UgaWYgKGNvZGUgPT0gMTA2MyB8fFxuICAgIGNvZGUgPT0gMTA3MiB8fFxuICAgIGNvZGUgPT0gMTE1MCB8fFxuICAgIGNvZGUgPT0gMTE1MyB8fFxuICAgIGNvZGUgPT0gMTE4MCB8fFxuICAgIGNvZGUgPT0gMTE4MyB8fFxuICAgIGNvZGUgPT0gMTE4NiB8fFxuICAgIGNvZGUgPT0gMTE4OSB8fFxuICAgIGNvZGUgPT0gMTE5MiB8fFxuICAgIGNvZGUgPT0gMTE5NSB8fFxuICAgIGNvZGUgPT0gMTI0MCB8fFxuICAgIGNvZGUgPT0gMTI0MyB8fFxuICAgIGNvZGUgPT0gMTI0NikgeyAvLyBBbGwgdGhlIHJhaW4gY29kZXNcbiAgICBpbWcgPSByYWluSW1nO1xuICB9IGVsc2UgaWYgKGNvZGUgPT0gMTA2NiB8fFxuICAgIGNvZGUgPT0gMTIxMCB8fFxuICAgIGNvZGUgPT0gMTIxMyB8fFxuICAgIGNvZGUgPT0gMTIxNiB8fFxuICAgIGNvZGUgPT0gMTIxOSB8fFxuICAgIGNvZGUgPT0gMTIyMiB8fFxuICAgIGNvZGUgPT0gMTIyNSB8fFxuICAgIGNvZGUgPT0gMTIzNyB8fFxuICAgIGNvZGUgPT0gMTI1NSB8fFxuICAgIGNvZGUgPT0gMTI1OCB8fFxuICAgIGNvZGUgPT0gMTI2MSB8fFxuICAgIGNvZGUgPT0gMTI2NCkgeyAvLyBBbGwgdGhlIHNub3cgY29kZXNcbiAgICBpbWcgPSBzbm93SW1nO1xuICB9IGVsc2UgaWYgKGNvZGUgPT0gMTA2OSB8fFxuICAgIGNvZGUgPT0gMTExNCB8fFxuICAgIGNvZGUgPT0gMTE2OCB8fFxuICAgIGNvZGUgPT0gMTE3MSB8fFxuICAgIGNvZGUgPT0gMTE5OCB8fFxuICAgIGNvZGUgPT0gMTIwMSB8fFxuICAgIGNvZGUgPT0gMTIwNCB8fFxuICAgIGNvZGUgPT0gMTIwNyB8fFxuICAgIGNvZGUgPT0gMTI0OSB8fFxuICAgIGNvZGUgPT0gMTI1MikgeyAvLyBBbGwgdGhlIHNsZWV0IGNvZGVzXG4gICAgaW1nID0gc2xlZXRJbWc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMDg3IHx8XG4gICAgY29kZSA9PSAxMjczIHx8XG4gICAgY29kZSA9PSAxMjc2IHx8XG4gICAgY29kZSA9PSAxMjc5IHx8XG4gICAgY29kZSA9PSAxMjgyKSB7IC8vIEFsbCB0aGUgdGh1bmRlcnN0b3JtIGNvZGVzXG4gICAgaW1nID0gdGh1bmRlcnN0b3JtSW1nO1xuICB9IGVsc2UgaWYgKGNvZGUgPT0gMTExNykgeyAvLyBBbGwgdGhlIHdpbmQgY29kZXNcbiAgICBpbWcgPSB3aW5kSW1nO1xuICB9XG4gIHJldHVybiBpbWc7XG59XG5cbmV4cG9ydCB7cHJpbnRXZWF0aGVyU2xpZGVyLCBnZXRXZWF0aGVySWNvbn07XG4iLCJpbXBvcnQgJy4vY3NzL2dsb2JhbC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9oZWFkZXIuY3NzJztcbmltcG9ydCAnLi9jc3MvbG9hZGluZy5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9zbGlkZXIuY3NzJztcbmltcG9ydCAnLi9jc3MvaG91cmx5U2xpZGVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL3NlYXJjaC5jc3MnO1xuaW1wb3J0IHtwcmludFdlYXRoZXJBcHB9IGZyb20gJy4vYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlckFwcCc7XG5pbXBvcnQgbG9hZGluZ1N2ZyBmcm9tICcuL2ltZy9sb2FkaW5nLnN2Zyc7XG5pbXBvcnQgY3JlYXRlU2VhcmNoRXZlbnQgZnJvbSAnLi9hc3NldHMvd2VhdGhlckFwcC9zZWFyY2hCb3gvc2VhcmNoQm94JztcbmltcG9ydCBjcmVhdGVGYWhyZW5oZWl0RXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9hc3NldHMvd2VhdGhlckFwcC9mYWhyZW5oZWl0Q2hlY2svZmFocmVuaGVpdENoZWNrJztcbmltcG9ydCB7Y3JlYXRlTmV4dEFycm93RXZlbnQsIGNyZWF0ZVByZXZBcnJvd0V2ZW50fSBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyQXBwL3dlYXRoZXJTbGlkZXIvc2xpZGVyQXJyb3dzJztcblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGlzIHRoZSBtYWluIGZ1bmN0aW9uIG9mIHRoZSBhcHBsaWNhdGlvblxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgc2V0TG9hZGluZ0ltZygpO1xuICBwcmludFdlYXRoZXJBcHAoKTtcbiAgY3JlYXRlU2VhcmNoRXZlbnQoKTtcbiAgY3JlYXRlRmFocmVuaGVpdEV2ZW50TGlzdGVuZXJzKCk7XG4gIGNyZWF0ZU5leHRBcnJvd0V2ZW50KCk7XG4gIGNyZWF0ZVByZXZBcnJvd0V2ZW50KCk7XG59XG5cbi8qKlxuICogQWRkIHRoZSBsb2FkaW5nIGltYWdlIHRvIHRoZSBET01cbiAqL1xuZnVuY3Rpb24gc2V0TG9hZGluZ0ltZygpIHtcbiAgY29uc3QgbG9hZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJyk7XG4gIGNvbnN0IGxvYWRpbmdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbG9hZGluZ0ltZy5zcmMgPSBsb2FkaW5nU3ZnO1xuICBsb2FkaW5nSW1nLmFsdCA9ICdMb2FkaW5nLi4uJztcbiAgbG9hZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkaW5nSW1nKTtcbn1cblxuaW5pdCgpOyAvLyBDYWxsaW5nIHRoZSBtYWluIGZ1bmN0aW9uXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=