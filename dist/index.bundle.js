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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n }\n \n \n * {\n  margin: 0;\n  padding: 0;\n }\n \n \n body {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Varela Round';\n }\n \n \n img, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n }\n \n \n input, button, textarea, select {\n  font: inherit;\n }\n \n \n p, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n }\n \n \n button, a{\n  cursor: pointer;\n  }\n \n \n a{\n    text-decoration: none;\n    color: black;\n    transition: transform 0.3s;\n }\n\n a:hover {\n  transform: scale(1.2);\n }\n  \n\n body{\n  display: flex;\n  flex-direction: column;\n  gap: 10vh;\n}\n\n .me{\n  display: flex;\n  align-items: center;\n  padding: 5vh 5vw;\n  background: linear-gradient(168deg, #0891B2 60%, white 40%);\n }\n\n .main-img {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position:center;\n  background-size: cover;\n  flex: 1;\n  min-height: 60vh;\n  min-width: 60vh;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .main-img p {\n  color: white;\n  font-size: 2.5rem;\n  font-weight: 600;\n }\n\n .about-me{\n  background-color: white;\n  border-left: none;\n  padding: 3vh 3vw;\n  padding-left: 5vw;\n  display: flex;\n  flex-direction: column;\n  gap: 2vh;\n  font-size: 1.2rem;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .about-me-title{\n  font-size: 2rem;\n }\n\n .media {\n  align-self: flex-end;\n  display: flex;\n  gap: 6px;\n }\n\n.media a {\n  border: none;\n  background-color: transparent;\n  height: 25px;\n  width: 25px;\n }\n\n\n.projects {\n  padding: 0px 5vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 40px 1fr 1fr;\n  gap: 5vh;\n  justify-items: center;\n}\n\n.projects h2{\n  grid-area: 1/1/2/4;\n}\n\n.project{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 20vw;\n  box-shadow: 4px 3px 10px darkgray;\n}\n\n.project-img{\n  max-height:auto;\n  max-width: 100%;\n}\n\n.project-info {\n  display: grid;\n  grid-template-columns: 1fr 25px 25px;\n  grid-template-rows: 40px 1fr;\n  padding: 20px;\n  gap: 12px;\n  align-items: center;\n}\n\n\n .project-info a{\n  border: none;\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  transform: scale(1.2);\n }\n\n .project-info a:hover {\n  transform: scale(1.4);\n }\n\n.project-info p {\n  grid-area: 2/1/3/4;\n}\n\nfooter {\n  display: flex;\n  padding: 5vh 5vw;\n  justify-content: center;\n  gap: 10vw;\n  background-color: #0891B2;\n}\n\n.footer-info{\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nfont-size: 1.3rem;\n}\n\n.phone, .email{\n  display: flex;\n  gap: 12px;\n}\n\n.phone-icon, .email-icon {\n  max-height: 25px;\n  max-width: 25px;\n}\n\n.footer-info  .media {\n  align-self: flex-start;\n}\n\n.footer-img{\n  aspect-ratio: initial;\n  max-width: auto;\n  max-height: 50vh;\n  box-shadow: 3px 5px 10px darkgray;\n} \n\n\n@media (max-width: 1024px) {\n  .projects {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px 1fr 1fr 1fr;\n  }\n  \n  .projects h2{\n    grid-area: 1/1/2/3;\n  }\n\n  .project{\n    max-width: 40vw;\n  }\n\n  footer {\n    gap: 5vw;\n  }\n  \n\n  .footer-img{\n    aspect-ratio: initial;\n    max-width: auto;\n    max-height: 28vh;\n    box-shadow: 3px 5px 10px darkgray;\n  } \n\n  .me{\n    padding:0px 10vw;\n    flex-direction: column;\n    /* align-items: start; */\n    /* position: relative; */\n   }\n  \n  \n   .main-img p {\n    /* transform: translate(120%); */\n    font-size: 1.5rem;\n   }\n  \n   /* .about-me{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n    \"image para\"\n    \"para para\";\n   } */\n\n   /* .wrapper{\n    grid-area: para;\n   } */\n\n   /* .about-me p {\n    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%); \n  overflow: visible;\n  } */\n\n  .main-img {\n    min-height: 16vh;\n    min-width: 16vh;\n    \n    /* align-items: flex-start;\n    justify-content: flex-end; */\n    /* transform: translate( -15%, -35% ); */\n    transform: scale(2) translate( -53%, 38% );\n    /* visibility: hidden; */\n    /* position: absolute; */\n   }\n   .about-me {\n    display: block;\n   }\n  \n   .about-me-title{\n    font-size: 2rem;\n\n   }\n\n  .about-me .shape {\n    float: left;  \n    min-width: 36vw; \n    min-height: 18vh;\n    /* min-width: 350px; \n    min-height: 240px;  */\n    \n    shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n  }\n  \n  \n   .media {\n    align-self: flex-end;\n    display: flex;\n    gap: 6px;\n   }\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n  box-sizing: border-box;\n }\n \n \n * {\n  margin: 0;\n  padding: 0;\n }\n \n \n body {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Varela Round';\n }\n \n \n img, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n }\n \n \n input, button, textarea, select {\n  font: inherit;\n }\n \n \n p, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n }\n \n \n button, a{\n  cursor: pointer;\n  }\n \n \n a{\n    text-decoration: none;\n    color: black;\n    transition: transform 0.3s;\n }\n\n a:hover {\n  transform: scale(1.2);\n }\n  \n\n body{\n  display: flex;\n  flex-direction: column;\n  gap: 10vh;\n}\n\n .me{\n  display: flex;\n  align-items: center;\n  padding: 5vh 5vw;\n  background: linear-gradient(168deg, #0891B2 60%, white 40%);\n }\n\n .main-img {\n  background-image: url(./images/me-cool-light.jpg);\n  background-position:center;\n  background-size: cover;\n  flex: 1;\n  min-height: 60vh;\n  min-width: 60vh;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .main-img p {\n  color: white;\n  font-size: 2.5rem;\n  font-weight: 600;\n }\n\n .about-me{\n  background-color: white;\n  border-left: none;\n  padding: 3vh 3vw;\n  padding-left: 5vw;\n  display: flex;\n  flex-direction: column;\n  gap: 2vh;\n  font-size: 1.2rem;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .about-me-title{\n  font-size: 2rem;\n }\n\n .media {\n  align-self: flex-end;\n  display: flex;\n  gap: 6px;\n }\n\n.media a {\n  border: none;\n  background-color: transparent;\n  height: 25px;\n  width: 25px;\n }\n\n\n.projects {\n  padding: 0px 5vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 40px 1fr 1fr;\n  gap: 5vh;\n  justify-items: center;\n}\n\n.projects h2{\n  grid-area: 1/1/2/4;\n}\n\n.project{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 20vw;\n  box-shadow: 4px 3px 10px darkgray;\n}\n\n.project-img{\n  max-height:auto;\n  max-width: 100%;\n}\n\n.project-info {\n  display: grid;\n  grid-template-columns: 1fr 25px 25px;\n  grid-template-rows: 40px 1fr;\n  padding: 20px;\n  gap: 12px;\n  align-items: center;\n}\n\n\n .project-info a{\n  border: none;\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  transform: scale(1.2);\n }\n\n .project-info a:hover {\n  transform: scale(1.4);\n }\n\n.project-info p {\n  grid-area: 2/1/3/4;\n}\n\nfooter {\n  display: flex;\n  padding: 5vh 5vw;\n  justify-content: center;\n  gap: 10vw;\n  background-color: #0891B2;\n}\n\n.footer-info{\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nfont-size: 1.3rem;\n}\n\n.phone, .email{\n  display: flex;\n  gap: 12px;\n}\n\n.phone-icon, .email-icon {\n  max-height: 25px;\n  max-width: 25px;\n}\n\n.footer-info  .media {\n  align-self: flex-start;\n}\n\n.footer-img{\n  aspect-ratio: initial;\n  max-width: auto;\n  max-height: 50vh;\n  box-shadow: 3px 5px 10px darkgray;\n} \n\n\n@media (max-width: 1024px) {\n  .projects {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px 1fr 1fr 1fr;\n  }\n  \n  .projects h2{\n    grid-area: 1/1/2/3;\n  }\n\n  .project{\n    max-width: 40vw;\n  }\n\n  footer {\n    gap: 5vw;\n  }\n  \n\n  .footer-img{\n    aspect-ratio: initial;\n    max-width: auto;\n    max-height: 28vh;\n    box-shadow: 3px 5px 10px darkgray;\n  } \n\n  .me{\n    padding:0px 10vw;\n    flex-direction: column;\n    /* align-items: start; */\n    /* position: relative; */\n   }\n  \n  \n   .main-img p {\n    /* transform: translate(120%); */\n    font-size: 1.5rem;\n   }\n  \n   /* .about-me{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n    \"image para\"\n    \"para para\";\n   } */\n\n   /* .wrapper{\n    grid-area: para;\n   } */\n\n   /* .about-me p {\n    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%); \n  overflow: visible;\n  } */\n\n  .main-img {\n    min-height: 16vh;\n    min-width: 16vh;\n    \n    /* align-items: flex-start;\n    justify-content: flex-end; */\n    /* transform: translate( -15%, -35% ); */\n    transform: scale(2) translate( -53%, 38% );\n    /* visibility: hidden; */\n    /* position: absolute; */\n   }\n   .about-me {\n    display: block;\n   }\n  \n   .about-me-title{\n    font-size: 2rem;\n\n   }\n\n  .about-me .shape {\n    float: left;  \n    min-width: 36vw; \n    min-height: 18vh;\n    /* min-width: 350px; \n    min-height: 240px;  */\n    \n    shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n  }\n  \n  \n   .media {\n    align-self: flex-end;\n    display: flex;\n    gap: 6px;\n   }\n  \n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLFlBQVksS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdB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QUFDdkRFLFNBQVMsQ0FBQ0osR0FBRyxHQUFHcEIsOENBQVE7QUFFeEIsTUFBTXlCLFVBQVUsR0FBR2pCLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBQzlERyxVQUFVLENBQUNMLEdBQUcsR0FBR25CLG9EQUFhO0FBRTlCLE1BQU15QixPQUFPLEdBQUdsQixRQUFRLENBQUNjLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN4REksT0FBTyxDQUFDTixHQUFHLEdBQUdsQixnREFBVTtBQUV4QixNQUFNeUIsVUFBVSxHQUFHbkIsUUFBUSxDQUFDYyxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFDN0RLLFVBQVUsQ0FBQ1AsR0FBRyxHQUFHakIsbURBQWE7QUFFOUIsTUFBTXlCLFFBQVEsR0FBR3BCLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBQzVETSxRQUFRLENBQUNSLEdBQUcsR0FBR2hCLG9EQUFXO0FBRTFCLE1BQU15QixPQUFPLEdBQUdyQixRQUFRLENBQUNjLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN4RE8sT0FBTyxDQUFDVCxHQUFHLEdBQUdmLGtEQUFVO0FBRXhCLE1BQU15QixjQUFjLEdBQUd0QixRQUFRLENBQUNjLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztBQUN2RVEsY0FBYyxDQUFDVixHQUFHLEdBQUdkLHlEQUFRO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL21lLWNvb2wtbGlnaHQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiB9XFxuIFxcbiBcXG4gKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiB9XFxuIFxcbiBcXG4gYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCc7XFxuIH1cXG4gXFxuIFxcbiBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gfVxcbiBcXG4gXFxuIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gfVxcbiBcXG4gXFxuIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gfVxcbiBcXG4gXFxuIGJ1dHRvbiwgYXtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gXFxuIFxcbiBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuIH1cXG5cXG4gYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuIH1cXG4gIFxcblxcbiBib2R5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwdmg7XFxufVxcblxcbiAubWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDV2aCA1dnc7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY4ZGVnLCAjMDg5MUIyIDYwJSwgd2hpdGUgNDAlKTtcXG4gfVxcblxcbiAubWFpbi1pbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZsZXg6IDE7XFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcbiAgbWluLXdpZHRoOiA2MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbiB9XFxuXFxuIC5tYWluLWltZyBwIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gfVxcblxcbiAuYWJvdXQtbWV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgcGFkZGluZzogM3ZoIDN2dztcXG4gIHBhZGRpbmctbGVmdDogNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJ2aDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbiB9XFxuXFxuIC5hYm91dC1tZS10aXRsZXtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gfVxcblxcbiAubWVkaWEge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cHg7XFxuIH1cXG5cXG4ubWVkaWEgYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiB9XFxuXFxuXFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IDBweCA1dnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgMWZyO1xcbiAgZ2FwOiA1dmg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyBoMntcXG4gIGdyaWQtYXJlYTogMS8xLzIvNDtcXG59XFxuXFxuLnByb2plY3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDIwdnc7XFxuICBib3gtc2hhZG93OiA0cHggM3B4IDEwcHggZGFya2dyYXk7XFxufVxcblxcbi5wcm9qZWN0LWltZ3tcXG4gIG1heC1oZWlnaHQ6YXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjVweCAyNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDEycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4gLnByb2plY3QtaW5mbyBhe1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gfVxcblxcbiAucHJvamVjdC1pbmZvIGE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiB9XFxuXFxuLnByb2plY3QtaW5mbyBwIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvNDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1dmggNXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MUIyO1xcbn1cXG5cXG4uZm9vdGVyLWluZm97XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmdhcDogMTJweDtcXG5mb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnBob25lLCAuZW1haWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucGhvbmUtaWNvbiwgLmVtYWlsLWljb24ge1xcbiAgbWF4LWhlaWdodDogMjVweDtcXG4gIG1heC13aWR0aDogMjVweDtcXG59XFxuXFxuLmZvb3Rlci1pbmZvICAubWVkaWEge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvb3Rlci1pbWd7XFxuICBhc3BlY3QtcmF0aW86IGluaXRpYWw7XFxuICBtYXgtd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbn0gXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLnByb2plY3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDFmciAxZnI7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0cyBoMntcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgfVxcblxcbiAgLnByb2plY3R7XFxuICAgIG1heC13aWR0aDogNDB2dztcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGdhcDogNXZ3O1xcbiAgfVxcbiAgXFxuXFxuICAuZm9vdGVyLWltZ3tcXG4gICAgYXNwZWN0LXJhdGlvOiBpbml0aWFsO1xcbiAgICBtYXgtd2lkdGg6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDI4dmg7XFxuICAgIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCBkYXJrZ3JheTtcXG4gIH0gXFxuXFxuICAubWV7XFxuICAgIHBhZGRpbmc6MHB4IDEwdnc7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBzdGFydDsgKi9cXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgIH1cXG4gIFxcbiAgXFxuICAgLm1haW4taW1nIHAge1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAlKTsgKi9cXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgfVxcbiAgXFxuICAgLyogLmFib3V0LW1le1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJpbWFnZSBwYXJhXFxcIlxcbiAgICBcXFwicGFyYSBwYXJhXFxcIjtcXG4gICB9ICovXFxuXFxuICAgLyogLndyYXBwZXJ7XFxuICAgIGdyaWQtYXJlYTogcGFyYTtcXG4gICB9ICovXFxuXFxuICAgLyogLmFib3V0LW1lIHAge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgNzAlLCA1MCUgNzAlKTsgXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIH0gKi9cXG5cXG4gIC5tYWluLWltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IDE2dmg7XFxuICAgIG1pbi13aWR0aDogMTZ2aDtcXG4gICAgXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAqL1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTE1JSwgLTM1JSApOyAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHRyYW5zbGF0ZSggLTUzJSwgMzglICk7XFxuICAgIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgIH1cXG4gICAuYWJvdXQtbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICB9XFxuICBcXG4gICAuYWJvdXQtbWUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gICB9XFxuXFxuICAuYWJvdXQtbWUgLnNoYXBlIHtcXG4gICAgZmxvYXQ6IGxlZnQ7ICBcXG4gICAgbWluLXdpZHRoOiAzNnZ3OyBcXG4gICAgbWluLWhlaWdodDogMTh2aDtcXG4gICAgLyogbWluLXdpZHRoOiAzNTBweDsgXFxuICAgIG1pbi1oZWlnaHQ6IDI0MHB4OyAgKi9cXG4gICAgXFxuICAgIHNoYXBlLW91dHNpZGU6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG4gIH1cXG4gIFxcbiAgXFxuICAgLm1lZGlhIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbiAgIH1cXG4gIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0NBQ3ZCOzs7Q0FHQTtFQUNDLFNBQVM7RUFDVCxVQUFVO0NBQ1g7OztDQUdBO0VBQ0MsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQywyQkFBMkI7Q0FDNUI7OztDQUdBO0VBQ0MsY0FBYztFQUNkLGVBQWU7Q0FDaEI7OztDQUdBO0VBQ0MsYUFBYTtDQUNkOzs7Q0FHQTtFQUNDLHlCQUF5QjtDQUMxQjs7O0NBR0E7RUFDQyxlQUFlO0VBQ2Y7OztDQUdEO0lBQ0cscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiwwQkFBMEI7Q0FDN0I7O0NBRUE7RUFDQyxxQkFBcUI7Q0FDdEI7OztDQUdBO0VBQ0MsYUFB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Kjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiB9XFxuIFxcbiBcXG4gKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiB9XFxuIFxcbiBcXG4gYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCc7XFxuIH1cXG4gXFxuIFxcbiBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gfVxcbiBcXG4gXFxuIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gfVxcbiBcXG4gXFxuIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gfVxcbiBcXG4gXFxuIGJ1dHRvbiwgYXtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gXFxuIFxcbiBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuIH1cXG5cXG4gYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuIH1cXG4gIFxcblxcbiBib2R5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwdmg7XFxufVxcblxcbiAubWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDV2aCA1dnc7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY4ZGVnLCAjMDg5MUIyIDYwJSwgd2hpdGUgNDAlKTtcXG4gfVxcblxcbiAubWFpbi1pbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL21lLWNvb2wtbGlnaHQuanBnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZsZXg6IDE7XFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcbiAgbWluLXdpZHRoOiA2MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbiB9XFxuXFxuIC5tYWluLWltZyBwIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gfVxcblxcbiAuYWJvdXQtbWV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgcGFkZGluZzogM3ZoIDN2dztcXG4gIHBhZGRpbmctbGVmdDogNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJ2aDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbiB9XFxuXFxuIC5hYm91dC1tZS10aXRsZXtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gfVxcblxcbiAubWVkaWEge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cHg7XFxuIH1cXG5cXG4ubWVkaWEgYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiB9XFxuXFxuXFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IDBweCA1dnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgMWZyO1xcbiAgZ2FwOiA1dmg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyBoMntcXG4gIGdyaWQtYXJlYTogMS8xLzIvNDtcXG59XFxuXFxuLnByb2plY3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDIwdnc7XFxuICBib3gtc2hhZG93OiA0cHggM3B4IDEwcHggZGFya2dyYXk7XFxufVxcblxcbi5wcm9qZWN0LWltZ3tcXG4gIG1heC1oZWlnaHQ6YXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjVweCAyNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDEycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4gLnByb2plY3QtaW5mbyBhe1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gfVxcblxcbiAucHJvamVjdC1pbmZvIGE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiB9XFxuXFxuLnByb2plY3QtaW5mbyBwIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvNDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1dmggNXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MUIyO1xcbn1cXG5cXG4uZm9vdGVyLWluZm97XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmdhcDogMTJweDtcXG5mb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnBob25lLCAuZW1haWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucGhvbmUtaWNvbiwgLmVtYWlsLWljb24ge1xcbiAgbWF4LWhlaWdodDogMjVweDtcXG4gIG1heC13aWR0aDogMjVweDtcXG59XFxuXFxuLmZvb3Rlci1pbmZvICAubWVkaWEge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvb3Rlci1pbWd7XFxuICBhc3BlY3QtcmF0aW86IGluaXRpYWw7XFxuICBtYXgtd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbn0gXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLnByb2plY3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDFmciAxZnI7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0cyBoMntcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgfVxcblxcbiAgLnByb2plY3R7XFxuICAgIG1heC13aWR0aDogNDB2dztcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGdhcDogNXZ3O1xcbiAgfVxcbiAgXFxuXFxuICAuZm9vdGVyLWltZ3tcXG4gICAgYXNwZWN0LXJhdGlvOiBpbml0aWFsO1xcbiAgICBtYXgtd2lkdGg6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDI4dmg7XFxuICAgIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCBkYXJrZ3JheTtcXG4gIH0gXFxuXFxuICAubWV7XFxuICAgIHBhZGRpbmc6MHB4IDEwdnc7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBzdGFydDsgKi9cXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgIH1cXG4gIFxcbiAgXFxuICAgLm1haW4taW1nIHAge1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAlKTsgKi9cXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgfVxcbiAgXFxuICAgLyogLmFib3V0LW1le1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJpbWFnZSBwYXJhXFxcIlxcbiAgICBcXFwicGFyYSBwYXJhXFxcIjtcXG4gICB9ICovXFxuXFxuICAgLyogLndyYXBwZXJ7XFxuICAgIGdyaWQtYXJlYTogcGFyYTtcXG4gICB9ICovXFxuXFxuICAgLyogLmFib3V0LW1lIHAge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgNzAlLCA1MCUgNzAlKTsgXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIH0gKi9cXG5cXG4gIC5tYWluLWltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IDE2dmg7XFxuICAgIG1pbi13aWR0aDogMTZ2aDtcXG4gICAgXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAqL1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTE1JSwgLTM1JSApOyAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHRyYW5zbGF0ZSggLTUzJSwgMzglICk7XFxuICAgIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgIH1cXG4gICAuYWJvdXQtbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICB9XFxuICBcXG4gICAuYWJvdXQtbWUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gICB9XFxuXFxuICAuYWJvdXQtbWUgLnNoYXBlIHtcXG4gICAgZmxvYXQ6IGxlZnQ7ICBcXG4gICAgbWluLXdpZHRoOiAzNnZ3OyBcXG4gICAgbWluLWhlaWdodDogMTh2aDtcXG4gICAgLyogbWluLXdpZHRoOiAzNTBweDsgXFxuICAgIG1pbi1oZWlnaHQ6IDI0MHB4OyAgKi9cXG4gICAgXFxuICAgIHNoYXBlLW91dHNpZGU6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG4gIH1cXG4gIFxcbiAgXFxuICAgLm1lZGlhIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbiAgIH1cXG4gIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBpbXBvcnQgbWVDb29sTGlnaHQgZnJvbSAnLi9pbWFnZXMvbWUtY29vbC1saWdodC5qcGcnO1xuaW1wb3J0IG1lU21pbGluZyBmcm9tICcuL2ltYWdlcy9tZS1zbWlsaW5nLmpwZyc7XG5pbXBvcnQgZmF2aWNvbiBmcm9tICcuL2ltYWdlcy9mYXZpY29uLmljbyc7XG5pbXBvcnQgb3BlbkluTmV3IGZyb20gJy4vaW1hZ2VzL29wZW4taW4tbmV3LnN2Zyc7XG5pbXBvcnQgcGhvbmVQaWMgZnJvbSAnLi9pbWFnZXMvY2FsbC5wbmcnO1xuaW1wb3J0IGVtYWlsUGljIGZyb20gJy4vaW1hZ2VzL2VtYWlsLnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcEltZyBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwLndlYnAnO1xuaW1wb3J0IGZ1bmNhcmRJbWcgZnJvbSAnLi9pbWFnZXMvZnVuY2FyZC5wbmcnO1xuaW1wb3J0IHJlc3RhdXJhbnRJbWcgZnJvbSAnLi9pbWFnZXMvcmVzdGF1cmFudC5wbmcnO1xuaW1wb3J0IHRvRG9MaXN0SW1nIGZyb20gJy4vaW1hZ2VzL3RvLWRvLWxpc3Qud2VicCc7XG5pbXBvcnQgd2VhdGhlckltZyBmcm9tICcuL2ltYWdlcy93ZWF0aGVyLndlYnAnO1xuaW1wb3J0IGFkbWluSW1nIGZyb20gJy4vaW1hZ2VzL2FkbWluLWRhc2hib2FyZC5wbmcnO1xuLy8gaW1wb3J0IHByb2plY3RzIGZyb20gJy4vaW1hZ2VzLydcblxuY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbmxpbmsucmVsID0gJ2ljb24nO1xubGluay5ocmVmID0gZmF2aWNvbjtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cbmNvbnN0IGV4dGVybmFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4dGVybmFsLXdpbmRvdycpO1xuZXh0ZXJuYWxXaW5kb3cuZm9yRWFjaChidXR0b24gPT4ge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IG9wZW5Jbk5ldztcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGltZyk7XG59KTtcblxuY29uc3QgZm9vdGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci1pbWcnKTtcbmZvb3RlckltZy5zcmMgPSBtZVNtaWxpbmc7XG5cbmNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG9uZS1pY29uJyk7XG5waG9uZUljb24uc3JjID0gcGhvbmVQaWM7XG5cbmNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1pY29uJyk7XG5lbWFpbEljb24uc3JjID0gZW1haWxQaWM7XG5cbmNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlc2hpcCA+IGltZycpO1xuYmF0dGxlc2hpcC5zcmMgPSBiYXR0bGVzaGlwSW1nO1xuXG5jb25zdCBmdW5jYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Z1bmNhcmQgPiBpbWcnKTtcbmZ1bmNhcmQuc3JjID0gZnVuY2FyZEltZztcblxuY29uc3QgcmVzdGF1cmFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXVyYW50PiBpbWcnKTtcbnJlc3RhdXJhbnQuc3JjID0gcmVzdGF1cmFudEltZztcblxuY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG8tZG8tbGlzdCA+IGltZycpO1xudG9Eb0xpc3Quc3JjID0gdG9Eb0xpc3RJbWc7XG5cbmNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlciA+IGltZycpO1xud2VhdGhlci5zcmMgPSB3ZWF0aGVySW1nO1xuXG5jb25zdCBhZG1pbkRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZG1pbi1kYXNoYm9hcmQgPiBpbWcnKTtcbmFkbWluRGFzaGJvYXJkLnNyYyA9IGFkbWluSW1nO1xuLy8gY29uc3QgcHJvamVjdEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWltZycpO1xuLy8gcHJvamVjdEltZy5zcmMgPSA7XG4vLyBleHRlcm5hbFdpbmRvdy5hcHBlbmRDaGlsZChpbWcpO1xuXG4vLyBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lLWltZycpO1xuLy8gaW1nRWxlbWVudC5zcmMgPSBtZUNvb2xMaWdodDtcbiJdLCJuYW1lcyI6WyJtZVNtaWxpbmciLCJmYXZpY29uIiwib3BlbkluTmV3IiwicGhvbmVQaWMiLCJlbWFpbFBpYyIsImJhdHRsZXNoaXBJbWciLCJmdW5jYXJkSW1nIiwicmVzdGF1cmFudEltZyIsInRvRG9MaXN0SW1nIiwid2VhdGhlckltZyIsImFkbWluSW1nIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlbCIsImhyZWYiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJleHRlcm5hbFdpbmRvdyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJmb290ZXJJbWciLCJxdWVyeVNlbGVjdG9yIiwicGhvbmVJY29uIiwiZW1haWxJY29uIiwiYmF0dGxlc2hpcCIsImZ1bmNhcmQiLCJyZXN0YXVyYW50IiwidG9Eb0xpc3QiLCJ3ZWF0aGVyIiwiYWRtaW5EYXNoYm9hcmQiXSwic291cmNlUm9vdCI6IiJ9