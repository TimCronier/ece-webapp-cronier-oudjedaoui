"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Components/Navbar.jsx


function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            backgroundColor: "rgb(197, 109, 2)"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "wsh",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        class: "anim-underline-fx",
                        href: "/",
                        children: " HOME "
                    }),
                    "    |",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        class: "anim-underline-fx",
                        href: "/about",
                        children: " ABOUT "
                    }),
                    "    |",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        class: "anim-underline-fx",
                        href: "/articles",
                        children: " ARTICLES "
                    }),
                    "    |",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        class: "anim-underline-fx",
                        href: "/contacts",
                        children: " CONTACTS "
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./Components/Footer.jsx

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            children: "Site cr\xe9\xe9 par Timoth\xe9e Cronier et Sami Ouedjani"
        })
    });
}
/* harmony default export */ const Components_Footer = (Footer);

// EXTERNAL MODULE: external "@supabase/auth-helpers-react"
var auth_helpers_react_ = __webpack_require__(6749);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(2885);
;// CONCATENATED MODULE: ./Components/LoginUsername.jsx




function LoginUsername({ session , a  }) {
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
            alert("Error loading user data!");
            console.log(error1);
        } finally{
            setLoading(false);
        }
    }
    if (session) return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        children: [
            "Hello ",
            username,
            " !"
        ]
    });
    else return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "salut"
    });
}

;// CONCATENATED MODULE: ./Components/Header.jsx



function Header({}) {
    const session = (0,auth_helpers_react_.useSession)();
    const supabase = (0,auth_helpers_react_.useSupabaseClient)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            backgroundColor: "rgb(197, 109, 2)"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "headerbanner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        class: "logopunch",
                        src: "https://cdn-icons-png.flaticon.com/512/1021/1021799.png",
                        alt: "Doctor icon"
                    }),
                    "PUNCHOLOGUE"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "username",
                children: !session ? /*#__PURE__*/ jsx_runtime_.jsx("p", {}) : /*#__PURE__*/ jsx_runtime_.jsx(LoginUsername, {
                    session: session
                })
            })
        ]
    });
}
/* harmony default export */ const Components_Header = (Header);

;// CONCATENATED MODULE: ./Components/UserContextOld.jsx


const Context = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext()));
/* harmony default export */ const UserContextOld = ((/* unused pure expression or super */ null && (Context)));
const ContextProvider = ({ children  })=>{
    const { 0: user , 1: setUser  } = useState(null);
    return /*#__PURE__*/ _jsx(Context.Provider, {
        value: {
            user: user,
            login: (user)=>{
                setUser(user);
            },
            logout: ()=>{
                setUser(null);
            }
        },
        children: children
    });
};

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
// import '../styles/globals.css'
// import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'
// import Header from '../Components/Header'
// import { ContextProvider } from '../Components/UserContext'
// function MyApp({ Component, pageProps }) {
//   return (
//     <div>
//       <ContextProvider>
//         <Header />
//         <Navbar />
//         <Component {...pageProps} />
//       </ContextProvider>
//       <Footer />
//     </div>
//   )
// }
// export default MyApp










function MyApp({ Component , pageProps  }) {
    const { 0: supabase  } = (0,external_react_.useState)(()=>(0,auth_helpers_nextjs_namespaceObject.createBrowserSupabaseClient)());
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Punchologue"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(auth_helpers_react_.SessionContextProvider, {
                supabaseClient: supabase,
                initialSession: pageProps.initialSession,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserContextProvider, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Components_Header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Components_Navbar, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Components_Footer, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(9601)));
module.exports = __webpack_exports__;

})();