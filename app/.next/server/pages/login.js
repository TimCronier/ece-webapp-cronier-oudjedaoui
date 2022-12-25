"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 5724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@supabase/auth-ui-react"
const auth_ui_react_namespaceObject = require("@supabase/auth-ui-react");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@supabase/auth-helpers-react"
var auth_helpers_react_ = __webpack_require__(6749);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/login.js





function Login() {
    const router = (0,router_.useRouter)();
    const supabase = (0,auth_helpers_react_.useSupabaseClient)();
    const session = (0,auth_helpers_react_.useSession)();
    (0,external_react_.useEffect)(()=>{
        if (session) router.push("/profile");
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        style: {
            padding: "50px 0 100px 0"
        },
        children: !session ? /*#__PURE__*/ jsx_runtime_.jsx(auth_ui_react_namespaceObject.Auth, {
            supabaseClient: supabase,
            providers: [
                "github"
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "caca"
        })
    });
}


/***/ }),

/***/ 6749:
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5724));
module.exports = __webpack_exports__;

})();