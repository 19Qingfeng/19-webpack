!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],u=n.base?i[0]+n.base:i[0],s=t[u]||0,l="".concat(u," ").concat(s);t[u]=s+1;var f=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:b(d,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function b(e,n){var t,r,o;if(n.singleton){var i=h++;t=v||(v=s(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=u(e,n),s=0;s<t.length;s++){var l=c(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r)()(!0);o.push([e.i,"#root{height:300px;width:300px;background-color:blue}\n","",{version:3,sources:["/Users/wanghaoyu/Desktop/19-webpack/src/index.css"],names:[],mappings:"AAAA,MACI,YAAa,CACb,WAAY,CACZ,qBAAsB",file:"index.css",sourcesContent:["#root {\n    height: 300px;\n    width: 300px;\n    background-color: blue;\n}"]}]),n.default=o},function(e,n,t){"use strict";t.r(n);var r,o;t(1);console.log((r=3,o=5,console.log(r+o),void console.log("this is sum")))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDQuMi4xQGNzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzP2UxNmUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMS4yLjFAc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlZVNoYWtpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJ0aGlzIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiY29uY2F0Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwiam9pbiIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiYXBpIiwiZGVmYXVsdCIsIm9wdGlvbnMiLCJsb2NhbHMiLCJtZW1vIiwiaXNPbGRJRSIsIkJvb2xlYW4iLCJ3aW5kb3ciLCJkb2N1bWVudCIsImFsbCIsImF0b2IiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwic3R5bGVzSW5Eb20iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleCIsIm9iaiIsImNzcyIsIm1lZGlhIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRTdHlsZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJub25jZSIsImtleXMiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsInRleHRTdG9yZSIsInJlcGxhY2VUZXh0IiwicmVwbGFjZW1lbnQiLCJmaWx0ZXIiLCJhcHBseVRvU2luZ2xldG9uVGFnIiwicmVtb3ZlIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjc3NOb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBseVRvVGFnIiwicmVtb3ZlQXR0cmlidXRlIiwiZmlyc3RDaGlsZCIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkNvdW50ZXIiLCJ1cGRhdGUiLCJzdHlsZUluZGV4IiwicGFyZW50Tm9kZSIsInJlbW92ZVN0eWxlRWxlbWVudCIsIm5ld09iaiIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaW5kZXgiLCJzcGxpY2UiLCJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsImEiLCJiIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFBTUcsV0FBWSxPQUFPSCxFQUNoRixJQUFJSSxFQUFLWCxPQUFPWSxPQUFPLE1BR3ZCLEdBRkEx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WUgsRUM4REosRUQ5RE9DLEVDOERKLEVEN0RmQyxRQUFRQyxJQUFJSCxFQUFJQyxRQUNoQkMsUUFBUUMsSUFBSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDEuMi4xQHN0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJANC4yLjFAY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi4vbm9kZV9tb2R1bGVzL19zYXNzLWxvYWRlckA5LjAuM0BzYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDMuMC4wQHBvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDQuMi4xQGNzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3Jvb3R7aGVpZ2h0OjMwMHB4O3dpZHRoOjMwMHB4O2JhY2tncm91bmQtY29sb3I6Ymx1ZX1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvd2FuZ2hhb3l1L0Rlc2t0b3AvMTktd2VicGFjay9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLE1BQ0ksWUFBYSxDQUNiLFdBQVksQ0FDWixxQkFBc0JcIixcImZpbGVcIjpcImluZGV4LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcm9vdCB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJleHBvcnQgY29uc3Qgc3VtID0gKGEsIGIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhICsgYilcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgc3VtXCIpXG59XG5cbmV4cG9ydCBjb25zdCBkZWxlID0gKGEsIGIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhIC0gYilcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgZGVsZVwiKVxufSIsIi8vIGltcG9ydCB0ZXN0SW1nIGZyb20gXCIuL3Rlc3QtaW1nLmpwZWdcIlxuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL2luZGV4Lm1vZHVsZXMuc3Vzc1wiO1xuLy8gLy8gaW1wb3J0IFwiLi9pbmRleC5zY3NzXCJcbi8vIGltcG9ydCBcIi4vZm9udC9pY29uZm9udC5jc3NcIlxuXG5cbi8vIGNvbnNvbGUubG9nKHN0eWxlLCAnc3R5bGU1Jylcbi8vIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuLy8gaW1nLnNyYyA9IHRlc3RJbWc7XG4vLyBpbWcuY2xhc3NMaXN0LmFkZChzdHlsZS5yb290LmltYWdlKVxuLy8gbGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4vLyByb290LmFwcGVuZENoaWxkKGltZylcblxuLy8gY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuLy8gZGl2LmlkID0gJ2ljb24nXG4vLyBkaXYuY2xhc3NOYW1lID0gXCJpY29uc2h1YXhpbnpob25namllYmFuIGljb25mb250XCJcbi8vIHJvb3QuYXBwZW5kQ2hpbGQoZGl2KVxuXG4vLyDkvb/nlKhzb3VyY2VNYXBcbi8vIOaVheaEj+WGmemUmSBkZXZUb29sOlwibm9uZVwiIOayoeacieaYoOWwhOWFs+ezu1xuLy8gLy8gY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZDExMTFcIilcbi8vIGltcG9ydCBcIi4vaW5kZXguY3NzXCJcbi8vIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbi8vIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbi8vIGJ0bi5pbm5lclRleHQgPSBcIueCueWHu+aIkVwiXG4vLyByb290LmFwcGVuZENoaWxkKGJ0bilcbi8vIGNvbnNvbGUubG9nKFwiYWRkXCIpXG4vLyBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBkaXYuaW5uZXJUZXh0ID0gJ+WIm+W7uueahGRpdidcbi8vICAgICBkaXYuY2xhc3NOYW1lID0gJ2Rpdidcbi8vICAgICByb290LmFwcGVuZENoaWxkKGRpdilcbi8vIH0pXG4vLyBpbXBvcnQgY291bnQgZnJvbSBcIi4vSFJNL2NvdW50XCJcbi8vIGltcG9ydCBudW1iZXIgZnJvbSBcIi4vSFJNL251bWJlclwiXG5cblxuLy8gY291bnQoKVxuLy8gbnVtYmVyKClcblxuLy8gaWYgKG1vZHVsZS5ob3QpIHtcbi8vICAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSFJNL251bWJlclwiLCAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG51bWJlckRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyXCIpXG4vLyAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobnVtYmVyRG9tKVxuLy8gICAgICAgICBudW1iZXIoKVxuLy8gICAgIH0pXG4vLyB9XG5cbi8vIGltcG9ydCBcIkBiYWJlbC9wb2x5ZmlsbFwiO1xuLy8gQmFiZWzlpITnkIZFUzbor63ms5Vcbi8vIGNvbnN0IGFyciA9IFtcbi8vICAgICBuZXcgUHJvbWlzZSgoKSA9PiB7fSksXG4vLyAgICAgbmV3IFByb21pc2UoKCkgPT4ge30pXG4vLyBdXG4vLyBhcnIubWFwKGkgPT4ge1xuLy8gICAgIHJldHVybiBpXG4vLyB9KVxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIlxuaW1wb3J0IHtcbiAgICBzdW1cbn0gZnJvbSBcIi4vdHJlZVNoYWtpbmcvaW5kZXguanNcIlxuXG5jb25zb2xlLmxvZyhzdW0oMywgNSkpIl0sInNvdXJjZVJvb3QiOiIifQ==