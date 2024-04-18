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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/me-cool-light-phone.jpg */ "./src/images/me-cool-light-phone.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n }\n \n \n * {\n  margin: 0;\n  padding: 0;\n }\n \n \n body {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Varela Round';\n }\n \n \n img, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n }\n \n \n input, button, textarea, select {\n  font: inherit;\n }\n \n \n p, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n }\n \n \n button, a{\n  cursor: pointer;\n  }\n \n \n a{\n    text-decoration: none;\n    color: black;\n    transition: transform 0.3s;\n }\n\n a:hover {\n  transform: scale(1.2);\n }\n  \n\n body{\n  display: flex;\n  flex-direction: column;\n  gap: 10vh;\n}\n\n .me{\n  display: flex;\n  align-items: center;\n  padding: 5vh 5vw;\n  background: linear-gradient(168deg, #0891B2 60%, white 40%);\n }\n\n .main-img {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position:center;\n  background-size: cover;\n  flex: 1;\n  min-height: 60vh;\n  min-width: 60vh;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .main-img p {\n  color: white;\n  font-size: 2.5rem;\n  font-weight: 600;\n }\n\n .about-me{\n  background-color: white;\n  border-left: none;\n  padding: 3vh 3vw;\n  padding-left: 5vw;\n  display: flex;\n  flex-direction: column;\n  gap: 2vh;\n  font-size: 1.2rem;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .about-me-title{\n  font-size: 2rem;\n }\n\n .media {\n  align-self: flex-end;\n  display: flex;\n  gap: 6px;\n }\n\n.media a {\n  border: none;\n  background-color: transparent;\n  height: 25px;\n  width: 25px;\n }\n\n\n.projects {\n  padding: 0px 5vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 40px 1fr 1fr;\n  gap: 5vh;\n  justify-items: center;\n}\n\n.projects h2{\n  grid-area: 1/1/2/4;\n}\n\n.project{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 20vw;\n  box-shadow: 4px 3px 10px darkgray;\n}\n\n.project-img{\n  max-height:auto;\n  max-width: 100%;\n}\n\n.project-info {\n  display: grid;\n  grid-template-columns: 1fr 25px 25px;\n  grid-template-rows: 40px 1fr;\n  padding: 20px;\n  gap: 12px;\n  align-items: center;\n}\n\n\n .project-info a{\n  border: none;\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  transform: scale(1.2);\n }\n\n .project-info a:hover {\n  transform: scale(1.4);\n }\n\n.project-info p {\n  grid-area: 2/1/3/4;\n}\n\nfooter {\n  display: flex;\n  padding: 5vh 5vw;\n  justify-content: center;\n  gap: 10vw;\n  background-color: #0891B2;\n}\n\n.footer-info{\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nfont-size: 1.3rem;\n}\n\n.phone, .email{\n  display: flex;\n  gap: 12px;\n}\n\n.phone-icon, .email-icon {\n  max-height: 25px;\n  max-width: 25px;\n}\n\n.footer-info  .media {\n  align-self: flex-start;\n}\n\n.footer-img{\n  aspect-ratio: initial;\n  max-width: auto;\n  max-height: 50vh;\n  box-shadow: 3px 5px 10px darkgray;\n} \n\n\n@media (max-width: 1024px) {\n\n  .me{\n    padding: 0px 10vw;\n    padding-bottom: 5vh;\n    flex-direction: column;\n\n   }\n\n  .main-img {\n    min-height: 16vh;\n    min-width: 16vh;\n    transform: scale(2) translate( -53%, 38% );\n   }\n\n   .main-img p {\n    font-size: 1.5rem;\n   }\n   \n   .about-me {\n    display: block;\n   }\n  \n   .about-me-title{\n    font-size: 2rem;\n   }\n\n  .about-me .shape {\n    float: left;  \n    min-width: 36vw; \n    min-height: 18vh;\n    shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n  }\n  \n  .media {\n    align-self: flex-end;\n    display: flex;\n    gap: 6px;\n   }\n\n  .projects {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px 1fr 1fr 1fr;\n  }\n  \n  .projects h2{\n    grid-area: 1/1/2/3;\n  }\n\n  .project{\n    max-width: 40vw;\n  }\n\n  footer {\n    gap: 5vw;\n  }\n  \n\n  .footer-img{\n    aspect-ratio: initial;\n    max-width: auto;\n    max-height: 28vh;\n    box-shadow: 3px 5px 10px darkgray;\n  } \n\n      /* .me {\n    align-items: start;\n    position: relative;\n   } */\n  \n   /* .about-me{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n    \"image para\"\n    \"para para\";\n   } */\n\n   /* .wrapper{\n    grid-area: para;\n   } */\n\n   /* .about-me p {\n    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%); \n  overflow: visible;\n  } */\n\n  /* .main-img {\n    visibility: hidden;\n    position: absolute;\n    align-items: flex-start;\n    justify-content: flex-end;\n    transform: translate( -15%, -35% );\n  } */\n\n  /* .main-img p {\n    transform: translate(120%);\n  } */\n\n  /* .about-me .shape{\n    min-width: 350px; \n    min-height: 240px; \n  } */\n  \n}\n\n\n@media (max-width: 767px) {\n\n  .projects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .project{\n    max-width: 80vw;\n  }\n\n\n  footer {\n    flex-direction: column;\n    justify-content: initial;\n    align-items: center;\n    gap: 5vh;\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n\n  \n  .footer-info h2{\n    align-self: center;\n  }\n\n  .footer-img{\n    max-height: 70vh;\n    box-shadow: 3px 5px 10px darkgray;\n  } \n\n  .me{\n    padding: 5vh 10vw;\n    gap: 5vh;\n    background: linear-gradient(168deg, #0891B2 30%, white 30%);\n   }\n\n  .main-img {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    width: 100%;\n    aspect-ratio: 0.77/1;\n    transform: none;\n   }\n\n   .main-img p {\n    font-size: 2rem;\n    transform: translateY(100%);\n    color: dimgrey;\n   }\n   \n   .about-me {\n    display: flex;\n    flex-direction: column;\n    box-shadow: none;\n   }\n  \n   .about-me-title{\n    font-size: 2rem;\n    align-self: center;\n   }\n\n  .about-me .shape {\n    display: none;\n  }\n\n  .media {\n    align-self: center;\n    gap: 3vw;\n    transform: scale(1.2);\n  }\n\n  .footer-info  .media {\n    align-self: center;\n  }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n  box-sizing: border-box;\n }\n \n \n * {\n  margin: 0;\n  padding: 0;\n }\n \n \n body {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Varela Round';\n }\n \n \n img, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n }\n \n \n input, button, textarea, select {\n  font: inherit;\n }\n \n \n p, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n }\n \n \n button, a{\n  cursor: pointer;\n  }\n \n \n a{\n    text-decoration: none;\n    color: black;\n    transition: transform 0.3s;\n }\n\n a:hover {\n  transform: scale(1.2);\n }\n  \n\n body{\n  display: flex;\n  flex-direction: column;\n  gap: 10vh;\n}\n\n .me{\n  display: flex;\n  align-items: center;\n  padding: 5vh 5vw;\n  background: linear-gradient(168deg, #0891B2 60%, white 40%);\n }\n\n .main-img {\n  background-image: url(./images/me-cool-light.jpg);\n  background-position:center;\n  background-size: cover;\n  flex: 1;\n  min-height: 60vh;\n  min-width: 60vh;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .main-img p {\n  color: white;\n  font-size: 2.5rem;\n  font-weight: 600;\n }\n\n .about-me{\n  background-color: white;\n  border-left: none;\n  padding: 3vh 3vw;\n  padding-left: 5vw;\n  display: flex;\n  flex-direction: column;\n  gap: 2vh;\n  font-size: 1.2rem;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .about-me-title{\n  font-size: 2rem;\n }\n\n .media {\n  align-self: flex-end;\n  display: flex;\n  gap: 6px;\n }\n\n.media a {\n  border: none;\n  background-color: transparent;\n  height: 25px;\n  width: 25px;\n }\n\n\n.projects {\n  padding: 0px 5vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 40px 1fr 1fr;\n  gap: 5vh;\n  justify-items: center;\n}\n\n.projects h2{\n  grid-area: 1/1/2/4;\n}\n\n.project{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 20vw;\n  box-shadow: 4px 3px 10px darkgray;\n}\n\n.project-img{\n  max-height:auto;\n  max-width: 100%;\n}\n\n.project-info {\n  display: grid;\n  grid-template-columns: 1fr 25px 25px;\n  grid-template-rows: 40px 1fr;\n  padding: 20px;\n  gap: 12px;\n  align-items: center;\n}\n\n\n .project-info a{\n  border: none;\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  transform: scale(1.2);\n }\n\n .project-info a:hover {\n  transform: scale(1.4);\n }\n\n.project-info p {\n  grid-area: 2/1/3/4;\n}\n\nfooter {\n  display: flex;\n  padding: 5vh 5vw;\n  justify-content: center;\n  gap: 10vw;\n  background-color: #0891B2;\n}\n\n.footer-info{\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nfont-size: 1.3rem;\n}\n\n.phone, .email{\n  display: flex;\n  gap: 12px;\n}\n\n.phone-icon, .email-icon {\n  max-height: 25px;\n  max-width: 25px;\n}\n\n.footer-info  .media {\n  align-self: flex-start;\n}\n\n.footer-img{\n  aspect-ratio: initial;\n  max-width: auto;\n  max-height: 50vh;\n  box-shadow: 3px 5px 10px darkgray;\n} \n\n\n@media (max-width: 1024px) {\n\n  .me{\n    padding: 0px 10vw;\n    padding-bottom: 5vh;\n    flex-direction: column;\n\n   }\n\n  .main-img {\n    min-height: 16vh;\n    min-width: 16vh;\n    transform: scale(2) translate( -53%, 38% );\n   }\n\n   .main-img p {\n    font-size: 1.5rem;\n   }\n   \n   .about-me {\n    display: block;\n   }\n  \n   .about-me-title{\n    font-size: 2rem;\n   }\n\n  .about-me .shape {\n    float: left;  \n    min-width: 36vw; \n    min-height: 18vh;\n    shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n  }\n  \n  .media {\n    align-self: flex-end;\n    display: flex;\n    gap: 6px;\n   }\n\n  .projects {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px 1fr 1fr 1fr;\n  }\n  \n  .projects h2{\n    grid-area: 1/1/2/3;\n  }\n\n  .project{\n    max-width: 40vw;\n  }\n\n  footer {\n    gap: 5vw;\n  }\n  \n\n  .footer-img{\n    aspect-ratio: initial;\n    max-width: auto;\n    max-height: 28vh;\n    box-shadow: 3px 5px 10px darkgray;\n  } \n\n      /* .me {\n    align-items: start;\n    position: relative;\n   } */\n  \n   /* .about-me{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n    \"image para\"\n    \"para para\";\n   } */\n\n   /* .wrapper{\n    grid-area: para;\n   } */\n\n   /* .about-me p {\n    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%); \n  overflow: visible;\n  } */\n\n  /* .main-img {\n    visibility: hidden;\n    position: absolute;\n    align-items: flex-start;\n    justify-content: flex-end;\n    transform: translate( -15%, -35% );\n  } */\n\n  /* .main-img p {\n    transform: translate(120%);\n  } */\n\n  /* .about-me .shape{\n    min-width: 350px; \n    min-height: 240px; \n  } */\n  \n}\n\n\n@media (max-width: 767px) {\n\n  .projects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .project{\n    max-width: 80vw;\n  }\n\n\n  footer {\n    flex-direction: column;\n    justify-content: initial;\n    align-items: center;\n    gap: 5vh;\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n\n  \n  .footer-info h2{\n    align-self: center;\n  }\n\n  .footer-img{\n    max-height: 70vh;\n    box-shadow: 3px 5px 10px darkgray;\n  } \n\n  .me{\n    padding: 5vh 10vw;\n    gap: 5vh;\n    background: linear-gradient(168deg, #0891B2 30%, white 30%);\n   }\n\n  .main-img {\n    background-image: url(./images/me-cool-light-phone.jpg);\n    width: 100%;\n    aspect-ratio: 0.77/1;\n    transform: none;\n   }\n\n   .main-img p {\n    font-size: 2rem;\n    transform: translateY(100%);\n    color: dimgrey;\n   }\n   \n   .about-me {\n    display: flex;\n    flex-direction: column;\n    box-shadow: none;\n   }\n  \n   .about-me-title{\n    font-size: 2rem;\n    align-self: center;\n   }\n\n  .about-me .shape {\n    display: none;\n  }\n\n  .media {\n    align-self: center;\n    gap: 3vw;\n    transform: scale(1.2);\n  }\n\n  .footer-info  .media {\n    align-self: center;\n  }\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/images/me-cool-light-phone.jpg":
/*!********************************************!*\
  !*** ./src/images/me-cool-light-phone.jpg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cb3800282d7eae74863f.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxpREFBaUQsMkJBQTJCLElBQUksWUFBWSxjQUFjLGVBQWUsSUFBSSxlQUFl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O0FBQ3ZFUSxjQUFjLENBQUNWLEdBQUcsR0FBR2QseURBQVE7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbWUtY29vbC1saWdodC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9tZS1jb29sLWxpZ2h0LXBob25lLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG4gXFxuIFxcbiAqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuIH1cXG4gXFxuIFxcbiBib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJztcXG4gfVxcbiBcXG4gXFxuIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiB9XFxuIFxcbiBcXG4gaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbiB9XFxuIFxcbiBcXG4gcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiB9XFxuIFxcbiBcXG4gYnV0dG9uLCBhe1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiBcXG4gXFxuIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gfVxcblxcbiBhOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gfVxcbiAgXFxuXFxuIGJvZHl7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTB2aDtcXG59XFxuXFxuIC5tZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXZoIDV2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjhkZWcsICMwODkxQjIgNjAlLCB3aGl0ZSA0MCUpO1xcbiB9XFxuXFxuIC5tYWluLWltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZmxleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxuICBtaW4td2lkdGg6IDYwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxuIH1cXG5cXG4gLm1haW4taW1nIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiB9XFxuXFxuIC5hYm91dC1tZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBwYWRkaW5nOiAzdmggM3Z3O1xcbiAgcGFkZGluZy1sZWZ0OiA1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnZoO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxuIH1cXG5cXG4gLmFib3V0LW1lLXRpdGxle1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiB9XFxuXFxuIC5tZWRpYSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG4gfVxcblxcbi5tZWRpYSBhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuIH1cXG5cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMHB4IDV2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciAxZnI7XFxuICBnYXA6IDV2aDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIGgye1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi80O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMjB2dztcXG4gIGJveC1zaGFkb3c6IDRweCAzcHggMTBweCBkYXJrZ3JheTtcXG59XFxuXFxuLnByb2plY3QtaW1ne1xcbiAgbWF4LWhlaWdodDphdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyNXB4IDI1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogMTJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiAucHJvamVjdC1pbmZvIGF7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiB9XFxuXFxuIC5wcm9qZWN0LWluZm8gYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuIH1cXG5cXG4ucHJvamVjdC1pbmZvIHAge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy80O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDV2aCA1dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxQjI7XFxufVxcblxcbi5mb290ZXItaW5mb3tcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuZ2FwOiAxMnB4O1xcbmZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucGhvbmUsIC5lbWFpbHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5waG9uZS1pY29uLCAuZW1haWwtaWNvbiB7XFxuICBtYXgtaGVpZ2h0OiAyNXB4O1xcbiAgbWF4LXdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uZm9vdGVyLWluZm8gIC5tZWRpYSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZm9vdGVyLWltZ3tcXG4gIGFzcGVjdC1yYXRpbzogaW5pdGlhbDtcXG4gIG1heC13aWR0aDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxufSBcXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuXFxuICAubWV7XFxuICAgIHBhZGRpbmc6IDBweCAxMHZ3O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgIH1cXG5cXG4gIC5tYWluLWltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IDE2dmg7XFxuICAgIG1pbi13aWR0aDogMTZ2aDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKSB0cmFuc2xhdGUoIC01MyUsIDM4JSApO1xcbiAgIH1cXG5cXG4gICAubWFpbi1pbWcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgIH1cXG4gICBcXG4gICAuYWJvdXQtbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICB9XFxuICBcXG4gICAuYWJvdXQtbWUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICB9XFxuXFxuICAuYWJvdXQtbWUgLnNoYXBlIHtcXG4gICAgZmxvYXQ6IGxlZnQ7ICBcXG4gICAgbWluLXdpZHRoOiAzNnZ3OyBcXG4gICAgbWluLWhlaWdodDogMTh2aDtcXG4gICAgc2hhcGUtb3V0c2lkZTogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbiAgfVxcbiAgXFxuICAubWVkaWEge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA2cHg7XFxuICAgfVxcblxcbiAgLnByb2plY3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDFmciAxZnI7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0cyBoMntcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgfVxcblxcbiAgLnByb2plY3R7XFxuICAgIG1heC13aWR0aDogNDB2dztcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGdhcDogNXZ3O1xcbiAgfVxcbiAgXFxuXFxuICAuZm9vdGVyLWltZ3tcXG4gICAgYXNwZWN0LXJhdGlvOiBpbml0aWFsO1xcbiAgICBtYXgtd2lkdGg6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDI4dmg7XFxuICAgIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCBkYXJrZ3JheTtcXG4gIH0gXFxuXFxuICAgICAgLyogLm1lIHtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgfSAqL1xcbiAgXFxuICAgLyogLmFib3V0LW1le1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJpbWFnZSBwYXJhXFxcIlxcbiAgICBcXFwicGFyYSBwYXJhXFxcIjtcXG4gICB9ICovXFxuXFxuICAgLyogLndyYXBwZXJ7XFxuICAgIGdyaWQtYXJlYTogcGFyYTtcXG4gICB9ICovXFxuXFxuICAgLyogLmFib3V0LW1lIHAge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgNzAlLCA1MCUgNzAlKTsgXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIH0gKi9cXG5cXG4gIC8qIC5tYWluLWltZyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIC0xNSUsIC0zNSUgKTtcXG4gIH0gKi9cXG5cXG4gIC8qIC5tYWluLWltZyBwIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSk7XFxuICB9ICovXFxuXFxuICAvKiAuYWJvdXQtbWUgLnNoYXBle1xcbiAgICBtaW4td2lkdGg6IDM1MHB4OyBcXG4gICAgbWluLWhlaWdodDogMjQwcHg7IFxcbiAgfSAqL1xcbiAgXFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcbiAgLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0e1xcbiAgICBtYXgtd2lkdGg6IDgwdnc7XFxuICB9XFxuXFxuXFxuICBmb290ZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXZoO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XFxuICB9XFxuXFxuICBcXG4gIC5mb290ZXItaW5mbyBoMntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZvb3Rlci1pbWd7XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxuICAgIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCBkYXJrZ3JheTtcXG4gIH0gXFxuXFxuICAubWV7XFxuICAgIHBhZGRpbmc6IDV2aCAxMHZ3O1xcbiAgICBnYXA6IDV2aDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2OGRlZywgIzA4OTFCMiAzMCUsIHdoaXRlIDMwJSk7XFxuICAgfVxcblxcbiAgLm1haW4taW1nIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMC43Ny8xO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgfVxcblxcbiAgIC5tYWluLWltZyBwIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIGNvbG9yOiBkaW1ncmV5O1xcbiAgIH1cXG4gICBcXG4gICAuYWJvdXQtbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgIH1cXG4gIFxcbiAgIC5hYm91dC1tZS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgfVxcblxcbiAgLmFib3V0LW1lIC5zaGFwZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubWVkaWEge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdhcDogM3Z3O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICB9XFxuXFxuICAuZm9vdGVyLWluZm8gIC5tZWRpYSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtDQUN2Qjs7O0NBR0E7RUFDQyxTQUFTO0VBQ1QsVUFBVTtDQUNYOzs7Q0FHQTtFQUNDLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsMkJBQTJCO0NBQzVCOzs7Q0FHQTtFQUNDLGNBQWM7RUFD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OztNQUVJOzs7TUFHQTs7R0FFSDs7Ozs7OztNQU9HOztHQUVIOztNQUVHOztHQUVIOzs7S0FHRTs7RUFFSDs7Ozs7O0tBTUc7O0VBRUg7O0tBRUc7O0VBRUg7OztLQUdHOztBQUVMOzs7QUFHQTs7RUFFRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7O0VBR0E7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7O0VBR0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUiwyREFBMkQ7R0FDNUQ7O0VBRUQ7SUFDRSx5REFBdUQ7SUFDdkQsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixlQUFlO0dBQ2hCOztHQUVBO0lBQ0MsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixjQUFjO0dBQ2Y7O0dBRUE7SUFDQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtHQUNqQjs7R0FFQTtJQUNDLGVBQWU7SUFDZixrQkFBa0I7R0FDbkI7O0VBRUQ7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG4gXFxuIFxcbiAqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuIH1cXG4gXFxuIFxcbiBib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJztcXG4gfVxcbiBcXG4gXFxuIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiB9XFxuIFxcbiBcXG4gaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbiB9XFxuIFxcbiBcXG4gcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiB9XFxuIFxcbiBcXG4gYnV0dG9uLCBhe1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiBcXG4gXFxuIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gfVxcblxcbiBhOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gfVxcbiAgXFxuXFxuIGJvZHl7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTB2aDtcXG59XFxuXFxuIC5tZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXZoIDV2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjhkZWcsICMwODkxQjIgNjAlLCB3aGl0ZSA0MCUpO1xcbiB9XFxuXFxuIC5tYWluLWltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvbWUtY29vbC1saWdodC5qcGcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZmxleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxuICBtaW4td2lkdGg6IDYwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxuIH1cXG5cXG4gLm1haW4taW1nIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiB9XFxuXFxuIC5hYm91dC1tZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBwYWRkaW5nOiAzdmggM3Z3O1xcbiAgcGFkZGluZy1sZWZ0OiA1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnZoO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxuIH1cXG5cXG4gLmFib3V0LW1lLXRpdGxle1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiB9XFxuXFxuIC5tZWRpYSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG4gfVxcblxcbi5tZWRpYSBhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuIH1cXG5cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMHB4IDV2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciAxZnI7XFxuICBnYXA6IDV2aDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIGgye1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi80O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMjB2dztcXG4gIGJveC1zaGFkb3c6IDRweCAzcHggMTBweCBkYXJrZ3JheTtcXG59XFxuXFxuLnByb2plY3QtaW1ne1xcbiAgbWF4LWhlaWdodDphdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyNXB4IDI1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogMTJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiAucHJvamVjdC1pbmZvIGF7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiB9XFxuXFxuIC5wcm9qZWN0LWluZm8gYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuIH1cXG5cXG4ucHJvamVjdC1pbmZvIHAge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy80O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDV2aCA1dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxQjI7XFxufVxcblxcbi5mb290ZXItaW5mb3tcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuZ2FwOiAxMnB4O1xcbmZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucGhvbmUsIC5lbWFpbHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5waG9uZS1pY29uLCAuZW1haWwtaWNvbiB7XFxuICBtYXgtaGVpZ2h0OiAyNXB4O1xcbiAgbWF4LXdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uZm9vdGVyLWluZm8gIC5tZWRpYSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZm9vdGVyLWltZ3tcXG4gIGFzcGVjdC1yYXRpbzogaW5pdGlhbDtcXG4gIG1heC13aWR0aDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxufSBcXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuXFxuICAubWV7XFxuICAgIHBhZGRpbmc6IDBweCAxMHZ3O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgIH1cXG5cXG4gIC5tYWluLWltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IDE2dmg7XFxuICAgIG1pbi13aWR0aDogMTZ2aDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKSB0cmFuc2xhdGUoIC01MyUsIDM4JSApO1xcbiAgIH1cXG5cXG4gICAubWFpbi1pbWcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgIH1cXG4gICBcXG4gICAuYWJvdXQtbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICB9XFxuICBcXG4gICAuYWJvdXQtbWUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICB9XFxuXFxuICAuYWJvdXQtbWUgLnNoYXBlIHtcXG4gICAgZmxvYXQ6IGxlZnQ7ICBcXG4gICAgbWluLXdpZHRoOiAzNnZ3OyBcXG4gICAgbWluLWhlaWdodDogMTh2aDtcXG4gICAgc2hhcGUtb3V0c2lkZTogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbiAgfVxcbiAgXFxuICAubWVkaWEge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA2cHg7XFxuICAgfVxcblxcbiAgLnByb2plY3RzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDFmciAxZnI7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0cyBoMntcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgfVxcblxcbiAgLnByb2plY3R7XFxuICAgIG1heC13aWR0aDogNDB2dztcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGdhcDogNXZ3O1xcbiAgfVxcbiAgXFxuXFxuICAuZm9vdGVyLWltZ3tcXG4gICAgYXNwZWN0LXJhdGlvOiBpbml0aWFsO1xcbiAgICBtYXgtd2lkdGg6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDI4dmg7XFxuICAgIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCBkYXJrZ3JheTtcXG4gIH0gXFxuXFxuICAgICAgLyogLm1lIHtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgfSAqL1xcbiAgXFxuICAgLyogLmFib3V0LW1le1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJpbWFnZSBwYXJhXFxcIlxcbiAgICBcXFwicGFyYSBwYXJhXFxcIjtcXG4gICB9ICovXFxuXFxuICAgLyogLndyYXBwZXJ7XFxuICAgIGdyaWQtYXJlYTogcGFyYTtcXG4gICB9ICovXFxuXFxuICAgLyogLmFib3V0LW1lIHAge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgNzAlLCA1MCUgNzAlKTsgXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIH0gKi9cXG5cXG4gIC8qIC5tYWluLWltZyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIC0xNSUsIC0zNSUgKTtcXG4gIH0gKi9cXG5cXG4gIC8qIC5tYWluLWltZyBwIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSk7XFxuICB9ICovXFxuXFxuICAvKiAuYWJvdXQtbWUgLnNoYXBle1xcbiAgICBtaW4td2lkdGg6IDM1MHB4OyBcXG4gICAgbWluLWhlaWdodDogMjQwcHg7IFxcbiAgfSAqL1xcbiAgXFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcbiAgLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0e1xcbiAgICBtYXgtd2lkdGg6IDgwdnc7XFxuICB9XFxuXFxuXFxuICBmb290ZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXZoO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XFxuICB9XFxuXFxuICBcXG4gIC5mb290ZXItaW5mbyBoMntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZvb3Rlci1pbWd7XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxuICAgIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCBkYXJrZ3JheTtcXG4gIH0gXFxuXFxuICAubWV7XFxuICAgIHBhZGRpbmc6IDV2aCAxMHZ3O1xcbiAgICBnYXA6IDV2aDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2OGRlZywgIzA4OTFCMiAzMCUsIHdoaXRlIDMwJSk7XFxuICAgfVxcblxcbiAgLm1haW4taW1nIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL21lLWNvb2wtbGlnaHQtcGhvbmUuanBnKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMC43Ny8xO1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgfVxcblxcbiAgIC5tYWluLWltZyBwIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIGNvbG9yOiBkaW1ncmV5O1xcbiAgIH1cXG4gICBcXG4gICAuYWJvdXQtbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgIH1cXG4gIFxcbiAgIC5hYm91dC1tZS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgfVxcblxcbiAgLmFib3V0LW1lIC5zaGFwZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubWVkaWEge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdhcDogM3Z3O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICB9XFxuXFxuICAuZm9vdGVyLWluZm8gIC5tZWRpYSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0IG1lQ29vbExpZ2h0IGZyb20gJy4vaW1hZ2VzL21lLWNvb2wtbGlnaHQuanBnJztcbmltcG9ydCBtZVNtaWxpbmcgZnJvbSAnLi9pbWFnZXMvbWUtc21pbGluZy5qcGcnO1xuaW1wb3J0IGZhdmljb24gZnJvbSAnLi9pbWFnZXMvZmF2aWNvbi5pY28nO1xuaW1wb3J0IG9wZW5Jbk5ldyBmcm9tICcuL2ltYWdlcy9vcGVuLWluLW5ldy5zdmcnO1xuaW1wb3J0IHBob25lUGljIGZyb20gJy4vaW1hZ2VzL2NhbGwucG5nJztcbmltcG9ydCBlbWFpbFBpYyBmcm9tICcuL2ltYWdlcy9lbWFpbC5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWcgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcC53ZWJwJztcbmltcG9ydCBmdW5jYXJkSW1nIGZyb20gJy4vaW1hZ2VzL2Z1bmNhcmQucG5nJztcbmltcG9ydCByZXN0YXVyYW50SW1nIGZyb20gJy4vaW1hZ2VzL3Jlc3RhdXJhbnQucG5nJztcbmltcG9ydCB0b0RvTGlzdEltZyBmcm9tICcuL2ltYWdlcy90by1kby1saXN0LndlYnAnO1xuaW1wb3J0IHdlYXRoZXJJbWcgZnJvbSAnLi9pbWFnZXMvd2VhdGhlci53ZWJwJztcbmltcG9ydCBhZG1pbkltZyBmcm9tICcuL2ltYWdlcy9hZG1pbi1kYXNoYm9hcmQucG5nJztcbi8vIGltcG9ydCBwcm9qZWN0cyBmcm9tICcuL2ltYWdlcy8nXG5cbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5saW5rLnJlbCA9ICdpY29uJztcbmxpbmsuaHJlZiA9IGZhdmljb247XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXG5jb25zdCBleHRlcm5hbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHRlcm5hbC13aW5kb3cnKTtcbmV4dGVybmFsV2luZG93LmZvckVhY2goYnV0dG9uID0+IHtcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSBvcGVuSW5OZXc7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWcpO1xufSk7XG5cbmNvbnN0IGZvb3RlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItaW1nJyk7XG5mb290ZXJJbWcuc3JjID0gbWVTbWlsaW5nO1xuXG5jb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGhvbmUtaWNvbicpO1xucGhvbmVJY29uLnNyYyA9IHBob25lUGljO1xuXG5jb25zdCBlbWFpbEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtaWNvbicpO1xuZW1haWxJY29uLnNyYyA9IGVtYWlsUGljO1xuXG5jb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhdHRsZXNoaXAgPiBpbWcnKTtcbmJhdHRsZXNoaXAuc3JjID0gYmF0dGxlc2hpcEltZztcblxuY29uc3QgZnVuY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmdW5jYXJkID4gaW1nJyk7XG5mdW5jYXJkLnNyYyA9IGZ1bmNhcmRJbWc7XG5cbmNvbnN0IHJlc3RhdXJhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGF1cmFudD4gaW1nJyk7XG5yZXN0YXVyYW50LnNyYyA9IHJlc3RhdXJhbnRJbWc7XG5cbmNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvLWRvLWxpc3QgPiBpbWcnKTtcbnRvRG9MaXN0LnNyYyA9IHRvRG9MaXN0SW1nO1xuXG5jb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXIgPiBpbWcnKTtcbndlYXRoZXIuc3JjID0gd2VhdGhlckltZztcblxuY29uc3QgYWRtaW5EYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRtaW4tZGFzaGJvYXJkID4gaW1nJyk7XG5hZG1pbkRhc2hib2FyZC5zcmMgPSBhZG1pbkltZztcbi8vIGNvbnN0IHByb2plY3RJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbWcnKTtcbi8vIHByb2plY3RJbWcuc3JjID0gO1xuLy8gZXh0ZXJuYWxXaW5kb3cuYXBwZW5kQ2hpbGQoaW1nKTtcblxuLy8gY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZS1pbWcnKTtcbi8vIGltZ0VsZW1lbnQuc3JjID0gbWVDb29sTGlnaHQ7XG4iXSwibmFtZXMiOlsibWVTbWlsaW5nIiwiZmF2aWNvbiIsIm9wZW5Jbk5ldyIsInBob25lUGljIiwiZW1haWxQaWMiLCJiYXR0bGVzaGlwSW1nIiwiZnVuY2FyZEltZyIsInJlc3RhdXJhbnRJbWciLCJ0b0RvTGlzdEltZyIsIndlYXRoZXJJbWciLCJhZG1pbkltZyIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZWwiLCJocmVmIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiZXh0ZXJuYWxXaW5kb3ciLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImltZyIsIkltYWdlIiwic3JjIiwiZm9vdGVySW1nIiwicXVlcnlTZWxlY3RvciIsInBob25lSWNvbiIsImVtYWlsSWNvbiIsImJhdHRsZXNoaXAiLCJmdW5jYXJkIiwicmVzdGF1cmFudCIsInRvRG9MaXN0Iiwid2VhdGhlciIsImFkbWluRGFzaGJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==