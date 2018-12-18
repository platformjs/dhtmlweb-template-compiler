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
module.exports = function compile(el, view, signals) {
    if (!(signals instanceof Array)) {
        signals = [signals];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmI4NGE0ODZkODFmZGZiNDk0ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdGNoL1dhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9XYXRjaENvbXBpbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9XYXRjaEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dhdGNoU2lnbmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F0Y2gvQXR0cldhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy93YXRjaC9DbGFzc1dhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy93YXRjaC9IdG1sV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdGNoL1N0eWxlV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdGNoL1RleHRXYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F0Y2gvVmFsdWVXYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F0Y2gvV2F0Y2hBdHRySGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F0Y2gvV2F0Y2hDbGFzc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdGNoL1dhdGNoSHRtbEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdGNoL1dhdGNoU3R5bGVIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy93YXRjaC9XYXRjaFRleHRIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy93YXRjaC9XYXRjaFZhbHVlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgtd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy93YXRjaC9FdmVudC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZWwiLCJ2aWV3Iiwic2lnbmFscyIsImNyZWF0ZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImkiLCJsZW5ndGgiLCJvbiIsInN0ciIsInNmeCIsImluZGV4T2YiLCJwZngiLCJsaXN0ZW5lZFByb3BlcnR5IiwiZXZhbCIsImdldCIsIldhdGNoSGFuZGxlciIsInJlcXVpcmUiLCJjb21waWxlRUwiLCJhdHQiLCJhdHRzIiwiYXR0cmlidXRlcyIsIm4iLCJuYW1lIiwibm9kZU5hbWUiLCJ2YWx1ZSIsIm5vZGVWYWx1ZSIsIkhhbmRsZXIiLCJjb21waWxlIiwiQXJyYXkiLCJzIiwiY2VsIiwic2hpZnQiLCJjaGlsZHJlbiIsInB1c2giLCJkZWxheSIsImJ5cGFzc1RocmVzaG9sZCIsImlzTmFOIiwiYnlwYXNzQ291bnQiLCJ3YXRjaGVzIiwid2F0Y2hlciIsInNwbGljZSIsInNldFRpbWVvdXQiLCJnYyIsImNsZWFyVGltZW91dCIsInVwZGF0ZVRpbWVIYW5kbGVyIiwidXBkYXRlIiwidGltZSIsImxhc3RHQ1RpbWUiLCJfZ2MiLCJwYXJlbnRFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJ3YXRjaCIsImlzTW9udGVkIiwiU2lnbmFsIiwiV2F0Y2giLCJhdHRyTmFtZSIsImdldFZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib3V0cHV0Rm9ybWF0IiwiaW5uZXJIVE1MIiwiZ2V0Rm9ybWF0dGVkT3V0cHV0IiwiZW5kV2l0aCIsInNwbGl0Iiwic3RhbmRhcmRGb3JtYXR0ZWRPdXRwdXQiLCJyZXBsYWNlIiwic3R5bGVOYW1lIiwidW5pdCIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJmZWVkYmFja1Byb3BlcnR5IiwiZGlzcGxheUZvcm1hdCIsImlucHV0UGFyc2VyIiwiYWNjZXB0VmFsaWRhdG9yIiwiZmVlZGJhY2tFdmVudCIsIkVycm9yIiwiYWRkRXZlbnQiLCJmb2N1c2VkIiwic2VsZWN0IiwiYWNjZXB0YWJsZSIsImlzSW5wdXRBY2NlcHRlZCIsImV2dCIsImtleSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwicHJldmVudERlZmF1bHQiLCJmZWVkYmFja0V2ZW50cyIsImUiLCJlcyIsInNldFZhbHVlIiwiZ2V0Rm9ybWF0dGVkSW5wdXQiLCJiZWVwIiwiZXhwcmVzcyIsInNldCIsInN0YW5kYXJkRm9ybWF0dGVkSW5wdXQiLCJudW1iZXIiLCJOdW1iZXIiLCJpbnRWYWx1ZSIsInBhcnNlSW50Iiwic3RhcnQiLCJlbmQiLCJleHBlY3QiLCJzdWJzdHJpbmciLCJzdGFuZGFyZElucHV0QWNjZXB0ZWQiLCJyZXgiLCJSZWdFeHAiLCJ0ZXN0IiwidW5kZWZpbmVkIiwiZnVuYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbGVtIiwiYXR0YWNoRXZlbnQiLCJBdHRyV2F0Y2giLCJ2YWx1ZXMiLCJ0cmltIiwicHJvY2Vzc0F0dHIiLCJwYWlyIiwiQ2xhc3NXYXRjaCIsIkh0bWxXYXRjaCIsIlN0eWxlV2F0Y2giLCJwcm9jZXNzU3R5bGUiLCJUZXh0V2F0Y2giLCJWYWx1ZVdhdGNoIiwiZXZlbnQiLCJ3aW5kb3ciLCJkd2ViQ29tcGlsZXIiLCJjdXJyZW50VGFyZ2V0IiwicCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hFQUEsT0FBT0MsT0FBUDtBQUNJLG1CQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQkMsT0FBdEIsRUFBK0I7QUFBQTs7QUFDM0IsYUFBS0MsVUFBTCxHQUFrQixJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBbEI7QUFDQSxhQUFLTCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxhQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLLElBQUlLLElBQUksQ0FBYixFQUFnQkEsSUFBSUosUUFBUUssTUFBNUIsRUFBb0NELEdBQXBDLEVBQXlDO0FBQ3JDSixvQkFBUUksQ0FBUixFQUFXRSxFQUFYLENBQWMsSUFBZDtBQUNIO0FBQ0o7O0FBUkw7QUFBQTtBQUFBLGdDQVVZQyxHQVZaLEVBVWlCQyxHQVZqQixFQVVzQjtBQUNkLG1CQUFPRCxJQUFJRSxPQUFKLENBQVlELEdBQVosTUFBcUJELElBQUlGLE1BQUosR0FBYUcsSUFBSUgsTUFBN0M7QUFDSDtBQVpMO0FBQUE7QUFBQSxrQ0FjY0UsR0FkZCxFQWNtQkcsR0FkbkIsRUFjd0I7QUFDaEIsbUJBQU9ILElBQUlFLE9BQUosQ0FBWUMsR0FBWixNQUFxQixDQUE1QjtBQUNIO0FBaEJMO0FBQUE7QUFBQSxtQ0FrQmU7QUFDUCxnQkFBSSxLQUFLQyxnQkFBTCxDQUFzQkYsT0FBdEIsQ0FBOEIsR0FBOUIsTUFBdUMsQ0FBQyxDQUF4QyxJQUE2QyxLQUFLRSxnQkFBTCxDQUFzQkYsT0FBdEIsQ0FBOEIsR0FBOUIsTUFBdUMsQ0FBQyxDQUF6RixFQUE0RjtBQUN4Rix1QkFBT0csb0JBQWtCLEtBQUtELGdCQUF2QixDQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsdUJBQU8sS0FBS1osSUFBTCxDQUFVYyxHQUFWLENBQWMsS0FBS0YsZ0JBQW5CLENBQVA7QUFDSDtBQUNKO0FBeEJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7QUNBQSxJQUFNRyxlQUFlLG1CQUFBQyxDQUFRLENBQVIsQ0FBckI7QUFDQSxTQUFTQyxTQUFULENBQW1CbEIsRUFBbkIsRUFBdUJDLElBQXZCLEVBQTZCQyxPQUE3QixFQUFzQztBQUNsQyxTQUFLLElBQUlpQixHQUFKLEVBQVNiLElBQUksQ0FBYixFQUFnQmMsT0FBT3BCLEdBQUdxQixVQUExQixFQUFzQ0MsSUFBSUYsS0FBS2IsTUFBcEQsRUFBNERELElBQUlnQixDQUFoRSxFQUFtRWhCLEdBQW5FLEVBQXVFO0FBQ25FYSxjQUFNQyxLQUFLZCxDQUFMLENBQU47QUFDQSxZQUFNaUIsT0FBT0osSUFBSUssUUFBakI7QUFDQSxZQUFNQyxRQUFRTixJQUFJTyxTQUFsQjtBQUNBLFlBQUlILEtBQUtaLE9BQUwsQ0FBYSxJQUFiLE1BQXVCLENBQTNCLEVBQThCO0FBQzFCO0FBQ0g7QUFDRCxZQUFNZ0IsVUFBVVgsYUFBYU8sSUFBYixDQUFoQjtBQUNBLFlBQUksQ0FBQ0ksT0FBTCxFQUFjO0FBQ1Y7QUFDSDtBQUNELFlBQUlBLE9BQUosQ0FBWTNCLEVBQVosRUFBZ0J5QixLQUFoQixFQUF1QnhCLElBQXZCLEVBQTZCQyxPQUE3QjtBQUNIO0FBQ0o7QUFDREosT0FBT0MsT0FBUCxHQUFpQixTQUFTNkIsT0FBVCxDQUFpQjVCLEVBQWpCLEVBQXFCQyxJQUFyQixFQUEyQkMsT0FBM0IsRUFBb0M7QUFDakQsUUFBSSxFQUFFQSxtQkFBbUIyQixLQUFyQixDQUFKLEVBQWlDO0FBQzdCM0Isa0JBQVUsQ0FBQ0EsT0FBRCxDQUFWO0FBQ0g7QUFDRCxRQUFJNEIsSUFBSSxDQUFDOUIsRUFBRCxDQUFSO0FBQ0EsV0FBTzhCLEVBQUV2QixNQUFULEVBQWlCO0FBQ2IsWUFBTXdCLE1BQU1ELEVBQUVFLEtBQUYsRUFBWjtBQUNBZCxrQkFBVWEsR0FBVixFQUFlOUIsSUFBZixFQUFxQkMsT0FBckI7QUFDQSxZQUFJNkIsSUFBSUUsUUFBSixDQUFhMUIsTUFBakIsRUFBeUI7QUFDckIsaUJBQUssSUFBSUQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJeUIsSUFBSUUsUUFBSixDQUFhMUIsTUFBakMsRUFBeUNELEdBQXpDLEVBQThDO0FBQzFDd0Isa0JBQUVJLElBQUYsQ0FBT0gsSUFBSUUsUUFBSixDQUFhM0IsQ0FBYixDQUFQO0FBQ0g7QUFDSjtBQUNKO0FBQ0osQ0FkRCxDOzs7Ozs7Ozs7QUNoQkFSLE9BQU9DLE9BQVAsR0FBaUI7QUFDYixlQUFXLG1CQUFBa0IsQ0FBUSxFQUFSLENBREU7QUFFYixlQUFXLG1CQUFBQSxDQUFRLEVBQVIsQ0FGRTtBQUdiLGNBQVUsbUJBQUFBLENBQVEsRUFBUixDQUhHO0FBSWIsY0FBVSxtQkFBQUEsQ0FBUSxFQUFSLENBSkc7QUFLYixjQUFVLG1CQUFBQSxDQUFRLEVBQVIsQ0FMRztBQU1iLGVBQVcsbUJBQUFBLENBQVEsRUFBUjtBQU5FLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7QUNBQW5CLE9BQU9DLE9BQVA7QUFDSSx5QkFBWW9DLEtBQVosRUFBbUJDLGVBQW5CLEVBQW9DO0FBQUE7O0FBQ2hDLGFBQUtELEtBQUwsR0FBYUUsTUFBTUYsS0FBTixJQUFlLEVBQWYsR0FBb0JBLEtBQWpDO0FBQ0EsYUFBS0MsZUFBTCxHQUF1QkMsTUFBTUQsZUFBTixJQUF5QixFQUF6QixHQUE4QkEsZUFBckQ7QUFDQSxhQUFLRSxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLEVBQWY7QUFDSDs7QUFOTDtBQUFBO0FBQUEsMkJBT09DLE9BUFAsRUFPZ0I7QUFDUixpQkFBS0QsT0FBTCxDQUFhTCxJQUFiLENBQWtCTSxPQUFsQjtBQUNIO0FBVEw7QUFBQTtBQUFBLDJCQVVPQSxPQVZQLEVBVWdCO0FBQ1IsaUJBQUssSUFBSWxDLElBQUksS0FBS2lDLE9BQUwsQ0FBYWhDLE1BQWIsR0FBc0IsQ0FBbkMsRUFBc0NELEtBQUssQ0FBM0MsRUFBOENBLEdBQTlDLEVBQW1EO0FBQy9DLG9CQUFJLEtBQUtpQyxPQUFMLENBQWFqQyxDQUFiLE1BQW9Ca0MsT0FBeEIsRUFBaUM7QUFDN0IseUJBQUtELE9BQUwsQ0FBYUUsTUFBYixDQUFvQm5DLENBQXBCLEVBQXVCLENBQXZCO0FBQ0g7QUFDSjtBQUNKO0FBaEJMO0FBQUE7QUFBQSw2QkFpQlM2QixLQWpCVCxFQWlCZTtBQUFBOztBQUNQTyx1QkFBVztBQUFBLHVCQUFNLE1BQUtDLEVBQUwsRUFBTjtBQUFBLGFBQVgsRUFBNEIsR0FBNUI7QUFDQUMseUJBQWEsS0FBS0MsaUJBQWxCO0FBQ0EsZ0JBQUksS0FBS1AsV0FBTCxLQUFxQixLQUFLRixlQUE5QixFQUErQztBQUMzQyxxQkFBS0UsV0FBTCxHQUFtQixDQUFuQjtBQUNBLHFCQUFLUSxNQUFMO0FBQ0E7QUFDSDtBQUNELGlCQUFLUixXQUFMLElBQW9CLENBQXBCO0FBQ0FILG9CQUFRRSxNQUFNRixLQUFOLElBQWUsS0FBS0EsS0FBcEIsR0FBNEJBLEtBQXBDO0FBQ0EsZ0JBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNiLHFCQUFLVyxNQUFMO0FBQ0EscUJBQUtSLFdBQUwsR0FBbUIsQ0FBbkI7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBS08saUJBQUwsR0FBeUJILFdBQVc7QUFBQSwyQkFBTSxNQUFLSSxNQUFMLEVBQU47QUFBQSxpQkFBWCxFQUFnQ1gsS0FBaEMsQ0FBekI7QUFDSDtBQUNKO0FBakNMO0FBQUE7QUFBQSxpQ0FrQ2E7QUFDTCxpQkFBSyxJQUFJN0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtpQyxPQUFMLENBQWFoQyxNQUFqQyxFQUF5Q0QsR0FBekMsRUFBOEM7QUFDMUMsb0JBQU1rQyxVQUFVLEtBQUtELE9BQUwsQ0FBYWpDLENBQWIsQ0FBaEI7QUFDQWtDLHdCQUFRTSxNQUFSO0FBQ0g7QUFDSjtBQXZDTDtBQUFBO0FBQUEsNkJBd0NTO0FBQ0QsZ0JBQU1DLE9BQU8sSUFBSTNDLElBQUosR0FBV0MsT0FBWCxFQUFiO0FBQ0EsZ0JBQUkwQyxPQUFPLEtBQUtDLFVBQVosR0FBeUIsS0FBSyxJQUFsQyxFQUF3QztBQUNwQyxxQkFBS0EsVUFBTCxHQUFrQkQsSUFBbEI7QUFDQSxxQkFBS0UsR0FBTDtBQUNIO0FBQ0o7QUE5Q0w7QUFBQTtBQUFBLGlDQStDYWpELEVBL0NiLEVBK0NpQjtBQUNULG1CQUFPQSxHQUFHa0QsYUFBVixFQUF5QjtBQUNyQmxELHFCQUFLQSxHQUFHa0QsYUFBUjtBQUNIO0FBQ0QsZ0JBQU0xQixXQUFXeEIsR0FBR3dCLFFBQXBCO0FBQ0EsbUJBQU9BLFNBQVMyQixXQUFULE9BQTJCLE1BQWxDO0FBQ0g7QUFyREw7QUFBQTtBQUFBLDhCQXNEVTtBQUNGLGdCQUFNN0IsSUFBSSxLQUFLaUIsT0FBTCxDQUFhaEMsTUFBdkI7QUFDQSxnQkFBTXdDLE9BQU8sSUFBSTNDLElBQUosR0FBV0MsT0FBWCxFQUFiO0FBQ0EsaUJBQUssSUFBSUMsSUFBSWdCLElBQUksQ0FBakIsRUFBb0JoQixLQUFLLENBQXpCLEVBQTRCQSxHQUE1QixFQUFpQztBQUM3QixvQkFBTThDLFFBQVEsS0FBS2IsT0FBTCxDQUFhakMsQ0FBYixDQUFkO0FBQ0Esb0JBQUl5QyxPQUFPSyxNQUFNakQsVUFBYixHQUEwQixJQUFJLEVBQUosR0FBUyxJQUFuQyxJQUEyQyxDQUFDLEtBQUtrRCxRQUFMLENBQWNELE1BQU1wRCxFQUFwQixDQUFoRCxFQUF5RTtBQUNyRSx5QkFBS3VDLE9BQUwsQ0FBYUUsTUFBYixDQUFvQm5DLENBQXBCLEVBQXVCLENBQXZCO0FBQ0g7QUFDSjtBQUNKO0FBL0RMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7O0FDQUFSLE9BQU9DLE9BQVAsR0FBaUI7QUFDYjZCLGFBQVMsbUJBQUFYLENBQVEsQ0FBUixDQURJO0FBRWJxQyxZQUFRLG1CQUFBckMsQ0FBUSxDQUFSO0FBRkssQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNc0MsUUFBUSxtQkFBQXRDLENBQVEsQ0FBUixDQUFkO0FBQ0FuQixPQUFPQyxPQUFQO0FBQUE7O0FBQ0ksdUJBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQlcsZ0JBQS9CLEVBQWlEMkMsUUFBakQsRUFBMkQ7QUFBQTs7QUFBQSwwSEFDakR4RCxFQURpRCxFQUM3Q0MsSUFENkMsRUFDdkNDLE9BRHVDOztBQUV2RCxjQUFLc0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLM0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLGNBQUtpQyxNQUFMO0FBSnVEO0FBSzFEOztBQU5MO0FBQUE7QUFBQSxpQ0FRYTtBQUNMLGdCQUFNckIsUUFBUSxLQUFLZ0MsUUFBTCxFQUFkO0FBQ0EsZ0JBQUksS0FBS2hDLEtBQUwsS0FBZUEsS0FBbkIsRUFBMEI7QUFDdEIscUJBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLG9CQUFJLEtBQUsrQixRQUFMLEtBQWtCLFVBQWxCLElBQWdDLEtBQUtBLFFBQUwsS0FBa0IsVUFBdEQsRUFBa0U7QUFDOUQsd0JBQUkvQixLQUFKLEVBQVc7QUFDUCw2QkFBS3pCLEVBQUwsQ0FBUTBELFlBQVIsQ0FBcUIsS0FBS0YsUUFBMUIsRUFBb0MsSUFBcEM7QUFDSCxxQkFGRCxNQUVPO0FBQ0gsNkJBQUt4RCxFQUFMLENBQVEyRCxlQUFSLENBQXdCLEtBQUtILFFBQTdCO0FBQ0g7QUFDSixpQkFORCxNQU1PO0FBQ0gseUJBQUt4RCxFQUFMLENBQVEwRCxZQUFSLENBQXFCLEtBQUtGLFFBQTFCLEVBQW9DL0IsS0FBcEM7QUFDSDtBQUNKO0FBQ0o7QUF0Qkw7O0FBQUE7QUFBQSxFQUF5QzhCLEtBQXpDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTUEsUUFBUSxtQkFBQXRDLENBQVEsQ0FBUixDQUFkO0FBQ0FuQixPQUFPQyxPQUFQO0FBQUE7O0FBQ0ksd0JBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQlcsZ0JBQS9CLEVBQWlEO0FBQUE7O0FBQUEsNEhBQ3ZDYixFQUR1QyxFQUNuQ0MsSUFEbUMsRUFDN0JDLE9BRDZCOztBQUU3QyxjQUFLVyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsY0FBS2lDLE1BQUw7QUFINkM7QUFJaEQ7O0FBTEw7QUFBQTtBQUFBLGlDQU9hO0FBQ0wsZ0JBQU1yQixRQUFRLEtBQUtnQyxRQUFMLEVBQWQ7QUFDQSxnQkFBSSxLQUFLaEMsS0FBTCxLQUFlQSxLQUFuQixFQUEwQjtBQUN0QixvQkFBSSxLQUFLQSxLQUFULEVBQWdCO0FBQ1oseUJBQUt6QixFQUFMLENBQVE0RCxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixLQUFLcEMsS0FBOUI7QUFDSDtBQUNELG9CQUFJQSxLQUFKLEVBQVc7QUFDUCx5QkFBS3pCLEVBQUwsQ0FBUTRELFNBQVIsQ0FBa0JFLEdBQWxCLENBQXNCckMsS0FBdEI7QUFDSDtBQUNELHFCQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSDtBQUNKO0FBbEJMOztBQUFBO0FBQUEsRUFBMEM4QixLQUExQyxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBLElBQU1BLFFBQVEsbUJBQUF0QyxDQUFRLENBQVIsQ0FBZDtBQUNBbkIsT0FBT0MsT0FBUDtBQUFBOztBQUNJLHVCQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQkMsT0FBdEIsRUFBK0JXLGdCQUEvQixFQUFpRGtELFlBQWpELEVBQStEO0FBQUE7O0FBQUEsMEhBQ3JEL0QsRUFEcUQsRUFDakRDLElBRGlELEVBQzNDQyxPQUQyQzs7QUFFM0QsY0FBS1csZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLGNBQUtrRCxZQUFMLEdBQW9CQSxnQkFBZ0IsRUFBcEM7QUFDQSxjQUFLakIsTUFBTDtBQUoyRDtBQUs5RDs7QUFOTDtBQUFBO0FBQUEsaUNBUWE7QUFDTCxnQkFBTXJCLFFBQVEsS0FBS2dDLFFBQUwsRUFBZDtBQUNBLGdCQUFJLEtBQUtoQyxLQUFMLEtBQWVBLEtBQW5CLEVBQTBCO0FBQ3RCLHFCQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxxQkFBS3pCLEVBQUwsQ0FBUWdFLFNBQVIsR0FBb0IsS0FBS0Msa0JBQUwsQ0FBd0J4QyxLQUF4QixDQUFwQjtBQUNIO0FBQ0o7QUFkTDtBQUFBO0FBQUEsMkNBZ0J1QkEsS0FoQnZCLEVBZ0I4QjtBQUN0QixnQkFBSSxLQUFLeUMsT0FBTCxDQUFhLEtBQUtILFlBQWxCLEVBQWdDLElBQWhDLENBQUosRUFBMkM7QUFDdkMsdUJBQU8sS0FBSzlELElBQUwsQ0FBVSxLQUFLOEQsWUFBTCxDQUFrQkksS0FBbEIsQ0FBd0IsSUFBeEIsRUFBOEIsQ0FBOUIsQ0FBVixFQUE0QzFDLEtBQTVDLENBQVA7QUFDSDtBQUNELG1CQUFPLEtBQUsyQyx1QkFBTCxDQUE2QjNDLEtBQTdCLENBQVA7QUFDSDtBQXJCTDtBQUFBO0FBQUEsZ0RBdUI0QkEsS0F2QjVCLEVBdUJtQztBQUMzQkEsb0JBQVEsQ0FBQ0EsS0FBRCxJQUFVWSxNQUFNWixLQUFOLENBQVYsR0FBeUIsRUFBekIsR0FBOEJBLEtBQXRDO0FBQ0EsZ0JBQUksS0FBS3NDLFlBQVQsRUFBdUI7QUFDbkIsdUJBQU8sS0FBS0EsWUFBTCxDQUFrQk0sT0FBbEIsQ0FBMEIsS0FBMUIsRUFBaUM1QyxLQUFqQyxDQUFQO0FBQ0g7QUFDRCxtQkFBT0EsS0FBUDtBQUNIO0FBN0JMOztBQUFBO0FBQUEsRUFBeUM4QixLQUF6QyxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBLElBQU1BLFFBQVEsbUJBQUF0QyxDQUFRLENBQVIsQ0FBZDtBQUNBbkIsT0FBT0MsT0FBUDtBQUFBOztBQUNJLHdCQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQkMsT0FBdEIsRUFBK0JXLGdCQUEvQixFQUFpRHlELFNBQWpELEVBQTREQyxJQUE1RCxFQUFrRTtBQUFBOztBQUFBLDRIQUN4RHZFLEVBRHdELEVBQ3BEQyxJQURvRCxFQUM5Q0MsT0FEOEM7O0FBRTlELGNBQUtvRSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUt6RCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsY0FBSzBELElBQUwsR0FBWUEsUUFBUSxFQUFwQjtBQUNBLGNBQUt6QixNQUFMO0FBTDhEO0FBTWpFOztBQVBMO0FBQUE7QUFBQSxpQ0FTYTtBQUNMLGdCQUFNckIsUUFBUSxLQUFLZ0MsUUFBTCxFQUFkO0FBQ0EsZ0JBQUksS0FBS2hDLEtBQUwsS0FBZUEsS0FBbkIsRUFBMEI7QUFDdEIscUJBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLHFCQUFLekIsRUFBTCxDQUFRd0UsS0FBUixDQUFjLEtBQUtGLFNBQW5CLElBQWdDN0MsUUFBUSxLQUFLOEMsSUFBN0M7QUFDSDtBQUNKO0FBZkw7O0FBQUE7QUFBQSxFQUEwQ2hCLEtBQTFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTUEsUUFBUSxtQkFBQXRDLENBQVEsQ0FBUixDQUFkO0FBQ0FuQixPQUFPQyxPQUFQO0FBQUE7O0FBQ0ksdUJBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQlcsZ0JBQS9CLEVBQWlEa0QsWUFBakQsRUFBK0Q7QUFBQTs7QUFBQSwwSEFDckQvRCxFQURxRCxFQUNqREMsSUFEaUQsRUFDM0NDLE9BRDJDOztBQUUzRCxjQUFLVyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsY0FBS2tELFlBQUwsR0FBb0JBLGdCQUFnQixFQUFwQztBQUNBLGNBQUtqQixNQUFMO0FBSjJEO0FBSzlEOztBQU5MO0FBQUE7QUFBQSxpQ0FRYTtBQUNMLGdCQUFNckIsUUFBUSxLQUFLZ0MsUUFBTCxFQUFkO0FBQ0EsZ0JBQUksS0FBS2hDLEtBQUwsS0FBZUEsS0FBbkIsRUFBMEI7QUFDdEIscUJBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLHFCQUFLekIsRUFBTCxDQUFReUUsV0FBUixHQUFzQixLQUFLUixrQkFBTCxDQUF3QnhDLEtBQXhCLENBQXRCO0FBQ0g7QUFDSjtBQWRMO0FBQUE7QUFBQSwyQ0FnQnVCQSxLQWhCdkIsRUFnQjhCO0FBQ3RCLGdCQUFJLEtBQUt5QyxPQUFMLENBQWEsS0FBS0gsWUFBbEIsRUFBZ0MsSUFBaEMsQ0FBSixFQUEyQztBQUN2Qyx1QkFBTyxLQUFLOUQsSUFBTCxDQUFVLEtBQUs4RCxZQUFMLENBQWtCSSxLQUFsQixDQUF3QixJQUF4QixFQUE4QixDQUE5QixDQUFWLEVBQTRDMUMsS0FBNUMsQ0FBUDtBQUNIO0FBQ0QsbUJBQU8sS0FBSzJDLHVCQUFMLENBQTZCM0MsS0FBN0IsQ0FBUDtBQUNIO0FBckJMO0FBQUE7QUFBQSxnREF1QjRCQSxLQXZCNUIsRUF1Qm1DO0FBQzNCQSxvQkFBUSxDQUFDQSxLQUFELElBQVVZLE1BQU1aLEtBQU4sQ0FBVixHQUF5QixFQUF6QixHQUE4QkEsS0FBdEM7QUFDQSxnQkFBSSxLQUFLc0MsWUFBVCxFQUF1QjtBQUNuQix1QkFBTyxLQUFLQSxZQUFMLENBQWtCTSxPQUFsQixDQUEwQixLQUExQixFQUFpQzVDLEtBQWpDLENBQVA7QUFDSDtBQUNELG1CQUFPQSxLQUFQO0FBQ0g7QUE3Qkw7O0FBQUE7QUFBQSxFQUF5QzhCLEtBQXpDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTUEsUUFBUSxtQkFBQXRDLENBQVEsQ0FBUixDQUFkO0FBQ0FuQixPQUFPQyxPQUFQO0FBQUE7O0FBQ0ksd0JBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQlcsZ0JBQS9CLEVBQWlENkQsZ0JBQWpELEVBQW1FQyxhQUFuRSxFQUFrRkMsV0FBbEYsRUFBK0ZDLGVBQS9GLEVBQWdIQyxhQUFoSCxFQUErSDtBQUFBOztBQUFBLDRIQUNySDlFLEVBRHFILEVBQ2pIQyxJQURpSCxFQUMzR0MsT0FEMkc7O0FBRTNILGNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGNBQUtXLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxZQUFJNkQsaUJBQWlCL0QsT0FBakIsQ0FBeUIsSUFBekIsTUFBbUMsQ0FBQyxDQUF4QyxFQUEyQztBQUN2QyxrQkFBTSxJQUFJb0UsS0FBSixrQkFBeUJMLGdCQUF6QixDQUFOO0FBQ0g7QUFDRCxjQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsY0FBS0MsYUFBTCxHQUFxQkEsaUJBQWlCLEVBQXRDO0FBQ0EsY0FBS0EsYUFBTCxHQUFxQixNQUFLVCxPQUFMLENBQWEsTUFBS1MsYUFBbEIsRUFBaUMsSUFBakMsSUFBeUMsTUFBS0EsYUFBOUMsR0FBOEQsTUFBSzFFLElBQUwsQ0FBVWMsR0FBVixDQUFjLE1BQUs0RCxhQUFuQixLQUFxQyxFQUF4SDtBQUNBLGNBQUtDLFdBQUwsR0FBbUJBLGVBQWUsRUFBbEM7QUFDQSxjQUFLQSxXQUFMLEdBQW1CLE1BQUtWLE9BQUwsQ0FBYSxNQUFLVSxXQUFsQixFQUErQixJQUEvQixJQUF1QyxNQUFLQSxXQUE1QyxHQUEwRCxNQUFLM0UsSUFBTCxDQUFVYyxHQUFWLENBQWMsTUFBSzZELFdBQW5CLEtBQW1DLEVBQWhIO0FBQ0EsY0FBS0MsZUFBTCxHQUF1QkEsbUJBQW1CLEVBQTFDO0FBQ0EsY0FBS0EsZUFBTCxHQUF1QixNQUFLWCxPQUFMLENBQWEsTUFBS1csZUFBbEIsRUFBbUMsSUFBbkMsSUFBMkMsTUFBS0EsZUFBaEQsR0FBa0UsTUFBSzVFLElBQUwsQ0FBVWMsR0FBVixDQUFjLE1BQUs4RCxlQUFuQixLQUF1QyxFQUFoSTtBQUNBLGNBQUtHLFFBQUwsQ0FBYyxPQUFkLEVBQXVCLE1BQUtoRixFQUE1QixFQUFnQyxlQUFPO0FBQ25DLGtCQUFLaUYsT0FBTCxHQUFlLElBQWY7QUFDQSxrQkFBS2pGLEVBQUwsQ0FBUXlCLEtBQVIsR0FBZ0IsTUFBS2dDLFFBQUwsTUFBbUIsRUFBbkM7QUFDQSxrQkFBS3pELEVBQUwsQ0FBUWtGLE1BQVI7QUFDSCxTQUpEO0FBS0EsY0FBS0YsUUFBTCxDQUFjLE1BQWQsRUFBc0IsTUFBS2hGLEVBQTNCLEVBQStCLGVBQU87QUFDbEMsa0JBQUtpRixPQUFMLEdBQWUsS0FBZjtBQUNBLGtCQUFLakYsRUFBTCxDQUFReUIsS0FBUixHQUFnQixNQUFLd0Msa0JBQUwsQ0FBd0IsTUFBS1IsUUFBTCxFQUF4QixDQUFoQjtBQUNILFNBSEQ7QUFJQSxjQUFLdUIsUUFBTCxDQUFjLFVBQWQsRUFBMEIsTUFBS2hGLEVBQS9CLEVBQW1DLGVBQU87QUFDdEMsZ0JBQU1tRixhQUFhLE1BQUtDLGVBQUwsQ0FBcUIsTUFBS3BGLEVBQUwsQ0FBUXlCLEtBQTdCLEVBQW9DNEQsSUFBSUMsR0FBeEMsRUFBNkMsTUFBS3RGLEVBQUwsQ0FBUXVGLGNBQXJELEVBQXFFLE1BQUt2RixFQUFMLENBQVF3RixZQUE3RSxDQUFuQjtBQUNBLGdCQUFHLENBQUNMLFVBQUosRUFBZ0I7QUFDWkUsb0JBQUlJLGNBQUo7QUFDSDtBQUNKLFNBTEQ7QUFNQVgsd0JBQWdCQSxnQkFBZ0IsTUFBSzdFLElBQUwsQ0FBVWMsR0FBVixDQUFjK0QsYUFBZCxDQUFoQixHQUErQyxPQUEvRDtBQUNBLFlBQU1ZLGlCQUFpQixDQUFDWixpQkFBaUIsT0FBbEIsRUFBMkJYLEtBQTNCLENBQWlDLEdBQWpDLENBQXZCO0FBQ0EsYUFBSyxJQUFJN0QsSUFBSSxDQUFiLEVBQWdCQSxJQUFJb0YsZUFBZW5GLE1BQW5DLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM1QyxnQkFBTXFGLElBQUlELGVBQWVwRixDQUFmLENBQVY7QUFDQSxnQkFBTXNGLEtBQUtELEVBQUV4QixLQUFGLENBQVEsR0FBUixDQUFYO0FBQ0E7QUFDQSxrQkFBS2EsUUFBTCxDQUFjWSxHQUFHLENBQUgsQ0FBZCxFQUFxQixNQUFLNUYsRUFBMUIsRUFBOEIsZUFBTztBQUNqQyxzQkFBSzZGLFFBQUwsQ0FBYyxNQUFLQyxpQkFBTCxDQUF1QixNQUFLOUYsRUFBTCxDQUFReUIsS0FBL0IsQ0FBZDtBQUNBLHNCQUFLc0UsSUFBTDtBQUNILGFBSEQ7QUFJSDtBQUNELGNBQUtqRCxNQUFMO0FBeEMySDtBQXlDOUg7O0FBMUNMO0FBQUE7QUFBQSxpQ0E0Q2FyQixLQTVDYixFQTRDb0I7QUFDWixnQkFBSSxLQUFLeUMsT0FBTCxDQUFhLEtBQUtRLGdCQUFsQixFQUFvQyxHQUFwQyxDQUFKLEVBQThDO0FBQzFDLG9CQUFNc0IseUJBQXVCLEtBQUt0QixnQkFBTCxDQUFzQkwsT0FBdEIsQ0FBOEIsR0FBOUIsRUFBbUMsVUFBbkMsQ0FBN0I7QUFDQXZELHFCQUFLa0YsT0FBTDtBQUNILGFBSEQsTUFHTztBQUNILHFCQUFLL0YsSUFBTCxDQUFVZ0csR0FBVixDQUFjLEtBQUt2QixnQkFBbkIsRUFBcUNqRCxLQUFyQztBQUNIO0FBQ0o7QUFuREw7QUFBQTtBQUFBLDJDQXFEdUJBLEtBckR2QixFQXFEOEI7QUFDdEIsZ0JBQUksS0FBS3lDLE9BQUwsQ0FBYSxLQUFLUyxhQUFsQixFQUFpQyxJQUFqQyxDQUFKLEVBQTRDO0FBQ3hDLHVCQUFPLEtBQUsxRSxJQUFMLENBQVUsS0FBSzBFLGFBQUwsQ0FBbUJSLEtBQW5CLENBQXlCLElBQXpCLEVBQStCLENBQS9CLENBQVYsRUFBNkMxQyxLQUE3QyxDQUFQO0FBQ0g7QUFDRCxtQkFBTyxLQUFLMkMsdUJBQUwsQ0FBNkIzQyxLQUE3QixDQUFQO0FBQ0g7QUExREw7QUFBQTtBQUFBLGdEQTRENEJBLEtBNUQ1QixFQTREbUM7QUFDM0JBLG9CQUFRLENBQUNBLEtBQUQsSUFBVVksTUFBTVosS0FBTixDQUFWLEdBQXlCLEVBQXpCLEdBQThCQSxLQUF0QztBQUNBLGdCQUFJLEtBQUtrRCxhQUFULEVBQXdCO0FBQ3BCLHVCQUFPLEtBQUtBLGFBQUwsQ0FBbUJOLE9BQW5CLENBQTJCLEtBQTNCLEVBQWtDNUMsS0FBbEMsQ0FBUDtBQUNIO0FBQ0QsbUJBQU9BLEtBQVA7QUFDSDtBQWxFTDtBQUFBO0FBQUEsMENBb0VzQkEsS0FwRXRCLEVBb0U2QjtBQUNyQixnQkFBSSxLQUFLeUMsT0FBTCxDQUFhLEtBQUtVLFdBQWxCLEVBQStCLElBQS9CLENBQUosRUFBMEM7QUFDdEMsdUJBQU8sS0FBSzNFLElBQUwsQ0FBVSxLQUFLMkUsV0FBTCxDQUFpQlQsS0FBakIsQ0FBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FBVixFQUEyQzFDLEtBQTNDLENBQVA7QUFDSDtBQUNELG1CQUFPLEtBQUt5RSxzQkFBTCxDQUE0QnpFLEtBQTVCLENBQVA7QUFDSDtBQXpFTDtBQUFBO0FBQUEsK0NBMkUyQkEsS0EzRTNCLEVBMkVrQztBQUMxQkEsb0JBQVEsQ0FBQ0EsS0FBRCxJQUFVWSxNQUFNWixLQUFOLENBQVYsR0FBeUIsRUFBekIsR0FBOEJBLEtBQXRDO0FBQ0EsZ0JBQUksS0FBS21ELFdBQUwsS0FBcUIsUUFBekIsRUFBbUM7QUFDL0Isb0JBQU11QixTQUFVQyxPQUFPM0UsS0FBUCxDQUFoQjtBQUNBLHVCQUFPWSxNQUFNOEQsTUFBTixJQUFnQixDQUFoQixHQUFvQkEsTUFBM0I7QUFDSCxhQUhELE1BR08sSUFBSSxLQUFLdkIsV0FBTCxLQUFxQixLQUF6QixFQUFnQztBQUNuQyxvQkFBTXlCLFdBQVdDLFNBQVM3RSxLQUFULENBQWpCO0FBQ0EsdUJBQU9ZLE1BQU1nRSxRQUFOLElBQWtCLENBQWxCLEdBQXNCQSxRQUE3QjtBQUNILGFBSE0sTUFHQSxJQUFJLEtBQUt6QixXQUFMLEtBQXFCLFNBQXpCLEVBQW9DO0FBQ3ZDLHVCQUFPbkQsTUFBTTBCLFdBQU4sT0FBd0IsT0FBL0I7QUFDSDtBQUNELG1CQUFPMUIsS0FBUDtBQUNIO0FBdkZMO0FBQUE7QUFBQSx3Q0F5Rm9CQSxLQXpGcEIsRUF5RjJCNkQsR0F6RjNCLEVBeUZnQ2lCLEtBekZoQyxFQXlGdUNDLEdBekZ2QyxFQXlGNEM7QUFDcENELG9CQUFRSCxPQUFPRyxLQUFQLENBQVI7QUFDQUMsa0JBQU1KLE9BQU9JLEdBQVAsQ0FBTjtBQUNBLGdCQUFJQyxTQUFTaEYsTUFBTWlGLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUJILEtBQW5CLElBQTRCakIsR0FBNUIsR0FBa0M3RCxNQUFNaUYsU0FBTixDQUFnQkYsR0FBaEIsQ0FBL0M7QUFDQSxnQkFBSSxLQUFLdEMsT0FBTCxDQUFhLEtBQUtXLGVBQWxCLEVBQW1DLElBQW5DLENBQUosRUFBOEM7QUFDMUMsdUJBQU8sS0FBSzVFLElBQUwsQ0FBVSxLQUFLNEUsZUFBTCxDQUFxQlYsS0FBckIsQ0FBMkIsSUFBM0IsRUFBaUMsQ0FBakMsQ0FBVixFQUErQzFDLEtBQS9DLEVBQXNENkQsR0FBdEQsRUFBMkRtQixNQUEzRCxFQUFtRUYsS0FBbkUsRUFBMEVDLEdBQTFFLENBQVA7QUFDSDtBQUNELG1CQUFPLEtBQUtHLHFCQUFMLENBQTJCbEYsS0FBM0IsRUFBa0M2RCxHQUFsQyxFQUF1Q21CLE1BQXZDLEVBQStDRixLQUEvQyxFQUFzREMsR0FBdEQsQ0FBUDtBQUNIO0FBakdMO0FBQUE7QUFBQSw4Q0FtRzBCL0UsS0FuRzFCLEVBbUdpQzZELEdBbkdqQyxFQW1Hc0NtQixNQW5HdEMsRUFtRzhDRixLQW5HOUMsRUFtR3FEQyxHQW5HckQsRUFtRzBEO0FBQ2xEQyxxQkFBUyxDQUFDaEYsS0FBRCxJQUFVWSxNQUFNb0UsTUFBTixDQUFWLEdBQTBCLEVBQTFCLEdBQStCQSxNQUF4QztBQUNBLGdCQUFJLEtBQUs1QixlQUFULEVBQTBCO0FBQ3RCLG9CQUFNK0IsTUFBTSxJQUFJQyxNQUFKLENBQVcsS0FBS2hDLGVBQWhCLENBQVo7QUFDQSx1QkFBTytCLElBQUlFLElBQUosQ0FBU0wsTUFBVCxDQUFQO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7QUExR0w7QUFBQTtBQUFBLGlDQTRHYTtBQUNMLGdCQUFJLENBQUMsS0FBS3hCLE9BQVYsRUFBbUI7QUFDZixvQkFBSXhELFFBQVEsS0FBS3dDLGtCQUFMLENBQXdCLEtBQUtSLFFBQUwsRUFBeEIsQ0FBWjtBQUNBLG9CQUFJaEMsVUFBVXNGLFNBQVYsSUFBdUJ0RixVQUFVLElBQXJDLEVBQTJDO0FBQ3ZDQSw0QkFBUSxFQUFSO0FBQ0g7QUFDRCxvQkFBSUEsU0FBUyxLQUFLekIsRUFBTCxDQUFReUIsS0FBckIsRUFBNEI7QUFDeEIseUJBQUt6QixFQUFMLENBQVF5QixLQUFSLEdBQWdCQSxLQUFoQjtBQUNIO0FBQ0o7QUFDSjtBQXRITDtBQUFBO0FBQUEsK0JBd0hXO0FBQ0gsaUJBQUssSUFBSW5CLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLSixPQUFMLENBQWFLLE1BQWpDLEVBQXlDRCxHQUF6QyxFQUE4QztBQUMxQyxxQkFBS0osT0FBTCxDQUFhSSxDQUFiLEVBQWdCeUYsSUFBaEI7QUFDSDtBQUNKO0FBNUhMO0FBQUE7QUFBQSxpQ0E4SGF4RSxJQTlIYixFQThIbUJ2QixFQTlIbkIsRUE4SHVCZ0gsSUE5SHZCLEVBOEg2QjtBQUNyQixnQkFBSWhILEdBQUdpSCxnQkFBUCxFQUNJakgsR0FBR2lILGdCQUFILENBQW9CMUYsSUFBcEIsRUFBMEJ5RixJQUExQixFQUFnQyxLQUFoQyxFQURKLEtBRUssSUFBSUUsS0FBS0MsV0FBVCxFQUFzQjtBQUN2Qm5ILG1CQUFHbUgsV0FBSCxDQUFlLE9BQU81RixJQUF0QixFQUE0QnlGLElBQTVCO0FBQ0g7QUFDSjtBQXBJTDs7QUFBQTtBQUFBLEVBQTBDekQsS0FBMUMsRTs7Ozs7Ozs7Ozs7OztBQ0RBLElBQU02RCxZQUFZLG1CQUFBbkcsQ0FBUSxDQUFSLENBQWxCO0FBQ0FuQixPQUFPQyxPQUFQO0FBQ0ksOEJBQVlDLEVBQVosRUFBZ0J5QixLQUFoQixFQUF1QnhCLElBQXZCLEVBQTZCQyxPQUE3QixFQUFzQztBQUFBOztBQUNsQyxhQUFLRixFQUFMLEdBQVVBLEVBQVY7QUFDQSxhQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxZQUFNbUgsU0FBUzVGLE1BQU0wQyxLQUFOLENBQVksR0FBWixDQUFmO0FBQ0EsYUFBSyxJQUFJN0QsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK0csT0FBTzlHLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUNwQyxnQkFBTTBGLFVBQVVxQixPQUFPL0csQ0FBUCxDQUFoQjtBQUNBMEYsb0JBQVFzQixJQUFSO0FBQ0EsZ0JBQUl0QixRQUFRekYsTUFBUixLQUFtQixDQUF2QixFQUEwQjtBQUN0QixxQkFBS2dILFdBQUwsQ0FBaUJGLE9BQU8vRyxDQUFQLENBQWpCO0FBQ0g7QUFDSjtBQUNKOztBQWJMO0FBQUE7QUFBQSxvQ0FjZ0JrSCxJQWRoQixFQWNzQjtBQUNkQSxtQkFBT0EsS0FBS3JELEtBQUwsQ0FBVyxHQUFYLENBQVA7QUFDQSxnQkFBTVgsV0FBV2dFLEtBQUssQ0FBTCxDQUFqQjtBQUNBLGdCQUFNM0csbUJBQW1CMkcsS0FBSyxDQUFMLEtBQVdoRSxRQUFwQztBQUNBLGdCQUFJNEQsU0FBSixDQUFjLEtBQUtwSCxFQUFuQixFQUF1QixLQUFLQyxJQUE1QixFQUFrQyxLQUFLQyxPQUF2QyxFQUFnRFcsZ0JBQWhELEVBQWtFMkMsUUFBbEU7QUFDSDtBQW5CTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7O0FDREEsSUFBTWlFLGFBQWEsbUJBQUF4RyxDQUFRLENBQVIsQ0FBbkI7QUFDQW5CLE9BQU9DLE9BQVAsR0FDSSwyQkFBWUMsRUFBWixFQUFnQnlCLEtBQWhCLEVBQXVCeEIsSUFBdkIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQUE7O0FBQ2xDLFNBQUtGLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQU1tSCxTQUFTNUYsTUFBTTBDLEtBQU4sQ0FBWSxHQUFaLENBQWY7QUFDQSxTQUFLLElBQUk3RCxJQUFJLENBQWIsRUFBZ0JBLElBQUkrRyxPQUFPOUcsTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3BDLFlBQU0wRixVQUFVcUIsT0FBTy9HLENBQVAsQ0FBaEI7QUFDQTBGLGdCQUFRc0IsSUFBUjtBQUNBLFlBQUl0QixRQUFRekYsTUFBUixLQUFtQixDQUF2QixFQUEwQjtBQUN0QixnQkFBSWtILFVBQUosQ0FBZXpILEVBQWYsRUFBbUJDLElBQW5CLEVBQXlCQyxPQUF6QixFQUFrQzhGLE9BQWxDO0FBQ0g7QUFDSjtBQUNKLENBYkwsQzs7Ozs7Ozs7Ozs7QUNEQSxJQUFNMEIsWUFBWSxtQkFBQXpHLENBQVEsQ0FBUixDQUFsQjtBQUNBbkIsT0FBT0MsT0FBUCxHQUNJLDBCQUFZQyxFQUFaLEVBQWdCeUIsS0FBaEIsRUFBdUJ4QixJQUF2QixFQUE2QkMsT0FBN0IsRUFBc0M7QUFBQTs7QUFDbEMsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsUUFBTW1ILFNBQVM1RixNQUFNMEMsS0FBTixDQUFZLEdBQVosQ0FBZjtBQUNBLFFBQUl1RCxTQUFKLENBQWMxSCxFQUFkLEVBQWtCQyxJQUFsQixFQUF3QkMsT0FBeEIsRUFBaUNtSCxPQUFPLENBQVAsQ0FBakMsRUFBNENBLE9BQU8sQ0FBUCxDQUE1QztBQUNILENBUEwsQzs7Ozs7Ozs7Ozs7OztBQ0RBLElBQU1NLGFBQWEsbUJBQUExRyxDQUFRLEVBQVIsQ0FBbkI7QUFDQW5CLE9BQU9DLE9BQVA7QUFDSSwrQkFBWUMsRUFBWixFQUFnQnlCLEtBQWhCLEVBQXVCeEIsSUFBdkIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQUE7O0FBQ2xDLGFBQUtGLEVBQUwsR0FBVUEsRUFBVjtBQUNBLGFBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFlBQU1tSCxTQUFTNUYsTUFBTTBDLEtBQU4sQ0FBWSxHQUFaLENBQWY7QUFDQSxhQUFLLElBQUk3RCxJQUFJLENBQWIsRUFBZ0JBLElBQUkrRyxPQUFPOUcsTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3BDLGdCQUFNMEYsVUFBVXFCLE9BQU8vRyxDQUFQLENBQWhCO0FBQ0EwRixvQkFBUXNCLElBQVI7QUFDQSxnQkFBSXRCLFFBQVF6RixNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3RCLHFCQUFLcUgsWUFBTCxDQUFrQlAsT0FBTy9HLENBQVAsQ0FBbEI7QUFDSDtBQUNKO0FBQ0o7O0FBYkw7QUFBQTtBQUFBLHFDQWNpQmtILElBZGpCLEVBY3VCO0FBQ2ZBLG1CQUFPQSxLQUFLckQsS0FBTCxDQUFXLEdBQVgsQ0FBUDtBQUNBLGdCQUFJRyxZQUFZa0QsS0FBSyxDQUFMLENBQWhCO0FBQ0FsRCx3QkFBWUEsVUFBVUgsS0FBVixDQUFnQixHQUFoQixDQUFaO0FBQ0EsZ0JBQU1JLE9BQU9ELFVBQVUsQ0FBVixDQUFiO0FBQ0FBLHdCQUFZQSxVQUFVLENBQVYsQ0FBWjtBQUNBLGdCQUFNekQsbUJBQW1CMkcsS0FBSyxDQUFMLEtBQVdsRCxTQUFwQztBQUNBLGdCQUFJcUQsVUFBSixDQUFlLEtBQUszSCxFQUFwQixFQUF3QixLQUFLQyxJQUE3QixFQUFtQyxLQUFLQyxPQUF4QyxFQUFpRFcsZ0JBQWpELEVBQW1FeUQsU0FBbkUsRUFBOEVDLElBQTlFO0FBQ0g7QUF0Qkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7OztBQ0RBLElBQU1zRCxZQUFZLG1CQUFBNUcsQ0FBUSxFQUFSLENBQWxCO0FBQ0FuQixPQUFPQyxPQUFQLEdBQ0ksMEJBQVlDLEVBQVosRUFBZ0J5QixLQUFoQixFQUF1QnhCLElBQXZCLEVBQTZCQyxPQUE3QixFQUFzQztBQUFBOztBQUNsQyxTQUFLRixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxRQUFNbUgsU0FBUzVGLE1BQU0wQyxLQUFOLENBQVksR0FBWixDQUFmO0FBQ0EsUUFBSTBELFNBQUosQ0FBYzdILEVBQWQsRUFBa0JDLElBQWxCLEVBQXdCQyxPQUF4QixFQUFpQ21ILE9BQU8sQ0FBUCxDQUFqQyxFQUE0Q0EsT0FBTyxDQUFQLENBQTVDO0FBQ0gsQ0FQTCxDOzs7Ozs7Ozs7OztBQ0RBLElBQU1TLGFBQWEsbUJBQUE3RyxDQUFRLEVBQVIsQ0FBbkI7QUFDQW5CLE9BQU9DLE9BQVAsR0FDSSwwQkFBWUMsRUFBWixFQUFnQnlCLEtBQWhCLEVBQXVCeEIsSUFBdkIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQUE7O0FBQ2xDLFNBQUtGLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFFBQUltSCxTQUFTNUYsTUFBTTBDLEtBQU4sQ0FBWSxHQUFaLENBQWI7QUFDQSxRQUFNNEQsUUFBUVYsT0FBTyxDQUFQLENBQWQ7QUFDQUEsYUFBU0EsT0FBTyxDQUFQLEVBQVVsRCxLQUFWLENBQWdCLEdBQWhCLENBQVQ7QUFDQSxRQUFJMkQsVUFBSixDQUFlOUgsRUFBZixFQUFtQkMsSUFBbkIsRUFBeUJDLE9BQXpCLEVBQWtDbUgsT0FBTyxDQUFQLENBQWxDLEVBQTZDQSxPQUFPLENBQVAsQ0FBN0MsRUFBd0RBLE9BQU8sQ0FBUCxDQUF4RCxFQUFtRUEsT0FBTyxDQUFQLENBQW5FLEVBQThFQSxPQUFPLENBQVAsQ0FBOUUsRUFBeUZVLEtBQXpGO0FBQ0gsQ0FUTCxDOzs7Ozs7Ozs7O0FDREFDLE9BQU9DLFlBQVAsR0FBc0IsbUJBQUFoSCxDQUFRLENBQVIsQ0FBdEIsQzs7Ozs7Ozs7Ozs7QUNBQW5CLE9BQU9DLE9BQVAsR0FDSSxlQUFZZ0ksS0FBWixFQUFtQkcsYUFBbkIsRUFBa0M7QUFBQTs7QUFDOUIsU0FBSyxJQUFJQyxDQUFULElBQWNKLEtBQWQsRUFBcUI7QUFDakIsYUFBS0ksQ0FBTCxJQUFVSixNQUFNSSxDQUFOLENBQVY7QUFDSDtBQUNELFNBQUtELGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0gsQ0FOTCxDIiwiZmlsZSI6ImRodG1sd2ViLXRlbXBsYXRlLWNvbXBpbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmI4NGE0ODZkODFmZGZiNDk0ZTIiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhdGNoIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmlldywgc2lnbmFscykge1xuICAgICAgICB0aGlzLmNyZWF0ZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ25hbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNpZ25hbHNbaV0ub24odGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmRXaXRoKHN0ciwgc2Z4KSB7XG4gICAgICAgIHJldHVybiBzdHIuaW5kZXhPZihzZngpID09PSBzdHIubGVuZ3RoIC0gc2Z4Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBzdGFydFdpdGgoc3RyLCBwZngpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5pbmRleE9mKHBmeCkgPT09IDA7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVkUHJvcGVydHkuaW5kZXhPZihcIihcIikgIT09IC0xICYmIHRoaXMubGlzdGVuZWRQcm9wZXJ0eS5pbmRleE9mKFwiKVwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBldmFsKGB0aGlzLnZpZXcuJHt0aGlzLmxpc3RlbmVkUHJvcGVydHl9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWV3LmdldCh0aGlzLmxpc3RlbmVkUHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2F0Y2gvV2F0Y2guanMiLCJjb25zdCBXYXRjaEhhbmRsZXIgPSByZXF1aXJlKFwiLi9XYXRjaEhhbmRsZXJcIik7XG5mdW5jdGlvbiBjb21waWxlRUwoZWwsIHZpZXcsIHNpZ25hbHMpIHtcbiAgICBmb3IgKGxldCBhdHQsIGkgPSAwLCBhdHRzID0gZWwuYXR0cmlidXRlcywgbiA9IGF0dHMubGVuZ3RoOyBpIDwgbjsgaSsrKXtcbiAgICAgICAgYXR0ID0gYXR0c1tpXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dC5ub2RlTmFtZTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHQubm9kZVZhbHVlO1xuICAgICAgICBpZiAobmFtZS5pbmRleE9mKFwidy1cIikgIT09IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IEhhbmRsZXIgPSBXYXRjaEhhbmRsZXJbbmFtZV07XG4gICAgICAgIGlmICghSGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5ldyBIYW5kbGVyKGVsLCB2YWx1ZSwgdmlldywgc2lnbmFscyk7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21waWxlKGVsLCB2aWV3LCBzaWduYWxzKSB7XG4gICAgaWYgKCEoc2lnbmFscyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICBzaWduYWxzID0gW3NpZ25hbHNdO1xuICAgIH1cbiAgICBsZXQgcyA9IFtlbF07XG4gICAgd2hpbGUgKHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNlbCA9IHMuc2hpZnQoKTtcbiAgICAgICAgY29tcGlsZUVMKGNlbCwgdmlldywgc2lnbmFscyk7XG4gICAgICAgIGlmIChjZWwuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHMucHVzaChjZWwuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvV2F0Y2hDb21waWxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFwidy1zdHlsZVwiOiByZXF1aXJlKFwiLi93YXRjaC9XYXRjaFN0eWxlSGFuZGxlclwiKSxcbiAgICBcInctY2xhc3NcIjogcmVxdWlyZShcIi4vd2F0Y2gvV2F0Y2hDbGFzc0hhbmRsZXJcIiksXG4gICAgXCJ3LWF0dHJcIjogcmVxdWlyZShcIi4vd2F0Y2gvV2F0Y2hBdHRySGFuZGxlclwiKSxcbiAgICBcInctaHRtbFwiOiByZXF1aXJlKFwiLi93YXRjaC9XYXRjaEh0bWxIYW5kbGVyXCIpLFxuICAgIFwidy10ZXh0XCI6IHJlcXVpcmUoXCIuL3dhdGNoL1dhdGNoVGV4dEhhbmRsZXJcIiksXG4gICAgXCJ3LXZhbHVlXCI6IHJlcXVpcmUoXCIuL3dhdGNoL1dhdGNoVmFsdWVIYW5kbGVyXCIpXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9XYXRjaEhhbmRsZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhdGNoU2lnbmFsIHtcbiAgICBjb25zdHJ1Y3RvcihkZWxheSwgYnlwYXNzVGhyZXNob2xkKSB7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBpc05hTihkZWxheSkgPyAxMCA6IGRlbGF5O1xuICAgICAgICB0aGlzLmJ5cGFzc1RocmVzaG9sZCA9IGlzTmFOKGJ5cGFzc1RocmVzaG9sZCkgPyAxMCA6IGJ5cGFzc1RocmVzaG9sZDtcbiAgICAgICAgdGhpcy5ieXBhc3NDb3VudCA9IDA7XG4gICAgICAgIHRoaXMud2F0Y2hlcyA9IFtdO1xuICAgIH1cbiAgICBvbih3YXRjaGVyKSB7XG4gICAgICAgIHRoaXMud2F0Y2hlcy5wdXNoKHdhdGNoZXIpO1xuICAgIH1cbiAgICB1bih3YXRjaGVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLndhdGNoZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndhdGNoZXNbaV0gPT09IHdhdGNoZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJlZXAoZGVsYXkpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZ2MoKSwgMzAwKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudXBkYXRlVGltZUhhbmRsZXIpO1xuICAgICAgICBpZiAodGhpcy5ieXBhc3NDb3VudCA9PT0gdGhpcy5ieXBhc3NUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHRoaXMuYnlwYXNzQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ5cGFzc0NvdW50ICs9IDE7XG4gICAgICAgIGRlbGF5ID0gaXNOYU4oZGVsYXkpID8gdGhpcy5kZWxheSA6IGRlbGF5O1xuICAgICAgICBpZiAoZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmJ5cGFzc0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZUhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlKCksIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53YXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3YXRjaGVyID0gdGhpcy53YXRjaGVzW2ldO1xuICAgICAgICAgICAgd2F0Y2hlci51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnYygpIHtcbiAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAodGltZSAtIHRoaXMubGFzdEdDVGltZSA+IDYwICogMTAwMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0R0NUaW1lID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMuX2djKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNNb250ZWQoZWwpIHtcbiAgICAgICAgd2hpbGUgKGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub2RlTmFtZSA9IGVsLm5vZGVOYW1lO1xuICAgICAgICByZXR1cm4gbm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJodG1sXCI7XG4gICAgfVxuICAgIF9nYygpIHtcbiAgICAgICAgY29uc3QgbiA9IHRoaXMud2F0Y2hlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3Qgd2F0Y2ggPSB0aGlzLndhdGNoZXNbaV07XG4gICAgICAgICAgICBpZiAodGltZSAtIHdhdGNoLmNyZWF0ZVRpbWUgPiA1ICogNjAgKiAxMDAwICYmICF0aGlzLmlzTW9udGVkKHdhdGNoLmVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2hlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9XYXRjaFNpZ25hbC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNvbXBpbGU6IHJlcXVpcmUoXCIuL1dhdGNoQ29tcGlsZXJcIiksXG4gICAgU2lnbmFsOiByZXF1aXJlKFwiLi9XYXRjaFNpZ25hbFwiKVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJjb25zdCBXYXRjaCA9IHJlcXVpcmUoXCIuL1dhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBdHRyV2F0Y2ggZXh0ZW5kcyBXYXRjaCB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZpZXcsIHNpZ25hbHMsIGxpc3RlbmVkUHJvcGVydHksIGF0dHJOYW1lKSB7XG4gICAgICAgIHN1cGVyKGVsLCB2aWV3LCBzaWduYWxzKTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IGF0dHJOYW1lO1xuICAgICAgICB0aGlzLmxpc3RlbmVkUHJvcGVydHkgPSBsaXN0ZW5lZFByb3BlcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuYXR0ck5hbWUgPT09IFwiZGlzYWJsZWRcIiB8fCB0aGlzLmF0dHJOYW1lID09PSBcInJlYWRvbmx5XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5hdHRyTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSh0aGlzLmF0dHJOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL0F0dHJXYXRjaC5qcyIsImNvbnN0IFdhdGNoID0gcmVxdWlyZShcIi4vV2F0Y2hcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENsYXNzV2F0Y2ggZXh0ZW5kcyBXYXRjaCB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZpZXcsIHNpZ25hbHMsIGxpc3RlbmVkUHJvcGVydHkpIHtcbiAgICAgICAgc3VwZXIoZWwsIHZpZXcsIHNpZ25hbHMpO1xuICAgICAgICB0aGlzLmxpc3RlbmVkUHJvcGVydHkgPSBsaXN0ZW5lZFByb3BlcnR5OyAgXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL0NsYXNzV2F0Y2guanMiLCJjb25zdCBXYXRjaCA9IHJlcXVpcmUoXCIuL1dhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBIdG1sV2F0Y2ggZXh0ZW5kcyBXYXRjaCB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZpZXcsIHNpZ25hbHMsIGxpc3RlbmVkUHJvcGVydHksIG91dHB1dEZvcm1hdCkge1xuICAgICAgICBzdXBlcihlbCwgdmlldywgc2lnbmFscyk7XG4gICAgICAgIHRoaXMubGlzdGVuZWRQcm9wZXJ0eSA9IGxpc3RlbmVkUHJvcGVydHk7XG4gICAgICAgIHRoaXMub3V0cHV0Rm9ybWF0ID0gb3V0cHV0Rm9ybWF0IHx8IFwiXCI7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuZ2V0Rm9ybWF0dGVkT3V0cHV0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZE91dHB1dCh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbmRXaXRoKHRoaXMub3V0cHV0Rm9ybWF0LCBcIigpXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWV3W3RoaXMub3V0cHV0Rm9ybWF0LnNwbGl0KFwiKClcIilbMF1dKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFuZGFyZEZvcm1hdHRlZE91dHB1dCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgc3RhbmRhcmRGb3JtYXR0ZWRPdXRwdXQodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAhdmFsdWUgJiYgaXNOYU4odmFsdWUpID8gXCJcIiA6IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5vdXRwdXRGb3JtYXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dHB1dEZvcm1hdC5yZXBsYWNlKFwiezB9XCIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2F0Y2gvSHRtbFdhdGNoLmpzIiwiY29uc3QgV2F0Y2ggPSByZXF1aXJlKFwiLi9XYXRjaFwiKTtcbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgU3R5bGVXYXRjaCBleHRlbmRzIFdhdGNoIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmlldywgc2lnbmFscywgbGlzdGVuZWRQcm9wZXJ0eSwgc3R5bGVOYW1lLCB1bml0KSB7XG4gICAgICAgIHN1cGVyKGVsLCB2aWV3LCBzaWduYWxzKTtcbiAgICAgICAgdGhpcy5zdHlsZU5hbWUgPSBzdHlsZU5hbWU7XG4gICAgICAgIHRoaXMubGlzdGVuZWRQcm9wZXJ0eSA9IGxpc3RlbmVkUHJvcGVydHk7XG4gICAgICAgIHRoaXMudW5pdCA9IHVuaXQgfHwgXCJcIjsgICBcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZWwuc3R5bGVbdGhpcy5zdHlsZU5hbWVdID0gdmFsdWUgKyB0aGlzLnVuaXQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL1N0eWxlV2F0Y2guanMiLCJjb25zdCBXYXRjaCA9IHJlcXVpcmUoXCIuL1dhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUZXh0V2F0Y2ggZXh0ZW5kcyBXYXRjaCB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZpZXcsIHNpZ25hbHMsIGxpc3RlbmVkUHJvcGVydHksIG91dHB1dEZvcm1hdCkge1xuICAgICAgICBzdXBlcihlbCwgdmlldywgc2lnbmFscyk7XG4gICAgICAgIHRoaXMubGlzdGVuZWRQcm9wZXJ0eSA9IGxpc3RlbmVkUHJvcGVydHk7XG4gICAgICAgIHRoaXMub3V0cHV0Rm9ybWF0ID0gb3V0cHV0Rm9ybWF0IHx8IFwiXCI7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gdGhpcy5nZXRGb3JtYXR0ZWRPdXRwdXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkT3V0cHV0KHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZFdpdGgodGhpcy5vdXRwdXRGb3JtYXQsIFwiKClcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZXdbdGhpcy5vdXRwdXRGb3JtYXQuc3BsaXQoXCIoKVwiKVswXV0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YW5kYXJkRm9ybWF0dGVkT3V0cHV0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBzdGFuZGFyZEZvcm1hdHRlZE91dHB1dCh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9ICF2YWx1ZSAmJiBpc05hTih2YWx1ZSkgPyBcIlwiIDogdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLm91dHB1dEZvcm1hdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0Rm9ybWF0LnJlcGxhY2UoXCJ7MH1cIiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93YXRjaC9UZXh0V2F0Y2guanMiLCJjb25zdCBXYXRjaCA9IHJlcXVpcmUoXCIuL1dhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDbGFzc1dhdGNoIGV4dGVuZHMgV2F0Y2gge1xuICAgIGNvbnN0cnVjdG9yKGVsLCB2aWV3LCBzaWduYWxzLCBsaXN0ZW5lZFByb3BlcnR5LCBmZWVkYmFja1Byb3BlcnR5LCBkaXNwbGF5Rm9ybWF0LCBpbnB1dFBhcnNlciwgYWNjZXB0VmFsaWRhdG9yLCBmZWVkYmFja0V2ZW50KSB7XG4gICAgICAgIHN1cGVyKGVsLCB2aWV3LCBzaWduYWxzKTtcbiAgICAgICAgdGhpcy5zaWduYWxzID0gc2lnbmFscztcbiAgICAgICAgdGhpcy5saXN0ZW5lZFByb3BlcnR5ID0gbGlzdGVuZWRQcm9wZXJ0eTtcbiAgICAgICAgaWYgKGZlZWRiYWNrUHJvcGVydHkuaW5kZXhPZihcIigpXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCAke2ZlZWRiYWNrUHJvcGVydHl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWVkYmFja1Byb3BlcnR5ID0gZmVlZGJhY2tQcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gZGlzcGxheUZvcm1hdCB8fCBcIlwiO1xuICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSB0aGlzLmVuZFdpdGgodGhpcy5kaXNwbGF5Rm9ybWF0LCBcIigpXCIpID8gdGhpcy5kaXNwbGF5Rm9ybWF0IDogdGhpcy52aWV3LmdldCh0aGlzLmRpc3BsYXlGb3JtYXQpIHx8IFwiXCI7XG4gICAgICAgIHRoaXMuaW5wdXRQYXJzZXIgPSBpbnB1dFBhcnNlciB8fCBcIlwiO1xuICAgICAgICB0aGlzLmlucHV0UGFyc2VyID0gdGhpcy5lbmRXaXRoKHRoaXMuaW5wdXRQYXJzZXIsIFwiKClcIikgPyB0aGlzLmlucHV0UGFyc2VyIDogdGhpcy52aWV3LmdldCh0aGlzLmlucHV0UGFyc2VyKSB8fCBcIlwiO1xuICAgICAgICB0aGlzLmFjY2VwdFZhbGlkYXRvciA9IGFjY2VwdFZhbGlkYXRvciB8fCBcIlwiO1xuICAgICAgICB0aGlzLmFjY2VwdFZhbGlkYXRvciA9IHRoaXMuZW5kV2l0aCh0aGlzLmFjY2VwdFZhbGlkYXRvciwgXCIoKVwiKSA/IHRoaXMuYWNjZXB0VmFsaWRhdG9yIDogdGhpcy52aWV3LmdldCh0aGlzLmFjY2VwdFZhbGlkYXRvcikgfHwgXCJcIjtcbiAgICAgICAgdGhpcy5hZGRFdmVudChcImZvY3VzXCIsIHRoaXMuZWwsIGV2dCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSB8fCBcIlwiO1xuICAgICAgICAgICAgdGhpcy5lbC5zZWxlY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoXCJibHVyXCIsIHRoaXMuZWwsIGV2dCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWwudmFsdWUgPSB0aGlzLmdldEZvcm1hdHRlZE91dHB1dCh0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudChcImtleXByZXNzXCIsIHRoaXMuZWwsIGV2dCA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY2NlcHRhYmxlID0gdGhpcy5pc0lucHV0QWNjZXB0ZWQodGhpcy5lbC52YWx1ZSwgZXZ0LmtleSwgdGhpcy5lbC5zZWxlY3Rpb25TdGFydCwgdGhpcy5lbC5zZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgaWYoIWFjY2VwdGFibGUpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZlZWRiYWNrRXZlbnQgPSBmZWVkYmFja0V2ZW50ID8gdGhpcy52aWV3LmdldChmZWVkYmFja0V2ZW50KSA6IFwia2V5dXBcIjtcbiAgICAgICAgY29uc3QgZmVlZGJhY2tFdmVudHMgPSAoZmVlZGJhY2tFdmVudCB8fCBcImtleXVwXCIpLnNwbGl0KFwifFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWVkYmFja0V2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZSA9IGZlZWRiYWNrRXZlbnRzW2ldO1xuICAgICAgICAgICAgY29uc3QgZXMgPSBlLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgIC8vVE9ETyBoYW5kbGUgdGhlIGtleVxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudChlc1swXSwgdGhpcy5lbCwgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0Rm9ybWF0dGVkSW5wdXQodGhpcy5lbC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmVlcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbmRXaXRoKHRoaXMuZmVlZGJhY2tQcm9wZXJ0eSwgXCIpXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzID0gYHRoaXMudmlldy4ke3RoaXMuZmVlZGJhY2tQcm9wZXJ0eS5yZXBsYWNlKFwiKVwiLCBcIiwgdmFsdWUpXCIpfWA7XG4gICAgICAgICAgICBldmFsKGV4cHJlc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnNldCh0aGlzLmZlZWRiYWNrUHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZE91dHB1dCh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbmRXaXRoKHRoaXMuZGlzcGxheUZvcm1hdCwgXCIoKVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlld1t0aGlzLmRpc3BsYXlGb3JtYXQuc3BsaXQoXCIoKVwiKVswXV0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YW5kYXJkRm9ybWF0dGVkT3V0cHV0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBzdGFuZGFyZEZvcm1hdHRlZE91dHB1dCh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9ICF2YWx1ZSAmJiBpc05hTih2YWx1ZSkgPyBcIlwiIDogdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGb3JtYXQucmVwbGFjZShcInswfVwiLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZElucHV0KHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZFdpdGgodGhpcy5pbnB1dFBhcnNlciwgXCIoKVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlld1t0aGlzLmlucHV0UGFyc2VyLnNwbGl0KFwiKClcIilbMF1dKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFuZGFyZEZvcm1hdHRlZElucHV0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBzdGFuZGFyZEZvcm1hdHRlZElucHV0KHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gIXZhbHVlICYmIGlzTmFOKHZhbHVlKSA/IFwiXCIgOiB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRQYXJzZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlciA9ICBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGlzTmFOKG51bWJlcikgPyAwIDogbnVtYmVyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRQYXJzZXIgPT09IFwiaW50XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGludFZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGlzTmFOKGludFZhbHVlKSA/IDAgOiBpbnRWYWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlucHV0UGFyc2VyID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgIT09IFwiZmFsc2VcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaXNJbnB1dEFjY2VwdGVkKHZhbHVlLCBrZXksIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpO1xuICAgICAgICBlbmQgPSBOdW1iZXIoZW5kKTtcbiAgICAgICAgbGV0IGV4cGVjdCA9IHZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyBrZXkgKyB2YWx1ZS5zdWJzdHJpbmcoZW5kKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kV2l0aCh0aGlzLmFjY2VwdFZhbGlkYXRvciwgXCIoKVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlld1t0aGlzLmFjY2VwdFZhbGlkYXRvci5zcGxpdChcIigpXCIpWzBdXSh2YWx1ZSwga2V5LCBleHBlY3QsIHN0YXJ0LCBlbmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YW5kYXJkSW5wdXRBY2NlcHRlZCh2YWx1ZSwga2V5LCBleHBlY3QsIHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIHN0YW5kYXJkSW5wdXRBY2NlcHRlZCh2YWx1ZSwga2V5LCBleHBlY3QsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgZXhwZWN0ID0gIXZhbHVlICYmIGlzTmFOKGV4cGVjdCkgPyBcIlwiIDogZXhwZWN0O1xuICAgICAgICBpZiAodGhpcy5hY2NlcHRWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHJleCA9IG5ldyBSZWdFeHAodGhpcy5hY2NlcHRWYWxpZGF0b3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJleC50ZXN0KGV4cGVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRGb3JtYXR0ZWRPdXRwdXQodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMuZWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiZWVwKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2lnbmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zaWduYWxzW2ldLmJlZXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEV2ZW50KG5hbWUsIGVsLCBmdW5jKSB7XG4gICAgICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgaWYgKGVsZW0uYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGVsLmF0dGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGZ1bmMpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2F0Y2gvVmFsdWVXYXRjaC5qcyIsImNvbnN0IEF0dHJXYXRjaCA9IHJlcXVpcmUoXCIuL0F0dHJXYXRjaFwiKTtcbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgV2F0Y2hBdHRySGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZWwsIHZhbHVlLCB2aWV3LCBzaWduYWxzKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5zaWduYWxzID0gc2lnbmFscztcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXhwcmVzcyA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgIGV4cHJlc3MudHJpbSgpO1xuICAgICAgICAgICAgaWYgKGV4cHJlc3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQXR0cih2YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NBdHRyKHBhaXIpIHtcbiAgICAgICAgcGFpciA9IHBhaXIuc3BsaXQoXCI6XCIpO1xuICAgICAgICBjb25zdCBhdHRyTmFtZSA9IHBhaXJbMF07XG4gICAgICAgIGNvbnN0IGxpc3RlbmVkUHJvcGVydHkgPSBwYWlyWzFdIHx8IGF0dHJOYW1lO1xuICAgICAgICBuZXcgQXR0cldhdGNoKHRoaXMuZWwsIHRoaXMudmlldywgdGhpcy5zaWduYWxzLCBsaXN0ZW5lZFByb3BlcnR5LCBhdHRyTmFtZSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93YXRjaC9XYXRjaEF0dHJIYW5kbGVyLmpzIiwiY29uc3QgQ2xhc3NXYXRjaCA9IHJlcXVpcmUoXCIuL0NsYXNzV2F0Y2hcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhdGNoQ2xhc3NIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmFsdWUsIHZpZXcsIHNpZ25hbHMpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLnNpZ25hbHMgPSBzaWduYWxzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIiBcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgZXhwcmVzcy50cmltKCk7XG4gICAgICAgICAgICBpZiAoZXhwcmVzcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXcgQ2xhc3NXYXRjaChlbCwgdmlldywgc2lnbmFscywgZXhwcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL1dhdGNoQ2xhc3NIYW5kbGVyLmpzIiwiY29uc3QgSHRtbFdhdGNoID0gcmVxdWlyZShcIi4vSHRtbFdhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXYXRjaEh0bWxIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmFsdWUsIHZpZXcsIHNpZ25hbHMpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLnNpZ25hbHMgPSBzaWduYWxzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIjpcIik7XG4gICAgICAgIG5ldyBIdG1sV2F0Y2goZWwsIHZpZXcsIHNpZ25hbHMsIHZhbHVlc1swXSwgdmFsdWVzWzFdKTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93YXRjaC9XYXRjaEh0bWxIYW5kbGVyLmpzIiwiY29uc3QgU3R5bGVXYXRjaCA9IHJlcXVpcmUoXCIuL1N0eWxlV2F0Y2hcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhdGNoU3R5bGVIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmFsdWUsIHZpZXcsIHNpZ25hbHMpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLnNpZ25hbHMgPSBzaWduYWxzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIjtcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgZXhwcmVzcy50cmltKCk7XG4gICAgICAgICAgICBpZiAoZXhwcmVzcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NTdHlsZSh2YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NTdHlsZShwYWlyKSB7XG4gICAgICAgIHBhaXIgPSBwYWlyLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgbGV0IHN0eWxlTmFtZSA9IHBhaXJbMF07XG4gICAgICAgIHN0eWxlTmFtZSA9IHN0eWxlTmFtZS5zcGxpdChcIiNcIik7XG4gICAgICAgIGNvbnN0IHVuaXQgPSBzdHlsZU5hbWVbMV07XG4gICAgICAgIHN0eWxlTmFtZSA9IHN0eWxlTmFtZVswXTtcbiAgICAgICAgY29uc3QgbGlzdGVuZWRQcm9wZXJ0eSA9IHBhaXJbMV0gfHwgc3R5bGVOYW1lO1xuICAgICAgICBuZXcgU3R5bGVXYXRjaCh0aGlzLmVsLCB0aGlzLnZpZXcsIHRoaXMuc2lnbmFscywgbGlzdGVuZWRQcm9wZXJ0eSwgc3R5bGVOYW1lLCB1bml0KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL1dhdGNoU3R5bGVIYW5kbGVyLmpzIiwiY29uc3QgVGV4dFdhdGNoID0gcmVxdWlyZShcIi4vVGV4dFdhdGNoXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXYXRjaFRleHRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgdmFsdWUsIHZpZXcsIHNpZ25hbHMpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLnNpZ25hbHMgPSBzaWduYWxzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIjpcIik7XG4gICAgICAgIG5ldyBUZXh0V2F0Y2goZWwsIHZpZXcsIHNpZ25hbHMsIHZhbHVlc1swXSwgdmFsdWVzWzFdKTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93YXRjaC9XYXRjaFRleHRIYW5kbGVyLmpzIiwiY29uc3QgVmFsdWVXYXRjaCA9IHJlcXVpcmUoXCIuL1ZhbHVlV2F0Y2hcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdhdGNoQXR0ckhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsLCB2YWx1ZSwgdmlldywgc2lnbmFscykge1xuICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuc2lnbmFscyA9IHNpZ25hbHM7XG4gICAgICAgIGxldCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gdmFsdWVzWzFdO1xuICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNbMF0uc3BsaXQoXCI6XCIpO1xuICAgICAgICBuZXcgVmFsdWVXYXRjaChlbCwgdmlldywgc2lnbmFscywgdmFsdWVzWzBdLCB2YWx1ZXNbMV0sIHZhbHVlc1syXSwgdmFsdWVzWzNdLCB2YWx1ZXNbNF0sIGV2ZW50KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dhdGNoL1dhdGNoVmFsdWVIYW5kbGVyLmpzIiwid2luZG93LmR3ZWJDb21waWxlciA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC13aW5kb3cuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEV2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcihldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBmb3IgKGxldCBwIGluIGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzW3BdID0gZXZlbnRbcF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldDtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93YXRjaC9FdmVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=