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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(middleware)/./node_modules/next-auth/providers/google.js\");\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.AUTH_GOOGLE_CLIENT_ID,\n            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        authorized ({ auth, req }) {\n            return auth?.user ? true : false;\n        }\n    }\n};\nconst { handlers: { GET, POST }, auth, signIn, signOut } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL19saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ2U7QUFFaEQsTUFBTUUsYUFBYTtJQUNqQkMsV0FBVztRQUNURixzRUFBTUEsQ0FBQztZQUNMRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQjtZQUMzQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyx5QkFBeUI7UUFDckQ7S0FDRDtJQUNEQyxXQUFXO1FBQ1RDLFlBQVcsRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUU7WUFDdEIsT0FBT0QsTUFBTUUsT0FBTyxPQUFPO1FBQzdCO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFDWEMsVUFBVSxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRSxFQUN2QkwsSUFBSSxFQUNKTSxNQUFNLEVBQ05DLE9BQU8sRUFDUixHQUFHbkIscURBQVFBLENBQUNFLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19saWIvYXV0aC5qcz9kNTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuXG5jb25zdCBhdXRoQ29uZmlnID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGUoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFVVEhfR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSF9HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXV0aG9yaXplZCh7IGF1dGgsIHJlcSB9KSB7XG4gICAgICByZXR1cm4gYXV0aD8udXNlciA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgaGFuZGxlcnM6IHsgR0VULCBQT1NUIH0sXG4gIGF1dGgsXG4gIHNpZ25JbixcbiAgc2lnbk91dCxcbn0gPSBOZXh0QXV0aChhdXRoQ29uZmlnKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZSIsImF1dGhDb25maWciLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIX0dPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIX0dPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsImF1dGgiLCJyZXEiLCJ1c2VyIiwiaGFuZGxlcnMiLCJHRVQiLCJQT1NUIiwic2lnbkluIiwic2lnbk91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./app/_lib/auth.js\n");

/***/ })

});