"use strict";
(() => {
var exports = {};
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 4393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contacts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./Components/zebi.jsx

const zebi = (username)=>{
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            "hello ",
            username
        ]
    });
};
/* harmony default export */ const Components_zebi = ((/* unused pure expression or super */ null && (zebi)));

;// CONCATENATED MODULE: ./pages/contacts.js


function Contacts() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "list",
        style: {
            minHeight: "81.3vh"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Contacts"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("zebi", {
                        username: "wsh",
                        children: "d"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            "Timoth\xe9e Cronier - ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "timothee.cronier@edu.ece.fr"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            "Sami Ouedjani - ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "sami.ouedjani@edu.ece.fr"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


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
var __webpack_exports__ = (__webpack_exec__(4393));
module.exports = __webpack_exports__;

})();