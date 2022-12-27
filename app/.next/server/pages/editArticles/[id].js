"use strict";
(() => {
var exports = {};
exports.id = 645;
exports.ids = [645];
exports.modules = {

/***/ 4867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditArticle),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6749);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7401);





async function getServerSideProps({ params  }) {
    const { data: post , error  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_4__/* ["default"].from */ .Z.from("articles").select("*").eq("id", params.id).single();
    if (error) throw new Error(error.message);
    return {
        props: {
            post
        }
    };
}
function EditArticle({ post  }) {
    const session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("You must be connected !");
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("You must be connected !");
    const { 0: source , 1: setSource  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("You must be connected !");
    const { 0: char1 , 1: setChar1  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("0 (100 max)");
    const { 0: char2 , 1: setChar2  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("0 (1000 max)");
    const { 0: ok , 1: setOk  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: first , 1: setFirst  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (session && first) {
            if (session.user.id === post.author_id) {
                setTitle(post.title);
                setContent(post.content);
                setSource(post.source);
                setOk(true);
                setFirst(false);
            } else {
                setTitle("You can't modify an article that isn't yours !");
                setContent("You can't modify an article that isn't yours !");
                setSource("You can't modify an article that isn't yours !");
            }
        }
    });
    async function editArticle() {
        if (content && title && source) {
            try {
                await _utils_supabase__WEBPACK_IMPORTED_MODULE_4__/* ["default"].from */ .Z.from("articles").upsert({
                    id: post.id,
                    content: content,
                    title: title,
                    source: source
                });
                alert("Your article is modified !");
            } catch (error) {
                console.log(error);
            }
            router.push("/profile");
            setContent(null);
            setTitle(null);
            setSource(null);
        } else {
            alert("You must fill every field !");
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        class: "globalWrapper",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            class: "writeCommentWrapper",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        fontSize: "30px",
                        fontWeight: "600"
                    },
                    children: "Title :"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    value: title || "",
                    disabled: !ok,
                    onChange: (e)=>{
                        setChar1(e.target.value.length + " (max 100)");
                        setTitle(e.target.value);
                    },
                    maxlength: "100",
                    class: "writeArticleTitle"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    class: "countChar",
                    children: char1
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        fontSize: "30px",
                        fontWeight: "600"
                    },
                    children: "Content :"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    value: content || "",
                    disabled: !ok,
                    onChange: (e)=>{
                        setChar2(e.target.value.length + " (max 1000)");
                        setContent(e.target.value);
                    },
                    maxlength: "1000",
                    class: "writeArticleContent"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    class: "countChar",
                    children: char2
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        fontSize: "30px",
                        fontWeight: "600"
                    },
                    children: "Image source :"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    value: source || "",
                    disabled: !ok,
                    onChange: (e)=>setSource(e.target.value),
                    class: "writeArticleTitle"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    disabled: !ok,
                    onClick: (e)=>{
                        editArticle();
                    },
                    class: ok ? "submitForm" : "submitFormDisabled",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "EDIT"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 7401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)("https://sdwgogzjpprnyxjqrnua.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkd2dvZ3pqcHBybnl4anFybnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE5MzAwNTcsImV4cCI6MTk4NzUwNjA1N30.6PEfDNipGLEmb9P2-Sbt-qpZJDaT79oH839d9x_bVOM"));


/***/ }),

/***/ 6749:
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ 2885:
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4867));
module.exports = __webpack_exports__;

})();