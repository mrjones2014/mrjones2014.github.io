_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"20a2":function(e,t,n){e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var _=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,s=_.length;i<s;i++){var u=_[i];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=a.props[u],f=r[u]||new Set;f.has(l)?o=!1:(f.add(l),r[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function d(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}d.rewind=function(){};var m=d;t.default=m},B5Ud:function(e,t,n){"use strict";var r=n("o0o1"),a=n("lwsE"),o=n("W8MJ"),c=n("7W2i"),i=n("a1gu"),s=n("Nsbk"),u=n("yXPU");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var f=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=v,t.default=void 0;var _=f(n("q1tI")),p=n("g/15");function d(e){return m.apply(this,arguments)}function m(){return(m=u(r.mark((function e(t){var n,a,o;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,a=t.ctx,e.next=3,(0,p.loadGetInitialProps)(n,a);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=p.AppInitialProps,t.NextWebVitalsMetric=p.NextWebVitalsMetric;var h=function(e){c(n,e);var t=l(n);function n(){return a(this,n),t.apply(this,arguments)}return o(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=e.__N_SSG,o=e.__N_SSP;return _.default.createElement(n,Object.assign({},r,a||o?{}:{url:v(t)}))}}]),n}(_.default.Component);function v(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",a=n||t;return e.push(r,a)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",a=n||t;return e.replace(r,a)}}}t.default=h,h.origGetInitialProps=d,h.getInitialProps=d},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},F5fk:function(e,t,n){"use strict";var r=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("defs",null,r.createElement("path",{d:"M12 160c0 66.274 53.726 120 120 120s120-53.726 120-120h12V0H0v160h12z",id:"avatar_svg__c"}),r.createElement("path",{d:"M124 144.611V163h4c39.765 0 72 32.235 72 72v9H0v-9c0-39.765 32.235-72 72-72h4v-18.389c-17.237-8.189-29.628-24.924-31.695-44.73C38.48 99.058 34 94.052 34 88V74c0-5.946 4.325-10.882 10-11.834V56c0-30.928 25.072-56 56-56s56 25.072 56 56v6.166c5.675.952 10 5.888 10 11.834v14c0 6.052-4.48 11.058-10.305 11.881-2.067 19.806-14.458 36.541-31.695 44.73z",id:"avatar_svg__e"}),r.createElement("circle",{id:"avatar_svg__a",cx:120,cy:120,r:120})),c=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("g",{transform:"translate(12 40)"},r.createElement("mask",{id:"avatar_svg__b",fill:"#fff"},r.createElement("use",{xlinkHref:"#avatar_svg__a"})),r.createElement("use",{fill:"#E6E6E6",xlinkHref:"#avatar_svg__a"}),r.createElement("g",{mask:"url(#avatar_svg__b)",fill:"#65C9FF"},r.createElement("path",{d:"M0 0h240v240H0z"}))),r.createElement("mask",{id:"avatar_svg__d",fill:"#fff"},r.createElement("use",{xlinkHref:"#avatar_svg__c"})),r.createElement("g",{mask:"url(#avatar_svg__d)"},r.createElement("g",{transform:"translate(32 36)"},r.createElement("mask",{id:"avatar_svg__f",fill:"#fff"},r.createElement("use",{xlinkHref:"#avatar_svg__e"})),r.createElement("use",{fill:"#D0C6AC",xlinkHref:"#avatar_svg__e"}),r.createElement("g",{mask:"url(#avatar_svg__f)",fill:"#EDB98A"},r.createElement("path",{d:"M0 0h264v280H0z"})),r.createElement("path",{d:"M156 79v23c0 30.928-25.072 56-56 56s-56-25.072-56-56V79v15c0 30.928 25.072 56 56 56s56-25.072 56-56V79z",fillOpacity:.1,fill:"#000",mask:"url(#avatar_svg__f)"})),r.createElement("g",{transform:"translate(0 170)"},r.createElement("defs",null,r.createElement("path",{d:"M108 13.07c-17.919 2.006-31.72 7.482-31.996 21.575C50.146 45.568 32 71.165 32 100.999V110h200v-9c0-29.835-18.146-55.432-44.004-66.355-.276-14.093-14.077-19.57-31.996-21.574V32c0 13.255-10.745 24-24 24s-24-10.745-24-24V13.07z",id:"avatar_svg__g"})),r.createElement("mask",{id:"avatar_svg__h",fill:"#fff"},r.createElement("use",{xlinkHref:"#avatar_svg__g"})),r.createElement("use",{fill:"#B7C1DB",xlinkHref:"#avatar_svg__g"}),r.createElement("g",{mask:"url(#avatar_svg__h)",fill:"#262E33"},r.createElement("path",{d:"M0 0h264v110H0z"})),r.createElement("path",{d:"M102 61.74V110h-7V58.15a64.54 64.54 0 007 3.59zm67-3.59V98.5a3.5 3.5 0 11-7 0V61.74a64.54 64.54 0 007-3.59z",fill:"#F4F4F4",mask:"url(#avatar_svg__h)"}),r.createElement("path",{d:"M90.96 12.724C75.91 15.571 65.5 21.243 65.5 32.308 65.5 52.02 98.538 68 132 68s66.5-15.98 66.5-35.692c0-11.065-10.41-16.737-25.46-19.584 9.085 3.35 14.96 8.982 14.96 18.353C188 51.469 160.179 68 132 68S76 51.469 76 31.077c0-9.37 5.875-15.003 14.96-18.353z",fillOpacity:.16,fill:"#000",mask:"url(#avatar_svg__h)"})),r.createElement("g",{fill:"#000"},r.createElement("rect",{x:42,y:18,width:24,height:6,rx:3,transform:"translate(78 134)",fillOpacity:.7}),r.createElement("path",{d:"M120 130c0 4.418 5.373 8 12 8s12-3.582 12-8",fillOpacity:.16}),r.createElement("g",{transform:"translate(76 90)",fillOpacity:.6},r.createElement("circle",{cx:30,cy:22,r:6}),r.createElement("circle",{cx:82,cy:22,r:6})),r.createElement("g",{fillRule:"nonzero",fillOpacity:.6},r.createElement("path",{d:"M91.63 99.159c3.915-5.51 14.648-8.598 23.893-6.328a2 2 0 00.954-3.884c-10.737-2.637-23.165.94-28.107 7.894a2 2 0 003.26 2.318zM172.37 99.159c-3.915-5.51-14.648-8.598-23.893-6.328a2 2 0 01-.954-3.884c10.737-2.637 23.165.94 28.108 7.894a2 2 0 01-3.26 2.318z"}))),r.createElement("defs",null,r.createElement("path",{id:"avatar_svg__i",d:"M0 0h264v280H0z"}),r.createElement("path",{d:"M94.252 52.022c.123-.054-.182-.075-.916-.062.892-.002 1.197.019.916.062m-8.135-15.72c-.002-.02.017.15 0 0m107.648 34.464c-.264-3.317-.732-6.614-1.518-9.855-.625-2.576-1.478-5.033-2.487-7.491-.61-1.485-2.032-3.524-2.2-5.126-.165-1.577 1.067-3.325 1.33-5.162a15.981 15.981 0 00-.156-5.438c-.833-4.023-3.594-7.764-7.857-8.813-.952-.234-2.964.055-3.636-.5-.771-.635-1.308-2.8-2.006-3.669-1.99-2.476-5.095-4.07-8.37-3.514-2.41.409-1.026.907-2.833-.512-1.005-.788-1.756-1.993-2.732-2.847-1.467-1.283-3.15-2.38-4.892-3.282-4.557-2.358-9.754-4.072-14.844-4.908-9.285-1.524-19.195-.195-28.195 2.22-4.479 1.201-8.987 2.726-13.147 4.743-1.783.864-2.813 1.582-4.673 1.808-2.928.357-5.409.339-8.183 1.581-8.536 3.822-12.381 12.689-9.06 21.174a14.64 14.64 0 002.82 4.584c1.521 1.68 2.072 1.35.762 3.282a52.787 52.787 0 00-4.955 9.172c-3.529 8.402-4.12 17.864-3.89 26.824.081 3.137.216 6.313.71 9.42.214 1.344.274 3.872 1.282 4.87.512.506 1.241.788 1.969.587 1.71-.474 1.121-1.735 1.161-2.906.2-5.884-.07-11.089 1.33-16.902 1.033-4.294 2.755-8.195 4.988-12.035 2.838-4.884 5.903-9.173 9.807-13.355.917-.984 1.118-1.4 2.349-1.472.932-.054 2.295.584 3.2.805 1.999.487 4 .968 6.034 1.296 3.74.603 7.444.644 11.217.525 7.426-.232 14.885-.753 22.085-2.623 4.782-1.242 9.022-3.47 13.602-5.105.082-.029 1.23-.847 1.43-.814.282.047 1.978 1.826 2.264 2.05 2.226 1.746 4.667 2.479 7.07 3.83 2.964 1.667.094-.718 1.728 1.359.477.605.72 1.726 1.103 2.411a18.08 18.08 0 004.93 5.624c1.956 1.47 4.894 2.18 5.891 4.095.769 1.477 1.028 3.484 1.648 5.06 1.628 4.136 3.777 7.992 5.926 11.887 1.732 3.14 3.625 5.881 3.818 9.468.067 1.248-1.121 8.737 1.773 6.46.429-.338 1.353-4.156 1.543-4.804.772-2.633 1.046-5.381 1.395-8.086.694-5.38.923-10.498.47-15.916",id:"avatar_svg__k"})),r.createElement("mask",{id:"avatar_svg__j",fill:"#fff"},r.createElement("use",{xlinkHref:"#avatar_svg__i"})),r.createElement("g",{mask:"url(#avatar_svg__j)"},r.createElement("g",{transform:"translate(-1)"},r.createElement("mask",{id:"avatar_svg__l",fill:"#fff"},r.createElement("use",{xlinkHref:"#avatar_svg__k"})),r.createElement("use",{fill:"#28354B",xlinkHref:"#avatar_svg__k"}),r.createElement("g",{mask:"url(#avatar_svg__l)",fill:"#4A312C"},r.createElement("path",{d:"M0 0h264v280H0z"})),r.createElement("g",{transform:"translate(62 85)"},r.createElement("defs",null,r.createElement("filter",{x:"-.8%",y:"-2.4%",width:"101.5%",height:"109.8%",filterUnits:"objectBoundingBox",id:"avatar_svg__m"},r.createElement("feOffset",{dy:2,in:"SourceAlpha",result:"shadowOffsetOuter1"}),r.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0",in:"shadowOffsetOuter1",result:"shadowMatrixOuter1"}),r.createElement("feMerge",null,r.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),r.createElement("feMergeNode",{in:"SourceGraphic"})))),r.createElement("g",{filter:"url(#avatar_svg__m)",transform:"translate(8 8)",fill:"#D6EAF2"},r.createElement("path",{d:"M46.25 7.275c2.37.022 3.492.417 3.896 2.89.41 2.506.011 5.322-.46 7.79-.721 3.768-1.92 7.46-4.708 10.214-1.47 1.45-3.261 2.606-5.167 3.395-1.012.42-2.081.722-3.15.952-.312.067-2.979.434-1.343.248-3.817.435-7.958.418-11.146-2.012-3.532-2.692-5.952-6.952-7.015-11.196-.623-2.483-1.93-8.422.459-10.407 2.737-2.274 28.633-1.874 28.633-1.874zM22.217.49c-5.44.188-9.071 1.144-11.755 6.58-4.917 9.96 3.5 24.899 12.89 28.97 10.976 4.76 23.24-.508 29.043-10.034 3.073-5.044 4.626-12.683 4.526-18.502C56.795.077 51.607-.13 45.51.034L22.218.49zM79.68 7.273c-2.371.022-3.492.416-3.896 2.89-.41 2.505-.012 5.322.46 7.79.72 3.767 1.919 7.459 4.708 10.213 1.47 1.45 3.261 2.606 5.167 3.396 1.012.419 2.08.722 3.15.951.312.067 2.978.435 1.343.248 3.817.436 7.958.418 11.145-2.011 3.533-2.692 5.952-6.952 7.016-11.196.623-2.483 1.93-8.422-.46-10.407-2.737-2.275-28.632-1.874-28.632-1.874zM103.713.488c5.44.187 9.071 1.144 11.754 6.579 4.918 9.96-3.5 24.9-12.889 28.97-10.977 4.76-23.24-.508-29.043-10.033C70.46 20.96 68.907 13.32 69.007 7.5 69.135.074 74.323-.132 80.42.031l23.29.457z"}),r.createElement("path",{d:"M13.197 4.927c-3.412.191-7.31.237-10.507 1.712-3.385 1.562-3.908 5.1.36 5.587 1.92.22 3.845-.143 5.737-.481 1.55-.277 3.655-.187 5.12-.78 2.729-1.103 2.553-6.225-.71-6.038M112.735 4.927c3.412.191 7.31.237 10.507 1.712 3.384 1.562 3.907 5.1-.36 5.587-1.921.22-3.845-.143-5.738-.481-1.55-.277-3.654-.187-5.119-.78-2.73-1.103-2.554-6.225.71-6.038M73.11 7.013c-1.947-2.3-7.019-3.628-10.219-3.628-3.2 0-8.123 1.328-10.069 3.628-.981 1.16-1.015 2.711.686 3.438 2.118.906 4.01-.737 5.705-1.596 2.168-1.098 5.499-.978 7.506 0 1.708.833 3.586 2.502 5.704 1.596 1.701-.727 1.668-2.279.686-3.438"})))))));t.a=function(e){return r.createElement("svg",a({width:264,height:280,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),o,c)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"Ok/o":function(e,t,n){e.exports={mainLayout:"main-layout_mainLayout__1S1wN",mainLayout__content:"main-layout_mainLayout__content__1Jcm6",mainLayout__content__inner:"main-layout_mainLayout__content__inner__39EEF"}},Q2mU:function(e,t,n){e.exports={navLinkMenu__themeSwitcher:"nav-link-menu_navLinkMenu__themeSwitcher__eI_5Y","bp3-control-indicator":"nav-link-menu_bp3-control-indicator__1RtRp"}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},T76q:function(e,t,n){e.exports={mainNav:"main-nav_mainNav__2jevg",mainNav__left:"main-nav_mainNav__left__2jcQ_",mainNav__left__brand:"main-nav_mainNav__left__brand__2SqSx",mainNav__left__brand__container:"main-nav_mainNav__left__brand__container__1SKWr",mainNav__left__brand__container__text:"main-nav_mainNav__left__brand__container__text__EScH5",mainNav__left__navLinks:"main-nav_mainNav__left__navLinks__2WRVf",mainNav__left__navLinks__links:"main-nav_mainNav__left__navLinks__links__19Sb2",mainNav__left__navLinks__menu:"main-nav_mainNav__left__navLinks__menu__2e9En",mainNav__themeSwitcher:"main-nav_mainNav__themeSwitcher__3V8yT"}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if((0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),_=f.href,p=f.as,d=e.children,m=e.replace,h=e.shallow,v=e.scroll,b=e.locale;"string"===typeof d&&(d=o.default.createElement("a",null,d));var g=o.Children.only(d),y=g&&"object"===typeof g&&g.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),O=r(j,2),x=O[0],w=O[1],E=o.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,o.useEffect)((function(){var e=w&&t&&(0,c.isLocalURL)(_),r="undefined"!==typeof b?b:n&&n.locale,a=u[_+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,_,p,{locale:r})}),[p,_,w,b,t,n]);var k={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,_,p,m,h,v,b)},onMouseEnter:function(e){(0,c.isLocalURL)(_)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,_,p,{priority:!0}))}};return(e.passHref||"a"===g.type&&!("href"in g.props))&&(k.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof b?b:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(g,k)};t.default=f},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return te}));var r=n("rePB");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=n("nKUr"),f=n("q1tI"),_=n.n(f),p=n("8Bbg"),d=n.n(p),m=n("xggJ"),h=n("d3yt"),v=n("btUI"),b=[{href:"/about",text:"About"},{href:"/blog",text:"Blog"},{href:"/contact",text:"Contact Me"}],g=n("YFqc"),y=n.n(g),j=n("20a2"),O=n("yw6m"),x=n.n(O),w=function(e){var t=e.className,n=Object(j.useRouter)();return Object(l.jsx)(_.a.Fragment,{children:b.map((function(e){return!0!==e.external?Object(l.jsx)(y.a,{href:e.href,passHref:!0,children:Object(l.jsx)(h.a,{"aria-label":e.text,className:"".concat(x.a.navLinkButtons__button," ").concat(null!==t&&void 0!==t?t:""),active:n.route.startsWith(e.href),minimal:!0,children:e.text})},e.href):Object(l.jsx)(h.a,{minimal:!0,href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.text},e.href)}))})},E=n("Sx2L"),k=n("Q2mU"),M=n.n(k);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){return Object(l.jsxs)(_.a.Fragment,{children:[b.map((function(e){return!0!==e.external?Object(l.jsx)(y.a,{href:e.href,passHref:!0,children:Object(l.jsx)(h.n,{text:e.text},e.href)},e.href):Object(l.jsx)(h.n,{href:e.href,target:"_blank",rel:"noopener noreferrer",text:e.text},e.href)})),Object(l.jsx)(h.m,{}),Object(l.jsx)(h.n,{title:"Theme",text:Object(l.jsx)("div",{className:M.a.navLinkMenu__themeSwitcher,children:Object(l.jsx)(h.t,{alignIndicator:v.a.RIGHT,label:"Theme",innerLabel:"Light",innerLabelChecked:"Dark",checked:e.darkTheme,onChange:e.onThemeToggled})})})]})},L=function(e){return Object(l.jsx)(h.l,{"aria-label":"menu",children:Object(l.jsx)(S,P({},e))})},C=function(e){return Object(l.jsx)(h.s,{className:e.className,minimal:!0,content:Object(l.jsx)(L,P({},e)),children:Object(l.jsx)(h.b,{icon:E.a.MENU})})},T=n("F5fk"),H=n("T76q"),R=n.n(H),I=function(e){return Object(l.jsxs)(h.o,{fixedToTop:!0,className:R.a.mainNav,children:[Object(l.jsxs)(h.q,{className:R.a.mainNav__left,children:[Object(l.jsx)(h.r,{className:R.a.mainNav__left__brand,children:Object(l.jsx)(y.a,{href:"/",passHref:!0,children:Object(l.jsx)(h.a,{"aria-label":"Home",minimal:!0,children:Object(l.jsxs)("div",{className:R.a.mainNav__left__brand__container,children:[Object(l.jsx)(T.a,{width:"32",height:"32",viewBox:"0 0 264 280"}),Object(l.jsx)("span",{className:R.a.mainNav__left__brand__container__text,children:"mjones.network"})]})})})}),Object(l.jsx)(h.p,{}),Object(l.jsxs)("div",{className:R.a.mainNav__left__navLinks,children:[Object(l.jsx)(w,{className:R.a.mainNav__left__navLinks__links}),Object(l.jsx)(C,{className:R.a.mainNav__left__navLinks__menu,darkTheme:e.darkTheme,onThemeToggled:e.onThemeToggled})]})]}),Object(l.jsx)(h.q,{align:v.a.RIGHT,children:Object(l.jsx)(h.t,{className:R.a.mainNav__themeSwitcher,alignIndicator:v.a.RIGHT,label:"Theme",innerLabel:"Light",innerLabelChecked:"Dark",checked:e.darkTheme,onChange:e.onThemeToggled})})]})},D=n("Ok/o"),A=n.n(D),F=n("xHtZ"),q=n.n(F),z=function(){var e="January 21, 2021 at 9:02 PM EST";return Object(l.jsx)(h.o,{className:q.a.appFooter,children:Object(l.jsxs)("div",{className:q.a.appFooter__content,children:[Object(l.jsxs)("p",{children:["\xa9 ",new Date(Date.now()).getFullYear()," M. Jones Software Systems, LLC."]}),e.length>0&&Object(l.jsxs)("p",{children:["Last build: ",e]})]})})},B=n("0Cba"),V=function(){function e(e,t){var n=this;this.container=e,this.className=t,this.isRunning=!1,this.handleKeyDown=function(e){9===e.which&&(n.reset(),n.container.addEventListener("mousedown",n.handleMouseDown))},this.handleMouseDown=function(){n.reset(),n.container.classList.add(n.className),n.container.addEventListener("keydown",n.handleKeyDown)}}return e.prototype.isActive=function(){return this.isRunning},e.prototype.start=function(){this.container.addEventListener("mousedown",this.handleMouseDown),this.isRunning=!0},e.prototype.stop=function(){this.reset(),this.isRunning=!1},e.prototype.reset=function(){this.container.classList.remove(this.className),this.container.removeEventListener("keydown",this.handleKeyDown),this.container.removeEventListener("mousedown",this.handleMouseDown)},e}(),U="undefined"!==typeof document?new V(document.documentElement,B.FOCUS_DISABLED):{isActive:function(){return!0},start:function(){return!0},stop:function(){return!0}},W=function(){return U.start()};var J=function(e){try{return e()}catch(t){return 0}};function K(){var e=function(){var e=Object(f.useState)(J((function(){return window.innerWidth}))),t=e[0],n=e[1],r=Object(f.useState)(J((function(){return window.innerHeight}))),a=r[0],o=r[1];return Object(f.useEffect)((function(){var e=function(){n(window.innerWidth),o(window.innerHeight)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:t,height:a}}().height;Object(f.useEffect)((function(){document.documentElement.style.setProperty("--vh","".concat(.01*e,"px"))}),[e])}var G=function(){try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch(e){return!0}},Y=function(e){var t=function(){var e=Object(j.useRouter)(),t=Object(f.useState)(!0),n=t[0],r=t[1],a=Object(f.useRef)(null);return K(),Object(f.useEffect)((function(){W(),r(G())}),[]),Object(f.useEffect)((function(){null!=a.current&&(a.current.scrollTop=0)}),[e.pathname]),{darkTheme:n,toggleDarkTheme:function(){return r((function(e){return!e}))},contentRef:a}}(),n=t.darkTheme,r=t.toggleDarkTheme,a=t.contentRef;return Object(l.jsx)(_.a.Fragment,{children:Object(l.jsxs)("div",{className:"".concat(A.a.mainLayout," ").concat(n?m.a.DARK:""),children:[Object(l.jsx)(I,{darkTheme:n,onThemeToggled:r}),Object(l.jsxs)("div",{className:A.a.mainLayout__content,ref:a,children:[Object(l.jsx)("div",{className:A.a.mainLayout__content__inner,children:e.children}),Object(l.jsx)(z,{})]})]})})},X=n("g4pe"),Z=n.n(X);n("gWIg");function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ee(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}var te=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,r,i=ee(s);function s(){return a(this,s),i.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return Object(l.jsxs)(_.a.Fragment,{children:[Object(l.jsx)(Z.a,{children:Object(l.jsx)("title",{children:"mjones.network"})}),Object(l.jsx)(Y,{children:Object(l.jsx)(t,$({},n))})]})}}])&&o(t.prototype,n),r&&o(t,r),s}(d.a)},g4pe:function(e,t,n){e.exports=n("8Kt/")},gWIg:function(e,t,n){},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],_=l[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){o.unobserve(e),0===c.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&_(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){i||f||(0,c.default)((function(){return _(!0)}))}),[f]),[p,f]};var o=n("q1tI"),c=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map},xHtZ:function(e,t,n){e.exports={appFooter:"app-footer_appFooter__41J6R",appFooter__content:"app-footer_appFooter__content__hroa8"}},yw6m:function(e,t,n){e.exports={navLinkButtons__button:"nav-link-buttons_navLinkButtons__button__UwOsL"}}},[[0,0,1,2,6,3,4,5]]]);