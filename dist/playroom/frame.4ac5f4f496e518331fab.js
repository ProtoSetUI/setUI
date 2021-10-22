(self.webpackChunksetUI=self.webpackChunksetUI||[]).push([[520],{4478:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(7294),o=n(5697),c=n.n(o),i=n(3815),u=n(2932),a=n(8804),l=n.n(a),s=n(4121),f=n.n(s),p=n(2392),d=n.n(p),y=n(5446),m=n.n(y),h=n(6786),b=n.n(h),v=n(7856),O=n.n(v),g=n(9311),w={};w.styleTagTransform=O(),w.setAttributes=m(),w.insert=d().bind(null,"head"),w.domAPI=f(),w.insertStyleElement=b(),l()(g.Z,w);const j=g.Z&&g.Z.locals?g.Z.locals:void 0;function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function S(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(l,e);var t,n,o,c,a=(o=l,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(o);if(c){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function l(){var e;P(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(R(e=a.call.apply(a,[this].concat(n))),"state",{error:null,invalidCode:null,info:null}),e}return t=l,(n=[{key:"componentDidCatch",value:function(e,t){var n=this.props.code;this.setState({invalidCode:n,error:e,info:t})}},{key:"render",value:function(){var e=this.state,t=e.invalidCode,n=e.error,o=e.info,c=this.props,a=c.code,l=c.children;if(a!==t)return l;var s=o.componentStack.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})),f=s.slice(0,s.length-1);return r.createElement("div",{className:j.root},r.createElement(i.x,{size:"large",tone:"critical"},r.createElement(u.c,null,n.message),f.map((function(e,t){return r.createElement("span",{key:t},e)}))))}}])&&_(t.prototype,n),l}(r.Component);x(Z,"propTypes",{code:c().string.isRequired,children:c().node.isRequired})},19:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),o=n(7174),c=n.n(o);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){var t=e.code,n=e.scope;return c()(t,u(u(u({},{}),n),{},{React:r}))}},7397:(e,t,n)=>{"use strict";var r=n(7294),o=n(3935),c=n(8265),i=n(4478),u=n(19);function a(e){var t=e.themes,n=e.components,o=e.FrameComponent,a=(0,c.UO)((function(e){return{themeName:"string"==typeof e.themeName?e.themeName:"",code:"string"==typeof e.code?e.code:""}})),l=a.themeName,s=a.code,f="__PLAYROOM__NO_THEME__"===l?null:l,p=f?t[f]:null;return r.createElement(i.Z,{code:s},r.createElement(o,{themeName:f,theme:p},r.createElement(u.Z,{code:s,scope:n})))}var l=document.createElement("div");document.body.appendChild(l),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,c=void 0===t?n(6243):t,i=e.components,u=void 0===i?n(2151):i,s=e.FrameComponent,f=void 0===s?n(8850):s;(0,o.render)(r.createElement(a,{components:u,themes:c,FrameComponent:f}),l)}()},8850:(e,t,n)=>{var r=n(3699);e.exports=r.default||r},9311:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(1337),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".CatchErrors__root--2qJxl {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  padding: 20px;\n}\n",""]),o.locals={root:"CatchErrors__root--2qJxl"};const c=o},7174:function(e){(function(){var t={}.hasOwnProperty,n=[].slice;e.exports=function(e,r){var o,c,i,u;for(o in c=[],u=[],r)t.call(r,o)&&(i=r[o],"this"!==o&&(c.push(o),u.push(i)));return Function.apply(null,n.call(c).concat(["return eval("+JSON.stringify(e)+")"])).apply(r.this,u)}}).call(this)}},e=>{e.O(0,[528,753],(()=>(7397,e(e.s=7397)))),e.O()}]);