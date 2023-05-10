/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = exports.fetchData = void 0;
var api_key = "97e01642a861053504fb0d938b477326";
/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */

var fetchData = function fetchData(URL, callback) {
  fetch("".concat(URL, "&appid=").concat(api_key)).then(function (res) {
    return res.json();
  }).then(function (data) {
    return callback(data);
  });
};

exports.fetchData = fetchData;
var url = {
  currentWeather: function currentWeather(lat, lon) {
    return "https://api.openweathermap.org/data/2.5/weather?".concat(lat, "&").concat(lon, "&units=metric");
  },
  forecast: function forecast(lat, lon) {
    return "https://api.openweathermap.org/data/2.5/forecast?".concat(lat, "&").concat(lon, "&units=metric");
  },
  airPollution: function airPollution(lat, lon) {
    return "http://api.openweathermap.org/data/2.5/air_pollution?".concat(lat, "&").concat(lon);
  },
  reverseGeo: function reverseGeo(lat, lon) {
    return "http://api.openweathermap.org/geo/1.0/reverse?".concat(lat, "&").concat(lon, "&limit=5");
  },

  /**
   * @param {string} query Search query e.g.: "London", "New York"
   */
  geo: function geo(query) {
    return "http://api.openweathermap.org/geo/1.0/direct?q=".concat(query, "&limit=5");
  }
};
exports.url = url;
//# sourceMappingURL=api.dev.js.map
