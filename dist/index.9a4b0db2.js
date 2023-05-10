var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire57bc;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},e.parcelRequire57bc=t)
/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */;var i=t("gUmhh");const a=new Map([["/current-location",function(){window.navigator.geolocation.getCurrentPosition((e=>{const{latitude:n,longitude:o}=e.coords;(0,i.updateWeather)(`lat=${n}`,`lon=${o}`)}),(e=>{window.location.hash="#/weather?lat=51.5073219&lon=-0.1276474"}))}],["/weather",e=>(0,i.updateWeather)(...e.split("&"))]]),r=function(){const e=window.location.hash.slice(1),[n,o]=e.includes?e.split("?"):[e];a.get(n)?a.get(n)(o):(0,i.error404)()};window.addEventListener("hashchange",r),window.addEventListener("load",(function(){window.location.hash?r():window.location.hash="#/current-location"}));
//# sourceMappingURL=index.9a4b0db2.js.map
