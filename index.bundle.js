/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/me-cool-light.jpg */ "./src/images/me-cool-light.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n }\n \n \n * {\n  margin: 0;\n  padding: 0;\n }\n \n \n body {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Varela Round';\n }\n \n \n img, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n }\n \n \n input, button, textarea, select {\n  font: inherit;\n }\n \n \n p, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n }\n \n \n button, a{\n  cursor: pointer;\n  }\n \n \n a{\n    text-decoration: none;\n    color: black;\n    transition: transform 0.3s;\n }\n\n a:hover {\n  transform: scale(1.2);\n }\n  \n\n body{\n  display: flex;\n  flex-direction: column;\n  gap: 10vh;\n}\n\n .me{\n  display: flex;\n  align-items: center;\n  padding: 5vh 5vw;\n  background: linear-gradient(168deg, #0891B2 60%, white 40%);\n }\n\n .main-img {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position:center;\n  background-size: cover;\n  flex: 1;\n  min-height: 60vh;\n  min-width: 60vh;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .main-img p {\n  color: white;\n  font-size: 2.5rem;\n  font-weight: 600;\n }\n\n .about-me{\n  background-color: white;\n  border-left: none;\n  padding: 3vh 3vw;\n  padding-left: 5vw;\n  display: flex;\n  flex-direction: column;\n  gap: 2vh;\n  font-size: 1.2rem;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .about-me-title{\n  font-size: 2rem;\n }\n\n .media {\n  align-self: flex-end;\n  display: flex;\n  gap: 6px;\n }\n\n.media a {\n  border: none;\n  background-color: transparent;\n  height: 25px;\n  width: 25px;\n }\n\n\n.projects {\n  padding: 0px 5vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 40px 1fr 1fr;\n  gap: 5vh;\n  justify-items: center;\n}\n\n.projects h2{\n  grid-area: 1/1/2/4;\n}\n\n.project{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 20vw;\n  /* background-color: aquamarine; */\n  box-shadow: 4px 3px 10px darkgray;\n}\n\n.project-img{\n  max-height:auto;\n  max-width: 100%;\n}\n\n.project-info {\n  display: grid;\n  grid-template-columns: 1fr 25px 25px;\n  grid-template-rows: 40px 1fr;\n  padding: 20px;\n  gap: 12px;\n  align-items: center;\n}\n\n\n .project-info a{\n  border: none;\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  transform: scale(1.2);\n }\n\n .project-info a:hover {\n  transform: scale(1.4);\n }\n\n.project-info p {\n  grid-area: 2/1/3/4;\n}\n\nfooter {\n  display: flex;\n  padding: 5vh 5vw;\n  align-items: center;\n  justify-content: center;\n  gap: 10vw;\n  background-color: #0891B2;\n}\n\n.footer-info{\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nfont-size: 1.3rem;\n}\n\n.phone, .email{\n  display: flex;\n  gap: 12px;\n}\n\n.phone-icon, .email-icon {\n  max-height: 25px;\n  max-width: 25px;\n}\n\n.footer-info  .media {\n  align-self: flex-start;\n}\n\n.footer-img{\n  aspect-ratio: initial;\n  max-width: auto;\n  max-height: 50vh;\n  box-shadow: 3px 5px 10px darkgray;\n} \n\n\n\n /* .me-img {\n  aspect-ratio: initial;\n  height: 40vh;\n  width: auto;\n } */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;CACvB;;;CAGA;EACC,SAAS;EACT,UAAU;CACX;;;CAGA;EACC,gBAAgB;EAChB,mCAAmC;EACnC,2BAA2B;CAC5B;;;CAGA;EACC,cAAc;EACd,eAAe;CAChB;;;CAGA;EACC,aAAa;CACd;;;CAGA;EACC,yBAAyB;CAC1B;;;CAGA;EACC,eAAe;EACf;;;CAGD;IACG,qBAAqB;IACrB,YAAY;IACZ,0BAA0B;CAC7B;;CAEA;EACC,qBAAqB;CACtB;;;CAGA;EACC,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;CAEC;EACC,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,2DAA2D;CAC5D;;CAEA;EACC,yDAAiD;EACjD,0BAA0B;EAC1B,sBAAsB;EACtB,OAAO;EACP,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,iCAAiC;CAClC;;CAEA;EACC,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;CACjB;;CAEA;EACC,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,iBAAiB;EACjB,iCAAiC;CAClC;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,oBAAoB;EACpB,aAAa;EACb,QAAQ;CACT;;AAED;EACE,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,WAAW;CACZ;;;AAGD;EACE,gBAAgB;EAChB,aAAa;EACb,kCAAkC;EAClC,gCAAgC;EAChC,QAAQ;EACR,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,kCAAkC;EAClC,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,4BAA4B;EAC5B,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;;CAGC;EACC,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,WAAW;EACX,qBAAqB;CACtB;;CAEA;EACC,qBAAqB;CACtB;;AAED;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;AACA,aAAa;AACb,sBAAsB;AACtB,SAAS;AACT,iBAAiB;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,iCAAiC;AACnC;;;;CAIC;;;;IAIG","sourcesContent":["*, *::before, *::after {\n  box-sizing: border-box;\n }\n \n \n * {\n  margin: 0;\n  padding: 0;\n }\n \n \n body {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Varela Round';\n }\n \n \n img, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n }\n \n \n input, button, textarea, select {\n  font: inherit;\n }\n \n \n p, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n }\n \n \n button, a{\n  cursor: pointer;\n  }\n \n \n a{\n    text-decoration: none;\n    color: black;\n    transition: transform 0.3s;\n }\n\n a:hover {\n  transform: scale(1.2);\n }\n  \n\n body{\n  display: flex;\n  flex-direction: column;\n  gap: 10vh;\n}\n\n .me{\n  display: flex;\n  align-items: center;\n  padding: 5vh 5vw;\n  background: linear-gradient(168deg, #0891B2 60%, white 40%);\n }\n\n .main-img {\n  background-image: url(./images/me-cool-light.jpg);\n  background-position:center;\n  background-size: cover;\n  flex: 1;\n  min-height: 60vh;\n  min-width: 60vh;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .main-img p {\n  color: white;\n  font-size: 2.5rem;\n  font-weight: 600;\n }\n\n .about-me{\n  background-color: white;\n  border-left: none;\n  padding: 3vh 3vw;\n  padding-left: 5vw;\n  display: flex;\n  flex-direction: column;\n  gap: 2vh;\n  font-size: 1.2rem;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .about-me-title{\n  font-size: 2rem;\n }\n\n .media {\n  align-self: flex-end;\n  display: flex;\n  gap: 6px;\n }\n\n.media a {\n  border: none;\n  background-color: transparent;\n  height: 25px;\n  width: 25px;\n }\n\n\n.projects {\n  padding: 0px 5vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 40px 1fr 1fr;\n  gap: 5vh;\n  justify-items: center;\n}\n\n.projects h2{\n  grid-area: 1/1/2/4;\n}\n\n.project{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 20vw;\n  /* background-color: aquamarine; */\n  box-shadow: 4px 3px 10px darkgray;\n}\n\n.project-img{\n  max-height:auto;\n  max-width: 100%;\n}\n\n.project-info {\n  display: grid;\n  grid-template-columns: 1fr 25px 25px;\n  grid-template-rows: 40px 1fr;\n  padding: 20px;\n  gap: 12px;\n  align-items: center;\n}\n\n\n .project-info a{\n  border: none;\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  transform: scale(1.2);\n }\n\n .project-info a:hover {\n  transform: scale(1.4);\n }\n\n.project-info p {\n  grid-area: 2/1/3/4;\n}\n\nfooter {\n  display: flex;\n  padding: 5vh 5vw;\n  align-items: center;\n  justify-content: center;\n  gap: 10vw;\n  background-color: #0891B2;\n}\n\n.footer-info{\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nfont-size: 1.3rem;\n}\n\n.phone, .email{\n  display: flex;\n  gap: 12px;\n}\n\n.phone-icon, .email-icon {\n  max-height: 25px;\n  max-width: 25px;\n}\n\n.footer-info  .media {\n  align-self: flex-start;\n}\n\n.footer-img{\n  aspect-ratio: initial;\n  max-width: auto;\n  max-height: 50vh;\n  box-shadow: 3px 5px 10px darkgray;\n} \n\n\n\n /* .me-img {\n  aspect-ratio: initial;\n  height: 40vh;\n  width: auto;\n } */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



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
/***/ (function(module) {



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
/***/ (function(module) {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



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
/***/ (function(module) {



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
/***/ (function(module) {



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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



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
/***/ (function(module) {



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
/***/ (function(module) {



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

/***/ "./src/images/admin-dashboard.png":
/*!****************************************!*\
  !*** ./src/images/admin-dashboard.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b9cec7532df58a6ea794.png";

/***/ }),

/***/ "./src/images/battleship.webp":
/*!************************************!*\
  !*** ./src/images/battleship.webp ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3353504112888efe9154.webp";

/***/ }),

/***/ "./src/images/call.png":
/*!*****************************!*\
  !*** ./src/images/call.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9ecec675bca004b7d120.png";

/***/ }),

/***/ "./src/images/email.png":
/*!******************************!*\
  !*** ./src/images/email.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af02ce9af1d80c11abb7.png";

/***/ }),

/***/ "./src/images/favicon.ico":
/*!********************************!*\
  !*** ./src/images/favicon.ico ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fc4ff6a2062ad0c39ecb.ico";

/***/ }),

/***/ "./src/images/funcard.png":
/*!********************************!*\
  !*** ./src/images/funcard.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f01603b9f193bd88736b.png";

/***/ }),

/***/ "./src/images/me-cool-light.jpg":
/*!**************************************!*\
  !*** ./src/images/me-cool-light.jpg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f3fa8403dc79a2be9cc0.jpg";

/***/ }),

