webpackJsonp([0,2],[function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".commons__borderColorAnim___3nCet{transition:all .5s}.commons__borderColorAnim___3nCet:hover:has(>.commons__borderColorAnim___3nCet){border-color:#bbb;border-style:dashed}.commons__borderColorAnim___3nCet:hover{border-color:#000;border-style:solid}.commons__comp___dIkfx{background-color:#f9f9f9;border:2px dashed #bbb;padding:5px}.commons__comp___dIkfx .commons__comp___dIkfx{background-color:#eee}",""]),t.locals={borderColorAnim:"commons__borderColorAnim___3nCet",comp:"commons__comp___dIkfx"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(l(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(l(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],s=r[2],l=r[3],c={css:a,media:s,sourceMap:l};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function r(e,t){var n=v(),o=_[_.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),_.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=_.indexOf(e);t>=0&&_.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function l(e,t){var n,o,r;if(t.singleton){var l=g++;n=h||(h=a(t)),o=c.bind(null,n,l,!1),r=c.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),o=f.bind(null,n),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=u.bind(null,n),r=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,g=0,_=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var s=r[a],l=d[s.id];l.refs--,i.push(l)}if(e){var c=o(e);n(c,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(10),i=o(r);angular.element(document).ready(function(){angular.bootstrap(document,[i.default],{strictDi:!0})})},,function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"h3,h4{margin-top:5px}",""])},function(e,t,n){t=e.exports=n(1)(),t.i(n(0),void 0),t.push([e.i,".app__root___3xwm5{margin-top:15px}",""]),t.locals={root:"app__root___3xwm5 "+n(0).locals.borderColorAnim+" "+n(0).locals.comp}},function(e,t,n){t=e.exports=n(1)(),t.i(n(0),void 0),t.push([e.i,".header__root___2SabL{background:url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20250%20250%22%20style%3D%22enable-background%3Anew%200%200%20250%20250%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%23DD0031%3B%7D%20.st1%7Bfill%3A%23C3002F%3B%7D%20.st2%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%3E%20%3Cpolygon%20class%3D%22st0%22%20points%3D%22125%2C30%20125%2C30%20125%2C30%2031.9%2C63.2%2046.1%2C186.3%20125%2C230%20125%2C230%20125%2C230%20203.9%2C186.3%20218.1%2C63.2%20%20%22%2F%3E%20%3Cpolygon%20class%3D%22st1%22%20points%3D%22125%2C30%20125%2C52.2%20125%2C52.1%20125%2C153.4%20125%2C153.4%20125%2C230%20125%2C230%20203.9%2C186.3%20218.1%2C63.2%20125%2C30%20%20%22%2F%3E%20%3Cpath%20class%3D%22st2%22%20d%3D%22M125%2C52.1L66.8%2C182.6h0h21.7h0l11.7-29.2h49.4l11.7%2C29.2h0h21.7h0L125%2C52.1L125%2C52.1L125%2C52.1L125%2C52.1%20%20L125%2C52.1z%20M142%2C135.4H108l17-40.9L142%2C135.4z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E') no-repeat 100% 0;margin-bottom:10px}",""]),t.locals={root:"header__root___2SabL "+n(0).locals.borderColorAnim+" "+n(0).locals.comp}},function(e,t,n){t=e.exports=n(1)(),t.i(n(0),void 0),t.push([e.i,".main__root___3Fz49{display:block;margin-bottom:10px}.main__photo___1H0Id{max-width:100%}",""]),t.locals={root:"main__root___3Fz49 "+n(0).locals.borderColorAnim+" "+n(0).locals.comp,photo:"main__photo___1H0Id"}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),i=o(r),a={bindings:{},controller:function(){this.view="list",this.viewChange=function(e){this.view=e.data}},template:'\n    <div class="'+i.default.root+'">\n      <p>App Component: app.view = {{ $ctrl.view }}</p>\n      <header view="$ctrl.view" view-change="$ctrl.viewChange($event)"></header>\n      <main data="$ctrl.view"></main>\n    </div>\n  '};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),n(17);var r=n(11),i=o(r),a=n(14),s=o(a),l=n(9),c=o(l);t.default=window.angular.module("app",[i.default,s.default]).component("app",c.default).name},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),i=o(r),a=n(13),s=o(a);t.default=window.angular.module("commons",[]).component("header",i.default).service("HeaderService",s.default).name},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(19),s=o(a),l={bindings:{view:"<",viewChange:"&"},controller:function(){function e(t){"ngInject";r(this,e),this.HeaderService=t,this.state={}}return e.$inject=["HeaderService"],i(e,[{key:"$onInit",value:function(){var e=this;console.log("Header Initialized"),this.HeaderService.fetch(function(t){console.log("Header Data Requested",t),e.state.loaded=!0,e.state.data=window.angular.copy(t)})}},{key:"$onChanges",value:function(e){e.view.isFirstChange()===!1&&console.log("Header Changed",e.view)}},{key:"$onDestroy",value:function(){console.log("Header Destroyed")}},{key:"setView",value:function(e){this.view=e,this.viewChange({$event:{data:e}})}}]),e}(),template:'\n    <div class="'+s.default.root+'">\n        <h3>{{ $ctrl.state.data.title }}</h3>\n        <nav>\n            <div ng-if="!$ctrl.state.data.menu">Fetching Data from Server...</div>\n            <ul class="nav nav-pills">\n                <li ng-repeat="item in $ctrl.state.data.menu" ng-class="{\'active\': $ctrl.view === item.link}" ><a class="btn btn-default btn-sm" ng-click="$ctrl.setView(item.link)">{{ item.name }}</a></li>\n            </ul>\n        </nav>\n    </div>\n  '};t.default=l},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t){"ngInject";n(this,e),console.log("Header Service Loaded"),this.$timeout=t}return e.$inject=["$timeout"],o(e,[{key:"fetch",value:function(e){this.$timeout(function(){e({title:"Header component",menu:[{name:"List",link:"list"},{name:"Table",link:"table"},{name:"Other",link:"other"}]})},2e3)}}]),e}();t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),i=o(r);t.default=window.angular.module("components",[]).component("main",i.default).name},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),i=o(r),a=n(16),s=o(a),l=n(21),c=o(l),u={bindings:{data:"<"},template:'\n    <div class="'+i.default.root+'">\n      <h4>Main component!</h4>\n      <p>Main view: {{ $ctrl.data }}</p>\n      <figure>\n        <img src="'+c.default+'" alt="Logo AngularJS in SVG format" />\n        <figcaption>Image SVG scalable with the best quality by default for responsive apps</figcaption>\n      </figure>\n      <figure>\n        <img srcset="'+s.default.srcSet+'" sizes="(min-width: 100%)" alt="Big Photo in JPG format" class="'+i.default.photo+'" />\n        <figcaption>Image JPG with a set of several sources by size for responsive apps</figcaption>\n      </figure>\n    </div>\n  '};t.default=u},function(e,t,n){e.exports={srcSet:n.p+"47a47cd8ec3a061f8aa38a5341f4435f-320.jpg 320w,"+n.p+"db29605d29416cf405db63a12de1cbf6-640.jpg 640w,"+n.p+"8b96c6204bb5959d9fcaa0b31c83602b-1024.jpg 1024w",images:[{path:n.p+"47a47cd8ec3a061f8aa38a5341f4435f-320.jpg",width:320},{path:n.p+"db29605d29416cf405db63a12de1cbf6-640.jpg",width:640},{path:n.p+"8b96c6204bb5959d9fcaa0b31c83602b-1024.jpg",width:1024}],src:n.p+"47a47cd8ec3a061f8aa38a5341f4435f-320.jpg",toString:function(){return n.p+"47a47cd8ec3a061f8aa38a5341f4435f-320.jpg"}}},function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.i,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){var o=n(6);"string"==typeof o&&(o=[[e.i,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){var o=n(7);"string"==typeof o&&(o=[[e.i,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){var o=n(8);"string"==typeof o&&(o=[[e.i,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUwIDI1MCI+PHN0eWxlPi5zdDB7ZmlsbDojZGQwMDMxfS5zdDF7ZmlsbDojYzMwMDJmfS5zdDJ7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTEyNSAzMEwzMS45IDYzLjJsMTQuMiAxMjMuMUwxMjUgMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjUgMzB2MjIuMi0uMVYyMzBsNzguOS00My43IDE0LjItMTIzLjFMMTI1IDMweiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUgNTIuMUw2Ni44IDE4Mi42aDIxLjdsMTEuNy0yOS4yaDQ5LjRsMTEuNyAyOS4ySDE4M0wxMjUgNTIuMXptMTcgODMuM2gtMzRsMTctNDAuOSAxNyA0MC45eiIvPjwvc3ZnPg=="},function(e,t,n){"use strict";n(3),console.log("Current Environment: ","production")}],[22]);
//# sourceMappingURL=app.map