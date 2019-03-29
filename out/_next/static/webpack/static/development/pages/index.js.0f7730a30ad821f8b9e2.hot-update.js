webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ModalButton.jsx":
/*!************************************!*\
  !*** ./components/ModalButton.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jarickg/DevProjects/Sandbox/pomodoro-react/components/ModalButton.jsx";

function ModalButton() {
  var mo = document.getElementById('modal');

  var openModal = function openModal() {
    mo.style.display = 'block';
  };

  var closeModal = function closeModal() {
    mo.style.display = 'none';
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    onClick: openModal,
    id: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "info"));
}

/***/ })

})
//# sourceMappingURL=index.js.0f7730a30ad821f8b9e2.hot-update.js.map