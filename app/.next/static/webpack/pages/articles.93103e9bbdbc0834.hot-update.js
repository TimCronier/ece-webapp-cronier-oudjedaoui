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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Articles; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_UsernameCom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/UsernameCom */ \"./Components/UsernameCom.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Articles(props) {\n    var _this = this;\n    _s();\n    var session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    var supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), username = ref1[0], setUsername = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        function loadData() {\n            return _loadData.apply(this, arguments);\n        }\n        function _loadData() {\n            _loadData = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var ref, articles;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                supabaseClient.from(\"articles\").select(\"*\").order(\"created_at\", {\n                                    ascending: false\n                                })\n                            ];\n                        case 1:\n                            ref = _state.sent(), articles = ref.data;\n                            setData(articles);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _loadData.apply(this, arguments);\n        }\n        loadData();\n    });\n    function loadUsername(_) {\n        return _loadUsername.apply(this, arguments);\n    }\n    function _loadUsername() {\n        _loadUsername = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(param) {\n            var author_id, ref, data, _$error, status, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        author_id = param.author_id;\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            supabase.from(\"profiles\").select(\"username\").eq(\"id\", author_id).single()\n                        ];\n                    case 2:\n                        ref = _state.sent(), data = ref.data, _$error = ref.error, status = ref.status;\n                        if (_$error && status !== 406) {\n                            throw _$error;\n                        }\n                        if (data) {\n                            setUsername(data.username);\n                        }\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        //alert('Error loading user data!')\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _loadUsername.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"articlesWrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"articlesTitle\",\n                children: \"ARTICLES\"\n            }, void 0, false, {\n                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                lineNumber: 51,\n                columnNumber: 10\n            }, this),\n            data ? data.map(function(article) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/articles/\" + article.id,\n                    children: props.darkMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"articleBoxDark\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                class: \"articleIconImage\",\n                                src: article.source\n                            }, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"articleIconTitle\",\n                                children: article.title\n                            }, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"articleAuthor\",\n                                children: [\n                                    \"Written by \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_UsernameCom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        id: article.author_id\n                                    }, void 0, false, {\n                                        fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 55\n                                    }, _this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 16\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"articleBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                class: \"articleIconImage\",\n                                src: article.source\n                            }, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"articleIconTitle\",\n                                children: article.title\n                            }, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"articleAuthor\",\n                                children: [\n                                    \"Written by \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_UsernameCom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        id: article.author_id\n                                    }, void 0, false, {\n                                        fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 55\n                                    }, _this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 16\n                    }, _this)\n                }, article.id, false, {\n                    fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, _this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/suptim/Documents/cheval/ece-webapp-cronier-oudjedaoui/app/pages/articles/index.js\",\n        lineNumber: 50,\n        columnNumber: 7\n    }, this);\n} // export const getStaticProps = async () => {\n //    const supabaseClient = useSupabaseClient()\n //    const res = await supabaseClient\n //          .from('articles')\n //          .select('*')\n //          setData(data.json())\n //    const data = await res.json()\n //    return {\n //       props: {articles: data}\n //    }\n //  }\n // <div style = {{minHeight: '81.3vh'}} id=\"list\">\n //       {data ? data.map(article => (\n //          <Link href={'/articles/' + article.id} key={article.id}>\n //             <ul class='user'>\n //                <a>\n //                   Title : {article.title}\n //                   <li>Content : {article.content}</li>\n //                   <li>Author : {article.author_id}</li>\n //                </a>\n //             </ul>\n //          </Link>\n //       )) : <></>}\n //    </div>\n_s(Articles, \"DCQA1v8yoUn99wwisLVCYaAKOcc=\", false, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient\n    ];\n});\n_c = Articles;\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxjQUFjO0NBQ2QsZ0NBQWdDO0NBQ2hDLE9BQU87Q0FDUCxLQUFLO0NBR0wsa0RBQWtEO0NBQ2xELHNDQUFzQztDQUN0QyxvRUFBb0U7Q0FDcEUsZ0NBQWdDO0NBQ2hDLHFCQUFxQjtDQUNyQiw0Q0FBNEM7Q0FDNUMseURBQXlEO0NBQ3pELDBEQUEwRDtDQUMxRCxzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsWUFBWTtHQWhHUzdCLFFBQVE7O1FBQ2JMLG9FQUFVO1FBQ0hELDJFQUFpQjs7O0FBRm5CTSxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGVzL2luZGV4LmpzPzQxOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVXNlciwgdXNlU3VwYWJhc2VDbGllbnQsIHVzZVNlc3Npb24gfSBmcm9tICdAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFVzZXJuYW1lQ29tIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvVXNlcm5hbWVDb20nXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZXMocHJvcHMpIHtcbiAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKClcbiAgIGNvbnN0IHN1cGFiYXNlQ2xpZW50ID0gdXNlU3VwYWJhc2VDbGllbnQoKVxuICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKVxuICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgpXG5cblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xuICAgICAgICAgY29uc3QgeyBkYXRhOiBhcnRpY2xlcyB9ID0gYXdhaXQgc3VwYWJhc2VDbGllbnRcbiAgICAgICAgICAgIC5mcm9tKCdhcnRpY2xlcycpXG4gICAgICAgICAgICAuc2VsZWN0KCcqJylcbiAgICAgICAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgICAgICAgc2V0RGF0YShhcnRpY2xlcylcbiAgICAgIH1cbiAgICAgIGxvYWREYXRhKClcblxuICAgfSlcblxuICAgYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJuYW1lKHsgYXV0aG9yX2lkIH0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICBsZXQgeyBkYXRhLCBlcnJvciwgc3RhdHVzIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcbiAgICAgICAgICAgIC5zZWxlY3QoJ3VzZXJuYW1lJylcbiAgICAgICAgICAgIC5lcSgnaWQnLCBhdXRob3JfaWQpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAgaWYgKGVycm9yICYmIHN0YXR1cyAhPT0gNDA2KSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgfVxuXG4gICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgc2V0VXNlcm5hbWUoZGF0YS51c2VybmFtZSlcbiAgICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAvL2FsZXJ0KCdFcnJvciBsb2FkaW5nIHVzZXIgZGF0YSEnKVxuICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICB9XG5cblxuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImFydGljbGVzV3JhcHBlclwiPlxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcnRpY2xlc1RpdGxlXCI+QVJUSUNMRVM8L3NwYW4+XG4gICAgICAgICB7ZGF0YSA/IGRhdGEubWFwKGFydGljbGUgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9hcnRpY2xlcy8nICsgYXJ0aWNsZS5pZH0ga2V5PXthcnRpY2xlLmlkfT5cbiAgICAgICAgICAgICAgIHtwcm9wcy5kYXJrTW9kZSA/IFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGVCb3hEYXJrXCI+IFxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImFydGljbGVJY29uSW1hZ2VcIiBzcmM9e2FydGljbGUuc291cmNlfT48L2ltZz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXJ0aWNsZUljb25UaXRsZVwiPnthcnRpY2xlLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhcnRpY2xlQXV0aG9yXCI+V3JpdHRlbiBieSA8VXNlcm5hbWVDb20gaWQ9e2FydGljbGUuYXV0aG9yX2lkfSAvPiA8L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZUJveFwiPiBcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhcnRpY2xlSWNvbkltYWdlXCIgc3JjPXthcnRpY2xlLnNvdXJjZX0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFydGljbGVJY29uVGl0bGVcIj57YXJ0aWNsZS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXJ0aWNsZUF1dGhvclwiPldyaXR0ZW4gYnkgPFVzZXJuYW1lQ29tIGlkPXthcnRpY2xlLmF1dGhvcl9pZH0gLz4gPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgKSkgOiA8PjwvPn1cbiAgICAgIDwvZGl2PlxuICAgKVxuXG59XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgIC8vICAgIGNvbnN0IHN1cGFiYXNlQ2xpZW50ID0gdXNlU3VwYWJhc2VDbGllbnQoKVxuICAgLy8gICAgY29uc3QgcmVzID0gYXdhaXQgc3VwYWJhc2VDbGllbnRcbiAgIC8vICAgICAgICAgIC5mcm9tKCdhcnRpY2xlcycpXG4gICAvLyAgICAgICAgICAuc2VsZWN0KCcqJylcbiAgIC8vICAgICAgICAgIHNldERhdGEoZGF0YS5qc29uKCkpXG4gICAvLyAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgLy8gICAgcmV0dXJuIHtcbiAgIC8vICAgICAgIHByb3BzOiB7YXJ0aWNsZXM6IGRhdGF9XG4gICAvLyAgICB9XG4gICAvLyAgfVxuXG5cbiAgIC8vIDxkaXYgc3R5bGUgPSB7e21pbkhlaWdodDogJzgxLjN2aCd9fSBpZD1cImxpc3RcIj5cbiAgIC8vICAgICAgIHtkYXRhID8gZGF0YS5tYXAoYXJ0aWNsZSA9PiAoXG4gICAvLyAgICAgICAgICA8TGluayBocmVmPXsnL2FydGljbGVzLycgKyBhcnRpY2xlLmlkfSBrZXk9e2FydGljbGUuaWR9PlxuICAgLy8gICAgICAgICAgICAgPHVsIGNsYXNzPSd1c2VyJz5cbiAgIC8vICAgICAgICAgICAgICAgIDxhPlxuICAgLy8gICAgICAgICAgICAgICAgICAgVGl0bGUgOiB7YXJ0aWNsZS50aXRsZX1cbiAgIC8vICAgICAgICAgICAgICAgICAgIDxsaT5Db250ZW50IDoge2FydGljbGUuY29udGVudH08L2xpPlxuICAgLy8gICAgICAgICAgICAgICAgICAgPGxpPkF1dGhvciA6IHthcnRpY2xlLmF1dGhvcl9pZH08L2xpPlxuICAgLy8gICAgICAgICAgICAgICAgPC9hPlxuICAgLy8gICAgICAgICAgICAgPC91bD5cbiAgIC8vICAgICAgICAgIDwvTGluaz5cbiAgIC8vICAgICAgICkpIDogPD48Lz59XG4gICAvLyAgICA8L2Rpdj5cbiJdLCJuYW1lcyI6WyJ1c2VVc2VyIiwidXNlU3VwYWJhc2VDbGllbnQiLCJ1c2VTZXNzaW9uIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlcm5hbWVDb20iLCJBcnRpY2xlcyIsInByb3BzIiwic2Vzc2lvbiIsInN1cGFiYXNlQ2xpZW50IiwiZGF0YSIsInNldERhdGEiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwibG9hZERhdGEiLCJhcnRpY2xlcyIsImZyb20iLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsImxvYWRVc2VybmFtZSIsImF1dGhvcl9pZCIsImVycm9yIiwic3RhdHVzIiwic3VwYWJhc2UiLCJlcSIsInNpbmdsZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzcyIsInNwYW4iLCJtYXAiLCJhcnRpY2xlIiwiaHJlZiIsImlkIiwiZGFya01vZGUiLCJpbWciLCJzcmMiLCJzb3VyY2UiLCJwIiwidGl0bGUiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/index.js\n"));

/***/ })

});