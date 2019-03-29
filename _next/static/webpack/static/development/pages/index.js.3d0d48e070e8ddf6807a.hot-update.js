webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TypeSettings.jsx":
/*!*************************************!*\
  !*** ./components/TypeSettings.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TypeSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jarickg/DevProjects/Sandbox/pomodoro-react/components/TypeSettings.jsx";

function TypeSettings(props) {
  var label = props.type == 'speed' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    id: props.type + '-label',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.type) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    id: props.type + '-label',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.type + ' length');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "type-settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    id: props.type + '-label',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.type + ' length'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inc-dec",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "btn",
    onClick: function onClick(e) {
      return props.changeFunc(props.type, '-');
    },
    type: "button",
    id: props.type + '-decrement',
    value: "-",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: props.type + '-length',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.val), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "btn",
    onClick: function onClick(e) {
      return props.changeFunc(props.type, '+');
    },
    type: "button",
    id: props.type + '-increment',
    value: "+",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.3d0d48e070e8ddf6807a.hot-update.js.map