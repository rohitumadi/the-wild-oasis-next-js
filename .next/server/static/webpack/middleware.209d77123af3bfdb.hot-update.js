"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./app/_lib/auth.js":
/*!**************************!*\
  !*** ./app/_lib/auth.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(middleware)/./node_modules/next-auth/providers/google.js\");\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.AUTH_GOOGLE_CLIENT_ID,\n            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        authorized ({ auth, req }) {\n            //if there is user they will be authorized\n            return auth?.user ? true : false;\n        }\n    }\n};\nconst { handlers: { GET, POST }, auth, signIn, signOut } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL19saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ2U7QUFFaEQsTUFBTUUsYUFBYTtJQUNqQkMsV0FBVztRQUNURixzRUFBTUEsQ0FBQztZQUNMRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQjtZQUMzQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyx5QkFBeUI7UUFDckQ7S0FDRDtJQUNEQyxXQUFXO1FBQ1RDLFlBQVcsRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUU7WUFDdEIsMENBQTBDO1lBQzFDLE9BQU9ELE1BQU1FLE9BQU8sT0FBTztRQUM3QjtJQUNGO0FBQ0Y7QUFFTyxNQUFNLEVBQ1hDLFVBQVUsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsRUFDdkJMLElBQUksRUFDSk0sTUFBTSxFQUNOQyxPQUFPLEVBQ1IsR0FBR25CLHFEQUFRQSxDQUFDRSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fbGliL2F1dGguanM/ZDU4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZSBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcblxuY29uc3QgYXV0aENvbmZpZyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5BVVRIX0dPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEhfR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGF1dGhvcml6ZWQoeyBhdXRoLCByZXEgfSkge1xuICAgICAgLy9pZiB0aGVyZSBpcyB1c2VyIHRoZXkgd2lsbCBiZSBhdXRob3JpemVkXG4gICAgICByZXR1cm4gYXV0aD8udXNlciA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgaGFuZGxlcnM6IHsgR0VULCBQT1NUIH0sXG4gIGF1dGgsXG4gIHNpZ25JbixcbiAgc2lnbk91dCxcbn0gPSBOZXh0QXV0aChhdXRoQ29uZmlnKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZSIsImF1dGhDb25maWciLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIX0dPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIX0dPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsImF1dGgiLCJyZXEiLCJ1c2VyIiwiaGFuZGxlcnMiLCJHRVQiLCJQT1NUIiwic2lnbkluIiwic2lnbk91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./app/_lib/auth.js\n");

/***/ })

});