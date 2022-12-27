"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./Components/Footer.jsx

function Footer(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        class: !props.darkMode ? "darkText darkBg footDark" : " footLight lightText lightBg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Site cr\xe9\xe9 par Timoth\xe9e Cronier et Sami Ouedjani"
        })
    });
}
/* harmony default export */ const Components_Footer = (Footer);

// EXTERNAL MODULE: external "@supabase/auth-helpers-react"
var auth_helpers_react_ = __webpack_require__(6749);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(2885);
;// CONCATENATED MODULE: ./Components/LoginUsername.jsx




function LoginUsername({ session , a  }) {
    const supabase = useSupabaseClient();
    const user = useUser();
    const { 0: loading , 1: setLoading  } = useState(true);
    const { 0: username , 1: setUsername  } = useState(null);
    const { 0: website , 1: setWebsite  } = useState(null);
    const { 0: avatar_url , 1: setAvatarUrl  } = useState(null);
    useEffect(()=>{
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
            alert("Error loading user data!");
            console.log(error1);
        } finally{
            setLoading(false);
        }
    }
    if (session) return /*#__PURE__*/ _jsxs("p", {
        children: [
            "Hello ",
            username,
            " !"
        ]
    });
    else return /*#__PURE__*/ _jsx("p", {
        children: "salut"
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Components/Navbar.jsx


function Navbar(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                class: !props.darkMode ? "anim-underline-fx-Dark" : "anim-underline-fx",
                href: "/",
                children: " HOME "
            }),
            "    |",
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                class: !props.darkMode ? "anim-underline-fx-Dark" : "anim-underline-fx",
                href: "/createArticle",
                children: " CREATE ARTICLE "
            }),
            "    |",
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                class: !props.darkMode ? "anim-underline-fx-Dark" : "anim-underline-fx",
                href: "/articles",
                children: " ARTICLES "
            }),
            "    |",
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                class: !props.darkMode ? "anim-underline-fx-Dark" : "anim-underline-fx",
                href: "/contacts",
                children: " CONTACTS "
            })
        ]
    });
}

;// CONCATENATED MODULE: ./Components/Header.jsx
/* @refresh reset */ 





function Header(props) {
    const session = (0,auth_helpers_react_.useSession)();
    const supabase = (0,auth_helpers_react_.useSupabaseClient)();
    const { 0: user , 1: setUser  } = (0,external_react_.useState)();
    const router = (0,router_.useRouter)();
    async function getUsername() {
        try {
            const { data: username  } = await supabase.from("profiles").select("username").eq("id", session.user.id).single();
            setUser(username.username);
        } catch (error) {
            console.log(error);
        }
    }
    (0,external_react_.useEffect)(()=>{
        getUsername();
        console.log("a");
    });
    async function goToLogin() {
        router.push("/login");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        class: "headerWrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                class: "headerTitle",
                children: "PUNCHOLOGUE"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                class: "headerLogo",
                src: "https://cdn-icons-png.flaticon.com/512/1021/1021799.png",
                alt: "Doctor icon"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "navbarWrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
                    darkMode: props.darkMode
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "accountWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>goToLogin(),
                        class: "headerButton",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            style: {
                                height: "50px",
                                width: "50px"
                            },
                            src: "https://img.icons8.com/ios-glyphs/512/user.png"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        class: "headerUsername",
                        children: session ? user : "Login"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: props.toggleDarkMode,
                        style: {
                            width: "50px",
                            height: "50px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: !props.darkMode ? "https://cdn-icons-png.flaticon.com/512/786/786385.png" : "https://cdn-icons-png.flaticon.com/512/141/141977.png"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Components_Header = (Header);

;// CONCATENATED MODULE: external "@supabase/auth-helpers-nextjs"
const auth_helpers_nextjs_namespaceObject = require("@supabase/auth-helpers-nextjs");
;// CONCATENATED MODULE: ./Components/UserContext.jsx



const UserContext = /*#__PURE__*/ (0,external_react_.createContext)();
/* harmony default export */ const Components_UserContext = ((/* unused pure expression or super */ null && (UserContext)));
function UserContextProvider({ children  }) {
    const supabaseClient = (0,auth_helpers_react_.useSupabaseClient)();
    const supabaseUser = (0,auth_helpers_react_.useUser)();
    const { 0: user , 1: setUser  } = (0,external_react_.useState)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(function() {
        if (supabaseUser) {
            setUser(supabaseUser);
            setLoading(false);
        }
    }, [
        supabaseUser
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(UserContext.Provider, {
        value: {
            user: user,
            username: async function() {
                let { data , error , status  } = await supabase.from("profiles").select("*").eq("id", user.id).single();
                return data.username;
            },
            logout: async function() {
                await supabaseClient.auth.signOut();
                setUser(null);
            }
        },
        children: children
    });
}

;// CONCATENATED MODULE: ./pages/_app.js








function MyApp({ Component , pageProps  }) {
    const { 0: supabase  } = (0,external_react_.useState)(()=>(0,auth_helpers_nextjs_namespaceObject.createBrowserSupabaseClient)());
    const { 0: darkMode , 1: setDarkMode  } = (0,external_react_.useState)(true);
    function toggleDarkMode() {
        setDarkMode((prevDarkMode)=>!prevDarkMode);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        class: !darkMode ? "darkText darkBg" : "lightText lightBg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Punchologue"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(auth_helpers_react_.SessionContextProvider, {
                supabaseClient: supabase,
                initialSession: pageProps.initialSession,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserContextProvider, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Components_Header, {
                                darkMode: darkMode,
                                toggleDarkMode: toggleDarkMode
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: !darkMode ? "darkText darkBg" : "lightText lightBg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps,
                                darkMode: darkMode
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Components_Footer, {
                            darkMode: darkMode
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6749:
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ 2885:
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(8799)));
module.exports = __webpack_exports__;

})();