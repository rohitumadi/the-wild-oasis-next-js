"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/account/reservations/edit/[reservationId]/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("// This file must be bundled in the app's client layer, it shouldn't be directly\n// imported by the server.\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"createServerReference\", ({\n    enumerable: true,\n    get: function() {\n        return createServerReference;\n    }\n}));\nconst _appcallserver = __webpack_require__(/*! next/dist/client/app-call-server */ \"(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js\");\nfunction createServerReference(id) {\n    // Since we're using the Edge build of Flight client for SSR [1], here we need to\n    // also use the same Edge build to create the reference. For the client bundle,\n    // we use the default and let Webpack to resolve it to the correct version.\n    // 1: https://github.com/vercel/next.js/blob/16eb80b0b0be13f04a6407943664b5efd8f3d7d0/packages/next/src/server/app-render/use-flight-response.tsx#L24-L26\n    const { createServerReference: createServerReferenceImpl } =  false ? 0 : __webpack_require__(/*! react-server-dom-webpack/client */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-server-dom-webpack/client.js\");\n    return createServerReferenceImpl(id, _appcallserver.callServer);\n}\n\n//# sourceMappingURL=action-client-wrapper.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWxvYWRlci9hY3Rpb24tY2xpZW50LXdyYXBwZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YseURBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsdUJBQXVCLG1CQUFPLENBQUMsZ0hBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFtRCxFQUFFLE1BQTBCLEdBQUcsQ0FBK0MsR0FBRyxtQkFBTyxDQUFDLGlJQUFpQztBQUN6TDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWxvYWRlci9hY3Rpb24tY2xpZW50LXdyYXBwZXIuanM/MzYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgbXVzdCBiZSBidW5kbGVkIGluIHRoZSBhcHAncyBjbGllbnQgbGF5ZXIsIGl0IHNob3VsZG4ndCBiZSBkaXJlY3RseVxuLy8gaW1wb3J0ZWQgYnkgdGhlIHNlcnZlci5cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlU2VydmVyUmVmZXJlbmNlXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVTZXJ2ZXJSZWZlcmVuY2U7XG4gICAgfVxufSk7XG5jb25zdCBfYXBwY2FsbHNlcnZlciA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvY2xpZW50L2FwcC1jYWxsLXNlcnZlclwiKTtcbmZ1bmN0aW9uIGNyZWF0ZVNlcnZlclJlZmVyZW5jZShpZCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIHVzaW5nIHRoZSBFZGdlIGJ1aWxkIG9mIEZsaWdodCBjbGllbnQgZm9yIFNTUiBbMV0sIGhlcmUgd2UgbmVlZCB0b1xuICAgIC8vIGFsc28gdXNlIHRoZSBzYW1lIEVkZ2UgYnVpbGQgdG8gY3JlYXRlIHRoZSByZWZlcmVuY2UuIEZvciB0aGUgY2xpZW50IGJ1bmRsZSxcbiAgICAvLyB3ZSB1c2UgdGhlIGRlZmF1bHQgYW5kIGxldCBXZWJwYWNrIHRvIHJlc29sdmUgaXQgdG8gdGhlIGNvcnJlY3QgdmVyc2lvbi5cbiAgICAvLyAxOiBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvYmxvYi8xNmViODBiMGIwYmUxM2YwNGE2NDA3OTQzNjY0YjVlZmQ4ZjNkN2QwL3BhY2thZ2VzL25leHQvc3JjL3NlcnZlci9hcHAtcmVuZGVyL3VzZS1mbGlnaHQtcmVzcG9uc2UudHN4I0wyNC1MMjZcbiAgICBjb25zdCB7IGNyZWF0ZVNlcnZlclJlZmVyZW5jZTogY3JlYXRlU2VydmVyUmVmZXJlbmNlSW1wbCB9ID0gISFwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPyByZXF1aXJlKFwicmVhY3Qtc2VydmVyLWRvbS13ZWJwYWNrL2NsaWVudC5lZGdlXCIpIDogcmVxdWlyZShcInJlYWN0LXNlcnZlci1kb20td2VicGFjay9jbGllbnRcIik7XG4gICAgcmV0dXJuIGNyZWF0ZVNlcnZlclJlZmVyZW5jZUltcGwoaWQsIF9hcHBjYWxsc2VydmVyLmNhbGxTZXJ2ZXIpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY3Rpb24tY2xpZW50LXdyYXBwZXIuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/_components/UpdateReservation.js":
/*!**********************************************!*\
  !*** ./app/_components/UpdateReservation.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/actions */ \"(app-pages-browser)/./app/_lib/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction UpdateReservation(param) {\n    let { maxCapacity, reservationId } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: ()=>(0,_lib_actions__WEBPACK_IMPORTED_MODULE_2__.updateBooking)(reservationId),\n        className: \"bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"numGuests\",\n                        children: \"How many guests?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        name: \"numGuests\",\n                        id: \"numGuests\",\n                        className: \"px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm\",\n                        required: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select number of guests...\"\n                            }, \"\", false, {\n                                fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            Array.from({\n                                length: maxCapacity\n                            }, (_, i)=>i + 1).map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: x,\n                                    children: [\n                                        x,\n                                        \" \",\n                                        x === 1 ? \"guest\" : \"guests\"\n                                    ]\n                                }, x, true, {\n                                    fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"observations\",\n                        children: \"Anything we should know about your stay?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        name: \"observations\",\n                        className: \"px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end items-center gap-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {}, void 0, false, {\n                    fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = UpdateReservation;\nfunction Button() {\n    _s();\n    const { pending } = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormStatus)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        disabled: pending,\n        className: \"bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300\",\n        children: pending ? \"Updating...\" : \"Update reservation\"\n    }, void 0, false, {\n        fileName: \"/Users/rohitumadi/Docs/webDev/NextJS/the-wild-oasis-next-js/app/_components/UpdateReservation.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Button, \"ChN3pfldoIBH4a0f1nBGB7ED+p0=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormStatus\n    ];\n});\n_c1 = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpdateReservation);\nvar _c, _c1;\n$RefreshReg$(_c, \"UpdateReservation\");\n$RefreshReg$(_c1, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9VcGRhdGVSZXNlcnZhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFMEM7QUFDTTtBQUVoRCxTQUFTRSxrQkFBa0IsS0FBOEI7UUFBOUIsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUUsR0FBOUI7SUFDekIscUJBQ0UsOERBQUNDO1FBQ0NDLFFBQVEsSUFBTUwsMkRBQWFBLENBQUNHO1FBQzVCRyxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBTUMsU0FBUTtrQ0FBWTs7Ozs7O2tDQUMzQiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hOLFdBQVU7d0JBQ1ZPLFFBQVE7OzBDQUVSLDhEQUFDQztnQ0FBT0MsT0FBTTswQ0FBVTsrQkFBSDs7Ozs7NEJBR3BCQyxNQUFNQyxJQUFJLENBQUM7Z0NBQUVDLFFBQVFoQjs0QkFBWSxHQUFHLENBQUNpQixHQUFHQyxJQUFNQSxJQUFJLEdBQUdDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDekQsOERBQUNSO29DQUFPQyxPQUFPTzs7d0NBQ1pBO3dDQUFFO3dDQUFFQSxNQUFNLElBQUksVUFBVTs7bUNBREpBOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFPN0IsOERBQUNmO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQU1DLFNBQVE7a0NBQWU7Ozs7OztrQ0FHOUIsOERBQUNjO3dCQUNDWixNQUFLO3dCQUNMTCxXQUFVOzs7Ozs7Ozs7Ozs7MEJBSWQsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtLQXhDU3ZCO0FBeUNULFNBQVN1Qjs7SUFDUCxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHMUIsd0RBQWFBO0lBQ2pDLHFCQUNFLDhEQUFDMkI7UUFDQ0MsVUFBVUY7UUFDVm5CLFdBQVU7a0JBRVRtQixVQUFVLGdCQUFnQjs7Ozs7O0FBR2pDO0dBVlNEOztRQUNhekIsb0RBQWFBOzs7TUFEMUJ5QjtBQVlULCtEQUFldkIsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fY29tcG9uZW50cy9VcGRhdGVSZXNlcnZhdGlvbi5qcz9hNzBhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VGb3JtU3RhdHVzIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgdXBkYXRlQm9va2luZyB9IGZyb20gXCIuLi9fbGliL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gVXBkYXRlUmVzZXJ2YXRpb24oeyBtYXhDYXBhY2l0eSwgcmVzZXJ2YXRpb25JZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIGFjdGlvbj17KCkgPT4gdXBkYXRlQm9va2luZyhyZXNlcnZhdGlvbklkKX1cbiAgICAgIGNsYXNzTmFtZT1cImJnLXByaW1hcnktOTAwIHB5LTggcHgtMTIgdGV4dC1sZyBmbGV4IGdhcC02IGZsZXgtY29sXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm51bUd1ZXN0c1wiPkhvdyBtYW55IGd1ZXN0cz88L2xhYmVsPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cIm51bUd1ZXN0c1wiXG4gICAgICAgICAgaWQ9XCJudW1HdWVzdHNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMyBiZy1wcmltYXJ5LTIwMCB0ZXh0LXByaW1hcnktODAwIHctZnVsbCBzaGFkb3ctc20gcm91bmRlZC1zbVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBrZXk9XCJcIj5cbiAgICAgICAgICAgIFNlbGVjdCBudW1iZXIgb2YgZ3Vlc3RzLi4uXG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IG1heENhcGFjaXR5IH0sIChfLCBpKSA9PiBpICsgMSkubWFwKCh4KSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt4fSBrZXk9e3h9PlxuICAgICAgICAgICAgICB7eH0ge3ggPT09IDEgPyBcImd1ZXN0XCIgOiBcImd1ZXN0c1wifVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwib2JzZXJ2YXRpb25zXCI+XG4gICAgICAgICAgQW55dGhpbmcgd2Ugc2hvdWxkIGtub3cgYWJvdXQgeW91ciBzdGF5P1xuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwib2JzZXJ2YXRpb25zXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJweC01IHB5LTMgYmctcHJpbWFyeS0yMDAgdGV4dC1wcmltYXJ5LTgwMCB3LWZ1bGwgc2hhZG93LXNtIHJvdW5kZWQtc21cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cbiAgICAgICAgPEJ1dHRvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufVxuZnVuY3Rpb24gQnV0dG9uKCkge1xuICBjb25zdCB7IHBlbmRpbmcgfSA9IHVzZUZvcm1TdGF0dXMoKTtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBkaXNhYmxlZD17cGVuZGluZ31cbiAgICAgIGNsYXNzTmFtZT1cImJnLWFjY2VudC01MDAgcHgtOCBweS00IHRleHQtcHJpbWFyeS04MDAgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1hY2NlbnQtNjAwIHRyYW5zaXRpb24tYWxsIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpiZy1ncmF5LTUwMCBkaXNhYmxlZDp0ZXh0LWdyYXktMzAwXCJcbiAgICA+XG4gICAgICB7cGVuZGluZyA/IFwiVXBkYXRpbmcuLi5cIiA6IFwiVXBkYXRlIHJlc2VydmF0aW9uXCJ9XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVJlc2VydmF0aW9uO1xuIl0sIm5hbWVzIjpbInVzZUZvcm1TdGF0dXMiLCJ1cGRhdGVCb29raW5nIiwiVXBkYXRlUmVzZXJ2YXRpb24iLCJtYXhDYXBhY2l0eSIsInJlc2VydmF0aW9uSWQiLCJmb3JtIiwiYWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwibmFtZSIsImlkIiwicmVxdWlyZWQiLCJvcHRpb24iLCJ2YWx1ZSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwibWFwIiwieCIsInRleHRhcmVhIiwiQnV0dG9uIiwicGVuZGluZyIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/UpdateReservation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/_lib/actions.js":
