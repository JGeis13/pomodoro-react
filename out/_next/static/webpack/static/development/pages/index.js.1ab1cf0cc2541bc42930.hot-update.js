webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Clock.jsx":
/*!******************************!*\
  !*** ./components/Clock.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clock; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Settings */ "./components/Settings.jsx");
/* harmony import */ var _functions_accurateInterval__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../functions/accurateInterval */ "./functions/accurateInterval.js");








var _jsxFileName = "/Users/jarickg/DevProjects/Sandbox/pomodoro-react/components/Clock.jsx";




var Clock =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Clock, _Component);

  // persist timer using local storage
  // since using Date as timer, can it keep 'running' when app is closed? 
  function Clock(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Clock);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Clock).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "tick", function () {
      var newTime = _this.state.displayTime - 1;

      _this.setState({
        displayTime: newTime
      }); // !! Handle end of timer


      if (newTime == 0) document.querySelector('#beep').play();
      if (newTime < 0) return _this.switchModes();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "switchModes", function () {
      _this.state.timer.cancel();

      var newType = _this.state.currentType == 'session' ? 'break' : 'session';

      _this.setState(function (prevState) {
        return {
          currentType: newType,
          displayTime: prevState[newType + 'Time'] * 60,
          start: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()(),
          isActive: true
        };
      }); //this.timer = setInterval(this.tick, 200);


      _this.state.timer = Object(_functions_accurateInterval__WEBPACK_IMPORTED_MODULE_10__["default"])(_this.tick, 1000);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSettingsChange", function (typeStr, operation) {
      if (_this.state.isActive) return;
      var s = _this.state.sessionTime,
          b = _this.state.breakTime;

      if (typeStr == 'session') {
        if (operation == '-') s--;else if (operation == '+') s++;
        if (s > 60 || s < 1) return;

        _this.setState({
          sessionTime: s
        });
      } else if (typeStr == 'break') {
        if (operation == '-') b--;else if (operation == '+') b++;
        if (b > 60 || b < 1) return;

        _this.setState({
          breakTime: b
        });
      }

      if (_this.state.currentType == 'session') {
        _this.setState({
          displayTime: s * 60
        });
      } else if (_this.state.currentType == 'break') {
        _this.setState({
          displayTime: b * 60
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "startStop", function (e) {
      if (_this.state.isActive) {
        document.querySelector('#start_stop i').innerText = 'play_arrow';

        _this.state.timer.cancel();

        _this.setState({
          isActive: false
        });
      } else {
        document.querySelector('#start_stop i').innerText = 'pause';

        _this.setState({
          isActive: true
        });

        _this.state.timer = Object(_functions_accurateInterval__WEBPACK_IMPORTED_MODULE_10__["default"])(_this.tick, 1000);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "reset", function () {
      if (_this.state.timer != '') _this.state.timer.cancel();

      _this.setState({
        breakTime: _this.defaultVals[0],
        sessionTime: _this.defaultVals[1],
        currentType: 'session',
        displayTime: _this.defaultVals[1] * 60,
        start: null,
        isActive: false
      });

      document.querySelector('#beep').pause();
      document.querySelector('#beep').currentTime = 0;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "restart", function () {
      _this.state.timer.cancel();

      document.querySelector('#start_stop i').innerText = 'play_arrow';

      _this.setState({
        displayTime: _this.state[_this.state.currentType + 'Time'] * 60,
        start: null,
        isActive: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "formatDisplayTime", function () {
      var mins = Math.floor(_this.state.displayTime / 60);
      var secs = _this.state.displayTime % 60;
      if (mins < 10) mins = '0' + mins.toString();
      if (secs < 10) secs = '0' + secs.toString();
      return mins + ':' + secs;
    });

    _this.defaultVals = [5, 25];
    _this.state = {
      breakTime: _this.defaultVals[0],
      sessionTime: _this.defaultVals[1],
      currentType: 'session',
      displayTime: _this.defaultVals[1] * 60,
      start: null,
      timer: '',
      isActive: false
    };
    return _this;
  } // Lifecycle Hooks


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {//this.timer = setInterval(this.tick, 200);
    }
  }, {
    key: "componentWillUnmout",
    value: function componentWillUnmout() {
      this.state.timer.cancel();
    }
  }, {
    key: "toggleSettings",
    value: function toggleSettings(e) {
      var btn = e.target;
      var bool = btn.parentNode.classList.toggle('closed');

      if (bool) {
        btn.style.transform = 'translateX(-311px) rotate(360deg)';
        btn.innerText = 'settings';
        btn.style.color = 'var(--secondary-color)';
      } else {
        btn.style.transform = 'translateX(0px) rotate(0deg)';
        btn.innerText = 'clear';
        btn.style.color = 'var(--tertiary-color)';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "clock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Pomodoro Clock"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Settings__WEBPACK_IMPORTED_MODULE_9__["default"], {
        breakTime: this.state.breakTime,
        sessionTime: this.state.sessionTime,
        settingsChange: this.handleSettingsChange,
        reset: this.reset,
        toggleShow: this.toggleSettings,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "circleDisplay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        id: "timer-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, this.state.currentType), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        id: "time-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, this.formatDisplayTime()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        id: "beep",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "https://soundbible.com/mp3/Electronic_Chime-KevanGC-495939803.mp3",
        type: "audio/mpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn",
        onClick: this.restart,
        id: "restart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "replay")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-main",
        onClick: this.startStop,
        id: "start_stop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "play_arrow")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn",
        onClick: this.getInfo,
        id: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "info"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "credits",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Created by Jarick Geiselmayr"));
    }
  }]);

  return Clock;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=index.js.1ab1cf0cc2541bc42930.hot-update.js.map