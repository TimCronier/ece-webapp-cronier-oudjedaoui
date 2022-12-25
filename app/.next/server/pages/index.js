"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./Components/Menu.jsx

function Menu() {
    return /*#__PURE__*/ _jsxs("div", {
        class: "container",
        children: [
            /*#__PURE__*/ _jsx("input", {
                type: "checkbox",
                id: "toggle",
                checked: true
            }),
            /*#__PURE__*/ _jsx("label", {
                class: "button",
                for: "toggle"
            }),
            /*#__PURE__*/ _jsx("nav", {
                class: "nav",
                children: /*#__PURE__*/ _jsxs("ul", {
                    children: [
                        /*#__PURE__*/ _jsx("a", {
                            href: "#",
                            target: "_blank",
                            children: "HOME"
                        }),
                        /*#__PURE__*/ _jsx("a", {
                            href: "#",
                            target: "_blank",
                            children: "ABOUT"
                        }),
                        /*#__PURE__*/ _jsx("a", {
                            href: "#",
                            target: "_blank",
                            children: "CONTACT"
                        }),
                        /*#__PURE__*/ _jsx("a", {
                            href: "#",
                            target: "_blank",
                            children: "ARTICLES"
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const Components_Menu = ((/* unused pure expression or super */ null && (Menu)));

;// CONCATENATED MODULE: ./pages/index.js



function Home() {
    const { 0: box , 1: setBox  } = (0,external_react_.useState)("BOX 1");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "introtext",
                children: "Punchologue est un m\xe9dia traitant toute l'actualit\xe9 dans le milieu du rap fran\xe7ais. "
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "mainbox",
                class: "clearfix",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "box",
                        children: box
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "box",
                        children: "BOX 2"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        class: "box",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setBox((prevState)=>prevState + " caca"),
                                children: " add a caca"
                            }),
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("c", {})
        ]
    });
}


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
var __webpack_exports__ = (__webpack_exec__(3360));
module.exports = __webpack_exports__;

})();