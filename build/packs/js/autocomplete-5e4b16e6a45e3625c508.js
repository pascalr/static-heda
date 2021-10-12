/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/autocomplete.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/autocomplete.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/autocomplete.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_autocomplete_auto_complete_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-autocomplete/auto-complete.css */ "./node_modules/js-autocomplete/auto-complete.css");
/* harmony import */ var js_autocomplete_auto_complete_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_autocomplete_auto_complete_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-autocomplete */ "./node_modules/js-autocomplete/auto-complete.min.js");
/* harmony import */ var js_autocomplete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_autocomplete__WEBPACK_IMPORTED_MODULE_1__);
// https://goodies.pixabay.com/javascript/auto-complete/demo.html
// https://github.com/Pixabay/JavaScript-autoComplete


window.autocomplete = js_autocomplete__WEBPACK_IMPORTED_MODULE_1___default.a;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/js-autocomplete/auto-complete.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/js-autocomplete/auto-complete.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".autocomplete-suggestions {\n    text-align: left; cursor: default; border: 1px solid #ccc; border-top: 0; background: #fff; box-shadow: -1px 1px 3px rgba(0,0,0,.1);\n\n    /* core styles should not be changed */\n    position: absolute; display: none; z-index: 9999; max-height: 254px; overflow: hidden; overflow-y: auto; box-sizing: border-box;\n}\n.autocomplete-suggestion { position: relative; padding: 0 .6em; line-height: 23px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 1.02em; color: #333; }\n.autocomplete-suggestion b { font-weight: normal; color: #1f8dd6; }\n.autocomplete-suggestion.selected { background: #f0f0f0; }\n", "",{"version":3,"sources":["auto-complete.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB,EAAE,eAAe,EAAE,sBAAsB,EAAE,aAAa,EAAE,gBAAgB,EAAE,uCAAuC;;IAEnI,sCAAsC;IACtC,kBAAkB,EAAE,aAAa,EAAE,aAAa,EAAE,iBAAiB,EAAE,gBAAgB,EAAE,gBAAgB,EAAE,sBAAsB;AACnI;AACA,2BAA2B,kBAAkB,EAAE,eAAe,EAAE,iBAAiB,EAAE,mBAAmB,EAAE,gBAAgB,EAAE,uBAAuB,EAAE,iBAAiB,EAAE,WAAW,EAAE;AACnL,6BAA6B,mBAAmB,EAAE,cAAc,EAAE;AAClE,oCAAoC,mBAAmB,EAAE","file":"auto-complete.css","sourcesContent":[".autocomplete-suggestions {\n    text-align: left; cursor: default; border: 1px solid #ccc; border-top: 0; background: #fff; box-shadow: -1px 1px 3px rgba(0,0,0,.1);\n\n    /* core styles should not be changed */\n    position: absolute; display: none; z-index: 9999; max-height: 254px; overflow: hidden; overflow-y: auto; box-sizing: border-box;\n}\n.autocomplete-suggestion { position: relative; padding: 0 .6em; line-height: 23px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 1.02em; color: #333; }\n.autocomplete-suggestion b { font-weight: normal; color: #1f8dd6; }\n.autocomplete-suggestion.selected { background: #f0f0f0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/js-autocomplete/auto-complete.css":
/*!********************************************************!*\
  !*** ./node_modules/js-autocomplete/auto-complete.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../css-loader/dist/cjs.js??ref--6-1!../postcss-loader/src??ref--6-2!./auto-complete.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/js-autocomplete/auto-complete.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/js-autocomplete/auto-complete.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-autocomplete/auto-complete.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// JavaScript autoComplete v1.0.4
// https://github.com/Pixabay/JavaScript-autoComplete
var autoComplete = function () {
  function e(e) {
    function t(e, t) {
      return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className);
    }

    function o(e, t, o) {
      e.attachEvent ? e.attachEvent("on" + t, o) : e.addEventListener(t, o);
    }

    function s(e, t, o) {
      e.detachEvent ? e.detachEvent("on" + t, o) : e.removeEventListener(t, o);
    }

    function n(e, s, n, l) {
      o(l || document, s, function (o) {
        for (var s, l = o.target || o.srcElement; l && !(s = t(l, e));) {
          l = l.parentElement;
        }

        s && n.call(l, o);
      });
    }

    if (document.querySelector) {
      var l = {
        selector: 0,
        source: 0,
        minChars: 3,
        delay: 150,
        offsetLeft: 0,
        offsetTop: 1,
        cache: 1,
        menuClass: "",
        renderItem: function renderItem(e, t) {
          t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          var o = new RegExp("(" + t.split(" ").join("|") + ")", "gi");
          return '<div class="autocomplete-suggestion" data-val="' + e + '">' + e.replace(o, "<b>$1</b>") + "</div>";
        },
        onSelect: function onSelect() {}
      };

      for (var c in e) {
        e.hasOwnProperty(c) && (l[c] = e[c]);
      }

      for (var a = "object" == _typeof(l.selector) ? [l.selector] : document.querySelectorAll(l.selector), u = 0; u < a.length; u++) {
        var i = a[u];
        i.sc = document.createElement("div"), i.sc.className = "autocomplete-suggestions " + l.menuClass, i.autocompleteAttr = i.getAttribute("autocomplete"), i.setAttribute("autocomplete", "off"), i.cache = {}, i.last_val = "", i.updateSC = function (e, t) {
          var o = i.getBoundingClientRect();
          if (i.sc.style.left = Math.round(o.left + (window.pageXOffset || document.documentElement.scrollLeft) + l.offsetLeft) + "px", i.sc.style.top = Math.round(o.bottom + (window.pageYOffset || document.documentElement.scrollTop) + l.offsetTop) + "px", i.sc.style.width = Math.round(o.right - o.left) + "px", !e && (i.sc.style.display = "block", i.sc.maxHeight || (i.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(i.sc, null) : i.sc.currentStyle).maxHeight)), i.sc.suggestionHeight || (i.sc.suggestionHeight = i.sc.querySelector(".autocomplete-suggestion").offsetHeight), i.sc.suggestionHeight)) if (t) {
            var s = i.sc.scrollTop,
                n = t.getBoundingClientRect().top - i.sc.getBoundingClientRect().top;
            n + i.sc.suggestionHeight - i.sc.maxHeight > 0 ? i.sc.scrollTop = n + i.sc.suggestionHeight + s - i.sc.maxHeight : 0 > n && (i.sc.scrollTop = n + s);
          } else i.sc.scrollTop = 0;
        }, o(window, "resize", i.updateSC), document.body.appendChild(i.sc), n("autocomplete-suggestion", "mouseleave", function () {
          var e = i.sc.querySelector(".autocomplete-suggestion.selected");
          e && setTimeout(function () {
            e.className = e.className.replace("selected", "");
          }, 20);
        }, i.sc), n("autocomplete-suggestion", "mouseover", function () {
          var e = i.sc.querySelector(".autocomplete-suggestion.selected");
          e && (e.className = e.className.replace("selected", "")), this.className += " selected";
        }, i.sc), n("autocomplete-suggestion", "mousedown", function (e) {
          if (t(this, "autocomplete-suggestion")) {
            var o = this.getAttribute("data-val");
            i.value = o, l.onSelect(e, o, this), i.sc.style.display = "none";
          }
        }, i.sc), i.blurHandler = function () {
          try {
            var e = document.querySelector(".autocomplete-suggestions:hover");
          } catch (t) {
            var e = 0;
          }

          e ? i !== document.activeElement && setTimeout(function () {
            i.focus();
          }, 20) : (i.last_val = i.value, i.sc.style.display = "none", setTimeout(function () {
            i.sc.style.display = "none";
          }, 350));
        }, o(i, "blur", i.blurHandler);

        var r = function r(e) {
          var t = i.value;

          if (i.cache[t] = e, e.length && t.length >= l.minChars) {
            for (var o = "", s = 0; s < e.length; s++) {
              o += l.renderItem(e[s], t);
            }

            i.sc.innerHTML = o, i.updateSC(0);
          } else i.sc.style.display = "none";
        };

        i.keydownHandler = function (e) {
          var t = window.event ? e.keyCode : e.which;

          if ((40 == t || 38 == t) && i.sc.innerHTML) {
            var o,
                s = i.sc.querySelector(".autocomplete-suggestion.selected");
            return s ? (o = 40 == t ? s.nextSibling : s.previousSibling, o ? (s.className = s.className.replace("selected", ""), o.className += " selected", i.value = o.getAttribute("data-val")) : (s.className = s.className.replace("selected", ""), i.value = i.last_val, o = 0)) : (o = 40 == t ? i.sc.querySelector(".autocomplete-suggestion") : i.sc.childNodes[i.sc.childNodes.length - 1], o.className += " selected", i.value = o.getAttribute("data-val")), i.updateSC(0, o), !1;
          }

          if (27 == t) i.value = i.last_val, i.sc.style.display = "none";else if (13 == t || 9 == t) {
            var s = i.sc.querySelector(".autocomplete-suggestion.selected");
            s && "none" != i.sc.style.display && (l.onSelect(e, s.getAttribute("data-val"), s), setTimeout(function () {
              i.sc.style.display = "none";
            }, 20));
          }
        }, o(i, "keydown", i.keydownHandler), i.keyupHandler = function (e) {
          var t = window.event ? e.keyCode : e.which;

          if (!t || (35 > t || t > 40) && 13 != t && 27 != t) {
            var o = i.value;

            if (o.length >= l.minChars) {
              if (o != i.last_val) {
                if (i.last_val = o, clearTimeout(i.timer), l.cache) {
                  if (o in i.cache) return void r(i.cache[o]);

                  for (var s = 1; s < o.length - l.minChars; s++) {
                    var n = o.slice(0, o.length - s);
                    if (n in i.cache && !i.cache[n].length) return void r([]);
                  }
                }

                i.timer = setTimeout(function () {
                  l.source(o, r);
                }, l.delay);
              }
            } else i.last_val = o, i.sc.style.display = "none";
          }
        }, o(i, "keyup", i.keyupHandler), i.focusHandler = function (e) {
          i.last_val = "\n", i.keyupHandler(e);
        }, l.minChars || o(i, "focus", i.focusHandler);
      }

      this.destroy = function () {
        for (var e = 0; e < a.length; e++) {
          var t = a[e];
          s(window, "resize", t.updateSC), s(t, "blur", t.blurHandler), s(t, "focus", t.focusHandler), s(t, "keydown", t.keydownHandler), s(t, "keyup", t.keyupHandler), t.autocompleteAttr ? t.setAttribute("autocomplete", t.autocompleteAttr) : t.removeAttribute("autocomplete"), document.body.removeChild(t.sc), t = null;
        }
      };
    }
  }

  return e;
}();

!function () {
   true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return autoComplete;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}();

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=autocomplete-5e4b16e6a45e3625c508.js.map