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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(22);
var template = "\n    <div>\n        <!-- read and write property salary -->\n        <input type=\"text\" s-value=\"salary:salary\"><br/>\n        <!-- display salary with a format -->\n        <input type=\"text\" s-value=\"salary:salary:$&nbsp;{0}\"><br/>\n        <!-- convert the string value to number when doing set -->\n        <input type=\"text\" s-value=\"salary:salary:$&nbsp;{0}:number\"><br/>\n        <!-- only number accepted when typing -->\n        <input type=\"text\" s-value=\"salary:salary:$&nbsp;{0}:number:^[1-9]d*|0$\"><br/>\n        <!-- only set data back when hitting enter key (not work now) -->\n        <input type=\"text\" s-value=\"salary:salary:$&nbsp;{0}:number:^[1-9]d*|0$ keypress:13\"><br/>\n    </div>\n";
module.exports = function () {
    function SimpleValue() {
        _classCallCheck(this, SimpleValue);

        this.salary = 1234;
    }

    _createClass(SimpleValue, [{
        key: "render",
        value: function render() {
            this.$el = $(template);
            SJS.compile(this.$el[0], this, new SJS.Signal());
            return this;
        }
    }]);

    return SimpleValue;
}();

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.site = __webpack_require__(2);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    SimpleValue: __webpack_require__(1)
};

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(2);
module.exports = __webpack_require__(1);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGNkYTU5MWJjOGZlMjZkNjk5Y2U/YjEzYyIsIndlYnBhY2s6Ly8vLi9zaXRlcy9zcmMvU2ltcGxlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZXMvc3JjL2luZGV4LXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwidGVtcGxhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwic2FsYXJ5IiwiJGVsIiwiU0pTIiwiY29tcGlsZSIsIlNpZ25hbCIsIndpbmRvdyIsInNpdGUiLCJTaW1wbGVWYWx1ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUEsSUFBTUEsSUFBSSxtQkFBQUMsQ0FBUSxFQUFSLENBQVY7QUFDQSxJQUFNQyxtdUJBQU47QUFjQUMsT0FBT0MsT0FBUDtBQUNJLDJCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsTUFBTCxHQUFjLElBQWQ7QUFDSDs7QUFITDtBQUFBO0FBQUEsaUNBSWE7QUFDTCxpQkFBS0MsR0FBTCxHQUFXTixFQUFFRSxRQUFGLENBQVg7QUFDQUssZ0JBQUlDLE9BQUosQ0FBWSxLQUFLRixHQUFMLENBQVMsQ0FBVCxDQUFaLEVBQXlCLElBQXpCLEVBQStCLElBQUlDLElBQUlFLE1BQVIsRUFBL0I7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7QUFSTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7QUNmQUMsT0FBT0MsSUFBUCxHQUFjLG1CQUFBVixDQUFRLENBQVIsQ0FBZCxDOzs7Ozs7Ozs7O0FDQUFFLE9BQU9DLE9BQVAsR0FBaUI7QUFDYlEsaUJBQWEsbUJBQUFYLENBQVEsQ0FBUjtBQURBLENBQWpCLEM7Ozs7Ozs7QUNBQSxtQiIsImZpbGUiOiJzaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhjZGE1OTFiYzhmZTI2ZDY5OWNlIiwiY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5jb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8ZGl2PlxuICAgICAgICA8IS0tIHJlYWQgYW5kIHdyaXRlIHByb3BlcnR5IHNhbGFyeSAtLT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcy12YWx1ZT1cInNhbGFyeTpzYWxhcnlcIj48YnIvPlxuICAgICAgICA8IS0tIGRpc3BsYXkgc2FsYXJ5IHdpdGggYSBmb3JtYXQgLS0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHMtdmFsdWU9XCJzYWxhcnk6c2FsYXJ5OiQmbmJzcDt7MH1cIj48YnIvPlxuICAgICAgICA8IS0tIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZSB0byBudW1iZXIgd2hlbiBkb2luZyBzZXQgLS0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHMtdmFsdWU9XCJzYWxhcnk6c2FsYXJ5OiQmbmJzcDt7MH06bnVtYmVyXCI+PGJyLz5cbiAgICAgICAgPCEtLSBvbmx5IG51bWJlciBhY2NlcHRlZCB3aGVuIHR5cGluZyAtLT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcy12YWx1ZT1cInNhbGFyeTpzYWxhcnk6JCZuYnNwO3swfTpudW1iZXI6XlsxLTldXFxkKnwwJFwiPjxici8+XG4gICAgICAgIDwhLS0gb25seSBzZXQgZGF0YSBiYWNrIHdoZW4gaGl0dGluZyBlbnRlciBrZXkgKG5vdCB3b3JrIG5vdykgLS0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHMtdmFsdWU9XCJzYWxhcnk6c2FsYXJ5OiQmbmJzcDt7MH06bnVtYmVyOl5bMS05XVxcZCp8MCQga2V5cHJlc3M6MTNcIj48YnIvPlxuICAgIDwvZGl2PlxuYDtcbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgU2ltcGxlVmFsdWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNhbGFyeSA9IDEyMzQ7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy4kZWwgPSAkKHRlbXBsYXRlKTtcbiAgICAgICAgU0pTLmNvbXBpbGUodGhpcy4kZWxbMF0sIHRoaXMsIG5ldyBTSlMuU2lnbmFsKCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGVzL3NyYy9TaW1wbGVWYWx1ZS5qcyIsIndpbmRvdy5zaXRlID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZXMvc3JjL2luZGV4LXdpbmRvdy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFNpbXBsZVZhbHVlOiByZXF1aXJlKFwiLi9TaW1wbGVWYWx1ZVwiKVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlcy9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=