/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function Watch(el, view, signals) {
        _classCallCheck(this, Watch);

        this.createTime = new Date().getTime();
        this.el = el;
        this.view = view;
        for (var i = 0; i < signals.length; i++) {
            signals[i].on(this);
        }
    }

    _createClass(Watch, [{
        key: "endWith",
        value: function endWith(str, sfx) {
            return str.indexOf(sfx) === str.length - sfx.length;
        }
    }, {
        key: "startWith",
        value: function startWith(str, pfx) {
            return str.indexOf(pfx) === 0;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            if (this.listenedProperty.indexOf("(") !== -1 && this.listenedProperty.indexOf(")") !== -1) {
                return eval("this.view." + this.listenedProperty);
            } else {
                return this.view.get(this.listenedProperty);
            }
        }
    }]);

    return Watch;
}();

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WatchHandler = __webpack_require__(4);
function compileEL(el, view, signals) {
    for (var att, i = 0, atts = el.attributes, n = atts.length; i < n; i++) {
        att = atts[i];
        var name = att.nodeName;
        var value = att.nodeValue;
        if (name.indexOf("w-") !== 0) {
            continue;
        }
        var Handler = WatchHandler[name];
        if (!Handler) {
            return;
        }
        new Handler(el, value, view, signals);
    }
}
module.exports = function compile(el, view, signals, shouldClearSignal) {
    if (!(signals instanceof Array)) {
        signals = [signals];
    }
    if (shouldClearSignal) {
        signals.forEach(function (signal) {
            signal.clean();
        });
    }
    var s = [el];
    while (s.length) {
        var cel = s.shift();
        compileEL(cel, view, signals);
        if (cel.children.length) {
            for (var i = 0; i < cel.children.length; i++) {
                s.push(cel.children[i]);
            }
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "w-style": __webpack_require__(16),
    "w-class": __webpack_require__(14),
    "w-attr": __webpack_require__(13),
    "w-html": __webpack_require__(15),
    "w-text": __webpack_require__(17),
    "w-value": __webpack_require__(18)
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function WatchSignal(delay, bypassThreshold) {
        _classCallCheck(this, WatchSignal);

        this.delay = isNaN(delay) ? 10 : delay;
        this.bypassThreshold = isNaN(bypassThreshold) ? 10 : bypassThreshold;
        this.bypassCount = 0;
        this.watches = [];
    }

    _createClass(WatchSignal, [{
        key: "on",
        value: function on(watcher) {
            this.watches.push(watcher);
        }
    }, {
        key: "un",
        value: function un(watcher) {
            for (var i = this.watches.length - 1; i >= 0; i--) {
                if (this.watches[i] === watcher) {
                    this.watches.splice(i, 1);
                }
            }
        }
    }, {
        key: "beep",
        value: function beep(delay) {
            var _this = this;

            setTimeout(function () {
                return _this.gc();
            }, 300);
            clearTimeout(this.updateTimeHandler);
            if (this.bypassCount === this.bypassThreshold) {
                this.bypassCount = 0;
                this.update();
                return;
            }
            this.bypassCount += 1;
            delay = isNaN(delay) ? this.delay : delay;
            if (delay === 0) {
                this.update();
                this.bypassCount = 0;
            } else {
                this.updateTimeHandler = setTimeout(function () {
                    return _this.update();
                }, delay);
            }
        }
    }, {
        key: "update",
        value: function update() {
            for (var i = 0; i < this.watches.length; i++) {
                var watcher = this.watches[i];
                watcher.update();
            }
        }
    }, {
        key: "gc",
        value: function gc() {
            var time = new Date().getTime();
            if (time - this.lastGCTime > 60 * 1000) {
                this.lastGCTime = time;
                this._gc();
            }
        }
    }, {
        key: "isMonted",
        value: function isMonted(el) {
            while (el.parentElement) {
                el = el.parentElement;
            }
            var nodeName = el.nodeName;
            return nodeName.toLowerCase() === "html";
        }
    }, {
        key: "clean",
        value: function clean() {
            this.watches.length = 0;
        }
    }, {
        key: "_gc",
        value: function _gc() {
            var n = this.watches.length;
            var time = new Date().getTime();
            for (var i = n - 1; i >= 0; i--) {
                var watch = this.watches[i];
                if (time - watch.createTime > 5 * 60 * 1000 && !this.isMonted(watch.el)) {
                    this.watches.splice(i, 1);
                }
            }
        }
    }]);

    return WatchSignal;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    compile: __webpack_require__(3),
    Signal: __webpack_require__(5)
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Watch = __webpack_require__(0);
module.exports = function (_Watch) {
    _inherits(AttrWatch, _Watch);

    function AttrWatch(el, view, signals, listenedProperty, attrName) {
        _classCallCheck(this, AttrWatch);

        var _this = _possibleConstructorReturn(this, (AttrWatch.__proto__ || Object.getPrototypeOf(AttrWatch)).call(this, el, view, signals));

        _this.attrName = attrName;
        _this.listenedProperty = listenedProperty;
        _this.update();
        return _this;
    }

    _createClass(AttrWatch, [{
        key: "update",
        value: function update() {
            var value = this.getValue();
            if (this.value !== value) {
                this.value = value;
                if (this.attrName === "disabled" || this.attrName === "readonly") {
                    if (value) {
                        this.el.setAttribute(this.attrName, true);
                    } else {
                        this.el.removeAttribute(this.attrName);
                    }
                } else {
                    this.el.setAttribute(this.attrName, value);
                }
            }
        }
    }]);

    return AttrWatch;
}(Watch);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Watch = __webpack_require__(0);
module.exports = function (_Watch) {
    _inherits(ClassWatch, _Watch);

    function ClassWatch(el, view, signals, listenedProperty) {
        _classCallCheck(this, ClassWatch);

        var _this = _possibleConstructorReturn(this, (ClassWatch.__proto__ || Object.getPrototypeOf(ClassWatch)).call(this, el, view, signals));

        _this.listenedProperty = listenedProperty;
        _this.update();
        return _this;
    }

    _createClass(ClassWatch, [{
        key: "update",
        value: function update() {
            var value = this.getValue();
            if (this.value !== value) {
                if (this.value) {
                    this.el.classList.remove(this.value);
                }
                if (value) {
                    this.el.classList.add(value);
                }
                this.value = value;
            }
        }
    }]);

    return ClassWatch;
}(Watch);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Watch = __webpack_require__(0);
module.exports = function (_Watch) {
    _inherits(HtmlWatch, _Watch);

    function HtmlWatch(el, view, signals, listenedProperty, outputFormat) {
        _classCallCheck(this, HtmlWatch);

        var _this = _possibleConstructorReturn(this, (HtmlWatch.__proto__ || Object.getPrototypeOf(HtmlWatch)).call(this, el, view, signals));

        _this.listenedProperty = listenedProperty;
        _this.outputFormat = outputFormat || "";
        _this.update();
        return _this;
    }

    _createClass(HtmlWatch, [{
        key: "update",
        value: function update() {
            var value = this.getValue();
            if (this.value !== value) {
                this.value = value;
                this.el.innerHTML = this.getFormattedOutput(value);
            }
        }
    }, {
        key: "getFormattedOutput",
        value: function getFormattedOutput(value) {
            if (this.endWith(this.outputFormat, "()")) {
                return this.view[this.outputFormat.split("()")[0]](value);
            }
            return this.standardFormattedOutput(value);
        }
    }, {
        key: "standardFormattedOutput",
        value: function standardFormattedOutput(value) {
            value = !value && isNaN(value) ? "" : value;
            if (this.outputFormat) {
                return this.outputFormat.replace("{0}", value);
            }
            return value;
        }
    }]);

    return HtmlWatch;
}(Watch);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Watch = __webpack_require__(0);
module.exports = function (_Watch) {
    _inherits(StyleWatch, _Watch);

    function StyleWatch(el, view, signals, listenedProperty, styleName, unit) {
        _classCallCheck(this, StyleWatch);

        var _this = _possibleConstructorReturn(this, (StyleWatch.__proto__ || Object.getPrototypeOf(StyleWatch)).call(this, el, view, signals));

        _this.styleName = styleName;
        _this.listenedProperty = listenedProperty;
        _this.unit = unit || "";
        _this.update();
        return _this;
    }

    _createClass(StyleWatch, [{
        key: "update",
        value: function update() {
            var value = this.getValue();
            if (this.value !== value) {
                this.value = value;
                this.el.style[this.styleName] = value + this.unit;
            }
        }
    }]);

    return StyleWatch;
}(Watch);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Watch = __webpack_require__(0);
module.exports = function (_Watch) {
    _inherits(TextWatch, _Watch);

    function TextWatch(el, view, signals, listenedProperty, outputFormat) {
        _classCallCheck(this, TextWatch);

        var _this = _possibleConstructorReturn(this, (TextWatch.__proto__ || Object.getPrototypeOf(TextWatch)).call(this, el, view, signals));

        _this.listenedProperty = listenedProperty;
        _this.outputFormat = outputFormat || "";
        _this.update();
        return _this;
    }

    _createClass(TextWatch, [{
        key: "update",
        value: function update() {
            var value = this.getValue();
            if (this.value !== value) {
                this.value = value;
                this.el.textContent = this.getFormattedOutput(value);
            }
        }
    }, {
        key: "getFormattedOutput",
        value: function getFormattedOutput(value) {
            if (this.endWith(this.outputFormat, "()")) {
                return this.view[this.outputFormat.split("()")[0]](value);
            }
            return this.standardFormattedOutput(value);
        }
    }, {
        key: "standardFormattedOutput",
        value: function standardFormattedOutput(value) {
            value = !value && isNaN(value) ? "" : value;
            if (this.outputFormat) {
                return this.outputFormat.replace("{0}", value);
            }
            return value;
        }
    }]);

    return TextWatch;
}(Watch);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Watch = __webpack_require__(0);
module.exports = function (_Watch) {
    _inherits(ClassWatch, _Watch);

    function ClassWatch(el, view, signals, listenedProperty, feedbackProperty, displayFormat, inputParser, acceptValidator, feedbackEvent) {
        _classCallCheck(this, ClassWatch);

        var _this = _possibleConstructorReturn(this, (ClassWatch.__proto__ || Object.getPrototypeOf(ClassWatch)).call(this, el, view, signals));

        _this.signals = signals;
        _this.listenedProperty = listenedProperty;
        if (feedbackProperty.indexOf("()") !== -1) {
            throw new Error("Unsupported " + feedbackProperty);
        }
        _this.feedbackProperty = feedbackProperty;
        _this.displayFormat = displayFormat || "";
        _this.displayFormat = _this.endWith(_this.displayFormat, "()") ? _this.displayFormat : _this.view.get(_this.displayFormat) || "";
        _this.inputParser = inputParser || "";
        _this.inputParser = _this.endWith(_this.inputParser, "()") ? _this.inputParser : _this.view.get(_this.inputParser) || "";
        _this.acceptValidator = acceptValidator || "";
        _this.acceptValidator = _this.endWith(_this.acceptValidator, "()") ? _this.acceptValidator : _this.view.get(_this.acceptValidator) || "";
        _this.addEvent("focus", _this.el, function (evt) {
            _this.focused = true;
            _this.el.value = _this.getValue() || "";
            _this.el.select();
        });
        _this.addEvent("blur", _this.el, function (evt) {
            _this.focused = false;
            _this.el.value = _this.getFormattedOutput(_this.getValue());
        });
        _this.addEvent("keypress", _this.el, function (evt) {
            var acceptable = _this.isInputAccepted(_this.el.value, evt.key, _this.el.selectionStart, _this.el.selectionEnd);
            if (!acceptable) {
                evt.preventDefault();
            }
        });
        feedbackEvent = feedbackEvent ? _this.view.get(feedbackEvent) : "keyup";
        var feedbackEvents = (feedbackEvent || "keyup").split("|");
        for (var i = 0; i < feedbackEvents.length; i++) {
            var e = feedbackEvents[i];
            var es = e.split(":");
            //TODO handle the key
            _this.addEvent(es[0], _this.el, function (evt) {
                _this.setValue(_this.getFormattedInput(_this.el.value));
                _this.beep();
            });
        }
        _this.update();
        return _this;
    }

    _createClass(ClassWatch, [{
        key: "setValue",
        value: function setValue(value) {
            if (this.endWith(this.feedbackProperty, ")")) {
                var express = "this.view." + this.feedbackProperty.replace(")", ", value)");
                eval(express);
            } else {
                this.view.set(this.feedbackProperty, value);
            }
        }
    }, {
        key: "getFormattedOutput",
        value: function getFormattedOutput(value) {
            if (this.endWith(this.displayFormat, "()")) {
                return this.view[this.displayFormat.split("()")[0]](value);
            }
            return this.standardFormattedOutput(value);
        }
    }, {
        key: "standardFormattedOutput",
        value: function standardFormattedOutput(value) {
            value = !value && isNaN(value) ? "" : value;
            if (this.displayFormat) {
                return this.displayFormat.replace("{0}", value);
            }
            return value;
        }
    }, {
        key: "getFormattedInput",
        value: function getFormattedInput(value) {
            if (this.endWith(this.inputParser, "()")) {
                return this.view[this.inputParser.split("()")[0]](value);
            }
            return this.standardFormattedInput(value);
        }
    }, {
        key: "standardFormattedInput",
        value: function standardFormattedInput(value) {
            value = !value && isNaN(value) ? "" : value;
            if (this.inputParser === "number") {
                var number = Number(value);
                return isNaN(number) ? 0 : number;
            } else if (this.inputParser === "int") {
                var intValue = parseInt(value);
                return isNaN(intValue) ? 0 : intValue;
            } else if (this.inputParser === "boolean") {
                return value.toLowerCase() !== "false";
            }
            return value;
        }
    }, {
        key: "isInputAccepted",
        value: function isInputAccepted(value, key, start, end) {
            start = Number(start);
            end = Number(end);
            var expect = value.substring(0, start) + key + value.substring(end);
            if (this.endWith(this.acceptValidator, "()")) {
                return this.view[this.acceptValidator.split("()")[0]](value, key, expect, start, end);
            }
            return this.standardInputAccepted(value, key, expect, start, end);
        }
    }, {
        key: "standardInputAccepted",
        value: function standardInputAccepted(value, key, expect, start, end) {
            expect = !value && isNaN(expect) ? "" : expect;
            if (this.acceptValidator) {
                var rex = new RegExp(this.acceptValidator);
                return rex.test(expect);
            }
            return true;
        }
    }, {
        key: "update",
        value: function update() {
            if (!this.focused) {
                var value = this.getFormattedOutput(this.getValue());
                if (value === undefined || value === null) {
                    value = "";
                }
                if (value != this.el.value) {
                    this.el.value = value;
                }
            }
        }
    }, {
        key: "beep",
        value: function beep() {
            for (var i = 0; i < this.signals.length; i++) {
                this.signals[i].beep();
            }
        }
    }, {
        key: "addEvent",
        value: function addEvent(name, el, func) {
            if (el.addEventListener) el.addEventListener(name, func, false);else if (elem.attachEvent) {
                el.attachEvent("on" + name, func);
            }
        }
    }]);

    return ClassWatch;
}(Watch);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AttrWatch = __webpack_require__(7);
module.exports = function () {
    function WatchAttrHandler(el, value, view, signals) {
        _classCallCheck(this, WatchAttrHandler);

        this.el = el;
        this.view = view;
        this.signals = signals;
        var values = value.split(" ");
        for (var i = 0; i < values.length; i++) {
            var express = values[i];
            express.trim();
            if (express.length !== 0) {
                this.processAttr(values[i]);
            }
        }
    }

    _createClass(WatchAttrHandler, [{
        key: "processAttr",
        value: function processAttr(pair) {
            pair = pair.split(":");
            var attrName = pair[0];
            var listenedProperty = pair[1] || attrName;
            new AttrWatch(this.el, this.view, this.signals, listenedProperty, attrName);
        }
    }]);

    return WatchAttrHandler;
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClassWatch = __webpack_require__(8);
module.exports = function WatchClassHandler(el, value, view, signals) {
    _classCallCheck(this, WatchClassHandler);

    this.el = el;
    this.view = view;
    this.signals = signals;
    var values = value.split(" ");
    for (var i = 0; i < values.length; i++) {
        var express = values[i];
        express.trim();
        if (express.length !== 0) {
            new ClassWatch(el, view, signals, express);
        }
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HtmlWatch = __webpack_require__(9);
module.exports = function WatchHtmlHandler(el, value, view, signals) {
    _classCallCheck(this, WatchHtmlHandler);

    this.el = el;
    this.view = view;
    this.signals = signals;
    var values = value.split(":");
    new HtmlWatch(el, view, signals, values[0], values[1]);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleWatch = __webpack_require__(10);
module.exports = function () {
    function WatchStyleHandler(el, value, view, signals) {
        _classCallCheck(this, WatchStyleHandler);

        this.el = el;
        this.view = view;
        this.signals = signals;
        var values = value.split(";");
        for (var i = 0; i < values.length; i++) {
            var express = values[i];
            express.trim();
            if (express.length !== 0) {
                this.processStyle(values[i]);
            }
        }
    }

    _createClass(WatchStyleHandler, [{
        key: "processStyle",
        value: function processStyle(pair) {
            pair = pair.split(":");
            var styleName = pair[0];
            styleName = styleName.split("#");
            var unit = styleName[1];
            styleName = styleName[0];
            var listenedProperty = pair[1] || styleName;
            new StyleWatch(this.el, this.view, this.signals, listenedProperty, styleName, unit);
        }
    }]);

    return WatchStyleHandler;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextWatch = __webpack_require__(11);
module.exports = function WatchTextHandler(el, value, view, signals) {
    _classCallCheck(this, WatchTextHandler);

    this.el = el;
    this.view = view;
    this.signals = signals;
    var values = value.split(":");
    new TextWatch(el, view, signals, values[0], values[1]);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValueWatch = __webpack_require__(12);
module.exports = function WatchAttrHandler(el, value, view, signals) {
    _classCallCheck(this, WatchAttrHandler);

    this.el = el;
    this.view = view;
    this.signals = signals;
    var values = value.split(" ");
    var event = values[1];
    values = values[0].split(":");
    new ValueWatch(el, view, signals, values[0], values[1], values[2], values[3], values[4], event);
};

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.dwebCompiler = __webpack_require__(6);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function Event(event, currentTarget) {
    _classCallCheck(this, Event);

    for (var p in event) {
        this[p] = event[p];
    }
    this.currentTarget = currentTarget;
};

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(21);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(0);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(3);
__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGNkYTU5MWJjOGZlMjZkNjk5Y2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdGNoL1dhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9XYXRjaENvbXBpbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9XYXRjaEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dhdGNoU2lnbmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F0Y2gvQXR0cldhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy93YXRjaC9DbGFzc1dhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy93YXRjaC9IdG1sV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdGNoL1N0eWxlV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdGNoL1RleHRXYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F0Y2gvVmFsdWVXYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F0Y2gvV2F0Y2hBdHRySGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F0Y2gvV2F0Y2hDbGFzc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdGNoL1dhdGNoSHRtbEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdGNoL1dhdGNoU3R5bGVIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy93YXRjaC9XYXRjaFRleHRIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy93YXRjaC9XYXRjaFZhbHVlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgtd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy93YXRjaC9FdmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZWwiLCJ2aWV3Iiwic2lnbmFscyIsImNyZWF0ZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImkiLCJsZW5ndGgiLCJvbiIsInN0ciIsInNmeCIsImluZGV4T2YiLCJwZngiLCJsaXN0ZW5lZFByb3BlcnR5IiwiZXZhbCIsImdldCIsIldhdGNoSGFuZGxlciIsInJlcXVpcmUiLCJjb21waWxlRUwiLCJhdHQiLCJhdHRzIiwiYXR0cmlidXRlcyIsIm4iLCJuYW1lIiwibm9kZU5hbWUiLCJ2YWx1ZSIsIm5vZGVWYWx1ZSIsIkhhbmRsZXIiLCJjb21waWxlIiwic2hvdWxkQ2xlYXJTaWduYWwiLCJBcnJheSIsImZvckVhY2giLCJzaWduYWwiLCJjbGVhbiIsInMiLCJjZWwiLCJzaGlmdCIsImNoaWxkcmVuIiwicHVzaCIsImRlbGF5IiwiYnlwYXNzVGhyZXNob2xkIiwiaXNOYU4iLCJieXBhc3NDb3VudCIsIndhdGNoZXMiLCJ3YXRjaGVyIiwic3BsaWNlIiwic2V0VGltZW91dCIsImdjIiwiY2xlYXJUaW1lb3V0IiwidXBkYXRlVGltZUhhbmRsZXIiLCJ1cGRhdGUiLCJ0aW1lIiwibGFzdEdDVGltZSIsIl9nYyIsInBhcmVudEVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsIndhdGNoIiwiaXNNb250ZWQiLCJTaWduYWwiLCJXYXRjaCIsImF0dHJOYW1lIiwiZ2V0VmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJvdXRwdXRGb3JtYXQiLCJpbm5lckhUTUwiLCJnZXRGb3JtYXR0ZWRPdXRwdXQiLCJlbmRXaXRoIiwic3BsaXQiLCJzdGFuZGFyZEZvcm1hdHRlZE91dHB1dCIsInJlcGxhY2UiLCJzdHlsZU5hbWUiLCJ1bml0Iiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsImZlZWRiYWNrUHJvcGVydHkiLCJkaXNwbGF5Rm9ybWF0IiwiaW5wdXRQYXJzZXIiLCJhY2NlcHRWYWxpZGF0b3IiLCJmZWVkYmFja0V2ZW50IiwiRXJyb3IiLCJhZGRFdmVudCIsImZvY3VzZWQiLCJzZWxlY3QiLCJhY2NlcHRhYmxlIiwiaXNJbnB1dEFjY2VwdGVkIiwiZXZ0Iiwia2V5Iiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJwcmV2ZW50RGVmYXVsdCIsImZlZWRiYWNrRXZlbnRzIiwiZSIsImVzIiwic2V0VmFsdWUiLCJnZXRGb3JtYXR0ZWRJbnB1dCIsImJlZXAiLCJleHByZXNzIiwic2V0Iiwic3RhbmRhcmRGb3JtYXR0ZWRJbnB1dCIsIm51bWJlciIsIk51bWJlciIsImludFZhbHVlIiwicGFyc2VJbnQiLCJzdGFydCIsImVuZCIsImV4cGVjdCIsInN1YnN0cmluZyIsInN0YW5kYXJkSW5wdXRBY2NlcHRlZCIsInJleCIsIlJlZ0V4cCIsInRlc3QiLCJ1bmRlZmluZWQiLCJmdW5jIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW0iLCJhdHRhY2hFdmVudCIsIkF0dHJXYXRjaCIsInZhbHVlcyIsInRyaW0iLCJwcm9jZXNzQXR0ciIsInBhaXIiLCJDbGFzc1dhdGNoIiwiSHRtbFdhdGNoIiwiU3R5bGVXYXRjaCIsInByb2Nlc3NTdHlsZSIsIlRleHRXYXRjaCIsIlZhbHVlV2F0Y2giLCJldmVudCIsIndpbmRvdyIsImR3ZWJDb21waWxlciIsImN1cnJlbnRUYXJnZXQiLCJwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEVBQSxPQUFPQyxPQUFQO0FBQ0ksbUJBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQjtBQUFBOztBQUMzQixhQUFLQyxVQUFMLEdBQWtCLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFsQjtBQUNBLGFBQUtMLEVBQUwsR0FBVUEsRUFBVjtBQUNBLGFBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixRQUFRSyxNQUE1QixFQUFvQ0QsR0FBcEMsRUFBeUM7QUFDckNKLG9CQUFRSSxDQUFSLEVBQVdFLEVBQVgsQ0FBYyxJQUFkO0FBQ0g7QUFDSjs7QUFSTDtBQUFBO0FBQUEsZ0NBVVlDLEdBVlosRUFVaUJDLEdBVmpCLEVBVXNCO0FBQ2QsbUJBQU9ELElBQUlFLE9BQUosQ0FBWUQsR0FBWixNQUFxQkQsSUFBSUYsTUFBSixHQUFhRyxJQUFJSCxNQUE3QztBQUNIO0FBWkw7QUFBQTtBQUFBLGtDQWNjRSxHQWRkLEVBY21CRyxHQWRuQixFQWN3QjtBQUNoQixtQkFBT0gsSUFBSUUsT0FBSixDQUFZQyxHQUFaLE1BQXFCLENBQTVCO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLG1DQWtCZTtBQUNQLGdCQUFJLEtBQUtDLGdCQUFMLENBQXNCRixPQUF0QixDQUE4QixHQUE5QixNQUF1QyxDQUFDLENBQXhDLElBQTZDLEtBQUtFLGdCQUFMLENBQXNCRixPQUF0QixDQUE4QixHQUE5QixNQUF1QyxDQUFDLENBQXpGLEVBQTRGO0FBQ3hGLHVCQUFPRyxvQkFBa0IsS0FBS0QsZ0JBQXZCLENBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFBTyxLQUFLWixJQUFMLENBQVVjLEdBQVYsQ0FBYyxLQUFLRixnQkFBbkIsQ0FBUDtBQUNIO0FBQ0o7QUF4Qkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7OztBQ0FBLElBQU1HLGVBQWUsbUJBQUFDLENBQVEsQ0FBUixDQUFyQjtBQUNBLFNBQVNDLFNBQVQsQ0FBbUJsQixFQUFuQixFQUF1QkMsSUFBdkIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQ2xDLFNBQUssSUFBSWlCLEdBQUosRUFBU2IsSUFBSSxDQUFiLEVBQWdCYyxPQUFPcEIsR0FBR3FCLFVBQTFCLEVBQXNDQyxJQUFJRixLQUFLYixNQUFwRCxFQUE0REQsSUFBSWdCLENBQWhFLEVBQW1FaEIsR0FBbkUsRUFBdUU7QUFDbkVhLGNBQU1DLEtBQUtkLENBQUwsQ0FBTjtBQUNBLFlBQU1pQixPQUFPSixJQUFJSyxRQUFqQjtBQUNBLFlBQU1DLFFBQVFOLElBQUlPLFNBQWxCO0FBQ0EsWUFBSUgsS0FBS1osT0FBTCxDQUFhLElBQWIsTUFBdUIsQ0FBM0IsRUFBOEI7QUFDMUI7QUFDSDtBQUNELFlBQU1nQixVQUFVWCxhQUFhTyxJQUFiLENBQWhCO0FBQ0EsWUFBSSxDQUFDSSxPQUFMLEVBQWM7QUFDVjtBQUNIO0FBQ0QsWUFBSUEsT0FBSixDQUFZM0IsRUFBWixFQUFnQnlCLEtBQWhCLEVBQXVCeEIsSUFBdkIsRUFBNkJDLE9BQTdCO0FBQ0g7QUFDSjtBQUNESixPQUFPQyxPQUFQLEdBQWlCLFNBQVM2QixPQUFULENBQWlCNUIsRUFBakIsRUFBcUJDLElBQXJCLEVBQTJCQyxPQUEzQixFQUFvQzJCLGlCQUFwQyxFQUF1RDtBQUNwRSxRQUFJLEVBQUUzQixtQkFBbUI0QixLQUFyQixDQUFKLEVBQWlDO0FBQzdCNUIsa0JBQVUsQ0FBQ0EsT0FBRCxDQUFWO0FBQ0g7QUFDRCxRQUFJMkIsaUJBQUosRUFBdUI7QUFDbkIzQixnQkFBUTZCLE9BQVIsQ0FBZ0Isa0JBQVU7QUFDdEJDLG1CQUFPQyxLQUFQO0FBQ0gsU0FGRDtBQUdIO0FBQ0QsUUFBSUMsSUFBSSxDQUFDbEMsRUFBRCxDQUFSO0FBQ0EsV0FBT2tDLEVBQUUzQixNQUFULEVBQWlCO0FBQ2IsWUFBTTRCLE1BQU1ELEVBQUVFLEtBQUYsRUFBWjtBQUNBbEIsa0JBQVVpQixHQUFWLEVBQWVsQyxJQUFmLEVBQXFCQyxPQUFyQjtBQUNBLFlBQUlpQyxJQUFJRSxRQUFKLENBQWE5QixNQUFqQixFQUF5QjtBQUNyQixpQkFBSyxJQUFJRCxJQUFJLENBQWIsRUFBZ0JBLElBQUk2QixJQUFJRSxRQUFKLENBQWE5QixNQUFqQyxFQUF5Q0QsR0FBekMsRUFBOEM7QUFDMUM0QixrQkFBRUksSUFBRixDQUFPSCxJQUFJRSxRQUFKLENBQWEvQixDQUFiLENBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSixDQW5CRCxDOzs7Ozs7Ozs7QUNoQkFSLE9BQU9DLE9BQVAsR0FBaUI7QUFDYixlQUFXLG1CQUFBa0IsQ0FBUSxFQUFSLENBREU7QUFFYixlQUFXLG1CQUFBQSxDQUFRLEVBQVIsQ0FGRTtBQUdiLGNBQVUsbUJBQUFBLENBQVEsRUFBUixDQUhHO0FBSWIsY0FBVSxtQkFBQUEsQ0FBUSxFQUFSLENBSkc7QUFLYixjQUFVLG1CQUFBQSxDQUFRLEVBQVIsQ0FMRztBQU1iLGVBQVcsbUJBQUFBLENBQVEsRUFBUjtBQU5FLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7QUNBQW5CLE9BQU9DLE9BQVA7QUFDSSx5QkFBWXdDLEtBQVosRUFBbUJDLGVBQW5CLEVBQW9DO0FBQUE7O0FBQ2hDLGFBQUtELEtBQUwsR0FBYUUsTUFBTUYsS0FBTixJQUFlLEVBQWYsR0FBb0JBLEtBQWpDO0FBQ0EsYUFBS0MsZUFBTCxHQUF1QkMsTUFBTUQsZUFBTixJQUF5QixFQUF6QixHQUE4QkEsZUFBckQ7QUFDQSxhQUFLRSxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLEVBQWY7QUFDSDs7QUFOTDtBQUFBO0FBQUEsMkJBT09DLE9BUFAsRUFPZ0I7QUFDUixpQkFBS0QsT0FBTCxDQUFhTCxJQUFiLENBQWtCTSxPQUFsQjtBQUNIO0FBVEw7QUFBQTtBQUFBLDJCQVVPQSxPQVZQLEVBVWdCO0FBQ1IsaUJBQUssSUFBSXRDLElBQUksS0FBS3FDLE9BQUwsQ0FBYXBDLE1BQWIsR0FBc0IsQ0FBbkMsRUFBc0NELEtBQUssQ0FBM0MsRUFBOENBLEdBQTlDLEVBQW1EO0FBQy9DLG9CQUFJLEtBQUtxQyxPQUFMLENBQWFyQyxDQUFiLE1BQW9Cc0MsT0FBeEIsRUFBaUM7QUFDN0IseUJBQUtELE9BQUwsQ0FBYUUsTUFBYixDQUFvQnZDLENBQXBCLEVBQXVCLENBQXZCO0FBQ0g7QUFDSjtBQUNKO0FBaEJMO0FBQUE7QUFBQSw2QkFpQlNpQyxLQWpCVCxFQWlCZTtBQUFBOztBQUNQTyx1QkFBVztBQUFBLHVCQUFNLE1BQUtDLEVBQUwsRUFBTjtBQUFBLGFBQVgsRUFBNEIsR0FBNUI7QUFDQUMseUJBQWEsS0FBS0MsaUJBQWxCO0FBQ0EsZ0JBQUksS0FBS1AsV0FBTCxLQUFxQixLQUFLRixlQUE5QixFQUErQztBQUMzQyxxQkFBS0UsV0FBTCxHQUFtQixDQUFuQjtBQUNBLHFCQUFLUSxNQUFMO0FBQ0E7QUFDSDtBQUNELGlCQUFLUixXQUFMLElBQW9CLENBQXBCO0FBQ0FILG9CQUFRRSxNQUFNRixLQUFOLElBQWUsS0FBS0EsS0FBcEIsR0FBNEJBLEtBQXBDO0FBQ0EsZ0JBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNiLHFCQUFLVyxNQUFMO0FBQ0EscUJBQUtSLFdBQUwsR0FBbUIsQ0FBbkI7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBS08saUJBQUwsR0FBeUJILFdBQVc7QUFBQSwyQkFBTSxNQUFLSSxNQUFMLEVBQU47QUFBQSxpQkFBWCxFQUFnQ1gsS0FBaEMsQ0FBekI7QUFDSDtBQUNKO0FBakNMO0FBQUE7QUFBQSxpQ0FrQ2E7QUFDTCxpQkFBSyxJQUFJakMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtxQyxPQUFMLENBQWFwQyxNQUFqQyxFQUF5Q0QsR0FBekMsRUFBOEM7QUFDMUMsb0JBQU1zQyxVQUFVLEtBQUtELE9BQUwsQ0FBYXJDLENBQWIsQ0FBaEI7QUFDQXNDLHdCQUFRTSxNQUFSO0FBQ0g7QUFDSjtBQXZDTDtBQUFBO0FBQUEsNkJBd0NTO0FBQ0QsZ0JBQU1DLE9BQU8sSUFBSS9DLElBQUosR0FBV0MsT0FBWCxFQUFiO0FBQ0EsZ0JBQUk4QyxPQUFPLEtBQUtDLFVBQVosR0FBeUIsS0FBSyxJQUFsQyxFQUF3QztBQUNwQyxxQkFBS0EsVUFBTCxHQUFrQkQsSUFBbEI7QUFDQSxxQkFBS0UsR0FBTDtBQUNIO0FBQ0o7QUE5Q0w7QUFBQTtBQUFBLGlDQStDYXJELEVBL0NiLEVBK0NpQjtBQUNULG1CQUFPQSxHQUFHc0QsYUFBVixFQUF5QjtBQUNyQnRELHFCQUFLQSxHQUFHc0QsYUFBUjtBQUNIO0FBQ0QsZ0JBQU05QixXQUFXeEIsR0FBR3dCLFFBQXBCO0FBQ0EsbUJBQU9BLFNBQVMrQixXQUFULE9BQTJCLE1BQWxDO0FBQ0g7QUFyREw7QUFBQTtBQUFBLGdDQXNEWTtBQUNKLGlCQUFLWixPQUFMLENBQWFwQyxNQUFiLEdBQXNCLENBQXRCO0FBQ0g7QUF4REw7QUFBQTtBQUFBLDhCQXlEVTtBQUNGLGdCQUFNZSxJQUFJLEtBQUtxQixPQUFMLENBQWFwQyxNQUF2QjtBQUNBLGdCQUFNNEMsT0FBTyxJQUFJL0MsSUFBSixHQUFXQyxPQUFYLEVBQWI7QUFDQSxpQkFBSyxJQUFJQyxJQUFJZ0IsSUFBSSxDQUFqQixFQUFvQmhCLEtBQUssQ0FBekIsRUFBNEJBLEdBQTVCLEVBQWlDO0FBQzdCLG9CQUFNa0QsUUFBUSxLQUFLYixPQUFMLENBQWFyQyxDQUFiLENBQWQ7QUFDQSxvQkFBSTZDLE9BQU9LLE1BQU1yRCxVQUFiLEdBQTBCLElBQUksRUFBSixHQUFTLElBQW5DLElBQTJDLENBQUMsS0FBS3NELFFBQUwsQ0FBY0QsTUFBTXhELEVBQXBCLENBQWhELEVBQXlFO0FBQ3JFLHlCQUFLMkMsT0FBTCxDQUFhRSxNQUFiLENBQW9CdkMsQ0FBcEIsRUFBdUIsQ0FBdkI7QUFDSDtBQUNKO0FBQ0o7QUFsRUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7QUNBQVIsT0FBT0MsT0FBUCxHQUFpQjtBQUNiNkIsYUFBUyxtQkFBQVgsQ0FBUSxDQUFSLENBREk7QUFFYnlDLFlBQVEsbUJBQUF6QyxDQUFRLENBQVI7QUFGSyxDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU0wQyxRQUFRLG1CQUFBMUMsQ0FBUSxDQUFSLENBQWQ7QUFDQW5CLE9BQU9DLE9BQVA7QUFBQTs7QUFDSSx1QkFBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0JDLE9BQXRCLEVBQStCVyxnQkFBL0IsRUFBaUQrQyxRQUFqRCxFQUEyRDtBQUFBOztBQUFBLDBIQUNqRDVELEVBRGlELEVBQzdDQyxJQUQ2QyxFQUN2Q0MsT0FEdUM7O0FBRXZELGNBQUswRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUsvQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsY0FBS3FDLE1BQUw7QUFKdUQ7QUFLMUQ7O0FBTkw7QUFBQTtBQUFBLGlDQVFhO0FBQ0wsZ0JBQU16QixRQUFRLEtBQUtvQyxRQUFMLEVBQWQ7QUFDQSxnQkFBSSxLQUFLcEMsS0FBTCxLQUFlQSxLQUFuQixFQUEwQjtBQUN0QixxQkFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Esb0JBQUksS0FBS21DLFFBQUwsS0FBa0IsVUFBbEIsSUFBZ0MsS0FBS0EsUUFBTCxLQUFrQixVQUF0RCxFQUFrRTtBQUM5RCx3QkFBSW5DLEtBQUosRUFBVztBQUNQLDZCQUFLekIsRUFBTCxDQUFROEQsWUFBUixDQUFxQixLQUFLRixRQUExQixFQUFvQyxJQUFwQztBQUNILHFCQUZELE1BRU87QUFDSCw2QkFBSzVELEVBQUwsQ0FBUStELGVBQVIsQ0FBd0IsS0FBS0gsUUFBN0I7QUFDSDtBQUNKLGlCQU5ELE1BTU87QUFDSCx5QkFBSzVELEVBQUwsQ0FBUThELFlBQVIsQ0FBcUIsS0FBS0YsUUFBMUIsRUFBb0NuQyxLQUFwQztBQUNIO0FBQ0o7QUFDSjtBQXRCTDs7QUFBQTtBQUFBLEVBQXlDa0MsS0FBekMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFNQSxRQUFRLG1CQUFBMUMsQ0FBUSxDQUFSLENBQWQ7QUFDQW5CLE9BQU9DLE9BQVA7QUFBQTs7QUFDSSx3QkFBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0JDLE9BQXRCLEVBQStCVyxnQkFBL0IsRUFBaUQ7QUFBQTs7QUFBQSw0SEFDdkNiLEVBRHVDLEVBQ25DQyxJQURtQyxFQUM3QkMsT0FENkI7O0FBRTdDLGNBQUtXLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxjQUFLcUMsTUFBTDtBQUg2QztBQUloRDs7QUFMTDtBQUFBO0FBQUEsaUNBT2E7QUFDTCxnQkFBTXpCLFFBQVEsS0FBS29DLFFBQUwsRUFBZDtBQUNBLGdCQUFJLEtBQUtwQyxLQUFMLEtBQWVBLEtBQW5CLEVBQTBCO0FBQ3RCLG9CQUFJLEtBQUtBLEtBQVQsRUFBZ0I7QUFDWix5QkFBS3pCLEVBQUwsQ0FBUWdFLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLEtBQUt4QyxLQUE5QjtBQUNIO0FBQ0Qsb0JBQUlBLEtBQUosRUFBVztBQUNQLHlCQUFLekIsRUFBTCxDQUFRZ0UsU0FBUixDQUFrQkUsR0FBbEIsQ0FBc0J6QyxLQUF0QjtBQUNIO0FBQ0QscUJBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNIO0FBQ0o7QUFsQkw7O0FBQUE7QUFBQSxFQUEwQ2tDLEtBQTFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTUEsUUFBUSxtQkFBQTFDLENBQVEsQ0FBUixDQUFkO0FBQ0FuQixPQUFPQyxPQUFQO0FBQUE7O0FBQ0ksdUJBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQlcsZ0JBQS9CLEVBQWlEc0QsWUFBakQsRUFBK0Q7QUFBQTs7QUFBQSwwSEFDckRuRSxFQURxRCxFQUNqREMsSUFEaUQsRUFDM0NDLE9BRDJDOztBQUUzRCxjQUFLVyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsY0FBS3NELFlBQUwsR0FBb0JBLGdCQUFnQixFQUFwQztBQUNBLGNBQUtqQixNQUFMO0FBSjJEO0FBSzlEOztBQU5MO0FBQUE7QUFBQSxpQ0FRYTtBQUNMLGdCQUFNekIsUUFBUSxLQUFLb0MsUUFBTCxFQUFkO0FBQ0EsZ0JBQUksS0FBS3BDLEtBQUwsS0FBZUEsS0FBbkIsRUFBMEI7QUFDdEIscUJBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLHFCQUFLekIsRUFBTCxDQUFRb0UsU0FBUixHQUFvQixLQUFLQyxrQkFBTCxDQUF3QjVDLEtBQXhCLENBQXBCO0FBQ0g7QUFDSjtBQWRMO0FBQUE7QUFBQSwyQ0FnQnVCQSxLQWhCdkIsRUFnQjhCO0FBQ3RCLGdCQUFJLEtBQUs2QyxPQUFMLENBQWEsS0FBS0gsWUFBbEIsRUFBZ0MsSUFBaEMsQ0FBSixFQUEyQztBQUN2Qyx1QkFBTyxLQUFLbEUsSUFBTCxDQUFVLEtBQUtrRSxZQUFMLENBQWtCSSxLQUFsQixDQUF3QixJQUF4QixFQUE4QixDQUE5QixDQUFWLEVBQTRDOUMsS0FBNUMsQ0FBUDtBQUNIO0FBQ0QsbUJBQU8sS0FBSytDLHVCQUFMLENBQTZCL0MsS0FBN0IsQ0FBUDtBQUNIO0FBckJMO0FBQUE7QUFBQSxnREF1QjRCQSxLQXZCNUIsRUF1Qm1DO0FBQzNCQSxvQkFBUSxDQUFDQSxLQUFELElBQVVnQixNQUFNaEIsS0FBTixDQUFWLEdBQXlCLEVBQXpCLEdBQThCQSxLQUF0QztBQUNBLGdCQUFJLEtBQUswQyxZQUFULEVBQXVCO0FBQ25CLHVCQUFPLEtBQUtBLFlBQUwsQ0FBa0JNLE9BQWxCLENBQTBCLEtBQTFCLEVBQWlDaEQsS0FBakMsQ0FBUDtBQUNIO0FBQ0QsbUJBQU9BLEtBQVA7QUFDSDtBQTdCTDs7QUFBQTtBQUFBLEVBQXlDa0MsS0FBekMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFNQSxRQUFRLG1CQUFBMUMsQ0FBUSxDQUFSLENBQWQ7QUFDQW5CLE9BQU9DLE9BQVA7QUFBQTs7QUFDSSx3QkFBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0JDLE9BQXRCLEVBQStCVyxnQkFBL0IsRUFBaUQ2RCxTQUFqRCxFQUE0REMsSUFBNUQsRUFBa0U7QUFBQTs7QUFBQSw0SEFDeEQzRSxFQUR3RCxFQUNwREMsSUFEb0QsRUFDOUNDLE9BRDhDOztBQUU5RCxjQUFLd0UsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLN0QsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLGNBQUs4RCxJQUFMLEdBQVlBLFFBQVEsRUFBcEI7QUFDQSxjQUFLekIsTUFBTDtBQUw4RDtBQU1qRTs7QUFQTDtBQUFBO0FBQUEsaUNBU2E7QUFDTCxnQkFBTXpCLFFBQVEsS0FBS29DLFFBQUwsRUFBZDtBQUNBLGdCQUFJLEtBQUtwQyxLQUFMLEtBQWVBLEtBQW5CLEVBQTBCO0FBQ3RCLHFCQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxxQkFBS3pCLEVBQUwsQ0FBUTRFLEtBQVIsQ0FBYyxLQUFLRixTQUFuQixJQUFnQ2pELFFBQVEsS0FBS2tELElBQTdDO0FBQ0g7QUFDSjtBQWZMOztBQUFBO0FBQUEsRUFBMENoQixLQUExQyxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBLElBQU1BLFFBQVEsbUJBQUExQyxDQUFRLENBQVIsQ0FBZDtBQUNBbkIsT0FBT0MsT0FBUDtBQUFBOztBQUNJLHVCQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQkMsT0FBdEIsRUFBK0JXLGdCQUEvQixFQUFpRHNELFlBQWpELEVBQStEO0FBQUE7O0FBQUEsMEhBQ3JEbkUsRUFEcUQsRUFDakRDLElBRGlELEVBQzNDQyxPQUQyQzs7QUFFM0QsY0FBS1csZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLGNBQUtzRCxZQUFMLEdBQW9CQSxnQkFBZ0IsRUFBcEM7QUFDQSxjQUFLakIsTUFBTDtBQUoyRDtBQUs5RDs7QUFOTDtBQUFBO0FBQUEsaUNBUWE7QUFDTCxnQkFBTXpCLFFBQVEsS0FBS29DLFFBQUwsRUFBZDtBQUNBLGdCQUFJLEtBQUtwQyxLQUFMLEtBQWVBLEtBQW5CLEVBQTBCO0FBQ3RCLHFCQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxxQkFBS3pCLEVBQUwsQ0FBUTZFLFdBQVIsR0FBc0IsS0FBS1Isa0JBQUwsQ0FBd0I1QyxLQUF4QixDQUF0QjtBQUNIO0FBQ0o7QUFkTDtBQUFBO0FBQUEsMkNBZ0J1QkEsS0FoQnZCLEVBZ0I4QjtBQUN0QixnQkFBSSxLQUFLNkMsT0FBTCxDQUFhLEtBQUtILFlBQWxCLEVBQWdDLElBQWhDLENBQUosRUFBMkM7QUFDdkMsdUJBQU8sS0FBS2xFLElBQUwsQ0FBVSxLQUFLa0UsWUFBTCxDQUFrQkksS0FBbEIsQ0FBd0IsSUFBeEIsRUFBOEIsQ0FBOUIsQ0FBVixFQUE0QzlDLEtBQTVDLENBQVA7QUFDSDtBQUNELG1CQUFPLEtBQUsrQyx1QkFBTCxDQUE2Qi9DLEtBQTdCLENBQVA7QUFDSDtBQXJCTDtBQUFBO0FBQUEsZ0RBdUI0QkEsS0F2QjVCLEVBdUJtQztBQUMzQkEsb0JBQVEsQ0FBQ0EsS0FBRCxJQUFVZ0IsTUFBTWhCLEtBQU4sQ0FBVixHQUF5QixFQUF6QixHQUE4QkEsS0FBdEM7QUFDQSxnQkFBSSxLQUFLMEMsWUFBVCxFQUF1QjtBQUNuQix1QkFBTyxLQUFLQSxZQUFMLENBQWtCTSxPQUFsQixDQUEwQixLQUExQixFQUFpQ2hELEtBQWpDLENBQVA7QUFDSDtBQUNELG1CQUFPQSxLQUFQO0FBQ0g7QUE3Qkw7O0FBQUE7QUFBQSxFQUF5Q2tDLEtBQXpDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTUEsUUFBUSxtQkFBQTFDLENBQVEsQ0FBUixDQUFkO0FBQ0FuQixPQUFPQyxPQUFQO0FBQUE7O0FBQ0ksd0JBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQlcsZ0JBQS9CLEVBQWlEaUUsZ0JBQWpELEVBQW1FQyxhQUFuRSxFQUFrRkMsV0FBbEYsRUFBK0ZDLGVBQS9GLEVBQWdIQyxhQUFoSCxFQUErSDtBQUFBOztBQUFBLDRIQUNySGxGLEVBRHFILEVBQ2pIQyxJQURpSCxFQUMzR0MsT0FEMkc7O0FBRTNILGNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGNBQUtXLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxZQUFJaUUsaUJBQWlCbkUsT0FBakIsQ0FBeUIsSUFBekIsTUFBbUMsQ0FBQyxDQUF4QyxFQUEyQztBQUN2QyxrQkFBTSxJQUFJd0UsS0FBSixrQkFBeUJMLGdCQUF6QixDQUFOO0FBQ0g7QUFDRCxjQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsY0FBS0MsYUFBTCxHQUFxQkEsaUJBQWlCLEVBQXRDO0FBQ0EsY0FBS0EsYUFBTCxHQUFxQixNQUFLVCxPQUFMLENBQWEsTUFBS1MsYUFBbEIsRUFBaUMsSUFBakMsSUFBeUMsTUFBS0EsYUFBOUMsR0FBOEQsTUFBSzlFLElBQUwsQ0FBVWMsR0FBVixDQUFjLE1BQUtnRSxhQUFuQixLQUFxQyxFQUF4SDtBQUNBLGNBQUtDLFdBQUwsR0FBbUJBLGVBQWUsRUFBbEM7QUFDQSxjQUFLQSxXQUFMLEdBQW1CLE1BQUtWLE9BQUwsQ0FBYSxNQUFLVSxXQUFsQixFQUErQixJQUEvQixJQUF1QyxNQUFLQSxXQUE1QyxHQUEwRCxNQUFLL0UsSUFBTCxDQUFVYyxHQUFWLENBQWMsTUFBS2lFLFdBQW5CLEtBQW1DLEVBQWhIO0FBQ0EsY0FBS0MsZUFBTCxHQUF1QkEsbUJBQW1CLEVBQTFDO0FBQ0EsY0FBS0EsZUFBTCxHQUF1QixNQUFLWCxPQUFMLENBQWEsTUFBS1csZUFBbEIsRUFBbUMsSUFBbkMsSUFBMkMsTUFBS0EsZUFBaEQsR0FBa0UsTUFBS2hGLElBQUwsQ0FBVWMsR0FBVixDQUFjLE1BQUtrRSxlQUFuQixLQUF1QyxFQUFoSTtBQUNBLGNBQUtHLFFBQUwsQ0FBYyxPQUFkLEVBQXVCLE1BQUtwRixFQUE1QixFQUFnQyxlQUFPO0FBQ25DLGtCQUFLcUYsT0FBTCxHQUFlLElBQWY7QUFDQSxrQkFBS3JGLEVBQUwsQ0FBUXlCLEtBQVIsR0FBZ0IsTUFBS29DLFFBQUwsTUFBbUIsRUFBbkM7QUFDQSxrQkFBSzdELEVBQUwsQ0FBUXNGLE1BQVI7QUFDSCxTQUpEO0FBS0EsY0FBS0YsUUFBTCxDQUFjLE1BQWQsRUFBc0IsTUFBS3BGLEVBQTNCLEVBQStCLGVBQU87QUFDbEMsa0JBQUtxRixPQUFMLEdBQWUsS0FBZjtBQUNBLGtCQUFLckYsRUFBTCxDQUFReUIsS0FBUixHQUFnQixNQUFLNEMsa0JBQUwsQ0FBd0IsTUFBS1IsUUFBTCxFQUF4QixDQUFoQjtBQUNILFNBSEQ7QUFJQSxjQUFLdUIsUUFBTCxDQUFjLFVBQWQsRUFBMEIsTUFBS3BGLEVBQS9CLEVBQW1DLGVBQU87QUFDdEMsZ0JBQU11RixhQUFhLE1BQUtDLGVBQUwsQ0FBcUIsTUFBS3hGLEVBQUwsQ0FBUXlCLEtBQTdCLEVBQW9DZ0UsSUFBSUMsR0FBeEMsRUFBNkMsTUFBSzFGLEVBQUwsQ0FBUTJGLGNBQXJELEVBQXFFLE1BQUszRixFQUFMLENBQVE0RixZQUE3RSxDQUFuQjtBQUNBLGdCQUFHLENBQUNMLFVBQUosRUFBZ0I7QUFDWkUsb0JBQUlJLGNBQUo7QUFDSDtBQUNKLFNBTEQ7QUFNQVgsd0JBQWdCQSxnQkFBZ0IsTUFBS2pGLElBQUwsQ0FBVWMsR0FBVixDQUFjbUUsYUFBZCxDQUFoQixHQUErQyxPQUEvRDtBQUNBLFlBQU1ZLGlCQUFpQixDQUFDWixpQkFBaUIsT0FBbEIsRUFBMkJYLEtBQTNCLENBQWlDLEdBQWpDLENBQXZCO0FBQ0EsYUFBSyxJQUFJakUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJd0YsZUFBZXZGLE1BQW5DLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM1QyxnQkFBTXlGLElBQUlELGVBQWV4RixDQUFmLENBQVY7QUFDQSxnQkFBTTBGLEtBQUtELEVBQUV4QixLQUFGLENBQVEsR0FBUixDQUFYO0FBQ0E7QUFDQSxrQkFBS2EsUUFBTCxDQUFjWSxHQUFHLENBQUgsQ0FBZCxFQUFxQixNQUFLaEcsRUFBMUIsRUFBOEIsZUFBTztBQUNqQyxzQkFBS2lHLFFBQUwsQ0FBYyxNQUFLQyxpQkFBTCxDQUF1QixNQUFLbEcsRUFBTCxDQUFReUIsS0FBL0IsQ0FBZDtBQUNBLHNCQUFLMEUsSUFBTDtBQUNILGFBSEQ7QUFJSDtBQUNELGNBQUtqRCxNQUFMO0FBeEMySDtBQXlDOUg7O0FBMUNMO0FBQUE7QUFBQSxpQ0E0Q2F6QixLQTVDYixFQTRDb0I7QUFDWixnQkFBSSxLQUFLNkMsT0FBTCxDQUFhLEtBQUtRLGdCQUFsQixFQUFvQyxHQUFwQyxDQUFKLEVBQThDO0FBQzFDLG9CQUFNc0IseUJBQXVCLEtBQUt0QixnQkFBTCxDQUFzQkwsT0FBdEIsQ0FBOEIsR0FBOUIsRUFBbUMsVUFBbkMsQ0FBN0I7QUFDQTNELHFCQUFLc0YsT0FBTDtBQUNILGFBSEQsTUFHTztBQUNILHFCQUFLbkcsSUFBTCxDQUFVb0csR0FBVixDQUFjLEtBQUt2QixnQkFBbkIsRUFBcUNyRCxLQUFyQztBQUNIO0FBQ0o7QUFuREw7QUFBQTtBQUFBLDJDQXFEdUJBLEtBckR2QixFQXFEOEI7QUFDdEIsZ0JBQUksS0FBSzZDLE9BQUwsQ0FBYSxLQUFLUyxhQUFsQixFQUFpQyxJQUFqQyxDQUFKLEVBQTRDO0FBQ3hDLHVCQUFPLEtBQUs5RSxJQUFMLENBQVUsS0FBSzhFLGFBQUwsQ0FBbUJSLEtBQW5CLENBQXlCLElBQXpCLEVBQStCLENBQS9CLENBQVYsRUFBNkM5QyxLQUE3QyxDQUFQO0FBQ0g7QUFDRCxtQkFBTyxLQUFLK0MsdUJBQUwsQ0FBNkIvQyxLQUE3QixDQUFQO0FBQ0g7QUExREw7QUFBQTtBQUFBLGdEQTRENEJBLEtBNUQ1QixFQTREbUM7QUFDM0JBLG9CQUFRLENBQUNBLEtBQUQsSUFBVWdCLE1BQU1oQixLQUFOLENBQVYsR0FBeUIsRUFBekIsR0FBOEJBLEtBQXRDO0FBQ0EsZ0JBQUksS0FBS3NELGFBQVQsRUFBd0I7QUFDcEIsdUJBQU8sS0FBS0EsYUFBTCxDQUFtQk4sT0FBbkIsQ0FBMkIsS0FBM0IsRUFBa0NoRCxLQUFsQyxDQUFQO0FBQ0g7QUFDRCxtQkFBT0EsS0FBUDtBQUNIO0FBbEVMO0FBQUE7QUFBQSwwQ0FvRXNCQSxLQXBFdEIsRUFvRTZCO0FBQ3JCLGdCQUFJLEtBQUs2QyxPQUFMLENBQWEsS0FBS1UsV0FBbEIsRUFBK0IsSUFBL0IsQ0FBSixFQUEwQztBQUN0Qyx1QkFBTyxLQUFLL0UsSUFBTCxDQUFVLEtBQUsrRSxXQUFMLENBQWlCVCxLQUFqQixDQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFWLEVBQTJDOUMsS0FBM0MsQ0FBUDtBQUNIO0FBQ0QsbUJBQU8sS0FBSzZFLHNCQUFMLENBQTRCN0UsS0FBNUIsQ0FBUDtBQUNIO0FBekVMO0FBQUE7QUFBQSwrQ0EyRTJCQSxLQTNFM0IsRUEyRWtDO0FBQzFCQSxvQkFBUSxDQUFDQSxLQUFELElBQVVnQixNQUFNaEIsS0FBTixDQUFWLEdBQXlCLEVBQXpCLEdBQThCQSxLQUF0QztBQUNBLGdCQUFJLEtBQUt1RCxXQUFMLEtBQXFCLFFBQXpCLEVBQW1DO0FBQy9CLG9CQUFNdUIsU0FBVUMsT0FBTy9FLEtBQVAsQ0FBaEI7QUFDQSx1QkFBT2dCLE1BQU04RCxNQUFOLElBQWdCLENBQWhCLEdBQW9CQSxNQUEzQjtBQUNILGFBSEQsTUFHTyxJQUFJLEtBQUt2QixXQUFMLEtBQXFCLEtBQXpCLEVBQWdDO0FBQ25DLG9CQUFNeUIsV0FBV0MsU0FBU2pGLEtBQVQsQ0FBakI7QUFDQSx1QkFBT2dCLE1BQU1nRSxRQUFOLElBQWtCLENBQWxCLEdBQXNCQSxRQUE3QjtBQUNILGFBSE0sTUFHQSxJQUFJLEtBQUt6QixXQUFMLEtBQXFCLFNBQXpCLEVBQW9DO0FBQ3ZDLHVCQUFPdkQsTUFBTThCLFdBQU4sT0FBd0IsT0FBL0I7QUFDSDtBQUNELG1CQUFPOUIsS0FBUDtBQUNIO0FBdkZMO0FBQUE7QUFBQSx3Q0F5Rm9CQSxLQXpGcEIsRUF5RjJCaUUsR0F6RjNCLEVBeUZnQ2lCLEtBekZoQyxFQXlGdUNDLEdBekZ2QyxFQXlGNEM7QUFDcENELG9CQUFRSCxPQUFPRyxLQUFQLENBQVI7QUFDQUMsa0JBQU1KLE9BQU9JLEdBQVAsQ0FBTjtBQUNBLGdCQUFJQyxTQUFTcEYsTUFBTXFGLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUJILEtBQW5CLElBQTRCakIsR0FBNUIsR0FBa0NqRSxNQUFNcUYsU0FBTixDQUFnQkYsR0FBaEIsQ0FBL0M7QUFDQSxnQkFBSSxLQUFLdEMsT0FBTCxDQUFhLEtBQUtXLGVBQWxCLEVBQW1DLElBQW5DLENBQUosRUFBOEM7QUFDMUMsdUJBQU8sS0FBS2hGLElBQUwsQ0FBVSxLQUFLZ0YsZUFBTCxDQUFxQlYsS0FBckIsQ0FBMkIsSUFBM0IsRUFBaUMsQ0FBakMsQ0FBVixFQUErQzlDLEtBQS9DLEVBQXNEaUUsR0FBdEQsRUFBMkRtQixNQUEzRCxFQUFtRUYsS0FBbkUsRUFBMEVDLEdBQTFFLENBQVA7QUFDSDtBQUNELG1CQUFPLEtBQUtHLHFCQUFMLENBQTJCdEYsS0FBM0IsRUFBa0NpRSxHQUFsQyxFQUF1Q21CLE1BQXZDLEVBQStDRixLQUEvQyxFQUFzREMsR0FBdEQsQ0FBUDtBQUNIO0FBakdMO0FBQUE7QUFBQSw4Q0FtRzBCbkYsS0FuRzFCLEVBbUdpQ2lFLEdBbkdqQyxFQW1Hc0NtQixNQW5HdEMsRUFtRzhDRixLQW5HOUMsRUFtR3FEQyxHQW5HckQsRUFtRzBEO0FBQ2xEQyxxQkFBUyxDQUFDcEYsS0FBRCxJQUFVZ0IsTUFBTW9FLE1BQU4sQ0FBVixHQUEwQixFQUExQixHQUErQkEsTUFBeEM7QUFDQSxnQkFBSSxLQUFLNUIsZUFBVCxFQUEwQjtBQUN0QixvQkFBTStCLE1BQU0sSUFBSUMsTUFBSixDQUFXLEtBQUtoQyxlQUFoQixDQUFaO0FBQ0EsdUJBQU8rQixJQUFJRSxJQUFKLENBQVNMLE1BQVQsQ0FBUDtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIO0FBMUdMO0FBQUE7QUFBQSxpQ0E0R2E7QUFDTCxnQkFBSSxDQUFDLEtBQUt4QixPQUFWLEVBQW1CO0FBQ2Ysb0JBQUk1RCxRQUFRLEtBQUs0QyxrQkFBTCxDQUF3QixLQUFLUixRQUFMLEVBQXhCLENBQVo7QUFDQSxvQkFBSXBDLFVBQVUwRixTQUFWLElBQXVCMUYsVUFBVSxJQUFyQyxFQUEyQztBQUN2Q0EsNEJBQVEsRUFBUjtBQUNIO0FBQ0Qsb0JBQUlBLFNBQVMsS0FBS3pCLEVBQUwsQ0FBUXlCLEtBQXJCLEVBQTRCO0FBQ3hCLHlCQUFLekIsRUFBTCxDQUFReUIsS0FBUixHQUFnQkEsS0FBaEI7QUFDSDtBQUNKO0FBQ0o7QUF0SEw7QUFBQTtBQUFBLCtCQXdIVztBQUNILGlCQUFLLElBQUluQixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS0osT0FBTCxDQUFhSyxNQUFqQyxFQUF5Q0QsR0FBekMsRUFBOEM7QUFDMUMscUJBQUtKLE9BQUwsQ0FBYUksQ0FBYixFQUFnQjZGLElBQWhCO0FBQ0g7QUFDSjtBQTVITDtBQUFBO0FBQUEsaUNBOEhhNUUsSUE5SGIsRUE4SG1CdkIsRUE5SG5CLEVBOEh1Qm9ILElBOUh2QixFQThINkI7QUFDckIsZ0JBQUlwSCxHQUFHcUgsZ0JBQVAsRUFDSXJILEdBQUdxSCxnQkFBSCxDQUFvQjlGLElBQXBCLEVBQTBCNkYsSUFBMUIsRUFBZ0MsS0FBaEMsRUFESixLQUVLLElBQUlFLEtBQUtDLFdBQVQsRUFBc0I7QUFDdkJ2SCxtQkFBR3VILFdBQUgsQ0FBZSxPQUFPaEcsSUFBdEIsRUFBNEI2RixJQUE1QjtBQUNIO0FBQ0o7QUFwSUw7O0FBQUE7QUFBQSxFQUEwQ3pELEtBQTFDLEU7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFNNkQsWUFBWSxtQkFBQXZHLENBQVEsQ0FBUixDQUFsQjtBQUNBbkIsT0FBT0MsT0FBUDtBQUNJLDhCQUFZQyxFQUFaLEVBQWdCeUIsS0FBaEIsRUFBdUJ4QixJQUF2QixFQUE2QkMsT0FBN0IsRUFBc0M7QUFBQTs7QUFDbEMsYUFBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsYUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsWUFBTXVILFNBQVNoRyxNQUFNOEMsS0FBTixDQUFZLEdBQVosQ0FBZjtBQUNBLGFBQUssSUFBSWpFLElBQUksQ0FBYixFQUFnQkEsSUFBSW1ILE9BQU9sSCxNQUEzQixFQUFtQ0QsR0FBbkMsRUFBd0M7QUFDcEMsZ0JBQU04RixVQUFVcUIsT0FBT25ILENBQVAsQ0FBaEI7QUFDQThGLG9CQUFRc0IsSUFBUjtBQUNBLGdCQUFJdEIsUUFBUTdGLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIscUJBQUtvSCxXQUFMLENBQWlCRixPQUFPbkgsQ0FBUCxDQUFqQjtBQUNIO0FBQ0o7QUFDSjs7QUFiTDtBQUFBO0FBQUEsb0NBY2dCc0gsSUFkaEIsRUFjc0I7QUFDZEEsbUJBQU9BLEtBQUtyRCxLQUFMLENBQVcsR0FBWCxDQUFQO0FBQ0EsZ0JBQU1YLFdBQVdnRSxLQUFLLENBQUwsQ0FBakI7QUFDQSxnQkFBTS9HLG1CQUFtQitHLEtBQUssQ0FBTCxLQUFXaEUsUUFBcEM7QUFDQSxnQkFBSTRELFNBQUosQ0FBYyxLQUFLeEgsRUFBbkIsRUFBdUIsS0FBS0MsSUFBNUIsRUFBa0MsS0FBS0MsT0FBdkMsRUFBZ0RXLGdCQUFoRCxFQUFrRStDLFFBQWxFO0FBQ0g7QUFuQkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7OztBQ0RBLElBQU1pRSxhQUFhLG1CQUFBNUcsQ0FBUSxDQUFSLENBQW5CO0FBQ0FuQixPQUFPQyxPQUFQLEdBQ0ksMkJBQVlDLEVBQVosRUFBZ0J5QixLQUFoQixFQUF1QnhCLElBQXZCLEVBQTZCQyxPQUE3QixFQUFzQztBQUFBOztBQUNsQyxTQUFLRixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFNdUgsU0FBU2hHLE1BQU04QyxLQUFOLENBQVksR0FBWixDQUFmO0FBQ0EsU0FBSyxJQUFJakUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJbUgsT0FBT2xILE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUNwQyxZQUFNOEYsVUFBVXFCLE9BQU9uSCxDQUFQLENBQWhCO0FBQ0E4RixnQkFBUXNCLElBQVI7QUFDQSxZQUFJdEIsUUFBUTdGLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsZ0JBQUlzSCxVQUFKLENBQWU3SCxFQUFmLEVBQW1CQyxJQUFuQixFQUF5QkMsT0FBekIsRUFBa0NrRyxPQUFsQztBQUNIO0FBQ0o7QUFDSixDQWJMLEM7Ozs7Ozs7Ozs7O0FDREEsSUFBTTBCLFlBQVksbUJBQUE3RyxDQUFRLENBQVIsQ0FBbEI7QUFDQW5CLE9BQU9DLE9BQVAsR0FDSSwwQkFBWUMsRUFBWixFQUFnQnlCLEtBQWhCLEVBQXVCeEIsSUFBdkIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQUE7O0FBQ2xDLFNBQUtGLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQU11SCxTQUFTaEcsTUFBTThDLEtBQU4sQ0FBWSxHQUFaLENBQWY7QUFDQSxRQUFJdUQsU0FBSixDQUFjOUgsRUFBZCxFQUFrQkMsSUFBbEIsRUFBd0JDLE9BQXhCLEVBQWlDdUgsT0FBTyxDQUFQLENBQWpDLEVBQTRDQSxPQUFPLENBQVAsQ0FBNUM7QUFDSCxDQVBMLEM7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFNTSxhQUFhLG1CQUFBOUcsQ0FBUSxFQUFSLENBQW5CO0FBQ0FuQixPQUFPQyxPQUFQO0FBQ0ksK0JBQVlDLEVBQVosRUFBZ0J5QixLQUFoQixFQUF1QnhCLElBQXZCLEVBQTZCQyxPQUE3QixFQUFzQztBQUFBOztBQUNsQyxhQUFLRixFQUFMLEdBQVVBLEVBQVY7QUFDQSxhQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxZQUFNdUgsU0FBU2hHLE1BQU04QyxLQUFOLENBQVksR0FBWixDQUFmO0FBQ0EsYUFBSyxJQUFJakUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJbUgsT0FBT2xILE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUNwQyxnQkFBTThGLFVBQVVxQixPQUFPbkgsQ0FBUCxDQUFoQjtBQUNBOEYsb0JBQVFzQixJQUFSO0FBQ0EsZ0JBQUl0QixRQUFRN0YsTUFBUixLQUFtQixDQUF2QixFQUEwQjtBQUN0QixxQkFBS3lILFlBQUwsQ0FBa0JQLE9BQU9uSCxDQUFQLENBQWxCO0FBQ0g7QUFDSjtBQUNKOztBQWJMO0FBQUE7QUFBQSxxQ0FjaUJzSCxJQWRqQixFQWN1QjtBQUNmQSxtQkFBT0EsS0FBS3JELEtBQUwsQ0FBVyxHQUFYLENBQVA7QUFDQSxnQkFBSUcsWUFBWWtELEtBQUssQ0FBTCxDQUFoQjtBQUNBbEQsd0JBQVlBLFVBQVVILEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBWjtBQUNBLGdCQUFNSSxPQUFPRCxVQUFVLENBQVYsQ0FBYjtBQUNBQSx3QkFBWUEsVUFBVSxDQUFWLENBQVo7QUFDQSxnQkFBTTdELG1CQUFtQitHLEtBQUssQ0FBTCxLQUFXbEQsU0FBcEM7QUFDQSxnQkFBSXFELFVBQUosQ0FBZSxLQUFLL0gsRUFBcEIsRUFBd0IsS0FBS0MsSUFBN0IsRUFBbUMsS0FBS0MsT0FBeEMsRUFBaURXLGdCQUFqRCxFQUFtRTZELFNBQW5FLEVBQThFQyxJQUE5RTtBQUNIO0FBdEJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7QUNEQSxJQUFNc0QsWUFBWSxtQkFBQWhILENBQVEsRUFBUixDQUFsQjtBQUNBbkIsT0FBT0MsT0FBUCxHQUNJLDBCQUFZQyxFQUFaLEVBQWdCeUIsS0FBaEIsRUFBdUJ4QixJQUF2QixFQUE2QkMsT0FBN0IsRUFBc0M7QUFBQTs7QUFDbEMsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBTXVILFNBQVNoRyxNQUFNOEMsS0FBTixDQUFZLEdBQVosQ0FBZjtBQUNBLFFBQUkwRCxTQUFKLENBQWNqSSxFQUFkLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUN1SCxPQUFPLENBQVAsQ0FBakMsRUFBNENBLE9BQU8sQ0FBUCxDQUE1QztBQUNILENBUEwsQzs7Ozs7Ozs7Ozs7QUNEQSxJQUFNUyxhQUFhLG1CQUFBakgsQ0FBUSxFQUFSLENBQW5CO0FBQ0FuQixPQUFPQyxPQUFQLEdBQ0ksMEJBQVlDLEVBQVosRUFBZ0J5QixLQUFoQixFQUF1QnhCLElBQXZCLEVBQTZCQyxPQUE3QixFQUFzQztBQUFBOztBQUNsQyxTQUFLRixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFJdUgsU0FBU2hHLE1BQU04QyxLQUFOLENBQVksR0FBWixDQUFiO0FBQ0EsUUFBTTRELFFBQVFWLE9BQU8sQ0FBUCxDQUFkO0FBQ0FBLGFBQVNBLE9BQU8sQ0FBUCxFQUFVbEQsS0FBVixDQUFnQixHQUFoQixDQUFUO0FBQ0EsUUFBSTJELFVBQUosQ0FBZWxJLEVBQWYsRUFBbUJDLElBQW5CLEVBQXlCQyxPQUF6QixFQUFrQ3VILE9BQU8sQ0FBUCxDQUFsQyxFQUE2Q0EsT0FBTyxDQUFQLENBQTdDLEVBQXdEQSxPQUFPLENBQVAsQ0FBeEQsRUFBbUVBLE9BQU8sQ0FBUCxDQUFuRSxFQUE4RUEsT0FBTyxDQUFQLENBQTlFLEVBQXlGVSxLQUF6RjtBQUNILENBVEwsQzs7Ozs7Ozs7OztBQ0RBQyxPQUFPQyxZQUFQLEdBQXNCLG1CQUFBcEgsQ0FBUSxDQUFSLENBQXRCLEM7Ozs7Ozs7Ozs7O0FDQUFuQixPQUFPQyxPQUFQLEdBQ0ksZUFBWW9JLEtBQVosRUFBbUJHLGFBQW5CLEVBQWtDO0FBQUE7O0FBQzlCLFNBQUssSUFBSUMsQ0FBVCxJQUFjSixLQUFkLEVBQXFCO0FBQ2pCLGFBQUtJLENBQUwsSUFBVUosTUFBTUksQ0FBTixDQUFWO0FBQ0g7QUFDRCxTQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNILENBTkwsQyIsImZpbGUiOiJkaHRtbHdlYi10ZW1wbGF0ZS1jb21waWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhjZGE1OTFiYzhmZTI2ZDY5OWNlIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXYXRjaCB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZpZXcsIHNpZ25hbHMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWduYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzaWduYWxzW2ldLm9uKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5kV2l0aChzdHIsIHNmeCkge1xuICAgICAgICByZXR1cm4gc3RyLmluZGV4T2Yoc2Z4KSA9PT0gc3RyLmxlbmd0aCAtIHNmeC5sZW5ndGg7XG4gICAgfVxuXG4gICAgc3RhcnRXaXRoKHN0ciwgcGZ4KSB7XG4gICAgICAgIHJldHVybiBzdHIuaW5kZXhPZihwZngpID09PSAwO1xuICAgIH1cblxuICAgIGdldFZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5saXN0ZW5lZFByb3BlcnR5LmluZGV4T2YoXCIoXCIpICE9PSAtMSAmJiB0aGlzLmxpc3RlbmVkUHJvcGVydHkuaW5kZXhPZihcIilcIikgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZXZhbChgdGhpcy52aWV3LiR7dGhpcy5saXN0ZW5lZFByb3BlcnR5fWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlldy5nZXQodGhpcy5saXN0ZW5lZFByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL1dhdGNoLmpzIiwiY29uc3QgV2F0Y2hIYW5kbGVyID0gcmVxdWlyZShcIi4vV2F0Y2hIYW5kbGVyXCIpO1xuZnVuY3Rpb24gY29tcGlsZUVMKGVsLCB2aWV3LCBzaWduYWxzKSB7XG4gICAgZm9yIChsZXQgYXR0LCBpID0gMCwgYXR0cyA9IGVsLmF0dHJpYnV0ZXMsIG4gPSBhdHRzLmxlbmd0aDsgaSA8IG47IGkrKyl7XG4gICAgICAgIGF0dCA9IGF0dHNbaV07XG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdHQubm9kZU5hbWU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0Lm5vZGVWYWx1ZTtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihcInctXCIpICE9PSAwKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBIYW5kbGVyID0gV2F0Y2hIYW5kbGVyW25hbWVdO1xuICAgICAgICBpZiAoIUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBuZXcgSGFuZGxlcihlbCwgdmFsdWUsIHZpZXcsIHNpZ25hbHMpO1xuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tcGlsZShlbCwgdmlldywgc2lnbmFscywgc2hvdWxkQ2xlYXJTaWduYWwpIHtcbiAgICBpZiAoIShzaWduYWxzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgIHNpZ25hbHMgPSBbc2lnbmFsc107XG4gICAgfVxuICAgIGlmIChzaG91bGRDbGVhclNpZ25hbCkge1xuICAgICAgICBzaWduYWxzLmZvckVhY2goc2lnbmFsID0+IHtcbiAgICAgICAgICAgIHNpZ25hbC5jbGVhbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHMgPSBbZWxdO1xuICAgIHdoaWxlIChzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjZWwgPSBzLnNoaWZ0KCk7XG4gICAgICAgIGNvbXBpbGVFTChjZWwsIHZpZXcsIHNpZ25hbHMpO1xuICAgICAgICBpZiAoY2VsLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzLnB1c2goY2VsLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1dhdGNoQ29tcGlsZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcInctc3R5bGVcIjogcmVxdWlyZShcIi4vd2F0Y2gvV2F0Y2hTdHlsZUhhbmRsZXJcIiksXG4gICAgXCJ3LWNsYXNzXCI6IHJlcXVpcmUoXCIuL3dhdGNoL1dhdGNoQ2xhc3NIYW5kbGVyXCIpLFxuICAgIFwidy1hdHRyXCI6IHJlcXVpcmUoXCIuL3dhdGNoL1dhdGNoQXR0ckhhbmRsZXJcIiksXG4gICAgXCJ3LWh0bWxcIjogcmVxdWlyZShcIi4vd2F0Y2gvV2F0Y2hIdG1sSGFuZGxlclwiKSxcbiAgICBcInctdGV4dFwiOiByZXF1aXJlKFwiLi93YXRjaC9XYXRjaFRleHRIYW5kbGVyXCIpLFxuICAgIFwidy12YWx1ZVwiOiByZXF1aXJlKFwiLi93YXRjaC9XYXRjaFZhbHVlSGFuZGxlclwiKVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvV2F0Y2hIYW5kbGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXYXRjaFNpZ25hbCB7XG4gICAgY29uc3RydWN0b3IoZGVsYXksIGJ5cGFzc1RocmVzaG9sZCkge1xuICAgICAgICB0aGlzLmRlbGF5ID0gaXNOYU4oZGVsYXkpID8gMTAgOiBkZWxheTtcbiAgICAgICAgdGhpcy5ieXBhc3NUaHJlc2hvbGQgPSBpc05hTihieXBhc3NUaHJlc2hvbGQpID8gMTAgOiBieXBhc3NUaHJlc2hvbGQ7XG4gICAgICAgIHRoaXMuYnlwYXNzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLndhdGNoZXMgPSBbXTtcbiAgICB9XG4gICAgb24od2F0Y2hlcikge1xuICAgICAgICB0aGlzLndhdGNoZXMucHVzaCh3YXRjaGVyKTtcbiAgICB9XG4gICAgdW4od2F0Y2hlcikge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy53YXRjaGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy53YXRjaGVzW2ldID09PSB3YXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBiZWVwKGRlbGF5KXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmdjKCksIDMwMCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZVRpbWVIYW5kbGVyKTtcbiAgICAgICAgaWYgKHRoaXMuYnlwYXNzQ291bnQgPT09IHRoaXMuYnlwYXNzVGhyZXNob2xkKSB7XG4gICAgICAgICAgICB0aGlzLmJ5cGFzc0NvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ieXBhc3NDb3VudCArPSAxO1xuICAgICAgICBkZWxheSA9IGlzTmFOKGRlbGF5KSA/IHRoaXMuZGVsYXkgOiBkZWxheTtcbiAgICAgICAgaWYgKGRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5ieXBhc3NDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVIYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZSgpLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2F0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgd2F0Y2hlciA9IHRoaXMud2F0Y2hlc1tpXTtcbiAgICAgICAgICAgIHdhdGNoZXIudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2MoKSB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHRpbWUgLSB0aGlzLmxhc3RHQ1RpbWUgPiA2MCAqIDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMubGFzdEdDVGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLl9nYygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzTW9udGVkKGVsKSB7XG4gICAgICAgIHdoaWxlIChlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgbm9kZU5hbWUgPSBlbC5ub2RlTmFtZTtcbiAgICAgICAgcmV0dXJuIG5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaHRtbFwiO1xuICAgIH1cbiAgICBjbGVhbigpIHtcbiAgICAgICAgdGhpcy53YXRjaGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIF9nYygpIHtcbiAgICAgICAgY29uc3QgbiA9IHRoaXMud2F0Y2hlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3Qgd2F0Y2ggPSB0aGlzLndhdGNoZXNbaV07XG4gICAgICAgICAgICBpZiAodGltZSAtIHdhdGNoLmNyZWF0ZVRpbWUgPiA1ICogNjAgKiAxMDAwICYmICF0aGlzLmlzTW9udGVkKHdhdGNoLmVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2hlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9XYXRjaFNpZ25hbC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNvbXBpbGU6IHJlcXVpcmUoXCIuL1dhdGNoQ29tcGlsZXJcIiksXG4gICAgU2lnbmFsOiByZXF1aXJlKFwiLi9XYXRjaFNpZ25hbFwiKVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJjb25zdCBXYXRjaCA9IHJlcXVpcmUoXCIuL1dhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBdHRyV2F0Y2ggZXh0ZW5kcyBXYXRjaCB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZpZXcsIHNpZ25hbHMsIGxpc3RlbmVkUHJvcGVydHksIGF0dHJOYW1lKSB7XG4gICAgICAgIHN1cGVyKGVsLCB2aWV3LCBzaWduYWxzKTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IGF0dHJOYW1lO1xuICAgICAgICB0aGlzLmxpc3RlbmVkUHJvcGVydHkgPSBsaXN0ZW5lZFByb3BlcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuYXR0ck5hbWUgPT09IFwiZGlzYWJsZWRcIiB8fCB0aGlzLmF0dHJOYW1lID09PSBcInJlYWRvbmx5XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL0F0dHJXYXRjaC5qcyIsImNvbnN0IFdhdGNoID0gcmVxdWlyZShcIi4vV2F0Y2hcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENsYXNzV2F0Y2ggZXh0ZW5kcyBXYXRjaCB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZpZXcsIHNpZ25hbHMsIGxpc3RlbmVkUHJvcGVydHkpIHtcbiAgICAgICAgc3VwZXIoZWwsIHZpZXcsIHNpZ25hbHMpO1xuICAgICAgICB0aGlzLmxpc3RlbmVkUHJvcGVydHkgPSBsaXN0ZW5lZFByb3BlcnR5OyAgXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL0NsYXNzV2F0Y2guanMiLCJjb25zdCBXYXRjaCA9IHJlcXVpcmUoXCIuL1dhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBIdG1sV2F0Y2ggZXh0ZW5kcyBXYXRjaCB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZpZXcsIHNpZ25hbHMsIGxpc3RlbmVkUHJvcGVydHksIG91dHB1dEZvcm1hdCkge1xuICAgICAgICBzdXBlcihlbCwgdmlldywgc2lnbmFscyk7XG4gICAgICAgIHRoaXMubGlzdGVuZWRQcm9wZXJ0eSA9IGxpc3RlbmVkUHJvcGVydHk7XG4gICAgICAgIHRoaXMub3V0cHV0Rm9ybWF0ID0gb3V0cHV0Rm9ybWF0IHx8IFwiXCI7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuZ2V0Rm9ybWF0dGVkT3V0cHV0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZE91dHB1dCh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbmRXaXRoKHRoaXMub3V0cHV0Rm9ybWF0LCBcIigpXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWV3W3RoaXMub3V0cHV0Rm9ybWF0LnNwbGl0KFwiKClcIilbMF1dKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFuZGFyZEZvcm1hdHRlZE91dHB1dCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgc3RhbmRhcmRGb3JtYXR0ZWRPdXRwdXQodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAhdmFsdWUgJiYgaXNOYU4odmFsdWUpID8gXCJcIiA6IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5vdXRwdXRGb3JtYXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dHB1dEZvcm1hdC5yZXBsYWNlKFwiezB9XCIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2F0Y2gvSHRtbFdhdGNoLmpzIiwiY29uc3QgV2F0Y2ggPSByZXF1aXJlKFwiLi9XYXRjaFwiKTtcbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgU3R5bGVXYXRjaCBleHRlbmRzIFdhdGNoIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmlldywgc2lnbmFscywgbGlzdGVuZWRQcm9wZXJ0eSwgc3R5bGVOYW1lLCB1bml0KSB7XG4gICAgICAgIHN1cGVyKGVsLCB2aWV3LCBzaWduYWxzKTtcbiAgICAgICAgdGhpcy5zdHlsZU5hbWUgPSBzdHlsZU5hbWU7XG4gICAgICAgIHRoaXMubGlzdGVuZWRQcm9wZXJ0eSA9IGxpc3RlbmVkUHJvcGVydHk7XG4gICAgICAgIHRoaXMudW5pdCA9IHVuaXQgfHwgXCJcIjsgICBcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZWwuc3R5bGVbdGhpcy5zdHlsZU5hbWVdID0gdmFsdWUgKyB0aGlzLnVuaXQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL1N0eWxlV2F0Y2guanMiLCJjb25zdCBXYXRjaCA9IHJlcXVpcmUoXCIuL1dhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUZXh0V2F0Y2ggZXh0ZW5kcyBXYXRjaCB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZpZXcsIHNpZ25hbHMsIGxpc3RlbmVkUHJvcGVydHksIG91dHB1dEZvcm1hdCkge1xuICAgICAgICBzdXBlcihlbCwgdmlldywgc2lnbmFscyk7XG4gICAgICAgIHRoaXMubGlzdGVuZWRQcm9wZXJ0eSA9IGxpc3RlbmVkUHJvcGVydHk7XG4gICAgICAgIHRoaXMub3V0cHV0Rm9ybWF0ID0gb3V0cHV0Rm9ybWF0IHx8IFwiXCI7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gdGhpcy5nZXRGb3JtYXR0ZWRPdXRwdXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkT3V0cHV0KHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZFdpdGgodGhpcy5vdXRwdXRGb3JtYXQsIFwiKClcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZXdbdGhpcy5vdXRwdXRGb3JtYXQuc3BsaXQoXCIoKVwiKVswXV0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YW5kYXJkRm9ybWF0dGVkT3V0cHV0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBzdGFuZGFyZEZvcm1hdHRlZE91dHB1dCh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9ICF2YWx1ZSAmJiBpc05hTih2YWx1ZSkgPyBcIlwiIDogdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLm91dHB1dEZvcm1hdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0Rm9ybWF0LnJlcGxhY2UoXCJ7MH1cIiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93YXRjaC9UZXh0V2F0Y2guanMiLCJjb25zdCBXYXRjaCA9IHJlcXVpcmUoXCIuL1dhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDbGFzc1dhdGNoIGV4dGVuZHMgV2F0Y2gge1xuICAgIGNvbnN0cnVjdG9yKGVsLCB2aWV3LCBzaWduYWxzLCBsaXN0ZW5lZFByb3BlcnR5LCBmZWVkYmFja1Byb3BlcnR5LCBkaXNwbGF5Rm9ybWF0LCBpbnB1dFBhcnNlciwgYWNjZXB0VmFsaWRhdG9yLCBmZWVkYmFja0V2ZW50KSB7XG4gICAgICAgIHN1cGVyKGVsLCB2aWV3LCBzaWduYWxzKTtcbiAgICAgICAgdGhpcy5zaWduYWxzID0gc2lnbmFscztcbiAgICAgICAgdGhpcy5saXN0ZW5lZFByb3BlcnR5ID0gbGlzdGVuZWRQcm9wZXJ0eTtcbiAgICAgICAgaWYgKGZlZWRiYWNrUHJvcGVydHkuaW5kZXhPZihcIigpXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCAke2ZlZWRiYWNrUHJvcGVydHl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWVkYmFja1Byb3BlcnR5ID0gZmVlZGJhY2tQcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gZGlzcGxheUZvcm1hdCB8fCBcIlwiO1xuICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSB0aGlzLmVuZFdpdGgodGhpcy5kaXNwbGF5Rm9ybWF0LCBcIigpXCIpID8gdGhpcy5kaXNwbGF5Rm9ybWF0IDogdGhpcy52aWV3LmdldCh0aGlzLmRpc3BsYXlGb3JtYXQpIHx8IFwiXCI7XG4gICAgICAgIHRoaXMuaW5wdXRQYXJzZXIgPSBpbnB1dFBhcnNlciB8fCBcIlwiO1xuICAgICAgICB0aGlzLmlucHV0UGFyc2VyID0gdGhpcy5lbmRXaXRoKHRoaXMuaW5wdXRQYXJzZXIsIFwiKClcIikgPyB0aGlzLmlucHV0UGFyc2VyIDogdGhpcy52aWV3LmdldCh0aGlzLmlucHV0UGFyc2VyKSB8fCBcIlwiO1xuICAgICAgICB0aGlzLmFjY2VwdFZhbGlkYXRvciA9IGFjY2VwdFZhbGlkYXRvciB8fCBcIlwiO1xuICAgICAgICB0aGlzLmFjY2VwdFZhbGlkYXRvciA9IHRoaXMuZW5kV2l0aCh0aGlzLmFjY2VwdFZhbGlkYXRvciwgXCIoKVwiKSA/IHRoaXMuYWNjZXB0VmFsaWRhdG9yIDogdGhpcy52aWV3LmdldCh0aGlzLmFjY2VwdFZhbGlkYXRvcikgfHwgXCJcIjtcbiAgICAgICAgdGhpcy5hZGRFdmVudChcImZvY3VzXCIsIHRoaXMuZWwsIGV2dCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSB8fCBcIlwiO1xuICAgICAgICAgICAgdGhpcy5lbC5zZWxlY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoXCJibHVyXCIsIHRoaXMuZWwsIGV2dCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWwudmFsdWUgPSB0aGlzLmdldEZvcm1hdHRlZE91dHB1dCh0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudChcImtleXByZXNzXCIsIHRoaXMuZWwsIGV2dCA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY2NlcHRhYmxlID0gdGhpcy5pc0lucHV0QWNjZXB0ZWQodGhpcy5lbC52YWx1ZSwgZXZ0LmtleSwgdGhpcy5lbC5zZWxlY3Rpb25TdGFydCwgdGhpcy5lbC5zZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgaWYoIWFjY2VwdGFibGUpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZlZWRiYWNrRXZlbnQgPSBmZWVkYmFja0V2ZW50ID8gdGhpcy52aWV3LmdldChmZWVkYmFja0V2ZW50KSA6IFwia2V5dXBcIjtcbiAgICAgICAgY29uc3QgZmVlZGJhY2tFdmVudHMgPSAoZmVlZGJhY2tFdmVudCB8fCBcImtleXVwXCIpLnNwbGl0KFwifFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWVkYmFja0V2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZSA9IGZlZWRiYWNrRXZlbnRzW2ldO1xuICAgICAgICAgICAgY29uc3QgZXMgPSBlLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgIC8vVE9ETyBoYW5kbGUgdGhlIGtleVxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudChlc1swXSwgdGhpcy5lbCwgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0Rm9ybWF0dGVkSW5wdXQodGhpcy5lbC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmVlcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbmRXaXRoKHRoaXMuZmVlZGJhY2tQcm9wZXJ0eSwgXCIpXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzID0gYHRoaXMudmlldy4ke3RoaXMuZmVlZGJhY2tQcm9wZXJ0eS5yZXBsYWNlKFwiKVwiLCBcIiwgdmFsdWUpXCIpfWA7XG4gICAgICAgICAgICBldmFsKGV4cHJlc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnNldCh0aGlzLmZlZWRiYWNrUHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZE91dHB1dCh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbmRXaXRoKHRoaXMuZGlzcGxheUZvcm1hdCwgXCIoKVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlld1t0aGlzLmRpc3BsYXlGb3JtYXQuc3BsaXQoXCIoKVwiKVswXV0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YW5kYXJkRm9ybWF0dGVkT3V0cHV0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBzdGFuZGFyZEZvcm1hdHRlZE91dHB1dCh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9ICF2YWx1ZSAmJiBpc05hTih2YWx1ZSkgPyBcIlwiIDogdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGb3JtYXQucmVwbGFjZShcInswfVwiLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZElucHV0KHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZFdpdGgodGhpcy5pbnB1dFBhcnNlciwgXCIoKVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlld1t0aGlzLmlucHV0UGFyc2VyLnNwbGl0KFwiKClcIilbMF1dKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFuZGFyZEZvcm1hdHRlZElucHV0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBzdGFuZGFyZEZvcm1hdHRlZElucHV0KHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gIXZhbHVlICYmIGlzTmFOKHZhbHVlKSA/IFwiXCIgOiB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRQYXJzZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlciA9ICBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGlzTmFOKG51bWJlcikgPyAwIDogbnVtYmVyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRQYXJzZXIgPT09IFwiaW50XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGludFZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGlzTmFOKGludFZhbHVlKSA/IDAgOiBpbnRWYWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlucHV0UGFyc2VyID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgIT09IFwiZmFsc2VcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaXNJbnB1dEFjY2VwdGVkKHZhbHVlLCBrZXksIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpO1xuICAgICAgICBlbmQgPSBOdW1iZXIoZW5kKTtcbiAgICAgICAgbGV0IGV4cGVjdCA9IHZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyBrZXkgKyB2YWx1ZS5zdWJzdHJpbmcoZW5kKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kV2l0aCh0aGlzLmFjY2VwdFZhbGlkYXRvciwgXCIoKVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlld1t0aGlzLmFjY2VwdFZhbGlkYXRvci5zcGxpdChcIigpXCIpWzBdXSh2YWx1ZSwga2V5LCBleHBlY3QsIHN0YXJ0LCBlbmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YW5kYXJkSW5wdXRBY2NlcHRlZCh2YWx1ZSwga2V5LCBleHBlY3QsIHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIHN0YW5kYXJkSW5wdXRBY2NlcHRlZCh2YWx1ZSwga2V5LCBleHBlY3QsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgZXhwZWN0ID0gIXZhbHVlICYmIGlzTmFOKGV4cGVjdCkgPyBcIlwiIDogZXhwZWN0O1xuICAgICAgICBpZiAodGhpcy5hY2NlcHRWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHJleCA9IG5ldyBSZWdFeHAodGhpcy5hY2NlcHRWYWxpZGF0b3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJleC50ZXN0KGV4cGVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRGb3JtYXR0ZWRPdXRwdXQodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMuZWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiZWVwKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2lnbmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zaWduYWxzW2ldLmJlZXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEV2ZW50KG5hbWUsIGVsLCBmdW5jKSB7XG4gICAgICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgaWYgKGVsZW0uYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGVsLmF0dGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGZ1bmMpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2F0Y2gvVmFsdWVXYXRjaC5qcyIsImNvbnN0IEF0dHJXYXRjaCA9IHJlcXVpcmUoXCIuL0F0dHJXYXRjaFwiKTtcbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgV2F0Y2hBdHRySGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZhbHVlLCB2aWV3LCBzaWduYWxzKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5zaWduYWxzID0gc2lnbmFscztcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXhwcmVzcyA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgIGV4cHJlc3MudHJpbSgpO1xuICAgICAgICAgICAgaWYgKGV4cHJlc3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQXR0cih2YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NBdHRyKHBhaXIpIHtcbiAgICAgICAgcGFpciA9IHBhaXIuc3BsaXQoXCI6XCIpO1xuICAgICAgICBjb25zdCBhdHRyTmFtZSA9IHBhaXJbMF07XG4gICAgICAgIGNvbnN0IGxpc3RlbmVkUHJvcGVydHkgPSBwYWlyWzFdIHx8IGF0dHJOYW1lO1xuICAgICAgICBuZXcgQXR0cldhdGNoKHRoaXMuZWwsIHRoaXMudmlldywgdGhpcy5zaWduYWxzLCBsaXN0ZW5lZFByb3BlcnR5LCBhdHRyTmFtZSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93YXRjaC9XYXRjaEF0dHJIYW5kbGVyLmpzIiwiY29uc3QgQ2xhc3NXYXRjaCA9IHJlcXVpcmUoXCIuL0NsYXNzV2F0Y2hcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhdGNoQ2xhc3NIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmFsdWUsIHZpZXcsIHNpZ25hbHMpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLnNpZ25hbHMgPSBzaWduYWxzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIiBcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgZXhwcmVzcy50cmltKCk7XG4gICAgICAgICAgICBpZiAoZXhwcmVzcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXcgQ2xhc3NXYXRjaChlbCwgdmlldywgc2lnbmFscywgZXhwcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL1dhdGNoQ2xhc3NIYW5kbGVyLmpzIiwiY29uc3QgSHRtbFdhdGNoID0gcmVxdWlyZShcIi4vSHRtbFdhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXYXRjaEh0bWxIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmFsdWUsIHZpZXcsIHNpZ25hbHMpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLnNpZ25hbHMgPSBzaWduYWxzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIjpcIik7XG4gICAgICAgIG5ldyBIdG1sV2F0Y2goZWwsIHZpZXcsIHNpZ25hbHMsIHZhbHVlc1swXSwgdmFsdWVzWzFdKTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93YXRjaC9XYXRjaEh0bWxIYW5kbGVyLmpzIiwiY29uc3QgU3R5bGVXYXRjaCA9IHJlcXVpcmUoXCIuL1N0eWxlV2F0Y2hcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhdGNoU3R5bGVIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmFsdWUsIHZpZXcsIHNpZ25hbHMpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLnNpZ25hbHMgPSBzaWduYWxzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIjtcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgZXhwcmVzcy50cmltKCk7XG4gICAgICAgICAgICBpZiAoZXhwcmVzcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NTdHlsZSh2YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NTdHlsZShwYWlyKSB7XG4gICAgICAgIHBhaXIgPSBwYWlyLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgbGV0IHN0eWxlTmFtZSA9IHBhaXJbMF07XG4gICAgICAgIHN0eWxlTmFtZSA9IHN0eWxlTmFtZS5zcGxpdChcIiNcIik7XG4gICAgICAgIGNvbnN0IHVuaXQgPSBzdHlsZU5hbWVbMV07XG4gICAgICAgIHN0eWxlTmFtZSA9IHN0eWxlTmFtZVswXTtcbiAgICAgICAgY29uc3QgbGlzdGVuZWRQcm9wZXJ0eSA9IHBhaXJbMV0gfHwgc3R5bGVOYW1lO1xuICAgICAgICBuZXcgU3R5bGVXYXRjaCh0aGlzLmVsLCB0aGlzLnZpZXcsIHRoaXMuc2lnbmFscywgbGlzdGVuZWRQcm9wZXJ0eSwgc3R5bGVOYW1lLCB1bml0KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL1dhdGNoU3R5bGVIYW5kbGVyLmpzIiwiY29uc3QgVGV4dFdhdGNoID0gcmVxdWlyZShcIi4vVGV4dFdhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXYXRjaFRleHRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmFsdWUsIHZpZXcsIHNpZ25hbHMpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLnNpZ25hbHMgPSBzaWduYWxzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIjpcIik7XG4gICAgICAgIG5ldyBUZXh0V2F0Y2goZWwsIHZpZXcsIHNpZ25hbHMsIHZhbHVlc1swXSwgdmFsdWVzWzFdKTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93YXRjaC9XYXRjaFRleHRIYW5kbGVyLmpzIiwiY29uc3QgVmFsdWVXYXRjaCA9IHJlcXVpcmUoXCIuL1ZhbHVlV2F0Y2hcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhdGNoQXR0ckhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsLCB2YWx1ZSwgdmlldywgc2lnbmFscykge1xuICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuc2lnbmFscyA9IHNpZ25hbHM7XG4gICAgICAgIGxldCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gdmFsdWVzWzFdO1xuICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNbMF0uc3BsaXQoXCI6XCIpO1xuICAgICAgICBuZXcgVmFsdWVXYXRjaChlbCwgdmlldywgc2lnbmFscywgdmFsdWVzWzBdLCB2YWx1ZXNbMV0sIHZhbHVlc1syXSwgdmFsdWVzWzNdLCB2YWx1ZXNbNF0sIGV2ZW50KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL1dhdGNoVmFsdWVIYW5kbGVyLmpzIiwid2luZG93LmR3ZWJDb21waWxlciA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC13aW5kb3cuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEV2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcihldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBmb3IgKGxldCBwIGluIGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzW3BdID0gZXZlbnRbcF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldDtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93YXRjaC9FdmVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=