/***/ "./src/images/me-smiling.jpg":
/*!***********************************!*\
  !*** ./src/images/me-smiling.jpg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "235c0e8fa841c66d3f6c.jpg";

/***/ }),

/***/ "./src/images/open-in-new.svg":
/*!************************************!*\
  !*** ./src/images/open-in-new.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3ede19ed228086e87d89.svg";

/***/ }),

/***/ "./src/images/restaurant.png":
/*!***********************************!*\
  !*** ./src/images/restaurant.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2b61b46dc9e12bfe1b76.png";

/***/ }),

/***/ "./src/images/to-do-list.webp":
/*!************************************!*\
  !*** ./src/images/to-do-list.webp ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "25bcd5a65ecf0590133a.webp";

/***/ }),

/***/ "./src/images/weather.webp":
/*!*********************************!*\
  !*** ./src/images/weather.webp ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3c35e595b7aee9ace3ab.webp";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_me_smiling_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/me-smiling.jpg */ "./src/images/me-smiling.jpg");
/* harmony import */ var _images_favicon_ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/favicon.ico */ "./src/images/favicon.ico");
/* harmony import */ var _images_open_in_new_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/open-in-new.svg */ "./src/images/open-in-new.svg");
/* harmony import */ var _images_call_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/call.png */ "./src/images/call.png");
/* harmony import */ var _images_email_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/email.png */ "./src/images/email.png");
/* harmony import */ var _images_battleship_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/battleship.webp */ "./src/images/battleship.webp");
/* harmony import */ var _images_funcard_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/funcard.png */ "./src/images/funcard.png");
/* harmony import */ var _images_restaurant_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/restaurant.png */ "./src/images/restaurant.png");
/* harmony import */ var _images_to_do_list_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/to-do-list.webp */ "./src/images/to-do-list.webp");
/* harmony import */ var _images_weather_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/weather.webp */ "./src/images/weather.webp");
/* harmony import */ var _images_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/admin-dashboard.png */ "./src/images/admin-dashboard.png");

