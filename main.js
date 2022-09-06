(()=>{"use strict";var n={28:(n,r,e)=>{e.d(r,{Z:()=>p});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),c=e(667),s=e.n(c),l=new URL(e(522),e.b),u=a()(o()),d=s()(l);u.push([n.id,"hmml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  margin: 0;\r\n  background-image: url("+d+");\r\n}\r\n\r\n.background-clear{\r\n  background-image: url("+d+');\r\n}\r\n\r\n.header {\r\n  color: white;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.city-input {\r\n  display: flex;\r\n  padding: 5px;\r\n  background-color: rgba(95, 101, 102, 0.5);\r\n  font-size: medium;\r\n  color: #fff;\r\n  font-weight: 550;\r\n  border-radius: 15px;\r\n  border: 2px solid black;\r\n  -webkit-box-shadow: 0 0 20px #000;\r\n  box-shadow: 0 0 20px #000;\r\n}\r\n\r\n.search-city {\r\n  padding: 5px;\r\n  width: 70px;\r\n  background-color: rgba(95, 101, 102, 0.5);\r\n  border: 2px solid black;\r\n  color: #fff;\r\n  font-size: medium;\r\n  font-weight: 600;\r\n  border-radius: 20px;\r\n}\r\n\r\n.search-city:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n}\r\n\r\n.city-input:focus {\r\n  border: none;\r\n}\r\n\r\n.city-input::placeholder {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.search-city {\r\n  margin-left: 2rem;\r\n}\r\n\r\ninput {\r\n  display: flex;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr;\r\n  grid-template-columns: 1fr 1fr;\r\n  text-align: center;\r\n  align-items: center;\r\n  max-height: 60vh;\r\n  width: 500px;\r\n  padding: 20px;\r\n  border-radius: 30px;\r\n  background-color: rgba(95, 101, 102, 0.6);\r\n  margin-top: 10vh;\r\n  -webkit-box-shadow: 0 0 20px #000;\r\n  box-shadow: 0 0 20px #000;\r\n  font-weight: 700;\r\n  color: white;\r\n}\r\n\r\np {\r\n  font-size: large;\r\n}\r\n\r\n.city {\r\n  grid-column: 1/3;\r\n}\r\n\r\n.temp {\r\n  grid-column: 1/3;\r\n}\r\n\r\n.toggle {\r\n  margin-top: 10px;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  width: 62px;\r\n  height: 32px;\r\n  display: inline-block;\r\n  position: relative;\r\n  border-radius: 50px;\r\n  overflow: hidden;\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  background-color: lightblue;\r\n  transition: background-color ease 0.3s;\r\n}\r\n\r\n.toggle:before {\r\n  content: "C F";\r\n  display: block;\r\n  position: absolute;\r\n  z-index: 2;\r\n  width: 28px;\r\n  height: 28px;\r\n  background: #fff;\r\n  left: 2px;\r\n  top: 2px;\r\n  border-radius: 50%;\r\n  font: 20px/28px Helvetica;\r\n\r\n  font-weight: bold;\r\n  text-indent: -22px;\r\n  word-spacing: 37px;\r\n  color: #fff;\r\n  text-shadow: -1px -1px rgba(0, 0, 0, 0.15);\r\n  white-space: nowrap;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;\r\n}\r\n\r\n.toggle:checked:before {\r\n  left: 32px;\r\n}\r\n\r\n.degree-toggle {\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n@media (max-width: 550px) {\r\n  .container {\r\n    min-width: 100vw;\r\n    max-width: 100vw;\r\n    border-radius: 0px;\r\n  }\r\n}\r\n',""]);const p=u},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);t&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var u=e(i[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},522:(n,r,e)=>{n.exports=e.p+"1d51720437244e8a68e8.jpg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{function n(n){const r=document.querySelector(".city"),e=document.querySelector(".temp"),t=document.querySelector(".conditions"),o=document.querySelector(".feels-like"),i=document.querySelector(".high"),a=document.querySelector(".low");r.textContent=n.cityName+", "+n.country,e.textContent=n.currentTemp.toString()+"°",t.textContent="Conditions: "+n.conditions,o.textContent="Feels Like: "+n.feelsLike+"°",i.textContent="High: "+n.highTemp.toString()+"°",a.textContent="Low: "+n.lowTemp.toString()+"°"}class r{constructor(n,r,e,t,o,i,a){this.currentTemp=n,this.feelsLike=r,this.highTemp=e,this.lowTemp=t,this.cityName=o,this.conditions=i,this.country=a}}var t=function(n,r,e,t){return new(e||(e=Promise))((function(o,i){function a(n){try{s(t.next(n))}catch(n){i(n)}}function c(n){try{s(t.throw(n))}catch(n){i(n)}}function s(n){var r;n.done?o(n.value):(r=n.value,r instanceof e?r:new e((function(n){n(r)}))).then(a,c)}s((t=t.apply(n,r||[])).next())}))};function o(e){return t(this,void 0,void 0,(function*(){const t=yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=c5fe265671b668dfb0c7585215149ba1&units=imperial`),o=yield t.json(),i=Math.round(o.main.temp),a=Math.round(o.main.feels_like),c=Math.round(o.main.temp_max),s=Math.round(o.main.temp_min),l=o.name,u=o.weather[0].main,d=o.sys.country;n(new r(i,a,c,s,l,u,d))}))}function i(e){return t(this,void 0,void 0,(function*(){const t=yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=c5fe265671b668dfb0c7585215149ba1&units=metric`),o=yield t.json(),i=Math.round(o.main.temp),a=Math.round(o.main.feels_like),c=Math.round(o.main.temp_max),s=Math.round(o.main.temp_min),l=o.name,u=o.weather[0].main,d=o.sys.country;n(new r(i,a,c,s,l,u,d))}))}var a=e(379),c=e.n(a),s=e(795),l=e.n(s),u=e(569),d=e.n(u),p=e(565),f=e.n(p),h=e(216),m=e.n(h),g=e(589),x=e.n(g),b=e(28),v={};v.styleTagTransform=x(),v.setAttributes=f(),v.insert=d().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=m(),c()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const y=document.querySelector(".search-city"),w=document.querySelector(".city-input"),k=document.querySelector(".toggle");o("New York"),y&&y.addEventListener("click",(function(){const n=w.value;"F"===k.value?o(n):i(n)})),k.addEventListener("click",(function(){const n=document.querySelector(".city");let r=null==n?void 0:n.textContent,e=r.indexOf(",");r=r.slice(0,e),"F"===k.value?(k.value="C",i(r)):"C"===k.value&&(k.value="F",o(r))}))})()})();