(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GA"],{"0284":function(e,n,t){!function(n,t){e.exports=t()}("undefined"!=typeof self&&self,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(t,!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n);var c={$vue:null,id:null,router:null,fields:{},customIdFields:{},ignoreRoutes:[],linkers:[],commands:{},disabled:!1,customResourceURL:null,set:[],require:[],ecommerce:{enabled:!1,options:null,enhanced:!1},autoTracking:{screenview:!1,shouldRouterUpdate:null,skipSamePath:!1,exception:!1,exceptionLogs:!0,page:!0,transformQueryString:!0,pageviewOnLoad:!0,pageviewTemplate:null,untracked:!0,prependBase:!0},debug:{enabled:!1,trace:!1,sendHitTask:!0},batch:{enabled:!1,delay:500,amount:2},checkDuplicatedScript:!1,disableScriptLoader:!1,beforeFirstHit:s,ready:s,untracked:[]},a=o({},c);function u(e){!function e(n,t){return Object.keys(t).forEach((function(r){var o=n[r]&&Object.prototype.toString.call(n[r]);"[object Object]"!==o&&"[object Array]"!==o?n[r]=t[r]:e(n[r],t[r])})),n}(a,e)}function f(){return a.id?[].concat(a.id):[]}var l=a;function s(){}var p=function(e){console.warn("[vue-analytics] ".concat(e))};function d(e,n){return new Promise((function(t,r){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");if(i.async=!0,i.src=e,i.charset="utf-8",n){var c=document.createElement("link");c.href=n,c.rel="preconnect",o.appendChild(c)}o.appendChild(i),i.onload=t,i.onerror=r}))}function y(e){return e.name||e.replace(/-/gi,"")}function b(e,n){if(f().length>1){var t=y(n);return"".concat(t,".").concat(e)}return e}var m,v=function(e){if(e.then)return e;if("function"==typeof e){var n=e();return n.then?n:Promise.resolve(n)}return Promise.resolve(e)};function g(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=[];function w(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];"undefined"!=typeof window&&f().forEach((function(n){var r,o={m:b(e,n),a:t};window.ga?l.batch.enabled?(h.push(o),m||(m=setInterval((function(){h.length?h.splice(0,l.batch.amount).forEach((function(e){var n;(n=window).ga.apply(n,[e.m].concat(g(e.a)))})):(clearInterval(m),m=null)}),l.batch.delay))):(r=window).ga.apply(r,[b(e,n)].concat(t)):l.untracked.push(o)}))}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"object"!==O(n[0])||n[0].constructor!==Object?w("set",n[0],n[1]):w("set",n[0])}function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(){if(window.ga||!l.debug.enabled){if(window.ga){var e=f();l.debug.enabled&&(window.ga_debug={trace:l.debug.trace}),e.forEach((function(n){var t=y(n),r=l.customIdFields[n]||{},o=e.length>1?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(t,!0).forEach((function(n){S(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},l.fields,{},r,{name:t}):l.fields;window.ga("create",n.id||n,"auto",o)})),l.beforeFirstHit();var n=l.ecommerce;if(n.enabled){var t=n.enhanced?"ec":"ecommerce";n.options?w("require",t,n.options):w("require",t)}l.linkers.length>0&&(w("require","linker"),w("linker:autoLink",l.linkers)),l.debug.sendHitTask||j("sendHitTask",null)}}else p("Google Analytics has probably been blocked.")}var E=function(){2!=arguments.length?w("require",arguments.length<=0?void 0:arguments[0]):w("require",arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1])};function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var T=function(){var e;l.set.forEach((function(e){var n=e.field,t=e.value;if(void 0===n||void 0===t)throw new Error('[vue-analytics] Wrong configuration in the plugin options.\nThe "set" array requires each item to have a "field" and a "value" property.');j(n,t)})),e=["ec","ecommerce"],l.require.forEach((function(n){if(-1!==e.indexOf(n)||-1!==e.indexOf(n.name))throw new Error("[vue-analytics] The ecommerce features are built-in in the plugin. \nFollow the ecommerce instructions available in the documentation.");if("string"!=typeof n&&"object"!==A(n))throw new Error('[vue-analytics] Wrong configuration in the plugin options. \nThe "require" array requires each item to be a string or to have a "name" and an "options" property.');var t=n.name||n;n.options?E(t,n.options):E(t)}))};function x(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0];if(1===n.length&&"string"==typeof r)return w("send","screenview",{screenName:r});w.apply(void 0,["send","screenview"].concat(n))}function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r;n.length&&!n[0]||(n.length&&n[0].currentRoute&&(r=n[0].currentRoute),n.length&&function(e){return e.query&&e.params}(n[0])&&(r=n[0]),r?R(r):(j("page","object"===D(n[0])?n[0].page:n[0]),w.apply(void 0,["send","pageview"].concat(n))))}function R(e){if(![(n=e).name,n.path].filter(Boolean).find((function(e){return-1!==l.ignoreRoutes.indexOf(e)}))){var n,t=l.autoTracking,r=e.meta.analytics,o=(void 0===r?{}:r).pageviewTemplate||t.pageviewTemplate;if(t.screenview&&!e.name)throw new Error("[vue-analytics] Route name is mandatory when using screenview.");if(t.screenview)x(e.name);else if(o)q(o(e));else{var i=l.router,c=l.autoTracking,a=c.transformQueryString,u=c.prependBase,f=function(e){var n=Object.keys(e).reduce((function(n,t,r,o){var i=r===o.length-1,c=e[t];return null==c?n:n+="".concat(t,"=").concat(c).concat(i?"":"&")}),"");return""!==n?"?".concat(n):""}(e.query),s=i&&i.options.base,p=u&&s,d=e.path+(a?f:"");q(d=p?function(e,n){var t=n.split("/"),r=e.split("/");return""===t[0]&&"/"===e[e.length-1]&&t.shift(),r.join("/")+t.join("/")}(s,d):d)}}}function I(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var L=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];"undefined"!=typeof window&&f().forEach((function(n){window["ga-disable-".concat(n)]=e}))},_=function(){if("undefined"!=typeof document&&"undefined"!=typeof window){if(l.id){var e,n,t=[v(l.id),v(l.disabled)];if(e=l.checkDuplicatedScript,n=l.disableScriptLoader,[Boolean(window&&window.ga),e&&!(Array.prototype.slice.call(document.getElementsByTagName("script")).filter((function(e){return-1!==e.src.indexOf("analytics")||-1!==e.src.indexOf("gtag")})).length>0),!n].some(Boolean)){var r="https://www.google-analytics.com",o=l.debug.enabled?"analytics_debug":"analytics",i=l.customResourceURL?d(l.customResourceURL):d("".concat(r,"/").concat(o,".js"),r);t.push(i.catch((function(){p("An error occured! Please check your connection or disable your AD blocker")})))}return Promise.all(t).then((function(e){var n,t,r;u({id:e[0],disabled:e[1]}),L(l.disabled),k(),T(),l.untracked.forEach((function(e){w.apply(void 0,[e.m].concat(I(e.a)))})),n=l.router,t=l.autoTracking,r=l.$vue,t.page&&n&&n.onReady((function(){t.pageviewOnLoad&&n.history.ready&&R(n.currentRoute),n.afterEach((function(e,o){var i=t.skipSamePath,c=t.shouldRouterUpdate;i&&e.path===o.path||("function"!=typeof c||c(e,o))&&r.nextTick().then((function(){R(n.currentRoute)}))}))})),l.ready()})).catch((function(e){l.debug.enabled&&p(e.message)}))}p('Missing the "id" parameter. Add at least one tracking domain ID')}},B=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];w("send","exception",{exDescription:e,exFatal:n})},H=function(e){if(l.autoTracking.exception){window.addEventListener("error",(function(e){B(e.message)}));var n=e.config.errorHandler;e.config.errorHandler=function(e,t,r){B(e.message),l.autoTracking.exceptionLogs&&console.error(e),"function"==typeof n&&n.call(void 0,e,t,r)}}},F=B;function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var $=function(e){return"".concat(l.ecommerce.enhanced?"ec":"ecommerce",":").concat(e)},C=["addItem","addTransaction","addProduct","addImpression","setAction","addPromo","send"].reduce((function(e,n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(t,!0).forEach((function(n){U(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,U({},n,(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];w.apply(void 0,[$(n)].concat(t))})))}),{}),N={event:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];w.apply(void 0,["send","event"].concat(n))},exception:F,page:q,query:w,require:E,set:j,social:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];w.apply(void 0,["send","social"].concat(n))},time:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];w.apply(void 0,["send","timing"].concat(n))},screenview:x,ecommerce:C,disable:function(){return L(!0)},enable:function(){return L(!1)},commands:l.commands},G={inserted:function(e,n,t){var r=Object.keys(n.modifiers);0===r.length&&r.push("click"),r.forEach((function(r){e.addEventListener(r,(function(){var e="string"==typeof n.value?l.commands[n.value]:n.value;if(!e)throw new Error("[vue-analytics] The value passed to v-ga is not defined in the commands list.");e.apply(t.context)}))}))}};function J(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function K(e){u(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(t,!0).forEach((function(n){z(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{$vue:e})),e.directive("ga",G),e.prototype.$ga=e.$ga=N,H(e),_()}t.d(n,"default",(function(){return K})),t.d(n,"analyticsMiddleware",(function(){return V})),t.d(n,"onAnalyticsReady",(function(){return X})),t.d(n,"event",(function(){return Y})),t.d(n,"ecommerce",(function(){return Z})),t.d(n,"set",(function(){return ee})),t.d(n,"page",(function(){return ne})),t.d(n,"query",(function(){return te})),t.d(n,"screenview",(function(){return re})),t.d(n,"time",(function(){return oe})),t.d(n,"require",(function(){return ie})),t.d(n,"exception",(function(){return ce})),t.d(n,"social",(function(){return ae}));var V=function(e){e.subscribe((function(e){var n=e.payload;if(n&&n.meta&&n.meta.analytics){var t=n.meta.analytics;if(!Array.isArray(t))throw new Error('The "analytics" property needs to be an array');t.forEach((function(e){var n,t,r=e.shift(),o=e;if(r.includes(":")){var i=Q(r.split(":"),2);r=i[0],n=i[1]}if(!(r in N))throw new Error('[vue-analytics:vuex] The type "'.concat(r,"\" doesn't exist."));if(n&&!(n in N[r]))throw new Error('[vue-analytics:vuex] The type "'.concat(r,'" has not method "').concat(n,'".'));if("ecommerce"===r&&!n)throw new Error('[vue-analytics:vuex] The type "'.concat(r,'" needs to call a method. Check documentation.'));n?(t=N[r])[n].apply(t,J(o)):N[r].apply(N,J(o))}))}}))},X=function(){return new Promise((function(e,n){var t=setInterval((function(){"undefined"!=typeof window&&window.ga&&(e(),clearInterval(t))}),10)}))},Y=N.event,Z=N.ecommerce,ee=N.set,ne=N.page,te=N.query,re=N.screenview,oe=N.time,ie=N.require,ce=N.exception,ae=N.social}])}))}}]);