"use strict";
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Gravatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6749);
/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);



function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
async function sameImages() {
    const session = useSession();
    const a = new Image();
    a.crossOrigin = "anonymous";
    const b = new Image();
    b.crossOrigin = "anonymous";
    a.src = "https://www.gravatar.com/avatar/" + MD5(session.user.email);
    b.src = "https://www.gravatar.com/avatar/";
    // might need to wait until a and b have actually loaded, ignoring this for now
    const a_base64 = getBase64Image(a);
    const b_base64 = getBase64Image(b);
    var c = "";
    if (a_base64 === b_base64) c = "Default image";
    else c = "Own image";
    console.log(c);
    return c.toString;
}
function Gravatar({ email  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "https://www.gravatar.com/avatar/" + crypto_js_md5__WEBPACK_IMPORTED_MODULE_1___default()(email),
        class: "round"
    });
}


/***/ })

};
;