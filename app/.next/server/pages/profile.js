"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 7317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Profile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@supabase/auth-helpers-react"
var auth_helpers_react_ = __webpack_require__(6749);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./Components/Gravatar.jsx
var Gravatar = __webpack_require__(9268);
;// CONCATENATED MODULE: ./Components/Account.jsx




function Account({ session  }) {
    const supabase = (0,auth_helpers_react_.useSupabaseClient)();
    const user = (0,auth_helpers_react_.useUser)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: username , 1: setUsername  } = (0,external_react_.useState)(null);
    const { 0: website , 1: setWebsite  } = (0,external_react_.useState)(null);
    const { 0: avatar_url , 1: setAvatarUrl  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        getProfile();
    }, [
        session
    ]);
    async function getProfile() {
        try {
            setLoading(true);
            let { data , error , status  } = await supabase.from("profiles").select("username").eq("id", user.id).single();
            if (error && status !== 406) {
                throw error;
            }
            if (data) {
                setUsername(data.username);
            }
        } catch (error1) {
            //alert('Error loading user data!')
            console.log(error1);
        } finally{
            setLoading(false);
        }
    }
    async function updateProfile({ username , website , avatar_url  }) {
        try {
            setLoading(true);
            const updates = {
                id: user.id,
                username,
                updated_at: new Date().toISOString()
            };
            let { error  } = await supabase.from("profiles").upsert(updates);
            if (error) throw error;
            alert("Profile updated!");
        } catch (error1) {
            alert("Error updating the data!");
            console.log(error1);
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        class: "form",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "email",
                children: "Email : "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "email",
                value: session.user.email,
                disabled: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "username",
                children: "Username : "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                value: username || "",
                onChange: (e)=>setUsername(e.target.value)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "website",
                children: "Message : "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                value: website || "",
                onChange: (e)=>setWebsite(e.target.value)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    class: "submitForm",
                    onClick: ()=>updateProfile({
                            username,
                            website,
                            avatar_url
                        }),
                    disabled: loading,
                    children: loading ? "Loading ..." : "Update"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    class: "submitForm",
                    onClick: ()=>supabase.auth.signOut(),
                    children: "Sign Out"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Gravatar/* default */.Z, {
                email: session.user.email
            })
        ]
    });
} // <img class="round" src={"https://www.gravatar.com/avatar/" + MD5(session.user.email) + "?s=150"}></img>

;// CONCATENATED MODULE: ./pages/profile.js





function Profile() {
    const router = (0,router_.useRouter)();
    const session = (0,auth_helpers_react_.useSession)();
    const supabaseClient = (0,auth_helpers_react_.useSupabaseClient)();
    (0,external_react_.useEffect)(()=>{
        if (!session) router.push("/login");
        async function loadData() {
            if (session) {
                const { data: data1 , error  } = await supabaseClient.from("profiles").select("email").eq("id", session.user.id).single();
                if (error) throw error;
                if (!data1.email) {
                    await supabaseClient.from("profiles").update({
                        email: session.user.email
                    }).eq("id", session.user.id);
                }
            }
        }
        loadData();
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        style: {
            padding: "50px 0 100px 0"
        },
        children: [
            session ? /*#__PURE__*/ jsx_runtime_.jsx(Account, {
                session: session
            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "caca"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: async ()=>{
                    if (data.email) alert("caca pas null");
                    else alert("caca null");
                },
                children: "zebi"
            })
        ]
    });
}


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
var __webpack_exports__ = __webpack_require__.X(0, [268], () => (__webpack_exec__(7317)));
module.exports = __webpack_exports__;

})();