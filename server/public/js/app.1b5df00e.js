(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-315a9e28":"04fd2ec6","chunk-35ca6b22":"47e9f7d9","chunk-f7d228d6":"f81be935"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-35ca6b22":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-315a9e28":"31d6cfe0","chunk-35ca6b22":"2ce046fa","chunk-f7d228d6":"31d6cfe0"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" | "),n("router-link",{attrs:{to:"/equipo"}},[e._v("Equipo")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),u={},s=Object(i["a"])(u,o,a,!1,null,null,null),c=s.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("b-row",[n("b-col",[n("h1",[e._v("Estado de Equipos")]),n("hr")])],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6 my-3"},[n("vc-donut",{attrs:{sections:e.equiposTypeChart,"has-legend":"","legend-placement":"top"}},[e._v("Tipos de Equipo")])],1),n("div",{staticClass:"col-sm-6 my-3"},[n("vc-donut",{attrs:{sections:e.status.cama,"has-legend":"","legend-placement":"top"}},[e._v("Estados de Camas")])],1),n("div",{staticClass:"col-sm-6 my-3"},[n("vc-donut",{attrs:{sections:e.status.colchon,"has-legend":"","legend-placement":"top"}},[e._v("Estados de Colchones")])],1),n("div",{staticClass:"col-sm-6 my-3"},[n("vc-donut",{attrs:{sections:e.status.riel,"has-legend":"","legend-placement":"top"}},[e._v("Estados de Rieles")])],1)])],1)},p=[],f=n("f9f2");function h(e){return g(e)||b(e)||m(e)||v()}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function b(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function g(e){if(Array.isArray(e))return y(e)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w={name:"dashboard",data:function(){return{list:[],equiposType:null,equiposTypeChart:[{label:"Red section",value:25,color:"red"},{label:"Green section",value:25,color:"green"},{label:"Blue section",value:25,color:"blue"}],status:[{label:"Red section",value:25,color:"red"},{label:"Green section",value:25,color:"green"},{label:"Blue section",value:25,color:"blue"}]}},created:function(){var e=this,t=this;f["a"].collection("equipos").onSnapshot((function(n){var r=[];n.empty||(n.forEach((function(e){var t=e.id,n=e.data();n.docId=t,r.push(n)})),e.equiposType=t.groupBy(r,"tipo"),e.list=r)}))},watch:{equiposType:function(e){var t=[],n=[];for(var r in e){var o=this.groupBy(e[r],"estado");n[r]=[{label:"activos",value:o.active&&o.active.length?parseInt(o.active.length/e[r].length*100):0},{label:"inactivos",value:o.inactive&&o.inactive.length?parseInt(o.inactive.length/e[r].length*100):0}],t.push({label:r,value:parseInt(e[r].length/this.list.length*100)})}this.status=n,this.equiposTypeChart=t}},methods:{groupBy:function(e,t){return e.reduce((function(e,n){return e[n[t]]=[].concat(h(e[n[t]]||[]),[n]),e}),{})}}},k=w,_=Object(i["a"])(k,d,p,!1,null,null,null),C=_.exports;r["default"].use(l["a"]);var E=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"dashboard",component:C},{path:"/equipo",name:"equipo",component:function(){return n.e("chunk-35ca6b22").then(n.bind(null,"b547"))}},{path:"/equipo/:id",name:"editar",component:function(){return n.e("chunk-315a9e28").then(n.bind(null,"a241"))}},{path:"/registrar",name:"reguistrar",component:function(){return n.e("chunk-f7d228d6").then(n.bind(null,"dfcb"))}}]}),S=n("5f5b"),q=n("b1e0"),j=n("5886"),T=n("b4b3"),O=n.n(T);n("3a93"),n("f9e3"),n("2dd8");r["default"].use(O.a),r["default"].use(j["a"]),r["default"].use(S["a"]),r["default"].use(q["a"]),r["default"].config.productionTip=!1,new r["default"]({router:E,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){},f9f2:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("260b");n.d(t,"b",(function(){return r["a"]}));n("e71f");var o={apiKey:"AIzaSyBPldRzsaGCQ1HGv2-PIimmqSVDhv9age4",authDomain:"bdd-app-96ce7.firebaseapp.com",projectId:"bdd-app-96ce7",storageBucket:"bdd-app-96ce7.appspot.com",messagingSenderId:"17162751595",appId:"1:17162751595:web:73170e5c3681f814b2eb2e",measurementId:"G-RSKBVPHV41"};r["a"].initializeApp(o),r["a"].firestore().enablePersistence().catch((function(e){"failed-precondition"==e.code?console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time."):"unimplemented"==e.code&&console.log("The current browser does not support all of the features required to enable persistence.")}));var a=r["a"].firestore()}});
//# sourceMappingURL=app.1b5df00e.js.map