"use strict";
(() => {
var exports = {};
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 4335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Article),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/supabase.js
var supabase = __webpack_require__(7401);
// EXTERNAL MODULE: ./Components/Gravatar.jsx
var Gravatar = __webpack_require__(9268);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@supabase/auth-helpers-react"
var auth_helpers_react_ = __webpack_require__(6749);
// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(2885);
;// CONCATENATED MODULE: ./Components/UsernameCom.jsx




function UsernameCom({ id  }) {
    const supabase = (0,auth_helpers_react_.useSupabaseClient)();
    const { 0: username , 1: setUsername  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        getUsername();
    });
    async function getUsername() {
        try {
            let { data , error , status  } = await supabase.from("profiles").select("username").eq("id", id).single();
            if (error && status !== 406) {
                throw error;
            }
            if (data) {
                setUsername(data.username);
            }
        } catch (error1) {
            //alert('Error loading user data!')
            console.log(error1);
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        class: "commentUsername",
        children: username
    });
} // <img class="round" src={"https://www.gravatar.com/avatar/" + MD5(session.user.email) + "?s=150"}></img>

;// CONCATENATED MODULE: ./pages/articles/[id].js







async function getServerSideProps({ params  }) {
    const { data: post , error  } = await supabase/* default.from */.Z.from("articles").select("*").eq("id", params.id).single();
    if (error) throw new Error(error.message);
    return {
        props: {
            post
        }
    };
}
function Article({ post  }) {
    const session = (0,auth_helpers_react_.useSession)();
    const { 0: comments , 1: setComments  } = (0,external_react_.useState)();
    const { 0: char1 , 1: setChar1  } = (0,external_react_.useState)("0 (100 max)");
    const { 0: char2 , 1: setChar2  } = (0,external_react_.useState)("0 (1000 max)");
    const { 0: newCom , 1: setNewCom  } = (0,external_react_.useState)();
    function countChar(val) {
        console.log(val);
        var str = "" + val;
        var len = str.length;
        console.log(len);
        return len;
    }
    (0,external_react_.useEffect)(()=>{
        async function loadComments() {
            const { data: comments  } = await supabase/* default.from */.Z.from("comments").select("*").eq("article_id", post.id).order("created_at", {
                ascending: false
            });
            setComments(comments);
        }
        loadComments();
    });
    async function deleteComment({ id  }) {
        try {
            const { data  } = await supabase/* default.from */.Z.from("comments").delete().eq("id", id);
            alert("Your comment was deleted !");
        } catch (error) {
            console.log(error);
        }
    }
    async function postComment() {
        try {
            const { data  } = await supabase/* default.from */.Z.from("comments").insert({
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
    }
    if (session) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                minHeight: "81.3vh"
            },
            class: "articleWrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    class: "articleTitle",
                    children: post.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "articleImage",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: post.source,
                        class: "articleImg",
                        style: {
                            width: "600px",
                            height: "600px"
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "articleContent",
                    children: [
                        " ",
                        post.content,
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "globalWrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: "commentWrapper",
                            children: comments ? comments.map((comment1)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: comment1.author_id === session.user.id ? "commentsAuthor" : "comments",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            class: "commentImage",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Gravatar/* default */.Z, {
                                                email: comment1.author_email
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "commentContent",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(UsernameCom, {
                                                    id: comment1.author_id
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: comment1.content
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    class: "commentDate",
                                                    children: new Date(comment1.created_at).getDate() + "/" + (new Date(comment1.created_at).getMonth() + 1) + "/" + new Date(comment1.created_at).getFullYear() + " | " + (new Date(comment1.created_at).getHours() + 1) + ":" + new Date(comment1.created_at).getMinutes()
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                comment1.author_id === session.user.id ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: ()=>deleteComment(comment1),
                                                    class: "commentsAuthorEditImage",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "https://cdn-icons-png.flaticon.com/512/4662/4662653.png"
                                                    })
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                            ]
                                        })
                                    ]
                                }, comment1.id)) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "writeCommentWrapper",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    value: newCom || "",
                                    onChange: (e)=>setNewCom(e.target.value),
                                    class: "writeComment"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>postComment(),
                                    class: "submitForm",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                minHeight: "81.3vh"
            },
            class: "articleWrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    class: "articleTitle",
                    children: post.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "articleImage",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: post.source,
                        class: "articleImg",
                        style: {
                            width: "600px",
                            height: "600px"
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "articleContent",
                    children: [
                        " ",
                        post.content,
                        " "
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "commentWrapper",
                    children: comments ? comments.map((comment1)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "comments",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "commentImage",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Gravatar/* default */.Z, {
                                        email: comment1.author_email
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: "commentContent",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(UsernameCom, {
                                            id: comment1.author_id
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: comment1.content
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            class: "commentDate",
                                            children: new Date(comment1.created_at).getSeconds()
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                })
                            ]
                        }, comment1.id)) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "writeComment"
                }),
                comment.author_id === session.user.id ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    class: "commentsAuthorEditImage",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://cdn-icons-png.flaticon.com/512/3756/3756522.png"
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
            ]
        });
    }
}
{}

/***/ }),

/***/ 7401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)("http://localhost:8000", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE"));


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
var __webpack_exports__ = __webpack_require__.X(0, [268], () => (__webpack_exec__(4335)));
module.exports = __webpack_exports__;

})();