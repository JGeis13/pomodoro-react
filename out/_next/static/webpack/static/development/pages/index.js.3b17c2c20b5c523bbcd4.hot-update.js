webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Settings.jsx":
/*!*********************************!*\
  !*** ./components/Settings.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TypeSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypeSettings */ "./components/TypeSettings.jsx");
var _jsxFileName = "/Users/jarickg/DevProjects/Sandbox/pomodoro-react/components/Settings.jsx";


function Settings(props) {
  console.log(props.devMode);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "settings",
    className: "closed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "material-icons",
    onClick: props.toggleShow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TypeSettings__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "break",
    val: props.breakTime,
    changeFunc: props.settingsChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TypeSettings__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "session",
    val: props.sessionTime,
    changeFunc: props.settingsChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), props.devMode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TypeSettings__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "speed",
    val: props.speed,
    changeFunc: props.settingsChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "reset",
    onClick: props.reset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Restore Defaults"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "dev-mode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Dev Mode"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "dev-mode",
    type: "checkbox",
    onChange: props.toggleMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.3b17c2c20b5c523bbcd4.hot-update.js.map