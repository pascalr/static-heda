(() => {
  // app/javascript/models/quantity.js
  var Quantity = class {
    constructor(args = {}) {
      this.raw = args.raw;
      this.nb = null;
      this.label = null;
      this.ml = null;
      this.grams = null;
      this.total = null;
      this.unit = null;
      if (this.raw != null) {
        let s = this.raw.match(/^\d+( \d)?([,.\/]\d+)?/g);
        if (s != null) {
          let qty_s = s[0];
          this.label = this.raw.substr(qty_s.length).trim();
          this.nb = Quantity.parseFloatOrFraction(qty_s);
          this.unit = gon.units.find((unit) => unit.name == this.label);
        }
      }
    }
    static parseQuantityAndFoodName(raw) {
      const separators = ["de", "d'"];
      for (let i = 0; i < separators.length; i++) {
        if (raw.includes(separators[i])) {
          const s = raw.split(separators[i]);
          let rawQty = s[0].trim();
          let foodName2 = s[1].trim();
          let qty2 = new Quantity({ raw: rawQty });
          return [qty2, foodName2];
        }
      }
      let qty = new Quantity({ raw });
      if (qty.unit) {
        return [qty, null];
      }
      let foodName = qty.label;
      qty.label = null;
      return [qty, foodName];
    }
    static parseFractionFloat(str) {
      var split = str.split("/");
      return split[0] / split[1];
    }
    static parseFloatOrFraction(str) {
      if (!str) {
        return null;
      }
      var qty_s = str.trim();
      if (qty_s.includes("/")) {
        if (qty_s.includes(" ")) {
          var s = qty_s.split(" ");
          var whole = s[0];
          var fraction = s[1];
          return parseInt(whole, 10) + Quantity.parseFractionFloat(fraction);
        } else {
          return Quantity.parseFractionFloat(qty_s);
        }
      } else {
        return parseFloat(qty_s);
      }
    }
    pretty() {
      if (!this.label) {
        return this.nb.toString();
      } else {
        return this.raw;
      }
    }
  };

  // app/javascript/recipe_utils.js
  var Utils = {
    stringSnippet(str, maxLength = 20) {
      if (str == null || str == "") {
        return "";
      }
      if (str.length <= maxLength) {
        return str;
      }
      return str.slice(0, 17) + "...";
    },
    stripHtml(html) {
      let tmp = document.createElement("div");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    },
    translated(str) {
      return str;
    },
    minBy(array, fn) {
      return Utils.extremumBy(array, fn, Math.min);
    },
    maxBy(array, fn) {
      return Utils.extremumBy(array, fn, Math.max);
    },
    extremumBy(array, pluck, extremum) {
      return array.reduce(function(best, next) {
        var pair = [pluck(next), next];
        if (!best) {
          return pair;
        } else if (extremum.apply(null, [best[0], pair[0]]) == best[0]) {
          return best;
        } else {
          return pair;
        }
      }, null)[1];
    },
    toGrams(val, unit, unit_weight, density) {
      if (!unit) {
        return val * unit_weight;
      } else if (unit.is_weight) {
        return val * unit.value;
      } else if (unit.is_volume) {
        return val * unit.value * density;
      }
      return val * unit.value * unit_weight;
    },
    prettyFraction(value) {
      if (value == null) {
        return null;
      }
      var fractions = [0, 1 / 8, 1 / 4, 1 / 3, 1 / 2, 2 / 3, 3 / 4, 7 / 8, 1];
      var pp_fractions = ["0", "1/8", "1/4", "1/3", "1/2", "2/3", "3/4", "7/8", "1"];
      var i_part = parseInt(value, 10);
      var f_part = value % 1;
      var f = Utils.minBy(fractions, (x) => Math.abs(f_part - x));
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
      return `${i_part} ${pf}`;
    },
    prettyWeight(grams) {
      if (!grams) {
        return "";
      }
      if (grams >= 1e3) {
        return `${Utils.prettyNumber(grams / 1e3)} kg`;
      }
      return `${Utils.prettyNumber(grams)} g`;
    },
    prettyMetricVolume(ml) {
      if (!ml) {
        return "";
      }
      if (ml >= 1e3) {
        return `${Utils.prettyNumber(ml / 1e3)} L`;
      }
      return `${Utils.prettyNumber(ml)} mL`;
    },
    prettyNumber(nb) {
      return Number.parseFloat(Number.parseFloat(nb).toPrecision(3));
    },
    prettyVolume(ml, is_liquid) {
      if (!ml) {
        return "";
      }
      if (is_liquid && ml >= 1e3) {
        return `${Utils.prettyFraction(ml / 1e3)} ${Utils.translated("L")}`;
      }
      if (ml >= 60) {
        return `${Utils.prettyFraction(ml / 250)} ${Utils.translated("t")}`;
      }
      if (ml >= 15) {
        return `${Utils.prettyFraction(ml / 15)} ${Utils.translated("c. \xE0 soupe")}`;
      }
      if (ml >= 5 / 8) {
        return `${Utils.prettyFraction(ml / 5)} ${Utils.translated("c. \xE0 th\xE9")}`;
      }
      return `${Utils.prettyFraction(ml / 0.31)} ${Utils.translated("pinc\xE9e")}`;
    },
    prettyPreposition(foodName) {
      if (foodName == null || foodName.length <= 0) {
        return "";
      }
      if (foodName[0] == "h" || foodName[0] == "H") {
        return gon.contractionList.includes(foodName) ? "d'" : "de ";
      } else {
        return ["a", "e", "i", "o", "u", "y", "\xE9"].includes(foodName[0]) ? "d'" : "de ";
      }
    },
    prettyQuantity(raw, food) {
      if (!raw || raw == "") {
        return "";
      }
      let qty = new Quantity({ raw });
      return qty.pretty() + " " + Utils.prettyPreposition(food.name);
    },
    prettyQuantityFor(quantity, foodName, scale2 = 1) {
      if (!quantity) {
        return "";
      }
      if (typeof quantity === "string" || quantity instanceof String) {
        quantity = new Quantity({ raw: quantity });
      }
      if (quantity.nb == null) {
        return "";
      }
      var unit = quantity.unit;
      var qty = quantity.nb * scale2;
      if (unit) {
        qty *= unit.value;
      }
      let r = "";
      if (unit && unit.is_weight) {
        r = Utils.prettyWeight(qty) + " ";
      } else if (unit && unit.is_volume) {
        r = Utils.prettyVolume(qty) + " ";
      } else {
        r = Utils.prettyFraction(qty) + " ";
        if (unit) {
          r += unit.name + " ";
        }
      }
      if (quantity.unit && (quantity.unit.is_volume || quantity.unit.is_weight)) {
        r += Utils.prettyPreposition(foodName);
      }
      return r;
    }
  };

  // app/javascript/recipes_show.js
  function prettyIngredientV2(ing) {
    var linkSingular = "<a href='/foods/" + ing.food_id + "'>" + ing.food_name + "</a> ";
    if (ing.raw == null || ing.raw == "") {
      return linkSingular;
    }
    var quantity = new Quantity({ raw: ing.raw });
    let r = Utils.prettyQuantityFor(quantity, ing.food_name, window.scale);
    var qty = quantity.nb * scale;
    if (quantity.unit) {
      qty *= quantity.unit.value;
    }
    if ((!quantity.unit || !quantity.unit.is_volume && !quantity.unit.is_weight) && qty > 1) {
      r += "<a href='/foods/" + ing.food_id + "'>" + ing.food_plural + "</a> ";
    } else {
      r += linkSingular;
    }
    if (ing.comment) {
      r += " " + ing.comment + " ";
    }
    return r;
  }
  function prettyIngredient(ing) {
    var linkSingular = "<a href='/foods/" + ing.dataset.foodId + "'>" + ing.dataset.foodNameSingular + "</a> ";
    if (ing.dataset.raw == null || ing.dataset.raw == "") {
      return linkSingular;
    }
    var quantity = new Quantity({ raw: ing.dataset.raw });
    var unit = quantity.unit;
    var qty = quantity.nb * window.scale;
    if (unit) {
      qty *= unit.value;
    }
    if (unit && unit.is_weight) {
      var r = Utils.prettyWeight(qty) + " ";
    } else if (unit && unit.is_volume) {
      var r = Utils.prettyVolume(qty) + " ";
    } else {
      var r = Utils.prettyFraction(qty) + " ";
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
    if (ing.dataset.comment) {
      r += " " + ing.dataset.comment + " ";
    }
    return r;
  }
  function prettyDetailedIngredient(ing) {
    var r = prettyIngredient(ing);
    if (ing.dataset.raw == null || ing.dataset.raw == "") {
      return r;
    }
    var quantity = new Quantity({ raw: ing.dataset.raw });
    var unit = quantity.unit;
    var grams = ing.dataset.grams * window.scale;
    var ml = ing.dataset.ml * window.scale;
    r += "<span class='ingredient-details'>(";
    if (unit && unit.is_weight) {
      r += `${Utils.prettyVolume(ml)} \xB7 ${Utils.prettyMetricVolume(ml)}`;
    } else if (unit && unit.is_volume) {
      r += `${Utils.prettyMetricVolume(ml)} \xB7 ${Utils.prettyWeight(grams)}`;
    } else {
      r += `${Utils.prettyWeight(grams)}`;
    }
    r += ")</span>";
    return r;
  }
  function scaleRaw(raw) {
    if (!raw) {
      return "";
    }
    var quantity = new Quantity({ raw });
    var v = Utils.prettyFraction(quantity.nb * window.scale);
    if (quantity.label) {
      return v + " " + quantity.label;
    }
    return v;
  }
  function updateServingsInputField() {
    const elem = document.getElementById("servings-input-field");
    elem.value = scaleRaw(elem.dataset.initial);
  }
  function updateIngredientQtyInputField() {
    const elem = document.getElementById("ingredient-qty-input-field");
    elem.value = scaleRaw(elem.dataset.quantity);
  }
  function updateScalableQuantities() {
    var elements = document.querySelectorAll("[data-scalable-qty]");
    for (const elem of elements) {
      const original = elem.dataset.scalableQty;
      elem.innerHTML = "" + Utils.prettyFraction(original * window.scale);
    }
  }
  function updateScalableVolumes() {
    var elements = document.querySelectorAll("[data-scalable-volume]");
    for (const elem of elements) {
      const ml = elem.dataset.scalableVolume;
      elem.innerHTML = "" + Utils.prettyVolume(ml * window.scale, elem.dataset.isLiquid);
    }
  }
  function updateScalableWeights() {
    var elements = document.querySelectorAll("[data-scalable-weight]");
    for (const elem of elements) {
      const grams = elem.dataset.scalableWeight;
      elem.innerHTML = "" + Utils.prettyWeight(grams * window.scale);
    }
  }
  function updateScalableDetailedIngredients() {
    var elements = document.querySelectorAll("[data-scalable-ingredient-detailed]");
    for (const elem of elements) {
      elem.innerHTML = "" + prettyDetailedIngredient(elem);
    }
  }
  function updateScalableIngredients() {
    var elements = document.querySelectorAll("[data-scalable-ingredient]");
    for (const elem of elements) {
      elem.innerHTML = "" + prettyIngredient(elem);
    }
  }
  function updateIngredientsWithId() {
    var elements = document.querySelectorAll("[data-ingredient-id]");
    for (const elem of elements) {
      const ing = gon.ingredients[elem.dataset.ingredientId];
      elem.innerHTML = "" + prettyIngredientV2(ing);
    }
  }
  function _createFilterTag(color, text) {
    var span = document.createElement("span");
    span.className = "filter-" + color;
    span.innerHTML = text + " X";
    span.addEventListener("click", (event) => {
      span.remove();
    });
    return span;
  }
  function addFilterTag(color, text) {
    const activeFilters = document.getElementById("active-filters");
    if (activeFilters.childElementCount == 0) {
      activeFilters.innerHTML = "";
    }
    activeFilters.appendChild(_createFilterTag(color, text));
  }
  function numDigits(x) {
    return (Math.log10((x ^ x >> 31) - (x >> 31)) | 0) + 1;
  }
  function getIncValue(nb, nb0, positive) {
    if (positive) {
      if (nb <= 0.064) {
        return 0.125;
      } else if (nb <= 0.5) {
        return nb * 2;
      } else if (nb < 1) {
        return 1;
      }
      return nb + Math.pow(10, numDigits(Math.min(nb, nb0)) - 1);
    } else {
      if (nb <= 0.25) {
        return 0.125;
      } else if (nb <= 1) {
        return nb / 2;
      }
      let i = Math.pow(10, numDigits(Math.min(nb, nb0)) - 1);
      return parseInt(nb) == i ? nb - Math.pow(10, numDigits(Math.min(nb, nb0)) - 2) : nb - i;
    }
  }
  document.addEventListener("DOMContentLoaded", function(event) {
    const servings = gon.recipe_servings_quantity;
    window.originalServings = parseInt(servings.innerHTML);
    window.currentServings = window.originalServings;
    window.scale = 1;
    const lessButton = document.getElementById("less-servings-button");
    const moreButton = document.getElementById("more-servings-button");
    const servingsField = document.getElementById("servings-input-field");
    const inField = document.getElementById("ingredient-qty-input-field");
    const inIngs = document.getElementById("input-ingredients");
    var elements = document.querySelectorAll(".filter-add-red-ing-link");
    for (const elem of elements) {
      elem.addEventListener("click", (event2) => {
        addFilterTag("red", elem.innerHTML);
      });
    }
    var elements = document.querySelectorAll(".filter-add-green-diet-link");
    for (const elem of elements) {
      elem.addEventListener("click", (event2) => {
        addFilterTag("green", elem.innerHTML);
      });
    }
    var elements = document.querySelectorAll(".filter-add-green-ing-link");
    for (const elem of elements) {
      elem.addEventListener("click", (event2) => {
        addFilterTag("green", elem.innerHTML);
      });
    }
    moreButton.addEventListener("click", (event2) => {
      var f0 = new Quantity({ raw: servingsField.dataset.initial }).nb;
      var qty = new Quantity({ raw: servingsField.value });
      var v = getIncValue(qty.nb, f0, true);
      servingsField.value = Utils.prettyFraction(v) + " " + qty.label;
      var event2 = new Event("change");
      event2.forced = true;
      servingsField.dispatchEvent(event2);
    });
    lessButton.addEventListener("click", (event2) => {
      var f0 = new Quantity({ raw: servingsField.dataset.initial }).nb;
      var qty = new Quantity({ raw: servingsField.value });
      var v = getIncValue(qty.nb, f0, false);
      servingsField.value = Utils.prettyFraction(v) + " " + qty.label;
      var event2 = new Event("change");
      event2.forced = true;
      servingsField.dispatchEvent(event2);
    });
    inField.addEventListener("change", (event2) => {
      var qty = new Quantity({ raw: inField.value });
      const inIng = gon.ingredients[inIngs.value];
      var grams = Utils.toGrams(qty.nb, qty.unit, inIng.unit_weight, inIng.density);
      window.scale = grams / inIng.grams;
      updateServingsInputField();
      updateScalableQuantities();
      updateScalableVolumes();
      updateScalableWeights();
      updateScalableIngredients();
      updateScalableDetailedIngredients();
      updateIngredientsWithId();
    });
    servingsField.addEventListener("change", (event2) => {
      var qty0 = new Quantity({ raw: servingsField.dataset.initial });
      var f = new Quantity({ raw: servingsField.value }).nb;
      servingsField.value = (event2.forced ? Utils.prettyFraction(f) : f.toString()) + " " + qty0.label;
      window.scale = f / qty0.nb;
      updateIngredientQtyInputField();
      updateScalableQuantities();
      updateScalableVolumes();
      updateScalableWeights();
      updateScalableIngredients();
      updateScalableDetailedIngredients();
      updateIngredientsWithId();
    });
    inIngs.addEventListener("change", (event2) => {
      const inIng = gon.ingredients[inIngs.value];
      inField.value = scaleRaw(inIng.raw);
    });
  });
})();
//# sourceMappingURL=/assets/recipes_show.js-2c2b71f765b204c2fe909e035c61ee3fdb42552cf0e2d4af45708ebf60e8c174.map
//!
;