// import meCoolLight from './images/me-cool-light.jpg';











// import projects from './images/'

const link = document.createElement('link');
link.rel = 'icon';
link.href = _images_favicon_ico__WEBPACK_IMPORTED_MODULE_2__;
document.head.appendChild(link);
const externalWindow = document.querySelectorAll('.external-window');
externalWindow.forEach(button => {
  const img = new Image();
  img.src = _images_open_in_new_svg__WEBPACK_IMPORTED_MODULE_3__;
  button.appendChild(img);
});
const footerImg = document.querySelector('.footer-img');
footerImg.src = _images_me_smiling_jpg__WEBPACK_IMPORTED_MODULE_1__;
const phoneIcon = document.querySelector('.phone-icon');
phoneIcon.src = _images_call_png__WEBPACK_IMPORTED_MODULE_4__;
const emailIcon = document.querySelector('.email-icon');
emailIcon.src = _images_email_png__WEBPACK_IMPORTED_MODULE_5__;
const battleship = document.querySelector('#battleship > img');
battleship.src = _images_battleship_webp__WEBPACK_IMPORTED_MODULE_6__;
const funcard = document.querySelector('#funcard > img');
funcard.src = _images_funcard_png__WEBPACK_IMPORTED_MODULE_7__;
const restaurant = document.querySelector('#restaurant> img');
restaurant.src = _images_restaurant_png__WEBPACK_IMPORTED_MODULE_8__;
const toDoList = document.querySelector('#to-do-list > img');
toDoList.src = _images_to_do_list_webp__WEBPACK_IMPORTED_MODULE_9__;
const weather = document.querySelector('#weather > img');
weather.src = _images_weather_webp__WEBPACK_IMPORTED_MODULE_10__;
const adminDashboard = document.querySelector('#admin-dashboard > img');
adminDashboard.src = _images_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_11__;
// const projectImg = document.querySelector('.project-img');
// projectImg.src = ;
// externalWindow.appendChild(img);

