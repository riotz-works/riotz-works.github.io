(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{46:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n(2));var r=a(n(50)),u=a(n(10)),o=n(7);t.default=function(e,t){return new Promise(function(t){var a=new RegExp("^".concat(u.default.pathPrefix)),d=(0,o.unslash)(e.path.replace(a,"/")),i=d?"/".concat(d,".json"):"/index.json";n(68)("./data".concat(i)).then(function(n){r.default.set(e.path,n.default.data),t(n)})})}},50:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),u={};r.default.util.defineReactive(u,"data",{});var o={set:function(e,t){return r.default.set(u.data,e,t)},delete:function(e){return r.default.delete(u.data,e)},get:function(e){return u.data[e]},has:function(e){return!!u.data[e]}};t.default=o},68:function(e,t,n){var a={"./data/engineers.json":[69,4],"./data/works.json":[70,5]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id=68,e.exports=r}}]);