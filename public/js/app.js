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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var className = document.querySelectorAll('.quantity');

Array.from(className).forEach(function (element) {
    element.addEventListener("change", function () {
        console.log("herer");
        alert('change');
    });
});

// className.addEventListener("change", function() {
//    alert("herllsdfadsf");
// });

// function quantity() {


// }

// require('./bootstrap');

var StripEnv = "pk_test_51MfRUSBYlIuGs37zfoPfxPPtZw0ufSB86mRFtBzboLGZBs88N7c173S4OydyPSXVrMqSVtq5iCftzIO7EPjZzxMv00SGXOZW2s";
var stripe = Stripe(StripEnv);
var elements = stripe.elements();
var cardElement = elements.create('card');
cardElement.mount('#card-element');

var btn = document.getElementById("complete-order");
btn.onclick = function () {
    createToken();
};

function createToken() {
    document.getElementById("complete-order").disabled = true;
    var options = {
        name: document.getElementById('name_on_card').value,
        address: document.getElementById('address').value,
        address_city: document.getElementById('city').value,
        address_state: document.getElementById('province').value,
        address_zip: document.getElementById('postalcode').value
    };

    stripe.createToken(cardElement, options).then(function (result) {
        var displayError = document.getElementById('card-errors');
        if (typeof result.error != 'undefined') {
            document.getElementById("complete-order").disabled = false;
            displayError.textContent = result.error.message;
        }

        // creating token success
        if (typeof result.token != 'undefined') {
            var token = result.token.id;
            stripeTokenHandler(token);
        }
    });
}
function stripeTokenHandler(token) {

    var form = document.getElementById('checkout-form');
    document.getElementById('stripe-token-id').value = token;
    // form.submit();
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzRmYjRmNDUyZTVjZTU3ZjBhZWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzPzZkMTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL3Jlc3BvbnNpdmUuc2Nzcz80MjBiIl0sIm5hbWVzIjpbImNsYXNzTmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsIlN0cmlwRW52IiwicHJvY2VzcyIsInN0cmlwZSIsIlN0cmlwZSIsImVsZW1lbnRzIiwiY2FyZEVsZW1lbnQiLCJjcmVhdGUiLCJtb3VudCIsImJ0biIsImdldEVsZW1lbnRCeUlkIiwib25jbGljayIsImNyZWF0ZVRva2VuIiwiZGlzYWJsZWQiLCJvcHRpb25zIiwibmFtZSIsInZhbHVlIiwiYWRkcmVzcyIsImFkZHJlc3NfY2l0eSIsImFkZHJlc3Nfc3RhdGUiLCJhZGRyZXNzX3ppcCIsInRoZW4iLCJyZXN1bHQiLCJkaXNwbGF5RXJyb3IiLCJlcnJvciIsInRleHRDb250ZW50IiwibWVzc2FnZSIsInRva2VuIiwiaWQiLCJzdHJpcGVUb2tlbkhhbmRsZXIiLCJmb3JtIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REEsSUFBSUEsWUFBWUMsU0FBU0MsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBaEI7O0FBRUFDLE1BQU1DLElBQU4sQ0FBV0osU0FBWCxFQUFzQkssT0FBdEIsQ0FBOEIsVUFBU0MsT0FBVCxFQUFpQjtBQUMvQ0EsWUFBUUMsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBa0MsWUFBVTtBQUN4Q0MsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FDLGNBQU0sUUFBTjtBQUNILEtBSEQ7QUFJQyxDQUxEOztBQU9BO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUEsSUFBSUMsV0FBV0MsNkdBQWY7QUFDQSxJQUFJQyxTQUFTQyxPQUFPSCxRQUFQLENBQWI7QUFDQSxJQUFJSSxXQUFXRixPQUFPRSxRQUFQLEVBQWY7QUFDQSxJQUFJQyxjQUFjRCxTQUFTRSxNQUFULENBQWdCLE1BQWhCLENBQWxCO0FBQ0FELFlBQVlFLEtBQVosQ0FBa0IsZUFBbEI7O0FBRUEsSUFBSUMsTUFBTWxCLFNBQVNtQixjQUFULENBQXdCLGdCQUF4QixDQUFWO0FBQ0FELElBQUlFLE9BQUosR0FBYyxZQUFZO0FBQ3RCQztBQUNILENBRkQ7O0FBSUEsU0FBU0EsV0FBVCxHQUF1QjtBQUNuQnJCLGFBQVNtQixjQUFULENBQXdCLGdCQUF4QixFQUEwQ0csUUFBMUMsR0FBcUQsSUFBckQ7QUFDQSxRQUFJQyxVQUFVO0FBQ1ZDLGNBQUt4QixTQUFTbUIsY0FBVCxDQUF3QixjQUF4QixFQUF3Q00sS0FEbkM7QUFFVkMsaUJBQVExQixTQUFTbUIsY0FBVCxDQUF3QixTQUF4QixFQUFtQ00sS0FGakM7QUFHVkUsc0JBQWEzQixTQUFTbUIsY0FBVCxDQUF3QixNQUF4QixFQUFnQ00sS0FIbkM7QUFJVkcsdUJBQWM1QixTQUFTbUIsY0FBVCxDQUF3QixVQUF4QixFQUFvQ00sS0FKeEM7QUFLVkkscUJBQVk3QixTQUFTbUIsY0FBVCxDQUF3QixZQUF4QixFQUFzQ007QUFMeEMsS0FBZDs7QUFRQWIsV0FBT1MsV0FBUCxDQUFtQk4sV0FBbkIsRUFBK0JRLE9BQS9CLEVBQXdDTyxJQUF4QyxDQUE2QyxVQUFTQyxNQUFULEVBQWlCO0FBQzFELFlBQUlDLGVBQWVoQyxTQUFTbUIsY0FBVCxDQUF3QixhQUF4QixDQUFuQjtBQUNBLFlBQUcsT0FBT1ksT0FBT0UsS0FBZCxJQUF1QixXQUExQixFQUF1QztBQUNuQ2pDLHFCQUFTbUIsY0FBVCxDQUF3QixnQkFBeEIsRUFBMENHLFFBQTFDLEdBQXFELEtBQXJEO0FBQ0FVLHlCQUFhRSxXQUFiLEdBQTJCSCxPQUFPRSxLQUFQLENBQWFFLE9BQXhDO0FBQ0g7O0FBRUQ7QUFDQSxZQUFHLE9BQU9KLE9BQU9LLEtBQWQsSUFBdUIsV0FBMUIsRUFBdUM7QUFDbkMsZ0JBQUlBLFFBQVFMLE9BQU9LLEtBQVAsQ0FBYUMsRUFBekI7QUFDQUMsK0JBQW1CRixLQUFuQjtBQUNIO0FBQ0osS0FaRDtBQWFIO0FBQ0QsU0FBU0Usa0JBQVQsQ0FBNEJGLEtBQTVCLEVBQWtDOztBQUU5QixRQUFJRyxPQUFPdkMsU0FBU21CLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBWDtBQUNBbkIsYUFBU21CLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDTSxLQUEzQyxHQUFtRFcsS0FBbkQ7QUFDQTtBQUNGLEM7Ozs7OztBQzVERix5Qzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM0ZmI0ZjQ1MmU1Y2U1N2YwYWVlIiwidmFyIGNsYXNzTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWFudGl0eScpO1xuXG5BcnJheS5mcm9tKGNsYXNzTmFtZSkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcbmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7IFxuICAgIGNvbnNvbGUubG9nKFwiaGVyZXJcIik7XG4gICAgYWxlcnQoJ2NoYW5nZScpXG59KVxufSkgXG5cbi8vIGNsYXNzTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgYWxlcnQoXCJoZXJsbHNkZmFkc2ZcIik7XG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gcXVhbnRpdHkoKSB7XG4gICAgXG4gICAgXG4vLyB9XG5cbi8vIHJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbnZhciBTdHJpcEVudiA9IHByb2Nlc3MuZW52Lk1JWF9TVFJJUEVfS0VZO1xudmFyIHN0cmlwZSA9IFN0cmlwZShTdHJpcEVudik7XG52YXIgZWxlbWVudHMgPSBzdHJpcGUuZWxlbWVudHMoKTtcbnZhciBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmNyZWF0ZSgnY2FyZCcpO1xuY2FyZEVsZW1lbnQubW91bnQoJyNjYXJkLWVsZW1lbnQnKTtcblxudmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGUtb3JkZXJcIik7XG5idG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjcmVhdGVUb2tlbigpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlVG9rZW4oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZS1vcmRlclwiKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgbGV0IG9wdGlvbnMgPSB7IFxuICAgICAgICBuYW1lOmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lX29uX2NhcmQnKS52YWx1ZSxcbiAgICAgICAgYWRkcmVzczpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcycpLnZhbHVlLFxuICAgICAgICBhZGRyZXNzX2NpdHk6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS52YWx1ZSxcbiAgICAgICAgYWRkcmVzc19zdGF0ZTpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvdmluY2UnKS52YWx1ZSxcbiAgICAgICAgYWRkcmVzc196aXA6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3RhbGNvZGUnKS52YWx1ZSxcbiAgICB9XG4gICAgXG4gICAgc3RyaXBlLmNyZWF0ZVRva2VuKGNhcmRFbGVtZW50LG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHZhciBkaXNwbGF5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1lcnJvcnMnKTsgXG4gICAgICAgIGlmKHR5cGVvZiByZXN1bHQuZXJyb3IgIT0gJ3VuZGVmaW5lZCcpIHsgXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlLW9yZGVyXCIpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IudGV4dENvbnRlbnQgPSByZXN1bHQuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0aW5nIHRva2VuIHN1Y2Nlc3NcbiAgICAgICAgaWYodHlwZW9mIHJlc3VsdC50b2tlbiAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHRva2VuID0gcmVzdWx0LnRva2VuLmlkXG4gICAgICAgICAgICBzdHJpcGVUb2tlbkhhbmRsZXIodG9rZW4pXG4gICAgICAgIH0gXG4gICAgfSk7XG59XG5mdW5jdGlvbiBzdHJpcGVUb2tlbkhhbmRsZXIodG9rZW4pe1xuXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tvdXQtZm9ybScpOyBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RyaXBlLXRva2VuLWlkJykudmFsdWUgPSB0b2tlbjtcbiAgICAvLyBmb3JtLnN1Ym1pdCgpO1xuIH1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9yZXNwb25zaXZlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==