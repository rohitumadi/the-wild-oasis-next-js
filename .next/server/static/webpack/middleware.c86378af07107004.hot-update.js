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

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _app_lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/_lib/auth */ \"(middleware)/./app/_lib/auth.js\");\n// import { NextResponse } from \"next/server\";\n\n// export function middleware(req, res, next) {\n//   return NextResponse.redirect(new URL(\"/about\", req.url));\n// }\nconst middleware = _app_lib_auth__WEBPACK_IMPORTED_MODULE_0__.auth;\n//middleware will for paths specified in matcher\n//so we are making sure that only /account is protected\nconst config = {\n    matcher: [\n        \"/account\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4Q0FBOEM7QUFFUDtBQUV2QywrQ0FBK0M7QUFDL0MsOERBQThEO0FBQzlELElBQUk7QUFFRyxNQUFNQyxhQUFhRCwrQ0FBSUEsQ0FBQztBQUUvQixnREFBZ0Q7QUFDaEQsdURBQXVEO0FBQ2hELE1BQU1FLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUFXO0FBQ3ZCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vYXBwL19saWIvYXV0aFwiO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCkge1xuLy8gICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvYWJvdXRcIiwgcmVxLnVybCkpO1xuLy8gfVxuXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZSA9IGF1dGg7XG5cbi8vbWlkZGxld2FyZSB3aWxsIGZvciBwYXRocyBzcGVjaWZpZWQgaW4gbWF0Y2hlclxuLy9zbyB3ZSBhcmUgbWFraW5nIHN1cmUgdGhhdCBvbmx5IC9hY2NvdW50IGlzIHByb3RlY3RlZFxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogW1wiL2FjY291bnRcIl0sXG59O1xuIl0sIm5hbWVzIjpbImF1dGgiLCJtaWRkbGV3YXJlIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});