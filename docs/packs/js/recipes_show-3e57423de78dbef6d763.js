!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/packs/",n(n.s=278)}({278:function(t,e,n){"use strict";n.r(e);var r=n(67),a=n(66);function i(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t){var e="<a href='/foods/"+t.food_id+"'>"+t.food_name+"</a> ";if(null==t.raw||""==t.raw)return e;var n=new a.a({raw:t.raw}),i=r.a.prettyQuantityFor(n,t.food_name,window.scale),o=n.nb*scale;return n.unit&&(o*=n.unit.value),(!n.unit||!n.unit.is_volume&&!n.unit.is_weight)&&o>1?i+="<a href='/foods/"+t.food_id+"'>"+t.food_plural+"</a> ":i+=e,t.comment&&(i+=" "+t.comment+" "),i}function l(t){var e="<a href='/foods/"+t.dataset.foodId+"'>"+t.dataset.foodNameSingular+"</a> ";if(null==t.dataset.raw||""==t.dataset.raw)return e;var n=new a.a({raw:t.dataset.raw}),i=n.unit,o=n.nb*window.scale;if(i&&(o*=i.value),i&&i.is_weight)var u=r.a.prettyWeight(o)+" ";else if(i&&i.is_volume)u=r.a.prettyVolume(o)+" ";else{u=r.a.prettyFraction(o)+" ";i&&(u+=i.name+" ")}return i&&t.dataset.preposition&&(u+=t.dataset.preposition),(!i||!i.is_volume&&!i.is_weight)&&o>1?u+="<a href='/foods/"+t.dataset.foodId+"'>"+t.dataset.foodNamePlural+"</a> ":u+=e,t.dataset.comment&&(u+=" "+t.dataset.comment+" "),u}function c(t){var e=l(t);if(null==t.dataset.raw||""==t.dataset.raw)return e;var n=new a.a({raw:t.dataset.raw}).unit,i=t.dataset.grams*window.scale,o=t.dataset.ml*window.scale;return e+="<span class='ingredient-details'>(",n&&n.is_weight?e+="".concat(r.a.prettyVolume(o)," \xb7 ").concat(r.a.prettyMetricVolume(o)):n&&n.is_volume?e+="".concat(r.a.prettyMetricVolume(o)," \xb7 ").concat(r.a.prettyWeight(i)):e+="".concat(r.a.prettyWeight(i)),e+=")</span>"}function d(t){if(!t)return"";var e=new a.a({raw:t}),n=r.a.prettyFraction(e.nb*window.scale);return e.label?n+" "+e.label:n}function s(){var t,e=i(document.querySelectorAll("[data-scalable-qty]"));try{for(e.s();!(t=e.n()).done;){var n=t.value,a=n.dataset.scalableQty;n.innerHTML=""+r.a.prettyFraction(a*window.scale)}}catch(o){e.e(o)}finally{e.f()}}function f(){var t,e=i(document.querySelectorAll("[data-scalable-volume]"));try{for(e.s();!(t=e.n()).done;){var n=t.value,a=n.dataset.scalableVolume;n.innerHTML=""+r.a.prettyVolume(a*window.scale,n.dataset.isLiquid)}}catch(o){e.e(o)}finally{e.f()}}function v(){var t,e=i(document.querySelectorAll("[data-scalable-weight]"));try{for(e.s();!(t=e.n()).done;){var n=t.value,a=n.dataset.scalableWeight;n.innerHTML=""+r.a.prettyWeight(a*window.scale)}}catch(o){e.e(o)}finally{e.f()}}function y(){var t,e=i(document.querySelectorAll("[data-scalable-ingredient-detailed]"));try{for(e.s();!(t=e.n()).done;){var n=t.value;n.innerHTML=""+c(n)}}catch(r){e.e(r)}finally{e.f()}}function m(){var t,e=i(document.querySelectorAll("[data-scalable-ingredient]"));try{for(e.s();!(t=e.n()).done;){var n=t.value;n.innerHTML=""+l(n)}}catch(r){e.e(r)}finally{e.f()}}function p(){var t,e=i(document.querySelectorAll("[data-ingredient-id]"));try{for(e.s();!(t=e.n()).done;){var n=t.value,r=gon.ingredients[n.dataset.ingredientId];n.innerHTML=""+u(r)}}catch(a){e.e(a)}finally{e.f()}}function g(t,e){var n=document.getElementById("active-filters");0==n.childElementCount&&(n.innerHTML=""),n.appendChild(function(t,e){var n=document.createElement("span");return n.className="filter-"+t,n.innerHTML=e+" X",n.addEventListener("click",(function(t){n.remove()})),n}(t,e))}function w(t){return 1+(0|Math.log10((t^t>>31)-(t>>31)))}function h(t,e,n){if(n)return t<=.064?.125:t<=.5?2*t:t<1?1:t+Math.pow(10,w(Math.min(t,e))-1);if(t<=.25)return.125;if(t<=1)return t/2;var r=Math.pow(10,w(Math.min(t,e))-1);return parseInt(t)==r?t-Math.pow(10,w(Math.min(t,e))-2):t-r}document.addEventListener("DOMContentLoaded",(function(t){var e=gon.recipe_servings_quantity;window.originalServings=parseInt(e.innerHTML),window.currentServings=window.originalServings,window.scale=1;var n,o=document.getElementById("less-servings-button"),u=document.getElementById("more-servings-button"),l=document.getElementById("servings-input-field"),c=document.getElementById("ingredient-qty-input-field"),w=document.getElementById("input-ingredients"),b=i(document.querySelectorAll(".filter-add-red-ing-link"));try{var M=function(){var t=n.value;t.addEventListener("click",(function(e){g("red",t.innerHTML)}))};for(b.s();!(n=b.n()).done;)M()}catch(T){b.e(T)}finally{b.f()}var F,L=i(document.querySelectorAll(".filter-add-green-diet-link"));try{var S=function(){var t=F.value;t.addEventListener("click",(function(e){g("green",t.innerHTML)}))};for(L.s();!(F=L.n()).done;)S()}catch(T){L.e(T)}finally{L.f()}var _,E=i(document.querySelectorAll(".filter-add-green-ing-link"));try{var I=function(){var t=_.value;t.addEventListener("click",(function(e){g("green",t.innerHTML)}))};for(E.s();!(_=E.n()).done;)I()}catch(T){E.e(T)}finally{E.f()}u.addEventListener("click",(function(t){var e=new a.a({raw:l.dataset.initial}).nb,n=new a.a({raw:l.value}),i=h(n.nb,e,!0);l.value=r.a.prettyFraction(i)+" "+n.label,(t=new Event("change")).forced=!0,l.dispatchEvent(t)})),o.addEventListener("click",(function(t){var e=new a.a({raw:l.dataset.initial}).nb,n=new a.a({raw:l.value}),i=h(n.nb,e,!1);l.value=r.a.prettyFraction(i)+" "+n.label,(t=new Event("change")).forced=!0,l.dispatchEvent(t)})),c.addEventListener("change",(function(t){var e,n=new a.a({raw:c.value}),i=gon.ingredients[w.value],o=r.a.toGrams(n.nb,n.unit,i.unit_weight,i.density);window.scale=o/i.grams,(e=document.getElementById("servings-input-field")).value=d(e.dataset.initial),s(),f(),v(),m(),y(),p()})),l.addEventListener("change",(function(t){var e,n=new a.a({raw:l.dataset.initial}),i=new a.a({raw:l.value}).nb;l.value=(t.forced?r.a.prettyFraction(i):i.toString())+" "+n.label,window.scale=i/n.nb,(e=document.getElementById("ingredient-qty-input-field")).value=d(e.dataset.quantity),s(),f(),v(),m(),y(),p()})),w.addEventListener("change",(function(t){var e=gon.ingredients[w.value];c.value=d(e.raw)}))}))},66:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return i}));var i=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r(this,t),this.raw=n.raw,this.nb=null,this.label=null,this.ml=null,this.grams=null,this.total=null,this.unit=null,null!=this.raw){var a=this.raw.match(/^\d+( \d)?([,.\/]\d+)?/g);if(null!=a){var i=a[0];this.label=this.raw.substr(i.length).trim(),this.nb=t.parseFloatOrFraction(i),this.unit=gon.units.find((function(t){return t.name==e.label}))}}}var e,n,i;return e=t,i=[{key:"parseQuantityAndFoodName",value:function(e){for(var n=["de","d'"],r=0;r<n.length;r++)if(e.includes(n[r])){var a=e.split(n[r]),i=a[0].trim(),o=a[1].trim();return[new t({raw:i}),o]}var u=new t({raw:e});if(u.unit)return[u,null];var l=u.label;return u.label=null,[u,l]}},{key:"parseFractionFloat",value:function(t){var e=t.split("/");return e[0]/e[1]}},{key:"parseFloatOrFraction",value:function(e){if(!e)return null;var n=e.trim();if(n.includes("/")){if(n.includes(" ")){var r=n.split(" "),a=r[0],i=r[1];return parseInt(a,10)+t.parseFractionFloat(i)}return t.parseFractionFloat(n)}return parseFloat(n)}}],(n=[{key:"pretty",value:function(){return this.label?this.raw:this.nb.toString()}}])&&a(e.prototype,n),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}()},67:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(66);var a={stringSnippet:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return null==t||""==t?"":t.length<=e?t:t.slice(0,17)+"..."},stripHtml:function(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText||""},translated:function(t){return t},minBy:function(t,e){return a.extremumBy(t,e,Math.min)},maxBy:function(t,e){return a.extremumBy(t,e,Math.max)},extremumBy:function(t,e,n){return t.reduce((function(t,r){var a=[e(r),r];return t&&n.apply(null,[t[0],a[0]])==t[0]?t:a}),null)[1]},toGrams:function(t,e,n,r){return e?e.is_weight?t*e.value:e.is_volume?t*e.value*r:t*e.value*n:t*n},prettyFraction:function(t){if(null==t)return null;var e=[0,1/8,1/4,1/3,.5,2/3,3/4,7/8,1],n=parseInt(t,10),r=t%1,i=a.minBy(e,(function(t){return Math.abs(r-t)}));if(0==i)return n.toString();if(1==i)return(n+1).toString();var o=["0","1/8","1/4","1/3","1/2","2/3","3/4","7/8","1"][e.indexOf(i)];return 0==n?o:"".concat(n," ").concat(o)},prettyWeight:function(t){return t?t>=1e3?"".concat(a.prettyNumber(t/1e3)," kg"):"".concat(a.prettyNumber(t)," g"):""},prettyMetricVolume:function(t){return t?t>=1e3?"".concat(a.prettyNumber(t/1e3)," L"):"".concat(a.prettyNumber(t)," mL"):""},prettyNumber:function(t){return Number.parseFloat(Number.parseFloat(t).toPrecision(3))},prettyVolume:function(t,e){return t?e&&t>=1e3?"".concat(a.prettyFraction(t/1e3)," ").concat(a.translated("L")):t>=60?"".concat(a.prettyFraction(t/250)," ").concat(a.translated("t")):t>=15?"".concat(a.prettyFraction(t/15)," ").concat(a.translated("c. \xe0 soupe")):t>=5/8?"".concat(a.prettyFraction(t/5)," ").concat(a.translated("c. \xe0 th\xe9")):"".concat(a.prettyFraction(t/.31)," ").concat(a.translated("pinc\xe9e")):""},prettyPreposition:function(t){return null==t||t.length<=0?"":"h"==t[0]||"H"==t[0]?gon.contractionList.includes(t)?"d'":"de ":["a","e","i","o","u","y","\xe9"].includes(t[0])?"d'":"de "},prettyQuantity:function(t,e){return t&&""!=t?new r.a({raw:t}).pretty()+" "+a.prettyPreposition(e.name):""},prettyQuantityFor:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(!t)return"";if(("string"===typeof t||t instanceof String)&&(t=new r.a({raw:t})),null==t.nb)return"";var i=t.unit,o=t.nb*n;i&&(o*=i.value);var u="";return i&&i.is_weight?u=a.prettyWeight(o)+" ":i&&i.is_volume?u=a.prettyVolume(o)+" ":(u=a.prettyFraction(o)+" ",i&&(u+=i.name+" ")),t.unit&&(t.unit.is_volume||t.unit.is_weight)&&(u+=a.prettyPreposition(e)),u}}}});
//# sourceMappingURL=recipes_show-3e57423de78dbef6d763.js.map