/**
 * @license MIT
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _api = require("./api.js");

var _module = _interopRequireWildcard(require("./module.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Add event Listener on multiple elements
 * @param {NodeList} elements Elements Node array
 * @param {string} eventType Event type. e.g.: "click", "mouseover"
 * @param {Function} callback Callback function
 */
var addEventOnElements = function addEventOnElements(elements, eventType, callback) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;
      element.addEventListener(eventType, callback);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};
/**
 * Toggle search in mobile devices
 */


var searchView = document.querySelector("[data-search-view]");
var searchToggles = document.querySelectorAll("[data-search-toggler]");

var toggleSearch = function toggleSearch() {
  return searchView.classList.toggle("active");
};

addEventOnElements(searchToggles, "click", toggleSearch);
/**
 * SEARCH INTEGRATION
 */

var searchField = document.querySelector("[data-search-field]");
var searchResult = document.querySelector("[data-search-result]");
var searchTimeout = null;
var searchTimeoutDuration = 500;
searchField.addEventListener("input", function () {
  searchTimeout;
});
//# sourceMappingURL=app.dev.js.map
