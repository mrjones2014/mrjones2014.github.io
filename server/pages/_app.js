module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "3GCz":
/***/ (function(module, exports) {

module.exports = require("@blueprintjs/icons");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "T76q":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainNav__brand": "main-nav_mainNav__brand__3s1vy",
	"mainNav__socialLinks": "main-nav_mainNav__socialLinks__3vhxc",
	"mainNav__socialMenu": "main-nav_mainNav__socialMenu__3rM8Q",
	"mainNav__themeSwitcher": "main-nav_mainNav__themeSwitcher__3V8yT"
};


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UxkJ":
/***/ (function(module, exports) {

module.exports = require("@icons-pack/react-simple-icons");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ _app_App; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "@blueprintjs/core"
var core_ = __webpack_require__("ozu2");

// EXTERNAL MODULE: external "@blueprintjs/icons"
var icons_ = __webpack_require__("3GCz");

// EXTERNAL MODULE: ./components/03-organisms/social-links/social-link-buttons.tsx
var social_link_buttons = __webpack_require__("vFZ6");

// EXTERNAL MODULE: ./data/social-links.tsx
var social_links = __webpack_require__("d+DL");

// CONCATENATED MODULE: ./components/03-organisms/social-links/social-link-menu.tsx





const menuItems = social_links["a" /* SocialLinks */].map(link => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["MenuItem"], {
  icon: link.icon,
  href: link.href,
  target: link.external === true ? "_blank" : undefined,
  rel: link.external === true ? "noopener noreferrer" : undefined,
  text: link.text
}));

const menu = /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Menu"], {
  "aria-label": "menu",
  children: menuItems
});

const SocialLinkMenu = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Popover"], {
  minimal: true,
  content: menu,
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
    icon: icons_["IconNames"].MENU
  })
});
// EXTERNAL MODULE: ./components/02-molecules/main-nav/main-nav.module.scss
var main_nav_module = __webpack_require__("T76q");
var main_nav_module_default = /*#__PURE__*/__webpack_require__.n(main_nav_module);

// CONCATENATED MODULE: ./components/02-molecules/main-nav/main-nav.tsx








const MainNav = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Navbar"], {
  fixedToTop: true,
  className: main_nav_module_default.a.mainNav,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["NavbarGroup"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["NavbarHeading"], {
      className: main_nav_module_default.a.mainNav__brand,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Icon"], {
        icon: icons_["IconNames"].CONSOLE
      }), "mjones.network"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["NavbarDivider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: main_nav_module_default.a.mainNav__socialLinks,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(social_link_buttons["a" /* SocialLinkButtons */], {
        minimal: true,
        showIcons: false
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: main_nav_module_default.a.mainNav__socialMenu,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialLinkMenu, {})
    })]
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["NavbarGroup"], {
    align: core_["Alignment"].RIGHT,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Switch"], {
      className: main_nav_module_default.a.mainNav__themeSwitcher,
      alignIndicator: core_["Alignment"].RIGHT,
      label: "Theme",
      innerLabel: "Light",
      innerLabelChecked: "Dark",
      checked: props.useDarkTheme,
      onChange: props.onThemeToggled
    })
  })]
});
// CONCATENATED MODULE: ./hooks/utils/use-window-size.ts

