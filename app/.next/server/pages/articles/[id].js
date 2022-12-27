"use strict";
(() => {
var exports = {};
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 9882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Article),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7401);
/* harmony import */ var _Components_Gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9268);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6749);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_UsernameCom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9678);







async function getServerSideProps({ params  }) {
    const { data: post , error  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].from */ .Z.from("articles").select("*").eq("id", params.id).single();
    if (error) throw new Error(error.message);
    return {
        props: {
            post
        }
    };
}
function Article({ post  }) {
    const session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: newCom , 1: setNewCom  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: editing , 1: setEditing  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: idEdit , 1: setIdEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    function countChar(val) {
        console.log(val);
        var str = "" + val;
        var len = str.length;
        console.log(len);
        return len;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        async function loadComments() {
            const { data: comments  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].from */ .Z.from("comments").select("*").eq("article_id", post.id).order("created_at", {
                ascending: false
            });
            setComments(comments);
        }
        loadComments();
    });
    async function deleteComment({ id  }) {
        try {
            const { data  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].from */ .Z.from("comments").delete().eq("id", id);
            alert("Your comment was deleted !");
        } catch (error) {
            console.log(error);
        }
    }
    async function postComment() {
        if (newCom) {
            try {
                await _utils_supabase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].from */ .Z.from("comments").insert({
                    author_id: session.user.id,
                    content: newCom,
                    created_at: new Date().toISOString(),
                    article_id: post.id,
                    author_email: session.user.email
                });
            } catch (error) {
                console.log(error);
            }
            setNewCom(null);
        } else {
            alert("Your comment cannot be empty !");
        }
    }
    async function editComment({ content , id  }) {
        setEditing(true);
        setNewCom(content);
        setIdEdit(id);
    }
    async function postEditedComment() {
        if (newCom) {
            try {
                const updates = {
                    content: newCom
                };
                let { error  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_1__/* ["default"].from */ .Z.from("comments").upsert({
                    id: idEdit,
                    content: newCom
                });
            } catch (error1) {
                console.log(error1);
            }
            setNewCom(null);
            setEditing(false);
        } else {
            alert("Your comment cannot be empty !");
        }
    }
    if (session) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                minHeight: "81.3vh"
            },
            class: "articleWrapper",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    class: "articleTitle",
                    children: post.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "articleImage",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: post.source,
                        class: "articleImg",
                        style: {
                            width: "600px",
                            height: "600px"
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    class: "articleContent",
                    children: [
                        " ",
                        post.content,
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    class: "globalWrapper",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "commentWrapper",
                            children: comments ? comments.map((comment)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: comment.author_id === session.user.id ? "commentsAuthor" : "comments",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "commentImage",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Gravatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                email: comment.author_email
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            class: "commentContent",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    class: "commentUsername",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_UsernameCom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        id: comment.author_id
                                                    })
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: comment.content
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    class: "commentDate",
                                                    children: new Date(comment.created_at).getDate() + "/" + (new Date(comment.created_at).getMonth() + 1) + "/" + new Date(comment.created_at).getFullYear() + " | " + (new Date(comment.created_at).getHours() + 1) % 24 + ":" + new Date(comment.created_at).getMinutes()
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                comment.author_id === session.user.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>deleteComment(comment),
                                                    class: "commentsAuthorEditImage",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "https://cdn-icons-png.flaticon.com/512/4662/4662653.png"
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                                comment.author_id === session.user.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>editComment(comment),
                                                    class: "commentsAuthorEditImage",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "https://cdn-icons-png.flaticon.com/512/3756/3756522.png"
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                            ]
                                        })
                                    ]
                                }, comment.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            class: "writeCommentWrapper",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    placeholder: "Your comment...",
                                    value: newCom || "",
                                    onChange: (e)=>setNewCom(e.target.value),
                                    class: "writeComment"
                                }),
                                editing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>postEditedComment(),
                                    class: "submitForm",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Edit comment"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>postComment(),
                                    class: "submitForm",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Post comment"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                minHeight: "81.3vh"
            },
            class: "articleWrapper",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    class: "articleTitle",
                    children: post.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "articleImage",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: post.source,
                        class: "articleImg",
                        style: {
                            width: "600px",
                            height: "600px"
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    class: "articleContent",
                    children: [
                        " ",
                        post.content,
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    class: "globalWrapper",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "commentWrapper",
                            children: comments ? comments.map((comment)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "comments",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "commentImage",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Gravatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                email: comment.author_email
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            class: "commentContent",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_UsernameCom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    id: comment.author_id
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: comment.content
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    class: "commentDate",
                                                    children: new Date(comment.created_at).getDate() + "/" + (new Date(comment.created_at).getMonth() + 1) + "/" + new Date(comment.created_at).getFullYear() + " | " + (new Date(comment.created_at).getHours() + 1) + ":" + new Date(comment.created_at).getMinutes()
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                            ]
                                        })
                                    ]
                                }, comment.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            class: "writeCommentWrapper",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    disabled: true,
                                    value: newCom || "",
                                    onChange: (e)=>setNewCom(e.target.value),
                                    class: "writeComment"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    class: "submitFormDisabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Post comment"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
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

/***/ 616:
/***/ ((module) => {

module.exports = require("crypto-js/md5");

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
var __webpack_exports__ = __webpack_require__.X(0, [268,678], () => (__webpack_exec__(9882)));
module.exports = __webpack_exports__;

})();