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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/recipes_show.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/recipes_show.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/recipes_show.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// https://stackoverflow.com/questions/25888963/min-by-max-by-equivalent-functions-in-javascript
function minBy(array, fn) {
  return extremumBy(array, fn, Math.min);
}

;

function maxBy(array, fn) {
  return extremumBy(array, fn, Math.max);
}

;

function extremumBy(array, pluck, extremum) {
  return array.reduce(function (best, next) {
    var pair = [pluck(next), next];

    if (!best) {
      return pair;
    } else if (extremum.apply(null, [best[0], pair[0]]) == best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}

function translated(str) {
  return str;
}

function unitByName(name) {
  var units = JSON.parse(document.getElementById("unit-list").dataset.values);
  return units.find(function (unit) {
    return unit['name'] == name;
  });
}

function ingredientById(id) {
  var ings = JSON.parse(document.getElementById("ingredient-list").dataset.values);
  return ings[id];
}

function toGrams(val, unit, unit_weight, density) {
  if (!unit) {
    return val * unit_weight;
  } else if (unit.is_weight) {
    return val * unit.value;
  } else if (unit.is_volume) {
    return val * unit.value * density;
  }

  return val * unit.value * unit_weight;
}

function prettyFraction(value) {
  var fractions = [0, 1 / 8, 1 / 4, 1 / 3, 1 / 2, 2 / 3, 3 / 4, 7 / 8, 1];
  var pp_fractions = ["0", "1/8", "1/4", "1/3", "1/2", "2/3", "3/4", "7/8", "1"];
  var i_part = parseInt(value, 10);
  var f_part = value % 1;
  var f = minBy(fractions, function (x) {
    return Math.abs(f_part - x);
  });

  if (f == 0) {
    return i_part.toString();
  }

  if (f == 1) {
    return (i_part + 1).toString();
  }

  var pf = pp_fractions[fractions.indexOf(f)];

  if (i_part == 0) {
    return pf;
  }

  return "".concat(i_part, " ").concat(pf);
}

function prettyWeight(grams) {
  if (!grams) {
    return "";
  }

  if (grams >= 1000.0) {
    return "".concat(prettyNumber(grams / 1000.0), " kg");
  }

  return "".concat(prettyNumber(grams), " g");
}

function prettyMetricVolume(ml) {
  if (!ml) {
    return "";
  }

  if (ml >= 1000.0) {
    return "".concat(prettyNumber(ml / 1000.0), " L");
  }

  return "".concat(prettyNumber(ml), " mL");
}

function prettyNumber(nb) {
  return Math.round(nb * 100) / 100;
}

function prettyVolume(ml, is_liquid) {
  if (!ml) {
    return "";
  }

  if (is_liquid && ml >= 1000.0) {
    return "".concat(prettyFraction(ml / 1000.0), " ").concat(translated("L"));
  }

  if (ml >= 60.0) {
    return "".concat(prettyFraction(ml / 250.0), " ").concat(translated("t"));
  }

  if (ml >= 15.0) {
    return "".concat(prettyFraction(ml / 15.0), " ").concat(translated("c. à soupe"));
  }

  if (ml >= 5.0 / 8.0) {
    return "".concat(prettyFraction(ml / 5.0), " ").concat(translated("c. à thé"));
  }

  return "".concat(prettyFraction(ml / 0.31), " ").concat(translated("pincée"));
}

function prettyIngredient(ing) {
  var linkSingular = "<a href='/foods/" + ing.dataset.foodId + "'>" + ing.dataset.foodNameSingular + "</a> ";

  if (ing.dataset.raw == null || ing.dataset.raw == "") {
    return linkSingular;
  }

  var s = parseQuantityFloatAndLabel(ing.dataset.raw);
  var unit = unitByName(s[1]);
  var qty = s[0] * window.scale;

  if (unit) {
    qty *= unit.value;
  }

  if (unit && unit.is_weight) {
    var r = prettyWeight(qty) + " ";
  } else if (unit && unit.is_volume) {
    var r = prettyVolume(qty) + " ";
  } else {
    var r = prettyFraction(qty) + " ";

    if (unit) {
      r += unit.name + " ";
    }
  }

  if (unit && ing.dataset.preposition) {
    r += ing.dataset.preposition;
  }

  if ((!unit || !unit.is_volume && !unit.is_weight) && qty > 1) {
    r += "<a href='/foods/" + ing.dataset.foodId + "'>" + ing.dataset.foodNamePlural + "</a> ";
  } else {
    r += linkSingular;
  }

  return r;
}

function prettyDetailedIngredient(ing) {
  var r = prettyIngredient(ing);

  if (ing.dataset.raw == null || ing.dataset.raw == "") {
    return r;
  }

  var s = parseQuantityFloatAndLabel(ing.dataset.raw);
  var unit = unitByName(s[1]);
  var grams = ing.dataset.grams * window.scale;
  var ml = ing.dataset.ml * window.scale;
  r += "<span class='ingredient-details'>(";

  if (unit && unit.is_weight) {
    // TODO: Show unit quantity if food can be unit.
    r += "".concat(prettyVolume(ml), " | ").concat(prettyMetricVolume(ml));
  } else if (unit && unit.is_volume) {
    // TODO: Show unit quantity if food can be unit.
    // FIXME: What if it is already metric???
    r += "".concat(prettyMetricVolume(ml), " | ").concat(prettyWeight(grams));
  } else {
    r += "".concat(prettyVolume(ml), " | ").concat(prettyMetricVolume(ml), " | ").concat(prettyWeight(grams));
  }

  r += ")</span>";
  return r;
}

function parseFractionFloat(str) {
  var split = str.split('/');
  return split[0] / split[1];
}

function parseQuantityFloat(str) {
  if (!str) {
    return null;
  }

  var qty_s = str.trim();

  if (qty_s.includes("/")) {
    if (qty_s.includes(" ")) {
      var s = qty_s.split(' ');
      var whole = s[0];
      var fraction = s[1];
      return parseInt(whole, 10) + parseFractionFloat(fraction);
    } else {
      return parseFractionFloat(qty_s);
    }
  } else {
    return parseFloat(qty_s);
  }
}

function parseQuantityFloatAndLabel(raw) {
  if (!raw) {
    return null;
  }

  var s = raw.match(/^\d+( \d)?([,.\/]\d+)?/g);
  var qty_s = s[0];
  var label = raw.substr(qty_s.length).trim(); //console.log("Qty_s: " + qty_s)
  //console.log("Label: " + label)

  return [parseQuantityFloat(qty_s), label];
}

function calcScale(inc) {
  var servings = document.getElementById("servings-quantity-value");
  window.currentServings = window.currentServings + inc;
  window.scale = window.currentServings / window.originalServings;
}

function scaleRaw(raw) {
  if (!raw) {
    return "";
  }

  var s = parseQuantityFloatAndLabel(raw);
  var f = s[0];
  var label = s[1];
  var v = prettyNumber(f * window.scale);

  if (label) {
    return v + " " + label;
  }

  return v;
}

function updateServingsInputField() {
  var elem = document.getElementById("servings-input-field");
  elem.value = scaleRaw(elem.dataset.initial);
}

function updateIngredientQtyInputField() {
  var elem = document.getElementById("ingredient-qty-input-field");
  elem.value = scaleRaw(elem.dataset.quantity);
}

function updateScalableQuantities() {
  var elements = document.querySelectorAll('[data-scalable-qty]');

  var _iterator = _createForOfIteratorHelper(elements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;
      var original = elem.dataset.scalableQty; //var val = parseFloat(elem.innerHTML)

      elem.innerHTML = "" + prettyFraction(original * window.scale);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function updateScalableVolumes() {
  var elements = document.querySelectorAll('[data-scalable-volume]');

  var _iterator2 = _createForOfIteratorHelper(elements),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var elem = _step2.value;
      var ml = elem.dataset.scalableVolume; //var val = parseFloat(elem.innerHTML)

      elem.innerHTML = "" + prettyVolume(ml * window.scale, elem.dataset.isLiquid);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function updateScalableWeights() {
  var elements = document.querySelectorAll('[data-scalable-weight]');

  var _iterator3 = _createForOfIteratorHelper(elements),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var elem = _step3.value;
      var grams = elem.dataset.scalableWeight;
      elem.innerHTML = "" + prettyWeight(grams * window.scale);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function updateScalableDetailedIngredients() {
  var elements = document.querySelectorAll('[data-scalable-ingredient-detailed]');

  var _iterator4 = _createForOfIteratorHelper(elements),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var elem = _step4.value;
      elem.innerHTML = "" + prettyDetailedIngredient(elem);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}

function updateScalableIngredients() {
  var elements = document.querySelectorAll('[data-scalable-ingredient]');

  var _iterator5 = _createForOfIteratorHelper(elements),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var elem = _step5.value;
      elem.innerHTML = "" + prettyIngredient(elem);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  var servings = document.getElementById("servings-quantity-value");
  window.originalServings = parseInt(servings.innerHTML);
  window.currentServings = window.originalServings;
  window.scale = 1.0;
  var lessButton = document.getElementById("less-servings-button");
  var moreButton = document.getElementById("more-servings-button");
  var servingsField = document.getElementById("servings-input-field");
  var inField = document.getElementById("ingredient-qty-input-field");
  var inIngs = document.getElementById("input-ingredients");
  moreButton.addEventListener('click', function (event) {
    var s = parseQuantityFloatAndLabel(servingsField.value);
    var f = s[0];
    var label = s[1];
    var v = f < 1.0 ? f * 2.0 : f + 1;

    if (v < 0.125) {
      v = 0.125;
    }

    servingsField.value = prettyFraction(v) + " " + label;
    var event = new Event('change');
    event.forced = true;
    servingsField.dispatchEvent(event);
  });
  lessButton.addEventListener('click', function (event) {
    var s = parseQuantityFloatAndLabel(servingsField.value);
    var f = s[0];
    var label = s[1];
    var v = f <= 1.0 ? f / 2.0 : f - 1;

    if (v < 0.125) {
      v = 0.125;
    }

    servingsField.value = prettyFraction(v) + " " + label;
    var event = new Event('change');
    event.forced = true;
    servingsField.dispatchEvent(event);
  });
  inField.addEventListener('change', function (event) {
    var s = parseQuantityFloatAndLabel(inField.value);
    var f = s[0];
    var unit = unitByName(s[1]);
    var inIng = ingredientById(inIngs.value);
    var grams = toGrams(f, unit, inIng.unit_weight, inIng.density);
    window.scale = grams / inIng.grams; //console.log(f)
    //console.log(grams)
    //console.log(inIng.grams)
    //console.log(scale)

    updateServingsInputField();
    updateScalableQuantities();
    updateScalableVolumes();
    updateScalableWeights();
    updateScalableIngredients();
    updateScalableDetailedIngredients();
  });
  servingsField.addEventListener('change', function (event) {
    var s0 = parseQuantityFloatAndLabel(servingsField.dataset.initial);
    var f0 = s0[0];
    var label = s0[1];
    var f = parseQuantityFloatAndLabel(servingsField.value)[0];
    servingsField.value = (event.forced ? prettyFraction(f) : f.toString()) + " " + label;
    window.scale = f / f0; //console.log(f)
    //console.log(f0)
    //console.log(scale)

    updateIngredientQtyInputField();
    updateScalableQuantities();
    updateScalableVolumes();
    updateScalableWeights();
    updateScalableIngredients();
    updateScalableDetailedIngredients();
  });
  inIngs.addEventListener('change', function (event) {
    var inIng = ingredientById(inIngs.value);
    inField.value = scaleRaw(inIng.raw);
  }); //var elements = document.querySelectorAll('[data-scalable]');
  //for (const elem of elements) {
  //  const model = elem.dataset.model
  //  const url = elem.dataset.url
  //  const column = elem.dataset.updateColumn
  //  elem.addEventListener("focusout", function() {
  //    $.ajax({
  //      type: "PATCH",
  //      url: url,
  //      data: {
  //        authenticity_token: $('[name="csrf-token"]')[0].content,
  //        [model]: {
  //          [column]: elem.innerHTML
  //        }
  //      }
  //    });
  //  });
  //}
  //const button = document.getElementById("add-recipe-ingredient-form");
  //button.addEventListener('click', event => {
  //  const originalForm = document.getElementById("new-recipe-ingredient-form");
  //  var form = originalForm.cloneNode(true)
  //  form.removeAttribute("id")
  //  form.classList.remove("invisible");
  //  //originalForm.parentNode.insertBefore(form, originalForm.nextElementSibbling)
  //  originalForm.insertAdjacentElement('beforebegin', form)
  //  var elem = form.querySelector('[data-autocomplete]');
  //  new autocomplete({
  //    selector: elem,
  //    minChars: 1,
  //    source: function(term, suggest){
  //      term = term.toLowerCase();
  //      const choices = JSON.parse(document.getElementById(elem.dataset.autocomplete).dataset.values)
  //      const matches = [];
  //      for (let i = 0; i < choices.length; i++)
  //          if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
  //      suggest(matches);
  //    }
  //  })
  //});
  //const element = document.getElementById("new-recipe-ingredient");
  //element.addEventListener("ajax:success", (event) => {
  //  const [_data, _status, xhr] = event.detail;
  //  document.getElementById("new-raw-quantity").value = ''
  //  document.getElementById("autocomplete-food").value = ''
  //  document.getElementById("autocomplete-food-id").value = ''
  //  //element.insertAdjacentHTML("beforeend", xhr.responseText);
  //});
  //element.addEventListener("ajax:error", () => {
  //  element.insertAdjacentHTML("beforeend", "<p>ERROR</p>");
  //});
});

/***/ })

/******/ });
//# sourceMappingURL=recipes_show-f9e5b4d52004f54e3fe9.js.map