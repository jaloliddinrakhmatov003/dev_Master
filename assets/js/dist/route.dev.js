/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
"use strict";

var _app = require("./app.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474"; // London

var currentLocation = function currentLocation() {
  window.navigator.geolocation.getCurrentPosition(function (res) {
    var _res$coords = res.coords,
        latitude = _res$coords.latitude,
        longitude = _res$coords.longitude;
    (0, _app.updateWeather)("lat=".concat(latitude), "lon=".concat(longitude));
  }, function (err) {
    window.location.hash = defaultLocation;
  });
};
/**
 * @param {string} query Searched query
 */


var searchedLocation = function searchedLocation(query) {
  return _app.updateWeather.apply(void 0, _toConsumableArray(query.split("&")));
}; // updateWeather("lat=51.5073219", "lon=-0.1276474")


var routes = new Map([["/current-location", currentLocation], ["/weather", searchedLocation]]);

var checkHash = function checkHash() {
  var requestURL = window.location.hash.slice(1);

  var _ref = requestURL.includes ? requestURL.split("?") : [requestURL],
      _ref2 = _slicedToArray(_ref, 2),
      route = _ref2[0],
      query = _ref2[1];

  routes.get(route) ? routes.get(route)(query) : (0, _app.error404)();
};

window.addEventListener("hashchange", checkHash);
window.addEventListener("load", function () {
  if (!window.location.hash) {
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});
//# sourceMappingURL=route.dev.js.map
