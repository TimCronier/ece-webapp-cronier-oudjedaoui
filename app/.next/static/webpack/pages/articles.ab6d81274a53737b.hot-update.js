"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./pages/articles/index.js":
/*!*********************************!*\
  !*** ./pages/articles/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Articles; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_UsernameCom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/UsernameCom */ \"./Components/UsernameCom.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Articles(props) {\n    var _this = this;\n    _s();\n    var session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    var supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), username = ref1[0], setUsername = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        function loadData() {\n            return _loadData.apply(this, arguments);\n        }\n        function _loadData() {\n            _loadData = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var ref, articles;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                supabaseClient.from(\"articles\").select(\"*\").order(\"created_at\", {\n                                    ascending: false\n                                })\n                            ];\n                        case 1:\n                            ref = _state.sent(), articles = ref.data;\n                            setData(articles);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _loadData.apply(this, arguments);\n        }\n        loadData();\n    });\n    function loadUsername(_) {\n        return _loadUsername.apply(this, arguments);\n    }\n    function _loadUsername() {\n        _loadUsername = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(param) {\n            var author_id, ref, data, _$error, status, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        author_id = param.author_id;\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            supabase.from(\"profiles\").select(\"username\").eq(\"id\", author_id).single()\n                        ];\n                    case 2:\n                        ref = _state.sent(), data = ref.data, _$error = ref.error, status = ref.status;\n                        if (_$error && status !== 406) {\n                            throw _$error;\n                        }\n                        if (data) {\n                            setUsername(data.username);\n                        }\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        //alert('Error loading user data!')\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _loadUsername.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"articlesWrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: props.darkMode ? articlesTitleDark : articlesTitle,\n                children: \"ARTICLES\"\n            }, void 0, false, {\n                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                lineNumber: 51,\n                columnNumber: 10\n            }, this),\n            data ? data.map(function(article) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/articles/\" + article.id,\n                    children: props.darkMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"articleBoxDark\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                class: \"articleIconImage\",\n                                src: article.source\n                            }, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"articleIconTitle\",\n                                children: article.title\n                            }, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"articleAuthor\",\n                                children: [\n                                    \"Written by \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_UsernameCom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        id: article.author_id\n                                    }, void 0, false, {\n                                        fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 55\n                                    }, _this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 16\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"articleBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                class: \"articleIconImage\",\n                                src: article.source\n                            }, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"articleIconTitle\",\n                                children: article.title\n                            }, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"articleAuthor\",\n                                children: [\n                                    \"Written by \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_UsernameCom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        id: article.author_id\n                                    }, void 0, false, {\n                                        fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 55\n                                    }, _this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 16\n                    }, _this)\n                }, article.id, false, {\n                    fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n        lineNumber: 50,\n        columnNumber: 7\n    }, this);\n} // export const getStaticProps = async () => {\n //    const supabaseClient = useSupabaseClient()\n //    const res = await supabaseClient\n //          .from('articles')\n //          .select('*')\n //          setData(data.json())\n //    const data = await res.json()\n //    return {\n //       props: {articles: data}\n //    }\n //  }\n // <div style = {{minHeight: '81.3vh'}} id=\"list\">\n //       {data ? data.map(article => (\n //          <Link href={'/articles/' + article.id} key={article.id}>\n //             <ul class='user'>\n //                <a>\n //                   Title : {article.title}\n //                   <li>Content : {article.content}</li>\n //                   <li>Author : {article.author_id}</li>\n //                </a>\n //             </ul>\n //          </Link>\n //       )) : <></>}\n //    </div>\n_s(Articles, \"DCQA1v8yoUn99wwisLVCYaAKOcc=\", false, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient\n    ];\n});\n_c = Articles;\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFxRjtBQUN6RDtBQUNlO0FBQ1c7QUFHdkMsU0FBU08sUUFBUSxDQUFDQyxLQUFLLEVBQUU7OztJQUNyQyxJQUFNQyxPQUFPLEdBQUdQLHdFQUFVLEVBQUU7SUFDNUIsSUFBTVEsY0FBYyxHQUFHVCwrRUFBaUIsRUFBRTtJQUMxQyxJQUF3QkksR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTNCTSxJQUFJLEdBQWFOLEdBQVUsR0FBdkIsRUFBRU8sT0FBTyxHQUFJUCxHQUFVLEdBQWQ7SUFDcEIsSUFBZ0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUFuQ1EsUUFBUSxHQUFpQlIsSUFBVSxHQUEzQixFQUFFUyxXQUFXLEdBQUlULElBQVUsR0FBZDtJQUc1QkQsZ0RBQVMsQ0FBQyxXQUFNO2lCQUNFVyxRQUFRO21CQUFSQSxTQUFROztpQkFBUkEsU0FBUTtZQUFSQSxTQUFRLEdBQXZCLCtGQUEwQjtvQkFDSSxHQUdrQixFQUgvQkMsUUFBUTs7Ozs0QkFBSzs7Z0NBQU1OLGNBQWMsQ0FDM0NPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDaEJDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsS0FBSyxDQUFDLFlBQVksRUFBRTtvQ0FBRUMsU0FBUyxFQUFFLEtBQUs7aUNBQUUsQ0FBQzs4QkFBQTs7NEJBSGxCLEdBR2tCLEdBSGxCLGFBR2tCLEVBSHJDVCxRQUFjLEdBQUssR0FHa0IsQ0FIckNBLElBQUk7NEJBSVpDLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDOzs7Ozs7WUFDcEIsQ0FBQzttQkFOY0QsU0FBUTs7UUFPdkJBLFFBQVEsRUFBRTtJQUViLENBQUMsQ0FBQzthQUVhTSxZQUFZLENBQUMsQ0FBYTtlQUExQkEsYUFBWTs7YUFBWkEsYUFBWTtRQUFaQSxhQUFZLEdBQTNCLDZGQUE0QixLQUFhLEVBQUU7Z0JBQWJDLFNBQVMsRUFFSCxHQUlsQixFQUpOWCxJQUFJLEVBQUVZLE9BQUssRUFBRUMsTUFBTSxFQWFuQkQsS0FBSzs7Ozt3QkFmVyxTQUFXLEdBQVgsS0FBYSxDQUFYRCxTQUFTLENBQUU7Ozs7Ozs7Ozt3QkFFTDs7NEJBQU1HLFFBQVEsQ0FDeENSLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDaEJDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDbEJRLEVBQUUsQ0FBQyxJQUFJLEVBQUVKLFNBQVMsQ0FBQyxDQUNuQkssTUFBTSxFQUFFOzBCQUFBOzt3QkFKa0IsR0FJbEIsR0FKa0IsYUFJbEIsRUFKTmhCLElBQUksR0FBb0IsR0FJbEIsQ0FKTkEsSUFBSSxFQUFFWSxPQUFLLEdBQWEsR0FJbEIsQ0FKQUEsS0FBSyxFQUFFQyxNQUFNLEdBQUssR0FJbEIsQ0FKT0EsTUFBTTt3QkFNekIsSUFBSUQsT0FBSyxJQUFJQyxNQUFNLEtBQUssR0FBRyxFQUFFOzRCQUMxQixNQUFNRCxPQUFLO3dCQUNkLENBQUM7d0JBRUQsSUFBSVosSUFBSSxFQUFFOzRCQUNQRyxXQUFXLENBQUNILElBQUksQ0FBQ0UsUUFBUSxDQUFDO3dCQUM3QixDQUFDOzs7Ozs7d0JBQ0tVLEtBQUs7d0JBQ1gsbUNBQW1DO3dCQUNuQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7UUFFeEIsQ0FBQztlQW5CY0YsYUFBWTs7SUF1QjNCLHFCQUNHLDhEQUFDUyxLQUFHO1FBQUNDLEtBQUssRUFBQyxpQkFBaUI7OzBCQUN6Qiw4REFBQ0MsTUFBSTtnQkFBQ0QsS0FBSyxFQUFFdkIsS0FBSyxDQUFDeUIsUUFBUSxHQUFHQyxpQkFBaUIsR0FBR0MsYUFBYTswQkFBRSxVQUFROzs7OztvQkFBTztZQUMvRXhCLElBQUksR0FBR0EsSUFBSSxDQUFDeUIsR0FBRyxDQUFDQyxTQUFBQSxPQUFPO3FDQUNyQiw4REFBQ2xDLGtEQUFJO29CQUFDbUMsSUFBSSxFQUFFLFlBQVksR0FBR0QsT0FBTyxDQUFDRSxFQUFFOzhCQUNqQy9CLEtBQUssQ0FBQ3lCLFFBQVEsaUJBQ2YsOERBQUNILEtBQUc7d0JBQUNDLEtBQUssRUFBQyxnQkFBZ0I7OzBDQUN4Qiw4REFBQ1MsS0FBRztnQ0FBQ1QsS0FBSyxFQUFDLGtCQUFrQjtnQ0FBQ1UsR0FBRyxFQUFFSixPQUFPLENBQUNLLE1BQU07Ozs7O3FDQUFROzBDQUN6RCw4REFBQ0MsR0FBQztnQ0FBQ1osS0FBSyxFQUFDLGtCQUFrQjswQ0FBRU0sT0FBTyxDQUFDTyxLQUFLOzs7OztxQ0FBSzswQ0FDL0MsOERBQUNDLElBQUU7Ozs7cUNBQUc7MENBQ04sOERBQUNGLEdBQUM7Z0NBQUNaLEtBQUssRUFBQyxlQUFlOztvQ0FBQyxhQUFXO2tEQUFBLDhEQUFDekIsK0RBQVc7d0NBQUNpQyxFQUFFLEVBQUVGLE9BQU8sQ0FBQ2YsU0FBUzs7Ozs7NkNBQUk7b0NBQUEsR0FBQzs7Ozs7O3FDQUFJOzs7Ozs7NkJBQzVFLGlCQUVOLDhEQUFDUSxLQUFHO3dCQUFDQyxLQUFLLEVBQUMsWUFBWTs7MENBQ3BCLDhEQUFDUyxLQUFHO2dDQUFDVCxLQUFLLEVBQUMsa0JBQWtCO2dDQUFDVSxHQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssTUFBTTs7Ozs7cUNBQVE7MENBQ3pELDhEQUFDQyxHQUFDO2dDQUFDWixLQUFLLEVBQUMsa0JBQWtCOzBDQUFFTSxPQUFPLENBQUNPLEtBQUs7Ozs7O3FDQUFLOzBDQUMvQyw4REFBQ0MsSUFBRTs7OztxQ0FBRzswQ0FDTiw4REFBQ0YsR0FBQztnQ0FBQ1osS0FBSyxFQUFDLGVBQWU7O29DQUFDLGFBQVc7a0RBQUEsOERBQUN6QiwrREFBVzt3Q0FBQ2lDLEVBQUUsRUFBRUYsT0FBTyxDQUFDZixTQUFTOzs7Ozs2Q0FBSTtvQ0FBQSxHQUFDOzs7Ozs7cUNBQUk7Ozs7Ozs2QkFDNUU7bUJBZG1DZSxPQUFPLENBQUNFLEVBQUU7Ozs7eUJBa0IvQzthQUNULENBQUMsaUJBQUcsNklBQUs7Ozs7OztZQUNQLENBQ1I7QUFFSixDQUFDLENBRUQsOENBQThDO0NBQzNDLGdEQUFnRDtDQUNoRCxzQ0FBc0M7Q0FDdEMsNkJBQTZCO0NBQzdCLHdCQUF3QjtDQUN4QixnQ0FBZ0M7Q0FDaEMsbUNBQW1DO0NBQ25DLGNBQWM7Q0FDZCxnQ0FBZ0M7Q0FDaEMsT0FBTztDQUNQLEtBQUs7Q0FHTCxrREFBa0Q7Q0FDbEQsc0NBQXNDO0NBQ3RDLG9FQUFvRTtDQUNwRSxnQ0FBZ0M7Q0FDaEMscUJBQXFCO0NBQ3JCLDRDQUE0QztDQUM1Qyx5REFBeUQ7Q0FDekQsMERBQTBEO0NBQzFELHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixZQUFZO0dBaEdTaEMsUUFBUTs7UUFDYkwsb0VBQVU7UUFDSEQsMkVBQWlCOzs7QUFGbkJNLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvaW5kZXguanM/NDE5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VVc2VyLCB1c2VTdXBhYmFzZUNsaWVudCwgdXNlU2Vzc2lvbiB9IGZyb20gJ0BzdXBhYmFzZS9hdXRoLWhlbHBlcnMtcmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVXNlcm5hbWVDb20gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Vc2VybmFtZUNvbSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlcyhwcm9wcykge1xuICAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKVxuICAgY29uc3Qgc3VwYWJhc2VDbGllbnQgPSB1c2VTdXBhYmFzZUNsaWVudCgpXG4gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpXG4gICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKClcblxuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKSB7XG4gICAgICAgICBjb25zdCB7IGRhdGE6IGFydGljbGVzIH0gPSBhd2FpdCBzdXBhYmFzZUNsaWVudFxuICAgICAgICAgICAgLmZyb20oJ2FydGljbGVzJylcbiAgICAgICAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgICAgICBzZXREYXRhKGFydGljbGVzKVxuICAgICAgfVxuICAgICAgbG9hZERhdGEoKVxuXG4gICB9KVxuXG4gICBhc3luYyBmdW5jdGlvbiBsb2FkVXNlcm5hbWUoeyBhdXRob3JfaWQgfSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgIGxldCB7IGRhdGEsIGVycm9yLCBzdGF0dXMgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxuICAgICAgICAgICAgLnNlbGVjdCgndXNlcm5hbWUnKVxuICAgICAgICAgICAgLmVxKCdpZCcsIGF1dGhvcl9pZClcbiAgICAgICAgICAgIC5zaW5nbGUoKVxuXG4gICAgICAgICBpZiAoZXJyb3IgJiYgc3RhdHVzICE9PSA0MDYpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBzZXRVc2VybmFtZShkYXRhLnVzZXJuYW1lKVxuICAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgIC8vYWxlcnQoJ0Vycm9yIGxvYWRpbmcgdXNlciBkYXRhIScpXG4gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH1cbiAgIH1cblxuXG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZXNXcmFwcGVyXCI+XG4gICAgICAgICA8c3BhbiBjbGFzcz17cHJvcHMuZGFya01vZGUgPyBhcnRpY2xlc1RpdGxlRGFyayA6IGFydGljbGVzVGl0bGV9PkFSVElDTEVTPC9zcGFuPlxuICAgICAgICAge2RhdGEgPyBkYXRhLm1hcChhcnRpY2xlID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYXJ0aWNsZXMvJyArIGFydGljbGUuaWR9IGtleT17YXJ0aWNsZS5pZH0+XG4gICAgICAgICAgICAgICB7cHJvcHMuZGFya01vZGUgPyBcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlQm94RGFya1wiPiBcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhcnRpY2xlSWNvbkltYWdlXCIgc3JjPXthcnRpY2xlLnNvdXJjZX0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFydGljbGVJY29uVGl0bGVcIj57YXJ0aWNsZS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXJ0aWNsZUF1dGhvclwiPldyaXR0ZW4gYnkgPFVzZXJuYW1lQ29tIGlkPXthcnRpY2xlLmF1dGhvcl9pZH0gLz4gPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGVCb3hcIj4gXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYXJ0aWNsZUljb25JbWFnZVwiIHNyYz17YXJ0aWNsZS5zb3VyY2V9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcnRpY2xlSWNvblRpdGxlXCI+e2FydGljbGUudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFydGljbGVBdXRob3JcIj5Xcml0dGVuIGJ5IDxVc2VybmFtZUNvbSBpZD17YXJ0aWNsZS5hdXRob3JfaWR9IC8+IDwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICkpIDogPD48Lz59XG4gICAgICA8L2Rpdj5cbiAgIClcblxufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAvLyAgICBjb25zdCBzdXBhYmFzZUNsaWVudCA9IHVzZVN1cGFiYXNlQ2xpZW50KClcbiAgIC8vICAgIGNvbnN0IHJlcyA9IGF3YWl0IHN1cGFiYXNlQ2xpZW50XG4gICAvLyAgICAgICAgICAuZnJvbSgnYXJ0aWNsZXMnKVxuICAgLy8gICAgICAgICAgLnNlbGVjdCgnKicpXG4gICAvLyAgICAgICAgICBzZXREYXRhKGRhdGEuanNvbigpKVxuICAgLy8gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgIC8vICAgIHJldHVybiB7XG4gICAvLyAgICAgICBwcm9wczoge2FydGljbGVzOiBkYXRhfVxuICAgLy8gICAgfVxuICAgLy8gIH1cblxuXG4gICAvLyA8ZGl2IHN0eWxlID0ge3ttaW5IZWlnaHQ6ICc4MS4zdmgnfX0gaWQ9XCJsaXN0XCI+XG4gICAvLyAgICAgICB7ZGF0YSA/IGRhdGEubWFwKGFydGljbGUgPT4gKFxuICAgLy8gICAgICAgICAgPExpbmsgaHJlZj17Jy9hcnRpY2xlcy8nICsgYXJ0aWNsZS5pZH0ga2V5PXthcnRpY2xlLmlkfT5cbiAgIC8vICAgICAgICAgICAgIDx1bCBjbGFzcz0ndXNlcic+XG4gICAvLyAgICAgICAgICAgICAgICA8YT5cbiAgIC8vICAgICAgICAgICAgICAgICAgIFRpdGxlIDoge2FydGljbGUudGl0bGV9XG4gICAvLyAgICAgICAgICAgICAgICAgICA8bGk+Q29udGVudCA6IHthcnRpY2xlLmNvbnRlbnR9PC9saT5cbiAgIC8vICAgICAgICAgICAgICAgICAgIDxsaT5BdXRob3IgOiB7YXJ0aWNsZS5hdXRob3JfaWR9PC9saT5cbiAgIC8vICAgICAgICAgICAgICAgIDwvYT5cbiAgIC8vICAgICAgICAgICAgIDwvdWw+XG4gICAvLyAgICAgICAgICA8L0xpbms+XG4gICAvLyAgICAgICApKSA6IDw+PC8+fVxuICAgLy8gICAgPC9kaXY+XG4iXSwibmFtZXMiOlsidXNlVXNlciIsInVzZVN1cGFiYXNlQ2xpZW50IiwidXNlU2Vzc2lvbiIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJuYW1lQ29tIiwiQXJ0aWNsZXMiLCJwcm9wcyIsInNlc3Npb24iLCJzdXBhYmFzZUNsaWVudCIsImRhdGEiLCJzZXREYXRhIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImxvYWREYXRhIiwiYXJ0aWNsZXMiLCJmcm9tIiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJsb2FkVXNlcm5hbWUiLCJhdXRob3JfaWQiLCJlcnJvciIsInN0YXR1cyIsInN1cGFiYXNlIiwiZXEiLCJzaW5nbGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3MiLCJzcGFuIiwiZGFya01vZGUiLCJhcnRpY2xlc1RpdGxlRGFyayIsImFydGljbGVzVGl0bGUiLCJtYXAiLCJhcnRpY2xlIiwiaHJlZiIsImlkIiwiaW1nIiwic3JjIiwic291cmNlIiwicCIsInRpdGxlIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/index.js\n"));

/***/ })

});