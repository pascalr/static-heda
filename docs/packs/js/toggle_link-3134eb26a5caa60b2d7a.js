!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/packs/",n(n.s=149)}({149:function(e,t){document.addEventListener("DOMContentLoaded",(function(e){for(var t=document.getElementsByClassName("toggle-link"),n=0;n<t.length;n++){var r=t.item(n);document.getElementById(r.dataset.toggleId).hidden=!0,r.addEventListener("click",(function(e){var t=document.getElementById(e.target.dataset.toggleId);e.target.classList.toggle("toggle-link-active"),e.target.innerHTML=(t.hidden?"-":"+")+e.target.innerHTML.substring(1),t.hidden=!t.hidden}))}t=document.getElementsByClassName("toggle-link-visible");for(n=0;n<t.length;n++){(r=t.item(n)).addEventListener("click",(function(e){var t=document.getElementById(e.target.dataset.toggleId);e.target.classList.toggle("toggle-link-active"),e.target.innerHTML=(t.hidden?"-":"+")+e.target.innerHTML.substring(1),t.hidden=!t.hidden}))}}))}});
//# sourceMappingURL=toggle_link-3134eb26a5caa60b2d7a.js.map