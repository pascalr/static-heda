!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/packs/",n(n.s=129)}({129:function(e,t){function n(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,u=function(){};return{s:u,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.addEventListener("DOMContentLoaded",(function(e){var t,r=n(document.querySelectorAll("[data-autocomplete-links]"));try{for(r.s();!(t=r.n()).done;){var o=t.value,u=document.getElementById(o.dataset.autocompleteLinks);u?function(){var e=JSON.parse(u.dataset.values);new autocomplete({selector:o,minChars:1,source:function(t,n){console.log(this),t=t.toLowerCase();for(var r=[],o=0;o<e.length;o++)~e[o].label.toLowerCase().indexOf(t)&&r.push(e[o].label);n(r)},onSelect:function(t,n,r){var o=e.find((function(e){return e.label==n}));window.location.href=o.url}})}():console.log("Error: Can't add autocomplete link. Data element is missing.")}}catch(a){r.e(a)}finally{r.f()}}))}});
//# sourceMappingURL=autocomplete_search-5e9780bf03bb3c37e9cd.js.map