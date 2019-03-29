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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "settings",
    className: "closed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "material-icons",
    onClick: props.toggleShow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TypeSettings__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "break",
    val: props.breakTime,
    changeFunc: props.settingsChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TypeSettings__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "session",
    val: props.sessionTime,
    changeFunc: props.settingsChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), props.mode === 'dev' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TypeSettings__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "speed",
    val: props.speed,
    changeFunc: props.settingsChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "reset",
    onClick: props.reset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Restore Defaults"));
}

/***/ })

})
//# sourceMappingURL=index.js.0b6c2256e9f95b947af8.hot-update.js.map