/*!*****************************!*\
  !*** ./app/_lib/actions.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteBooking: function() { return /* binding */ deleteBooking; },
/* harmony export */   signInAction: function() { return /* binding */ signInAction; },
/* harmony export */   signOutAction: function() { return /* binding */ signOutAction; },
/* harmony export */   updateBooking: function() { return /* binding */ updateBooking; },
/* harmony export */   updateGuest: function() { return /* binding */ updateGuest; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"29ee8506b8c765c0b7a31a0ab44078eccac08f96":"signInAction","530de0cc15ebfbd797afb848fe2cf698f7576d8f":"updateGuest","99d41cddd8ea4aa6dc4002ebe728bdc2ebe0326b":"updateBooking","c0fc65aeb86f84f5a80c5d38e2076c3fcd462c8a":"deleteBooking","c41a618ec6451ec793b3b23cd8f37a5bb4b9942d":"signOutAction"} */ var signOutAction = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("c41a618ec6451ec793b3b23cd8f37a5bb4b9942d");

var updateBooking = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("99d41cddd8ea4aa6dc4002ebe728bdc2ebe0326b");
var updateGuest = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("530de0cc15ebfbd797afb848fe2cf698f7576d8f");
var deleteBooking = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("c0fc65aeb86f84f5a80c5d38e2076c3fcd462c8a");
var signInAction = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("29ee8506b8c765c0b7a31a0ab44078eccac08f96");



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});