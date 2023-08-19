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
  gap: 40px;
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
`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;;AAEA;;kDAEkD;;AAElD;;;EAGE,iBAAiB;AACnB;AACA,2CAA2C;AAC3C;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA,oBAAoB;AACpB;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":[".header {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  padding: 10px 15px 0px 15px;\n}\n\n.header__city__container {\n  flex: 1;\n}\n\n.header__city__name {\n  display: flex;\n  flex-direction: column;\n}\n.header__city__name__date {\n  color: #a8b1dd;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.header__city__name__city {\n  color: #494173;\n}\n\n.header__city__tmpToggle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__city__tmpToggle__text {\n  font-weight: 700;\n  font-size: 19px;\n}\n.switch {\n  transform: rotate(270deg);\n}\n\n/* ---------------------------------------------\n    Switch Style\n   --------------------------------------------- */\n\n.switch,\n.switch input,\n.switch .slider {\n  user-select: none;\n}\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #494173;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #494173;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/css/hourlySlider.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,6BAA6B;EAC7B,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":[".weather__data__hourly {\n  background-color: #5A1BEE;\n  padding: 25px 25px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.current__day {\n  color: #E1EAFD;\n  font-size: 14px;\n}\n\n/* Hourly Slider */\n.weather__data__hourly__slider {\n  display: flex;\n  gap: 25px;\n  overflow-x: auto;\n  padding: 25px 0;\n  width: calc(100vw - 50px);\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n}\n\n.weather__data__hourly__slider__element {\n  background-color: #642FF3;\n  padding: 20px 15px;\n  border-radius: 25px;\n}\n\n.weather__data__hourly__slider__element__image {\n  width: 100%;\n}\n\n.weather__data__hourly__slider__element > p {\n  color: white;\n  text-align: center;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `section.search__container {
  display: flex;
  flex-direction: column;
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
  letter-spacing: 4px;
  background: rgb(0 0 0 / 88%);
  backdrop-filter: blur(10px);
  visibility: hidden;
  opacity: 0;
  padding: 20px;
}

.search__container.search__container--active {
  visibility: visible;
  opacity: 1;
  transition: opacity .1s ease-in-out;
}

.search__close__container {
  align-self: flex-end;
}

.close-icon {
  width: 30px;
}

.weather__search {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search__form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border-bottom: 1px solid white;
}
.search__form__input, .search__form__button {
  background-color: transparent;
  color: white;
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
}

/*Search Results */
.search__results {
  width: 100%;
}

.search__results__list {
  list-style: none;
}

.search__results__list__element {
  padding: 10px 0;
  border-bottom: 1px solid #ffffff42;
  cursor: pointer;
  font-size: 13px;
  text-align: left;
}`, "",{"version":3,"sources":["webpack://./src/css/search.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,4BAA4B;EAC5B,2BAA2B;EAC3B,kBAAkB;EAClB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,mCAAmC;AACrC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,8BAA8B;AAChC;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,UAAU;AACZ;;AAEA,kBAAkB;AAClB;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["section.search__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  letter-spacing: 4px;\n  background: rgb(0 0 0 / 88%);\n  backdrop-filter: blur(10px);\n  visibility: hidden;\n  opacity: 0;\n  padding: 20px;\n}\n\n.search__container.search__container--active {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity .1s ease-in-out;\n}\n\n.search__close__container {\n  align-self: flex-end;\n}\n\n.close-icon {\n  width: 30px;\n}\n\n.weather__search {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.search__form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 15px;\n  border-bottom: 1px solid white;\n}\n.search__form__input, .search__form__button {\n  background-color: transparent;\n  color: white;\n  border: none;\n  outline: none;\n}\n\n.search-icon {\n  width: 20px;\n  height: 20px;\n}\n\n\n.search__error {\n  color: #FF0000;\n  font-size: 14px;\n  margin-top: 10px;\n  opacity: 1;\n  transition: opacity 0.2s; \n}\n\n.search__error--inactive {\n  opacity: 0;\n}\n\n/*Search Results */\n.search__results {\n  width: 100%;\n}\n\n.search__results__list {\n  list-style: none;\n}\n\n.search__results__list__element {\n  padding: 10px 0;\n  border-bottom: 1px solid #ffffff42;\n  cursor: pointer;\n  font-size: 13px;\n  text-align: left;\n}"],"sourceRoot":""}]);
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
  flex: 1;
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
}`, "",{"version":3,"sources":["webpack://./src/css/slider.css"],"names":[],"mappings":"AAAA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;;;AAIA;EACE,OAAO;EACP,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,0CAA0C;EAC1C,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;AACA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB","sourcesContent":[".weather__data {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.weather__slider {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 15px;\n}\n\n.weather__slider__information {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.weather__slider__information__img {\n  width: 100%;\n}\n\n.weather__selected__arrow {\n  fill: #a8b1dd;\n}\n\n\n\n.weather__data__information {\n  flex: 1;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 25px 15px;\n}\n.weather__data__information:first-child {\n  border-right: 1px solid #A8B1DD !important;\n  background-color: red;\n}\n.weather__info {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.weather__info h3 {\n  font-weight: 400;\n  font-size: 12px;\n  color: #A8B1DD;\n}\n.weather__info > p {\n  font-size: 30px;\n  color: #494173;\n}\n\n.weather__info__unit {\n  font-size: 12px;\n  font-weight: 700;\n}"],"sourceRoot":""}]);
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
/* harmony export */   getWeatherAutocomplete: () => (/* binding */ getWeatherAutocomplete),
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
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

/**
 * Return the possible locations for the given location or word
 * @param {String} location
 * @return {Object} data
 */
async function getWeatherAutocomplete(location) {
  const response = await
  fetch(`https://api.weatherapi.com/v1/search.json?key=${"098a63f78d284c26b39202357230908"}&q=${location}`, {mode: 'cors'})
      .catch((error) => {
        return error;
      });

  const data = await response.json();
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
  createShowSearchBoxEvent(); // Create the event to show the search box
  createCloseSearchBoxEvent(); // Create the event to close the search box
  createAutoCompleteEvent(); // Create the event to autocomplete the search box

  const searchForm = document.querySelector('.search__form');
  const searchInput = document.querySelector('.search__form__input');

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    const searchQuery = searchInput.value; // Get the search query
    const weatherData = await (0,_apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(searchQuery); // Get the weather data
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

    loadSearchedData(weatherData); // Load the searched data
  });
}

/**
 * Close the search Box, set the last weather data from the given prop and update the weather app
 * @param {Object} weatherData
 */
function loadSearchedData(weatherData) {
  (0,_weatherApp__WEBPACK_IMPORTED_MODULE_1__.setLastWeatherData)(weatherData); // Set the last weather data
  (0,_weatherApp__WEBPACK_IMPORTED_MODULE_1__.updateWeatherApp)(); // Update the weather app
  closeSearchBox(); // Hide the search box
}

/**
 * Add the event to show the search box when the search icon is clicked
 */
function createShowSearchBoxEvent() {
  const searchIcon = document.querySelector('.header__search .search-icon');
  const searchContainer = document.querySelector('.search__container');

  searchIcon.addEventListener('click', () => {
    searchContainer.classList.add('search__container--active');
  });
}

/**
 * Add the event to close icon in the top right corner of the search box
 * Hide the search box when the close icon is clicked
 */
function createCloseSearchBoxEvent() {
  const closeIcon = document.querySelector('.search__close__container .close-icon');
  const searchContainer = document.querySelector('.search__container');

  closeIcon.addEventListener('click', () => {
    searchContainer.classList.remove('search__container--active');
  });
}
/**
 * Hide the search box
 */
function closeSearchBox() {
  const searchContainer = document.querySelector('.search__container');
  searchContainer.classList.remove('search__container--active');
}

/**
 * Create the event to autocomplete the search box
 * With each key pressed, the search box will be autocompleted
 */
function createAutoCompleteEvent() {
  const searchInput = document.querySelector('.search__form__input');
  const searchAutocompleteContainer = document.querySelector('.search__results__list');

  searchInput.addEventListener('keyup', async () => {
    const searchQuery = searchInput.value; // Get the search query
    // If the search query is less than 3 characters, clear the autocomplete list and return
    if (searchQuery.length < 3) {
      clearAutocompleteList();
      return;
    };

    const weatherData = await (0,_apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_0__.getWeatherAutocomplete)(searchQuery); // Get the weather data

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

    // Remove the same cities from the list
    const filteredCities = weatherData.filter((value, index) => {
      return index === weatherData.findIndex((city) => {
        return city.name === value.name;
      });
    });

    // If there is no error, print the autocomplete list
    clearAutocompleteList(); // Clear the autocomplete list
    filteredCities.forEach((city) => { // Print the autocomplete list
      searchAutocompleteContainer.appendChild(createAutocompleteElement(city));
    });
  });
}

/**
 * Create the autocomplete element
 * @param {String} city
 * @return {HTMLElement}
 */
