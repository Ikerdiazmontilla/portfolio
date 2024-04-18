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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n }\n \n \n * {\n  margin: 0;\n  padding: 0;\n }\n \n \n body {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Varela Round';\n }\n \n \n img, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n }\n \n \n input, button, textarea, select {\n  font: inherit;\n }\n \n \n p, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n }\n \n \n button, a{\n  cursor: pointer;\n  }\n\n /*Styling*/\n \n a{\n    text-decoration: none;\n    color: black;\n    transition: transform 0.3s;\n }\n\n a:hover {\n  transform: scale(1.2);\n }\n\n body{\n  display: flex;\n  flex-direction: column;\n  gap: 10vh;\n}\n\n/* About me section */\n\n .me{\n  display: flex;\n  align-items: center;\n  padding: 5vh 5vw;\n  background: linear-gradient(168deg, #0891B2 60%, white 40%);\n }\n\n .main-img {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position:center;\n  background-size: cover;\n  flex: 1;\n  min-height: 60vh;\n  min-width: 60vh;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .main-img p {\n  color: white;\n  font-size: 2.5rem;\n  font-weight: 600;\n }\n\n .about-me{\n  background-color: white;\n  border-left: none;\n  padding: 3vh 3vw;\n  padding-left: 5vw;\n  display: flex;\n  flex-direction: column;\n  gap: 2vh;\n  font-size: 1.2rem;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .about-me-title{\n  font-size: 2rem;\n }\n\n .media {\n  align-self: flex-end;\n  display: flex;\n  gap: 6px;\n }\n\n.media a {\n  border: none;\n  background-color: transparent;\n  height: 25px;\n  width: 25px;\n }\n\n /* Projects section */\n\n\n.projects {\n  padding: 0px 5vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 40px 1fr 1fr;\n  gap: 5vh;\n  justify-items: center;\n}\n\n.projects h2{\n  grid-area: 1/1/2/4;\n}\n\n.project{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 20vw;\n  box-shadow: 4px 3px 10px darkgray;\n  transition: transform 0.3s;\n}\n\n.project:hover{\n  transform: scale(1.05);\n  cursor: pointer;\n}\n\n.project-img{\n  max-height:auto;\n  max-width: 100%;\n}\n\n.project-info {\n  display: grid;\n  grid-template-columns: 1fr 25px 25px;\n  grid-template-rows: 40px 1fr;\n  padding: 20px;\n  gap: 12px;\n  align-items: center;\n}\n\n\n .project-info a{\n  border: none;\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  transform: scale(1.2);\n }\n\n .project-info a:hover {\n  transform: scale(1.4);\n }\n\n.project-info p {\n  grid-area: 2/1/3/4;\n}\n\n/* Footer */\n\nfooter {\n  display: flex;\n  padding: 5vh 5vw;\n  justify-content: center;\n  gap: 10vw;\n  background-color: #0891B2;\n}\n\n.footer-info{\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nfont-size: 1.3rem;\n}\n\n.phone, .email{\n  display: flex;\n  gap: 12px;\n}\n\n.phone-icon, .email-icon {\n  max-height: 25px;\n  max-width: 25px;\n}\n\n.footer-info  .media {\n  align-self: flex-start;\n}\n\n.footer-img{\n  aspect-ratio: initial;\n  max-width: auto;\n  max-height: 50vh;\n  box-shadow: 3px 5px 10px darkgray;\n} \n\n\n/* Tablets */\n\n@media (max-width: 1024px) {\n\n  .me{\n    padding: 0px 10vw;\n    padding-bottom: 5vh;\n    flex-direction: column;\n\n   }\n\n  .main-img {\n    min-height: 16vh;\n    min-width: 16vh;\n    transform: scale(2) translate( -53%, 38% );\n   }\n\n   .main-img p {\n    font-size: 1.5rem;\n   }\n   \n   .about-me {\n    display: block;\n   }\n  \n   .about-me-title{\n    font-size: 2rem;\n   }\n\n  .about-me .shape {\n    float: left;  \n    min-width: 36vw; \n    min-height: 18vh;\n    shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n  }\n  \n  .media {\n    align-self: flex-end;\n    display: flex;\n    gap: 6px;\n   }\n\n  .projects {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px 1fr 1fr 1fr;\n  }\n  \n  .projects h2{\n    grid-area: 1/1/2/3;\n  }\n\n  .project{\n    max-width: 40vw;\n  }\n\n  footer {\n    gap: 5vw;\n  }\n  \n\n  .footer-img{\n    aspect-ratio: initial;\n    max-width: auto;\n    max-height: 28vh;\n    box-shadow: 3px 5px 10px darkgray;\n  } \n\n      /* .me {\n    align-items: start;\n    position: relative;\n   } */\n  \n   /* .about-me{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n    \"image para\"\n    \"para para\";\n   } */\n\n   /* .wrapper{\n    grid-area: para;\n   } */\n\n   /* .about-me p {\n    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%); \n  overflow: visible;\n  } */\n\n  /* .main-img {\n    visibility: hidden;\n    position: absolute;\n    align-items: flex-start;\n    justify-content: flex-end;\n    transform: translate( -15%, -35% );\n  } */\n\n  /* .main-img p {\n    transform: translate(120%);\n  } */\n\n  /* .about-me .shape{\n    min-width: 350px; \n    min-height: 240px; \n  } */\n  \n}\n\n\n/* Phones */\n\n@media (max-width: 767px) {\n\n  .me{\n    padding: 5vh 5vw;\n    gap: 5vh;\n    background: linear-gradient(168deg, #0891B2 30%, white 30%);\n   }\n\n  .main-img {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    width: 90vw;\n    aspect-ratio: 0.77/1;\n    transform: none;\n   }\n\n   .main-img p {\n    font-size: 2rem;\n    transform: translateY(100%);\n    color: dimgrey;\n   }\n   \n   .about-me {\n    display: flex;\n    flex-direction: column;\n    box-shadow: none;\n   }\n  \n   .about-me-title{\n    font-size: 2rem;\n    align-self: center;\n   }\n\n   .about-me p {\n    text-align: center;\n   }\n\n  .about-me .shape {\n    display: none;\n  }\n\n  .media {\n    align-self: center;\n    gap: 3vw;\n    transform: scale(1.2);\n  }\n\n  .projects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .project{\n    max-width: 80vw;\n  }\n\n\n  footer {\n    flex-direction: column;\n    justify-content: initial;\n    align-items: center;\n    gap: 5vh;\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n\n  \n  .footer-info h2{\n    align-self: center;\n  }\n\n  .footer-img{\n    max-height: 70vh;\n    box-shadow: 3px 5px 10px darkgray;\n  } \n\n  .footer-info  .media {\n    align-self: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n  box-sizing: border-box;\n }\n \n \n * {\n  margin: 0;\n  padding: 0;\n }\n \n \n body {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Varela Round';\n }\n \n \n img, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n }\n \n \n input, button, textarea, select {\n  font: inherit;\n }\n \n \n p, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n }\n \n \n button, a{\n  cursor: pointer;\n  }\n\n /*Styling*/\n \n a{\n    text-decoration: none;\n    color: black;\n    transition: transform 0.3s;\n }\n\n a:hover {\n  transform: scale(1.2);\n }\n\n body{\n  display: flex;\n  flex-direction: column;\n  gap: 10vh;\n}\n\n/* About me section */\n\n .me{\n  display: flex;\n  align-items: center;\n  padding: 5vh 5vw;\n  background: linear-gradient(168deg, #0891B2 60%, white 40%);\n }\n\n .main-img {\n  background-image: url(./images/me-cool-light.jpg);\n  background-position:center;\n  background-size: cover;\n  flex: 1;\n  min-height: 60vh;\n  min-width: 60vh;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .main-img p {\n  color: white;\n  font-size: 2.5rem;\n  font-weight: 600;\n }\n\n .about-me{\n  background-color: white;\n  border-left: none;\n  padding: 3vh 3vw;\n  padding-left: 5vw;\n  display: flex;\n  flex-direction: column;\n  gap: 2vh;\n  font-size: 1.2rem;\n  box-shadow: 3px 5px 10px darkgray;\n }\n\n .about-me-title{\n  font-size: 2rem;\n }\n\n .media {\n  align-self: flex-end;\n  display: flex;\n  gap: 6px;\n }\n\n.media a {\n  border: none;\n  background-color: transparent;\n  height: 25px;\n  width: 25px;\n }\n\n /* Projects section */\n\n\n.projects {\n  padding: 0px 5vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 40px 1fr 1fr;\n  gap: 5vh;\n  justify-items: center;\n}\n\n.projects h2{\n  grid-area: 1/1/2/4;\n}\n\n.project{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 20vw;\n  box-shadow: 4px 3px 10px darkgray;\n  transition: transform 0.3s;\n}\n\n.project:hover{\n  transform: scale(1.05);\n  cursor: pointer;\n}\n\n.project-img{\n  max-height:auto;\n  max-width: 100%;\n}\n\n.project-info {\n  display: grid;\n  grid-template-columns: 1fr 25px 25px;\n  grid-template-rows: 40px 1fr;\n  padding: 20px;\n  gap: 12px;\n  align-items: center;\n}\n\n\n .project-info a{\n  border: none;\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  transform: scale(1.2);\n }\n\n .project-info a:hover {\n  transform: scale(1.4);\n }\n\n.project-info p {\n  grid-area: 2/1/3/4;\n}\n\n/* Footer */\n\nfooter {\n  display: flex;\n  padding: 5vh 5vw;\n  justify-content: center;\n  gap: 10vw;\n  background-color: #0891B2;\n}\n\n.footer-info{\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nfont-size: 1.3rem;\n}\n\n.phone, .email{\n  display: flex;\n  gap: 12px;\n}\n\n.phone-icon, .email-icon {\n  max-height: 25px;\n  max-width: 25px;\n}\n\n.footer-info  .media {\n  align-self: flex-start;\n}\n\n.footer-img{\n  aspect-ratio: initial;\n  max-width: auto;\n  max-height: 50vh;\n  box-shadow: 3px 5px 10px darkgray;\n} \n\n\n/* Tablets */\n\n@media (max-width: 1024px) {\n\n  .me{\n    padding: 0px 10vw;\n    padding-bottom: 5vh;\n    flex-direction: column;\n\n   }\n\n  .main-img {\n    min-height: 16vh;\n    min-width: 16vh;\n    transform: scale(2) translate( -53%, 38% );\n   }\n\n   .main-img p {\n    font-size: 1.5rem;\n   }\n   \n   .about-me {\n    display: block;\n   }\n  \n   .about-me-title{\n    font-size: 2rem;\n   }\n\n  .about-me .shape {\n    float: left;  \n    min-width: 36vw; \n    min-height: 18vh;\n    shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n  }\n  \n  .media {\n    align-self: flex-end;\n    display: flex;\n    gap: 6px;\n   }\n\n  .projects {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px 1fr 1fr 1fr;\n  }\n  \n  .projects h2{\n    grid-area: 1/1/2/3;\n  }\n\n  .project{\n    max-width: 40vw;\n  }\n\n  footer {\n    gap: 5vw;\n  }\n  \n\n  .footer-img{\n    aspect-ratio: initial;\n    max-width: auto;\n    max-height: 28vh;\n    box-shadow: 3px 5px 10px darkgray;\n  } \n\n      /* .me {\n    align-items: start;\n    position: relative;\n   } */\n  \n   /* .about-me{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n    \"image para\"\n    \"para para\";\n   } */\n\n   /* .wrapper{\n    grid-area: para;\n   } */\n\n   /* .about-me p {\n    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%); \n  overflow: visible;\n  } */\n\n  /* .main-img {\n    visibility: hidden;\n    position: absolute;\n    align-items: flex-start;\n    justify-content: flex-end;\n    transform: translate( -15%, -35% );\n  } */\n\n  /* .main-img p {\n    transform: translate(120%);\n  } */\n\n  /* .about-me .shape{\n    min-width: 350px; \n    min-height: 240px; \n  } */\n  \n}\n\n\n/* Phones */\n\n@media (max-width: 767px) {\n\n  .me{\n    padding: 5vh 5vw;\n    gap: 5vh;\n    background: linear-gradient(168deg, #0891B2 30%, white 30%);\n   }\n\n  .main-img {\n    background-image: url(./images/me-cool-light-phone.jpg);\n    width: 90vw;\n    aspect-ratio: 0.77/1;\n    transform: none;\n   }\n\n   .main-img p {\n    font-size: 2rem;\n    transform: translateY(100%);\n    color: dimgrey;\n   }\n   \n   .about-me {\n    display: flex;\n    flex-direction: column;\n    box-shadow: none;\n   }\n  \n   .about-me-title{\n    font-size: 2rem;\n    align-self: center;\n   }\n\n   .about-me p {\n    text-align: center;\n   }\n\n  .about-me .shape {\n    display: none;\n  }\n\n  .media {\n    align-self: center;\n    gap: 3vw;\n    transform: scale(1.2);\n  }\n\n  .projects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .project{\n    max-width: 80vw;\n  }\n\n\n  footer {\n    flex-direction: column;\n    justify-content: initial;\n    align-items: center;\n    gap: 5vh;\n    padding-left: 10vw;\n    padding-right: 10vw;\n  }\n\n  \n  .footer-info h2{\n    align-self: center;\n  }\n\n  .footer-img{\n    max-height: 70vh;\n    box-shadow: 3px 5px 10px darkgray;\n  } \n\n  .footer-info  .media {\n    align-self: center;\n  }\n}"],"sourceRoot":""}]);
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
function openTab(href) {
  window.open(`${href}`, '_blank');
}
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  const element = project.querySelector('.external-window');
  project.addEventListener('click', event => {
    if (!(event.target.className === 'devicon-github-original')) {
      openTab(element.href);
    }
  });
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUss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Q0FBQ1IsR0FBRyxHQUFHaEIsb0RBQVc7QUFFMUIsTUFBTXlCLE9BQU8sR0FBR3JCLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3hETyxPQUFPLENBQUNULEdBQUcsR0FBR2Ysa0RBQVU7QUFFeEIsTUFBTXlCLGNBQWMsR0FBR3RCLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0FBQ3ZFUSxjQUFjLENBQUNWLEdBQUcsR0FBR2QseURBQVE7QUFFN0IsU0FBU3lCLE9BQU9BLENBQUNwQixJQUFJLEVBQUU7RUFDckJxQixNQUFNLENBQUNDLElBQUksQ0FBRSxHQUFFdEIsSUFBSyxFQUFDLEVBQUUsUUFBUSxDQUFDO0FBQ2xDO0FBRUEsTUFBTXVCLFFBQVEsR0FBRzFCLFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0FBQ3REbUIsUUFBUSxDQUFDbEIsT0FBTyxDQUFDbUIsT0FBTyxJQUFJO0VBQzFCLE1BQU1DLE9BQU8sR0FBR0QsT0FBTyxDQUFDYixhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDekRhLE9BQU8sQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxLQUFLLElBQUk7SUFDekMsSUFBSSxFQUFFQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxLQUFLLHlCQUF5QixDQUFDLEVBQUU7TUFDM0RULE9BQU8sQ0FBQ0ssT0FBTyxDQUFDekIsSUFBSSxDQUFDO0lBQ3ZCO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbWUtY29vbC1saWdodC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9tZS1jb29sLWxpZ2h0LXBob25lLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuIH1cXG4gXFxuIFxcbiAqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuIH1cXG4gXFxuIFxcbiBib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJztcXG4gfVxcbiBcXG4gXFxuIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiB9XFxuIFxcbiBcXG4gaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbiB9XFxuIFxcbiBcXG4gcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiB9XFxuIFxcbiBcXG4gYnV0dG9uLCBhe1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAvKlN0eWxpbmcqL1xcbiBcXG4gYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiB9XFxuXFxuIGE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiB9XFxuXFxuIGJvZHl7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTB2aDtcXG59XFxuXFxuLyogQWJvdXQgbWUgc2VjdGlvbiAqL1xcblxcbiAubWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDV2aCA1dnc7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY4ZGVnLCAjMDg5MUIyIDYwJSwgd2hpdGUgNDAlKTtcXG4gfVxcblxcbiAubWFpbi1pbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZsZXg6IDE7XFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcbiAgbWluLXdpZHRoOiA2MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbiB9XFxuXFxuIC5tYWluLWltZyBwIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gfVxcblxcbiAuYWJvdXQtbWV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgcGFkZGluZzogM3ZoIDN2dztcXG4gIHBhZGRpbmctbGVmdDogNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJ2aDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbiB9XFxuXFxuIC5hYm91dC1tZS10aXRsZXtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gfVxcblxcbiAubWVkaWEge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cHg7XFxuIH1cXG5cXG4ubWVkaWEgYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiB9XFxuXFxuIC8qIFByb2plY3RzIHNlY3Rpb24gKi9cXG5cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMHB4IDV2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciAxZnI7XFxuICBnYXA6IDV2aDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIGgye1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi80O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMjB2dztcXG4gIGJveC1zaGFkb3c6IDRweCAzcHggMTBweCBkYXJrZ3JheTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWltZ3tcXG4gIG1heC1oZWlnaHQ6YXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjVweCAyNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDEycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4gLnByb2plY3QtaW5mbyBhe1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gfVxcblxcbiAucHJvamVjdC1pbmZvIGE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiB9XFxuXFxuLnByb2plY3QtaW5mbyBwIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvNDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1dmggNXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MUIyO1xcbn1cXG5cXG4uZm9vdGVyLWluZm97XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmdhcDogMTJweDtcXG5mb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnBob25lLCAuZW1haWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucGhvbmUtaWNvbiwgLmVtYWlsLWljb24ge1xcbiAgbWF4LWhlaWdodDogMjVweDtcXG4gIG1heC13aWR0aDogMjVweDtcXG59XFxuXFxuLmZvb3Rlci1pbmZvICAubWVkaWEge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmZvb3Rlci1pbWd7XFxuICBhc3BlY3QtcmF0aW86IGluaXRpYWw7XFxuICBtYXgtd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbn0gXFxuXFxuXFxuLyogVGFibGV0cyAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG5cXG4gIC5tZXtcXG4gICAgcGFkZGluZzogMHB4IDEwdnc7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgfVxcblxcbiAgLm1haW4taW1nIHtcXG4gICAgbWluLWhlaWdodDogMTZ2aDtcXG4gICAgbWluLXdpZHRoOiAxNnZoO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHRyYW5zbGF0ZSggLTUzJSwgMzglICk7XFxuICAgfVxcblxcbiAgIC5tYWluLWltZyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgfVxcbiAgIFxcbiAgIC5hYm91dC1tZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgIH1cXG4gIFxcbiAgIC5hYm91dC1tZS10aXRsZXtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgIH1cXG5cXG4gIC5hYm91dC1tZSAuc2hhcGUge1xcbiAgICBmbG9hdDogbGVmdDsgIFxcbiAgICBtaW4td2lkdGg6IDM2dnc7IFxcbiAgICBtaW4taGVpZ2h0OiAxOHZoO1xcbiAgICBzaGFwZS1vdXRzaWRlOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxuICB9XFxuICBcXG4gIC5tZWRpYSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDZweDtcXG4gICB9XFxuXFxuICAucHJvamVjdHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgMWZyIDFmcjtcXG4gIH1cXG4gIFxcbiAgLnByb2plY3RzIGgye1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzM7XFxuICB9XFxuXFxuICAucHJvamVjdHtcXG4gICAgbWF4LXdpZHRoOiA0MHZ3O1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZ2FwOiA1dnc7XFxuICB9XFxuICBcXG5cXG4gIC5mb290ZXItaW1ne1xcbiAgICBhc3BlY3QtcmF0aW86IGluaXRpYWw7XFxuICAgIG1heC13aWR0aDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogMjh2aDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbiAgfSBcXG5cXG4gICAgICAvKiAubWUge1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICB9ICovXFxuICBcXG4gICAvKiAuYWJvdXQtbWV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImltYWdlIHBhcmFcXFwiXFxuICAgIFxcXCJwYXJhIHBhcmFcXFwiO1xcbiAgIH0gKi9cXG5cXG4gICAvKiAud3JhcHBlcntcXG4gICAgZ3JpZC1hcmVhOiBwYXJhO1xcbiAgIH0gKi9cXG5cXG4gICAvKiAuYWJvdXQtbWUgcCB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCA3MCUsIDUwJSA3MCUpOyBcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfSAqL1xcblxcbiAgLyogLm1haW4taW1nIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTE1JSwgLTM1JSApO1xcbiAgfSAqL1xcblxcbiAgLyogLm1haW4taW1nIHAge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAlKTtcXG4gIH0gKi9cXG5cXG4gIC8qIC5hYm91dC1tZSAuc2hhcGV7XFxuICAgIG1pbi13aWR0aDogMzUwcHg7IFxcbiAgICBtaW4taGVpZ2h0OiAyNDBweDsgXFxuICB9ICovXFxuICBcXG59XFxuXFxuXFxuLyogUGhvbmVzICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFxuICAubWV7XFxuICAgIHBhZGRpbmc6IDV2aCA1dnc7XFxuICAgIGdhcDogNXZoO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY4ZGVnLCAjMDg5MUIyIDMwJSwgd2hpdGUgMzAlKTtcXG4gICB9XFxuXFxuICAubWFpbi1pbWcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgYXNwZWN0LXJhdGlvOiAwLjc3LzE7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICB9XFxuXFxuICAgLm1haW4taW1nIHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgY29sb3I6IGRpbWdyZXk7XFxuICAgfVxcbiAgIFxcbiAgIC5hYm91dC1tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgfVxcbiAgXFxuICAgLmFib3V0LW1lLXRpdGxle1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICB9XFxuXFxuICAgLmFib3V0LW1lIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgfVxcblxcbiAgLmFib3V0LW1lIC5zaGFwZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubWVkaWEge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdhcDogM3Z3O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICB9XFxuXFxuICAucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnByb2plY3R7XFxuICAgIG1heC13aWR0aDogODB2dztcXG4gIH1cXG5cXG5cXG4gIGZvb3RlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1dmg7XFxuICAgIHBhZGRpbmctbGVmdDogMTB2dztcXG4gICAgcGFkZGluZy1yaWdodDogMTB2dztcXG4gIH1cXG5cXG4gIFxcbiAgLmZvb3Rlci1pbmZvIGgye1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZm9vdGVyLWltZ3tcXG4gICAgbWF4LWhlaWdodDogNzB2aDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IGRhcmtncmF5O1xcbiAgfSBcXG5cXG4gIC5mb290ZXItaW5mbyAgLm1lZGlhIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0NBQ3ZCOzs7Q0FHQTtFQUNDLFNBQVM7RUFDVCxVQUFVO0NBQ1g7OztDQUdBO0VBQ0MsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQywyQkFBMkI7Q0FDNUI7OztDQUdBO0VBQ0MsY0FBYztFQUNkLGVBQWU7Q0FDaEI7OztDQUdBO0VBQ0Ms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OztFQUVBO0lBQ0UsUUFBUTtFQUNWOzs7RUFHQTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlDQUFpQztFQUNuQzs7TUFFSTs7O01BR0E7O0dBRUg7Ozs7Ozs7TUFPRzs7R0FFSDs7TUFFRzs7R0FFSDs7O0tBR0U7O0VBRUg7Ozs7OztLQU1HOztFQUVIOztLQUVHOztFQUVIOzs7S0FHRzs7QUFFTDs7O0FBR0EsV0FBVzs7QUFFWDs7RUFFRTtJQUNFLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsMkRBQTJEO0dBQzVEOztFQUVEO0lBQ0UseURBQXVEO0lBQ3ZELFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtHQUNoQjs7R0FFQTtJQUNDLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsY0FBYztHQUNmOztHQUVBO0lBQ0MsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7R0FDakI7O0dBRUE7SUFDQyxlQUFlO0lBQ2Ysa0JBQWtCO0dBQ25COztHQUVBO0lBQ0Msa0JBQWtCO0dBQ25COztFQUVEO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7OztFQUdBO0lBQ0Usc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7OztFQUdBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gfVxcbiBcXG4gXFxuICoge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gfVxcbiBcXG4gXFxuIGJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnO1xcbiB9XFxuIFxcbiBcXG4gaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuIH1cXG4gXFxuIFxcbiBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuIH1cXG4gXFxuIFxcbiBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuIH1cXG4gXFxuIFxcbiBidXR0b24sIGF7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuIC8qU3R5bGluZyovXFxuIFxcbiBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuIH1cXG5cXG4gYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuIH1cXG5cXG4gYm9keXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHZoO1xcbn1cXG5cXG4vKiBBYm91dCBtZSBzZWN0aW9uICovXFxuXFxuIC5tZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXZoIDV2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjhkZWcsICMwODkxQjIgNjAlLCB3aGl0ZSA0MCUpO1xcbiB9XFxuXFxuIC5tYWluLWltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvbWUtY29vbC1saWdodC5qcGcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZmxleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxuICBtaW4td2lkdGg6IDYwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxuIH1cXG5cXG4gLm1haW4taW1nIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiB9XFxuXFxuIC5hYm91dC1tZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBwYWRkaW5nOiAzdmggM3Z3O1xcbiAgcGFkZGluZy1sZWZ0OiA1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnZoO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxuIH1cXG5cXG4gLmFib3V0LW1lLXRpdGxle1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiB9XFxuXFxuIC5tZWRpYSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG4gfVxcblxcbi5tZWRpYSBhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuIH1cXG5cXG4gLyogUHJvamVjdHMgc2VjdGlvbiAqL1xcblxcblxcbi5wcm9qZWN0cyB7XFxuICBwYWRkaW5nOiAwcHggNXZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDFmcjtcXG4gIGdhcDogNXZoO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHMgaDJ7XFxuICBncmlkLWFyZWE6IDEvMS8yLzQ7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAyMHZ3O1xcbiAgYm94LXNoYWRvdzogNHB4IDNweCAxMHB4IGRhcmtncmF5O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVye1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaW1ne1xcbiAgbWF4LWhlaWdodDphdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyNXB4IDI1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogMTJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiAucHJvamVjdC1pbmZvIGF7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiB9XFxuXFxuIC5wcm9qZWN0LWluZm8gYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuIH1cXG5cXG4ucHJvamVjdC1pbmZvIHAge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy80O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDV2aCA1dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxQjI7XFxufVxcblxcbi5mb290ZXItaW5mb3tcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuZ2FwOiAxMnB4O1xcbmZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucGhvbmUsIC5lbWFpbHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5waG9uZS1pY29uLCAuZW1haWwtaWNvbiB7XFxuICBtYXgtaGVpZ2h0OiAyNXB4O1xcbiAgbWF4LXdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uZm9vdGVyLWluZm8gIC5tZWRpYSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZm9vdGVyLWltZ3tcXG4gIGFzcGVjdC1yYXRpbzogaW5pdGlhbDtcXG4gIG1heC13aWR0aDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxufSBcXG5cXG5cXG4vKiBUYWJsZXRzICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcblxcbiAgLm1le1xcbiAgICBwYWRkaW5nOiAwcHggMTB2dztcXG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICB9XFxuXFxuICAubWFpbi1pbWcge1xcbiAgICBtaW4taGVpZ2h0OiAxNnZoO1xcbiAgICBtaW4td2lkdGg6IDE2dmg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMikgdHJhbnNsYXRlKCAtNTMlLCAzOCUgKTtcXG4gICB9XFxuXFxuICAgLm1haW4taW1nIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICB9XFxuICAgXFxuICAgLmFib3V0LW1lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgfVxcbiAgXFxuICAgLmFib3V0LW1lLXRpdGxle1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgfVxcblxcbiAgLmFib3V0LW1lIC5zaGFwZSB7XFxuICAgIGZsb2F0OiBsZWZ0OyAgXFxuICAgIG1pbi13aWR0aDogMzZ2dzsgXFxuICAgIG1pbi1oZWlnaHQ6IDE4dmg7XFxuICAgIHNoYXBlLW91dHNpZGU6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG4gIH1cXG4gIFxcbiAgLm1lZGlhIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbiAgIH1cXG5cXG4gIC5wcm9qZWN0cyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciAxZnIgMWZyO1xcbiAgfVxcbiAgXFxuICAucHJvamVjdHMgaDJ7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0e1xcbiAgICBtYXgtd2lkdGg6IDQwdnc7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBnYXA6IDV2dztcXG4gIH1cXG4gIFxcblxcbiAgLmZvb3Rlci1pbWd7XFxuICAgIGFzcGVjdC1yYXRpbzogaW5pdGlhbDtcXG4gICAgbWF4LXdpZHRoOiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiAyOHZoO1xcbiAgICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxuICB9IFxcblxcbiAgICAgIC8qIC5tZSB7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIH0gKi9cXG4gIFxcbiAgIC8qIC5hYm91dC1tZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaW1hZ2UgcGFyYVxcXCJcXG4gICAgXFxcInBhcmEgcGFyYVxcXCI7XFxuICAgfSAqL1xcblxcbiAgIC8qIC53cmFwcGVye1xcbiAgICBncmlkLWFyZWE6IHBhcmE7XFxuICAgfSAqL1xcblxcbiAgIC8qIC5hYm91dC1tZSBwIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDcwJSwgNTAlIDcwJSk7IFxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB9ICovXFxuXFxuICAvKiAubWFpbi1pbWcge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtMTUlLCAtMzUlICk7XFxuICB9ICovXFxuXFxuICAvKiAubWFpbi1pbWcgcCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyMCUpO1xcbiAgfSAqL1xcblxcbiAgLyogLmFib3V0LW1lIC5zaGFwZXtcXG4gICAgbWluLXdpZHRoOiAzNTBweDsgXFxuICAgIG1pbi1oZWlnaHQ6IDI0MHB4OyBcXG4gIH0gKi9cXG4gIFxcbn1cXG5cXG5cXG4vKiBQaG9uZXMgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXG4gIC5tZXtcXG4gICAgcGFkZGluZzogNXZoIDV2dztcXG4gICAgZ2FwOiA1dmg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjhkZWcsICMwODkxQjIgMzAlLCB3aGl0ZSAzMCUpO1xcbiAgIH1cXG5cXG4gIC5tYWluLWltZyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9tZS1jb29sLWxpZ2h0LXBob25lLmpwZyk7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBhc3BlY3QtcmF0aW86IDAuNzcvMTtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgIH1cXG5cXG4gICAubWFpbi1pbWcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICBjb2xvcjogZGltZ3JleTtcXG4gICB9XFxuICAgXFxuICAgLmFib3V0LW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICB9XFxuICBcXG4gICAuYWJvdXQtbWUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgIH1cXG5cXG4gICAuYWJvdXQtbWUgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICB9XFxuXFxuICAuYWJvdXQtbWUgLnNoYXBlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tZWRpYSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ2FwOiAzdnc7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucHJvamVjdHtcXG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xcbiAgfVxcblxcblxcbiAgZm9vdGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDV2aDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHZ3O1xcbiAgfVxcblxcbiAgXFxuICAuZm9vdGVyLWluZm8gaDJ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mb290ZXItaW1ne1xcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggZGFya2dyYXk7XFxuICB9IFxcblxcbiAgLmZvb3Rlci1pbmZvICAubWVkaWEge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtZVNtaWxpbmcgZnJvbSAnLi9pbWFnZXMvbWUtc21pbGluZy5qcGcnO1xuaW1wb3J0IGZhdmljb24gZnJvbSAnLi9pbWFnZXMvZmF2aWNvbi5pY28nO1xuaW1wb3J0IG9wZW5Jbk5ldyBmcm9tICcuL2ltYWdlcy9vcGVuLWluLW5ldy5zdmcnO1xuaW1wb3J0IHBob25lUGljIGZyb20gJy4vaW1hZ2VzL2NhbGwucG5nJztcbmltcG9ydCBlbWFpbFBpYyBmcm9tICcuL2ltYWdlcy9lbWFpbC5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWcgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcC53ZWJwJztcbmltcG9ydCBmdW5jYXJkSW1nIGZyb20gJy4vaW1hZ2VzL2Z1bmNhcmQucG5nJztcbmltcG9ydCByZXN0YXVyYW50SW1nIGZyb20gJy4vaW1hZ2VzL3Jlc3RhdXJhbnQucG5nJztcbmltcG9ydCB0b0RvTGlzdEltZyBmcm9tICcuL2ltYWdlcy90by1kby1saXN0LndlYnAnO1xuaW1wb3J0IHdlYXRoZXJJbWcgZnJvbSAnLi9pbWFnZXMvd2VhdGhlci53ZWJwJztcbmltcG9ydCBhZG1pbkltZyBmcm9tICcuL2ltYWdlcy9hZG1pbi1kYXNoYm9hcmQucG5nJztcblxuY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbmxpbmsucmVsID0gJ2ljb24nO1xubGluay5ocmVmID0gZmF2aWNvbjtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cbmNvbnN0IGV4dGVybmFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4dGVybmFsLXdpbmRvdycpO1xuZXh0ZXJuYWxXaW5kb3cuZm9yRWFjaChidXR0b24gPT4ge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IG9wZW5Jbk5ldztcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGltZyk7XG59KTtcblxuY29uc3QgZm9vdGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci1pbWcnKTtcbmZvb3RlckltZy5zcmMgPSBtZVNtaWxpbmc7XG5cbmNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG9uZS1pY29uJyk7XG5waG9uZUljb24uc3JjID0gcGhvbmVQaWM7XG5cbmNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1pY29uJyk7XG5lbWFpbEljb24uc3JjID0gZW1haWxQaWM7XG5cbmNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlc2hpcCA+IGltZycpO1xuYmF0dGxlc2hpcC5zcmMgPSBiYXR0bGVzaGlwSW1nO1xuXG5jb25zdCBmdW5jYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Z1bmNhcmQgPiBpbWcnKTtcbmZ1bmNhcmQuc3JjID0gZnVuY2FyZEltZztcblxuY29uc3QgcmVzdGF1cmFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXVyYW50PiBpbWcnKTtcbnJlc3RhdXJhbnQuc3JjID0gcmVzdGF1cmFudEltZztcblxuY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG8tZG8tbGlzdCA+IGltZycpO1xudG9Eb0xpc3Quc3JjID0gdG9Eb0xpc3RJbWc7XG5cbmNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlciA+IGltZycpO1xud2VhdGhlci5zcmMgPSB3ZWF0aGVySW1nO1xuXG5jb25zdCBhZG1pbkRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZG1pbi1kYXNoYm9hcmQgPiBpbWcnKTtcbmFkbWluRGFzaGJvYXJkLnNyYyA9IGFkbWluSW1nO1xuXG5mdW5jdGlvbiBvcGVuVGFiKGhyZWYpIHtcbiAgd2luZG93Lm9wZW4oYCR7aHJlZn1gLCAnX2JsYW5rJyk7XG59XG5cbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5leHRlcm5hbC13aW5kb3cnKTtcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICBpZiAoIShldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnZGV2aWNvbi1naXRodWItb3JpZ2luYWwnKSkge1xuICAgICAgb3BlblRhYihlbGVtZW50LmhyZWYpO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJtZVNtaWxpbmciLCJmYXZpY29uIiwib3BlbkluTmV3IiwicGhvbmVQaWMiLCJlbWFpbFBpYyIsImJhdHRsZXNoaXBJbWciLCJmdW5jYXJkSW1nIiwicmVzdGF1cmFudEltZyIsInRvRG9MaXN0SW1nIiwid2VhdGhlckltZyIsImFkbWluSW1nIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlbCIsImhyZWYiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJleHRlcm5hbFdpbmRvdyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJmb290ZXJJbWciLCJxdWVyeVNlbGVjdG9yIiwicGhvbmVJY29uIiwiZW1haWxJY29uIiwiYmF0dGxlc2hpcCIsImZ1bmNhcmQiLCJyZXN0YXVyYW50IiwidG9Eb0xpc3QiLCJ3ZWF0aGVyIiwiYWRtaW5EYXNoYm9hcmQiLCJvcGVuVGFiIiwid2luZG93Iiwib3BlbiIsInByb2plY3RzIiwicHJvamVjdCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9