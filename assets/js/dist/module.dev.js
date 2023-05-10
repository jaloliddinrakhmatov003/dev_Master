/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aqiText = exports.mps_to_km = exports.getHours = exports.getTime = exports.getDate = exports.monthNames = exports.weekDayNames = void 0;
var weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
exports.weekDayNames = weekDayNames;
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/**
 *
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date string. formate: "Sunday 10, Jan"
 */

exports.monthNames = monthNames;

var getDate = function getDate(dateUnix, timezone) {
  var date = new Date((dateUnix + timezone) * 1000);
  var weekDayName = weekDayNames[date.getUTCDay()];
  var monthName = monthNames[date.getUTCMonth()];
  return "".concat(weekDayName, " ").concat(date.getUTCDate(), ", ").concat(monthName);
};
/**
 *
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */


exports.getDate = getDate;

var getTime = function getTime(timeUnix, timezone) {
  var date = new Date((timeUnix + timezone) * 1000);
  var hours = date.getUTCHours();
  var minutes = date.getMinutes();
  var period = hours >= 12 ? "PM" : "AM";
  return "".concat(hours % 12 || 12, ":").concat(minutes, " ").concat(period);
};
/**
 *
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */


exports.getTime = getTime;

var getHours = function getHours(timeUnix, timezone) {
  var date = new Date((timeUnix + timezone) * 1000);
  var hours = date.getUTCHours();
  var period = hours >= 12 ? "PM" : "AM";
  return "".concat(hours % 12 || 12, " ").concat(period);
};
/**
 *
 * @param {number} mps Meter per seconds
 * @returns {number} Kilometer per hours
 */


exports.getHours = getHours;

var mps_to_km = function mps_to_km(mps) {
  var mph = mps * 3600;
  return mph / 1000;
};

exports.mps_to_km = mps_to_km;
var aqiText = {
  1: {
    level: "Good",
    message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
  },
  2: {
    level: "Fair",
    message: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution"
  },
  3: {
    level: "Moderate",
    message: "AMembers of sensitive  groups may experience health effects. The general public is not likely to be affected"
  },
  4: {
    level: "Poor",
    message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects"
  },
  5: {
    level: "Very poor",
    message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
  }
};
exports.aqiText = aqiText;
//# sourceMappingURL=module.dev.js.map