function createAutocompleteElement(city) {
  // Create the element
  const autocompleteElement = document.createElement('li');
  autocompleteElement.classList.add('search__results__list__element');

  // Add the city name and country to the element
  autocompleteElement.textContent = city.name + ', ' + city.country;

  // Add the event to load the searched data when the element is clicked
  autocompleteElement.addEventListener('click', async () => {
    const weatherData = await (0,_apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(city.name); // Get the weather data
    loadSearchedData(weatherData); // Load the searched data
  });

  return autocompleteElement;
}

/**
 * Clear the autocomplete list
 * Remove all the autocomplete elements
 */
function clearAutocompleteList() {
  const searchAutocompleteContainer = document.querySelector('.search__results__list');
  searchAutocompleteContainer.innerHTML = '';
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
  const weatherData = await (0,_apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(location); // Get weather data
  if (weatherData.error) { // If there is an error, print it and return
    /* eslint-disable */console.log(...oo_oo(`331ab621_0`,weatherData.error));
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


/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x35f6(){var _0x3a1219=['autoExpandLimit','ws/index.js','console','autoExpandMaxDepth','_setNodeQueryPath','index','coverage','_ws','_dateToString','sortProps','_setNodeLabel','noFunctions','_WebSocket','getPrototypeOf','call','_propertyName','url','number','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','\\x20server','_treeNodePropertiesAfterFullValue','slice','stackTraceLimit','nan','unknown','_isPrimitiveWrapperType','RegExp','unref','_additionalMetadata','timeEnd','then','hasOwnProperty','hrtime','864045yhmkqt','20NtEXWa','path','resolveGetters','array','onopen','parse','_Symbol','_setNodeId','now','level','_connecting','_attemptToReconnectShortly','disabledLog','1692466172544','type','_sendErrorMessage','substr','ws://','props','1015390dcvqln','Set','_consoleNinjaAllowedToStart','parent','includes','object','autoExpandPreviousObjects','prototype','...','_undefined','_getOwnPropertyDescriptor','expressionsToEvaluate','_quotedRegExp','allStrLength','set','node','catch','Number','_treeNodePropertiesBeforeFullValue','elements','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_socket','rootExpression','_isArray','nodeModules','WebSocket','message','versions','_setNodeExpressionPath','log','_connectAttemptCount','hits','_addObjectProperty','null','isExpressionToEvaluate','_hasSymbolPropertyOnItsPath','valueOf','data','send','positiveInfinity','create','depth','root_exp_id','_cleanNode','getOwnPropertySymbols','_HTMLAllCollection','constructor','autoExpandPropertyCount','expId','_p_name','getWebSocketClass','match','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','[object\\x20Set]','_isPrimitiveType','default','getOwnPropertyNames','process','hostname','22050RtuqEN','20264056BFmWuJ','_setNodePermissions','_capIfString','_allowedToConnectOnSend','127.0.0.1','toLowerCase','replace','_addLoadNode','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','autoExpand','toString','enumerable','_regExpToString','name','_allowedToSend','bind','Error','disabledTrace','location',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"MacBook-Pro-de-Jose.local\",\"192.168.1.131\"],'defineProperty','funcName','method','_addFunctionsNode','undefined','forEach','indexOf','_setNodeExpandableState','stack','_p_','_addProperty','_blacklistedProperty','_objectToString','bigint','\\x20browser','_isSet','_webSocketErrorDocsLink','symbol','stringify','current','_connected','totalStrLength','POSITIVE_INFINITY','date','port','webpack','readyState','onclose','value','_keyStrRegExp','_console_ninja','reload','test','_numberRegExp','getter','_getOwnPropertyNames','HTMLAllCollection','onerror','function','_processTreeNodeResult','capped','get','negativeInfinity','global','_p_length','_maxConnectAttemptCount','count','_isUndefined','_console_ninja_session','_property','error','join','https://tinyurl.com/37x8b79t','_hasMapOnItsPath','onmessage','_WebSocketClass','pop','_type','time','1624932pkIxlU','NEGATIVE_INFINITY','Boolean','_getOwnPropertySymbols','_connectToHostNow','split','reduceLimits','host','concat','197742TNjjtp',':logPointId:','[object\\x20Map]','trace','nuxt','getOwnPropertyDescriptor','_isNegativeZero','_inBrowser','[object\\x20Array]','string','length','Map','__es'+'Module','Buffer','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','serialize','warn','boolean','timeStamp','astro','push','_isMap','[object\\x20Date]','strLength','','6415470dFxqXS'];_0x35f6=function(){return _0x3a1219;};return _0x35f6();}var _0x107f76=_0x4a11;(function(_0x13ce79,_0x1f8f94){var _0x38b74d=_0x4a11,_0x5125fa=_0x13ce79();while(!![]){try{var _0x40b0e9=-parseInt(_0x38b74d(0x239))/0x1+parseInt(_0x38b74d(0x2c4))/0x2+parseInt(_0x38b74d(0x1ea))/0x3*(-parseInt(_0x38b74d(0x226))/0x4)+parseInt(_0x38b74d(0x274))/0x5+-parseInt(_0x38b74d(0x203))/0x6+-parseInt(_0x38b74d(0x225))/0x7+parseInt(_0x38b74d(0x275))/0x8;if(_0x40b0e9===_0x1f8f94)break;else _0x5125fa['push'](_0x5125fa['shift']());}catch(_0x24462f){_0x5125fa['push'](_0x5125fa['shift']());}}}(_0x35f6,0xc64d3));var ue=Object[_0x107f76(0x261)],te=Object[_0x107f76(0x289)],he=Object[_0x107f76(0x1ef)],le=Object[_0x107f76(0x271)],fe=Object[_0x107f76(0x211)],_e=Object[_0x107f76(0x240)][_0x107f76(0x223)],pe=(_0x1125c9,_0x36100a,_0x3dd0f5,_0x147832)=>{var _0x161fb3=_0x107f76;if(_0x36100a&&typeof _0x36100a=='object'||typeof _0x36100a==_0x161fb3(0x2af)){for(let _0x187d85 of le(_0x36100a))!_e['call'](_0x1125c9,_0x187d85)&&_0x187d85!==_0x3dd0f5&&te(_0x1125c9,_0x187d85,{'get':()=>_0x36100a[_0x187d85],'enumerable':!(_0x147832=he(_0x36100a,_0x187d85))||_0x147832[_0x161fb3(0x280)]});}return _0x1125c9;},ne=(_0x23a20a,_0x48d394,_0x2463a4)=>(_0x2463a4=_0x23a20a!=null?ue(fe(_0x23a20a)):{},pe(_0x48d394||!_0x23a20a||!_0x23a20a[_0x107f76(0x1f6)]?te(_0x2463a4,_0x107f76(0x270),{'value':_0x23a20a,'enumerable':!0x0}):_0x2463a4,_0x23a20a)),Q=class{constructor(_0x2aa230,_0x2a2fec,_0x191b2e,_0xa71a91){var _0x18b0d=_0x107f76;this['global']=_0x2aa230,this[_0x18b0d(0x1e8)]=_0x2a2fec,this[_0x18b0d(0x2a1)]=_0x191b2e,this[_0x18b0d(0x251)]=_0xa71a91,this[_0x18b0d(0x283)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this['_connected']=!0x1,this[_0x18b0d(0x230)]=!0x1,this[_0x18b0d(0x1f1)]=!!this[_0x18b0d(0x2b4)][_0x18b0d(0x252)],this['_WebSocketClass']=null,this[_0x18b0d(0x257)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x18b0d(0x299)]=_0x18b0d(0x2bd),this[_0x18b0d(0x235)]=(this[_0x18b0d(0x1f1)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x18b0d(0x26d))+this['_webSocketErrorDocsLink'];}async[_0x107f76(0x26b)](){var _0x243d3f=_0x107f76;if(this[_0x243d3f(0x2c0)])return this[_0x243d3f(0x2c0)];let _0x5f4581;if(this[_0x243d3f(0x1f1)])_0x5f4581=this[_0x243d3f(0x2b4)][_0x243d3f(0x252)];else{if(this[_0x243d3f(0x2b4)][_0x243d3f(0x272)]?.[_0x243d3f(0x210)])_0x5f4581=this[_0x243d3f(0x2b4)]['process']?.[_0x243d3f(0x210)];else try{let _0x4a7d5e=await import(_0x243d3f(0x227));_0x5f4581=(await import((await import(_0x243d3f(0x214)))['pathToFileURL'](_0x4a7d5e[_0x243d3f(0x2bc)](this[_0x243d3f(0x251)],_0x243d3f(0x205)))[_0x243d3f(0x27f)]()))[_0x243d3f(0x270)];}catch{try{_0x5f4581=require(require(_0x243d3f(0x227))['join'](this[_0x243d3f(0x251)],'ws'));}catch{throw new Error(_0x243d3f(0x216));}}}return this[_0x243d3f(0x2c0)]=_0x5f4581,_0x5f4581;}[_0x107f76(0x1e5)](){var _0x5f110b=_0x107f76;this['_connecting']||this[_0x5f110b(0x29d)]||this[_0x5f110b(0x257)]>=this[_0x5f110b(0x2b6)]||(this[_0x5f110b(0x278)]=!0x1,this[_0x5f110b(0x230)]=!0x0,this[_0x5f110b(0x257)]++,this[_0x5f110b(0x20b)]=new Promise((_0x5ee04d,_0xa7f479)=>{var _0x57adeb=_0x5f110b;this['getWebSocketClass']()[_0x57adeb(0x222)](_0x207ccc=>{var _0x2b38bc=_0x57adeb;let _0x16d681=new _0x207ccc(_0x2b38bc(0x237)+this[_0x2b38bc(0x1e8)]+':'+this[_0x2b38bc(0x2a1)]);_0x16d681[_0x2b38bc(0x2ae)]=()=>{var _0x5dbf47=_0x2b38bc;this[_0x5dbf47(0x283)]=!0x1,this['_disposeWebsocket'](_0x16d681),this[_0x5dbf47(0x231)](),_0xa7f479(new Error('logger\\x20websocket\\x20error'));},_0x16d681['onopen']=()=>{var _0x30acfb=_0x2b38bc;this['_inBrowser']||_0x16d681[_0x30acfb(0x24e)]&&_0x16d681['_socket'][_0x30acfb(0x21f)]&&_0x16d681[_0x30acfb(0x24e)][_0x30acfb(0x21f)](),_0x5ee04d(_0x16d681);},_0x16d681['onclose']=()=>{var _0x46b9bf=_0x2b38bc;this[_0x46b9bf(0x278)]=!0x0,this['_disposeWebsocket'](_0x16d681),this[_0x46b9bf(0x231)]();},_0x16d681[_0x2b38bc(0x2bf)]=_0x389521=>{var _0x542a82=_0x2b38bc;try{_0x389521&&_0x389521[_0x542a82(0x25e)]&&this[_0x542a82(0x1f1)]&&JSON[_0x542a82(0x22b)](_0x389521['data'])[_0x542a82(0x28b)]===_0x542a82(0x2a8)&&this[_0x542a82(0x2b4)][_0x542a82(0x287)][_0x542a82(0x2a8)]();}catch{}};})[_0x57adeb(0x222)](_0x1ce991=>(this[_0x57adeb(0x29d)]=!0x0,this[_0x57adeb(0x230)]=!0x1,this[_0x57adeb(0x278)]=!0x1,this[_0x57adeb(0x283)]=!0x0,this[_0x57adeb(0x257)]=0x0,_0x1ce991))[_0x57adeb(0x249)](_0x31813d=>(this['_connected']=!0x1,this[_0x57adeb(0x230)]=!0x1,console[_0x57adeb(0x1fa)](_0x57adeb(0x24d)+this['_webSocketErrorDocsLink']),_0xa7f479(new Error(_0x57adeb(0x27d)+(_0x31813d&&_0x31813d[_0x57adeb(0x253)])))));}));}['_disposeWebsocket'](_0x3434e0){var _0x3a1aad=_0x107f76;this['_connected']=!0x1,this[_0x3a1aad(0x230)]=!0x1;try{_0x3434e0[_0x3a1aad(0x2a4)]=null,_0x3434e0[_0x3a1aad(0x2ae)]=null,_0x3434e0[_0x3a1aad(0x22a)]=null;}catch{}try{_0x3434e0[_0x3a1aad(0x2a3)]<0x2&&_0x3434e0['close']();}catch{}}[_0x107f76(0x231)](){var _0x28708e=_0x107f76;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this['_maxConnectAttemptCount'])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x4fca0f=_0x4a11;this[_0x4fca0f(0x29d)]||this[_0x4fca0f(0x230)]||(this['_connectToHostNow'](),this[_0x4fca0f(0x20b)]?.[_0x4fca0f(0x249)](()=>this[_0x4fca0f(0x231)]()));},0x1f4),this['_reconnectTimeout'][_0x28708e(0x21f)]&&this['_reconnectTimeout']['unref']());}async['send'](_0x2242ce){var _0xfd99bb=_0x107f76;try{if(!this['_allowedToSend'])return;this[_0xfd99bb(0x278)]&&this[_0xfd99bb(0x1e5)](),(await this[_0xfd99bb(0x20b)])[_0xfd99bb(0x25f)](JSON[_0xfd99bb(0x29b)](_0x2242ce));}catch(_0x3aea18){console['warn'](this[_0xfd99bb(0x235)]+':\\x20'+(_0x3aea18&&_0x3aea18[_0xfd99bb(0x253)])),this['_allowedToSend']=!0x1,this[_0xfd99bb(0x231)]();}}};function _0x4a11(_0x5481b0,_0x174c50){var _0x35f6d2=_0x35f6();return _0x4a11=function(_0x4a1182,_0x5dcf2a){_0x4a1182=_0x4a1182-0x1e2;var _0x21f9de=_0x35f6d2[_0x4a1182];return _0x21f9de;},_0x4a11(_0x5481b0,_0x174c50);}function V(_0x206a09,_0x391f03,_0x281af7,_0x214a29,_0x24f833){var _0x1797d0=_0x107f76;let _0x2c9100=_0x281af7[_0x1797d0(0x1e6)](',')['map'](_0x1dab6c=>{var _0x2ee0ad=_0x1797d0;try{_0x206a09[_0x2ee0ad(0x2b9)]||((_0x24f833==='next.js'||_0x24f833==='remix'||_0x24f833===_0x2ee0ad(0x1fd))&&(_0x24f833+=_0x206a09[_0x2ee0ad(0x272)]?.['versions']?.[_0x2ee0ad(0x248)]?_0x2ee0ad(0x217):_0x2ee0ad(0x297)),_0x206a09[_0x2ee0ad(0x2b9)]={'id':+new Date(),'tool':_0x24f833});let _0x22517b=new Q(_0x206a09,_0x391f03,_0x1dab6c,_0x214a29);return _0x22517b[_0x2ee0ad(0x25f)][_0x2ee0ad(0x284)](_0x22517b);}catch(_0x208e79){return console['warn'](_0x2ee0ad(0x1f8),_0x208e79&&_0x208e79[_0x2ee0ad(0x253)]),()=>{};}});return _0x2e41a0=>_0x2c9100[_0x1797d0(0x28e)](_0x4979c5=>_0x4979c5(_0x2e41a0));}function H(_0x31ce30){var _0xf66149=_0x107f76;let _0x336ebe=function(_0x109f5b,_0x2d2090){return _0x2d2090-_0x109f5b;},_0x426543;if(_0x31ce30['performance'])_0x426543=function(){var _0x104ae7=_0x4a11;return _0x31ce30['performance'][_0x104ae7(0x22e)]();};else{if(_0x31ce30[_0xf66149(0x272)]&&_0x31ce30[_0xf66149(0x272)][_0xf66149(0x224)])_0x426543=function(){var _0xab9407=_0xf66149;return _0x31ce30[_0xab9407(0x272)][_0xab9407(0x224)]();},_0x336ebe=function(_0x14b3ab,_0xab1ae0){return 0x3e8*(_0xab1ae0[0x0]-_0x14b3ab[0x0])+(_0xab1ae0[0x1]-_0x14b3ab[0x1])/0xf4240;};else try{let {performance:_0x3e5de3}=require('perf_hooks');_0x426543=function(){return _0x3e5de3['now']();};}catch{_0x426543=function(){return+new Date();};}}return{'elapsed':_0x336ebe,'timeStamp':_0x426543,'now':()=>Date[_0xf66149(0x22e)]()};}function X(_0x532581,_0x59b21f,_0x24c568){var _0x4ee683=_0x107f76;if(_0x532581[_0x4ee683(0x23b)]!==void 0x0)return _0x532581[_0x4ee683(0x23b)];let _0x1489c1=_0x532581['process']?.[_0x4ee683(0x254)]?.[_0x4ee683(0x248)];return _0x1489c1&&_0x24c568===_0x4ee683(0x1ee)?_0x532581[_0x4ee683(0x23b)]=!0x1:_0x532581[_0x4ee683(0x23b)]=_0x1489c1||!_0x59b21f||_0x532581['location']?.['hostname']&&_0x59b21f[_0x4ee683(0x23d)](_0x532581[_0x4ee683(0x287)][_0x4ee683(0x273)]),_0x532581[_0x4ee683(0x23b)];}((_0x38cf02,_0x41ae56,_0x42cc3b,_0x52cdc7,_0x558311,_0x357f5f,_0x40c9e9,_0x1e2a82,_0x252ef1)=>{var _0x3d1e77=_0x107f76;if(_0x38cf02[_0x3d1e77(0x2a7)])return _0x38cf02[_0x3d1e77(0x2a7)];if(!X(_0x38cf02,_0x1e2a82,_0x558311))return _0x38cf02['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x38cf02[_0x3d1e77(0x2a7)];let _0x4490a0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4d1c0e={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0xfb0a40=H(_0x38cf02),_0x4b309d=_0xfb0a40['elapsed'],_0xf886=_0xfb0a40[_0x3d1e77(0x1fc)],_0x2ecc3d=_0xfb0a40['now'],_0x4f28d7={'hits':{},'ts':{}},_0x3ebabe=_0x121003=>{_0x4f28d7['ts'][_0x121003]=_0xf886();},_0x2af680=(_0x7eaa29,_0x5265e3)=>{var _0x315fbf=_0x3d1e77;let _0x953ac7=_0x4f28d7['ts'][_0x5265e3];if(delete _0x4f28d7['ts'][_0x5265e3],_0x953ac7){let _0x387f97=_0x4b309d(_0x953ac7,_0xf886());_0x587fa8(_0x21505b(_0x315fbf(0x2c3),_0x7eaa29,_0x2ecc3d(),_0x3563c8,[_0x387f97],_0x5265e3));}},_0x3f0182=_0x1dbb0c=>_0x40cd22=>{var _0x51e7f7=_0x3d1e77;try{_0x3ebabe(_0x40cd22),_0x1dbb0c(_0x40cd22);}finally{_0x38cf02[_0x51e7f7(0x206)][_0x51e7f7(0x2c3)]=_0x1dbb0c;}},_0x3d8b49=_0x2a15bf=>_0x46d1d1=>{var _0x55dd15=_0x3d1e77;try{let [_0x5ae68e,_0x312f0b]=_0x46d1d1['split'](_0x55dd15(0x1eb));_0x2af680(_0x312f0b,_0x5ae68e),_0x2a15bf(_0x5ae68e);}finally{_0x38cf02[_0x55dd15(0x206)][_0x55dd15(0x221)]=_0x2a15bf;}};_0x38cf02['_console_ninja']={'consoleLog':(_0x25b803,_0x575e39)=>{var _0x22f545=_0x3d1e77;_0x38cf02['console'][_0x22f545(0x256)][_0x22f545(0x282)]!==_0x22f545(0x232)&&_0x587fa8(_0x21505b(_0x22f545(0x256),_0x25b803,_0x2ecc3d(),_0x3563c8,_0x575e39));},'consoleTrace':(_0x2a3bd4,_0x31cc65)=>{var _0x34ffa0=_0x3d1e77;_0x38cf02[_0x34ffa0(0x206)][_0x34ffa0(0x256)][_0x34ffa0(0x282)]!==_0x34ffa0(0x286)&&_0x587fa8(_0x21505b('trace',_0x2a3bd4,_0x2ecc3d(),_0x3563c8,_0x31cc65));},'consoleTime':()=>{var _0x2cb0dd=_0x3d1e77;_0x38cf02[_0x2cb0dd(0x206)]['time']=_0x3f0182(_0x38cf02[_0x2cb0dd(0x206)][_0x2cb0dd(0x2c3)]);},'consoleTimeEnd':()=>{var _0x11cae0=_0x3d1e77;_0x38cf02[_0x11cae0(0x206)][_0x11cae0(0x221)]=_0x3d8b49(_0x38cf02[_0x11cae0(0x206)][_0x11cae0(0x221)]);},'autoLog':(_0x4952a6,_0x2c53bd)=>{var _0x40588b=_0x3d1e77;_0x587fa8(_0x21505b(_0x40588b(0x256),_0x2c53bd,_0x2ecc3d(),_0x3563c8,[_0x4952a6]));},'autoLogMany':(_0x295f92,_0x492f29)=>{var _0x5797b6=_0x3d1e77;_0x587fa8(_0x21505b(_0x5797b6(0x256),_0x295f92,_0x2ecc3d(),_0x3563c8,_0x492f29));},'autoTrace':(_0x4fb514,_0x3af6e6)=>{var _0x4a23ae=_0x3d1e77;_0x587fa8(_0x21505b(_0x4a23ae(0x1ed),_0x3af6e6,_0x2ecc3d(),_0x3563c8,[_0x4fb514]));},'autoTraceMany':(_0x3a4723,_0x3bfe04)=>{_0x587fa8(_0x21505b('trace',_0x3a4723,_0x2ecc3d(),_0x3563c8,_0x3bfe04));},'autoTime':(_0x405eef,_0x5e054f,_0x354438)=>{_0x3ebabe(_0x354438);},'autoTimeEnd':(_0x2049c7,_0x237e75,_0x43ca7d)=>{_0x2af680(_0x237e75,_0x43ca7d);},'coverage':_0x4e3625=>{var _0x1a6972=_0x3d1e77;_0x587fa8({'method':_0x1a6972(0x20a),'version':_0x357f5f,'args':[{'id':_0x4e3625}]});}};let _0x587fa8=V(_0x38cf02,_0x41ae56,_0x42cc3b,_0x52cdc7,_0x558311),_0x3563c8=_0x38cf02[_0x3d1e77(0x2b9)];class _0x1deff5{constructor(){var _0x567a4f=_0x3d1e77;this[_0x567a4f(0x2a6)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x567a4f(0x2aa)]=/^(0|[1-9][0-9]*)$/,this[_0x567a4f(0x245)]=/'([^\\\\']|\\\\')*'/,this[_0x567a4f(0x242)]=_0x38cf02['undefined'],this[_0x567a4f(0x266)]=_0x38cf02[_0x567a4f(0x2ad)],this[_0x567a4f(0x243)]=Object[_0x567a4f(0x1ef)],this[_0x567a4f(0x2ac)]=Object[_0x567a4f(0x271)],this['_Symbol']=_0x38cf02['Symbol'],this[_0x567a4f(0x281)]=RegExp['prototype']['toString'],this[_0x567a4f(0x20c)]=Date['prototype'][_0x567a4f(0x27f)];}[_0x3d1e77(0x1f9)](_0x4066ed,_0x38e14e,_0xf67925,_0x3709ab){var _0x1ad274=_0x3d1e77,_0x356234=this,_0xff9639=_0xf67925[_0x1ad274(0x27e)];function _0x367d7d(_0x386403,_0xe3ebbd,_0x37c0de){var _0x5e71a4=_0x1ad274;_0xe3ebbd['type']=_0x5e71a4(0x21c),_0xe3ebbd['error']=_0x386403[_0x5e71a4(0x253)],_0x30f8ac=_0x37c0de['node']['current'],_0x37c0de[_0x5e71a4(0x248)]['current']=_0xe3ebbd,_0x356234[_0x5e71a4(0x24b)](_0xe3ebbd,_0x37c0de);}try{_0xf67925['level']++,_0xf67925[_0x1ad274(0x27e)]&&_0xf67925[_0x1ad274(0x23f)]['push'](_0x38e14e);var _0x4e8bd8,_0x4b2e02,_0x1ebd81,_0x5398d6,_0x33c57d=[],_0x4f29b8=[],_0x4033ea,_0x2daf1e=this[_0x1ad274(0x2c2)](_0x38e14e),_0x1a5a39=_0x2daf1e===_0x1ad274(0x229),_0x52f5db=!0x1,_0x395dc1=_0x2daf1e===_0x1ad274(0x2af),_0x28a0ac=this[_0x1ad274(0x26f)](_0x2daf1e),_0xe6544=this[_0x1ad274(0x21d)](_0x2daf1e),_0x52f5aa=_0x28a0ac||_0xe6544,_0x2e1a6d={},_0x2ff2fa=0x0,_0x3e4de4=!0x1,_0x30f8ac,_0x3ab458=/^(([1-9]{1}[0-9]*)|0)$/;if(_0xf67925[_0x1ad274(0x262)]){if(_0x1a5a39){if(_0x4b2e02=_0x38e14e[_0x1ad274(0x1f4)],_0x4b2e02>_0xf67925[_0x1ad274(0x24c)]){for(_0x1ebd81=0x0,_0x5398d6=_0xf67925['elements'],_0x4e8bd8=_0x1ebd81;_0x4e8bd8<_0x5398d6;_0x4e8bd8++)_0x4f29b8[_0x1ad274(0x1fe)](_0x356234['_addProperty'](_0x33c57d,_0x38e14e,_0x2daf1e,_0x4e8bd8,_0xf67925));_0x4066ed['cappedElements']=!0x0;}else{for(_0x1ebd81=0x0,_0x5398d6=_0x4b2e02,_0x4e8bd8=_0x1ebd81;_0x4e8bd8<_0x5398d6;_0x4e8bd8++)_0x4f29b8[_0x1ad274(0x1fe)](_0x356234[_0x1ad274(0x293)](_0x33c57d,_0x38e14e,_0x2daf1e,_0x4e8bd8,_0xf67925));}_0xf67925[_0x1ad274(0x268)]+=_0x4f29b8['length'];}if(!(_0x2daf1e===_0x1ad274(0x25a)||_0x2daf1e===_0x1ad274(0x28d))&&!_0x28a0ac&&_0x2daf1e!=='String'&&_0x2daf1e!==_0x1ad274(0x1f7)&&_0x2daf1e!==_0x1ad274(0x296)){var _0x5f1e16=_0x3709ab[_0x1ad274(0x238)]||_0xf67925[_0x1ad274(0x238)];if(this[_0x1ad274(0x298)](_0x38e14e)?(_0x4e8bd8=0x0,_0x38e14e[_0x1ad274(0x28e)](function(_0x3f5550){var _0x47f928=_0x1ad274;if(_0x2ff2fa++,_0xf67925['autoExpandPropertyCount']++,_0x2ff2fa>_0x5f1e16){_0x3e4de4=!0x0;return;}if(!_0xf67925['isExpressionToEvaluate']&&_0xf67925[_0x47f928(0x27e)]&&_0xf67925['autoExpandPropertyCount']>_0xf67925[_0x47f928(0x204)]){_0x3e4de4=!0x0;return;}_0x4f29b8[_0x47f928(0x1fe)](_0x356234[_0x47f928(0x293)](_0x33c57d,_0x38e14e,_0x47f928(0x23a),_0x4e8bd8++,_0xf67925,function(_0x4ec8e2){return function(){return _0x4ec8e2;};}(_0x3f5550)));})):this[_0x1ad274(0x1ff)](_0x38e14e)&&_0x38e14e[_0x1ad274(0x28e)](function(_0x149313,_0x72fe32){var _0x351fff=_0x1ad274;if(_0x2ff2fa++,_0xf67925[_0x351fff(0x268)]++,_0x2ff2fa>_0x5f1e16){_0x3e4de4=!0x0;return;}if(!_0xf67925[_0x351fff(0x25b)]&&_0xf67925[_0x351fff(0x27e)]&&_0xf67925[_0x351fff(0x268)]>_0xf67925[_0x351fff(0x204)]){_0x3e4de4=!0x0;return;}var _0x4cde39=_0x72fe32[_0x351fff(0x27f)]();_0x4cde39['length']>0x64&&(_0x4cde39=_0x4cde39[_0x351fff(0x219)](0x0,0x64)+_0x351fff(0x241)),_0x4f29b8[_0x351fff(0x1fe)](_0x356234['_addProperty'](_0x33c57d,_0x38e14e,_0x351fff(0x1f5),_0x4cde39,_0xf67925,function(_0x303eba){return function(){return _0x303eba;};}(_0x149313)));}),!_0x52f5db){try{for(_0x4033ea in _0x38e14e)if(!(_0x1a5a39&&_0x3ab458[_0x1ad274(0x2a9)](_0x4033ea))&&!this[_0x1ad274(0x294)](_0x38e14e,_0x4033ea,_0xf67925)){if(_0x2ff2fa++,_0xf67925['autoExpandPropertyCount']++,_0x2ff2fa>_0x5f1e16){_0x3e4de4=!0x0;break;}if(!_0xf67925[_0x1ad274(0x25b)]&&_0xf67925[_0x1ad274(0x27e)]&&_0xf67925[_0x1ad274(0x268)]>_0xf67925['autoExpandLimit']){_0x3e4de4=!0x0;break;}_0x4f29b8['push'](_0x356234[_0x1ad274(0x259)](_0x33c57d,_0x2e1a6d,_0x38e14e,_0x2daf1e,_0x4033ea,_0xf67925));}}catch{}if(_0x2e1a6d[_0x1ad274(0x2b5)]=!0x0,_0x395dc1&&(_0x2e1a6d[_0x1ad274(0x26a)]=!0x0),!_0x3e4de4){var _0x24c8f1=[][_0x1ad274(0x1e9)](this[_0x1ad274(0x2ac)](_0x38e14e))[_0x1ad274(0x1e9)](this[_0x1ad274(0x1e4)](_0x38e14e));for(_0x4e8bd8=0x0,_0x4b2e02=_0x24c8f1[_0x1ad274(0x1f4)];_0x4e8bd8<_0x4b2e02;_0x4e8bd8++)if(_0x4033ea=_0x24c8f1[_0x4e8bd8],!(_0x1a5a39&&_0x3ab458[_0x1ad274(0x2a9)](_0x4033ea[_0x1ad274(0x27f)]()))&&!this[_0x1ad274(0x294)](_0x38e14e,_0x4033ea,_0xf67925)&&!_0x2e1a6d['_p_'+_0x4033ea[_0x1ad274(0x27f)]()]){if(_0x2ff2fa++,_0xf67925['autoExpandPropertyCount']++,_0x2ff2fa>_0x5f1e16){_0x3e4de4=!0x0;break;}if(!_0xf67925[_0x1ad274(0x25b)]&&_0xf67925[_0x1ad274(0x27e)]&&_0xf67925['autoExpandPropertyCount']>_0xf67925['autoExpandLimit']){_0x3e4de4=!0x0;break;}_0x4f29b8[_0x1ad274(0x1fe)](_0x356234[_0x1ad274(0x259)](_0x33c57d,_0x2e1a6d,_0x38e14e,_0x2daf1e,_0x4033ea,_0xf67925));}}}}}if(_0x4066ed['type']=_0x2daf1e,_0x52f5aa?(_0x4066ed[_0x1ad274(0x2a5)]=_0x38e14e[_0x1ad274(0x25d)](),this['_capIfString'](_0x2daf1e,_0x4066ed,_0xf67925,_0x3709ab)):_0x2daf1e===_0x1ad274(0x2a0)?_0x4066ed[_0x1ad274(0x2a5)]=this['_dateToString'][_0x1ad274(0x212)](_0x38e14e):_0x2daf1e===_0x1ad274(0x296)?_0x4066ed['value']=_0x38e14e[_0x1ad274(0x27f)]():_0x2daf1e===_0x1ad274(0x21e)?_0x4066ed[_0x1ad274(0x2a5)]=this[_0x1ad274(0x281)]['call'](_0x38e14e):_0x2daf1e===_0x1ad274(0x29a)&&this[_0x1ad274(0x22c)]?_0x4066ed['value']=this['_Symbol'][_0x1ad274(0x240)][_0x1ad274(0x27f)][_0x1ad274(0x212)](_0x38e14e):!_0xf67925[_0x1ad274(0x262)]&&!(_0x2daf1e===_0x1ad274(0x25a)||_0x2daf1e===_0x1ad274(0x28d))&&(delete _0x4066ed['value'],_0x4066ed[_0x1ad274(0x2b1)]=!0x0),_0x3e4de4&&(_0x4066ed['cappedProps']=!0x0),_0x30f8ac=_0xf67925[_0x1ad274(0x248)][_0x1ad274(0x29c)],_0xf67925['node']['current']=_0x4066ed,this[_0x1ad274(0x24b)](_0x4066ed,_0xf67925),_0x4f29b8[_0x1ad274(0x1f4)]){for(_0x4e8bd8=0x0,_0x4b2e02=_0x4f29b8[_0x1ad274(0x1f4)];_0x4e8bd8<_0x4b2e02;_0x4e8bd8++)_0x4f29b8[_0x4e8bd8](_0x4e8bd8);}_0x33c57d[_0x1ad274(0x1f4)]&&(_0x4066ed[_0x1ad274(0x238)]=_0x33c57d);}catch(_0x2bae83){_0x367d7d(_0x2bae83,_0x4066ed,_0xf67925);}return this[_0x1ad274(0x220)](_0x38e14e,_0x4066ed),this['_treeNodePropertiesAfterFullValue'](_0x4066ed,_0xf67925),_0xf67925[_0x1ad274(0x248)]['current']=_0x30f8ac,_0xf67925[_0x1ad274(0x22f)]--,_0xf67925[_0x1ad274(0x27e)]=_0xff9639,_0xf67925['autoExpand']&&_0xf67925[_0x1ad274(0x23f)][_0x1ad274(0x2c1)](),_0x4066ed;}[_0x3d1e77(0x1e4)](_0x63c83a){var _0x35bb02=_0x3d1e77;return Object[_0x35bb02(0x265)]?Object[_0x35bb02(0x265)](_0x63c83a):[];}[_0x3d1e77(0x298)](_0x18fa19){var _0x554182=_0x3d1e77;return!!(_0x18fa19&&_0x38cf02['Set']&&this[_0x554182(0x295)](_0x18fa19)===_0x554182(0x26e)&&_0x18fa19[_0x554182(0x28e)]);}[_0x3d1e77(0x294)](_0x17464a,_0x22c164,_0x4fdcc1){var _0x9a329=_0x3d1e77;return _0x4fdcc1['noFunctions']?typeof _0x17464a[_0x22c164]==_0x9a329(0x2af):!0x1;}['_type'](_0x464fd6){var _0x207ae3=_0x3d1e77,_0x423297='';return _0x423297=typeof _0x464fd6,_0x423297===_0x207ae3(0x23e)?this['_objectToString'](_0x464fd6)===_0x207ae3(0x1f2)?_0x423297=_0x207ae3(0x229):this[_0x207ae3(0x295)](_0x464fd6)===_0x207ae3(0x200)?_0x423297=_0x207ae3(0x2a0):this['_objectToString'](_0x464fd6)==='[object\\x20BigInt]'?_0x423297=_0x207ae3(0x296):_0x464fd6===null?_0x423297='null':_0x464fd6[_0x207ae3(0x267)]&&(_0x423297=_0x464fd6[_0x207ae3(0x267)][_0x207ae3(0x282)]||_0x423297):_0x423297===_0x207ae3(0x28d)&&this[_0x207ae3(0x266)]&&_0x464fd6 instanceof this['_HTMLAllCollection']&&(_0x423297=_0x207ae3(0x2ad)),_0x423297;}['_objectToString'](_0x31f1ee){var _0x55b97a=_0x3d1e77;return Object[_0x55b97a(0x240)][_0x55b97a(0x27f)][_0x55b97a(0x212)](_0x31f1ee);}[_0x3d1e77(0x26f)](_0x4cec86){var _0x1981ca=_0x3d1e77;return _0x4cec86===_0x1981ca(0x1fb)||_0x4cec86===_0x1981ca(0x1f3)||_0x4cec86==='number';}[_0x3d1e77(0x21d)](_0x3a83cd){var _0x2bf2d2=_0x3d1e77;return _0x3a83cd===_0x2bf2d2(0x1e3)||_0x3a83cd==='String'||_0x3a83cd===_0x2bf2d2(0x24a);}[_0x3d1e77(0x293)](_0x5c4dcc,_0xa26929,_0x3bc75f,_0x51f684,_0x4bbd15,_0x3fe8e8){var _0x5b499c=this;return function(_0x103bf4){var _0x4203f2=_0x4a11,_0x2d6820=_0x4bbd15['node']['current'],_0x3454f6=_0x4bbd15[_0x4203f2(0x248)][_0x4203f2(0x209)],_0x5d9be8=_0x4bbd15[_0x4203f2(0x248)][_0x4203f2(0x23c)];_0x4bbd15[_0x4203f2(0x248)][_0x4203f2(0x23c)]=_0x2d6820,_0x4bbd15['node'][_0x4203f2(0x209)]=typeof _0x51f684=='number'?_0x51f684:_0x103bf4,_0x5c4dcc[_0x4203f2(0x1fe)](_0x5b499c[_0x4203f2(0x2ba)](_0xa26929,_0x3bc75f,_0x51f684,_0x4bbd15,_0x3fe8e8)),_0x4bbd15[_0x4203f2(0x248)][_0x4203f2(0x23c)]=_0x5d9be8,_0x4bbd15[_0x4203f2(0x248)][_0x4203f2(0x209)]=_0x3454f6;};}[_0x3d1e77(0x259)](_0x140ac0,_0x430401,_0x4e6a71,_0x1d3e3e,_0x1f9aea,_0x12bb79,_0x28adcd){var _0x49950b=_0x3d1e77,_0x31e403=this;return _0x430401[_0x49950b(0x292)+_0x1f9aea[_0x49950b(0x27f)]()]=!0x0,function(_0xcc472c){var _0xf1f7b0=_0x49950b,_0x405450=_0x12bb79[_0xf1f7b0(0x248)][_0xf1f7b0(0x29c)],_0x3b6d23=_0x12bb79['node']['index'],_0x172424=_0x12bb79[_0xf1f7b0(0x248)][_0xf1f7b0(0x23c)];_0x12bb79[_0xf1f7b0(0x248)][_0xf1f7b0(0x23c)]=_0x405450,_0x12bb79[_0xf1f7b0(0x248)][_0xf1f7b0(0x209)]=_0xcc472c,_0x140ac0[_0xf1f7b0(0x1fe)](_0x31e403[_0xf1f7b0(0x2ba)](_0x4e6a71,_0x1d3e3e,_0x1f9aea,_0x12bb79,_0x28adcd)),_0x12bb79[_0xf1f7b0(0x248)][_0xf1f7b0(0x23c)]=_0x172424,_0x12bb79['node'][_0xf1f7b0(0x209)]=_0x3b6d23;};}[_0x3d1e77(0x2ba)](_0x3d8a57,_0x157961,_0x25c598,_0x41ebcc,_0x15c594){var _0xa65d96=_0x3d1e77,_0x5efd93=this;_0x15c594||(_0x15c594=function(_0xf6bc3a,_0x2c0ed2){return _0xf6bc3a[_0x2c0ed2];});var _0x5df9e3=_0x25c598['toString'](),_0x205226=_0x41ebcc[_0xa65d96(0x244)]||{},_0x399fd7=_0x41ebcc['depth'],_0x56145f=_0x41ebcc[_0xa65d96(0x25b)];try{var _0x279ff2=this[_0xa65d96(0x1ff)](_0x3d8a57),_0x22c88b=_0x5df9e3;_0x279ff2&&_0x22c88b[0x0]==='\\x27'&&(_0x22c88b=_0x22c88b[_0xa65d96(0x236)](0x1,_0x22c88b['length']-0x2));var _0x115e67=_0x41ebcc[_0xa65d96(0x244)]=_0x205226[_0xa65d96(0x292)+_0x22c88b];_0x115e67&&(_0x41ebcc[_0xa65d96(0x262)]=_0x41ebcc[_0xa65d96(0x262)]+0x1),_0x41ebcc[_0xa65d96(0x25b)]=!!_0x115e67;var _0x569398=typeof _0x25c598==_0xa65d96(0x29a),_0x2ba90b={'name':_0x569398||_0x279ff2?_0x5df9e3:this[_0xa65d96(0x213)](_0x5df9e3)};if(_0x569398&&(_0x2ba90b[_0xa65d96(0x29a)]=!0x0),!(_0x157961===_0xa65d96(0x229)||_0x157961===_0xa65d96(0x285))){var _0x29f7ad=this[_0xa65d96(0x243)](_0x3d8a57,_0x25c598);if(_0x29f7ad&&(_0x29f7ad[_0xa65d96(0x247)]&&(_0x2ba90b['setter']=!0x0),_0x29f7ad[_0xa65d96(0x2b2)]&&!_0x115e67&&!_0x41ebcc['resolveGetters']))return _0x2ba90b[_0xa65d96(0x2ab)]=!0x0,this['_processTreeNodeResult'](_0x2ba90b,_0x41ebcc),_0x2ba90b;}var _0x36cc71;try{_0x36cc71=_0x15c594(_0x3d8a57,_0x25c598);}catch(_0x1be76e){return _0x2ba90b={'name':_0x5df9e3,'type':'unknown','error':_0x1be76e[_0xa65d96(0x253)]},this[_0xa65d96(0x2b0)](_0x2ba90b,_0x41ebcc),_0x2ba90b;}var _0x46121d=this[_0xa65d96(0x2c2)](_0x36cc71),_0x497ec3=this[_0xa65d96(0x26f)](_0x46121d);if(_0x2ba90b[_0xa65d96(0x234)]=_0x46121d,_0x497ec3)this[_0xa65d96(0x2b0)](_0x2ba90b,_0x41ebcc,_0x36cc71,function(){var _0x1d94d4=_0xa65d96;_0x2ba90b[_0x1d94d4(0x2a5)]=_0x36cc71['valueOf'](),!_0x115e67&&_0x5efd93[_0x1d94d4(0x277)](_0x46121d,_0x2ba90b,_0x41ebcc,{});});else{var _0x1e66ab=_0x41ebcc['autoExpand']&&_0x41ebcc['level']<_0x41ebcc[_0xa65d96(0x207)]&&_0x41ebcc[_0xa65d96(0x23f)][_0xa65d96(0x28f)](_0x36cc71)<0x0&&_0x46121d!=='function'&&_0x41ebcc[_0xa65d96(0x268)]<_0x41ebcc[_0xa65d96(0x204)];_0x1e66ab||_0x41ebcc[_0xa65d96(0x22f)]<_0x399fd7||_0x115e67?(this[_0xa65d96(0x1f9)](_0x2ba90b,_0x36cc71,_0x41ebcc,_0x115e67||{}),this[_0xa65d96(0x220)](_0x36cc71,_0x2ba90b)):this[_0xa65d96(0x2b0)](_0x2ba90b,_0x41ebcc,_0x36cc71,function(){var _0x29d9a1=_0xa65d96;_0x46121d===_0x29d9a1(0x25a)||_0x46121d===_0x29d9a1(0x28d)||(delete _0x2ba90b[_0x29d9a1(0x2a5)],_0x2ba90b[_0x29d9a1(0x2b1)]=!0x0);});}return _0x2ba90b;}finally{_0x41ebcc[_0xa65d96(0x244)]=_0x205226,_0x41ebcc[_0xa65d96(0x262)]=_0x399fd7,_0x41ebcc[_0xa65d96(0x25b)]=_0x56145f;}}[_0x3d1e77(0x277)](_0x1cb345,_0x20d78c,_0x913d66,_0x476076){var _0x454bc7=_0x3d1e77,_0x5f0849=_0x476076[_0x454bc7(0x201)]||_0x913d66[_0x454bc7(0x201)];if((_0x1cb345===_0x454bc7(0x1f3)||_0x1cb345==='String')&&_0x20d78c[_0x454bc7(0x2a5)]){let _0x2f1578=_0x20d78c[_0x454bc7(0x2a5)][_0x454bc7(0x1f4)];_0x913d66[_0x454bc7(0x246)]+=_0x2f1578,_0x913d66[_0x454bc7(0x246)]>_0x913d66[_0x454bc7(0x29e)]?(_0x20d78c[_0x454bc7(0x2b1)]='',delete _0x20d78c[_0x454bc7(0x2a5)]):_0x2f1578>_0x5f0849&&(_0x20d78c['capped']=_0x20d78c[_0x454bc7(0x2a5)][_0x454bc7(0x236)](0x0,_0x5f0849),delete _0x20d78c[_0x454bc7(0x2a5)]);}}[_0x3d1e77(0x1ff)](_0x5509f1){var _0x5c19bd=_0x3d1e77;return!!(_0x5509f1&&_0x38cf02[_0x5c19bd(0x1f5)]&&this[_0x5c19bd(0x295)](_0x5509f1)===_0x5c19bd(0x1ec)&&_0x5509f1[_0x5c19bd(0x28e)]);}['_propertyName'](_0x52f98c){var _0x1eb498=_0x3d1e77;if(_0x52f98c[_0x1eb498(0x26c)](/^\\d+$/))return _0x52f98c;var _0x5857fc;try{_0x5857fc=JSON['stringify'](''+_0x52f98c);}catch{_0x5857fc='\\x22'+this['_objectToString'](_0x52f98c)+'\\x22';}return _0x5857fc[_0x1eb498(0x26c)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5857fc=_0x5857fc['substr'](0x1,_0x5857fc[_0x1eb498(0x1f4)]-0x2):_0x5857fc=_0x5857fc[_0x1eb498(0x27b)](/'/g,'\\x5c\\x27')[_0x1eb498(0x27b)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x5857fc;}[_0x3d1e77(0x2b0)](_0x37bbd0,_0x33f1e8,_0x5b7b50,_0x57397e){var _0x1a9649=_0x3d1e77;this[_0x1a9649(0x24b)](_0x37bbd0,_0x33f1e8),_0x57397e&&_0x57397e(),this[_0x1a9649(0x220)](_0x5b7b50,_0x37bbd0),this[_0x1a9649(0x218)](_0x37bbd0,_0x33f1e8);}[_0x3d1e77(0x24b)](_0xab1bca,_0x3a128e){var _0x3196bc=_0x3d1e77;this[_0x3196bc(0x22d)](_0xab1bca,_0x3a128e),this[_0x3196bc(0x208)](_0xab1bca,_0x3a128e),this[_0x3196bc(0x255)](_0xab1bca,_0x3a128e),this[_0x3196bc(0x276)](_0xab1bca,_0x3a128e);}[_0x3d1e77(0x22d)](_0x51b232,_0x3e60a4){}[_0x3d1e77(0x208)](_0x3628b1,_0xe57856){}['_setNodeLabel'](_0x4670af,_0x50d92e){}[_0x3d1e77(0x2b8)](_0x1b5a5f){var _0x1bade0=_0x3d1e77;return _0x1b5a5f===this[_0x1bade0(0x242)];}['_treeNodePropertiesAfterFullValue'](_0x22bcf7,_0x2998b7){var _0x27eac4=_0x3d1e77;this[_0x27eac4(0x20e)](_0x22bcf7,_0x2998b7),this[_0x27eac4(0x290)](_0x22bcf7),_0x2998b7[_0x27eac4(0x20d)]&&this['_sortProps'](_0x22bcf7),this[_0x27eac4(0x28c)](_0x22bcf7,_0x2998b7),this['_addLoadNode'](_0x22bcf7,_0x2998b7),this[_0x27eac4(0x264)](_0x22bcf7);}[_0x3d1e77(0x220)](_0x2852d3,_0x31cee9){var _0x267516=_0x3d1e77;let _0x1b6b05;try{_0x38cf02[_0x267516(0x206)]&&(_0x1b6b05=_0x38cf02[_0x267516(0x206)][_0x267516(0x2bb)],_0x38cf02[_0x267516(0x206)][_0x267516(0x2bb)]=function(){}),_0x2852d3&&typeof _0x2852d3[_0x267516(0x1f4)]==_0x267516(0x215)&&(_0x31cee9['length']=_0x2852d3['length']);}catch{}finally{_0x1b6b05&&(_0x38cf02[_0x267516(0x206)]['error']=_0x1b6b05);}if(_0x31cee9[_0x267516(0x234)]==='number'||_0x31cee9[_0x267516(0x234)]===_0x267516(0x24a)){if(isNaN(_0x31cee9[_0x267516(0x2a5)]))_0x31cee9[_0x267516(0x21b)]=!0x0,delete _0x31cee9[_0x267516(0x2a5)];else switch(_0x31cee9[_0x267516(0x2a5)]){case Number[_0x267516(0x29f)]:_0x31cee9[_0x267516(0x260)]=!0x0,delete _0x31cee9['value'];break;case Number[_0x267516(0x1e2)]:_0x31cee9[_0x267516(0x2b3)]=!0x0,delete _0x31cee9[_0x267516(0x2a5)];break;case 0x0:this['_isNegativeZero'](_0x31cee9[_0x267516(0x2a5)])&&(_0x31cee9['negativeZero']=!0x0);break;}}else _0x31cee9['type']==='function'&&typeof _0x2852d3[_0x267516(0x282)]==_0x267516(0x1f3)&&_0x2852d3[_0x267516(0x282)]&&_0x31cee9[_0x267516(0x282)]&&_0x2852d3[_0x267516(0x282)]!==_0x31cee9[_0x267516(0x282)]&&(_0x31cee9[_0x267516(0x28a)]=_0x2852d3['name']);}[_0x3d1e77(0x1f0)](_0x4eb10a){var _0x2078fc=_0x3d1e77;return 0x1/_0x4eb10a===Number[_0x2078fc(0x1e2)];}['_sortProps'](_0x43b0c4){var _0x20683f=_0x3d1e77;!_0x43b0c4[_0x20683f(0x238)]||!_0x43b0c4['props'][_0x20683f(0x1f4)]||_0x43b0c4['type']==='array'||_0x43b0c4[_0x20683f(0x234)]==='Map'||_0x43b0c4[_0x20683f(0x234)]===_0x20683f(0x23a)||_0x43b0c4[_0x20683f(0x238)]['sort'](function(_0x157c08,_0x3c362b){var _0x9d6505=_0x20683f,_0x590e18=_0x157c08[_0x9d6505(0x282)][_0x9d6505(0x27a)](),_0x4ea1f6=_0x3c362b[_0x9d6505(0x282)][_0x9d6505(0x27a)]();return _0x590e18<_0x4ea1f6?-0x1:_0x590e18>_0x4ea1f6?0x1:0x0;});}[_0x3d1e77(0x28c)](_0x457fec,_0x313b98){var _0x32adb2=_0x3d1e77;if(!(_0x313b98[_0x32adb2(0x20f)]||!_0x457fec['props']||!_0x457fec[_0x32adb2(0x238)][_0x32adb2(0x1f4)])){for(var _0x31463e=[],_0x45d7a9=[],_0x342732=0x0,_0x5ce501=_0x457fec['props']['length'];_0x342732<_0x5ce501;_0x342732++){var _0x4d0c68=_0x457fec['props'][_0x342732];_0x4d0c68[_0x32adb2(0x234)]===_0x32adb2(0x2af)?_0x31463e['push'](_0x4d0c68):_0x45d7a9[_0x32adb2(0x1fe)](_0x4d0c68);}if(!(!_0x45d7a9[_0x32adb2(0x1f4)]||_0x31463e['length']<=0x1)){_0x457fec['props']=_0x45d7a9;var _0x1b0885={'functionsNode':!0x0,'props':_0x31463e};this['_setNodeId'](_0x1b0885,_0x313b98),this[_0x32adb2(0x20e)](_0x1b0885,_0x313b98),this['_setNodeExpandableState'](_0x1b0885),this[_0x32adb2(0x276)](_0x1b0885,_0x313b98),_0x1b0885['id']+='\\x20f',_0x457fec[_0x32adb2(0x238)]['unshift'](_0x1b0885);}}}[_0x3d1e77(0x27c)](_0x4acec3,_0xbbd0af){}[_0x3d1e77(0x290)](_0x724da6){}[_0x3d1e77(0x250)](_0x911f06){var _0x1b52e2=_0x3d1e77;return Array['isArray'](_0x911f06)||typeof _0x911f06==_0x1b52e2(0x23e)&&this[_0x1b52e2(0x295)](_0x911f06)===_0x1b52e2(0x1f2);}['_setNodePermissions'](_0x2de5a2,_0xbc0fec){}['_cleanNode'](_0x7b8bbc){var _0x394993=_0x3d1e77;delete _0x7b8bbc[_0x394993(0x25c)],delete _0x7b8bbc['_hasSetOnItsPath'],delete _0x7b8bbc[_0x394993(0x2be)];}[_0x3d1e77(0x255)](_0x1bb234,_0x8c9570){}['_propertyAccessor'](_0x1136e1){var _0x3c0412=_0x3d1e77;return _0x1136e1?_0x1136e1['match'](this[_0x3c0412(0x2aa)])?'['+_0x1136e1+']':_0x1136e1[_0x3c0412(0x26c)](this[_0x3c0412(0x2a6)])?'.'+_0x1136e1:_0x1136e1[_0x3c0412(0x26c)](this[_0x3c0412(0x245)])?'['+_0x1136e1+']':'[\\x27'+_0x1136e1+'\\x27]':'';}}let _0x406191=new _0x1deff5();function _0x21505b(_0x2d4ebc,_0x1d6937,_0x93814c,_0x4208ce,_0x3198d3,_0x499267){var _0x167cf4=_0x3d1e77;let _0x53adcf,_0x510bf1;try{_0x510bf1=_0xf886(),_0x53adcf=_0x4f28d7[_0x1d6937],!_0x53adcf||_0x510bf1-_0x53adcf['ts']>0x1f4&&_0x53adcf[_0x167cf4(0x2b7)]&&_0x53adcf['time']/_0x53adcf['count']<0x64?(_0x4f28d7[_0x1d6937]=_0x53adcf={'count':0x0,'time':0x0,'ts':_0x510bf1},_0x4f28d7[_0x167cf4(0x258)]={}):_0x510bf1-_0x4f28d7[_0x167cf4(0x258)]['ts']>0x32&&_0x4f28d7['hits'][_0x167cf4(0x2b7)]&&_0x4f28d7['hits'][_0x167cf4(0x2c3)]/_0x4f28d7[_0x167cf4(0x258)][_0x167cf4(0x2b7)]<0x64&&(_0x4f28d7[_0x167cf4(0x258)]={});let _0x126477=[],_0x4a0914=_0x53adcf[_0x167cf4(0x1e7)]||_0x4f28d7[_0x167cf4(0x258)][_0x167cf4(0x1e7)]?_0x4d1c0e:_0x4490a0,_0x8e3325=_0x4f3817=>{var _0x1d1525=_0x167cf4;let _0x39966c={};return _0x39966c['props']=_0x4f3817[_0x1d1525(0x238)],_0x39966c[_0x1d1525(0x24c)]=_0x4f3817[_0x1d1525(0x24c)],_0x39966c[_0x1d1525(0x201)]=_0x4f3817[_0x1d1525(0x201)],_0x39966c['totalStrLength']=_0x4f3817[_0x1d1525(0x29e)],_0x39966c[_0x1d1525(0x204)]=_0x4f3817[_0x1d1525(0x204)],_0x39966c['autoExpandMaxDepth']=_0x4f3817['autoExpandMaxDepth'],_0x39966c[_0x1d1525(0x20d)]=!0x1,_0x39966c[_0x1d1525(0x20f)]=!_0x252ef1,_0x39966c['depth']=0x1,_0x39966c[_0x1d1525(0x22f)]=0x0,_0x39966c[_0x1d1525(0x269)]=_0x1d1525(0x263),_0x39966c[_0x1d1525(0x24f)]='root_exp',_0x39966c['autoExpand']=!0x0,_0x39966c[_0x1d1525(0x23f)]=[],_0x39966c[_0x1d1525(0x268)]=0x0,_0x39966c[_0x1d1525(0x228)]=!0x0,_0x39966c[_0x1d1525(0x246)]=0x0,_0x39966c[_0x1d1525(0x248)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x39966c;};for(var _0x25d2cd=0x0;_0x25d2cd<_0x3198d3[_0x167cf4(0x1f4)];_0x25d2cd++)_0x126477['push'](_0x406191[_0x167cf4(0x1f9)]({'timeNode':_0x2d4ebc===_0x167cf4(0x2c3)||void 0x0},_0x3198d3[_0x25d2cd],_0x8e3325(_0x4a0914),{}));if(_0x2d4ebc==='trace'){let _0x5cbf57=Error[_0x167cf4(0x21a)];try{Error['stackTraceLimit']=0x1/0x0,_0x126477[_0x167cf4(0x1fe)](_0x406191[_0x167cf4(0x1f9)]({'stackNode':!0x0},new Error()[_0x167cf4(0x291)],_0x8e3325(_0x4a0914),{'strLength':0x1/0x0}));}finally{Error[_0x167cf4(0x21a)]=_0x5cbf57;}}return{'method':_0x167cf4(0x256),'version':_0x357f5f,'args':[{'ts':_0x93814c,'session':_0x4208ce,'args':_0x126477,'id':_0x1d6937,'context':_0x499267}]};}catch(_0x9f1bfd){return{'method':'log','version':_0x357f5f,'args':[{'ts':_0x93814c,'session':_0x4208ce,'args':[{'type':_0x167cf4(0x21c),'error':_0x9f1bfd&&_0x9f1bfd[_0x167cf4(0x253)]}],'id':_0x1d6937,'context':_0x499267}]};}finally{try{if(_0x53adcf&&_0x510bf1){let _0x3c9b35=_0xf886();_0x53adcf[_0x167cf4(0x2b7)]++,_0x53adcf[_0x167cf4(0x2c3)]+=_0x4b309d(_0x510bf1,_0x3c9b35),_0x53adcf['ts']=_0x3c9b35,_0x4f28d7['hits'][_0x167cf4(0x2b7)]++,_0x4f28d7[_0x167cf4(0x258)][_0x167cf4(0x2c3)]+=_0x4b309d(_0x510bf1,_0x3c9b35),_0x4f28d7[_0x167cf4(0x258)]['ts']=_0x3c9b35,(_0x53adcf[_0x167cf4(0x2b7)]>0x32||_0x53adcf[_0x167cf4(0x2c3)]>0x64)&&(_0x53adcf[_0x167cf4(0x1e7)]=!0x0),(_0x4f28d7[_0x167cf4(0x258)][_0x167cf4(0x2b7)]>0x3e8||_0x4f28d7['hits']['time']>0x12c)&&(_0x4f28d7[_0x167cf4(0x258)]['reduceLimits']=!0x0);}}catch{}}}return _0x38cf02[_0x3d1e77(0x2a7)];})(globalThis,_0x107f76(0x279),'64269',\"/Users/josemaria/.vscode-insiders/extensions/wallabyjs.console-ninja-0.0.202/node_modules\",_0x107f76(0x2a2),'1.0.0',_0x107f76(0x233),_0x107f76(0x288),_0x107f76(0x202));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
  setLoadingImg(); // Add the loading image to the DOM
  (0,_assets_weatherApp_weatherApp__WEBPACK_IMPORTED_MODULE_6__.printWeatherApp)(); // Print all the weather app

  // Event listeners
  (0,_assets_weatherApp_searchBox_searchBox__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Create the search event
  (0,_assets_weatherApp_fahrenheitCheck_fahrenheitCheck__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Create the fahrenheit event listeners
  (0,_assets_weatherApp_weatherSlider_sliderArrows__WEBPACK_IMPORTED_MODULE_10__.createNextArrowEvent)(); // Create the next arrow event
  (0,_assets_weatherApp_weatherSlider_sliderArrows__WEBPACK_IMPORTED_MODULE_10__.createPrevArrowEvent)(); // Create the prev arrow event
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDcEIsVUFBVSwyQ0FBUTtBQUNsQixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFVBQVUsa0RBQWU7QUFDekIsSUFBSSx5QkFBeUI7QUFDN0IsVUFBVSwyQ0FBTztBQUNqQjtBQUNBO0FBQ0E7O0FBRTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHbEI7QUFDQTtBQUNDO0FBQ0Q7QUFDTTtBQUNOO0FBQ3FDO0FBQ3BCO0FBQzZCO0FBQ3lCO0FBQ1M7OztBQUcxRztBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsRUFBRSw4RUFBZSxJQUFJOztBQUVyQjtBQUNBLEVBQUUsa0ZBQWlCLElBQUk7QUFDdkIsRUFBRSw4RkFBOEIsSUFBSTtBQUNwQyxFQUFFLG9HQUFvQixJQUFJO0FBQzFCLEVBQUUsb0dBQW9CLElBQUk7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFVO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9oZWFkZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2hvdXJseVNsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvbG9hZGluZy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3Mvc2VhcmNoLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9zbGlkZXIuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9nbG9iYWwuY3NzPzU4NGEiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvaGVhZGVyLmNzcz84YWMxIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2hvdXJseVNsaWRlci5jc3M/ZTZlMyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9sb2FkaW5nLmNzcz9iNmM3Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL3NlYXJjaC5jc3M/NDQ2OSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9zbGlkZXIuY3NzPzA0OWEiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy9hcGlDYWxscy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy91dGlscy9zZXRMb2FkaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3V0aWxzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL2ZhaHJlbmhlaXRDaGVjay9mYWhyZW5oZWl0Q2hlY2suanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC9oZWFkZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvaG91cmx5U2xpZGVyL2hvdXJseVNsaWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Fzc2V0cy93ZWF0aGVyQXBwL3NlYXJjaEJveC9zZWFyY2hCb3guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyQXBwLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlclNsaWRlci9zbGlkZXJBcnJvd3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyU2xpZGVyL3dlYXRoZXJTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUDp3Z2h0QDEwMDs0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBKUFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogcmdiKDIzNiwyNDIsMjU1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgcmdiYSgyMzYsMjQyLDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcbn1cblxuI3Jvb3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHVDQUF1QztFQUN2QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUZBQXFGO0FBQ3ZGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUDp3Z2h0QDEwMDs0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnMgSlBcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LDI0MiwyNTUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgcmdiYSgyMzYsMjQyLDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcXG59XFxuXFxuI3Jvb3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAwcHggMTVweDtcbn1cblxuLmhlYWRlcl9fY2l0eV9fY29udGFpbmVyIHtcbiAgZmxleDogMTtcbn1cblxuLmhlYWRlcl9fY2l0eV9fbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGVhZGVyX19jaXR5X19uYW1lX19kYXRlIHtcbiAgY29sb3I6ICNhOGIxZGQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhlYWRlcl9fY2l0eV9fbmFtZV9fY2l0eSB7XG4gIGNvbG9yOiAjNDk0MTczO1xufVxuXG4uaGVhZGVyX19jaXR5X190bXBUb2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZV9fdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cbi5zd2l0Y2gge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBTd2l0Y2ggU3R5bGVcbiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uc3dpdGNoLFxuLnN3aXRjaCBpbnB1dCxcbi5zd2l0Y2ggLnNsaWRlciB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0MTczO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICM0OTQxNzM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O2tEQUVrRDs7QUFFbEQ7OztFQUdFLGlCQUFpQjtBQUNuQjtBQUNBLDJDQUEyQztBQUMzQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMHB4IDE1cHg7XFxufVxcblxcbi5oZWFkZXJfX2NpdHlfX2NvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uaGVhZGVyX19jaXR5X19uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaGVhZGVyX19jaXR5X19uYW1lX19kYXRlIHtcXG4gIGNvbG9yOiAjYThiMWRkO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmhlYWRlcl9fY2l0eV9fbmFtZV9fY2l0eSB7XFxuICBjb2xvcjogIzQ5NDE3MztcXG59XFxuXFxuLmhlYWRlcl9fY2l0eV9fdG1wVG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZV9fdGV4dCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbn1cXG4uc3dpdGNoIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICBTd2l0Y2ggU3R5bGVcXG4gICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uc3dpdGNoLFxcbi5zd2l0Y2ggaW5wdXQsXFxuLnN3aXRjaCAuc2xpZGVyIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQxNzM7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICM0OTQxNzM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53ZWF0aGVyX19kYXRhX19ob3VybHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUExQkVFO1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xufVxuXG4uY3VycmVudF9fZGF5IHtcbiAgY29sb3I6ICNFMUVBRkQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogSG91cmx5IFNsaWRlciAqL1xuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNXB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNTBweCk7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDJGRjM7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50X19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnQgPiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hvdXJseVNsaWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndlYXRoZXJfX2RhdGFfX2hvdXJseSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUExQkVFO1xcbiAgcGFkZGluZzogMjVweCAyNXB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uY3VycmVudF9fZGF5IHtcXG4gIGNvbG9yOiAjRTFFQUZEO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4vKiBIb3VybHkgU2xpZGVyICovXFxuLndlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI1cHg7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgcGFkZGluZzogMjVweCAwO1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA1MHB4KTtcXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG4ud2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0MkZGMztcXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudCA+IHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LDI0MiwyNTUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5sb2FkaW5nLmxvYWRpbmctLWFjdGl2ZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9sb2FkaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHFGQUFxRjtFQUNyRixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQ0FBbUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmxvYWRpbmcubG9hZGluZy0tYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgc2VjdGlvbi5zZWFyY2hfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogcmdiKDAgMCAwIC8gODglKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zZWFyY2hfX2NvbnRhaW5lci5zZWFyY2hfX2NvbnRhaW5lci0tYWN0aXZlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zZWFyY2hfX2Nsb3NlX19jb250YWluZXIge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmNsb3NlLWljb24ge1xuICB3aWR0aDogMzBweDtcbn1cblxuLndlYXRoZXJfX3NlYXJjaCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaF9fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuLnNlYXJjaF9fZm9ybV9faW5wdXQsIC5zZWFyY2hfX2Zvcm1fX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuXG4uc2VhcmNoX19lcnJvciB7XG4gIGNvbG9yOiAjRkYwMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yczsgXG59XG5cbi5zZWFyY2hfX2Vycm9yLS1pbmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi8qU2VhcmNoIFJlc3VsdHMgKi9cbi5zZWFyY2hfX3Jlc3VsdHMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaF9fcmVzdWx0c19fbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zZWFyY2hfX3Jlc3VsdHNfX2xpc3RfX2VsZW1lbnQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmNDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zZWFyY2guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJzZWN0aW9uLnNlYXJjaF9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyA4OCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5zZWFyY2hfX2NvbnRhaW5lci5zZWFyY2hfX2NvbnRhaW5lci0tYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWFyY2hfX2Nsb3NlX19jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4ud2VhdGhlcl9fc2VhcmNoIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNlYXJjaF9fZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zZWFyY2hfX2Zvcm1fX2lucHV0LCAuc2VhcmNoX19mb3JtX19idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi5zZWFyY2hfX2Vycm9yIHtcXG4gIGNvbG9yOiAjRkYwMDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7IFxcbn1cXG5cXG4uc2VhcmNoX19lcnJvci0taW5hY3RpdmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLypTZWFyY2ggUmVzdWx0cyAqL1xcbi5zZWFyY2hfX3Jlc3VsdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hfX3Jlc3VsdHNfX2xpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaF9fcmVzdWx0c19fbGlzdF9fZWxlbWVudCB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjQyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud2VhdGhlcl9fZGF0YSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ud2VhdGhlcl9fc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLndlYXRoZXJfX3NsaWRlcl9faW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi53ZWF0aGVyX19zbGlkZXJfX2luZm9ybWF0aW9uX19pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlYXRoZXJfX3NlbGVjdGVkX19hcnJvdyB7XG4gIGZpbGw6ICNhOGIxZGQ7XG59XG5cblxuXG4ud2VhdGhlcl9fZGF0YV9faW5mb3JtYXRpb24ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweCAxNXB4O1xufVxuLndlYXRoZXJfX2RhdGFfX2luZm9ybWF0aW9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0E4QjFERCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4ud2VhdGhlcl9faW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLndlYXRoZXJfX2luZm8gaDMge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjQThCMUREO1xufVxuLndlYXRoZXJfX2luZm8gPiBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzQ5NDE3Mztcbn1cblxuLndlYXRoZXJfX2luZm9fX3VuaXQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3NsaWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7O0FBSUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2VhdGhlcl9fZGF0YSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi53ZWF0aGVyX19zbGlkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG59XFxuXFxuLndlYXRoZXJfX3NsaWRlcl9faW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi53ZWF0aGVyX19zbGlkZXJfX2luZm9ybWF0aW9uX19pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53ZWF0aGVyX19zZWxlY3RlZF9fYXJyb3cge1xcbiAgZmlsbDogI2E4YjFkZDtcXG59XFxuXFxuXFxuXFxuLndlYXRoZXJfX2RhdGFfX2luZm9ybWF0aW9uIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweCAxNXB4O1xcbn1cXG4ud2VhdGhlcl9fZGF0YV9faW5mb3JtYXRpb246Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0E4QjFERCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ud2VhdGhlcl9faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi53ZWF0aGVyX19pbmZvIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogI0E4QjFERDtcXG59XFxuLndlYXRoZXJfX2luZm8gPiBwIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjNDk0MTczO1xcbn1cXG5cXG4ud2VhdGhlcl9faW5mb19fdW5pdCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG91cmx5U2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG91cmx5U2xpZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc2V0TG9hZGluZyBmcm9tICcuLi91dGlscy9zZXRMb2FkaW5nJztcbi8qKlxuICogUmV0dXJuIHRoZSB3ZWF0aGVyIGZvciB0aGUgZ2l2ZW4gbG9jYXRpb25cbiAqIFVzZSB0aGUgd2VhdGhlcmFwaS5jb20gQVBJXG4gKiBAc2VlIGh0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL2RvY3MvXG4gKiBAc2VlIGh0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL2FwaS1leHBsb3Jlci5hc3B4XG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAqIHJldHVybiB7b2JqZWN0fSB3ZWF0aGVyXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gIHNldExvYWRpbmcodHJ1ZSk7XG4gIC8qIGVzbGludCBtYXgtbGVuOiBbXCJlcnJvclwiLCB7IFwiaWdub3JlVXJsc1wiOiB0cnVlIH1dICovXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXRcbiAgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPW5vYCwge21vZGU6ICdjb3JzJ30pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHBvc3NpYmxlIGxvY2F0aW9ucyBmb3IgdGhlIGdpdmVuIGxvY2F0aW9uIG9yIHdvcmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBsb2NhdGlvblxuICogQHJldHVybiB7T2JqZWN0fSBkYXRhXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJBdXRvY29tcGxldGUobG9jYXRpb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdFxuICBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnE9JHtsb2NhdGlvbn1gLCB7bW9kZTogJ2NvcnMnfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCB7Z2V0V2VhdGhlckRhdGEsIGdldFdlYXRoZXJBdXRvY29tcGxldGV9O1xuIiwiLyoqXG4gKiBTaG93cyBvciBoaWRlcyB0aGUgbG9hZGluZyBzcGlubmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzTG9hZGluZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRMb2FkaW5nKGlzTG9hZGluZykge1xuICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKTtcbiAgbG9hZGluZy5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkaW5nLS1hY3RpdmUnLCBpc0xvYWRpbmcpO1xufVxuXG4iLCIvKipcbiAqIFJldHVybiB0aGUgZGF5IG9mIHRoZSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIEUuZy4gTW9uZGF5LCBUdWVzZGF5LCBldGMuXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RGF5KGRhdGUpIHtcbiAgY29uc3QgZGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbiAgcmV0dXJuIGRheXNbZGF0ZS5nZXREYXkoKV07XG59XG5cbmV4cG9ydCB7Z2V0RGF5fTtcbiIsImltcG9ydCB7dXNpbmdGYWhyZW5oZWl0LCBzZXRGYWhyZW5oZWl0fSBmcm9tICcuLi93ZWF0aGVyQXBwJztcblxuLyoqXG4gKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgZmFocmVuaGVpdCBjaGVja2JveFxuICovXG5mdW5jdGlvbiBjcmVhdGVGYWhyZW5oZWl0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFocmVuaGVpdF9fY2hlY2tib3gnKTtcbiAgZmFocmVuaGVpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRGYWhyZW5oZWl0KCF1c2luZ0ZhaHJlbmhlaXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRmFocmVuaGVpdEV2ZW50TGlzdGVuZXJzO1xuIiwiaW1wb3J0IHtnZXREYXl9IGZyb20gJy4uL3V0aWxzL3V0aWxpdGllcyc7XG5cbi8qKlxuICogUHJpbnQgaW4gdGhlIEhlYWRlciB0aGUgRGF0ZSBhbmQgdGhlIENpdHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaXR5IC0gQ2l0eSBOYW1lXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgLSBEYXRlXG4gKi9cbmZ1bmN0aW9uIHByaW50SGVhZGVyRGF0YShjaXR5LCBkYXRlKSB7XG4gIC8vIEdldHRpbmcgRE9NIEVsZW1lbnRzXG4gIGNvbnN0IG5hbWVDaXR5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NpdHlfX25hbWVfX2NpdHknKTtcbiAgY29uc3QgdGV4dERheUVsZW1lbnQgPVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jaXR5X19uYW1lX19kYXRlX190ZXh0RGF5Jyk7XG4gIGNvbnN0IG51bWJlckRheUVsZW1lbnQgPVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jaXR5X19uYW1lX19kYXRlX19udW1iZXJEYXknKTtcbiAgY29uc3QgbW9udGhFbGVtZW50ID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZV9fdGV4dE1vbnRoJyk7XG4gIC8vIFNldHRpbmcgdGhlIGNvbnRlbnRcbiAgbmFtZUNpdHlFbGVtZW50LnRleHRDb250ZW50ID0gY2l0eTsgLy8gQ2l0eSBOYW1lXG4gIHRleHREYXlFbGVtZW50LnRleHRDb250ZW50ID0gZ2V0RGF5KGRhdGUpOyAvLyBEYXkgb2YgdGhlIFdlZWtcbiAgbnVtYmVyRGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGUuZ2V0RGF0ZSgpOyAvLyBEYXkgb2YgdGhlIE1vbnRoXG4gIG1vbnRoRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge21vbnRoOiAnbG9uZyd9KTsgLy8gTW9udGhcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpbnRIZWFkZXJEYXRhO1xuIiwiaW1wb3J0IHtnZXREYXl9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxpdGllcyc7XG5pbXBvcnQge3VzaW5nRmFocmVuaGVpdH0gZnJvbSAnLi4vd2VhdGhlckFwcCc7XG5pbXBvcnQge2dldFdlYXRoZXJJY29ufSBmcm9tICcuLi93ZWF0aGVyU2xpZGVyL3dlYXRoZXJTbGlkZXInO1xuXG4vKipcbiAqIFByaW50IHRoZSBob3VybHkgc2xpZGVyIGZyb20gdGhlIGhvdXJseSBsaXN0XG4gKiBwYXNzZWQgYXMgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge0FycmF5fSBkYXlcbiAqL1xuZnVuY3Rpb24gcHJpbnRIb3VybHlTbGlkZXIoZGF5KSB7XG4gIC8vIE1haW4gY29udGFpbmVyIG9mIHRoZSBzbGlkZXJcbiAgY29uc3QgaG91cmx5U2xpZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcicpO1xuICBob3VybHlTbGlkZXJFbGVtZW50LmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciB0aGUgc2xpZGVyXG4gIGNvbnN0IGRheVRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRfX2RheScpO1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IGRheURhdGUgPSBuZXcgRGF0ZShkYXkuZGF0ZSkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGxldCBjdXJyZW50SG91ckluZGV4OyAvLyBJbmRleCBvZiB0aGUgY3VycmVudCBob3VyIGluIHRoZSBob3VybHkgbGlzdFxuXG4gIGlmIChjdXJyZW50RGF0ZSA9PT0gZGF5RGF0ZSkgeyAvLyBJZiB0aGUgZGF5IGlzIHRvZGF5XG4gICAgLy8gVGhlIGN1cnJlbnQgaG91ciBpcyB0aGUgY29ycmVjdCBob3VyIGluZGV4IHRvIHN0YXJ0XG4gICAgY3VycmVudEhvdXJJbmRleCA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgfSBlbHNlIHsgLy8gSWYgdGhlIGRheSBpcyBub3QgdG9kYXkgc3RhcnQgZnJvbSB0aGUgZmlyc3QgaG91clxuICAgIGN1cnJlbnRIb3VySW5kZXggPSAwO1xuICB9XG5cbiAgZGF5VGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSBnZXREYXkobmV3IERhdGUoZGF5LmRhdGUpKTtcbiAgY29uc3QgZmlsdGVyZWRIb3VybHlMaXN0ID0gZGF5LmhvdXIuc2xpY2UoY3VycmVudEhvdXJJbmRleCk7XG4gIGZpbHRlcmVkSG91cmx5TGlzdC5mb3JFYWNoKChob3VybHkpID0+IHtcbiAgICBob3VybHlTbGlkZXJFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJseUVsZW1lbnQoaG91cmx5KSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZSBIVE1MIGVsZW1lbnQgZm9yIHRoZSBob3VybHkgc2xpZGVyXG4gKiBAcGFyYW0ge09iamVjdH0gaG91cmx5RGF0YVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUVsZW1lbnQoaG91cmx5RGF0YSkge1xuICBjb25zdCBob3VybHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIENyZWF0ZSB0aGUgZWxlbWVudFxuICBob3VybHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50Jyk7IC8vIEFkZCB0aGUgY2xhc3NcblxuICBjb25zdCBob3VybHlJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLyBDcmVhdGUgdGhlIGltYWdlXG4gIGhvdXJseUltYWdlLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50X19pbWFnZScpOyAvLyBBZGQgdGhlIGNsYXNzXG4gIGhvdXJseUltYWdlLnNyYyA9IGdldFdlYXRoZXJJY29uKGhvdXJseURhdGEuY29uZGl0aW9uLmNvZGUpOyAvLyBHZXQgdGhlIHdlYXRoZXIgaWNvblxuXG4gIGNvbnN0IGhvdXJseUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvdXJseUhvdXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9fZGF0YV9faG91cmx5X19zbGlkZXJfX2VsZW1lbnRfX2hvdXInKTtcbiAgaG91cmx5SG91ci50ZXh0Q29udGVudCA9IG5ldyBEYXRlKGhvdXJseURhdGEudGltZSkuZ2V0SG91cnMoKSArICc6MDAnO1xuXG4gIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob3VybHlUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9fdGVtcGVyYXR1cmUnKTtcbiAgY29uc3QgaG91cmx5VGVtcGVyYXR1cmVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaG91cmx5VGVtcGVyYXR1cmVWYWx1ZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX19kYXRhX19ob3VybHlfX3NsaWRlcl9fZWxlbWVudF9fdGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gIGhvdXJseVRlbXBlcmF0dXJlVmFsdWUudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHVzaW5nRmFocmVuaGVpdCA/IGhvdXJseURhdGEudGVtcF9mIDogaG91cmx5RGF0YS50ZW1wX2MpO1xuICBjb25zdCBob3VybHlUZW1wZXJhdHVyZVVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhvdXJseVRlbXBlcmF0dXJlVW5pdC5jbGFzc0xpc3RcbiAgICAgIC5hZGQoJ3dlYXRoZXJfX2RhdGFfX2hvdXJseV9fc2xpZGVyX19lbGVtZW50X190ZW1wZXJhdHVyZV9fdW5pdCcsICd3ZWF0aGVyX19pbmZvX191bml0JywgJ3dlYXRoZXJfX3RlbXBfX3VuaXQnKTtcbiAgaG91cmx5VGVtcGVyYXR1cmVVbml0LnRleHRDb250ZW50ID0gJ8KwQyc7XG5cbiAgaG91cmx5VGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcGVyYXR1cmVWYWx1ZSk7XG4gIGhvdXJseVRlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGhvdXJseVRlbXBlcmF0dXJlVW5pdCk7XG5cbiAgaG91cmx5RWxlbWVudC5hcHBlbmRDaGlsZChob3VybHlJbWFnZSk7XG4gIGhvdXJseUVsZW1lbnQuYXBwZW5kQ2hpbGQoaG91cmx5SG91cik7XG4gIGhvdXJseUVsZW1lbnQuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcGVyYXR1cmUpO1xuXG4gIHJldHVybiBob3VybHlFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmludEhvdXJseVNsaWRlcjtcbiIsImltcG9ydCB7Z2V0V2VhdGhlckF1dG9jb21wbGV0ZSwgZ2V0V2VhdGhlckRhdGF9IGZyb20gJy4uLy4uL2FwaUNhbGxzL2FwaUNhbGxzJztcblxuaW1wb3J0IHtzZXRMYXN0V2VhdGhlckRhdGEsIHVwZGF0ZVdlYXRoZXJBcHB9IGZyb20gJy4uL3dlYXRoZXJBcHAnO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgU2VhcmNoIEJveCBTdWJtaXQgRXZlbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaEV2ZW50KCkge1xuICBjcmVhdGVTaG93U2VhcmNoQm94RXZlbnQoKTsgLy8gQ3JlYXRlIHRoZSBldmVudCB0byBzaG93IHRoZSBzZWFyY2ggYm94XG4gIGNyZWF0ZUNsb3NlU2VhcmNoQm94RXZlbnQoKTsgLy8gQ3JlYXRlIHRoZSBldmVudCB0byBjbG9zZSB0aGUgc2VhcmNoIGJveFxuICBjcmVhdGVBdXRvQ29tcGxldGVFdmVudCgpOyAvLyBDcmVhdGUgdGhlIGV2ZW50IHRvIGF1dG9jb21wbGV0ZSB0aGUgc2VhcmNoIGJveFxuXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19mb3JtJyk7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fZm9ybV9faW5wdXQnKTtcblxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7IC8vIEdldCB0aGUgc2VhcmNoIHF1ZXJ5XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShzZWFyY2hRdWVyeSk7IC8vIEdldCB0aGUgd2VhdGhlciBkYXRhXG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJzsgLy8gQ2xlYXIgdGhlIHNlYXJjaCBpbnB1dFxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIGRpc3BsYXkgaXQgYW5kIHJldHVyblxuICAgIGlmICh3ZWF0aGVyRGF0YS5lcnJvcikge1xuICAgICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19lcnJvcicpO1xuICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnQ2l0eSBub3QgZm91bmQnO1xuICAgICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoX19lcnJvci0taW5hY3RpdmUnKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaF9fZXJyb3ItLWluYWN0aXZlJyk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2FkU2VhcmNoZWREYXRhKHdlYXRoZXJEYXRhKTsgLy8gTG9hZCB0aGUgc2VhcmNoZWQgZGF0YVxuICB9KTtcbn1cblxuLyoqXG4gKiBDbG9zZSB0aGUgc2VhcmNoIEJveCwgc2V0IHRoZSBsYXN0IHdlYXRoZXIgZGF0YSBmcm9tIHRoZSBnaXZlbiBwcm9wIGFuZCB1cGRhdGUgdGhlIHdlYXRoZXIgYXBwXG4gKiBAcGFyYW0ge09iamVjdH0gd2VhdGhlckRhdGFcbiAqL1xuZnVuY3Rpb24gbG9hZFNlYXJjaGVkRGF0YSh3ZWF0aGVyRGF0YSkge1xuICBzZXRMYXN0V2VhdGhlckRhdGEod2VhdGhlckRhdGEpOyAvLyBTZXQgdGhlIGxhc3Qgd2VhdGhlciBkYXRhXG4gIHVwZGF0ZVdlYXRoZXJBcHAoKTsgLy8gVXBkYXRlIHRoZSB3ZWF0aGVyIGFwcFxuICBjbG9zZVNlYXJjaEJveCgpOyAvLyBIaWRlIHRoZSBzZWFyY2ggYm94XG59XG5cbi8qKlxuICogQWRkIHRoZSBldmVudCB0byBzaG93IHRoZSBzZWFyY2ggYm94IHdoZW4gdGhlIHNlYXJjaCBpY29uIGlzIGNsaWNrZWRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2hvd1NlYXJjaEJveEV2ZW50KCkge1xuICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoIC5zZWFyY2gtaWNvbicpO1xuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19jb250YWluZXInKTtcblxuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2hfX2NvbnRhaW5lci0tYWN0aXZlJyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgZXZlbnQgdG8gY2xvc2UgaWNvbiBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGUgc2VhcmNoIGJveFxuICogSGlkZSB0aGUgc2VhcmNoIGJveCB3aGVuIHRoZSBjbG9zZSBpY29uIGlzIGNsaWNrZWRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xvc2VTZWFyY2hCb3hFdmVudCgpIHtcbiAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fY2xvc2VfX2NvbnRhaW5lciAuY2xvc2UtaWNvbicpO1xuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19jb250YWluZXInKTtcblxuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaF9fY29udGFpbmVyLS1hY3RpdmUnKTtcbiAgfSk7XG59XG4vKipcbiAqIEhpZGUgdGhlIHNlYXJjaCBib3hcbiAqL1xuZnVuY3Rpb24gY2xvc2VTZWFyY2hCb3goKSB7XG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2NvbnRhaW5lcicpO1xuICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoX19jb250YWluZXItLWFjdGl2ZScpO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgZXZlbnQgdG8gYXV0b2NvbXBsZXRlIHRoZSBzZWFyY2ggYm94XG4gKiBXaXRoIGVhY2gga2V5IHByZXNzZWQsIHRoZSBzZWFyY2ggYm94IHdpbGwgYmUgYXV0b2NvbXBsZXRlZFxuICovXG5mdW5jdGlvbiBjcmVhdGVBdXRvQ29tcGxldGVFdmVudCgpIHtcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19mb3JtX19pbnB1dCcpO1xuICBjb25zdCBzZWFyY2hBdXRvY29tcGxldGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19yZXN1bHRzX19saXN0Jyk7XG5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTsgLy8gR2V0IHRoZSBzZWFyY2ggcXVlcnlcbiAgICAvLyBJZiB0aGUgc2VhcmNoIHF1ZXJ5IGlzIGxlc3MgdGhhbiAzIGNoYXJhY3RlcnMsIGNsZWFyIHRoZSBhdXRvY29tcGxldGUgbGlzdCBhbmQgcmV0dXJuXG4gICAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA8IDMpIHtcbiAgICAgIGNsZWFyQXV0b2NvbXBsZXRlTGlzdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJBdXRvY29tcGxldGUoc2VhcmNoUXVlcnkpOyAvLyBHZXQgdGhlIHdlYXRoZXIgZGF0YVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIGRpc3BsYXkgaXQgYW5kIHJldHVyblxuICAgIGlmICh3ZWF0aGVyRGF0YS5lcnJvcikge1xuICAgICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19lcnJvcicpO1xuICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnQ2l0eSBub3QgZm91bmQnO1xuICAgICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoX19lcnJvci0taW5hY3RpdmUnKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaF9fZXJyb3ItLWluYWN0aXZlJyk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIHNhbWUgY2l0aWVzIGZyb20gdGhlIGxpc3RcbiAgICBjb25zdCBmaWx0ZXJlZENpdGllcyA9IHdlYXRoZXJEYXRhLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IHdlYXRoZXJEYXRhLmZpbmRJbmRleCgoY2l0eSkgPT4ge1xuICAgICAgICByZXR1cm4gY2l0eS5uYW1lID09PSB2YWx1ZS5uYW1lO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBlcnJvciwgcHJpbnQgdGhlIGF1dG9jb21wbGV0ZSBsaXN0XG4gICAgY2xlYXJBdXRvY29tcGxldGVMaXN0KCk7IC8vIENsZWFyIHRoZSBhdXRvY29tcGxldGUgbGlzdFxuICAgIGZpbHRlcmVkQ2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHsgLy8gUHJpbnQgdGhlIGF1dG9jb21wbGV0ZSBsaXN0XG4gICAgICBzZWFyY2hBdXRvY29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQXV0b2NvbXBsZXRlRWxlbWVudChjaXR5KSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgYXV0b2NvbXBsZXRlIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjaXR5XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXV0b2NvbXBsZXRlRWxlbWVudChjaXR5KSB7XG4gIC8vIENyZWF0ZSB0aGUgZWxlbWVudFxuICBjb25zdCBhdXRvY29tcGxldGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgYXV0b2NvbXBsZXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWFyY2hfX3Jlc3VsdHNfX2xpc3RfX2VsZW1lbnQnKTtcblxuICAvLyBBZGQgdGhlIGNpdHkgbmFtZSBhbmQgY291bnRyeSB0byB0aGUgZWxlbWVudFxuICBhdXRvY29tcGxldGVFbGVtZW50LnRleHRDb250ZW50ID0gY2l0eS5uYW1lICsgJywgJyArIGNpdHkuY291bnRyeTtcblxuICAvLyBBZGQgdGhlIGV2ZW50IHRvIGxvYWQgdGhlIHNlYXJjaGVkIGRhdGEgd2hlbiB0aGUgZWxlbWVudCBpcyBjbGlja2VkXG4gIGF1dG9jb21wbGV0ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShjaXR5Lm5hbWUpOyAvLyBHZXQgdGhlIHdlYXRoZXIgZGF0YVxuICAgIGxvYWRTZWFyY2hlZERhdGEod2VhdGhlckRhdGEpOyAvLyBMb2FkIHRoZSBzZWFyY2hlZCBkYXRhXG4gIH0pO1xuXG4gIHJldHVybiBhdXRvY29tcGxldGVFbGVtZW50O1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSBhdXRvY29tcGxldGUgbGlzdFxuICogUmVtb3ZlIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVsZW1lbnRzXG4gKi9cbmZ1bmN0aW9uIGNsZWFyQXV0b2NvbXBsZXRlTGlzdCgpIHtcbiAgY29uc3Qgc2VhcmNoQXV0b2NvbXBsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fcmVzdWx0c19fbGlzdCcpO1xuICBzZWFyY2hBdXRvY29tcGxldGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VhcmNoRXZlbnQ7XG4iLCJpbXBvcnQge2dldFdlYXRoZXJEYXRhfSBmcm9tICcuLi9hcGlDYWxscy9hcGlDYWxscyc7XG5pbXBvcnQgcHJpbnRIZWFkZXJEYXRhIGZyb20gJy4vaGVhZGVyRGF0YSc7XG5pbXBvcnQgcHJpbnRIb3VybHlTbGlkZXIgZnJvbSAnLi9ob3VybHlTbGlkZXIvaG91cmx5U2xpZGVyJztcbmltcG9ydCB7cHJpbnRXZWF0aGVyU2xpZGVyfSBmcm9tICcuL3dlYXRoZXJTbGlkZXIvd2VhdGhlclNsaWRlcic7XG5cbmNvbnN0IGxvY2F0aW9uID0gJ03DoWxhZ2EnO1xubGV0IGxhc3RXZWF0aGVyRGF0YTtcbmxldCB1c2luZ0ZhaHJlbmhlaXQgPSBmYWxzZTtcbmxldCBjdXJyZW50RGF5SW5kZXggPSAwO1xuLyoqXG4gKiBQcmludCBhbGwgdGhlIHdlYXRoZXIgYXBwXG4gKiBTbGlkZXMgdGhlIHdlYXRoZXIgYXBwIGluIGFuZCBvdXRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcHJpbnRXZWF0aGVyQXBwKCkge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTsgLy8gR2V0IHdlYXRoZXIgZGF0YVxuICBpZiAod2VhdGhlckRhdGEuZXJyb3IpIHsgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIHByaW50IGl0IGFuZCByZXR1cm5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAzMzFhYjYyMV8wYCx3ZWF0aGVyRGF0YS5lcnJvcikpO1xuICAgIHJldHVybjtcbiAgfVxuICBsYXN0V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YTsgLy8gU2F2ZSB0aGUgbGFzdCB3ZWF0aGVyIGRhdGFcbiAgdXBkYXRlV2VhdGhlckFwcCgpOyAvLyBVcGRhdGUgdGhlIHdlYXRoZXIgYXBwXG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBhbGwgdGhlIHdlYXRoZXIgYXBwXG4gKiBIZWFkZXIgZGF0YSwgd2VhdGhlciBzbGlkZXIgYW5kIGhvdXJseSBzbGlkZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSB3ZWF0aGVyRGF0YVxuICovXG5mdW5jdGlvbiB1cGRhdGVXZWF0aGVyQXBwKCkge1xuICBjb25zdCBjdXJyZW50RGF5RGF0YSA9IGxhc3RXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtjdXJyZW50RGF5SW5kZXhdOyAvLyBHZXQgY3VycmVudCBkYXlcbiAgY29uc3QgY3VycmVudENpdHlOYW1lID0gbGFzdFdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7IC8vIEdldCBjdXJyZW50IGNpdHkgbmFtZVxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXlEYXRhLmRhdGUpOyAvLyBHZXQgY3VycmVudCBkYXRlXG4gIHByaW50SGVhZGVyRGF0YShjdXJyZW50Q2l0eU5hbWUsIGN1cnJlbnREYXRlKTsgLy8gUHJpbnQgaGVhZGVyIGRhdGFcbiAgcHJpbnRXZWF0aGVyU2xpZGVyKGN1cnJlbnREYXlEYXRhLmRheSk7IC8vIFByaW50IHdlYXRoZXIgc2xpZGVyXG4gIHByaW50SG91cmx5U2xpZGVyKGN1cnJlbnREYXlEYXRhKTsgLy8gUHJpbnQgaG91cmx5IHNsaWRlclxuICB1cGRhdGVVbml0cyh1c2luZ0ZhaHJlbmhlaXQgPyAnRicgOiAnwrBDJyk7IC8vIFVwZGF0ZSB1bml0c1xufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIGxhc3Qgd2VhdGhlciBkYXRhIHdpdGggdGhlIG5ldyBvbmVcbiAqIEBwYXJhbSB7T2JqZWN0fSB3ZWF0aGVyRGF0YVxuICovXG5mdW5jdGlvbiBzZXRMYXN0V2VhdGhlckRhdGEod2VhdGhlckRhdGEpIHtcbiAgbGFzdFdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGE7XG59XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB0ZW1wZXJhdHVyZSB1bml0cyBvZiB0aGUgYWxsIHRoZSB3ZWF0aGVyIGFwcFxuICogQHBhcmFtIHtib29sZWFufSBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIHNldEZhaHJlbmhlaXQoYm9vbGVhbikge1xuICB1c2luZ0ZhaHJlbmhlaXQgPSBib29sZWFuO1xuICB1cGRhdGVXZWF0aGVyQXBwKGxhc3RXZWF0aGVyRGF0YSk7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IGRheSBpbmRleFxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKi9cbmZ1bmN0aW9uIHNldEN1cnJlbnREYXlJbmRleChpbmRleCkge1xuICBjdXJyZW50RGF5SW5kZXggPSBpbmRleDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYWxsIHRoZSB1bml0cyBvZiB0aGUgd2VhdGhlciBhcHBcbiAqIEBwYXJhbSB7U3RyaW5nfSB1bml0c1xuICovXG5mdW5jdGlvbiB1cGRhdGVVbml0cyh1bml0cyA9ICfCsEMnKSB7XG4gIGNvbnN0IHVuaXRzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlcl9fdGVtcF9fdW5pdCcpO1xuICB1bml0c0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHVuaXRzO1xuICB9KTtcbn1cblxuZXhwb3J0IHtwcmludFdlYXRoZXJBcHAsXG4gIHVwZGF0ZVdlYXRoZXJBcHAsXG4gIHNldExhc3RXZWF0aGVyRGF0YSxcbiAgbGFzdFdlYXRoZXJEYXRhLFxuICB1c2luZ0ZhaHJlbmhlaXQsXG4gIHNldEZhaHJlbmhlaXQsXG4gIGN1cnJlbnREYXlJbmRleCxcbiAgc2V0Q3VycmVudERheUluZGV4LFxufTtcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBfMHgzNWY2KCl7dmFyIF8weDNhMTIxOT1bJ2F1dG9FeHBhbmRMaW1pdCcsJ3dzL2luZGV4LmpzJywnY29uc29sZScsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ19zZXROb2RlUXVlcnlQYXRoJywnaW5kZXgnLCdjb3ZlcmFnZScsJ193cycsJ19kYXRlVG9TdHJpbmcnLCdzb3J0UHJvcHMnLCdfc2V0Tm9kZUxhYmVsJywnbm9GdW5jdGlvbnMnLCdfV2ViU29ja2V0JywnZ2V0UHJvdG90eXBlT2YnLCdjYWxsJywnX3Byb3BlcnR5TmFtZScsJ3VybCcsJ251bWJlcicsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ1xcXFx4MjBzZXJ2ZXInLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdzbGljZScsJ3N0YWNrVHJhY2VMaW1pdCcsJ25hbicsJ3Vua25vd24nLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ1JlZ0V4cCcsJ3VucmVmJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ3RpbWVFbmQnLCd0aGVuJywnaGFzT3duUHJvcGVydHknLCdocnRpbWUnLCc4NjQwNDV5aG1rcXQnLCcyME50RVhXYScsJ3BhdGgnLCdyZXNvbHZlR2V0dGVycycsJ2FycmF5Jywnb25vcGVuJywncGFyc2UnLCdfU3ltYm9sJywnX3NldE5vZGVJZCcsJ25vdycsJ2xldmVsJywnX2Nvbm5lY3RpbmcnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ2Rpc2FibGVkTG9nJywnMTY5MjQ2NjE3MjU0NCcsJ3R5cGUnLCdfc2VuZEVycm9yTWVzc2FnZScsJ3N1YnN0cicsJ3dzOi8vJywncHJvcHMnLCcxMDE1MzkwZGN2cWxuJywnU2V0JywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywncGFyZW50JywnaW5jbHVkZXMnLCdvYmplY3QnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywncHJvdG90eXBlJywnLi4uJywnX3VuZGVmaW5lZCcsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdfcXVvdGVkUmVnRXhwJywnYWxsU3RyTGVuZ3RoJywnc2V0Jywnbm9kZScsJ2NhdGNoJywnTnVtYmVyJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ2VsZW1lbnRzJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdfc29ja2V0Jywncm9vdEV4cHJlc3Npb24nLCdfaXNBcnJheScsJ25vZGVNb2R1bGVzJywnV2ViU29ja2V0JywnbWVzc2FnZScsJ3ZlcnNpb25zJywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ2xvZycsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnaGl0cycsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ251bGwnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywndmFsdWVPZicsJ2RhdGEnLCdzZW5kJywncG9zaXRpdmVJbmZpbml0eScsJ2NyZWF0ZScsJ2RlcHRoJywncm9vdF9leHBfaWQnLCdfY2xlYW5Ob2RlJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnY29uc3RydWN0b3InLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ2V4cElkJywnX3BfbmFtZScsJ2dldFdlYlNvY2tldENsYXNzJywnbWF0Y2gnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ1tvYmplY3RcXFxceDIwU2V0XScsJ19pc1ByaW1pdGl2ZVR5cGUnLCdkZWZhdWx0JywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ3Byb2Nlc3MnLCdob3N0bmFtZScsJzIyMDUwUnR1cUVOJywnMjAyNjQwNTZCRm1XdUonLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnX2NhcElmU3RyaW5nJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCcxMjcuMC4wLjEnLCd0b0xvd2VyQ2FzZScsJ3JlcGxhY2UnLCdfYWRkTG9hZE5vZGUnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdhdXRvRXhwYW5kJywndG9TdHJpbmcnLCdlbnVtZXJhYmxlJywnX3JlZ0V4cFRvU3RyaW5nJywnbmFtZScsJ19hbGxvd2VkVG9TZW5kJywnYmluZCcsJ0Vycm9yJywnZGlzYWJsZWRUcmFjZScsJ2xvY2F0aW9uJyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcIk1hY0Jvb2stUHJvLWRlLUpvc2UubG9jYWxcXFwiLFxcXCIxOTIuMTY4LjEuMTMxXFxcIl0sJ2RlZmluZVByb3BlcnR5JywnZnVuY05hbWUnLCdtZXRob2QnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ3VuZGVmaW5lZCcsJ2ZvckVhY2gnLCdpbmRleE9mJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdzdGFjaycsJ19wXycsJ19hZGRQcm9wZXJ0eScsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnX29iamVjdFRvU3RyaW5nJywnYmlnaW50JywnXFxcXHgyMGJyb3dzZXInLCdfaXNTZXQnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ3N5bWJvbCcsJ3N0cmluZ2lmeScsJ2N1cnJlbnQnLCdfY29ubmVjdGVkJywndG90YWxTdHJMZW5ndGgnLCdQT1NJVElWRV9JTkZJTklUWScsJ2RhdGUnLCdwb3J0Jywnd2VicGFjaycsJ3JlYWR5U3RhdGUnLCdvbmNsb3NlJywndmFsdWUnLCdfa2V5U3RyUmVnRXhwJywnX2NvbnNvbGVfbmluamEnLCdyZWxvYWQnLCd0ZXN0JywnX251bWJlclJlZ0V4cCcsJ2dldHRlcicsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnSFRNTEFsbENvbGxlY3Rpb24nLCdvbmVycm9yJywnZnVuY3Rpb24nLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnY2FwcGVkJywnZ2V0JywnbmVnYXRpdmVJbmZpbml0eScsJ2dsb2JhbCcsJ19wX2xlbmd0aCcsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnY291bnQnLCdfaXNVbmRlZmluZWQnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywnX3Byb3BlcnR5JywnZXJyb3InLCdqb2luJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ19oYXNNYXBPbkl0c1BhdGgnLCdvbm1lc3NhZ2UnLCdfV2ViU29ja2V0Q2xhc3MnLCdwb3AnLCdfdHlwZScsJ3RpbWUnLCcxNjI0OTMycGtJeGxVJywnTkVHQVRJVkVfSU5GSU5JVFknLCdCb29sZWFuJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ19jb25uZWN0VG9Ib3N0Tm93Jywnc3BsaXQnLCdyZWR1Y2VMaW1pdHMnLCdob3N0JywnY29uY2F0JywnMTk3NzQyVE5qanRwJywnOmxvZ1BvaW50SWQ6JywnW29iamVjdFxcXFx4MjBNYXBdJywndHJhY2UnLCdudXh0JywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnX2lzTmVnYXRpdmVaZXJvJywnX2luQnJvd3NlcicsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnc3RyaW5nJywnbGVuZ3RoJywnTWFwJywnX19lcycrJ01vZHVsZScsJ0J1ZmZlcicsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0Jywnc2VyaWFsaXplJywnd2FybicsJ2Jvb2xlYW4nLCd0aW1lU3RhbXAnLCdhc3RybycsJ3B1c2gnLCdfaXNNYXAnLCdbb2JqZWN0XFxcXHgyMERhdGVdJywnc3RyTGVuZ3RoJywnJywnNjQxNTQ3MGRGeHFYUyddO18weDM1ZjY9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4M2ExMjE5O307cmV0dXJuIF8weDM1ZjYoKTt9dmFyIF8weDEwN2Y3Nj1fMHg0YTExOyhmdW5jdGlvbihfMHgxM2NlNzksXzB4MWY4Zjk0KXt2YXIgXzB4MzhiNzRkPV8weDRhMTEsXzB4NTEyNWZhPV8weDEzY2U3OSgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NDBiMGU5PS1wYXJzZUludChfMHgzOGI3NGQoMHgyMzkpKS8weDErcGFyc2VJbnQoXzB4MzhiNzRkKDB4MmM0KSkvMHgyK3BhcnNlSW50KF8weDM4Yjc0ZCgweDFlYSkpLzB4MyooLXBhcnNlSW50KF8weDM4Yjc0ZCgweDIyNikpLzB4NCkrcGFyc2VJbnQoXzB4MzhiNzRkKDB4Mjc0KSkvMHg1Ky1wYXJzZUludChfMHgzOGI3NGQoMHgyMDMpKS8weDYrLXBhcnNlSW50KF8weDM4Yjc0ZCgweDIyNSkpLzB4NytwYXJzZUludChfMHgzOGI3NGQoMHgyNzUpKS8weDg7aWYoXzB4NDBiMGU5PT09XzB4MWY4Zjk0KWJyZWFrO2Vsc2UgXzB4NTEyNWZhWydwdXNoJ10oXzB4NTEyNWZhWydzaGlmdCddKCkpO31jYXRjaChfMHgyNDQ2MmYpe18weDUxMjVmYVsncHVzaCddKF8weDUxMjVmYVsnc2hpZnQnXSgpKTt9fX0oXzB4MzVmNiwweGM2NGQzKSk7dmFyIHVlPU9iamVjdFtfMHgxMDdmNzYoMHgyNjEpXSx0ZT1PYmplY3RbXzB4MTA3Zjc2KDB4Mjg5KV0saGU9T2JqZWN0W18weDEwN2Y3NigweDFlZildLGxlPU9iamVjdFtfMHgxMDdmNzYoMHgyNzEpXSxmZT1PYmplY3RbXzB4MTA3Zjc2KDB4MjExKV0sX2U9T2JqZWN0W18weDEwN2Y3NigweDI0MCldW18weDEwN2Y3NigweDIyMyldLHBlPShfMHgxMTI1YzksXzB4MzYxMDBhLF8weDNkZDBmNSxfMHgxNDc4MzIpPT57dmFyIF8weDE2MWZiMz1fMHgxMDdmNzY7aWYoXzB4MzYxMDBhJiZ0eXBlb2YgXzB4MzYxMDBhPT0nb2JqZWN0J3x8dHlwZW9mIF8weDM2MTAwYT09XzB4MTYxZmIzKDB4MmFmKSl7Zm9yKGxldCBfMHgxODdkODUgb2YgbGUoXzB4MzYxMDBhKSkhX2VbJ2NhbGwnXShfMHgxMTI1YzksXzB4MTg3ZDg1KSYmXzB4MTg3ZDg1IT09XzB4M2RkMGY1JiZ0ZShfMHgxMTI1YzksXzB4MTg3ZDg1LHsnZ2V0JzooKT0+XzB4MzYxMDBhW18weDE4N2Q4NV0sJ2VudW1lcmFibGUnOiEoXzB4MTQ3ODMyPWhlKF8weDM2MTAwYSxfMHgxODdkODUpKXx8XzB4MTQ3ODMyW18weDE2MWZiMygweDI4MCldfSk7fXJldHVybiBfMHgxMTI1Yzk7fSxuZT0oXzB4MjNhMjBhLF8weDQ4ZDM5NCxfMHgyNDYzYTQpPT4oXzB4MjQ2M2E0PV8weDIzYTIwYSE9bnVsbD91ZShmZShfMHgyM2EyMGEpKTp7fSxwZShfMHg0OGQzOTR8fCFfMHgyM2EyMGF8fCFfMHgyM2EyMGFbXzB4MTA3Zjc2KDB4MWY2KV0/dGUoXzB4MjQ2M2E0LF8weDEwN2Y3NigweDI3MCkseyd2YWx1ZSc6XzB4MjNhMjBhLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4MjQ2M2E0LF8weDIzYTIwYSkpLFE9Y2xhc3N7Y29uc3RydWN0b3IoXzB4MmFhMjMwLF8weDJhMmZlYyxfMHgxOTFiMmUsXzB4YTcxYTkxKXt2YXIgXzB4MThiMGQ9XzB4MTA3Zjc2O3RoaXNbJ2dsb2JhbCddPV8weDJhYTIzMCx0aGlzW18weDE4YjBkKDB4MWU4KV09XzB4MmEyZmVjLHRoaXNbXzB4MThiMGQoMHgyYTEpXT1fMHgxOTFiMmUsdGhpc1tfMHgxOGIwZCgweDI1MSldPV8weGE3MWE5MSx0aGlzW18weDE4YjBkKDB4MjgzKV09ITB4MCx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHgxOGIwZCgweDIzMCldPSEweDEsdGhpc1tfMHgxOGIwZCgweDFmMSldPSEhdGhpc1tfMHgxOGIwZCgweDJiNCldW18weDE4YjBkKDB4MjUyKV0sdGhpc1snX1dlYlNvY2tldENsYXNzJ109bnVsbCx0aGlzW18weDE4YjBkKDB4MjU3KV09MHgwLHRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J109MHgxNCx0aGlzW18weDE4YjBkKDB4Mjk5KV09XzB4MThiMGQoMHgyYmQpLHRoaXNbXzB4MThiMGQoMHgyMzUpXT0odGhpc1tfMHgxOGIwZCgweDFmMSldPydDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCc6XzB4MThiMGQoMHgyNmQpKSt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddO31hc3luY1tfMHgxMDdmNzYoMHgyNmIpXSgpe3ZhciBfMHgyNDNkM2Y9XzB4MTA3Zjc2O2lmKHRoaXNbXzB4MjQzZDNmKDB4MmMwKV0pcmV0dXJuIHRoaXNbXzB4MjQzZDNmKDB4MmMwKV07bGV0IF8weDVmNDU4MTtpZih0aGlzW18weDI0M2QzZigweDFmMSldKV8weDVmNDU4MT10aGlzW18weDI0M2QzZigweDJiNCldW18weDI0M2QzZigweDI1MildO2Vsc2V7aWYodGhpc1tfMHgyNDNkM2YoMHgyYjQpXVtfMHgyNDNkM2YoMHgyNzIpXT8uW18weDI0M2QzZigweDIxMCldKV8weDVmNDU4MT10aGlzW18weDI0M2QzZigweDJiNCldWydwcm9jZXNzJ10/LltfMHgyNDNkM2YoMHgyMTApXTtlbHNlIHRyeXtsZXQgXzB4NGE3ZDVlPWF3YWl0IGltcG9ydChfMHgyNDNkM2YoMHgyMjcpKTtfMHg1ZjQ1ODE9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDI0M2QzZigweDIxNCkpKVsncGF0aFRvRmlsZVVSTCddKF8weDRhN2Q1ZVtfMHgyNDNkM2YoMHgyYmMpXSh0aGlzW18weDI0M2QzZigweDI1MSldLF8weDI0M2QzZigweDIwNSkpKVtfMHgyNDNkM2YoMHgyN2YpXSgpKSlbXzB4MjQzZDNmKDB4MjcwKV07fWNhdGNoe3RyeXtfMHg1ZjQ1ODE9cmVxdWlyZShyZXF1aXJlKF8weDI0M2QzZigweDIyNykpWydqb2luJ10odGhpc1tfMHgyNDNkM2YoMHgyNTEpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgyNDNkM2YoMHgyMTYpKTt9fX1yZXR1cm4gdGhpc1tfMHgyNDNkM2YoMHgyYzApXT1fMHg1ZjQ1ODEsXzB4NWY0NTgxO31bXzB4MTA3Zjc2KDB4MWU1KV0oKXt2YXIgXzB4NWYxMTBiPV8weDEwN2Y3Njt0aGlzWydfY29ubmVjdGluZyddfHx0aGlzW18weDVmMTEwYigweDI5ZCldfHx0aGlzW18weDVmMTEwYigweDI1NyldPj10aGlzW18weDVmMTEwYigweDJiNildfHwodGhpc1tfMHg1ZjExMGIoMHgyNzgpXT0hMHgxLHRoaXNbXzB4NWYxMTBiKDB4MjMwKV09ITB4MCx0aGlzW18weDVmMTEwYigweDI1NyldKyssdGhpc1tfMHg1ZjExMGIoMHgyMGIpXT1uZXcgUHJvbWlzZSgoXzB4NWVlMDRkLF8weGE3ZjQ3OSk9Pnt2YXIgXzB4NTdhZGViPV8weDVmMTEwYjt0aGlzWydnZXRXZWJTb2NrZXRDbGFzcyddKClbXzB4NTdhZGViKDB4MjIyKV0oXzB4MjA3Y2NjPT57dmFyIF8weDJiMzhiYz1fMHg1N2FkZWI7bGV0IF8weDE2ZDY4MT1uZXcgXzB4MjA3Y2NjKF8weDJiMzhiYygweDIzNykrdGhpc1tfMHgyYjM4YmMoMHgxZTgpXSsnOicrdGhpc1tfMHgyYjM4YmMoMHgyYTEpXSk7XzB4MTZkNjgxW18weDJiMzhiYygweDJhZSldPSgpPT57dmFyIF8weDVkYmY0Nz1fMHgyYjM4YmM7dGhpc1tfMHg1ZGJmNDcoMHgyODMpXT0hMHgxLHRoaXNbJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MTZkNjgxKSx0aGlzW18weDVkYmY0NygweDIzMSldKCksXzB4YTdmNDc5KG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDE2ZDY4MVsnb25vcGVuJ109KCk9Pnt2YXIgXzB4MzBhY2ZiPV8weDJiMzhiYzt0aGlzWydfaW5Ccm93c2VyJ118fF8weDE2ZDY4MVtfMHgzMGFjZmIoMHgyNGUpXSYmXzB4MTZkNjgxWydfc29ja2V0J11bXzB4MzBhY2ZiKDB4MjFmKV0mJl8weDE2ZDY4MVtfMHgzMGFjZmIoMHgyNGUpXVtfMHgzMGFjZmIoMHgyMWYpXSgpLF8weDVlZTA0ZChfMHgxNmQ2ODEpO30sXzB4MTZkNjgxWydvbmNsb3NlJ109KCk9Pnt2YXIgXzB4NDZiOWJmPV8weDJiMzhiYzt0aGlzW18weDQ2YjliZigweDI3OCldPSEweDAsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgxNmQ2ODEpLHRoaXNbXzB4NDZiOWJmKDB4MjMxKV0oKTt9LF8weDE2ZDY4MVtfMHgyYjM4YmMoMHgyYmYpXT1fMHgzODk1MjE9Pnt2YXIgXzB4NTQyYTgyPV8weDJiMzhiYzt0cnl7XzB4Mzg5NTIxJiZfMHgzODk1MjFbXzB4NTQyYTgyKDB4MjVlKV0mJnRoaXNbXzB4NTQyYTgyKDB4MWYxKV0mJkpTT05bXzB4NTQyYTgyKDB4MjJiKV0oXzB4Mzg5NTIxWydkYXRhJ10pW18weDU0MmE4MigweDI4YildPT09XzB4NTQyYTgyKDB4MmE4KSYmdGhpc1tfMHg1NDJhODIoMHgyYjQpXVtfMHg1NDJhODIoMHgyODcpXVtfMHg1NDJhODIoMHgyYTgpXSgpO31jYXRjaHt9fTt9KVtfMHg1N2FkZWIoMHgyMjIpXShfMHgxY2U5OTE9Pih0aGlzW18weDU3YWRlYigweDI5ZCldPSEweDAsdGhpc1tfMHg1N2FkZWIoMHgyMzApXT0hMHgxLHRoaXNbXzB4NTdhZGViKDB4Mjc4KV09ITB4MSx0aGlzW18weDU3YWRlYigweDI4MyldPSEweDAsdGhpc1tfMHg1N2FkZWIoMHgyNTcpXT0weDAsXzB4MWNlOTkxKSlbXzB4NTdhZGViKDB4MjQ5KV0oXzB4MzE4MTNkPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHg1N2FkZWIoMHgyMzApXT0hMHgxLGNvbnNvbGVbXzB4NTdhZGViKDB4MWZhKV0oXzB4NTdhZGViKDB4MjRkKSt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddKSxfMHhhN2Y0NzkobmV3IEVycm9yKF8weDU3YWRlYigweDI3ZCkrKF8weDMxODEzZCYmXzB4MzE4MTNkW18weDU3YWRlYigweDI1MyldKSkpKSk7fSkpO31bJ19kaXNwb3NlV2Vic29ja2V0J10oXzB4MzQzNGUwKXt2YXIgXzB4M2ExYWFkPV8weDEwN2Y3Njt0aGlzWydfY29ubmVjdGVkJ109ITB4MSx0aGlzW18weDNhMWFhZCgweDIzMCldPSEweDE7dHJ5e18weDM0MzRlMFtfMHgzYTFhYWQoMHgyYTQpXT1udWxsLF8weDM0MzRlMFtfMHgzYTFhYWQoMHgyYWUpXT1udWxsLF8weDM0MzRlMFtfMHgzYTFhYWQoMHgyMmEpXT1udWxsO31jYXRjaHt9dHJ5e18weDM0MzRlMFtfMHgzYTFhYWQoMHgyYTMpXTwweDImJl8weDM0MzRlMFsnY2xvc2UnXSgpO31jYXRjaHt9fVtfMHgxMDdmNzYoMHgyMzEpXSgpe3ZhciBfMHgyODcwOGU9XzB4MTA3Zjc2O2NsZWFyVGltZW91dCh0aGlzWydfcmVjb25uZWN0VGltZW91dCddKSwhKHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J10+PXRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J10pJiYodGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDRmY2EwZj1fMHg0YTExO3RoaXNbXzB4NGZjYTBmKDB4MjlkKV18fHRoaXNbXzB4NGZjYTBmKDB4MjMwKV18fCh0aGlzWydfY29ubmVjdFRvSG9zdE5vdyddKCksdGhpc1tfMHg0ZmNhMGYoMHgyMGIpXT8uW18weDRmY2EwZigweDI0OSldKCgpPT50aGlzW18weDRmY2EwZigweDIzMSldKCkpKTt9LDB4MWY0KSx0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weDI4NzA4ZSgweDIxZildJiZ0aGlzWydfcmVjb25uZWN0VGltZW91dCddWyd1bnJlZiddKCkpO31hc3luY1snc2VuZCddKF8weDIyNDJjZSl7dmFyIF8weGZkOTliYj1fMHgxMDdmNzY7dHJ5e2lmKCF0aGlzWydfYWxsb3dlZFRvU2VuZCddKXJldHVybjt0aGlzW18weGZkOTliYigweDI3OCldJiZ0aGlzW18weGZkOTliYigweDFlNSldKCksKGF3YWl0IHRoaXNbXzB4ZmQ5OWJiKDB4MjBiKV0pW18weGZkOTliYigweDI1ZildKEpTT05bXzB4ZmQ5OWJiKDB4MjliKV0oXzB4MjI0MmNlKSk7fWNhdGNoKF8weDNhZWExOCl7Y29uc29sZVsnd2FybiddKHRoaXNbXzB4ZmQ5OWJiKDB4MjM1KV0rJzpcXFxceDIwJysoXzB4M2FlYTE4JiZfMHgzYWVhMThbXzB4ZmQ5OWJiKDB4MjUzKV0pKSx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDEsdGhpc1tfMHhmZDk5YmIoMHgyMzEpXSgpO319fTtmdW5jdGlvbiBfMHg0YTExKF8weDU0ODFiMCxfMHgxNzRjNTApe3ZhciBfMHgzNWY2ZDI9XzB4MzVmNigpO3JldHVybiBfMHg0YTExPWZ1bmN0aW9uKF8weDRhMTE4MixfMHg1ZGNmMmEpe18weDRhMTE4Mj1fMHg0YTExODItMHgxZTI7dmFyIF8weDIxZjlkZT1fMHgzNWY2ZDJbXzB4NGExMTgyXTtyZXR1cm4gXzB4MjFmOWRlO30sXzB4NGExMShfMHg1NDgxYjAsXzB4MTc0YzUwKTt9ZnVuY3Rpb24gVihfMHgyMDZhMDksXzB4MzkxZjAzLF8weDI4MWFmNyxfMHgyMTRhMjksXzB4MjRmODMzKXt2YXIgXzB4MTc5N2QwPV8weDEwN2Y3NjtsZXQgXzB4MmM5MTAwPV8weDI4MWFmN1tfMHgxNzk3ZDAoMHgxZTYpXSgnLCcpWydtYXAnXShfMHgxZGFiNmM9Pnt2YXIgXzB4MmVlMGFkPV8weDE3OTdkMDt0cnl7XzB4MjA2YTA5W18weDJlZTBhZCgweDJiOSldfHwoKF8weDI0ZjgzMz09PSduZXh0LmpzJ3x8XzB4MjRmODMzPT09J3JlbWl4J3x8XzB4MjRmODMzPT09XzB4MmVlMGFkKDB4MWZkKSkmJihfMHgyNGY4MzMrPV8weDIwNmEwOVtfMHgyZWUwYWQoMHgyNzIpXT8uWyd2ZXJzaW9ucyddPy5bXzB4MmVlMGFkKDB4MjQ4KV0/XzB4MmVlMGFkKDB4MjE3KTpfMHgyZWUwYWQoMHgyOTcpKSxfMHgyMDZhMDlbXzB4MmVlMGFkKDB4MmI5KV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDI0ZjgzM30pO2xldCBfMHgyMjUxN2I9bmV3IFEoXzB4MjA2YTA5LF8weDM5MWYwMyxfMHgxZGFiNmMsXzB4MjE0YTI5KTtyZXR1cm4gXzB4MjI1MTdiW18weDJlZTBhZCgweDI1ZildW18weDJlZTBhZCgweDI4NCldKF8weDIyNTE3Yik7fWNhdGNoKF8weDIwOGU3OSl7cmV0dXJuIGNvbnNvbGVbJ3dhcm4nXShfMHgyZWUwYWQoMHgxZjgpLF8weDIwOGU3OSYmXzB4MjA4ZTc5W18weDJlZTBhZCgweDI1MyldKSwoKT0+e307fX0pO3JldHVybiBfMHgyZTQxYTA9Pl8weDJjOTEwMFtfMHgxNzk3ZDAoMHgyOGUpXShfMHg0OTc5YzU9Pl8weDQ5NzljNShfMHgyZTQxYTApKTt9ZnVuY3Rpb24gSChfMHgzMWNlMzApe3ZhciBfMHhmNjYxNDk9XzB4MTA3Zjc2O2xldCBfMHgzMzZlYmU9ZnVuY3Rpb24oXzB4MTA5ZjViLF8weDJkMjA5MCl7cmV0dXJuIF8weDJkMjA5MC1fMHgxMDlmNWI7fSxfMHg0MjY1NDM7aWYoXzB4MzFjZTMwWydwZXJmb3JtYW5jZSddKV8weDQyNjU0Mz1mdW5jdGlvbigpe3ZhciBfMHgxMDRhZTc9XzB4NGExMTtyZXR1cm4gXzB4MzFjZTMwWydwZXJmb3JtYW5jZSddW18weDEwNGFlNygweDIyZSldKCk7fTtlbHNle2lmKF8weDMxY2UzMFtfMHhmNjYxNDkoMHgyNzIpXSYmXzB4MzFjZTMwW18weGY2NjE0OSgweDI3MildW18weGY2NjE0OSgweDIyNCldKV8weDQyNjU0Mz1mdW5jdGlvbigpe3ZhciBfMHhhYjk0MDc9XzB4ZjY2MTQ5O3JldHVybiBfMHgzMWNlMzBbXzB4YWI5NDA3KDB4MjcyKV1bXzB4YWI5NDA3KDB4MjI0KV0oKTt9LF8weDMzNmViZT1mdW5jdGlvbihfMHgxNGIzYWIsXzB4YWIxYWUwKXtyZXR1cm4gMHgzZTgqKF8weGFiMWFlMFsweDBdLV8weDE0YjNhYlsweDBdKSsoXzB4YWIxYWUwWzB4MV0tXzB4MTRiM2FiWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDNlNWRlM309cmVxdWlyZSgncGVyZl9ob29rcycpO18weDQyNjU0Mz1mdW5jdGlvbigpe3JldHVybiBfMHgzZTVkZTNbJ25vdyddKCk7fTt9Y2F0Y2h7XzB4NDI2NTQzPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MzM2ZWJlLCd0aW1lU3RhbXAnOl8weDQyNjU0Mywnbm93JzooKT0+RGF0ZVtfMHhmNjYxNDkoMHgyMmUpXSgpfTt9ZnVuY3Rpb24gWChfMHg1MzI1ODEsXzB4NTliMjFmLF8weDI0YzU2OCl7dmFyIF8weDRlZTY4Mz1fMHgxMDdmNzY7aWYoXzB4NTMyNTgxW18weDRlZTY4MygweDIzYildIT09dm9pZCAweDApcmV0dXJuIF8weDUzMjU4MVtfMHg0ZWU2ODMoMHgyM2IpXTtsZXQgXzB4MTQ4OWMxPV8weDUzMjU4MVsncHJvY2VzcyddPy5bXzB4NGVlNjgzKDB4MjU0KV0/LltfMHg0ZWU2ODMoMHgyNDgpXTtyZXR1cm4gXzB4MTQ4OWMxJiZfMHgyNGM1Njg9PT1fMHg0ZWU2ODMoMHgxZWUpP18weDUzMjU4MVtfMHg0ZWU2ODMoMHgyM2IpXT0hMHgxOl8weDUzMjU4MVtfMHg0ZWU2ODMoMHgyM2IpXT1fMHgxNDg5YzF8fCFfMHg1OWIyMWZ8fF8weDUzMjU4MVsnbG9jYXRpb24nXT8uWydob3N0bmFtZSddJiZfMHg1OWIyMWZbXzB4NGVlNjgzKDB4MjNkKV0oXzB4NTMyNTgxW18weDRlZTY4MygweDI4NyldW18weDRlZTY4MygweDI3MyldKSxfMHg1MzI1ODFbXzB4NGVlNjgzKDB4MjNiKV07fSgoXzB4MzhjZjAyLF8weDQxYWU1NixfMHg0MmNjM2IsXzB4NTJjZGM3LF8weDU1ODMxMSxfMHgzNTdmNWYsXzB4NDBjOWU5LF8weDFlMmE4MixfMHgyNTJlZjEpPT57dmFyIF8weDNkMWU3Nz1fMHgxMDdmNzY7aWYoXzB4MzhjZjAyW18weDNkMWU3NygweDJhNyldKXJldHVybiBfMHgzOGNmMDJbXzB4M2QxZTc3KDB4MmE3KV07aWYoIVgoXzB4MzhjZjAyLF8weDFlMmE4MixfMHg1NTgzMTEpKXJldHVybiBfMHgzOGNmMDJbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDM4Y2YwMltfMHgzZDFlNzcoMHgyYTcpXTtsZXQgXzB4NDQ5MGEwPXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDRkMWMwZT17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9LF8weGZiMGE0MD1IKF8weDM4Y2YwMiksXzB4NGIzMDlkPV8weGZiMGE0MFsnZWxhcHNlZCddLF8weGY4ODY9XzB4ZmIwYTQwW18weDNkMWU3NygweDFmYyldLF8weDJlY2MzZD1fMHhmYjBhNDBbJ25vdyddLF8weDRmMjhkNz17J2hpdHMnOnt9LCd0cyc6e319LF8weDNlYmFiZT1fMHgxMjEwMDM9PntfMHg0ZjI4ZDdbJ3RzJ11bXzB4MTIxMDAzXT1fMHhmODg2KCk7fSxfMHgyYWY2ODA9KF8weDdlYWEyOSxfMHg1MjY1ZTMpPT57dmFyIF8weDMxNWZiZj1fMHgzZDFlNzc7bGV0IF8weDk1M2FjNz1fMHg0ZjI4ZDdbJ3RzJ11bXzB4NTI2NWUzXTtpZihkZWxldGUgXzB4NGYyOGQ3Wyd0cyddW18weDUyNjVlM10sXzB4OTUzYWM3KXtsZXQgXzB4Mzg3Zjk3PV8weDRiMzA5ZChfMHg5NTNhYzcsXzB4Zjg4NigpKTtfMHg1ODdmYTgoXzB4MjE1MDViKF8weDMxNWZiZigweDJjMyksXzB4N2VhYTI5LF8weDJlY2MzZCgpLF8weDM1NjNjOCxbXzB4Mzg3Zjk3XSxfMHg1MjY1ZTMpKTt9fSxfMHgzZjAxODI9XzB4MWRiYjBjPT5fMHg0MGNkMjI9Pnt2YXIgXzB4NTFlN2Y3PV8weDNkMWU3Nzt0cnl7XzB4M2ViYWJlKF8weDQwY2QyMiksXzB4MWRiYjBjKF8weDQwY2QyMik7fWZpbmFsbHl7XzB4MzhjZjAyW18weDUxZTdmNygweDIwNildW18weDUxZTdmNygweDJjMyldPV8weDFkYmIwYzt9fSxfMHgzZDhiNDk9XzB4MmExNWJmPT5fMHg0NmQxZDE9Pnt2YXIgXzB4NTVkZDE1PV8weDNkMWU3Nzt0cnl7bGV0IFtfMHg1YWU2OGUsXzB4MzEyZjBiXT1fMHg0NmQxZDFbJ3NwbGl0J10oXzB4NTVkZDE1KDB4MWViKSk7XzB4MmFmNjgwKF8weDMxMmYwYixfMHg1YWU2OGUpLF8weDJhMTViZihfMHg1YWU2OGUpO31maW5hbGx5e18weDM4Y2YwMltfMHg1NWRkMTUoMHgyMDYpXVtfMHg1NWRkMTUoMHgyMjEpXT1fMHgyYTE1YmY7fX07XzB4MzhjZjAyWydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KF8weDI1YjgwMyxfMHg1NzVlMzkpPT57dmFyIF8weDIyZjU0NT1fMHgzZDFlNzc7XzB4MzhjZjAyWydjb25zb2xlJ11bXzB4MjJmNTQ1KDB4MjU2KV1bXzB4MjJmNTQ1KDB4MjgyKV0hPT1fMHgyMmY1NDUoMHgyMzIpJiZfMHg1ODdmYTgoXzB4MjE1MDViKF8weDIyZjU0NSgweDI1NiksXzB4MjViODAzLF8weDJlY2MzZCgpLF8weDM1NjNjOCxfMHg1NzVlMzkpKTt9LCdjb25zb2xlVHJhY2UnOihfMHgyYTNiZDQsXzB4MzFjYzY1KT0+e3ZhciBfMHgzNGZmYTA9XzB4M2QxZTc3O18weDM4Y2YwMltfMHgzNGZmYTAoMHgyMDYpXVtfMHgzNGZmYTAoMHgyNTYpXVtfMHgzNGZmYTAoMHgyODIpXSE9PV8weDM0ZmZhMCgweDI4NikmJl8weDU4N2ZhOChfMHgyMTUwNWIoJ3RyYWNlJyxfMHgyYTNiZDQsXzB4MmVjYzNkKCksXzB4MzU2M2M4LF8weDMxY2M2NSkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgyY2IwZGQ9XzB4M2QxZTc3O18weDM4Y2YwMltfMHgyY2IwZGQoMHgyMDYpXVsndGltZSddPV8weDNmMDE4MihfMHgzOGNmMDJbXzB4MmNiMGRkKDB4MjA2KV1bXzB4MmNiMGRkKDB4MmMzKV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHgxMWNhZTA9XzB4M2QxZTc3O18weDM4Y2YwMltfMHgxMWNhZTAoMHgyMDYpXVtfMHgxMWNhZTAoMHgyMjEpXT1fMHgzZDhiNDkoXzB4MzhjZjAyW18weDExY2FlMCgweDIwNildW18weDExY2FlMCgweDIyMSldKTt9LCdhdXRvTG9nJzooXzB4NDk1MmE2LF8weDJjNTNiZCk9Pnt2YXIgXzB4NDA1ODhiPV8weDNkMWU3NztfMHg1ODdmYTgoXzB4MjE1MDViKF8weDQwNTg4YigweDI1NiksXzB4MmM1M2JkLF8weDJlY2MzZCgpLF8weDM1NjNjOCxbXzB4NDk1MmE2XSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4Mjk1ZjkyLF8weDQ5MmYyOSk9Pnt2YXIgXzB4NTc5N2I2PV8weDNkMWU3NztfMHg1ODdmYTgoXzB4MjE1MDViKF8weDU3OTdiNigweDI1NiksXzB4Mjk1ZjkyLF8weDJlY2MzZCgpLF8weDM1NjNjOCxfMHg0OTJmMjkpKTt9LCdhdXRvVHJhY2UnOihfMHg0ZmI1MTQsXzB4M2FmNmU2KT0+e3ZhciBfMHg0YTIzYWU9XzB4M2QxZTc3O18weDU4N2ZhOChfMHgyMTUwNWIoXzB4NGEyM2FlKDB4MWVkKSxfMHgzYWY2ZTYsXzB4MmVjYzNkKCksXzB4MzU2M2M4LFtfMHg0ZmI1MTRdKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDNhNDcyMyxfMHgzYmZlMDQpPT57XzB4NTg3ZmE4KF8weDIxNTA1YigndHJhY2UnLF8weDNhNDcyMyxfMHgyZWNjM2QoKSxfMHgzNTYzYzgsXzB4M2JmZTA0KSk7fSwnYXV0b1RpbWUnOihfMHg0MDVlZWYsXzB4NWUwNTRmLF8weDM1NDQzOCk9PntfMHgzZWJhYmUoXzB4MzU0NDM4KTt9LCdhdXRvVGltZUVuZCc6KF8weDIwNDljNyxfMHgyMzdlNzUsXzB4NDNjYTdkKT0+e18weDJhZjY4MChfMHgyMzdlNzUsXzB4NDNjYTdkKTt9LCdjb3ZlcmFnZSc6XzB4NGUzNjI1PT57dmFyIF8weDFhNjk3Mj1fMHgzZDFlNzc7XzB4NTg3ZmE4KHsnbWV0aG9kJzpfMHgxYTY5NzIoMHgyMGEpLCd2ZXJzaW9uJzpfMHgzNTdmNWYsJ2FyZ3MnOlt7J2lkJzpfMHg0ZTM2MjV9XX0pO319O2xldCBfMHg1ODdmYTg9VihfMHgzOGNmMDIsXzB4NDFhZTU2LF8weDQyY2MzYixfMHg1MmNkYzcsXzB4NTU4MzExKSxfMHgzNTYzYzg9XzB4MzhjZjAyW18weDNkMWU3NygweDJiOSldO2NsYXNzIF8weDFkZWZmNXtjb25zdHJ1Y3Rvcigpe3ZhciBfMHg1NjdhNGY9XzB4M2QxZTc3O3RoaXNbXzB4NTY3YTRmKDB4MmE2KV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDU2N2E0ZigweDJhYSldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHg1NjdhNGYoMHgyNDUpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDU2N2E0ZigweDI0MildPV8weDM4Y2YwMlsndW5kZWZpbmVkJ10sdGhpc1tfMHg1NjdhNGYoMHgyNjYpXT1fMHgzOGNmMDJbXzB4NTY3YTRmKDB4MmFkKV0sdGhpc1tfMHg1NjdhNGYoMHgyNDMpXT1PYmplY3RbXzB4NTY3YTRmKDB4MWVmKV0sdGhpc1tfMHg1NjdhNGYoMHgyYWMpXT1PYmplY3RbXzB4NTY3YTRmKDB4MjcxKV0sdGhpc1snX1N5bWJvbCddPV8weDM4Y2YwMlsnU3ltYm9sJ10sdGhpc1tfMHg1NjdhNGYoMHgyODEpXT1SZWdFeHBbJ3Byb3RvdHlwZSddWyd0b1N0cmluZyddLHRoaXNbXzB4NTY3YTRmKDB4MjBjKV09RGF0ZVsncHJvdG90eXBlJ11bXzB4NTY3YTRmKDB4MjdmKV07fVtfMHgzZDFlNzcoMHgxZjkpXShfMHg0MDY2ZWQsXzB4MzhlMTRlLF8weGY2NzkyNSxfMHgzNzA5YWIpe3ZhciBfMHgxYWQyNzQ9XzB4M2QxZTc3LF8weDM1NjIzND10aGlzLF8weGZmOTYzOT1fMHhmNjc5MjVbXzB4MWFkMjc0KDB4MjdlKV07ZnVuY3Rpb24gXzB4MzY3ZDdkKF8weDM4NjQwMyxfMHhlM2ViYmQsXzB4MzdjMGRlKXt2YXIgXzB4NWU3MWE0PV8weDFhZDI3NDtfMHhlM2ViYmRbJ3R5cGUnXT1fMHg1ZTcxYTQoMHgyMWMpLF8weGUzZWJiZFsnZXJyb3InXT1fMHgzODY0MDNbXzB4NWU3MWE0KDB4MjUzKV0sXzB4MzBmOGFjPV8weDM3YzBkZVsnbm9kZSddWydjdXJyZW50J10sXzB4MzdjMGRlW18weDVlNzFhNCgweDI0OCldWydjdXJyZW50J109XzB4ZTNlYmJkLF8weDM1NjIzNFtfMHg1ZTcxYTQoMHgyNGIpXShfMHhlM2ViYmQsXzB4MzdjMGRlKTt9dHJ5e18weGY2NzkyNVsnbGV2ZWwnXSsrLF8weGY2NzkyNVtfMHgxYWQyNzQoMHgyN2UpXSYmXzB4ZjY3OTI1W18weDFhZDI3NCgweDIzZildWydwdXNoJ10oXzB4MzhlMTRlKTt2YXIgXzB4NGU4YmQ4LF8weDRiMmUwMixfMHgxZWJkODEsXzB4NTM5OGQ2LF8weDMzYzU3ZD1bXSxfMHg0ZjI5Yjg9W10sXzB4NDAzM2VhLF8weDJkYWYxZT10aGlzW18weDFhZDI3NCgweDJjMildKF8weDM4ZTE0ZSksXzB4MWE1YTM5PV8weDJkYWYxZT09PV8weDFhZDI3NCgweDIyOSksXzB4NTJmNWRiPSEweDEsXzB4Mzk1ZGMxPV8weDJkYWYxZT09PV8weDFhZDI3NCgweDJhZiksXzB4MjhhMGFjPXRoaXNbXzB4MWFkMjc0KDB4MjZmKV0oXzB4MmRhZjFlKSxfMHhlNjU0ND10aGlzW18weDFhZDI3NCgweDIxZCldKF8weDJkYWYxZSksXzB4NTJmNWFhPV8weDI4YTBhY3x8XzB4ZTY1NDQsXzB4MmUxYTZkPXt9LF8weDJmZjJmYT0weDAsXzB4M2U0ZGU0PSEweDEsXzB4MzBmOGFjLF8weDNhYjQ1OD0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4ZjY3OTI1W18weDFhZDI3NCgweDI2MildKXtpZihfMHgxYTVhMzkpe2lmKF8weDRiMmUwMj1fMHgzOGUxNGVbXzB4MWFkMjc0KDB4MWY0KV0sXzB4NGIyZTAyPl8weGY2NzkyNVtfMHgxYWQyNzQoMHgyNGMpXSl7Zm9yKF8weDFlYmQ4MT0weDAsXzB4NTM5OGQ2PV8weGY2NzkyNVsnZWxlbWVudHMnXSxfMHg0ZThiZDg9XzB4MWViZDgxO18weDRlOGJkODxfMHg1Mzk4ZDY7XzB4NGU4YmQ4KyspXzB4NGYyOWI4W18weDFhZDI3NCgweDFmZSldKF8weDM1NjIzNFsnX2FkZFByb3BlcnR5J10oXzB4MzNjNTdkLF8weDM4ZTE0ZSxfMHgyZGFmMWUsXzB4NGU4YmQ4LF8weGY2NzkyNSkpO18weDQwNjZlZFsnY2FwcGVkRWxlbWVudHMnXT0hMHgwO31lbHNle2ZvcihfMHgxZWJkODE9MHgwLF8weDUzOThkNj1fMHg0YjJlMDIsXzB4NGU4YmQ4PV8weDFlYmQ4MTtfMHg0ZThiZDg8XzB4NTM5OGQ2O18weDRlOGJkOCsrKV8weDRmMjliOFtfMHgxYWQyNzQoMHgxZmUpXShfMHgzNTYyMzRbXzB4MWFkMjc0KDB4MjkzKV0oXzB4MzNjNTdkLF8weDM4ZTE0ZSxfMHgyZGFmMWUsXzB4NGU4YmQ4LF8weGY2NzkyNSkpO31fMHhmNjc5MjVbXzB4MWFkMjc0KDB4MjY4KV0rPV8weDRmMjliOFsnbGVuZ3RoJ107fWlmKCEoXzB4MmRhZjFlPT09XzB4MWFkMjc0KDB4MjVhKXx8XzB4MmRhZjFlPT09XzB4MWFkMjc0KDB4MjhkKSkmJiFfMHgyOGEwYWMmJl8weDJkYWYxZSE9PSdTdHJpbmcnJiZfMHgyZGFmMWUhPT1fMHgxYWQyNzQoMHgxZjcpJiZfMHgyZGFmMWUhPT1fMHgxYWQyNzQoMHgyOTYpKXt2YXIgXzB4NWYxZTE2PV8weDM3MDlhYltfMHgxYWQyNzQoMHgyMzgpXXx8XzB4ZjY3OTI1W18weDFhZDI3NCgweDIzOCldO2lmKHRoaXNbXzB4MWFkMjc0KDB4Mjk4KV0oXzB4MzhlMTRlKT8oXzB4NGU4YmQ4PTB4MCxfMHgzOGUxNGVbXzB4MWFkMjc0KDB4MjhlKV0oZnVuY3Rpb24oXzB4M2Y1NTUwKXt2YXIgXzB4NDdmOTI4PV8weDFhZDI3NDtpZihfMHgyZmYyZmErKyxfMHhmNjc5MjVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgyZmYyZmE+XzB4NWYxZTE2KXtfMHgzZTRkZTQ9ITB4MDtyZXR1cm47fWlmKCFfMHhmNjc5MjVbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4ZjY3OTI1W18weDQ3ZjkyOCgweDI3ZSldJiZfMHhmNjc5MjVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4ZjY3OTI1W18weDQ3ZjkyOCgweDIwNCldKXtfMHgzZTRkZTQ9ITB4MDtyZXR1cm47fV8weDRmMjliOFtfMHg0N2Y5MjgoMHgxZmUpXShfMHgzNTYyMzRbXzB4NDdmOTI4KDB4MjkzKV0oXzB4MzNjNTdkLF8weDM4ZTE0ZSxfMHg0N2Y5MjgoMHgyM2EpLF8weDRlOGJkOCsrLF8weGY2NzkyNSxmdW5jdGlvbihfMHg0ZWM4ZTIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg0ZWM4ZTI7fTt9KF8weDNmNTU1MCkpKTt9KSk6dGhpc1tfMHgxYWQyNzQoMHgxZmYpXShfMHgzOGUxNGUpJiZfMHgzOGUxNGVbXzB4MWFkMjc0KDB4MjhlKV0oZnVuY3Rpb24oXzB4MTQ5MzEzLF8weDcyZmUzMil7dmFyIF8weDM1MWZmZj1fMHgxYWQyNzQ7aWYoXzB4MmZmMmZhKyssXzB4ZjY3OTI1W18weDM1MWZmZigweDI2OCldKyssXzB4MmZmMmZhPl8weDVmMWUxNil7XzB4M2U0ZGU0PSEweDA7cmV0dXJuO31pZighXzB4ZjY3OTI1W18weDM1MWZmZigweDI1YildJiZfMHhmNjc5MjVbXzB4MzUxZmZmKDB4MjdlKV0mJl8weGY2NzkyNVtfMHgzNTFmZmYoMHgyNjgpXT5fMHhmNjc5MjVbXzB4MzUxZmZmKDB4MjA0KV0pe18weDNlNGRlND0hMHgwO3JldHVybjt9dmFyIF8weDRjZGUzOT1fMHg3MmZlMzJbXzB4MzUxZmZmKDB4MjdmKV0oKTtfMHg0Y2RlMzlbJ2xlbmd0aCddPjB4NjQmJihfMHg0Y2RlMzk9XzB4NGNkZTM5W18weDM1MWZmZigweDIxOSldKDB4MCwweDY0KStfMHgzNTFmZmYoMHgyNDEpKSxfMHg0ZjI5YjhbXzB4MzUxZmZmKDB4MWZlKV0oXzB4MzU2MjM0WydfYWRkUHJvcGVydHknXShfMHgzM2M1N2QsXzB4MzhlMTRlLF8weDM1MWZmZigweDFmNSksXzB4NGNkZTM5LF8weGY2NzkyNSxmdW5jdGlvbihfMHgzMDNlYmEpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzMDNlYmE7fTt9KF8weDE0OTMxMykpKTt9KSwhXzB4NTJmNWRiKXt0cnl7Zm9yKF8weDQwMzNlYSBpbiBfMHgzOGUxNGUpaWYoIShfMHgxYTVhMzkmJl8weDNhYjQ1OFtfMHgxYWQyNzQoMHgyYTkpXShfMHg0MDMzZWEpKSYmIXRoaXNbXzB4MWFkMjc0KDB4Mjk0KV0oXzB4MzhlMTRlLF8weDQwMzNlYSxfMHhmNjc5MjUpKXtpZihfMHgyZmYyZmErKyxfMHhmNjc5MjVbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHgyZmYyZmE+XzB4NWYxZTE2KXtfMHgzZTRkZTQ9ITB4MDticmVhazt9aWYoIV8weGY2NzkyNVtfMHgxYWQyNzQoMHgyNWIpXSYmXzB4ZjY3OTI1W18weDFhZDI3NCgweDI3ZSldJiZfMHhmNjc5MjVbXzB4MWFkMjc0KDB4MjY4KV0+XzB4ZjY3OTI1WydhdXRvRXhwYW5kTGltaXQnXSl7XzB4M2U0ZGU0PSEweDA7YnJlYWs7fV8weDRmMjliOFsncHVzaCddKF8weDM1NjIzNFtfMHgxYWQyNzQoMHgyNTkpXShfMHgzM2M1N2QsXzB4MmUxYTZkLF8weDM4ZTE0ZSxfMHgyZGFmMWUsXzB4NDAzM2VhLF8weGY2NzkyNSkpO319Y2F0Y2h7fWlmKF8weDJlMWE2ZFtfMHgxYWQyNzQoMHgyYjUpXT0hMHgwLF8weDM5NWRjMSYmKF8weDJlMWE2ZFtfMHgxYWQyNzQoMHgyNmEpXT0hMHgwKSwhXzB4M2U0ZGU0KXt2YXIgXzB4MjRjOGYxPVtdW18weDFhZDI3NCgweDFlOSldKHRoaXNbXzB4MWFkMjc0KDB4MmFjKV0oXzB4MzhlMTRlKSlbXzB4MWFkMjc0KDB4MWU5KV0odGhpc1tfMHgxYWQyNzQoMHgxZTQpXShfMHgzOGUxNGUpKTtmb3IoXzB4NGU4YmQ4PTB4MCxfMHg0YjJlMDI9XzB4MjRjOGYxW18weDFhZDI3NCgweDFmNCldO18weDRlOGJkODxfMHg0YjJlMDI7XzB4NGU4YmQ4KyspaWYoXzB4NDAzM2VhPV8weDI0YzhmMVtfMHg0ZThiZDhdLCEoXzB4MWE1YTM5JiZfMHgzYWI0NThbXzB4MWFkMjc0KDB4MmE5KV0oXzB4NDAzM2VhW18weDFhZDI3NCgweDI3ZildKCkpKSYmIXRoaXNbXzB4MWFkMjc0KDB4Mjk0KV0oXzB4MzhlMTRlLF8weDQwMzNlYSxfMHhmNjc5MjUpJiYhXzB4MmUxYTZkWydfcF8nK18weDQwMzNlYVtfMHgxYWQyNzQoMHgyN2YpXSgpXSl7aWYoXzB4MmZmMmZhKyssXzB4ZjY3OTI1WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MmZmMmZhPl8weDVmMWUxNil7XzB4M2U0ZGU0PSEweDA7YnJlYWs7fWlmKCFfMHhmNjc5MjVbXzB4MWFkMjc0KDB4MjViKV0mJl8weGY2NzkyNVtfMHgxYWQyNzQoMHgyN2UpXSYmXzB4ZjY3OTI1WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weGY2NzkyNVsnYXV0b0V4cGFuZExpbWl0J10pe18weDNlNGRlND0hMHgwO2JyZWFrO31fMHg0ZjI5YjhbXzB4MWFkMjc0KDB4MWZlKV0oXzB4MzU2MjM0W18weDFhZDI3NCgweDI1OSldKF8weDMzYzU3ZCxfMHgyZTFhNmQsXzB4MzhlMTRlLF8weDJkYWYxZSxfMHg0MDMzZWEsXzB4ZjY3OTI1KSk7fX19fX1pZihfMHg0MDY2ZWRbJ3R5cGUnXT1fMHgyZGFmMWUsXzB4NTJmNWFhPyhfMHg0MDY2ZWRbXzB4MWFkMjc0KDB4MmE1KV09XzB4MzhlMTRlW18weDFhZDI3NCgweDI1ZCldKCksdGhpc1snX2NhcElmU3RyaW5nJ10oXzB4MmRhZjFlLF8weDQwNjZlZCxfMHhmNjc5MjUsXzB4MzcwOWFiKSk6XzB4MmRhZjFlPT09XzB4MWFkMjc0KDB4MmEwKT9fMHg0MDY2ZWRbXzB4MWFkMjc0KDB4MmE1KV09dGhpc1snX2RhdGVUb1N0cmluZyddW18weDFhZDI3NCgweDIxMildKF8weDM4ZTE0ZSk6XzB4MmRhZjFlPT09XzB4MWFkMjc0KDB4Mjk2KT9fMHg0MDY2ZWRbJ3ZhbHVlJ109XzB4MzhlMTRlW18weDFhZDI3NCgweDI3ZildKCk6XzB4MmRhZjFlPT09XzB4MWFkMjc0KDB4MjFlKT9fMHg0MDY2ZWRbXzB4MWFkMjc0KDB4MmE1KV09dGhpc1tfMHgxYWQyNzQoMHgyODEpXVsnY2FsbCddKF8weDM4ZTE0ZSk6XzB4MmRhZjFlPT09XzB4MWFkMjc0KDB4MjlhKSYmdGhpc1tfMHgxYWQyNzQoMHgyMmMpXT9fMHg0MDY2ZWRbJ3ZhbHVlJ109dGhpc1snX1N5bWJvbCddW18weDFhZDI3NCgweDI0MCldW18weDFhZDI3NCgweDI3ZildW18weDFhZDI3NCgweDIxMildKF8weDM4ZTE0ZSk6IV8weGY2NzkyNVtfMHgxYWQyNzQoMHgyNjIpXSYmIShfMHgyZGFmMWU9PT1fMHgxYWQyNzQoMHgyNWEpfHxfMHgyZGFmMWU9PT1fMHgxYWQyNzQoMHgyOGQpKSYmKGRlbGV0ZSBfMHg0MDY2ZWRbJ3ZhbHVlJ10sXzB4NDA2NmVkW18weDFhZDI3NCgweDJiMSldPSEweDApLF8weDNlNGRlNCYmKF8weDQwNjZlZFsnY2FwcGVkUHJvcHMnXT0hMHgwKSxfMHgzMGY4YWM9XzB4ZjY3OTI1W18weDFhZDI3NCgweDI0OCldW18weDFhZDI3NCgweDI5YyldLF8weGY2NzkyNVsnbm9kZSddWydjdXJyZW50J109XzB4NDA2NmVkLHRoaXNbXzB4MWFkMjc0KDB4MjRiKV0oXzB4NDA2NmVkLF8weGY2NzkyNSksXzB4NGYyOWI4W18weDFhZDI3NCgweDFmNCldKXtmb3IoXzB4NGU4YmQ4PTB4MCxfMHg0YjJlMDI9XzB4NGYyOWI4W18weDFhZDI3NCgweDFmNCldO18weDRlOGJkODxfMHg0YjJlMDI7XzB4NGU4YmQ4KyspXzB4NGYyOWI4W18weDRlOGJkOF0oXzB4NGU4YmQ4KTt9XzB4MzNjNTdkW18weDFhZDI3NCgweDFmNCldJiYoXzB4NDA2NmVkW18weDFhZDI3NCgweDIzOCldPV8weDMzYzU3ZCk7fWNhdGNoKF8weDJiYWU4Myl7XzB4MzY3ZDdkKF8weDJiYWU4MyxfMHg0MDY2ZWQsXzB4ZjY3OTI1KTt9cmV0dXJuIHRoaXNbXzB4MWFkMjc0KDB4MjIwKV0oXzB4MzhlMTRlLF8weDQwNjZlZCksdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4NDA2NmVkLF8weGY2NzkyNSksXzB4ZjY3OTI1W18weDFhZDI3NCgweDI0OCldWydjdXJyZW50J109XzB4MzBmOGFjLF8weGY2NzkyNVtfMHgxYWQyNzQoMHgyMmYpXS0tLF8weGY2NzkyNVtfMHgxYWQyNzQoMHgyN2UpXT1fMHhmZjk2MzksXzB4ZjY3OTI1WydhdXRvRXhwYW5kJ10mJl8weGY2NzkyNVtfMHgxYWQyNzQoMHgyM2YpXVtfMHgxYWQyNzQoMHgyYzEpXSgpLF8weDQwNjZlZDt9W18weDNkMWU3NygweDFlNCldKF8weDYzYzgzYSl7dmFyIF8weDM1YmIwMj1fMHgzZDFlNzc7cmV0dXJuIE9iamVjdFtfMHgzNWJiMDIoMHgyNjUpXT9PYmplY3RbXzB4MzViYjAyKDB4MjY1KV0oXzB4NjNjODNhKTpbXTt9W18weDNkMWU3NygweDI5OCldKF8weDE4ZmExOSl7dmFyIF8weDU1NDE4Mj1fMHgzZDFlNzc7cmV0dXJuISEoXzB4MThmYTE5JiZfMHgzOGNmMDJbJ1NldCddJiZ0aGlzW18weDU1NDE4MigweDI5NSldKF8weDE4ZmExOSk9PT1fMHg1NTQxODIoMHgyNmUpJiZfMHgxOGZhMTlbXzB4NTU0MTgyKDB4MjhlKV0pO31bXzB4M2QxZTc3KDB4Mjk0KV0oXzB4MTc0NjRhLF8weDIyYzE2NCxfMHg0ZmRjYzEpe3ZhciBfMHg5YTMyOT1fMHgzZDFlNzc7cmV0dXJuIF8weDRmZGNjMVsnbm9GdW5jdGlvbnMnXT90eXBlb2YgXzB4MTc0NjRhW18weDIyYzE2NF09PV8weDlhMzI5KDB4MmFmKTohMHgxO31bJ190eXBlJ10oXzB4NDY0ZmQ2KXt2YXIgXzB4MjA3YWUzPV8weDNkMWU3NyxfMHg0MjMyOTc9Jyc7cmV0dXJuIF8weDQyMzI5Nz10eXBlb2YgXzB4NDY0ZmQ2LF8weDQyMzI5Nz09PV8weDIwN2FlMygweDIzZSk/dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4NDY0ZmQ2KT09PV8weDIwN2FlMygweDFmMik/XzB4NDIzMjk3PV8weDIwN2FlMygweDIyOSk6dGhpc1tfMHgyMDdhZTMoMHgyOTUpXShfMHg0NjRmZDYpPT09XzB4MjA3YWUzKDB4MjAwKT9fMHg0MjMyOTc9XzB4MjA3YWUzKDB4MmEwKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0NjRmZDYpPT09J1tvYmplY3RcXFxceDIwQmlnSW50XSc/XzB4NDIzMjk3PV8weDIwN2FlMygweDI5Nik6XzB4NDY0ZmQ2PT09bnVsbD9fMHg0MjMyOTc9J251bGwnOl8weDQ2NGZkNltfMHgyMDdhZTMoMHgyNjcpXSYmKF8weDQyMzI5Nz1fMHg0NjRmZDZbXzB4MjA3YWUzKDB4MjY3KV1bXzB4MjA3YWUzKDB4MjgyKV18fF8weDQyMzI5Nyk6XzB4NDIzMjk3PT09XzB4MjA3YWUzKDB4MjhkKSYmdGhpc1tfMHgyMDdhZTMoMHgyNjYpXSYmXzB4NDY0ZmQ2IGluc3RhbmNlb2YgdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJihfMHg0MjMyOTc9XzB4MjA3YWUzKDB4MmFkKSksXzB4NDIzMjk3O31bJ19vYmplY3RUb1N0cmluZyddKF8weDMxZjFlZSl7dmFyIF8weDU1Yjk3YT1fMHgzZDFlNzc7cmV0dXJuIE9iamVjdFtfMHg1NWI5N2EoMHgyNDApXVtfMHg1NWI5N2EoMHgyN2YpXVtfMHg1NWI5N2EoMHgyMTIpXShfMHgzMWYxZWUpO31bXzB4M2QxZTc3KDB4MjZmKV0oXzB4NGNlYzg2KXt2YXIgXzB4MTk4MWNhPV8weDNkMWU3NztyZXR1cm4gXzB4NGNlYzg2PT09XzB4MTk4MWNhKDB4MWZiKXx8XzB4NGNlYzg2PT09XzB4MTk4MWNhKDB4MWYzKXx8XzB4NGNlYzg2PT09J251bWJlcic7fVtfMHgzZDFlNzcoMHgyMWQpXShfMHgzYTgzY2Qpe3ZhciBfMHgyYmYyZDI9XzB4M2QxZTc3O3JldHVybiBfMHgzYTgzY2Q9PT1fMHgyYmYyZDIoMHgxZTMpfHxfMHgzYTgzY2Q9PT0nU3RyaW5nJ3x8XzB4M2E4M2NkPT09XzB4MmJmMmQyKDB4MjRhKTt9W18weDNkMWU3NygweDI5MyldKF8weDVjNGRjYyxfMHhhMjY5MjksXzB4M2JjNzVmLF8weDUxZjY4NCxfMHg0YmJkMTUsXzB4M2ZlOGU4KXt2YXIgXzB4NWI0OTljPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDEwM2JmNCl7dmFyIF8weDQyMDNmMj1fMHg0YTExLF8weDJkNjgyMD1fMHg0YmJkMTVbJ25vZGUnXVsnY3VycmVudCddLF8weDM0NTRmNj1fMHg0YmJkMTVbXzB4NDIwM2YyKDB4MjQ4KV1bXzB4NDIwM2YyKDB4MjA5KV0sXzB4NWQ5YmU4PV8weDRiYmQxNVtfMHg0MjAzZjIoMHgyNDgpXVtfMHg0MjAzZjIoMHgyM2MpXTtfMHg0YmJkMTVbXzB4NDIwM2YyKDB4MjQ4KV1bXzB4NDIwM2YyKDB4MjNjKV09XzB4MmQ2ODIwLF8weDRiYmQxNVsnbm9kZSddW18weDQyMDNmMigweDIwOSldPXR5cGVvZiBfMHg1MWY2ODQ9PSdudW1iZXInP18weDUxZjY4NDpfMHgxMDNiZjQsXzB4NWM0ZGNjW18weDQyMDNmMigweDFmZSldKF8weDViNDk5Y1tfMHg0MjAzZjIoMHgyYmEpXShfMHhhMjY5MjksXzB4M2JjNzVmLF8weDUxZjY4NCxfMHg0YmJkMTUsXzB4M2ZlOGU4KSksXzB4NGJiZDE1W18weDQyMDNmMigweDI0OCldW18weDQyMDNmMigweDIzYyldPV8weDVkOWJlOCxfMHg0YmJkMTVbXzB4NDIwM2YyKDB4MjQ4KV1bXzB4NDIwM2YyKDB4MjA5KV09XzB4MzQ1NGY2O307fVtfMHgzZDFlNzcoMHgyNTkpXShfMHgxNDBhYzAsXzB4NDMwNDAxLF8weDRlNmE3MSxfMHgxZDNlM2UsXzB4MWY5YWVhLF8weDEyYmI3OSxfMHgyOGFkY2Qpe3ZhciBfMHg0OTk1MGI9XzB4M2QxZTc3LF8weDMxZTQwMz10aGlzO3JldHVybiBfMHg0MzA0MDFbXzB4NDk5NTBiKDB4MjkyKStfMHgxZjlhZWFbXzB4NDk5NTBiKDB4MjdmKV0oKV09ITB4MCxmdW5jdGlvbihfMHhjYzQ3MmMpe3ZhciBfMHhmMWY3YjA9XzB4NDk5NTBiLF8weDQwNTQ1MD1fMHgxMmJiNzlbXzB4ZjFmN2IwKDB4MjQ4KV1bXzB4ZjFmN2IwKDB4MjljKV0sXzB4M2I2ZDIzPV8weDEyYmI3OVsnbm9kZSddWydpbmRleCddLF8weDE3MjQyND1fMHgxMmJiNzlbXzB4ZjFmN2IwKDB4MjQ4KV1bXzB4ZjFmN2IwKDB4MjNjKV07XzB4MTJiYjc5W18weGYxZjdiMCgweDI0OCldW18weGYxZjdiMCgweDIzYyldPV8weDQwNTQ1MCxfMHgxMmJiNzlbXzB4ZjFmN2IwKDB4MjQ4KV1bXzB4ZjFmN2IwKDB4MjA5KV09XzB4Y2M0NzJjLF8weDE0MGFjMFtfMHhmMWY3YjAoMHgxZmUpXShfMHgzMWU0MDNbXzB4ZjFmN2IwKDB4MmJhKV0oXzB4NGU2YTcxLF8weDFkM2UzZSxfMHgxZjlhZWEsXzB4MTJiYjc5LF8weDI4YWRjZCkpLF8weDEyYmI3OVtfMHhmMWY3YjAoMHgyNDgpXVtfMHhmMWY3YjAoMHgyM2MpXT1fMHgxNzI0MjQsXzB4MTJiYjc5Wydub2RlJ11bXzB4ZjFmN2IwKDB4MjA5KV09XzB4M2I2ZDIzO307fVtfMHgzZDFlNzcoMHgyYmEpXShfMHgzZDhhNTcsXzB4MTU3OTYxLF8weDI1YzU5OCxfMHg0MWViY2MsXzB4MTVjNTk0KXt2YXIgXzB4YTY1ZDk2PV8weDNkMWU3NyxfMHg1ZWZkOTM9dGhpcztfMHgxNWM1OTR8fChfMHgxNWM1OTQ9ZnVuY3Rpb24oXzB4ZjZiYzNhLF8weDJjMGVkMil7cmV0dXJuIF8weGY2YmMzYVtfMHgyYzBlZDJdO30pO3ZhciBfMHg1ZGY5ZTM9XzB4MjVjNTk4Wyd0b1N0cmluZyddKCksXzB4MjA1MjI2PV8weDQxZWJjY1tfMHhhNjVkOTYoMHgyNDQpXXx8e30sXzB4Mzk5ZmQ3PV8weDQxZWJjY1snZGVwdGgnXSxfMHg1NjE0NWY9XzB4NDFlYmNjW18weGE2NWQ5NigweDI1YildO3RyeXt2YXIgXzB4Mjc5ZmYyPXRoaXNbXzB4YTY1ZDk2KDB4MWZmKV0oXzB4M2Q4YTU3KSxfMHgyMmM4OGI9XzB4NWRmOWUzO18weDI3OWZmMiYmXzB4MjJjODhiWzB4MF09PT0nXFxcXHgyNycmJihfMHgyMmM4OGI9XzB4MjJjODhiW18weGE2NWQ5NigweDIzNildKDB4MSxfMHgyMmM4OGJbJ2xlbmd0aCddLTB4MikpO3ZhciBfMHgxMTVlNjc9XzB4NDFlYmNjW18weGE2NWQ5NigweDI0NCldPV8weDIwNTIyNltfMHhhNjVkOTYoMHgyOTIpK18weDIyYzg4Yl07XzB4MTE1ZTY3JiYoXzB4NDFlYmNjW18weGE2NWQ5NigweDI2MildPV8weDQxZWJjY1tfMHhhNjVkOTYoMHgyNjIpXSsweDEpLF8weDQxZWJjY1tfMHhhNjVkOTYoMHgyNWIpXT0hIV8weDExNWU2Nzt2YXIgXzB4NTY5Mzk4PXR5cGVvZiBfMHgyNWM1OTg9PV8weGE2NWQ5NigweDI5YSksXzB4MmJhOTBiPXsnbmFtZSc6XzB4NTY5Mzk4fHxfMHgyNzlmZjI/XzB4NWRmOWUzOnRoaXNbXzB4YTY1ZDk2KDB4MjEzKV0oXzB4NWRmOWUzKX07aWYoXzB4NTY5Mzk4JiYoXzB4MmJhOTBiW18weGE2NWQ5NigweDI5YSldPSEweDApLCEoXzB4MTU3OTYxPT09XzB4YTY1ZDk2KDB4MjI5KXx8XzB4MTU3OTYxPT09XzB4YTY1ZDk2KDB4Mjg1KSkpe3ZhciBfMHgyOWY3YWQ9dGhpc1tfMHhhNjVkOTYoMHgyNDMpXShfMHgzZDhhNTcsXzB4MjVjNTk4KTtpZihfMHgyOWY3YWQmJihfMHgyOWY3YWRbXzB4YTY1ZDk2KDB4MjQ3KV0mJihfMHgyYmE5MGJbJ3NldHRlciddPSEweDApLF8weDI5ZjdhZFtfMHhhNjVkOTYoMHgyYjIpXSYmIV8weDExNWU2NyYmIV8weDQxZWJjY1sncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDJiYTkwYltfMHhhNjVkOTYoMHgyYWIpXT0hMHgwLHRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHgyYmE5MGIsXzB4NDFlYmNjKSxfMHgyYmE5MGI7fXZhciBfMHgzNmNjNzE7dHJ5e18weDM2Y2M3MT1fMHgxNWM1OTQoXzB4M2Q4YTU3LF8weDI1YzU5OCk7fWNhdGNoKF8weDFiZTc2ZSl7cmV0dXJuIF8weDJiYTkwYj17J25hbWUnOl8weDVkZjllMywndHlwZSc6J3Vua25vd24nLCdlcnJvcic6XzB4MWJlNzZlW18weGE2NWQ5NigweDI1MyldfSx0aGlzW18weGE2NWQ5NigweDJiMCldKF8weDJiYTkwYixfMHg0MWViY2MpLF8weDJiYTkwYjt9dmFyIF8weDQ2MTIxZD10aGlzW18weGE2NWQ5NigweDJjMildKF8weDM2Y2M3MSksXzB4NDk3ZWMzPXRoaXNbXzB4YTY1ZDk2KDB4MjZmKV0oXzB4NDYxMjFkKTtpZihfMHgyYmE5MGJbXzB4YTY1ZDk2KDB4MjM0KV09XzB4NDYxMjFkLF8weDQ5N2VjMyl0aGlzW18weGE2NWQ5NigweDJiMCldKF8weDJiYTkwYixfMHg0MWViY2MsXzB4MzZjYzcxLGZ1bmN0aW9uKCl7dmFyIF8weDFkOTRkND1fMHhhNjVkOTY7XzB4MmJhOTBiW18weDFkOTRkNCgweDJhNSldPV8weDM2Y2M3MVsndmFsdWVPZiddKCksIV8weDExNWU2NyYmXzB4NWVmZDkzW18weDFkOTRkNCgweDI3NyldKF8weDQ2MTIxZCxfMHgyYmE5MGIsXzB4NDFlYmNjLHt9KTt9KTtlbHNle3ZhciBfMHgxZTY2YWI9XzB4NDFlYmNjWydhdXRvRXhwYW5kJ10mJl8weDQxZWJjY1snbGV2ZWwnXTxfMHg0MWViY2NbXzB4YTY1ZDk2KDB4MjA3KV0mJl8weDQxZWJjY1tfMHhhNjVkOTYoMHgyM2YpXVtfMHhhNjVkOTYoMHgyOGYpXShfMHgzNmNjNzEpPDB4MCYmXzB4NDYxMjFkIT09J2Z1bmN0aW9uJyYmXzB4NDFlYmNjW18weGE2NWQ5NigweDI2OCldPF8weDQxZWJjY1tfMHhhNjVkOTYoMHgyMDQpXTtfMHgxZTY2YWJ8fF8weDQxZWJjY1tfMHhhNjVkOTYoMHgyMmYpXTxfMHgzOTlmZDd8fF8weDExNWU2Nz8odGhpc1tfMHhhNjVkOTYoMHgxZjkpXShfMHgyYmE5MGIsXzB4MzZjYzcxLF8weDQxZWJjYyxfMHgxMTVlNjd8fHt9KSx0aGlzW18weGE2NWQ5NigweDIyMCldKF8weDM2Y2M3MSxfMHgyYmE5MGIpKTp0aGlzW18weGE2NWQ5NigweDJiMCldKF8weDJiYTkwYixfMHg0MWViY2MsXzB4MzZjYzcxLGZ1bmN0aW9uKCl7dmFyIF8weDI5ZDlhMT1fMHhhNjVkOTY7XzB4NDYxMjFkPT09XzB4MjlkOWExKDB4MjVhKXx8XzB4NDYxMjFkPT09XzB4MjlkOWExKDB4MjhkKXx8KGRlbGV0ZSBfMHgyYmE5MGJbXzB4MjlkOWExKDB4MmE1KV0sXzB4MmJhOTBiW18weDI5ZDlhMSgweDJiMSldPSEweDApO30pO31yZXR1cm4gXzB4MmJhOTBiO31maW5hbGx5e18weDQxZWJjY1tfMHhhNjVkOTYoMHgyNDQpXT1fMHgyMDUyMjYsXzB4NDFlYmNjW18weGE2NWQ5NigweDI2MildPV8weDM5OWZkNyxfMHg0MWViY2NbXzB4YTY1ZDk2KDB4MjViKV09XzB4NTYxNDVmO319W18weDNkMWU3NygweDI3NyldKF8weDFjYjM0NSxfMHgyMGQ3OGMsXzB4OTEzZDY2LF8weDQ3NjA3Nil7dmFyIF8weDQ1NGJjNz1fMHgzZDFlNzcsXzB4NWYwODQ5PV8weDQ3NjA3NltfMHg0NTRiYzcoMHgyMDEpXXx8XzB4OTEzZDY2W18weDQ1NGJjNygweDIwMSldO2lmKChfMHgxY2IzNDU9PT1fMHg0NTRiYzcoMHgxZjMpfHxfMHgxY2IzNDU9PT0nU3RyaW5nJykmJl8weDIwZDc4Y1tfMHg0NTRiYzcoMHgyYTUpXSl7bGV0IF8weDJmMTU3OD1fMHgyMGQ3OGNbXzB4NDU0YmM3KDB4MmE1KV1bXzB4NDU0YmM3KDB4MWY0KV07XzB4OTEzZDY2W18weDQ1NGJjNygweDI0NildKz1fMHgyZjE1NzgsXzB4OTEzZDY2W18weDQ1NGJjNygweDI0NildPl8weDkxM2Q2NltfMHg0NTRiYzcoMHgyOWUpXT8oXzB4MjBkNzhjW18weDQ1NGJjNygweDJiMSldPScnLGRlbGV0ZSBfMHgyMGQ3OGNbXzB4NDU0YmM3KDB4MmE1KV0pOl8weDJmMTU3OD5fMHg1ZjA4NDkmJihfMHgyMGQ3OGNbJ2NhcHBlZCddPV8weDIwZDc4Y1tfMHg0NTRiYzcoMHgyYTUpXVtfMHg0NTRiYzcoMHgyMzYpXSgweDAsXzB4NWYwODQ5KSxkZWxldGUgXzB4MjBkNzhjW18weDQ1NGJjNygweDJhNSldKTt9fVtfMHgzZDFlNzcoMHgxZmYpXShfMHg1NTA5ZjEpe3ZhciBfMHg1YzE5YmQ9XzB4M2QxZTc3O3JldHVybiEhKF8weDU1MDlmMSYmXzB4MzhjZjAyW18weDVjMTliZCgweDFmNSldJiZ0aGlzW18weDVjMTliZCgweDI5NSldKF8weDU1MDlmMSk9PT1fMHg1YzE5YmQoMHgxZWMpJiZfMHg1NTA5ZjFbXzB4NWMxOWJkKDB4MjhlKV0pO31bJ19wcm9wZXJ0eU5hbWUnXShfMHg1MmY5OGMpe3ZhciBfMHgxZWI0OTg9XzB4M2QxZTc3O2lmKF8weDUyZjk4Y1tfMHgxZWI0OTgoMHgyNmMpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NTJmOThjO3ZhciBfMHg1ODU3ZmM7dHJ5e18weDU4NTdmYz1KU09OWydzdHJpbmdpZnknXSgnJytfMHg1MmY5OGMpO31jYXRjaHtfMHg1ODU3ZmM9J1xcXFx4MjInK3RoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDUyZjk4YykrJ1xcXFx4MjInO31yZXR1cm4gXzB4NTg1N2ZjW18weDFlYjQ5OCgweDI2YyldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NTg1N2ZjPV8weDU4NTdmY1snc3Vic3RyJ10oMHgxLF8weDU4NTdmY1tfMHgxZWI0OTgoMHgxZjQpXS0weDIpOl8weDU4NTdmYz1fMHg1ODU3ZmNbXzB4MWViNDk4KDB4MjdiKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgxZWI0OTgoMHgyN2IpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg1ODU3ZmM7fVtfMHgzZDFlNzcoMHgyYjApXShfMHgzN2JiZDAsXzB4MzNmMWU4LF8weDViN2I1MCxfMHg1NzM5N2Upe3ZhciBfMHgxYTk2NDk9XzB4M2QxZTc3O3RoaXNbXzB4MWE5NjQ5KDB4MjRiKV0oXzB4MzdiYmQwLF8weDMzZjFlOCksXzB4NTczOTdlJiZfMHg1NzM5N2UoKSx0aGlzW18weDFhOTY0OSgweDIyMCldKF8weDViN2I1MCxfMHgzN2JiZDApLHRoaXNbXzB4MWE5NjQ5KDB4MjE4KV0oXzB4MzdiYmQwLF8weDMzZjFlOCk7fVtfMHgzZDFlNzcoMHgyNGIpXShfMHhhYjFiY2EsXzB4M2ExMjhlKXt2YXIgXzB4MzE5NmJjPV8weDNkMWU3Nzt0aGlzW18weDMxOTZiYygweDIyZCldKF8weGFiMWJjYSxfMHgzYTEyOGUpLHRoaXNbXzB4MzE5NmJjKDB4MjA4KV0oXzB4YWIxYmNhLF8weDNhMTI4ZSksdGhpc1tfMHgzMTk2YmMoMHgyNTUpXShfMHhhYjFiY2EsXzB4M2ExMjhlKSx0aGlzW18weDMxOTZiYygweDI3NildKF8weGFiMWJjYSxfMHgzYTEyOGUpO31bXzB4M2QxZTc3KDB4MjJkKV0oXzB4NTFiMjMyLF8weDNlNjBhNCl7fVtfMHgzZDFlNzcoMHgyMDgpXShfMHgzNjI4YjEsXzB4ZTU3ODU2KXt9Wydfc2V0Tm9kZUxhYmVsJ10oXzB4NDY3MGFmLF8weDUwZDkyZSl7fVtfMHgzZDFlNzcoMHgyYjgpXShfMHgxYjVhNWYpe3ZhciBfMHgxYmFkZTA9XzB4M2QxZTc3O3JldHVybiBfMHgxYjVhNWY9PT10aGlzW18weDFiYWRlMCgweDI0MildO31bJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDIyYmNmNyxfMHgyOTk4Yjcpe3ZhciBfMHgyN2VhYzQ9XzB4M2QxZTc3O3RoaXNbXzB4MjdlYWM0KDB4MjBlKV0oXzB4MjJiY2Y3LF8weDI5OThiNyksdGhpc1tfMHgyN2VhYzQoMHgyOTApXShfMHgyMmJjZjcpLF8weDI5OThiN1tfMHgyN2VhYzQoMHgyMGQpXSYmdGhpc1snX3NvcnRQcm9wcyddKF8weDIyYmNmNyksdGhpc1tfMHgyN2VhYzQoMHgyOGMpXShfMHgyMmJjZjcsXzB4Mjk5OGI3KSx0aGlzWydfYWRkTG9hZE5vZGUnXShfMHgyMmJjZjcsXzB4Mjk5OGI3KSx0aGlzW18weDI3ZWFjNCgweDI2NCldKF8weDIyYmNmNyk7fVtfMHgzZDFlNzcoMHgyMjApXShfMHgyODUyZDMsXzB4MzFjZWU5KXt2YXIgXzB4MjY3NTE2PV8weDNkMWU3NztsZXQgXzB4MWI2YjA1O3RyeXtfMHgzOGNmMDJbXzB4MjY3NTE2KDB4MjA2KV0mJihfMHgxYjZiMDU9XzB4MzhjZjAyW18weDI2NzUxNigweDIwNildW18weDI2NzUxNigweDJiYildLF8weDM4Y2YwMltfMHgyNjc1MTYoMHgyMDYpXVtfMHgyNjc1MTYoMHgyYmIpXT1mdW5jdGlvbigpe30pLF8weDI4NTJkMyYmdHlwZW9mIF8weDI4NTJkM1tfMHgyNjc1MTYoMHgxZjQpXT09XzB4MjY3NTE2KDB4MjE1KSYmKF8weDMxY2VlOVsnbGVuZ3RoJ109XzB4Mjg1MmQzWydsZW5ndGgnXSk7fWNhdGNoe31maW5hbGx5e18weDFiNmIwNSYmKF8weDM4Y2YwMltfMHgyNjc1MTYoMHgyMDYpXVsnZXJyb3InXT1fMHgxYjZiMDUpO31pZihfMHgzMWNlZTlbXzB4MjY3NTE2KDB4MjM0KV09PT0nbnVtYmVyJ3x8XzB4MzFjZWU5W18weDI2NzUxNigweDIzNCldPT09XzB4MjY3NTE2KDB4MjRhKSl7aWYoaXNOYU4oXzB4MzFjZWU5W18weDI2NzUxNigweDJhNSldKSlfMHgzMWNlZTlbXzB4MjY3NTE2KDB4MjFiKV09ITB4MCxkZWxldGUgXzB4MzFjZWU5W18weDI2NzUxNigweDJhNSldO2Vsc2Ugc3dpdGNoKF8weDMxY2VlOVtfMHgyNjc1MTYoMHgyYTUpXSl7Y2FzZSBOdW1iZXJbXzB4MjY3NTE2KDB4MjlmKV06XzB4MzFjZWU5W18weDI2NzUxNigweDI2MCldPSEweDAsZGVsZXRlIF8weDMxY2VlOVsndmFsdWUnXTticmVhaztjYXNlIE51bWJlcltfMHgyNjc1MTYoMHgxZTIpXTpfMHgzMWNlZTlbXzB4MjY3NTE2KDB4MmIzKV09ITB4MCxkZWxldGUgXzB4MzFjZWU5W18weDI2NzUxNigweDJhNSldO2JyZWFrO2Nhc2UgMHgwOnRoaXNbJ19pc05lZ2F0aXZlWmVybyddKF8weDMxY2VlOVtfMHgyNjc1MTYoMHgyYTUpXSkmJihfMHgzMWNlZTlbJ25lZ2F0aXZlWmVybyddPSEweDApO2JyZWFrO319ZWxzZSBfMHgzMWNlZTlbJ3R5cGUnXT09PSdmdW5jdGlvbicmJnR5cGVvZiBfMHgyODUyZDNbXzB4MjY3NTE2KDB4MjgyKV09PV8weDI2NzUxNigweDFmMykmJl8weDI4NTJkM1tfMHgyNjc1MTYoMHgyODIpXSYmXzB4MzFjZWU5W18weDI2NzUxNigweDI4MildJiZfMHgyODUyZDNbXzB4MjY3NTE2KDB4MjgyKV0hPT1fMHgzMWNlZTlbXzB4MjY3NTE2KDB4MjgyKV0mJihfMHgzMWNlZTlbXzB4MjY3NTE2KDB4MjhhKV09XzB4Mjg1MmQzWyduYW1lJ10pO31bXzB4M2QxZTc3KDB4MWYwKV0oXzB4NGViMTBhKXt2YXIgXzB4MjA3OGZjPV8weDNkMWU3NztyZXR1cm4gMHgxL18weDRlYjEwYT09PU51bWJlcltfMHgyMDc4ZmMoMHgxZTIpXTt9Wydfc29ydFByb3BzJ10oXzB4NDNiMGM0KXt2YXIgXzB4MjA2ODNmPV8weDNkMWU3NzshXzB4NDNiMGM0W18weDIwNjgzZigweDIzOCldfHwhXzB4NDNiMGM0Wydwcm9wcyddW18weDIwNjgzZigweDFmNCldfHxfMHg0M2IwYzRbJ3R5cGUnXT09PSdhcnJheSd8fF8weDQzYjBjNFtfMHgyMDY4M2YoMHgyMzQpXT09PSdNYXAnfHxfMHg0M2IwYzRbXzB4MjA2ODNmKDB4MjM0KV09PT1fMHgyMDY4M2YoMHgyM2EpfHxfMHg0M2IwYzRbXzB4MjA2ODNmKDB4MjM4KV1bJ3NvcnQnXShmdW5jdGlvbihfMHgxNTdjMDgsXzB4M2MzNjJiKXt2YXIgXzB4OWQ2NTA1PV8weDIwNjgzZixfMHg1OTBlMTg9XzB4MTU3YzA4W18weDlkNjUwNSgweDI4MildW18weDlkNjUwNSgweDI3YSldKCksXzB4NGVhMWY2PV8weDNjMzYyYltfMHg5ZDY1MDUoMHgyODIpXVtfMHg5ZDY1MDUoMHgyN2EpXSgpO3JldHVybiBfMHg1OTBlMTg8XzB4NGVhMWY2Py0weDE6XzB4NTkwZTE4Pl8weDRlYTFmNj8weDE6MHgwO30pO31bXzB4M2QxZTc3KDB4MjhjKV0oXzB4NDU3ZmVjLF8weDMxM2I5OCl7dmFyIF8weDMyYWRiMj1fMHgzZDFlNzc7aWYoIShfMHgzMTNiOThbXzB4MzJhZGIyKDB4MjBmKV18fCFfMHg0NTdmZWNbJ3Byb3BzJ118fCFfMHg0NTdmZWNbXzB4MzJhZGIyKDB4MjM4KV1bXzB4MzJhZGIyKDB4MWY0KV0pKXtmb3IodmFyIF8weDMxNDYzZT1bXSxfMHg0NWQ3YTk9W10sXzB4MzQyNzMyPTB4MCxfMHg1Y2U1MDE9XzB4NDU3ZmVjWydwcm9wcyddWydsZW5ndGgnXTtfMHgzNDI3MzI8XzB4NWNlNTAxO18weDM0MjczMisrKXt2YXIgXzB4NGQwYzY4PV8weDQ1N2ZlY1sncHJvcHMnXVtfMHgzNDI3MzJdO18weDRkMGM2OFtfMHgzMmFkYjIoMHgyMzQpXT09PV8weDMyYWRiMigweDJhZik/XzB4MzE0NjNlWydwdXNoJ10oXzB4NGQwYzY4KTpfMHg0NWQ3YTlbXzB4MzJhZGIyKDB4MWZlKV0oXzB4NGQwYzY4KTt9aWYoISghXzB4NDVkN2E5W18weDMyYWRiMigweDFmNCldfHxfMHgzMTQ2M2VbJ2xlbmd0aCddPD0weDEpKXtfMHg0NTdmZWNbJ3Byb3BzJ109XzB4NDVkN2E5O3ZhciBfMHgxYjA4ODU9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4MzE0NjNlfTt0aGlzWydfc2V0Tm9kZUlkJ10oXzB4MWIwODg1LF8weDMxM2I5OCksdGhpc1tfMHgzMmFkYjIoMHgyMGUpXShfMHgxYjA4ODUsXzB4MzEzYjk4KSx0aGlzWydfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZSddKF8weDFiMDg4NSksdGhpc1tfMHgzMmFkYjIoMHgyNzYpXShfMHgxYjA4ODUsXzB4MzEzYjk4KSxfMHgxYjA4ODVbJ2lkJ10rPSdcXFxceDIwZicsXzB4NDU3ZmVjW18weDMyYWRiMigweDIzOCldWyd1bnNoaWZ0J10oXzB4MWIwODg1KTt9fX1bXzB4M2QxZTc3KDB4MjdjKV0oXzB4NGFjZWMzLF8weGJiZDBhZil7fVtfMHgzZDFlNzcoMHgyOTApXShfMHg3MjRkYTYpe31bXzB4M2QxZTc3KDB4MjUwKV0oXzB4OTExZjA2KXt2YXIgXzB4MWI1MmUyPV8weDNkMWU3NztyZXR1cm4gQXJyYXlbJ2lzQXJyYXknXShfMHg5MTFmMDYpfHx0eXBlb2YgXzB4OTExZjA2PT1fMHgxYjUyZTIoMHgyM2UpJiZ0aGlzW18weDFiNTJlMigweDI5NSldKF8weDkxMWYwNik9PT1fMHgxYjUyZTIoMHgxZjIpO31bJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHgyZGU1YTIsXzB4YmMwZmVjKXt9WydfY2xlYW5Ob2RlJ10oXzB4N2I4YmJjKXt2YXIgXzB4Mzk0OTkzPV8weDNkMWU3NztkZWxldGUgXzB4N2I4YmJjW18weDM5NDk5MygweDI1YyldLGRlbGV0ZSBfMHg3YjhiYmNbJ19oYXNTZXRPbkl0c1BhdGgnXSxkZWxldGUgXzB4N2I4YmJjW18weDM5NDk5MygweDJiZSldO31bXzB4M2QxZTc3KDB4MjU1KV0oXzB4MWJiMjM0LF8weDhjOTU3MCl7fVsnX3Byb3BlcnR5QWNjZXNzb3InXShfMHgxMTM2ZTEpe3ZhciBfMHgzYzA0MTI9XzB4M2QxZTc3O3JldHVybiBfMHgxMTM2ZTE/XzB4MTEzNmUxWydtYXRjaCddKHRoaXNbXzB4M2MwNDEyKDB4MmFhKV0pPydbJytfMHgxMTM2ZTErJ10nOl8weDExMzZlMVtfMHgzYzA0MTIoMHgyNmMpXSh0aGlzW18weDNjMDQxMigweDJhNildKT8nLicrXzB4MTEzNmUxOl8weDExMzZlMVtfMHgzYzA0MTIoMHgyNmMpXSh0aGlzW18weDNjMDQxMigweDI0NSldKT8nWycrXzB4MTEzNmUxKyddJzonW1xcXFx4MjcnK18weDExMzZlMSsnXFxcXHgyN10nOicnO319bGV0IF8weDQwNjE5MT1uZXcgXzB4MWRlZmY1KCk7ZnVuY3Rpb24gXzB4MjE1MDViKF8weDJkNGViYyxfMHgxZDY5MzcsXzB4OTM4MTRjLF8weDQyMDhjZSxfMHgzMTk4ZDMsXzB4NDk5MjY3KXt2YXIgXzB4MTY3Y2Y0PV8weDNkMWU3NztsZXQgXzB4NTNhZGNmLF8weDUxMGJmMTt0cnl7XzB4NTEwYmYxPV8weGY4ODYoKSxfMHg1M2FkY2Y9XzB4NGYyOGQ3W18weDFkNjkzN10sIV8weDUzYWRjZnx8XzB4NTEwYmYxLV8weDUzYWRjZlsndHMnXT4weDFmNCYmXzB4NTNhZGNmW18weDE2N2NmNCgweDJiNyldJiZfMHg1M2FkY2ZbJ3RpbWUnXS9fMHg1M2FkY2ZbJ2NvdW50J108MHg2ND8oXzB4NGYyOGQ3W18weDFkNjkzN109XzB4NTNhZGNmPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4NTEwYmYxfSxfMHg0ZjI4ZDdbXzB4MTY3Y2Y0KDB4MjU4KV09e30pOl8weDUxMGJmMS1fMHg0ZjI4ZDdbXzB4MTY3Y2Y0KDB4MjU4KV1bJ3RzJ10+MHgzMiYmXzB4NGYyOGQ3WydoaXRzJ11bXzB4MTY3Y2Y0KDB4MmI3KV0mJl8weDRmMjhkN1snaGl0cyddW18weDE2N2NmNCgweDJjMyldL18weDRmMjhkN1tfMHgxNjdjZjQoMHgyNTgpXVtfMHgxNjdjZjQoMHgyYjcpXTwweDY0JiYoXzB4NGYyOGQ3W18weDE2N2NmNCgweDI1OCldPXt9KTtsZXQgXzB4MTI2NDc3PVtdLF8weDRhMDkxND1fMHg1M2FkY2ZbXzB4MTY3Y2Y0KDB4MWU3KV18fF8weDRmMjhkN1tfMHgxNjdjZjQoMHgyNTgpXVtfMHgxNjdjZjQoMHgxZTcpXT9fMHg0ZDFjMGU6XzB4NDQ5MGEwLF8weDhlMzMyNT1fMHg0ZjM4MTc9Pnt2YXIgXzB4MWQxNTI1PV8weDE2N2NmNDtsZXQgXzB4Mzk5NjZjPXt9O3JldHVybiBfMHgzOTk2NmNbJ3Byb3BzJ109XzB4NGYzODE3W18weDFkMTUyNSgweDIzOCldLF8weDM5OTY2Y1tfMHgxZDE1MjUoMHgyNGMpXT1fMHg0ZjM4MTdbXzB4MWQxNTI1KDB4MjRjKV0sXzB4Mzk5NjZjW18weDFkMTUyNSgweDIwMSldPV8weDRmMzgxN1tfMHgxZDE1MjUoMHgyMDEpXSxfMHgzOTk2NmNbJ3RvdGFsU3RyTGVuZ3RoJ109XzB4NGYzODE3W18weDFkMTUyNSgweDI5ZSldLF8weDM5OTY2Y1tfMHgxZDE1MjUoMHgyMDQpXT1fMHg0ZjM4MTdbXzB4MWQxNTI1KDB4MjA0KV0sXzB4Mzk5NjZjWydhdXRvRXhwYW5kTWF4RGVwdGgnXT1fMHg0ZjM4MTdbJ2F1dG9FeHBhbmRNYXhEZXB0aCddLF8weDM5OTY2Y1tfMHgxZDE1MjUoMHgyMGQpXT0hMHgxLF8weDM5OTY2Y1tfMHgxZDE1MjUoMHgyMGYpXT0hXzB4MjUyZWYxLF8weDM5OTY2Y1snZGVwdGgnXT0weDEsXzB4Mzk5NjZjW18weDFkMTUyNSgweDIyZildPTB4MCxfMHgzOTk2NmNbXzB4MWQxNTI1KDB4MjY5KV09XzB4MWQxNTI1KDB4MjYzKSxfMHgzOTk2NmNbXzB4MWQxNTI1KDB4MjRmKV09J3Jvb3RfZXhwJyxfMHgzOTk2NmNbJ2F1dG9FeHBhbmQnXT0hMHgwLF8weDM5OTY2Y1tfMHgxZDE1MjUoMHgyM2YpXT1bXSxfMHgzOTk2NmNbXzB4MWQxNTI1KDB4MjY4KV09MHgwLF8weDM5OTY2Y1tfMHgxZDE1MjUoMHgyMjgpXT0hMHgwLF8weDM5OTY2Y1tfMHgxZDE1MjUoMHgyNDYpXT0weDAsXzB4Mzk5NjZjW18weDFkMTUyNSgweDI0OCldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDM5OTY2Yzt9O2Zvcih2YXIgXzB4MjVkMmNkPTB4MDtfMHgyNWQyY2Q8XzB4MzE5OGQzW18weDE2N2NmNCgweDFmNCldO18weDI1ZDJjZCsrKV8weDEyNjQ3N1sncHVzaCddKF8weDQwNjE5MVtfMHgxNjdjZjQoMHgxZjkpXSh7J3RpbWVOb2RlJzpfMHgyZDRlYmM9PT1fMHgxNjdjZjQoMHgyYzMpfHx2b2lkIDB4MH0sXzB4MzE5OGQzW18weDI1ZDJjZF0sXzB4OGUzMzI1KF8weDRhMDkxNCkse30pKTtpZihfMHgyZDRlYmM9PT0ndHJhY2UnKXtsZXQgXzB4NWNiZjU3PUVycm9yW18weDE2N2NmNCgweDIxYSldO3RyeXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109MHgxLzB4MCxfMHgxMjY0NzdbXzB4MTY3Y2Y0KDB4MWZlKV0oXzB4NDA2MTkxW18weDE2N2NmNCgweDFmOSldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHgxNjdjZjQoMHgyOTEpXSxfMHg4ZTMzMjUoXzB4NGEwOTE0KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHgxNjdjZjQoMHgyMWEpXT1fMHg1Y2JmNTc7fX1yZXR1cm57J21ldGhvZCc6XzB4MTY3Y2Y0KDB4MjU2KSwndmVyc2lvbic6XzB4MzU3ZjVmLCdhcmdzJzpbeyd0cyc6XzB4OTM4MTRjLCdzZXNzaW9uJzpfMHg0MjA4Y2UsJ2FyZ3MnOl8weDEyNjQ3NywnaWQnOl8weDFkNjkzNywnY29udGV4dCc6XzB4NDk5MjY3fV19O31jYXRjaChfMHg5ZjFiZmQpe3JldHVybnsnbWV0aG9kJzonbG9nJywndmVyc2lvbic6XzB4MzU3ZjVmLCdhcmdzJzpbeyd0cyc6XzB4OTM4MTRjLCdzZXNzaW9uJzpfMHg0MjA4Y2UsJ2FyZ3MnOlt7J3R5cGUnOl8weDE2N2NmNCgweDIxYyksJ2Vycm9yJzpfMHg5ZjFiZmQmJl8weDlmMWJmZFtfMHgxNjdjZjQoMHgyNTMpXX1dLCdpZCc6XzB4MWQ2OTM3LCdjb250ZXh0JzpfMHg0OTkyNjd9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDUzYWRjZiYmXzB4NTEwYmYxKXtsZXQgXzB4M2M5YjM1PV8weGY4ODYoKTtfMHg1M2FkY2ZbXzB4MTY3Y2Y0KDB4MmI3KV0rKyxfMHg1M2FkY2ZbXzB4MTY3Y2Y0KDB4MmMzKV0rPV8weDRiMzA5ZChfMHg1MTBiZjEsXzB4M2M5YjM1KSxfMHg1M2FkY2ZbJ3RzJ109XzB4M2M5YjM1LF8weDRmMjhkN1snaGl0cyddW18weDE2N2NmNCgweDJiNyldKyssXzB4NGYyOGQ3W18weDE2N2NmNCgweDI1OCldW18weDE2N2NmNCgweDJjMyldKz1fMHg0YjMwOWQoXzB4NTEwYmYxLF8weDNjOWIzNSksXzB4NGYyOGQ3W18weDE2N2NmNCgweDI1OCldWyd0cyddPV8weDNjOWIzNSwoXzB4NTNhZGNmW18weDE2N2NmNCgweDJiNyldPjB4MzJ8fF8weDUzYWRjZltfMHgxNjdjZjQoMHgyYzMpXT4weDY0KSYmKF8weDUzYWRjZltfMHgxNjdjZjQoMHgxZTcpXT0hMHgwKSwoXzB4NGYyOGQ3W18weDE2N2NmNCgweDI1OCldW18weDE2N2NmNCgweDJiNyldPjB4M2U4fHxfMHg0ZjI4ZDdbJ2hpdHMnXVsndGltZSddPjB4MTJjKSYmKF8weDRmMjhkN1tfMHgxNjdjZjQoMHgyNTgpXVsncmVkdWNlTGltaXRzJ109ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MzhjZjAyW18weDNkMWU3NygweDJhNyldO30pKGdsb2JhbFRoaXMsXzB4MTA3Zjc2KDB4Mjc5KSwnNjQyNjknLFxcXCIvVXNlcnMvam9zZW1hcmlhLy52c2NvZGUtaW5zaWRlcnMvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0wLjAuMjAyL25vZGVfbW9kdWxlc1xcXCIsXzB4MTA3Zjc2KDB4MmEyKSwnMS4wLjAnLF8weDEwN2Y3NigweDIzMyksXzB4MTA3Zjc2KDB4Mjg4KSxfMHgxMDdmNzYoMHgyMDIpKTtcIik7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCBlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiaW1wb3J0IHtjdXJyZW50RGF5SW5kZXgsIGxhc3RXZWF0aGVyRGF0YSwgc2V0Q3VycmVudERheUluZGV4LCB1cGRhdGVXZWF0aGVyQXBwfSBmcm9tICcuLi93ZWF0aGVyQXBwJztcblxuLyoqXG4gKiBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBuZXh0IGFycm93XG4gKiBQYXNzIHRvIHRoZSBuZXh0IGRheSBpZiBpcyB0aGUgbGFzdCBnbyB0byB0aGUgZmlyc3RcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTmV4dEFycm93RXZlbnQoKSB7XG4gIGNvbnN0IG5leHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0X19hcnJvdycpO1xuICBuZXh0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGFGb3JlQ2FzdCA9IGxhc3RXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBuZXh0RGF5SW5kZXggPSBjdXJyZW50RGF5SW5kZXggKyAxID49IHdlYXRoZXJEYXRhRm9yZUNhc3QubGVuZ3RoID8gMCA6IGN1cnJlbnREYXlJbmRleCArIDE7XG4gICAgc2V0Q3VycmVudERheUluZGV4KG5leHREYXlJbmRleCk7XG4gICAgdXBkYXRlV2VhdGhlckFwcCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwcmV2IGFycm93XG4gKiBQYXNzIHRvIHRoZSBuZXh0IGRheSBpZiBpcyB0aGUgbGFzdCBnbyB0byB0aGUgZmlyc3RcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJldkFycm93RXZlbnQoKSB7XG4gIGNvbnN0IG5leHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2X19hcnJvdycpO1xuICBuZXh0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGFGb3JlQ2FzdCA9IGxhc3RXZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBuZXh0RGF5SW5kZXggPSBjdXJyZW50RGF5SW5kZXggLSAxIDwgMCA/IHdlYXRoZXJEYXRhRm9yZUNhc3QubGVuZ3RoLTEgOiBjdXJyZW50RGF5SW5kZXggLSAxO1xuICAgIHNldEN1cnJlbnREYXlJbmRleChuZXh0RGF5SW5kZXgpO1xuICAgIHVwZGF0ZVdlYXRoZXJBcHAoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmV4dEFycm93RXZlbnQsIGNyZWF0ZVByZXZBcnJvd0V2ZW50fTtcbiIsImltcG9ydCB7dXNpbmdGYWhyZW5oZWl0fSBmcm9tICcuLi93ZWF0aGVyQXBwJztcblxuLy8gSW1wb3J0IGFsbCB0aGUgd2VhdGhlciBpY29uc1xuaW1wb3J0IHN1bm55SW1nIGZyb20gJy4vaW1nL3N1bm55LnBuZyc7XG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5SW1nIGZyb20gJy4vaW1nL3BhcnRseS1jbG91ZHktZGF5LnBuZyc7XG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gJy4vaW1nL2Nsb3VkeS5wbmcnO1xuaW1wb3J0IG92ZXJjYXN0SW1nIGZyb20gJy4vaW1nL292ZXJjYXN0LnBuZyc7XG5pbXBvcnQgbWlzdEltZyBmcm9tICcuL2ltZy9taXN0LnBuZyc7XG5pbXBvcnQgcmFpbkltZyBmcm9tICcuL2ltZy9yYWluLnBuZyc7XG5pbXBvcnQgc25vd0ltZyBmcm9tICcuL2ltZy9zbm93LnBuZyc7XG5pbXBvcnQgc2xlZXRJbWcgZnJvbSAnLi9pbWcvc2xlZXQucG5nJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1JbWcgZnJvbSAnLi9pbWcvdGh1bmRlcnN0b3JtLnBuZyc7XG5pbXBvcnQgd2luZEltZyBmcm9tICcuL2ltZy93aW5kLnBuZyc7XG5cbi8qKlxuICogUHJpbnQgdGhlIHdlYXRoZXIgc2xpZGVyXG4gKiBZb3UgY2FuIHNjcm9sbCB0aHJvdWdoIGFsbCB0aGUgc2xpZGVzIG9mIHRoZSBkYXlzXG4gKiBAcGFyYW0ge09iamVjdH0gZGF5XG4gKi9cbmZ1bmN0aW9uIHByaW50V2VhdGhlclNsaWRlcihkYXkpIHtcbiAgY29uc3Qgd2VhdGhlckljb25EYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fc2xpZGVyX19pbmZvcm1hdGlvbl9faW1nJyk7XG4gIGNvbnN0IHdlYXRoZXJUaXRsZURheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyX19zbGlkZXJfX2luZm9ybWF0aW9uX190aXRsZScpO1xuICBjb25zdCB3aW5kVmFsdWVEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZF9fdmFsdWVfX2RhdGEnKTtcbiAgY29uc3QgdGVtcFZhbHVlRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBfX2RhdGFfX3ZhbHVlJyk7XG4gIGNvbnN0IGh1bWlkaXR5VmFsdWVEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX2RhdGFfX3ZhbHVlJyk7XG5cbiAgd2VhdGhlckljb25EYXkuc3JjID0gZ2V0V2VhdGhlckljb24oZGF5LmNvbmRpdGlvbi5jb2RlKTtcbiAgd2VhdGhlclRpdGxlRGF5LmlubmVySFRNTCA9IGRheS5jb25kaXRpb24udGV4dDtcbiAgd2luZFZhbHVlRGF5LnRleHRDb250ZW50ID0gZGF5LmF2Z3Zpc19rbTtcbiAgdGVtcFZhbHVlRGF5LnRleHRDb250ZW50ID0gdXNpbmdGYWhyZW5oZWl0ID8gTWF0aC5yb3VuZChkYXkuYXZndGVtcF9mKSA6IE1hdGgucm91bmQoZGF5LmF2Z3RlbXBfYyk7XG4gIGh1bWlkaXR5VmFsdWVEYXkudGV4dENvbnRlbnQgPSBkYXkuYXZnaHVtaWRpdHk7XG59XG5cbi8qKlxuICogQ29udmVydCB0aGUgY29kZSBvZiB0aGUgd2VhdGhlciB0byB0aGUgaWNvblxuICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVcbiAqIEByZXR1cm4ge1N0cmluZ30gaWNvblxuICovXG5mdW5jdGlvbiBnZXRXZWF0aGVySWNvbihjb2RlKSB7XG4gIGxldCBpbWc7XG4gIGlmIChjb2RlID09IDEwMDApIHtcbiAgICBpbWcgPSBzdW5ueUltZztcbiAgfSBlbHNlIGlmIChjb2RlID09IDEwMDMpIHtcbiAgICBpbWcgPSBwYXJ0bHlDbG91ZHlEYXlJbWc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMDA2KSB7XG4gICAgaW1nID0gY2xvdWR5SW1nO1xuICB9IGVsc2UgaWYgKGNvZGUgPT0gMTAwOSkge1xuICAgIGltZyA9IG92ZXJjYXN0SW1nO1xuICB9IGVsc2UgaWYgKGNvZGUgPT0gMTAzMCB8fCBjb2RlID09IDExMzUgfHwgY29kZSA9PSAxMTQ3KSB7IC8vIEFsbCB0aGUgbWlzdCBjb2Rlc1xuICAgIGltZyA9IG1pc3RJbWc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMDYzIHx8XG4gICAgY29kZSA9PSAxMDcyIHx8XG4gICAgY29kZSA9PSAxMTUwIHx8XG4gICAgY29kZSA9PSAxMTUzIHx8XG4gICAgY29kZSA9PSAxMTgwIHx8XG4gICAgY29kZSA9PSAxMTgzIHx8XG4gICAgY29kZSA9PSAxMTg2IHx8XG4gICAgY29kZSA9PSAxMTg5IHx8XG4gICAgY29kZSA9PSAxMTkyIHx8XG4gICAgY29kZSA9PSAxMTk1IHx8XG4gICAgY29kZSA9PSAxMjQwIHx8XG4gICAgY29kZSA9PSAxMjQzIHx8XG4gICAgY29kZSA9PSAxMjQ2KSB7IC8vIEFsbCB0aGUgcmFpbiBjb2Rlc1xuICAgIGltZyA9IHJhaW5JbWc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMDY2IHx8XG4gICAgY29kZSA9PSAxMjEwIHx8XG4gICAgY29kZSA9PSAxMjEzIHx8XG4gICAgY29kZSA9PSAxMjE2IHx8XG4gICAgY29kZSA9PSAxMjE5IHx8XG4gICAgY29kZSA9PSAxMjIyIHx8XG4gICAgY29kZSA9PSAxMjI1IHx8XG4gICAgY29kZSA9PSAxMjM3IHx8XG4gICAgY29kZSA9PSAxMjU1IHx8XG4gICAgY29kZSA9PSAxMjU4IHx8XG4gICAgY29kZSA9PSAxMjYxIHx8XG4gICAgY29kZSA9PSAxMjY0KSB7IC8vIEFsbCB0aGUgc25vdyBjb2Rlc1xuICAgIGltZyA9IHNub3dJbWc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMDY5IHx8XG4gICAgY29kZSA9PSAxMTE0IHx8XG4gICAgY29kZSA9PSAxMTY4IHx8XG4gICAgY29kZSA9PSAxMTcxIHx8XG4gICAgY29kZSA9PSAxMTk4IHx8XG4gICAgY29kZSA9PSAxMjAxIHx8XG4gICAgY29kZSA9PSAxMjA0IHx8XG4gICAgY29kZSA9PSAxMjA3IHx8XG4gICAgY29kZSA9PSAxMjQ5IHx8XG4gICAgY29kZSA9PSAxMjUyKSB7IC8vIEFsbCB0aGUgc2xlZXQgY29kZXNcbiAgICBpbWcgPSBzbGVldEltZztcbiAgfSBlbHNlIGlmIChjb2RlID09IDEwODcgfHxcbiAgICBjb2RlID09IDEyNzMgfHxcbiAgICBjb2RlID09IDEyNzYgfHxcbiAgICBjb2RlID09IDEyNzkgfHxcbiAgICBjb2RlID09IDEyODIpIHsgLy8gQWxsIHRoZSB0aHVuZGVyc3Rvcm0gY29kZXNcbiAgICBpbWcgPSB0aHVuZGVyc3Rvcm1JbWc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PSAxMTE3KSB7IC8vIEFsbCB0aGUgd2luZCBjb2Rlc1xuICAgIGltZyA9IHdpbmRJbWc7XG4gIH1cbiAgcmV0dXJuIGltZztcbn1cblxuZXhwb3J0IHtwcmludFdlYXRoZXJTbGlkZXIsIGdldFdlYXRoZXJJY29ufTtcbiIsImltcG9ydCAnLi9jc3MvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2hlYWRlci5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9sb2FkaW5nLmNzcyc7XG5pbXBvcnQgJy4vY3NzL3NsaWRlci5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9ob3VybHlTbGlkZXIuY3NzJztcbmltcG9ydCAnLi9jc3Mvc2VhcmNoLmNzcyc7XG5pbXBvcnQge3ByaW50V2VhdGhlckFwcH0gZnJvbSAnLi9hc3NldHMvd2VhdGhlckFwcC93ZWF0aGVyQXBwJztcbmltcG9ydCBsb2FkaW5nU3ZnIGZyb20gJy4vaW1nL2xvYWRpbmcuc3ZnJztcbmltcG9ydCBjcmVhdGVTZWFyY2hFdmVudCBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyQXBwL3NlYXJjaEJveC9zZWFyY2hCb3gnO1xuaW1wb3J0IGNyZWF0ZUZhaHJlbmhlaXRFdmVudExpc3RlbmVycyBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyQXBwL2ZhaHJlbmhlaXRDaGVjay9mYWhyZW5oZWl0Q2hlY2snO1xuaW1wb3J0IHtjcmVhdGVOZXh0QXJyb3dFdmVudCwgY3JlYXRlUHJldkFycm93RXZlbnR9IGZyb20gJy4vYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlclNsaWRlci9zbGlkZXJBcnJvd3MnO1xuXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIG1haW4gZnVuY3Rpb24gb2YgdGhlIGFwcGxpY2F0aW9uXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBzZXRMb2FkaW5nSW1nKCk7IC8vIEFkZCB0aGUgbG9hZGluZyBpbWFnZSB0byB0aGUgRE9NXG4gIHByaW50V2VhdGhlckFwcCgpOyAvLyBQcmludCBhbGwgdGhlIHdlYXRoZXIgYXBwXG5cbiAgLy8gRXZlbnQgbGlzdGVuZXJzXG4gIGNyZWF0ZVNlYXJjaEV2ZW50KCk7IC8vIENyZWF0ZSB0aGUgc2VhcmNoIGV2ZW50XG4gIGNyZWF0ZUZhaHJlbmhlaXRFdmVudExpc3RlbmVycygpOyAvLyBDcmVhdGUgdGhlIGZhaHJlbmhlaXQgZXZlbnQgbGlzdGVuZXJzXG4gIGNyZWF0ZU5leHRBcnJvd0V2ZW50KCk7IC8vIENyZWF0ZSB0aGUgbmV4dCBhcnJvdyBldmVudFxuICBjcmVhdGVQcmV2QXJyb3dFdmVudCgpOyAvLyBDcmVhdGUgdGhlIHByZXYgYXJyb3cgZXZlbnRcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGxvYWRpbmcgaW1hZ2UgdG8gdGhlIERPTVxuICovXG5mdW5jdGlvbiBzZXRMb2FkaW5nSW1nKCkge1xuICBjb25zdCBsb2FkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKTtcbiAgY29uc3QgbG9hZGluZ0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsb2FkaW5nSW1nLnNyYyA9IGxvYWRpbmdTdmc7XG4gIGxvYWRpbmdJbWcuYWx0ID0gJ0xvYWRpbmcuLi4nO1xuICBsb2FkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRpbmdJbWcpO1xufVxuXG5pbml0KCk7IC8vIENhbGxpbmcgdGhlIG1haW4gZnVuY3Rpb25cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==