function useWindowSize() {
  const {
    0: width,
    1: setWidth
  } = Object(external_react_["useState"])(getOrDefault(() => window.innerWidth));
  const {
    0: height,
    1: setHeight
  } = Object(external_react_["useState"])(getOrDefault(() => window.innerHeight));
  Object(external_react_["useEffect"])(() => {
    const handler = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return {
    width,
    height
  };
}

const getOrDefault = callback => {
  try {
    return callback();
  } catch (ignored) {
    return 0;
  }
};
// CONCATENATED MODULE: ./utils/browser-utils.ts
// prettier-ignore
// @ts-ignore
const isSafari = () => /constructor/i.test(window.HTMLElement) || function (p) {
  return p.toString() === "[object SafariRemoteNotification]";
}(!window['safari'] || typeof safari !== 'undefined' && window['safari'].pushNotification);

const BrowserUtils = {
  isSafari
};
// CONCATENATED MODULE: ./hooks/utils/use-safari-vh-workaround.ts



function useSafariVhWorkaround() {
  const {
    height
  } = useWindowSize();
  Object(external_react_["useEffect"])(() => {
    if (!BrowserUtils.isSafari()) return;
    document.documentElement.style.setProperty("--vh", `${height * 0.01}px`);
  }, [height]);
}
// EXTERNAL MODULE: ./components/04-templates/main-layout.module.scss
var main_layout_module = __webpack_require__("oGSU");
var main_layout_module_default = /*#__PURE__*/__webpack_require__.n(main_layout_module);

// CONCATENATED MODULE: ./components/04-templates/main-layout.tsx







const MainLayout = props => {
  useSafariVhWorkaround();
  Object(external_react_["useEffect"])(() => {
    core_["FocusStyleManager"].onlyShowFocusOnTabs();
  }, []);
  const {
    0: useDarkTheme,
    1: setUseDarkTheme
  } = Object(external_react_["useState"])(true);

  const toggleDarkTheme = () => setUseDarkTheme(prevState => !prevState);

  const classNames = [main_layout_module_default.a.mainLayout];

  if (useDarkTheme) {
    classNames.push("bp3-dark");
    classNames.push(main_layout_module_default.a.dark);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: classNames.join(" "),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MainNav, {
      useDarkTheme: useDarkTheme,
      onThemeToggled: toggleDarkTheme
    }), props.children]
  });
};
// EXTERNAL MODULE: ./pages/_app.scss
var _app = __webpack_require__("gWIg");

// CONCATENATED MODULE: ./pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class _app_App extends app_default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainLayout, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    });
  }

}

/***/ }),

/***/ "d+DL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialLinks; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3GCz");
/* harmony import */ var _blueprintjs_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_pack_react_simple_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UxkJ");
/* harmony import */ var _icons_pack_react_simple_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_pack_react_simple_icons__WEBPACK_IMPORTED_MODULE_2__);




const wrapIcon = IconComponent => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
  className: "bp3-icon",
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(IconComponent, {
    width: 16,
    height: 16
  })
});

const SocialLinks = [{
  external: true,
  href: "https://mjones44.medium.com/",
  text: "Blog",
  icon: wrapIcon(_icons_pack_react_simple_icons__WEBPACK_IMPORTED_MODULE_2__["Medium"])
}, {
  external: true,
  href: "https://github.com/mrjones2014",
  text: "GitHub",
  icon: wrapIcon(_icons_pack_react_simple_icons__WEBPACK_IMPORTED_MODULE_2__["Github"])
}, {
  external: true,
  href: "https://t.me/mjones44",
  text: "Telegram",
  icon: wrapIcon(_icons_pack_react_simple_icons__WEBPACK_IMPORTED_MODULE_2__["Telegram"])
}, {
  href: "mailto:mat@mjones.network",
  text: "Email",
  icon: _blueprintjs_icons__WEBPACK_IMPORTED_MODULE_1__["IconNames"].ENVELOPE
}, {
  external: true,
  href: "https://www.linkedin.com/in/mjones44/",
  text: "LinkedIn",
  icon: wrapIcon(_icons_pack_react_simple_icons__WEBPACK_IMPORTED_MODULE_2__["Linkedin"])
}];

/***/ }),

/***/ "gWIg":
/***/ (function(module, exports) {



/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "oGSU":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainLayout": "main-layout_mainLayout__h-Q1y",
	"dark": "main-layout_dark__MFc-H"
};


/***/ }),

/***/ "ozu2":
/***/ (function(module, exports) {

module.exports = require("@blueprintjs/core");

/***/ }),

/***/ "vFZ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialLinkButtons; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ozu2");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var data_social_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d+DL");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const SocialLinkButtons = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
  children: data_social_links__WEBPACK_IMPORTED_MODULE_2__[/* SocialLinks */ "a"].map(link => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["AnchorButton"], {
    minimal: props.minimal,
    target: link.external === true ? "_blank" : undefined,
    rel: link.external === true ? "noopener noreferrer" : undefined,
    href: link.href,
    icon: props.showIcons !== false ? link.icon : undefined,
    children: link.text
  }, link.href))
});

/***/ })

/******/ });