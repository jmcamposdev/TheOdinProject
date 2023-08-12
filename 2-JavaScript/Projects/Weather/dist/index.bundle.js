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
}

body {
  background: rgb(236,242,255);
  background: linear-gradient(160deg, rgba(236,242,255,1) 0%, rgba(255,255,255,1) 100%);
}
`, "",{"version":3,"sources":["webpack://./src/css/global.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,4BAA4B;EAC5B,qFAAqF;AACvF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;600;700&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Noto Sans JP\", sans-serif;\n}\n\nbody {\n  background: rgb(236,242,255);\n  background: linear-gradient(160deg, rgba(236,242,255,1) 0%, rgba(255,255,255,1) 100%);\n}\n"],"sourceRoot":""}]);
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
  padding: 30px 15px 20px 15px;
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
`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;;AAEA;;kDAEkD;;AAElD;;;EAGE,iBAAiB;AACnB;AACA,2CAA2C;AAC3C;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA,oBAAoB;AACpB;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":[".header {\n  display: flex;\n  align-items: center;\n  padding: 30px 15px 20px 15px;\n}\n\n.header__city__container {\n  flex: 1;\n}\n\n.header__city__name {\n  display: flex;\n  flex-direction: column;\n}\n.header__city__name__date {\n  color: #a8b1dd;\n  font-size: 14px;\n}\n\n.header__city__name__city {\n  color: #494173;\n}\n\n.header__city__tmpToggle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__city__tmpToggle__text {\n  font-weight: 700;\n  font-size: 19px;\n}\n.switch {\n  transform: rotate(270deg);\n}\n\n/* ---------------------------------------------\n    Switch Style\n   --------------------------------------------- */\n\n.switch,\n.switch input,\n.switch .slider {\n  user-select: none;\n}\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #494173;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #494173;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/css/loading.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,4BAA4B;EAC5B,qFAAqF;AACvF","sourcesContent":[".loading {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  background: rgb(236,242,255);\n  background: linear-gradient(160deg, rgba(236,242,255,1) 0%, rgba(255,255,255,1) 100%);\n}"],"sourceRoot":""}]);
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
/**
 * Return the weather for the given location
 * Use the weatherapi.com API
 * @see https://www.weatherapi.com/docs/
 * @see https://www.weatherapi.com/api-explorer.aspx
 * @param {string} location
 * return {object} weather
 */
async function getWeatherData(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${"098a63f78d284c26b39202357230908"}&q=${location}&days=3&aqi=yes&alerts=no`);
  const data = await response.json();
  return data;
}


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
/**
 * Print in the Header the Date and the City
 * @param {Object} location
 */
function printHeaderData(location) {
  // Getting DOM Elements
  const nameCityElement = document.querySelector('.header__city__name__city');
  const textDayElement =
  document.querySelector('.header__city__name__date__textDay');
  const numberDayElement =
  document.querySelector('.header__city__name__date__numberDay');
  const monthElement =
  document.querySelector('.header__city__name__date__textMonth');
  // Setting the content
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(location.localtime);

  nameCityElement.textContent = location.name; // City Name
  textDayElement.textContent = days[date.getDay()]; // Day of the Week
  numberDayElement.textContent = date.getDate(); // Day of the Month
  monthElement.textContent = date.toLocaleString('en-us', {month: 'long'}); // Month
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printHeaderData);


/***/ }),

/***/ "./src/assets/weatherApp/weatherApp.js":
/*!*********************************************!*\
  !*** ./src/assets/weatherApp/weatherApp.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apiCalls/apiCalls */ "./src/assets/apiCalls/apiCalls.js");
/* harmony import */ var _headerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerData */ "./src/assets/weatherApp/headerData.js");



const location = 'Málaga';

/**
 * Print all the weather app
 * Slides the weather app in and out
 */
async function printWeatherApp() {
  const weatherData = await (0,_apiCalls_apiCalls__WEBPACK_IMPORTED_MODULE_0__["default"])(location);

  if (weatherData.error) {
    /* eslint-disable */console.log(...oo_oo(`ab9cafb7_0`,weatherData.error));
    return;
  }

  (0,_headerData__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData.location);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printWeatherApp);
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x230995=_0x413f;(function(_0x1f53c0,_0x363b1b){var _0x271a83=_0x413f,_0x5e0775=_0x1f53c0();while(!![]){try{var _0x242b40=-parseInt(_0x271a83(0x1e6))/0x1+-parseInt(_0x271a83(0x1b8))/0x2+-parseInt(_0x271a83(0x1cc))/0x3+parseInt(_0x271a83(0x1e5))/0x4*(-parseInt(_0x271a83(0x21d))/0x5)+-parseInt(_0x271a83(0x195))/0x6*(-parseInt(_0x271a83(0x241))/0x7)+-parseInt(_0x271a83(0x255))/0x8*(-parseInt(_0x271a83(0x239))/0x9)+parseInt(_0x271a83(0x1e7))/0xa*(parseInt(_0x271a83(0x279))/0xb);if(_0x242b40===_0x363b1b)break;else _0x5e0775['push'](_0x5e0775['shift']());}catch(_0x5d3cc1){_0x5e0775['push'](_0x5e0775['shift']());}}}(_0x27f0,0xea6b5));var ue=Object['create'],te=Object['defineProperty'],he=Object['getOwnPropertyDescriptor'],le=Object[_0x230995(0x20e)],fe=Object[_0x230995(0x216)],_e=Object['prototype'][_0x230995(0x230)],pe=(_0x34e0bb,_0x407d23,_0x32de25,_0x36c36a)=>{var _0xc36700=_0x230995;if(_0x407d23&&typeof _0x407d23==_0xc36700(0x258)||typeof _0x407d23==_0xc36700(0x1ed)){for(let _0x2d5904 of le(_0x407d23))!_e[_0xc36700(0x1a4)](_0x34e0bb,_0x2d5904)&&_0x2d5904!==_0x32de25&&te(_0x34e0bb,_0x2d5904,{'get':()=>_0x407d23[_0x2d5904],'enumerable':!(_0x36c36a=he(_0x407d23,_0x2d5904))||_0x36c36a[_0xc36700(0x23b)]});}return _0x34e0bb;},ne=(_0x35597d,_0x381cf4,_0x1f7ce0)=>(_0x1f7ce0=_0x35597d!=null?ue(fe(_0x35597d)):{},pe(_0x381cf4||!_0x35597d||!_0x35597d[_0x230995(0x1a6)]?te(_0x1f7ce0,_0x230995(0x202),{'value':_0x35597d,'enumerable':!0x0}):_0x1f7ce0,_0x35597d)),Q=class{constructor(_0x2fc440,_0x152ce7,_0x422a6b,_0x203d2c){var _0x2f1720=_0x230995;this[_0x2f1720(0x206)]=_0x2fc440,this[_0x2f1720(0x214)]=_0x152ce7,this[_0x2f1720(0x1b1)]=_0x422a6b,this['nodeModules']=_0x203d2c,this[_0x2f1720(0x215)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x2f1720(0x203)]=!0x1,this['_connecting']=!0x1,this[_0x2f1720(0x1f9)]=!!this[_0x2f1720(0x206)][_0x2f1720(0x1ee)],this[_0x2f1720(0x234)]=null,this[_0x2f1720(0x225)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x2f1720(0x272)]=_0x2f1720(0x1df),this[_0x2f1720(0x1a9)]=(this[_0x2f1720(0x1f9)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this['_webSocketErrorDocsLink'];}async[_0x230995(0x260)](){var _0x2f9c83=_0x230995;if(this['_WebSocketClass'])return this[_0x2f9c83(0x234)];let _0x5431b1;if(this[_0x2f9c83(0x1f9)])_0x5431b1=this[_0x2f9c83(0x206)]['WebSocket'];else{if(this[_0x2f9c83(0x206)][_0x2f9c83(0x240)]?.[_0x2f9c83(0x20b)])_0x5431b1=this[_0x2f9c83(0x206)]['process']?.[_0x2f9c83(0x20b)];else try{let _0x353acb=await import(_0x2f9c83(0x250));_0x5431b1=(await import((await import('url'))[_0x2f9c83(0x24e)](_0x353acb[_0x2f9c83(0x22d)](this[_0x2f9c83(0x22b)],'ws/index.js'))[_0x2f9c83(0x1ad)]()))[_0x2f9c83(0x202)];}catch{try{_0x5431b1=require(require(_0x2f9c83(0x250))[_0x2f9c83(0x22d)](this[_0x2f9c83(0x22b)],'ws'));}catch{throw new Error(_0x2f9c83(0x223));}}}return this[_0x2f9c83(0x234)]=_0x5431b1,_0x5431b1;}[_0x230995(0x262)](){var _0x445a91=_0x230995;this[_0x445a91(0x1a8)]||this[_0x445a91(0x203)]||this['_connectAttemptCount']>=this[_0x445a91(0x265)]||(this[_0x445a91(0x1e2)]=!0x1,this[_0x445a91(0x1a8)]=!0x0,this[_0x445a91(0x225)]++,this['_ws']=new Promise((_0xb961,_0x2e1eea)=>{var _0x30026b=_0x445a91;this[_0x30026b(0x260)]()['then'](_0x442a1c=>{var _0xec58ba=_0x30026b;let _0x224a4d=new _0x442a1c(_0xec58ba(0x26a)+this[_0xec58ba(0x214)]+':'+this[_0xec58ba(0x1b1)]);_0x224a4d[_0xec58ba(0x244)]=()=>{var _0x5263ab=_0xec58ba;this[_0x5263ab(0x215)]=!0x1,this[_0x5263ab(0x26e)](_0x224a4d),this[_0x5263ab(0x222)](),_0x2e1eea(new Error(_0x5263ab(0x20d)));},_0x224a4d[_0xec58ba(0x261)]=()=>{var _0x39a044=_0xec58ba;this['_inBrowser']||_0x224a4d[_0x39a044(0x20f)]&&_0x224a4d[_0x39a044(0x20f)][_0x39a044(0x1d1)]&&_0x224a4d[_0x39a044(0x20f)][_0x39a044(0x1d1)](),_0xb961(_0x224a4d);},_0x224a4d[_0xec58ba(0x1c5)]=()=>{this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x224a4d),this['_attemptToReconnectShortly']();},_0x224a4d['onmessage']=_0xec4b43=>{var _0x5e86e2=_0xec58ba;try{_0xec4b43&&_0xec4b43[_0x5e86e2(0x1f1)]&&this[_0x5e86e2(0x1f9)]&&JSON['parse'](_0xec4b43[_0x5e86e2(0x1f1)])['method']===_0x5e86e2(0x1d6)&&this[_0x5e86e2(0x206)]['location'][_0x5e86e2(0x1d6)]();}catch{}};})[_0x30026b(0x205)](_0xee9741=>(this[_0x30026b(0x203)]=!0x0,this['_connecting']=!0x1,this[_0x30026b(0x1e2)]=!0x1,this[_0x30026b(0x215)]=!0x0,this[_0x30026b(0x225)]=0x0,_0xee9741))[_0x30026b(0x249)](_0x186c06=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x30026b(0x1be)](_0x30026b(0x224)+this['_webSocketErrorDocsLink']),_0x2e1eea(new Error(_0x30026b(0x228)+(_0x186c06&&_0x186c06[_0x30026b(0x1bb)])))));}));}['_disposeWebsocket'](_0x210e3d){var _0x40e4e4=_0x230995;this[_0x40e4e4(0x203)]=!0x1,this[_0x40e4e4(0x1a8)]=!0x1;try{_0x210e3d[_0x40e4e4(0x1c5)]=null,_0x210e3d[_0x40e4e4(0x244)]=null,_0x210e3d[_0x40e4e4(0x261)]=null;}catch{}try{_0x210e3d[_0x40e4e4(0x1b7)]<0x2&&_0x210e3d[_0x40e4e4(0x22a)]();}catch{}}[_0x230995(0x222)](){var _0x130709=_0x230995;clearTimeout(this[_0x130709(0x1de)]),!(this['_connectAttemptCount']>=this[_0x130709(0x265)])&&(this[_0x130709(0x1de)]=setTimeout(()=>{var _0x1e2424=_0x130709;this[_0x1e2424(0x203)]||this[_0x1e2424(0x1a8)]||(this[_0x1e2424(0x262)](),this[_0x1e2424(0x1d3)]?.[_0x1e2424(0x249)](()=>this[_0x1e2424(0x222)]()));},0x1f4),this[_0x130709(0x1de)][_0x130709(0x1d1)]&&this['_reconnectTimeout'][_0x130709(0x1d1)]());}async[_0x230995(0x1d4)](_0x3aa910){var _0x46d315=_0x230995;try{if(!this['_allowedToSend'])return;this['_allowedToConnectOnSend']&&this[_0x46d315(0x262)](),(await this['_ws'])[_0x46d315(0x1d4)](JSON[_0x46d315(0x22e)](_0x3aa910));}catch(_0x5a1732){console['warn'](this[_0x46d315(0x1a9)]+':\\x20'+(_0x5a1732&&_0x5a1732['message'])),this[_0x46d315(0x215)]=!0x1,this['_attemptToReconnectShortly']();}}};function _0x27f0(){var _0x5b2a13=['\\x20server','_quotedRegExp','stackTraceLimit','serialize','capped','getter','default','_connected','bind','then','global','props','set','_numberRegExp','perf_hooks','_WebSocket','reduceLimits','logger\\x20websocket\\x20error','getOwnPropertyNames','_socket','current','strLength','_setNodeExpandableState','performance','host','_allowedToSend','getPrototypeOf','valueOf','unshift','_p_length','autoExpandPreviousObjects','expId','_getOwnPropertyDescriptor','20YCSEOI','_addFunctionsNode','index','negativeInfinity','_consoleNinjaAllowedToStart','_attemptToReconnectShortly','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_connectAttemptCount','_console_ninja','name','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','concat','close','nodeModules','64269','join','stringify','toLowerCase','hasOwnProperty','count','cappedElements','get','_WebSocketClass','_isUndefined','','_isPrimitiveWrapperType',':logPointId:','89253UlUoaD','value','enumerable','_objectToString','autoExpand','NEGATIVE_INFINITY','log','process','7113274ERjvjf','constructor','_isMap','onerror','autoExpandLimit','_setNodeQueryPath','1.0.0','_addLoadNode','catch','date','nuxt','_setNodeLabel','_blacklistedProperty','pathToFileURL','...','path','match','_Symbol','_hasSymbolPropertyOnItsPath','astro','568PZEtyV','funcName','POSITIVE_INFINITY','object','127.0.0.1','_additionalMetadata','length','_undefined','_addObjectProperty','_getOwnPropertySymbols','_addProperty','getWebSocketClass','onopen','_connectToHostNow','String','time','_maxConnectAttemptCount','_cleanNode','versions',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"MacBook-Pro-de-Jose.local\",\"192.168.1.131\"],'sort','ws://','node','autoExpandMaxDepth','_capIfString','_disposeWebsocket','[object\\x20Array]','_p_name','location','_webSocketErrorDocsLink','_propertyAccessor','unknown','disabledLog','_type','Error','type','52262573rMGqJe','6UviXjg','trace','Symbol','test','depth','_treeNodePropertiesBeforeFullValue','_getOwnPropertyNames','RegExp','_hasSetOnItsPath','substr','number','string','getOwnPropertySymbols','_HTMLAllCollection','level','call','_setNodeExpressionPath','__es'+'Module','_keyStrRegExp','_connecting','_sendErrorMessage','elapsed','bigint','prototype','toString','Map','isExpressionToEvaluate','autoExpandPropertyCount','port','webpack','isArray','negativeZero','_property','_treeNodePropertiesAfterFullValue','readyState','3169520sYdYbg','[object\\x20Date]','root_exp','message','_setNodeId','slice','warn','_isPrimitiveType','resolveGetters','elements','allStrLength','array','_processTreeNodeResult','onclose','_sortProps','root_exp_id','\\x20browser','timeEnd','null','error','5712039AsmlQc','_dateToString','noFunctions','timeStamp','_setNodePermissions','unref','push','_ws','send','replace','reload','_propertyName','HTMLAllCollection','forEach','parent','_isNegativeZero',\"/Users/josemaria/.vscode-insiders/extensions/wallabyjs.console-ninja-0.0.198/node_modules\",'console','_reconnectTimeout','https://tinyurl.com/37x8b79t','expressionsToEvaluate','_p_','_allowedToConnectOnSend','stack','hits','1763844ETMsjQ','258634ahPWFF','10ZNfnjf','Set','sortProps','hrtime','symbol','setter','function','WebSocket','cappedProps','totalStrLength','data','indexOf','now','Number','split','_regExpToString','Buffer','undefined','_inBrowser','[object\\x20BigInt]','_console_ninja_session'];_0x27f0=function(){return _0x5b2a13;};return _0x27f0();}function V(_0x5a496d,_0x1774b1,_0x54bccd,_0x17077b,_0x341dd6){var _0x3d6393=_0x230995;let _0x2a1b16=_0x54bccd[_0x3d6393(0x1f5)](',')['map'](_0x27d9a1=>{var _0x511af5=_0x3d6393;try{_0x5a496d[_0x511af5(0x1fb)]||((_0x341dd6==='next.js'||_0x341dd6==='remix'||_0x341dd6===_0x511af5(0x254))&&(_0x341dd6+=_0x5a496d['process']?.[_0x511af5(0x267)]?.[_0x511af5(0x26b)]?_0x511af5(0x1fc):_0x511af5(0x1c8)),_0x5a496d[_0x511af5(0x1fb)]={'id':+new Date(),'tool':_0x341dd6});let _0xb6e3b4=new Q(_0x5a496d,_0x1774b1,_0x27d9a1,_0x17077b);return _0xb6e3b4[_0x511af5(0x1d4)][_0x511af5(0x204)](_0xb6e3b4);}catch(_0x390d9a){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x390d9a&&_0x390d9a[_0x511af5(0x1bb)]),()=>{};}});return _0x395388=>_0x2a1b16[_0x3d6393(0x1d9)](_0x232e5c=>_0x232e5c(_0x395388));}function _0x413f(_0x7e1ead,_0x1f5c6e){var _0x27f084=_0x27f0();return _0x413f=function(_0x413f9c,_0x31d98d){_0x413f9c=_0x413f9c-0x195;var _0x259898=_0x27f084[_0x413f9c];return _0x259898;},_0x413f(_0x7e1ead,_0x1f5c6e);}function H(_0x54448a){var _0x4a0456=_0x230995;let _0x1a56b8=function(_0x48661a,_0x3d5762){return _0x3d5762-_0x48661a;},_0x3dfde6;if(_0x54448a[_0x4a0456(0x213)])_0x3dfde6=function(){var _0x358eba=_0x4a0456;return _0x54448a[_0x358eba(0x213)]['now']();};else{if(_0x54448a['process']&&_0x54448a[_0x4a0456(0x240)][_0x4a0456(0x1ea)])_0x3dfde6=function(){var _0x986177=_0x4a0456;return _0x54448a['process'][_0x986177(0x1ea)]();},_0x1a56b8=function(_0x48fe9d,_0xe327c4){return 0x3e8*(_0xe327c4[0x0]-_0x48fe9d[0x0])+(_0xe327c4[0x1]-_0x48fe9d[0x1])/0xf4240;};else try{let {performance:_0xf004a2}=require(_0x4a0456(0x20a));_0x3dfde6=function(){var _0x13230e=_0x4a0456;return _0xf004a2[_0x13230e(0x1f3)]();};}catch{_0x3dfde6=function(){return+new Date();};}}return{'elapsed':_0x1a56b8,'timeStamp':_0x3dfde6,'now':()=>Date[_0x4a0456(0x1f3)]()};}function X(_0x4916dd,_0x33499d,_0x3d4aba){var _0x5a279d=_0x230995;if(_0x4916dd['_consoleNinjaAllowedToStart']!==void 0x0)return _0x4916dd[_0x5a279d(0x221)];let _0x5286d7=_0x4916dd[_0x5a279d(0x240)]?.[_0x5a279d(0x267)]?.[_0x5a279d(0x26b)];return _0x5286d7&&_0x3d4aba===_0x5a279d(0x24b)?_0x4916dd[_0x5a279d(0x221)]=!0x1:_0x4916dd[_0x5a279d(0x221)]=_0x5286d7||!_0x33499d||_0x4916dd[_0x5a279d(0x271)]?.['hostname']&&_0x33499d['includes'](_0x4916dd[_0x5a279d(0x271)]['hostname']),_0x4916dd[_0x5a279d(0x221)];}((_0x1aecc1,_0x169db0,_0x3f784f,_0x505869,_0x5aee63,_0x94cf8c,_0x49c8c5,_0x58a732,_0x290895)=>{var _0x455271=_0x230995;if(_0x1aecc1['_console_ninja'])return _0x1aecc1[_0x455271(0x226)];if(!X(_0x1aecc1,_0x58a732,_0x5aee63))return _0x1aecc1[_0x455271(0x226)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1aecc1['_console_ninja'];let _0x589ff4={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x393c70={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x21ece9=H(_0x1aecc1),_0x1b1c3a=_0x21ece9[_0x455271(0x1aa)],_0x2cb31d=_0x21ece9[_0x455271(0x1cf)],_0x3a9a2f=_0x21ece9[_0x455271(0x1f3)],_0x18be6e={'hits':{},'ts':{}},_0x149d0a=_0x39378a=>{_0x18be6e['ts'][_0x39378a]=_0x2cb31d();},_0x44d8cc=(_0x1e7bc8,_0x2d62f4)=>{var _0x5c1ab3=_0x455271;let _0x2d70ae=_0x18be6e['ts'][_0x2d62f4];if(delete _0x18be6e['ts'][_0x2d62f4],_0x2d70ae){let _0x16c176=_0x1b1c3a(_0x2d70ae,_0x2cb31d());_0x1287e4(_0x1898be(_0x5c1ab3(0x264),_0x1e7bc8,_0x3a9a2f(),_0x57c957,[_0x16c176],_0x2d62f4));}},_0x3d6344=_0x427069=>_0x157010=>{var _0x504ff1=_0x455271;try{_0x149d0a(_0x157010),_0x427069(_0x157010);}finally{_0x1aecc1[_0x504ff1(0x1dd)][_0x504ff1(0x264)]=_0x427069;}},_0x3d5a50=_0x2d385b=>_0x28da9=>{var _0x5d3086=_0x455271;try{let [_0x3d3205,_0x440517]=_0x28da9[_0x5d3086(0x1f5)](_0x5d3086(0x238));_0x44d8cc(_0x440517,_0x3d3205),_0x2d385b(_0x3d3205);}finally{_0x1aecc1[_0x5d3086(0x1dd)][_0x5d3086(0x1c9)]=_0x2d385b;}};_0x1aecc1[_0x455271(0x226)]={'consoleLog':(_0x528632,_0x3b4a40)=>{var _0x33e13d=_0x455271;_0x1aecc1[_0x33e13d(0x1dd)][_0x33e13d(0x23f)][_0x33e13d(0x227)]!==_0x33e13d(0x275)&&_0x1287e4(_0x1898be(_0x33e13d(0x23f),_0x528632,_0x3a9a2f(),_0x57c957,_0x3b4a40));},'consoleTrace':(_0x1215b3,_0x349603)=>{var _0x4906aa=_0x455271;_0x1aecc1[_0x4906aa(0x1dd)][_0x4906aa(0x23f)]['name']!=='disabledTrace'&&_0x1287e4(_0x1898be(_0x4906aa(0x196),_0x1215b3,_0x3a9a2f(),_0x57c957,_0x349603));},'consoleTime':()=>{var _0x202526=_0x455271;_0x1aecc1[_0x202526(0x1dd)][_0x202526(0x264)]=_0x3d6344(_0x1aecc1[_0x202526(0x1dd)]['time']);},'consoleTimeEnd':()=>{var _0x3f791b=_0x455271;_0x1aecc1['console'][_0x3f791b(0x1c9)]=_0x3d5a50(_0x1aecc1['console'][_0x3f791b(0x1c9)]);},'autoLog':(_0x5ed08c,_0x47e90c)=>{var _0x3e6b72=_0x455271;_0x1287e4(_0x1898be(_0x3e6b72(0x23f),_0x47e90c,_0x3a9a2f(),_0x57c957,[_0x5ed08c]));},'autoLogMany':(_0x3cf7bf,_0x464c7e)=>{var _0x4fc658=_0x455271;_0x1287e4(_0x1898be(_0x4fc658(0x23f),_0x3cf7bf,_0x3a9a2f(),_0x57c957,_0x464c7e));},'autoTrace':(_0x7d917e,_0x527ead)=>{var _0x258cec=_0x455271;_0x1287e4(_0x1898be(_0x258cec(0x196),_0x527ead,_0x3a9a2f(),_0x57c957,[_0x7d917e]));},'autoTraceMany':(_0x19a00e,_0x7ce033)=>{var _0x3ad3e2=_0x455271;_0x1287e4(_0x1898be(_0x3ad3e2(0x196),_0x19a00e,_0x3a9a2f(),_0x57c957,_0x7ce033));},'autoTime':(_0x31015b,_0x2d9994,_0x39d7c2)=>{_0x149d0a(_0x39d7c2);},'autoTimeEnd':(_0x3e33cc,_0x3aa7b1,_0x50e02b)=>{_0x44d8cc(_0x3aa7b1,_0x50e02b);}};let _0x1287e4=V(_0x1aecc1,_0x169db0,_0x3f784f,_0x505869,_0x5aee63),_0x57c957=_0x1aecc1['_console_ninja_session'];class _0x30697{constructor(){var _0x434125=_0x455271;this[_0x434125(0x1a7)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x434125(0x1fd)]=/'([^\\\\']|\\\\')*'/,this[_0x434125(0x25c)]=_0x1aecc1[_0x434125(0x1f8)],this[_0x434125(0x1a2)]=_0x1aecc1[_0x434125(0x1d8)],this[_0x434125(0x21c)]=Object['getOwnPropertyDescriptor'],this[_0x434125(0x19b)]=Object[_0x434125(0x20e)],this[_0x434125(0x252)]=_0x1aecc1[_0x434125(0x197)],this[_0x434125(0x1f6)]=RegExp[_0x434125(0x1ac)][_0x434125(0x1ad)],this['_dateToString']=Date[_0x434125(0x1ac)][_0x434125(0x1ad)];}[_0x455271(0x1ff)](_0x357da1,_0x1980e9,_0x180616,_0x5166f7){var _0x581162=_0x455271,_0x3d0195=this,_0x1d7cfa=_0x180616[_0x581162(0x23d)];function _0x1752d1(_0x120788,_0x1a98cf,_0x2a225b){var _0x5432c4=_0x581162;_0x1a98cf[_0x5432c4(0x278)]=_0x5432c4(0x274),_0x1a98cf[_0x5432c4(0x1cb)]=_0x120788['message'],_0x1552df=_0x2a225b[_0x5432c4(0x26b)][_0x5432c4(0x210)],_0x2a225b['node'][_0x5432c4(0x210)]=_0x1a98cf,_0x3d0195['_treeNodePropertiesBeforeFullValue'](_0x1a98cf,_0x2a225b);}try{_0x180616[_0x581162(0x1a3)]++,_0x180616[_0x581162(0x23d)]&&_0x180616[_0x581162(0x21a)][_0x581162(0x1d2)](_0x1980e9);var _0x1e0319,_0x40e689,_0x21ce69,_0x58e420,_0xac47bc=[],_0x3c1844=[],_0x24c5bf,_0x593ff7=this[_0x581162(0x276)](_0x1980e9),_0x577a7b=_0x593ff7===_0x581162(0x1c3),_0x21adee=!0x1,_0x63c199=_0x593ff7===_0x581162(0x1ed),_0x94e4e0=this[_0x581162(0x1bf)](_0x593ff7),_0x370a56=this[_0x581162(0x237)](_0x593ff7),_0x3ab83a=_0x94e4e0||_0x370a56,_0x248fc9={},_0xf50f4=0x0,_0x648d56=!0x1,_0x1552df,_0x27a24c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x180616[_0x581162(0x199)]){if(_0x577a7b){if(_0x40e689=_0x1980e9['length'],_0x40e689>_0x180616['elements']){for(_0x21ce69=0x0,_0x58e420=_0x180616[_0x581162(0x1c1)],_0x1e0319=_0x21ce69;_0x1e0319<_0x58e420;_0x1e0319++)_0x3c1844[_0x581162(0x1d2)](_0x3d0195[_0x581162(0x25f)](_0xac47bc,_0x1980e9,_0x593ff7,_0x1e0319,_0x180616));_0x357da1[_0x581162(0x232)]=!0x0;}else{for(_0x21ce69=0x0,_0x58e420=_0x40e689,_0x1e0319=_0x21ce69;_0x1e0319<_0x58e420;_0x1e0319++)_0x3c1844['push'](_0x3d0195[_0x581162(0x25f)](_0xac47bc,_0x1980e9,_0x593ff7,_0x1e0319,_0x180616));}_0x180616[_0x581162(0x1b0)]+=_0x3c1844[_0x581162(0x25b)];}if(!(_0x593ff7===_0x581162(0x1ca)||_0x593ff7===_0x581162(0x1f8))&&!_0x94e4e0&&_0x593ff7!=='String'&&_0x593ff7!==_0x581162(0x1f7)&&_0x593ff7!=='bigint'){var _0x2bb543=_0x5166f7[_0x581162(0x207)]||_0x180616[_0x581162(0x207)];if(this['_isSet'](_0x1980e9)?(_0x1e0319=0x0,_0x1980e9['forEach'](function(_0x4b8d65){var _0x54c1f2=_0x581162;if(_0xf50f4++,_0x180616[_0x54c1f2(0x1b0)]++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;return;}if(!_0x180616[_0x54c1f2(0x1af)]&&_0x180616[_0x54c1f2(0x23d)]&&_0x180616[_0x54c1f2(0x1b0)]>_0x180616[_0x54c1f2(0x245)]){_0x648d56=!0x0;return;}_0x3c1844[_0x54c1f2(0x1d2)](_0x3d0195['_addProperty'](_0xac47bc,_0x1980e9,_0x54c1f2(0x1e8),_0x1e0319++,_0x180616,function(_0x2a2f63){return function(){return _0x2a2f63;};}(_0x4b8d65)));})):this[_0x581162(0x243)](_0x1980e9)&&_0x1980e9[_0x581162(0x1d9)](function(_0x37867e,_0x181b6f){var _0x10bdd9=_0x581162;if(_0xf50f4++,_0x180616[_0x10bdd9(0x1b0)]++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;return;}if(!_0x180616[_0x10bdd9(0x1af)]&&_0x180616['autoExpand']&&_0x180616[_0x10bdd9(0x1b0)]>_0x180616[_0x10bdd9(0x245)]){_0x648d56=!0x0;return;}var _0x5acdb6=_0x181b6f[_0x10bdd9(0x1ad)]();_0x5acdb6['length']>0x64&&(_0x5acdb6=_0x5acdb6[_0x10bdd9(0x1bd)](0x0,0x64)+_0x10bdd9(0x24f)),_0x3c1844['push'](_0x3d0195[_0x10bdd9(0x25f)](_0xac47bc,_0x1980e9,_0x10bdd9(0x1ae),_0x5acdb6,_0x180616,function(_0x229ddf){return function(){return _0x229ddf;};}(_0x37867e)));}),!_0x21adee){try{for(_0x24c5bf in _0x1980e9)if(!(_0x577a7b&&_0x27a24c[_0x581162(0x198)](_0x24c5bf))&&!this['_blacklistedProperty'](_0x1980e9,_0x24c5bf,_0x180616)){if(_0xf50f4++,_0x180616['autoExpandPropertyCount']++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;break;}if(!_0x180616[_0x581162(0x1af)]&&_0x180616[_0x581162(0x23d)]&&_0x180616['autoExpandPropertyCount']>_0x180616['autoExpandLimit']){_0x648d56=!0x0;break;}_0x3c1844['push'](_0x3d0195['_addObjectProperty'](_0xac47bc,_0x248fc9,_0x1980e9,_0x593ff7,_0x24c5bf,_0x180616));}}catch{}if(_0x248fc9[_0x581162(0x219)]=!0x0,_0x63c199&&(_0x248fc9[_0x581162(0x270)]=!0x0),!_0x648d56){var _0x276f0a=[][_0x581162(0x229)](this[_0x581162(0x19b)](_0x1980e9))[_0x581162(0x229)](this[_0x581162(0x25e)](_0x1980e9));for(_0x1e0319=0x0,_0x40e689=_0x276f0a[_0x581162(0x25b)];_0x1e0319<_0x40e689;_0x1e0319++)if(_0x24c5bf=_0x276f0a[_0x1e0319],!(_0x577a7b&&_0x27a24c[_0x581162(0x198)](_0x24c5bf[_0x581162(0x1ad)]()))&&!this[_0x581162(0x24d)](_0x1980e9,_0x24c5bf,_0x180616)&&!_0x248fc9[_0x581162(0x1e1)+_0x24c5bf['toString']()]){if(_0xf50f4++,_0x180616[_0x581162(0x1b0)]++,_0xf50f4>_0x2bb543){_0x648d56=!0x0;break;}if(!_0x180616[_0x581162(0x1af)]&&_0x180616[_0x581162(0x23d)]&&_0x180616['autoExpandPropertyCount']>_0x180616[_0x581162(0x245)]){_0x648d56=!0x0;break;}_0x3c1844[_0x581162(0x1d2)](_0x3d0195[_0x581162(0x25d)](_0xac47bc,_0x248fc9,_0x1980e9,_0x593ff7,_0x24c5bf,_0x180616));}}}}}if(_0x357da1['type']=_0x593ff7,_0x3ab83a?(_0x357da1[_0x581162(0x23a)]=_0x1980e9[_0x581162(0x217)](),this[_0x581162(0x26d)](_0x593ff7,_0x357da1,_0x180616,_0x5166f7)):_0x593ff7===_0x581162(0x24a)?_0x357da1[_0x581162(0x23a)]=this[_0x581162(0x1cd)]['call'](_0x1980e9):_0x593ff7===_0x581162(0x1ab)?_0x357da1[_0x581162(0x23a)]=_0x1980e9['toString']():_0x593ff7===_0x581162(0x19c)?_0x357da1[_0x581162(0x23a)]=this[_0x581162(0x1f6)][_0x581162(0x1a4)](_0x1980e9):_0x593ff7===_0x581162(0x1eb)&&this[_0x581162(0x252)]?_0x357da1[_0x581162(0x23a)]=this[_0x581162(0x252)]['prototype'][_0x581162(0x1ad)][_0x581162(0x1a4)](_0x1980e9):!_0x180616[_0x581162(0x199)]&&!(_0x593ff7===_0x581162(0x1ca)||_0x593ff7===_0x581162(0x1f8))&&(delete _0x357da1[_0x581162(0x23a)],_0x357da1[_0x581162(0x200)]=!0x0),_0x648d56&&(_0x357da1[_0x581162(0x1ef)]=!0x0),_0x1552df=_0x180616[_0x581162(0x26b)][_0x581162(0x210)],_0x180616['node']['current']=_0x357da1,this['_treeNodePropertiesBeforeFullValue'](_0x357da1,_0x180616),_0x3c1844['length']){for(_0x1e0319=0x0,_0x40e689=_0x3c1844[_0x581162(0x25b)];_0x1e0319<_0x40e689;_0x1e0319++)_0x3c1844[_0x1e0319](_0x1e0319);}_0xac47bc['length']&&(_0x357da1[_0x581162(0x207)]=_0xac47bc);}catch(_0x59c5ca){_0x1752d1(_0x59c5ca,_0x357da1,_0x180616);}return this[_0x581162(0x25a)](_0x1980e9,_0x357da1),this[_0x581162(0x1b6)](_0x357da1,_0x180616),_0x180616['node']['current']=_0x1552df,_0x180616[_0x581162(0x1a3)]--,_0x180616[_0x581162(0x23d)]=_0x1d7cfa,_0x180616[_0x581162(0x23d)]&&_0x180616[_0x581162(0x21a)]['pop'](),_0x357da1;}[_0x455271(0x25e)](_0x35db2f){var _0x36f105=_0x455271;return Object[_0x36f105(0x1a1)]?Object[_0x36f105(0x1a1)](_0x35db2f):[];}['_isSet'](_0x315ed0){var _0x30f9c3=_0x455271;return!!(_0x315ed0&&_0x1aecc1['Set']&&this[_0x30f9c3(0x23c)](_0x315ed0)==='[object\\x20Set]'&&_0x315ed0[_0x30f9c3(0x1d9)]);}[_0x455271(0x24d)](_0x2fff3c,_0x42c2a8,_0xec53cb){var _0x50742a=_0x455271;return _0xec53cb['noFunctions']?typeof _0x2fff3c[_0x42c2a8]==_0x50742a(0x1ed):!0x1;}[_0x455271(0x276)](_0xc34c7c){var _0x87b248=_0x455271,_0x1ffe19='';return _0x1ffe19=typeof _0xc34c7c,_0x1ffe19==='object'?this[_0x87b248(0x23c)](_0xc34c7c)==='[object\\x20Array]'?_0x1ffe19=_0x87b248(0x1c3):this['_objectToString'](_0xc34c7c)===_0x87b248(0x1b9)?_0x1ffe19=_0x87b248(0x24a):this[_0x87b248(0x23c)](_0xc34c7c)===_0x87b248(0x1fa)?_0x1ffe19=_0x87b248(0x1ab):_0xc34c7c===null?_0x1ffe19='null':_0xc34c7c[_0x87b248(0x242)]&&(_0x1ffe19=_0xc34c7c[_0x87b248(0x242)][_0x87b248(0x227)]||_0x1ffe19):_0x1ffe19===_0x87b248(0x1f8)&&this[_0x87b248(0x1a2)]&&_0xc34c7c instanceof this[_0x87b248(0x1a2)]&&(_0x1ffe19='HTMLAllCollection'),_0x1ffe19;}[_0x455271(0x23c)](_0x494626){var _0x9cebde=_0x455271;return Object[_0x9cebde(0x1ac)]['toString'][_0x9cebde(0x1a4)](_0x494626);}[_0x455271(0x1bf)](_0x2ea78d){var _0x5cc4db=_0x455271;return _0x2ea78d==='boolean'||_0x2ea78d===_0x5cc4db(0x1a0)||_0x2ea78d===_0x5cc4db(0x19f);}[_0x455271(0x237)](_0x232b26){var _0x5ad32e=_0x455271;return _0x232b26==='Boolean'||_0x232b26===_0x5ad32e(0x263)||_0x232b26===_0x5ad32e(0x1f4);}[_0x455271(0x25f)](_0x37542c,_0x3ae7af,_0x495ed2,_0x444b7a,_0x4c8050,_0x4d87d9){var _0x30267b=this;return function(_0x3c32aa){var _0x2bfea8=_0x413f,_0x3c84ba=_0x4c8050[_0x2bfea8(0x26b)]['current'],_0x1c5d83=_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x21f)],_0x1f92f4=_0x4c8050['node'][_0x2bfea8(0x1da)];_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x1da)]=_0x3c84ba,_0x4c8050[_0x2bfea8(0x26b)]['index']=typeof _0x444b7a==_0x2bfea8(0x19f)?_0x444b7a:_0x3c32aa,_0x37542c[_0x2bfea8(0x1d2)](_0x30267b[_0x2bfea8(0x1b5)](_0x3ae7af,_0x495ed2,_0x444b7a,_0x4c8050,_0x4d87d9)),_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x1da)]=_0x1f92f4,_0x4c8050[_0x2bfea8(0x26b)][_0x2bfea8(0x21f)]=_0x1c5d83;};}['_addObjectProperty'](_0x4debd4,_0x1d88bb,_0x4ce588,_0x19267c,_0x2a53c1,_0x4094d7,_0x13a16c){var _0x1761fb=_0x455271,_0x180763=this;return _0x1d88bb[_0x1761fb(0x1e1)+_0x2a53c1[_0x1761fb(0x1ad)]()]=!0x0,function(_0x13ff60){var _0x5de4fa=_0x1761fb,_0x32d67a=_0x4094d7['node'][_0x5de4fa(0x210)],_0x2526d6=_0x4094d7[_0x5de4fa(0x26b)]['index'],_0x28371d=_0x4094d7[_0x5de4fa(0x26b)][_0x5de4fa(0x1da)];_0x4094d7[_0x5de4fa(0x26b)][_0x5de4fa(0x1da)]=_0x32d67a,_0x4094d7['node'][_0x5de4fa(0x21f)]=_0x13ff60,_0x4debd4[_0x5de4fa(0x1d2)](_0x180763[_0x5de4fa(0x1b5)](_0x4ce588,_0x19267c,_0x2a53c1,_0x4094d7,_0x13a16c)),_0x4094d7['node'][_0x5de4fa(0x1da)]=_0x28371d,_0x4094d7[_0x5de4fa(0x26b)]['index']=_0x2526d6;};}[_0x455271(0x1b5)](_0x43e83b,_0x1dbf23,_0x2f7f5e,_0x3827c3,_0x36de0f){var _0x337a29=_0x455271,_0x549d1e=this;_0x36de0f||(_0x36de0f=function(_0x2b0ac8,_0x2a6f8b){return _0x2b0ac8[_0x2a6f8b];});var _0x5b87a8=_0x2f7f5e[_0x337a29(0x1ad)](),_0x3bd5ee=_0x3827c3[_0x337a29(0x1e0)]||{},_0x3d36f3=_0x3827c3[_0x337a29(0x199)],_0x1c018b=_0x3827c3[_0x337a29(0x1af)];try{var _0x55cbf1=this[_0x337a29(0x243)](_0x43e83b),_0x1275d5=_0x5b87a8;_0x55cbf1&&_0x1275d5[0x0]==='\\x27'&&(_0x1275d5=_0x1275d5[_0x337a29(0x19e)](0x1,_0x1275d5[_0x337a29(0x25b)]-0x2));var _0x3a60f4=_0x3827c3[_0x337a29(0x1e0)]=_0x3bd5ee['_p_'+_0x1275d5];_0x3a60f4&&(_0x3827c3[_0x337a29(0x199)]=_0x3827c3[_0x337a29(0x199)]+0x1),_0x3827c3[_0x337a29(0x1af)]=!!_0x3a60f4;var _0x2e6757=typeof _0x2f7f5e==_0x337a29(0x1eb),_0x2d2f79={'name':_0x2e6757||_0x55cbf1?_0x5b87a8:this[_0x337a29(0x1d7)](_0x5b87a8)};if(_0x2e6757&&(_0x2d2f79[_0x337a29(0x1eb)]=!0x0),!(_0x1dbf23===_0x337a29(0x1c3)||_0x1dbf23===_0x337a29(0x277))){var _0x4d7142=this[_0x337a29(0x21c)](_0x43e83b,_0x2f7f5e);if(_0x4d7142&&(_0x4d7142[_0x337a29(0x208)]&&(_0x2d2f79[_0x337a29(0x1ec)]=!0x0),_0x4d7142[_0x337a29(0x233)]&&!_0x3a60f4&&!_0x3827c3['resolveGetters']))return _0x2d2f79[_0x337a29(0x201)]=!0x0,this[_0x337a29(0x1c4)](_0x2d2f79,_0x3827c3),_0x2d2f79;}var _0x1f0502;try{_0x1f0502=_0x36de0f(_0x43e83b,_0x2f7f5e);}catch(_0x215c29){return _0x2d2f79={'name':_0x5b87a8,'type':_0x337a29(0x274),'error':_0x215c29[_0x337a29(0x1bb)]},this[_0x337a29(0x1c4)](_0x2d2f79,_0x3827c3),_0x2d2f79;}var _0xefdfc=this[_0x337a29(0x276)](_0x1f0502),_0x13c42f=this['_isPrimitiveType'](_0xefdfc);if(_0x2d2f79['type']=_0xefdfc,_0x13c42f)this[_0x337a29(0x1c4)](_0x2d2f79,_0x3827c3,_0x1f0502,function(){var _0x38e0ed=_0x337a29;_0x2d2f79[_0x38e0ed(0x23a)]=_0x1f0502[_0x38e0ed(0x217)](),!_0x3a60f4&&_0x549d1e[_0x38e0ed(0x26d)](_0xefdfc,_0x2d2f79,_0x3827c3,{});});else{var _0x2802cd=_0x3827c3[_0x337a29(0x23d)]&&_0x3827c3[_0x337a29(0x1a3)]<_0x3827c3[_0x337a29(0x26c)]&&_0x3827c3[_0x337a29(0x21a)][_0x337a29(0x1f2)](_0x1f0502)<0x0&&_0xefdfc!=='function'&&_0x3827c3[_0x337a29(0x1b0)]<_0x3827c3[_0x337a29(0x245)];_0x2802cd||_0x3827c3['level']<_0x3d36f3||_0x3a60f4?(this[_0x337a29(0x1ff)](_0x2d2f79,_0x1f0502,_0x3827c3,_0x3a60f4||{}),this['_additionalMetadata'](_0x1f0502,_0x2d2f79)):this['_processTreeNodeResult'](_0x2d2f79,_0x3827c3,_0x1f0502,function(){var _0x43e9f7=_0x337a29;_0xefdfc===_0x43e9f7(0x1ca)||_0xefdfc===_0x43e9f7(0x1f8)||(delete _0x2d2f79[_0x43e9f7(0x23a)],_0x2d2f79['capped']=!0x0);});}return _0x2d2f79;}finally{_0x3827c3[_0x337a29(0x1e0)]=_0x3bd5ee,_0x3827c3['depth']=_0x3d36f3,_0x3827c3[_0x337a29(0x1af)]=_0x1c018b;}}[_0x455271(0x26d)](_0x360681,_0x12d5f3,_0x5ec981,_0x36ce52){var _0x954949=_0x455271,_0x938ac4=_0x36ce52['strLength']||_0x5ec981['strLength'];if((_0x360681===_0x954949(0x1a0)||_0x360681==='String')&&_0x12d5f3[_0x954949(0x23a)]){let _0x3c6b83=_0x12d5f3['value'][_0x954949(0x25b)];_0x5ec981[_0x954949(0x1c2)]+=_0x3c6b83,_0x5ec981[_0x954949(0x1c2)]>_0x5ec981[_0x954949(0x1f0)]?(_0x12d5f3[_0x954949(0x200)]='',delete _0x12d5f3[_0x954949(0x23a)]):_0x3c6b83>_0x938ac4&&(_0x12d5f3[_0x954949(0x200)]=_0x12d5f3[_0x954949(0x23a)][_0x954949(0x19e)](0x0,_0x938ac4),delete _0x12d5f3['value']);}}[_0x455271(0x243)](_0x54d5a9){var _0x1953c3=_0x455271;return!!(_0x54d5a9&&_0x1aecc1['Map']&&this[_0x1953c3(0x23c)](_0x54d5a9)==='[object\\x20Map]'&&_0x54d5a9[_0x1953c3(0x1d9)]);}['_propertyName'](_0x3d3366){var _0x40f315=_0x455271;if(_0x3d3366[_0x40f315(0x251)](/^\\d+$/))return _0x3d3366;var _0x1cdb91;try{_0x1cdb91=JSON[_0x40f315(0x22e)](''+_0x3d3366);}catch{_0x1cdb91='\\x22'+this[_0x40f315(0x23c)](_0x3d3366)+'\\x22';}return _0x1cdb91[_0x40f315(0x251)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1cdb91=_0x1cdb91[_0x40f315(0x19e)](0x1,_0x1cdb91[_0x40f315(0x25b)]-0x2):_0x1cdb91=_0x1cdb91[_0x40f315(0x1d5)](/'/g,'\\x5c\\x27')[_0x40f315(0x1d5)](/\\\\\"/g,'\\x22')[_0x40f315(0x1d5)](/(^\"|\"$)/g,'\\x27'),_0x1cdb91;}[_0x455271(0x1c4)](_0xfcf0ca,_0x3213fa,_0x43cb6a,_0x59d7bc){var _0x11826f=_0x455271;this['_treeNodePropertiesBeforeFullValue'](_0xfcf0ca,_0x3213fa),_0x59d7bc&&_0x59d7bc(),this['_additionalMetadata'](_0x43cb6a,_0xfcf0ca),this[_0x11826f(0x1b6)](_0xfcf0ca,_0x3213fa);}[_0x455271(0x19a)](_0x8be691,_0x432e24){var _0x5a0f7d=_0x455271;this[_0x5a0f7d(0x1bc)](_0x8be691,_0x432e24),this[_0x5a0f7d(0x246)](_0x8be691,_0x432e24),this[_0x5a0f7d(0x1a5)](_0x8be691,_0x432e24),this[_0x5a0f7d(0x1d0)](_0x8be691,_0x432e24);}[_0x455271(0x1bc)](_0x219e23,_0xb845c3){}[_0x455271(0x246)](_0x2a0248,_0x70ecd3){}[_0x455271(0x24c)](_0x37d6dd,_0x2520fe){}[_0x455271(0x235)](_0x56c23a){var _0x2364ac=_0x455271;return _0x56c23a===this[_0x2364ac(0x25c)];}['_treeNodePropertiesAfterFullValue'](_0x34af1c,_0x377cfe){var _0x48c1e5=_0x455271;this[_0x48c1e5(0x24c)](_0x34af1c,_0x377cfe),this[_0x48c1e5(0x212)](_0x34af1c),_0x377cfe[_0x48c1e5(0x1e9)]&&this[_0x48c1e5(0x1c6)](_0x34af1c),this[_0x48c1e5(0x21e)](_0x34af1c,_0x377cfe),this[_0x48c1e5(0x248)](_0x34af1c,_0x377cfe),this[_0x48c1e5(0x266)](_0x34af1c);}['_additionalMetadata'](_0x1739f1,_0x364748){var _0x458b6e=_0x455271;let _0x40e88a;try{_0x1aecc1['console']&&(_0x40e88a=_0x1aecc1[_0x458b6e(0x1dd)]['error'],_0x1aecc1[_0x458b6e(0x1dd)][_0x458b6e(0x1cb)]=function(){}),_0x1739f1&&typeof _0x1739f1[_0x458b6e(0x25b)]==_0x458b6e(0x19f)&&(_0x364748[_0x458b6e(0x25b)]=_0x1739f1[_0x458b6e(0x25b)]);}catch{}finally{_0x40e88a&&(_0x1aecc1['console'][_0x458b6e(0x1cb)]=_0x40e88a);}if(_0x364748[_0x458b6e(0x278)]===_0x458b6e(0x19f)||_0x364748[_0x458b6e(0x278)]==='Number'){if(isNaN(_0x364748[_0x458b6e(0x23a)]))_0x364748['nan']=!0x0,delete _0x364748[_0x458b6e(0x23a)];else switch(_0x364748[_0x458b6e(0x23a)]){case Number[_0x458b6e(0x257)]:_0x364748['positiveInfinity']=!0x0,delete _0x364748[_0x458b6e(0x23a)];break;case Number[_0x458b6e(0x23e)]:_0x364748[_0x458b6e(0x220)]=!0x0,delete _0x364748[_0x458b6e(0x23a)];break;case 0x0:this[_0x458b6e(0x1db)](_0x364748['value'])&&(_0x364748[_0x458b6e(0x1b4)]=!0x0);break;}}else _0x364748[_0x458b6e(0x278)]===_0x458b6e(0x1ed)&&typeof _0x1739f1[_0x458b6e(0x227)]==_0x458b6e(0x1a0)&&_0x1739f1[_0x458b6e(0x227)]&&_0x364748['name']&&_0x1739f1['name']!==_0x364748[_0x458b6e(0x227)]&&(_0x364748[_0x458b6e(0x256)]=_0x1739f1[_0x458b6e(0x227)]);}['_isNegativeZero'](_0xe62f02){var _0x31d403=_0x455271;return 0x1/_0xe62f02===Number[_0x31d403(0x23e)];}[_0x455271(0x1c6)](_0x17f2bf){var _0xae8a3c=_0x455271;!_0x17f2bf[_0xae8a3c(0x207)]||!_0x17f2bf[_0xae8a3c(0x207)]['length']||_0x17f2bf[_0xae8a3c(0x278)]===_0xae8a3c(0x1c3)||_0x17f2bf['type']==='Map'||_0x17f2bf['type']===_0xae8a3c(0x1e8)||_0x17f2bf[_0xae8a3c(0x207)][_0xae8a3c(0x269)](function(_0x15e0b3,_0x4d676b){var _0x23aefc=_0xae8a3c,_0x721d23=_0x15e0b3[_0x23aefc(0x227)][_0x23aefc(0x22f)](),_0x18d1f7=_0x4d676b[_0x23aefc(0x227)][_0x23aefc(0x22f)]();return _0x721d23<_0x18d1f7?-0x1:_0x721d23>_0x18d1f7?0x1:0x0;});}[_0x455271(0x21e)](_0x3910b5,_0x3c3538){var _0x24e905=_0x455271;if(!(_0x3c3538[_0x24e905(0x1ce)]||!_0x3910b5[_0x24e905(0x207)]||!_0x3910b5['props']['length'])){for(var _0x47be43=[],_0x21b7bb=[],_0xfb58e0=0x0,_0x32b166=_0x3910b5[_0x24e905(0x207)][_0x24e905(0x25b)];_0xfb58e0<_0x32b166;_0xfb58e0++){var _0x4a2f42=_0x3910b5[_0x24e905(0x207)][_0xfb58e0];_0x4a2f42[_0x24e905(0x278)]===_0x24e905(0x1ed)?_0x47be43[_0x24e905(0x1d2)](_0x4a2f42):_0x21b7bb['push'](_0x4a2f42);}if(!(!_0x21b7bb[_0x24e905(0x25b)]||_0x47be43[_0x24e905(0x25b)]<=0x1)){_0x3910b5[_0x24e905(0x207)]=_0x21b7bb;var _0x5b4429={'functionsNode':!0x0,'props':_0x47be43};this[_0x24e905(0x1bc)](_0x5b4429,_0x3c3538),this['_setNodeLabel'](_0x5b4429,_0x3c3538),this[_0x24e905(0x212)](_0x5b4429),this[_0x24e905(0x1d0)](_0x5b4429,_0x3c3538),_0x5b4429['id']+='\\x20f',_0x3910b5[_0x24e905(0x207)][_0x24e905(0x218)](_0x5b4429);}}}[_0x455271(0x248)](_0x582e60,_0x16967f){}[_0x455271(0x212)](_0x41580d){}['_isArray'](_0x37b4c3){var _0x195df3=_0x455271;return Array[_0x195df3(0x1b3)](_0x37b4c3)||typeof _0x37b4c3=='object'&&this[_0x195df3(0x23c)](_0x37b4c3)===_0x195df3(0x26f);}[_0x455271(0x1d0)](_0x5e6c06,_0x528dab){}[_0x455271(0x266)](_0x256e2b){var _0x1266ad=_0x455271;delete _0x256e2b[_0x1266ad(0x253)],delete _0x256e2b[_0x1266ad(0x19d)],delete _0x256e2b['_hasMapOnItsPath'];}[_0x455271(0x1a5)](_0x3b60bd,_0x35e7d9){}[_0x455271(0x273)](_0x5ec598){var _0x568dcb=_0x455271;return _0x5ec598?_0x5ec598[_0x568dcb(0x251)](this[_0x568dcb(0x209)])?'['+_0x5ec598+']':_0x5ec598[_0x568dcb(0x251)](this['_keyStrRegExp'])?'.'+_0x5ec598:_0x5ec598[_0x568dcb(0x251)](this['_quotedRegExp'])?'['+_0x5ec598+']':'[\\x27'+_0x5ec598+'\\x27]':'';}}let _0x38dc68=new _0x30697();function _0x1898be(_0x4dc3ad,_0x4c5556,_0x1921cf,_0x268790,_0x4f923,_0x5ce9e0){var _0x75401b=_0x455271;let _0x57871b,_0x1b0815;try{_0x1b0815=_0x2cb31d(),_0x57871b=_0x18be6e[_0x4c5556],!_0x57871b||_0x1b0815-_0x57871b['ts']>0x1f4&&_0x57871b[_0x75401b(0x231)]&&_0x57871b[_0x75401b(0x264)]/_0x57871b['count']<0x64?(_0x18be6e[_0x4c5556]=_0x57871b={'count':0x0,'time':0x0,'ts':_0x1b0815},_0x18be6e[_0x75401b(0x1e4)]={}):_0x1b0815-_0x18be6e[_0x75401b(0x1e4)]['ts']>0x32&&_0x18be6e[_0x75401b(0x1e4)]['count']&&_0x18be6e['hits']['time']/_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x231)]<0x64&&(_0x18be6e['hits']={});let _0x4b9a58=[],_0x433287=_0x57871b['reduceLimits']||_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x20c)]?_0x393c70:_0x589ff4,_0x1a03f4=_0x1195da=>{var _0x3774be=_0x75401b;let _0x5123e6={};return _0x5123e6['props']=_0x1195da[_0x3774be(0x207)],_0x5123e6[_0x3774be(0x1c1)]=_0x1195da['elements'],_0x5123e6[_0x3774be(0x211)]=_0x1195da['strLength'],_0x5123e6[_0x3774be(0x1f0)]=_0x1195da[_0x3774be(0x1f0)],_0x5123e6['autoExpandLimit']=_0x1195da[_0x3774be(0x245)],_0x5123e6['autoExpandMaxDepth']=_0x1195da['autoExpandMaxDepth'],_0x5123e6[_0x3774be(0x1e9)]=!0x1,_0x5123e6['noFunctions']=!_0x290895,_0x5123e6[_0x3774be(0x199)]=0x1,_0x5123e6[_0x3774be(0x1a3)]=0x0,_0x5123e6[_0x3774be(0x21b)]=_0x3774be(0x1c7),_0x5123e6['rootExpression']=_0x3774be(0x1ba),_0x5123e6[_0x3774be(0x23d)]=!0x0,_0x5123e6['autoExpandPreviousObjects']=[],_0x5123e6[_0x3774be(0x1b0)]=0x0,_0x5123e6[_0x3774be(0x1c0)]=!0x0,_0x5123e6[_0x3774be(0x1c2)]=0x0,_0x5123e6[_0x3774be(0x26b)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5123e6;};for(var _0x20255f=0x0;_0x20255f<_0x4f923[_0x75401b(0x25b)];_0x20255f++)_0x4b9a58['push'](_0x38dc68[_0x75401b(0x1ff)]({'timeNode':_0x4dc3ad==='time'||void 0x0},_0x4f923[_0x20255f],_0x1a03f4(_0x433287),{}));if(_0x4dc3ad===_0x75401b(0x196)){let _0x4574d9=Error[_0x75401b(0x1fe)];try{Error[_0x75401b(0x1fe)]=0x1/0x0,_0x4b9a58[_0x75401b(0x1d2)](_0x38dc68[_0x75401b(0x1ff)]({'stackNode':!0x0},new Error()[_0x75401b(0x1e3)],_0x1a03f4(_0x433287),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x4574d9;}}return{'method':_0x75401b(0x23f),'version':_0x94cf8c,'args':[{'ts':_0x1921cf,'session':_0x268790,'args':_0x4b9a58,'id':_0x4c5556,'context':_0x5ce9e0}]};}catch(_0x297f69){return{'method':_0x75401b(0x23f),'version':_0x94cf8c,'args':[{'ts':_0x1921cf,'session':_0x268790,'args':[{'type':_0x75401b(0x274),'error':_0x297f69&&_0x297f69[_0x75401b(0x1bb)]}],'id':_0x4c5556,'context':_0x5ce9e0}]};}finally{try{if(_0x57871b&&_0x1b0815){let _0x2e27c0=_0x2cb31d();_0x57871b[_0x75401b(0x231)]++,_0x57871b[_0x75401b(0x264)]+=_0x1b1c3a(_0x1b0815,_0x2e27c0),_0x57871b['ts']=_0x2e27c0,_0x18be6e[_0x75401b(0x1e4)]['count']++,_0x18be6e[_0x75401b(0x1e4)]['time']+=_0x1b1c3a(_0x1b0815,_0x2e27c0),_0x18be6e[_0x75401b(0x1e4)]['ts']=_0x2e27c0,(_0x57871b[_0x75401b(0x231)]>0x32||_0x57871b[_0x75401b(0x264)]>0x64)&&(_0x57871b[_0x75401b(0x20c)]=!0x0),(_0x18be6e[_0x75401b(0x1e4)]['count']>0x3e8||_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x264)]>0x12c)&&(_0x18be6e[_0x75401b(0x1e4)][_0x75401b(0x20c)]=!0x0);}}catch{}}}return _0x1aecc1['_console_ninja'];})(globalThis,_0x230995(0x259),_0x230995(0x22c),_0x230995(0x1dc),_0x230995(0x1b2),_0x230995(0x247),'1691865113228',_0x230995(0x268),_0x230995(0x236));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
/* harmony import */ var _assets_weatherApp_weatherApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/weatherApp/weatherApp */ "./src/assets/weatherApp/weatherApp.js");






/**
 * @description This is the main function of the application
 * @return {void}
 */
async function init() {
  (0,_assets_weatherApp_weatherApp__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

init(); // Calling the main function


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxSEFBcUgsSUFBSSxJQUFJLGtCQUFrQjtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSx1R0FBdUcsSUFBSSxJQUFJLG9CQUFvQixPQUFPLGNBQWMsZUFBZSwyQkFBMkIsOENBQThDLEdBQUcsVUFBVSxpQ0FBaUMsMEZBQTBGLEdBQUcscUJBQXFCO0FBQzlqQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxRixVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsUUFBUSxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLG1DQUFtQyxrQkFBa0Isd0JBQXdCLGlDQUFpQyxHQUFHLDhCQUE4QixZQUFZLEdBQUcseUJBQXlCLGtCQUFrQiwyQkFBMkIsR0FBRyw2QkFBNkIsbUJBQW1CLG9CQUFvQixHQUFHLCtCQUErQixtQkFBbUIsR0FBRyw4QkFBOEIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxrQ0FBa0MscUJBQXFCLG9CQUFvQixHQUFHLFdBQVcsOEJBQThCLEdBQUcsMEtBQTBLLHNCQUFzQixHQUFHLHlEQUF5RCx1QkFBdUIsMEJBQTBCLGdCQUFnQixpQkFBaUIsR0FBRyxxREFBcUQsZUFBZSxhQUFhLGNBQWMsR0FBRywrQkFBK0IsdUJBQXVCLG9CQUFvQixXQUFXLFlBQVksYUFBYSxjQUFjLDJCQUEyQiw2QkFBNkIscUJBQXFCLEdBQUcsb0JBQW9CLHVCQUF1QixrQkFBa0IsaUJBQWlCLGdCQUFnQixjQUFjLGdCQUFnQiw0QkFBNEIsNkJBQTZCLHFCQUFxQixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRywyQkFBMkIsZ0NBQWdDLEdBQUcsb0NBQW9DLHdDQUF3QyxvQ0FBb0MsZ0NBQWdDLEdBQUcsMENBQTBDLHdCQUF3QixHQUFHLDBCQUEwQix1QkFBdUIsR0FBRyxxQkFBcUI7QUFDL3FGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG9DQUFvQyx1QkFBdUIsWUFBWSxhQUFhLGdCQUFnQixpQkFBaUIsc0NBQXNDLG9CQUFvQixnQkFBZ0IsdUJBQXVCLDhCQUE4Qix3QkFBd0IsaUNBQWlDLDBGQUEwRixHQUFHLG1CQUFtQjtBQUNqcEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNyQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLHdGQUFPLFVBQVUsd0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDZTtBQUNmLGlGQUFpRixpQ0FBdUIsQ0FBQyxLQUFLLFNBQVM7QUFDdkg7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQztBQUMvQyxvREFBb0Q7QUFDcEQsaURBQWlEO0FBQ2pELDJEQUEyRCxjQUFjLEdBQUc7QUFDNUU7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbUI7QUFDUDs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4REFBYzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx1REFBZTtBQUNqQjs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7QUFDL0IscUJBQXFCLGlCQUFpQixJQUFJLHdJQUF3SSxzQkFBc0IsK0JBQStCLDRDQUE0QyxZQUFZLElBQUksbVhBQW1YLCtCQUErQiw4Q0FBOEMsaUJBQWlCLDJDQUEyQyxtQkFBbUIsME9BQTBPLHdCQUF3QixzRkFBc0YsOEhBQThILDhHQUE4RyxHQUFHLGtCQUFrQixvRkFBb0YsdUZBQXVGLG9DQUFvQyxnQ0FBZ0MscURBQXFELHdCQUF3QixxbEJBQXFsQixvSUFBb0ksMERBQTBELDBCQUEwQix3QkFBd0IseURBQXlELGNBQWMsd0VBQXdFLEtBQUssZ0lBQWdJLFNBQVMsNkNBQTZDLDRLQUE0SyxNQUFNLElBQUksNkZBQTZGLE1BQU0scUNBQXFDLG1EQUFtRCxxQkFBcUIsd0JBQXdCLHNPQUFzTyx3QkFBd0IsNkNBQTZDLHdCQUF3QixnR0FBZ0csaUNBQWlDLHdCQUF3QiwrSEFBK0gsa0NBQWtDLHdCQUF3QixvS0FBb0ssa0NBQWtDLGdIQUFnSCxvQ0FBb0Msd0JBQXdCLElBQUksaU1BQWlNLFVBQVUsa2FBQWthLElBQUksaUNBQWlDLHdCQUF3Qix3REFBd0QsSUFBSSxvR0FBb0csT0FBTyxJQUFJLGdFQUFnRSxRQUFRLHFCQUFxQix3QkFBd0Isc0lBQXNJLHdCQUF3QixxSkFBcUosa0dBQWtHLG1DQUFtQyx3QkFBd0IsSUFBSSxrQ0FBa0Msb0lBQW9JLGlCQUFpQix3SkFBd0osbUJBQW1CLGk0R0FBaTRHLG1CQUFtQixtQkFBbUIsa0JBQWtCLDhEQUE4RCx3QkFBd0Isa0VBQWtFLHdCQUF3QixJQUFJLG1QQUFtUCxrQ0FBa0MsRUFBRSw2REFBNkQsaUVBQWlFLGlCQUFpQiwrSEFBK0gsRUFBRSxnRkFBZ0Ysc0NBQXNDLHdCQUF3Qiw2Q0FBNkMsMEJBQTBCLG1DQUFtQyxrQkFBa0IsK0JBQStCLHNCQUFzQix3QkFBd0IsNENBQTRDLDRCQUE0QixXQUFXLG9EQUFvRCx3QkFBd0IsOENBQThDLEtBQUssNEZBQTRGLHdCQUF3QixpREFBaUQseUNBQXlDLHVGQUF1RixTQUFTLEtBQUssc0JBQXNCLDJCQUEyQixxQkFBcUIsd0JBQXdCLHdDQUF3QyxNQUFNLHFCQUFxQixzQkFBc0IsT0FBTywrRUFBK0UsMENBQTBDLHdCQUF3QiwwRkFBMEYsa0ZBQWtGLDBRQUEwUSwrRkFBK0Ysd0JBQXdCLGtFQUFrRSx5RUFBeUUsbUJBQW1CLHNCQUFzQixxQkFBcUIsd0JBQXdCLGlCQUFpQixxQkFBcUIsdUJBQXVCLG1CQUFtQixrQkFBa0Isc0JBQXNCLDZCQUE2QixlQUFlLGtJQUFrSSxZQUFZLHdIQUF3SCxxSkFBcUosU0FBUyxTQUFTLHVCQUF1Qix3Q0FBd0MsbUNBQW1DLHdCQUF3Qix5Q0FBeUMsZ0RBQWdELCtDQUErQywrRkFBK0Ysa0NBQWtDLHdCQUF3QixJQUFJLDJDQUEyQyxRQUFRLDBEQUEwRCxpQ0FBaUMsd0JBQXdCLElBQUksdUVBQXVFLHFEQUFxRCxRQUFRLDJEQUEyRCw2QkFBNkIscUNBQXFDLHdCQUF3QixzS0FBc0ssd0NBQXdDLHdCQUF3QiwySkFBMkosb0JBQW9CLHdCQUF3Qiw4RkFBOEYsdUJBQXVCLHdCQUF3QiwwRkFBMEYsbUNBQW1DLHdCQUF3QixvRkFBb0YsdUNBQXVDLHdCQUF3QixrRkFBa0YscUNBQXFDLHdCQUF3QixvRkFBb0YseUNBQXlDLHdCQUF3QixrRkFBa0YsOENBQThDLHNCQUFzQixpREFBaUQsa0NBQWtDLGlIQUFpSCxlQUFlLGNBQWMsd0JBQXdCLGkyQkFBaTJCLDREQUE0RCw2RUFBNkUsa0RBQWtELHdCQUF3QiwwUUFBMFEsSUFBSSxvSEFBb0gsNFZBQTRWLDJEQUEyRCxFQUFFLGFBQWEsZ0NBQWdDLGNBQWMsa0VBQWtFLDRFQUE0RSxvQkFBb0Isd0hBQXdILGtDQUFrQyxLQUFLLDBEQUEwRCxvQkFBb0IsK0dBQStHLDBEQUEwRCx3SkFBd0osdUVBQXVFLHFGQUFxRix3QkFBd0IsZ0VBQWdFLGVBQWUsUUFBUSx1SEFBdUgsZUFBZSxRQUFRLHFJQUFxSSxrQkFBa0Isb0JBQW9CLGVBQWUsZ0dBQWdHLHdCQUF3QixnRUFBZ0UsZUFBZSxRQUFRLG1IQUFtSCxlQUFlLFFBQVEsNENBQTRDLHdOQUF3TixrQkFBa0Isb0JBQW9CLGVBQWUsY0FBYyxJQUFJLGtKQUFrSix5RUFBeUUsZUFBZSxPQUFPLGlJQUFpSSxlQUFlLE9BQU8sa0hBQWtILE9BQU8sOEZBQThGLDJIQUEySCx3REFBd0Qsb0JBQW9CLHNPQUFzTyxnRUFBZ0UsZUFBZSxPQUFPLGdJQUFnSSxlQUFlLE9BQU8sMkhBQTJILCsrQkFBKytCLHdEQUF3RCxvQkFBb0IsNkNBQTZDLDhEQUE4RCxpQkFBaUIsMENBQTBDLHVSQUF1Uiw4QkFBOEIsd0JBQXdCLHdFQUF3RSxzQkFBc0Isd0JBQXdCLDRIQUE0SCxrREFBa0Qsd0JBQXdCLG9GQUFvRiw4QkFBOEIscUNBQXFDLDhqQkFBOGpCLDhCQUE4Qix3QkFBd0IsMEVBQTBFLDhCQUE4Qix3QkFBd0IsMEZBQTBGLDhCQUE4Qix3QkFBd0IsMEZBQTBGLGdGQUFnRixtQkFBbUIsMkJBQTJCLDZLQUE2SyxtWEFBbVgsOEZBQThGLHVDQUF1QywwRkFBMEYsNktBQTZLLGtUQUFrVCxzRUFBc0UsdUNBQXVDLG9EQUFvRCw2QkFBNkIsRUFBRSxxRkFBcUYsNkVBQTZFLElBQUksb0VBQW9FLGtIQUFrSCxxRUFBcUUsaUhBQWlILDREQUE0RCx5RUFBeUUsZ0hBQWdILDBEQUEwRCxxUEFBcVAsY0FBYyxJQUFJLDBDQUEwQyxpQkFBaUIsa0JBQWtCLDZFQUE2RSx3REFBd0QsNEZBQTRGLHdHQUF3Ryx3QkFBd0IsaUlBQWlJLEdBQUcsRUFBRSxLQUFLLGlQQUFpUCxzSEFBc0gsNEhBQTRILHdCQUF3Qix5SEFBeUgsR0FBRyxrQkFBa0IsUUFBUSwyR0FBMkcsNERBQTRELGlGQUFpRixzRkFBc0YsbURBQW1ELCtTQUErUyw4QkFBOEIsd0JBQXdCLDRIQUE0SCw2QkFBNkIsd0JBQXdCLDBEQUEwRCxjQUFjLElBQUksZ0RBQWdELE1BQU0sNkRBQTZELGlTQUFpUyw0REFBNEQsd0JBQXdCLHFMQUFxTCx3Q0FBd0Msd0JBQXdCLGlMQUFpTCx5Q0FBeUMseUNBQXlDLHlDQUF5Qyw4QkFBOEIsd0JBQXdCLDJDQUEyQywyREFBMkQsd0JBQXdCLHdRQUF3USw2Q0FBNkMsd0JBQXdCLGNBQWMsSUFBSSxnSUFBZ0ksOEhBQThILE9BQU8sUUFBUSwrREFBK0QsMkZBQTJGLCtGQUErRix5Q0FBeUMsb0dBQW9HLE1BQU0sa0dBQWtHLE1BQU0sd0ZBQXdGLFFBQVEsdVFBQXVRLCtCQUErQix3QkFBd0IsaURBQWlELDhCQUE4Qix3QkFBd0IsbVFBQW1RLDRJQUE0SSw2REFBNkQsR0FBRyx3Q0FBd0Msd0JBQXdCLGdHQUFnRyx3R0FBd0csb0JBQW9CLGFBQWEscURBQXFELG9IQUFvSCxzRUFBc0Usc0NBQXNDLGVBQWUsd0NBQXdDLDJQQUEyUCx5Q0FBeUMsK0JBQStCLHdCQUF3Qix3QkFBd0IsNkhBQTZILHlDQUF5Qyw4QkFBOEIsd0JBQXdCLDRHQUE0Ryx5Q0FBeUMsOEJBQThCLHdCQUF3Qiw4UEFBOFAsNkJBQTZCLCtFQUErRSx3QkFBd0Isd0JBQXdCLElBQUksb05BQW9OLHNDQUFzQywrQkFBK0IsNkxBQTZMLEVBQUUsOElBQThJLHdCQUF3QixpQkFBaUIsb3ZCQUFvdkIsaURBQWlELGFBQWEsc0JBQXNCLHFDQUFxQywyREFBMkQsd0NBQXdDLDRDQUE0QyxHQUFHLGlDQUFpQyxzQ0FBc0MsSUFBSSx5RkFBeUYsaUJBQWlCLHFEQUFxRCxvQkFBb0IsSUFBSSxRQUFRLHFDQUFxQyxPQUFPLHVEQUF1RCx1RkFBdUYsSUFBSSxpQkFBaUIsT0FBTyx1REFBdUQsNENBQTRDLHVFQUF1RSxxQ0FBcUMsSUFBSSxRQUFRLElBQUkseUJBQXlCLDBCQUEwQiw4Z0JBQThnQixTQUFTLG9DQUFvQyxxSkFBcUosSUFBSSxZQUFZLHVCQUF1QixJQUFJLDBCQUEwQixXQUFXLFVBQVUsdUJBQXVCLElBQUksNEJBQTRCLFdBQVcsVUFBVSxpQkFBaUIsSUFBSSx1QkFBdUIsWUFBWSxpQkFBaUIsSUFBSSwwQkFBMEIsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDckJyem9DO0FBQ0E7QUFDQztBQUNrQzs7O0FBRzdEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLEVBQUUseUVBQWU7QUFDakI7O0FBRUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9sb2FkaW5nLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jc3MvZ2xvYmFsLmNzcz81ODRhIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3NzL2hlYWRlci5jc3M/OGFjMSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Nzcy9sb2FkaW5nLmNzcz9iNmM3Iiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvYXBpQ2FsbHMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hc3NldHMvd2VhdGhlckFwcC9oZWFkZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlckFwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0pQOndnaHRAMTAwOzQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEpQXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LDI0MiwyNTUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUZBQXFGO0FBQ3ZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUDp3Z2h0QDEwMDs0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnMgSlBcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDE1cHggMjBweCAxNXB4O1xufVxuXG4uaGVhZGVyX19jaXR5X19jb250YWluZXIge1xuICBmbGV4OiAxO1xufVxuXG4uaGVhZGVyX19jaXR5X19uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGUge1xuICBjb2xvcjogI2E4YjFkZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyX19jaXR5X19uYW1lX19jaXR5IHtcbiAgY29sb3I6ICM0OTQxNzM7XG59XG5cbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fY2l0eV9fdG1wVG9nZ2xlX190ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLnN3aXRjaCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFN3aXRjaCBTdHlsZVxuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5zd2l0Y2gsXG4uc3dpdGNoIGlucHV0LFxuLnN3aXRjaCAuc2xpZGVyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQxNzM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzQ5NDE3Mztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O2tEQUVrRDs7QUFFbEQ7OztFQUdFLGlCQUFpQjtBQUNuQjtBQUNBLDJDQUEyQztBQUMzQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4IDE1cHggMjBweCAxNXB4O1xcbn1cXG5cXG4uaGVhZGVyX19jaXR5X19jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmhlYWRlcl9fY2l0eV9fbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZSB7XFxuICBjb2xvcjogI2E4YjFkZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmhlYWRlcl9fY2l0eV9fbmFtZV9fY2l0eSB7XFxuICBjb2xvcjogIzQ5NDE3MztcXG59XFxuXFxuLmhlYWRlcl9fY2l0eV9fdG1wVG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXJfX2NpdHlfX3RtcFRvZ2dsZV9fdGV4dCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbn1cXG4uc3dpdGNoIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgICBTd2l0Y2ggU3R5bGVcXG4gICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uc3dpdGNoLFxcbi5zd2l0Y2ggaW5wdXQsXFxuLnN3aXRjaCAuc2xpZGVyIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQxNzM7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICM0OTQxNzM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMjM2LDI0MiwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2xvYWRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIscUZBQXFGO0FBQ3ZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2FkaW5nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzYsMjQyLDI1NSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDIzNiwyNDIsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYWRpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcbiAqIFJldHVybiB0aGUgd2VhdGhlciBmb3IgdGhlIGdpdmVuIGxvY2F0aW9uXG4gKiBVc2UgdGhlIHdlYXRoZXJhcGkuY29tIEFQSVxuICogQHNlZSBodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9kb2NzL1xuICogQHNlZSBodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9hcGktZXhwbG9yZXIuYXNweFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uXG4gKiByZXR1cm4ge29iamVjdH0gd2VhdGhlclxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPW5vYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuIiwiLyoqXG4gKiBQcmludCBpbiB0aGUgSGVhZGVyIHRoZSBEYXRlIGFuZCB0aGUgQ2l0eVxuICogQHBhcmFtIHtPYmplY3R9IGxvY2F0aW9uXG4gKi9cbmZ1bmN0aW9uIHByaW50SGVhZGVyRGF0YShsb2NhdGlvbikge1xuICAvLyBHZXR0aW5nIERPTSBFbGVtZW50c1xuICBjb25zdCBuYW1lQ2l0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jaXR5X19uYW1lX19jaXR5Jyk7XG4gIGNvbnN0IHRleHREYXlFbGVtZW50ID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZV9fdGV4dERheScpO1xuICBjb25zdCBudW1iZXJEYXlFbGVtZW50ID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2l0eV9fbmFtZV9fZGF0ZV9fbnVtYmVyRGF5Jyk7XG4gIGNvbnN0IG1vbnRoRWxlbWVudCA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NpdHlfX25hbWVfX2RhdGVfX3RleHRNb250aCcpO1xuICAvLyBTZXR0aW5nIHRoZSBjb250ZW50XG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShsb2NhdGlvbi5sb2NhbHRpbWUpO1xuXG4gIG5hbWVDaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGxvY2F0aW9uLm5hbWU7IC8vIENpdHkgTmFtZVxuICB0ZXh0RGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGRheXNbZGF0ZS5nZXREYXkoKV07IC8vIERheSBvZiB0aGUgV2Vla1xuICBudW1iZXJEYXlFbGVtZW50LnRleHRDb250ZW50ID0gZGF0ZS5nZXREYXRlKCk7IC8vIERheSBvZiB0aGUgTW9udGhcbiAgbW9udGhFbGVtZW50LnRleHRDb250ZW50ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7bW9udGg6ICdsb25nJ30pOyAvLyBNb250aFxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmludEhlYWRlckRhdGE7XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi4vYXBpQ2FsbHMvYXBpQ2FsbHMnO1xuaW1wb3J0IHByaW50SGVhZGVyRGF0YSBmcm9tICcuL2hlYWRlckRhdGEnO1xuXG5jb25zdCBsb2NhdGlvbiA9ICdNw6FsYWdhJztcblxuLyoqXG4gKiBQcmludCBhbGwgdGhlIHdlYXRoZXIgYXBwXG4gKiBTbGlkZXMgdGhlIHdlYXRoZXIgYXBwIGluIGFuZCBvdXRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcHJpbnRXZWF0aGVyQXBwKCkge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcblxuICBpZiAod2VhdGhlckRhdGEuZXJyb3IpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGBhYjljYWZiN18wYCx3ZWF0aGVyRGF0YS5lcnJvcikpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHByaW50SGVhZGVyRGF0YSh3ZWF0aGVyRGF0YS5sb2NhdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaW50V2VhdGhlckFwcDtcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4MjMwOTk1PV8weDQxM2Y7KGZ1bmN0aW9uKF8weDFmNTNjMCxfMHgzNjNiMWIpe3ZhciBfMHgyNzFhODM9XzB4NDEzZixfMHg1ZTA3NzU9XzB4MWY1M2MwKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHgyNDJiNDA9LXBhcnNlSW50KF8weDI3MWE4MygweDFlNikpLzB4MSstcGFyc2VJbnQoXzB4MjcxYTgzKDB4MWI4KSkvMHgyKy1wYXJzZUludChfMHgyNzFhODMoMHgxY2MpKS8weDMrcGFyc2VJbnQoXzB4MjcxYTgzKDB4MWU1KSkvMHg0KigtcGFyc2VJbnQoXzB4MjcxYTgzKDB4MjFkKSkvMHg1KSstcGFyc2VJbnQoXzB4MjcxYTgzKDB4MTk1KSkvMHg2KigtcGFyc2VJbnQoXzB4MjcxYTgzKDB4MjQxKSkvMHg3KSstcGFyc2VJbnQoXzB4MjcxYTgzKDB4MjU1KSkvMHg4KigtcGFyc2VJbnQoXzB4MjcxYTgzKDB4MjM5KSkvMHg5KStwYXJzZUludChfMHgyNzFhODMoMHgxZTcpKS8weGEqKHBhcnNlSW50KF8weDI3MWE4MygweDI3OSkpLzB4Yik7aWYoXzB4MjQyYjQwPT09XzB4MzYzYjFiKWJyZWFrO2Vsc2UgXzB4NWUwNzc1WydwdXNoJ10oXzB4NWUwNzc1WydzaGlmdCddKCkpO31jYXRjaChfMHg1ZDNjYzEpe18weDVlMDc3NVsncHVzaCddKF8weDVlMDc3NVsnc2hpZnQnXSgpKTt9fX0oXzB4MjdmMCwweGVhNmI1KSk7dmFyIHVlPU9iamVjdFsnY3JlYXRlJ10sdGU9T2JqZWN0WydkZWZpbmVQcm9wZXJ0eSddLGhlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sbGU9T2JqZWN0W18weDIzMDk5NSgweDIwZSldLGZlPU9iamVjdFtfMHgyMzA5OTUoMHgyMTYpXSxfZT1PYmplY3RbJ3Byb3RvdHlwZSddW18weDIzMDk5NSgweDIzMCldLHBlPShfMHgzNGUwYmIsXzB4NDA3ZDIzLF8weDMyZGUyNSxfMHgzNmMzNmEpPT57dmFyIF8weGMzNjcwMD1fMHgyMzA5OTU7aWYoXzB4NDA3ZDIzJiZ0eXBlb2YgXzB4NDA3ZDIzPT1fMHhjMzY3MDAoMHgyNTgpfHx0eXBlb2YgXzB4NDA3ZDIzPT1fMHhjMzY3MDAoMHgxZWQpKXtmb3IobGV0IF8weDJkNTkwNCBvZiBsZShfMHg0MDdkMjMpKSFfZVtfMHhjMzY3MDAoMHgxYTQpXShfMHgzNGUwYmIsXzB4MmQ1OTA0KSYmXzB4MmQ1OTA0IT09XzB4MzJkZTI1JiZ0ZShfMHgzNGUwYmIsXzB4MmQ1OTA0LHsnZ2V0JzooKT0+XzB4NDA3ZDIzW18weDJkNTkwNF0sJ2VudW1lcmFibGUnOiEoXzB4MzZjMzZhPWhlKF8weDQwN2QyMyxfMHgyZDU5MDQpKXx8XzB4MzZjMzZhW18weGMzNjcwMCgweDIzYildfSk7fXJldHVybiBfMHgzNGUwYmI7fSxuZT0oXzB4MzU1OTdkLF8weDM4MWNmNCxfMHgxZjdjZTApPT4oXzB4MWY3Y2UwPV8weDM1NTk3ZCE9bnVsbD91ZShmZShfMHgzNTU5N2QpKTp7fSxwZShfMHgzODFjZjR8fCFfMHgzNTU5N2R8fCFfMHgzNTU5N2RbXzB4MjMwOTk1KDB4MWE2KV0/dGUoXzB4MWY3Y2UwLF8weDIzMDk5NSgweDIwMikseyd2YWx1ZSc6XzB4MzU1OTdkLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4MWY3Y2UwLF8weDM1NTk3ZCkpLFE9Y2xhc3N7Y29uc3RydWN0b3IoXzB4MmZjNDQwLF8weDE1MmNlNyxfMHg0MjJhNmIsXzB4MjAzZDJjKXt2YXIgXzB4MmYxNzIwPV8weDIzMDk5NTt0aGlzW18weDJmMTcyMCgweDIwNildPV8weDJmYzQ0MCx0aGlzW18weDJmMTcyMCgweDIxNCldPV8weDE1MmNlNyx0aGlzW18weDJmMTcyMCgweDFiMSldPV8weDQyMmE2Yix0aGlzWydub2RlTW9kdWxlcyddPV8weDIwM2QyYyx0aGlzW18weDJmMTcyMCgweDIxNSldPSEweDAsdGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgwLHRoaXNbXzB4MmYxNzIwKDB4MjAzKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1tfMHgyZjE3MjAoMHgxZjkpXT0hIXRoaXNbXzB4MmYxNzIwKDB4MjA2KV1bXzB4MmYxNzIwKDB4MWVlKV0sdGhpc1tfMHgyZjE3MjAoMHgyMzQpXT1udWxsLHRoaXNbXzB4MmYxNzIwKDB4MjI1KV09MHgwLHRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J109MHgxNCx0aGlzW18weDJmMTcyMCgweDI3MildPV8weDJmMTcyMCgweDFkZiksdGhpc1tfMHgyZjE3MjAoMHgxYTkpXT0odGhpc1tfMHgyZjE3MjAoMHgxZjkpXT8nQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnOidDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcpK3RoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ107fWFzeW5jW18weDIzMDk5NSgweDI2MCldKCl7dmFyIF8weDJmOWM4Mz1fMHgyMzA5OTU7aWYodGhpc1snX1dlYlNvY2tldENsYXNzJ10pcmV0dXJuIHRoaXNbXzB4MmY5YzgzKDB4MjM0KV07bGV0IF8weDU0MzFiMTtpZih0aGlzW18weDJmOWM4MygweDFmOSldKV8weDU0MzFiMT10aGlzW18weDJmOWM4MygweDIwNildWydXZWJTb2NrZXQnXTtlbHNle2lmKHRoaXNbXzB4MmY5YzgzKDB4MjA2KV1bXzB4MmY5YzgzKDB4MjQwKV0/LltfMHgyZjljODMoMHgyMGIpXSlfMHg1NDMxYjE9dGhpc1tfMHgyZjljODMoMHgyMDYpXVsncHJvY2VzcyddPy5bXzB4MmY5YzgzKDB4MjBiKV07ZWxzZSB0cnl7bGV0IF8weDM1M2FjYj1hd2FpdCBpbXBvcnQoXzB4MmY5YzgzKDB4MjUwKSk7XzB4NTQzMWIxPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydCgndXJsJykpW18weDJmOWM4MygweDI0ZSldKF8weDM1M2FjYltfMHgyZjljODMoMHgyMmQpXSh0aGlzW18weDJmOWM4MygweDIyYildLCd3cy9pbmRleC5qcycpKVtfMHgyZjljODMoMHgxYWQpXSgpKSlbXzB4MmY5YzgzKDB4MjAyKV07fWNhdGNoe3RyeXtfMHg1NDMxYjE9cmVxdWlyZShyZXF1aXJlKF8weDJmOWM4MygweDI1MCkpW18weDJmOWM4MygweDIyZCldKHRoaXNbXzB4MmY5YzgzKDB4MjJiKV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MmY5YzgzKDB4MjIzKSk7fX19cmV0dXJuIHRoaXNbXzB4MmY5YzgzKDB4MjM0KV09XzB4NTQzMWIxLF8weDU0MzFiMTt9W18weDIzMDk5NSgweDI2MildKCl7dmFyIF8weDQ0NWE5MT1fMHgyMzA5OTU7dGhpc1tfMHg0NDVhOTEoMHgxYTgpXXx8dGhpc1tfMHg0NDVhOTEoMHgyMDMpXXx8dGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT49dGhpc1tfMHg0NDVhOTEoMHgyNjUpXXx8KHRoaXNbXzB4NDQ1YTkxKDB4MWUyKV09ITB4MSx0aGlzW18weDQ0NWE5MSgweDFhOCldPSEweDAsdGhpc1tfMHg0NDVhOTEoMHgyMjUpXSsrLHRoaXNbJ193cyddPW5ldyBQcm9taXNlKChfMHhiOTYxLF8weDJlMWVlYSk9Pnt2YXIgXzB4MzAwMjZiPV8weDQ0NWE5MTt0aGlzW18weDMwMDI2YigweDI2MCldKClbJ3RoZW4nXShfMHg0NDJhMWM9Pnt2YXIgXzB4ZWM1OGJhPV8weDMwMDI2YjtsZXQgXzB4MjI0YTRkPW5ldyBfMHg0NDJhMWMoXzB4ZWM1OGJhKDB4MjZhKSt0aGlzW18weGVjNThiYSgweDIxNCldKyc6Jyt0aGlzW18weGVjNThiYSgweDFiMSldKTtfMHgyMjRhNGRbXzB4ZWM1OGJhKDB4MjQ0KV09KCk9Pnt2YXIgXzB4NTI2M2FiPV8weGVjNThiYTt0aGlzW18weDUyNjNhYigweDIxNSldPSEweDEsdGhpc1tfMHg1MjYzYWIoMHgyNmUpXShfMHgyMjRhNGQpLHRoaXNbXzB4NTI2M2FiKDB4MjIyKV0oKSxfMHgyZTFlZWEobmV3IEVycm9yKF8weDUyNjNhYigweDIwZCkpKTt9LF8weDIyNGE0ZFtfMHhlYzU4YmEoMHgyNjEpXT0oKT0+e3ZhciBfMHgzOWEwNDQ9XzB4ZWM1OGJhO3RoaXNbJ19pbkJyb3dzZXInXXx8XzB4MjI0YTRkW18weDM5YTA0NCgweDIwZildJiZfMHgyMjRhNGRbXzB4MzlhMDQ0KDB4MjBmKV1bXzB4MzlhMDQ0KDB4MWQxKV0mJl8weDIyNGE0ZFtfMHgzOWEwNDQoMHgyMGYpXVtfMHgzOWEwNDQoMHgxZDEpXSgpLF8weGI5NjEoXzB4MjI0YTRkKTt9LF8weDIyNGE0ZFtfMHhlYzU4YmEoMHgxYzUpXT0oKT0+e3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MCx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDIyNGE0ZCksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO30sXzB4MjI0YTRkWydvbm1lc3NhZ2UnXT1fMHhlYzRiNDM9Pnt2YXIgXzB4NWU4NmUyPV8weGVjNThiYTt0cnl7XzB4ZWM0YjQzJiZfMHhlYzRiNDNbXzB4NWU4NmUyKDB4MWYxKV0mJnRoaXNbXzB4NWU4NmUyKDB4MWY5KV0mJkpTT05bJ3BhcnNlJ10oXzB4ZWM0YjQzW18weDVlODZlMigweDFmMSldKVsnbWV0aG9kJ109PT1fMHg1ZTg2ZTIoMHgxZDYpJiZ0aGlzW18weDVlODZlMigweDIwNildWydsb2NhdGlvbiddW18weDVlODZlMigweDFkNildKCk7fWNhdGNoe319O30pW18weDMwMDI2YigweDIwNSldKF8weGVlOTc0MT0+KHRoaXNbXzB4MzAwMjZiKDB4MjAzKV09ITB4MCx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1tfMHgzMDAyNmIoMHgxZTIpXT0hMHgxLHRoaXNbXzB4MzAwMjZiKDB4MjE1KV09ITB4MCx0aGlzW18weDMwMDI2YigweDIyNSldPTB4MCxfMHhlZTk3NDEpKVtfMHgzMDAyNmIoMHgyNDkpXShfMHgxODZjMDY9Pih0aGlzWydfY29ubmVjdGVkJ109ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsY29uc29sZVtfMHgzMDAyNmIoMHgxYmUpXShfMHgzMDAyNmIoMHgyMjQpK3RoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ10pLF8weDJlMWVlYShuZXcgRXJyb3IoXzB4MzAwMjZiKDB4MjI4KSsoXzB4MTg2YzA2JiZfMHgxODZjMDZbXzB4MzAwMjZiKDB4MWJiKV0pKSkpKTt9KSk7fVsnX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgyMTBlM2Qpe3ZhciBfMHg0MGU0ZTQ9XzB4MjMwOTk1O3RoaXNbXzB4NDBlNGU0KDB4MjAzKV09ITB4MSx0aGlzW18weDQwZTRlNCgweDFhOCldPSEweDE7dHJ5e18weDIxMGUzZFtfMHg0MGU0ZTQoMHgxYzUpXT1udWxsLF8weDIxMGUzZFtfMHg0MGU0ZTQoMHgyNDQpXT1udWxsLF8weDIxMGUzZFtfMHg0MGU0ZTQoMHgyNjEpXT1udWxsO31jYXRjaHt9dHJ5e18weDIxMGUzZFtfMHg0MGU0ZTQoMHgxYjcpXTwweDImJl8weDIxMGUzZFtfMHg0MGU0ZTQoMHgyMmEpXSgpO31jYXRjaHt9fVtfMHgyMzA5OTUoMHgyMjIpXSgpe3ZhciBfMHgxMzA3MDk9XzB4MjMwOTk1O2NsZWFyVGltZW91dCh0aGlzW18weDEzMDcwOSgweDFkZSldKSwhKHRoaXNbJ19jb25uZWN0QXR0ZW1wdENvdW50J10+PXRoaXNbXzB4MTMwNzA5KDB4MjY1KV0pJiYodGhpc1tfMHgxMzA3MDkoMHgxZGUpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDFlMjQyND1fMHgxMzA3MDk7dGhpc1tfMHgxZTI0MjQoMHgyMDMpXXx8dGhpc1tfMHgxZTI0MjQoMHgxYTgpXXx8KHRoaXNbXzB4MWUyNDI0KDB4MjYyKV0oKSx0aGlzW18weDFlMjQyNCgweDFkMyldPy5bXzB4MWUyNDI0KDB4MjQ5KV0oKCk9PnRoaXNbXzB4MWUyNDI0KDB4MjIyKV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MTMwNzA5KDB4MWRlKV1bXzB4MTMwNzA5KDB4MWQxKV0mJnRoaXNbJ19yZWNvbm5lY3RUaW1lb3V0J11bXzB4MTMwNzA5KDB4MWQxKV0oKSk7fWFzeW5jW18weDIzMDk5NSgweDFkNCldKF8weDNhYTkxMCl7dmFyIF8weDQ2ZDMxNT1fMHgyMzA5OTU7dHJ5e2lmKCF0aGlzWydfYWxsb3dlZFRvU2VuZCddKXJldHVybjt0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddJiZ0aGlzW18weDQ2ZDMxNSgweDI2MildKCksKGF3YWl0IHRoaXNbJ193cyddKVtfMHg0NmQzMTUoMHgxZDQpXShKU09OW18weDQ2ZDMxNSgweDIyZSldKF8weDNhYTkxMCkpO31jYXRjaChfMHg1YTE3MzIpe2NvbnNvbGVbJ3dhcm4nXSh0aGlzW18weDQ2ZDMxNSgweDFhOSldKyc6XFxcXHgyMCcrKF8weDVhMTczMiYmXzB4NWExNzMyWydtZXNzYWdlJ10pKSx0aGlzW18weDQ2ZDMxNSgweDIxNSldPSEweDEsdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO319fTtmdW5jdGlvbiBfMHgyN2YwKCl7dmFyIF8weDViMmExMz1bJ1xcXFx4MjBzZXJ2ZXInLCdfcXVvdGVkUmVnRXhwJywnc3RhY2tUcmFjZUxpbWl0Jywnc2VyaWFsaXplJywnY2FwcGVkJywnZ2V0dGVyJywnZGVmYXVsdCcsJ19jb25uZWN0ZWQnLCdiaW5kJywndGhlbicsJ2dsb2JhbCcsJ3Byb3BzJywnc2V0JywnX251bWJlclJlZ0V4cCcsJ3BlcmZfaG9va3MnLCdfV2ViU29ja2V0JywncmVkdWNlTGltaXRzJywnbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicsJ2dldE93blByb3BlcnR5TmFtZXMnLCdfc29ja2V0JywnY3VycmVudCcsJ3N0ckxlbmd0aCcsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywncGVyZm9ybWFuY2UnLCdob3N0JywnX2FsbG93ZWRUb1NlbmQnLCdnZXRQcm90b3R5cGVPZicsJ3ZhbHVlT2YnLCd1bnNoaWZ0JywnX3BfbGVuZ3RoJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ2V4cElkJywnX2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJzIwWUNTRU9JJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdpbmRleCcsJ25lZ2F0aXZlSW5maW5pdHknLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdfY29uc29sZV9uaW5qYScsJ25hbWUnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdjb25jYXQnLCdjbG9zZScsJ25vZGVNb2R1bGVzJywnNjQyNjknLCdqb2luJywnc3RyaW5naWZ5JywndG9Mb3dlckNhc2UnLCdoYXNPd25Qcm9wZXJ0eScsJ2NvdW50JywnY2FwcGVkRWxlbWVudHMnLCdnZXQnLCdfV2ViU29ja2V0Q2xhc3MnLCdfaXNVbmRlZmluZWQnLCcnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJzpsb2dQb2ludElkOicsJzg5MjUzVWxVb2FEJywndmFsdWUnLCdlbnVtZXJhYmxlJywnX29iamVjdFRvU3RyaW5nJywnYXV0b0V4cGFuZCcsJ05FR0FUSVZFX0lORklOSVRZJywnbG9nJywncHJvY2VzcycsJzcxMTMyNzRFUmp2amYnLCdjb25zdHJ1Y3RvcicsJ19pc01hcCcsJ29uZXJyb3InLCdhdXRvRXhwYW5kTGltaXQnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJzEuMC4wJywnX2FkZExvYWROb2RlJywnY2F0Y2gnLCdkYXRlJywnbnV4dCcsJ19zZXROb2RlTGFiZWwnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ3BhdGhUb0ZpbGVVUkwnLCcuLi4nLCdwYXRoJywnbWF0Y2gnLCdfU3ltYm9sJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnYXN0cm8nLCc1NjhQWkV0eVYnLCdmdW5jTmFtZScsJ1BPU0lUSVZFX0lORklOSVRZJywnb2JqZWN0JywnMTI3LjAuMC4xJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ2xlbmd0aCcsJ191bmRlZmluZWQnLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX2FkZFByb3BlcnR5JywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdvbm9wZW4nLCdfY29ubmVjdFRvSG9zdE5vdycsJ1N0cmluZycsJ3RpbWUnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ19jbGVhbk5vZGUnLCd2ZXJzaW9ucycsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJNYWNCb29rLVByby1kZS1Kb3NlLmxvY2FsXFxcIixcXFwiMTkyLjE2OC4xLjEzMVxcXCJdLCdzb3J0Jywnd3M6Ly8nLCdub2RlJywnYXV0b0V4cGFuZE1heERlcHRoJywnX2NhcElmU3RyaW5nJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ19wX25hbWUnLCdsb2NhdGlvbicsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnX3Byb3BlcnR5QWNjZXNzb3InLCd1bmtub3duJywnZGlzYWJsZWRMb2cnLCdfdHlwZScsJ0Vycm9yJywndHlwZScsJzUyMjYyNTczck1HcUplJywnNlV2aVhqZycsJ3RyYWNlJywnU3ltYm9sJywndGVzdCcsJ2RlcHRoJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnUmVnRXhwJywnX2hhc1NldE9uSXRzUGF0aCcsJ3N1YnN0cicsJ251bWJlcicsJ3N0cmluZycsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ2xldmVsJywnY2FsbCcsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdfX2VzJysnTW9kdWxlJywnX2tleVN0clJlZ0V4cCcsJ19jb25uZWN0aW5nJywnX3NlbmRFcnJvck1lc3NhZ2UnLCdlbGFwc2VkJywnYmlnaW50JywncHJvdG90eXBlJywndG9TdHJpbmcnLCdNYXAnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdwb3J0Jywnd2VicGFjaycsJ2lzQXJyYXknLCduZWdhdGl2ZVplcm8nLCdfcHJvcGVydHknLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdyZWFkeVN0YXRlJywnMzE2OTUyMHNZZFliZycsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdyb290X2V4cCcsJ21lc3NhZ2UnLCdfc2V0Tm9kZUlkJywnc2xpY2UnLCd3YXJuJywnX2lzUHJpbWl0aXZlVHlwZScsJ3Jlc29sdmVHZXR0ZXJzJywnZWxlbWVudHMnLCdhbGxTdHJMZW5ndGgnLCdhcnJheScsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdvbmNsb3NlJywnX3NvcnRQcm9wcycsJ3Jvb3RfZXhwX2lkJywnXFxcXHgyMGJyb3dzZXInLCd0aW1lRW5kJywnbnVsbCcsJ2Vycm9yJywnNTcxMjAzOUFzbWxRYycsJ19kYXRlVG9TdHJpbmcnLCdub0Z1bmN0aW9ucycsJ3RpbWVTdGFtcCcsJ19zZXROb2RlUGVybWlzc2lvbnMnLCd1bnJlZicsJ3B1c2gnLCdfd3MnLCdzZW5kJywncmVwbGFjZScsJ3JlbG9hZCcsJ19wcm9wZXJ0eU5hbWUnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ2ZvckVhY2gnLCdwYXJlbnQnLCdfaXNOZWdhdGl2ZVplcm8nLFxcXCIvVXNlcnMvam9zZW1hcmlhLy52c2NvZGUtaW5zaWRlcnMvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0wLjAuMTk4L25vZGVfbW9kdWxlc1xcXCIsJ2NvbnNvbGUnLCdfcmVjb25uZWN0VGltZW91dCcsJ2h0dHBzOi8vdGlueXVybC5jb20vMzd4OGI3OXQnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdfcF8nLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ3N0YWNrJywnaGl0cycsJzE3NjM4NDRFVE1zalEnLCcyNTg2MzRhaFBXRkYnLCcxMFpOZm5qZicsJ1NldCcsJ3NvcnRQcm9wcycsJ2hydGltZScsJ3N5bWJvbCcsJ3NldHRlcicsJ2Z1bmN0aW9uJywnV2ViU29ja2V0JywnY2FwcGVkUHJvcHMnLCd0b3RhbFN0ckxlbmd0aCcsJ2RhdGEnLCdpbmRleE9mJywnbm93JywnTnVtYmVyJywnc3BsaXQnLCdfcmVnRXhwVG9TdHJpbmcnLCdCdWZmZXInLCd1bmRlZmluZWQnLCdfaW5Ccm93c2VyJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddO18weDI3ZjA9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4NWIyYTEzO307cmV0dXJuIF8weDI3ZjAoKTt9ZnVuY3Rpb24gVihfMHg1YTQ5NmQsXzB4MTc3NGIxLF8weDU0YmNjZCxfMHgxNzA3N2IsXzB4MzQxZGQ2KXt2YXIgXzB4M2Q2MzkzPV8weDIzMDk5NTtsZXQgXzB4MmExYjE2PV8weDU0YmNjZFtfMHgzZDYzOTMoMHgxZjUpXSgnLCcpWydtYXAnXShfMHgyN2Q5YTE9Pnt2YXIgXzB4NTExYWY1PV8weDNkNjM5Mzt0cnl7XzB4NWE0OTZkW18weDUxMWFmNSgweDFmYildfHwoKF8weDM0MWRkNj09PSduZXh0LmpzJ3x8XzB4MzQxZGQ2PT09J3JlbWl4J3x8XzB4MzQxZGQ2PT09XzB4NTExYWY1KDB4MjU0KSkmJihfMHgzNDFkZDYrPV8weDVhNDk2ZFsncHJvY2VzcyddPy5bXzB4NTExYWY1KDB4MjY3KV0/LltfMHg1MTFhZjUoMHgyNmIpXT9fMHg1MTFhZjUoMHgxZmMpOl8weDUxMWFmNSgweDFjOCkpLF8weDVhNDk2ZFtfMHg1MTFhZjUoMHgxZmIpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4MzQxZGQ2fSk7bGV0IF8weGI2ZTNiND1uZXcgUShfMHg1YTQ5NmQsXzB4MTc3NGIxLF8weDI3ZDlhMSxfMHgxNzA3N2IpO3JldHVybiBfMHhiNmUzYjRbXzB4NTExYWY1KDB4MWQ0KV1bXzB4NTExYWY1KDB4MjA0KV0oXzB4YjZlM2I0KTt9Y2F0Y2goXzB4MzkwZDlhKXtyZXR1cm4gY29uc29sZVsnd2FybiddKCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsXzB4MzkwZDlhJiZfMHgzOTBkOWFbXzB4NTExYWY1KDB4MWJiKV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weDM5NTM4OD0+XzB4MmExYjE2W18weDNkNjM5MygweDFkOSldKF8weDIzMmU1Yz0+XzB4MjMyZTVjKF8weDM5NTM4OCkpO31mdW5jdGlvbiBfMHg0MTNmKF8weDdlMWVhZCxfMHgxZjVjNmUpe3ZhciBfMHgyN2YwODQ9XzB4MjdmMCgpO3JldHVybiBfMHg0MTNmPWZ1bmN0aW9uKF8weDQxM2Y5YyxfMHgzMWQ5OGQpe18weDQxM2Y5Yz1fMHg0MTNmOWMtMHgxOTU7dmFyIF8weDI1OTg5OD1fMHgyN2YwODRbXzB4NDEzZjljXTtyZXR1cm4gXzB4MjU5ODk4O30sXzB4NDEzZihfMHg3ZTFlYWQsXzB4MWY1YzZlKTt9ZnVuY3Rpb24gSChfMHg1NDQ0OGEpe3ZhciBfMHg0YTA0NTY9XzB4MjMwOTk1O2xldCBfMHgxYTU2Yjg9ZnVuY3Rpb24oXzB4NDg2NjFhLF8weDNkNTc2Mil7cmV0dXJuIF8weDNkNTc2Mi1fMHg0ODY2MWE7fSxfMHgzZGZkZTY7aWYoXzB4NTQ0NDhhW18weDRhMDQ1NigweDIxMyldKV8weDNkZmRlNj1mdW5jdGlvbigpe3ZhciBfMHgzNThlYmE9XzB4NGEwNDU2O3JldHVybiBfMHg1NDQ0OGFbXzB4MzU4ZWJhKDB4MjEzKV1bJ25vdyddKCk7fTtlbHNle2lmKF8weDU0NDQ4YVsncHJvY2VzcyddJiZfMHg1NDQ0OGFbXzB4NGEwNDU2KDB4MjQwKV1bXzB4NGEwNDU2KDB4MWVhKV0pXzB4M2RmZGU2PWZ1bmN0aW9uKCl7dmFyIF8weDk4NjE3Nz1fMHg0YTA0NTY7cmV0dXJuIF8weDU0NDQ4YVsncHJvY2VzcyddW18weDk4NjE3NygweDFlYSldKCk7fSxfMHgxYTU2Yjg9ZnVuY3Rpb24oXzB4NDhmZTlkLF8weGUzMjdjNCl7cmV0dXJuIDB4M2U4KihfMHhlMzI3YzRbMHgwXS1fMHg0OGZlOWRbMHgwXSkrKF8weGUzMjdjNFsweDFdLV8weDQ4ZmU5ZFsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHhmMDA0YTJ9PXJlcXVpcmUoXzB4NGEwNDU2KDB4MjBhKSk7XzB4M2RmZGU2PWZ1bmN0aW9uKCl7dmFyIF8weDEzMjMwZT1fMHg0YTA0NTY7cmV0dXJuIF8weGYwMDRhMltfMHgxMzIzMGUoMHgxZjMpXSgpO307fWNhdGNoe18weDNkZmRlNj1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDFhNTZiOCwndGltZVN0YW1wJzpfMHgzZGZkZTYsJ25vdyc6KCk9PkRhdGVbXzB4NGEwNDU2KDB4MWYzKV0oKX07fWZ1bmN0aW9uIFgoXzB4NDkxNmRkLF8weDMzNDk5ZCxfMHgzZDRhYmEpe3ZhciBfMHg1YTI3OWQ9XzB4MjMwOTk1O2lmKF8weDQ5MTZkZFsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J10hPT12b2lkIDB4MClyZXR1cm4gXzB4NDkxNmRkW18weDVhMjc5ZCgweDIyMSldO2xldCBfMHg1Mjg2ZDc9XzB4NDkxNmRkW18weDVhMjc5ZCgweDI0MCldPy5bXzB4NWEyNzlkKDB4MjY3KV0/LltfMHg1YTI3OWQoMHgyNmIpXTtyZXR1cm4gXzB4NTI4NmQ3JiZfMHgzZDRhYmE9PT1fMHg1YTI3OWQoMHgyNGIpP18weDQ5MTZkZFtfMHg1YTI3OWQoMHgyMjEpXT0hMHgxOl8weDQ5MTZkZFtfMHg1YTI3OWQoMHgyMjEpXT1fMHg1Mjg2ZDd8fCFfMHgzMzQ5OWR8fF8weDQ5MTZkZFtfMHg1YTI3OWQoMHgyNzEpXT8uWydob3N0bmFtZSddJiZfMHgzMzQ5OWRbJ2luY2x1ZGVzJ10oXzB4NDkxNmRkW18weDVhMjc5ZCgweDI3MSldWydob3N0bmFtZSddKSxfMHg0OTE2ZGRbXzB4NWEyNzlkKDB4MjIxKV07fSgoXzB4MWFlY2MxLF8weDE2OWRiMCxfMHgzZjc4NGYsXzB4NTA1ODY5LF8weDVhZWU2MyxfMHg5NGNmOGMsXzB4NDljOGM1LF8weDU4YTczMixfMHgyOTA4OTUpPT57dmFyIF8weDQ1NTI3MT1fMHgyMzA5OTU7aWYoXzB4MWFlY2MxWydfY29uc29sZV9uaW5qYSddKXJldHVybiBfMHgxYWVjYzFbXzB4NDU1MjcxKDB4MjI2KV07aWYoIVgoXzB4MWFlY2MxLF8weDU4YTczMixfMHg1YWVlNjMpKXJldHVybiBfMHgxYWVjYzFbXzB4NDU1MjcxKDB4MjI2KV09eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDFhZWNjMVsnX2NvbnNvbGVfbmluamEnXTtsZXQgXzB4NTg5ZmY0PXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDM5M2M3MD17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9LF8weDIxZWNlOT1IKF8weDFhZWNjMSksXzB4MWIxYzNhPV8weDIxZWNlOVtfMHg0NTUyNzEoMHgxYWEpXSxfMHgyY2IzMWQ9XzB4MjFlY2U5W18weDQ1NTI3MSgweDFjZildLF8weDNhOWEyZj1fMHgyMWVjZTlbXzB4NDU1MjcxKDB4MWYzKV0sXzB4MThiZTZlPXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4MTQ5ZDBhPV8weDM5Mzc4YT0+e18weDE4YmU2ZVsndHMnXVtfMHgzOTM3OGFdPV8weDJjYjMxZCgpO30sXzB4NDRkOGNjPShfMHgxZTdiYzgsXzB4MmQ2MmY0KT0+e3ZhciBfMHg1YzFhYjM9XzB4NDU1MjcxO2xldCBfMHgyZDcwYWU9XzB4MThiZTZlWyd0cyddW18weDJkNjJmNF07aWYoZGVsZXRlIF8weDE4YmU2ZVsndHMnXVtfMHgyZDYyZjRdLF8weDJkNzBhZSl7bGV0IF8weDE2YzE3Nj1fMHgxYjFjM2EoXzB4MmQ3MGFlLF8weDJjYjMxZCgpKTtfMHgxMjg3ZTQoXzB4MTg5OGJlKF8weDVjMWFiMygweDI2NCksXzB4MWU3YmM4LF8weDNhOWEyZigpLF8weDU3Yzk1NyxbXzB4MTZjMTc2XSxfMHgyZDYyZjQpKTt9fSxfMHgzZDYzNDQ9XzB4NDI3MDY5PT5fMHgxNTcwMTA9Pnt2YXIgXzB4NTA0ZmYxPV8weDQ1NTI3MTt0cnl7XzB4MTQ5ZDBhKF8weDE1NzAxMCksXzB4NDI3MDY5KF8weDE1NzAxMCk7fWZpbmFsbHl7XzB4MWFlY2MxW18weDUwNGZmMSgweDFkZCldW18weDUwNGZmMSgweDI2NCldPV8weDQyNzA2OTt9fSxfMHgzZDVhNTA9XzB4MmQzODViPT5fMHgyOGRhOT0+e3ZhciBfMHg1ZDMwODY9XzB4NDU1MjcxO3RyeXtsZXQgW18weDNkMzIwNSxfMHg0NDA1MTddPV8weDI4ZGE5W18weDVkMzA4NigweDFmNSldKF8weDVkMzA4NigweDIzOCkpO18weDQ0ZDhjYyhfMHg0NDA1MTcsXzB4M2QzMjA1KSxfMHgyZDM4NWIoXzB4M2QzMjA1KTt9ZmluYWxseXtfMHgxYWVjYzFbXzB4NWQzMDg2KDB4MWRkKV1bXzB4NWQzMDg2KDB4MWM5KV09XzB4MmQzODViO319O18weDFhZWNjMVtfMHg0NTUyNzEoMHgyMjYpXT17J2NvbnNvbGVMb2cnOihfMHg1Mjg2MzIsXzB4M2I0YTQwKT0+e3ZhciBfMHgzM2UxM2Q9XzB4NDU1MjcxO18weDFhZWNjMVtfMHgzM2UxM2QoMHgxZGQpXVtfMHgzM2UxM2QoMHgyM2YpXVtfMHgzM2UxM2QoMHgyMjcpXSE9PV8weDMzZTEzZCgweDI3NSkmJl8weDEyODdlNChfMHgxODk4YmUoXzB4MzNlMTNkKDB4MjNmKSxfMHg1Mjg2MzIsXzB4M2E5YTJmKCksXzB4NTdjOTU3LF8weDNiNGE0MCkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDEyMTViMyxfMHgzNDk2MDMpPT57dmFyIF8weDQ5MDZhYT1fMHg0NTUyNzE7XzB4MWFlY2MxW18weDQ5MDZhYSgweDFkZCldW18weDQ5MDZhYSgweDIzZildWyduYW1lJ10hPT0nZGlzYWJsZWRUcmFjZScmJl8weDEyODdlNChfMHgxODk4YmUoXzB4NDkwNmFhKDB4MTk2KSxfMHgxMjE1YjMsXzB4M2E5YTJmKCksXzB4NTdjOTU3LF8weDM0OTYwMykpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgyMDI1MjY9XzB4NDU1MjcxO18weDFhZWNjMVtfMHgyMDI1MjYoMHgxZGQpXVtfMHgyMDI1MjYoMHgyNjQpXT1fMHgzZDYzNDQoXzB4MWFlY2MxW18weDIwMjUyNigweDFkZCldWyd0aW1lJ10pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHgzZjc5MWI9XzB4NDU1MjcxO18weDFhZWNjMVsnY29uc29sZSddW18weDNmNzkxYigweDFjOSldPV8weDNkNWE1MChfMHgxYWVjYzFbJ2NvbnNvbGUnXVtfMHgzZjc5MWIoMHgxYzkpXSk7fSwnYXV0b0xvZyc6KF8weDVlZDA4YyxfMHg0N2U5MGMpPT57dmFyIF8weDNlNmI3Mj1fMHg0NTUyNzE7XzB4MTI4N2U0KF8weDE4OThiZShfMHgzZTZiNzIoMHgyM2YpLF8weDQ3ZTkwYyxfMHgzYTlhMmYoKSxfMHg1N2M5NTcsW18weDVlZDA4Y10pKTt9LCdhdXRvTG9nTWFueSc6KF8weDNjZjdiZixfMHg0NjRjN2UpPT57dmFyIF8weDRmYzY1OD1fMHg0NTUyNzE7XzB4MTI4N2U0KF8weDE4OThiZShfMHg0ZmM2NTgoMHgyM2YpLF8weDNjZjdiZixfMHgzYTlhMmYoKSxfMHg1N2M5NTcsXzB4NDY0YzdlKSk7fSwnYXV0b1RyYWNlJzooXzB4N2Q5MTdlLF8weDUyN2VhZCk9Pnt2YXIgXzB4MjU4Y2VjPV8weDQ1NTI3MTtfMHgxMjg3ZTQoXzB4MTg5OGJlKF8weDI1OGNlYygweDE5NiksXzB4NTI3ZWFkLF8weDNhOWEyZigpLF8weDU3Yzk1NyxbXzB4N2Q5MTdlXSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHgxOWEwMGUsXzB4N2NlMDMzKT0+e3ZhciBfMHgzYWQzZTI9XzB4NDU1MjcxO18weDEyODdlNChfMHgxODk4YmUoXzB4M2FkM2UyKDB4MTk2KSxfMHgxOWEwMGUsXzB4M2E5YTJmKCksXzB4NTdjOTU3LF8weDdjZTAzMykpO30sJ2F1dG9UaW1lJzooXzB4MzEwMTViLF8weDJkOTk5NCxfMHgzOWQ3YzIpPT57XzB4MTQ5ZDBhKF8weDM5ZDdjMik7fSwnYXV0b1RpbWVFbmQnOihfMHgzZTMzY2MsXzB4M2FhN2IxLF8weDUwZTAyYik9PntfMHg0NGQ4Y2MoXzB4M2FhN2IxLF8weDUwZTAyYik7fX07bGV0IF8weDEyODdlND1WKF8weDFhZWNjMSxfMHgxNjlkYjAsXzB4M2Y3ODRmLF8weDUwNTg2OSxfMHg1YWVlNjMpLF8weDU3Yzk1Nz1fMHgxYWVjYzFbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXTtjbGFzcyBfMHgzMDY5N3tjb25zdHJ1Y3Rvcigpe3ZhciBfMHg0MzQxMjU9XzB4NDU1MjcxO3RoaXNbXzB4NDM0MTI1KDB4MWE3KV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzWydfbnVtYmVyUmVnRXhwJ109L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDQzNDEyNSgweDFmZCldPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4NDM0MTI1KDB4MjVjKV09XzB4MWFlY2MxW18weDQzNDEyNSgweDFmOCldLHRoaXNbXzB4NDM0MTI1KDB4MWEyKV09XzB4MWFlY2MxW18weDQzNDEyNSgweDFkOCldLHRoaXNbXzB4NDM0MTI1KDB4MjFjKV09T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSx0aGlzW18weDQzNDEyNSgweDE5YildPU9iamVjdFtfMHg0MzQxMjUoMHgyMGUpXSx0aGlzW18weDQzNDEyNSgweDI1MildPV8weDFhZWNjMVtfMHg0MzQxMjUoMHgxOTcpXSx0aGlzW18weDQzNDEyNSgweDFmNildPVJlZ0V4cFtfMHg0MzQxMjUoMHgxYWMpXVtfMHg0MzQxMjUoMHgxYWQpXSx0aGlzWydfZGF0ZVRvU3RyaW5nJ109RGF0ZVtfMHg0MzQxMjUoMHgxYWMpXVtfMHg0MzQxMjUoMHgxYWQpXTt9W18weDQ1NTI3MSgweDFmZildKF8weDM1N2RhMSxfMHgxOTgwZTksXzB4MTgwNjE2LF8weDUxNjZmNyl7dmFyIF8weDU4MTE2Mj1fMHg0NTUyNzEsXzB4M2QwMTk1PXRoaXMsXzB4MWQ3Y2ZhPV8weDE4MDYxNltfMHg1ODExNjIoMHgyM2QpXTtmdW5jdGlvbiBfMHgxNzUyZDEoXzB4MTIwNzg4LF8weDFhOThjZixfMHgyYTIyNWIpe3ZhciBfMHg1NDMyYzQ9XzB4NTgxMTYyO18weDFhOThjZltfMHg1NDMyYzQoMHgyNzgpXT1fMHg1NDMyYzQoMHgyNzQpLF8weDFhOThjZltfMHg1NDMyYzQoMHgxY2IpXT1fMHgxMjA3ODhbJ21lc3NhZ2UnXSxfMHgxNTUyZGY9XzB4MmEyMjViW18weDU0MzJjNCgweDI2YildW18weDU0MzJjNCgweDIxMCldLF8weDJhMjI1Ylsnbm9kZSddW18weDU0MzJjNCgweDIxMCldPV8weDFhOThjZixfMHgzZDAxOTVbJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgxYTk4Y2YsXzB4MmEyMjViKTt9dHJ5e18weDE4MDYxNltfMHg1ODExNjIoMHgxYTMpXSsrLF8weDE4MDYxNltfMHg1ODExNjIoMHgyM2QpXSYmXzB4MTgwNjE2W18weDU4MTE2MigweDIxYSldW18weDU4MTE2MigweDFkMildKF8weDE5ODBlOSk7dmFyIF8weDFlMDMxOSxfMHg0MGU2ODksXzB4MjFjZTY5LF8weDU4ZTQyMCxfMHhhYzQ3YmM9W10sXzB4M2MxODQ0PVtdLF8weDI0YzViZixfMHg1OTNmZjc9dGhpc1tfMHg1ODExNjIoMHgyNzYpXShfMHgxOTgwZTkpLF8weDU3N2E3Yj1fMHg1OTNmZjc9PT1fMHg1ODExNjIoMHgxYzMpLF8weDIxYWRlZT0hMHgxLF8weDYzYzE5OT1fMHg1OTNmZjc9PT1fMHg1ODExNjIoMHgxZWQpLF8weDk0ZTRlMD10aGlzW18weDU4MTE2MigweDFiZildKF8weDU5M2ZmNyksXzB4MzcwYTU2PXRoaXNbXzB4NTgxMTYyKDB4MjM3KV0oXzB4NTkzZmY3KSxfMHgzYWI4M2E9XzB4OTRlNGUwfHxfMHgzNzBhNTYsXzB4MjQ4ZmM5PXt9LF8weGY1MGY0PTB4MCxfMHg2NDhkNTY9ITB4MSxfMHgxNTUyZGYsXzB4MjdhMjRjPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgxODA2MTZbXzB4NTgxMTYyKDB4MTk5KV0pe2lmKF8weDU3N2E3Yil7aWYoXzB4NDBlNjg5PV8weDE5ODBlOVsnbGVuZ3RoJ10sXzB4NDBlNjg5Pl8weDE4MDYxNlsnZWxlbWVudHMnXSl7Zm9yKF8weDIxY2U2OT0weDAsXzB4NThlNDIwPV8weDE4MDYxNltfMHg1ODExNjIoMHgxYzEpXSxfMHgxZTAzMTk9XzB4MjFjZTY5O18weDFlMDMxOTxfMHg1OGU0MjA7XzB4MWUwMzE5KyspXzB4M2MxODQ0W18weDU4MTE2MigweDFkMildKF8weDNkMDE5NVtfMHg1ODExNjIoMHgyNWYpXShfMHhhYzQ3YmMsXzB4MTk4MGU5LF8weDU5M2ZmNyxfMHgxZTAzMTksXzB4MTgwNjE2KSk7XzB4MzU3ZGExW18weDU4MTE2MigweDIzMildPSEweDA7fWVsc2V7Zm9yKF8weDIxY2U2OT0weDAsXzB4NThlNDIwPV8weDQwZTY4OSxfMHgxZTAzMTk9XzB4MjFjZTY5O18weDFlMDMxOTxfMHg1OGU0MjA7XzB4MWUwMzE5KyspXzB4M2MxODQ0WydwdXNoJ10oXzB4M2QwMTk1W18weDU4MTE2MigweDI1ZildKF8weGFjNDdiYyxfMHgxOTgwZTksXzB4NTkzZmY3LF8weDFlMDMxOSxfMHgxODA2MTYpKTt9XzB4MTgwNjE2W18weDU4MTE2MigweDFiMCldKz1fMHgzYzE4NDRbXzB4NTgxMTYyKDB4MjViKV07fWlmKCEoXzB4NTkzZmY3PT09XzB4NTgxMTYyKDB4MWNhKXx8XzB4NTkzZmY3PT09XzB4NTgxMTYyKDB4MWY4KSkmJiFfMHg5NGU0ZTAmJl8weDU5M2ZmNyE9PSdTdHJpbmcnJiZfMHg1OTNmZjchPT1fMHg1ODExNjIoMHgxZjcpJiZfMHg1OTNmZjchPT0nYmlnaW50Jyl7dmFyIF8weDJiYjU0Mz1fMHg1MTY2ZjdbXzB4NTgxMTYyKDB4MjA3KV18fF8weDE4MDYxNltfMHg1ODExNjIoMHgyMDcpXTtpZih0aGlzWydfaXNTZXQnXShfMHgxOTgwZTkpPyhfMHgxZTAzMTk9MHgwLF8weDE5ODBlOVsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDRiOGQ2NSl7dmFyIF8weDU0YzFmMj1fMHg1ODExNjI7aWYoXzB4ZjUwZjQrKyxfMHgxODA2MTZbXzB4NTRjMWYyKDB4MWIwKV0rKyxfMHhmNTBmND5fMHgyYmI1NDMpe18weDY0OGQ1Nj0hMHgwO3JldHVybjt9aWYoIV8weDE4MDYxNltfMHg1NGMxZjIoMHgxYWYpXSYmXzB4MTgwNjE2W18weDU0YzFmMigweDIzZCldJiZfMHgxODA2MTZbXzB4NTRjMWYyKDB4MWIwKV0+XzB4MTgwNjE2W18weDU0YzFmMigweDI0NSldKXtfMHg2NDhkNTY9ITB4MDtyZXR1cm47fV8weDNjMTg0NFtfMHg1NGMxZjIoMHgxZDIpXShfMHgzZDAxOTVbJ19hZGRQcm9wZXJ0eSddKF8weGFjNDdiYyxfMHgxOTgwZTksXzB4NTRjMWYyKDB4MWU4KSxfMHgxZTAzMTkrKyxfMHgxODA2MTYsZnVuY3Rpb24oXzB4MmEyZjYzKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MmEyZjYzO307fShfMHg0YjhkNjUpKSk7fSkpOnRoaXNbXzB4NTgxMTYyKDB4MjQzKV0oXzB4MTk4MGU5KSYmXzB4MTk4MGU5W18weDU4MTE2MigweDFkOSldKGZ1bmN0aW9uKF8weDM3ODY3ZSxfMHgxODFiNmYpe3ZhciBfMHgxMGJkZDk9XzB4NTgxMTYyO2lmKF8weGY1MGY0KyssXzB4MTgwNjE2W18weDEwYmRkOSgweDFiMCldKyssXzB4ZjUwZjQ+XzB4MmJiNTQzKXtfMHg2NDhkNTY9ITB4MDtyZXR1cm47fWlmKCFfMHgxODA2MTZbXzB4MTBiZGQ5KDB4MWFmKV0mJl8weDE4MDYxNlsnYXV0b0V4cGFuZCddJiZfMHgxODA2MTZbXzB4MTBiZGQ5KDB4MWIwKV0+XzB4MTgwNjE2W18weDEwYmRkOSgweDI0NSldKXtfMHg2NDhkNTY9ITB4MDtyZXR1cm47fXZhciBfMHg1YWNkYjY9XzB4MTgxYjZmW18weDEwYmRkOSgweDFhZCldKCk7XzB4NWFjZGI2WydsZW5ndGgnXT4weDY0JiYoXzB4NWFjZGI2PV8weDVhY2RiNltfMHgxMGJkZDkoMHgxYmQpXSgweDAsMHg2NCkrXzB4MTBiZGQ5KDB4MjRmKSksXzB4M2MxODQ0WydwdXNoJ10oXzB4M2QwMTk1W18weDEwYmRkOSgweDI1ZildKF8weGFjNDdiYyxfMHgxOTgwZTksXzB4MTBiZGQ5KDB4MWFlKSxfMHg1YWNkYjYsXzB4MTgwNjE2LGZ1bmN0aW9uKF8weDIyOWRkZil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDIyOWRkZjt9O30oXzB4Mzc4NjdlKSkpO30pLCFfMHgyMWFkZWUpe3RyeXtmb3IoXzB4MjRjNWJmIGluIF8weDE5ODBlOSlpZighKF8weDU3N2E3YiYmXzB4MjdhMjRjW18weDU4MTE2MigweDE5OCldKF8weDI0YzViZikpJiYhdGhpc1snX2JsYWNrbGlzdGVkUHJvcGVydHknXShfMHgxOTgwZTksXzB4MjRjNWJmLF8weDE4MDYxNikpe2lmKF8weGY1MGY0KyssXzB4MTgwNjE2WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4ZjUwZjQ+XzB4MmJiNTQzKXtfMHg2NDhkNTY9ITB4MDticmVhazt9aWYoIV8weDE4MDYxNltfMHg1ODExNjIoMHgxYWYpXSYmXzB4MTgwNjE2W18weDU4MTE2MigweDIzZCldJiZfMHgxODA2MTZbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4MTgwNjE2WydhdXRvRXhwYW5kTGltaXQnXSl7XzB4NjQ4ZDU2PSEweDA7YnJlYWs7fV8weDNjMTg0NFsncHVzaCddKF8weDNkMDE5NVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4YWM0N2JjLF8weDI0OGZjOSxfMHgxOTgwZTksXzB4NTkzZmY3LF8weDI0YzViZixfMHgxODA2MTYpKTt9fWNhdGNoe31pZihfMHgyNDhmYzlbXzB4NTgxMTYyKDB4MjE5KV09ITB4MCxfMHg2M2MxOTkmJihfMHgyNDhmYzlbXzB4NTgxMTYyKDB4MjcwKV09ITB4MCksIV8weDY0OGQ1Nil7dmFyIF8weDI3NmYwYT1bXVtfMHg1ODExNjIoMHgyMjkpXSh0aGlzW18weDU4MTE2MigweDE5YildKF8weDE5ODBlOSkpW18weDU4MTE2MigweDIyOSldKHRoaXNbXzB4NTgxMTYyKDB4MjVlKV0oXzB4MTk4MGU5KSk7Zm9yKF8weDFlMDMxOT0weDAsXzB4NDBlNjg5PV8weDI3NmYwYVtfMHg1ODExNjIoMHgyNWIpXTtfMHgxZTAzMTk8XzB4NDBlNjg5O18weDFlMDMxOSsrKWlmKF8weDI0YzViZj1fMHgyNzZmMGFbXzB4MWUwMzE5XSwhKF8weDU3N2E3YiYmXzB4MjdhMjRjW18weDU4MTE2MigweDE5OCldKF8weDI0YzViZltfMHg1ODExNjIoMHgxYWQpXSgpKSkmJiF0aGlzW18weDU4MTE2MigweDI0ZCldKF8weDE5ODBlOSxfMHgyNGM1YmYsXzB4MTgwNjE2KSYmIV8weDI0OGZjOVtfMHg1ODExNjIoMHgxZTEpK18weDI0YzViZlsndG9TdHJpbmcnXSgpXSl7aWYoXzB4ZjUwZjQrKyxfMHgxODA2MTZbXzB4NTgxMTYyKDB4MWIwKV0rKyxfMHhmNTBmND5fMHgyYmI1NDMpe18weDY0OGQ1Nj0hMHgwO2JyZWFrO31pZighXzB4MTgwNjE2W18weDU4MTE2MigweDFhZildJiZfMHgxODA2MTZbXzB4NTgxMTYyKDB4MjNkKV0mJl8weDE4MDYxNlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHgxODA2MTZbXzB4NTgxMTYyKDB4MjQ1KV0pe18weDY0OGQ1Nj0hMHgwO2JyZWFrO31fMHgzYzE4NDRbXzB4NTgxMTYyKDB4MWQyKV0oXzB4M2QwMTk1W18weDU4MTE2MigweDI1ZCldKF8weGFjNDdiYyxfMHgyNDhmYzksXzB4MTk4MGU5LF8weDU5M2ZmNyxfMHgyNGM1YmYsXzB4MTgwNjE2KSk7fX19fX1pZihfMHgzNTdkYTFbJ3R5cGUnXT1fMHg1OTNmZjcsXzB4M2FiODNhPyhfMHgzNTdkYTFbXzB4NTgxMTYyKDB4MjNhKV09XzB4MTk4MGU5W18weDU4MTE2MigweDIxNyldKCksdGhpc1tfMHg1ODExNjIoMHgyNmQpXShfMHg1OTNmZjcsXzB4MzU3ZGExLF8weDE4MDYxNixfMHg1MTY2ZjcpKTpfMHg1OTNmZjc9PT1fMHg1ODExNjIoMHgyNGEpP18weDM1N2RhMVtfMHg1ODExNjIoMHgyM2EpXT10aGlzW18weDU4MTE2MigweDFjZCldWydjYWxsJ10oXzB4MTk4MGU5KTpfMHg1OTNmZjc9PT1fMHg1ODExNjIoMHgxYWIpP18weDM1N2RhMVtfMHg1ODExNjIoMHgyM2EpXT1fMHgxOTgwZTlbJ3RvU3RyaW5nJ10oKTpfMHg1OTNmZjc9PT1fMHg1ODExNjIoMHgxOWMpP18weDM1N2RhMVtfMHg1ODExNjIoMHgyM2EpXT10aGlzW18weDU4MTE2MigweDFmNildW18weDU4MTE2MigweDFhNCldKF8weDE5ODBlOSk6XzB4NTkzZmY3PT09XzB4NTgxMTYyKDB4MWViKSYmdGhpc1tfMHg1ODExNjIoMHgyNTIpXT9fMHgzNTdkYTFbXzB4NTgxMTYyKDB4MjNhKV09dGhpc1tfMHg1ODExNjIoMHgyNTIpXVsncHJvdG90eXBlJ11bXzB4NTgxMTYyKDB4MWFkKV1bXzB4NTgxMTYyKDB4MWE0KV0oXzB4MTk4MGU5KTohXzB4MTgwNjE2W18weDU4MTE2MigweDE5OSldJiYhKF8weDU5M2ZmNz09PV8weDU4MTE2MigweDFjYSl8fF8weDU5M2ZmNz09PV8weDU4MTE2MigweDFmOCkpJiYoZGVsZXRlIF8weDM1N2RhMVtfMHg1ODExNjIoMHgyM2EpXSxfMHgzNTdkYTFbXzB4NTgxMTYyKDB4MjAwKV09ITB4MCksXzB4NjQ4ZDU2JiYoXzB4MzU3ZGExW18weDU4MTE2MigweDFlZildPSEweDApLF8weDE1NTJkZj1fMHgxODA2MTZbXzB4NTgxMTYyKDB4MjZiKV1bXzB4NTgxMTYyKDB4MjEwKV0sXzB4MTgwNjE2Wydub2RlJ11bJ2N1cnJlbnQnXT1fMHgzNTdkYTEsdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDM1N2RhMSxfMHgxODA2MTYpLF8weDNjMTg0NFsnbGVuZ3RoJ10pe2ZvcihfMHgxZTAzMTk9MHgwLF8weDQwZTY4OT1fMHgzYzE4NDRbXzB4NTgxMTYyKDB4MjViKV07XzB4MWUwMzE5PF8weDQwZTY4OTtfMHgxZTAzMTkrKylfMHgzYzE4NDRbXzB4MWUwMzE5XShfMHgxZTAzMTkpO31fMHhhYzQ3YmNbJ2xlbmd0aCddJiYoXzB4MzU3ZGExW18weDU4MTE2MigweDIwNyldPV8weGFjNDdiYyk7fWNhdGNoKF8weDU5YzVjYSl7XzB4MTc1MmQxKF8weDU5YzVjYSxfMHgzNTdkYTEsXzB4MTgwNjE2KTt9cmV0dXJuIHRoaXNbXzB4NTgxMTYyKDB4MjVhKV0oXzB4MTk4MGU5LF8weDM1N2RhMSksdGhpc1tfMHg1ODExNjIoMHgxYjYpXShfMHgzNTdkYTEsXzB4MTgwNjE2KSxfMHgxODA2MTZbJ25vZGUnXVsnY3VycmVudCddPV8weDE1NTJkZixfMHgxODA2MTZbXzB4NTgxMTYyKDB4MWEzKV0tLSxfMHgxODA2MTZbXzB4NTgxMTYyKDB4MjNkKV09XzB4MWQ3Y2ZhLF8weDE4MDYxNltfMHg1ODExNjIoMHgyM2QpXSYmXzB4MTgwNjE2W18weDU4MTE2MigweDIxYSldWydwb3AnXSgpLF8weDM1N2RhMTt9W18weDQ1NTI3MSgweDI1ZSldKF8weDM1ZGIyZil7dmFyIF8weDM2ZjEwNT1fMHg0NTUyNzE7cmV0dXJuIE9iamVjdFtfMHgzNmYxMDUoMHgxYTEpXT9PYmplY3RbXzB4MzZmMTA1KDB4MWExKV0oXzB4MzVkYjJmKTpbXTt9WydfaXNTZXQnXShfMHgzMTVlZDApe3ZhciBfMHgzMGY5YzM9XzB4NDU1MjcxO3JldHVybiEhKF8weDMxNWVkMCYmXzB4MWFlY2MxWydTZXQnXSYmdGhpc1tfMHgzMGY5YzMoMHgyM2MpXShfMHgzMTVlZDApPT09J1tvYmplY3RcXFxceDIwU2V0XScmJl8weDMxNWVkMFtfMHgzMGY5YzMoMHgxZDkpXSk7fVtfMHg0NTUyNzEoMHgyNGQpXShfMHgyZmZmM2MsXzB4NDJjMmE4LF8weGVjNTNjYil7dmFyIF8weDUwNzQyYT1fMHg0NTUyNzE7cmV0dXJuIF8weGVjNTNjYlsnbm9GdW5jdGlvbnMnXT90eXBlb2YgXzB4MmZmZjNjW18weDQyYzJhOF09PV8weDUwNzQyYSgweDFlZCk6ITB4MTt9W18weDQ1NTI3MSgweDI3NildKF8weGMzNGM3Yyl7dmFyIF8weDg3YjI0OD1fMHg0NTUyNzEsXzB4MWZmZTE5PScnO3JldHVybiBfMHgxZmZlMTk9dHlwZW9mIF8weGMzNGM3YyxfMHgxZmZlMTk9PT0nb2JqZWN0Jz90aGlzW18weDg3YjI0OCgweDIzYyldKF8weGMzNGM3Yyk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nP18weDFmZmUxOT1fMHg4N2IyNDgoMHgxYzMpOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weGMzNGM3Yyk9PT1fMHg4N2IyNDgoMHgxYjkpP18weDFmZmUxOT1fMHg4N2IyNDgoMHgyNGEpOnRoaXNbXzB4ODdiMjQ4KDB4MjNjKV0oXzB4YzM0YzdjKT09PV8weDg3YjI0OCgweDFmYSk/XzB4MWZmZTE5PV8weDg3YjI0OCgweDFhYik6XzB4YzM0YzdjPT09bnVsbD9fMHgxZmZlMTk9J251bGwnOl8weGMzNGM3Y1tfMHg4N2IyNDgoMHgyNDIpXSYmKF8weDFmZmUxOT1fMHhjMzRjN2NbXzB4ODdiMjQ4KDB4MjQyKV1bXzB4ODdiMjQ4KDB4MjI3KV18fF8weDFmZmUxOSk6XzB4MWZmZTE5PT09XzB4ODdiMjQ4KDB4MWY4KSYmdGhpc1tfMHg4N2IyNDgoMHgxYTIpXSYmXzB4YzM0YzdjIGluc3RhbmNlb2YgdGhpc1tfMHg4N2IyNDgoMHgxYTIpXSYmKF8weDFmZmUxOT0nSFRNTEFsbENvbGxlY3Rpb24nKSxfMHgxZmZlMTk7fVtfMHg0NTUyNzEoMHgyM2MpXShfMHg0OTQ2MjYpe3ZhciBfMHg5Y2ViZGU9XzB4NDU1MjcxO3JldHVybiBPYmplY3RbXzB4OWNlYmRlKDB4MWFjKV1bJ3RvU3RyaW5nJ11bXzB4OWNlYmRlKDB4MWE0KV0oXzB4NDk0NjI2KTt9W18weDQ1NTI3MSgweDFiZildKF8weDJlYTc4ZCl7dmFyIF8weDVjYzRkYj1fMHg0NTUyNzE7cmV0dXJuIF8weDJlYTc4ZD09PSdib29sZWFuJ3x8XzB4MmVhNzhkPT09XzB4NWNjNGRiKDB4MWEwKXx8XzB4MmVhNzhkPT09XzB4NWNjNGRiKDB4MTlmKTt9W18weDQ1NTI3MSgweDIzNyldKF8weDIzMmIyNil7dmFyIF8weDVhZDMyZT1fMHg0NTUyNzE7cmV0dXJuIF8weDIzMmIyNj09PSdCb29sZWFuJ3x8XzB4MjMyYjI2PT09XzB4NWFkMzJlKDB4MjYzKXx8XzB4MjMyYjI2PT09XzB4NWFkMzJlKDB4MWY0KTt9W18weDQ1NTI3MSgweDI1ZildKF8weDM3NTQyYyxfMHgzYWU3YWYsXzB4NDk1ZWQyLF8weDQ0NGI3YSxfMHg0YzgwNTAsXzB4NGQ4N2Q5KXt2YXIgXzB4MzAyNjdiPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDNjMzJhYSl7dmFyIF8weDJiZmVhOD1fMHg0MTNmLF8weDNjODRiYT1fMHg0YzgwNTBbXzB4MmJmZWE4KDB4MjZiKV1bJ2N1cnJlbnQnXSxfMHgxYzVkODM9XzB4NGM4MDUwW18weDJiZmVhOCgweDI2YildW18weDJiZmVhOCgweDIxZildLF8weDFmOTJmND1fMHg0YzgwNTBbJ25vZGUnXVtfMHgyYmZlYTgoMHgxZGEpXTtfMHg0YzgwNTBbXzB4MmJmZWE4KDB4MjZiKV1bXzB4MmJmZWE4KDB4MWRhKV09XzB4M2M4NGJhLF8weDRjODA1MFtfMHgyYmZlYTgoMHgyNmIpXVsnaW5kZXgnXT10eXBlb2YgXzB4NDQ0YjdhPT1fMHgyYmZlYTgoMHgxOWYpP18weDQ0NGI3YTpfMHgzYzMyYWEsXzB4Mzc1NDJjW18weDJiZmVhOCgweDFkMildKF8weDMwMjY3YltfMHgyYmZlYTgoMHgxYjUpXShfMHgzYWU3YWYsXzB4NDk1ZWQyLF8weDQ0NGI3YSxfMHg0YzgwNTAsXzB4NGQ4N2Q5KSksXzB4NGM4MDUwW18weDJiZmVhOCgweDI2YildW18weDJiZmVhOCgweDFkYSldPV8weDFmOTJmNCxfMHg0YzgwNTBbXzB4MmJmZWE4KDB4MjZiKV1bXzB4MmJmZWE4KDB4MjFmKV09XzB4MWM1ZDgzO307fVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4NGRlYmQ0LF8weDFkODhiYixfMHg0Y2U1ODgsXzB4MTkyNjdjLF8weDJhNTNjMSxfMHg0MDk0ZDcsXzB4MTNhMTZjKXt2YXIgXzB4MTc2MWZiPV8weDQ1NTI3MSxfMHgxODA3NjM9dGhpcztyZXR1cm4gXzB4MWQ4OGJiW18weDE3NjFmYigweDFlMSkrXzB4MmE1M2MxW18weDE3NjFmYigweDFhZCldKCldPSEweDAsZnVuY3Rpb24oXzB4MTNmZjYwKXt2YXIgXzB4NWRlNGZhPV8weDE3NjFmYixfMHgzMmQ2N2E9XzB4NDA5NGQ3Wydub2RlJ11bXzB4NWRlNGZhKDB4MjEwKV0sXzB4MjUyNmQ2PV8weDQwOTRkN1tfMHg1ZGU0ZmEoMHgyNmIpXVsnaW5kZXgnXSxfMHgyODM3MWQ9XzB4NDA5NGQ3W18weDVkZTRmYSgweDI2YildW18weDVkZTRmYSgweDFkYSldO18weDQwOTRkN1tfMHg1ZGU0ZmEoMHgyNmIpXVtfMHg1ZGU0ZmEoMHgxZGEpXT1fMHgzMmQ2N2EsXzB4NDA5NGQ3Wydub2RlJ11bXzB4NWRlNGZhKDB4MjFmKV09XzB4MTNmZjYwLF8weDRkZWJkNFtfMHg1ZGU0ZmEoMHgxZDIpXShfMHgxODA3NjNbXzB4NWRlNGZhKDB4MWI1KV0oXzB4NGNlNTg4LF8weDE5MjY3YyxfMHgyYTUzYzEsXzB4NDA5NGQ3LF8weDEzYTE2YykpLF8weDQwOTRkN1snbm9kZSddW18weDVkZTRmYSgweDFkYSldPV8weDI4MzcxZCxfMHg0MDk0ZDdbXzB4NWRlNGZhKDB4MjZiKV1bJ2luZGV4J109XzB4MjUyNmQ2O307fVtfMHg0NTUyNzEoMHgxYjUpXShfMHg0M2U4M2IsXzB4MWRiZjIzLF8weDJmN2Y1ZSxfMHgzODI3YzMsXzB4MzZkZTBmKXt2YXIgXzB4MzM3YTI5PV8weDQ1NTI3MSxfMHg1NDlkMWU9dGhpcztfMHgzNmRlMGZ8fChfMHgzNmRlMGY9ZnVuY3Rpb24oXzB4MmIwYWM4LF8weDJhNmY4Yil7cmV0dXJuIF8weDJiMGFjOFtfMHgyYTZmOGJdO30pO3ZhciBfMHg1Yjg3YTg9XzB4MmY3ZjVlW18weDMzN2EyOSgweDFhZCldKCksXzB4M2JkNWVlPV8weDM4MjdjM1tfMHgzMzdhMjkoMHgxZTApXXx8e30sXzB4M2QzNmYzPV8weDM4MjdjM1tfMHgzMzdhMjkoMHgxOTkpXSxfMHgxYzAxOGI9XzB4MzgyN2MzW18weDMzN2EyOSgweDFhZildO3RyeXt2YXIgXzB4NTVjYmYxPXRoaXNbXzB4MzM3YTI5KDB4MjQzKV0oXzB4NDNlODNiKSxfMHgxMjc1ZDU9XzB4NWI4N2E4O18weDU1Y2JmMSYmXzB4MTI3NWQ1WzB4MF09PT0nXFxcXHgyNycmJihfMHgxMjc1ZDU9XzB4MTI3NWQ1W18weDMzN2EyOSgweDE5ZSldKDB4MSxfMHgxMjc1ZDVbXzB4MzM3YTI5KDB4MjViKV0tMHgyKSk7dmFyIF8weDNhNjBmND1fMHgzODI3YzNbXzB4MzM3YTI5KDB4MWUwKV09XzB4M2JkNWVlWydfcF8nK18weDEyNzVkNV07XzB4M2E2MGY0JiYoXzB4MzgyN2MzW18weDMzN2EyOSgweDE5OSldPV8weDM4MjdjM1tfMHgzMzdhMjkoMHgxOTkpXSsweDEpLF8weDM4MjdjM1tfMHgzMzdhMjkoMHgxYWYpXT0hIV8weDNhNjBmNDt2YXIgXzB4MmU2NzU3PXR5cGVvZiBfMHgyZjdmNWU9PV8weDMzN2EyOSgweDFlYiksXzB4MmQyZjc5PXsnbmFtZSc6XzB4MmU2NzU3fHxfMHg1NWNiZjE/XzB4NWI4N2E4OnRoaXNbXzB4MzM3YTI5KDB4MWQ3KV0oXzB4NWI4N2E4KX07aWYoXzB4MmU2NzU3JiYoXzB4MmQyZjc5W18weDMzN2EyOSgweDFlYildPSEweDApLCEoXzB4MWRiZjIzPT09XzB4MzM3YTI5KDB4MWMzKXx8XzB4MWRiZjIzPT09XzB4MzM3YTI5KDB4Mjc3KSkpe3ZhciBfMHg0ZDcxNDI9dGhpc1tfMHgzMzdhMjkoMHgyMWMpXShfMHg0M2U4M2IsXzB4MmY3ZjVlKTtpZihfMHg0ZDcxNDImJihfMHg0ZDcxNDJbXzB4MzM3YTI5KDB4MjA4KV0mJihfMHgyZDJmNzlbXzB4MzM3YTI5KDB4MWVjKV09ITB4MCksXzB4NGQ3MTQyW18weDMzN2EyOSgweDIzMyldJiYhXzB4M2E2MGY0JiYhXzB4MzgyN2MzWydyZXNvbHZlR2V0dGVycyddKSlyZXR1cm4gXzB4MmQyZjc5W18weDMzN2EyOSgweDIwMSldPSEweDAsdGhpc1tfMHgzMzdhMjkoMHgxYzQpXShfMHgyZDJmNzksXzB4MzgyN2MzKSxfMHgyZDJmNzk7fXZhciBfMHgxZjA1MDI7dHJ5e18weDFmMDUwMj1fMHgzNmRlMGYoXzB4NDNlODNiLF8weDJmN2Y1ZSk7fWNhdGNoKF8weDIxNWMyOSl7cmV0dXJuIF8weDJkMmY3OT17J25hbWUnOl8weDViODdhOCwndHlwZSc6XzB4MzM3YTI5KDB4Mjc0KSwnZXJyb3InOl8weDIxNWMyOVtfMHgzMzdhMjkoMHgxYmIpXX0sdGhpc1tfMHgzMzdhMjkoMHgxYzQpXShfMHgyZDJmNzksXzB4MzgyN2MzKSxfMHgyZDJmNzk7fXZhciBfMHhlZmRmYz10aGlzW18weDMzN2EyOSgweDI3NildKF8weDFmMDUwMiksXzB4MTNjNDJmPXRoaXNbJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHhlZmRmYyk7aWYoXzB4MmQyZjc5Wyd0eXBlJ109XzB4ZWZkZmMsXzB4MTNjNDJmKXRoaXNbXzB4MzM3YTI5KDB4MWM0KV0oXzB4MmQyZjc5LF8weDM4MjdjMyxfMHgxZjA1MDIsZnVuY3Rpb24oKXt2YXIgXzB4MzhlMGVkPV8weDMzN2EyOTtfMHgyZDJmNzlbXzB4MzhlMGVkKDB4MjNhKV09XzB4MWYwNTAyW18weDM4ZTBlZCgweDIxNyldKCksIV8weDNhNjBmNCYmXzB4NTQ5ZDFlW18weDM4ZTBlZCgweDI2ZCldKF8weGVmZGZjLF8weDJkMmY3OSxfMHgzODI3YzMse30pO30pO2Vsc2V7dmFyIF8weDI4MDJjZD1fMHgzODI3YzNbXzB4MzM3YTI5KDB4MjNkKV0mJl8weDM4MjdjM1tfMHgzMzdhMjkoMHgxYTMpXTxfMHgzODI3YzNbXzB4MzM3YTI5KDB4MjZjKV0mJl8weDM4MjdjM1tfMHgzMzdhMjkoMHgyMWEpXVtfMHgzMzdhMjkoMHgxZjIpXShfMHgxZjA1MDIpPDB4MCYmXzB4ZWZkZmMhPT0nZnVuY3Rpb24nJiZfMHgzODI3YzNbXzB4MzM3YTI5KDB4MWIwKV08XzB4MzgyN2MzW18weDMzN2EyOSgweDI0NSldO18weDI4MDJjZHx8XzB4MzgyN2MzWydsZXZlbCddPF8weDNkMzZmM3x8XzB4M2E2MGY0Pyh0aGlzW18weDMzN2EyOSgweDFmZildKF8weDJkMmY3OSxfMHgxZjA1MDIsXzB4MzgyN2MzLF8weDNhNjBmNHx8e30pLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgxZjA1MDIsXzB4MmQyZjc5KSk6dGhpc1snX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDJkMmY3OSxfMHgzODI3YzMsXzB4MWYwNTAyLGZ1bmN0aW9uKCl7dmFyIF8weDQzZTlmNz1fMHgzMzdhMjk7XzB4ZWZkZmM9PT1fMHg0M2U5ZjcoMHgxY2EpfHxfMHhlZmRmYz09PV8weDQzZTlmNygweDFmOCl8fChkZWxldGUgXzB4MmQyZjc5W18weDQzZTlmNygweDIzYSldLF8weDJkMmY3OVsnY2FwcGVkJ109ITB4MCk7fSk7fXJldHVybiBfMHgyZDJmNzk7fWZpbmFsbHl7XzB4MzgyN2MzW18weDMzN2EyOSgweDFlMCldPV8weDNiZDVlZSxfMHgzODI3YzNbJ2RlcHRoJ109XzB4M2QzNmYzLF8weDM4MjdjM1tfMHgzMzdhMjkoMHgxYWYpXT1fMHgxYzAxOGI7fX1bXzB4NDU1MjcxKDB4MjZkKV0oXzB4MzYwNjgxLF8weDEyZDVmMyxfMHg1ZWM5ODEsXzB4MzZjZTUyKXt2YXIgXzB4OTU0OTQ5PV8weDQ1NTI3MSxfMHg5MzhhYzQ9XzB4MzZjZTUyWydzdHJMZW5ndGgnXXx8XzB4NWVjOTgxWydzdHJMZW5ndGgnXTtpZigoXzB4MzYwNjgxPT09XzB4OTU0OTQ5KDB4MWEwKXx8XzB4MzYwNjgxPT09J1N0cmluZycpJiZfMHgxMmQ1ZjNbXzB4OTU0OTQ5KDB4MjNhKV0pe2xldCBfMHgzYzZiODM9XzB4MTJkNWYzWyd2YWx1ZSddW18weDk1NDk0OSgweDI1YildO18weDVlYzk4MVtfMHg5NTQ5NDkoMHgxYzIpXSs9XzB4M2M2YjgzLF8weDVlYzk4MVtfMHg5NTQ5NDkoMHgxYzIpXT5fMHg1ZWM5ODFbXzB4OTU0OTQ5KDB4MWYwKV0/KF8weDEyZDVmM1tfMHg5NTQ5NDkoMHgyMDApXT0nJyxkZWxldGUgXzB4MTJkNWYzW18weDk1NDk0OSgweDIzYSldKTpfMHgzYzZiODM+XzB4OTM4YWM0JiYoXzB4MTJkNWYzW18weDk1NDk0OSgweDIwMCldPV8weDEyZDVmM1tfMHg5NTQ5NDkoMHgyM2EpXVtfMHg5NTQ5NDkoMHgxOWUpXSgweDAsXzB4OTM4YWM0KSxkZWxldGUgXzB4MTJkNWYzWyd2YWx1ZSddKTt9fVtfMHg0NTUyNzEoMHgyNDMpXShfMHg1NGQ1YTkpe3ZhciBfMHgxOTUzYzM9XzB4NDU1MjcxO3JldHVybiEhKF8weDU0ZDVhOSYmXzB4MWFlY2MxWydNYXAnXSYmdGhpc1tfMHgxOTUzYzMoMHgyM2MpXShfMHg1NGQ1YTkpPT09J1tvYmplY3RcXFxceDIwTWFwXScmJl8weDU0ZDVhOVtfMHgxOTUzYzMoMHgxZDkpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDNkMzM2Nil7dmFyIF8weDQwZjMxNT1fMHg0NTUyNzE7aWYoXzB4M2QzMzY2W18weDQwZjMxNSgweDI1MSldKC9eXFxcXGQrJC8pKXJldHVybiBfMHgzZDMzNjY7dmFyIF8weDFjZGI5MTt0cnl7XzB4MWNkYjkxPUpTT05bXzB4NDBmMzE1KDB4MjJlKV0oJycrXzB4M2QzMzY2KTt9Y2F0Y2h7XzB4MWNkYjkxPSdcXFxceDIyJyt0aGlzW18weDQwZjMxNSgweDIzYyldKF8weDNkMzM2NikrJ1xcXFx4MjInO31yZXR1cm4gXzB4MWNkYjkxW18weDQwZjMxNSgweDI1MSldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4MWNkYjkxPV8weDFjZGI5MVtfMHg0MGYzMTUoMHgxOWUpXSgweDEsXzB4MWNkYjkxW18weDQwZjMxNSgweDI1YildLTB4Mik6XzB4MWNkYjkxPV8weDFjZGI5MVtfMHg0MGYzMTUoMHgxZDUpXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDQwZjMxNSgweDFkNSldKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDQwZjMxNSgweDFkNSldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgxY2RiOTE7fVtfMHg0NTUyNzEoMHgxYzQpXShfMHhmY2YwY2EsXzB4MzIxM2ZhLF8weDQzY2I2YSxfMHg1OWQ3YmMpe3ZhciBfMHgxMTgyNmY9XzB4NDU1MjcxO3RoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHhmY2YwY2EsXzB4MzIxM2ZhKSxfMHg1OWQ3YmMmJl8weDU5ZDdiYygpLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHg0M2NiNmEsXzB4ZmNmMGNhKSx0aGlzW18weDExODI2ZigweDFiNildKF8weGZjZjBjYSxfMHgzMjEzZmEpO31bXzB4NDU1MjcxKDB4MTlhKV0oXzB4OGJlNjkxLF8weDQzMmUyNCl7dmFyIF8weDVhMGY3ZD1fMHg0NTUyNzE7dGhpc1tfMHg1YTBmN2QoMHgxYmMpXShfMHg4YmU2OTEsXzB4NDMyZTI0KSx0aGlzW18weDVhMGY3ZCgweDI0NildKF8weDhiZTY5MSxfMHg0MzJlMjQpLHRoaXNbXzB4NWEwZjdkKDB4MWE1KV0oXzB4OGJlNjkxLF8weDQzMmUyNCksdGhpc1tfMHg1YTBmN2QoMHgxZDApXShfMHg4YmU2OTEsXzB4NDMyZTI0KTt9W18weDQ1NTI3MSgweDFiYyldKF8weDIxOWUyMyxfMHhiODQ1YzMpe31bXzB4NDU1MjcxKDB4MjQ2KV0oXzB4MmEwMjQ4LF8weDcwZWNkMyl7fVtfMHg0NTUyNzEoMHgyNGMpXShfMHgzN2Q2ZGQsXzB4MjUyMGZlKXt9W18weDQ1NTI3MSgweDIzNSldKF8weDU2YzIzYSl7dmFyIF8weDIzNjRhYz1fMHg0NTUyNzE7cmV0dXJuIF8weDU2YzIzYT09PXRoaXNbXzB4MjM2NGFjKDB4MjVjKV07fVsnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MzRhZjFjLF8weDM3N2NmZSl7dmFyIF8weDQ4YzFlNT1fMHg0NTUyNzE7dGhpc1tfMHg0OGMxZTUoMHgyNGMpXShfMHgzNGFmMWMsXzB4Mzc3Y2ZlKSx0aGlzW18weDQ4YzFlNSgweDIxMildKF8weDM0YWYxYyksXzB4Mzc3Y2ZlW18weDQ4YzFlNSgweDFlOSldJiZ0aGlzW18weDQ4YzFlNSgweDFjNildKF8weDM0YWYxYyksdGhpc1tfMHg0OGMxZTUoMHgyMWUpXShfMHgzNGFmMWMsXzB4Mzc3Y2ZlKSx0aGlzW18weDQ4YzFlNSgweDI0OCldKF8weDM0YWYxYyxfMHgzNzdjZmUpLHRoaXNbXzB4NDhjMWU1KDB4MjY2KV0oXzB4MzRhZjFjKTt9WydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4MTczOWYxLF8weDM2NDc0OCl7dmFyIF8weDQ1OGI2ZT1fMHg0NTUyNzE7bGV0IF8weDQwZTg4YTt0cnl7XzB4MWFlY2MxWydjb25zb2xlJ10mJihfMHg0MGU4OGE9XzB4MWFlY2MxW18weDQ1OGI2ZSgweDFkZCldWydlcnJvciddLF8weDFhZWNjMVtfMHg0NThiNmUoMHgxZGQpXVtfMHg0NThiNmUoMHgxY2IpXT1mdW5jdGlvbigpe30pLF8weDE3MzlmMSYmdHlwZW9mIF8weDE3MzlmMVtfMHg0NThiNmUoMHgyNWIpXT09XzB4NDU4YjZlKDB4MTlmKSYmKF8weDM2NDc0OFtfMHg0NThiNmUoMHgyNWIpXT1fMHgxNzM5ZjFbXzB4NDU4YjZlKDB4MjViKV0pO31jYXRjaHt9ZmluYWxseXtfMHg0MGU4OGEmJihfMHgxYWVjYzFbJ2NvbnNvbGUnXVtfMHg0NThiNmUoMHgxY2IpXT1fMHg0MGU4OGEpO31pZihfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4Mjc4KV09PT1fMHg0NThiNmUoMHgxOWYpfHxfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4Mjc4KV09PT0nTnVtYmVyJyl7aWYoaXNOYU4oXzB4MzY0NzQ4W18weDQ1OGI2ZSgweDIzYSldKSlfMHgzNjQ3NDhbJ25hbiddPSEweDAsZGVsZXRlIF8weDM2NDc0OFtfMHg0NThiNmUoMHgyM2EpXTtlbHNlIHN3aXRjaChfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4MjNhKV0pe2Nhc2UgTnVtYmVyW18weDQ1OGI2ZSgweDI1NyldOl8weDM2NDc0OFsncG9zaXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDM2NDc0OFtfMHg0NThiNmUoMHgyM2EpXTticmVhaztjYXNlIE51bWJlcltfMHg0NThiNmUoMHgyM2UpXTpfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4MjIwKV09ITB4MCxkZWxldGUgXzB4MzY0NzQ4W18weDQ1OGI2ZSgweDIzYSldO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4NDU4YjZlKDB4MWRiKV0oXzB4MzY0NzQ4Wyd2YWx1ZSddKSYmKF8weDM2NDc0OFtfMHg0NThiNmUoMHgxYjQpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4MzY0NzQ4W18weDQ1OGI2ZSgweDI3OCldPT09XzB4NDU4YjZlKDB4MWVkKSYmdHlwZW9mIF8weDE3MzlmMVtfMHg0NThiNmUoMHgyMjcpXT09XzB4NDU4YjZlKDB4MWEwKSYmXzB4MTczOWYxW18weDQ1OGI2ZSgweDIyNyldJiZfMHgzNjQ3NDhbJ25hbWUnXSYmXzB4MTczOWYxWyduYW1lJ10hPT1fMHgzNjQ3NDhbXzB4NDU4YjZlKDB4MjI3KV0mJihfMHgzNjQ3NDhbXzB4NDU4YjZlKDB4MjU2KV09XzB4MTczOWYxW18weDQ1OGI2ZSgweDIyNyldKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHhlNjJmMDIpe3ZhciBfMHgzMWQ0MDM9XzB4NDU1MjcxO3JldHVybiAweDEvXzB4ZTYyZjAyPT09TnVtYmVyW18weDMxZDQwMygweDIzZSldO31bXzB4NDU1MjcxKDB4MWM2KV0oXzB4MTdmMmJmKXt2YXIgXzB4YWU4YTNjPV8weDQ1NTI3MTshXzB4MTdmMmJmW18weGFlOGEzYygweDIwNyldfHwhXzB4MTdmMmJmW18weGFlOGEzYygweDIwNyldWydsZW5ndGgnXXx8XzB4MTdmMmJmW18weGFlOGEzYygweDI3OCldPT09XzB4YWU4YTNjKDB4MWMzKXx8XzB4MTdmMmJmWyd0eXBlJ109PT0nTWFwJ3x8XzB4MTdmMmJmWyd0eXBlJ109PT1fMHhhZThhM2MoMHgxZTgpfHxfMHgxN2YyYmZbXzB4YWU4YTNjKDB4MjA3KV1bXzB4YWU4YTNjKDB4MjY5KV0oZnVuY3Rpb24oXzB4MTVlMGIzLF8weDRkNjc2Yil7dmFyIF8weDIzYWVmYz1fMHhhZThhM2MsXzB4NzIxZDIzPV8weDE1ZTBiM1tfMHgyM2FlZmMoMHgyMjcpXVtfMHgyM2FlZmMoMHgyMmYpXSgpLF8weDE4ZDFmNz1fMHg0ZDY3NmJbXzB4MjNhZWZjKDB4MjI3KV1bXzB4MjNhZWZjKDB4MjJmKV0oKTtyZXR1cm4gXzB4NzIxZDIzPF8weDE4ZDFmNz8tMHgxOl8weDcyMWQyMz5fMHgxOGQxZjc/MHgxOjB4MDt9KTt9W18weDQ1NTI3MSgweDIxZSldKF8weDM5MTBiNSxfMHgzYzM1Mzgpe3ZhciBfMHgyNGU5MDU9XzB4NDU1MjcxO2lmKCEoXzB4M2MzNTM4W18weDI0ZTkwNSgweDFjZSldfHwhXzB4MzkxMGI1W18weDI0ZTkwNSgweDIwNyldfHwhXzB4MzkxMGI1Wydwcm9wcyddWydsZW5ndGgnXSkpe2Zvcih2YXIgXzB4NDdiZTQzPVtdLF8weDIxYjdiYj1bXSxfMHhmYjU4ZTA9MHgwLF8weDMyYjE2Nj1fMHgzOTEwYjVbXzB4MjRlOTA1KDB4MjA3KV1bXzB4MjRlOTA1KDB4MjViKV07XzB4ZmI1OGUwPF8weDMyYjE2NjtfMHhmYjU4ZTArKyl7dmFyIF8weDRhMmY0Mj1fMHgzOTEwYjVbXzB4MjRlOTA1KDB4MjA3KV1bXzB4ZmI1OGUwXTtfMHg0YTJmNDJbXzB4MjRlOTA1KDB4Mjc4KV09PT1fMHgyNGU5MDUoMHgxZWQpP18weDQ3YmU0M1tfMHgyNGU5MDUoMHgxZDIpXShfMHg0YTJmNDIpOl8weDIxYjdiYlsncHVzaCddKF8weDRhMmY0Mik7fWlmKCEoIV8weDIxYjdiYltfMHgyNGU5MDUoMHgyNWIpXXx8XzB4NDdiZTQzW18weDI0ZTkwNSgweDI1YildPD0weDEpKXtfMHgzOTEwYjVbXzB4MjRlOTA1KDB4MjA3KV09XzB4MjFiN2JiO3ZhciBfMHg1YjQ0Mjk9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4NDdiZTQzfTt0aGlzW18weDI0ZTkwNSgweDFiYyldKF8weDViNDQyOSxfMHgzYzM1MzgpLHRoaXNbJ19zZXROb2RlTGFiZWwnXShfMHg1YjQ0MjksXzB4M2MzNTM4KSx0aGlzW18weDI0ZTkwNSgweDIxMildKF8weDViNDQyOSksdGhpc1tfMHgyNGU5MDUoMHgxZDApXShfMHg1YjQ0MjksXzB4M2MzNTM4KSxfMHg1YjQ0MjlbJ2lkJ10rPSdcXFxceDIwZicsXzB4MzkxMGI1W18weDI0ZTkwNSgweDIwNyldW18weDI0ZTkwNSgweDIxOCldKF8weDViNDQyOSk7fX19W18weDQ1NTI3MSgweDI0OCldKF8weDU4MmU2MCxfMHgxNjk2N2Ype31bXzB4NDU1MjcxKDB4MjEyKV0oXzB4NDE1ODBkKXt9WydfaXNBcnJheSddKF8weDM3YjRjMyl7dmFyIF8weDE5NWRmMz1fMHg0NTUyNzE7cmV0dXJuIEFycmF5W18weDE5NWRmMygweDFiMyldKF8weDM3YjRjMyl8fHR5cGVvZiBfMHgzN2I0YzM9PSdvYmplY3QnJiZ0aGlzW18weDE5NWRmMygweDIzYyldKF8weDM3YjRjMyk9PT1fMHgxOTVkZjMoMHgyNmYpO31bXzB4NDU1MjcxKDB4MWQwKV0oXzB4NWU2YzA2LF8weDUyOGRhYil7fVtfMHg0NTUyNzEoMHgyNjYpXShfMHgyNTZlMmIpe3ZhciBfMHgxMjY2YWQ9XzB4NDU1MjcxO2RlbGV0ZSBfMHgyNTZlMmJbXzB4MTI2NmFkKDB4MjUzKV0sZGVsZXRlIF8weDI1NmUyYltfMHgxMjY2YWQoMHgxOWQpXSxkZWxldGUgXzB4MjU2ZTJiWydfaGFzTWFwT25JdHNQYXRoJ107fVtfMHg0NTUyNzEoMHgxYTUpXShfMHgzYjYwYmQsXzB4MzVlN2Q5KXt9W18weDQ1NTI3MSgweDI3MyldKF8weDVlYzU5OCl7dmFyIF8weDU2OGRjYj1fMHg0NTUyNzE7cmV0dXJuIF8weDVlYzU5OD9fMHg1ZWM1OThbXzB4NTY4ZGNiKDB4MjUxKV0odGhpc1tfMHg1NjhkY2IoMHgyMDkpXSk/J1snK18weDVlYzU5OCsnXSc6XzB4NWVjNTk4W18weDU2OGRjYigweDI1MSldKHRoaXNbJ19rZXlTdHJSZWdFeHAnXSk/Jy4nK18weDVlYzU5ODpfMHg1ZWM1OThbXzB4NTY4ZGNiKDB4MjUxKV0odGhpc1snX3F1b3RlZFJlZ0V4cCddKT8nWycrXzB4NWVjNTk4KyddJzonW1xcXFx4MjcnK18weDVlYzU5OCsnXFxcXHgyN10nOicnO319bGV0IF8weDM4ZGM2OD1uZXcgXzB4MzA2OTcoKTtmdW5jdGlvbiBfMHgxODk4YmUoXzB4NGRjM2FkLF8weDRjNTU1NixfMHgxOTIxY2YsXzB4MjY4NzkwLF8weDRmOTIzLF8weDVjZTllMCl7dmFyIF8weDc1NDAxYj1fMHg0NTUyNzE7bGV0IF8weDU3ODcxYixfMHgxYjA4MTU7dHJ5e18weDFiMDgxNT1fMHgyY2IzMWQoKSxfMHg1Nzg3MWI9XzB4MThiZTZlW18weDRjNTU1Nl0sIV8weDU3ODcxYnx8XzB4MWIwODE1LV8weDU3ODcxYlsndHMnXT4weDFmNCYmXzB4NTc4NzFiW18weDc1NDAxYigweDIzMSldJiZfMHg1Nzg3MWJbXzB4NzU0MDFiKDB4MjY0KV0vXzB4NTc4NzFiWydjb3VudCddPDB4NjQ/KF8weDE4YmU2ZVtfMHg0YzU1NTZdPV8weDU3ODcxYj17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDFiMDgxNX0sXzB4MThiZTZlW18weDc1NDAxYigweDFlNCldPXt9KTpfMHgxYjA4MTUtXzB4MThiZTZlW18weDc1NDAxYigweDFlNCldWyd0cyddPjB4MzImJl8weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXVsnY291bnQnXSYmXzB4MThiZTZlWydoaXRzJ11bJ3RpbWUnXS9fMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV1bXzB4NzU0MDFiKDB4MjMxKV08MHg2NCYmKF8weDE4YmU2ZVsnaGl0cyddPXt9KTtsZXQgXzB4NGI5YTU4PVtdLF8weDQzMzI4Nz1fMHg1Nzg3MWJbJ3JlZHVjZUxpbWl0cyddfHxfMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV1bXzB4NzU0MDFiKDB4MjBjKV0/XzB4MzkzYzcwOl8weDU4OWZmNCxfMHgxYTAzZjQ9XzB4MTE5NWRhPT57dmFyIF8weDM3NzRiZT1fMHg3NTQwMWI7bGV0IF8weDUxMjNlNj17fTtyZXR1cm4gXzB4NTEyM2U2Wydwcm9wcyddPV8weDExOTVkYVtfMHgzNzc0YmUoMHgyMDcpXSxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MWMxKV09XzB4MTE5NWRhWydlbGVtZW50cyddLF8weDUxMjNlNltfMHgzNzc0YmUoMHgyMTEpXT1fMHgxMTk1ZGFbJ3N0ckxlbmd0aCddLF8weDUxMjNlNltfMHgzNzc0YmUoMHgxZjApXT1fMHgxMTk1ZGFbXzB4Mzc3NGJlKDB4MWYwKV0sXzB4NTEyM2U2WydhdXRvRXhwYW5kTGltaXQnXT1fMHgxMTk1ZGFbXzB4Mzc3NGJlKDB4MjQ1KV0sXzB4NTEyM2U2WydhdXRvRXhwYW5kTWF4RGVwdGgnXT1fMHgxMTk1ZGFbJ2F1dG9FeHBhbmRNYXhEZXB0aCddLF8weDUxMjNlNltfMHgzNzc0YmUoMHgxZTkpXT0hMHgxLF8weDUxMjNlNlsnbm9GdW5jdGlvbnMnXT0hXzB4MjkwODk1LF8weDUxMjNlNltfMHgzNzc0YmUoMHgxOTkpXT0weDEsXzB4NTEyM2U2W18weDM3NzRiZSgweDFhMyldPTB4MCxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MjFiKV09XzB4Mzc3NGJlKDB4MWM3KSxfMHg1MTIzZTZbJ3Jvb3RFeHByZXNzaW9uJ109XzB4Mzc3NGJlKDB4MWJhKSxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MjNkKV09ITB4MCxfMHg1MTIzZTZbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXT1bXSxfMHg1MTIzZTZbXzB4Mzc3NGJlKDB4MWIwKV09MHgwLF8weDUxMjNlNltfMHgzNzc0YmUoMHgxYzApXT0hMHgwLF8weDUxMjNlNltfMHgzNzc0YmUoMHgxYzIpXT0weDAsXzB4NTEyM2U2W18weDM3NzRiZSgweDI2YildPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDUxMjNlNjt9O2Zvcih2YXIgXzB4MjAyNTVmPTB4MDtfMHgyMDI1NWY8XzB4NGY5MjNbXzB4NzU0MDFiKDB4MjViKV07XzB4MjAyNTVmKyspXzB4NGI5YTU4WydwdXNoJ10oXzB4MzhkYzY4W18weDc1NDAxYigweDFmZildKHsndGltZU5vZGUnOl8weDRkYzNhZD09PSd0aW1lJ3x8dm9pZCAweDB9LF8weDRmOTIzW18weDIwMjU1Zl0sXzB4MWEwM2Y0KF8weDQzMzI4Nykse30pKTtpZihfMHg0ZGMzYWQ9PT1fMHg3NTQwMWIoMHgxOTYpKXtsZXQgXzB4NDU3NGQ5PUVycm9yW18weDc1NDAxYigweDFmZSldO3RyeXtFcnJvcltfMHg3NTQwMWIoMHgxZmUpXT0weDEvMHgwLF8weDRiOWE1OFtfMHg3NTQwMWIoMHgxZDIpXShfMHgzOGRjNjhbXzB4NzU0MDFiKDB4MWZmKV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDc1NDAxYigweDFlMyldLF8weDFhMDNmNChfMHg0MzMyODcpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yWydzdGFja1RyYWNlTGltaXQnXT1fMHg0NTc0ZDk7fX1yZXR1cm57J21ldGhvZCc6XzB4NzU0MDFiKDB4MjNmKSwndmVyc2lvbic6XzB4OTRjZjhjLCdhcmdzJzpbeyd0cyc6XzB4MTkyMWNmLCdzZXNzaW9uJzpfMHgyNjg3OTAsJ2FyZ3MnOl8weDRiOWE1OCwnaWQnOl8weDRjNTU1NiwnY29udGV4dCc6XzB4NWNlOWUwfV19O31jYXRjaChfMHgyOTdmNjkpe3JldHVybnsnbWV0aG9kJzpfMHg3NTQwMWIoMHgyM2YpLCd2ZXJzaW9uJzpfMHg5NGNmOGMsJ2FyZ3MnOlt7J3RzJzpfMHgxOTIxY2YsJ3Nlc3Npb24nOl8weDI2ODc5MCwnYXJncyc6W3sndHlwZSc6XzB4NzU0MDFiKDB4Mjc0KSwnZXJyb3InOl8weDI5N2Y2OSYmXzB4Mjk3ZjY5W18weDc1NDAxYigweDFiYildfV0sJ2lkJzpfMHg0YzU1NTYsJ2NvbnRleHQnOl8weDVjZTllMH1dfTt9ZmluYWxseXt0cnl7aWYoXzB4NTc4NzFiJiZfMHgxYjA4MTUpe2xldCBfMHgyZTI3YzA9XzB4MmNiMzFkKCk7XzB4NTc4NzFiW18weDc1NDAxYigweDIzMSldKyssXzB4NTc4NzFiW18weDc1NDAxYigweDI2NCldKz1fMHgxYjFjM2EoXzB4MWIwODE1LF8weDJlMjdjMCksXzB4NTc4NzFiWyd0cyddPV8weDJlMjdjMCxfMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV1bJ2NvdW50J10rKyxfMHgxOGJlNmVbXzB4NzU0MDFiKDB4MWU0KV1bJ3RpbWUnXSs9XzB4MWIxYzNhKF8weDFiMDgxNSxfMHgyZTI3YzApLF8weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXVsndHMnXT1fMHgyZTI3YzAsKF8weDU3ODcxYltfMHg3NTQwMWIoMHgyMzEpXT4weDMyfHxfMHg1Nzg3MWJbXzB4NzU0MDFiKDB4MjY0KV0+MHg2NCkmJihfMHg1Nzg3MWJbXzB4NzU0MDFiKDB4MjBjKV09ITB4MCksKF8weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXVsnY291bnQnXT4weDNlOHx8XzB4MThiZTZlW18weDc1NDAxYigweDFlNCldW18weDc1NDAxYigweDI2NCldPjB4MTJjKSYmKF8weDE4YmU2ZVtfMHg3NTQwMWIoMHgxZTQpXVtfMHg3NTQwMWIoMHgyMGMpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgxYWVjYzFbJ19jb25zb2xlX25pbmphJ107fSkoZ2xvYmFsVGhpcyxfMHgyMzA5OTUoMHgyNTkpLF8weDIzMDk5NSgweDIyYyksXzB4MjMwOTk1KDB4MWRjKSxfMHgyMzA5OTUoMHgxYjIpLF8weDIzMDk5NSgweDI0NyksJzE2OTE4NjUxMTMyMjgnLF8weDIzMDk5NSgweDI2OCksXzB4MjMwOTk1KDB4MjM2KSk7XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImltcG9ydCAnLi9jc3MvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2hlYWRlci5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9sb2FkaW5nLmNzcyc7XG5pbXBvcnQgcHJpbnRXZWF0aGVyQXBwIGZyb20gJy4vYXNzZXRzL3dlYXRoZXJBcHAvd2VhdGhlckFwcCc7XG5cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBpcyB0aGUgbWFpbiBmdW5jdGlvbiBvZiB0aGUgYXBwbGljYXRpb25cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIHByaW50V2VhdGhlckFwcCgpO1xufVxuXG5pbml0KCk7IC8vIENhbGxpbmcgdGhlIG1haW4gZnVuY3Rpb25cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==