// const imgElement = document.querySelector('.me-img');
// imgElement.src = meCoolLight;
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUNjLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUM3REssVUFBVSxDQUFDUCxHQUFHLEdBQUdqQixtREFBYTtBQUU5QixNQUFNeUIsUUFBUSxHQUFHcEIsUUFBUSxDQUFDYyxhQUFhLENBQUMsbUJBQW1CLENBQUM7QUFDNURNLFFBQVEsQ0FBQ1IsR0FBRyxHQUFHaEIsb0RBQVc7QUFFMUIsTUFBTXlCLE9BQU8sR0FBR3JCLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3hETyxPQUFPLENBQUNULEdBQUcsR0FBR2Ysa0RBQVU7QUFFeEIsTUFBTXlCLGNBQWMsR0FBR3RCLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0FBQ3ZFUSxjQUFjLENBQUNWLEdBQUcsR0FBR2QseURBQVE7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbWUtY29vbC1saWdodC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG4gXFxuIFxcbiAqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuIH1cXG4gXFxuIFxcbiBib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJztcXG4gfVxcbiBcXG4gXFxuIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiB9XFxuIFxcbiBcXG4gaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbiB9XFxuIFxcbiBcXG4gcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiB9XFxuIFxcbiBcXG4gYnV0dG9uLCBhe1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiBcXG4gXFxuIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gfVxcblxcbiBhOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gfVxcbiAgXFxuXFxuIGJvZHl7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTB2aDtcXG59XFxuXFxuIC5tZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXZoIDV2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjhkZWcsICMwODkxQjIgNjAlLCB3aGl0ZSA0MCUpO1xcbiB9XFxuXFxuIC5tYWluLWltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZmxleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxuICBtaW4td2lkdGg6IDYwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxuIH1cXG5cXG4gLm1haW4taW1nIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiB9XFxuXFxuIC5hYm91dC1tZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBwYWRkaW5nOiAzdmggM3Z3O1xcbiAgcGFkZGluZy1sZWZ0OiA1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnZoO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxuIH1cXG5cXG4gLmFib3V0LW1lLXRpdGxle1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiB9XFxuXFxuIC5tZWRpYSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG4gfVxcblxcbi5tZWRpYSBhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuIH1cXG5cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMHB4IDV2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciAxZnI7XFxuICBnYXA6IDV2aDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIGgye1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi80O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMjB2dztcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXFxuICBib3gtc2hhZG93OiA0cHggM3B4IDEwcHggZGFya2dyYXk7XFxufVxcblxcbi5wcm9qZWN0LWltZ3tcXG4gIG1heC1oZWlnaHQ6YXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjVweCAyNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDEycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4gLnByb2plY3QtaW5mbyBhe1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gfVxcblxcbiAucHJvamVjdC1pbmZvIGE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiB9XFxuXFxuLnByb2plY3QtaW5mbyBwIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvNDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1dmggNXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFCMjtcXG59XFxuXFxuLmZvb3Rlci1pbmZve1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5nYXA6IDEycHg7XFxuZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5waG9uZSwgLmVtYWlse1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnBob25lLWljb24sIC5lbWFpbC1pY29uIHtcXG4gIG1heC1oZWlnaHQ6IDI1cHg7XFxuICBtYXgtd2lkdGg6IDI1cHg7XFxufVxcblxcbi5mb290ZXItaW5mbyAgLm1lZGlhIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5mb290ZXItaW1ne1xcbiAgYXNwZWN0LXJhdGlvOiBpbml0aWFsO1xcbiAgbWF4LXdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNTB2aDtcXG4gIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCBkYXJrZ3JheTtcXG59IFxcblxcblxcblxcbiAvKiAubWUtaW1nIHtcXG4gIGFzcGVjdC1yYXRpbzogaW5pdGlhbDtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHdpZHRoOiBhdXRvO1xcbiB9ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtDQUN2Qjs7O0NBR0E7RUFDQyxTQUFTO0VBQ1QsVUFBVTtDQUNYOzs7Q0FHQTtFQUNDLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsMkJBQTJCO0NBQzVCOzs7Q0FHQTtFQUNDLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOzs7Q0FHQTtFQUNDLGFBQWE7Q0FDZDs7O0NBR0E7RUFDQyx5QkFBeUI7Q0FDMUI7OztDQUdBO0VBQ0MsZUFBZTtFQUNmOzs7Q0FHRDtJQUNHLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osMEJBQTBCO0NBQzdCOztDQUVBO0VBQ0MscUJBQXFCO0NBQ3RCOzs7Q0FHQTtFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztDQUVDO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMkRBQTJEO0NBQzVEOztDQUVBO0VBQ0MseURBQWlEO0VBQ2pELDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsaUNBQWlDO0NBQ2xDOztDQUVBO0VBQ0MsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGlDQUFpQztDQUNsQzs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFFBQVE7Q0FDVDs7QUFFRDtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFdBQVc7Q0FDWjs7O0FBR0Q7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxnQ0FBZ0M7RUFDaEMsUUFBUTtFQUNSLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7O0NBR0M7RUFDQyxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0NBQ3RCOztDQUVBO0VBQ0MscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLFNBQVM7QUFDVCxpQkFBaUI7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7Ozs7Q0FJQzs7OztJQUlHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gfVxcbiBcXG4gXFxuICoge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gfVxcbiBcXG4gXFxuIGJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnO1xcbiB9XFxuIFxcbiBcXG4gaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuIH1cXG4gXFxuIFxcbiBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuIH1cXG4gXFxuIFxcbiBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuIH1cXG4gXFxuIFxcbiBidXR0b24sIGF7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuIFxcbiBcXG4gYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiB9XFxuXFxuIGE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiB9XFxuICBcXG5cXG4gYm9keXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHZoO1xcbn1cXG5cXG4gLm1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1dmggNXZ3O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2OGRlZywgIzA4OTFCMiA2MCUsIHdoaXRlIDQwJSk7XFxuIH1cXG5cXG4gLm1haW4taW1nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9tZS1jb29sLWxpZ2h0LmpwZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBmbGV4OiAxO1xcbiAgbWluLWhlaWdodDogNjB2aDtcXG4gIG1pbi13aWR0aDogNjB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCBkYXJrZ3JheTtcXG4gfVxcblxcbiAubWFpbi1pbWcgcCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuIH1cXG5cXG4gLmFib3V0LW1le1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIHBhZGRpbmc6IDN2aCAzdnc7XFxuICBwYWRkaW5nLWxlZnQ6IDV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAydmg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCBkYXJrZ3JheTtcXG4gfVxcblxcbiAuYWJvdXQtbWUtdGl0bGV7XFxuICBmb250LXNpemU6IDJyZW07XFxuIH1cXG5cXG4gLm1lZGlhIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbiB9XFxuXFxuLm1lZGlhIGEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gfVxcblxcblxcbi5wcm9qZWN0cyB7XFxuICBwYWRkaW5nOiAwcHggNXZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDFmcjtcXG4gIGdhcDogNXZoO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHMgaDJ7XFxuICBncmlkLWFyZWE6IDEvMS8yLzQ7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAyMHZ3O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cXG4gIGJveC1zaGFkb3c6IDRweCAzcHggMTBweCBkYXJrZ3JheTtcXG59XFxuXFxuLnByb2plY3QtaW1ne1xcbiAgbWF4LWhlaWdodDphdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyNXB4IDI1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogMTJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiAucHJvamVjdC1pbmZvIGF7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiB9XFxuXFxuIC5wcm9qZWN0LWluZm8gYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuIH1cXG5cXG4ucHJvamVjdC1pbmZvIHAge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy80O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDV2aCA1dnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MUIyO1xcbn1cXG5cXG4uZm9vdGVyLWluZm97XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmdhcDogMTJweDtcXG5mb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnBob25lLCAuZW1haWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucGhvbmUtaWNvbiwgLmVtYWlsLWljb24ge1xcbiAgbWF4LWhlaWdodDogMjVweDtcXG4gIG1heC13aWR0aDogMjVweDtcXG59XFxuXFxuLmZvb3Rlci1pbmZvICAubWVkaWEge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvb3Rlci1pbWd7XFxuICBhc3BlY3QtcmF0aW86IGluaXRpYWw7XFxuICBtYXgtd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbn0gXFxuXFxuXFxuXFxuIC8qIC5tZS1pbWcge1xcbiAgYXNwZWN0LXJhdGlvOiBpbml0aWFsO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgd2lkdGg6IGF1dG87XFxuIH0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBpbXBvcnQgbWVDb29sTGlnaHQgZnJvbSAnLi9pbWFnZXMvbWUtY29vbC1saWdodC5qcGcnO1xuaW1wb3J0IG1lU21pbGluZyBmcm9tICcuL2ltYWdlcy9tZS1zbWlsaW5nLmpwZyc7XG5pbXBvcnQgZmF2aWNvbiBmcm9tICcuL2ltYWdlcy9mYXZpY29uLmljbyc7XG5pbXBvcnQgb3BlbkluTmV3IGZyb20gJy4vaW1hZ2VzL29wZW4taW4tbmV3LnN2Zyc7XG5pbXBvcnQgcGhvbmVQaWMgZnJvbSAnLi9pbWFnZXMvY2FsbC5wbmcnO1xuaW1wb3J0IGVtYWlsUGljIGZyb20gJy4vaW1hZ2VzL2VtYWlsLnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcEltZyBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwLndlYnAnO1xuaW1wb3J0IGZ1bmNhcmRJbWcgZnJvbSAnLi9pbWFnZXMvZnVuY2FyZC5wbmcnO1xuaW1wb3J0IHJlc3RhdXJhbnRJbWcgZnJvbSAnLi9pbWFnZXMvcmVzdGF1cmFudC5wbmcnO1xuaW1wb3J0IHRvRG9MaXN0SW1nIGZyb20gJy4vaW1hZ2VzL3RvLWRvLWxpc3Qud2VicCc7XG5pbXBvcnQgd2VhdGhlckltZyBmcm9tICcuL2ltYWdlcy93ZWF0aGVyLndlYnAnO1xuaW1wb3J0IGFkbWluSW1nIGZyb20gJy4vaW1hZ2VzL2FkbWluLWRhc2hib2FyZC5wbmcnO1xuLy8gaW1wb3J0IHByb2plY3RzIGZyb20gJy4vaW1hZ2VzLydcblxuY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbmxpbmsucmVsID0gJ2ljb24nO1xubGluay5ocmVmID0gZmF2aWNvbjtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cbmNvbnN0IGV4dGVybmFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4dGVybmFsLXdpbmRvdycpO1xuZXh0ZXJuYWxXaW5kb3cuZm9yRWFjaChidXR0b24gPT4ge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IG9wZW5Jbk5ldztcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGltZyk7XG59KTtcblxuY29uc3QgZm9vdGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci1pbWcnKTtcbmZvb3RlckltZy5zcmMgPSBtZVNtaWxpbmc7XG5cbmNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG9uZS1pY29uJyk7XG5waG9uZUljb24uc3JjID0gcGhvbmVQaWM7XG5cbmNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1pY29uJyk7XG5lbWFpbEljb24uc3JjID0gZW1haWxQaWM7XG5cbmNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlc2hpcCA+IGltZycpO1xuYmF0dGxlc2hpcC5zcmMgPSBiYXR0bGVzaGlwSW1nO1xuXG5jb25zdCBmdW5jYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Z1bmNhcmQgPiBpbWcnKTtcbmZ1bmNhcmQuc3JjID0gZnVuY2FyZEltZztcblxuY29uc3QgcmVzdGF1cmFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXVyYW50PiBpbWcnKTtcbnJlc3RhdXJhbnQuc3JjID0gcmVzdGF1cmFudEltZztcblxuY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG8tZG8tbGlzdCA+IGltZycpO1xudG9Eb0xpc3Quc3JjID0gdG9Eb0xpc3RJbWc7XG5cbmNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlciA+IGltZycpO1xud2VhdGhlci5zcmMgPSB3ZWF0aGVySW1nO1xuXG5jb25zdCBhZG1pbkRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZG1pbi1kYXNoYm9hcmQgPiBpbWcnKTtcbmFkbWluRGFzaGJvYXJkLnNyYyA9IGFkbWluSW1nO1xuLy8gY29uc3QgcHJvamVjdEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWltZycpO1xuLy8gcHJvamVjdEltZy5zcmMgPSA7XG4vLyBleHRlcm5hbFdpbmRvdy5hcHBlbmRDaGlsZChpbWcpO1xuXG4vLyBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lLWltZycpO1xuLy8gaW1nRWxlbWVudC5zcmMgPSBtZUNvb2xMaWdodDtcbiJdLCJuYW1lcyI6WyJtZVNtaWxpbmciLCJmYXZpY29uIiwib3BlbkluTmV3IiwicGhvbmVQaWMiLCJlbWFpbFBpYyIsImJhdHRsZXNoaXBJbWciLCJmdW5jYXJkSW1nIiwicmVzdGF1cmFudEltZyIsInRvRG9MaXN0SW1nIiwid2VhdGhlckltZyIsImFkbWluSW1nIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlbCIsImhyZWYiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJleHRlcm5hbFdpbmRvdyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJmb290ZXJJbWciLCJxdWVyeVNlbGVjdG9yIiwicGhvbmVJY29uIiwiZW1haWxJY29uIiwiYmF0dGxlc2hpcCIsImZ1bmNhcmQiLCJyZXN0YXVyYW50IiwidG9Eb0xpc3QiLCJ3ZWF0aGVyIiwiYWRtaW5EYXNoYm9hcmQiXSwic291cmNlUm9vdCI6IiJ9