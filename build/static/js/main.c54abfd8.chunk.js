/*! For license information please see main.c54abfd8.chunk.js.LICENSE.txt */
(this["webpackJsonpvr-ar-ecosystem-nz"]=this["webpackJsonpvr-ar-ecosystem-nz"]||[]).push([[0],{31:function(e,t,r){e.exports=r(46)},46:function(e,t,r){"use strict";r.r(t);var n=r(6),o=r.n(n),a=r(20),i=r.n(a),c=r(15),l=r(11),u=r(7),s=r(2);function h(e){var t=new s.C({antialias:!0});t.setSize(window.innerWidth,window.innerHeight),document.getElementById("3d-graph").appendChild(t.domElement);var r=new s.v;r.add(new s.a(12303291));var n=new s.s;return n.far=1e4,n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),{scene:r,renderer:t,camera:n}}var f=r(30),v=r(27);function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(P){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:E(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var h={};function f(){}function v(){}function p(){}var y={};l(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==t&&r.call(m,a)&&(y=m);var w=p.prototype=f.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function E(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=p,n(w,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:v,configurable:!0}),v.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(x.prototype),l(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function p(e){var t=new window.Image;return new Promise((function(r){t.onload=function(){return r(t)},t.src=e}))}function y(e,t){return g.apply(this,arguments)}function g(){return(g=Object(l.a)(d().mark((function e(t,r){var n,o,a,i,c,l;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.width,o=r.height,(a=document.createElement("canvas")).width=n,a.height=o,i=a.getContext("2d"),c='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(n,'" height="').concat(o,'">\n      <style type="text/css">\n        <![CDATA[\n          ').concat(document.getElementById("styles").innerHTML,'\n        ]]>\n      </style>\n      <foreignObject width="').concat(n,'" height="').concat(o,'">\n      ').concat(Object(v.renderToStaticMarkup)(t),"\n      </foreignObject>\n      </svg>"),e.next=8,p(c);case 8:return l=e.sent,i.drawImage(l,0,30),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(P){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:E(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var h={};function f(){}function v(){}function d(){}var p={};l(p,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==t&&r.call(g,a)&&(p=g);var w=d.prototype=f.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function E(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(x.prototype),l(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function w(e,t){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(m().mark((function e(t,r){var n,o,a,i,c,l;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.width,o=r.height,e.next=3,y(t,{width:n,height:o});case 3:return a=e.sent,i=new s.e(a),c=new s.y({map:i}),(l=new s.x(c)).scale.set(n/6,o/6),e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=r(28),E=r.n(x);function L(e){var t=e.level,r=e.label;return o.a.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",className:E()("mind-map-node",0===t&&"magenta",1===t&&"violet",2===t&&"blue",t>=3&&"turquoise")},o.a.createElement("div",null,r))}var O=r(29),j={magenta:new s.f(15795144),violet:new s.f(8782833),blue:new s.f(25810),turquoise:new s.f(25810)},k=[j.magenta,j.violet,j.blue,j.turquoise];function _(){_=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(P){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var h={};function f(){}function v(){}function d(){}var p={};l(p,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==t&&r.call(g,a)&&(p=g);var m=d.prototype=f.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function E(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(m),l(m,c,"Generator"),l(m,a,(function(){return this})),l(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function S(){return(S=Object(l.a)(_().mark((function e(t){var r,n,a,i,l,v;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h(0),n=r.scene,a=r.renderer,i=r.camera,e.next=3,Promise.all(u.nodes.map((function(e){return w(o.a.createElement(L,{label:e.name,level:e.level}),{width:120,height:200}).then((function(t){return Object(c.a)(Object(c.a)({},e),{},{sprite:t})}))})));case 3:u.nodes=e.sent,(l=(new f.a).graphData(u)).nodeThreeObject((function(e){return e.sprite})),l.linkMaterial((function(e){var t=e.level;return new s.q({color:k[t]})})),l.linkWidth(1),n.add(l),i.lookAt(l.position),i.position.z=-300,i.position.x=-220,i.position.y=-100,v=new O.a(i,a.domElement),function e(){l.tickFrame(),v.update(),a.render(n,i),requestAnimationFrame(e)}();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=r(5),N=r(0),G=r(1),C=r(9),F=r(3),T=r(4),A=function(e){Object(F.a)(r,e);var t=Object(T.a)(r);function r(e){var n;return Object(N.a)(this,r),(n=t.call(this,e)).state={parent:"",org:"",person:"",add:""},n.handleChange=n.handleChange.bind(Object(C.a)(n)),n.saveFile=n.saveFile.bind(Object(C.a)(n)),n}return Object(G.a)(r,[{key:"handleChange",value:function(e){this.setState(Object(P.a)({},e.target.name,e.target.value))}},{key:"saveFile",value:function(e){e.preventDefault();var t=this.state.parent,r=this.state.org,n=this.state.person,o=this.state.add,a=u.nodes.find((function(e){return e.name==t}));if(a){var i=u.links.find((function(e){return e.source.id==a.id})),c=u.nodes.length+1,l={id:c,name:r,val:a.val=1,level:a.level+1},s={source:a.id,target:c,level:i.level+1};u.nodes.push(l),u.links.push(s);var h=c+1,f={id:h,name:n,val:l.val=1,level:c.level+1},v={source:c.id,target:h,level:c.level+1};if(u.nodes.push(f),u.links.push(v),o){var d={id:h+1,name:t,val:f.val=1,level:h.level+1},p={source:h.id,target:h+1,level:h.level+1};u.nodes.push(d),u.links.push(p)}}}},{key:"render",value:function(){return o.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-4"},o.a.createElement("form",{id:"formdata"},o.a.createElement("label",null,"Parent Item on Graph"),o.a.createElement("select",{id:"parent",name:"parent",placeholder:"Parent Item on Graph",required:!0,onChange:this.handleChange},o.a.createElement("option",{value:"",default:!0},"Select one"),u.nodes.map((function(e){return o.a.createElement("option",{name:e.name,key:e.id},e.name)}))),o.a.createElement("input",{id:"org",name:"org",type:"text",placeholder:"New item",required:!0,onChange:this.handleChange}),o.a.createElement("input",{id:"person",name:"person",type:"text",placeholder:"Sub-item",required:!0,onChange:this.handleChange}),o.a.createElement("input",{id:"add",name:"add",type:"text",placeholder:"Additional item (optional)",onChange:this.handleChange}),o.a.createElement("input",{type:"button",id:"bt",value:"save",onClick:this.saveFile})))}}]),r}(o.a.Component);function I(){var e=Object(n.createRef)();return Object(n.useEffect)((function(){return function(e){return S.apply(this,arguments)}(e.current)}),[e]),o.a.createElement("div",{ref:e},o.a.createElement(A,null))}var M=document.getElementById("root");i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),M)},7:function(e){e.exports=JSON.parse('{"nodes":[{"id":"1","name":"AR and VR in Aotearoa","val":3,"level":0},{"id":"2","name":"Academic","val":3,"level":1},{"id":"3","name":"Advertising","val":3,"level":1},{"id":"4","name":"Hardware","val":3,"level":1},{"id":"5","name":"Massey University","val":2,"level":2},{"id":"6","name":"Victoria University","val":2,"level":2},{"id":"7","name":"University of Auckland","val":2,"level":2},{"id":"8","name":"University of Canterbury","val":2,"level":2},{"id":"9","name":"University of Otago","val":2,"level":2},{"id":"10","name":"StaplesVR, Auckland","val":2,"level":2},{"id":"11","name":"Other","val":2,"level":2},{"id":"12","name":"Other","val":2,"level":2},{"id":"13","name":"360 thing","val":2,"level":2},{"id":"14","name":"StretchSense","val":2,"level":2},{"id":"15","name":"Other","val":2,"level":2},{"id":"16","name":"Other","val":2,"level":2},{"id":"17","name":"Immersive Major at Bachelor of Screen Arts","val":2,"level":3},{"id":"18","name":"Postgraduate research in Emergency Response at School of Built Environment","val":2,"level":3},{"id":"19","name":"Postgraduate research in Marae Longevity at School of Built Environment","val":2,"level":3},{"id":"20","name":"Master in Design at Mirimar Creative Centre","val":2,"level":3},{"id":"21","name":"Postgraduate research in Psychology of Phobias","val":2,"level":3},{"id":"22","name":"Human Computer Interaction Lab, Postgraduate","val":2,"level":3},{"id":"23","name":"HITLab, Postgraduate","val":1,"level":3},{"id":"24","name":"Maddy King","val":1,"level":4},{"id":"25","name":"Rino Lovreggio","val":1,"level":4},{"id":"26","name":"Regan Potangaroa","val":1,"level":4},{"id":"27","name":"Aleisha Staples","val":1,"level":4},{"id":"28","name":"Other","val":1,"level":4},{"id":"29","name":"Other","val":1,"level":4},{"id":"30","name":"Other","val":1,"level":4},{"id":"31","name":"Other","val":1,"level":4},{"id":"32","name":"Other","val":1,"level":4}],"links":[{"source":"1","target":"2","level":0},{"source":"1","target":"3","level":0},{"source":"1","target":"4","level":0},{"source":"2","target":"5","level":1},{"source":"2","target":"6","level":1},{"source":"2","target":"7","level":1},{"source":"2","target":"8","level":1},{"source":"2","target":"9","level":1},{"source":"3","target":"10","level":1},{"source":"3","target":"11","level":1},{"source":"3","target":"12","level":1},{"source":"4","target":"13","level":1},{"source":"4","target":"14","level":1},{"source":"4","target":"15","level":1},{"source":"4","target":"16","level":1},{"source":"5","target":"17","level":2},{"source":"5","target":"18","level":2},{"source":"5","target":"19","level":2},{"source":"6","target":"20","level":2},{"source":"6","target":"21","level":3},{"source":"7","target":"22","level":3},{"source":"8","target":"23","level":3},{"source":"17","target":"24","level":3},{"source":"18","target":"25","level":3},{"source":"19","target":"26","level":3},{"source":"10","target":"27","level":2},{"source":"11","target":"28","level":3},{"source":"12","target":"29","level":3},{"source":"13","target":"30","level":3},{"source":"14","target":"31","level":3},{"source":"15","target":"32","level":3}]}')}},[[31,1,2]]]);
//# sourceMappingURL=main.c54abfd8.chunk.js.map