(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[4],{19:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return o}))},20:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(19),o=n(7),i=n(1),s=function(){return console.log("Computed"),Math.trunc(20*Math.random())};e.default=function(){var t=Object(i.useState)(s),e=Object(o.a)(t,2),n=e[0],u=e[1],a=Object(i.useState)({title:"Counter",date:Date.now()}),b=Object(o.a)(a,2),l=b[0],j=b[1];return Object(r.jsxs)("div",{className:"col-12 border-radius-2 bg-danger rounded text-light mt-5 p-4",children:[Object(r.jsx)("h1",{children:"1) useState"}),Object(r.jsxs)("h1",{className:"text-light",children:["Counter: ",n]}),Object(r.jsx)("button",{onClick:function(){u((function(t){return t+1})),u((function(t){return t+1}))},className:"btn btn-success mr-3",children:"Plus"}),Object(r.jsx)("button",{onClick:function(){u(n-1)},className:"btn btn-dark mr-3",children:"Minus"}),Object(r.jsx)("button",{onClick:function(){j((function(t){return Object(c.a)(Object(c.a)({},t),{},{title:"Counter:".concat(n)})}))},className:"btn btn-secondary",children:"Change Title"}),Object(r.jsx)("pre",{className:"pt-3 text-light h3",children:JSON.stringify(l,null,2)})]})}}}]);
//# sourceMappingURL=4.4a780e15.chunk.js.map